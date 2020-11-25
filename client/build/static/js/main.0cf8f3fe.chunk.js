(this["webpackJsonptest-api"]=this["webpackJsonptest-api"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),o=n.n(r),s=n(6),a=n.n(s),i=(n(12),n(3)),u=n.n(i),l=n(4),d=n(2),p=(n(14),function(t){var e=Object(r.useState)({display:"none"}),n=Object(d.a)(e,2),o=n[0],s=n[1],a="".concat(t.x,":").concat(t.y);return Object(c.jsxs)("div",{className:"card",id:a,onMouseOver:function(){s({display:"flex"})},onMouseOut:function(){s({display:"none"})},children:[Object(c.jsx)("button",{className:"removeButton",onClick:function(e){fetch("http://localhost:5000/wines",{method:"DELETE",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({shelf:t.x,row:t.y})}).then((function(){t.setUpdateOnPost(t.updateOnPost+1)})).catch((function(t){return alert("A server error occured.",t)}))},style:o,children:"\u2715"}),Object(c.jsx)("p",{className:"cardPosition",children:"".concat(t.x+1,":").concat(t.y+1)}),Object(c.jsx)("h1",{children:t.title}),Object(c.jsx)("h4",{children:t.country}),Object(c.jsx)("p",{children:t.year})]})}),j=function(t){var e=function(e,r,o,s){var a=!1;if(null===e||void 0===e||e.map((function(e){return"".concat(e.shelf,":").concat(e.row)==="".concat(o,":").concat(s)?(a=!0,r.push(function(e,n,r){return Object(c.jsx)(p,{title:e.title,country:e.country,year:e.year,x:e.shelf,y:e.row,updateOnPost:t.updateOnPost,setUpdateOnPost:t.setUpdateOnPost},"".concat(n,":").concat(r))}(e,o,s))):null})),!a)return r.push(function(t,e){return Object(c.jsx)("div",{className:"showForm",id:"".concat(t,":").concat(e),children:Object(c.jsx)("button",{onClick:n,children:"+"})},"".concat(t,":").concat(e))}(o,s))},n=function(e){t.setDisplayForm("addWineForm"),t.setPosition(e.target.parentElement.id.split(":"))};return Object(c.jsx)("div",{className:"wineGrid",children:function(){for(var n=t.cardArr,c=[],r=0;r<15;r++)for(var o=0;o<8;o++)e(n,c,r,o);return c}()})},h=function(t){var e=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://localhost:5000/wines",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(){t.setUpdateOnPost(t.updateOnPost+1)})).catch((function(t){return alert("A server error occured.",t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=n.target.children[2],r=n.target.children[4],o=n.target.children[6],s=t.position[0],a=t.position[1],i={title:c.value,country:r.value,year:o.value,shelf:s,row:a};e(i),t.setDisplayForm("hideWineForm")},className:t.displayForm,children:[Object(c.jsx)("button",{type:"reset",onClick:function(){t.setDisplayForm("hideWineForm")},className:"cancelButton",children:"\u2715"}),Object(c.jsx)("label",{htmlFor:"newWineName",children:"Wine Name"}),Object(c.jsx)("input",{type:"text",id:"newWineName"}),Object(c.jsx)("label",{htmlFor:"newWineCountry",children:"Country"}),Object(c.jsx)("input",{type:"text",id:"newWineCountry"}),Object(c.jsx)("label",{htmlFor:"newWineDesc",children:"Year"}),Object(c.jsx)("input",{type:"text",id:"newWineDesc"}),Object(c.jsx)("button",{type:"submit",id:"addNewWineButton",children:"Add Wine"})]})};var O=function(){var t=Object(r.useState)(),e=Object(d.a)(t,2),n=e[0],o=e[1],s=Object(r.useState)("doNotDisplay"),a=Object(d.a)(s,2),i=a[0],p=a[1],O=Object(r.useState)(null),b=Object(d.a)(O,2),f=b[0],y=b[1],m=Object(r.useState)(0),x=Object(d.a)(m,2),v=x[0],w=x[1],N=function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/wines",{headers:{"Content-Type":"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,o(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0,"getWines error");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){N()}),[v]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{className:"header",children:"This is the wine we whine about"}),Object(c.jsx)(h,{setCardArr:o,setDisplayForm:p,displayForm:i,position:f,updateOnPost:v,setUpdateOnPost:w}),Object(c.jsx)(j,{cardArr:n,setCardArr:o,setDisplayForm:p,displayForm:i,setPosition:y,updateOnPost:v,setUpdateOnPost:w})]})};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0cf8f3fe.chunk.js.map