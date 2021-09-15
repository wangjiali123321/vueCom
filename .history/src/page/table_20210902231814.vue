<template>
  <div >
      <lucky-table-better></lucky-table-better>
  </div>
</template>

<script type="text/ecmascript-6">
import luckyTableBetter from '../components/luckyui/luckyTableBetter.vue';
  export default {
  components: { luckyTableBetter },
    name:'recommend',
    data:[{
        thead:[{

        }]
    }],
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