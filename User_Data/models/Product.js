// const mysql = require('mysql');


// const connection= mysql.createConnection({
//     host: "localhost",
//     user: 'root',
//     password:'#571146Lang',
//     database: 'CRUDDataBase'
// });



// connection.connect(err=>{
//     if(err){
//         return err;
//     }
// });

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
// if (err) throw err

// console.log('The solution is: ', rows[0].solution)
// })

// connection.end()








const express = require('express');
const bodyParser = require('body-parser');
var connection  = require('express-myconnection');
var mysql = require('mysql');

const app = express(); 
app.use(bodyParser.json());

app.use(

    connection(mysql,{

        host: 'localhost', //'localhost',
        user: 'root',
        password : '#571146Lang',
        // port : 3306, //port mysql
        database:'CRUDDatabase'

    },'pool')); //or single

   app.post('/add_product',(req,res)=>{

    let {id,img,desc,price,} = req.body;


    if(!id) return res.status(400).json(' id cant be blank');
    if(!img) return res.status(400).json('img cant be blank');

    if(!desc) return res.status(400).json('desc Name cant be blank');
    if(!price) return res.status(400).json('price cant be blank');

    var data={id:id,
              img:img,
            desc:desc,
        price:price};

    
     var query = connection.query("INSERT INTO product_page set ? ",data, 
    function(err, rows)
    {

      if (err){
        //If error
          res.status(400).json('Sorry!!Unable To Add');
          console.log("Error inserting : %s ",err );
         }
     else
      //If success
      res.status(200).json('Book Added Successfully!!')

    });


    });


     app.listen(3001, ()=> {
  console.log(`app is running on port 3000`);
});