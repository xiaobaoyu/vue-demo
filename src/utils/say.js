let say = () => {
    console.log('say Bwf');
}
export default {
    install(vue) {
        vue.prototype.$say = say
    }
}



