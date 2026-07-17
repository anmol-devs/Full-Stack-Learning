const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs'); // yaha apne keh rhe hai ki mai ejs ka use krna chahta hu.

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", 54, 65]
    res.render("index", { siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => { // Yaha apne is problem ko solve krne ki koshish kr rhe h jisme hume database se content aaye and use kisi file pr bhejni ho. Apne paas kai saare blogs ka data hoga to iske liye apne alag alag file thodi bnaenge alag alag content ke liye. To isliye apne ejs ka use krte hai.
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
}) // pehla name to vo ejs file me jaha use use krenge vaha vo name hoga with syntax like <%= blogTitle %> and <%= blogContent %> and second name is the variable name which we are passing from here.

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})