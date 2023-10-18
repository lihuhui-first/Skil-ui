import './lib/gulu.scss'
import './index.scss'
import { createApp } from 'vue' //创建App实例的重要函数
import App from './App.vue'
import { router } from './router'


// createApp(App).mount('#app')//接受一个App组件，并把它挂载到了div=app上面

const app = createApp(App)
app.use(router)
app.mount('#app')   