import axios from 'axios'

 const api = axios.create({
    baseURL: 'https://612e405ad11e5c0017558460.mockapi.io/api/v1/',
});


export default api