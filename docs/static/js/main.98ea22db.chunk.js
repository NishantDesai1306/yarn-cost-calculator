(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{96:function(e,t){var n=function(e,t,n){for(var a=document.getElementsByClassName(e),c=0;c<a.length;++c){var i=a.item(c);n?i.classList.add(t):i.classList.remove(t)}};window.showInstallPrompt=function(){window.deferredPrompt.prompt(),window.deferredPrompt.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),n("install-handle","d-none",!0),window.deferredPrompt=null}))};var a=function(){var e;navigator.onLine?(e="/",fetch(e,{method:"HEAD",mode:"no-cors"}).then((function(e){return e&&(e.ok||"opaque"===e.type)})).catch((function(e){console.warn("[conn test failure]:",e)}))).then((function(e){n("uses-internet","Mui-disabled",!e)})):n("uses-internet","Mui-disabled",!0)};window.addEventListener("online",a),window.addEventListener("offline",a),window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),window.deferredPrompt=e,n("install-handle","d-none",!1)}))},99:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),s=n(160),l=n(159),o=n(65),j=n(23),d=n(14),b=n(72),h=n(135),u=n(162),O=n(166),x=n(148),m=n(143),f=n(151),g=n(74),p=n(163),v=n(158),w=n(142),C=n(137),N=n(15),k=n(139),y=n(140),W=n(141),S=n(138),P=n.p+"static/media/logo.359f8128.png",E=n(2),L=Object(h.a)((function(e){return{title:{flexGrow:1,color:"white"},logoContainer:{marginRight:10,height:40,width:40,padding:5,borderRadius:20,background:"white"},logo:{height:"100%",width:"100%"}}}));function B(e){var t=e.children,n=Object(N.a)(),a=Object(C.a)(n.breakpoints.up("xl"))?.8:1,i=Object(S.a)({disableHysteresis:!0,threshold:window.screen.height*a-200});return c.a.cloneElement(t,{elevation:i?4:0})}function I(e){var t=L();return Object(E.jsx)(B,Object(d.a)(Object(d.a)({},e),{},{children:Object(E.jsx)(k.a,{position:"fixed",elevation:0,children:Object(E.jsxs)(y.a,{children:[Object(E.jsxs)("div",{className:"d-flex align-items-center flex-grow-1",children:[Object(E.jsx)("div",{className:t.logoContainer,children:Object(E.jsx)("img",{alt:"Logo",className:t.logo,src:P})}),Object(E.jsx)(W.a,{variant:"h6",className:t.title,children:"Cost Calculator"})]}),Object(E.jsx)(u.a,{children:Object(E.jsx)(w.a,{onClick:function(){return window.showInstallPrompt()},color:"inherit",className:"install-handle d-none mx-3 text-light",startIcon:Object(E.jsx)(m.a,{children:"get_app"}),children:"Install"})})]})})}))}var R=n(55),z=n(33),T=n(144),A=n(145),D=n(161),H=Object(h.a)((function(e){return{title:{fontSize:16,fontWeight:"bold"}}}));function F(e){var t=e.name,n=e.warp,c=e.onChange,i=(e.onRemove,H()),r=Object(a.useCallback)((function(e){var t=e.target,a=t.name,i=t.value;c(Object(d.a)(Object(d.a)({},n),{},Object(z.a)({},a,+i)))}),[n,c]);return Object(E.jsx)(T.a,{elevation:0,className:"border",children:Object(E.jsxs)(A.a,{children:[Object(E.jsx)(W.a,{className:i.title,color:"textSecondary",gutterBottom:!0,children:t}),Object(E.jsxs)(u.a,{className:"mt-3",children:[Object(E.jsx)("div",{className:"mb-3",children:Object(E.jsx)(D.a,{label:"Total Ends",fullWidth:!0,type:"number",min:"0",name:"totalEnds",value:n.totalEnds,onChange:r})}),Object(E.jsx)("div",{className:"mb-3",children:Object(E.jsx)(D.a,{label:"Denier",fullWidth:!0,type:"number",min:"0",name:"denier",value:n.denier,onChange:r})}),Object(E.jsx)("div",{className:"mb-3",children:Object(E.jsx)(D.a,{label:"Rate",fullWidth:!0,type:"number",min:"0",name:"rate",value:n.rate,onChange:r})})]})]})})}var q={totalEnds:4200,denier:43,rate:471};function U(e){var t=e.warps,n=e.onChange,c=Object(a.useCallback)((function(){n([].concat(Object(R.a)(t),[q]))}),[t,n]),i=Object(a.useCallback)((function(e,a){var c=t.map((function(t,n){return n===e?a:t}));n(c)}),[t,n]),r=Object(a.useCallback)((function(e){var a=t.filter((function(t,n){return n!==e}));n(a)}),[t,n]);return Object(E.jsxs)("div",{className:"warp-container",children:[t.map((function(e,t){return Object(E.jsx)("div",{className:"mb-3",children:Object(E.jsx)(F,{name:"Warp #".concat(t+1),warp:e,onChange:function(e){return i(t,e)},onRemove:function(){return r(t)}})},t)})),Object(E.jsx)("div",{className:"d-flex justify-content-end",children:Object(E.jsx)(x.a,{color:"primary",className:"text-light","aria-label":"add",onClick:c,children:Object(E.jsx)(m.a,{children:"add"})})})]})}var _=Object(h.a)((function(e){return{title:{fontSize:16,fontWeight:"bold"}}}));function G(e){var t=e.name,n=e.weft,c=e.onChange,i=(e.onRemove,_()),r=Object(a.useCallback)((function(e){var t=e.target,a=t.name,i=t.value;c(Object(d.a)(Object(d.a)({},n),{},Object(z.a)({},a,+i)))}),[n,c]);return Object(E.jsx)(T.a,{elevation:0,className:"border",children:Object(E.jsxs)(A.a,{children:[Object(E.jsx)(W.a,{className:i.title,color:"textSecondary",gutterBottom:!0,children:t}),Object(E.jsxs)(u.a,{className:"mt-3",children:[Object(E.jsx)("div",{className:"mb-3",children:Object(E.jsx)(D.a,{label:"Width (in)",fullWidth:!0,type:"number",min:"0",name:"width",value:n.width,onChange:r})}),Object(E.jsx)("div",{className:"mb-3",children:Object(E.jsx)(D.a,{label:"Pick",fullWidth:!0,type:"number",min:"0",name:"pick",value:n.pick,onChange:r})}),Object(E.jsx)("div",{className:"mb-3",children:Object(E.jsx)(D.a,{label:"Denier",fullWidth:!0,type:"number",min:"0",name:"denier",value:n.denier,onChange:r})}),Object(E.jsx)("div",{className:"mb-3",children:Object(E.jsx)(D.a,{label:"Rate",fullWidth:!0,type:"number",min:"0",name:"rate",value:n.rate,onChange:r})})]})]})})}var J={width:48,pick:60,denier:143,rate:350};function M(e){var t=e.wefts,n=e.onChange,c=Object(a.useCallback)((function(){n([].concat(Object(R.a)(t),[J]))}),[t,n]),i=Object(a.useCallback)((function(e,a){var c=t.map((function(t,n){return n===e?a:t}));n(c)}),[t,n]),r=Object(a.useCallback)((function(e){var a=t.filter((function(t,n){return n!==e}));n(a)}),[t,n]);return Object(E.jsxs)("div",{className:"weft-container",children:[t.map((function(e,t){return Object(E.jsx)("div",{className:"mb-3",children:Object(E.jsx)(G,{name:"Weft #".concat(t+1),weft:e,onChange:function(e){return i(t,e)},onRemove:function(){return r(t)}})},t)})),Object(E.jsx)("div",{className:"d-flex justify-content-end",children:Object(E.jsx)(x.a,{className:"text-light",color:"primary","aria-label":"add",onClick:c,children:Object(E.jsx)(m.a,{children:"add"})})})]})}var K=n(149),Q=n(165),V=n(150),X=n(152),Y=n(153),Z=n(154),$=n(155),ee=n(156),te=n(157),ne=Object(h.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),ae=c.a.forwardRef((function(e,t){return Object(E.jsx)(K.a,Object(d.a)({direction:"up",ref:t},e))}));function ce(e){var t=e.open,n=e.handleClose,c=e.warps,i=e.wefts,r=ne(),s=Object(N.a)(),l=Object(a.useState)([]),o=Object(j.a)(l,2),d=o[0],b=o[1],h=Object(a.useState)({weight:0,cost:0}),O=Object(j.a)(h,2),x=O[0],p=O[1],v=Object(a.useState)([]),w=Object(j.a)(v,2),C=w[0],S=w[1],P=Object(a.useState)({weight:0,cost:0}),L=Object(j.a)(P,2),B=L[0],I=L[1];return Object(a.useEffect)((function(){if(t){var e=c.map((function(e){var t=function(e){var t=e.totalEnds;return e.denier/9e3*t*1.1/1e3}(e);return{weight:t,cost:t*e.rate}}));b(e);var n=e.reduce((function(e,t){return{weight:e.weight+t.weight,cost:e.cost+t.cost}}),{weight:0,cost:0});p(n);var a=i.map((function(e){var t=function(e){var t=e.width,n=e.pick;return e.denier/9e3*(t/39.37*n*39.37*1.1)/1e3}(e);return{weight:t,cost:t*e.rate}}));S(a);var r=a.reduce((function(e,t){return{weight:e.weight+t.weight,cost:e.cost+t.cost}}),{weight:0,cost:0});I(r)}}),[t,c,i]),Object(E.jsxs)(Q.a,{fullScreen:!0,open:t,onClose:n,TransitionComponent:ae,children:[Object(E.jsx)(k.a,{className:r.appBar,children:Object(E.jsxs)(y.a,{children:[Object(E.jsx)(V.a,{edge:"start",className:"text-light",onClick:n,children:Object(E.jsx)(m.a,{children:"close"})}),Object(E.jsx)(W.a,{variant:"h6",className:"text-light ".concat(r.title),children:"Total Cost"})]})}),Object(E.jsx)(f.a,{container:!0,className:"w-100 d-flex justify-content-center p-3",style:{background:s.palette.background.default},children:Object(E.jsxs)(f.a,{item:!0,xs:12,md:8,lg:6,children:[Object(E.jsxs)(u.a,{children:[Object(E.jsx)(u.a,{className:"mb-1",children:Object(E.jsx)(W.a,{variant:"h5",children:"Warps:"})}),Object(E.jsx)(X.a,{component:g.a,children:Object(E.jsxs)(Y.a,{className:r.table,"aria-label":"simple table",children:[Object(E.jsx)(Z.a,{children:Object(E.jsxs)($.a,{children:[Object(E.jsx)(ee.a,{children:"Warp"}),Object(E.jsx)(ee.a,{align:"right",children:"Weight (kg)"}),Object(E.jsx)(ee.a,{align:"right",children:"Cost"})]})}),Object(E.jsxs)(te.a,{children:[d.map((function(e,t){return Object(E.jsxs)($.a,{children:[Object(E.jsx)(ee.a,{scope:"row",children:"Warp #".concat(t+1)}),Object(E.jsx)(ee.a,{align:"right",children:e.weight.toPrecision(4)}),Object(E.jsx)(ee.a,{align:"right",children:e.cost.toPrecision(4)})]},t)})),Object(E.jsxs)($.a,{children:[Object(E.jsx)(ee.a,{children:Object(E.jsx)("strong",{children:"Total"})}),Object(E.jsx)(ee.a,{align:"right",children:Object(E.jsx)("strong",{children:x.weight.toPrecision(4)})}),Object(E.jsx)(ee.a,{align:"right",children:Object(E.jsx)("strong",{children:x.cost.toPrecision(4)})})]})]})]})})]}),Object(E.jsxs)(u.a,{className:"mt-4",children:[Object(E.jsx)(u.a,{className:"mb-1",children:Object(E.jsx)(W.a,{variant:"h5",children:"Wefts:"})}),Object(E.jsx)(X.a,{component:g.a,children:Object(E.jsxs)(Y.a,{className:r.table,"aria-label":"simple table",children:[Object(E.jsx)(Z.a,{children:Object(E.jsxs)($.a,{children:[Object(E.jsx)(ee.a,{children:"Weft"}),Object(E.jsx)(ee.a,{align:"right",children:"Weight (kg)"}),Object(E.jsx)(ee.a,{align:"right",children:"Cost"})]})}),Object(E.jsxs)(te.a,{children:[C.map((function(e,t){return Object(E.jsxs)($.a,{children:[Object(E.jsx)(ee.a,{children:"Weft #".concat(t+1)}),Object(E.jsx)(ee.a,{align:"right",children:e.weight.toPrecision(4)}),Object(E.jsx)(ee.a,{align:"right",children:e.cost.toPrecision(4)})]},t)})),Object(E.jsxs)($.a,{children:[Object(E.jsx)(ee.a,{children:Object(E.jsx)("strong",{children:"Total"})}),Object(E.jsx)(ee.a,{align:"right",children:Object(E.jsx)("strong",{children:B.weight.toPrecision(4)})}),Object(E.jsx)(ee.a,{align:"right",children:Object(E.jsx)("strong",{children:B.cost.toPrecision(4)})})]})]})]})})]}),Object(E.jsxs)(u.a,{className:"mt-4",children:[Object(E.jsx)("div",{className:"mb-2",children:Object(E.jsxs)(W.a,{variant:"h6",children:["Final Weight: ",(x.weight+B.weight).toPrecision(4),"kg"]})}),Object(E.jsx)("div",{children:Object(E.jsxs)(W.a,{variant:"h6",children:["Final Cost: ",(x.cost+B.cost).toPrecision(4)]})})]})]})})]})}var ie=["children","value","index"],re=Object(h.a)((function(e){return{appBarContainer:{minHeight:75},updateButton:{position:"fixed",bottom:10,left:20,zIndex:e.zIndex.mobileStepper+1}}}));function se(e){return{id:"tab-".concat(e),"aria-controls":"tabpanel-".concat(e)}}function le(e){var t=e.children,n=e.value,a=e.index,c=Object(b.a)(e,ie);return Object(E.jsx)("div",Object(d.a)(Object(d.a)({role:"tabpanel",hidden:n!==a,id:"tabpanel-".concat(a),"aria-labelledby":"tab-".concat(a),className:"p-3"},c),{},{children:n===a&&Object(E.jsx)(u.a,{children:t})}))}function oe(){var e=re(),t=Object(a.useState)(0),n=Object(j.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!1),s=Object(j.a)(r,2),l=s[0],o=s[1],b=Object(a.useState)([J]),h=Object(j.a)(b,2),C=h[0],N=h[1],k=Object(a.useState)([q]),y=Object(j.a)(k,2),W=y[0],S=y[1],P=Object(a.useCallback)((function(e,t){i(t)}),[]),L=Object(a.useCallback)((function(){S([]),N([])}),[]);return Object(E.jsxs)("div",{className:"d-flex flex-column align-items-center bootstrap-wrapper",children:[Object(E.jsx)(O.a,{title:"Update",children:Object(E.jsx)(x.a,{id:"app-update",color:"secondary",className:"".concat(e.updateButton," d-none"),children:Object(E.jsx)(m.a,{children:"get_app"})})}),Object(E.jsx)("div",{className:"flex-grow-0 w-100 ".concat(e.appBarContainer),children:Object(E.jsx)(I,{})}),Object(E.jsx)(f.a,{container:!0,spacing:3,className:"w-100 d-flex justify-content-center",children:Object(E.jsxs)(f.a,{item:!0,xs:12,md:8,lg:6,children:[Object(E.jsxs)(g.a,{className:"".concat(e.paper," mb-4"),children:[Object(E.jsx)(u.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(E.jsxs)(p.a,{value:c,onChange:P,indicatorColor:"primary",textColor:"primary",variant:"fullWidth",children:[Object(E.jsx)(v.a,Object(d.a)({label:"Warps"},se(0))),Object(E.jsx)(v.a,Object(d.a)({label:"Wefts"},se(1)))]})}),Object(E.jsx)(le,{value:c,index:0,children:Object(E.jsx)(U,{warps:W,onChange:S})}),Object(E.jsx)(le,{value:c,index:1,children:Object(E.jsx)(M,{wefts:C,onChange:N})})]}),Object(E.jsxs)(u.a,{children:[Object(E.jsx)(w.a,{className:"text-light",variant:"contained",size:"large",color:"primary",disabled:!C.length&&!W.length,onClick:function(){return o(!0)},startIcon:Object(E.jsx)(m.a,{children:"calculate"}),fullWidth:!0,children:"Calculate"}),Object(E.jsx)(w.a,{className:"mt-3 text-light",variant:"contained",size:"large",color:"primary",disabled:!C.length&&!W.length,onClick:L,startIcon:Object(E.jsx)(m.a,{children:"refresh"}),fullWidth:!0,children:"Reset"})]})]})}),Object(E.jsx)(ce,{open:l,handleClose:function(){return o(!1)},warps:W,wefts:C})]})}var je=n(71),de=Object(je.a)({palette:{primary:{main:"#D59472"},secondary:{main:"#FFB072"},error:{main:"#A6384C"},background:{default:"#fff7f5"}},breakpoints:{values:{xs:0,sm:576,md:767,lg:991,xl:1199}}});n(96),n(97),n(98);"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e=new o.a("/sw.js"),t=document.querySelector("#app-update");e.addEventListener("waiting",(function(n){t.classList.remove("d-none"),t.addEventListener("click",(function(){e.addEventListener("controlling",(function(e){window.location.reload()})),e.messageSW({type:"SKIP_WAITING"})}))})),e.register()})),r.a.render(Object(E.jsxs)(l.a,{theme:de,children:[Object(E.jsx)(s.a,{}),Object(E.jsx)(oe,{})]}),document.querySelector("#root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.98ea22db.chunk.js.map