const express = require(`express`)
const path = require(`path`)
const api = require(`./server/routes/api`)
const app = express()

app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))
app.use(`/`,api)

const port = 3100

app.listen(port, function (err) {
    console.log(err)
    console.log(`Server running on ${port}`)
})