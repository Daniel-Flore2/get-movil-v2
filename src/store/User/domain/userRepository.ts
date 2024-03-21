import {User} from "./user";

export interface userRepository {
    [x: string]: any;
    getUser(id:number):Promise<User| null>;

}