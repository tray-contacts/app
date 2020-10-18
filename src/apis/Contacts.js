import Api from './Api';

export default {
    all() {
        return Api.get('contacts');
    }

    create(storeContactsPayload) {
        return Api.post('contacts', storeContactsPayload);
    }

    get() {
        return Api.get(`contacts/${id}`);
    }

    update(updateContactsPayload){
        return Api.put(`contacts/${$id}`, updateContactsPayload);
    }

    delete(id){
        return Api.delete(`contacts/${id}`)
    }
}
