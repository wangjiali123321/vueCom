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
    let dataModel = new ht.DataModel();
    let g3d = new ht.graph3d.Graph3dView(dataModel);                  
    let view = g3d.getView();  
    view.className = 'main';
    this.$refs.cutTopo.appendChild(view);  
    window.addEventListener('resize', function (e) {
        g3d.invalidate();
    }, false);   
    
    g3d.setEye([0, 400, 800]);
    g3d.enableToolTip();
    g3d.getToolTip = function(e){
        var data = this.getDataAt(e);
        if(data){
            return '<pre>' + JSON.stringify(data.getStyleMap(), function(key, value){
                if(value && value.length > 0 && typeof value[0] === 'number'){
                    var v = [];
                    for(var i=0; i<value.length; i++){
                        v[i] = parseFloat(value[i].toFixed(2));
                    }                                
                    return '[' + v.join(',') + ']';
                }
                return value;
            }, 4) + '</pre>';
        }
        return null;
    };
                    
    // first row
    createNode([-300, 0, 300], [100, 100, 100]).s({
        'left.color': 'pink',
        'right.color': 'yellow',
        'front.color': 'red',
        'back.color': 'green',
        'top.color': 'blue',
        'bottom.color': 'orange'                    
    }); 
    createNode([-100, 0, 300], [100, 100, 100]).s({
        'left.color': 'pink',
        'right.color': 'yellow',
        'front.color': 'red',
        'back.color': 'green',
        'top.color': 'blue',
        'bottom.color': 'orange',
        'all.light': false
    });                
    createNode([100, 0, 300], [100, 100, 100]).s({
        'all.color': '#1ABC9C'
    });
    createNode([300, 0, 300], [100, 100, 100]).s({
        'all.color': '#1ABC9C',
        'all.light': false
    });
    
    // second row
    createNode([-300, 0, 100], [100, 100, 100]).s({
        'left.color': 'pink',
        'right.color': 'yellow',
        'front.color': 'red',
        'back.color': 'green',                    
        'bottom.color': 'orange',
        'top.visible': false
    }); 
    function createNode(p3, s3){
        var node = new ht.Node();
        node.p3(p3);
        node.s3(s3);
        dataModel.add(node);
        return node;
    }
  },
  methods:{
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