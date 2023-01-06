import axios from 'axios';

const getProfileList = () => {
    return axios.get("https://panorbit.in/api/users.json").then((res) => res.data);
}

export default {
    getProfileList
}