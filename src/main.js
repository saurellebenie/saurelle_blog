import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import style from './Style/style.css'
import 'animate.css'


const app = createApp(App)

app.use(router).use(style)

app.mount('#app')

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    methods:{
        checkLogin(){
            if(!localStorage.getItem('login')){
                this.$router.push('/login');
            }else{
                this.$router.push('/user');
            }
        }
    }
  })