(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(809),s=n.n(r),a=n(5893),i=n(2447),c=n(3226),o=n(387),u=n(7616),l=n(241),d=n(7294),p=n(9669),x=n.n(p),f=n(2484),h=n.n(f),m=n(2025),w=n(1692);function v(){var e=(0,d.useState)([]),t=e[0],n=e[1],r=(0,d.useState)("not-loaded"),p=r[0],f=r[1];function v(){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)(s().mark((function e(){var t,r,a,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new c.r,r=new o.CH(m.I,w.Mt,t),e.next=4,r.fetchMarketItems();case 4:return a=e.sent,e.next=7,Promise.all(a.map(function(){var e=(0,i.Z)(s().mark((function e(t){var n,a,i,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.tokenURI(t.tokenId);case 2:return n=e.sent,e.next=5,x().get(n);case 5:return a=e.sent,i=u.bM(t.price.toString(),"ether"),c={price:i,tokenId:t.tokenId.toNumber(),seller:t.seller,owner:t.owner,image:a.data.image,name:a.data.name,description:a.data.description},e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:l=e.sent,n(l),f("loaded");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=(0,i.Z)(s().mark((function e(t){var n,r,a,i,c,d,p;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(h()),e.next=3,n.connect();case 3:return r=e.sent,a=new l.Q(r),i=a.getSigner(),c=new o.CH(m.I,w.Mt,i),d=u.vz(t.price.toString(),"ether"),e.next=10,c.createMarketSale(t.tokenId,{value:d});case 10:return p=e.sent,e.next=13,p.wait();case 13:v();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){v()}),[]),"loaded"!==p||t.length?(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("div",{className:"px-4",style:{maxWidth:"1600px"},children:(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:t.map((function(e,t){return(0,a.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,a.jsx)("img",{src:e.image}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("p",{style:{height:"64px"},className:"text-2xl font-semibold",children:e.name}),(0,a.jsx)("div",{style:{height:"70px",overflow:"hidden"},children:(0,a.jsx)("p",{className:"text-gray-400",children:e.description})})]}),(0,a.jsxs)("div",{className:"p-4 bg-black",children:[(0,a.jsxs)("p",{className:"text-2xl font-bold text-white",children:[e.price," ETH"]}),(0,a.jsx)("button",{className:"mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",onClick:function(){return function(e){return k.apply(this,arguments)}(e)},children:"Buy"})]})]},t)}))})})}):(0,a.jsx)("h1",{className:"px-20 py-10 text-3xl",children:"No items in marketplace"})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])}},function(e){e.O(0,[277,380,669,248,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);