const obj = {
    template: '<li>{{name}}这是个待办项{{parentData}}</li>',
    data() {
      return {
        name: 'bwf'
      }
    },
    props: ['parentData'],
    created() {
      console.log('created')
    },
  }
  export default{
      install(vueFuc){
        vueFuc.component('bwf-ui',obj)
      }
  }