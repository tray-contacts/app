import Vue from 'vue';
import Vuex from 'vuex';

import * as state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions: actions,
    namespaced: true,
});
