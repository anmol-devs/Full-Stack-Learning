import express  from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(cors())  // cors ka use isliye kiya hai taaki frontend aur backend ke beech me data exchange ho sake.
app.use(bodyParser.json())  // bodyParser ka use isliye kiya hai taaki backend me jo data aa rha hai, usko json format me parse kr sake.

app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.post('/', (req, res) => { 
    console.log(req.body) //Ab apne req.body ki help se frontend se bheje gye data ko backend me console pr print kr skte hai. Aur ye backend me json format me aa rha hai, aur apne ko isko parse krne ke liye bodyParser ka use krna pdta hai.
    res.send('Data Received!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})