import{S as f,i as v,s as _,F as c,k as y,l as z,H as h,I as i,b as D,J as b,B as m,h as x,D as g,G as H}from"./index-3764ed31.js";/* empty css                                              */function S(l){let e,a,o=[l[4],{class:a="text-"+l[3]},{"data-content":l[1]}],n={};for(let t=0;t<o.length;t+=1)n=c(n,o[t]);return{c(){e=y("hr"),this.h()},l(t){e=z(t,"HR",{class:!0,"data-content":!0}),this.h()},h(){h(e,n),i(e,"divider",l[0].includes("horizontal")),i(e,"text-center",l[0].includes("center")),i(e,"text-right",l[0].includes("right")),i(e,"divider-vert",l[0]==="vertical"),i(e,"divider-empty",l[2]),i(e,"svelte-14tznux",!0)},m(t,r){D(t,e,r)},p(t,[r]){h(e,n=b(o,[r&16&&t[4],r&8&&a!==(a="text-"+t[3])&&{class:a},r&2&&{"data-content":t[1]}])),i(e,"divider",t[0].includes("horizontal")),i(e,"text-center",t[0].includes("center")),i(e,"text-right",t[0].includes("right")),i(e,"divider-vert",t[0]==="vertical"),i(e,"divider-empty",t[2]),i(e,"svelte-14tznux",!0)},i:m,o:m,d(t){t&&x(e)}}}function k(l,e,a){const o=["align","text","empty","color"];let n=g(e,o),{align:t="horizontal"}=e,{text:r=""}=e,{empty:d=!1}=e,{color:u="gray"}=e;return l.$$set=s=>{e=c(c({},e),H(s)),a(4,n=g(e,o)),"align"in s&&a(0,t=s.align),"text"in s&&a(1,r=s.text),"empty"in s&&a(2,d=s.empty),"color"in s&&a(3,u=s.color)},[t,r,d,u,n]}class C extends f{constructor(e){super(),v(this,e,k,S,_,{align:0,text:1,empty:2,color:3})}}export{C as D};
