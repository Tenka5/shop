<template>
  <v-container fluid>
    <v-row>
     <v-col v-for="item in items" :key="item._id" cols="2" class="mx-0">
          <MyCard
          :key="item._id"
          :title="item.title"
          :image-url="item.imageUrl"
          :genre="item.genre"
          :author="item.author"
          :year="item.year"
          :prise="item.prise"
          :is-added="item.isAdded"
          :on-click-add="()=>emit('addToCart', item)"
          />
      </v-col>
   </v-row>  
  </v-container>
</template>
  
  <script setup>

  const emit=defineEmits(['addToCart'])
  defineProps({
    items: Array,
  })

  </script>