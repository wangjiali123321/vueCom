<template>
  <div>
      <jimCroppa></jimCroppa>
  </div>
</template>
 
<script>
import jimCroppa  from '../components/luckyui/cropper'

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