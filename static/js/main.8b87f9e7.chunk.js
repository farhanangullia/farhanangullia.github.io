(this.webpackJsonpfarhanangullia=this.webpackJsonpfarhanangullia||[]).push([[10],{101:function(e,n,t){},136:function(e,n,t){var o={"./About":[92,0,5],"./About.jsx":[92,0,5],"./Education":[93,9,3],"./Education.jsx":[93,9,3],"./Experience":[94,0,1,4],"./Experience.jsx":[94,0,1,4],"./FallbackSpinner":[31],"./FallbackSpinner.jsx":[31],"./Header":[88,8],"./Header.jsx":[88,8],"./Home":[49],"./Home.jsx":[49],"./NavBar":[45],"./NavBar.jsx":[45],"./Projects":[95,0,2],"./Projects.jsx":[95,0,2],"./Skills":[96,0,7],"./Skills.jsx":[96,0,7],"./Social":[50],"./Social.jsx":[50],"./ThemeToggler":[46],"./ThemeToggler.jsx":[46],"./projects/ProjectCard":[91,0,6],"./projects/ProjectCard.jsx":[91,0,6]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=136,e.exports=r},137:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(17),i=t.n(c),a=(t(101),t(90),t(102),t(34)),l=t(20),s=t(77),u=t(52),d=t(7),f=t(10),j=t(31),h=t(45),b=t(49),v=t(24),m=t(1);var x,O=function(){var e=Object(o.useState)(null),n=Object(d.a)(e,2),c=n[0],i=n[1];return Object(o.useEffect)((function(){fetch(v.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),Object(m.jsxs)("div",{className:"MainApp",children:[Object(m.jsx)(h.default,{}),Object(m.jsx)("main",{className:"main",children:Object(m.jsx)(f.c,{children:Object(m.jsxs)(o.Suspense,{fallback:Object(m.jsx)(j.default,{}),children:[Object(m.jsx)(f.a,{exact:!0,path:"/",component:b.default}),c&&c.sections.map((function(e){var n=r.a.lazy((function(){return t(136)("./"+e.component)}));return Object(m.jsx)(f.a,{path:e.path,component:function(){return Object(m.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},g=t(36),k=Object(l.c)(x||(x=Object(g.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),C={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},p={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var y=function(){window.matchMedia=null;var e=Object(s.a)(!1);return Object(m.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(m.jsxs)(l.b,{theme:e.value?p:C,children:[Object(m.jsx)(k,{}),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(a.a,{children:Object(m.jsx)(O,{})})})]})})},S=function(e){e&&e instanceof Function&&t.e(13).then(t.bind(null,176)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),S()},24:function(e,n,t){"use strict";n.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"profile/home.json",social:"profile/social.json",about:"profile/about.json",skills:"profile/skills.json",education:"profile/education.json",experiences:"profile/experiences.json",projects:"profile/projects.json"}},31:function(e,n,t){"use strict";t.r(n);t(0);var o=t(138),r=t(1),c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(r.jsx)("div",{style:c.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},45:function(e,n,t){"use strict";t.r(n);var o,r,c=t(7),i=t(36),a=t(56),l=t(139),s=t(87),u=t(0),d=t(10),f=t(34),j=t(20),h=t(24),b=t(46),v=t(1),m={logoStyle:{width:50,height:40}},x=j.d.a(o||(o=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),O=Object(j.d)(f.b)(r||(r=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),g=Object(d.f)((function(){var e,n,t,o,r,i,d=Object(u.useContext)(j.a),f=Object(u.useState)(null),g=Object(c.a)(f,2),k=g[0],C=g[1],p=Object(u.useState)(!1),y=Object(c.a)(p,2),S=y[0],T=y[1];return Object(u.useEffect)((function(){fetch(h.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return C(e)})).catch((function(e){return e}))}),[]),Object(v.jsx)(a.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:S,children:Object(v.jsxs)(l.a,{children:[(null===k||void 0===k?void 0:k.logo)&&Object(v.jsx)(a.a.Brand,{href:"/",children:Object(v.jsx)("img",{src:null===k||void 0===k||null===(e=k.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==k&&void 0!==k&&null!==(n=k.logo)&&void 0!==n&&n.height&&null!==k&&void 0!==k&&null!==(t=k.logo)&&void 0!==t&&t.width?{height:null===k||void 0===k||null===(o=k.logo)||void 0===o?void 0:o.height,width:null===k||void 0===k||null===(r=k.logo)||void 0===r?void 0:r.width}:m.logoStyle})}),Object(v.jsx)(a.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return T(!S)}}),Object(v.jsxs)(a.a.Collapse,{id:"responsive-navbar-nav",children:[Object(v.jsx)(s.a,{className:"me-auto"}),Object(v.jsx)(s.a,{children:k&&(null===(i=k.sections)||void 0===i?void 0:i.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(v.jsx)(x,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return T(!1)},className:"navbar__link",theme:d,children:e.title},e.title):Object(v.jsx)(O,{onClick:function(){return T(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title)})))}),Object(v.jsx)(b.default,{onClick:function(){return T(!1)}})]})]})})}));n.default=g},46:function(e,n,t){"use strict";t.r(n);t(0);var o=t(79),r=t.n(o),c=t(52),i=t(1);function a(e){var n=e.onClick;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a.Consumer,{children:function(e){return Object(i.jsx)("div",{style:{marginBottom:8},children:Object(i.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}a.defaultProps={onClick:function(){}},n.default=a},49:function(e,n,t){"use strict";t.r(n);var o=t(7),r=t(0),c=t(84),i=t.n(c),a=t(64),l=t.n(a),s=t(24),u=t(50),d=t(31),f=t(1),j={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},inlineChild2:{display:"inline-block","font-weight":"bold"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){var e=Object(r.useState)(null),n=Object(o.a)(e,2),t=n[0],c=n[1];return Object(r.useEffect)((function(){fetch(s.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return e}))}),[]),t?Object(f.jsx)(l.a,{children:Object(f.jsxs)("div",{style:j.mainContainer,children:[Object(f.jsx)("h1",{style:j.nameStyle,children:null===t||void 0===t?void 0:t.name}),Object(f.jsxs)("div",{style:{flexDirection:"row"},children:[Object(f.jsx)("h2",{style:j.inlineChild,children:"I'm\xa0a\xa0"}),Object(f.jsx)("h2",{style:j.inlineChild2,children:"Cloud\xa0"}),Object(f.jsx)(i.a,{options:{loop:!0,autoStart:!0,strings:null===t||void 0===t?void 0:t.roles}})]}),Object(f.jsx)(u.default,{})]})}):Object(f.jsx)(d.default,{})}},50:function(e,n,t){"use strict";t.r(n);var o=t(7),r=t(0),c=t(85),i=t(20),a=t(24),l=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(r.useContext)(i.a),n=Object(r.useState)(null),t=Object(o.a)(n,2),u=t[0],d=t[1];return Object(r.useEffect)((function(){fetch(a.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return e}))}),[]),Object(l.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(l.jsx)(c.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},52:function(e,n,t){"use strict";var o=t(0),r=t.n(o).a.createContext();n.a=r},90:function(e,n,t){}},[[137,11,12]]]);
//# sourceMappingURL=main.8b87f9e7.chunk.js.map