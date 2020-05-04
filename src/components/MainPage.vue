<template>
  <div>
    <div class="flex-box">
      <div class="car-card" @click="herfcar">
        <i class="iconfont icon-cheliang"></i>
        <span>
          {{ $t("message.carValuation") }}
        </span>
      </div>
      <div class="apart-card" @click="herfapart">
        <i class="iconfont icon-fangwufangchan"></i>
        <span>
          {{ $t("message.apartmentValuation") }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    herfcar() {
      this.$router.push({ path: "/about" });
    },
    herfapart() {
      this.$router.push({ path: "/apartment" });
    }
  }
};
</script>

<style scoped>
.car-card:hover {
  background-color: lightcyan;
}
.apart-card:hover {
  background-color: lightgreen;
}
.apart-card,
.car-card {
  height: 150px;
  background-color: #fff;
  width: 48%;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
  font-size: 24px;
}
.flex-box {
  display: flex;
  justify-content: space-between;
}
</style>
