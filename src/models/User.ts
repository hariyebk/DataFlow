import Events from "./Events"
import Sync from "./Sync"
import Attributes from "./Attributes"
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
}


export default User