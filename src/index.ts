import User from "./models/User";

const user = new User({name: "Harun", age: 23})
user.on("yep", () => {
    console.log("yep")
})
console.log(user.event)