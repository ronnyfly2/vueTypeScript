import ShopCar from "@/models/shopCar/ShopCar";
import ShopCarItems from "@/utils/shopCarItems";
export default {
  namespaced: true,
  state: {
    shopCar: ShopCarItems.getShopCarData(),
    totalCar: ShopCarItems.getTotalCar(),
    error: null,
    loading: false,
  },
  getters: {
    shopCar: (state: { shopCar: any }):void => state.shopCar,
    totalCar: (state: { totalCar: any }) => state.totalCar,
    error: (state: { error: any }) => state.error,
    loading: (state: { loading: any }) => state.loading,
  },
  mutations: {
    SET_SHOPCAR: (state: { shopCar: any }, payload: any) =>
      (state.shopCar = payload),
    SET_TOTAL_CAR: (state: { totalCar: any }, payload: any) =>
      (state.totalCar = payload),
    SET_ERROR: (state: { error: any }, payload: any) => (state.error = payload),
    SET_LOADING: (state: { loading: any }, payload: any) =>
      (state.loading = payload),
  },
  actions: {
    addProductAction({ dispatch, commit, state }: any, payload: any) {
      commit("SET_LOADING", true);
      const moreProducts = state.shopCar;
      const resultListProduct = ShopCar.addProduct(moreProducts, payload);
      ShopCarItems.setShopCarData(resultListProduct);
      commit("SET_SHOPCAR", resultListProduct);
      dispatch("getTotalCarAction", resultListProduct);
      commit("SET_LOADING", false);
    },
    subtractProductAction({ dispatch, commit, state }: any, payload: any) {
      commit("SET_LOADING", true);
      const lessProduct = state.shopCar;
      const resultListProduct = ShopCar.subtractProduct(lessProduct, payload);
      ShopCarItems.setShopCarData(resultListProduct);
      commit("SET_SHOPCAR", resultListProduct);
      dispatch("getTotalCarAction", resultListProduct);
      commit("SET_LOADING", false);
    },
    removeProductAction({ dispatch, commit, state }: any, payload: any) {
      commit("SET_LOADING", true);
      const lessProduct = state.shopCar;
      const resultListProduct = ShopCar.removeProduct(lessProduct, payload);
      ShopCarItems.setShopCarData(resultListProduct);
      commit("SET_SHOPCAR", resultListProduct);
      dispatch("getTotalCarAction", resultListProduct);
      commit("SET_LOADING", false);
    },
    getTotalCarAction({ commit }: any, payload: any) {
      const total = ShopCar.getTotalCar(payload);
      ShopCarItems.setTotalCar(total), commit("SET_TOTAL_CAR", total);
    },
  },
};
