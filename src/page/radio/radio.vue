<template lang="html">
  <div >
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    _elTag() {
      console.log('this',this,'this.$vnode',this.$node)
      return (this.$vnode.data || {}).tag || 'div';
    },
  }
}
</script>
<style scoped rel="stylesheet/stylus">
</style>
