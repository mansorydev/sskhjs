<template>
  <v-container>
    <v-row class="pt-16">
      <v-card class="mx-auto">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title> این یک نوشته آزمایشی است</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> لورم ایپسوم </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</div>

          <div>از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
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
  head: {
    titleTemplate: '%s | نمایش اطلاعات',
  },
}
</script>
