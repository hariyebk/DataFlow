import { Axios, AxiosPromise, AxiosResponse } from "axios"

interface ModelAttributes<T>{
    get<K extends keyof T>(key: K) : T[K]
    set(update: T): void
    getAll(): T
}
interface ModelEvents{
    on(eventname: string, callback: () => void): void
    trigger(eventname: string): void
}
interface ModelApi<T>{
    fetch(id: number): AxiosPromise
    save(data: T): AxiosPromise
}

export interface HasId{
    id?: number
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private sync: ModelApi<T>,
        private events: ModelEvents
    ){}

    get on(){
        return this.events.on
    }
    get trigger(){
        return this.events.trigger
    }
    get get(){
        return this.attributes.get
    }
    set(update: T){
        this.attributes.set(update)
        this.events.trigger("change")
    }
    fetch(): void {
        const id = this.attributes.get("id")
        if(!id) throw new Error("Data is not stored on the server")
        // fecth and persist data
        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data)
        })
    }
    save(): void{
        this.sync.save(this.attributes.getAll()).then(() => {
            this.events.trigger("save")
        }).catch(() => this.events.trigger("error"))
    }

}