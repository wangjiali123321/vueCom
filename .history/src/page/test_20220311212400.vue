<template>
  <div class="wrapper">
    123
    《
    <!-- form valid -->
    <!-- <el-form ref="operateForm" :rules="rules" :model="ruleForm"> 
      <div v-for="(item,index) in inputList" :key="index" >
        <el-form-item :label="item.label" :prop="item.label">
          <el-input v-model="ruleForm[item.label]"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <el-button @click="showname"></el-button>
    <!-- vue-router 路由一致如何处理 -->
    <!-- router.replace -->
    <!-- <el-button @click="replace"></el-button> -->

    <!-- <router-link :to="{ path: '/test',params:{name:'12'}}" replace>replace</router-link> -->
    <!-- <router-link
      :to="{name:'test',params:{name:'12'}}"
      custom
      v-slot="{ href, route, navigate, isActive }"
    >
      <NavLink :active="isActive" :href="href" @click="navigate"
        >{{ route.fullPath }}</NavLink
      >
    </router-link> -->
    <!-- img 发起请求 -->
    <div ref="imgmmm" style="display:none"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import testchild from './testchild.vue'

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
    let form = {}
    this.inputList.forEach(e=>{
      // this.$set(this.ruleForm,e.label,'') 
      let obj = {}
      obj[e.label] = ''
      form = Object.assign({},form,obj)
    })
    this.ruleForm = form
    console.log(this.ruleForm)

    this.initImg()
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