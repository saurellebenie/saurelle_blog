import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import style from './Style/style.css'
import 'animate.css'
import VueAnimateOnScroll from 'vue-animate-onscroll'


const app = createApp(App)

app.use(router).use(style).use(VueAnimateOnScroll)

app.mount('#app')

