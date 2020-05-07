import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // history
    historys: [
      // {
      //   index: 0,
      //   type: "car",
      //   buy: "250000",
      //   now: "88888",
      //   miles: "30",
      //   value: "0.02",
      //   value1: "0.02",
      //   year: "2019-03",
      //   money: 23333
      // },
      // {
      //   index: 1,
      //   type: "car",
      //   buy: "250000",
      //   now: "88888",
      //   miles: "30",
      //   value: "0.02",
      //   value1: "0.02",
      //   year: "2019-03",
      //   money: 233333
      // },
      // {
      //   index: 2,
      //   type: "apartment",
      //   ages: "25",
      //   areas: "1000",
      //   where: ["kowloon", 9472],
      //   money: 9133714.29
      // }
    ],
    historyComments: [
      {
        name: "PUBLIC BONK",
        desc: "每月平息低至0.11%",
        date: "2020-5-3 19:50:22"
      },
      {
        name: "H5BC",
        desc: "欢迎来我们这里贷款，利息低至7里",
        date: "2020-5-2 13:50:23"
      }
    ]
  },
  mutations: {
    ADD_TO_HISTORY(state, payload) {
      state.historys.push(payload.detail);
    },
    REMOVE_FROM_HISTORY(state, payload) {
      const { historyId } = payload;
      state.historys = state.historys.filter(
        history => history.index !== historyId
      );
    },
    ADD_TO_COMMENT(state, payload) {
      state.historyComments.unshift(payload.detail);
    }
  },
  actions: {},
  modules: {}
});
