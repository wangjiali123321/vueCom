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
  mounted() {
    this.chainMap()
  },
  methods: {
    chainMap () {
      let myChart = echarts.init(document.getElementById('chainMap'));
      let option = {
        tooltip: {
          triggerOn: "mousemove",   //mousemove、click
          padding:8,
          borderWidth:1,
          borderColor:'#409eff',
          backgroundColor:'rgba(255,255,255,0.7)',
          textStyle:{
            color:'#000000',
            fontSize:13
          },
          // formatter: function(e, t, n) {
          //   let data = e.data;
          //   //模拟数据
          //   data.specialImportant = Math.random()*1000 | 0;
          //   data.import = Math.random()*1000 | 0;
          //   data.compare = Math.random()*1000 | 0;
          //   data.common = Math.random()*1000 | 0;
          //   data.specail = Math.random()*1000 | 0;

          //   let context = `
          //      <div>
          //          <p><b style="font-size:15px;">${data.name}</b>(2020年第一季度)</p>
          //          <p class="tooltip_style"><span class="tooltip_left">事件总数</span><span class="tooltip_right">${data.value}</span></p>
          //          <p class="tooltip_style"><span class="tooltip_left">特别重大事件</span><span class="tooltip_right">${data.specialImportant}</span></p>
          //          <p class="tooltip_style"><span class="tooltip_left">重大事件</span><span class="tooltip_right">${data.import}</span></p>
          //          <p class="tooltip_style"><span class="tooltip_left">较大事件</span><span class="tooltip_right">${data.compare}</span></p>
          //          <p class="tooltip_style"><span class="tooltip_left">一般事件</span><span class="tooltip_right">${data.common}</span></p>
          //          <p class="tooltip_style"><span class="tooltip_left">特写事件</span><span class="tooltip_right">${data.specail}</span></p>
          //      </div>
          //   `
          //   return context;
          // }
        },
        visualMap: {
          show:true,
          right: 26,
          bottom: 40,
          showLabel:true,
          pieces: [
            {
              gte: 100,
              label: ">= 1000",
              color: "#1f307b"
            },
            {
              gte: 500,
              lt: 999,
              label: "500 - 999",
              color: "#3c57ce"
            },
            {
              gte: 100,
              lt:499,
              label: "100 - 499",
              color: "#6f83db"
            },
            {
              gte: 10,
              lt: 99,
              label: "10 - 99",
              color: "#9face7"
            },
            {
              lt:10,
              label:'<10',
              color: "#bcc5ee"
            }
          ]
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
        },
        series: [
          {
            name: "突发事件",
            type: "map",
            geoIndex: 0,
            data:[
              {
                name: "南海诸岛",
                value: 100,
                eventTotal:100,
                specialImportant:10,
                import:10,
                compare:10,
                common:40,
                specail:20
              },
              {
                name: "北京",
                value: 540
              },
              {
                name: "天津",
                value: 130
              },
              {
                name: "上海",
                value: 400
              },
              {
                name: "重庆",
                value: 750
              },
              {
                name: "河北",
                value: 130
              },
              {
                name: "河南",
                value: 830
              },
              {
                name: "云南",
                value: 110
              },
              {
                name: "辽宁",
                value: 19
              },
              {
                name: "黑龙江",
                value: 150
              },
              {
                name: "湖南",
                value: 690
              },
              {
                name: "安徽",
                value: 60
              },
              {
                name: "山东",
                value: 39
              },
              {
                name: "新疆",
                value: 4
              },
              {
                name: "江苏",
                value: 31
              },
              {
                name: "浙江",
                value: 104
              },
              {
                name: "江西",
                value: 36
              },
              {
                name: "湖北",
                value: 52
              },
              {
                name: "广西",
                value: 33
              },
              {
                name: "甘肃",
                value: 7
              },
              {
                name: "山西",
                value: 5
              },
              {
                name: "内蒙古",
                value: 778
              },
              {
                name: "陕西",
                value: 22
              },
              {
                name: "吉林",
                value: 4
              },
              {
                name: "福建",
                value: 18
              },
              {
                name: "贵州",
                value: 5
              },
              {
                name: "广东",
                value: 98
              },
              {
                name: "青海",
                value: 1
              },
              {
                name: "西藏",
                value: 0
              },
              {
                name: "四川",
                value: 44
              },
              {
                name: "宁夏",
                value: 4
              },
              {
                name: "海南",
                value: 22
              },
              {
                name: "台湾",
                value: 3
              },
              {
                name: "香港",
                value: 5
              },
              {
                name: "澳门",
                value: 555
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped rel="stylesheet/stylus">
  .wrapper{
    width:500px;
    height:500px;
  }
</style>