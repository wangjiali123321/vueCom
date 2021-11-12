<template>
  <div class='cut-topo' ref="cutTopo">
      
  </div>
</template>

<script type="text/ecmascript-6">
import '../../hightopo/core/ht'
import '../../hightopo/plugin/ht-animation'
import '../../hightopo/plugin/ht-astar'
import '../../hightopo/plugin/ht-modeling.js'
import '../../hightopo/plugin/ht-obj.js'
import '../../hightopo/plugin/ht-edgetype.js'
import '../../hightopo/plugin/ht-form.js'
import '../../hightopo/plugin/ht-rulerframe.js'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  created: function() {
    
  },
  mounted: function() {
    let dataModel = new ht.DataModel()
    this.graphView = new ht.graph.GraphView(dataModel)
    this.view = this.graphView.getView();
    this.view.className = 'main';
    
    this.$refs.cutTopo.appendChild(this.view)
        
  }
}
</script>
<style scoped>
.cut-topo {
    text-align: left;
    position: relative;
    width: 800px;
    height: 500px;
    margin: auto;
    border: 1px solid #ccc;
}
</style>