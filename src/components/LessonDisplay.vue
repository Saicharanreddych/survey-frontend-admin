<template>
<v-row>
  <v-col  cols="8"
        sm="2">
      <span >{{ lesson.title }}</span>
  </v-col>
  <v-col  cols="8"
        sm="4">
      <span> {{ lesson.description }}</span>
  </v-col>
  <v-col  cols="8"
        sm="1">
      <v-btn size="x-small" icon="mdi-pencil" @click="updateLesson"/>
  </v-col>
  <v-col  cols="8"
        sm="1">
      <v-btn size="x-small" icon="mdi-trash-can" @click="deleteLesson"/>
  </v-col>
</v-row>
</template>

<script>
export default {
  props: {
    lesson: Object
  },
  data() {
    return {
      
    };
  },
  methods: {

    deleteLesson() {
      this.$emit("deleteLesson");
    },
    updateLesson() {
      this.$emit("updateLesson");
    }
  }
};
</script>

<style></style>
