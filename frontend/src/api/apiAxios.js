import axios from 'axios';
import Cookies from 'js-cookie';

const apiAxios = axios.create({
  baseURL: 'https://msf0k2kshg.execute-api.ap-southeast-2.amazonaws.com/test/',
});

apiAxios.interceptors.request.use(config => {
  const id_token = Cookies.get('id_token');
  if (id_token) {
    config.headers.authorization = `Bearer ${id_token}`;
  }

  return config;
});

export default apiAxios;
