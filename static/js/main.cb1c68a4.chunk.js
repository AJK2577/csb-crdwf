(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o(8),i=o.n(c),r=o(7),l=o(4),d=o(6),a=(o(13),o(0)),s=function(e){var t=e.value,o=e.idx,n=e.onCompleteToDo,c=e.removeToDoItem;return Object(a.jsxs)("li",{style:{textAlign:"left",margin:15,backgroundColor:t.isCompleted?"#5ae31982":"#e3251982"},children:[t.todo,Object(a.jsx)("button",{onClick:function(){return n(o)},children:t.isCompleted?"uncomplete task":"complete task"}),Object(a.jsx)("button",{onClick:function(){return c(o)},children:"remove to do item"})]})};function j(){var e=Object(n.useState)({todo:"",isCompleted:!1}),t=Object(d.a)(e,2),o=t[0],c=t[1],i=Object(n.useState)([]),j=Object(d.a)(i,2),u=j[0],p=j[1];return addToDo=function(){o.todo&&(p([].concat(Object(l.a)(u),[o])),c({todo:"",isCompleted:!1}))},onCompleteToDo=function(e){var t=u[e],o=Object(l.a)(u),n=Object(r.a)(Object(r.a)({},t),{},{isCompleted:!t.isCompleted});o[e]=n,p(o)},removeToDoItem=function(e){var t=Object(l.a)(u);t.splice(e,1),p(t)},Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{style:{textDecoration:"underline"},children:" WELCOME"}),Object(a.jsx)("h2",{style:{textDecoration:"underline"},children:" TO DO LIST"}),Object(a.jsx)("p",{style:{textDecoration:"underline"},children:"This App will keep record of the tasks"}),Object(a.jsx)("p",{children:" Try once"}),Object(a.jsx)("input",{className:"inputField",type:"text",value:o.todo,placeholder:"add to do item",onChange:function(e){return c({todo:e.target.value,isCompleted:!1})}}),Object(a.jsx)("button",{onClick:addToDo,children:"add To Do"}),Object(a.jsx)("ul",{children:u.length>0&&u.map((function(e,t){return Object(a.jsx)(s,{value:e,idx:t,onCompleteToDo:onCompleteToDo,removeToDoItem:removeToDoItem},e.todo+t)}))})]})}var u=document.getElementById("root");i.a.render(Object(a.jsx)(n.StrictMode,{children:Object(a.jsx)(j,{})}),u)}},[[15,1,2]]]);
//# sourceMappingURL=main.cb1c68a4.chunk.js.map