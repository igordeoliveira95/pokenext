import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export default Axios
