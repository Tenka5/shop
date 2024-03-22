<template>
    <CardList :items="queryItems" @add-to-cart="addToCartPus"/>
</template>



  <script setup>
  
  import { ref } from 'vue';
  import { useStore } from 'vuex'
  

  const store = useStore()
  let CartItems = ref([])
  const emit=defineEmits(['addToCart'])
  let CartItems1 = ref([])

  
  const addToCart = (item) =>{
    CartItems.value.push(item)
    item.isAdded=true
  }


  const removeFromCart = (item) =>{
    CartItems.value.splice(CartItems.value.indexOf(item),1)
    item.isAdded=false
  }


  const addToCartPus = (item) =>{
    CartItems1=store.getters.PURCHASES
    CartItems=ref(CartItems1)
    console.log(item)
    if(!item.isAdded){
        addToCart(item)
    }else{
        removeFromCart(item)
    }
    store.dispatch({
      type:'GET_PURCHASES',
      CartItems: CartItems
    })
  }
  

    defineProps({
      queryItems: Array,
  })

  </script>