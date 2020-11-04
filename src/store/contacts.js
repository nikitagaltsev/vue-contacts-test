import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem("contacts") || "[]"),
  },
  mutations: {
    createContact(state, contact) {
      state.contacts.push(contact);

      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },
  actions: {
    createContact({ commit }, contact) {
      commit("createContact", contact);
    },
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    },
    // Поиск нужного контакта
    contactById: (s) => (id) => s.contacts.find((c) => c.id === id),
  },
});
