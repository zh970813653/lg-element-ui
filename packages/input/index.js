import Input from './src/input.vue'

// 设置一个install的方法为了将来别人在用的时候可以用过use的方法直接使用
Input.install = Vue => {
  Vue.component(Input.name,Input)
}

export default Input