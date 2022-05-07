<template>
  <div class="wrapper">
    <jim-cropper :quality="30"></jim-cropper>
    <button @click="showimage"></button>

    <!-- 1111111 -->
    <input type="file"
      ref="fileInput"
      @change="_handleInputChange"/>
    <canvas ref="canvas"></canvas>
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
    _drawFrame(img){
      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')
      this.ctx.imageSmoothingEnabled = true;
      this.ctx.imageSmoothingQuality = "high";
      this.ctx.webkitImageSmoothingEnabled = true;
      this.ctx.msImageSmoothingEnabled = true;
      this.ctx.imageSmoothingEnabled = true;

      // this.ctx.fillStyle = 'yellow'
      // this.outputWidth = 6000
      // this.outputHeight = 6000
      // this.ctx.clearRect(0, 0, this.outputWidth, this.outputHeight)
      // this.ctx.fillRect(0, 0, this.outputWidth, this.outputHeight)

      this.imgData = {
        startX: 0,
        startY: 0,
        width: 400,
        height: 400
      }

      let { startX = 0, startY = 0, width = 6000, height =6000} = this.imgData
      console.log( startX, startY, width, height)
        console.log('this.img',img)
      this.ctx.drawImage(img, startX, startY, width, height)
    }
  }
}
</script>

