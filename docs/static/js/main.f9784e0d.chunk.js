(this["webpackJsonpluke-apiwalker"]=this["webpackJsonpluke-apiwalker"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/obi.3361875b.png"},20:function(e,t,a){e.exports=a(51)},25:function(e,t,a){},32:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),o=(a(25),a(6)),m=a(2),u=a(3),s=(a(32),a(5)),i=a.n(s),p=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],c=(a[1],Object(n.useState)()),o=Object(m.a)(c,2),s=o[0],p=(o[1],Object(n.useState)({})),E=Object(m.a)(p,2),h=E[0],d=E[1];Object(n.useEffect)((function(){g(),e.setsearchtype(e.type),e.setsearchID(e.ID)}),[e.type,e.ID]);var g=function(){i.a.get("https://swapi.dev/api/".concat(e.type,"/").concat(e.ID,"/")).then((function(e){console.log(r),console.log(s),d(e.data)})).catch((function(e){Object(u.b)("/error")}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-center mt-4"},"people"===e.type?l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,h.name),l.a.createElement("p",null,"Gender: ",h.gender),l.a.createElement("p",null,"Birth Year: ",h.birth_year),l.a.createElement("p",null,"Height: ",h.height," cm"),l.a.createElement("p",null,"Weight: ",h.mass," kg"),l.a.createElement("p",null,"Eye Color: ",h.eye_color)):"","planets"===e.type?l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,h.name),l.a.createElement("p",null,"Climate: ",h.climate),l.a.createElement("p",null,"Diameter: ",h.diameter),l.a.createElement("p",null,"Terrain: ",h.terrain),l.a.createElement("p",null,"Population: ",h.population)):"","starships"===e.type?l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,h.name),l.a.createElement("p",null,"Model: ",h.model),l.a.createElement("p",null,"Manufacturer: ",h.manufacturer),l.a.createElement("p",null,"Length: ",h.length),l.a.createElement("p",null,"Crew: ",h.crew),l.a.createElement("p",null,"Passengers: ",h.passengers)):""))},E=a(19),h=a.n(E),d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-center text-danger mt-4"},l.a.createElement("h6",null,"ERROR: These aren't the droids you're looking for!"),l.a.createElement("div",{className:"mt-4"},l.a.createElement("img",{src:h.a,width:"270px",alt:"error"}))))};var g=function(){var e,t=Object(n.useState)(),a=Object(m.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(),i=Object(m.a)(s,2),E=i[0],h=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-full-bg"},l.a.createElement("div",{className:"jumbotron lead"},"Your Go-To Star Wars API ")),l.a.createElement("div",{className:"text-center"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Object(u.b)("/".concat(r,"/").concat(E))}},l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("p",{className:"text-muted"},"Search for:"),l.a.createElement("select",{className:"dropdown col-md-1 text-center",value:r,onChange:function(e){return c(e.target.value)}},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"planets"},"Planets"),l.a.createElement("option",{value:"people"},"People"),l.a.createElement("option",{value:"starships"},"Starships"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",{className:"text-muted"},"Enter ID:"),l.a.createElement("input",(e={type:"text",className:"form-group col-md-2 text-center",onChange:function(e){return h(e.target.value)}},Object(o.a)(e,"type","number"),Object(o.a)(e,"value",E),e))),l.a.createElement("input",{type:"submit",value:"Search the Galaxy",className:"btn btn-secondary"}))),l.a.createElement(u.a,null,l.a.createElement(p,{path:"/:type/:ID",setsearchtype:c,setsearchID:h}),l.a.createElement(d,{path:"/error"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f9784e0d.chunk.js.map