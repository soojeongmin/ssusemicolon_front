import axios from "axios";

const BASE_URL =
  "http://ec2-43-201-120-175.ap-northeast-2.compute.amazonaws.com:8080";

export const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// loginAxios.interceptors.request.use(checkToken);
