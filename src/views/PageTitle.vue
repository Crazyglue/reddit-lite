<template>
  <v-toolbar app>

    <v-flex md2>

      <v-toolbar-title>
        <v-btn to="/" color="primary" flat icon>
          <v-icon>home</v-icon>
        </v-btn>
        {{ name }}
      </v-toolbar-title>
    </v-flex>

    <v-flex md4 offset-md2>
      <v-form @submit="goToSubreddit" onSubmit="return false;">
        <v-text-field v-model="subredditName" label="Enter Subreddit"></v-text-field>
      </v-form>
    </v-flex>

  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "PageTitle",
  data() {
    return {
      subredditName: ""
    };
  },
  computed: {
    ...mapGetters(["name"]),
    ...mapState(["subredditSearchResults"])
  },
  methods: {
    goToSubreddit() {
      this.$router.push({ path: this.subredditName });
    }
  }
};
</script>

<style>
</style>
