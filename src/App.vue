<template>
  <div id="app">
    <el-container style="height:100%">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <router-link to="/">{{ $t("message.mainPage") }}</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">{{ $t("message.assetValuation") }}</template>
          <el-menu-item index="2-1">
            <router-link to="/about">{{ $t("message.car") }}</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/apartment">{{
              $t("message.apartment")
            }}</router-link>
          </el-menu-item>
        </el-submenu>
        <!--<el-menu-item index="3">
          <router-link to="/score">Start</router-link>
        </el-menu-item>-->
        <el-menu-item index="3">
          <router-link to="/person">{{ $t("message.history") }}</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <el-button
            type="primary"
            @click="changelang()"
            round
            icon="el-icon-refresh"
            >{{ $t("message.changelang") }}</el-button
          >
        </el-menu-item>
      </el-menu>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        COMP7300 FINTECH
      </el-footer>
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
    changelang() {
      if (this.$i18n.locale === "cn") {
        this.$i18n.locale = "en";
        localStorage.setItem("lang", "en");
      } else {
        this.$i18n.locale = "cn";
        localStorage.setItem("lang", "cn");
      }
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
