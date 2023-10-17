import User, { userprops } from "../../models/User";
import CollectionView from "../CollectionViews";
import UserShow from "./UserShow";


class UserList extends CollectionView<User, userprops>{
    renderItem(model: User, parent: Element): void {
        // For each user model in the collection display usershow interface
        new UserShow(parent, model).render()
    }
}

export default UserList