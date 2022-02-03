<template>
  <div class="recommend" ref="recommend">
    recommendrrrr
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'recommend',
    beforeCreate(){
      // console.log('beforeCreaterecommedn');
    },
    created() {
      console.log('recommedn');
      
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>