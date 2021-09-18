<template>
  <div >
    <el-table
      :data="tables.tbody"
      style="width: 100%">
      <template v-for="(item,index) in tables.thead">
        <el-table-column
          :key="index"
          :prop="item.prop"
          :label="item.label"
          width="180">
          <template slot-scope="scope">
            <div class="operation" v-if="item.prop === 'operation' && scope.row.operation">
              <template v-for="(item,index) in scope.row.operation">
                <el-button :key="index">{{item.text}}</el-button>
              </template>
            </div>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'recommend',
    props: {
      thead: {
        type: Array,
        default: []
      },
      operateConfig: {
        type: Object
      }
    },
    data() {
      return {
        tables:{
          tbody:[],
          thead: []
        }
      }
    },
    beforeCreate(){
      // console.log('beforeCreaterecommedn');
    },
    created() {
      console.log('recommedn');
      
    },
    mounted() {
      this.tables.tbody = [{name:'111',code:'123'},{name:'111',code:'123'}]
      this.tables.thead = this.thead
      this.setOperation()
    },
    methods: {
      setOperation() {
        for(let i in this.tables.tbody){
          let operation= []
          let temp = this.operateConfig.optFunc(this.tables.tbody[i])
          for(let j in temp){
            operation.push(this.operateConfig.optType[temp[j]])
          }
          console.log(operation)
          this.$set(this.tables.tbody[i],'operation',operation)
          console.log(this.tables)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>