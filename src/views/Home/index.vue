<template>
  <div id="app">
    <v-form v-model="valid" ref="form">
      <v-container> 
        <v-text-field
          label="Enter your e-mail address"
          v-model="email"
          required
        ></v-text-field>
        <v-text-field
          label="Enter your password"
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

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: mapState,
  methods: {
    ...mapActions(['login']);
  },
}
</script>

<style>
@import './styles.css';
</style>


