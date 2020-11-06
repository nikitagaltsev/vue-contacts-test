import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem("contacts") || "[]"),
  },
  mutations: {
    // Создание контакта
    createContact(state, contact) {
      state.contacts.push(contact);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    // Удаление нужного контакта
    deleteContact(state, id) {
      const idx = state.contacts.findIndex(c => +c.id === id);
      state.contacts.splice(idx, 1);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    // Обновляем контакт
    updateContact(state, {id, key, value}) {
      const idx = state.contacts.findIndex(c => +c.id === id);
      // используем Vue.set для достижения реактивности
      Vue.set(state.contacts[idx].info, key, value)
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteAdditionalInfo(state, {id, key}) {
      const idx = state.contacts.findIndex(c => +c.id === id);
      Vue.delete(state.contacts[idx].info, key)
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    }
  },
  actions: {
    createContact({ commit }, contact) {
      commit("createContact", contact);
    },
    deleteContact({ commit }, id) {
      commit("deleteContact", id)
    },
    updateContact({commit}, id) {
      commit("updateContact", id)
    },
    deleteAdditionalInfo({ commit }, id) {
      commit("deleteAdditionalInfo", id)
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
