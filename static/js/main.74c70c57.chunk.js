(this["webpackJsonpseblaz.github.io"]=this["webpackJsonpseblaz.github.io"]||[]).push([[0],{102:function(e,a,t){e.exports=t(124)},124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),i=t.n(o),l=t(25),c=t(93),s=t(165),m=t(162),u=t(178),p=t(164),d=t(29),g=t.n(d),f=t(44),h=(t(112),function(e){var a=e.children,t=Object(m.a)("(prefers-color-scheme: dark)")?"dark":"light",o=Object(u.a)(),i=Object(l.a)(o,2),d=i[0],h=i[1],b=d.themeMode||t,E={themeMode:b,toggleThemeMode:function(){h("themeMode","dark"===b?"light":"dark")}},v=r.a.useMemo((function(){return Object(c.a)({palette:{primary:{main:"#47CC31",color:g()("#47CC31")},secondary:{main:"#B531CC",color:g()("#B531CC")},type:b,color:g.a}})}),[b]);return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(s.a,{theme:v},r.a.createElement(f.a.Provider,{value:E},a)))}),b=t(27),E=function(e){var a=e.children;return r.a.createElement(b.a,null,a)},v=t(62),y=t(176),x=t(168),k=t(92),O=t.n(k),j=t(177),w=t(52),S=t(48),N=t(79),C=t(1),z=t(65),B=t(50),P=Object(z.a)((function(e){return{tabItem:{textTransform:"none",fontSize:20,fontWeight:600,color:"white"},desktopTabs:{alignItems:"flex-end",position:"absolute",left:"50%",transform:"translateX(-50%)",height:"100%"}}})),T=function(e){var a=Object(C.a)({},e),t=P();return r.a.createElement("div",a,r.a.createElement(B.a,{tabsProps:{className:t.desktopTabs},tabProps:{className:t.tabItem}}))},I=t(179),M=Object(v.a)((function(e){return{separator:{flexGrow:1},menuButton:{color:e.palette.grey[50]},container:{display:"flex"},themeModeToggle:{display:"flex",alignItems:"center"}}}));function W(){var e=M(),a=r.a.useState(!1),t=Object(l.a)(a,2),o=t[0],i=t[1],c=function(){return i(!0)};return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{position:"static"},r.a.createElement(j.a,{fixed:!0,className:e.container},r.a.createElement(w.a,null),r.a.createElement("div",{className:e.separator}),r.a.createElement(I.a,{smDown:!0},r.a.createElement(T,null),r.a.createElement(S.a,{className:e.themeModeToggle})),r.a.createElement(I.a,{mdUp:!0},r.a.createElement(x.a,{className:e.menuButton,onClick:c},r.a.createElement(O.a,{fontSize:"large"}))))),r.a.createElement(N.a,{open:o,onOpen:c,onClose:function(){return i(!1)}}))}var H=function(){return r.a.createElement("div",null)},L=t(41),F=Object(v.a)((function(e){return{wrapper:{margin:e.spacing(2,0)}}})),R=function(){var e=F();return r.a.createElement(j.a,{fixed:!0},r.a.createElement("div",{className:e.wrapper},r.a.createElement(L.a,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement((function(){return r.a.createElement(h,null,r.a.createElement(E,null,r.a.createElement(W,null),r.a.createElement(R,null),r.a.createElement(H,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(22),i=t(6),l=t(25),c=t(62),s=t(4),m=t(166),u=t(167),p=t(170),d=t(171),g=t(172),f=t(173),h=t(180),b=t(168),E=t(55),v=t(53),y=t(82),x=t.n(y),k=t(83),O=t.n(k),j=t(84),w=t.n(j),S=t(81),N=t.n(S),C=Object(c.a)((function(e){return{card:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:v.a[500]}}})),z=function(){var e=C(),a=r.a.useState(!1),t=Object(l.a)(a,2),n=t[0],o=t[1];return r.a.createElement(m.a,{className:e.card},r.a.createElement(u.a,{avatar:r.a.createElement(h.a,{"aria-label":"recipe",className:e.avatar},"R"),action:r.a.createElement(b.a,{"aria-label":"settings"},r.a.createElement(N.a,null)),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),r.a.createElement(p.a,{className:e.media,image:"/static/images/cards/paella.jpg",title:"Paella dish"}),r.a.createElement(d.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),r.a.createElement(g.a,{disableSpacing:!0},r.a.createElement(b.a,{"aria-label":"add to favorites"},r.a.createElement(x.a,null)),r.a.createElement(b.a,{"aria-label":"share"},r.a.createElement(O.a,null)),r.a.createElement(b.a,{className:Object(s.a)(e.expand,Object(i.a)({},e.expandOpen,n)),onClick:function(){o(!n)},"aria-expanded":n,"aria-label":"show more"},r.a.createElement(w.a,null))),r.a.createElement(f.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(d.a,null,r.a.createElement(E.a,{paragraph:!0},"Method:"),r.a.createElement(E.a,{paragraph:!0},"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."),r.a.createElement(E.a,{paragraph:!0},"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."),r.a.createElement(E.a,{paragraph:!0},"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"),r.a.createElement(E.a,null,"Set aside off of the heat to let rest for 10 minutes, and then serve."))))},B=t(175),P=t(2),T=t(174),I=t(65),M=t(85),W=t.n(M),H=Object(I.a)((function(e){return{gitHubButton:{font:'bold 11px/14px "Helvetica Neue", Helvetica, Arial, sans-serif',height:"30px",margin:"auto"},gitHubLink:{height:"100%",float:"left",padding:e.spacing(.5,1),color:"#333",textDecoration:"none",cursor:"pointer",borderRadius:"5px",backgroundImage:"linear-gradient(to bottom, #fcfcfc 0, #eee 100%)",border:"1px solid #d5d5d5",display:"flex",alignItems:"center","&:hover, &:focus":{backgroundImage:"linear-gradient(to bottom, #eee 0, #ddd 100%)",borderColor:"#ccc"}},gitHubIcon:{float:"left",height:"100%",marginRight:e.spacing(1)},githubText:{fontSize:e.typography.htmlFontSize}}})),L=function(e){var a=e.namespace,t=e.repo,n=e.anchor,o=H();return r.a.createElement("span",{className:o.gitHubButton},r.a.createElement("a",{className:o.gitHubLink,href:"//github.com/".concat(a,"/").concat(t,"/#").concat(n),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:W.a,className:o.gitHubIcon,"aria-hidden":"true",alt:"github icon"}),r.a.createElement("span",{className:o.githubText},"Ver en Github")))},F=Object(I.a)((function(e){return{media:{height:140},titleContainer:{position:"relative",textAlign:"center"},title:{color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},backgroundOverlay:{background:function(a){var t=a.backgroundOpacity;return e.palette.color("black").alpha(.35+t).rgb().string()},height:"100%"}}})),R=function(e){var a=e.title,t=e.imgSource,o=e.description,i=e.backgroundOpacity,c=Object(P.a)(e,["title","imgSource","description","backgroundOpacity"]),s=F({backgroundOpacity:i||0}),u=Object(n.useState)(!1),f=Object(l.a)(u,2),h=f[0],b=f[1];return r.a.createElement(m.a,{onMouseOver:function(){b(!0)},onMouseLeave:function(){b(!1)}},r.a.createElement(T.a,null,r.a.createElement("div",{className:s.titleContainer},r.a.createElement(p.a,{className:s.media,image:t,title:a},r.a.createElement("div",{className:s.backgroundOverlay})),r.a.createElement(E.a,{className:s.title,gutterBottom:!0,variant:"h5",component:"h2"},a)),r.a.createElement(d.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},o))),h&&r.a.createElement(g.a,null,r.a.createElement(L,c)))},A=t(86),D=t.n(A),V=t(87),q=t.n(V),G=t(88),J=t.n(G),U=t(89),Y=t.n(U),X=t(90),_=t.n(X),$=[{title:"Retro Snake",imgSource:D.a,description:"El cl\xe1sico juego snake proyectado en una matriz de leds, controlable a trav\xe9s de Wi-Fi.",namespace:"seblaz",repo:"retro-snake",anchor:"retro-snake"},{title:"Prediciendo compras de usuarios",imgSource:q.a,description:"Desarrollo de algoritmos de Machine Learning para calcular la probabilidad de que un usuario realice una compra en la plataforma de Trocafone.",namespace:"seblaz",repo:"Predicting-user-conversions",anchor:"Predicting-user-conversions"},{title:"Final Fight",imgSource:J.a,description:"Juego multijugador similar a Final Fight creado por Capcom, desarrollado como una aplicaci\xf3n de tipo cliente-servidor para funcionar sobre Linux.",namespace:"seblaz",repo:"Final-Fight",anchor:"final-fight"},{title:"Controlador de versiones para WinAutomation",imgSource:Y.a,description:"Herramienta para importar y exportar proyectos de WinAutomation, lo cual facilita la utilizaci\xf3n de un controlador de versiones.",namespace:"seblaz",repo:"WinAutomation-version-control",anchor:"winautomation-version-control",backgroundOpacity:.1},{title:"Cuadernos Ya",imgSource:_.a,description:"Dise\xf1o de un nuevo tema para utilizar en Prestashop, una plataforma de ventas online.",namespace:"seblaz",repo:"CuadernosYa",anchor:"CuadernosYa"}],K=t(91),Q=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(K.Helmet,{title:"404 Not Found",meta:[{name:"ROBOTS",content:"NOINDEX"}]}),r.a.createElement("div",null,"It looks like you are lost."))};t.d(a,"b",(function(){return Z}));var Z=[{label:"Proyectos",route:"/proyectos",Component:function(){return r.a.createElement(B.a,{container:!0,spacing:3},$.map((function(e,a){return r.a.createElement(B.a,{container:!0,item:!0,xs:12,md:4,key:a},r.a.createElement(R,e))})))}},{label:"Experiencia laboral",route:"/experiencia_laboral",Component:function(){return r.a.createElement(E.a,null,"Experiencia Laboral")}}];a.a=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(z,null)),Z.map((function(e,a){e.label;var t=e.route,n=e.Component;return r.a.createElement(o.a,{path:t,key:a},r.a.createElement(n,null))})),r.a.createElement(o.a,null,r.a.createElement(Q,null)))}},44:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=r.a.createContext({themeMode:"light",toggleThemeMode:function(){}})},48:function(e,a,t){"use strict";var n=t(1),r=t(0),o=t.n(r),i=t(62),l=t(78),c=t.n(l),s=t(126),m=t(127),u=t(54),p=t(29),d=t.n(p),g=t(44),f=Object(i.a)((function(e){return{icon:{padding:4,width:"100%",height:"100%",color:"yellow"},wrapper:{display:"flex",margin:e.spacing(1)}}}));a.a=function(e){var a=Object(n.a)({},e),t=Object(u.a)(),i=f(),l=Object(r.useContext)(g.a),p=l.themeMode,h=l.toggleThemeMode;return o.a.createElement("div",a,o.a.createElement("div",{className:i.wrapper},o.a.createElement(c.a,{height:35,width:65,onColor:d()(t.palette.primary.dark).hex(),offColor:d()(t.palette.primary.light).hex(),activeBoxShadow:"".concat(t.palette.primary.color.hex()," 0 0 4px 3px"),uncheckedIcon:o.a.createElement(s.a,{className:i.icon}),checkedIcon:o.a.createElement(m.a,{className:i.icon}),checked:"dark"===p,onChange:h})))}},50:function(e,a,t){"use strict";var n=t(2),r=t(0),o=t.n(r),i=t(130),l=t(22),c=t(27),s=t(128),m=t(41);a.a=function(e){var a=e.tabsProps,t=e.tabProps,r=Object(n.a)(e,["tabsProps","tabProps"]),u=Object(l.f)().pathname.split("/")[1],p=m.b.find((function(e){return e.route==="/".concat(u)}))||!1;return o.a.createElement("div",r,o.a.createElement(i.a,Object.assign({value:p&&p.route},a),m.b.map((function(e,a){var n=e.label,r=e.route;return o.a.createElement(s.a,Object.assign({key:a,to:r,label:n,value:r,component:c.b},t))}))))}},52:function(e,a,t){"use strict";var n=t(0),r=t.n(n);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"SB-gradient",x1:0,y1:68,x2:50,y2:5,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"var(--SB-secondary)",offset:0}),r.a.createElement("stop",{stopColor:"var(--SB-primary)",offset:1}))),c=r.a.createElement("circle",{cx:34,cy:34,r:32,fill:"none",stroke:"url(#SB-gradient)",strokeLinejoin:"round",strokeWidth:4}),s=function(e){var a=e.svgRef,t=e.title,n=i(e,["svgRef","title"]);return r.a.createElement("svg",o({width:68,height:68,viewBox:"0 0 68 68",ref:a},n),t?r.a.createElement("title",null,t):null,l,r.a.createElement("path",{d:"m27.8 42.9v12.1h7.68q3.86 0 5.71-1.48 1.87-1.5 1.87-4.58 0-3.1-1.87-4.56-1.85-1.48-5.71-1.48zm0-13.6v9.95h7.09q3.51 0 5.21-1.22 1.73-1.24 1.73-3.76 0-2.5-1.73-3.74-1.71-1.24-5.21-1.24zm-4.79-3.67h12.2q5.47 0 8.44 2.12 2.96 2.12 2.96 6.04 0 3.03-1.52 4.82t-4.46 2.23q3.53 0.708 5.47 2.96 1.97 2.23 1.97 5.59 0 4.42-3.22 6.83t-9.17 2.41h-12.7z",fill:"var(--SB-secondary)",strokeWidth:4.43,style:{fontVariantCaps:"normal",fontVariantLigatures:"normal",fontVariantNumeric:"normal"}}),r.a.createElement("path",{d:"m44.9 10.4v4.36c-1.82-0.811-3.53-1.42-5.14-1.81-1.61-0.398-3.17-0.597-4.67-0.597-2.61 0-4.62 0.472-6.04 1.42-1.41 0.944-2.11 2.29-2.11 4.02 0 1.46 0.466 2.57 1.4 3.32 0.948 0.737 3.39 1.3 5.29 1.83 0.945 0.265 1.01 0.314 2.86 0.839 1.85 0.528 5.72 2.01 7.41 3.61 1.71 1.59 2.8 3.35 2.8 6.03 0 3.2-0.81 5.43-3.12 7.08-2.29 1.65-5.66 2.48-10.1 2.48-1.67 0-3.46-0.177-5.36-0.531-1.88-0.354-3.08-0.786-5.1-1.48l6.7e-4 -4.04c0.635 0.254 3.09 1.13 4.96 1.64 1.86 0.516 3.42 0.655 5.22 0.655 2.73 0 5.12-0.383 6.61-1.39 1.49-1 2.06-1.97 1.98-3.92-0.0595-1.49-0.569-2.4-1.52-3.33-0.432-0.373-1.01-0.811-1.67-1.29-0.887-0.65-2-1.29-3.42-1.61l-2.92-0.531c-3.57-0.663-6.15-1.7-7.75-3.12s-2.39-3.38-2.39-5.9c0-2.92 1.1-5.22 3.29-6.9 2.21-1.68 5.25-2.52 9.12-2.52 1.66 0 3.35 0.14 5.07 0.42s3.48 0.7 5.29 1.26z",fill:"var(--SB-primary)",strokeWidth:4.43,style:{fontVariantCaps:"normal",fontVariantLigatures:"normal",fontVariantNumeric:"normal"}}),c)},m=r.a.forwardRef((function(e,a){return r.a.createElement(s,o({svgRef:a},e))})),u=(t.p,t(65)),p=t(55),d=t(27),g=Object(u.a)((function(e){return{wrapper:{display:"flex"},link:{display:"flex",textDecoration:"none"},logo:{minHeight:50,width:"auto",margin:e.spacing(1.5),"--SB-primary":e.palette.primary.color.lighten(.9).hex(),"--SB-secondary":e.palette.primary.color.lighten(.7).hex()},nameWrapper:{display:"flex",alignItems:"center"},name:{color:"white",fontSize:30,fontWeight:500}}}));a.a=function(){var e=g();return r.a.createElement("div",{className:e.wrapper},r.a.createElement(d.b,{to:"/",className:e.link},r.a.createElement(m,{className:e.logo}),r.a.createElement("div",{className:e.nameWrapper},r.a.createElement(p.a,{variant:"h4",className:e.name},"Seblaz"))))}},79:function(e,a,t){"use strict";(function(e){var n=t(6),r=t(0),o=t.n(r),i=t(129),l=t(65),c=t(48),s=t(52),m=t(80),u=Object(l.a)((function(e){return{firstRow:Object(n.a)({display:"flex",alignItems:"center",marginTop:e.spacing(1),marginBottom:e.spacing(2)},e.breakpoints.up("sm"),{margin:e.spacing(2)}),themeModeToggle:{marginLeft:e.spacing(1)}}}));a.a=function(a){var t=a.open,n=a.onClose,r=a.onOpen,l=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),p=u();return o.a.createElement(i.a,{disableBackdropTransition:!l,disableDiscovery:l,anchor:"right",open:t,onClose:n,onOpen:r},o.a.createElement("div",{className:p.firstRow},o.a.createElement(s.a,null),o.a.createElement(c.a,{className:p.themeModeToggle})),o.a.createElement(m.a,null))}}).call(this,t(118))},80:function(e,a,t){"use strict";var n=t(6),r=t(0),o=t.n(r),i=t(65),l=t(50),c=Object(i.a)((function(e){return{tabItem:{textTransform:"none",fontSize:20,fontWeight:600,color:"white",maxWidth:"none"},indicator:{left:0},tabWrapper:Object(n.a)({alignItems:"flex-start",marginLeft:0},e.breakpoints.up("sm"),{marginLeft:e.spacing(2)})}}));a.a=function(){var e=c();return o.a.createElement(l.a,{tabsProps:{orientation:"vertical",classes:{indicator:e.indicator}},tabProps:{className:e.tabItem}})}},85:function(e,a,t){e.exports=t.p+"static/media/github icon.62d6bccb.svg"},86:function(e,a,t){e.exports=t.p+"static/media/matrix.f3aacf1b.jpg"},87:function(e,a,t){e.exports=t.p+"static/media/predicting-user-conversions.fdb10b2f.jpg"},88:function(e,a,t){e.exports=t.p+"static/media/final fight.612f91a8.png"},89:function(e,a,t){e.exports=t.p+"static/media/winautomation.ce213866.svg"},90:function(e,a,t){e.exports=t.p+"static/media/cuadernos ya.f260072a.jpg"}},[[102,1,2]]]);
//# sourceMappingURL=main.74c70c57.chunk.js.map