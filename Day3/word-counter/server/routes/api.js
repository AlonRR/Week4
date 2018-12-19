let wordCounter = {}
let whitelistWords = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`
const wordCheck = (word) => wordCounter[word]
//ex2
const getWordCount = (word) => {
    let obj
    wordCheck(word) ? obj = {count: wordCounter[word]} : obj = { count: 0 }
    return obj
}
//ex3
const addWord = (word) => {
    validator.isAlpha(word)?null:validator.whitelist(word,whitelistWords)
    let obj = { text: `Added ${word}`, currentCount: getWordCount(word).count + 1 }
    wordCounter[word] = obj.currentCount
    return obj
}
//ex4
const addSentence = (sentence) => {
    let words = sentence.split(` `)
    let oldWords = Object.keys(wordCounter).length 

    words.forEach(word => addWord(word))
    let newWords = Object.keys(wordCounter).length - oldWords
    return { text: `Added ${newWords}, ${oldWords} already existed`, currentCount: -1 }
}
//ex5
const getTotalWords = () => {
    let totalWords = 0
    Object.keys(wordCounter).forEach(word => totalWords += wordCounter[word])
    return { text: `Total count`, count: totalWords||0 }
}
//ex+2
const getPopulerWord=()=>{
    let mostPopWord = {word:null , count:0}
    Object.keys(wordCounter).forEach(word=> {if(wordCounter[word]>mostPopWord.count){
        mostPopWord.word=word
        mostPopWord.count=wordCounter[word]
    }})
    return {text:mostPopWord.word, count:mostPopWord.count}
}
const getRankOrder=()=>{
    let rankOrder = []
    Object.keys(wordCounter).forEach(word=> rankOrder.push({[word]:wordCounter[word]}))
    rankOrder.sort((a,b)=> a-b)
    return rankOrder.splice(0,5)
}
const express = require(`express`)
const router = express.Router()
const validator = require(`validator`)
router.get(`/sanity`, function (req, res) {
    console.log(`Server up and running`)
    res.end()
})
router.get(`/word/:word`, function (req, res) {
    res.send(getWordCount(req.params.word))
})
router.post(`/word/:word`, function (req, res) {
    res.send(addWord(req.params.word))
})
router.post(`/words/:sentence`, function (req, res) {
    res.send(addSentence(req.params.sentence))
})
router.get(`/total`, function (req, res) {
    res.send(getTotalWords())
})
router.get(`/populer`,function(req,res){
    res.send(getPopulerWord())
})
router.get(`/ranking`,function(req,res){
    res.send(getRankOrder())
})

module.exports = router