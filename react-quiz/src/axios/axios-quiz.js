import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-70a69.firebaseio.com/'
})