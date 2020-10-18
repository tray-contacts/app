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
    login(){
      const payload = {
        email: this.$store.state.email,
        password: this.$store.state.password
      };

      Auth.login(payload)
        .then(res => {
          axios.defaults.headers.common['Authorization'] = `bearer ${res.data.access_token}`;
          this.$router.push('/contacts')
        })
        .catch(e => console.error(e));
    },
  }
}
</script>

<style>
@import './styles.css';
</style>


