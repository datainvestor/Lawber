<template>
  <v-app>
    <v-app-bar fixed flat app color="white">
      <v-container class="pt-1 fill-height">
        <v-img
          class="mx-2"
          src="/logo.png"
          max-height="100"
          max-width="100"
          contain
        />
        <v-spacer />
        <v-btn text>About Lawber</v-btn>
        <v-btn icon>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      title: "Vuetify.js",
    };
  },
};
</script>
