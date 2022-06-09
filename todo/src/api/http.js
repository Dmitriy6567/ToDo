import axios from 'axios'

const http = axios.create ({
    baseURL: 'https://my-todo-list-server.herokuapp.com/'
})

export { http }