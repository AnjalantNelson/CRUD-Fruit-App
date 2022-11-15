//require
const express = require('express')
const app = express()

// ===== Connection to Database ===== //



// ===== MiddleWare ===== //
const fruits = ['apple', 'banana', 'pear']

// ===== routes ===== //
//I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

//Index
app.get('/fruits', (req, res)=>{
    res.send(fruits)
})
// New

// Update

// Create

// Update

// Show

app.listen(3000, ()=>{
    console.log('listening')
})
// Delete