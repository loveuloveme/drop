(this.webpackJsonpdrop=this.webpackJsonpdrop||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),r=a(7),n=a.n(r),l=a(8),i=(a(28),a(29),a(44)),j=a(45),o=a(22),d=a(47),h=a(46),x=a(43),b=a(48),p=(a(30),a(19)),O=a(18),u=(a(31),a(1)),f=1e5;var m=function(e){var t=e.data,a=e.volume,s=e.angle,r=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useState)({}),j=Object(l.a)(i,2),o=j[0],d=j[1];Object(c.useEffect)((function(){null!=t&&d({width:r.current.getBBox().width+200,height:r.current.getBBox().height+n.current.getBBox().height+110})}),[t]);var b,m="M ";if(null==t)return Object(u.jsx)(u.Fragment,{});var v=Object(O.a)(t.x),g=Object(O.a)(t.y);v.forEach((function(e,t){v[t]*=f,g[t]*=f}));var y=Math.min.apply(Math,v),k=Math.min.apply(Math,g),M=(Math.max.apply(Math,v),Math.max.apply(Math,g),Math.min.apply(Math,t.x)),w=(Math.min.apply(Math,t.y),Math.max.apply(Math,t.x)),N=Math.max.apply(Math,t.y);v.forEach((function(e,t){v[t]+=Math.abs(y)+100,g[t]+=Math.abs(k)+30})),v.forEach((function(e,t){m+="".concat(e," ").concat(g[t]," ")}));var B=g[0];return b="M ".concat(v[0]-100," ").concat(B," ").concat(v[v.length-1]+100," ").concat(B,"\n     ").concat(v[v.length-1]+100," ").concat(B-30," ").concat(v[0]-100," ").concat(B-30," ").concat(v[0]-100," ").concat(B),Object(u.jsx)("div",{className:"drop",children:Object(u.jsxs)("div",{className:"drop-svg-wrapper",children:[Object(u.jsx)("div",{className:"drop-liquid-name",children:"\u0432\u043e\u0434\u0430"}),Object(u.jsxs)("div",{className:"drop-svg",children:[Object(u.jsxs)("svg",Object(p.a)(Object(p.a)({},o),{},{children:[Object(u.jsxs)("defs",{children:[Object(u.jsxs)("pattern",{id:"pattern",patternUnits:"userSpaceOnUse",width:"31",height:"31",patternTransform:"rotate(45)",children:[Object(u.jsx)("line",{x1:"20",y:"0",x2:"20",y2:"31",stroke:"#000000","stroke-width":"30"}),Object(u.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"31",stroke:"#F1C40F","stroke-width":"30"})]}),Object(u.jsx)("marker",{id:"arrowhead",markerWidth:"5",markerHeight:"3",refX:"0",refY:"1.5",orient:"auto",children:Object(u.jsx)("polygon",{points:"0 0, 5 1.5, 0 3"})})]}),Object(u.jsx)(h.a,{placement:"top",overlay:Object(u.jsx)(x.a,{children:"\u0423\u0433\u043e\u043b \u0441\u043c\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f"}),children:Object(u.jsx)("circle",{class:"drop-angle",cx:v[0],cy:g[0],r:"30",fill:"#ffffff",stroke:"#000000",strokeWidth:"3px"})}),Object(u.jsx)("path",{class:"drop-path",d:m,stroke:"black",strokeWidth:"3px",fill:"#ffffff",ref:r}),Object(u.jsx)(h.a,{placement:"bottom",overlay:Object(u.jsx)(x.a,{children:"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u044c"}),children:Object(u.jsx)("path",{class:"drop-floor",d:b,stroke:"none",fill:"url(#pattern)",ref:n})}),Object(u.jsx)("line",{x1:"50%",y1:"30",x2:"50%",y2:o.height-25,stroke:"RGBA(0,0,0,0.8)","stroke-width":"4px","marker-end":"url(#arrowhead)",strokeDasharray:"10"}),Object(u.jsx)("line",{x1:"0",y1:o.height-110,x2:"100%",y2:o.height-110,stroke:"RGBA(0,0,0,0.2)","stroke-width":"4px",strokeDasharray:"10"}),Object(u.jsx)("line",{x1:"100",y1:30,x2:"100",y2:o.height,stroke:"RGBA(0,0,0,0.2)","stroke-width":"4px",strokeDasharray:"10"}),Object(u.jsx)("line",{x1:o.width-100,y1:30,x2:o.width-100,y2:o.height,stroke:"RGBA(0,0,0,0.2)","stroke-width":"4px",strokeDasharray:"10"}),Object(u.jsx)("line",{x1:o.width,y1:30,x2:25,y2:30,stroke:"RGBA(0,0,0,0.8)","stroke-width":"4px",strokeDasharray:"10","marker-end":"url(#arrowhead)"})]})),Object(u.jsx)("div",{className:"drop-pos-text",style:{left:"calc(50%)",bottom:"-40px"},children:"0"}),Object(u.jsxs)("div",{className:"drop-pos-text",style:{left:"100px",bottom:"-40px"},children:[(1e3*M).toFixed(5)," \u043c\u043c"]}),Object(u.jsxs)("div",{className:"drop-pos-text",style:{right:"100px",bottom:"-40px",transform:"translate(50%)"},children:[(1e3*w).toFixed(5)," \u043c\u043c"]}),Object(u.jsxs)("div",{className:"drop-pos-text",style:{left:"45px",top:"80px"},children:[(1e3*N/2).toFixed(5)," \u043c\u043c"]}),Object(u.jsx)("div",{className:"drop-pos-text",style:{right:"0px",bottom:"40px"},children:"X"}),Object(u.jsx)("div",{className:"drop-pos-text",style:{left:"calc(50% + 15px)",top:"0px"},children:"Y"}),Object(u.jsxs)("div",{className:"drop-angle-text",children:[180-s,"\xb0"]}),Object(u.jsxs)("div",{className:"drop-info",children:[a," \u043d\u0430\u043d\u043e\u041b"]})]})]})})},v=a(17),g=a.n(v);var y=function(){var e=Object(c.useState)(46),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(54),n=Object(l.a)(r,2),p=n[0],O=n[1],f=Object(c.useState)(46),v=Object(l.a)(f,2),y=v[0],k=v[1],M=Object(c.useState)(54),w=Object(l.a)(M,2),N=w[0],B=w[1],S=Object(c.useState)(!1),C=Object(l.a)(S,2),G=C[0],I=C[1],R=Object(c.useState)(null),A=Object(l.a)(R,2),E=A[0],F=A[1],D=function(){I(!0),fetch("https://drop-solver.herokuapp.com/?volume=".concat(y,"&angle=").concat(N)).then((function(e){return e.json()})).then((function(e){I(!1),s(y),O(N),console.log(e),e.err||F(e.data)}))};return Object(c.useEffect)((function(){D()}),[]),Object(u.jsx)(i.a,{fluid:!0,className:"App",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(o.a,{xs:"8",className:"disable-padding",children:Object(u.jsx)(m,{data:E,volume:a,angle:p})}),Object(u.jsx)(o.a,{xs:"4",className:"disable-padding",children:Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("h2",{children:["\u0424\u043e\u0440\u043c\u0430 \u043a\u0430\u043f\u043b\u0438 ",Object(u.jsx)("span",{children:"\u0436\u0438\u0434\u043a\u043e\u0441\u0442\u0438"})]}),Object(u.jsxs)("div",{className:"info-input",children:[Object(u.jsxs)(d.a,{children:[Object(u.jsxs)(d.a.Group,{as:j.a,children:[Object(u.jsx)(h.a,{placement:"left",overlay:Object(u.jsx)(x.a,{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0451\u043c\u0430 \u043a\u0430\u043f\u043b\u0438"}),children:Object(u.jsx)(o.a,{xs:"12",children:Object(u.jsxs)("div",{className:"info-input-name",children:["\u041e\u0431\u044a\u0451\u043c \u043a\u0430\u043f\u043b\u0438",Object(u.jsx)("span",{children:"\u043d\u0430\u043d\u043e\u041b"})]})})}),Object(u.jsx)(o.a,{xs:"1",children:Object(u.jsx)("h3",{children:"V"})}),Object(u.jsx)(o.a,{xs:"8",children:Object(u.jsx)(g.a,{value:y,onChange:function(e){return k(e.target.value)},disabled:G})}),Object(u.jsx)(o.a,{xs:"3",children:Object(u.jsx)(d.a.Control,{disabled:G,value:y,onChange:function(e){parseInt(e.target.value)&&parseInt(e.target.value)<=100?k(parseInt(e.target.value)):k(y)}})})]}),Object(u.jsxs)(d.a.Group,{as:j.a,children:[Object(u.jsx)(h.a,{placement:"left",overlay:Object(u.jsx)(x.a,{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0443\u0433\u043b\u0430 \u0441\u043c\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f"}),children:Object(u.jsx)(o.a,{xs:"12",children:Object(u.jsxs)("div",{className:"info-input-name",children:["\u0423\u0433\u043e\u043b \u0441\u043c\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f",Object(u.jsx)("span",{children:"\u0440\u0430\u0434"})]})})}),Object(u.jsx)(o.a,{xs:"1",children:Object(u.jsx)("h3",{children:"\u03c6"})}),Object(u.jsx)(o.a,{xs:"8",children:Object(u.jsx)(g.a,{value:N,variant:"danger",onChange:function(e){return B(e.target.value)},min:10,max:180,disabled:G})}),Object(u.jsx)(o.a,{xs:"3",children:Object(u.jsx)(d.a.Control,{disabled:G,value:N,onChange:function(e){parseInt(e.target.value)&&parseInt(e.target.value)<=180?B(parseInt(e.target.value)):B(N)}})})]})]}),Object(u.jsx)(b.a,{variant:"primary",size:"lg",onClick:D,disabled:G,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]})]})})]})})};a(37);n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e42f56d3.chunk.js.map