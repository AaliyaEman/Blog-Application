// console.log('NodeJs First Server')

//ecmascript es5 2015
//var 

// var names = "Ariba" 
 //console.log(names)
// var names = "maria"
// console.log(names)

//let myname = "memon";
//console.log(myname)
//myname = "ariba"
//console.log(myname)

//  const gravity = 9.8 ; 



//es6 let const
// import express from 'express'
// // const express = require('express')
// const app = express()

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// import express from 'express';
// const app = express()
// app.get('/', (req, res) => {
//     res.send('I am Express.js server')
// })
// app.get('/desert', (req, res) => {
//     res.send('here is your desert 🏜')
// })
// app.get('/sand', (req, res) => {
//     res.send('here is your sand ⏳')
// })

// app.post('/nice', (req, res) => {
//     res.send('nice')
// })

// app.listen(7000, () => {
//     console.log("Hello server is listening at http://localhost:7000")
// })


//concatenation
//es5 
// let firstName = "ariba"
// let lastName= "memon"
// // console.log("my name is " + firstName + lastName)

// //es6 template literals
// console.log(`my name is ${firstName} `)

















//26th March
import express from 'express'

const app = express();
app.use(express.json())
app.get('/hello',(req,res) =>{
    res.send('Hello')
})

app.post('/hello',(req,res) =>{
    console.log(req.body)
  
        res.send("Hello ${req.body.name}")
        res.send("Hello ${req.body.role}")
    })

app.listen(7000,() =>{
    console.log('Hello server is listening at http://localhost:7000')
})