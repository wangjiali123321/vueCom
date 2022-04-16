<template>
  <div >
      <jimTable
        :thead="thead"
        :operateConfig="operateConfig"
      ></jimTable>
  </div>
</template>

<script type="text/ecmascript-6">
import jimTable from '../components/luckyui/jimTable.vue';
  export default {
    components: { jimTable },
    name:'recommend',
    data(){
      return{
        thead:[{
          prop: 'name',
          label: 'name'
        },{
          prop:'operation',
          label: 'titlw'
        }]
      }
    },
    computed: {
      operateConfig() {
        let that = this;
        return {
          optType: {
            toRemove: {event:'toRemove',text: 'remove',type:'danger'}
          },
          optFunc: function(val, userinfo){
            if(val){

            }
            return  ['toRemove']
          }
        }
      }
    },
    beforeCreate(){
      // console.log('beforeCreaterecommedn');
    },
    created() {
      console.log('recommedn');
      
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>