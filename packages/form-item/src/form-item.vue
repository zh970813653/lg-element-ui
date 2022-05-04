<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: "lgFormItem",
  inject: ['form'],
  props: {
    // 表单当前item的提示性文本
    label: {
      type: String,
      default: "",
    },
    // 表单当前item的校验对象名称
    prop: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      errorMessage: "",
    };
  },
  mounted(){
    this.$on('validate',()=> {
      this.validate()
    })
  },
  methods: {
    validate(){
      // console.log(this.form.model);
      if(!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]
      const descriptor = {[this.prop]: rules}

      const validator = new AsyncValidator(descriptor)
      /**
       * 第一参数是需要验证的属性值，可以是一个对象
       * 第二个参数是验证失败的回调函数， 存放了失败的信息
       */
      return validator.validate({[this.prop]: value},(errors) => {

        if(errors) {
          this.errorMessage = errors[0].message
        }else{
          this.errorMessage = ''
        }
      })

    }
  }
};
</script>

<style>
</style>