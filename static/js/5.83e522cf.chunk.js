(this.webpackJsonpfarhanangullia=this.webpackJsonpfarhanangullia||[]).push([[5,8],{143:function(e,t,a){"use strict";var c=a(9),n=a(2),r=a(3),s=a(4),o=a.n(s),i=a(0),l=a(7),u=a(1),f=["as","bsPrefix","className"],j=["className"];var b=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(r.a)(e,f);a=Object(l.c)(a,"col");var i=Object(l.a)(),u=Object(l.b)(),j=[],b=[];return i.forEach((function(e){var t,c,n,r=s[e];delete s[e],"object"===typeof r&&null!=r?(t=r.span,c=r.offset,n=r.order):t=r;var o=e!==u?"-".concat(e):"";t&&j.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=n&&b.push("order".concat(o,"-").concat(n)),null!=c&&b.push("offset".concat(o,"-").concat(c))})),[Object(n.a)(Object(n.a)({},s),{},{className:o.a.apply(void 0,[c].concat(j,b))}),{as:t,bsPrefix:a,spans:j}]}(e),s=Object(c.a)(a,2),i=s[0],b=i.className,d=Object(r.a)(i,j),O=s[1],h=O.as,p=void 0===h?"div":h,v=O.bsPrefix,x=O.spans;return Object(u.jsx)(p,Object(n.a)(Object(n.a)({},d),{},{ref:t,className:o()(b,!x.length&&v)}))}));b.displayName="Col",t.a=b},153:function(e,t,a){"use strict";var c=a(2),n=a(3),r=a(4),s=a.n(r),o=a(0),i=a(7),l=a(1),u=["bsPrefix","className","as"],f=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,f=void 0===o?"div":o,j=Object(n.a)(e,u),b=Object(i.c)(a,"row"),d=Object(i.a)(),O=Object(i.b)(),h="".concat(b,"-cols"),p=[];return d.forEach((function(e){var t,a=j[e];delete j[e],t=null!=a&&"object"===typeof a?a.cols:a;var c=e!==O?"-".concat(e):"";null!=t&&p.push("".concat(h).concat(c,"-").concat(t))})),Object(l.jsx)(f,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s.a.apply(void 0,[r,b].concat(p))}))}));f.displayName="Row",t.a=f},88:function(e,t,a){"use strict";a.r(t);a(0),a(90);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},92:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a(0),r=a(168),s=a(139),o=a(153),i=a(143),l=a(64),u=a.n(l),f=a(88),j=a(24),b=a(30),d=a(1),O={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};t.default=function(e){var t,a=e.header,l=Object(n.useState)(null),h=Object(c.a)(l,2),p=h[0],v=h[1];return Object(n.useEffect)((function(){fetch(j.a.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return e}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f.default,{title:a}),Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsx)(s.a,{children:p?Object(d.jsx)(u.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{style:O.introTextContainer,children:(t=p.about,Object(d.jsx)(r.a,{children:t}))}),Object(d.jsx)(i.a,{style:O.introImageContainer,children:Object(d.jsx)("img",{src:null===p||void 0===p?void 0:p.imageSource,alt:"profile"})})]})}):Object(d.jsx)(b.default,{})})})]})}}}]);
//# sourceMappingURL=5.83e522cf.chunk.js.map