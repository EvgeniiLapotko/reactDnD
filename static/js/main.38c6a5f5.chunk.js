(this.webpackJsonpreactdnd=this.webpackJsonpreactdnd||[]).push([[0],{107:function(e,n,t){},122:function(e,n,t){"use strict";t.r(n);var i,r,c,a,o,s,d,l,b,j,p,x,u,O=t(0),f=t.n(O),h=t(17),g=t.n(h),m=(t(107),t(4)),v=t(7),y=t(6),w=t(79),k=t.n(w),z=t(78),F=t.n(z),C=t(147),S=t(12),I=t(72),L=t.n(I),A=t(77),D=t.n(A),P=t(19),H=t(1),R=Object(P.a)((function(e){var n,t=e.component,i=e.provided,r=e.snapshot,c={ref:i.innerRef,isDragging:r.isDragging,drag:r.isDragging,style:Object(S.a)(Object(S.a)({},i.draggableProps.style),{},{transform:r.isDragging?null===(n=i.draggableProps.style)||void 0===n?void 0:n.transform:"translate(0px, 0px)"})};return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(B,Object(S.a)(Object(S.a)(Object(S.a)(Object(S.a)({},c),i.draggableProps),i.dragHandleProps),{},{children:Object(H.jsxs)(T,{children:[Object(H.jsx)("span",{children:"#"}),Object(H.jsx)("h3",{children:t})]})})),r.isDragging&&Object(H.jsx)(B,{children:Object(H.jsxs)(T,{children:[Object(H.jsx)("span",{children:"#"}),Object(H.jsx)("h3",{children:t})]})})]})})),B=y.a.div(i||(i=Object(m.a)(["\n  padding: 0 13px;\n  display: flex;\n  user-select: none;\n  height: 42px;\n  align-items: flex-start;\n  align-content: flex-start;\n  transition: background-color 0.3s;\n  cursor: pointer;\n  line-height: 1.5;\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n  max-width: ",";\n  :hover {\n    background-color: #5c5c5c;\n  }\n"])),(function(e){return e.drag?"2px solid skyblue":"none"}),(function(e){return e.drag?"4px":"none"}),(function(e){return e.drag?"#fff":"transparent"}),(function(e){return e.drag?"#000":"#fff"}),(function(e){return e.drag?"200px":"100%"})),T=y.a.div(r||(r=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  h3 {\n    font-size: 13px;\n    font-weight: 500;\n    padding-left: 10px;\n  }\n  span {\n    display: inline-block;\n    padding: 0 15px;\n  }\n"]))),E=R,M=t(34),W=y.a.div(c||(c=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]))),J=y.a.div(a||(a=Object(m.a)(["\n  margin: 5px;\n  font-size: 18px;\n  font-weight: 700;\n  padding-left: 5px;\n"]))),X=function(e){var n=e.item,t=f.a.useState(!0),i=Object(v.a)(t,2),r=i[0],c=i[1];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(W,{onClick:function(){return c(!r)},children:[r?Object(H.jsx)(L.a,{}):Object(H.jsx)(D.a,{}),Object(H.jsx)(J,{children:n.name})]}),Object(H.jsx)(M.c,{droppableId:"navbar",isDropDisabled:!0,children:function(e,t){var i;return Object(H.jsxs)("div",{ref:e.innerRef,isDraggingOver:t.isDraggingOver,children:[null===(i=n.components)||void 0===i?void 0:i.map((function(e,n){return r?Object(H.jsx)(M.b,{draggableId:e.id,index:n,children:function(n,t){return Object(H.jsx)(E,Object(S.a)(Object(S.a)({},e),{},{provided:n,snapshot:t}))}},e.id):""})),e.placeholder]})}})]})},G=Object(P.a)((function(e){var n,t=e.state,i=Object(O.useState)(""),r=Object(v.a)(i,2),c=r[0],a=r[1];return Object(H.jsxs)(N,{children:[Object(H.jsxs)(U,{children:[Object(H.jsx)(q,{children:Object(H.jsx)(C.a,{src:"https://source.unsplash.com/random/150x150?8"})}),Object(H.jsx)(F.a,{})]}),Object(H.jsx)(K,{children:Object(H.jsxs)(V,{children:[Object(H.jsx)(k.a,{}),Object(H.jsx)("input",{type:"text",placeholder:"Search",value:c,onChange:function(e){a(e.target.value),t.filterComponents(e.target.value)}})]})}),Object(H.jsx)("h3",{style:{textAlign:"center",margin:"7px"},children:"Components"}),Object(H.jsx)(Q,{children:null===(n=t.filterList)||void 0===n?void 0:n.map((function(e){if(0!==e.components.length)return Object(H.jsx)(X,{item:e},e.id)}))})]})})),N=y.a.div(o||(o=Object(m.a)(["\n  flex: 0.35;\n  max-width: 300px;\n  min-width: 230px;\n  background-color: #2c2c2c;\n  color: #fff;\n  border-top: 1px solid #5c5c5c;\n  transition: all 0.4s;\n  box-sizing: border-box;\n  hr {\n    margin: 0 5px;\n    opacity: 0.3;\n    border-color: #5c5c5c;\n  }\n"]))),U=y.a.div(s||(s=Object(m.a)(["\n  width: 100%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 13px;\n  height: 70px;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-bottom: 1px solid #5c5c5c;\n"]))),q=y.a.div(d||(d=Object(m.a)(["\n  display: flex;\n  padding-right: 13px;\n  align-items: center;\n"]))),K=y.a.div(l||(l=Object(m.a)(["\n  border-bottom: 1px solid #5c5c5c;\n  padding: 13px;\n  margin-bottom: 5px;\n"]))),Q=y.a.div(b||(b=Object(m.a)(["\n  overflow: auto;\n  height: calc(100vh - 200px);\n  padding-bottom: 80px;\n"]))),V=y.a.div(j||(j=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  padding: 5px 25px;\n  background-color: #1c1c1c;\n  border: 1px solid gray;\n  border-radius: 5px;\n  input {\n    background-color: transparent;\n    outline: none;\n    text-align: center;\n    border: none;\n    padding-left: 5px;\n    padding-right: 5px;\n    color: #fff;\n    ::placeholder {\n      color: rgba(255, 255, 255, 0.6);\n    }\n  }\n"]))),Y=G,Z=t(92),$=t(143),_=t(144),ee=t(81),ne=t.n(ee),te=t(54),ie=t.n(te),re=t(82),ce=t.n(re);var ae,oe,se,de,le,be,je,pe=y.a.div(p||(p=Object(m.a)(["\n  cursor: default;\n"]))),xe=y.a.div(x||(x=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  width: 100px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  span {\n    font-size: 12px;\n    padding-right: 5px;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),ue=y.a.div(u||(u=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),Oe=function(e){var n=e.state,t=e.idFrame,i=f.a.useState(!1),r=Object(v.a)(i,2),c=r[0],a=r[1],o=function(){a(!1)};return Object(H.jsx)(ue,{children:Object(H.jsx)($.a,{onClickAway:o,children:Object(H.jsx)("div",{children:Object(H.jsx)(_.a,{PopperProps:{disablePortal:!0},onClose:o,open:c,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,placement:"top-start",arrow:!0,title:Object(H.jsxs)(pe,{children:[Object(H.jsxs)(xe,{children:[Object(H.jsx)("span",{children:"Create Clone"}),Object(H.jsx)(ne.a,{fontSize:"small"})]}),Object(H.jsxs)(xe,{onClick:function(){return n.deleteFrame(t)},children:[Object(H.jsx)("span",{children:"Delete"}),Object(H.jsx)(ie.a,{fontSize:"small"})]})]}),children:Object(H.jsx)(ce.a,{fontSize:"small",onClick:function(){a(!c)},style:{color:"#aaa",cursor:"pointer"}})})})})})},fe=t(38),he=t.n(fe),ge=Object(P.a)((function(e){var n=e.state,t=e.idFrame,i=e.height,r=e.width,c=e.globalWidth,a=e.globalHeight,o=e.index,s=f.a.useState(r),d=Object(v.a)(s,2),l=d[0],b=d[1],j=f.a.useState(i),p=Object(v.a)(j,2),x=p[0],u=p[1],h=Object(O.useState)(!1),g=Object(v.a)(h,2),m=g[0],y=g[1],w=Object(fe.useXarrow)(),k={default:{x:c/2-r/4,y:a/2-i/4,width:l/2,height:x/2},onResizeStop:function(){setTimeout((function(){return y(!1)}),1e3)},onResize:function(e,n,t){y(!0),b(2*parseInt(t.style.width)),u(2*parseInt(t.style.height))},onClick:function(e){return n.getActiveFrame(e,t)},onDrag:function(){return w()},onDragStop:function(){return w()},style:t===n.activeFrame?{zIndex:10}:{zIndex:0}};return Object(H.jsx)(Z.a,Object(S.a)(Object(S.a)({},k),{},{children:Object(H.jsx)(M.c,{droppableId:t,children:function(e){return Object(H.jsxs)(we,{active:t===n.activeFrame,id:t,ref:e.innerRef,style:Object(S.a)({},e.droppableProps.style),children:[Object(H.jsxs)(me,{children:["Frame #",o+1]}),Object(H.jsx)(Oe,{state:n,idFrame:t}),Object(H.jsxs)(ke,{view:m,children:[Object(H.jsx)("span",{children:l}),"x",Object(H.jsx)("span",{children:x})]}),Object(H.jsx)(ve,{children:n.frames[t].length?n.frames[t].map((function(e,i){return Object(H.jsxs)(ye,{children:[Object(H.jsx)(Oe,{state:n,idFrame:t}),Object(H.jsx)("div",{children:e.component})]})})):""}),e.placeholder]})}})}))})),me=y.a.div(ae||(ae=Object(m.a)(["\n  position: absolute;\n  font-size: 12px;\n  color: grey;\n  top: -20px;\n  left: 0;\n"]))),ve=y.a.div(oe||(oe=Object(m.a)(["\n  border: 1px solid #ddd;\n  width: 100%;\n  padding: 5px;\n  height: 100%;\n  outline: none;\n  box-sizing: border-box;\n"]))),ye=y.a.div(se||(se=Object(m.a)(["\n  position: relative;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  margin-bottom: 5px;\n  z-index: 30;\n"]))),we=y.a.div(de||(de=Object(m.a)(["\n  height: 100%;\n  position: relative;\n  background-color: #fff;\n  border: 1px solid grey;\n  border-radius: 5px;\n  z-index: 0;\n  padding: 20px 10px 10px;\n  box-sizing: border-box;\n  border: ",";\n"])),(function(e){return e.active?"2px solid skyblue":"1px solid grey"})),ke=y.a.div(le||(le=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 10px;\n  background-color: #bbb;\n  color: #fff;\n  border-top-left-radius: 2px;\n  border-bottom-right-radius: 4px;\n  padding: 2px;\n  opacity: ",";\n  pointer-events: ",";\n  transition: opacity 0.3s;\n"])),(function(e){return e.view?1:.4}),(function(e){return e.view?"default":"none"})),ze=ge,Fe=t(149),Ce=t(86),Se=t.n(Ce),Ie=t(83),Le=t.n(Ie);var Ae,De,Pe,He,Re,Be,Te,Ee,Me,We,Je,Xe,Ge,Ne,Ue,qe,Ke=y.a.div(be||(be=Object(m.a)(["\n  cursor: default;\n"]))),Qe=y.a.div(je||(je=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 120px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  span {\n    font-size: 12px;\n    padding-right: 5px;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),Ve=function(e){var n=e.addFrame;return Object(H.jsx)(_.a,{placement:"bottom-start",arrow:!0,title:Object(H.jsxs)(Ke,{children:[Object(H.jsxs)(Qe,{onClick:function(){return n(375,812)},children:[Object(H.jsx)("span",{children:"iPhone11"}),Object(H.jsx)("span",{children:" 375x812 "})]}),Object(H.jsxs)(Qe,{onClick:function(){return n(375,667)},children:[Object(H.jsx)("span",{children:"iPhone8"}),Object(H.jsx)("span",{children:" 375x667 "})]}),Object(H.jsxs)(Qe,{onClick:function(){return n(834,1194)},children:[Object(H.jsx)("span",{children:"Tablet"}),Object(H.jsx)("span",{children:" 834x1194 "})]})]}),children:Object(H.jsx)(Fe.a,{children:Object(H.jsx)(Le.a,{fontSize:"large",style:{fill:"#ddd"}})})})},Ye=t(87),Ze=t.n(Ye),$e=t(88),_e=t.n($e),en=t(148),nn=t(84),tn=t.n(nn),rn=Object(P.a)((function(e){var n=e.state,t=f.a.useState("Select from"),i=Object(v.a)(t,2),r=i[0],c=i[1],a=f.a.useState("Select to"),o=Object(v.a)(a,2),s=o[0],d=o[1],l=f.a.useState(""),b=Object(v.a)(l,2),j=b[0],p=b[1],x=f.a.useState(!1),u=Object(v.a)(x,2),O=u[0],h=u[1],g=function(){h(!1)},m=function(e){c(e.target.value)},y=function(e){d(e.target.value)};return Object(H.jsx)(_.a,{placement:"bottom-start",arrow:!0,onClose:g,open:O,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:function(){var e,t;return Object(H.jsxs)(ln,{children:[Object(H.jsxs)(bn,{children:[Object(H.jsx)("span",{children:"Add Arrow"}),Object(H.jsx)(ie.a,{fontSize:"small",onClick:g})]}),Object.keys(n.frames).length<2?Object(H.jsx)("h4",{children:"Add min 2 frames"}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("form",{children:Object(H.jsxs)(cn,{children:[Object(H.jsx)(dn,{children:Object(H.jsxs)(on,{id:"select-from",value:r,onChange:m,children:[Object(H.jsx)("option",{children:"select from"}),null===(e=Object.keys(n.frames))||void 0===e?void 0:e.map((function(e,n){return Object(H.jsxs)("option",{value:e,children:["Frame #",n+1]},e)}))]})}),Object(H.jsx)(sn,{}),Object(H.jsx)(dn,{children:Object(H.jsxs)(on,{id:"label-to",value:s,onChange:y,children:[Object(H.jsx)("option",{children:"select to"}),null===(t=Object.keys(n.frames))||void 0===t?void 0:t.map((function(e,n){if(r!==e)return Object(H.jsxs)("option",{value:e,children:["Frame #",n+1]},e+1)}))]})})]})}),Object(H.jsx)(an,{type:"text",placeholder:"Label Arrow",value:j,onChange:function(e){return p(e.target.value)}}),Object(H.jsx)(en.a,{color:"secondary",variant:"contained",size:"small",style:{width:"50%",margin:"0 0 0 auto"},onClick:function(){g(),n.addArrow(r,s,j)},children:"Add"})]})]})}(),children:Object(H.jsx)(Fe.a,{style:{color:"#fff"},onClick:function(){h(!O)},children:Object(H.jsx)(tn.a,{fontSize:"large",style:{fill:"#ddd"}})})})})),cn=y.a.div(Ae||(Ae=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 8px;\n"]))),an=y.a.input(De||(De=Object(m.a)(["\n  outline: none;\n  border: none;\n  padding: 5px 2px;\n  border-radius: 7px;\n  margin-bottom: 8px;\n  width: 100%;\n  box-sizing: border-box;\n"]))),on=y.a.select(Pe||(Pe=Object(m.a)(["\n  outline: none;\n  border: none;\n  padding: 5px 2px;\n  border-radius: 7px;\n  width: 100%;\n"]))),sn=y.a.div(He||(He=Object(m.a)(["\n  padding: 10px 3px;\n"]))),dn=y.a.div(Re||(Re=Object(m.a)(["\n  width: 100px;\n"]))),ln=y.a.div(Be||(Be=Object(m.a)(["\n  cursor: default;\n  width: 200px;\n  box-sizing: border-box;\n"]))),bn=y.a.div(Te||(Te=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 5px;\n  cursor: pointer;\n  span {\n    font-size: 12px;\n    padding-right: 5px;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),jn=rn,pn=t(85),xn=t.n(pn),un=Object(P.a)((function(e){var n=e.state;return Object(H.jsx)(_.a,{placement:"bottom-start",arrow:!0,title:Object(H.jsx)(On,{children:0===Object.keys(n.frames).length?Object(H.jsx)("h3",{children:"Add Frames"}):Object.keys(n.frames).map((function(e,t){return Object(H.jsx)(fn,{active:e===n.activeFrame,onClick:function(t){return n.getActiveFrame(t,e)},children:Object(H.jsxs)("span",{children:["Frame #",t+1]})})}))}),children:Object(H.jsx)(Fe.a,{style:{color:"#fff"},children:Object(H.jsx)(xn.a,{fontSize:"large",style:{fill:"#ddd"}})})})})),On=y.a.div(Ee||(Ee=Object(m.a)(["\n  cursor: default;\n"]))),fn=y.a.div(Me||(Me=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 120px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  border-bottom: ",";\n\n  span {\n    font-size: 12px;\n    padding-right: 5px;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"])),(function(e){return e.active?"1px solid skyblue":"1px solid transparent"})),hn=un,gn=Object(P.a)((function(e){var n=e.state;return Object(H.jsx)(mn,{children:Object(H.jsxs)(yn,{children:[Object(H.jsxs)(vn,{children:[Object(H.jsx)(_.a,{title:"Create",children:Object(H.jsx)(Fe.a,{onClick:function(){return n.createFrame()},children:Object(H.jsx)(Se.a,{fontSize:"large",style:{fill:"#ddd"}})})}),Object(H.jsx)(Ve,{addFrame:n.addFrame}),Object(H.jsx)(hn,{state:n}),Object(H.jsx)(_.a,{title:"Create Component",children:Object(H.jsx)(Fe.a,{children:Object(H.jsx)(Ze.a,{fontSize:"large",style:{fill:"#ddd"}})})}),Object(H.jsx)(jn,{state:n})]}),Object(H.jsx)(_.a,{title:"More",children:Object(H.jsx)(Fe.a,{children:Object(H.jsx)(_e.a,{fontSize:"large",style:{fill:"#ddd"}})})})]})})})),mn=y.a.div(We||(We=Object(m.a)(["\n  border-bottom: 1px solid #5c5c5c;\n  border-left: 1px solid #5c5c5c;\n  height: 70px;\n  background-color: #2c2c2c;\n"]))),vn=y.a.div(Je||(Je=Object(m.a)(["\n  display: flex;\n"]))),yn=y.a.div(Xe||(Xe=Object(m.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n  font-size: 20px;\n  padding: 0 15px;\n"]))),wn=gn,kn=t(146),zn=Object(P.a)((function(e){var n=e.state,t={key:Object(kn.a)(),strokeWidth:2,color:"green",head:{size:3,shape:"circle"}};return Object(H.jsx)(H.Fragment,{children:n.lines.length?n.lines.map((function(e){if(e.end&&e.start)return Object(H.jsx)(he.a,Object(S.a)(Object(S.a)({},t),{},{start:e.start,end:e.end,labels:{middle:e.label?Object(H.jsx)(Fn,{children:e.label}):""}}))})):null})})),Fn=y.a.div(Ge||(Ge=Object(m.a)(["\n  background-color: #fff;\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 14px;\n"]))),Cn=zn,Sn=Object(P.a)((function(e){var n,t,i,r=e.state,c=f.a.useRef(),a={width:375,height:600,state:r,globalWidth:null===(n=c.current)||void 0===n?void 0:n.offsetWidth,globalHeight:null===(t=c.current)||void 0===t?void 0:t.offsetHeight};return Object(H.jsxs)(In,{id:"container",children:[Object(H.jsx)(wn,{state:r}),Object(H.jsx)(Ln,{ref:c,children:Object(H.jsxs)(fe.Xwrapper,{children:[null===(i=Object.keys(r.frames))||void 0===i?void 0:i.map((function(e,n){return Object(H.jsx)(ze,Object(S.a)({idFrame:e,index:n},a),e)})),Object(H.jsx)(Cn,{state:r})]})})]})})),In=y.a.div(Ne||(Ne=Object(m.a)(["\n  flex: 0.7;\n  flex-grow: 1;\n  box-sizing: border-box;\n"]))),Ln=y.a.div(Ue||(Ue=Object(m.a)(["\n  height: calc(100vh - 70px);\n  width: 100%;\n  background-color: #dddddd;\n  position: relative;\n  box-sizing: border-box;\n  z-index: 1;\n"]))),An=Sn,Dn=t(8),Pn=t(89),Hn=t(90),Rn=t(91),Bn=t(15),Tn=[{id:Object(kn.a)(),name:"Layout",components:[{id:Object(kn.a)(),component:"Fragment"},{id:Object(kn.a)(),component:"Absolute"},{id:Object(kn.a)(),component:"Fixed"},{id:Object(kn.a)(),component:"Box"},{id:Object(kn.a)(),component:"Grid"}]},{id:Object(kn.a)(),name:"Input",components:[{id:Object(kn.a)(),component:"Button",componentUi:"<Button>Test</Button>"},{id:Object(kn.a)(),component:"DataPickerModern"},{id:Object(kn.a)(),component:"Checkbox"},{id:Object(kn.a)(),component:"FileInput"}]},{id:Object(kn.a)(),name:"Navigation",components:[{id:Object(kn.a)(),component:"Menu"},{id:Object(kn.a)(),component:"Link"}]}],En=new(function(){function e(){var n=this;Object(Hn.a)(this,e),this.filterList=Tn,this.activeFrame={},this.lines=[],this.frames={},this.filterComponents=function(e){if(e){var t,i=Object(Pn.a)(n.filterList);try{for(i.s();!(t=i.n()).done;){var r=t.value,c=r.components.filter((function(n){return n.component.toLowerCase().includes(e.toLowerCase())}));r.components=c}}catch(a){i.e(a)}finally{i.f()}}else n.filterList=Tn},this.createFrame=function(){var e=Object(kn.a)();n.frames=Object(S.a)(Object(S.a)({},n.frames),{},Object(Dn.a)({},e,[]))},this.addFrame=function(e,t){var i=Object(kn.a)();n.frames=Object(S.a)(Object(S.a)({},n.frames),{},Object(Dn.a)({},i,[]))},this.deleteFrame=function(e){delete n.frames[e],n.lines=n.lines.filter((function(n){return n.start!==e})),n.lines=n.lines.filter((function(n){return n.end!==e}))},this.getActiveFrame=function(e,t){var i;Object.keys(n.frames).map((function(e){return e===t?i=e:""})),n.activeFrame=i},this.dragEnd=function(e){var t=e.source,i=e.destination,r=e.draggableId;if(i){var c;if(i.droppableId!==t.droppableId)Tn.map((function(e){return e.components.map((function(e){e.id===r&&(c=e.component)}))})),n.frames[i.droppableId].push({component:c,id:Object(kn.a)()});i.droppableId,t.droppableId,console.log("drag end")}},Object(Bn.d)(this)}return Object(Rn.a)(e,[{key:"addArrow",value:function(e,n,t){this.lines.push({start:e,end:n,label:t})}}]),e}());var Mn=y.a.div(qe||(qe=Object(m.a)(["\n  display: flex;\n  height: 100vh;\n"]))),Wn=function(){return Object(H.jsx)("div",{style:{height:"100vh",overflow:"hidden"},children:Object(H.jsx)(Mn,{children:Object(H.jsxs)(M.a,{onDragEnd:En.dragEnd,children:[Object(H.jsx)(Y,{state:En}),Object(H.jsx)(An,{state:En})]})})})};g.a.render(Object(H.jsx)(f.a.StrictMode,{children:Object(H.jsx)(Wn,{})}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.38c6a5f5.chunk.js.map