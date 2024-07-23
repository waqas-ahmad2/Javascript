// using recursion i.e calling function as a function argument

function factorial_recursion(num){
    if(num ==1 || num ==0){
        return 1
    }

    return factorial(num-1)*num

}

// using for loop

let num=5

if(num==1 || num==0){
    console.log(1)
}
else{
    var res = num
    for(let i=1; i<num; i++){
        res*=i
    }
    console.log(res)
}


// using reduce
function arr(num){
    let res = []
    for(let i=1;i<num+1;i++){
        res.push(i)
    }
    return res
};

console.log(arr(5).reduce((a,b)=>a*b))

console.log(factorial_recursion(5))



