<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "lgForm",
  provide() {
    return {
      form: this,
    };
  },
  props: {
    // model 绑定的表单对象
    model: {
      type: Object,
      default: () => {},
    },
    // 校验规则对象
    rules: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    validate(cb) {
      const childrenComponents = this.filterChildComponents(this.$children).filter(c => c.prop)
      const task =  childrenComponents.map(child => child.validate())
      Promise.all(task)
        .then(() => cb(true))
        .catch(() => cb(false))
    },
    filterChildComponents(children) {
      let childrenComponents = [];
      children.forEach((child) => {
        if (child.$options.name === "lgFormItem") {
          childrenComponents = [...childrenComponents, child];
        }
        if (child.$children.length) {
          childrenComponents = [...childrenComponents, ...this.filterChildComponents(child.$children)] 
        }
      });
      return childrenComponents;
    },
  },
};
</script>

<style>
form {
  /* height: 60px; */
}
</style>