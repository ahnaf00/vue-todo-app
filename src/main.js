// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Custom Css link
import './assets/sass/style.scss'
import * as bootstrap from 'bootstrap'
const app = createApp(App)

app.use(createPinia())
app.mount('#app')

