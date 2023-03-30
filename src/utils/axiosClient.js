import axios from 'axios'
console.log(process.env.REACT_APP_API_BASE_URL);
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

export function setApiToken(token) {
    axiosClient.defaults.headers.Authorization = `Bearer ${token}`
}

export function clearApiToken() {
    axiosClient.defaults.headers.Authorization = undefined
}

export default axiosClient


