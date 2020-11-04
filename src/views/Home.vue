<template>
  <main class="main">
    <form class="input-container" @submit.prevent="submit">
      <input
        type="text"
        name="name"
        class="input-container__input"
        v-model="name"
        placeholder="Введите имя контакта"
        required
      />
      <input
        type="number"
        name="phone"
        class="input-container__input input-container__input_number"
        v-model="number"
        placeholder="Введите номер"
        required
      />
      <button type="submit" class="input-container__button">
        Добавить контакт
      </button>
    </form>

    <ul class="contacts" v-if="allContacts.length">
      <li
        class="contacts__person"
        v-for="contact in allContacts"
        :key="contact.id"
      >
        <CardContact
          :id="contact.id"
          :name="contact.name"
          :number="contact.number"
        />
      </li>
    </ul>

    <p class="contacts__empty" v-else>Номеров пока нет :(</p>
  </main>
</template>

<script>
import CardContact from "../components/ContactCard";
export default {
  components: {
    CardContact,
  },
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
    }
  },
};
</script>

<style scoped>
.input-container {
  max-width: 500px;
  margin: 0 auto;
}

.input-container__button {
  margin-top: 10px;
  width: 180px;
  height: 50px;
  color: white;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: #145bb8;
}

.input-container__input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #145bb8;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
}

.input-container__input_number {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}

.contacts {
  max-width: 900px;
  margin: 30px auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contacts__empty {
  margin: 40px auto;
  font-weight: bold;
  font-size: 25px;
  color: #145bb8;
}

.contacts__person {
  width: 200px;
  background-color: aliceblue;
  border-radius: 10px;
  margin: 5px;
  height: 135px;
  text-decoration: none;
  background-color: #145bb8;
  position: relative;
}
</style>
