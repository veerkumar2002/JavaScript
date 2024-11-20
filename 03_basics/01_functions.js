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


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 1000))

const user = {
    username: "Veer",
    prices: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 400
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));