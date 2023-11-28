import axios from "axios";

const instance = axios.create({
  baseURL: "https://drink-master-rafb.onrender.com/api",
});

export default instance;
