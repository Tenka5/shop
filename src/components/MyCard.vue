<template>
    <v-col>
        <v-card
        max-width="300"
        >
        <v-img
            :src="imageUrl"
            cover
        ></v-img>
    
        <v-card-title>
            {{title}}
        </v-card-title>
    
        <v-card-subtitle>
            Жанр: {{genre}}<br/>
            Автор: {{author}}<br/>
            Год выхода: {{year}}<br/>
            Цена: {{prise}} Руб.
        </v-card-subtitle>
    
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            :color="isAdded ? '#202225' : 'orange-lighten-2'"
            variant="tonal"
            @click="onClickAdd"
            >
            Купить
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-col>
  </template>
  
  <script setup>

    defineProps({
      title: String,
      imageUrl: String,
      genre: String,
      author: String,
      year: Number,
      prise: Number,
      isAdded: Boolean,
      onClickAdd: Function,
    })
    
  </script>