<template>
  <div>
    <h1>历史记录</h1>
    <HistoryCard
      v-for="history in historys"
      :key="history.index"
      :form="history"
    ></HistoryCard>
    <!-- <button @click="detail"></button>-->
  </div>
</template>

<script>
import HistoryCard from "@/components/HistoryCard.vue";

export default {
  computed: {
    historys() {
      return this.$store.state.historys;
    }
  },
  methods: {
    detail() {
      console.log(this.historys);
    }
  },
  components: {
    HistoryCard
  }
};
</script>
