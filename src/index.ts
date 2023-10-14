
import User from "./models/User";


const collection = User.UserCollection()

collection.on("change", () => {
    console.log(collection.model)
})


collection.fetch()