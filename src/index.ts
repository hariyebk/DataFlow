import UserForm from "./views/UseForm";
import User from "./models/User";

const user = User.Initializer({id: 12, name: "khamzat", age: 29})
const parentElement = document.getElementById("root")
if(parentElement){
    const userform = new UserForm(parentElement, user)
    userform.render()
}
else{
    throw new Error("Root element not found.")
}