(this["webpackJsonp3-easy-react-projects"]=this["webpackJsonp3-easy-react-projects"]||[]).push([[0],{17:function(e,t,n){e.exports=n(33)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),l=n.n(r),o=(n(22),n(23),n(7)),u=n(1);n(24);function m(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"Counter")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/change-background"},"Change background")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/letter-counter"},"Letter Counter"))))))}var s=n(9);n(30);function i(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"title"},"Counter"),c.a.createElement("div",{className:"counter"},c.a.createElement("h1",{className:"counter___count"},n),c.a.createElement("section",{className:"counter___section"},c.a.createElement("button",{className:"counter___button",onClick:function(){return r(n-1)}},c.a.createElement("i",{className:"fas fa-minus"})),c.a.createElement("button",{className:"counter___button",onClick:function(){return r(n+1)}},c.a.createElement("i",{className:"fas fa-plus"})))))}n(31);function E(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"title"},"Letter ",c.a.createElement("br",null),"Count"),c.a.createElement("div",{className:"count"},c.a.createElement("input",{className:"input__count",onChange:function(e){return r(e.target.value.length)}}),c.a.createElement("span",{className:"letter__count"},"Letter Count: ",n)))}n(32);function h(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"title"},"Background ",c.a.createElement("br",null)," color changer"),c.a.createElement("button",{className:"button__change",onClick:function(){document.documentElement.style.setProperty("--background",function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}())}},"CHANGE BACKGROUND"))}var f=function(){return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/change-background"},c.a.createElement(h,null)),c.a.createElement(u.a,{path:"/letter-counter"},c.a.createElement(E,null)),c.a.createElement(u.a,{path:"/"},c.a.createElement(i,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.4c966815.chunk.js.map