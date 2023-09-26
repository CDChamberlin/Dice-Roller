function diceRoll(num, num2, Name1){
    
}



function d6(){
    console.log("Button Clicked")
    console.log("Die d6 clicked")
    numberMinMax(1,6) // calls numberMinMax function below
    //document.getElementById("").innerHTML=numberMimMax(1,6)
}
function numberMinMax(min, max){
    const diceRoll =Math.floor(Math.random()*(max - min +1)) +min
    console.log(diceRoll)
    return(diceRoll)
}

