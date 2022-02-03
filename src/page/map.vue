<template>
  <!-- 中国地图 -->
  <div class="wrapper">
      <div class="map-container" id="chainMap" style="height: 400px;width:800px;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts' // echarts支持
// import 'echarts/map/js/china' // 中国地图js

export default {
  components: {  },
  name:'recommend',
  mounted() {
    this.chainMap()
    console.log(this.$parent)
  },
  methods: {
    chainMap () {
      let myChart = echarts.init(document.getElementById('chainMap'));
      let option = {
        tooltip:{
          show:true,
          formatter: '{a} <br/>{b}: {c}({d}%)'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped rel="stylesheet/stylus">
  .wrapper{
    width:1500px;
  }
</style>