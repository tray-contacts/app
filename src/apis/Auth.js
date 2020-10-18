import * as Api from './Api';

const END_POINT = 'auth';

export default {
    /**
     * Authenticates the user.
     *
     * @param {Object} loginPayload
     * @return {Promise<AxiosResponse>}
     */
    login(loginPayload) {
        return Api.post(`${END_POINT}/login`, loginPayload);
    },

    /**
     * Invalidates the token of the user.
     *
     * @return {Promise<AxiosResponse>} 
     */
    logout() {
        return Api.post(`${END_POINT}/logout`);
    },

    /**
     * Refreshes the token of the user
     *
     * @return {Promise<AxiosResponse>} 
     */
    refresh() {
        return Api.post(`${END_POINT}/refresh`);
    },

    /**
     * Gets the user info that's currently authenticated.
     *
     * @return {Promise<AxiosResponse>} 
     */
    me(){
        return Api.get(`${END_POINT}/me`);
    },
}
