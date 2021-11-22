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
    window.addEventListener('resize', function (e) {
        this.graphView.invalidate();
    }, false);                         
        
    ht.Default.setImage('mac', '../mac-air.png');            
        
    let air11 = new ht.Node();
    air11.setName('11-inch MacBook Air');
    air11.setImage('mac');
    air11.setSize(80, 43);
    air11.setPosition(100, 70);                
    dataModel.add(air11);
    
    let air13 = new ht.Node();
    air13.setName('13-inch MacBook Air');                
    air13.setImage('mac','../mac-air.png');
    air13.setPosition(260, 70);
    air13.setRotation(Math.PI/2);
    dataModel.add(air13);
    
    air11.setHost(air13);   
    
    this.graphView.setEditable(true);
    this.graphView.setRectEditableFunc(function(data){
        return data === air11;
    });
    this.graphView.setRotationEditableFunc(function(data){
        return data === air13;
    });
    
    var eventType = ht.Default.isTouchable ? 'touchend' : 'mouseup';
    this.graphView.getView().addEventListener(eventType, function(e){
      console.log(e)
        var data = graphView.getDataAt(e);
        if(data && ht.Default.isDoubleClick(e)){
            alert(data.getName() + ' is double clicked.');
        }
    });
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
.main {
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
</style>