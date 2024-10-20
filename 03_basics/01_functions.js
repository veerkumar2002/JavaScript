function sayMyName(){
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("R");
    
    
}
//sayMyName()


/* Parameter and Arguments 
function addTwoNumbers(number1, number2){//parameter
    console.log(number1 + number2);
}

addTwoNumbers(3, 4)//arguments
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null) */


function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Veer"))
//console.log(loginUserMessage(""))
console.log(loginUserMessage("veer"))//gives output undefined