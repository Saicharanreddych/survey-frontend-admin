<template>
    <h1>Tutorial Add</h1>
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
        <v-row justify="center">
            <v-col col="2"> </v-col>
            <v-col col="2">
                <v-btn color="success" @click="saveTutorial()"
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
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: "Enter data and click save"
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      };
      TutorialDataService.create(data)
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
  }
}

</script>
<style>

</style>