<template>
  <div id="app">
    <!-- ==============主页================<br> -->
    <!-- pageA数量count为: {{countA}}<br> -->
    <!-- ==========以下为PageA内容==========<br> -->
    <!-- {{test}}{{lineName}} -->
    <!-- count:<span>{{count}}</span>
    ccc:<span>{{ccc}}</span> -->
    <!-- total:<span>{{total}}</span>
    getStatePlusOne:<span>{{getStatePlusOne}}</span> -->
    <!-- <page-a :lineName="lineName" :defaultcity="defaultcity"></page-a> -->
    <!-- <el-cascader
    v-model="value"
    :options="options"
    @change="handleChange"></el-cascader> -->
     <!-- <el-cascader
      v-model="value"
      :options="options"
      :show-all-levels="false"
      @change="handleChange">
    </el-cascader>
    <input :title="123"/> -->
    <router-view></router-view>
    
  </div>
</template>

<script>
// import pageA from './pageA';
// import Vuex  from './vuex/index';
import Vuex  from 'vuex';
// import { mapState }  from './vuex/index';
export default {
  name: 'app',
  data() {
    return{
      value1: ['32'],
      lineName:'111111',
      defaultcity:'',
      value:["zhinan", "shejiyuanze", "yizhi"],
      options: [{
        value: 'zhinan1',
        label: '指南'
      },{
        value: 'zhinan',
        label: '32'
      },{
        value: '32',
        label: '指南1'
      }]
    }
  },
  components: {
    // pageA
  },
  created() {
    // console.log('this.$store',this.$store)
    // console.log('打印出this.$store.getters.getStatePlusOne的结果',this.$store.getters.getStatePlusOne);
  },
  mounted() {
    
    // setTimeout(() => {
    //   this.lineName = "22222"
    //   this.$store.commit('a/incrementA');//mutations
    //   // console.log('store state自增5后的结果', this.$store.state.a.count);
    // }, 4000);
    // setTimeout(() => {
    //   this.$store.dispatch('a/incrementAction');//action 异步
    //   console.log('store dispatch自增6后的结果', this.$store.state.a.count);
    // }, 3000);

    // console.log('mapState',Vuex.mapState({
    //   count: state => state.a.count
    // }))
  },
  // computed: mapState({
  //   count: state => state.a.count
  // }),
  computed:{
    test: {
      get() {
        return this.lineName
      },
      set(val) {
        cons
      }
    },
  },
  methods:{
    handleChange(value) {
        console.log(value);
      }
  }
    // count(){
    //   return this.$store.state.a.count //用computed接收
    // },
    // total (state, getters, localState, localGetters) {
    //   // 可访问全局 state 和 getters，以及如果是在 modules 下面，可以访问到局部 state 和 局部 getters
    //   console.log('state',state,'getters',getters,'localState',localState,'localGetters',localGetters)
    //   return state.count
    // },
    // ...Vuex.mapState('a',{
    //   count: state => state.count,
    //   ccc: status => status.count
    // }),
    // ...Vuex.mapGetters([
    //   'getStatePlusOne'
    // ]),
  // }
  
}
</script>
