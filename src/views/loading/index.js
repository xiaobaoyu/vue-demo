import loadingComponent from './loading.vue'

const loadingObj={
    install:(vue)=>{
        vue.component('loading',loadingComponent)

    }
}

export default loadingObj;