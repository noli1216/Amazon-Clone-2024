import axios from "axios";

const axiosInstance = axios.create({
     // local instance of firebase functions 
  // baseURL: "http://127.0.0.1:5001/clone-528f5/us-central1/api",

  //deployed version of firebase function
  baseURL: "https://us-central1-clone-528f5.cloudfunctions.net/api",

  //deployed version of amazon server on render.com
});

export {axiosInstance}