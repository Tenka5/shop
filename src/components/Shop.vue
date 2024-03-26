<template>
    <CardList :items="queryItems" @add-to-cart="addToCartCheck"/>
</template>



  <script setup>
  
  import { ref } from 'vue';
  import { useStore } from 'vuex'
  

  const store = useStore()
  let cartItems = ref([])
  const emit=defineEmits(['addToCart'])

  
  const addToCart = (item) =>{
    cartItems.value.push(item)
    item.isAdded=true
  }


  const removeFromCart = (item) =>{
    cartItems.value.splice(cartItems.value.indexOf(item),1)
    item.isAdded=false
  }


  const addToCartCheck = (item) =>{
    cartItems=ref(store.getters.PURCHASES)
    if(!item.isAdded){
        addToCart(item)
    }else{
        removeFromCart(item)
    }
    store.dispatch({
      type:'GET_PURCHASES',
      CartItems: cartItems
    })
  }
  

    defineProps({
      queryItems: Array,
  })

  </script>