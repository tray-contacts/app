<template >
  <v-data-table
    data-app
    :headers="headers"
    :items="contacts"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Meus contatos</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Novo Contato</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.facebook" label="Facebook"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.linkedin" label="LinkedIn"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)" >
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)" >
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:no-data>
      <p>Sem contatos para exibir.</p>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'
import Contacts from '../../apis/Contacts';

export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: 'Nome', value: 'name', },
      { text: 'Email', value: 'email', },
      { text: 'Facebook', value: 'socials.data.facebook', },
      { text: 'LinkedIn', value: 'socials.data.linkedin', },
      { text: 'Gerenciar', value: 'action', sortable: false },
    ],
    contacts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      email: '',
      facebook: '',
      linkedin: '',
    },
    defaultItem: {
      name: '',
      email: '',
      facebook: '',
      linkedin: '',
    },
  }),
  mounted() {
    this.fetchItems()
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Novo contato' : 'Editar contato'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
  },
  created () {
    this.fetchItems();
  },

  methods: {

    handleContactsPayload(payload){
      this.contacts = payload.data
      console.log(this.contacts);
    },


    fetchItems(){
      let isLogged = axios.defaults.headers.common['Authorization'];
      if(isLogged) {
        Contacts.all()
          .then(this.handleContactsPayload)
          .catch(e => console.error(e.response))
        this.$forceUpdate();
      }
      else
        this.$router.push('/')
    },

    editItem (item) {
      this.editedIndex = this.contacts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedID = this.editedItem.id
      this.name = this.editedItem.name
      this.email = this.editedItem.email
      this.facebook = this.editedItem.socials.data.facebook;
      this.linkedin = this.editedItem.socials.data.linkedin;
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.contacts.indexOf(item)
      this.deletedItem = Object.assign({}, item)
      this.deletedID = this.deletedItem.id
      if (confirm("Você realmente quer excluir este contato?")) {
        Contacts.delete(this.deletedID)
          .catch(e => console.log(e.response));
        this.contacts.splice(index, 1);
      }
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    contactUpdatedFacebook(id){
      return this.editedItem.socials.data.facebook !== this.contacts[id].socials.data.facebook;
    },
    contactUpdatedLinkedin(id){
      return this.editedItem.socials.data.linkedin !== this.contacts[id].socials.data.linkedin;
    },
    contactUpdatedEmail(id){
      return this.editedItem.email !== this.contacts[id].email;
    },
    generateEditPayload(){
      let id = this.editedItem.id;
      let ret = {};
      ret.socials = {};
      ret.telephone = {};
      ret.id = this.editedItem.id;
      ret.name = this.editedItem.name;
      if(!this.contactUpdatedEmail(id))
        ret.email = this.editedItem.email;
      if(!this.contactUpdatedFacebook(id))
        ret.socials.facebook = this.editedItem.socials.data.facebook;
      if(!this.contactUpdatedLinkedin(id))
        ret.socials.linkedin = this.editedItem.socials.data.linkedin;

      // TODO: telephones
      return ret;
    },
    generateNewPayload(){
      console.log('editedItem', this.editedItem);
      let ret = {};
      ret.socials = {};
      ret.telephone = {};
      ret.id = this.editedItem.id;
      ret.name = this.editedItem.name;
      if(this.editedItem.email)
        ret.email = this.editedItem.email;
      if(this.editedItem.facebook)
        ret.socials.facebook = this.editedItem.facebook;
      if(this.editedItem.linkedin)
        ret.socials.linkedin = this.editedItem.linkedin;
      // TODO: telephones
      return ret;
    },
    save () { // Edit Item
      if (this.editedIndex > -1) {
        Object.assign(this.contacts[this.editedIndex], this.editedItem)
        let payload = this.generateEditPayload();
        Contacts.update(this.editedItem.id, payload)
          .catch(e => console.error(e.response))

        // New Item
      } else {
        let payload = this.generateNewPayload();
        Contacts.create(payload)
          .then(this.contacts.push(this.editedItem))
          .catch(e => console.error(e.response))
      }

      this.close()
    },
  },
}
</script>
