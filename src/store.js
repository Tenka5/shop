import { createStore } from 'vuex'


export default createStore({
  state: {
      purchases: [],
      purchasesId: "cccee478c3374ed1bb41b9998b005dab"
    },
  mutations: {
    SET_PURCHASES: (state, payload) => {
        state.purchases = payload;
    },
  },
  actions:{
    GET_PURCHASES: async (context, CartItems) => {
        let data = CartItems.CartItems;
        context.commit('SET_PURCHASES', data)
    },
  },
  getters: {
    PURCHASES: state => {
      return state.purchases;
    },
    PURCHASESID: state =>{
      return state.purchasesId
    }
},
});