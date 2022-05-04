<template>
  <div>
    <button @click.prevent="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      // alert('1234')
      this.$emit("click",e);
    },
  },
};
</script>

<style>
</style>