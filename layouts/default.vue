<template>
  <v-app id="bg-pic" :style="{ backgroundImage: `url(${theme})` }">
    <v-app-bar clipped-right flat app dense>
      <v-app-bar-nav-icon v-if="mobile"></v-app-bar-nav-icon>

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

      <v-menu offset-y bottom>
        <template #[`activator`]="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-compare</v-icon>
          </v-btn>
        </template>

        <v-card class="mx-auto" max-width="300">
          <v-system-bar color="indigo darken-4">
            <span>{{ name }}</span>
            <v-spacer></v-spacer>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>

          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="pic in pics"
                :key="pic.link"
                class="d-flex child-flex"
                cols="4"
              >
                <v-img
                  :src="pic.link"
                  height="100px"
                  @click.stop="$store.commit('theme/setPic', pic.link)"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: 'انتخاب قالب ...',
      pics: [
        { link: require(`~/assets/images/theme/1.jpg`) },
        { link: require(`~/assets/images/theme/2.jpg`) },
        { link: require(`~/assets/images/theme/3.jpg`) },
        { link: require(`~/assets/images/theme/4.jpg`) },
        { link: require(`~/assets/images/theme/5.jpg`) },
      ],
    }
  },
  computed: {
    theme() {
      return this.$store.state.theme.pic
    },
    mobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
  mounted() {
    this.$store.commit('theme/getLocalStorage')
  },
}
</script>
