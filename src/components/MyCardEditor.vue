<template>
    <div>
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
            <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" :color="'orange-lighten-2'" variant="tonal" size="small"> Редактировать</v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Редактировать">
            <v-card-text>
                Название книги:
            </v-card-text>
            <input label="Main input" type="search" v-model="query21" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-text>
                Жанр:
            </v-card-text>
            <input label="Main input" type="search" v-model="query22" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-text>
                Автор:
            </v-card-text>
            <input label="Main input" type="search" v-model="query23" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-text>
                Год:
            </v-card-text>
            <input label="Main input" type="search" v-model="query24" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-text>
                Цена:
            </v-card-text>
            <input label="Main input" type="search" v-model="query25" class="form-control pa-4 py-4 mx-4 text-h6 border"/>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                text="Добавить"
                @click="ChangeCart(_id, isActive)"
                ></v-btn>
                <v-btn
                text="Отмена"
                @click="isActive.value = false"
                ></v-btn>
            </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
            <v-btn 
            :color="'red-lighten-2'"
            variant="tonal"
            @click="onClickAdd"
            size="small"
            >
            Удалить
            </v-btn>
        </v-card-actions>
        </v-card>
    </div>
  </template>
  
  <script setup>

    import { ref } from 'vue';
    import axios from 'axios';
    import { useStore } from 'vuex'


    const store = useStore()
    const query21 = ref([])
    const query22 = ref([])
    const query23 = ref([])
    const query24 = ref([])
    const query25 = ref([])

   
    const ChangeCart = async (_id, isActive) => {
      try {
        const response = await axios.put('https://crudcrud.com/api/'+store.getters.PURCHASESID+'/books/'+_id,{title: query21.value, imageUrl: "/book-1.png", genre: query22.value, author: query23.value, year: Number(query24.value), prise: Number(query25.value), isAdded: false})
        isActive.value = false
        console.log('Успешно изменено:', response.data);
        window.location.reload()
      } catch (error) {
        console.error('Произошла ошибка при изменение экземпляра:', error);
      }
    };

    defineProps({
        _id: String,
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