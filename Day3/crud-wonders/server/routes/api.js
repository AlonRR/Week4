const express = require('express')
const router = express.Router()
const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]
router.get(`/wonders`, function (req, res) {
    res.send(wonders)
})

router.post(`/wonder`, function (req, res) {
    console.log("Someone`s trying to make a post request")
    req.body.visited = false
    console.log(req.body)
    wonders.push(req.body)
    res.end()
})
router.put(`/wonder/:name`, function (req, res) {
    console.log(req.params.name)
    let name = req.params.name
    wonders.find(place => place.name === name).visited = true
    res.end()
})
router.delete(`/wonder/:name`, function (req, res) {
    let name = req.params.name
    let wonder = wonders.findIndex(place => place.name === name)
    wonders.splice(wonder,1)
    res.end()
})
module.exports = router