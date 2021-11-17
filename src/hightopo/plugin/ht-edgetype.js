!function(W){"use strict";var e="ht",E=W[e],C=Math,R=C.max,m=C.min,d=C.abs,s=C.atan2,X=(C.cos,C.sin,C.ceil),w=E.Default,P=w.getInternal(),k=E.List,Q=P.Mat,T=P.getNodeRect,F=P.intersectionLineRect,j=w.getDistance,S=w.setEdgeType,G="left",Z="right",O="top",o="bottom",n="edge.type",z="edge.gap",h="edge.center",l="edge.extend",A=function(R,Q){return T(R,Q).width},f=function(s,E){return T(s,E).height},I=function(l,D){return P.getEdgeHostPosition(l,D,"source")},M=function(v,h){return P.getEdgeHostPosition(v,h,"target")},p=function(X,i){var A=X.s(n),d=X.getEdgeGroup();if(d){var S=0;if(d.eachSiblingEdge(function(u){i.isVisible(u)&&u.s(n)==A&&S++}),S>1)return X.s(z)*(S-1)/2}return 0},$=function(c,k){var P=c.s(n),m=c.isLooped();if(!c.getEdgeGroup())return m?c.s(z):0;var w,C=0,Q=0,y=0;return c.getEdgeGroup().getSiblings().each(function(j){j.each(function(N){if(N._40I===c._40I&&N.s(n)==P&&k.isVisible(N)){var f=N.s(z);w?(Q+=y/2+f/2,y=f):(w=N,y=f),N===c&&(C=Q)}})}),m?Q-C+y:C-Q/2},q=function(o,B){var d=B.s("edge.corner.radius");return w.toRoundedCorner(o,d)};P.addMethod(E.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),S("boundary",function(u,V,i,y){y||(V=-V);var E,$=I(i,u),P=M(i,u),H=T(i,u._40I),A=T(i,u._41I),_=new Q(s(P.y-$.y,P.x-$.x)),h=j($,P),Z=$.x,g=$.y;return E=_.tf(0,V),$={x:E.x+Z,y:E.y+g},E=_.tf(h,V),P={x:E.x+Z,y:E.y+g},E=F($,P,H),E&&($={x:E[0],y:E[1]}),E=F($,P,A),E&&(P={x:E[0],y:E[1]}),{points:new k([$,P])}}),S("ripple",function(x,c,F,t){t||(c=-c);var n=I(F,x),v=M(F,x),l=j(n,v),e=m(x.s("edge.offset"),l/2),i=x.s("edge.ripple.size"),A=x.s("edge.ripple.length"),$=x.s("edge.ripple.both"),J=x.s(h),L=x.s("edge.ripple.elevation"),O=new k,G=x.s("edge.ripple.straight")?null:new k,D=new Q(s(v.y-n.y,v.x-n.x));t||(L=-L),l-=2*e,A>0&&(i=X(l/A));var p=l/i;G&&G.add(1);for(var q=0;i>q;q++)G&&G.add(3),0===q?O.add({x:e+p*q,y:J?0:c}):O.add({x:e+p*q,y:c}),O.add({x:e+p*q+p/2,y:L+c}),$&&(L=-L);for(O.add({x:e+l,y:J?0:c}),q=0;q<O.size();q++){var _=D.tf(O.get(q));_.x+=n.x,_.y+=n.y,O.set(q,_)}return{points:O,segments:G}}),S("h.v",function(C,g,V){g=$(C,V);var R=new k,v=C.s(h),o=I(V,C),W=o.x,P=o.y,y=M(V,C),Q=y.x,_=y.y,U=C._40I instanceof E.Edge,F=C._41I instanceof E.Edge,e=0,x=0,j=Q-W,B=_-P;return v||(e=U?0:A(V,C._40I)/2,x=F?0:f(V,C._41I)/2),j>=0&&0>=B?(R.add({x:W+e,y:P+g}),R.add({x:Q+g,y:P+g}),R.add({x:Q+g,y:_+x})):0>=j&&B>=0?(R.add({x:W-e,y:P+g}),R.add({x:Q+g,y:P+g}),R.add({x:Q+g,y:_-x})):j>=0&&B>=0?(R.add({x:W+e,y:P+g}),R.add({x:Q-g,y:P+g}),R.add({x:Q-g,y:_-x})):(R.add({x:W-e,y:P+g}),R.add({x:Q-g,y:P+g}),R.add({x:Q-g,y:_+x})),q(R,C)}),S("v.h",function(T,Z,p){Z=$(T,p);var m=new k,R=T.s(h),s=I(p,T),X=s.x,Q=s.y,e=M(p,T),r=e.x,J=e.y,j=T._40I instanceof E.Edge,D=T._41I instanceof E.Edge,K=0,B=0,N=r-X,O=J-Q;return R||(K=D?0:A(p,T._41I)/2,B=j?0:f(p,T._40I)/2),N>=0&&0>=O?(m.add({x:X+Z,y:Q-B}),m.add({x:X+Z,y:J+Z}),m.add({x:r-K,y:J+Z})):0>=N&&O>=0?(m.add({x:X+Z,y:Q+B}),m.add({x:X+Z,y:J+Z}),m.add({x:r+K,y:J+Z})):N>=0&&O>=0?(m.add({x:X-Z,y:Q+B}),m.add({x:X-Z,y:J+Z}),m.add({x:r-K,y:J+Z})):(m.add({x:X-Z,y:Q-B}),m.add({x:X-Z,y:J+Z}),m.add({x:r+K,y:J+Z})),q(m,T)}),S("ortho",function(D,i,Y){var n=new k,W=D.s(h),c=D.s("edge.ortho"),s=D._40I,y=D._41I,z=I(Y,D),H=z.x,o=z.y,R=M(Y,D),m=R.x,v=R.y,$=m-H,j=v-o,U=s instanceof E.Edge,G=y instanceof E.Edge,u=W||U?0:A(Y,s)/2,_=W||U?0:f(Y,s)/2,P=W||G?0:A(Y,y)/2,t=W||G?0:f(Y,y)/2,l=($-(u+P)*($>0?1:-1))*c,p=(j-(_+t)*(j>0?1:-1))*c;return d($)<d(j)?$>=0&&0>=j?(n.add({x:H+i,y:o-_}),n.add({x:H+i,y:o+p+i-_}),n.add({x:m+i,y:o+p+i-_}),n.add({x:m+i,y:v+t})):0>=$&&j>=0?(n.add({x:H+i,y:o+_}),n.add({x:H+i,y:o+p+i+_}),n.add({x:m+i,y:o+p+i+_}),n.add({x:m+i,y:v-t})):$>=0&&j>=0?(n.add({x:H+i,y:o+_}),n.add({x:H+i,y:o+p-i+_}),n.add({x:m+i,y:o+p-i+_}),n.add({x:m+i,y:v-t})):(n.add({x:H+i,y:o-_}),n.add({x:H+i,y:o+p-i-_}),n.add({x:m+i,y:o+p-i-_}),n.add({x:m+i,y:v+t})):$>=0&&0>=j?(n.add({x:H+u,y:o+i}),n.add({x:H+l+i+u,y:o+i}),n.add({x:H+l+i+u,y:v+i}),n.add({x:m-P,y:v+i})):0>=$&&j>=0?(n.add({x:H-u,y:o+i}),n.add({x:H+l+i-u,y:o+i}),n.add({x:H+l+i-u,y:v+i}),n.add({x:m+P,y:v+i})):$>=0&&j>=0?(n.add({x:H+u,y:o+i}),n.add({x:H+l-i+u,y:o+i}),n.add({x:H+l-i+u,y:v+i}),n.add({x:m-P,y:v+i})):(n.add({x:H-u,y:o+i}),n.add({x:H+l-i-u,y:o+i}),n.add({x:H+l-i-u,y:v+i}),n.add({x:m+P,y:v+i})),q(n,D)}),S("flex",function(H,e,U){var x=new k,l=H.s("edge.flex")+p(H,U),w=H.s(h),P=H._40I,i=H._41I,T=I(U,H),N=T.x,L=T.y,z=M(U,H),o=z.x,u=z.y,O=P instanceof E.Edge,y=i instanceof E.Edge,C=o-N,j=u-L,B=w||O?0:A(U,P)/2,J=w||O?0:f(U,P)/2,g=w||y?0:A(U,i)/2,Q=w||y?0:f(U,i)/2,a=C>0?l:-l,$=j>0?l:-l;return d(C)<d(j)?C>=0&&0>=j?(x.add({x:N+e,y:L-J}),x.add({x:N+e,y:L+$+e-J}),x.add({x:o+e,y:u-$+e+Q}),x.add({x:o+e,y:u+Q})):0>=C&&j>=0?(x.add({x:N+e,y:L+J}),x.add({x:N+e,y:L+$+e+J}),x.add({x:o+e,y:u-$+e-Q}),x.add({x:o+e,y:u-Q})):C>=0&&j>=0?(x.add({x:N+e,y:L+J}),x.add({x:N+e,y:L+$-e+J}),x.add({x:o+e,y:u-$-e-Q}),x.add({x:o+e,y:u-Q})):(x.add({x:N+e,y:L-J}),x.add({x:N+e,y:L+$-e-J}),x.add({x:o+e,y:u-$-e+Q}),x.add({x:o+e,y:u+Q})):C>=0&&0>=j?(x.add({x:N+B,y:L+e}),x.add({x:N+a+e+B,y:L+e}),x.add({x:o-a+e-g,y:u+e}),x.add({x:o-g,y:u+e})):0>=C&&j>=0?(x.add({x:N-B,y:L+e}),x.add({x:N+a+e-B,y:L+e}),x.add({x:o-a+e+g,y:u+e}),x.add({x:o+g,y:u+e})):C>=0&&j>=0?(x.add({x:N+B,y:L+e}),x.add({x:N+a-e+B,y:L+e}),x.add({x:o-a-e-g,y:u+e}),x.add({x:o-g,y:u+e})):(x.add({x:N-B,y:L+e}),x.add({x:N+a-e-B,y:L+e}),x.add({x:o-a-e+g,y:u+e}),x.add({x:o+g,y:u+e})),q(x,H)}),S("extend.east",function(Z,z,r){var S=new k,O=Z.s(l)+p(Z,r),w=Z.s(h),j=I(r,Z),Y=Z._40I instanceof E.Edge,B=Z._41I instanceof E.Edge,T=j.x+(w||Y?0:A(r,Z._40I)/2),P=j.y,D=M(r,Z),n=D.x+(w||B?0:A(r,Z._41I)/2),g=D.y,_=R(T,n)+O;return P>g?(S.add({x:T,y:P+z}),S.add({x:_+z,y:P+z}),S.add({x:_+z,y:g-z}),S.add({x:n,y:g-z})):(S.add({x:T,y:P-z}),S.add({x:_+z,y:P-z}),S.add({x:_+z,y:g+z}),S.add({x:n,y:g+z})),q(S,Z)}),S("extend.west",function(f,r,F){var O=new k,g=f.s(l)+p(f,F),u=f.s(h),e=f._40I instanceof E.Edge,Y=f._41I instanceof E.Edge,J=I(F,f),G=J.x-(u||e?0:A(F,f._40I)/2),R=J.y,W=M(F,f),T=W.x-(u||Y?0:A(F,f._41I)/2),V=W.y,j=m(G,T)-g;return R>V?(O.add({x:G,y:R+r}),O.add({x:j-r,y:R+r}),O.add({x:j-r,y:V-r}),O.add({x:T,y:V-r})):(O.add({x:G,y:R-r}),O.add({x:j-r,y:R-r}),O.add({x:j-r,y:V+r}),O.add({x:T,y:V+r})),q(O,f)}),S("extend.north",function(b,O,Z){var S=new k,F=b.s(l)+p(b,Z),Y=b.s(h),X=b._40I instanceof E.Edge,j=b._41I instanceof E.Edge,$=I(Z,b),e=$.x,K=$.y-(Y||X?0:f(Z,b._40I)/2),c=M(Z,b),x=c.x,s=c.y-(Y||j?0:f(Z,b._41I)/2),y=m(K,s)-F;return e>x?(S.add({y:K,x:e+O}),S.add({y:y-O,x:e+O}),S.add({y:y-O,x:x-O}),S.add({y:s,x:x-O})):(S.add({y:K,x:e-O}),S.add({y:y-O,x:e-O}),S.add({y:y-O,x:x+O}),S.add({y:s,x:x+O})),q(S,b)}),S("extend.south",function(d,s,r){var e=new k,z=d.s(l)+p(d,r),Q=d.s(h),t=d._40I instanceof E.Edge,K=d._41I instanceof E.Edge,W=I(r,d),F=W.x,y=W.y+(Q||t?0:f(r,d._40I)/2),X=M(r,d),b=X.x,_=X.y+(Q||K?0:f(r,d._41I)/2),x=R(y,_)+z;return F>b?(e.add({y:y,x:F+s}),e.add({y:x+s,x:F+s}),e.add({y:x+s,x:b-s}),e.add({y:_,x:b-s})):(e.add({y:y,x:F-s}),e.add({y:x+s,x:F-s}),e.add({y:x+s,x:b+s}),e.add({y:_,x:b+s})),q(e,d)});var J=function(N,F,n,I,D){if(I.sort(function(X,V){var g=X.getSourceAgent()===F?X.getTargetAgent():X.getSourceAgent(),m=V.getSourceAgent()===F?V.getTargetAgent():V.getSourceAgent(),o=g.p(),R=m.p();if(n===G||n===Z){if(o.y>R.y)return 1;if(o.y<R.y)return-1}else{if(o.x>R.x)return 1;if(o.x<R.x)return-1}return w.sortFunc(X.getId(),V.getId())}),D){for(var S,y,c,E=N.getSourceAgent(),p=N.getTargetAgent(),d=0;d<I.size();d++){var l=I.get(d);l.getSourceAgent()===E&&l.getTargetAgent()===p||l.getTargetAgent()===E&&l.getSourceAgent()===p?(y||(y=new k),y.add(l,0)):y?(c||(c=new k),c.add(l)):(S||(S=new k),S.add(l))}I.clear(),S&&I.addAll(S),y&&I.addAll(y),c&&I.addAll(c)}var b=I.indexOf(N),s=I.size(),q=N.s(z);return{side:n,index:b,size:s,offset:-q*(s-1)/2+q*b}},D=function(e,g,$,m,h){var d=g.s(n);return J(g,$,m,$.getAgentEdges().toList(function(h){return e.isVisible(h)&&h.s(n)===d}),h)},t=function(b,a){var s=b.getSourceAgent()===a?b.getTargetAgent():b.getSourceAgent(),q=a.p(),K=s.p(),i=K.x-q.x,j=K.y-q.y;return i>0&&d(j)<=i?Z:0>i&&d(j)<=-i?G:j>0&&d(i)<=j?o:O},u=function(d,f,R){var h=f.s(n),S=t(f,R);return J(f,R,S,R.getAgentEdges().toList(function(N){return d.isVisible(N)&&N.s(n)===h&&t(N,R)===S}))},K=function(p,J){var j=p.getSourceAgent()===J,k=j?p.getTargetAgent():p.getSourceAgent(),U=J.p(),g=k.p();return j?U.y>g.y?O:o:U.x<g.x?Z:G},y=function(e,q,d){var S=q.s(n),H=K(q,d);return J(q,d,H,d.getAgentEdges().toList(function(z){return e.isVisible(z)&&z.s(n)===S&&K(z,d)===H}),H===Z||H===o)},B=function(s,n){var S=s.getSourceAgent()===n,j=S?s.getTargetAgent():s.getSourceAgent(),C=n.p(),u=j.p();return S?C.x<u.x?Z:G:C.y>u.y?O:o},U=function(E,U,N){var D=U.s(n),w=B(U,N);return J(U,N,w,N.getAgentEdges().toList(function(v){return E.isVisible(v)&&v.s(n)===D&&B(v,N)===w}),w===Z||w===o)},i=function(t,l,S){var s=t.getSourceAgent(),p=t.getTargetAgent(),d=s.getId()>p.getId(),w=d?p:s,$=d?s:p,n=w.p(),P=$.p(),L=S(l,t,w),R=S(l,t,$),D=t.s(h),b=D?0:A(l,w)/2,i=D?0:A(l,$)/2,U=D?0:f(l,w)/2,j=D?0:f(l,$)/2,F=L.offset,Y=R.offset,T=L.side,g=R.side,M=new k;return T===O?(M.add({x:n.x+F,y:n.y-U}),M.add({x:n.x+F,y:P.y+Y}),g===G?M.add({x:P.x-i,y:P.y+Y}):M.add({x:P.x+i,y:P.y+Y})):T===o?(M.add({x:n.x+F,y:n.y+U}),M.add({x:n.x+F,y:P.y+Y}),g===G?M.add({x:P.x-i,y:P.y+Y}):M.add({x:P.x+i,y:P.y+Y})):T===G?(M.add({x:n.x-b,y:n.y+F}),M.add({x:P.x+Y,y:n.y+F}),g===o?M.add({x:P.x+Y,y:P.y+j}):M.add({x:P.x+Y,y:P.y-j})):T===Z&&(M.add({x:n.x+b,y:n.y+F}),M.add({x:P.x+Y,y:n.y+F}),g===o?M.add({x:P.x+Y,y:P.y+j}):M.add({x:P.x+Y,y:P.y-j})),d&&M.reverse(),q(M,t)};S("ortho2",function(J,P,w){var R,C,F=J.s(h),K=J.s("edge.ortho"),t=J.getSourceAgent(),N=J.getTargetAgent(),b=t.getId()>N.getId(),Y=b?N:t,V=b?t:N,p=Y.p(),a=V.p(),g=u(w,J,Y),L=u(w,J,V),x=F?0:A(w,Y)/2,i=F?0:f(w,Y)/2,d=F?0:A(w,V)/2,l=F?0:f(w,V)/2,E=new k,S=g.offset,j=L.offset,m=g.side;return m===Z?(R=a.y>p.y?-S:S,C=p.x+x+(a.x-d-p.x-x)*K,E.add({x:p.x+x,y:p.y+S}),E.add({x:C+R,y:p.y+S}),E.add({x:C+R,y:a.y+j}),E.add({x:a.x-d,y:a.y+j})):m===G?(R=a.y>p.y?-S:S,C=p.x-x-(p.x-x-a.x-d)*K,E.add({x:p.x-x,y:p.y+S}),E.add({x:C-R,y:p.y+S}),E.add({x:C-R,y:a.y+j}),E.add({x:a.x+d,y:a.y+j})):m===o?(R=a.x>p.x?-S:S,C=p.y+i+(a.y-l-p.y-i)*K,E.add({x:p.x+S,y:p.y+i}),E.add({x:p.x+S,y:C+R}),E.add({x:a.x+j,y:C+R}),E.add({x:a.x+j,y:a.y-l})):m===O&&(R=a.x>p.x?-S:S,C=p.y-i-(p.y-i-a.y-l)*K,E.add({x:p.x+S,y:p.y-i}),E.add({x:p.x+S,y:C-R}),E.add({x:a.x+j,y:C-R}),E.add({x:a.x+j,y:a.y+l})),b&&E.reverse(),q(E,J)},!0),S("flex2",function(v,Q,F){var $,b=v.getSourceAgent(),i=v.getTargetAgent(),W=b.getId()>i.getId(),g=W?i:b,P=W?b:i,E=g.p(),x=P.p(),l=u(F,v,g),m=u(F,v,P),N=v.s(h),C=v.s("edge.flex")+(l.size-1)/2*v.s(z),r=N?0:A(F,g)/2,L=N?0:f(F,g)/2,D=N?0:A(F,P)/2,S=N?0:f(F,P)/2,V=new k,R=l.offset,Y=m.offset,H=l.side;return H===Z?($=x.y>E.y?-R:R,V.add({x:E.x+r,y:E.y+R}),V.add({x:E.x+r+C+$,y:E.y+R}),V.add({x:x.x-D-C+$,y:x.y+Y}),V.add({x:x.x-D,y:x.y+Y})):H===G?($=x.y>E.y?-R:R,V.add({x:E.x-r,y:E.y+R}),V.add({x:E.x-r-C-$,y:E.y+R}),V.add({x:x.x+D+C-$,y:x.y+Y}),V.add({x:x.x+D,y:x.y+Y})):H===o?($=x.x>E.x?-R:R,V.add({x:E.x+R,y:E.y+L}),V.add({x:E.x+R,y:E.y+L+C+$}),V.add({x:x.x+Y,y:x.y-S-C+$}),V.add({x:x.x+Y,y:x.y-S})):H===O&&($=x.x>E.x?-R:R,V.add({x:E.x+R,y:E.y-L}),V.add({x:E.x+R,y:E.y-L-C-$}),V.add({x:x.x+Y,y:x.y+S+C-$}),V.add({x:x.x+Y,y:x.y+S})),W&&V.reverse(),q(V,v)},!0),S("extend.north2",function(A,L,Q){var v=A.getSourceAgent(),J=A.getTargetAgent(),V=v.getId()>J.getId(),n=V?J:v,o=V?v:J,M=n.p(),c=o.p(),T=D(Q,A,n,O),d=D(Q,A,o,O,!0),g=A.s(h),I=g?0:f(Q,n)/2,E=g?0:f(Q,o)/2,w=T.offset,e=d.offset,y=A.s(l)+(T.size-1)/2*A.s(z),W=m(M.y-I,c.y-E)-y+(M.x<c.x?w:-w),R=new k;return R.add({x:M.x+w,y:M.y-I}),R.add({x:M.x+w,y:W}),R.add({x:c.x+e,y:W}),R.add({x:c.x+e,y:c.y-E}),V&&R.reverse(),q(R,A)},!0),S("extend.south2",function(H,B,P){var F=H.getSourceAgent(),Q=H.getTargetAgent(),X=F.getId()>Q.getId(),G=X?Q:F,$=X?F:Q,Z=G.p(),J=$.p(),a=D(P,H,G,o),C=D(P,H,$,o,!0),u=H.s(h),b=u?0:f(P,G)/2,I=u?0:f(P,$)/2,A=a.offset,g=C.offset,w=H.s(l)+(a.size-1)/2*H.s(z),_=R(Z.y+b,J.y+I)+w+(Z.x>J.x?A:-A),v=new k;return v.add({x:Z.x+A,y:Z.y+b}),v.add({x:Z.x+A,y:_}),v.add({x:J.x+g,y:_}),v.add({x:J.x+g,y:J.y+I}),X&&v.reverse(),q(v,H)},!0),S("extend.west2",function(a,Z,V){var J=a.getSourceAgent(),N=a.getTargetAgent(),j=J.getId()>N.getId(),r=j?N:J,s=j?J:N,P=r.p(),S=s.p(),$=D(V,a,r,O),Q=D(V,a,s,O,!0),v=a.s(h),L=v?0:A(V,r)/2,i=v?0:A(V,s)/2,g=$.offset,B=Q.offset,_=a.s(l)+($.size-1)/2*a.s(z),R=m(P.x-L,S.x-i)-_+(P.y<S.y?g:-g),E=new k;return E.add({x:P.x-L,y:P.y+g}),E.add({x:R,y:P.y+g}),E.add({x:R,y:S.y+B}),E.add({x:S.x-i,y:S.y+B}),j&&E.reverse(),q(E,a)},!0),S("extend.east2",function(C,i,u){var Y=C.getSourceAgent(),Z=C.getTargetAgent(),a=Y.getId()>Z.getId(),x=a?Z:Y,N=a?Y:Z,v=x.p(),j=N.p(),r=D(u,C,x,O),m=D(u,C,N,O,!0),I=C.s(h),M=I?0:A(u,x)/2,y=I?0:A(u,N)/2,w=r.offset,e=m.offset,n=C.s(l)+(r.size-1)/2*C.s(z),T=R(v.x+M,j.x+y)+n+(v.y>j.y?w:-w),W=new k;return W.add({x:v.x+M,y:v.y+w}),W.add({x:T,y:v.y+w}),W.add({x:T,y:j.y+e}),W.add({x:j.x+y,y:j.y+e}),a&&W.reverse(),q(W,C)},!0),S("v.h2",function(J,P,a){return i(J,a,y)},!0),S("h.v2",function(u,x,k){return i(u,k,U)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);