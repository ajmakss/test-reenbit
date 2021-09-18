import * as axios from "axios";

export const dialogsAPI = {
    getMessage() {
        return axios.get('https://api.chucknorris.io/jokes/random');
    }
}