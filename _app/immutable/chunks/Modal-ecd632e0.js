import{S as ee,i as se,s as te,T as H,F as T,k as E,a as S,w as le,l as I,m as j,c as B,x as oe,h as g,n as V,H as O,I as D,b as $,L as p,y as ae,U as x,C as ie,V as J,W as L,X as N,J as ne,f as M,t as P,z as fe,D as Q,a4 as re,G as de,B as ue}from"./index-3764ed31.js";import{u as me}from"./uuid-2bcac67c.js";import{I as _e}from"./IconButton-d34479f6.js";/* empty css                                              */const ce=e=>({}),R=e=>({}),ve=e=>({}),Y=e=>({});function Z(e){let s,n,o;return{c(){s=E("span"),this.h()},l(a){s=I(a,"SPAN",{class:!0,"aria-label":!0}),j(s).forEach(g),this.h()},h(){V(s,"class","modal-overlay svelte-lijk05"),V(s,"aria-label","Close")},m(a,k){$(a,s,k),n||(o=x(s,"click",e[5]),n=!0)},p:ue,d(a){a&&g(s),n=!1,o()}}}function he(e){let s,n,o,a,k,v,b,c,y,h,z,K,r,l,U,f=!e[1]&&Z(e);a=new _e({props:{id:"close",icon:"cross",size:e[2]==="fs"?"xxl":"md"}}),a.$on("click",e[5]);const q=e[8].header,d=H(q,e,e[7],Y),A=e[8].default,u=H(A,e,e[7],null),F=e[8].footer,m=H(F,e,e[7],R);let G=[e[6],{class:z="modal-"+e[2]},{id:K="modal-"+e[4]}],C={};for(let t=0;t<G.length;t+=1)C=T(C,G[t]);return{c(){s=E("div"),f&&f.c(),n=S(),o=E("div"),le(a.$$.fragment),k=S(),v=E("div"),d&&d.c(),b=S(),c=E("div"),u&&u.c(),y=S(),h=E("div"),m&&m.c(),this.h()},l(t){s=I(t,"DIV",{class:!0,id:!0});var i=j(s);f&&f.l(i),n=B(i),o=I(i,"DIV",{class:!0});var _=j(o);oe(a.$$.fragment,_),k=B(_),v=I(_,"DIV",{class:!0});var W=j(v);d&&d.l(W),W.forEach(g),b=B(_),c=I(_,"DIV",{class:!0});var X=j(c);u&&u.l(X),X.forEach(g),y=B(_),h=I(_,"DIV",{class:!0});var w=j(h);m&&m.l(w),w.forEach(g),_.forEach(g),i.forEach(g),this.h()},h(){V(v,"class","modal-header svelte-lijk05"),V(c,"class","modal-body svelte-lijk05"),V(h,"class","modal-footer svelte-lijk05"),V(o,"class","modal-container svelte-lijk05"),O(s,C),D(s,"modal",!e[1]),D(s,"active",e[1]||e[0]),D(s,"svelte-lijk05",!0)},m(t,i){$(t,s,i),f&&f.m(s,null),p(s,n),p(s,o),ae(a,o,null),p(o,k),p(o,v),d&&d.m(v,null),p(o,b),p(o,c),u&&u.m(c,null),p(o,y),p(o,h),m&&m.m(h,null),r=!0,l||(U=x(window,"keydown",function(){ie(e[0]?e[3]:null)&&(e[0]?e[3]:null).apply(this,arguments)}),l=!0)},p(t,[i]){e=t,e[1]?f&&(f.d(1),f=null):f?f.p(e,i):(f=Z(e),f.c(),f.m(s,n));const _={};i&4&&(_.size=e[2]==="fs"?"xxl":"md"),a.$set(_),d&&d.p&&(!r||i&128)&&J(d,q,e,e[7],r?N(q,e[7],i,ve):L(e[7]),Y),u&&u.p&&(!r||i&128)&&J(u,A,e,e[7],r?N(A,e[7],i,null):L(e[7]),null),m&&m.p&&(!r||i&128)&&J(m,F,e,e[7],r?N(F,e[7],i,ce):L(e[7]),R),O(s,C=ne(G,[i&64&&e[6],(!r||i&4&&z!==(z="modal-"+e[2]))&&{class:z},{id:K}])),D(s,"modal",!e[1]),D(s,"active",e[1]||e[0]),D(s,"svelte-lijk05",!0)},i(t){r||(M(a.$$.fragment,t),M(d,t),M(u,t),M(m,t),r=!0)},o(t){P(a.$$.fragment,t),P(d,t),P(u,t),P(m,t),r=!1},d(t){t&&g(s),f&&f.d(),fe(a),d&&d.d(t),u&&u.d(t),m&&m.d(t),l=!1,U()}}}function pe(e,s,n){const o=["custom","open","size","onKeydown"];let a=Q(s,o),{$$slots:k={},$$scope:v}=s,{custom:b=!1}=s,{open:c=!1}=s,{size:y="md"}=s,{onKeydown:h=l=>{l.key==="Escape"&&(l.preventDefault(),r(l))}}=s;const z=me(),K=re();function r(l){b||n(0,c=!1),K("close",l.target)}return e.$$set=l=>{s=T(T({},s),de(l)),n(6,a=Q(s,o)),"custom"in l&&n(1,b=l.custom),"open"in l&&n(0,c=l.open),"size"in l&&n(2,y=l.size),"onKeydown"in l&&n(3,h=l.onKeydown),"$$scope"in l&&n(7,v=l.$$scope)},[c,b,y,h,z,r,a,v,k]}class ze extends ee{constructor(s){super(),se(this,s,pe,he,te,{custom:1,open:0,size:2,onKeydown:3})}}export{ze as M};