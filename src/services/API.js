import axios from 'axios'

export default(url='http://localhost:3000/users')=>{
    return axios.create({
        baseURL: url,
       // withCredentials: false
    })
}