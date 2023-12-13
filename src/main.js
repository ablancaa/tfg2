
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import './registerServiceWorker'

const app = createApp(App)
const pinia = createPinia();
app.use(pinia)
pinia.use(piniaPluginPersistedState)

app.use(router)

app.config.globalProperties.$pinia = pinia;

app.mount('#app')

import "bootstrap";
export { app }
// Método para inicializar Pinia
window.usePinia = () => {
    return pinia;
  };