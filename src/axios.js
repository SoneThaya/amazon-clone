import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-11eee.cloudfunctions.net/api",
  // "http://localhost:5001/challenge-11eee/us-central1/api", // api (cloud function) url
});

export default instance;
