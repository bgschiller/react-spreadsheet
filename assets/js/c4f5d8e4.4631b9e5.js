"use strict";(self.webpackChunkreact_spreadsheet=self.webpackChunkreact_spreadsheet||[]).push([[195],{2977:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),r=a(6010),l=a(9052),s=a(8746),i=a(3092),c=a.n(i),o=a(6832),m=a(1402),u=a(399),d={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",spreadsheetContainer:"spreadsheetContainer_tmI4",features:"features_keug",featureImage:"featureImage_yA8i"};const h=[{title:"Simple",description:n.createElement(n.Fragment,null,"Straightforward API focusing on common use cases while keeping flexibility")},{title:"Performant",description:n.createElement(n.Fragment,null,"Draw and update tables with many columns and rows without virtualization")},{title:"Just Components\u2122",description:n.createElement(n.Fragment,null,"The Spreadsheet is just a component, compose it easily with other components and data")}];function p(e){let{title:t,description:a}=e;return n.createElement("div",{className:(0,r.Z)("col col--4",d.feature)},n.createElement("h3",null,t),n.createElement("p",null,a))}function f(){const e=(0,o.Z)(),{siteConfig:t={}}=e,[a,i]=n.useState((0,u.hI)(4,5)),f=n.useRef(null),E=c()(f),g=Math.floor(E.width/120);return n.useEffect((()=>{if(g){const e=a.map((e=>{const t=[...e];return t.length=g,t}));i(e)}}),[g]),n.createElement(l.Z,{title:t.title,description:"Simple, customizable yet performant spreadsheet for React"},n.createElement("header",{className:(0,r.Z)("hero hero--primary",d.heroBanner)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},t.title),n.createElement("p",{className:"hero__subtitle"},t.tagline),n.createElement("div",{className:d.buttons},n.createElement(s.Z,{className:(0,r.Z)("button button--outline button--secondary button--lg",d.getStarted),to:(0,m.Z)("docs/")},"Get Started")),n.createElement("div",{ref:f,className:d.spreadsheetContainer},n.createElement(u.ZP,{data:a,onChange:i})))),n.createElement("main",null,h&&h.length>0&&n.createElement("section",{className:d.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},h.map((e=>{let{title:t,imageUrl:a,description:r}=e;return n.createElement(p,{key:t,title:t,imageUrl:a,description:r})})))))))}}}]);