import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const getHeaders = (withToken) => {
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  
    if (withToken) {
        const token = localStorage.getItem( 'token' );
        headers.Authorization = 'Bearer ' + token;
    }

    console.log(headers);
    return headers;
};

export const login = async (payload, withToken = true) => {
    const url = '/users/auth-with-password';

    const response = await axiosConfig.post(url, payload, {
        headers: getHeaders(withToken)
    });

    return response;
}

export const getUser = async (userId, withToken = true) => {
    const url = '/users/records/'+userId;
    const response = await axiosConfig.get(url, {
        headers: getHeaders(withToken)
    });

    return response;
}
