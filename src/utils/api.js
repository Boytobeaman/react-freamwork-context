import axios from 'axios';


function AxiosInstance(baseURL){
  this.instance = axios.create({
    baseURL: baseURL,
  });
}


let Api = {};

// Api.news = new AxiosInstance(window.config.newsUrl)
Api.weather = new AxiosInstance(window.config.weather)

export default Api