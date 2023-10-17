import View from "../View";
import User, {userprops} from "../../models/User";
import UserForm from "./UseForm";
import UserShow from "./UserShow";

class UserEdit extends View<User, userprops>{
    regionsMap(): { [key: string]: string; } {
        return {
            userShow: ".user-show",
            userForm: ".user-form"
        }
    }
    // Inserts views on their respective parent element
    onRender(): void {
        new UserForm(this.regions.userForm, this.model).render()
        new UserShow(this.regions.userShow, this.model).render()
    }
    template(): string {
        return`
        <div>
            <div class = "user-show"> </div>
            <div class = "user-form"> </div>
        </div>
        `
    }

}

export default UserEdit