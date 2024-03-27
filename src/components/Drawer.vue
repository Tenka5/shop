<template>
    <CardList :items="count" @add-to-cart="addToCartCheck"/>
</template>

<script setup>

  import { ref, computed} from 'vue';
  import { useStore } from 'vuex'


  let cartItems = ref([])
  const emit=defineEmits(['addToCart'])
  const store = useStore()


  const count = computed(() =>{
    cartItems=ref(store.getters.PURCHASES)
    return store.getters.PURCHASES
    })


  const addToCart = (item) =>{
    cartItems.value.push(item)
    item.isAdded=true
  }


  const removeFromCart = (item) =>{
    cartItems.value.splice(cartItems.value.indexOf(item),1)
    item.isAdded=false
  }


  const addToCartCheck = (item) =>{
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

</script>