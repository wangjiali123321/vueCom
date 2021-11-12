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
components: {  },
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
  },
  methods: {
    chainMap () {
      let myChart = echarts.init(document.getElementById('chainMap'));
      let option = {
        tooltip: {
          show: false
        },
        geo: {
          map: 'china',
          roam: false,// 一定要关闭拖拽
          zoom: 1.23,
          center: [105, 36], // 调整地图位置
          label: {
            normal: {
              show: true, //关闭省份名展示
              fontSize: "12",
              color: "rgba(0,0,0,1)"
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#2707e3",
              borderColor: "#1cdc17",
              borderWidth: 1, //设置外层边框
              shadowBlur: 5,
              shadowOffsetY: 8,
              shadowOffsetX: 0,
              shadowColor: "#133d18"
            },
            emphasis: {
              areaColor: "#bd8f35",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(104,83,22,0.5)"
            }
          }
        }
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>