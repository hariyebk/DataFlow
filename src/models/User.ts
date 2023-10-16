import Events from "./Events"
import Sync from "./Sync"
import Attributes from "./Attributes"
import Collection from "./Collection"
import { Model } from "./Model"
interface userprops{
    name?: string
    age?: number
    // If a User has an id property it means that it has been saved in our backend server
    id?: number
}

export const URL = " http://localhost:3000/users"

class User extends Model<userprops>{
    static Initializer(attrs: userprops): User{
        return new User(
            new Attributes<userprops>(attrs),
            new Sync(URL),
            new Events()
        )
    }
    
    static UserCollection(): Collection< User, userprops> {
        return new Collection<User, userprops>(URL, (json: userprops): User => User.Initializer(json))
    }

    SetRandomAge(): void{
        const age = Math.round(Math.random() * 100)
        this.set({ age })
    }
}

export default User