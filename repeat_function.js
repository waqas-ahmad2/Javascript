function calculate(a,b,c){ 
    let chance = Math.random()*100
    let obj = {"+":"-","-":"*","*":"/","/":"**"}
    
    if(chance>10){
        return eval(a+b+c); //will make the expression after concentenation of arguments e.g "1*3"
    }
    else{
        return eval(a+obj[b]+c)
    }
}

function repeat(times,func,...args){
    for (let count = 0; count < times; count++) {
        console.log(func(...args))
    }
}

repeat(10,calculate,"1","+","3")
