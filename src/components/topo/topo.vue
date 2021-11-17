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
    var gv = window.gv = new ht.graph.GraphView();
    var dm = gv.dm();
    var rotateNodes = [];
    var scaleNodes = [];
    gv.addToDOM();

    gv.addTopPainter(function(g) {
        g.strokeStyle = 'red';
        g.lineWidth = 1;
        g.beginPath();
        dm.each(function(data) {
            var p = data.getPosition();
            g.moveTo(p.x - 2, p.y);
            g.lineTo(p.x + 2, p.y);
            g.moveTo(p.x, p.y - 2);
            g.lineTo(p.x, p.y + 2);
        });
        g.stroke();
    });

    rotateNodes.push(createNode(-150, 50, 0, 0));
    rotateNodes.push(createNode(0, 50, 0.5, 0.5));
    rotateNodes.push(createNode(150, 50, 1, 1.2));

    scaleNodes.push(createNode(-150, 150, 0, 0));
    scaleNodes.push(createNode(0, 150, 0.5, 0.5));
    scaleNodes.push(createNode(150, 150, 1, 1.2));

    setInterval(function() {
        rotateNodes.forEach(function(node) {
            var oldRotation = node.getRotation();
            var newRotation = oldRotation + Math.PI / 30;
            node.setRotation(newRotation);
        });
        scaleNodes.forEach(function(node) {
            var oldScale = node.getScaleX();
            var newScale = oldScale + 0.02 > 2 ? 0 : oldScale + 0.02;
            node.setScale(newScale, newScale);
        });
    }, 50);

    gv.fitContent(false, 50);

    function createNode(x, y, anchorX, anchorY) {
        var node = new ht.Node();
        node.setPosition(x, y);
        node.setAnchor(anchorX, anchorY);
        node.s({
            'label': anchorX + ',' + anchorY,
            // 'label': 'Position: {x:' + x + ', y:' + y + '}\nAnchor: {x:' + anchorX + ', y' + anchorY + '}',
        });
        dm.add(node);

        return node;
    }
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