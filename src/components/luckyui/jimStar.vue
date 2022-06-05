<template lang="html">
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" track-by="$index"></span>
    123
  </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
  name: 'jimstar',
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
    },
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      console.log(result)
      return result;
    }
  }
}
</script>
<style scoped rel="stylesheet/stylus">
  .star-item{
    background-image: url('img/star24_half@2x.png');
    width: 20px;
    height: 20px;
    display: inline-block;
  }
</style>
