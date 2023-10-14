import User from "./models/User"


const user = User.Initializer({id: 1, name: "hari", age: 25})
console.log(user.get("age"))
