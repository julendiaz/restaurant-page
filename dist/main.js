(()=>{"use strict";var n,e,t,r,a,o,i,c,s,l,d,u,m,p,f={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml {\n  min-width: 100%;\n}\n\nbody {\n  font-family: "Big Shoulders Text", cursive;\n  margin: 0px;\n  padding: 0px;\n  min-width: 100%;\n}\n\n/* -----------MAIN CONTAINER---------*/\n\n.main-container {\n  border: solid #4770ff 2em;\n  background-color: white;\n}\n/* ---------NAVBAR---------------- */\n\n.Navbar {\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n  align-items: center;\n  padding: 30px 80px;\n}\n\n.Navbar img {\n  width: 12em;\n}\n\n#nav__left {\n  width: 10em;\n}\n\n#nav__right {\n  width: 12em;\n}\n\n.nav__links ul {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  list-style-type: none;\n}\n\n.nav__links ul a {\n  text-decoration: none;\n  color: rgb(33, 33, 33);\n}\n\n/* -------MAIN CONTENT--------- */\n\n#main-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n#main-content img {\n  width: 38em;\n}\n\n#main-content h1 {\n  font-size: 4em;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  color: rgb(33, 33, 33);\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=a(p,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return f[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=v(379),e=v.n(n),t=v(795),r=v.n(t),a=v(569),o=v.n(a),i=v(565),c=v.n(i),s=v(216),l=v.n(s),d=v(589),u=v.n(d),m=v(426),(p={}).styleTagTransform=u(),p.setAttributes=c(),p.insert=o().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),e()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals,document.querySelector("#content").appendChild((()=>{const n=document.createElement("div");n.classList.add("main-container");const e=document.createElement("div");e.classList.add("Navbar");const t=document.createElement("nav"),r=document.createElement("ul"),a=document.createElement("li"),o=document.createElement("a"),i=document.createElement("li"),c=document.createElement("a"),s=document.createElement("li"),l=document.createElement("a");t.classList.add("nav__links"),t.id="nav__left",o.innerHTML="HOME",c.innerHTML="MENU",l.innerHTML="CHEF",o.href="#",c.href="#",l.href="#",t.append(r),r.append(a,i,s),a.append(o),i.append(c),s.append(l);const d=document.createElement("img");d.src="/src/assets/logo.svg",d.alt="Kaido Ramen Logo";const u=document.createElement("nav"),m=document.createElement("ul"),p=document.createElement("li"),f=document.createElement("a"),h=document.createElement("li"),v=document.createElement("a");u.classList.add("nav__links"),u.id="nav__right",f.innerHTML="RESERVATIONS",v.innerHTML="LOCATION",f.href="#",v.href="#",u.append(m),m.append(p,h),p.append(f),h.append(v),e.append(t,d,u);const b=document.createElement("div"),g=document.createElement("h1"),y=document.createElement("img"),E=document.createElement("h1");b.id="main-content",g.innerHTML="Eberhardstrasse 47<br> Stuttgart",y.src="/src/assets/kaido-ramen.jpeg",y.alt="Ramen Image",E.innerHTML="12:00 to 0:00<br /> Every day",b.append(g,y,E);const T=document.createElement("footer"),x=document.createElement("nav"),M=document.createElement("ul"),L=document.createElement("li"),w=document.createElement("a"),H=document.createElement("li"),_=document.createElement("a"),N=document.createElement("li"),k=document.createElement("a"),C=document.createElement("li"),A=document.createElement("a");x.id="footer__nav",w.innerHTML="Home",_.innerHTML="Chef",k.innerHTML="Reservations",A.innerHTML="Location",w.href="#",_.href="#",k.href="#",A.href="#",x.append(M),M.append(L,H,N,C),L.append(w),H.append(_),N.append(k),C.append(A);const I=document.createElement("h3"),S=document.createElement("h5"),q=document.createElement("h5");return I.innerHTML="+34 659  771 594",S.innerHTML="Powered by The Odin Project",q.innerHTML="Developed by Julen Diaz",T.append(x,I,S,q),n.append(e,b,T),n})()),console.log("hey this is real shit")})();