import { createApp } from 'vue' //创建App实例的重要函数
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Lsh from './components/Lsh.vue'
import Lsh2 from './components/Lsh2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Lsh },
        { path: '/xxx', component: Lsh2 }
    ]
})

// createApp(App).mount('#app')//接受一个App组件，并把它挂载到了div=app上面

const app = createApp(App)
app.use(router)
app.mount('#app')