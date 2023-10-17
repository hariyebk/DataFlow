import { Model, HasId } from "../models/Model"


abstract class View <T extends Model<K>, K extends HasId>{

    abstract template(): string

    constructor(public parent: Element, public model: T){
        this.onChange()
    }

    regions: {[key: string]: Element} = {}
    // Re-render the Ui on change of state(data)
    onChange(): void{
        this.model.on("change", () => {
            this.render()
        })
    }
    // Binds event litseners to Html elements with class names
    bindEvents(fragment: DocumentFragment): void{
        const events = this.eventMap()
        for(let eventkeys in events){
            const [eventName, className] = eventkeys.split(":")
            fragment.querySelectorAll(className).forEach((element: Element): void => {
                element.addEventListener(eventName, events[eventkeys])
            })
        }
    }
    // default eventMap function: can be overridden by child class.
    eventMap(): {[key: string]: () => void}{
        return {}
    }

    // Default value, will be overriden
    regionsMap(): {[key: string]: string}{
        return {}
    }

    // Default value, will be overriden
    onRender(): void{
    
    }

    mapRegions(fragment: DocumentFragment): void{
        const regionsMap = this.regionsMap()
        for(let key in regionsMap){
            const selector = regionsMap[key]
            const element = fragment.querySelector(selector)
            if(element){
                this.regions[key] = element
            }

        }
    }
    // Renders The html in the DOM
    render():void{
        // remove everthing in The parent element before rendering a template
        this.parent.innerHTML = ""
        // create a tenplate inside the parent element
        const template = document.createElement("template")
        template.innerHTML = this.template()
        this.bindEvents(template.content)
        this.mapRegions(template.content)
        // Nesting views
        this.onRender()
        this.parent.append(template.content)
    }
}

export default View