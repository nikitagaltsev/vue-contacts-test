import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem("contacts") || "[]"),
  },
  mutations: {
    // Создание контакта5
    createContact(state, contact) {
      state.contacts.push(contact);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    // Удаление нужного контакта
    deleteContact(state, id) {
      const idx = state.contacts.findIndex(c => +c.id === id);
      state.contacts.splice(idx, 1);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    }
  },
  actions: {
    createContact({ commit }, contact) {
      commit("createContact", contact);
    },
    deleteContact({ commit }, id) {
      commit("deleteContact", id)
    }
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    },
    // Поиск нужного контакта
    contactById: (s) => (id) => s.contacts.find((c) => c.id === id),
  },
});
