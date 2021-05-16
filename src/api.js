let axios = require('axios')

const api = axios.create({
    baseURL: 'http://localhost:8888/api',
})

const start = () => api.post('/start')
const upload = (u) => api.get('/upload', u)
const find = () => api.get('/find')
const show = () => api.delete('/show')
const register = (r) => api.post('/register', r)
const login = () => api.get('/login')
const logout = () => api.get('/logout')

const apis = {
    start,
    upload,
    find,
    show,
    register,
    login,
    logout,
}

module.exports = apis