import Api from './Api';

export default {
    /**
     * Authenticates the user.
     *
     * @param {Object} loginPayload
     * @return {Promise<AxiosResponse>}
     */
    login(loginPayload) {
        return Api.post('auth/login', loginPayload);
    }

    /**
     * Invalidates the token of the user.
     *
     * @return {Promise<AxiosResponse>} 
     */
    logout() {
        return Api.post('auth/logout');
    }

    /**
     * Refreshes the token of the user
     *
     * @return {Promise<AxiosResponse>} 
     */
    refresh() {
        return Api.post('auth/refresh');
    }

    /**
     * Gets the user info that's currently authenticated.
     *
     * @return {Promise<AxiosResponse>} 
     */
    me(){
        return Api.get('auth/me');
    }
}
