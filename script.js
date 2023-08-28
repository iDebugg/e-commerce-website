var allProducts = []

function addItem() {
    allProducts.push(searchInput.value)
    if (allProducts == "") {
        alert("Your cart is empty,Please add an item")
    } else {

        // console.log(allProducts)
        display.innerHTML = `${allProducts}`
    }
    searchInput.value = "";

}

function removeItem() {
    allProducts.pop(searchInput.value)
    if (allProducts == "") {
        alert("Your cart is empty, nothing to remove")
    } else {

        // console.log(allProducts)
        display.innerHTML = `${allProducts}`
    }

}

function removeAllItem() {
    var response = confirm("Are you sure you want to delete all items?")
    if (response == true) {
        allProducts.splice(0)
    } else {
        alert("Okay keep shopping!")
    }
    // console.log(allProducts)
    display.innerHTML = `${allProducts}`

}

function removeFirstItem() {
    allProducts.shift(searchInput.value)
    if (allProducts == "") {
        alert("Your cart is empty, nothing to remove")
    } else {
        // console.log(allProducts)
        display.innerHTML = `${allProducts}`
    }
}

function removeOneItem() {
    var index = prompt("What index do you want to delete")
    allProducts.splice(index, 1)
    if (allProducts == "") {
        alert("Your cart is empty, nothing to remove")
    } else {
        // console.log(allProducts)
        display.innerHTML = `${allProducts}`
    }
}