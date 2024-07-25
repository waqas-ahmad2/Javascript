function hex_color(){
    let hex ="#"
    for (let index = 0; index <6; index++) {
        //started from 0 to 6 because hex code has 6 digits
        let num = Math.floor(Math.random()*9)
        hex+=num
    }
    return hex
}

console.log(hex_color())


document.querySelectorAll(".box").forEach(e=>{
    e.style.color=hex_color()
    e.style.backgroundColor=hex_color()
})


