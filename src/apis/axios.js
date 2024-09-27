import axios from "axios";
import toast from "react-hot-toast";

const instance = axios.create({
  baseURL:process.env.REACT_APP_BASE_URL,
});

instance.defaults.headers.common["Content-Type"] = "application/json";
instance.defaults.headers.common["Authkey"] = process.env.REACT_APP_API_KEY;
instance.defaults.headers.common["Apikey"] = 0;

instance.interceptors.request.use(
  request => {
    if (request?.apikey)
      request.headers["apikey"] = request?.apikey;
    const authkey = sessionStorage.getItem('authkey')
    if (authkey != undefined) {
      let data = JSON.parse(authkey);
      const authToken = data?.authToken
      request.headers["Authorization"] = "Bearer " + authToken;
    } 
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if(response.data.respcode==='403'){
      toast.error(response.data.respdesc)
      window.location.replace(window.location.protocol + "//" + window.location.host);
    }
    return response;
  },
  (error) => {
    const { status } = error?.response
    if (status === 401){
      window.location.replace(window.location.protocol + "//" + window.location.host);
      
    } 
    return Promise.reject(error);
  }
);

export default instance;
