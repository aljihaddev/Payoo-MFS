let num = document.getElementById("num")
let pin = document.getElementById("pin")
let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    if ( num.value === "1" && pin.value === "1"){
    }
    else{
        console.log("Nope")
    }
})