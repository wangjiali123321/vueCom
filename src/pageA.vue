<template>
  <div>
    {{name}}
  </div>
</template>

<script >
import { defineComponent,ref, reactive,onMounted,onUnmounted,watch } from "@vue/composition-api"
export default defineComponent({
  name: "pageA",
  props:{
    lineName:String,
    defaultcity:String
  },
  setup(props, context) {
    // console.log('props',props,'context',context)
    let realtimeMap = ref(null);
    let polyline = ref(null);
    let socket = ref(null);
    watch( ()=>props.lineName,async (lineName) => {
      // console.log('props',props,'context',context)

    })
    onUnmounted(async(e)=>{
      // console.log(e,'onumounted');

      
    })
    let name = reactive('123');
    
    return {
      name
    }
  },
})
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>