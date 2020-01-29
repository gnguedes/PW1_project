<template >
  <div class="back">
    <div id="land">
      <landing />
    </div>
  </div>
</template>

<script>
import landing from "@/components/LandingPage.vue";

export default {
  name: "landingPage",
  components: {
    landing
  }
};
</script>
<style scoped>
.back {
  background-image: url(https://s1.1zoom.me/b5050/664/Portugal_Houses_Rivers_487761_1920x1080.jpg);
  background-size: cover;
}
#land {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>

