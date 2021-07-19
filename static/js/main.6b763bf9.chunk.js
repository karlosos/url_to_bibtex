(this.webpackJsonpurl_to_bibtex=this.webpackJsonpurl_to_bibtex||[]).push([[0],{323:function(t,e,n){},324:function(t,e,n){},348:function(t,e){},350:function(t,e){},359:function(t,e){},361:function(t,e){},386:function(t,e){},388:function(t,e){},389:function(t,e){},394:function(t,e){},396:function(t,e){},402:function(t,e){},404:function(t,e){},423:function(t,e){},435:function(t,e){},438:function(t,e){},464:function(t,e){},570:function(t,e){},921:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(36),i=n.n(o),a=(n(323),n(91)),s=(n(324),n(24)),u=n(173),l=n.n(u),b=n(315),f=n(316),j=n.n(f),p=n(926),h=n(317),d=n.n(h);function x(t){var e=d()().format("DD-MMM-YYYY"),n="".concat(t.title," --- ").concat(t.website).replace(/([A-Z])/g,"{$1}");return"@misc{".concat(function(t){var e="",n=Object(p.b)(t.website);return n.type===p.a.Listed&&(e=""+n.domain),e=(e+=function(t){var e=t.split(" "),n="",c=0;for(var r in t.split(" "))e[r].length>=4&&c<2&&(n=n+e[r].charAt(0).toUpperCase()+e[r].slice(1),c+=1);return n}(t.title)).replace(/\W/g,"")}(t),",\n\tauthor = {").concat(t.author,"},\n\ttitle = {").concat(n,"},\n\thowpublished = {\\url{").concat(t.url,"}},\n\tyear = {},\n\tnote = {[Accessed ").concat(e,"]},\n}")}function O(t){var e=t.match(/^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/),n="";return null!=e&&(n=e[1]),n}var g=function(){var t=Object(b.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://cors-url-to-bibtex.herokuapp.com/",n="https://cors-url-to-bibtex.herokuapp.com/"+e,t.abrupt("return",j()(n).then((function(t){var n=O(e);return{title:t.title,author:t.author,url:e,website:n}})).then((function(t){return x(t)})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=n(174),m=n(20),v=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),i=Object(a.a)(o,2),u=i[0],l=i[1],b=Object(s.useClipboard)().copy,f=Object(c.useState)(!1),j=Object(a.a)(f,2),p=j[0],h=j[1],d=Object(c.useState)(!1),x=Object(a.a)(d,2),O=x[0],v=x[1];return Object(c.useEffect)((function(){var t=setTimeout((function(){v(!1)}),1500);return function(){return clearTimeout(t)}}),[O]),Object(m.jsxs)(s.GeistProvider,{children:[Object(m.jsx)(s.CssBaseline,{}),Object(m.jsx)(s.Spacer,{y:1}),Object(m.jsx)(s.Row,{style:{marginBottom:"15px"},justify:"center",children:Object(m.jsxs)(s.Col,{span:22,justify:"center",style:{maxWidth:"38em"},children:[Object(m.jsx)(s.Text,{h1:!0,children:"BibTex generator from URL"}),Object(m.jsx)(s.Note,{label:"IMPORTANT NOTE",type:"warning",children:"Most educators and professionals do not consider it appropriate to use tertiary sources such as encyclopedias as a sole source for any information\u2014citing an encyclopedia as an important reference in footnotes or bibliographies may result in censure or a failing grade. Wikipedia articles should be used for background information, as a reference for correct terminology and search terms, and as a starting point for further research."}),Object(m.jsx)(s.Spacer,{y:2}),Object(m.jsx)(s.Text,{h4:!0,children:"Enter the URL below: "}),Object(m.jsx)(s.Input,{placeholder:"URL to website/article",width:"100%",value:n,onChange:function(t){r(t.target.value)}}),Object(m.jsx)(s.Spacer,{y:.5}),Object(m.jsx)(s.Row,{justify:"center",children:Object(m.jsx)(s.Button,{loading:p,onClick:function(t){h(!0),g(n,l).then((function(t){console.log("Returned BiBtex",t),l(t),h(!1)}))},type:"secondary",style:{width:"100%"},children:"Generate BibTex entry"})}),Object(m.jsx)(s.Spacer,{y:.5}),Object(m.jsxs)("div",{className:"output",style:{position:"relative"},children:[Object(m.jsx)(s.Textarea,{placeholder:"",width:"100%",minHeight:"23em",value:u}),Object(m.jsx)(s.Button,{style:{position:"absolute",top:"5px",right:"5px",zIndex:33,borderColor:O?"green":"",padding:"0 0.5rem"},iconRight:O?Object(m.jsx)(y.Check,{color:"green"}):Object(m.jsx)(y.Copy,{}),auto:!0,size:"small",onClick:function(){b(u),v(!0)}})]})]})})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,927)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),w()}},[[921,1,2]]]);
//# sourceMappingURL=main.6b763bf9.chunk.js.map