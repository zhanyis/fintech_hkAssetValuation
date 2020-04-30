<template>
  <div class="about">
    <el-form
      label-position="right"
      label-width="150px"
      :model="form"
      size="medium"
      style="margin-top:20px"
    >
      <el-form-item style="margin-top:20px" label="使用面积(平方尺)">
        <el-input
          v-model="form.areas"
          type="number"
          style="width:400px"
        ></el-input>
      </el-form-item>
      <!--<el-form-item label="楼层数">
        <el-input v-model="form.height" type="number" style="width:400px"></el-input>
      </el-form-item>-->
      <el-form-item label="楼龄">
        <el-input
          v-model="form.ages"
          type="number"
          style="width:400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <el-cascader :options="options" v-model="value" clearable></el-cascader>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      icon="el-icon-search"
      :loading="load"
      @click="shows(form)"
      >查询</el-button
    >
    <!-- <div>{{money}}</div> -->
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
      load: false,
      options: [
        {
          value: "kowloon",
          label: "九龙",
          children: [
            {
              value: 9472,
              label: "观塘"
            },
            {
              value: 12401,
              label: "牛池湾"
            },
            {
              value: 11513,
              label: "牛头角"
            },
            {
              value: 12053,
              label: "新蒲崗/慈雲山"
            },
            {
              value: 10487,
              label: "橫頭磡/黃大仙"
            },
            {
              value: 13385,
              label: "油塘/茶果嶺"
            },
            {
              value: 11433,
              label: "九龍城"
            },
            {
              value: 21291,
              label: "啟德"
            },
            {
              value: 13051,
              label: "旺角/大角咀"
            },
            {
              value: 10195,
              label: "油麻地/京士柏"
            },
            {
              value: 11960,
              label: "荔枝角"
            },
            {
              value: 13813,
              label: "長沙灣/深水埗"
            },
            {
              value: 15337,
              label: "西南九龍"
            },
            {
              value: 13340,
              label: "石硤尾/又一村"
            },
            {
              value: 0,
              label: "九龍塘"
            },
            {
              value: 10810,
              label: "何文田"
            },
            {
              value: 12746,
              label: "尖沙咀"
            },
            {
              value: 13286,
              label: "紅磡/土瓜灣"
            }
          ]
        },
        {
          value: "HongKong",
          label: "香港岛",
          children: [
            {
              value: 7628,
              label: "赤柱"
            },
            {
              value: "15367",
              label: "大谭/石澳"
            },
            {
              value: "13329",
              label: "香港仔/鸭脷洲"
            },
            {
              value: "15691",
              label: "薄扶林"
            },
            {
              value: "14217",
              label: "坚尼地城"
            },
            {
              value: "16134",
              label: "西半山"
            },
            {
              value: "16988",
              label: "上环/西盘营"
            },
            {
              value: "12697",
              label: "湾仔"
            },
            {
              value: "19442",
              label: "跑马地/黄泥涌"
            },
            {
              value: "14077",
              label: "铜锣湾"
            },
            {
              value: "13314",
              label: "肖其湾/西湾河"
            },
            {
              value: "7908",
              label: "小西湾"
            },
            {
              value: "14530",
              label: "鲗鱼涌"
            },
            {
              value: "14055",
              label: "北角"
            },
            {
              value: "12699",
              label: "柴湾"
            }
          ]
        },
        {
          value: "New Territories",
          label: "新界",
          children: [
            {
              value: "8917",
              label: "离岛"
            },
            {
              value: "10420",
              label: "大埔"
            },
            {
              value: "10915",
              label: "沙田"
            },
            {
              value: "10003",
              label: "西贡"
            },
            {
              value: "12612",
              label: "马鞍山"
            },
            {
              value: "11003",
              label: "元朗"
            },
            {
              value: "7305",
              label: "天水围"
            },
            {
              value: "11339",
              label: "屯门"
            },
            {
              value: "10586",
              label: "荃湾"
            },
            {
              value: "9679",
              label: "葵涌"
            },
            {
              value: "13096",
              label: "青衣"
            },
            {
              value: "9854",
              label: "上水/粉领"
            }
          ]
        }
      ]
    };
  },
  methods: {
    shows(form) {
      if (this.form.areas == "" || this.form.ages == "" || this.value == "") {
        Message({
          message: "不能为空！",
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
    money() {
      let apartmentAge = (70 - this.form.ages) / 70;
      return (
        Math.round(apartmentAge * this.value[1] * this.form.areas * 1.5 * 100) /
        100
      );
    },
    index: function() {
      return this.$store.state.historys.length;
    }
  }
};
</script>

<style scoped>
.about {
  background: #fff;
  border-radius: 2px;
  padding: 20px 40px 0px;
  margin: 2rem;
  position: relative;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
</style>
