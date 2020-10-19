<template>
  <div id="app">
    <div v-for="contact in contacts" v-bind:key="contact.id">
      <v-card>
        <v-card-title>{{contact.name}}</v-card-title>
        <v-card-subtitle><strong>Email: {{contact.email}}<br>Telefone: {{contact.telephone.data.phone_number}}</strong></v-card-subtitle>
          <v-card-actions v-for="social in contact.socials" v-bind:key="social.id">
          <v-btn icon >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
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
        let contacts = res.data        
        this.$store.state.contacts = contacts;
        console.log(contacts)
      })
      .catch(e => console.error('contacts error', e.response))
  }

}

</script>

<style>
@import './styles.css';
</style>

