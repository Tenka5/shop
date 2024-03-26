<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view :items-1="items"></router-view>
    </v-main>
  </v-app>
</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex'


const store = useStore()
const items = ref([])


axios.get('https://crudcrud.com/api/'+store.getters.PURCHASESID+'/books')
  .then(response => {
    items.value=response.data
  })
  .catch(error => {
    console.log(error);
  });

</script>
