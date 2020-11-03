import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    createContact(state, newContact) {
      state.contacts.push(newContact)
    }
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    }
  }
});
