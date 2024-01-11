import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE0LCJleHAiOjE3MDQ5NTU3OTV9.W_CrhmSFmaJGxB_0U87_gTRYO0BJLLyYgT2yMlWoNoM`,
  },
});
export default instance;
