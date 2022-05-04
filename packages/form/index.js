import Form from './src/form.vue'



// 设置一个install的方法为了将来别人在用的时候可以用过use的方法直接使用

Form.install = Vue => {
  Vue.component(Form.name,Form)
}

export default Form