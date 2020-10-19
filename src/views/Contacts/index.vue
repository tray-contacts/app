<template>
  <div id="app">
    <div v-for="contact in contacts" v-bind:key="contact.id">
      <v-card light>
        <v-card-title>{{contact.name}}</v-card-title>
        <v-card-subtitle><strong>Email: {{contact.email}}<br>Telefone: {{contact.telephone.data.phone_number}}</strong></v-card-subtitle>
        <v-card-actions v-bind:key="contact.socials.data.id">
          <v-btn primary @click="editContact(contact)">Editar</v-btn>
          <v-btn error @click="deleteContact(contact)">Excluir</v-btn>
          <v-btn icon > <v-icon right>mdi-linkedin</v-icon> </v-btn>
          <v-btn icon > <v-icon right>mdi-facebook</v-icon> </v-btn>
        </v-card-actions>
      </v-card>


    </div>


    <div data-app>
      <v-row justify="center">
        <v-dialog v-model="dialog"
          persistent
          max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Editar 
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="Nome"
                      type="text"
                      v-bind:key="name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Email"
                      type="text"
                      v-bind:key="email"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Facebook"
                      type="text"
                      v-bind:key="facebook"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Linkedin"
                      type="text"
                      v-bind:key="linkedin"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Telefone"
                      type="text"
                      v-bind:key="telefone"
                    ></v-text-field>
                  </v-col>
                </v-row>


              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false" >
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="updateContact" > 
                Atualizar 
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>



  </div>
</template>


<script>


import Contacts from '../../apis/Contacts';
import axios from 'axios';

export default {
  name: 'Contacts',
  computed: {
    contacts: {
      get() { return this.$store.state.contacts },
      set(value) { this.$store.state.contacts = value },
    },
    dialog: {
      get() { return this.$store.state.dialog },
      set(value) { this.$store.state.dialog = value },
    },
    name: {
      get() { return this.$store.state.name },
      set(value) { this.$store.state.name = value },
    },
    email: {
      get() { return this.$store.state.email },
      set(value) { this.$store.state.email = value },
    },
    linkedin: {
      get() { return this.$store.state.linkedin },
      set(value) { this.$store.state.linkedin = value },
    },
    facebook: {
      get() { return this.$store.state.facebook },
      set(value) { this.$store.state.facebook = value },
    },
    telephone: {
      get() { return this.$store.state.telephone },
      set(value) { this.$store.state.telephone = value },
    },
    isUpdating: {
      get() { return this.$store.state.isUpdating },
      set(value) { this.$store.state.isUpdating }
    } 
  },
  methods: {
    inverseDialog(){
      this.$store.state.dialog = !this.$store.state.dialog;
    },
    handleContactsPayload(res){
      let contacts = res.data        
      this.$store.state.contacts = contacts;
      console.log(contacts)
    },

    deleteContactFromList(id){
      console.log('deleteContactFromList id');
    },
    deleteContact(id){
      console.log("deleting a contact", id)
      Contacts.delete(id)
        .then(res => this.deleteContactFromList(id))
    },
    editContact(contact){
      this.$store.state.email = contact.email;
      this.$store.state.name = contact.name;
      this.$store.state.facebook = contact.socials.data.facebook;
      this.$store.state.linkedin = contact.socials.data.linkedin;
      this.$store.state.telephone = contact.socials.data.telephone;
      this.$store.state.dialog = true;
      console.log('dialog: ', this.$store.state.dialog);
    },

  },
  created(){
    let isLogged = axios.defaults.headers.common['Authorization'];
    if(isLogged) {
      Contacts.all()
        .then(this.handleContactsPayload)
        .catch(e => console.error('contacts error', e.response))
      this.$forceUpdate();
    }
    else
      this.$router.push('/')
  },
  updateContact(){
    console.log("update contact")
  }
}

</script>

<style>
@import './styles.css';
</style>

