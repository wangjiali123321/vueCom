<template>
  <div class="wrapper">
    <jim-cropper></jim-cropper>
  </div>
</template>

<script type="text/ecmascript-6">
import jimCropper  from '../components/luckyui/jimCropper.vue'

export default {
  components: { jimCropper },
  name:'recommend',
  data(){
    return {
    }
  },
  computed:{
    name(){
      return 3
    },
    rules(){
    }
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

