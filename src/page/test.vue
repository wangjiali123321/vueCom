<template>
  <!-- 中国地图 -->
  <div class="wrapper">
    123
    <testchild :old="old">
      <div >123666</div>
    </testchild>
  </div>
</template>

<script type="text/ecmascript-6">
import testchild from './testchild.vue'

export default {
  components: { testchild },
  name:'recommend',
  data(){
    return {
      old:'21'
    }
  },
  computed:{
    name(){
      return 3
    }
  },
  created(){
    // console.log(this.name)
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