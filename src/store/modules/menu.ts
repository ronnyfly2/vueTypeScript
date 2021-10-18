import Menu from "@/models/menu/Menu";

export default {
  namespaced: true,
  state: {
    menu: null,
    activeTab: null,

    error: null,
    loading: false,
  },
  getters: {
    menu: (state: { menu: any; }) => state.menu,
    activeTab: (state: { activeTab: any; }) => state.activeTab,
    error: (state: { error: any; }) => state.error,
    loading: (state: { loading: any; }) => state.loading,
  },
  mutations: {
    SET_MENU: (state: { menu: any; }, payload: any) => (state.menu = payload),
    SET_ACTIVED_TAB: (state: { activeTab: any; }, payload: any) => (state.activeTab = payload),

    SET_ERROR: (state: { error: any; }, payload: any) => (state.error = payload),
    SET_LOADING: (state: { loading: any; }, payload: any) => (state.loading = payload),
  },
  actions: {
    getListMenuAction({ commit }: any, payload: any) {
      commit("SET_LOADING", true);
      return Menu.getList({ ...payload })
        .then((menu) => {
          commit("SET_MENU", menu);
          commit("SET_LOADING", false);
          commit("SET_ACTIVED_TAB", Object.keys(menu)[0]);
          return menu;
        })
        .catch((error) => {
          console.log('error', error)
          commit("SET_ERROR", error.message);
          commit("SET_LOADING", false);
          return Promise.reject(error);
        });
    },
    getActiveTab({ commit }: any, payload: any) {
      commit("SET_ACTIVED_TAB", payload);
    },
  },
};
