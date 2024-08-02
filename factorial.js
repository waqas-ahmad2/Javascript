// using recursion i.e calling function as a function argument

function factorial_recursion(num){
    if(num ==1 || num ==0){
        return 1
    }

    return factorial(num-1)*num

}
console.log(factorial_recursion(5))

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


//we can also make arrays with this code
let num = 6
let arr_new = Array.from(Array(num+1).keys()) //num+1 because array starts from 0 (0...num+1) 

//slice array from index 1 to num 
console.log(arr_new.slice(1,).reduce((a,b)=>a*b))




