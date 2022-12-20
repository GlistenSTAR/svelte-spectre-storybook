import{S as $,i as w,s as x,T as en,F as D,k as y,a as C,l as E,m as P,c as j,h as g,n as R,H as X,I as F,b as v,L as z,ag as O,U as G,V as sn,W as tn,X as ln,J as rn,f as H,t as L,a3 as on,D as Q,G as un,a6 as Y,af as pn,a0 as I,a1 as K,q as J,w as U,r as M,x as V,y as A,a2 as S,z as B}from"../../../../../chunks/index-3764ed31.js";/* empty css                                                                  */import{u as mn}from"../../../../../chunks/uuid-2bcac67c.js";import{F as fn,G as cn}from"../../../../../chunks/Group-cdf46b9c.js";import{K as gn}from"../../../../../chunks/knobs-35734c28.js";function _n(s){let n,o,a,i,c,_,u,r,h;const b=s[8].default,p=en(b,s,s[7],null);let d=[s[6],{id:i="range-"+s[5]},{class:c="is-"+s[4]},{style:_="--range: "+s[0]+"; --min: "+s[1]+"; --max: "+s[2]},{"data-range":s[0]}],l={};for(let e=0;e<d.length;e+=1)l=D(l,d[e]);return{c(){n=y("label"),p&&p.c(),o=C(),a=y("input"),this.h()},l(e){n=E(e,"LABEL",{id:!0,class:!0,style:!0,"data-range":!0});var m=P(n);p&&p.l(m),o=j(m),a=E(m,"INPUT",{class:!0,type:!0,min:!0,max:!0}),m.forEach(g),this.h()},h(){R(a,"class","slider svelte-h4xi1l"),R(a,"type","range"),R(a,"min",s[1]),R(a,"max",s[2]),X(n,l),F(n,"form-inline",s[3]),F(n,"svelte-h4xi1l",!0)},m(e,m){v(e,n,m),p&&p.m(n,null),z(n,o),z(n,a),O(a,s[0]),u=!0,r||(h=[G(a,"change",s[11]),G(a,"input",s[11]),G(a,"input",s[9]),G(a,"change",s[10])],r=!0)},p(e,[m]){p&&p.p&&(!u||m&128)&&sn(p,b,e,e[7],u?ln(b,e[7],m,null):tn(e[7]),null),(!u||m&2)&&R(a,"min",e[1]),(!u||m&4)&&R(a,"max",e[2]),m&1&&O(a,e[0]),X(n,l=rn(d,[m&64&&e[6],{id:i},(!u||m&16&&c!==(c="is-"+e[4]))&&{class:c},(!u||m&7&&_!==(_="--range: "+e[0]+"; --min: "+e[1]+"; --max: "+e[2]))&&{style:_},(!u||m&1)&&{"data-range":e[0]}])),F(n,"form-inline",e[3]),F(n,"svelte-h4xi1l",!0)},i(e){u||(H(p,e),u=!0)},o(e){L(p,e),u=!1},d(e){e&&g(n),p&&p.d(e),r=!1,on(h)}}}function kn(s,n,o){const a=["range","min","max","inline","validity"];let i=Q(n,a),{$$slots:c={},$$scope:_}=n,{range:u=50}=n,{min:r=0}=n,{max:h=100}=n,{inline:b=!1}=n,{validity:p=!1}=n;const d=mn();function l(f){Y.call(this,s,f)}function e(f){Y.call(this,s,f)}function m(){u=pn(this.value),o(0,u)}return s.$$set=f=>{n=D(D({},n),un(f)),o(6,i=Q(n,a)),"range"in f&&o(0,u=f.range),"min"in f&&o(1,r=f.min),"max"in f&&o(2,h=f.max),"inline"in f&&o(3,b=f.inline),"validity"in f&&o(4,p=f.validity),"$$scope"in f&&o(7,_=f.$$scope)},[u,r,h,b,p,d,i,_,c,l,e,m]}class bn extends ${constructor(n){super(),w(this,n,kn,_n,x,{range:0,min:1,max:2,inline:3,validity:4})}}function dn(s){let n,o,a,i,c,_,u,r;function h(l){s[1](l)}function b(l){s[2](l)}function p(l){s[3](l)}let d={inline:s[0].inline,validity:s[0].validity};return s[0].range!==void 0&&(d.range=s[0].range),s[0].min!==void 0&&(d.min=s[0].min),s[0].max!==void 0&&(d.max=s[0].max),i=new bn({props:d}),I.push(()=>K(i,"range",h)),I.push(()=>K(i,"min",b)),I.push(()=>K(i,"max",p)),{c(){n=y("h4"),o=J("Range"),a=C(),U(i.$$.fragment)},l(l){n=E(l,"H4",{});var e=P(n);o=M(e,"Range"),e.forEach(g),a=j(l),V(i.$$.fragment,l)},m(l,e){v(l,n,e),z(n,o),v(l,a,e),A(i,l,e),r=!0},p(l,e){const m={};e&1&&(m.inline=l[0].inline),e&1&&(m.validity=l[0].validity),!c&&e&1&&(c=!0,m.range=l[0].range,S(()=>c=!1)),!_&&e&1&&(_=!0,m.min=l[0].min,S(()=>_=!1)),!u&&e&1&&(u=!0,m.max=l[0].max,S(()=>u=!1)),i.$set(m)},i(l){r||(H(i.$$.fragment,l),r=!0)},o(l){L(i.$$.fragment,l),r=!1},d(l){l&&g(n),l&&g(a),B(i,l)}}}function hn(s){let n,o;return n=new cn({props:{$$slots:{default:[dn]},$$scope:{ctx:s}}}),{c(){U(n.$$.fragment)},l(a){V(n.$$.fragment,a)},m(a,i){A(n,a,i),o=!0},p(a,i){const c={};i&33&&(c.$$scope={dirty:i,ctx:a}),n.$set(c)},i(a){o||(H(n.$$.fragment,a),o=!0)},o(a){L(n.$$.fragment,a),o=!1},d(a){B(n,a)}}}function vn(s){let n,o,a,i,c,_,u,r,h,b,p,d,l,e,m=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Range <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> range
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Range</span>
    <span class="token attr-name"><span class="token namespace">bind:</span>range</span>
    <span class="token attr-name">min=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">max=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">100</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">inline=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">validity=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token keyword">null</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">/></span></span></code>`,f;r=new fn({props:{$$slots:{default:[hn]},$$scope:{ctx:s}}});function nn(t){s[4](t)}let N={config:En};return s[0]!==void 0&&(N.state=s[0]),p=new gn({props:N}),I.push(()=>K(p,"state",nn)),{c(){n=y("h1"),o=J(Z),a=C(),i=y("p"),c=J("The Range are for selecting values from ranges."),_=C(),u=y("p"),U(r.$$.fragment),h=C(),b=y("p"),U(p.$$.fragment),l=C(),e=y("pre"),this.h()},l(t){n=E(t,"H1",{});var k=P(n);o=M(k,Z),k.forEach(g),a=j(t),i=E(t,"P",{});var q=P(i);c=M(q,"The Range are for selecting values from ranges."),q.forEach(g),_=j(t),u=E(t,"P",{});var T=P(u);V(r.$$.fragment,T),T.forEach(g),h=j(t),b=E(t,"P",{});var W=P(b);V(p.$$.fragment,W),W.forEach(g),l=j(t),e=E(t,"PRE",{class:!0});var an=P(e);an.forEach(g),this.h()},h(){R(e,"class","language-sv")},m(t,k){v(t,n,k),z(n,o),v(t,a,k),v(t,i,k),z(i,c),v(t,_,k),v(t,u,k),A(r,u,null),v(t,h,k),v(t,b,k),A(p,b,null),v(t,l,k),v(t,e,k),e.innerHTML=m,f=!0},p(t,[k]){const q={};k&33&&(q.$$scope={dirty:k,ctx:t}),r.$set(q);const T={};!d&&k&1&&(d=!0,T.state=t[0],S(()=>d=!1)),p.$set(T)},i(t){f||(H(r.$$.fragment,t),H(p.$$.fragment,t),f=!0)},o(t){L(r.$$.fragment,t),L(p.$$.fragment,t),f=!1},d(t){t&&g(n),t&&g(a),t&&g(i),t&&g(_),t&&g(u),B(r),t&&g(h),t&&g(b),B(p),t&&g(l),t&&g(e)}}}const yn={file:"range.md",title:"Range",api:[{title:"range: number = 50",description:"Checkbox range",variables:"any number"},{title:"min: number = 0",description:"Checkbox range",variables:"any number"},{title:"max: number = 100",description:"Checkbox range",variables:"any number"},{title:"inline: boolean = false",description:"Checkbox range",variables:"true | false"},{title:"validity: Validity = null",description:"Checkbox validity",variables:"null | success | error"}],config:{range:{type:"number",min:0,max:100,size:10},min:{type:"number",min:0,max:10,size:10},max:{type:"number",min:10,max:100,size:10},inline:{type:"checkbox"},validity:{options:[null,"success","error"]}}},{file:zn,title:Z,api:Hn,config:En}=yn;function Rn(s,n,o){let a={range:45,min:0,max:100,inline:!1,validity:null};function i(r){s.$$.not_equal(a.range,r)&&(a.range=r,o(0,a))}function c(r){s.$$.not_equal(a.min,r)&&(a.min=r,o(0,a))}function _(r){s.$$.not_equal(a.max,r)&&(a.max=r,o(0,a))}function u(r){a=r,o(0,a)}return[a,i,c,_,u]}class Ln extends ${constructor(n){super(),w(this,n,Rn,vn,x,{})}}export{Ln as default,yn as metadata};
