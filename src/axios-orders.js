import axios from 'axios';

const intance = axios.create({
    baseURL: 'https://react-my-burger-69045.firebaseio.com/'
});

export default intance;