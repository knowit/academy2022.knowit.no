(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});a(94),a(181);var n=a(0),r=a.n(n),o=a(176),l=a(177),i=a(163),m=a.n(i);t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.path.match(/^\/courses\/team-lead/)}).map(function(e){return e.node.frontmatter.date=new Date(e.node.frontmatter.date),e}).sort(function(e,t){return e.node.frontmatter.date>t.node.frontmatter.date?1:-1}).map(function(e){return r.a.createElement("tr",{key:e.node.frontmatter.path},r.a.createElement("td",{className:"title"},e.node.frontmatter.title),r.a.createElement("td",{className:"teacher"},e.node.frontmatter.teacher),r.a.createElement("td",{className:"date"},e.node.frontmatter.date.toLocaleDateString("no")),r.a.createElement("td",{className:m.a.info},r.a.createElement("a",{href:e.node.frontmatter.path},"info")))}),n=t.site.siteMetadata;return n.title="Team-Lead programmet 2019/2020",n.description="\n    Team-Lead programmet i Knowit Academy starter i september 2019 og varer \n    fram til sommeren 2020. Her finner du mer informasjon om programmet, \n    hvilke kurs og workshops som er med, og informasjons om hvordan du søker\n  ",n.siteUrl="https://academy.knowit.no/programs/team-lead/",console.log("data",t),console.log("courses",a),r.a.createElement(o.a,{data:t.site.siteMetadata},r.a.createElement("section",{id:"main"},r.a.createElement(l.a,{title:"Team-Lead programmet 2019/2020",updated:"2019-06-19",author:"Jan Henrik Gundelsby",email:"academy.knowit.no"}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Tema"),r.a.createElement("td",null,"Foredragsholder"),r.a.createElement("td",null,"Dato"),r.a.createElement("td",null,"Om kurset"))),r.a.createElement("tbody",null,a))))};var c="2099225012"},174:function(e,t,a){"use strict";t.a={knowit:{green:["rgb(0, 89, 79)","rgb(0, 150, 130)","rgb(160, 209, 202)","rgb(201, 226, 224)"],purple:["rgb(97, 75, 121)","rgb(142, 127, 174)","rgb(182, 184, 220)","rgb(222, 225, 236)"],blue:["rgb(40, 51, 74)","rgb(87, 114, 139)","rgb(158, 181, 203)","rgb(214, 225, 236)"],yellow:["rgb(207, 176, 35)","rgb(249, 226, 103)","rgb(242, 240, 161)","rgb(238, 238, 200)"],red:["rgb(194, 110, 96)","rgb(234, 167, 148)","rgb(236, 195, 178)","rgb(243, 233, 226)"],gray:["rgb(117, 120, 123)","rgb(177, 179, 179)","rgb(208, 208, 206)","rgb(228, 226, 219)"]}}},175:function(e){e.exports={a:"0.6.0"}},176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(173),l=a(178),i=a.n(l),m=function(e){var t=e.metadata;return r.a.createElement(i.a,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.description}),r.a.createElement("meta",{name:"keywords",content:"Knowit, Knowit Academy, Knowit Academy Norway, Recruitment, Personal Development, Career Path"}),r.a.createElement("meta",{property:"og:title",content:t.title}),r.a.createElement("meta",{property:"og:description",content:t.description}),r.a.createElement("meta",{property:"og:url",content:t.siteUrl}),r.a.createElement("meta",{property:"og:image",content:t.ogImage}),r.a.createElement("link",{rel:"canonical",href:"https://academy.knowit.no/"}),r.a.createElement("html",{lang:"nb"}))},c=a(8),d=a.n(c),s=a(159),u=a.n(s),g=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return r.a.createElement("a",{className:u.a.logoWrapper,href:"/"},r.a.createElement("img",{className:u.a.logoStyle,alt:"Knowit Academy Logo",src:"/assets/knowit_academy_logo.png"}))},t}(n.Component),f=a(160),p=a.n(f),E=function(){return r.a.createElement("header",{className:p.a.academyFrontHeader},r.a.createElement(g,null),r.a.createElement("nav",{className:p.a.academyHeaderMenu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/#about"},"Om Knowit Academy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#theprograms"},"Programmene")),r.a.createElement("li",null,r.a.createElement("a",{href:"/how-to-apply"},"Påmelding")))))},h=a(174),y=a(175),w=a(161),b=a.n(w),k=function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",{className:b.a.version},"v",y.a))},v=o.a.div.withConfig({displayName:"AcademyFooter__Wrapper",componentId:"vya30l-0"})(["display:flex;flex-grow:1;justify-content:center;width:100%;padding:0;margin:0 auto;background-color:",";border-top:1px solid ",";"],h.a.knowit.green[3],h.a.knowit.green[1]),x=o.a.footer.withConfig({displayName:"AcademyFooter__Footer",componentId:"vya30l-1"})(["display:flex;padding:12px 1.4rem;align-items:center;max-width:960px;width:960px;& > *:not(:first-child){margin-left:0.8rem;}div{display:inline-block;font-size:calc(0.2em + 0.6em);font-weight:200;color:black;}img{width:auto;height:56px;}a{color:",";font-weight:600;text-decoration:none;}a:hover{text-decoration:underline;}"],h.a.knowit.green[0]),N=function(){return r.a.createElement(v,null,r.a.createElement(x,null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"/assets/knowit_academy_box_logo.png",alt:"Knowit Academy Logo"})),r.a.createElement("div",null,"Har du spørsmål om Knowit Academy? Send en epost til"," ",r.a.createElement("a",{href:"mailto:academy@knowit.no"},"academy@knowit.no")," så svarer vi så snart vi rekker.",r.a.createElement(k,null))))},_=o.a.div.withConfig({displayName:"FrontLayout__FrontPage",componentId:"sc-10ptwgi-0"})(["height:100%;background-color:white;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;main{flex-grow:1;display:flex;justify-content:flex-start;flex-direction:column;margin:0;}"]);t.a=function(e){var t=e.children,a=e.data;return r.a.createElement(_,null,r.a.createElement(m,{metadata:a}),r.a.createElement(E,{data:a}),r.a.createElement("main",null,t),r.a.createElement(N,null))}},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(162),l=a.n(o),i=a(179),m=a.n(i);a(180);m.a.locale("nb");t.a=function(e){var t=e.title,a=e.author,n=e.email,o=e.updated,i=function(e){return null===e?"mailto:academy@knowit.no":"mailto:"+e}(n),c=m()(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t),r.a.createElement("div",{className:l.a.byline},"Sist oppdatert ",c.format("LL")," av ",r.a.createElement("a",{href:i},a)))}},181:function(e,t,a){"use strict";var n=a(9),r=a(32),o=a(31),l=a(12),i=[].sort,m=[1,2,3];n(n.P+n.F*(l(function(){m.sort(void 0)})||!l(function(){m.sort(null)})||!a(182)(i)),"Array",{sort:function(e){return void 0===e?i.call(o(this)):i.call(o(this),r(e))}})},182:function(e,t,a){"use strict";var n=a(12);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-programs-team-lead-index-js-d46575a77b0e6158679b.js.map