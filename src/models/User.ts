interface userprops{
    name?: string
    age?: number
}
type Callback = () => void

class User{
    event:{[ key : string] : Callback[]} = {}
    constructor(private data: userprops){}
    get(propName: string) : string|number{
        return this.data[propName]
    }
    set(update: userprops): void{
        Object.assign(this.data, update)
    }
    on(eventname: string, callback: Callback): void{
        const handlers = this.event[eventname] || []
        handlers.push(callback)
        // If there is no registered event before , it will register it.
        this.event[eventname] = handlers
    }
    trigger(eventname: string): void{
        const handlers = this.event[eventname]
        if(!handlers || handlers.length === 0){
            return
        }
        handlers.forEach(callback => callback())
    }
}


export default User