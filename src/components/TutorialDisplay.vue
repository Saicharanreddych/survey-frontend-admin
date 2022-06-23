<template>
<v-row>
  <v-col  cols="9"
        sm="2">
      <span >{{ tutorial.title }}</span>
  </v-col>
  <v-col  cols="9"
        sm="4">
      <span> {{ tutorial.description }}</span>
  </v-col>
  <v-col  cols="9"
        sm="1">
      <v-btn size="x-small" icon="mdi-pencil" @click="updateTutorial"/>
  </v-col>
  <v-col  cols="9"
        sm="1">
      <v-btn size="x-small" icon="mdi-format-list-bulleted-type" @click="viewTutorial"/>
  </v-col>
  <v-col  cols="9"
        sm="1">
      <v-btn size="x-small" icon="mdi-trash-can" @click="deleteTutorial"/>
  </v-col>
</v-row>
</template>

<script>
export default {
  props: {
    tutorial: Object
  },
  data() {
    return {
      
    };
  },
  methods: {

    deleteTutorial() {
      this.$emit("deleteTutorial");
    },
    updateTutorial() {
      this.$emit("updateTutorial");
    },
    viewTutorial() {
      this.$emit("viewTutorial");
    }
  }
};
</script>

<style></style>
