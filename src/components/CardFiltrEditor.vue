<template>
    <v-card>
        <v-container fluid class="mt-5">
          <v-row>
            <v-col>
              <input 
              type="search" 
              v-model="query" 
              placeholder="Поиск" 
              class="border form-control pa-3 w-100 text-h6"/>
            </v-col>
            <v-col>
              <v-select
                label="Сортировать по"
                v-model="sortSelect"
                :items="['Году', 'Цене']"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="valueAuthor"
                :items="itemsAuthor"
                label="Фильтр по автору"
                multiple
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="valueYears"
                :items="itemsYears"
                label="Фильтр по году выхода"
                multiple
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="valueGenre"
                :items="itemsGenre"
                label="Фильтр по жанру"
                multiple
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    <Editor :queryItems="queryItems"/>
  </template>
  
  <script setup>

    import { ref, computed, onMounted} from 'vue';


    const items = ref([])
    const query = ref([])
    const sortSelect= ref(['Году'])
    const valueAuthor = ref([])
    const itemsAuthor =  ref([])
    const valueYears = ref([])
    const itemsYears =  ref([])
    const valueGenre = ref([])
    const itemsGenre =  ref([])


    const queryItems = computed(()=>{
  let p = items.value
  if(query.value){
    p=p.filter((item)=>item.title.indexOf(query.value) !== -1)
  }
  if(valueAuthor.value){
    p=p.filter((item)=>item.author.indexOf(valueAuthor.value) !== -1)
  }
  if(valueYears.value){
    p=p.filter((item)=>item.year.toString().indexOf(valueYears.value) !== -1)
  }
  if(valueGenre.value){
    p=p.filter((item)=>item.genre.indexOf(valueGenre.value) !== -1)
  }
  if(sortSelect.value==='Цене'){
    return p.sort((d1, d2)=>d1.prise-d2.prise)
  } else {
    return p.sort((d1, d2)=>d1.year-d2.year)
  }
})


onMounted(async()=>{
    setTimeout(() => {
        try{
        console.log(props.items1);
        items.value=props.items1
      var i=-1
      for (var key in items.value) {
        i++
        itemsYears.value[i]=items.value[i]["year"].toString()
        itemsAuthor.value[i]=items.value[i]["author"]
        itemsGenre.value[i]=items.value[i]["genre"]
      }
      itemsYears.value=[...new Set(itemsYears.value)].sort()
      itemsAuthor.value=[...new Set(itemsAuthor.value)].sort()
      itemsGenre.value=[...new Set(itemsGenre.value)].sort()
    }catch(err){
      console.log(err)
    }}, 300);
  })


  const props = defineProps({
    items1: Array,
  })

  </script>