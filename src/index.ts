import Collection from "./models/Collection";
import User, { URL, userprops} from "./models/User";
import UserList from "./views/user/UserList";

// creating a collection of user models by for each user fetched from the server
const user = new Collection<User, userprops>(URL, (json: userprops) => User.Initializer(json))

// when the fetch operation finishes it emmits a change event
user.on("change", (): void => {
    const root = document.getElementById("root")
    if(root){
        new UserList(root, user).render()
    }
})
user.fetch()
