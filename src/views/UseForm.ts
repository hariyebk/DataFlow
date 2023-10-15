class UserForm{
    constructor(public parent: Element){}
    eventMap(): {[key: string]: () => void}{
        return {
            "click:button": this.onClickButton,
            "mouseenter:h1": this.onHover
        }
    }
    onClickButton(): void{
        console.log("you clicked me")
    }
    onHover(): void{
        console.log("hovered over")
    }
    bindEvents(fragment: DocumentFragment): void{
        const events = this.eventMap()
        for(let eventkeys in events){
            const [eventName, selector] = eventkeys.split(":")
            fragment.querySelectorAll(selector).forEach((element: Element): void => {
                element.addEventListener(eventName, events[eventkeys])
            })
        }
    }
    template(): string{
        return `
        <div>
            <h1> User Form </h1>
            <input />
            <button> click me </button>
        </div>
        `
    }
    render():void{
        const template = document.createElement("template")
        template.innerHTML = this.template()
        this.bindEvents(template.content)
        this.parent.append(template.content)
    }
}


export default UserForm