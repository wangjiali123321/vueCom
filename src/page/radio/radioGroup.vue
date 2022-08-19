<template lang="html">
  <div>
    <component
      :is="_elTag"
      class="radio-group"
      role="radiogroup"
    >
      <slot></slot>
    </component>
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
  .wrapper{
    width:1500px;
  }
</style>
