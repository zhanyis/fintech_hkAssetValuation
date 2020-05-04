<template>
  <div>
    <h1>{{ $t("message.history") }}</h1>
    <HistoryCard
      v-for="history in historys"
      :key="history.index"
      :form="history"
    ></HistoryCard>
    <!-- <button @click="detail"></button>-->
    <Comment></Comment>
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
