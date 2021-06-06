<template>
  <v-container>
    <v-row class="pt-16">
      <v-container class="text-center">
        <v-col cols="12">
          <h1>لورم ایپسوم</h1>
          <p class="pt-5">
            این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق
            و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛
            ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن
            بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک
            ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه:
            من آن‌چه را نمی‌شناسم می‌شناسم...!
          </p>
        </v-col>
      </v-container>
    </v-row>

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
  async fetch() {
    await this.$store.dispatch('post/getPosts')
  },
  head: {
    titleTemplate: '%s | صفحه اصلی',
  },
  computed: {
    posts() {
      return this.$store.state.post.posts
    },
  },
}
</script>
