import Events from "./Events"
import Sync from "./Sync"
import Attributes from "./Attributes"
import { AxiosResponse } from "axios"
import { Model } from "./Model"
export interface userprops{
    name?: string
    age?: number
    // If a User has an id property it means that it has been saved in our backend server
    id?: number
}

const URL = " http://localhost:3000/users"

class User extends Model<userprops>{
    static Initializer(attrs: userprops): User{
        return new User(
            new Attributes<userprops>(attrs),
            new Sync(URL),
            new Events()
        )
    }
}

export default User