(this["webpackJsonpchristmas-memory-game"]=this["webpackJsonpchristmas-memory-game"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),r=n.n(s),i=(n(13),n(4)),o=n(7),l=n(2),u=(n(14),n(15),n(0)),d=function(e){var t=e.children,n=e.handleClick;return Object(u.jsx)("button",{onClick:n,className:"custom-button",children:t})},j=[{type:"tree",image:"cards/tree.png"},{type:"candle",image:"cards/candle.png"},{type:"hat",image:"cards/hat.png"},{type:"ornament",image:"cards/ornament.png"},{type:"present",image:"cards/present.png"},{type:"snowman",image:"cards/snowman.png"},{type:"bell",image:"cards/bell.png"},{type:"lollipop",image:"cards/lollipop.png"}],b=(n(17),function(e){var t=e.card,n=e.handleChoice,c=e.isFlipped,a=e.disabled,s=t.image;return Object(u.jsxs)("div",{className:c?"card flipped":"card",children:[Object(u.jsx)("img",{className:"card-front",alt:"front",src:s}),Object(u.jsx)("img",{className:"card-back",alt:"back",onClick:function(){return!a&&n(t)},src:"cards/cardback.jpg"})]})}),m=(n(18),function(){return Object(u.jsx)("div",{children:Object(u.jsx)("img",{alt:"reindeer",src:"reindeer.gif"})})}),p=(n(19),function(e){var t=e.url,n=Object(c.useState)(new Audio(t)),a=Object(l.a)(n,1)[0],s=Object(c.useState)(!1),r=Object(l.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){i?a.play():a.pause()}),[a,i]),Object(c.useEffect)((function(){return a.autoplay=!0,a.addEventListener("ended",(function(){return o(!1)})),function(){a.removeEventListener("ended",(function(){return o(!1)}))}}),[a]),Object(u.jsx)("div",{className:"sound-toggle",children:Object(u.jsx)("img",{className:"sound-toggle-image",onClick:function(){return o(!i)},src:"sound/".concat(i?"mute":"sound",".png"),alt:"sound"})})});var O=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),r=Object(l.a)(s,2),O=r[0],f=r[1],g=Object(c.useState)(null),h=Object(l.a)(g,2),y=h[0],v=h[1],x=Object(c.useState)(null),N=Object(l.a)(x,2),w=N[0],k=N[1],C=Object(c.useState)(!1),S=Object(l.a)(C,2),E=S[0],F=S[1],L=Object(c.useState)(!1),M=Object(l.a)(L,2),T=M[0],_=M[1],A=function(e){y?k(e):v(e)};Object(c.useEffect)((function(){w&&(F(!0),y.type===w.type&&a((function(e){return e.map((function(e){return e.type===w.type?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),setTimeout((function(){return B()}),1e3)),null===w&&I()}),[w]);var B=function(){v(null),k(null),f((function(e){return e+1})),F(!1)},I=function(){n.length>0&&(n.every((function(e){return!0===e.matched}))&&(_(!0),a([])))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"snow layer1 a"}),Object(u.jsx)("div",{className:"snow layer1"}),Object(u.jsx)("div",{className:"snow layer2 a"}),Object(u.jsx)("div",{className:"snow layer2"}),Object(u.jsx)("div",{className:"snow layer3 a"}),Object(u.jsx)("div",{className:"snow layer3"}),Object(u.jsx)("h1",{className:"title",children:"Memory Game"}),Object(u.jsx)(d,{handleClick:function(){_(!1);var e=[].concat(Object(o.a)(j),Object(o.a)(j)).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{matched:!1,id:Math.random()})}));a(e),f(0)},children:"New game"}),Object(u.jsxs)("h2",{className:"subtitle",children:[" Turns: ",O," "]}),T&&Object(u.jsx)(m,{}),Object(u.jsx)(p,{url:"https://play.publicradio.org/web/o/minnesota/classical/programs/free-downloads/2018/10/18/daily_download_20181018_128.mp3"}),Object(u.jsx)("div",{className:"card-container",children:n.map((function(e){return Object(u.jsx)(b,{card:e,handleChoice:A,isFlipped:e===y||e===w||e.matched,disabled:E},e.id)}))})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),f()}],[[20,1,2]]]);
//# sourceMappingURL=main.430ee11e.chunk.js.map