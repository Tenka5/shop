<template>
    <CardList :items="count" @add-to-cart="addToCartPus"/>
</template>

<script setup>

  import { ref, computed} from 'vue';
  import { useStore } from 'vuex'


  let CartItems = ref([])
  const emit=defineEmits(['addToCart'])
  const store = useStore()
  let CartItems1 = ref([])


  const count = computed(() =>{
    CartItems1=store.getters.PURCHASES
    CartItems=ref(CartItems1)
    return CartItems1
    })


  const addToCart = (item) =>{
    CartItems.value.push(item)
    item.isAdded=true
  }


  const removeFromCart = (item) =>{
    CartItems.value.splice(CartItems.value.indexOf(item),1)
    item.isAdded=false
  }


  const addToCartPus = (item) =>{
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

</script>