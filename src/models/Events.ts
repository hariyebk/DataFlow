
type Callback = () => void

class Events {
    event:{[ key : string] : Callback[]} = {}
    on = (eventname: string, callback: Callback): void => {
        const handlers = this.event[eventname] || []
        handlers.push(callback)
        // If there is no registered event before , it will register it.
        this.event[eventname] = handlers
    }
    trigger = (eventname: string): void => {
        const handlers = this.event[eventname]
        if(!handlers || handlers.length === 0){
            return
        }
        handlers.forEach(callback => callback())
    }
}

export default Events