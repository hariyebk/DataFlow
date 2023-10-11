import axios from "axios"
import User from "./models/User"


const user = new User({name: "Harun", age: 23})

user.save()