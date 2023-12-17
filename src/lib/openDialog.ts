import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
export const openDialog = (options) => { 
    const { title, content,ok,cancel } = options //读取options
    const div = document.createElement('div') //创建div
    document.body.appendChild(div) //把div放在body里面
    const close = () => { 
        //@ts-ignore
        app.unmount(div) 
        div.remove()  
        
    }
    const app = createApp({
        render() { 
            return h(Dialog,
                {
                    visible: true,
                    'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) { 
                        close();
                      }
                    },
                    ok,cancel
                }, { title, content })
        }
    })
   app.mount(div) //把Dialog放在div里面
}