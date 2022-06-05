<template>
  <!-- 中国地图 -->
  <div class="wrapper">
    <slot :test="test">
      1321
    </slot>
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
      test:'111111'
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
  },
  beforeCreate(){
    console.log(this.name)
  },
  created(){
    console.log(this.name)
  },
  mounted() {
    console.log(this.$slots)
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