
import 'bootstrap/dist/css/bootstrap.min.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const pinia = createPinia();
pinia.use(piniaPluginPersistedState)
const app= createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

import "bootstrap";