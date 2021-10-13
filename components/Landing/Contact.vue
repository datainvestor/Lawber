<template>
  <v-sheet color="rgb(23, 24, 26)" dark>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-img
            class="px-0"
            src="/logodark.png"
            max-height="100"
            max-width="100"
            contain
          />
          <v-card-text class="px-0">
            <div class="text-h5">Lawber, Law made simple</div>
            <div class="text--subtitle-1">Powered up research, now, at your service, everywhere.</div>
          </v-card-text>
        </v-col>
        <v-col cols="6">
          <div class="font-weight-bold mb-4">Resources</div>
          <ul>
            <li><NuxtLink to="/">Homepage</NuxtLink></li>
            <li><NuxtLink to="/inspire">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/landing">ToS</NuxtLink></li>
            <li><NuxtLink to="/careers">Careers</NuxtLink></li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style scoped>
a,
a:visited {
  text-decoration: none;
  color: rgb(138, 143, 153);
}

a:hover {
  color: #da7676;
}

li {
  padding: 0.05rem 0;
}
ul {
    list-style-type: none;
    padding: 0;
}

</style>
