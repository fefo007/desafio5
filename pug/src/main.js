const express = require('express')
const {Router}= require('express')
const routerProducts=Router()
const Api = require('./api')
const api = new Api()

routerProducts.use(express.json())
routerProducts.use(express.urlencoded({extended: true}))

routerProducts.get('/',(req,res)=>{
    let completeList=api.getAll()
    res.render("table",{ completeList })
})

routerProducts.post('/',(req,res)=>{
    api.save(req.body)
    res.render("form")
})

module.exports=routerProducts
