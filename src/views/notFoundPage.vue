<template>
  <div class="ld">
    <div>
      <getLost />
    </div>
  </div>
</template>

<script>
import getLost from "@/components/notFound.vue";

export default {
  name: "beingVerySmart",
  components: {
    getLost
  }
};
</script>