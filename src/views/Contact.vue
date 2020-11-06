<template>
  <section class="contact">
    <h1 class="contact__name">Редактирование контакта "{{ contact.name }}"</h1>

    <form class="edit-form" @submit.prevent="submit">
      <input class="edit-form__input" placeholder="Название" v-model="key" />
      <input class="edit-form__input" placeholder="Значение" v-model="value" />

      <button class="edit-form__btn" type="submit">✔</button>
      <button class="edit-form__btn" type="button" @click="resetMainFields">
        ⚔
      </button>
    </form>

    <h2 class="contact__title">Основные данные</h2>
    <p class="contact__key">Имя - {{ contact.name }}</p>
    <p class="contact__value">Номер телефона - {{ contact.number }}</p>

    <h3 class="contact__subtitle">Дополнительные данные</h3>
    <ul class="additional">
      <li
        class="additional__item"
        v-for="(value, name) in contact.info"
        :key="value"
      >
        <div class="additional__wrap">
          <input class="contact__inline-input" v-bind:value="name" />
          <button class="contact__inline-input-reset_name">⛏</button>
          <hr />
          <input class="contact__inline-input" v-bind:value="value" />
          <button class="contact__inline-input-reset_value">⛏</button>
        </div>

        <button class="edit-form__btn" type="submit">✔</button>
        <button class="edit-form__btn" type="button">
          ⚔
        </button>

        <button
          class="contacts__delete-icon"
          v-on:click="deleteItem(name)"
        ></button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$store.getters.contactById(+this.$route.params.id);
    },
    contactInfo() {
      return this.contact.info;
    },
  },
  data() {
    return {
      key: "",
      value: "",
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("updateContact", {
        id: this.contact.id,
        key: this.key,
        value: this.value,
      });
    },
    resetMainFields() {
      const result = confirm("Сбросить поля ввода?");
      if (result) {
        (this.key = ""), (this.value = "");
      }
    },
    deleteItem(name) {
      const result = confirm("Удалить этот пункт?");
      if (result) {
        this.$store.dispatch("deleteAdditionalInfo", {
          id: this.contact.id,
          key: name,
        });
      }
    },
  },
};
</script>

<style scoped>
.contact__name {
  color: #145bb8;
}

.edit-form {
  max-width: 800px;
  margin: 0 auto;
}

.edit-form__input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  margin: 10px;
  width: calc((100% / 2) - 30px);
  font-size: 16px;
  padding: 5px;
  box-shadow: none;
  box-sizing: content-box;
}

.contact__label {
  color: #145bb8;
  font-size: 1.5rem;
  text-transform: capitalize;
}

.edit-form__btn {
  margin: 5px;
  width: 40px;
  height: 40px;
}

.edit-form__btn:first-of-type {
  background-color: green;
}

.edit-form__btn:last-of-type {
  background-color: red;
}

.contact__title {
  color: #145bb8;
}

.contact__subtitle {
  color: #145bb8;
}

.additional {
  max-width: 950px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.additional__item {
  width: 250px;
  height: 150px;
  margin: 10px;
  border-radius: 10px;
  background-color: #145bb8;
  color: white;
}

.additional__wrap {
  margin-top: 15px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.contact__inline-input {
  text-align: center;
  background-color: transparent;
  position: relative;
  color: white;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid white;
}

.contact__inline-input-reset_name {
  position: absolute;
  top: 5px;
  right: 10px;
}

.contact__inline-input-reset_value {
  position: absolute;
  top: 45px;
  right: 10px;
}

.contacts__delete-icon {
  width: 25px;
  height: 25px;
  border: none;
  z-index: 10;
  cursor: pointer;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../images/trash-icon.svg");
}
</style>
