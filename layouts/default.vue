<template>
  <v-app id="bg-pic" :style="{ backgroundImage: `url(${theme})` }">
    <v-navigation-drawer v-if="mobile" v-model="drawer" right app>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>سولار صنعت خراسان</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          nuxt
          :to="{ name: item.link }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-right flat app dense>
      <v-app-bar-nav-icon
        v-if="mobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="">سولار صنعت خراسان</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-if="!mobile" icon nuxt to="/">
        <span>خانه</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn v-if="!mobile" icon nuxt :to="{ name: 'articles' }">
        <span>مقالات</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn v-if="!mobile" icon nuxt :to="{ name: 'aboutus' }">
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
      drawer: false,
      name: 'انتخاب قالب ...',
      items: [
        { link: 'index', title: 'خانه', icon: 'mdi-home' },
        { link: 'articles', title: 'مقالات', icon: 'mdi-forum' },
        { link: 'aboutus', title: 'درباره ما', icon: 'mdi-forum' },
      ],
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
