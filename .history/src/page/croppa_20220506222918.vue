<template>
  <div>
      <jim-croppa></jim-croppa>
  </div>
</template>
 
<script>
import jimCroppa  from '../components/luckyui/cropper.vue'

export default {
    components: { jimCroppa },
    computed: {
    },
    data() {
        return {
            firstNum: 0,
            thirdNum: 0
        }
    },
    watch: {
    },
    created() {
    },
    mounted() {
    }
}