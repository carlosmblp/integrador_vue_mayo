
import httpClient from '../httpClient'

let http = httpClient({
    baseURL: process.env.VUE_APP_BASE_URL
})


export default http