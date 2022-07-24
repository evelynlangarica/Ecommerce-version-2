// const { RouterRounded } = require('@material-ui/icons');
// const express = require('express')
// const app = express()
// const mysql= require('mysql')
// const dotenv = require('dotenv');
// const productRoute = require("./routes/product");





// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "#571146Lang",
//     database: "CRUDDataBase"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM CRUDDatabase.product_page", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });



// //END HEREEEE
// // const app = express();
// const port = process.env.PORT || 4000;


// //TRY NEW THING 
// app.use(express.json());
// app.use("/api/products", productRoute)





// app.listen(port, () => console.log(`Server listening on port ${port}`));


const express = require('express');
const db = require('./routes/db')
const cors = require('cors')

const app = express();

const  PORT = 3001;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get/products", (req,res)=>{
db.query("SELECT * FROM CRUDDatabase.product_page", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
}
    );   
});

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
    db.query("SELECT * FROM CRUDDatabase.product_page WHERE id = ?", id, (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    }
    );   
    });

// Route for creating the post
// app.post('/api/create', (req,res)=> {

// const id = req.body.id;
// const img = req.body.img;
// const desc = req.body.desc;
// const price = req.body.price;

// // console.log(id,img,desc,price)

// db.query('INSERT INTO `product_page` (id,img,desc,price) VALUES (?,?,?,?)',[id,img,desc,price], (err,result)=>{
//    if(err) {
//        console.log(err)
//    } 
//    console.log(result)
// }
// );   
// })


app.post('/api/create', (req, res) => {
    const body = req.body;
    res.json(req.body);

    db.query(`
    INSERT INTO product_page(
        id,
        img,
        desc,
        price
       
    ) VALUES(
        @id,
        @ig,
        @desc,
        @price

    )`
        , {
            id: body.id,
            img: body.img,
            desc: body.desc,
            price:body.price
        })

    
    })

// Route for like
// app.post('/api/like/:id',(req,res)=>{

// const id = req.params.id;
// db.query("UPDATE product_page SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
//     console.log(result)
//     }
//     );    
// });

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
    const id = req.params.id;

db.query("DELETE FROM product_page WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } 
})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})