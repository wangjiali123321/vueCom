<template lang="html">
  <div>
    <jimstar :size="48" :score="10"></jimstar>
  </div>
</template>

<script>
import jimstar from '../../components/luckyui/jimStar.vue'

export default {
  components:{ jimstar },
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size;
    }
  }
}
</script>
<style scoped rel="stylesheet/stylus">
  .wrapper{
    width:1500px;
  }
</style>
