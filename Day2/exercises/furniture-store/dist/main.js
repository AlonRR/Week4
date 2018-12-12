const findMe = function (div) {
    let thing = $(div).prev(`input`).val()
    console.log(thing)
    return thing
}

const priceCheck = function (div) {
    $.get(`/priceCheck/${findMe(div)}`, function (price) {
        $(`#prices`).append(`<p>${price.price}</p>`)
    })
}
// After the request is complete, the user should see a message on the page: Congratulations, you've just bought {item} for {price}. There are {inventory} left now in the store.
const buyMe = function (div) {
    $.get(`/buy/${findMe(div)}`, function (item) {
        $(`#prices`).append(`<p>Congratulations, you've just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store.</p>`)
    })
}