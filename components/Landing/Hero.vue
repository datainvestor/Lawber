<template>
  <div class="hero1 pt-5">
    <div class="autocomp mx-auto pt-0">
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-2 rounded-0"
        hide-no-data
        hide-details
        label="Search lawpeople"
        solo
        flat
      />
      <v-btn text class="my-auto">
          Explore
            <v-icon
        right
        dark
      >
        mdi-arrow-right
      </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      names: [
        "Tomasz Konarzewski",
        "Łukasz Gotowiec",
        "Ewelina Rogala",
        "Karolina Norek",
        "Michał Michalski",
        "Mokry",
        "Andrzej Duda",
        "Tuleja",
      ],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.names.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style>
.hero1 {
  justify-content: center;
  position: relative;
  background-image: url("~/static/office1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}
.autocomp {
    max-width: 350px;
    display: flex;
    background: white;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 48px;
    border-radius: 2px;
}
</style>
