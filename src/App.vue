<template>
  <div id="app">
    <el-container style="height:100%">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">资产评估</template>
          <el-menu-item index="2-1">
            <router-link to="/about">汽车</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/apartment">房产</router-link>
          </el-menu-item>
        </el-submenu>
        <!--<el-menu-item index="3">
          <router-link to="/score">Start</router-link>
        </el-menu-item>-->
        <el-menu-item index="3">
          <router-link to="/person">History Search</router-link>
        </el-menu-item>
      </el-menu>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>COMP7300 FINTECH</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#app,
html,
body {
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
