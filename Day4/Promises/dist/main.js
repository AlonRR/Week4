$.get(`/randomWord`)
    .then(function (word) {
        console.log(word)
        let gif = $.get(`http://api.giphy.com/v1/gifs/random=${word}&api_key=OG8C2fVLXraUsGpef4HUEZAvd4cXGR2D&limit=5`)
        let book = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
        Promise.all([gif, book])
            .then(function (ress) {
                console.log(ress[0], ress[1])
            })
    })
// OG8C2fVLXraUsGpef4HUEZAvd4cXGR2D
// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5





$.get(`/sentiment/Ploy`)
    .then(function (t) {
        console.log(t)
    })









// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })