<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card shadow="hover">
          <router-link to="/about">{{
            $t("message.carValuation")
          }}</router-link>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover"
          ><router-link to="/apartment">{{
            $t("message.apartmentValuation")
          }}</router-link></el-card
        >
      </el-col>
    </el-row>
    <el-card shadow="hover" style="height: 200px">
      广告位招租！！！
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    herfcar() {
      this.$router.push({ path: "/about" });
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>
