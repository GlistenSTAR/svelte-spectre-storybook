import{S as X,i as Y,s as Z,e as K,b as f,B as L,h as o,D as N,F as S,G as se,k as d,l as g,m as _,H as R,I as l,J as x,p as A,n as q,L as C,a0 as ne,a1 as te,q as B,a as P,w as F,r as G,c as T,x as J,y as V,a5 as re,a2 as pe,f as O,t as Q,z as U}from"../../../../../chunks/index-3764ed31.js";/* empty css                                                                  */import{K as ie}from"../../../../../chunks/knobs-35734c28.js";function oe(r){let a,t=[r[9],{class:"meter"},{value:r[0]},{min:r[1]},{max:r[2]},{low:r[3]},{high:r[4]},{optimum:r[5]}],n={};for(let e=0;e<t.length;e+=1)n=S(n,t[e]);return{c(){a=d("meter"),this.h()},l(e){a=g(e,"METER",{class:!0,min:!0,max:!0,low:!0,high:!0,optimum:!0}),_(a).forEach(o),this.h()},h(){R(a,n),l(a,"striped",r[6]),l(a,"animated",r[7]),l(a,"svelte-1b04wwv",!0)},m(e,p){f(e,a,p)},p(e,p){R(a,n=x(t,[p&512&&e[9],{class:"meter"},p&1&&{value:e[0]},p&2&&{min:e[1]},p&4&&{max:e[2]},p&8&&{low:e[3]},p&16&&{high:e[4]},p&32&&{optimum:e[5]}])),l(a,"striped",e[6]),l(a,"animated",e[7]),l(a,"svelte-1b04wwv",!0)},d(e){e&&o(a)}}}function le(r){let a,t;return{c(){a=d("div"),t=d("span"),this.h()},l(n){a=g(n,"DIV",{class:!0});var e=_(a);t=g(e,"SPAN",{style:!0,class:!0}),_(t).forEach(o),e.forEach(o),this.h()},h(){A(t,"width",r[0]+"%"),q(t,"class","svelte-1b04wwv"),l(t,"error",r[1]<=r[0]&&r[0]<=r[3]),l(t,"warning",r[3]<=r[0]&&r[0]<=r[4]),l(t,"success",r[4]<=r[0]&&r[0]<=r[2]),l(t,"striped",r[6]),l(t,"animated",r[7]),q(a,"class","meter svelte-1b04wwv")},m(n,e){f(n,a,e),C(a,t)},p(n,e){e&1&&A(t,"width",n[0]+"%"),e&11&&l(t,"error",n[1]<=n[0]&&n[0]<=n[3]),e&25&&l(t,"warning",n[3]<=n[0]&&n[0]<=n[4]),e&21&&l(t,"success",n[4]<=n[0]&&n[0]<=n[2]),e&64&&l(t,"striped",n[6]),e&128&&l(t,"animated",n[7])},d(n){n&&o(a)}}}function ue(r){let a;function t(p,m){return p[8]?le:oe}let n=t(r),e=n(r);return{c(){e.c(),a=K()},l(p){e.l(p),a=K()},m(p,m){e.m(p,m),f(p,a,m)},p(p,[m]){n===(n=t(p))&&e?e.p(p,m):(e.d(1),e=n(p),e&&(e.c(),e.m(a.parentNode,a)))},i:L,o:L,d(p){e.d(p),p&&o(a)}}}function me(r,a,t){const n=["value","min","max","low","high","optimum","striped","animated","progress"];let e=N(a,n),{value:p=0}=a,{min:m=0}=a,{max:b=100}=a,{low:k=26}=a,{high:v=51}=a,{optimum:h=90}=a,{striped:c}=a,{animated:w}=a,{progress:y}=a;return r.$$set=i=>{a=S(S({},a),se(i)),t(9,e=N(a,n)),"value"in i&&t(0,p=i.value),"min"in i&&t(1,m=i.min),"max"in i&&t(2,b=i.max),"low"in i&&t(3,k=i.low),"high"in i&&t(4,v=i.high),"optimum"in i&&t(5,h=i.optimum),"striped"in i&&t(6,c=i.striped),"animated"in i&&t(7,w=i.animated),"progress"in i&&t(8,y=i.progress)},[p,m,b,k,v,h,c,w,y,e]}class ce extends X{constructor(a){super(),Y(this,a,me,ue,Z,{value:0,min:1,max:2,low:3,high:4,optimum:5,striped:6,animated:7,progress:8})}}function fe(r){let a,t,n,e,p,m,b,k,v,h,c,w,y,i,$=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Meter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token literal-property property">striped</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">animated</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">low</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token literal-property property">high</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">optimum</span><span class="token operator">:</span> <span class="token number">90</span>
    <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Meter</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span> <span class="token operator">...</span>state <span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,M;const j=[r[0]];let H={};for(let s=0;s<j.length;s+=1)H=S(H,j[s]);k=new ce({props:H});function ee(s){r[1](s)}let D={config:be};return r[0]!==void 0&&(D.state=r[0]),c=new ie({props:D}),ne.push(()=>te(c,"state",ee)),{c(){a=d("h1"),t=B(W),n=P(),e=d("p"),p=B("Meters represent the value within the known range."),m=P(),b=d("p"),F(k.$$.fragment),v=P(),h=d("p"),F(c.$$.fragment),y=P(),i=d("pre"),this.h()},l(s){a=g(s,"H1",{});var u=_(a);t=G(u,W),u.forEach(o),n=T(s),e=g(s,"P",{});var z=_(e);p=G(z,"Meters represent the value within the known range."),z.forEach(o),m=T(s),b=g(s,"P",{});var E=_(b);J(k.$$.fragment,E),E.forEach(o),v=T(s),h=g(s,"P",{});var I=_(h);J(c.$$.fragment,I),I.forEach(o),y=T(s),i=g(s,"PRE",{class:!0});var ae=_(i);ae.forEach(o),this.h()},h(){q(i,"class","language-sv")},m(s,u){f(s,a,u),C(a,t),f(s,n,u),f(s,e,u),C(e,p),f(s,m,u),f(s,b,u),V(k,b,null),f(s,v,u),f(s,h,u),V(c,h,null),f(s,y,u),f(s,i,u),i.innerHTML=$,M=!0},p(s,[u]){const z=u&1?x(j,[re(s[0])]):{};k.$set(z);const E={};!w&&u&1&&(w=!0,E.state=s[0],pe(()=>w=!1)),c.$set(E)},i(s){M||(O(k.$$.fragment,s),O(c.$$.fragment,s),M=!0)},o(s){Q(k.$$.fragment,s),Q(c.$$.fragment,s),M=!1},d(s){s&&o(a),s&&o(n),s&&o(e),s&&o(m),s&&o(b),U(k),s&&o(v),s&&o(h),U(c),s&&o(y),s&&o(i)}}}const ke={file:"meter.md",title:"Meter",api:[{title:"value: number = 0",description:"Current numeric value",variables:"any number"},{title:"min: number = 0",description:"The lower numeric bound of the measured range.",variables:"any number"},{title:"max: number = 100",description:"The upper numeric bound of the measured range.",variables:"any number"},{title:"low: number = 26",description:"The upper numeric bound of the low end of the measured range.",variables:"any number"},{title:"high: number = 51",description:"The lower numeric bound of the high end of the measured range.",variables:"any number"},{title:"optimum: number = 90",description:"This attribute indicates the optimal numeric value.",variables:"any number"},{title:"striped: boolean",description:"Striped indicator.",variables:"true | false"},{title:"animated: boolean",description:"Striped animated indicator.",variables:"true | false"},{title:"progress: boolean",description:"Striped indicator like progress value",variables:"true | false"}],config:{striped:{type:"checkbox"},animated:{type:"checkbox"},progress:{type:"checkbox"},value:{type:"number",min:0,max:100,size:5},min:{type:"number",min:0,max:100,size:5},max:{type:"number",min:0,max:100,size:5},low:{type:"number",min:0,max:100,size:5},high:{type:"number",min:0,max:100,size:5},optimum:{type:"number",min:0,max:100,size:5}}},{file:ve,title:W,api:ye,config:be}=ke;function he(r,a,t){let n={value:25,striped:!0,animated:!0,progress:!0,min:0,max:100,low:26,high:51,optimum:90};function e(p){n=p,t(0,n)}return[n,e]}class we extends X{constructor(a){super(),Y(this,a,he,fe,Z,{})}}export{we as default,ke as metadata};