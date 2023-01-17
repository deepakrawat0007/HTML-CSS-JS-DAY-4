


function ShowLess(num){
    let ShowLessbtn = document.getElementById(`Hide${num}`)
    let ShowMorebtn = document.getElementById(`Show${num}`)
    ShowLessbtn.style.display = "none"
    ShowMorebtn.style.display = "block"
    let str = document.getElementById(`hide${num}`)
    str.style.display = "none"
 
}
function ShowMore(num){
    let ShowLessbtn = document.getElementById(`Hide${num}`)
    let ShowMorebtn = document.getElementById(`Show${num}`)
    ShowLessbtn.style.display = "block"
    ShowMorebtn.style.display = "none"
let str = document.getElementById(`hide${num}`)
str.style.display = "block"

str.innerText = str.innerText
}

