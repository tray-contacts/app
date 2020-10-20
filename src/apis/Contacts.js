import * as Api from './Api';

const END_POINT = 'contacts';

export default {
    /**
     * Gets all the contacts from the user.
     *
     * @return {AxiosResponse}
     */
    all() {
        return Api.default.get(END_POINT)
            .then(payload => payload.data);
    },

    /**
     * Creates a contact in the database linked to the logged user.
     *
     * @param {Object} storeContactsPayload
     * @return {Promise<AxiosResponse>} 
     */
    create(storeContactsPayload) {
        return Api.default.post(END_POINT, storeContactsPayload)
            .then(payload => payload.data)
    },

    /**
     * Gets a contact given his id.
     *
     * @param {int} id
     * @return {Promise<AxiosResponse>} 
     */
    get(id) {
        return Api.default.get(`${END_POINT}/${id}`)
            .then(payload => payload.data)
    },

    /**
     * Updates a contact information given his id and the update payload
     *
     * @param {int} id
     * @param {Object} updateContactsPayload
     * @return {Promise<AxiosResponse>}
     */
    update(id, updateContactsPayload){
        return Api.default.put(`${END_POINT}/${id}`, updateContactsPayload)
            .then(payload => payload.data)
    },

    /**
     * Deletes a contact given his id.
     *
     * @param {int} id
     * @return {Promise<AxiosResponse} 
     */
    delete(id){
        return Api.default.delete(`${END_POINT}/${id}`)
            .then(payload => payload.data)
    },
}
