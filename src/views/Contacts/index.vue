<template>
  <div id="app">
    <p>contacts</p>
  </div>
</template>


<script>


import Contacts from '../../apis/Contacts';

export default {
  name: 'Contacts',
  computed: {
    contacts: {
      get() { return this.$store.state.contacts },
      set(value) { this.$store.state.contacts = value },
    },
  },
  methods: {

  },
  created(){
    Contacts.all()
      .then(res => {
        let products = res.data        
        console.log(products);
      })
      .catch(e => console.error('contacts error', e.response))
  }

}

</script>

<style>
@import './styles.css';
</style>

