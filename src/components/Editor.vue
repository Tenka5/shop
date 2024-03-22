<template>
    <v-btn class="ml-3 px-3 my-2" @click="addTest">Добавить тестовую книгу</v-btn>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn class="ml-3 px-3 my-2" v-bind="props">Добавить лот</v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Добавить лот">
            <v-card-text>
                Название книги:
            </v-card-text>
            <input label="Main input" type="search" v-model="query1" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-text>
                Жанр:
            </v-card-text>
            <input label="Main input" type="search" v-model="query2" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-text>
                Автор:
            </v-card-text>
            <input label="Main input" type="search" v-model="query3" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-text>
                Год:
            </v-card-text>
            <input label="Main input" type="search" v-model="query4" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-text>
                Цена:
            </v-card-text>
            <input label="Main input" type="search" v-model="query5" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                text="Добавить"
                @click="AddBooks(isActive)"
                ></v-btn>
                <v-btn
                text="Отмена"
                @click="isActive.value = false"
                ></v-btn>
            </v-card-actions>
            </v-card>
        </template>
    </v-dialog>

    <CardEditor :items="queryItems" @add-to-cart="delBooks"/>
</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex'


const store = useStore()
const query1 = ref([])
const query2 = ref([])
const query3 = ref([])
const query4 = ref([])
const query5 = ref([])


const delBooks = (item) =>{
    axios.delete('https://crudcrud.com/api/'+store.getters.PURCHASESID+'/books/'+item._id)
    setTimeout(() => {
        window.location.reload()}, 300);
  }


const addTest = () =>{
    axios.post('https://crudcrud.com/api/'+store.getters.PURCHASESID+'/books',{title: "Книга", imageUrl: "/book-1.png", genre: "Драма", author: "Иван", year: 2024, prise: 250, isAdded: false})
    setTimeout(() => {
        window.location.reload()}, 300);
 }


 const AddBooks = (isActive) =>{
    axios.post('https://crudcrud.com/api/'+store.getters.PURCHASESID+'/books',{title: query1.value, imageUrl: "/book-1.png", genre: query2.value, author: query3.value, year: Number(query4.value), prise: Number(query5.value), isAdded: false})
    setTimeout(() => {isActive.value = false
        window.location.reload()}, 300);
 }


 defineProps({
      queryItems: Array,
  })

</script>
