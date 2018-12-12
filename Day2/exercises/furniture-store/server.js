const log = (string)=>{console.log(string)}
const findItem=(name)=> store.find(item => item.name === name)
const express = require(`express`)
const path = require(`path`)
const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
const port = 1010
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
app.listen(port, function (req, res) {
    console.log(`Workig through port: ${port}`)
})
app.get(`/`, function (req, res) {
    res.send(`Server is up and running`)
})
app.get(`/priceCheck/:name`, function (req, res) {
    let nameID = req.params.name
    let item = findItem(nameID)
    let price
    item?price = item.price:price=null
    res.send({price:price})
})
app.get(`/buy/:name`,function(req,res){
    let name = req.params.name
    let item = findItem(name)
    item.inventory--
    log(item.inventory)
    res.send(item)
})
app.get(`/sale`,function(req,res){
    console.log(req.query.admin)
    if(req.query.admin){
    store.forEach(item=> item.price>10?item.price/=2:null)
    console.log(store)}
    res.end()
})
