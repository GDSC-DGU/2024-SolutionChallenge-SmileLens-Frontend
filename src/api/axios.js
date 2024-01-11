import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE0LCJleHAiOjE3MDQ5NDU0NzN9.gRvLegQMg2RTFHMuw0jiA9bQq9xs_Wgrnbnn3hB3JnY`,
  },
});
export default instance;
