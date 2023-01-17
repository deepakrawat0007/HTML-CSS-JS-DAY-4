let display = document.getElementById("display")
let Resetbtn = document.getElementById('reset')

function handleAdd(){
    if(parseInt(display.innerText) >= 1000){
        display.innerText = 1;
    }else{
    display.innerText = parseInt(display.innerText)+1
    }
}

function handleLess(){
    if(parseInt(display.innerText) <= 0){
        display.innerText = 0;
    }else{
    display.innerText = parseInt(display.innerText)-1
    }
}
function handleReset(){
    display.innerText = 0
}