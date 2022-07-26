

const express = require('express');
const db = require('./routes/db')
const cors = require('cors')

const app = express();

const  PORT = 3000;
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