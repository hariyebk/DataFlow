import User from "../models/User"
class UserForm{
    constructor(public parent: Element, public model: User){
        this.OnChange()
    }
    eventMap(): {[key: string]: () => void}{
        return {
            "click:.set-age": this.onSetAge
        }
    }
    OnChange(): void{
        this.model.on("change", () => {
            this.render()
        })
    }
    onSetAge = (): void => {
        this.model.SetRandomAge()
    }
    bindEvents(fragment: DocumentFragment): void{
        const events = this.eventMap()
        for(let eventkeys in events){
            const [eventName, className] = eventkeys.split(":")
            fragment.querySelectorAll(className).forEach((element: Element): void => {
                element.addEventListener(eventName, events[eventkeys])
            })
        }
    }
    template(): string{
        return `
        <div>
            <h1> User Form </h1>
            <div>
                <h4> User Name:  ${this.model.get("name")} </h4>
                <h4> User Age:   ${this.model.get("age")}  </h4>
            <div>
            <input />
            <button> click me </button>
            <button class = "set-age"> set Random Age </button>
        </div>
        `
    }
    render():void{
        // remove everthing in The parent element before rendering a template
        this.parent.innerHTML = ""
        // create a tenplate inside the parent element
        const template = document.createElement("template")
        template.innerHTML = this.template()
        this.bindEvents(template.content)
        this.parent.append(template.content)
    }
}


export default UserForm