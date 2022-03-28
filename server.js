let express = require('express')
let bodyParser = require('body-parser')
let port = process.env.PORT || 8001
let knex = require('./db/knex')
//let methods = require("./methods")

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/firstlevel', (req, res)=>{
    knex.select().from('firstlevelmatch').then((firstlevel)=>{
        res.send(firstlevel)
    })
})

app.listen(port, ()=>{
    console.log("listening on port: ", port)
})

