<template>
  <div>
    <div class="scoreContainer">
      <h3>{{ $t("message.yourAssetValue") }}</h3>
      <div class="scoreValue">
        {{ $route.query.amount }}{{ $t("message.unit") }}
      </div>
    </div>
    <MainPage />
  </div>
</template>

<script>
import MainPage from "@/components/MainPage.vue";
export default {
  components: {
    MainPage
  }
};
</script>

<style scoped>
.scoreContainer {
  border: 2px solid pink;
  background: #fff;
  border-radius: 15px;
  margin: 2rem;
  padding: 1rem;
  position: relative;
  height: 250px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.scoreValue {
  margin: 0;
  padding: 0;
  font-size: 18px;
}

h3 {
  margin-bottom: 0px;
  margin-top: 0px;
  height: 140px;
}
</style>
