<template lang="html">
      <radioGroup v-model="radio">
        <radio :label="3">备选项</radio>
        <radio :label="6">备选项</radio>
        <radio :label="9">备选项</radio>
      </radioGroup>
</template>

<script>
import radioGroup from './radioGroup.vue';
import radio from './radio.vue';
export default {
  components:{radioGroup,radio},
  data(){
    return{
      radio:3
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
