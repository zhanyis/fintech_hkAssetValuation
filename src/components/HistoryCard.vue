<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item v-if="form.type == 'car'">
        <template slot="title">
          种类：{{ form.type }}, 资产估算价格为：{{ form.money }} 元
        </template>
        <div>当时买入价：{{ form.buy }} 元, 现在买入价：{{ form.now }} 元</div>
        <div>购入年份： {{ form.year }}, 使用里程数：{{ form.miles }}</div>
      </el-collapse-item>
      <el-collapse-item v-if="form.type == 'apartment'">
        <template slot="title">
          种类：{{ form.type }}, 资产估算价格为：{{ form.money }} 元
        </template>
        <div>
          建筑面积： {{ form.areas }}, 楼龄：{{ form.ages }}, 地段：{{
            form.where[0]
          }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: ["form"]
};
</script>
