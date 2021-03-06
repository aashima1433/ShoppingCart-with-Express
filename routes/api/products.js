const Product = require('../../db').Product
const route = require('express').Router()

route.get('/',(req,res)=>{
    Product.findAll()
       .then((products)=>{
       res.status(200).send(products)
       })
      .catch((err)=>{
         res.status(500).send({
             error: "could not retrive products"
         })
     })
})

route.post('/',(req,res)=>{
      
    if(isNaN(req.body.price)){
     return res.status(403).send({
          error: "Price is not a valid number"
      })
    }

    Product.create({
        name: req.body.name,
        manufacterer: req.body.manufacterer,
        price: parseFloat(req.body.price)
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((error)=>{
        res.status(501).send({
            error: "Error adding products"
        })
    })
})

exports = module.exports = route