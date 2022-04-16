<template>
  <div class="wrapper">
    <div ref="imgmmm" style="display:none"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import testchild from './testchild.vue'
import { Observable } from 'rxjs';

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
    // console.log(this.name)
    // let form = {}
    // this.inputList.forEach(e=>{
    //   // this.$set(this.ruleForm,e.label,'') 
    //   let obj = {}
    //   obj[e.label] = ''
    //   form = Object.assign({},form,obj)
    // })
    // this.ruleForm = form
    // console.log(this.ruleForm)

    // this.initImg()

    // 定义一个观察者
    const observer = (subscriber) => {
        console.log('hello world');
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
          subscriber.next(4); 
          subscriber.complete();
        }, 1000);
    }

    // 构建一个 Observable
    const observable = new Observable(observer);
    
    console.log('just before subscribe');

    // 通过 Observable 的 subscribe 方法进行调用，并返回一个 subscription 用于资源释放
    const subscription = observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });

    console.log('just after subscribe');

    // 取消订阅
    subscription.unsubscribe();
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
</style>