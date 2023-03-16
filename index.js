const express = require('express');
const app = express();
const port=3000
 

const admin = require("firebase-admin");

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);

app.get('product /:id' ,(req,res)=>{
    let found =data.find(function(item){
        return item.id === parseInt(req.params.id);
    });
    if (found){
        res.status(200).json(found);
    }else{
        res.sendStatus(404);
    }
});

app.post('product /:id' ,  (req,res)=>{
    let newItem={
        id:newId,
        title:req.body.title,
        order:newOrderNum
    };
    data.push(newItem)
    res.status(201).json(newItem)
});

app.put('product /:id' ,  (req,res)=>{
    let found=data.find(function(item){
        return item.id===parseInt(req.params.id);
    });
    if (found){
        let update={
            id:found.id,
            title:req.body.title,
            order:req.body.order
        };
    res.sendStatus(204);
    }else{
        res.sendStatus(404);
    }
});

app.delete('product /:id' , (req,res)=>{
    let found=data.find(function(item){
        return item.id===parseInt(req.params.id);
    });
    res.sendStatus(204);
});
    
