// import './assets/main.css'
import {} from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import router from './routers/index.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import App from './App.vue'
import wrapperComponent from './wrapperComponent.vue'


import {} from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// createApp(App)
createApp(wrapperComponent).use(createPinia()).use(router).mount('#app')
