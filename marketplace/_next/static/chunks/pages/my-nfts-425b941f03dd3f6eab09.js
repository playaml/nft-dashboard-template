(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{5930:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(809),s=t.n(r),c=t(5893),o=t(2447),a=t(241),i=t(387),u=t(7616),l=t(7294),d=t(9669),f=t.n(d),p=t(2484),h=t.n(p),x=t(1163),m=t(2025),w=t(1692);function g(){var e=(0,l.useState)([]),n=e[0],t=e[1],r=(0,l.useState)("not-loaded"),d=r[0],p=r[1],g=(0,x.useRouter)();function k(){return(k=(0,o.Z)(s().mark((function e(){var n,r,c,l,d,x,g;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(h())({network:"mainnet",cacheProvider:!0}),e.next=3,n.connect();case 3:return r=e.sent,c=new a.Q(r),l=c.getSigner(),d=new i.CH(m.I,w.Mt,l),e.next=9,d.fetchMyNFTs();case 9:return x=e.sent,e.next=12,Promise.all(x.map(function(){var e=(0,o.Z)(s().mark((function e(n){var t,r,c,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.tokenURI(n.tokenId);case 2:return t=e.sent,e.next=5,f().get(t);case 5:return r=e.sent,c=u.bM(n.price.toString(),"ether"),o={price:c,tokenId:n.tokenId.toNumber(),seller:n.seller,owner:n.owner,image:r.data.image,tokenURI:t},e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 12:g=e.sent,t(g),p("loaded");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[]),"loaded"!==d||n.length?(0,c.jsx)("div",{className:"flex justify-center",children:(0,c.jsx)("div",{className:"p-4",children:(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:n.map((function(e,n){return(0,c.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,c.jsx)("img",{src:e.image,className:"rounded"}),(0,c.jsxs)("div",{className:"p-4 bg-black",children:[(0,c.jsxs)("p",{className:"text-2xl font-bold text-white",children:["Price - ",e.price," Eth"]}),(0,c.jsx)("button",{className:"mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",onClick:function(){return function(e){console.log("nft:",e),g.push("/resell-nft?id=".concat(e.tokenId,"&tokenURI=").concat(e.tokenURI))}(e)},children:"List"})]})]},n)}))})})}):(0,c.jsx)("h1",{className:"py-10 px-20 text-3xl",children:"No NFTs owned"})}},6074:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-nfts",function(){return t(5930)}])},1163:function(e,n,t){e.exports=t(4651)}},function(e){e.O(0,[277,380,669,248,774,888,179],(function(){return n=6074,e(e.s=n);var n}));var n=e.O();_N_E=n}]);