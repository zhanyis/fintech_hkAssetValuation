<template>
  <div class="about">
    <AssetForm />
  </div>
</template>

<script>
// @ is an alias to /src
import AssetForm from "@/components/AssetForm.vue";

export default {
  name: "About",
  components: {
    AssetForm
  }
};
</script>

<style scoped>
.about {
  background: #fff;
  border-radius: 2px;
  padding: 20px 40px 0px;
  margin: 2rem;
  position: relative;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
</style>
