// singleton
// object.create

//object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Veer",
    "full name": "Veer Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Bhubaneswar",
    email: "veer@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "veer@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "veer@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());