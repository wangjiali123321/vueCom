function init() {
    dataModel = new ht.DataModel();
    g3d = new ht.graph3d.Graph3dView(dataModel);
    g3d.setGridSize(10);
    g3d.setGridVisible(true);

    view = g3d.getView();
    view.className = 'main';
    document.body.appendChild(view);
    window.addEventListener('resize', function (e) {
        g3d.invalidate();
    }, false);

    g3d.setEye([ 0, 100, 400 ]);

    ht.Default.loadFontFace('./wenquanyi.json', function() {
        createTextNode();
        createFormPane();
    });
};

function createTextNode() {
    text = new ht.Node();
    text.p3([ -150, 0, 0 ]);
    text.s({
        'shape3d' : 'text',
        'shape3d.text' : 'Hello ~,图扑软件'
    });
    dataModel.add(text);
};