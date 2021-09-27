<template>
  <!-- 中国地图 -->
  <div class="wrapper">
      <div class="map-container" id="chainMap" style="height: 800px"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts' // echarts支持
import 'echarts/map/js/china' // 中国地图js
export default {
components: { jimTable },
  name:'recommend',
  data(){
    return{
      thead:[{
        prop: 'name',
        label: 'name'
      },{
        prop:'operation',
        label: 'titlw'
      }]
    }
  },
  computed: {
    operateConfig() {
      let that = this;
      return {
        optType: {
          toRemove: {event:'toRemove',text: 'remove',type:'danger'}
        },
        optFunc: function(val, userinfo){
          if(val){

          }
          return  ['toRemove']
        }
      }
    }
  },
  beforeCreate(){
    // console.log('beforeCreaterecommedn');
  },
  created() {
    console.log('recommedn');
    
  },
  mounted() {
    this.chainMap()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>