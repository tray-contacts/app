<template>
  <div>

    <v-toolbar id="toolbar" fixed light color="navbar" class="elevation-2">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text custom-typography">Tray Contacts</v-toolbar-title>
      <v-spacer></v-spacer>

      <div id="logout" @click.prevent="logout">
        <v-row>
          <v-icon class="custom-typography" dark>mdi-logout</v-icon>
        </v-row>
      </div>
    </v-toolbar>

    <v-container fluid>
      <v-navigation-drawer v-model="drawer" fixed app clipped class="drawer-style">
        <v-list-item id="avatar-content">
          <v-list-item-avatar>
            <v-img :src="imgUser"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title id="item-title">{{ nameUser }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list dense class="pt-3" id="v_list">
          <v-list-item v-for="(item, index) in menu" :key="index" :to="item.page">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>

  </div>
</template>

<script>

import Auth from '../../apis/Auth';

export default {
  name: "Menu",
  data: () => ({
    drawer: true,
    nameUser: String,
    imgUser: 'https://randomuser.me/api/portraits/men/78.jpg',
    menu: [
      { name: "Página Inicial", page: "/", icon: "mdi-desktop-mac-dashboard" },
      { name: "Contatos", page: "contacts", icon: "mdi-account-search" },
    ],
  }),
  methods:{
    logout(){
      if(this.$route.name === "Login") return;
      Auth.logout() // no need to check for 401 errors
        .catch(e => console.log('ALREADY LOGGED OUT'));
      this.$router.push('/'); // the logout page
    }
  },
  mounted(){
    this.nameUser = 'Leonardo'
  }
};
</script>

<style scoped>
  @import('./styles.css');
</style>
