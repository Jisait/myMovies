(this.webpackJsonpmymoviz=this.webpackJsonpmymoviz||[]).push([[0],{29:function(e,t,n){},54:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(17),o=n.n(s),a=(n(54),n(49)),i=n(11),l=n.n(i),j=n(15),b=n(10),u=(n(24),n(29),n(94)),v=n(95),h=n(86),d=n(96),f=n(97),x=n(98),O=n(87),m=n(88),p=n(89),g=n(90),k=n(14),w=n(12),y=n(91),E=n(92),N=n(3);function S(e){var t={backgroundColor:"white",borderWidth:"3px",borderColor:"white"},n={color:"#E3E2E2"},r={color:"#FEBE00"},s=Object(c.useState)(!1),o=Object(b.a)(s,2),a=(o[0],o[1],Object(c.useState)(!1)),i=Object(b.a)(a,2),u=i[0],v=i[1],d=Object(c.useState)(0),f=Object(b.a)(d,2),x=f[0],S=f[1],C=Object(c.useState)(0),L=Object(b.a)(C,2),M=L[0],A=L[1],V=Object(c.useState)(!1),_=Object(b.a)(V,2),B=_[0],F=_[1],T=Object(c.useState)([]),z=Object(b.a)(T,2),W=(z[0],z[1]);Object(c.useEffect)(Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/wishlist-movie");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,W(n.movies);case 7:case"end":return e.stop()}}),e)}))),[]);1==e.booleanLike&&(t={backgroundColor:"#FEBE00",borderWidth:"3px",borderColor:"#B49E24"}),1==e.booleanLike&&(r={color:"#e74c3c"}),1==e.booleanLike&&(n={color:"white"});var P=0;!0===B&&(P=1);var D=(e.nivMoyenne*e.nbreVote+M)/(e.nbreVote+P),I=Math.round(10*D),J=e.nbreVote;!0===B&&(J=e.nbreVote+1);var q={color:"grey"};1==e.booleanLike&&(q={color:"#e74c3c"});var G={color:"#EAEAEA"};!0===u&&(G={color:"black"});for(var H=[],K=function(){R=n,Q<M&&(R=r);var e=Q+1;H.push(Object(N.jsx)(k.a,{className:"pointer",onClick:function(){return function(e){A(e),F(!0)}(e)},style:R,icon:w.b}))},Q=0;Q<10;Q++){var R;K()}var U=[];for(Q=0;Q<10;Q++)R=n,Q<D&&(R=r),U.push(Object(N.jsx)(k.a,{className:"pointer",style:R,icon:w.b}));return Object(N.jsx)(h.a,{style:{marginBottom:"24px"},sm:"12",lg:"6",xl:"4",children:Object(N.jsxs)(O.a,{style:t,children:[Object(N.jsxs)("div",{className:"position-relative",children:[Object(N.jsx)(m.a,{top:!0,width:"100%",src:e.affiche,className:"noirci"}),Object(N.jsx)("h2",{className:"resume",children:e.resume})]}),Object(N.jsxs)(p.a,{style:{paddingTop:"3px"},children:[Object(N.jsx)(g.a,{style:{color:"black",fontSize:"28px",fontWeight:"bold"},children:e.nameMovie}),Object(N.jsxs)(g.a,{children:["Like ",Object(N.jsx)(k.a,{className:"pointer",onClick:function(){e.like(e.nameMovie,e.affiche)},style:q,icon:w.a})]}),Object(N.jsxs)(g.a,{children:["Nombre de vues ",e.nbreVue," ",Object(N.jsx)(k.a,{className:"pointer",onClick:function(){return!1===u&&v(!0),void S(x+1)},style:G,icon:w.c}),"    ",Object(N.jsx)(y.a,{style:{backgroundColor:"grey"},children:x})]}),Object(N.jsxs)(g.a,{children:["Mon avis",H," "]}),Object(N.jsx)("hr",{}),Object(N.jsxs)(g.a,{children:[Object(N.jsx)(E.a,{className:"progBar",value:10*D,max:111}),Object(N.jsxs)("div",{className:"text-center",children:[I,"% d'avis positif sur ",J," avis"]})]}),Object(N.jsx)(g.a,{})]})]})})}function C(e){var t={width:"50%"},n={fontSize:"12px"},r={backgroundColor:"white",borderWidth:"3px",borderColor:"white"},s={color:"#E3E2E2"},o={color:"#FEBE00"},a=Object(c.useState)(-1),i=Object(b.a)(a,2),u=i[0],v=(i[1],Object(c.useState)(!1)),d=Object(b.a)(v,2),f=d[0],x=d[1],S=Object(c.useState)(0),C=Object(b.a)(S,2),L=C[0],M=C[1],A=Object(c.useState)(0),V=Object(b.a)(A,2),_=V[0],B=V[1],F=Object(c.useState)(!1),T=Object(b.a)(F,2),z=T[0],W=T[1],P=Object(c.useState)([]),D=Object(b.a)(P,2),I=(D[0],D[1]);Object(c.useEffect)(Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/wishlist-movie");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,I(n.movies);case 7:case"end":return e.stop()}}),e)}))),[]);1==e.booleanLike&&(r={backgroundColor:"#FEBE00",borderWidth:"3px",borderColor:"#B49E24"}),1==e.booleanLike&&(o={color:"#00086D"}),1==e.booleanLike&&(s={color:"white"});var J=0;!0===z&&(J=1);var q=(e.nivMoyenne*e.nbreVote+_)/(e.nbreVote+J),G=Math.round(10*q),H=e.nbreVote;!0===z&&(H=e.nbreVote+1);var K={color:"grey"};1==e.booleanLike&&(K={color:"#e74c3c"});var Q={color:"#EAEAEA"};-1!==u&&(Q={color:"black"});for(var R=[],U=function(){t=s,X<_&&(t=o);var e=X+1;R.push(Object(N.jsx)(k.a,{className:"pointer",onClick:function(){return function(e){B(e),W(!0)}(e)},style:t,icon:w.b}))},X=0;X<10;X++){U()}var Y=[];for(X=0;X<10;X++)t=s,X<q&&(t=o),Y.push(Object(N.jsx)(k.a,{className:"pointer",style:t,icon:w.b}));return Object(N.jsx)(h.a,{style:{marginBottom:"24px"},sm:"12",lg:"6",xl:"3",children:Object(N.jsxs)(O.a,{style:r,children:[Object(N.jsxs)("div",{className:"position-relative",children:[Object(N.jsx)(m.a,{top:!0,width:"100%",src:e.affiche,className:"noirci"}),Object(N.jsx)("h2",{className:"resume",style:{fontSize:"13px"},children:e.resume})]}),Object(N.jsxs)(p.a,{style:{paddingTop:"3px"},children:[Object(N.jsx)(g.a,{style:{color:"black",fontSize:"18px",fontWeight:"bold"},children:e.nameMovie}),Object(N.jsxs)(g.a,{style:n,children:["Like ",Object(N.jsx)(k.a,{className:"pointer",onClick:function(){e.like(e.nameMovie,e.affiche)},style:K,icon:w.a})]}),Object(N.jsxs)(g.a,{style:n,children:["Nombre de vues ",e.nbreVue," ",Object(N.jsx)(k.a,{className:"pointer",onClick:function(){return!1===f&&x(!0),void M(L+1)},style:Q,icon:w.c}),"    ",Object(N.jsx)(y.a,{style:{backgroundColor:"grey"},children:L})]}),Object(N.jsxs)(g.a,{style:n,children:["Avis",R," "]}),Object(N.jsxs)(g.a,{children:[Object(N.jsx)(E.a,{style:{marginTop:"9px",height:"7px"},value:10*q,max:111}),Object(N.jsxs)("div",{style:n,className:"text-center",children:[G,"% d'avis positif sur ",H," avis"]})]}),Object(N.jsx)(g.a,{})]})]})})}var L=n(93),M=n(99),A=n(101),V=n(100),_={width:"52px"},B={display:"flex",flexDirection:"row",alignItems:"center"},F={fontSize:"18px",fontWeight:"bold",color:"white"};var T=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),o=Object(b.a)(s,2),i=o[0],O=o[1],m=Object(c.useState)(!1),p=Object(b.a)(m,2),g=p[0],k=p[1];Object(c.useEffect)(Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/new-movies");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.moviesAPI.results);case 7:case"end":return e.stop()}}),e)}))),[]),Object(c.useEffect)(Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/wishlist-movie");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n.movies);case 7:case"end":return e.stop()}}),e)}))),[]);var w=n.map((function(e,t){return e}));w.sort((function(e,t){return t.vote_average-e.vote_average}));var y=[],E=[];y=w.filter((function(e,t){return t<3})),E=w.filter((function(e,t){return t>3}));var T=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==(c=i.map((function(e,t){return e.Nom}))).indexOf(t)){e.next=7;break}return O([].concat(Object(a.a)(i),[{Nom:t,img:n}])),e.next=5,fetch("/wishlist-movie",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"name="+t+"&img="+n});case 5:e.next=11;break;case 7:if(-1===c.indexOf(t)){e.next=11;break}return O(i.filter((function(e){return e.Nom!==t}))),e.next=11,fetch("/wishlist-movie/"+t,{method:"DELETE"});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(i.filter((function(e){return e.name!==t}))),e.next=3,fetch("/wishlist-movie/"+t,{method:"DELETE"});case 3:return e.next=5,fetch("/wishlist-movie");case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,O(c.movies);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=i.map((function(e,t){return Object(N.jsxs)(L.a,{className:"wishList",onClick:function(){return z(e.Nom)},children:[Object(N.jsx)("img",{className:"wishListImage",src:e.img}),e.Nom]})})),P=y.map((function(e,t){var n=!1;return void 0!=i.find((function(t){return t.Nom==e.title}))&&(n=!0),e.title.length>22?Object(N.jsx)(S,{booleanLike:n,nivAvis:e.Avis,nivMoyenne:e.vote_average,nbreVote:e.vote_count,nameMovie:e.title.slice(0,22)+"...",affiche:"https://image.tmdb.org/t/p/w500"+e.poster_path,resume:e.overview.slice(0,350)+"...",like:T}):Object(N.jsx)(S,{booleanLike:n,nivAvis:e.Avis,nivMoyenne:e.vote_average,nbreVote:e.vote_count,nameMovie:e.title,affiche:"https://image.tmdb.org/t/p/w500"+e.poster_path,resume:e.overview.slice(0,350)+"...",like:T})})),D=E.map((function(e,t){var n=!1;return void 0!=i.find((function(t){return t.Nom==e.title}))&&(n=!0),e.title.length>22?Object(N.jsx)(C,{booleanLike:n,nivAvis:e.Avis,nivMoyenne:e.vote_average,nbreVote:e.vote_count,nameMovie:e.title.slice(0,22)+"...",affiche:"https://image.tmdb.org/t/p/w500"+e.poster_path,resume:e.overview.slice(0,350)+"...",like:T}):Object(N.jsx)(C,{booleanLike:n,nivAvis:e.Avis,nivMoyenne:e.vote_average,nbreVote:e.vote_count,nameMovie:e.title,affiche:"https://image.tmdb.org/t/p/w500"+e.poster_path,resume:e.overview.slice(0,350)+"...",like:T})}));return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(u.a,{children:[Object(N.jsx)(v.a,{className:"header",children:Object(N.jsx)(h.a,{children:Object(N.jsxs)(d.a,{style:B,children:[Object(N.jsx)(f.a,{children:Object(N.jsx)(x.a,{children:Object(N.jsx)("img",{src:"./pop-corn.png",alt:"",style:_})})}),Object(N.jsx)(f.a,{children:Object(N.jsx)(x.a,{style:F,href:"#",children:"Connexion"})}),Object(N.jsx)(f.a,{children:Object(N.jsx)(x.a,{style:F,href:"#",children:Object(N.jsxs)("div",{children:[Object(N.jsxs)(M.a,{id:"Popover1",type:"button",children:["Favoris : ",W.length]}),Object(N.jsxs)(A.a,{placement:"bottom",isOpen:g,target:"Popover1",toggle:function(){return k(!g)},children:[Object(N.jsx)(V.a,{children:"Liste de Favoris"}),W]})]})})})]})})}),Object(N.jsx)(v.a,{className:"cards",children:P}),Object(N.jsx)(v.a,{children:D})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(T,{})}),document.getElementById("root")),z()}},[[84,1,2]]]);
//# sourceMappingURL=main.0be66612.chunk.js.map