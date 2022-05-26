import axios from "axios";
import router from "./router/router";

const api = axios.create();

// Start request
api.interceptors.request.use( config => {
    if (localStorage.getItem('token')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    } return config
}, error => {})

// End request
api.interceptors.response.use({}, error => {
    if (error.response.data.message === 'Token has expired') {
        return axios.post('http://localhost:8000/api/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            localStorage.setItem('token', res.data.authorisation.token)

            error.config.headers.authorization = `Bearer ${res.data.authorisation.token}`

            return api.request(error.config)
        })
    }
    if (error.response.status === 401) {
        router.push({ name: 'user.login'})
    }
})

export default api