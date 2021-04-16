import axios from 'axios';
import firebaseConfig from './auth/apiKeys';

const BASEURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${BASEURL}/projects.json`)
    .then((resp) => resolve(Object.values(resp.data).reverse()))
    .catch(reject);
});

export default getProjects;
