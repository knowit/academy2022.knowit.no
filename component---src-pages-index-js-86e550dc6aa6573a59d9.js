(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{236:function(e,a,t){"use strict";t.r(a);t(158),t(51);var n=t(0),r=t.n(n),l=t(113),c=t(231),o=t.n(c),m=function(e){var a=e.content;return r.a.createElement("section",{id:"about",className:o.a.aboutSection},r.a.createElement("div",{className:o.a.gridContainer},r.a.createElement("div",{className:o.a.frontMedal},r.a.createElement("img",{src:"/icons/medal.svg",alt:""})),r.a.createElement("div",{className:o.a.frontContent,dangerouslySetInnerHTML:{__html:a.html}})))},i=(t(12),t(232)),s=t.n(i),u=function(e){var a=e.pages.map(function(e){var a=e.path.replace(/about-/,"");return r.a.createElement("li",{key:e.path},r.a.createElement("a",{href:a},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("img",{alt:"",src:"/icons/arrow.svg",width:"28px"})))});return r.a.createElement("section",{id:"theprograms",className:s.a.programSection},r.a.createElement("div",{className:s.a.gridContainer},r.a.createElement("div",{className:s.a.frontContent},r.a.createElement("h2",null,"Program"),r.a.createElement("nav",null,r.a.createElement("ul",null,a)))))},d=t(146);t.d(a,"query",function(){return p});a.default=function(e){var a=e.data,t=e.path;console.log("page:",t);var n=a.site.siteMetadata,c=a.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.path.match(/^\/programs\/about/)}).map(function(e){return e.node.frontmatter}),o=a.allMarkdownRemark.edges.find(function(e){return"/about"===e.node.frontmatter.path}).node;return r.a.createElement(l.a,{data:n},r.a.createElement(m,{content:o}),r.a.createElement(u,{pages:c}),r.a.createElement(d.a,null))};var p="2775765827"}}]);
//# sourceMappingURL=component---src-pages-index-js-86e550dc6aa6573a59d9.js.map