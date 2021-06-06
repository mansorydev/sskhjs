<template>
  <v-container>
    <v-row class="pt-16">
      <v-col v-for="(post, i) of posts" :key="i" class="col-12 col-md-4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ post.title }}</div>
              <v-list-item-title class="headline mb-1">
                تکنولوژی
              </v-list-item-title>
              <v-list-item-subtitle>{{ post.body }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text :to="{ path: `/articles/${post.id}` }">
              نمایش
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await fetch('/api/posts')
  },
  head: {
    titleTemplate: '%s | صفحه مقالات',
  },
}
</script>
