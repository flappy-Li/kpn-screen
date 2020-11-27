import axios from 'axios';


const APP_APIPATH = 'http://124.128.226.201:28080/'; 
const env = {
    apiPath:APP_APIPATH
}

const config = {
    ...env,
    errors(err) {
        const msg = err.code === "ECONNABORTED" ? "网络超时，请刷新重试" : err.msg || err.message || err.toString();
        showToast(msg);
        console.log(err)
    },
    filter(res) {
        const { status, data } = res;
        if( status >= 200 && status < 300) {
            res.ok = true;
            return res;
        }
        this.errors(data.msg);
        res.ok = false;
        return res;
    },
}

const httpCreate = ( baseURL, timeout = 20e3) => {
    const instance = axios.create({
        baseURL:config.apiPath + baseURL,
        timeout,
        withCredentials: false,
        // headers: {'Cache-Control': 'no-cache', Pargma: 'no-cache'}
    });
    instance.interceptors.response.use(config.filter.bind(config));
    return instance;
}
const { errors, filter } = config;
export { httpCreate, errors, filter };