import { registerPlugins } from '@/plugins'
import router from './router'
import App from './App.vue'
import { createApp } from 'vue'
import store from './store'

const app = createApp(App)

registerPlugins(app)

app.use(store)
app.use(router)
app.mount('#app')
