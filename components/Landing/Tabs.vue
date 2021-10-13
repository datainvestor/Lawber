<template>
  <v-sheet color="#E6E6EE">
    <v-slide-group
      :class="$vuetify.breakpoint.xs ? 'pa-2' : 'pa-4'"
      center-active
      show-arrows
      mandatory
    >
      <v-slide-item v-for="n in 6" :key="n" v-slot="{ active, toggle }">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-4 my-2 rounded-0"
            :max-width="$vuetify.breakpoint.xs ? 200 : 516"
            :elevation="hover ? 6 : 2"
            :class="{ 'on-active': active, 'on-hover': hover }"
            :ripple="false"
            @click="toggle"
          >
            <v-card-text>
              <div class="text--primary">
                "I love using Lawber for a few hours when I have a big wave of
                indidual research I need to do. App is easy to use, unlike other
                available sources"
              </div>
              <v-divider class="divider1 mt-6" />
              <div class="font-weight-medium">
                Łukasz Gotowiec
              </div>
              <p class="caption">
                Lead Lawyer, Abstergo Industries
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style scoped>
.v-card--link:before {
  background: none;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.v-card.on-active {
  opacity: 1;
}
.divider1 {
  width: 100px;
  border-color: rgba(3, 3, 206, 0.685) !important;
}
</style>
