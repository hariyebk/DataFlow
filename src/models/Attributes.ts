class Attributes<T extends {} >{
    constructor(public data: T){}
    get = <K extends keyof T>(key: K) : T[K] => {
        // this keyword points to the Attribute class even if it is refernced inside a class that consists the instance of attribute
        return this.data[key]
    }
    set(update: T): void{
        Object.assign(this.data, update)
    }
    getAll = (): T =>{
        return this.data
    }
}

export default Attributes
