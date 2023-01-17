let pound = document.getElementById("p")
let gram = document.getElementById("g")
let kilogram = document.getElementById("kg")
let ounce = document.getElementById("o")

function handleChange(){
let num = parseInt(pound.value)

    gram.innerText = num * 453.592 

    kilogram.innerText = num * 0.453592

    ounce.innerText = num * 16
}