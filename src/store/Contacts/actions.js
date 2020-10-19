export default {
    GET_ALL_CONTACTS: {
        Contacts.all()
          .then(this.handleStoreContactPayload)
          .catch(e => console.error('contacts error', e.response))
    }

}
