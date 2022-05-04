import FormItem from './src/form-item.vue'



// 设置一个install的方法为了将来别人在用的时候可以用过use的方法直接使用

FormItem.install = Vue => {
  Vue.component(FormItem.name,FormItem)
}

export default FormItem