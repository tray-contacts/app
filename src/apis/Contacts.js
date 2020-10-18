import Api from './Api';

export default {
    /**
     * Gets all the contacts from the user.
     *
     * @return {AxiosResponse}
     */
    all() {
        return Api.get('contacts');
    }

    /**
     * Creates a contact in the database linked to the logged user.
     *
     * @param {Object} storeContactsPayload
     * @return {Promise<AxiosResponse>} 
     */
    create(storeContactsPayload) {
        return Api.post('contacts', storeContactsPayload);
    }

    /**
     * Gets a contact given his id.
     *
     * @param {int} id
     * @return {Promise<AxiosResponse>} 
     */
    get(id) {
        return Api.get(`contacts/${id}`);
    }

    /**
     * Updates a contact information given his id and the update payload
     *
     * @param {int} id
     * @param {Object} updateContactsPayload
     * @return {Promise<AxiosResponse>}
     */
    update(id, updateContactsPayload){
        return Api.put(`contacts/${$id}`, updateContactsPayload);
    }

    /**
     * Deletes a contact given his id.
     *
     * @param {int} id
     * @return {Promise<AxiosResponse} 
     */
    delete(id){
        return Api.delete(`contacts/${id}`)
    }
}
