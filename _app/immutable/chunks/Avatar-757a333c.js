import{S as ct,i as gt,s as dt,T as D,F as U,k as P,a as X,l as G,m as z,c as Y,h as M,H as K,I as Q,b as E,L as $,a7 as bt,V,W as Z,X as J,g as tt,t as w,d as et,f as S,J as vt,C as pt,D as rt,Y as mt,G as yt,n as N,B as at,q as _t,r as Mt,u as kt}from"./index-3764ed31.js";/* empty css                                              */import{a as St}from"./action-cb9adc04.js";function At(r){let i=r.charCodeAt(0)^r.charCodeAt(1);const n=Math.abs(Math.sin(i++)*1e4)%256,s=Math.abs(Math.sin(i++)*1e4)%256,f=Math.abs(Math.sin(i++)*1e4)%256,l=Math.round((n+256)/2),b=Math.round((s+256)/2),c=Math.round((f+256)/2);return`rgb(${[l,b,c].join(",")})`}const Ht={xs:16,sm:24,md:32,lg:40,xl:48,xxl:64};function d(r,t){Rt(r)&&(r="100%");var e=wt(r);return r=t===360?r:Math.min(t,Math.max(0,parseFloat(r))),e&&(r=parseInt(String(r*t),10)/100),Math.abs(r-t)<1e-6?1:(t===360?r=(r<0?r%t+t:r%t)/parseFloat(String(t)):r=r%t/parseFloat(String(t)),r)}function B(r){return Math.min(1,Math.max(0,r))}function Rt(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function wt(r){return typeof r=="string"&&r.indexOf("%")!==-1}function lt(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function j(r){return r<=1?"".concat(Number(r)*100,"%"):r}function x(r){return r.length===1?"0"+r:String(r)}function xt(r,t,e){return{r:d(r,255)*255,g:d(t,255)*255,b:d(e,255)*255}}function it(r,t,e){r=d(r,255),t=d(t,255),e=d(e,255);var a=Math.max(r,t,e),i=Math.min(r,t,e),n=0,s=0,f=(a+i)/2;if(a===i)s=0,n=0;else{var l=a-i;switch(s=f>.5?l/(2-a-i):l/(a+i),a){case r:n=(t-e)/l+(t<e?6:0);break;case t:n=(e-r)/l+2;break;case e:n=(r-t)/l+4;break}n/=6}return{h:n,s,l:f}}function O(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*(6*e):e<1/2?t:e<2/3?r+(t-r)*(2/3-e)*6:r}function Ft(r,t,e){var a,i,n;if(r=d(r,360),t=d(t,100),e=d(e,100),t===0)i=e,n=e,a=e;else{var s=e<.5?e*(1+t):e+t-e*t,f=2*e-s;a=O(f,s,r+1/3),i=O(f,s,r),n=O(f,s,r-1/3)}return{r:a*255,g:i*255,b:n*255}}function nt(r,t,e){r=d(r,255),t=d(t,255),e=d(e,255);var a=Math.max(r,t,e),i=Math.min(r,t,e),n=0,s=a,f=a-i,l=a===0?0:f/a;if(a===i)n=0;else{switch(a){case r:n=(t-e)/f+(t<e?6:0);break;case t:n=(e-r)/f+2;break;case e:n=(r-t)/f+4;break}n/=6}return{h:n,s:l,v:s}}function Tt(r,t,e){r=d(r,360)*6,t=d(t,100),e=d(e,100);var a=Math.floor(r),i=r-a,n=e*(1-t),s=e*(1-i*t),f=e*(1-(1-i)*t),l=a%6,b=[e,s,n,n,f,e][l],c=[f,e,e,s,n,n][l],y=[n,n,f,e,e,s][l];return{r:b*255,g:c*255,b:y*255}}function st(r,t,e,a){var i=[x(Math.round(r).toString(16)),x(Math.round(t).toString(16)),x(Math.round(e).toString(16))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function It(r,t,e,a,i){var n=[x(Math.round(r).toString(16)),x(Math.round(t).toString(16)),x(Math.round(e).toString(16)),x(Et(a))];return i&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function Et(r){return Math.round(parseFloat(r)*255).toString(16)}function ft(r){return v(r)/255}function v(r){return parseInt(r,16)}function Bt(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}var L={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function jt(r){var t={r:0,g:0,b:0},e=1,a=null,i=null,n=null,s=!1,f=!1;return typeof r=="string"&&(r=Gt(r)),typeof r=="object"&&(_(r.r)&&_(r.g)&&_(r.b)?(t=xt(r.r,r.g,r.b),s=!0,f=String(r.r).substr(-1)==="%"?"prgb":"rgb"):_(r.h)&&_(r.s)&&_(r.v)?(a=j(r.s),i=j(r.v),t=Tt(r.h,a,i),s=!0,f="hsv"):_(r.h)&&_(r.s)&&_(r.l)&&(a=j(r.s),n=j(r.l),t=Ft(r.h,a,n),s=!0,f="hsl"),Object.prototype.hasOwnProperty.call(r,"a")&&(e=r.a)),e=lt(e),{ok:s,format:r.format||f,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:e}}var Nt="[-\\+]?\\d+%?",Pt="[-\\+]?\\d*\\.\\d+%?",A="(?:".concat(Pt,")|(?:").concat(Nt,")"),W="[\\s|\\(]+(".concat(A,")[,|\\s]+(").concat(A,")[,|\\s]+(").concat(A,")\\s*\\)?"),q="[\\s|\\(]+(".concat(A,")[,|\\s]+(").concat(A,")[,|\\s]+(").concat(A,")[,|\\s]+(").concat(A,")\\s*\\)?"),m={CSS_UNIT:new RegExp(A),rgb:new RegExp("rgb"+W),rgba:new RegExp("rgba"+q),hsl:new RegExp("hsl"+W),hsla:new RegExp("hsla"+q),hsv:new RegExp("hsv"+W),hsva:new RegExp("hsva"+q),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Gt(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;var t=!1;if(L[r])r=L[r],t=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e=m.rgb.exec(r);return e?{r:e[1],g:e[2],b:e[3]}:(e=m.rgba.exec(r),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=m.hsl.exec(r),e?{h:e[1],s:e[2],l:e[3]}:(e=m.hsla.exec(r),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=m.hsv.exec(r),e?{h:e[1],s:e[2],v:e[3]}:(e=m.hsva.exec(r),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=m.hex8.exec(r),e?{r:v(e[1]),g:v(e[2]),b:v(e[3]),a:ft(e[4]),format:t?"name":"hex8"}:(e=m.hex6.exec(r),e?{r:v(e[1]),g:v(e[2]),b:v(e[3]),format:t?"name":"hex"}:(e=m.hex4.exec(r),e?{r:v(e[1]+e[1]),g:v(e[2]+e[2]),b:v(e[3]+e[3]),a:ft(e[4]+e[4]),format:t?"name":"hex8"}:(e=m.hex3.exec(r),e?{r:v(e[1]+e[1]),g:v(e[2]+e[2]),b:v(e[3]+e[3]),format:t?"name":"hex"}:!1)))))))))}function _(r){return Boolean(m.CSS_UNIT.exec(String(r)))}var zt=function(){function r(t,e){t===void 0&&(t=""),e===void 0&&(e={});var a;if(t instanceof r)return t;typeof t=="number"&&(t=Bt(t)),this.originalInput=t;var i=jt(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(a=e.format)!==null&&a!==void 0?a:i.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return r.prototype.isDark=function(){return this.getBrightness()<128},r.prototype.isLight=function(){return!this.isDark()},r.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},r.prototype.getLuminance=function(){var t=this.toRgb(),e,a,i,n=t.r/255,s=t.g/255,f=t.b/255;return n<=.03928?e=n/12.92:e=Math.pow((n+.055)/1.055,2.4),s<=.03928?a=s/12.92:a=Math.pow((s+.055)/1.055,2.4),f<=.03928?i=f/12.92:i=Math.pow((f+.055)/1.055,2.4),.2126*e+.7152*a+.0722*i},r.prototype.getAlpha=function(){return this.a},r.prototype.setAlpha=function(t){return this.a=lt(t),this.roundA=Math.round(100*this.a)/100,this},r.prototype.toHsv=function(){var t=nt(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},r.prototype.toHsvString=function(){var t=nt(this.r,this.g,this.b),e=Math.round(t.h*360),a=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?"hsv(".concat(e,", ").concat(a,"%, ").concat(i,"%)"):"hsva(".concat(e,", ").concat(a,"%, ").concat(i,"%, ").concat(this.roundA,")")},r.prototype.toHsl=function(){var t=it(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},r.prototype.toHslString=function(){var t=it(this.r,this.g,this.b),e=Math.round(t.h*360),a=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?"hsl(".concat(e,", ").concat(a,"%, ").concat(i,"%)"):"hsla(".concat(e,", ").concat(a,"%, ").concat(i,"%, ").concat(this.roundA,")")},r.prototype.toHex=function(t){return t===void 0&&(t=!1),st(this.r,this.g,this.b,t)},r.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},r.prototype.toHex8=function(t){return t===void 0&&(t=!1),It(this.r,this.g,this.b,this.a,t)},r.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},r.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},r.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),a=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(e,", ").concat(a,")"):"rgba(".concat(t,", ").concat(e,", ").concat(a,", ").concat(this.roundA,")")},r.prototype.toPercentageRgb=function(){var t=function(e){return"".concat(Math.round(d(e,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},r.prototype.toPercentageRgbString=function(){var t=function(e){return Math.round(d(e,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},r.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+st(this.r,this.g,this.b,!1),e=0,a=Object.entries(L);e<a.length;e++){var i=a[e],n=i[0],s=i[1];if(t===s)return n}return!1},r.prototype.toString=function(t){var e=Boolean(t);t=t!=null?t:this.format;var a=!1,i=this.a<1&&this.a>=0,n=!e&&i&&(t.startsWith("hex")||t==="name");return n?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(a=this.toRgbString()),t==="prgb"&&(a=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(a=this.toHexString()),t==="hex3"&&(a=this.toHexString(!0)),t==="hex4"&&(a=this.toHex8String(!0)),t==="hex8"&&(a=this.toHex8String()),t==="name"&&(a=this.toName()),t==="hsl"&&(a=this.toHslString()),t==="hsv"&&(a=this.toHsvString()),a||this.toHexString())},r.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},r.prototype.clone=function(){return new r(this.toString())},r.prototype.lighten=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.l+=t/100,e.l=B(e.l),new r(e)},r.prototype.brighten=function(t){t===void 0&&(t=10);var e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(t/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(t/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(t/100)))),new r(e)},r.prototype.darken=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.l-=t/100,e.l=B(e.l),new r(e)},r.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},r.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},r.prototype.desaturate=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.s-=t/100,e.s=B(e.s),new r(e)},r.prototype.saturate=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.s+=t/100,e.s=B(e.s),new r(e)},r.prototype.greyscale=function(){return this.desaturate(100)},r.prototype.spin=function(t){var e=this.toHsl(),a=(e.h+t)%360;return e.h=a<0?360+a:a,new r(e)},r.prototype.mix=function(t,e){e===void 0&&(e=50);var a=this.toRgb(),i=new r(t).toRgb(),n=e/100,s={r:(i.r-a.r)*n+a.r,g:(i.g-a.g)*n+a.g,b:(i.b-a.b)*n+a.b,a:(i.a-a.a)*n+a.a};return new r(s)},r.prototype.analogous=function(t,e){t===void 0&&(t=6),e===void 0&&(e=30);var a=this.toHsl(),i=360/e,n=[this];for(a.h=(a.h-(i*t>>1)+720)%360;--t;)a.h=(a.h+i)%360,n.push(new r(a));return n},r.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new r(t)},r.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var e=this.toHsv(),a=e.h,i=e.s,n=e.v,s=[],f=1/t;t--;)s.push(new r({h:a,s:i,v:n})),n=(n+f)%1;return s},r.prototype.splitcomplement=function(){var t=this.toHsl(),e=t.h;return[this,new r({h:(e+72)%360,s:t.s,l:t.l}),new r({h:(e+216)%360,s:t.s,l:t.l})]},r.prototype.onBackground=function(t){var e=this.toRgb(),a=new r(t).toRgb();return new r({r:a.r+(e.r-a.r)*e.a,g:a.g+(e.g-a.g)*e.a,b:a.b+(e.b-a.b)*e.a})},r.prototype.triad=function(){return this.polyad(3)},r.prototype.tetrad=function(){return this.polyad(4)},r.prototype.polyad=function(t){for(var e=this.toHsl(),a=e.h,i=[this],n=360/t,s=1;s<t;s++)i.push(new r({h:(a+s*n)%360,s:e.s,l:e.l}));return i},r.prototype.equals=function(t){return this.toRgbString()===new r(t).toRgbString()},r}();const Ct=r=>({}),ot=r=>({}),Ot=r=>({}),ht=r=>({});function Wt(r){let t,e;const a=r[17].sub,i=D(a,r,r[16],ht);return{c(){t=P("span"),i&&i.c(),this.h()},l(n){t=G(n,"SPAN",{class:!0});var s=z(t);i&&i.l(s),s.forEach(M),this.h()},h(){N(t,"class","avatar-icon svelte-jscm3l")},m(n,s){E(n,t,s),i&&i.m(t,null),e=!0},p(n,s){i&&i.p&&(!e||s&65536)&&V(i,a,n,n[16],e?J(a,n[16],s,Ot):Z(n[16]),ht)},i(n){e||(S(i,n),e=!0)},o(n){w(i,n),e=!1},d(n){n&&M(t),i&&i.d(n)}}}function qt(r){let t,e;return{c(){t=P("i"),this.h()},l(a){t=G(a,"I",{class:!0}),z(t).forEach(M),this.h()},h(){N(t,"class",e="avatar-presence "+r[4]+" svelte-jscm3l")},m(a,i){E(a,t,i)},p(a,i){i&16&&e!==(e="avatar-presence "+a[4]+" svelte-jscm3l")&&N(t,"class",e)},i:at,o:at,d(a){a&&M(t)}}}function ut(r){let t,e;const a=r[17].caption,i=D(a,r,r[16],ot),n=i||Ut(r);return{c(){t=P("figcaption"),n&&n.c(),this.h()},l(s){t=G(s,"FIGCAPTION",{class:!0});var f=z(t);n&&n.l(f),f.forEach(M),this.h()},h(){N(t,"class","svelte-jscm3l")},m(s,f){E(s,t,f),n&&n.m(t,null),e=!0},p(s,f){i?i.p&&(!e||f&65536)&&V(i,a,s,s[16],e?J(a,s[16],f,Ct):Z(s[16]),ot):n&&n.p&&(!e||f&1)&&n.p(s,e?f:-1)},i(s){e||(S(n,s),e=!0)},o(s){w(n,s),e=!1},d(s){s&&M(t),n&&n.d(s)}}}function Ut(r){let t;return{c(){t=_t(r[0])},l(e){t=Mt(e,r[0])},m(e,a){E(e,t,a)},p(e,a){a&1&&kt(t,e[0])},d(e){e&&M(t)}}}function Lt(r){let t,e,a,i,n,s,f,l,b,c,y,F;const H=r[17].default,g=D(H,r,r[16],null),T=[qt,Wt],p=[];function I(h,o){return h[4]?0:h[10].sub?1:-1}~(a=I(r))&&(i=p[a]=T[a](r));let u=(r[1]||r[10].caption)&&ut(r),k=[r[9],{class:s="avatar avatar-"+r[2]+" text-"+r[3]},{"data-initial":f=`${r[7]||""}`},{style:l=""+(r[6]&&`--fontSize: ${r[6]}px`)+"; background-color: "+r[8].toHexString()+"; color: "+(r[8].isLight()?"#000":"#fff")}],R={};for(let h=0;h<k.length;h+=1)R=U(R,k[h]);return{c(){t=P("figure"),g&&g.c(),e=X(),i&&i.c(),n=X(),u&&u.c(),this.h()},l(h){t=G(h,"FIGURE",{class:!0,"data-initial":!0,style:!0});var o=z(t);g&&g.l(o),e=Y(o),i&&i.l(o),n=Y(o),u&&u.l(o),o.forEach(M),this.h()},h(){K(t,R),Q(t,"svelte-jscm3l",!0)},m(h,o){E(h,t,o),g&&g.m(t,null),$(t,e),~a&&p[a].m(t,null),$(t,n),u&&u.m(t,null),c=!0,y||(F=bt(b=St.call(null,t,r[5])),y=!0)},p(h,[o]){g&&g.p&&(!c||o&65536)&&V(g,H,h,h[16],c?J(H,h[16],o,null):Z(h[16]),null);let C=a;a=I(h),a===C?~a&&p[a].p(h,o):(i&&(tt(),w(p[C],1,1,()=>{p[C]=null}),et()),~a?(i=p[a],i?i.p(h,o):(i=p[a]=T[a](h),i.c()),S(i,1),i.m(t,n)):i=null),h[1]||h[10].caption?u?(u.p(h,o),o&1026&&S(u,1)):(u=ut(h),u.c(),S(u,1),u.m(t,null)):u&&(tt(),w(u,1,1,()=>{u=null}),et()),K(t,R=vt(k,[o&512&&h[9],(!c||o&12&&s!==(s="avatar avatar-"+h[2]+" text-"+h[3]))&&{class:s},(!c||o&128&&f!==(f=`${h[7]||""}`))&&{"data-initial":f},(!c||o&320&&l!==(l=""+(h[6]&&`--fontSize: ${h[6]}px`)+"; background-color: "+h[8].toHexString()+"; color: "+(h[8].isLight()?"#000":"#fff")))&&{style:l}])),b&&pt(b.update)&&o&32&&b.update.call(null,h[5]),Q(t,"svelte-jscm3l",!0)},i(h){c||(S(g,h),S(i),S(u),c=!0)},o(h){w(g,h),w(i),w(u),c=!1},d(h){h&&M(t),g&&g.d(h),~a&&p[a].d(),u&&u.d(),y=!1,F()}}}function Dt(r,t,e){let a;const i=["name","bg","len","caption","custom","size","weight","status","badge"];let n=rt(t,i),{$$slots:s={},$$scope:f}=t;const l=mt(s);let{name:b=""}=t,{bg:c=""}=t,{len:y=0}=t,{caption:F=!1}=t,{custom:H=!1}=t,{size:g="md"}=t,{weight:T="normal"}=t,{status:p=null}=t,{badge:I=""}=t,u,k,R,h;return r.$$set=o=>{t=U(U({},t),yt(o)),e(9,n=rt(t,i)),"name"in o&&e(0,b=o.name),"bg"in o&&e(11,c=o.bg),"len"in o&&e(12,y=o.len),"caption"in o&&e(1,F=o.caption),"custom"in o&&e(13,H=o.custom),"size"in o&&e(2,g=o.size),"weight"in o&&e(3,T=o.weight),"status"in o&&e(4,p=o.status),"badge"in o&&e(5,I=o.badge),"$$scope"in o&&e(16,f=o.$$scope)},r.$$.update=()=>{r.$$.dirty&2049&&e(8,a=new zt(c||At(b))),r.$$.dirty&1&&e(14,u=b.length&&b.replace(".","/").match(/\b(\w)|([A-Z])|(\/)/g)),r.$$.dirty&20480&&e(15,k=y||u.length),r.$$.dirty&32772&&e(6,R=Ht[g]*(1/k)),r.$$.dirty&57345&&e(7,h=H?b:u.length&&u.slice(0,k).join("").toUpperCase())},[b,F,g,T,p,I,R,h,a,n,l,c,y,H,u,k,f,s]}class Xt extends ct{constructor(t){super(),gt(this,t,Dt,Lt,dt,{name:0,bg:11,len:12,caption:1,custom:13,size:2,weight:3,status:4,badge:5})}}export{Xt as A};
