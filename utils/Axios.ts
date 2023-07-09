"use strict"
import axios from "axios";


const devMode = process.env.NODE_ENV === 'development'

const $baseApi = axios.create({ baseURL: 'https://api.openai.com/v1/images/', })

$baseApi.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.NUXT_PUBLIC_OPENAI_API_KEY

$baseApi.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
$baseApi.interceptors.response.use(
  function (response) {
    if (devMode)
      console.log(response)

    return response
  },

  /* if error */
  function ({ response }) {
    if (devMode)
      console.log(response)

    return Promise.reject(response)
  }
)


export {
  $baseApi
}