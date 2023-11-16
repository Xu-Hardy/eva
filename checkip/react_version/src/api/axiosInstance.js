// api/axiosInstance.js

import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: '/api',  // 如果你的所有API请求都带有此前缀，那么可以在这里设置
    timeout: 10000,   // 设置请求超时时间（10秒）
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosInstance1 = axios.create({
    baseURL: '/speedtest',  // 如果你的所有API请求都带有此前缀，那么可以在这里设置
    timeout: 10000,   // 设置请求超时时间（10秒）
    headers: {
        'Content-Type': 'application/json',
    },
});


export const axiosInstance2 = axios.create({
    baseURL: '/ip-api',  // 如果你的所有API请求都带有此前缀，那么可以在这里设置
    timeout: 10000,   // 设置请求超时时间（10秒）
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosInstance3 = axios.create({
    baseURL: '/ipcn',  // 如果你的所有API请求都带有此前缀，那么可以在这里设置
    timeout: 10000,   // 设置请求超时时间（10秒）
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器 - 可以在这里添加例如token等公共请求头
axiosInstance.interceptors.request.use(
    config => {
        // 示例：将token添加到请求头中
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
    },
    error => Promise.reject(error)
);

// 响应拦截器 - 可以在这里统一处理响应错误
axiosInstance.interceptors.response.use(
    response => response.data,  // 直接返回请求的数据部分
    error => {
        // 在此处处理响应错误，例如对特定错误代码或消息进行处理
        return Promise.reject(error);
    }
);

// export default axiosInstance;
// export  axiosInstance2;
// export
