import User, {userprops} from "../../models/User";
import View from "../View";


class UserShow extends View<User, userprops>{
    template(): string {
        return `
        <div>
            <h1> User Detail </h1>
            <div> User Name: 
                <strong> ${this.model.get("name")} 
                </strong>
            </div> &nbsp;&nbsp;
            <div> User Age: 
                <strong>${this.model.get("age")} </strong> 
            </div>
        </div>
        `
    }
}

export default UserShow