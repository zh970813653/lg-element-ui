<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput" />
  </div>
</template>

<script>
export default {
  // 禁用父组件传过来的属性
  inheritAttrs: false,
  name: "LgInput",
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
      const findParent = (parent) => {
        while (parent) {
          if (parent.$options.name === "lgFormItem") {
            break
          } else {
            parent = parent.$parent;
          }
         
        }
         return parent
      };
      const parent = findParent(this.$parent)
      if(parent){
        parent.$emit('validate')
      }
    },
  },
};
</script>

<style>
</style>