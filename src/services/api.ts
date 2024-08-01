// import axios
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_base_url: string = process.env.API_BASE_URL;

const Api = axios.create({
  // get url from env
  baseURL: api_base_url,
});

export default Api;
