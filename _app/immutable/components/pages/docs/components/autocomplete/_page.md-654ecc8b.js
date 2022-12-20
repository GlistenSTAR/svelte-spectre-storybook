import{S as dn,i as _n,s as bn,a0 as W,a1 as X,k as _,q as b,a as A,w as nn,l as v,m as E,r as h,h as e,c as S,x as sn,n as vn,b as m,L as o,y as an,a2 as Y,u as tn,f as en,t as pn,z as on}from"../../../../../chunks/index-3764ed31.js";/* empty css                                                                  */import{A as hn}from"../../../../../chunks/Autocomplete-a1a755b7.js";import{K as yn}from"../../../../../chunks/knobs-35734c28.js";function $n(s){let r,f,y,d,P,i,t,p,B,L,z,k,l,$=s[1].map(cn).join(", ")+"",M,O,T,D,F,j,J,N=s[2].map(un).join(", ")+"",q,Q,H,C,g,U,K,w,rn=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Autocomplete <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> predefined <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">'top_left'</span><span class="token punctuation">,</span>
            <span class="token string">'top_center'</span><span class="token punctuation">,</span>
            <span class="token string">'top_right'</span><span class="token punctuation">,</span>
            <span class="token string">'center_left'</span><span class="token punctuation">,</span>
            <span class="token string">'center_center'</span><span class="token punctuation">,</span>
            <span class="token string">'center_right'</span><span class="token punctuation">,</span>
            <span class="token string">'bottom_left'</span><span class="token punctuation">,</span>
            <span class="token string">'bottom_center'</span><span class="token punctuation">,</span>
            <span class="token string">'bottom_right'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        groups <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">'\u2196 top_left'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2191 top_center'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2197 top_right'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2190 center_left'</span><span class="token punctuation">,</span>
            <span class="token string">'\u271B center_center'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2192 center_right'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2199 bottom_left'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2193 bottom_center'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2198 bottom_right'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        selected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> <span class="token function-variable function">groupsBy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> groups<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">g</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Autocomplete</span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>predefined<span class="token punctuation">&#125;</span></span>
    <span class="token attr-name"><span class="token namespace">bind:</span>selected</span>
    <span class="token attr-name"><span class="token namespace">bind:</span>created</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>type here<span class="token punctuation">"</span></span>
    <span class="token attr-name">empty</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>No suggested<span class="token punctuation">"</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>groupBy<span class="token punctuation">&#125;</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>Selected: [ <span class="token language-javascript"><span class="token punctuation">&#123;</span>selected<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=></span> s<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> ]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>Created: [ <span class="token language-javascript"><span class="token punctuation">&#123;</span>created<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=></span> s<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> ]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span></code>`,I;function kn(n){s[5](n)}function gn(n){s[6](n)}let V={predefined:s[3],placeholder:s[0].placeholder,creatable:s[0].creatable,predictable:s[0].predictable,empty:s[0].empty,groupBy:s[4]};s[1]!==void 0&&(V.selected=s[1]),s[2]!==void 0&&(V.created=s[2]),p=new hn({props:V}),W.push(()=>X(p,"selected",kn)),W.push(()=>X(p,"created",gn));function mn(n){s[7](n)}let Z={config:wn};return s[0]!==void 0&&(Z.state=s[0]),g=new yn({props:Z}),W.push(()=>X(g,"state",mn)),{c(){r=_("h1"),f=b(ln),y=A(),d=_("p"),P=b(`Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.`),i=A(),t=_("p"),nn(p.$$.fragment),z=A(),k=_("small"),l=b("Selected: [ "),M=b($),O=b(" ]"),T=A(),D=_("br"),F=A(),j=_("small"),J=b("Created: [ "),q=b(N),Q=b(" ]"),H=A(),C=_("p"),nn(g.$$.fragment),K=A(),w=_("pre"),this.h()},l(n){r=v(n,"H1",{});var a=E(r);f=h(a,ln),a.forEach(e),y=S(n),d=v(n,"P",{});var c=E(d);P=h(c,`Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.`),c.forEach(e),i=S(n),t=v(n,"P",{});var u=E(t);sn(p.$$.fragment,u),z=S(u),k=v(u,"SMALL",{});var R=E(k);l=h(R,"Selected: [ "),M=h(R,$),O=h(R," ]"),R.forEach(e),T=S(u),D=v(u,"BR",{}),F=S(u),j=v(u,"SMALL",{});var G=E(j);J=h(G,"Created: [ "),q=h(G,N),Q=h(G," ]"),G.forEach(e),u.forEach(e),H=S(n),C=v(n,"P",{});var x=E(C);sn(g.$$.fragment,x),x.forEach(e),K=S(n),w=v(n,"PRE",{class:!0});var fn=E(w);fn.forEach(e),this.h()},h(){vn(w,"class","language-sv")},m(n,a){m(n,r,a),o(r,f),m(n,y,a),m(n,d,a),o(d,P),m(n,i,a),m(n,t,a),an(p,t,null),o(t,z),o(t,k),o(k,l),o(k,M),o(k,O),o(t,T),o(t,D),o(t,F),o(t,j),o(j,J),o(j,q),o(j,Q),m(n,H,a),m(n,C,a),an(g,C,null),m(n,K,a),m(n,w,a),w.innerHTML=rn,I=!0},p(n,[a]){const c={};a&8&&(c.predefined=n[3]),a&1&&(c.placeholder=n[0].placeholder),a&1&&(c.creatable=n[0].creatable),a&1&&(c.predictable=n[0].predictable),a&1&&(c.empty=n[0].empty),!B&&a&2&&(B=!0,c.selected=n[1],Y(()=>B=!1)),!L&&a&4&&(L=!0,c.created=n[2],Y(()=>L=!1)),p.$set(c),(!I||a&2)&&$!==($=n[1].map(cn).join(", ")+"")&&tn(M,$),(!I||a&4)&&N!==(N=n[2].map(un).join(", ")+"")&&tn(q,N);const u={};!U&&a&1&&(U=!0,u.state=n[0],Y(()=>U=!1)),g.$set(u)},i(n){I||(en(p.$$.fragment,n),en(g.$$.fragment,n),I=!0)},o(n){pn(p.$$.fragment,n),pn(g.$$.fragment,n),I=!1},d(n){n&&e(r),n&&e(y),n&&e(d),n&&e(i),n&&e(t),on(p),n&&e(H),n&&e(C),on(g),n&&e(K),n&&e(w)}}}const jn={file:"autocomplete.md",title:"Autocomplete",api:[{title:"predefined: string | Item = []",description:"Predefined values array input",variables:"type Item = { index: number; label: string; value?: any; group?: string; type?: Color; style?: string; }"},{title:"selected: Item[] = []",description:"Selected values array output",variables:"[]"},{title:"created: Item[] = []",description:"Created values array output",variables:"[]"},{title:"groupBy: (item: Item) => item = undefined",description:"Groupping condition \u2013 returns headers strings",variables:"groups headers"},{title:"predictable: boolean = false",description:"Open suggested values list only on search match",variables:"true | false"},{title:"creatable: boolean = false",description:"Can add to suggested list new values",variables:"true | false"},{title:'placeholder: string = "type here"',description:"Placeholder",variables:"any string"},{title:'empty: string = "No suggested"',description:"No suggested message",variables:"any string"}],config:{placeholder:{size:12},empty:{size:12},predictable:{type:"checkbox"},creatable:{type:"checkbox"},objects:{type:"checkbox"},groups:{size:"auto"}}},{file:Pn,title:ln,api:Bn,config:wn}=jn,cn=s=>s.label,un=s=>s.label;function An(s,r,f){let y,d=[{label:"{ top_left }",value:"top_left",group:"top"},{label:"{ top_center }",value:"top_center",group:"top"},{label:"{ top_right }",value:"top_right",group:"top"},{label:"{ center_left }",value:"center_left",group:"center"},{label:"{ center_center }",value:"center_center",group:"center"},{label:"{ center_right }",value:"center_right",group:"center"},{label:"{ bottom_left }",value:"bottom_left",group:"bottom"},{label:"{ bottom_center }",value:"bottom_center",group:"bottom"},{label:"{ bottom_right }",value:"bottom_right",group:"bottom"}],P=["\u2196 top_left","\u2191 top_center","\u2197 top_right","\u2190 center_left","\u271B center_center","\u2192 center_right","\u2199 bottom_left","\u2193 bottom_center","\u2198 bottom_right"],i={placeholder:"type here",empty:"No suggested",predictable:!1,creatable:!1,groups:"top_, center_, bottom_",objects:!1},t=[{label:"\u2198 bottom_right"}],p=[];const B=l=>i.groups.split(", ").find($=>l.value.includes($));function L(l){t=l,f(1,t)}function z(l){p=l,f(2,p)}function k(l){i=l,f(0,i)}return s.$$.update=()=>{s.$$.dirty&1&&f(3,y=i.objects?d:P)},[i,t,p,y,B,L,z,k]}class Ln extends dn{constructor(r){super(),_n(this,r,An,$n,bn,{})}}export{Ln as default,jn as metadata};
