(function(){"use strict";var t={7163:function(t,o,e){var r=e(144),n=e(998),i=e(5716),c=e(3059),a=e(3687),s=e(7953),d=function(){var t=this,o=t._self._c;return o(n.Z,{attrs:{id:"inspire"}},[o(i.Z,{attrs:{app:""}},[o(a.Z),o(s.qW,{staticClass:"d-flex justify-center"},[t._v("Démonstration avec Heroku")]),o(a.Z)],1),o(c.Z,[o("router-view")],1)],1)},u=[],l={data:()=>({})},p=l,f=e(1001),h=(0,f.Z)(p,d,u,!1,null,null,null),m=h.exports,w=e(8345),v=e(6190),y=e(433),P=e(5802),g=function(){var t=this,o=t._self._c;return o(y.Z,[o("h1",{staticClass:"text-center my-5 blue--text text--darken-3"},[t._v(" Liste des produits ")]),o(P.Z,{staticClass:"elevation-1",attrs:{id:"product-list",headers:t.headers,items:t.products,"items-per-page":10},on:{"click:row":t.productClicked}}),o(v.Z,{staticClass:"mt-3",attrs:{color:"primary"},on:{click:t.addProduct}},[t._v(" Ajouter un produit ")])],1)},Z=[],_=e(196);const b="/api/product";class x{static async getAllProduct(){const t=await _.ZP.get(b);return t.data}static async getProductByID(t){const o=await _.ZP.get(`${b}/${t}`);return o.data}static async addProduct(t){const o=await _.ZP.post(b,t);return o.data}static async updateProduct(t,o){const e=await _.ZP.patch(`${b}/${t}`,o);return e.data}static async deleteProduct(t){const o=await _.ZP["delete"](`${b}/${t}`);return o.data}}var k={name:"MyHome",data(){return{headers:[{text:"Titre",value:"title"},{text:"Catégorie",value:"category"},{text:"Description",value:"description"}],products:[]}},async created(){this.products=await x.getAllProduct()},methods:{productClicked(t){const o=`/product/${t._id}`;window.location=o,window.location.href=o,window.location.assign(o)},addProduct(){const t="/addProduct";window.location=t,window.location.href=t,window.location.assign(t)}}},C=k,$=(0,f.Z)(C,g,Z,!1,null,null,null),O=$.exports,j=e(9582),D=e(4886),B=e(4324),A=function(){var t=this,o=t._self._c;return o(y.Z,[o(v.Z,{staticClass:"mb-3",attrs:{outlined:""},on:{click:function(o){return t.goBack()}}},[t._v(" Retour ")]),o(j.Z,[o(D.ZB,[o("p",{staticClass:"d-flex align-center"},[o(B.Z,{staticClass:"me-1"},[t._v(" mdi-code-braces-box ")]),t._v(" "+t._s(t.product._id)+" ")],1),o("h1",{staticClass:"text-center my-5 blue--text text--darken-3"},[t._v(" "+t._s(t.product.title)+" ")]),o("h3",[t._v("Catégorie")]),o("p",[t._v(t._s(t.product.category))]),o("h3",[t._v("Description")]),o("p",[t._v(t._s(t.product.description))])]),o(D.h7,{staticClass:"d-flex justify-space-between mx-3"},[o(v.Z,{attrs:{text:"",color:"primary"},on:{click:t.modifyProduct}},[t._v(" Modifier ")]),o(v.Z,{attrs:{text:"",color:"red"},on:{click:t.deleteProduct}},[t._v(" Supprimer ")])],1)],1)],1)},M=[],T={name:"ProductView",data(){return{product:{}}},async created(){this.product=await x.getProductByID(this.$route.params.id)},methods:{async modifyProduct(){const t=`/modifyProduct/${this.$route.params.id}`;window.location=t,window.location.href=t,window.location.assign(t)},async deleteProduct(){await x.deleteProduct(this.$route.params.id),this.goBack()},goBack(){const t="/";window.location=t,window.location.href=t,window.location.assign(t)}}},S=T,I=(0,f.Z)(S,A,M,!1,null,null,null),F=I.exports,H=e(7808),R=function(){var t=this,o=t._self._c;return o(y.Z,[o(v.Z,{staticClass:"mb-3",attrs:{outlined:""},on:{click:function(o){return t.goBack()}}},[t._v(" Retour ")]),o(j.Z,[o(D.ZB,[o("h1",{staticClass:"text-center my-5 blue--text text--darken-3"},[t._v(" "+t._s(t.title)+" ")]),o(H.Z,{attrs:{label:"Titre"},model:{value:t.product.title,callback:function(o){t.$set(t.product,"title",o)},expression:"product.title"}}),o(H.Z,{attrs:{label:"Catégorie"},model:{value:t.product.category,callback:function(o){t.$set(t.product,"category",o)},expression:"product.category"}}),o(H.Z,{attrs:{label:"Description"},model:{value:t.product.description,callback:function(o){t.$set(t.product,"description",o)},expression:"product.description"}})],1),o(D.h7,["ADD"===t.method?o(v.Z,{attrs:{text:"",color:"success"},on:{click:t.addProduct}},[t._v(" Ajouter ")]):t._e(),"MODIFY"===t.method?o(v.Z,{attrs:{text:"",color:"primary"},on:{click:t.updateProduct}},[t._v(" Modifier ")]):t._e()],1)],1)],1)},V=[],Y={name:"AddProduct",data(){return{product:{},method:"",title:""}},async created(){const t=this.$route.params.id;t?(this.product=await x.getProductByID(t),this.method="MODIFY",this.title="Modifier un produit"):(this.method="ADD",this.title="Ajouter un produit")},methods:{async addProduct(){await x.addProduct(this.product),this.goBack()},async updateProduct(){await x.updateProduct(this.$route.params.id,this.product),this.goBack()},goBack(){const t="/";window.location=t,window.location.href=t,window.location.assign(t)}}},q=Y,E=(0,f.Z)(q,R,V,!1,null,null,null),L=E.exports;r.ZP.use(w.Z);const W=[{path:"/",name:"MyHome",component:O},{path:"/product/:id",name:"ProductView",component:F},{path:"/addProduct",name:"AddProduct",component:L},{path:"/modifyProduct/:id",name:"AddProduct",component:L}],z=new w.Z({mode:"history",base:"/",routes:W});var G=z,J=e(1705);r.ZP.use(J.Z);var K=new J.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:G,vuetify:K,render:t=>t(m)}).$mount("#app")}},o={};function e(r){var n=o[r];if(void 0!==n)return n.exports;var i=o[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,r,n,i){if(!r){var c=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],i=t[u][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||c>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[s])}))?r.splice(s--,1):(a=!1,i<c&&(c=i));if(a){t.splice(u--,1);var d=n();void 0!==d&&(o=d)}}return o}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,n,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var n,i,c=r[0],a=r[1],s=r[2],d=0;if(c.some((function(o){return 0!==t[o]}))){for(n in a)e.o(a,n)&&(e.m[n]=a[n]);if(s)var u=s(e)}for(o&&o(r);d<c.length;d++)i=c[d],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(7163)}));r=e.O(r)})();
//# sourceMappingURL=app.e6e8d08e.js.map