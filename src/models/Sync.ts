import axios, {AxiosPromise} from "axios"

interface HasId {
    id?: number
}
class Sync<T extends HasId>{
    constructor(public URL: string){}
    fetch = (id: number): AxiosPromise =>{
        return axios.get(`${this.URL}/${id}`)
    }
    save(data: T): AxiosPromise{
        const {id} = data
        // If the data exists in our backend server, just update
        if(id){
            return axios.put(`${this.URL}/${id}`, data)
        }
        // else, create a new user in our server
        else{
            return axios.post(`${URL}`, data)
        }
    }
}


export default Sync