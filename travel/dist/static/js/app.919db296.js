(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],d=0,h=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"02e6":function(t,e,i){},"0d4a":function(t,e,i){"use strict";var n=i("7d22"),a=i.n(n);a.a},"0ee2":function(t,e,i){},1201:function(t,e,i){"use strict";var n=i("dc4e"),a=i.n(n);a.a},"192a":function(t,e,i){},"1a7f":function(t,e,i){},"1c0f":function(t,e,i){"use strict";var n=i("e538"),a=i.n(n);a.a},"1e29":function(t,e,i){"use strict";var n=i("192a"),a=i.n(n);a.a},2545:function(t,e,i){"use strict";var n=i("b481"),a=i.n(n);a.a},3988:function(t,e,i){"use strict";var n=i("1a7f"),a=i.n(n);a.a},"4d43":function(t,e,i){},"4e9e":function(t,e,i){},"503f":function(t,e,i){"use strict";var n=i("a0dc"),a=i.n(n);a.a},"54b8":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",{attrs:{exclude:"Detail"}},[i("router-view")],1)],1)},s=[],r=(i("2545"),i("2877")),c={},o=Object(r["a"])(c,a,s,!1,null,"8b7b9254",null),l=o.exports,u=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"home",staticClass:"home"},[i("div",{staticClass:"wapper"},[i("home-header"),i("home-swiper",{attrs:{list:t.swiperList}}),i("home-icons",{attrs:{list:t.iconList}}),i("home-recommend",{attrs:{list:t.recommendList}}),i("home-weekend",{attrs:{list:t.weekendList}})],1)])},h=[],f=i("5530"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._m(1),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v(" "+t._s(this.city)+" "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-left"},[i("div",{staticClass:"iconfont back-icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-input"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" 输入城市/景点/游玩主题 ")])}],v=i("2f62"),b={name:"HomeHeader",computed:Object(f["a"])({},Object(v["c"])(["city"]))},y=b,C=(i("dbc3"),Object(r["a"])(y,m,p,!1,null,"dc7db4b2",null)),g=C.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.showSwiper?i("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.list,(function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},w=[],k={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOptions:{pagination:".swiper-pagination",loop:!0,speed:400,autoplay:2e3}}},computed:{showSwiper:function(){return this.list.length}}},O=k,j=(i("e120"),Object(r["a"])(O,_,w,!1,null,"6ce99238",null)),x=j.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.iconsOption}},[t._l(t.pages,(function(e,n){return i("swiper-slide",{key:n},t._l(e,(function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])})),0)})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},$=[],I=(i("4160"),i("159b"),{name:"HomeIcons",props:{list:Array},data:function(){return{iconsOption:{pagination:".swiper-pagination",autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach((function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)})),t}}}),E=I,L=(i("0d4a"),Object(r["a"])(E,S,$,!1,null,"78b73395",null)),H=L.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),i("ul",t._l(t.list,(function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])})),1)])},T=[],D={name:"HomeRecommend",props:{list:Array}},N=D,G=(i("a179"),Object(r["a"])(N,A,T,!1,null,"d16dc58e",null)),P=G.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),i("ul",t._l(t.list,(function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])})),0)])},B=[],F={name:"HomeWeekend",props:{list:Array}},U=F,Y=(i("e0d3"),Object(r["a"])(U,M,B,!1,null,"2621f318",null)),J=Y.exports,R=i("bc3a"),W=i.n(R),q=i("1fba"),z={name:"Home",components:{HomeHeader:g,HomeSwiper:x,HomeIcons:H,HomeRecommend:P,HomeWeekend:J},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},computed:Object(f["a"])({},Object(v["c"])(["city"])),methods:{getHomeInfo:function(){W.a.get("./json/data.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo(),this.scroll=new q["a"](this.$refs.home)},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},K=z,Q=(i("3988"),Object(r["a"])(K,d,h,!1,null,"5c865a7f",null)),V=Q.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city"},[i("city-header"),i("city-search",{attrs:{cities:t.cities}}),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},Z=[],tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._v(" 城市选择 "),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont header-back"},[t._v("")])])],1)},et=[],it={name:"CityHeader"},nt=it,at=(i("ac5c"),Object(r["a"])(nt,tt,et,!1,null,"2d043fd2",null)),st=at.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,(function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])})),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},ct=[],ot=(i("c975"),i("b0c0"),i("ac1f"),i("841c"),{name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},methods:Object(f["a"])({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(v["b"])(["changeCity"])),computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout((function(){var e=[];for(var i in t.cities)t.cities[i].forEach((function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)}));t.list=e}),100):this.list=[]}},mounted:function(){this.scroll=new q["a"](this.$refs.search)}}),lt=ot,ut=(i("1c0f"),Object(r["a"])(lt,rt,ct,!1,null,"3097d8b0",null)),dt=ut.exports,ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),i("div",{staticClass:"button-list"},t._l(t.hot,(function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])})),0)]),t._l(t.cities,(function(e,n){return i("div",{key:n,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(n))]),i("div",{staticClass:"item-list"},t._l(e,(function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])})),0)])}))],2)])},ft=[],mt={name:"CityList",props:{hot:Array,cities:Object,letter:String},computed:Object(f["a"])({},Object(v["c"])({currentCity:"city"})),methods:Object(f["a"])({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(v["b"])(["changeCity"])),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new q["a"](this.$refs.wrapper)}},pt=mt,vt=(i("5745"),Object(r["a"])(pt,ht,ft,!1,null,"433506dd",null)),bt=vt.exports,yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,(function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v(t._s(e))])})),0)},Ct=[],gt={name:"CityAlphabet",data:function(){return{touchStatus:!1,startY:0,timer:null}},props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},updated:function(){this.startY=this.$refs["A"][0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){var i=t.touches[0].clientY-79,n=Math.floor((i-e.startY)/20);n>=0&&n<e.letters.length&&e.$emit("change",e.letters[n])}),16))},handleTouchEnd:function(){this.touchStatus=!1}}},_t=gt,wt=(i("c3ce"),Object(r["a"])(_t,yt,Ct,!1,null,"441edd01",null)),kt=wt.exports,Ot={name:"City",data:function(){return{cities:{},hotCities:[],letter:""}},components:{CityHeader:st,CitySearch:dt,CityList:bt,CityAlphabet:kt},methods:{getCityInfo:function(){W.a.get("./json/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},jt=Ot,xt=Object(r["a"])(jt,X,Z,!1,null,null,null),St=xt.exports,$t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,bannerImgs:t.gallaryImgs}}),i("detail-header"),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1)],1)},It=[],Et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-tittle"},[t._v(t._s(this.sightName))]),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v(" "+t._s(this.bannerImgs.length)+" ")])])]),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},Lt=[],Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",on:{click:t.handleGallaryClick}},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.imgs,(function(t,e){return i("swiper-slide",{key:e},[i("img",{staticClass:"gallary-img",attrs:{src:t}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},At=[],Tt={name:"CommonGallary",data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},props:{imgs:{type:Array,default:function(){return[]}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},Dt=Tt,Nt=(i("1201"),Object(r["a"])(Dt,Ht,At,!1,null,"a9ce56ea",null)),Gt=Nt.exports,Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",[t._t("default")],2)},Mt=[],Bt={name:"FadeAnimation"},Ft=Bt,Ut=(i("1e29"),Object(r["a"])(Ft,Pt,Mt,!1,null,"556e4724",null)),Yt=Ut.exports,Jt={name:"DetailBanner",props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:Gt,FadeAnimation:Yt}},Rt=Jt,Wt=(i("503f"),Object(r["a"])(Rt,Et,Lt,!1,null,"5f9a3244",null)),qt=Wt.exports,zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[i("div",{staticClass:"iconfont header-abs-back"},[t._v("")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont header-fixed-back"},[t._v("")])]),t._v("景点详情 ")],1)],1)},Kt=[],Qt={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},Vt=Qt,Xt=(i("cc5e"),Object(r["a"])(Vt,zt,Kt,!1,null,"3c51609d",null)),Zt=Xt.exports,te=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v(" "+t._s(e.title)+" ")]),e.children?i("div",{staticClass:"item-chilren"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])})),0)},ee=[],ie={name:"DetailList",props:{list:Array}},ne=ie,ae=(i("e2df"),Object(r["a"])(ne,te,ee,!1,null,"6f9687bf",null)),se=ae.exports,re={name:"Detail",data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},components:{DetailBanner:qt,DetailHeader:Zt,DetailList:se},methods:{getDetailInfo:function(){W.a.get("./json/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},ce=re,oe=(i("fb26"),Object(r["a"])(ce,$t,It,!1,null,"17f3de10",null)),le=oe.exports;n["a"].use(u["a"]);var ue=[{path:"/",name:"Home",component:V},{path:"/city",name:"City",component:St},{path:"/detail/:id",name:"Detail",component:le}],de=new u["a"]({base:"",routes:ue,scrollBehavior:function(t,e,i){return{x:0,y:0}}}),he=de,fe="上海";try{localStorage.city&&(fe=localStorage.city)}catch(_e){}var me={city:fe},pe={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(_e){}}};n["a"].use(v["a"]);var ve=new v["a"].Store({state:me,mutations:pe}),be=(i("b059"),i("0ee2"),i("fe3c")),ye=i.n(be),Ce=(i("02e6"),i("1f80")),ge=i.n(Ce);i("dfa4"),i("840a");n["a"].config.productionTip=!1,ye.a.attach(document.body),n["a"].use(ge.a),new n["a"]({router:he,store:ve,render:function(t){return t(l)}}).$mount("#app")},5745:function(t,e,i){"use strict";var n=i("c8bc"),a=i.n(n);a.a},"7ce6":function(t,e,i){},"7d22":function(t,e,i){},"95db":function(t,e,i){},a0dc:function(t,e,i){},a179:function(t,e,i){"use strict";var n=i("54b8"),a=i.n(n);a.a},ab6e:function(t,e,i){},ac5c:function(t,e,i){"use strict";var n=i("7ce6"),a=i.n(n);a.a},b059:function(t,e,i){},b481:function(t,e,i){},b94d:function(t,e,i){},bb39:function(t,e,i){},c3ce:function(t,e,i){"use strict";var n=i("95db"),a=i.n(n);a.a},c8bc:function(t,e,i){},cc5e:function(t,e,i){"use strict";var n=i("4e9e"),a=i.n(n);a.a},dbc3:function(t,e,i){"use strict";var n=i("4d43"),a=i.n(n);a.a},dc4e:function(t,e,i){},e0d3:function(t,e,i){"use strict";var n=i("ab6e"),a=i.n(n);a.a},e120:function(t,e,i){"use strict";var n=i("e62d"),a=i.n(n);a.a},e2df:function(t,e,i){"use strict";var n=i("b94d"),a=i.n(n);a.a},e538:function(t,e,i){},e62d:function(t,e,i){},fb26:function(t,e,i){"use strict";var n=i("bb39"),a=i.n(n);a.a}});
//# sourceMappingURL=app.919db296.js.map