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
    var dataModel = new ht.DataModel(),
    graphView = window.graph = new ht.graph.GraphView(dataModel),
    rulerFrame = new ht.widget.RulerFrame(graphView),
    view = rulerFrame.getView();
    rulerFrame.getDefaultRulerConfig().guideVisible = true;
    rulerFrame.getDefaultRulerConfig().guideTipVisible = true;
    rulerFrame.getDefaultRulerConfig().guideTipBackground = "rgb(0, 173, 239)";
    rulerFrame.getDefaultRulerConfig().guideTipTextColor = "white";
    
    rulerFrame.getLeftRulerConfig().background = "red";
    rulerFrame.getLeftRulerConfig().tickSpacingAdaptable = true;
    rulerFrame.getLeftRulerConfig().defaultMajorTickSpacing = 100;
    rulerFrame.getLeftRulerConfig().guideTipVisible = true;
    
    rulerFrame.getTopRulerConfig().guideTipVisible = true;
    
    rulerFrame.getRightRulerConfig().visible = true;
    
    rulerFrame.getBottomRulerConfig().visible = true;
    
    rulerFrame.iv();

    var node = new ht.Node();
    node.setPosition(200, 100);
    dataModel.add(node);
    
    graphView.getView().style.background = "rgb(232, 232, 232)";
    
    view.className = "main";
    this.$refs.cutTopo.appendChild(view);
    
    window.addEventListener("resize", function(e) {
        rulerFrame.invalidate(); 
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
</style>