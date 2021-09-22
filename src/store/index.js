import { createStore } from "vuex";
import API from "../services/api";
import _ from "lodash";

const { getRequest } = new API();
export default createStore({
  state: {
    deals: [],
    deal: null,
    loading: false,
  },
  mutations: {
    GET_DEALS(state, deals) {
      state.loading = false;
      state.deals = deals;
    },
    async GET_DEAL(state, deal) {
      const storedStores = localStorage.getItem("stores");
      let stores = Array();
      if (storedStores) {
        stores = JSON.parse(storedStores);
      } else {
        localStorage.setItem(
          "stores",
          JSON.stringify(await getRequest("/stores"))
        );
      }
      deal.gameInfo = {
        ...deal.gameInfo,
        storeName: stores.filter(
          (store) => store.storeID == deal.gameInfo.storeID
        )[0].storeName,
      };
      deal.gameInfo.retailPrice = parseFloat(deal.gameInfo.retailPrice).toFixed(
        2
      );
      deal.gameInfo.salePrice = parseFloat(deal.gameInfo.salePrice).toFixed(2);

      if (deal.cheaperStores.length > 0) {
        deal.cheaperStores = deal.cheaperStores.map((cheapStore) => {
          return {
            ...cheapStore,
            storeName: stores.filter(
              (store) => store.storeID == cheapStore.storeID
            )[0].storeName,
          };
        });
      }
      state.loading = false;
      state.deal = deal;
    },
    DEALS_ON_SALE(state) {
      state.deals = _.cloneDeep(state.deals).filter(
        (deal) => deal.salePrice > 0
      );
    },
    SET_LOADER(state, value) {
      state.loading = value;
    },
  },
  actions: {
    getDeals({ commit }, query = null) {
      commit("SET_LOADER", true);
      getRequest("/deals", query).then((response) => {
        response.length > 0 && commit("GET_DEALS", response);
      });
    },
    getDeal({ commit }, id) {
      commit("SET_LOADER", true);
      getRequest(`/deals?id=${id}`).then((response) => {
        commit("GET_DEAL", response);
      });
    },
  },
});
