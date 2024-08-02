// this will generate random business names.

function generator(){
    let c1 = Math.floor(Math.random()*3)
    let c2 = Math.floor(Math.random()*3)
    let c3 = Math.floor(Math.random()*3)

    let obj1 = {0:"Crazy",1:"Amazing",2:"Fire"}
    let obj2 = {0:"Engine",1:"Foods",2:"Garments"}
    let obj3 = {0:"Limited",1:"Bros",2:"Hub"}

    return obj1[c1] + " " + obj2[c2] + " " + obj3[c3]

}


console.log(generator())