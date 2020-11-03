<template>
  <main class="main">
    <form class="input-container" @submit.prevent="submit">
      <input
        type="text"
        name="name"
        class="input-container__input"
        v-model="name"
        placeholder="введите имя контакта"
      />
      <input
        type="number"
        name="phone"
        class="input-container__input"
        v-model="number"
        placeholder="введите номер"
      />
      <button type="submit" class="input-container__button">
        Добавить контакт
      </button>
    </form>

    <ul class="contacts">
      <li
        class="contracts__person"
        v-for="contact in allContacts"
        :key="contact.id"
      >
        <ContactCard
          :id="contact.id"
          :name="contact.name"
          :number="contact.number"
        />
      </li>
    </ul>
  </main>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ContactCard from "./ContactCard";
export default {
  data() {
    return {
      name: "",
      number: "",
    };
  },
  components: {
    ContactCard,
  },
  computed: mapGetters(["allContacts"]),
  methods: {
    ...mapMutations(["createContact"]),
    submit() {
      this.createContact({
        name: this.name,
        number: this.number,
        id: Date.now(),
      });
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
}

.contracts__person {
  max-width: 250px;
  background-color: aliceblue;
  border-radius: 10px;
  margin: 5px;
}
</style>
