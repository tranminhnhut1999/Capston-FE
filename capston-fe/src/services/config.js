import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y";
const baseURL = "https://elearningnew.cybersoft.edu.vn";
export const maNhom = "GP08";
export const https = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  params: {
    MaNhom: maNhom 
  }, 
  headers: {
    TokenCybersoft: token,
  },
});
export const httpsNoParams = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  headers: {
    TokenCybersoft: token,
    // Authorization:'Bearer ' + localStorage.getItem('elearningToken')
  },
});