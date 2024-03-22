import { createRouter, createWebHashHistory } from "vue-router";
import Shop from "./components/CardFiltr.vue";
import Drawer from "./components/Drawer.vue";
import Editor from "./components/CardFiltrEditor.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/Shop', component: Shop, alias: '/'},
        {path: '/Drawer', component: Drawer},
        {path: '/Editor', component: Editor}
    ]
})
  