<template>
  <v-container>
    <v-row class="pt-16">
      <v-card class="mx-auto">
        <v-img class="white--text align-end" height="200px" :src="post.image">
          <!--          <v-card-title> این یک نوشته آزمایشی است</v-card-title>-->
        </v-img>

        <v-card-subtitle class="pb-0"> {{ post.title }} </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ post.body }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text nuxt :to="{ path: `/articles` }">
            برگشت
          </v-btn>

          <!--          <v-btn color="orange" text> Explore </v-btn>-->
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('post/getPost', this.$route.params.id)
  },
  head: {
    titleTemplate: '%s | نمایش اطلاعات',
  },
  computed: {
    post() {
      return this.$store.state.post.post
    },
    user() {
      return this.$store.state.post.user
    },
  },
}
</script>
