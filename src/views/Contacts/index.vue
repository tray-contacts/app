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
    
  },
  methods: {

  },
  created(){
    Contacts.all()
      .then(res => {
        console.log(res)        
      })
      .catch(e => console.error('contacts error', e.response))
  }

}

</script>

<style>
@import './styles.css';
</style>

