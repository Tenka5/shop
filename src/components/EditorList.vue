<template>
    <v-container fluid >
        <v-row>
            <v-col v-for="item in items" :key="item._id" cols="2" class="mx-0">
                <EditorCard 
                :key="item._id"
                :_id="item._id"
                :title="item.title"
                :imageUrl="item.imageUrl"
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

  const emit=defineEmits(['addToCart', 'ChangeCart'])
  defineProps({
    items: Array,
  })

  </script>