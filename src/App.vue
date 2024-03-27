<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view :items-to-filtr="items"></router-view>
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
    console.log(response.data)
    items.value=response.data
    console.log(items);
  })
  .catch(error => {
    console.log(error);
  });

</script>
