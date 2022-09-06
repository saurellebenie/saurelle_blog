import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import style from './Style/style.css'
import 'animate.css'


const app = createApp(App)

app.use(router).use(style)

app.mount('#app')
