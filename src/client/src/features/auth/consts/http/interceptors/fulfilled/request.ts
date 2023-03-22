const authRequestInterceptor = (config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config;
};

export default authRequestInterceptor;
