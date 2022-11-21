import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import style from './Style/style.css'
import 'animate.css'
import tailwind from './tailwind/index.css'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router).use(VueAxios, axios).use(style).use(VueAnimateOnScroll).use(tailwind)

app.mount('#app')

