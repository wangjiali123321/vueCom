<template>
  <div class="wrapper">
    123
  </div>
</template>

<script type="text/ecmascript-6">
import testchild from './testchild.vue'
import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

export default {
  components: { testchild },
  name:'recommend',
  data(){
    return {
      old:'21',
      inputList: [{
        label:'name'
      }],
      input1:'',
      ruleForm:{

      }
    }
  },
  computed:{
    name(){
      return 3
    },
    rules(){
      return {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ]
      }
    }
  },
  created(){
    // console.log(this.name)
  },
  mounted() {
    console.log('test')
    console.log(document)
    fromEvent(document, 'click')
    .pipe(
      throttleTime(1000),
      scan(count => count + 1, 0)
    )
    .subscribe(count => console.log(`Clicked ${count} times`));
  },
  methods: {
    showname(){
      this.$refs['operateForm'].validate((valid) => {
        if (valid) {
          console.log(valid)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    initImg(){
      let imgnode = document.createElement('img')
      imgnode.src = 'http://www.jim.codadsad'

      this.$refs.imgmmm.appendChild(imgnode)
    },
    replace(){
      // this.$router.push({name:'threejs', params: { userId: 123 },})
    }
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