import axios from "axios";

const strapiBaseUrl = "http://localhost:1337/api";

const axiosInstance = axios.create({
  baseURL: strapiBaseUrl,
});

axiosInstance.defaults.headers.common["Authorization"] =
  "Bearer f3375c90a35db1a53f1788429fed5e8fa466ef3a72a686d0235b62c7ebe7b708d1f9e12a730aa0e143456e583de651a0bdfb384ae9fabc1930b571b216fbce5da63c54401ede440b8ac6c0b750e2724ff2da4b9f749e9432dc937cb2aac0e0f99d772f403c771cc969be52cb5c54921988eb0e3801093f5719fa9f0ea3fade13";

//export { setToken };
export default axiosInstance;
