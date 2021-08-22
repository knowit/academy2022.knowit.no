(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{165:function(e,t,n){"use strict";n.r(t);n(185),n(93);var a=n(0),r=n.n(a),o=n(169),i=n(166),l=n(167),c=i.a.section.withConfig({displayName:"AboutAcademy__AboutSection",componentId:"sc-1k7w69o-0"})(["margin-top:0;margin-left:auto;margin-right:auto;background-color:white;hyphens:auto;h2{color:",";}p{line-height:1.4;}p:first-child{margin-top:0;}p:last-child{margin-bottom:0;}"],l.a.knowit.green[0]),m=function(e){var t=e.content;return r.a.createElement(c,{id:"about"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))},d=(n(162),function(e){var t=e.pages;console.log("The Programs:",t);var n=t.map(function(e){return r.a.createElement("li",{key:e.path},r.a.createElement("a",{href:e.path},r.a.createElement("div",null,r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.description))))});return r.a.createElement("section",{id:"theprograms"},r.a.createElement("h2",null,"Programmer for 2019/2020"),r.a.createElement("nav",null,r.a.createElement("ul",null,n)))});n.d(t,"query",function(){return s});var u=i.a.h2.withConfig({displayName:"pages__SignUpTitle",componentId:"ncnhtm-0"})(["color:",";"],l.a.knowit.purple[0]),g=i.a.p.withConfig({displayName:"pages__SignUpButton",componentId:"ncnhtm-1"})(["text-align:center;a{display:inline-block;text-decoration:none;background-color:",";height:24px;padding:16px 16px;color:white;border-radius:4px;width:320px;vertical-align:middle;box-shadow:0px 2px 6px rgba(0,0,0,0.24);}"],l.a.knowit.green[1]),p=function(){return r.a.createElement("section",{id:"signup"},r.a.createElement(u,null,"Påmelding"),r.a.createElement("p",null,"Påmelding er planlagt å starte i midten av august, med"," ",r.a.createElement("b",null,"søknadsfrist 31. august, 2019"),"."),r.a.createElement("p",null,"Mer informasjon om dette vil bli sendt ut rett over sommeren."),r.a.createElement(g,null,r.a.createElement("a",{href:"how-to-apply",alt:"Information about how to apply"},"Hvordan søke")))},s=(t.default=function(e){var t=e.data,n=t.site.siteMetadata,a=t.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.path.match(/^\/programs/)}).map(function(e){return e.node.frontmatter}),i=t.allMarkdownRemark.edges.find(function(e){return"/about"===e.node.frontmatter.path}).node;return r.a.createElement(o.a,{data:n},r.a.createElement(m,{content:i}),r.a.createElement(d,{pages:a}),r.a.createElement(p,null))},"1229799418")},167:function(e,t,n){"use strict";t.a={knowit:{green:["rgb(0, 89, 79)","rgb(0, 150, 130)","rgb(160, 209, 202)","rgb(201, 226, 224)"],purple:["rgb(97, 75, 121)","rgb(142, 127, 174)","rgb(182, 184, 220)","rgb(222, 225, 236)"],blue:["rgb(40, 51, 74)","rgb(87, 114, 139)","rgb(158, 181, 203)","rgb(214, 225, 236)"],yellow:["rgb(207, 176, 35)","rgb(249, 226, 103)","rgb(242, 240, 161)","rgb(238, 238, 200)"],red:["rgb(194, 110, 96)","rgb(234, 167, 148)","rgb(236, 195, 178)","rgb(243, 233, 226)"],gray:["rgb(117, 120, 123)","rgb(177, 179, 179)","rgb(208, 208, 206)","rgb(228, 226, 219)"]}}},168:function(e){e.exports={a:"0.4.5"}},169:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(166),i=n(170),l=n.n(i),c=function(e){var t=e.metadata;return r.a.createElement(l.a,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.description}),r.a.createElement("meta",{name:"keywords",content:"Knowit, Knowit Academy, Knowit Academy Norway, Recruitment, Personal Development, Career Path"}),r.a.createElement("meta",{property:"og:title",content:t.title}),r.a.createElement("meta",{property:"og:description",content:t.description}),r.a.createElement("meta",{property:"og:url",content:t.siteUrl}),r.a.createElement("meta",{property:"og:image",content:t.ogImage}),r.a.createElement("link",{rel:"canonical",href:"https://academy.knowit.no/"}),r.a.createElement("html",{lang:"nb"}))},m=n(167),d=n(8),u=n.n(d),g=o.a.img.withConfig({displayName:"AcademyLogo__StyledLogo",componentId:"sc-1acwjxy-0"})(["width:90%;height:auto;max-width:800px;display:flex;object-fit:scale-down;margin:1.4em auto;@media (max-height:480px){height:auto;width:calc(60 * 2.8px);margin:4px 20px 4px auto;}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return r.a.createElement(g,{alt:"Knowit Academy Logo",src:"/assets/knowit_academy_logo.png"})},t}(r.a.Component),s=o.a.a.withConfig({displayName:"AcademyLogoBanner__LogoBanner",componentId:"ia4l3o-0"})(["width:100%;background-color:",";max-height:50vh;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;@media (max-height:480px){background-color:",";height:72px;min-height:72px;width:100%;margin:0px;flex-direction:row;justify-content:flex-end;}"],m.a.knowit.green[1],m.a.knowit.green[1]),f=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return r.a.createElement(s,{href:"/"},r.a.createElement(p,null))},t}(r.a.Component),h=o.a.header.withConfig({displayName:"AcademyFrontHeader__FrontHeader",componentId:"cew7tx-0"})(["width:100%;background-color:",";margin:0;padding:0;display:block;"],m.a.knowit.green[0]),w=o.a.nav.withConfig({displayName:"AcademyFrontHeader__AcademyFrontMenu",componentId:"cew7tx-1"})(["max-width:960px;padding:0 1.4rem;margin:auto;ul{padding:0;margin:0;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;overflow:hidden;}li{list-style:none;padding:0.6rem 0.2rem;margin:0 3rem 0 0rem;font-weight:600;color:white;display:inline-block;white-space:nowrap;border-top:0.4rem solid ",";border-bottom:0.4rem solid ",";}li:hover{border-bottom:0.4rem solid ",";}li a{text-decoration:inherit;color:inherit;}"],m.a.knowit.green[0],m.a.knowit.green[0],m.a.knowit.green[2]),y=function(){return r.a.createElement(h,null,r.a.createElement(f,null),r.a.createElement(w,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/#about"},"Om Knowit Academy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#theprograms"},"Programmene")),r.a.createElement("li",null,r.a.createElement("a",{href:"/how-to-apply"},"Påmelding")))))},b=n(168),x=n(158),E=n.n(x),v=function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",{className:E.a.version},"Dette er versjon ",b.a," av websidene."))},k=o.a.div.withConfig({displayName:"AcademyFooter__Wrapper",componentId:"vya30l-0"})(["display:flex;flex-grow:1;justify-content:center;width:100%;padding:0;margin:0 auto;background-color:",";border-top:1px solid ",";"],m.a.knowit.green[3],m.a.knowit.green[1]),_=o.a.footer.withConfig({displayName:"AcademyFooter__Footer",componentId:"vya30l-1"})(["display:flex;padding:12px 1.4rem;align-items:center;max-width:960px;width:960px;& > *:not(:first-child){margin-left:0.8rem;}div{display:inline-block;font-size:calc(0.2em + 0.6em);font-weight:200;color:black;}img{width:auto;height:56px;}a{color:",";font-weight:600;text-decoration:none;}a:hover{text-decoration:underline;}"],m.a.knowit.green[0]),A=function(){return r.a.createElement(k,null,r.a.createElement(_,null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"/assets/knowit_academy_box_logo.png",alt:"Knowit Academy Logo"})),r.a.createElement("div",null,"Har du spørsmål om Knowit Academy? Send en epost til"," ",r.a.createElement("a",{href:"mailto:academy@knowit.no"},"academy@knowit.no")," så svarer vi så snart vi rekker.",r.a.createElement(v,null))))},C=o.a.div.withConfig({displayName:"FrontLayout__FrontPage",componentId:"sc-10ptwgi-0"})(["height:100%;background-color:white;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;main{flex-grow:1;display:flex;justify-content:flex-start;flex-direction:column;margin:0;}"]);t.a=function(e){var t=e.children,n=e.data;return r.a.createElement(C,null,r.a.createElement(c,{metadata:n}),r.a.createElement(y,null),r.a.createElement("main",null,t),r.a.createElement(A,null))}},185:function(e,t,n){"use strict";var a=n(9),r=n(186)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),a(a.P+a.F*o,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(65)("find")},186:function(e,t,n){var a=n(19),r=n(64),o=n(31),i=n(17),l=n(187);e.exports=function(e,t){var n=1==e,c=2==e,m=3==e,d=4==e,u=6==e,g=5==e||u,p=t||l;return function(t,l,s){for(var f,h,w=o(t),y=r(w),b=a(l,s,3),x=i(y.length),E=0,v=n?p(t,x):c?p(t,0):void 0;x>E;E++)if((g||E in y)&&(h=b(f=y[E],E,w),e))if(n)v[E]=h;else if(h)switch(e){case 3:return!0;case 5:return f;case 6:return E;case 2:v.push(f)}else if(d)return!1;return u?-1:m||d?d:v}}},187:function(e,t,n){var a=n(188);e.exports=function(e,t){return new(a(e))(t)}},188:function(e,t,n){var a=n(7),r=n(94),o=n(3)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),a(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}}}]);
//# sourceMappingURL=component---src-pages-index-js-4b26ecf88988b1ee334c.js.map