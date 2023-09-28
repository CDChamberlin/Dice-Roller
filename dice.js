function diceRoll(num, num2, Name1){
    console.log("this is how many sides: ", num, num2)
    document.getElementById(Name1).innerHTML = numberMinMax(num, num2);

}

function numberMinMax(min, max){
    const diceRoll =Math.floor(Math.random()*(max - min +1)) +min;
    console.log(diceRoll)
    return(diceRoll)
}

/*
    Hard coded functions for practice changed to above to handle all five funtions in one.
*/

 /* function d4(){
    console.log("d4 button Clicked");
    numberMinMax(1,4) // calls numberMinMax function below
    document.getElementById("roll4").innerHTML= numberMinMax(1,4)
}

function d6(){
    console.log("d6 button Clicked");
    numberMinMax(1,6) // calls numberMinMax function below
    document.getElementById("roll6").innerHTML= numberMinMax(1,6)
}

function d8(){
    console.log("d8 button Clicked");
    numberMinMax(1,8) // calls numberMinMax function below
    document.getElementById("roll8").innerHTML= numberMinMax(1,6)
}

function d10(){
    console.log("d10 button Clicked");
    numberMinMax(1,10) // calls numberMinMax function below
    document.getElementById("roll10").innerHTML= numberMinMax(1,4)
}

function d20(){
    console.log("d20 button Clicked");
    numberMinMax(1,20) // calls numberMinMax function below
    document.getElementById("roll20").innerHTML= numberMinMax(1,4)
} */