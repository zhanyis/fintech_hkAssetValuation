<template>
  <div>
    <el-card>
      <el-alert
        :title="$t('message.pleaseEnterApart')"
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
          :label="$t('message.area')"
          required
        >
          <el-input
            v-model="form.areas"
            type="number"
            style="width:400px"
          ></el-input>
        </el-form-item>
        <!--<el-form-item label="楼层数">
        <el-input v-model="form.height" type="number" style="width:400px"></el-input>
        </el-form-item>-->
        <el-form-item :label="$t('message.age')" required>
          <el-input
            v-model="form.ages"
            type="number"
            style="width:400px"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.region')" required>
          <el-cascader
            :options="options"
            v-model="value"
            clearable
          ></el-cascader>
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
        type: "apartment",
        areas: "",
        ages: ""
      },
      value: "",
      // show: false,
      load: false
    };
  },
  methods: {
    shows(form) {
      if (this.form.areas == "" || this.form.ages == "" || this.value == "") {
        Message({
          message: this.$t("message.hello"),
          type: "warning"
        });
        return;
      }
      // this.show = false;
      this.load = true;
      form["where"] = this.value;
      form["index"] = this.index;
      form["money"] = this.money;
      //   console.dir(form)
      this.$store.commit("ADD_TO_HISTORY", {
        detail: form
      });
      //   console.log(this.$store.state.historys);
      setTimeout(() => {
        // this.show = true;
        // this.load = false;
        this.$router.push({ path: "/score", query: { amount: this.money } });
      }, 2000);
      // console.log(form);
      // console.log(this.value[1]);
    }
  },
  computed: {
    options() {
      return [
        {
          value: "kowloon",
          label: this.$t("option.Kowloon"),
          children: [
            {
              value: 9472,
              label: this.$t("option.KwunTong")
            },
            {
              value: 12401,
              label: this.$t("option.NgauChiWan")
            },
            {
              value: 11513,
              label: this.$t("option.NgauTauKok")
            },
            {
              value: 12053,
              label: this.$t("option.SanPoKong")
            },
            {
              value: 10487,
              label: this.$t("option.WongTaiSin")
            },
            {
              value: 13385,
              label: this.$t("option.YauTong")
            },
            {
              value: 11433,
              label: this.$t("option.KowloonCity")
            },
            {
              value: 21291,
              label: this.$t("option.KaiTak")
            },
            {
              value: 13051,
              label: this.$t("option.MongKok")
            },
            {
              value: 10195,
              label: this.$t("option.YauMaTei")
            },
            {
              value: 11960,
              label: this.$t("option.LaiChiKok")
            },
            {
              value: 13813,
              label: this.$t("option.CheungShaWan")
            },
            {
              value: 15337,
              label: this.$t("option.SouthwestKowloon")
            },
            {
              value: 13340,
              label: this.$t("option.ShekKipMei")
            },
            {
              value: 10810,
              label: this.$t("option.HoManTin")
            },
            {
              value: 12746,
              label: this.$t("option.TsimShaTsui")
            },
            {
              value: 13286,
              label: this.$t("option.HungHom")
            }
          ]
        },
        {
          value: "HongKong",
          label: this.$t("option.HongKong"),
          children: [
            {
              value: 7628,
              label: this.$t("option.Stanley")
            },
            {
              value: 15367,
              label: this.$t("option.ShekO")
            },
            {
              value: 13329,
              label: this.$t("option.Aberdeen")
            },
            {
              value: 15691,
              label: this.$t("option.PokFuLam")
            },
            {
              value: 14217,
              label: this.$t("option.KennedyTown")
            },
            {
              value: 16134,
              label: this.$t("option.MidLevelsWest")
            },
            {
              value: 16988,
              label: this.$t("option.SheungWan")
            },
            {
              value: 12697,
              label: this.$t("option.Wanchai")
            },
            {
              value: 19442,
              label: this.$t("option.HappyValley")
            },
            {
              value: 14077,
              label: this.$t("option.CausewayBay")
            },
            {
              value: 13314,
              label: this.$t("option.SauKeiWan")
            },
            {
              value: 7908,
              label: this.$t("option.SiuSaiWan")
            },
            {
              value: 14530,
              label: this.$t("option.QuarryBay")
            },
            {
              value: 14055,
              label: this.$t("option.NorthPoint")
            },
            {
              value: 12699,
              label: this.$t("option.ChaiWan")
            }
          ]
        },
        {
          value: "New Territories",
          label: this.$t("option.NewTerritories"),
          children: [
            {
              value: 8917,
              label: this.$t("option.OutlyingIsland")
            },
            {
              value: 10420,
              label: this.$t("option.TaiPo")
            },
            {
              value: 12918,
              label: this.$t("option.TsengKwanO")
            },
            {
              value: 10915,
              label: this.$t("option.ShaTin")
            },
            {
              value: 10003,
              label: this.$t("option.SaiKung")
            },
            {
              value: 12612,
              label: this.$t("option.MaOnShan")
            },
            {
              value: 11003,
              label: this.$t("option.YuenLong")
            },
            {
              value: 7305,
              label: this.$t("option.TinShuiWan")
            },
            {
              value: 11339,
              label: this.$t("option.TuenMun")
            },
            {
              value: 10586,
              label: this.$t("option.TsuenWan")
            },
            {
              value: 9679,
              label: this.$t("option.KwaiChung")
            },
            {
              value: 13096,
              label: this.$t("option.TsingYi")
            },
            {
              value: 9854,
              label: this.$t("option.SheungShui")
            }
          ]
        }
      ];
    },
    money() {
      let apartmentAge = (70 - this.form.ages) / 70;
      let amount =
        Math.round(apartmentAge * this.value[1] * this.form.areas * 1.5 * 100) /
        100;
      return amount > 0 ? amount : 0;
    },
    index: function() {
      return this.$store.state.historys.length;
    }
  }
};
</script>
