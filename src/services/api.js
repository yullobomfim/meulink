import axios from 'axios';
 export const key= "ebd7d65f8e288e1e2dbdb8518df0a6ab3d166f7f";

 const api = axios.create({
     baseURL:'https://api-ssl.bitly.com/v4/',
     headers:{
         'Authorization':`Bearer ${key}`
     }
 })

 export default api;