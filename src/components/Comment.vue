<template>
  <div>
    <el-card>
      <div class="input-info">
        <el-alert
          :title="$t('message.plzgiveComment')"
          type="info"
          center
          show-icon
          style="margin-bottom: 10px"
          :closable="false"
        ></el-alert>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item :label="$t('message.name')" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item :label="$t('message.commentArea')" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">{{
              $t("message.submit")
            }}</el-button>
            <el-button @click="resetForm('ruleForm')">{{
              $t("message.reset")
            }}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div
        class="showHistoryResult"
        v-for="item in historyComments"
        :key="item.name"
      >
        <hr class="style14" />
        <div class="comment-head">
          <div class="comment-name">{{ item.name }}</div>
          <div>{{ item.date }}</div>
        </div>
        <div class="comment-content">{{ item.desc }}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        desc: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let realform = JSON.parse(JSON.stringify(this.ruleForm));
          realform["date"] = this.getdate();
          this.$store.commit("ADD_TO_COMMENT", {
            detail: realform
          });
          this.resetForm(formName);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getdate() {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      let h = date.getHours();
      let min = date.getMinutes();
      let s = date.getSeconds();
      return `${y}-${m}-${d} ${h}:${min}:${s}`;
    }
  },
  computed: {
    historyComments() {
      return this.$store.state.historyComments;
    },
    rules() {
      return {
        name: [
          {
            required: true,
            message: this.$t("message.plzname"),
            trigger: "blur"
          }
        ],
        desc: [
          {
            required: true,
            message: this.$t("message.plzcomment"),
            trigger: "blur"
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
.comment-head {
  display: flex;
  justify-content: space-between;
}
.comment-content {
  width: 100%;
  height: auto;
  background-color: lightcyan;
  border: 1px solid lightgoldenrodyellow;
  border-radius: 10px;
  padding: 5px;
  word-break: break-all;
  text-align: left;
  font-size: 24px;
}

hr.style14 {
  border-top: 1px solid #8c8b8b;
  border-bottom: 1px solid #fff;
}

.comment-name {
  font-size: 26px;
  font-weight: bold;
}
</style>
