(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.1090473d.svg"},function(e,t,a){e.exports=a.p+"static/media/phone.58d7e3d6.svg"},function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),u=(a(12),a(5)),s=a.n(u),o=a(1),i=a(2),m=[{page:"products",links:[{label:"payment",icon:l.a.createElement(o.d,null),url:"/products"},{label:"terminal",icon:l.a.createElement(o.d,null),url:"/products"},{label:"connect",icon:l.a.createElement(o.d,null),url:"/products"}]},{page:"developers",links:[{label:"plugins",icon:l.a.createElement(o.b,null),url:"/products"},{label:"libraries",icon:l.a.createElement(o.b,null),url:"/products"},{label:"help",icon:l.a.createElement(o.b,null),url:"/products"},{label:"billing",icon:l.a.createElement(o.b,null),url:"/products"}]},{page:"company",links:[{label:"about",icon:l.a.createElement(o.c,null),url:"/products"},{label:"customers",icon:l.a.createElement(o.c,null),url:"/products"}]}],b=l.a.createContext(),p=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],u=c[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),p=o[0],d=o[1],E=Object(n.useState)({}),v=Object(i.a)(E,2),f=v[0],g=v[1],h=Object(n.useState)({page:"",links:[]}),N=Object(i.a)(h,2),O=N[0],S=N[1];return l.a.createElement(b.Provider,{value:{openSidebar:function(){u(!0)},closeSidebar:function(){u(!1)},openSubmenu:function(e,t){var a=m.find((function(t){return t.page===e}));S(a),g(t),d(!0)},closeSubmenu:function(){d(!1)},isSubmenuOpen:p,isSidebarOpen:r,location:f,page:O}},t)},d=function(){return Object(n.useContext)(b)},E=function(){var e=d(),t=e.openSidebar,a=e.openSubmenu,n=e.closeSubmenu,c=function(e){var t=e.target.textContent,n=e.target.getBoundingClientRect(),l=(n.left+n.right)/2,c=n.bottom-3;a(t,{center:l,bottom:c})};return l.a.createElement("div",{className:"nav",onMouseOver:function(e){e.target.classList.contains("link-btn")||n()}},l.a.createElement("div",{className:"nav-center"},l.a.createElement("div",{className:"nav-header"},l.a.createElement("img",{src:s.a,alt:"stripe",className:"nav-logo"}),l.a.createElement("button",{className:"btn toggle-btn",onClick:t},l.a.createElement(o.a,null))),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:c},"products")),l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:c},"developers")),l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:c},"company"))),l.a.createElement("button",{className:"btn signin-btn"},"Sign In")))},v=a(6),f=a.n(v),g=function(){var e=d().closeSubmenu;return l.a.createElement("section",{className:"hero",onMouseOver:e},l.a.createElement("div",{className:"hero-center"},l.a.createElement("article",{className:"hero-info"},l.a.createElement("h1",null,"Payments Infrastructure for the Internet"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus iure ipsam saepe doloremque pariatur neque blanditiis nisi nesciunt illum."),l.a.createElement("button",{className:"btn"},"Start Now")),l.a.createElement("article",{className:"hero-images"},l.a.createElement("img",{src:f.a,className:"phone-img",alt:"phone"}))))},h=function(){var e=d(),t=e.isSidebarOpen,a=e.closeSidebar;return l.a.createElement("aside",{className:"".concat(t?"sidebar-wrapper show":"sidebar-wrapper")},l.a.createElement("div",{className:"sidebar"},l.a.createElement("button",{className:"close-btn",onClick:a},l.a.createElement(o.e,null)),l.a.createElement("div",{className:"sidebar-links"},m.map((function(e,t){var a=e.links,n=e.page;return l.a.createElement("article",{key:t},l.a.createElement("h4",null,n),l.a.createElement("div",{className:"sidebar-sublinks"},a.map((function(e,t){var a=e.url,n=e.icon,c=e.label;return l.a.createElement("a",{href:a,key:t},n,c)}))))})))))},N=function(){var e=d(),t=e.isSubmenuOpen,a=e.location,c=e.page,r=c.page,u=c.links,s=Object(n.useRef)(null),o=Object(n.useState)("col-2"),m=Object(i.a)(o,2),b=m[0],p=m[1];return Object(n.useEffect)((function(){p("col-2");var e=s.current,t=a.center,n=a.bottom;e.style.left="".concat(t,"px"),e.style.top="".concat(n,"px"),3===u.length&&p("col-3"),u.length>3&&p("col-4")}),[a,u]),l.a.createElement("aside",{className:"".concat(t?"submenu show":"submenu"),ref:s},l.a.createElement("h4",null,r),l.a.createElement("div",{className:"submenu-center ".concat(b)},u.map((function(e,t){var a=e.label,n=e.icon,c=e.url;return l.a.createElement("a",{href:c,key:t},n,a)}))))};var O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(g,null),l.a.createElement(N,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null,l.a.createElement(O,null))),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.9bfe9e20.chunk.js.map