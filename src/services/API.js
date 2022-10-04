import axios from 'axios'

export default(url='http://20.163.113.214:3000/users')=>{
    return axios.create({
        baseURL: url,
       // withCredentials: false
    })
}