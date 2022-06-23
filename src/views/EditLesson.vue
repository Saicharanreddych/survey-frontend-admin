<template>
    <h1>Edit Lesson</h1>
    <h4>{{ message }}</h4>
    <h4>Tutorial : {{tutorialId}} Lesson : {{lessonId}}</h4>

    <v-form>
       <v-text-field
            label="Title"
            v-model="lesson.title"
        />
        <v-text-field
            label="Description"
            v-model="lesson.description"
        />
        <v-row justify="center">
            <v-col col="2"> </v-col>
            <v-col col="2">
                <v-btn color="success" @click="saveLesson()"
                    >Save</v-btn
                >
            </v-col>
            <v-col col="2">
                <v-btn color="info" @click="cancel()">Cancel</v-btn>
            </v-col>
            <v-col col="2"> </v-col>
        </v-row>
    </v-form>
</template>
<script>
import LessonDataService from "../services/LessonDataService";
export default {
  name: "edit-lesson",
  props: {tutorialId : String,lessonId:String},
  data() {
    return {
      lesson: Object,
      message: "Enter data and click save"
    };
  },
  methods: {
    retrieveLesson() {
      LessonDataService.getLesson(this.tutorialId,this.lessonId)
        .then(response => {
          this.lesson= response.data;
        })
        .catch(e => {
          this.message = e.response.data.message;
        });

    },
    saveLesson() {
      var data = {
        title: this.lesson.title,
        description: this.lesson.description,
        tutorialId : this.lesson.tutorialId
      };
      LessonDataService.updateLesson(this.lesson.tutorialId,this.lesson.id, data)
        .then(response => {
          this.lesson.id = response.data.id;
        
         this.$router.push({ name: 'view' , params: { id: this.lesson.tutorialId }} );
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel(){
        this.$router.push({ name: 'view' , params: { id: this.lesson.tutorialId }} );
    }
  },
    mounted() {
      this.retrieveLesson();
  }
}

</script>
<style>

</style>