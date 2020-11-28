import { httpCreate } from './http.js';

const  http = httpCreate('dashboard/');
export const polling = {
    getPurchasePolling(orderId) {
        return http.get(`liucheng?s=${orderId}`)
    }
}