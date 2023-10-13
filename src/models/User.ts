import Events from "./Events"
import Sync from "./Sync"
import Attributes from "./Attributes"
import { AxiosResponse } from "axios"
export interface userprops{
    name?: string
    age?: number
    // If a User has an id property it means that it has been saved in our backend server
    id?: number
}

const URL = " http://localhost:3000/users"

class User{
    // Direct dependency with the Events class
    public events: Events = new Events()
    public sync: Sync<userprops> = new Sync<userprops>(URL)
    public attributes: Attributes<userprops>

    constructor(public user: userprops){
        this.attributes = new Attributes<userprops>(user)
    }
    // Reference to the On method that is inside the Events class
    get on(){
        return this.events.on
    }
    get trigger(){
        return this.events.trigger
    }
    get get(){
        return this.attributes.get
    }
    set(update: userprops){
        this.attributes.set(update)
        this.events.trigger("change")
    }
    fetch(): void {
        const id = this.attributes.get("id")
        if(!id) throw new Error("Data is not stored on the server")
        // fecth and persist data
        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data)
        })
    }
    save(): void{
        this.sync.save(this.attributes.getAll()).then(() => {
            this.events.trigger("save")
        }).catch(() => this.events.trigger("error"))
    }
}


export default User