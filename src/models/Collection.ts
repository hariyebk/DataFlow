import axios, {AxiosResponse} from "axios"
import Events from "./Events"

class Collection<T, K>{
    model: T[] = []
    events: Events = new Events()

    constructor(public URL: string, public deserialize: (json: K) => T){}

    get on(){
        return this.events.on
    }
    get trigger(){
        return this.events.trigger
    }

    fetch(): void{
        axios.get(this.URL).then((response: AxiosResponse) => {
            response.data.forEach((value: K) => {
                this.model.push(this.deserialize(value))
            })
        })
        this.trigger("change")
    }
}

export default Collection