(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(24),n=c(6),r=(c(34),c(35),c(36),c(3)),s=c(4),l=c(8),i=c.n(l),j=c(1),o=function(){var e=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},t=Object(n.d)(),c=Object(s.a)(t,1)[0].toString();return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(n.c,{className:e,to:"/",children:"Home"}),Object(j.jsx)(n.c,{className:e,to:"/people?".concat(c),children:"People"})]})})})},d=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(r.b,{})})})]})},b=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},u=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},O=c(0),h=c.n(O);function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(e){return e.Female="f",e.Male="m",e}({}),p=function(e){return e.Sex="sex",e.Query="query",e.Centuries="centuries",e.Sort="sort",e.Order="order",e}({}),f=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),v=h.a.createContext({}),N=function(e){var t=e.children,c=Object(O.useState)([]),a=Object(s.a)(c,2),r=a[0],l=a[1],i=Object(n.d)(),o=Object(s.a)(i,1)[0],d=o.get(p.Sex)||"",b=o.get(p.Query)||"",u=o.getAll(p.Centuries)||[],h=o.get(p.Sort)||"",x=o.get(p.Order)||"",m=Object(O.useMemo)((function(){var e=r.filter((function(e){var t=!0;if(d&&(t=t&&e.sex===d),b){var c,a,n=b.toLowerCase();t=t&&(e.name.toLowerCase().includes(n)||(null===(c=e.motherName)||void 0===c?void 0:c.toLowerCase().includes(n))||(null===(a=e.fatherName)||void 0===a?void 0:a.toLowerCase().includes(n))||!1)}return u.length&&(t=t&&u.includes("".concat(Math.ceil(e.born/100)))),t}));return h&&e.sort((function(e,t){switch(h){case f.Name:return e.name.localeCompare(t.name);case f.Sex:return e.sex.localeCompare(t.sex);case f.Born:return e.born-t.born;case f.Died:return e.died-t.died;default:return 0}})),x&&e.reverse(),e}),[r,d,b,u,h,x]);return Object(j.jsx)(v.Provider,{value:{people:r,setPeople:l,visiblePeople:m},children:t})},g=c(13);c(38);var y=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},S=c(7),w=c(5),C=["16","17","18","19","20"];function P(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];null===n?c.delete(a):Array.isArray(n)?(c.delete(a),n.forEach((function(e){c.append(a,e)}))):c.set(a,n)})),c.toString()}var F=c(25),k=["children","params"],L=function(e){var t=e.children,c=e.params,a=Object(F.a)(e,k),r=Object(n.d)(),l=Object(s.a)(r,1)[0];return Object(j.jsx)(n.b,Object(g.a)(Object(g.a)({to:{search:P(l,c)}},a),{},{children:t}))},A=function(){var e,t=Object(n.d)(),c=Object(s.a)(t,2),a=c[0],r=c[1],l=a.get(p.Sex)||"",o=a.get(p.Query)||"",d=a.getAll(p.Centuries)||[];return Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(j.jsx)(L,{className:i()({"is-active":!l}),params:Object(w.a)({},p.Sex,null),children:"All"}),Object(j.jsx)(L,{className:i()({"is-active":l===m.Male}),params:Object(w.a)({},p.Sex,m.Male),children:"Male"}),Object(j.jsx)(L,{className:i()({"is-active":l===m.Female}),params:Object(w.a)({},p.Sex,m.Female),children:"Female"})]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left",children:[Object(j.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:o,onChange:function(e){r(P(a,Object(w.a)({},p.Query,e.target.value||null)))}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(j.jsx)("div",{className:"level-left",children:C.map((function(e){return Object(j.jsx)(L,{"data-cy":"century",className:i()("button","mr-1",{"is-info":d.includes(e)}),params:Object(w.a)({},p.Centuries,(t=e,d.includes(t)?d.filter((function(e){return t!==e})):[].concat(Object(S.a)(d),[t]))),children:e},e);var t}))}),Object(j.jsx)("div",{className:"level-right ml-4",children:Object(j.jsx)(L,{"data-cy":"centuryALL",className:i()("button","is-success",{"is-outlined":d.length}),params:Object(w.a)({},p.Centuries,[]),children:"All"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)(L,{className:"button is-link is-outlined is-fullwidth",params:(e={},Object(w.a)(e,p.Centuries,[]),Object(w.a)(e,p.Sex,null),Object(w.a)(e,p.Query,null),e),children:"Reset all filters"})})]})},M=function(e){var t=e.person,c=t.slug,a=t.sex,r=t.name,l=Object(n.d)(),o=Object(s.a)(l,1)[0].toString();return Object(j.jsx)(n.b,{to:"".concat(c,"?").concat(o),className:i()({"has-text-danger":a===m.Female}),children:r})},E=function(e){var t=e.person,c=e.selectedSlug,a=t.born,n=t.died,r=t.fatherName,s=t.motherName,l=t.sex,o=t.father,d=t.mother,b=t.slug;return Object(j.jsxs)("tr",{className:i()({"has-background-warning":c===b}),"data-cy":"person",children:[Object(j.jsx)("td",{children:Object(j.jsx)(M,{person:t})}),Object(j.jsx)("td",{children:l}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:d?Object(j.jsx)(M,{person:d}):s||"-"}),Object(j.jsx)("td",{children:o?Object(j.jsx)(M,{person:o}):r||"-"})]})},Q=function(){var e=Object(O.useContext)(v).visiblePeople,t=Object(r.r)().personId,c=void 0===t?"":t,a=Object(n.d)(),l=Object(s.a)(a,1)[0],o=l.get(p.Sort)||"",d=l.get(p.Order)||"",b=function(e){var t,c;return o!==e?(c={},Object(w.a)(c,p.Sort,e),Object(w.a)(c,p.Order,null),c):o!==e||d?(t={},Object(w.a)(t,p.Sort,null),Object(w.a)(t,p.Order,null),t):Object(w.a)({},p.Order,"desc")};return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object.entries(f).map((function(e){var t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[c,Object(j.jsx)(L,{params:b(a),children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:i()("fas",{"fa-sort":o!==a,"fa-sort-up":o===a&&!d,"fa-sort-down":o===a&&d})})})})]})},c)})),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:e.map((function(e){return Object(j.jsx)(E,{person:e,selectedSlug:c},e.slug)}))})]})},_=function(){var e=Object(O.useContext)(v),t=e.people,c=e.setPeople,a=e.visiblePeople,n=Object(O.useState)(!1),r=Object(s.a)(n,2),l=r[0],i=r[1],o=Object(O.useState)(!1),d=Object(s.a)(o,2),b=d[0],u=d[1];Object(O.useEffect)((function(){i(!0),x().then((function(e){c(function(e){return e.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))}(e))})).catch((function(){u(!0)})).finally((function(){i(!1)}))}),[]);var h=!l&&!b,m=b&&!l,p=!t.length&&h,f=!!t.length&&!a.length&&h,N=!!a.length&&h;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[!l&&Object(j.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(j.jsx)(A,{})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"box table-container",children:[l&&Object(j.jsx)(y,{}),m&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),p&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),f&&Object(j.jsx)("p",{children:"There are no people matching the current search criteria"}),N&&Object(j.jsx)(Q,{})]})})]})})]})},T=function(){return Object(j.jsx)("div",{"data-cy":"app",children:Object(j.jsx)(r.e,{children:Object(j.jsxs)(r.c,{path:"/",element:Object(j.jsx)(d,{}),children:[Object(j.jsx)(r.c,{index:!0,element:Object(j.jsx)(b,{})}),Object(j.jsx)(r.c,{path:"home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.c,{path:"people",element:Object(j.jsx)(_,{}),children:Object(j.jsx)(r.c,{path:":personId"})}),Object(j.jsx)(r.c,{path:"*",element:Object(j.jsx)(u,{})})]})})})};Object(a.createRoot)(document.getElementById("root")).render(Object(j.jsx)(n.a,{children:Object(j.jsx)(N,{children:Object(j.jsx)(T,{})})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.c7dbce2e.chunk.js.map