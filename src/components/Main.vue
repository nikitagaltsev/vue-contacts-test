<template>
  <main class="main">
    <form class="input-container" @submit.prevent="submit">
      <input
        type="text"
        name="name"
        class="input-container__input"
        v-model="name"
        placeholder="введите имя контакта"
        required
      />
      <input
        type="number"
        name="phone"
        class="input-container__input"
        v-model="number"
        placeholder="введите номер"
        required
      />
      <button type="submit" class="input-container__button">
        Добавить контакт
      </button>
    </form>

    <ul class="contacts" v-if="allContacts.length">
      <li
        class="contracts__person"
        v-for="contact in allContacts"
        :key="contact.id"
      >
        <router-link tag="button" :to="'/contact/' + contact.id">
          <h2 class="contracts__name">{{ contact.name }}</h2>
          <p class="contracts__number">{{ contact.number }}</p>
        </router-link>
      </li>
    </ul>
    <p v-else>Номеров пока нет :(</p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      number: "",
    };
  },
  computed: {
    allContacts() {
      return this.$store.getters.allContacts;
    },
  },
  methods: {
    submit() {
      const contact = {
        name: this.name,
        number: this.number,
        id: Date.now(),
      };
      this.$store.dispatch("createContact", contact);
    },
  },
};
</script>

<style scoped>
.contacts {
  max-width: 900px;
  margin: 30px auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contracts__person {
  width: 200px;
  background-color: aliceblue;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
}
</style>
