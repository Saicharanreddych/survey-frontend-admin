<template>
    <h1>Tutorial Edit</h1>
    <h4>{{ message }}</h4>
    <v-form>
       <v-text-field
            label="Title"
            v-model="tutorial.title"
        />
        <v-text-field
            label="Description"
            v-model="tutorial.description"
        />
        <v-text-field
            label="Description"
            v-model="tutorial.published"
        />
        <v-row justify="center">
            <v-col col="2"> </v-col>
            <v-col col="2">
                <v-btn color="success" @click="updateTutorial()"
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
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "edit-tutorial",
  props: ['id'],
  data() {
    return {
      tutorial: {},
      message: "Enter data and click save"
    };
  },
  methods: {
    retrieveTutorial() {
      TutorialDataService.get(this.id)
        .then(response => {
          this.tutorial= response.data;
        })
        .catch(e => {
          this.message = e.response.data.message;
        });

    },

    updateTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description

      };
      TutorialDataService.update(this.id,data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log("add "+response.data);
          this.$router.push({ name: 'tutorials' });
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
    this.retrieveTutorial();
  }
}

</script>
<style>

</style>