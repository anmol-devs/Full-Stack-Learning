const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// html me agar apne file bnate hai to usme ye problem hoti hai ki apni source code waali files url se access ho jaati hai. And isiliye express kaam aati hai, isme source code ki files ko access nhi kr skte url me file name daalkr. Access krne ke liye apno ne jo upr code ki line likhi hai, uska use krenge. Isse apne static files ko accessible bna skte hai, and mainly static files ko public folder me rkha jaata hai.

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})
// Like apne paas kai saare blogs hai, to un sbke liye to apne code me likhne se rhe, vrna kai hazaro lines ka code ban jaaega.
// Isliye apne url me variables jinhe parameters kehte hai, unka use kr skte hai. Isse us variable waali jagh par jo bhi url me likha aaega, to uske according apne data user ko bhej denge, selecting from db. And ise apne 'req.params.parameter_name' se access kr skte hai.

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})