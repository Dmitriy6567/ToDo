import axios from 'axios'

const http = axios.create ({
    // baseURL: 'https://my-todo-list-server.herokuapp.com/'
    baseURL: 'http://localhost:3002/'
})

export { http }