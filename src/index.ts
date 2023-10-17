import UserEdit from "./views/user/UserEdit";
import User from "./models/User";

const user = User.Initializer({name: "khamzat", age: 29})
const parentElement = document.getElementById("root")
if(parentElement){
    const userEdit = new UserEdit(parentElement, user)
    userEdit.render()
    console.log(userEdit)
}
else{
    throw new Error("Root element not found.")
}