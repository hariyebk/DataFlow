import User from "../models/User"
import View from "../models/View"
class UserForm extends View{
    // An object that consists the event name and their corresponding callback function
    eventMap(): {[key: string]: () => void}{
        return {
            "click:.set-age": this.onSetAge,
            "click:.set-name": this.onSetName
        }
    }
    // Sets the name in the Input field and triggers a change event
    onSetName = (): void => {
        const input = this.parent.querySelector("input")
        const name = input?.value
        this.model.set({name})
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
            <div>
                <h4> User Name:  ${this.model.get("name")} </h4>
                <h4> User Age:   ${this.model.get("age")}  </h4>
            <div>
            <input />
            <button class = "set-name"> change Name </button>
            <button class = "set-age"> set Random Age </button>
        </div>
        `
    }
}


export default UserForm