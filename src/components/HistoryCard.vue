<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item v-if="form.type == 'car'">
        <template slot="title"
          >{{ $t("message.type") }}：{{ form.type }},
          {{ $t("message.assetValue") }}：{{ form.money }}
          {{ $t("message.unit") }}</template
        >
        <div>
          {{ $t("message.buy") }}：{{ form.buy }} {{ $t("message.unit") }},
          {{ $t("message.now") }}：{{ form.now }} {{ $t("message.unit") }}
        </div>
        <div>
          {{ $t("message.year") }}： {{ form.year }},
          {{ $t("message.miles") }}：{{ form.miles }}
        </div>
      </el-collapse-item>
      <el-collapse-item v-if="form.type == 'apartment'">
        <template slot="title"
          >{{ $t("message.type") }}：{{ form.type }},
          {{ $t("message.assetValue") }}：{{ form.money }}
          {{ $t("message.unit") }}</template
        >
        <div>
          {{ $t("message.area") }}： {{ form.areas }},
          {{ $t("message.age") }}：{{ form.ages }},
          {{ $t("message.region") }}：{{ form.where[0] }}
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
