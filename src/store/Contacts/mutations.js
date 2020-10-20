export default {
    handleStoreContactPayload(res){
        let contacts = res.data        
        this.$store.state.contacts = contacts;
        console.log(contacts)
    }, 
}
