import UserForm from "./views/UseForm";
const parentElement = document.getElementById("root")
if(parentElement){
    const userform = new UserForm(parentElement)
    userform.render()
}
else{
    throw new Error("Root element not found.")
}