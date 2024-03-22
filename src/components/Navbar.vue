<template>
  <v-app-bar :elevation="10" color="orange-lighten-2">
    <v-app-bar-title><router-link class="link" to="/"><h1>Магазин книг</h1></router-link></v-app-bar-title>
      <template v-slot:append>
        <v-btn variant="tonal" class="ml-5"><router-link class="link" to="/Drawer">Корзина</router-link></v-btn>
        <v-btn variant="tonal" class="ml-5"><router-link class="link" to="/Editor">Редактировать товар</router-link></v-btn>
      </template>
  </v-app-bar>
</template>
  