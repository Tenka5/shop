import { createStore } from 'vuex';
import { ref } from 'vue';

export default createStore({
  state: {
    purchases: [],
    purchasesId: "5216b6147cde406eb63e2f32cdc60a06"
  },
  mutations: {
    SET_PURCHASES: (state, payload) => {
      state.purchases = payload;
    },
  },
  actions: {
    GET_PURCHASES: async (context, cartItems) => {
      console.log(cartItems);
      let data = cartItems.CartItems;
      context.commit('SET_PURCHASES', ref(data));
    },
  },
  getters: {
    PURCHASES: state => {
      return state.purchases;
    },
    PURCHASESID: state => {
      return state.purchasesId;
    }
  },
});