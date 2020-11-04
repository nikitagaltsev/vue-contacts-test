<template>
  <section class="contact">
    <h1 class="contact__name">Редактирование контакта</h1>
    <form class="contact__form">
      <label class="contact__label" for="name">{{ contact.name }}</label>
      <input
        type="text"
        name="name"
        class="contact__input"
        placeholder="Редактировать имя"
        required
      />

      <label class="contact__label" for="number"> {{ contact.number }} </label>
      <input
        type="text"
        name="number"
        class="contact__input"
        placeholder="Редактировать номер"
        required
      />

      <label></label>
    </form>
  </section>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$store.getters.contactById(+this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.contact__name {
  color: #145bb8;
}

.contact__form {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.contact__input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
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

.contact__label {
  color: #145bb8;
  font-size: 1.5rem;
  text-transform: capitalize;
}
</style>
