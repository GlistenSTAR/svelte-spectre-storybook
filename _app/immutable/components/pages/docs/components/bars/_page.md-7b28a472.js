import{S as la,i as ra,s as ia,k as g,l as w,m as E,h as u,n as P,I as f,b as m,B as G,K as da,e as Q,q as z,a as H,r as I,c as S,p as U,L as b,u as ba,F as fa,a0 as W,a1 as X,w as Y,x as Z,y as x,J as ha,a5 as ya,a2 as $,f as aa,t as sa,z as na}from"../../../../../chunks/index-3764ed31.js";/* empty css                                                                  */import{K as _a}from"../../../../../chunks/knobs-35734c28.js";function ea(l,s,n){const e=l.slice();return e[11]=s[n],e[13]=n,e}function ta(l){let s,n=(l[4]?l[11].label||l[11].value:"")+"",e,a,i,p;return{c(){s=g("div"),e=z(n),a=H(),this.h()},l(o){s=w(o,"DIV",{class:!0,style:!0,"data-tooltip":!0});var c=E(s);e=I(c,n),a=S(c),c.forEach(u),this.h()},h(){var o,c;P(s,"class",i="bar-item tooltip tooltip-"+(((o=l[11].tooltip)==null?void 0:o.pos)||"top")+" bar-"+(l[11].color||"primary")+" svelte-460oht"),U(s,"width",l[11].value+"%"),P(s,"data-tooltip",p=((c=l[11].tooltip)==null?void 0:c.label)||l[11].value),f(s,"striped",l[11].striped),f(s,"animated",l[11].animated)},m(o,c){m(o,s,c),b(s,e),b(s,a)},p(o,c){var d,h;c&17&&n!==(n=(o[4]?o[11].label||o[11].value:"")+"")&&ba(e,n),c&1&&i!==(i="bar-item tooltip tooltip-"+(((d=o[11].tooltip)==null?void 0:d.pos)||"top")+" bar-"+(o[11].color||"primary")+" svelte-460oht")&&P(s,"class",i),c&1&&U(s,"width",o[11].value+"%"),c&1&&p!==(p=((h=o[11].tooltip)==null?void 0:h.label)||o[11].value)&&P(s,"data-tooltip",p),c&1&&f(s,"striped",o[11].striped),c&1&&f(s,"animated",o[11].animated)},d(o){o&&u(s)}}}function pa(l){let s,n=!l[11].invisible&&ta(l);return{c(){n&&n.c(),s=Q()},l(e){n&&n.l(e),s=Q()},m(e,a){n&&n.m(e,a),m(e,s,a)},p(e,a){e[11].invisible?n&&(n.d(1),n=null):n?n.p(e,a):(n=ta(e),n.c(),n.m(s.parentNode,s))},d(e){n&&n.d(e),e&&u(s)}}}function va(l){let s,n=l[0],e=[];for(let a=0;a<n.length;a+=1)e[a]=pa(ea(l,n,a));return{c(){s=g("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){s=w(a,"DIV",{class:!0});var i=E(s);for(let p=0;p<e.length;p+=1)e[p].l(i);i.forEach(u),this.h()},h(){P(s,"class","bar svelte-460oht"),f(s,"bar-sm",l[3]),f(s,"striped",l[1]),f(s,"animated",l[2])},m(a,i){m(a,s,i);for(let p=0;p<e.length;p+=1)e[p].m(s,null)},p(a,[i]){if(i&17){n=a[0];let p;for(p=0;p<n.length;p+=1){const o=ea(a,n,p);e[p]?e[p].p(o,i):(e[p]=pa(o),e[p].c(),e[p].m(s,null))}for(;p<e.length;p+=1)e[p].d(1);e.length=n.length}i&8&&f(s,"bar-sm",a[3]),i&2&&f(s,"striped",a[1]),i&4&&f(s,"animated",a[2])},i:G,o:G,d(a){a&&u(s),da(e,a)}}}function ga(l,s,n){let{items:e}=s,{value:a=0}=s,{min:i=0}=s,{low:p=25}=s,{high:o=50}=s,{max:c=100}=s,{striped:d}=s,{animated:h}=s,{thin:C}=s,{auto:B}=s,{labled:y}=s;return l.$$set=r=>{"items"in r&&n(0,e=r.items),"value"in r&&n(5,a=r.value),"min"in r&&n(6,i=r.min),"low"in r&&n(7,p=r.low),"high"in r&&n(8,o=r.high),"max"in r&&n(9,c=r.max),"striped"in r&&n(1,d=r.striped),"animated"in r&&n(2,h=r.animated),"thin"in r&&n(3,C=r.thin),"auto"in r&&n(10,B=r.auto),"labled"in r&&n(4,y=r.labled)},l.$$.update=()=>{l.$$.dirty&2017&&!e.length&&B&&n(0,e=[{value:a<=i?a:i,invisible:!a,striped:a<i,animated:a<i,color:"secondary"},{value:a<=p?a-i:p-i,invisible:a<=i,striped:a<p,animated:a<p,color:"error"},{value:a<=o?a-p:o-p,invisible:a<=p,striped:a<o,animated:a<o,color:"warning"},{value:a<=c?a-o:c-o,invisible:a<=o,striped:a<c,animated:a<c,color:"success"},{value:a-c,invisible:a<=c,striped:a<100,animated:a<100,color:"primary"}])},[e,d,h,C,y,a,i,p,o,c,B]}class wa extends la{constructor(s){super(),ra(this,s,ga,va,ia,{items:0,value:5,min:6,low:7,high:8,max:9,striped:1,animated:2,thin:3,auto:10,labled:4})}}function Ea(l){let s,n,e,a,i,p,o,c,d,h,C,B,y,r,O,K,L,_,V,M,T,ca=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Bars <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">low</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
        <span class="token literal-property property">high</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">striped</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">animated</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">labled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">auto</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

    <span class="token literal-property property">$</span><span class="token operator">:</span> items <span class="token operator">=</span> state<span class="token punctuation">.</span>auto
        <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">&#123;</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">striped</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">animated</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'secondary'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
              <span class="token punctuation">&#123;</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token literal-property property">striped</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">animated</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'error'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
              <span class="token punctuation">&#123;</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">striped</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">animated</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'warning'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
              <span class="token punctuation">&#123;</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">striped</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">animated</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'success'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
              <span class="token punctuation">&#123;</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">striped</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">animated</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bars</span> <span class="token attr-name">&#123;</span> <span class="token attr-name">...state</span> <span class="token attr-name">&#125;</span> <span class="token attr-name"><span class="token namespace">bind:</span>items</span> <span class="token punctuation">/></span></span></code>`,j;const A=[l[0]];function ua(t){l[2](t)}let q={};for(let t=0;t<A.length;t+=1)q=fa(q,A[t]);l[1]!==void 0&&(q.items=l[1]),r=new wa({props:q}),W.push(()=>X(r,"items",ua));function ka(t){l[3](t)}let F={config:Ta};return l[0]!==void 0&&(F.state=l[0]),_=new _a({props:F}),W.push(()=>X(_,"state",ka)),{c(){s=g("h1"),n=z(oa),e=H(),a=g("p"),i=z("Bars represent the progress of a task or the value within the known range. Bars are custom components for displaying HTML5 "),p=g("code"),o=z("<progress>"),c=z(", "),d=g("code"),h=z("<meter>"),C=z(" and input range elements."),B=H(),y=g("p"),Y(r.$$.fragment),K=H(),L=g("p"),Y(_.$$.fragment),M=H(),T=g("pre"),this.h()},l(t){s=w(t,"H1",{});var k=E(s);n=I(k,oa),k.forEach(u),e=S(t),a=w(t,"P",{});var v=E(a);i=I(v,"Bars represent the progress of a task or the value within the known range. Bars are custom components for displaying HTML5 "),p=w(v,"CODE",{});var D=E(p);o=I(D,"<progress>"),D.forEach(u),c=I(v,", "),d=w(v,"CODE",{});var J=E(d);h=I(J,"<meter>"),J.forEach(u),C=I(v," and input range elements."),v.forEach(u),B=S(t),y=w(t,"P",{});var N=E(y);Z(r.$$.fragment,N),N.forEach(u),K=S(t),L=w(t,"P",{});var R=E(L);Z(_.$$.fragment,R),R.forEach(u),M=S(t),T=w(t,"PRE",{class:!0});var ma=E(T);ma.forEach(u),this.h()},h(){P(T,"class","language-html")},m(t,k){m(t,s,k),b(s,n),m(t,e,k),m(t,a,k),b(a,i),b(a,p),b(p,o),b(a,c),b(a,d),b(d,h),b(a,C),m(t,B,k),m(t,y,k),x(r,y,null),m(t,K,k),m(t,L,k),x(_,L,null),m(t,M,k),m(t,T,k),T.innerHTML=ca,j=!0},p(t,[k]){const v=k&1?ha(A,[ya(t[0])]):{};!O&&k&2&&(O=!0,v.items=t[1],$(()=>O=!1)),r.$set(v);const D={};!V&&k&1&&(V=!0,D.state=t[0],$(()=>V=!1)),_.$set(D)},i(t){j||(aa(r.$$.fragment,t),aa(_.$$.fragment,t),j=!0)},o(t){sa(r.$$.fragment,t),sa(_.$$.fragment,t),j=!1},d(t){t&&u(s),t&&u(e),t&&u(a),t&&u(B),t&&u(y),na(r),t&&u(K),t&&u(L),na(_),t&&u(M),t&&u(T)}}}const Ba={file:"bars.md",title:"Bars",api:[{title:"items: Item[]",description:"Items array",variables:"type Item = { value: number; label?: string; color: Color; striped: boolean; animated: boolean; invisible?: boolean; tooltip?: { pos: string; label: string; }; };"},{title:"auto: boolean",description:"Autofilled bars by value. items = [] needed",variables:"true | false"},{title:"value: number = 0",description:"Current numeric value (auto: true).",variables:"any number"},{title:"min: number = 0",description:"The lower numeric bound of the measured range (auto: true).",variables:"any number"},{title:"low: number = 25",description:"The upper numeric bound of the low end of the measured range (auto: true).",variables:"any number"},{title:"high: number = 50",description:"The lower numeric bound of the high end of the measured range (auto: true).",variables:"any number"},{title:"max: number = 100",description:"The upper numeric bound of the measured range (auto: true).",variables:"any number"},{title:"striped: boolean",description:"Striped indicator.",variables:"true | false"},{title:"animated: boolean",description:"Striped animated indicator.",variables:"true | false"},{title:"labled: boolean",description:"Labled bars indicator.",variables:"true | false"},{title:"thin: boolean",description:"Thin bar.",variables:"true | false"}],config:{striped:{type:"checkbox"},animated:{type:"checkbox"},labled:{type:"checkbox"},thin:{type:"checkbox"},auto:{type:"checkbox"},value:{type:"number",min:0,max:100,size:5},min:{type:"number",min:0,max:100,size:5},low:{type:"number",min:0,max:100,size:5},high:{type:"number",min:0,max:100,size:5},max:{type:"number",min:0,max:100,size:5}}},{file:Pa,title:oa,api:Da,config:Ta}=Ba;function za(l,s,n){let e,a={value:100,min:10,low:25,high:50,max:90,striped:!1,animated:!1,labled:!0,thin:!1,auto:!1};function i(o){e=o,n(1,e),n(0,a)}function p(o){a=o,n(0,a)}return l.$$.update=()=>{l.$$.dirty&1&&n(1,e=a.auto?[]:[{value:10,striped:!0,animated:!0,color:"secondary"},{value:15,striped:!0,animated:!0,color:"error"},{value:25,striped:!0,animated:!0,color:"warning"},{value:40,striped:!0,animated:!0,color:"success"},{value:10,striped:!0,animated:!0}])},[a,e,i,p]}class Ha extends la{constructor(s){super(),ra(this,s,za,Ea,ia,{})}}export{Ha as default,Ba as metadata};