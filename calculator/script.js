// JavaScript

const display = document.getElementById('display')

function appendValue(input){
  return display.value += input
}

function clearAll(){
  return display.value = ""
}

function back(){
  return display.value = display.value.slice(0,-1)
}

function calculate(){
  try{
    return display.value = eval(display.value)
  }
  catch(error){
    return display.value = "ERROR"
  }
}