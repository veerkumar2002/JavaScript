const user = {
    username: "veer",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Veer"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Veer"
//     console.log(this.usename);
// }
// chai()

const chai = () => {
    let username = "Veer"
    console.log(this);
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Veer"})


console.log(addTwo(3, 4))