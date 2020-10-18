<template>
  <div id="app">
    <v-form ref="form">
      <v-container> 
        <v-text-field
          label="Email"
          v-model="email"
          required
        ></v-text-field>
        <v-text-field
          label="Senha"
          v-model="password"
          required
        ></v-text-field>
        <v-layout justify-space-between>
          <v-btn @click="login">Login</v-btn>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Auth from '../../apis/Auth';
import axios from 'axios';

export default {
  name: 'Login',
  computed: {
    email: {
      get() { return this.$store.state.email; },
      set(value) { this.$store.state.email = value; }
    },
    password: {
      get() { return this.$store.state.password; },
      set(value) { this.$store.state.password = value; }
    }
  },
  methods: {
    generatePayload(){
      return {
        email: this.$store.state.email,
        password: this.$store.state.password
      };
    },

    handleLogon(token){
      console.log("LOGGED ON")
      axios.defaults.headers.common['Authorization'] = `bearer ${token.access_token}`;
      this.$router.push('/contacts')
    },

    login(){
      const payload = this.generatePayload();
      Auth.login(payload)
        .then(res => this.handleLogon(res.data))
        .catch(e => console.error(e));
    },
  },

  created(){
    this.$store.state.email = "";
    this.$store.state.password = "";
  }

}
</script>

<style>
@import './styles.css';
</style>


