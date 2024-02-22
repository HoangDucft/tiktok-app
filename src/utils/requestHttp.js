import axios from 'axios';

// đổi tên instance thành request
const request = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

// custom get xong gọi để lấy ra các account luôn
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, data) => {
    const response = await request.post(path, data);
    return response.data;
};

export default request;
