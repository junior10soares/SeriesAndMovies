import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed',
})
