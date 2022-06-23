<template>
    <h2>Tutorial View</h2>
    <h4>{{ message }}</h4>
    <h3> {{tutorial.title}}</h3>
    <v-btn color="success" @click="goEditTutorial()"
    >Edit</v-btn>
     <v-btn color="success" @click="goAddLesson(id)"
    >Add Lesson</v-btn>

     <v-row>
        <v-col  cols="8"
              sm="2">
            <span class="text-h6">Title</span>
        </v-col>
        <v-col  cols="8"
              sm="4">
            <span class="text-h6">Description</span>
        </v-col>
        <v-col  cols="8"
              sm="1">
            <span class="text-h6">Edit</span>
        </v-col>
        <v-col  cols="8"
              sm="1">
            <span class="text-h6">Delete</span>
        </v-col>
      </v-row>
      <LessonDisplay
        v-for="lesson in lessons"
        :key="lesson.id"
        :lesson="lesson"
        @deleteLesson="goDeleteLesson(lesson)"
        @updateLesson="goEditLesson(lesson)"
    />

   
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
import LessonDataService from "../services/LessonDataService";
import LessonDisplay from '@/components/LessonDisplay.vue';
export default {
  name: "view-tutorial",
  props: ['id'],
    components: {
        LessonDisplay
    },
  data() {
    return {
      tutorial: {},
      lessons : [],
      message: "Add, Edit or Delete Lessons"
    };
  },
  methods: {
    retrieveLessons() {
      TutorialDataService.get(this.id)
        .then(response => {
          this.tutorial= response.data;
          LessonDataService.getAllLessons(this.id)
            .then(response=> {
              this.lessons = response.data})
            .catch(e => {
                this.message = e.response.data.message;
              });
            })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
     goEditTutorial() {
      this.$router.push({ name: 'edit', params: { id: this.id } });
    },
    goEditLesson(lesson) {
      this.$router.push({ name: 'editLesson', params: { tutorialId: this.id,lessonId: lesson.id} });
    },
    goAddLesson() {
      this.$router.push({ name: 'addLesson', params: { tutorialId: this.id } });
    },

    goDeleteLesson(lesson) {
      LessonDataService.deleteLesson(lesson.tutorialId,lesson.id)
        .then( () => {
          this.retrieveLessons()
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel(){
        this.$router.push({ name: 'tutorials' });
    }
  },
    mounted() {
    this.retrieveLessons();
  }
}
</script>

<style>
</style>