import Button from './src/button.vue'



// 设置一个install的方法为了将来别人在用的时候可以用过use的方法直接使用

Button.install = Vue => {
  Vue.component(Button.name,Button)
}

export default Button