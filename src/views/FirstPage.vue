<template>
  <div class="about">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in items" :key="item.id">
        <h3>{{ item.message }}</h3>
      </el-carousel-item>
    </el-carousel>
    <hr />
    <MainPage />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";

export default {
  data() {
    return {
      items: [
        { id: 1, message: "借钱梗要还，米比钱中介" },
        { id: 2, message: "最专业的资产评估！" }
      ]
    };
  },
  name: "FirstPage",
  components: {
    MainPage
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
