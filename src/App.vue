<template>
  <div id="app">
    <el-container class="home-container">
      <el-header>
        <span class="head-title"
          ><i class="iconfont icon-qian"></i
          >{{ $t("message.evaluateSystem") }}</span
        >
        <div>
          <div class="lang-icon" @click="changeen">
            <i class="iconfont icon-yingwen"></i>
          </div>
          <div class="lang-icon" @click="changezh">
            <i class="iconfont icon-zhongwen"></i>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollaspe ? '64px' : '200px'">
          <div class="toggle-button" @click="toggleCollaspe">
            <i class="iconfont icon-ellipsis"></i>
          </div>
          <el-menu
            style="border-right:none"
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#8585e0"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            :collapse="isCollaspe"
            :collapse-transition="false"
          >
            <el-menu-item index="/">
              <i class="iconfont icon-all"></i>
              <span slot="title">{{ $t("message.mainPage") }}</span>
            </el-menu-item>
            <el-submenu>
              <template slot="title">
                <i class="iconfont icon-qian1"></i>
                <span>{{ $t("message.assetValuation") }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/about"
                  ><i class="iconfont icon-cheliang"></i
                  >{{ $t("message.car") }}</el-menu-item
                >
                <el-menu-item index="/apartment"
                  ><i class="iconfont icon-fangwufangchan"></i
                  >{{ $t("message.apartment") }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/person">
              <i class="iconfont icon-history"></i>
              <span slot="title">{{ $t("message.history") }}</span>
            </el-menu-item>
            <el-menu-item index="/discuss">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">{{ $t("message.commentArea") }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-footer>COMP7300 FINTECH</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollaspe: false
    };
  },
  methods: {
    changezh() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "cn";
        localStorage.setItem("lang", "cn");
      }
    },
    changeen() {
      if (this.$i18n.locale === "cn") {
        this.$i18n.locale = "en";
        localStorage.setItem("lang", "en");
      }
    },
    toggleCollaspe() {
      this.isCollaspe = !this.isCollaspe;
    }
  }
};
</script>

<style>
html,
body,
#app,
.home-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #99c2ff;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
}

.el-aside {
  background-color: #8585e0;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e6e6ff;
  color: #333;
  text-align: center;
}
.toggle-button {
  background-color: #e6ecff;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
}
.head-title {
  font-size: 24px;
}
.lang-icon {
  display: inline-block;
  margin: 2px;
}
</style>
