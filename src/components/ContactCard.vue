<template>
  <div>
    <router-link class="contacts__link" :to="'/contact/' + id">
      <h2 class="contacts__name">{{ name }}</h2>
      <p class="contacts__number">{{ number }}</p>
    </router-link>
    <button class="contacts__delete-icon" v-on:click="deleteContact"></button>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "number"],
  methods: {
    deleteContact() {
      const result = confirm("Want to delete?");
      if (result) {
        this.$store.dispatch("deleteContact", this.id);
      }
    },
  },
};
</script>

<style scoped>
.contacts__link {
  text-decoration: none;
  color: white;
  display: block;
  width: 100%;
  height: 100%;
}

.contacts__delete-icon {
  width: 25px;
  height: 25px;
  border: none;
  z-index: 10;
  position: absolute;
  bottom: 5px;
  cursor: pointer;
  left: 88px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../images/trash-icon.svg");
}

.contacts__delete-icon:hover {
  transition: ease-in-out 0.2s;
  transform: scale(1.5);
}
</style>
