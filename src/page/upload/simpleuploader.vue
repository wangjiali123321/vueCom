<template>
  <div class="wrapper">
    <uploaderchild >
    </uploaderchild>
  </div>
</template>

<script type="text/ecmascript-6">
import uploaderchild from './uploaderchild.vue'

export default {
  components: { uploaderchild },
  name:'recommend',
  data(){
    return {
    }
  },
  computed:{
  },
  created(){
    // console.log(this.name)
  },
  mounted() {

  },
  methods: {
  }
}
</script>

<style scoped rel="stylesheet/stylus">
  .wrapper{
    width:1500px;
    
  }
  .jim{
    background: black;
  }
</style>