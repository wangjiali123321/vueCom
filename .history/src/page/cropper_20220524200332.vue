<template>
  <div class="wrapper">
    <jim-cropper :quality="30"></jim-cropper>
    <div>上方开源组件</div>
    <!-- 1111111 -->
    <div>下方正在模拟实现</div>
    <input type="file"
      ref="fileInput"
      @change="_handleInputChange"/>
    <canvas ref="canvas"
      @touchstart.stop="_handlePointerStart"
      @mousedown.stop.prevent="_handlePointerStart"
      @pointerstart.stop.prevent="_handlePointerStart"        
      @touchmove.stop="_handlePointerMove"
      @mousemove.stop.prevent="_handlePointerMove"
      @pointermove.stop.prevent="_handlePointerMove"></canvas>
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
  },
  created(){
    // console.log(this.name)
  },
  mounted() {
  },
  methods: {
    showimage(){
      
    },
    _handleInputChange () {
      let input = this.$refs.fileInput
      let file = input.files[0]
      console.log('file',file)

      let fr = new FileReader()
      fr.onload = (e) => {
        let fileData = e.target.result
        console.log('fileData',fileData)
        let img = new Image()
        img.src = fileData
        fileData = null;
        img.onload = () => {
          console.log(img)
          this._drawFrame(img)
        }
        
      }
      fr.readAsDataURL(file)
    },
    // _drawFrame(img){
    //   this.canvas = this.$refs.canvas
    //   this.canvas.width = 500
    //   this.canvas.height = 500
    //   this.canvas.style.width = '400px'
    //   this.canvas.style.height = '400px'

    //   this.ctx = this.canvas.getContext('2d')
    //   this.ctx.imageSmoothingEnabled = true;
    //   this.ctx.imageSmoothingQuality = "high";
    //   this.ctx.webkitImageSmoothingEnabled = true;
    //   this.ctx.msImageSmoothingEnabled = true;
    //   this.ctx.imageSmoothingEnabled = true;

    //   // this.ctx.fillStyle = 'yellow'
    //   // this.outputWidth = 6000
    //   // this.outputHeight = 6000
    //   // this.ctx.clearRect(0, 0, this.outputWidth, this.outputHeight)
    //   // this.ctx.fillRect(0, 0, this.outputWidth, this.outputHeight)

    //   this.imgData = {
    //     startX: 0,
    //     startY: 0,
    //     width: 800,
    //     height: 800
    //   }

      this.imgData = {
        startX: 0,
        startY: 0,
        width: 400,
        height: 400
    //   let { startX , startY, width, height} = this.imgData
    //   console.log( startX, startY, width, height)
    //   console.log('this.img',img)
    //   this.ctx.drawImage(img, startX, startY, width, height)
    //   this.canvas.toBlob((e)=>{
    //     console.log('e',e)
    //   })
    // },
    
    move (offset) {
      let oldX = this.imgData.startX
      let oldY = this.imgData.startY
      this.imgData.startX += offset.x
      this.imgData.startY += offset.y
      if (this.imgData.startX !== oldX || this.imgData.startY !== oldY) {
        this._draw()
      }
    },
    _handlePointerStart (){

    },
    _handlePointerMove () {

    },
    _draw () {
      this.$nextTick(() => {
        if (typeof window !== 'undefined' && window.requestAnimationFrame) {
          requestAnimationFrame(this._drawFrame)
        } else {
          this._drawFrame()
        }
      })
    },

    _drawFrame () {
      let ctx = this.ctx
      let { startX, startY, width, height } = this.imgData
      console.log( startX, startY, width, height)
      this._paintBackground()
      // console.log('this.img',this.img)
      ctx.drawImage(this.img, startX, startY, width, height)
    },
  }
}
</script>

