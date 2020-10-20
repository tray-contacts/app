<template>
  <div>
    <v-toolbar id="toolbar" fixed light color="navbar" class="elevation-2">
      <v-toolbar-title class="white--text custom-typography">
        Agenda
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div id="logout" @click.prevent="logout">
        <v-row>
          <v-icon class="custom-typography" light>mdi-logout</v-icon>
        </v-row>
      </div>
    </v-toolbar>
  </div>
</template>

<script>

import Auth from '../../apis/Auth';

export default {
  name: "Menu",
  data: () => ({
  }),
  methods:{
    logout(){
      if(this.$route.name === "Login") return;
      Auth.logout() // no need to check for 401 errors
        .catch(e => console.log('ALREADY LOGGED OUT'));
      this.$router.push('/'); // the logout page
    }
  },
};
</script>

<style scoped>
@import('./styles.css');
</style>
