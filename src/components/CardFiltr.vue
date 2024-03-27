<template>
    <v-card>
        <v-container fluid class="mt-3">
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
    <Shop :query-items="queryItems"/>
  </template>
  
  <script setup>

    import { ref, computed, watch, onMounted} from 'vue';


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
        }
        return p.sort((d1, d2)=>d1.year-d2.year)
        })


    onMounted(async()=>{
      watch(() => props.itemsToFiltr, (newVal) => {
        try {
          items.value = newVal;
          let i = -1;
          items.value.forEach((element) => {
            i++;
            itemsYears.value[i] = element["year"].toString();
            itemsAuthor.value[i] = element["author"];
            itemsGenre.value[i] = element["genre"];
          });
          itemsYears.value = [...new Set(itemsYears.value)].sort();
          itemsAuthor.value = [...new Set(itemsAuthor.value)].sort();
          itemsGenre.value = [...new Set(itemsGenre.value)].sort();
        } catch (err) {
          console.log(err);
        }
      }, { immediate: true });
    });


  const props = defineProps({
    itemsToFiltr: Array,
  })

  </script>