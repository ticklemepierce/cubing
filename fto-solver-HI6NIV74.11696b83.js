var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire946f;e.register("8FR2p",(function(t,n){var r,l,f,o;r=t.exports,l="randomFTOScrambleString",f=()=>nt,Object.defineProperty(r,l,{get:f,set:o,enumerable:!0,configurable:!0});var i=e("80rC8");function a(e){if(e<2)return e;let t=1;for(let n=2;n<=e;n++)t*=n;return t}function u(e,t){if(t<0||t>e)return 0;if(0===t||t===e)return 1;let n=1;for(let r=0;r<t;r++)n=n*(e-r)/(r+1)|0;return n}function c(e,t,n,r,l=e-t-n-r){return u(e,t+n)*u(t+n,t)*u(r+l,r)}function p(e,t){let n=[],r=a(t-1)/2,l=0;for(let l=0;l<t-1;l++)n[l]=e/r|0,e%=r,r/=t-1-l;n[t-1]=0;for(let e=t-2;e>=0;e--)for(let r=e+1;r<t;r++)n[r]>=n[e]?n[r]++:l^=1;return 1===l&&([n[t-2],n[t-1]]=[n[t-1],n[t-2]]),n}function h(e){return function(e){let t=(e=e.slice()).length,n=a(t-1),r=0;for(;t>1;){t--;let l=e[0];r+=l*n;for(let n=0;n<t;n++){let t=e[n+1];e[n]=t-(t>l)}n/=t}return r}(e)>>1}e("cks0r");var[s,g]=(()=>{let e=new Int8Array(2048),t=new Int8Array(2048);for(let n=0;n<256;n++)for(let r=0,l=0;r<8;r++)0!=(n>>>r&1)&&(e[r<<8|n]=l,t[l<<8|n]=r,l++);return[function(t){let n=255,r=2520,l=0;for(let f=0;f<6;f++){let o=t[f];l+=e[n|o<<8]*r,n&=~(1<<o),r/=7-f}return l},function(e,n){let r=255,l=2520,f=0;for(let o=0;o<6;o++){let i=e/l|0;e-=i*l,f^=1&i;let a=t[r|i<<8];n[o]=a,r&=~(1<<a),l/=7-o}return n[6]=t[r|f<<8],n[7]=t[r|(1^f)<<8],n}]})();function m(e,t){let n=[0];for(let r=1;r<e;r++){let e=t(r+1);n[r]=n[e],n[e]=r}return n}function _(e,t){let n=m(e,t);return 1===function(e){let t=e.length,n=0;for(let r=0;r<t-1;r++)for(let l=r;l<t;l++)e[r]>e[l]&&(n^=1);return n}(n)&&([n[0],n[1]]=[n[1],n[0]]),n}function d(e){return e|=0,31-Math.clz32(e^e-1)}var y={};function A(e,t){let n=(e|=0)+" "+(t|=0);if(y[n])return y[n];let r=u(e,t),l=new Uint32Array(r),f=new Uint32Array(1<<e).fill(-1);for(let e=0,n=(1<<t)-1;e<r;e++){l[e]=n,f[n]=e;let t=n|n-1;n=t+1|(~t&-~t)-1>>d(n)+1}return y[n]=[l,f]}function w(e){e|=0;let t=0;for(;0!==e;)e&=e-1,t++;return t}function x(e){return e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e&=65535)|e<<8))|e<<4))|e<<2))|e<<1)}var v={};function b(e,t,n,r,l){if((e|=0)!==(t|=0)+(n|=0)+(r|=0)+(l|=0))throw"generate_comb4_lookup_tables: invalid parameters";let f=[e,t,n,r,l].join(" ");if(v[f])return v[f];let[o,i]=A(e,n+l),[a,u]=A(e,r+l),p=c(e,t,n,r,l),h=new Uint32Array(p),s=new Uint32Array(4**e).fill(-1);for(let e=0,t=0;e<a.length;e++){let n=a[e];for(let e=0;e<o.length;e++){let r=o[e];if(w(r&n)===l){let e=(g=n,x(r)|x(g)<<1);h[t]=e,s[e]=t,t++}}}var g;return v[f]=[h,s]}function O(e,t){let n=[];for(let r=0;r<t.length;r++)n[r]=e[t[r]];return n}function U(e,t,n){let r=[];for(let l=0;l<n.length;l++)r[l]=e[t[n[l]]];return r}function B(e,t){let n=[];for(let e=0;e<t;e++)n[e]=e;for(let t of e)for(let e=0;e<t.length;e++)n[t[e]]=t[(e+1)%t.length];return n}function I(e,t){let n=e.length,r=Array(n).fill(0);for(let e=1;e<n;e++)r[e]=r[e-1]+t[e-1];let l=r[n-1]+t[n-1],f=Array(l);for(let l=0;l<n;l++)t[l]&&(f[r[l]]=r[e[l]]);return f}function M(e){let t=e.length,n=Array(t);for(let r=0;r<t;r++)n[e[r]]=r;return n}function k(e,t){return e*t/function(e,t){for(;e&&t;)[e,t]=[t%e,e];return Math.abs(e+t)}(e,t)}var j=Array(72).fill().map(((e,t)=>t/9|0)),F=B([[0,4,8],[1,6,3],[2,5,7],[9,22,35],[45,67,44],[47,68,43],[46,69,39],[50,70,38],[49,71,36]],72),R=O(F,F),L=Array(72).fill().map(((e,t)=>18*(t/18|0)+(t+9)%18)),T=(Array(72).fill().map(((e,t)=>36*(t/36|0)+(t+18)%36)),Array(72).fill().map(((e,t)=>(t+36)%72))),q=U(T,R,T),S=U(L,F,L),$=U(L,q,L),z=O(F,B([[10,24,30],[11,23,34],[12,19,33],[42,48,64],[41,52,65],[37,51,66]],72)),C=U(T,O(z,z),T),D=U(L,z,L),E=U(L,C,L),P=Array(72).fill().map(((e,t)=>t/9|0)),G=[[0,45,9,36],[4,67,22,49],[8,44,35,71],[13,58,31,40],[17,53,26,62],[18,63,27,54]],H=[[1,46],[3,39],[6,69],[10,37],[33,42],[12,48],[15,60],[24,51],[19,64],[28,55],[30,66],[21,57]],J=Array(12).fill().map(((e,t)=>9*(t/3|0)+[2,5,7][t%3])),K=J.map((e=>e+36));function N(e,t){return function(e,t){for(let n=0;n<6;n++){if(e===P[G[n][0]]&&t===P[G[n][2]])return[n,0];if(e===P[G[n][2]]&&t===P[G[n][0]])return[n,1]}throw"unknown corner piece"}(e[G[t][0]],e[G[t][2]])}function Q(e,t){return function(e,t){for(let n=0;n<12;n++){if(e===P[H[n][0]]&&t===P[H[n][1]])return n;if(t===P[H[n][0]]&&e===P[H[n][1]])return n}throw"unknown edge piece"}(e[H[t][0]],e[H[t][1]])}function V(e,t,n,r){let l=G[t],f=G[n].map((e=>P[e]));r%2!=0&&(f=[f[2],f[3],f[0],f[1]]);for(let t=0;t<4;t++)e[l[t]]=f[t]}function W(e,t,n){let r=H[t],l=H[n].map((e=>P[e]));for(let t=0;t<2;t++)e[r[t]]=l[t]}function X(e){let t=e.map((e=>P[e])),n=Array(6).fill().map(((e,n)=>N(t,n))).map((([e,t])=>e+6*t));return{cp:n.concat(n.map((e=>(e+6)%12))),ep:Array(12).fill().map(((e,n)=>Q(t,n))),ap:Array(12).fill().map(((t,n)=>J.indexOf(e[J[n]]))),bp:Array(12).fill().map(((t,n)=>K.indexOf(e[K[n]])))}}var Y=[F,q,S,$,z,C,D,E],Z=["U","L","F","R","u","l","f","r"],ee=Y.map(X);function te(e,t=!1){if(t){const t=0,n=1,r=2,l=3,f=4,o=5,i=6,a=7;e=e.map((e=>e.slice()));let u=[t,n,r,l,f,o,i,a],c=[[t,l,o,i,f,a,n,r],[a,n,t,i,l,o,f,r],[a,f,r,n,l,t,i,o],[r,f,o,l,i,t,n,a]];c=c.concat(c.map((e=>M(e))));for(let t=0;t<e.length;t++)if(e[t][0]<4)e[t][0]=u[e[t][0]];else{let n=u[e[t][0]],r=e[t][1];e[t][0]=n,u=O(1===r?c[4^n]:c[n],u)}}let n=t?"U L F R D BR B BL".split(" "):Z,r=["0","","'"];return e.map((([e,t])=>n[e]+r[t])).join(" ")}function ne(e,t){for(let[n,r]of t)for(let t=0;t<r;t++)e=O(e,Y[n]);return e}function re(e){return e.map((([e,t])=>[e,(3-t)%3])).reverse()}function le(e,t=!1){if(0===e.length)return[];let n,r=[];for(let[t,l]of e)n&&n[0]===t?(n[1]+=l,n[1]%=3,0===n[1]&&(r.pop(),n=0===r.length?void 0:r[r.length-1])):r.length>=2&&4==(n[0]^t)&&r[r.length-2][0]===t?(r[r.length-2][1]+=l,r[r.length-2][1]%=3,0===r[r.length-2][1]&&r.splice(r.length-2,1)):(n=[t,l],r.push(n));return t&&""+e!=""+r&&console.log(`simplified ${e} to ${r}`),r}function fe(e){return te(re(function(e,t=!1){let n=function*(e){let t=[ge(),_e(),de()],n=[me(),ye(),ye()];yield*function*(e,t,n,r){let l=e.length,f=0;for(let t=0;t<l;t++)f=Math.max(f,n[t][e[t]]);for(;f<=r;)yield*Ae(e,t,n,f,-1),f++}(function(e){let[t,n]=b(12,6,0,3,3),r=Array(12).fill().map(((t,n)=>Q(e,n))),l=r.indexOf(8)+12*r.indexOf(9)+144*r.indexOf(10)+1728*r.indexOf(11),[f,o]=[J,K].map((t=>{let r=t.map((t=>se[e[t]]));return n[r.reduce(((e,t,n)=>e|t<<2*n),0)]}));return[l,f,o]}(e),t,n,15)}(e).next().value,r=ne(e,n),l=(t?et:Ze)(r),f=le(n.concat(l),!1);ne(e,f).join("")!==j.join("")&&(console.log("solving failed!"),console.log(e),console.log(n),console.log(r),console.log(l),console.log(ne(e,f)));return f}(function(e){let t=Array(72),n=_(5,e);n.push(5);let r=Array(4).fill().map((t=>e(2)));r.push(r.reduce(((e,t)=>e^t))),r.push(0);for(let e=0;e<6;e++)V(t,e,n[e],r[e]);let l=_(12,e);for(let e=0;e<12;e++)W(t,e,l[e]);let f=m(12,e).map((e=>e/3|0)),o=m(12,e).map((e=>4+(e/3|0)));for(let e=0;e<12;e++)t[J[e]]=f[e],t[K[e]]=o[e];return t}(e),!0)),!0)}function oe(e,t,n,r,l,f){let o=c(e,t,n,r,l),i=f.length,[a,u]=b(e,t,n,r,l),p=Array(i).fill().map((()=>new Uint32Array(o)));for(let t=0;t<o;t++){let n=a[t],r=Array(e);for(let t=0;t<e;t++)r[t]=n>>2*t&3;for(let e=0;e<i;e++){let n=O(r,f[e]).reduce(((e,t,n)=>e|t<<2*n),0);p[e][t]=u[n]}}return p}function ie(e){let t=e[0].length,n=e.length,r=Array(n).fill().map((()=>new Uint32Array(t)));for(let l=0;l<t;l++)for(let t=0;t<n;t++)r[t][e[t][l]]=l;return r}function ae(e,t){let n=e[0].length,r=t[0].length,l=e.length,f=Array(l).fill().map((()=>new Uint32Array(n*r)));for(let o=0;o<r;o++)for(let r=0;r<n;r++){let i=r+n*o;for(let a=0;a<l;a++)f[a][i]=e[a][r]+n*t[a][o]}return f}function ue(e,t,n){let r=e[0].length,l=e.length,f=new Int32Array(r).fill(-1);f[t]=n,f[n]=t;let o=!1;for(;!o;){o=!0;for(let t=0;t<r;t++){if(-1===f[t])continue;let n=f[t];for(let r=0;r<l;r++){let l=1^r,i=e[r][t],a=e[l][e[l][n]];if(-1===f[i])o=!1,f[i]=a,f[a]=i;else if(f[i]!==a)throw"mirroring failed - is the initial map correct?"}}}return f}function ce(e,t){let n=e[0].length,r=e.length,l=new Int8Array(n).fill(-1);for(let e of t)l[e]=0;let f=0,o=!1;for(;!o;){o=!0;for(let t=0;t<n;t++)if(l[t]===f)for(let n=0;n<r;n++){let r=e[n][t];for(;r!==t;)-1===l[r]&&(o=!1,l[r]=f+1),r=e[n][r]}f++}return l}var pe={},he={},se=[0,0,2,3,0,0,2,3];function ge(){if(pe.phase1_edge)return pe.phase1_edge;let e=ie(ee.map((e=>e.ep))),t=ae(e,e),n=ae(t,t);return pe.phase1_edge=n}function me(){return he.phase1_edge?he.phase1_edge:he.phase1_edge=ce(ge(),[20564])}function _e(){return pe.phase1_centreA?pe.phase1_centreA:pe.phase1_centreA=oe(12,6,0,3,3,ee.map((e=>e.ap)))}function de(){return pe.phase1_centreB?pe.phase1_centreB:pe.phase1_centreB=oe(12,6,0,3,3,ee.map((e=>e.bp)))}function ye(){if(he.phase1_centre)return he.phase1_centre;let[e,t]=b(12,6,0,3,3),n=e.filter((e=>2===(e>>12&3)&&3===(e>>18&3))).map((e=>t[e]));return he.phase1_centre=ce(de(),n)}function*Ae(e,t,n,r,l){let f=Math.max(n[0][e[0]],n[1][e[1]],n[2][e[2]]);if(!(f>r))if(0!==r){if(0!==f||1!==r)for(let f=0;f<8;f++){if(f===l)continue;if(f===l-4)continue;let o=[];o[0]=t[0][f][e[0]],o[1]=t[1][f][e[1]],o[2]=t[2][f][e[2]];let i=1;for(;e.some(((t,n)=>e[n]!=o[n]));){let e=Ae(o,t,n,r-1,f);for(;;){let{value:t,done:n}=e.next();if(n)break;yield[[f,i]].concat(t)}o[0]=t[0][f][o[0]],o[1]=t[1][f][o[1]],o[2]=t[2][f][o[2]],i++}}}else yield[]}var we,xe,ve,be=[0,1,2,0,0,1,2,0],Oe=[0,1,2,3,4,5,7,8,10,11],Ue=[!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0];function Be(e){let[t,n]=b(10,5,3,2,0),r=Array(8).fill().map(((t,n)=>Q(e,n))),l=r.indexOf(5)+8*r.indexOf(6)+64*r.indexOf(7),f=Array(5).fill().map(((t,n)=>N(e,n))),o=M(f.map((([e,t])=>e+5*t)).concat(f.map((([e,t])=>e+5*(1^t))))),i=o.slice(0,5).map((e=>e%5)),a=o.slice(0,5).map((e=>e/5|0)),u=8*h(i)+(a[0]^a[2])+2*(a[0]^a[3])+4*a[4],[c,p]=[J,K].map((t=>{let r=O(t,Oe).map((t=>be[e[t]]));return n[r.reduce(((e,t,n)=>e|t<<2*n),0)]}));return ke(),Fe(),[c,p,xe[u]+40*we[l]]}function*Ie(e){yield*function*(e,t){let[n,r]=Me(),l=Re(),f=function(){if(he.phase2_ace)return he.phase2_ace;const[e,t]=Me(),n=Re(),r=2520,l=13440*r,f=Be(j)[2],o=9;let i=new Int8Array(l).fill(o);for(let e of function(){let[e,t]=b(10,5,3,2,0);return e.filter((e=>41==(e>>10&63))).map((e=>t[e]))}())i[e+r*f]=0;for(let t=0;t<o-1;t++)for(let l=i.indexOf(t);-1!==l;l=i.indexOf(t,l+1)){let f=l%r,a=l/r|0;for(let l=0;l<4;l++){let u=e[l][f],c=n[l][a],p=u+r*c;i[p]===o&&(i[p]=t+1),u=e[l][u],c=n[l][c],p=u+r*c,i[p]===o&&(i[p]=t+1)}}return he.phase2_ace=i}(),o=function(){if(ve)return ve;const e=Be(j)[2];return ve=ue(Re(),e,e)}(),[i,a,u]=e,c=o[u],p=Math.max(f[i+2520*u],f[a+2520*c]);for(;p<=t;)yield*Le(i,a,u,n,r,l,f,o,p,-1),p++}(Be(e),30)}function Me(){if(pe.phase2_centre)return pe.phase2_centre;let e=oe(10,5,3,2,0,ee.slice(0,4).map((e=>I(e.ap,Ue)))),t=oe(10,5,3,2,0,ee.slice(0,4).map((e=>I(e.bp,Ue))));return pe.phase2_centre=[e,t]}function ke(){if(pe.phase2_edge)return pe.phase2_edge;let e,t=ie(ee.slice(0,4).map((e=>e.ep.slice(0,8)))),n=ae(t,ae(t,t));return[e,we]=function(e,t){let n=e.length,r=e[0].length,l=new Uint8Array(r);l[t]=1;let f=!1;for(;!f;){f=!0;for(let t=0;t<r;t++)if(l[t])for(let r=0;r<n;r++)l[e[r][t]]||(l[e[r][t]]=1,f=!1)}let o=new Int32Array(r).fill(-1);for(let e=0,t=0;e<r;e++)l[e]&&(o[e]=t,t++);return[e.map((e=>I(e,l))),o]}(n,501),pe.phase2_edge=e}function je(){if(pe.phase2_corner)return pe.phase2_corner;const e=8*(a(5)/2),t=[!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1];let n=Array(4).fill().map((()=>new Uint32Array(e))),r=ee.slice(0,4).map((e=>M(I(e.cp,t))));for(let t=0;t<e;t++){let e=p(t>>3,5),l=[0,0,1&t,t>>1&1,t>>2&1];l[1]=l[2]^l[3]^l[4];let f=Array(10);for(let t=0;t<5;t++)f[t]=e[t]+5*l[t],f[t+5]=e[t]+5*(1^l[t]);for(let e=0;e<4;e++){let l=O(r[e],f),o=l.slice(0,5).map((e=>e%5)),i=l.slice(0,5).map((e=>e/5|0)),a=(i[0]^i[2])+2*(i[0]^i[3])+4*i[4];n[e][t]=8*h(o)+a}}return pe.phase2_corner=n}function Fe(){return pe.phase2_corner_compact||([pe.phase2_corner_compact,xe]=function(e,t){let n=e.length,r=e[0].length,l=new Int32Array(r).fill(-1);t.forEach((e=>{l[e]=0}));let f=[t];for(let t=0;t<f.length;t++){let r=f[t];for(let t=0;t<n;t++){let n=e[t][r[0]];if(-1!==l[n])continue;let o=r.map((n=>e[t][n])),i=f.length;f.push(o);for(let e of o){if(-1!==l[e])throw"quotienting failed";l[e]=i}}}let o=f.length,i=Array(n).fill().map((()=>new Int32Array(o)));for(let t=0;t<n;t++)for(let n=0;n<o;n++)i[t][n]=l[e[t][f[n][0]]];return[i,l]}(je(),function(){let e=je(),t=e[0].length,n=Array(t).fill(!1);n[0]=!0;let r=!1;for(;!r;){r=!0;for(let l=0;l<t;l++)n[l]&&(n[e[0][l]]||(r=!1,n[e[0][l]]=!0),n[e[1][l]]||(r=!1,n[e[1][l]]=!0))}return n.map(((e,t)=>t)).filter((e=>n[e]))}())),pe.phase2_corner_compact}function Re(){if(pe.phase2_ce)return pe.phase2_ce;let e=Fe(),t=ke();return pe.phase2_ce=ae(e,t)}function*Le(e,t,n,r,l,f,o,i,a,u){let c=Math.max(o[e+2520*n],o[t+2520*i[n]]);if(!(c>a))if(0!==a){if(0!==c)for(let c=0;c<4;c++){if(c===u)continue;let p=e,h=t,s=n;for(let e=1;e<=2;e++){p=r[c][p],h=l[c][h],s=f[c][s];let t=Le(p,h,s,r,l,f,o,i,a-1,c);for(;;){let{value:n,done:r}=t.next();if(r)break;yield[[c,e]].concat(n)}}}}else yield[]}var Te,qe,Se=[0,1,2,3,4,10,11],$e=[!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!0,!0],ze=[[[0,1]],[[1,1]],[[2,1],[0,1],[3,1],[0,2],[3,2],[2,2]],[[3,2],[1,2],[2,2],[1,1],[2,1],[3,1]],[[6,1],[0,1],[3,1],[0,2],[3,2],[6,2]],[[7,2],[1,2],[2,2],[1,1],[2,1],[7,1]],[[2,1],[0,1],[2,2],[0,1],[2,1],[0,1],[2,2]],[[3,2],[1,1],[3,1],[1,1],[3,2],[1,1],[3,1]],[[2,1],[3,1],[2,2],[1,2],[0,2],[2,1],[3,1],[2,2]],[[3,2],[2,2],[3,1],[0,1],[1,1],[3,2],[2,2],[3,1]],[[6,1],[0,1],[6,2],[0,2],[1,2],[6,1],[0,1],[6,2]],[[7,2],[1,2],[7,1],[1,1],[0,1],[7,2],[1,2],[7,1]],[[2,1],[3,2],[2,2],[3,1],[0,1],[2,2],[1,1],[2,1]],[[3,2],[2,1],[3,1],[2,2],[1,2],[3,1],[0,2],[3,2]],[[6,1],[0,2],[6,2],[7,1],[6,1],[1,2],[7,1],[6,1]],[[7,2],[1,1],[7,1],[6,2],[7,2],[0,1],[6,2],[7,2]],[[2,2],[1,2],[2,2],[3,2],[2,2],[3,2],[0,2],[3,2]],[[6,2],[7,2],[1,2],[0,2],[1,2],[0,2],[6,2],[7,2]]],Ce=(ze=ze.concat(ze.map((e=>re(e))))).length,De=ze.map((e=>ne(B([],72),e))),Ee=De.map(X),Pe=De.map((function(e){let t=1,n=e.length,r=Array(n).fill(!1),l=-1;for(;l=r.indexOf(!1,l+1),-1!==l;){let n=0,f=l;for(;!r[f];)r[f]=!0,f=e[f],n++;t=k(t,n)}return t}));function Ge(e){let[t,n]=b(7,3,2,0,2),r=h(Array(5).fill().map(((t,n)=>Q(e,n)))),l=Array(4).fill().map(((t,n)=>N(e,n))),f=2*h(l.map((e=>e[0])))+l.find((e=>0===e[0]))[1],[o,i]=[J,K].map((t=>{let r=O(t,Se).map((t=>e[t]%4));return n[r.reduce(((e,t,n)=>e|t<<2*n),0)]}));return[o+210*i,f+24*r]}function He(){return pe.phase3_2gen_corneredge?pe.phase3_2gen_corneredge:pe.phase3_2gen_corneredge=ae(function(){if(pe.phase3_2gen_corner)return pe.phase3_2gen_corner;const e=a(4)/2*2,t=[!0,!0,!0,!0,!1,!1,!0,!0,!0,!0,!1,!1];let n=Array(Ce).fill().map((()=>new Uint32Array(e))),r=Ee.map((e=>I(e.cp,t).slice(0,4)));for(let t=0;t<e;t+=2){let e=p(t>>1,4),l=e.concat(e.map((e=>e+4)));for(let e=0;e<Ce;e++){let f=O(l,r[e]),o=f.map((e=>e%4)),i=f.find((e=>e%4==0))>>2;n[e][t]=2*h(o)+i,n[e][t+1]=2*h(o)+(1^i)}}return pe.phase3_2gen_corner=n}(),function(){if(pe.phase3_2gen_edge)return pe.phase3_2gen_edge;const e=a(5)/2;let t=Array(Ce).fill().map((()=>new Uint32Array(e))),n=Ee.map((e=>e.ep.slice(0,5)));for(let r=0;r<e;r++){let e=p(r,5);for(let l=0;l<Ce;l++)t[l][r]=h(O(e,n[l]))}return pe.phase3_2gen_edge=t}())}function Je(){if(pe.phase3_2gen_centre)return pe.phase3_2gen_centre;let e=oe(7,3,2,0,2,Ee.map((e=>I(e.ap,$e)))),t=oe(7,3,2,0,2,Ee.map((e=>I(e.bp,$e))));return pe.phase3_2gen_centreA=e,pe.phase3_2gen_centreB=t,pe.phase3_2gen_centre=ae(e,t)}function Ke(){if(Te)return Te;Je();const e=pe.phase3_2gen_centreA,t=He(),n=e[0].length,r=n*t[0].length,l=ze.map((e=>e.length)),f=new Int8Array(r).fill(25),o=Ge(j);f[o[0]%n+n*o[1]]=0;let i=0,a=!1;for(;!a&&i<24;){a=!0;let r=Array(Ce).fill().map(((e,t)=>t)).filter((e=>l[e]+i<25));r.sort(((e,t)=>l[e]-l[t]));let o=O(l,r),u=O(e,r),c=O(t,r),p=r.length;for(let e=f.indexOf(i);-1!==e;e=f.indexOf(i,e+1)){let t=e%n,r=e/n|0;for(let e=0;e<p;e++){let l=o[e],p=u[e][t]+n*c[e][r];f[p]>i+l&&(a=!1,f[p]=i+l)}}i++}return Te=f}function Ne(){if(qe)return qe;const e=He().slice(0,2),t=Ge(j);return qe=ue(e,t[1],t[1])}function Qe(e,t=Ge(e)){let[n,r]=t,l=n%210,f=Math.floor(n/210),o=(Je(),pe.phase3_2gen_centreA),i=pe.phase3_2gen_centreB,a=He(),u=Ke(),c=Ne(),p=0;for(;;){let e=Ye(l,f,r,o,i,a,u,c,p);for(let t of e)return t.map((e=>ze[e])).flat();p++}}function Ve(e,t=Ge(e)){let n,[r,l]=t,f=r%210,o=Math.floor(r/210),i=(Je(),pe.phase3_2gen_centreA),a=pe.phase3_2gen_centreB,u=He(),c=Ke(),p=Ne(),h=Qe(e).length,s=1/0;for(let e=h;e<=h+0;e++){let t=Ye(f,o,l,i,a,u,c,p,e);for(let e of t){let t=le(e.map((e=>ze[e])).flat()),r=Xe(t);r<s&&(s=r,n=t)}}return n}function We(e){return(e-1)*(e-2)/2}function Xe(e){let t=te(e,!0).replace(/'/g,"").split(" ");return e.length+function(e){if(e.length<3)return[];let t=e.length,n=[];for(let r=0;r<t-2;r++)n[r]=e[r]===e[r+2];n.push(!1);let r=-1,l=[];for(;r<t-2&&(r=n.indexOf(!0,r+1),-1!==r);){let e=n.indexOf(!1,r+1);l.push(e-r),r=e}return l}(t).map(We).reduce(((e,t)=>e+t),0)}function*Ye(e,t,n,r,l,f,o,i,a,u=-1){let c=o[e+210*n],p=o[t+210*i[n]],h=Math.max(c,p);if(!(h>a))if(0!==a){if(0!==h)for(let c=0;c<Ce;c++){if(c===u&&Pe[c]<=3)continue;let p=r[c][e],h=l[c][t],s=f[c][n],g=a-ze[c].length;if(g<0)continue;let m=Ye(p,h,s,r,l,f,o,i,g,c);for(;;){let{value:e,done:t}=m.next();if(t)break;yield[c].concat(e)}}}else yield[]}function Ze(e,t=200,n=24){let r=Ie(e),l=O(e,L).map((e=>1^e)),f=Ie(l),o=Array(1e3);for(let i=0;i<t;i++){{let{value:t,done:l}=r.next();if(!l){let r=ne(e,t),l=t.concat(Qe(r));if(l.length<=n)return l;l.length<o.length&&(o=l)}}{let{value:e,done:t}=f.next();if(!t){let t=ne(l,e),r=e.concat(Qe(t)).map((([e,t])=>[2^e,t]));if(r.length<=n)return r;r.length<o.length&&(o=r)}}}return o}function et(e,t=20,n=30){let r,l=Ie(e),f=O(e,L).map((e=>1^e)),o=Ie(f),i=1/0;for(let a=0;a<t;a++){{let{value:t,done:f}=l.next();if(!f){let l=ne(e,t),f=le(t.concat(Ve(l))),o=Xe(f);if(o<=n)return f;o<i&&(r=f,i=o)}}{let{value:e,done:t}=o.next();if(!t){let t=ne(f,e),l=le(e.concat(Ve(t)));l=l.map((([e,t])=>[2^e,t]));let o=Xe(l);if(o<=n)return l;o<i&&(r=l,i=o)}}}return r}var tt=i.randomUIntBelowFactory();async function nt(){return fe(await tt)}}));
//# sourceMappingURL=fto-solver-HI6NIV74.11696b83.js.map