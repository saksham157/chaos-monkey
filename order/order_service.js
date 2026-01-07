import express from 'express'
import axios from 'axios'

const app = express()

app.get('/health', (req,res)=>{
    res.json({status:"ORDER SERVICE OK"})
})

app.get('/order', async (req,res)=>{

    try{
        const payment = await axios.get("http://localhost:3001/pay")

        res.json({
            order:"CREATED",
            payment: payment.data.status
        })
    }

    catch(error){

        res.json({
            order:"CREATED",
            payment:"DEGRADED MODE"
        })

    }

})

app.listen(3000, ()=>{
    console.log("order running on 3000")
})
