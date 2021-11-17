!function(g,x){"use strict";var j="ht",v=g[j],z="px",M="left",o="top",e="bottom",n="right",p="innerHTML",Q="className",y="",K="width",Z="height",P="string",I="position",b="absolute",R="0",i="opacity",Y="background",W=v.Default,E=W.getInternal(),T=v.Color,A=W.animate,r=W.isTouchable,c=null,m=(Math.sqrt,g.parseInt),$=g.setTimeout,X=(Math.round,T.titleIconBackground),D=function(B){return typeof B===P||B instanceof String},S=function(){return document},h=function(T){return S().createElement(T)},d=function(){var r=h("div");return r.tabIndex=-1,r.style.outline="none",r},H=function(){return h("canvas")},u=function(I,a){N(I,"-webkit-transform",a),N(I,"-ms-transform",a),N(I,"transform",a)},N=function(j,K,i){j.style.setProperty(K,i,c)},f=function(R,H,x){W.def(v.widget[R],H,x)},l=function(X,j){X.appendChild(j)},G=function(){return S().documentElement},s=function(){return G().clientWidth},q=function(){return G().clientHeight},_=E.addEventListener,O=E.removeEventListener,t=function(B){var d=B.touches[0];return d?d:B.changedTouches[0]};E.addMethod(W,{dialogCloseIcon:{width:100,height:100,comps:[{type:"shape",points:[10,10,90,90],segments:[1,2],borderWidth:8,borderColor:X},{type:"shape",points:[90,10,10,90],segments:[1,2],borderWidth:8,borderColor:X}]},dialogMaximizeIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,15,80,75],borderWidth:6,borderColor:X},{type:"rect",rect:[10,10,80,20],background:X}]},dialogRestoreIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,34,56,56],borderWidth:8,borderColor:X},{type:"rect",rect:[10,34,56,14],background:X},{type:"rect",rect:[34,10,56,14],background:X},{type:"rect",rect:[82,10,8,56],background:X},{type:"rect",rect:[66,62,24,8],background:X}]},dialogTitleLabelColor:W.labelSelectColor,dialogTitleLabelFont:(r?"18":"14")+"px arial, sans-serif",dialogContentLabelFont:W.labelFont,dialogTitleBackground:T.titleBackground,dialogHeaderBackground:T.headerBackground,dialogButtonBackground:"#1ABC9C",dialogButtonSelectBackground:"#16A085",dialogButtonLabelColor:"#fff"},!0);var w=function(G){var h=this;h.$1d=G,h.addListeners()};W.def(w,x,{ms_listener:1,getView:function(){return this.$1d.getView()},clear:function(){delete this.$2d,delete this.$3d,delete this.$4d,delete this.$5d},handle_touchstart:function(N){var m=this,w=m.$1d,p=w.$6d,v=w._config,G=w.$7d,b=N,T=N.target;if(G.contains(T)||W.preventDefault(N),W.isLeftButton(N)){r&&(b=t(N));var S=m.$8d={x:b.pageX,y:b.pageY};m.$9d={x:S.x,y:S.y},!v.maximized&&v.draggable&&p.contains(T)&&(m.$4d=!0,W.startDragging(m,N)),m.handle_mousemove(N)&&(m.$2d=!0,W.startDragging(m,N)),G.contains(N.target)||w.$41d.focus()}},handle_mousedown:function(q){this.handle_touchstart(q)},handle_touchend:function(j){if(W.isLeftButton(j)&&!this.$5d&&!this.$3d){var $=this,U=$.$1d,n=j.target,u=U._config,c=U.$18d,e=U.$16d;for(u.closable&&c.contains(n)&&U.hide(),u.maximizable&&e.contains(n)&&(u.maximized?U.restore():U.maximize());n&&(n.className||"").indexOf("dialog-button")<0;)n=n.parentNode;n&&n.buttonItem&&U.action&&U.action(n.buttonItem,j),delete $.$8d,delete $.$9d}},handle_mouseup:function(b){this.handle_touchend(b)},handleWindowTouchEnd:function(T){var r=this,z=r.$1d,A=z.$10d;r.$2d&&r.$3d?A.fire({kind:"endResize",target:z,originEvent:T}):r.$4d&&r.$5d&&A.fire({kind:"endMove",target:z,originEvent:T}),this.clear()},handleWindowMouseUp:function(o){this.handleWindowTouchEnd(o)},handle_mousemove:function(O){var f=this.$1d._config;if(f.maximized)return!1;if("w"!==f.resizeMode&&"h"!==f.resizeMode&&"wh"!==f.resizeMode)return!1;var m=this,$=m.getView(),U=$.querySelector(".resize-area"),C=U.getBoundingClientRect(),q={x:C.left,y:C.top,width:C.width,height:C.height};O=r?t(O):O;var R=O.clientX,L=O.clientY,Y={x:R,y:L};return W.containsPoint(q,Y)?(N($,"cursor","nwse-resize"),!0):(N($,"cursor",y),void 0)},handleWindowTouchMove:function(g){g.preventDefault();var u=g;r&&(u=t(g));var X=this,F=X.$8d,I=X.$9d;if(!(I.x==F.x&&I.y==F.y&&W.getDistance(I,{x:u.pageX,y:u.pageY})<=1)){var k=X.$1d,K=k._config,L=k.$21d,T=K.resizeMode||"wh",E=u.pageX-F.x,V=u.pageY-F.y;if(X.$2d){var B=L.offsetWidth,P=L.offsetHeight,J=B+E,a=P+V;if(J=Math.max(J,50),a=Math.max(a,50),"center"===K.position||K.position==c){var f={},U=L.getBoundingClientRect();f.x=U.left,f.y=U.top,K.position=f}"w"===T?(k.setSize(J,P),F.x+=J-B):"h"===T?(k.setSize(B,a),F.y+=a-P):"wh"===T&&(k.setSize(J,a),F.x+=J-B,F.y+=a-P),X.$3d?k.$10d.fire({kind:"betweenResize",target:k,originEvent:g}):(X.$3d=!0,k.$10d.fire({kind:"beginResize",target:k,originEvent:g}))}else if(X.$4d){var e=L.getBoundingClientRect(),H=e.width,y=e.height,G=s(),D=q(),w=m(L.style.left)||0,b=m(L.style.top)||0,n=w+E,O=b+V,$=k.adjustPosition({x:n,y:O},{width:H,height:y},{width:G,height:D});$&&(n=$.x,O=$.y);var Z=n-w,i=O-b;N(L,M,n+z),N(L,o,O+z),F.x+=Z,F.y+=i,K.position={x:n,y:O},X.$5d?k.$10d.fire({kind:"betweenMove",target:k,originEvent:g}):(X.$5d=!0,k.$10d.fire({kind:"beginMove",target:k,originEvent:g}))}}},handleWindowMouseMove:function($){this.handleWindowTouchMove($)},handleWindowResize:function(){var m=this,x=m,H=x._config,n=x.$21d,k=s(),O=q(),y=H.width,F=H.height,I=H.position||"center";H.maximized?(N(n,K,k+z),N(n,Z,O+z),N(n,o,R),N(n,M,R)):(N(n,K,y+z),N(n,Z,F+z),"center"===I?(N(n,M,(k-y)/2+z),N(n,o,(O-F)/2+z)):(N(n,M,I.x+z),N(n,o,I.y+z))),x.iv()},handle_mousewheel:function(O){O.stopPropagation()},handle_DOMMouseScroll:function(k){k.stopPropagation()}}),v.widget.Dialog=function(e){var H=this,x=H._view=E.createView(null,H);x[Q]="ht-widget-dialog",N(x,I,b),W.baseZIndex!=c&&N(x,"z-index",W.baseZIndex+"");var D=H.$11d=new w(H);H.bindingHandleWindowResize=D.handleWindowResize.bind(H),H.$10d=new v.Notifier,e&&H.setConfig(e)},f("Dialog",x,{ms_v:1,ms_fire:1,setTitle:function(H){this._config.title=H,this.getView().querySelector(".dialog-container-title span").innerHTML=H},clearNodes:function(w){if(w)for(;w.firstChild;)w.removeChild(w.firstChild)},$31d:function(){var L=this,o=L.$6d=d(),R=L._config,F=L.$12d=L.$13d();o[Q]="dialog-container-title",N(o,"cursor","default"),N(o,"white-space","nowrap"),N(o,"overflow","hidden"),N(o,"font",W.dialogTitleLabelFont),N(o,Y,R.titleBackground||W.dialogTitleBackground),N(o,"color",R.titleColor||W.dialogTitleLabelColor);var g=h("span"),D=L.$25d();if(R.titleAlign&&N(o,"text-align",R.titleAlign),R.titleIcon){var q=L.$14d=L.$15d();l(o,q)}if(R.title&&R.title.trim&&(R.title=R.title.trim()),g[p]=R.title||"&nbsp;",l(o,g),R.maximizable){var T=L.$16d=L.$17d();l(F,T)}if(R.closable){var _=L.$18d=L.$19d();l(F,_)}return l(o,F),N(o,"display","block"),N(o,"line-height",D+z),o},$13d:function(){var T=d();return N(T,I,b),N(T,M,R),N(T,n,5+z),N(T,o,R),N(T,e,R),N(T,"text-align",n),N(T,"white-space","nowrap"),T[Q]="dialog-title-controls",T},$20d:function(){var u=this.$21d=d(),a=this._config,C=a.borderWidth;return N(u,I,"fixed"),N(u,"box-shadow","rgba(0, 0, 0, 0.2) 0px 5px 10px 0px"),N(u,"padding",R+" "+C+z+" "+C+z+" "+C+z),N(u,"box-sizing","border-box"),N(u,"-moz-box-sizing","border-box"),u[Q]="dialog-container",N(u,Y,a.titleBackground||W.dialogTitleBackground),u},$22d:function(){var H,r=this,F=r._config,V=r.$7d=d(),m=F.content,h=0,s=F.contentPadding||0;F.buttons!=c&&F.buttons.length>0&&(h=32),D(m)?V[p]=m:m.getView?(H=m.getView(),l(V,H)):(H=m,l(V,H)),N(V,I,b),N(V,"font",W.dialogContentLabelFont),v.Default.appendToScreen(V);var C=V.offsetWidth+1,k=V.offsetHeight,$=r.$25d();return F.width==c&&(F.width=C+10+2*s),F.height==c&&(F.height=k+$+h+5+2*s),v.Default.removeHTML(V),H&&(N(H,"box-sizing","border-box"),N(H,"-moz-box-sizing","border-box"),N(H,K,"100%"),N(H,Z,"100%")),V[Q]="dialog-content",N(V,o,$+s+z),N(V,e,h+s+z),N(V,M,s+z),N(V,n,s+z),N(V,"overflow","hidden"),V},getOverlayDiv:function(){return this.$41d},$23d:function(){var w=this.$41d=d();return w[Q]="dialog-overlay",N(w,K,"100%"),N(w,Z,"100%"),N(w,I,"fixed"),N(w,o,R),N(w,M,R),N(w,Y,"rgba(235, 235, 235, 0.7)"),w},_config:c,setSize:function(f,y){var A=this,U=A._config;U&&(U.width=f,U.height=y,A.isShowing()&&(A.bindingHandleWindowResize(),A.iv()))},getConfig:function(){return this._config},$24d:function(){var x=this._config,Z=x.titleIconSize||16;return r&&(Z*=1.2),Z},$25d:function(){var M=this._config,y=M.titleHeight||W.widgetTitleHeight;return y},$26d:function(B){N(B,"cursor","pointer"),N(B,"display","inline-block"),N(B,"margin-right",(r?8:4)+z),N(B,"vertical-align",o)},$27d:function(){var P=this.$30d=d(),l=10;return r&&(l=20),N(P,K,l+z),N(P,Z,l+z),N(P,I,b),N(P,e,R),N(P,n,R),P[Q]="resize-area",P},$15d:function(){var A=this,F=H();F[Q]="dialog-title-control dialog-title-control-icon";var r=A.$25d(),p=A.$24d();return A.$26d(F),E.setCanvas(F,p,r),F},$17d:function(){var u=H();u[Q]="dialog-title-control dialog-title-control-maximize";var g=this.$25d(),R=this.$24d();return this.$26d(u),E.setCanvas(u,R,g),u},$19d:function(){var F=H();F[Q]="dialog-title-control dialog-title-control-close";var w=this.$25d(),n=this.$24d();return this.$26d(F),E.setCanvas(F,n,w),F},$28d:function(){var V=d();return N(V,Y,W.dialogContentBackground||"white"),N(V,K,"100%"),N(V,Z,"100%"),N(V,I,"relative"),V},$29d:function(){var P=this,V=d();N(V,"line-height",32+z),N(V,I,b),N(V,e,R),N(V,M,R),N(V,"white-space","nowrap"),N(V,"overflow","hidden"),N(V,n,R),N(V,Y,W.dialogHeaderBackground),V[Q]="dialog-container-buttons";var C=this._config,O=C.buttonsAlign||n,S=0;return N(V,"text-align",O),P.$42d=[],C.buttons.forEach(function(Y){var g=new v.widget.Button,E=g.getView();E[Q]="dialog-button "+Y.className,E.buttonItem=Y,P.$42d.push(g),g.setBorderColor(c),g.setBackground(W.dialogButtonBackground),g.setSelectBackground(W.dialogButtonSelectBackground),g.setLabelColor(W.dialogButtonLabelColor),N(E,I,"relative"),N(E,"display","inline-block"),N(E,"text-align",M),N(E,"height",24+z);var f=r?10:5;O===M||O===n?N(E,"margin-"+O,f+z):0===S||N(E,"margin-"+M,f+z),N(E,"vertical-align","middle");var u=W.getTextSize(g.getLabelFont(),Y.label).width+10;g.onClicked=function(o){Y.action&&Y.action.call(P,Y,o)},g.setLabel(Y.label),g.setDisabled(Y.disabled),N(E,K,u+z),l(V,g.getView()),S++}),V},setConfig:function(i){if(i){var Q=this,J=Q._view;Q._config=i,Q.action=i.action,Q.clearNodes(J),i.borderWidth==c&&(i.borderWidth=5);var U=Q.$23d(),x=Q.$28d(),F=Q.$31d(),V=Q.$22d(),t=Q.$20d(),L=Q.$30d=Q.$27d();if(l(J,U),l(J,t),l(t,x),l(x,F),l(x,V),i.buttons!=c&&i.buttons.length>0){var o=Q.$29d();l(x,o)}l(t,L),i.maximized?(i.maximized=!1,Q.bindingHandleWindowResize(),Q.maximize(!0)):Q.bindingHandleWindowResize(),Q.isShowing()&&Q.iv()}},hide:function(){var t=this,o=t.$21d,H=t.$41d,T=t._view;T[Q]="ht-widget-dialog",A(o).duration(200).scale(.7).set(i,R).end(function(){t.onHidden&&t.onHidden(),v.Default.removeHTML(T),t.$10d.fire({kind:"hide",target:t})}),A(H).duration(200).set(i,R).end(),O(g,"resize",t.bindingHandleWindowResize)},isShowing:function(){return!!this._view.parentNode},setModal:function(a){this.$41d.style.display=a?"block":"none"},isModal:function(){return"none"!==this.$41d.style.display},$32d:function(){var K=this,D=K._config,A=K.$21d;u(A,y),K.iv(),D.maximized?K.$10d.fire({kind:"maximize",target:K}):K.$10d.fire({kind:"restore",target:K})},maximize:function(e){var Y=this,W=Y.$21d,H=Y._config;if(!H.maximized){H.maximized=!0,Y.$33d(),Y.$16d[Q]="dialog-title-control dialog-title-control-minimize";var C=s(),a=q(),O=H.width,y=H.height,f=m(W.style.left)||0,U=m(W.style.top)||0;Y.$36d=O,Y.$37d=y,Y.$34d=f,Y.$35d=U;var P=e?0:200;A(W).duration(P).set(M,R).set(o,R).set(K,C+z).set(Z,a+z).end(function(){Y.$32d()})}},restore:function(){var a=this,l=a.$34d,e=a.$35d,L=a.$36d,D=a.$37d,r=a._config;if(r.maximized&&(r.maximized=!1,a.$33d(),a.$16d[Q]="dialog-title-control dialog-title-control-maximize",a.isShowing()&&l!=c&&e!=c&&L!=c&&D!=c)){var S=a.$21d;A(S).duration(200).set(M,l+z).set(o,e+z).set(K,L+z).set(Z,D+z).end(function(){a.$32d()})}delete a.$34d,delete a.$35d,delete a.$36d,delete a.$37d},show:function(){var l=this,j=l._view,w=l._config,E=l.$21d,d=l.$41d;w&&w.zIndex!=c&&N(j,"z-index",w.zIndex+y),v.Default.appendToScreen(j),u(E,"scale(0.7)"),N(E,i,R),l.iv(),l.validate(),l._view[Q]+=" dialog-show",$(function(){A(E).duration(200).scale(1).set(i,"1").end(function(){N(E,K,E.clientWidth+z),N(E,Z,E.clientHeight+z),l.onShown&&l.onShown(),l.$10d.fire({kind:"show",target:l});var Q=w&&w.content;Q&&Q.iv&&Q.iv()}),A(d).duration(200).set(i,"1").end(),_(g,"resize",l.bindingHandleWindowResize)},30)},setPosition:function(k){var J=this.$21d;J.style.left=k.x+"px",J.style.top=k.y+"px"},addEventListener:function(N,W,M){this.$10d.add(N,W,M)},removeEventListener:function(w,n){this.$10d.remove(w,n)},$38d:function(n,H,I,x){var F=E.initContext(n);E.translateAndScale(F,0,0,1),F.clearRect(0,0,I,I);var e=(I-x)/2;W.drawStretchImage(F,W.getImage(H),"fill",0,e,x,x),F.restore()},$33d:function(){var g=this,y=g._config,T=g.$16d,s=y.maximized?W.dialogRestoreIcon:W.dialogMaximizeIcon;if(T&&s){var b=g.$25d(),$=g.$24d();g.$38d(T,W.getImage(s),b,$)}},$39d:function(){var Z=this,g=Z._config,x=Z.$14d,h=g.titleIcon;if(x&&h){var G=Z.$25d(),M=Z.$24d();Z.$38d(x,W.getImage(h),G,M)}},$40d:function(){var Y=this,B=Y.$18d,L=W.dialogCloseIcon;if(B&&L){var c=Y.$25d(),m=Y.$24d();Y.$38d(B,W.getImage(L),c,m)}},invalidate:function(Q){var U=this,D=U.$42d;U._68I||(U._68I=1,W.callLater(U.validate,U,c,Q),U.onInvalidated&&U.onInvalidated(),U.fireViewEvent("invalidate"));var M=U._config.content;M.invalidate&&M.invalidate(),D&&D.forEach(function(n){n.iv()})},validateImpl:function(){var A=this;A.$40d(),A.$33d(),A.$39d();var $=A._config.content;$.initView&&($.setX(0),$.setY(0),$.setWidth(A.$7d.clientWidth),$.setHeight(A.$7d.clientHeight))},adjustPosition:function(w,K,m){var T=K.width,H=K.height,k=m.width,i=m.height,U=w.x,s=w.y,Y=this._config,l=Y.minDragSize||20;return"inside"===Y.dragMode?(U+T>k&&(U=k-T),s+H>i&&(s=i-H),0>U&&(U=0),0>s&&(s=0)):(null==Y.dragMode||"none"===Y.dragMode)&&(-T+l>U&&(U=-T+l),U>k-l&&(U=k-l),s>i-l&&(s=i-l),0>s&&(s=0)),{x:U,y:s}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);