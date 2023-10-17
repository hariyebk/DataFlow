import User, {userprops} from "../../models/User"
import View from "../View"
class UserForm extends View<User, userprops>{
    // An object that consists the event name and their corresponding callback function
    eventMap(): {[key: string]: () => void}{
        return {
            "click:.set-age": this.onSetAge,
            "click:.set-name": this.onSetName,
            "click:.save-user": this.onSave,
        }
    }
    // Sets the name in the Input field and triggers a change event
    onSetName = (): void => {
        const input = this.parent.querySelector("input")
        const name = input?.value
        this.model.set({name})
    }
    // persists the current data on the server
    onSave = (): void => {
        this.model.save()
    }
    // Sets a Random Age and triggers a change event
    onSetAge = (): void => {
        this.model.SetRandomAge()
    }
    // Html template for user class
    template(): string{
        return `
        <div>
            <h1> User Form </h1>
            <input placeholder = "${this.model.get("name")}"/>
            <button class = "set-name"> change Name </button>
            <button class = "set-age"> set Random Age </button>
            <button class = "save-user"> Save </button>
        </div>
        `
    }
}


export default UserForm