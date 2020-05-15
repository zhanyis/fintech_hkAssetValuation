<template>
  <div>
    <el-card>
      <el-alert
        :title="$t('message.pleaseEnterVehicle')"
        type="info"
        center
        show-icon
        :closable="false"
      ></el-alert>
      <el-form
        label-position="top"
        label-width="200px"
        :model="form"
        size="medium"
      >
        <el-form-item
          style="margin-top:20px"
          :label="$t('message.buy')"
          required
        >
          <el-input
            v-model="form.buy"
            type="number"
            style="width:400px"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.now')" required>
          <el-input
            v-model="form.now"
            type="number"
            style="width:400px"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.miles')" required>
          <el-input
            v-model="form.miles"
            type="number"
            style="width:400px"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.year')" required>
          <el-date-picker
            v-model="form.year"
            type="month"
            value-format="yyyy-MM"
          ></el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('message.evaluate')" required>
          <el-select v-model="form.value" :placeholder="$t('message.select')">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('message.retention')" required>
          <el-select v-model="form.value1" :placeholder="$t('message.select')">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        icon="el-icon-search"
        :loading="load"
        @click="shows(form)"
        >{{ $t("message.search") }}</el-button
      >
    </el-card>
  </div>
</template>

<script>
import { Message } from "element-ui";

export default {
  data() {
    return {
      form: {
        type: "car",
        buy: "",
        now: "",
        miles: "",
        value: "",
        value1: "",
        year: ""
      },
      // show: false,
      load: false
    };
  },
  computed: {
    options() {
      return [
        {
          value: 0.02,
          label: this.$t("option.excellen")
        },
        {
          value: 0.01,
          label: this.$t("option.good")
        },
        {
          value: 0.00000001,
          label: this.$t("option.general")
        },
        {
          value: -0.01,
          label: this.$t("option.poor")
        },
        {
          value: -0.02,
          label: this.$t("option.veryBad")
        }
      ];
    },
    options1() {
      return [
        {
          value: 0.02,
          label: this.$t("option.sellWell")
        },
        {
          value: 0.01,
          label: this.$t("option.general")
        },
        {
          value: 0.005,
          label: this.$t("option.unsalable")
        }
      ];
    },
    money: function() {
      let oldbuy = parseFloat(this.form.buy);
      let nowbuy = parseFloat(this.form.now);
      let mile = parseFloat(this.form.miles);
      let myDate = new Date();
      let tYear = myDate.getFullYear();
      let tMonth = myDate.getMonth();
      let selMonth = this.form.year.split("-");
      if (selMonth[0] >= tYear && selMonth[1] > tMonth + 1) {
        Message({
          message: this.$t("message.exceedYear"),
          type: "warning"
        });
        return;
      }
      let b1, b2;
      let diffmonth = (tYear - selMonth[0]) * 12 + tMonth + 1 - selMonth[1];
      let sum = 0;
      for (let i = 180, j = diffmonth; j >= 0 && i >= 0; i--, j--) {
        sum += i;
      }
      if (tYear - selMonth[0] <= 3) {
        b1 = 0.3;
        b2 = 0.7;
      } else if (tYear - selMonth[0] <= 10) {
        b1 = 0.2;
        b2 = 0.8;
      } else {
        b1 = 0.1;
        b2 = 0.9;
      }
      let amount = b1 * oldbuy + b2 * nowbuy;
      let index = 0.5 * (sum / 16290 + mile / 50);
      amount =
        Math.round(
          amount * (1 - index + this.form.value + this.form.value1) * 100
        ) / 100;
      return amount > 0 ? amount : 0;
    },
    index: function() {
      return this.$store.state.historys.length;
    }
  },
  methods: {
    shows(form) {
      if (
        this.form.buy == "" ||
        this.form.now == "" ||
        this.form.miles == "" ||
        this.form.year == "" ||
        this.form.value == "" ||
        this.form.value1 == ""
      ) {
        Message({
          message: this.$t("message.hello"),
          type: "warning"
        });
        return;
      }
      if (this.money === undefined) {
        return;
      }
      // this.show = false;
      this.load = true;
      form["index"] = this.index;
      form["money"] = this.money;
      console.dir(form);
      this.$store.commit("ADD_TO_HISTORY", {
        detail: form
      });
      console.log(this.$store.state.historys);
      setTimeout(() => {
        // this.show = true;
        // this.load = false;
        this.$router.push({ path: "/score", query: { amount: this.money } });
      }, 2000);
    }
  }
};
</script>
