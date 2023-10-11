import axios, {AxiosResponse} from "axios"
interface userprops{
    name?: string
    age?: number
    // If a User has an id property it means that it has been saved in our backend server
    id?: number
}
type Callback = () => void

const URL = " http://localhost:3000/users"

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
    fetch(): void{
        axios.get(`${URL}/${this.get("id")}`).then((response: AxiosResponse): void => {
            this.set(response.data)
        })
    }
    save(): void{
        const id = this.get("id")
        // If the data exists in our backend server, just update
        if(id){
            axios.put(`${URL}/${id}`, this.data)
        }
        // else, create a new user in our server
        else{
            axios.post(`${URL}`, this.data)
        }
    }
}


export default User