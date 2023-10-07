import { createApp } from 'vue' //创建App实例的重要函数
import App from './App.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc }
    ]
})

// createApp(App).mount('#app')//接受一个App组件，并把它挂载到了div=app上面

const app = createApp(App)
app.use(router)
app.mount('#app')