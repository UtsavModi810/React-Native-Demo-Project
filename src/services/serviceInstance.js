import axios from 'axios';
// import store from '../Redux/store';

// https://probvision.project-demo.info:3000/api
// http://192.168.1.107:3000/api



let axiosInstance;
axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 15000,
});

axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] ='*';
axiosInstance.defaults.headers.post['content-type'] = 'application/json';

// store.subscribe(listener);
function listener() {
  // if (store.getState() !== undefined) {
  //   // axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${store.getState().register.token}`;
  // }
}

const axiosInstanceChange = (type) => {
  axiosInstance.defaults.headers.post['content-type'] = type;
}

export { axiosInstance, axiosInstanceChange };
