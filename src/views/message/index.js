import Vue from 'vue';
import message from './index.vue'
let MessageBox = Vue.extend(message);
//生成组件
let instance = new MessageBox({
    el: document.createElement('div')
})
export default {
    show(params) {
        console.log('instance', instance);
        document.body.appendChild(instance.$el)
        instance.show(params)
    },
    hide() {
        instance.hide()
    }
}