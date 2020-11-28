import { httpCreate } from './http.js';

const  http = httpCreate('api/bigscreen/display/');
export const polling = {
    getPurchasePolling(tabId) {
        return http.get(`machineInformation${tabId}`)
    }
}