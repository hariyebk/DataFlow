import Collection from "../models/Collection"

abstract class CollectionView<T, K>{
    constructor(public parent: Element, public collection: Collection<T, K>){}
    abstract renderItem(model: T, parent: Element): void
    render():void{
        this.parent.innerHTML = ""
        const template = document.createElement("template")
        for(let model of this.collection.model){
            // console.log(model)
            const container = document.createElement("div")
            // for each model in the collections.model array we create an HTML and append it to the main template
            this.renderItem(model, container)
            template.content.append(container)
        }
        // insert the template into the parent root element
        this.parent.append(template.content)
    }
}


export default CollectionView