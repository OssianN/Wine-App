(this["webpackJsonptest-api"]=this["webpackJsonptest-api"]||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(22),r=n.n(c),s=n(2),i=n(7),o=n(16),u=n(20),l=n(9),A=n.n(l),d=function(e){e?A.a.defaults.headers.common.Authorization=e:delete A.a.defaults.headers.common.Authorization},h=n(5),j=n.n(h),b=n(8),p="GET_ERRORS",f="USER_LOADING",O="SET_CURRENT_USER",m="SET_WINE_ARR",g="SET_PICKED_WINE",v="KEEP_FORM",w="UPDATE_WINE_ARR",x="ARCHIVE_WINE",E="DELETE_WINE_ARR",C=function(e){return function(t){localStorage.setItem("jwtToken",e),d(e);var n=Object(u.a)(e);t(N(n))}},N=function(e){return{type:O,payload:e}},y=n(6),M=n(3),S=function(e){return{type:g,payload:e}},B=n(0),_=function(e){var t,n,a=e.card,c=e.setShowEditModal,r=e.cardWidth,i=Object(s.b)(),o=a.img?a.img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stTlhETDlVN0bkXpJTAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTEyLTI2VDE3OjE0OjA3KzAwOjAwAhXffQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0xMi0yNlQxNzoxNDowNyswMDowMHNIZ8EAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAbUExURUdwTCgnJycnJygmJignJycmJicmJicmJignJ74M/NYAAAAIdFJOUwD8qMLdKYBXX41qAwAACpZJREFUeNrt3c9z2zYaBmCubJrXchvHOKaZrKtjp920Oiqdcaqj1HZbHTPp1NFR6cYZX2HLDv7sSrKTSiQoAmTTUO/7foeknfZAPAKBDyB+JIlCoVAoFAqFQqFQKBQKhUKhUCi6Ednj0/OLMW/xf3vmjHUPvr3gLP8fI2fzZTiXf8lY/jfLgrt15Mb9wFf+H611HyJ3T9nKn45ytxG5nZMBTKzbCnPCVgHMNoBdcPWGvUIFWMYjrjegVH77jgqgb0oAV1QAI1euAkyNQFYuvzNMHeGR9QC84O4EnHnEDvAVEcCBD2AoAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAexd9FQDyDdP9wQgAAEIQAACEIAABKBjdDQWoAQ49AA4KgBP+d0ZEcC/fADHRAATH8ANEcDUU36qQ0Uv6QGMB+CWCGDmA2A6VrbvA7gmAhj4ABZEACNfN0h0sHBqfACOByDzDQWYTlY+8gM8op4PoZoR8Q4GneUZDU39ADy58MzbCxDlwgM/AE0qWJEG8CQC/jSA6IaBXhUASz84qXgDaCbFZhVtAE03MKhqBEkGxFnVG8AyHKpqA2lawWllDSBJhvumEoAiF0zdjmBoBA7sDoAhAcClqS4/QyaQjna9AgQzw71dbwDDvOCuN4DhHdj9Bjibj6nfAIJkcGZ2A6B/I85cXYAPiCa1AA76CurShdO+SQHkZvDA1tcA6PWCg/oKAD0k7IVUAOSesG9CAHB7wqOgCgA8IJiZMADUKhBaAWCrQGgFQK0C4RXAWcgqEF4BMKcFIirAKl6QzQThV4EsrgLgLZaYuMgAGxWHjIO3A2xy8MDG1gCDNSrux1YAsGQoi64AYM3gJL78ziI1gwPTAABoxdBRgzcA6h1o8gYs4x31G4A0O5rZZjUA5h04dA0DJReamWblRxkS1iwJwF8wc2SbAoDMjP3ctPwuP6ZuAmAagcZNAMin8sw2B4DIBA7aAHzFOxDAGQ40bwNBpoVGLQAQdhGlbd4AhEVzR7YVwP7ngoetAAB2ULTqBBC6gcs2bSBCMtxvB7D/02KtekGAfrBdLwiwkS5r1wns/3DoqC3AvicCB20B9n08eNi2Ddj3qfFJW4B9P1Zj2hZg31PBdokgQCo4E0BLgH2fE+oLoCXAtQD2OwZtARYCEAA3gBpBAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEI4JNEer6Oly8fr+KbZfx39cc36389PV3/x7dzYICetfn6gfLVX+s/3v+d5+b+n2+AAQ6XJa+NW2CAkIUOvg+ZMABBCx0WwABhBRnjAgR94fFsb0ABSIPK4VnViAKQNT0OFQUgcMXrMSxA2IpXzzU5KABhK149a9pQAC6bPi0MQFg5FrAAoeUYowIE7vwpZ0IgAGlgMcqZEAhA6M4fMwQFCN75cwwK0AsEKGdCIAChO3/KmRAIQOjGl/KcEAhA6MaX8sJWEIDgfR+l079AAIJX/JYyIQyA8PPgSlt9QQCCn7eUCmIARGwBH0IC9MIBjiEBwreAl1JBDIDwLeClVBADYBr+vFeQABE7oBeQABEbgIsXQ2AARGz9KqaCGACj8AcupoIQAGlEIYqpIARAzFlAxe+jEABRZwEdAwJEZMLO3gACxJyJWMyFIQBizgIq5sIQAFPT/IEhAKLOAloAAkQVojAtCgEQdQiCneMBjGKeuJALIwCkUWUo5MIQAFFPXMiFEQAiT8UcsgMcwwHEHQtayIURAOKOBQUEiDsWtDAYQACYtnliBIDIS7MXcACRp2JuX46EABBbBjiA2APh5mgAo7hH3h4NAQCkkUXYHg0hADhygNgrEraHgwAAsVck2M/IAbaHgwAAsXdEbN8azwjwDgwg9pKM7eEgAMCEHWAa+8hXYACXrR4ZASC2CAswgOhLMrYmBBgBLBhAfBHYAQwYQPQNAVuLRQWw/wAjAQhAAGoEBSAAXgD6TJB+LBA9GszZAdDmA2JnhCzajNC01SMzToujzQrTfxiJvj8e7dsg/dfh2AUSdggGQL9GiH6VmBZK0q8VnrTIg7RjBAEgY980Rb9vMLIQYzyAmG4Acvv8YfM2kPAQlSEgAP1BSjpLjP48wYhG4AwSIPwTOei5wuFHa18nmAA99vsFQo+WLh0sTXbNDvA9Q2H9gMW9a4z+vsHkZ9sgC0ICSE19STz3LQLdPP262bPiAGS1VcBz3yTU3eOvbZNHBQKoqwK+FgDr9vndHYG5TdABkn6+40HtHB9gx0tgzdMEHyD5yVUVxzxMGACSNxXNgLkacwCkfev/JD5POACSzDc5Zt1/EhaApGfLJTInCQ+AJyG012MmgLT0EvhTQFiA5KdiFXiYcAEUJ4fsnA2gMEd+krABbFeB3RUAE2Bz2Vj5pmECgM3PJOVPIQQAGyfr1D4fJsDGZ5IzSoC/mkEz5wSY+BcG8wB8SAWOSQHer57dOQxABni/biwfswJMApsAWID7RuCGFiCr/hrIAXC3erYuD0YGWBfMjnkBVqumQh4OFmBSsSSGBmA1J1A3FwANsB4QHhMDrPfSDYkB0qCRADKACUoDcAFWmRA3wMDUTwdBA6xKNhYAMcDMhAwFsAFydoAH7AALAQhAANwAiQAEIAABCEAAAhAAI8ClaoAA9AqoBghAAAIQgKbEBCAAVgCrGsAM0FcNIP86rBUiAiAHGJi6fdP4ANzL5Eb0AE4A1Etl6RdLC8CQ7xfI2DdMrLbMBGwcBQcYEgMcsW+a6rFvm1sfpnTDDsC8c3R19RD11ln6zdPr7fNX7ADM5wesz9FZEAPcnSY25gUYrZ4uYEoIFeDuLC3iU2Tu7iIOGA+jAtwfqTikBThgP0rr/jC1W1qAu9vnAlLBWVuAq24C3P+wOS3A6O7x8nlYVWkBcNvJ8mf3j1ffD166lgDvOgnw4VDVYVhr2SJuOgkwCf59DtsCnHUS4H3TVt9J9Wy78od8e/h0beAy6lrBrC3Aiy6W/6+zxWu/jaQte4GQdUifrgkI6aUG7QQWnXwDNgpVu1CqXSbUzTRgs2GzZ8G1BacX3Bzg2LoV0+26gU52AtsXDZmTmlawXScw7175f9m+dtG678YfrRXs4EVbb5+YQp229vNX44/UCHRtJJC+fGZd6Z3Ol53VtxcfpREIWYTzDxb/t1GeW0+FtkuC/Psqgs1LeWIjZEfCP/frj6zLq97n3OT2+cXfPSXQpSzgj9G6ru/4sczyRRj/ve9AdzrB7InN89r66uznv3uHTg2rgF105Q34ZeRsSCFyl3/n6wcaVgF70pHy/9/YwN9w+f8999Qfs99ZUM9G/IK5bwrntd3rJKCfx/yCuWc3Yd3F9f7yu45UgGS2KlZgLP9XX/bapAqYrrQAywToWfhjP/h67k2GzP52Aavn//Xt+fnjujg9PX91UfHUPRcpYPOnCVS8sVEC1jzEKn+SfhFTB2z1dfb7K9B3eXhfej1P4GJZB2wemE39G7D8q97EhPSnxtnn4wQzfn0S0A7Y739PcON/b1/W9KWvLhKFQqFQKBQKhUKhUCgUCoVCoVA0jj8BY5Q0BVomfUgAAAAASUVORK5CYII=",u=a._id,l=a.shelf,A=a.column,d=a.title,h=a.country,p=a.comment,f=a.year,O=a.price,m=a.rating,g=a.vivinoUrl,v=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(S(a)),c({display:"flex"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){return e||"-"};return Object(B.jsxs)("figure",{className:"card",id:u,style:{width:"calc(".concat(r,"% - 20px)")},children:[Object(B.jsxs)("header",{className:"card-header",children:[Object(B.jsx)("p",{className:"card-header__position",children:"".concat(l+1,":").concat(A+1)}),Object(B.jsx)("button",{className:"edit-card__button",onClick:v,children:"\u22ee"})]}),Object(B.jsx)("img",{className:"card__img",alt:"wine bottle",src:o}),Object(B.jsxs)("div",{className:"card__text-container",children:[Object(B.jsx)("h1",{className:"card__title",children:d}),Object(B.jsx)("p",{className:"card__country-paragraph",children:w(h)}),Object(B.jsx)("p",{className:"card__comment",children:(n=p,(null===n||void 0===n?void 0:n.length)>12?"".concat(n.slice(0,12),"..."):n)}),Object(B.jsxs)("footer",{className:"card__footer",children:[Object(B.jsx)("span",{className:"card__separaion-span"}),Object(B.jsx)("p",{className:"card__info-paragraph",children:w(f)}),Object(B.jsxs)("p",{className:"card__info-paragraph",children:[w(O)," kr"]}),Object(B.jsxs)("p",{className:"card__info-paragraph",children:[w(m),"\u2605"]}),(t=g,t?Object(B.jsx)("a",{target:"_blank",rel:"noreferrer",href:g,className:"card__info-paragraph card__vivino-url",children:"vivino \u203a"}):Object(B.jsx)("a",{className:"card__info-paragraph card__vivino-url",children:" - "}))]})]})]})},Q=function(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e.wineArr.wines})),a=Object(s.c)((function(e){return e.pickedWine})),c=Object(s.c)((function(e){return e.auth})).user,r=e.searchValue?e.searchArr:n,i=100/c.columns,o=function(t,n,a,c){var r=!1;if(null===t||void 0===t||t.forEach((function(t){"".concat(t.shelf,":").concat(t.column)==="".concat(a,":").concat(c)&&(r=!0,n.push(function(t){return Object(B.jsx)(_,{card:t,cardWidth:i,setShowEditModal:e.setShowEditModal},t._id)}(t)))})),!r&&!e.searchValue)return n.push(function(e,t){return Object(B.jsxs)("div",{className:"add-wine__div",id:"".concat(e,":").concat(t),style:{width:"calc(".concat(i,"% - 20px)")},children:[Object(B.jsx)("div",{className:"card-header",children:Object(B.jsx)("p",{className:"card-header__position--dark",children:"".concat(e+1,":").concat(t+1)})}),Object(B.jsx)("button",{onClick:u,children:"+"})]},"".concat(e,":").concat(t))}(a,c))},u=function(n){e.setShowAddModal({display:"flex"}),t(S(Object(M.a)(Object(M.a)({},a),function(e){var t=e.split(":");return{shelf:parseInt(t[0]),column:parseInt(t[1])}}(n.target.parentElement.id))))};return Object(B.jsx)("div",{className:"wine-grid",children:function(e){for(var t=[],n=0;n<c.shelves;n++){for(var a=[],r=0;r<c.columns;r++)o(e,a,n,r);t.push(a)}return t.map((function(e,t){return Object(B.jsx)("div",{className:"wine-row",children:e},t)}))}(r)})},I=n(30),z=n(15),D=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.put("/wines",t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),alert("A server error occured.",e.t0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return{type:m,payload:e}},V=function(e){return{type:w,payload:e}},U=function(e){var t=e.buttonName,n=e.areYouSure,c=e.setAreYouSure,r=e.setShowEditModal,i=e.saveOrClearForm,o=Object(a.useState)("none"),u=Object(y.a)(o,2),l=u[0],A=u[1],d=Object(s.b)(),h=Object(s.c)((function(e){return e})).pickedWine,p=function(){return c(!n)},f=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{D(Object(M.a)(Object(M.a)({},h),{},{archived:!0})),d({type:x,payload:h}),r({display:"none"}),p(),i()}catch(t){alert("A server error occured.",t),console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){A("Change Wine"===t?"grid":"none")})),Object(B.jsxs)("div",{className:"archive-button-container",style:{display:l},children:[Object(B.jsx)("button",{type:"button",onClick:p,className:"btn--enforced btn--form-archive",style:{display:n?"none":"block"},children:"Archive"}),n?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("p",{className:"confirm-archive__p",children:"Are you sure you want to archive this wine?"}),Object(B.jsx)("button",{type:"button",className:"btn--enforced btn-archive--yes",onClick:f,children:"yes"}),Object(B.jsx)("button",{type:"button",className:"flat-button--border btn-archive--no",onClick:p,children:"no"})]}):""]})},F=function(e){var t=Object(s.b)(),n=Object(a.useRef)(null),c=Object(a.useRef)(null),r=Object(a.useState)(!1),i=Object(y.a)(r,2),o=i[0],u=i[1],l=Object(s.c)((function(e){return e.pickedWine})),A=l.column,d=l.shelf,h=Object(s.c)((function(e){return e.keepForm})),j={title:"",year:"",price:"",comment:""},b=Object(a.useState)(j),p=Object(y.a)(b,2),f=p[0],O=p[1],m=function(){h||(O(j),t(S(j)))},g=function(e){var t=e.target.name;O(Object(M.a)(Object(M.a)({},f),{},Object(z.a)({},t,e.target.value)))};return Object(a.useEffect)((function(){return O(Object(M.a)({},l))}),[l]),Object(a.useEffect)((function(){n.current.focus()}),[]),Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=f.title?isNaN(f.year)?{isValid:!1,input:c}:{isValid:!0}:{isValid:!1,input:n};if(!a.isValid)return a.input.current.focus();e.method(Object(M.a)(Object(M.a)(Object(M.a)({},l),f),{},{column:A,shelf:d})),e.show({display:"none"}),u(!1),m()},className:"wineForm",children:[Object(B.jsx)("button",{type:"button",onClick:function(){m(),u(!1),e.show({display:"none"})},className:"cancelButton",children:"\u2715"}),Object(B.jsx)("input",{ref:n,value:f.title||"",onChange:g,name:"title",type:"text",placeholder:"Name"}),Object(B.jsx)("input",{ref:c,value:f.year||"",onChange:g,name:"year",type:"text",placeholder:"Year"}),Object(B.jsx)("input",{value:f.price||"",onChange:g,name:"price",type:"text",placeholder:"What did you pay?"}),Object(B.jsx)("textarea",{value:f.comment||"",onChange:g,name:"comment",placeholder:"comment"}),Object(B.jsx)("button",{type:"submit",className:"btn--enforced btn--form-submit",style:{display:o?"none":"block"},children:e.buttonName}),Object(B.jsx)(U,{buttonName:e.buttonName,areYouSure:o,setAreYouSure:u,setShowEditModal:e.setShowEditModal,saveOrClearForm:m}),Object(B.jsxs)("div",{className:"save-form",children:[Object(B.jsx)("input",{value:h,onChange:function(){t({type:v,payload:!h})},type:"checkbox",className:"save-form__checkbox ".concat(h)}),Object(B.jsx)("label",{htmlFor:"saveForm",children:"keep form info"})]})]})},G=function(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e.wineArr.wines})),a=Object(s.c)((function(e){return e.pickedWine})),c=a.shelf,r=a.column,i=Object(s.c)((function(e){return e.auth})).user,o=function(){var e=Object(b.a)(j.a.mark((function e(a){var s,o,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(k([].concat(Object(I.a)(n),[{shelf:c,column:r,country:"loading..."}]))),e.next=4,A.a.post("/wines",a);case 4:return s=e.sent,t(k([].concat(Object(I.a)(n),[s.data]))),e.next=8,A.a.post("/users/addWine",{_id:s.data._id,email:i.email});case 8:o=e.sent,u=o.data.token,t(C(u)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("A server error occured:",e.t0.message);case 16:case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)("div",{className:"wineModal",style:e.showAddModal,children:Object(B.jsx)(F,{method:o,buttonName:"Add Wine",show:e.setShowAddModal})})},R=function(e){var t=Object(s.b)(),n=function(){var e=Object(b.a)(j.a.mark((function e(n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(n);case 2:a=e.sent,t(V(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)("div",{className:"wineModal",style:e.showEditModal,children:Object(B.jsx)(F,{method:n,buttonName:"Change Wine",show:e.setShowEditModal,setShowEditModal:e.setShowEditModal})})},T=function(e){var t=e.setSearchArr,n=e.searchValue,c=e.setSearchValue,r=e.showArchived,i=Object(s.c)((function(e){return e.wineArr.wines})),o=Object(s.c)((function(e){return e.wineArr.archived})),u=r?o:i,l=function(e){return"title"===e[0]||"year"===e[0]||"country"===e[0]||"price"===e[0]||"rating"===e[0]?e[1]:""},A=function(e){var t;return parseInt(null===(t=e.match(/[0-9]+/))||void 0===t?void 0:t[0])};return Object(a.useEffect)((function(){if(u){!function(){var e=null===u||void 0===u?void 0:u.filter((function(e){return Object.entries(e).map(l).join("").toLowerCase().match(n.toLowerCase())}));t(e)}()}}),[n,t,u]),Object(a.useEffect)((function(){!function(){if(null===n||void 0===n?void 0:n.match(/rating/i)){var e=null===u||void 0===u?void 0:u.filter((function(e){return parseInt(e.rating)>=A(n)}));t(e)}}()}),[n,t,u]),Object(a.useEffect)((function(){!function(){if(null===n||void 0===n?void 0:n.match(/kr/i)){var e=null===u||void 0===u?void 0:u.filter((function(e){return parseInt(e.price)<=A(n)}));t(e)}}()}),[n,t,u]),Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:n,className:"search",placeholder:"search"})})},Y=function(){var e=Object(s.b)(),t=Object(i.e)();return Object(B.jsx)("div",{className:"logout-container",children:Object(B.jsx)("button",{className:"logout-button",onClick:function(){e(N({})),localStorage.removeItem("jwtToken"),t.push("/")},children:Object(B.jsx)("p",{children:"log out"})})})},P=function(e){var t=e.setShowSettings,n=Object(s.c)((function(e){return e.auth})).user,c=Object(a.useState)({columns:n.columns,shelves:n.shelves}),r=Object(y.a)(c,2),i=r[0],o=r[1],u=Object(a.useState)(!1),l=Object(y.a)(u,2),d=l[0],h=l[1],p=Object(s.b)(),f=function(e){var t=e.target.name;o(Object(M.a)(Object(M.a)({},i),{},Object(z.a)({},t,e.target.value)))},O=function(){var e=Object(b.a)(j.a.mark((function e(a){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),i.columns&&i.shelves){e.next=5;break}h(!0),e.next=12;break;case 5:return h(!1),e.next=8,A.a.post("/users/addStorage",{columns:i.columns,shelves:i.shelves,email:n.email});case 8:c=e.sent,r=c.data.token,t(!1),p(C(r));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)("div",{className:"initial-setup__container",children:Object(B.jsxs)("form",{className:"initial-setup__form",onSubmit:O,children:[d?Object(B.jsx)("p",{children:"columns and shelves need to be grater than zero"}):"",Object(B.jsx)("label",{children:"How many columns do you have?"}),Object(B.jsx)("input",{name:"columns",className:"initial-setup__input",type:"number",placeholder:n.columns,value:i.column,onChange:f}),Object(B.jsx)("label",{children:"How many shelves do you have?"}),Object(B.jsx)("input",{name:"shelves",className:"initial-setup__input",type:"number",placeholder:n.shelves,value:i.shelf,onChange:f}),Object(B.jsx)("p",{className:"initial-setup__p",children:"You can change this whenever you want."}),Object(B.jsx)("button",{type:"submit",className:"initial-setup__button--confirm btn--enforced",children:"confirm"})]})})},W=function(e){var t=e.showSettings,n=e.setShowSettings,c=(e.setShowArchived,Object(a.useState)(0)),r=Object(y.a)(c,2),i=r[0],o=r[1],u=Object(s.c)((function(e){return e.wineArr.wines})),l=Object(s.c)((function(e){return e.auth})).user,A=t?null:"-400px",d=function(e){return!e.price||isNaN(e.price)?0:parseInt(e.price)},h=function(e,t){return e+parseInt(t)};return Object(a.useEffect)((function(){var e=u.map(d).reduce(h,0);o(e)}),[u]),Object(B.jsxs)("div",{className:"settings-container",style:{right:A},children:[Object(B.jsx)("h2",{className:"settings__name",children:l.name}),Object(B.jsx)(Y,{}),Object(B.jsxs)("div",{className:"settings__price-container",children:[Object(B.jsx)("h4",{className:"settings__price-header",children:"Total price for this storage: "}),Object(B.jsxs)("p",{className:"settings__price-p",children:[i," kr"]})]}),Object(B.jsx)(P,{setShowSettings:n})]})},J=(n(71),function(e){var t=e.showSettings,n=e.setShowSettings,c=Object(a.useState)("hamburger--closed"),r=Object(y.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){i(t?"hamburger--open":"hamburger--closed")}),[t]),Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("button",{className:"hamburger",onClick:function(){n(!t)},children:Object(B.jsxs)("div",{id:"nav-icon2",className:"".concat(s),children:[Object(B.jsx)("span",{}),Object(B.jsx)("span",{}),Object(B.jsx)("span",{}),Object(B.jsx)("span",{}),Object(B.jsx)("span",{}),Object(B.jsx)("span",{})]})})})}),K=(n(72),function(e){var t=e.setShowEditModal,n=e.searchValue,a=e.searchArr,c=Object(s.c)((function(e){return e.wineArr.archived})),r=n?a:c;return Object(B.jsx)("div",{className:"archived__container",children:r.sort((function(e,t){return e._id<t._id?1:e._id>t._id?-1:0})).map((function(e,n){return Object(B.jsx)(_,{card:e,setShowEditModal:t},n)}))})}),L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAElBMVEX///8zMzMzMzMzMzMzMzMzMzPrq7PdAAAABnRSTlMAgP/QUBArwMnyAAAASElEQVR4AWMYXGAUCClhBYpwBUo4AFR6VMGgAHidOVQVmEA4zjgVOEA4LDgVQDmshBQwkG+FCcQGZ0rDYVTBqAIhrAUxAowCAMLyao+cLODEAAAAAElFTkSuQmCC",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAMFBMVEX///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzOGvfDjAAAAEHRSTlMAgP/gsHAgwEAw8GAQkNCgS1NThAAAAJpJREFUeNrt07sOwyAMhWFzIFxsEt7/bbtEqqJiZDq0i7/9/PJicm4uYCEYAljygAc88LtAxEI0BBIWkiFwYOEwBDIWMhkUqApZVKgqmRT9AJvGmOJGRoIpITNR9naVP+6vtKWf/JifnXZ1SXyvk3T6zvsDPeABD/wvkCXhliTTphYuPFyhbaxHxEQc1gZDwWQDFdkMKAY5N/UCWpMJZ+amwLkAAAAASUVORK5CYII=",Z=function(e){var t=e.setShowArchived,n=Object(a.useRef)(null);return Object(B.jsxs)("button",{className:"btn archive__button",onClick:function(){t((function(e){return e?n.current.classList.remove("archive__button--archived"):n.current.classList.add("archive__button--archived"),!e}))},ref:n,children:[Object(B.jsx)("img",{className:"archive__button-img archive__button-img--wine",src:H}),Object(B.jsx)("img",{className:"archive__button-img archive__button-img--archive",src:L})]})},X=(n(73),n(74),function(){var e=Object(a.useState)(0),t=Object(y.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({display:"none"}),o=Object(y.a)(r,2),u=o[0],l=o[1],d=Object(a.useState)({display:"none"}),h=Object(y.a)(d,2),p=h[0],f=h[1],O=Object(a.useState)([]),m=Object(y.a)(O,2),g=m[0],v=m[1],w=Object(a.useState)(""),x=Object(y.a)(w,2),E=x[0],C=x[1],N=Object(a.useState)(!1),M=Object(y.a)(N,2),S=M[0],_=M[1],I=Object(a.useState)(!1),z=Object(y.a)(I,2),D=z[0],V=z[1],U=Object(s.c)((function(e){return e.auth})),F=U.isAuthenticated,Y=U.user,L=Object(s.b)(),H=Object(i.e)();return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("/wines/getUserWines",{wineList:Y.wineList});case 3:t=e.sent,n=t.data,L(k(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0,"getWines error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[L,Y.wineList]),Object(a.useEffect)((function(){F||H.push("/login")})),Y.columns&&Y.shelves?Object(B.jsxs)("div",{className:"dashboard",children:[Object(B.jsxs)("header",{className:"main__header",children:[Object(B.jsx)(T,{setSearchArr:v,searchValue:E,setSearchValue:C,showArchived:D}),Object(B.jsx)(Z,{setShowArchived:V}),Object(B.jsx)(J,{showSettings:S,setShowSettings:_}),Object(B.jsx)(W,{showSettings:S,setShowSettings:_,setShowArchived:V})]}),Object(B.jsx)("h1",{className:"header",children:"This is the wine we whine about"}),Object(B.jsx)(G,{updateOnPost:n,setUpdateOnPost:c,showAddModal:u,setShowAddModal:l}),Object(B.jsx)(R,{showEditModal:p,setShowEditModal:f,updateOnPost:n,setUpdateOnPost:c}),D?Object(B.jsx)(K,{setShowEditModal:f,searchArr:g,searchValue:E}):Object(B.jsx)(Q,{updateOnPost:n,setUpdateOnPost:c,showAddModal:u,setShowAddModal:l,showEditModal:p,setShowEditModal:f,searchArr:g,searchValue:E})]}):Object(B.jsx)(P,{setShowSettings:_})}),q=function(){var e=Object(s.c)((function(e){return e.auth.isAuthenticated})),t=Object(i.e)();return Object(a.useEffect)((function(){e&&t.push("/dashboard")})),Object(B.jsxs)("div",{className:"landing-page",children:[Object(B.jsx)("h1",{className:"header",children:"This is the wine we whine about"}),Object(B.jsxs)("div",{className:"landing-page-link-container",children:[Object(B.jsx)(o.b,{to:"/register",className:" landing-page__link landing-page__link--colored",children:"Register"}),Object(B.jsx)(o.b,{to:"/login",className:"landing-page__link",children:"Log in"})]})]})},$=function(e){var t=Object(a.useState)({name:"",email:"",password:"",password2:""}),n=Object(y.a)(t,2),c=n[0],r=n[1],o=Object(s.c)((function(e){return e.auth.isAuthenticated})),u=Object(s.c)((function(e){return e.errorState})),l=Object(i.e)(),d=Object(s.b)(),h=function(e){var t=e.target.name;r(Object(M.a)(Object(M.a)({},c),{},Object(z.a)({},t,e.target.value)))};return Object(a.useEffect)((function(){o&&l.push("/dashboard")})),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h1",{className:"header",children:"This is the wine we whine about"}),Object(B.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(a){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.a.post("/users/register",e);case 3:t.push("/login"),a({type:p,payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),a({type:p,payload:n.t0.response.data});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(c,l))},className:"auth-form",children:[Object(B.jsx)("input",{className:"auth-form__input",onChange:h,name:"name",value:c.name,placeholder:"name"}),u.email?Object(B.jsx)("p",{className:"form__error-p",children:u.email}):"",Object(B.jsx)("input",{className:"auth-form__input",onChange:h,name:"email",value:c.email,placeholder:"email"}),u.password?Object(B.jsx)("p",{className:"form__error-p",children:u.password}):"",Object(B.jsx)("input",{className:"auth-form__input",onChange:h,name:"password",value:c.password,placeholder:"password",type:"password"}),u.password2?Object(B.jsx)("p",{className:"form__error-p",children:u.password2}):"",Object(B.jsx)("input",{className:"auth-form__input",onChange:h,name:"password2",value:c.password2,placeholder:"repeat password",type:"password"}),Object(B.jsx)("button",{className:"auth-form__submit-button btn--enforced",type:"submit",children:"register"})]})]})},ee=(n(75),function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(y.a)(t,2),c=n[0],r=n[1],o=Object(i.e)(),l=Object(s.c)((function(e){return e.auth.isAuthenticated})),h=Object(s.c)((function(e){return e.errorState})),f=Object(s.b)();Object(a.useEffect)((function(){l&&o.push("/dashboard")}));var O=function(e){var t=e.target.name;r(Object(M.a)(Object(M.a)({},c),{},Object(z.a)({},t,e.target.value)))};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h1",{className:"header",children:"This is the wine we whine about"}),Object(B.jsxs)("form",{onSubmit:function(t){var n;t.preventDefault(),f((n=c,function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A.a.post("/users/login",n).then((function(e){var n=e.data.token;localStorage.setItem("jwtToken",n),d(n);var a=Object(u.a)(n);t(N(a))})).catch((function(e){return t({type:p,payload:e.response.data})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e.history.push("/dashboard")},className:"auth-form",children:[h.email?Object(B.jsx)("p",{className:"form__error-p",children:h.email}):Object(B.jsx)("p",{}),Object(B.jsx)("input",{className:"auth-form__input",onChange:O,name:"email",type:"text",value:c.email,placeholder:"email"}),h.password?Object(B.jsx)("p",{className:"form__error-p",children:h.password}):Object(B.jsx)("p",{}),Object(B.jsx)("input",{className:"auth-form__input",onChange:O,name:"password",value:c.password,placeholder:"password",type:"password"}),Object(B.jsx)("button",{className:"auth-form__submit-button btn--enforced",type:"submit",children:"log in"})]})]})}),te=function(){var e=Object(s.b)(),t=Object(i.e)();if(localStorage.jwtToken){var n=localStorage.jwtToken;d(n);var a=Object(u.a)(n);e(N(a));var c=Date.now()/1e3;a.exp<c&&(e((function(e){localStorage.removeItem("jwtToken"),d(!1),e(N({}))})),t.push("/login"))}return Object(B.jsx)(o.a,{children:Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(i.a,{exact:!0,path:"/",component:q}),Object(B.jsx)(i.a,{path:"/register",component:$}),Object(B.jsx)(i.a,{path:"/login",component:ee}),Object(B.jsx)(i.a,{path:"/dashboard",component:X})]})})},ne=n(17),ae=n(41),ce=n(76),re={isAuthenticated:!1,user:{},loading:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(M.a)(Object(M.a)({},e),{},{isAuthenticated:!ce(t.payload),user:t.payload});case f:return Object(M.a)(Object(M.a)({},e),{},{loading:!0});default:return e}},ie={},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;default:return e}},ue=function(e){return e.filter((function(e){return!e.archived}))},le=function(e){return e.filter((function(e){return e.archived}))},Ae=function(e,t){return e.map((function(e){return e._id!==t._id?e:t}))},de=function(e,t){return e.map((function(e){return e._id===t._id?Object(M.a)(Object(M.a)({},e),{},{archived:!0}):e}))},he=function(e,t){return e.filter((function(e){return e._id!==t}))},je={wines:[],archived:[{name:"test"}]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{wines:ue(t.payload),archived:le(t.payload)};case w:return Object(M.a)(Object(M.a)({},e),{},{wines:Ae(e.wines,t.payload)});case x:var n=de(e.wines,t.payload);return Object(M.a)(Object(M.a)({},e),{},{wines:ue(n)});case E:return Object(M.a)(Object(M.a)({},e),{},{wines:he(e.wines,t.payload)});default:return e}},pe={},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.payload;default:return e}},me=Object(ne.c)({auth:se,errorState:oe,wineArr:be,pickedWine:fe,keepForm:Oe}),ge=[ae.a],ve=ne.d.apply(void 0,[ne.a.apply(void 0,ge)].concat([])),we=Object(ne.e)(me,{},ve);n(77);r.a.render(Object(B.jsx)(s.a,{store:we,children:Object(B.jsx)(te,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.eb6f47e6.chunk.js.map