import express from 'express'

const app = express()

app.get('/health', (req,res)=>{
    res.json({status:"PAYMENT SERVICE OK"})
})

app.get('/pay', (req,res)=>{
    res.json({status:"PAYMENT SUCCESS"})
})

app.listen(3001, ()=>{
    console.log("payment running on 3001")
})
