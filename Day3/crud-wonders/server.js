const express = require(`express`)
const path = require(`path`)
const api = require('./server/routes/api')
const app = express()
const bodyParser = require(`body-parser`)
app.use('/', api)
app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = 1337 //because why not

app.listen(port, function () {
    console.log(`Server running on ${port}`)
})