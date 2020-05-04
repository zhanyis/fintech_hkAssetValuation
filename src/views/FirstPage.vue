<template>
  <div class="about">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item>
        <img style="height: 100%" src="@/assets/asset1.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img style="height: 100%" src="@/assets/asset2.jpg" />
      </el-carousel-item>
    </el-carousel>
    <MainPage />
    <div class="adv-card" @click="stop">
      <span class="adv-text">{{ msg }}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";

export default {
  data() {
    return {
      msg: "「忠告：借錢梗要還，咪俾錢中介」。 "
    };
  },
  name: "FirstPage",
  components: {
    MainPage
  },
  mounted() {
    console.log(this.msg);
    var _this = this;
    _this.interval = setInterval(function() {
      //获取第一个字符
      var start = _this.msg.substring(0, 1);
      //得到后面的字符
      var end = _this.msg.substring(1);
      //重新赋值
      _this.msg = end + start;
    }, 400);
  },
  methods: {
    stop: function() {
      //停止定时器
      clearInterval(this.interval);
    }
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

.adv-card {
  height: 150px;
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  font-size: 60px;
  overflow: hidden;
}
.adv-text {
  width: 100%;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  color: red;
}
</style>
