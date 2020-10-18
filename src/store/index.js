import Vue from 'vue';
import Vuex from 'vuex';
import * as LoginModule from './Login/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      login: LoginModule,
  },
})
