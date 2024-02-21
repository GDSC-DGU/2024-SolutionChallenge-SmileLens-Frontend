import axios from 'axios';

const instance = axios.create({
  baseURL: ' http://127.0.0.1:8000/ ', 
});

// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjYzLCJleHAiOjE3MDUwNjgzNDd9.RzuL13TXcHDJxKareC1H_L-B72xGwWwXMJryhwwgkzc.mGiL6KMzK6_p6NDIwHf6P-SM3xM9TMJbJSf5ea9nhjQ'; // Replace with your actual authentication token
// if (token) {
//   instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

export default instance;
