<template>
  <!-- 中国地图 -->
  <div class="wrapper">
    123
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  components: {  },
  name:'recommend',
  props:{
    old:{
      type: String,
      default:''
    }
  },
  data(){
    return {
      nidsadsa:'111111'
    }
  },
  watch: {
    old:{
      handler(newvalue,oldvalue){
        console.log(newvalue)
      },
      deep:true
    }
  },
  computed:{
    wwww() {
      console.log('www')
      return this.nidsadsa
    },
    name(){
      console.log('22121')
      return this.wwww + '22121'
    }
  },
  beforeCreate(){
    console.log(this.name)
  },
  created(){
    console.log(this.name)
  },
  mounted() {
    // console.log(this.name)
  },
  methods: {
  }
}
</script>

<style scoped rel="stylesheet/stylus">
  .wrapper{
    width:1500px;
  }
</style>