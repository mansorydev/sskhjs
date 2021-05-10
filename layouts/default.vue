<template>
  <v-app id="bg-pic" :style="{ backgroundImage: `url(${theme})` }">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.state.theme.pic
    },
  },
  mounted() {
    this.$store.commit('theme/getLocalStorage')
  },
}
</script>
