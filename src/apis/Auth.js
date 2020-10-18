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
        return Api.default.post(`${END_POINT}/login`, loginPayload)
            .then(payload => payload.data)
    },

    /**
     * Invalidates the token of the user.
     *
     * @return {Promise<AxiosResponse>} 
     */
    logout() {
        return Api.default.post(`${END_POINT}/logout`)
            .then(payload => payload.data)
    },

    /**
     * Refreshes the token of the user
     *
     * @return {Promise<AxiosResponse>} 
     */
    refresh() {
        return Api.default.post(`${END_POINT}/refresh`)
            .then(payload => payload.data)
    },

    /**
     * Gets the user info that's currently authenticated.
     *
     * @return {Promise<AxiosResponse>} 
     */
    me(){
        return Api.default.get(`${END_POINT}/me`)
            .then(payload => payload.data)
    },
}
