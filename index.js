function fullPayment(params) {
    document.getElementById("fullAmount").style.display = "block"
    document.getElementById("amountToBePaid").style.display = "block"
    document.getElementById("Amount").style.display = "block"
    document.getElementById("partAmount").style.display = "none"
}
function partPayment(params) {
    document.getElementById("partAmount").style.display = "block"
    document.getElementById("amountToBePaid").style.display = "block"
    document.getElementById("Amount").style.display = "block"
    document.getElementById("fullAmount").style.display = "none"
}