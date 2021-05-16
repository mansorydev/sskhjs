<template>
  <v-app-bar clipped-right flat app dense>
    <v-app-bar-nav-icon v-if="mobile"></v-app-bar-nav-icon>

    <!--    <v-img
      class="mr-3"
      :lazy-src="require('@/assets/images/logo/logo.png')"
      :src="require('@/assets/images/logo/logo.png')"
      max-width="175"
      height="16"
    />-->

    <v-toolbar-title class="">سولار صنعت خراسان</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon nuxt to="/">
      <span>خانه</span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon nuxt :to="{ name: 'articles' }">
      <span>مقالات</span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon nuxt :to="{ name: 'aboutus' }">
      <span>درباره ما</span>
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  head: {
    titleTemplate: '%s | صفحه مقالات',
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>
