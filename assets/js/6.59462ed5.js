(window.webpackJsonp=window.webpackJsonp||[]).push([[6,10,22],{307:function(t,e,a){"use strict";a(172),a(10),a(308),a(312),a(313),a(64),a(93),a(314),a(91);var r=a(315),n=a.n(r);e.a={data:function(){return{zeroAddress:"0x0000000000000000000000000000000000000000"}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},methods:{getParam:function(t){var e={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(t,a,r){e[a]=void 0!==r?r:""})),t?e[t]?e[t]:null:e},ethGetCall:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];return a.push({from:this.dapp.fallbackAddress}),this.promisify.apply(this,[t].concat(a))},promisify:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];return new Promise((function(e,r){t.apply(void 0,a.concat([function(t,a){t?r(t):e(a)}]))}))},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(t){return!1}},generateQRCode:function(t){return n.a.toDataURL(t,{color:{dark:"#b733a7",light:"#0000"}})},makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})},formatStructure:function(t){return 0===parseInt(t[0].valueOf())?null:{id:parseInt(t[0].valueOf()),address:t[1],fingerprint:this.formatFingerprint(t[2]),creationDate:1e3*t[3].valueOf(),stakedTokens:parseFloat(this.dapp.web3.fromWei(t[4])),usedTokens:parseFloat(this.dapp.web3.fromWei(t[5])),data:t[6],approved:t[7]}},formatFingerprint:function(t){var e=t.replace("0x","").match(new RegExp(".{1,6}","g"));return{borderColor:"#".concat(e[0]),backgroundColor:"#".concat(e[1]),mainColor:"#".concat(e[2])}}}}},318:function(t,e,a){},320:function(t,e,a){var r=a(1),n=a(4),s=a(94),i=[].slice,o=function(t){return function(e,a){var r=arguments.length>2,n=r?i.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,n)}:e,a)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:o(n.setTimeout),setInterval:o(n.setInterval)})},324:function(t,e,a){"use strict";var r=a(318);a.n(r).a},333:function(t,e,a){"use strict";a.r(e);a(92),a(320),a(65);var r=a(20),n={name:"Header",mixins:[a(307).a],data:function(){return{query:"",account:{isMember:!1,memberId:0,member:null}}},mounted:function(){this.initDapp()},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},created:function(){var t=this;this.$validator.extend("eth_address",{getMessage:function(t){return"Insert a valid Ethereum address."},validate:function(e){return t.dapp.web3.isAddress(e)}}),setTimeout((function(){t.dapp.metamask.installed?t.dapp.metamask.netId!==t.dapp.network.current.id&&t.makeToast("Wrong Network","You are on the wrong Network. Please switch your Ethereum Provider on ".concat(t.dapp.network.current.name,"."),"warning"):t.makeToast("No Ethereum Provider","Please install MetaMask ".concat(t.isMobile()?"or a mobile Web3 browser":""," to use DApp."),"warning")}),2e3)},methods:{initDapp:function(){try{""!==this.dapp.metamask.address&&(this.$store.dispatch("initDao"),this.ready())}catch(t){console.log(t)}},ready:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAccountData();case 2:case"end":return e.stop()}}),e)})))()},getAccountData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.ethGetCall(t.dapp.instances.dao.isMember,t.dapp.metamask.address);case 3:if(t.account.isMember=e.sent,!t.account.isMember){e.next=10;break}return e.next=7,t.ethGetCall(t.dapp.instances.dao.getMemberByAddress,t.dapp.metamask.address);case 7:a=e.sent,t.account.member=t.formatStructure(a),t.account.memberId=t.account.member.id;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},search:function(){var t=this;this.$validator.validateAll().then((function(e){e&&(window.location.href=t.$withBase("/member/?ref=".concat(t.query)))})).catch((function(t){console.log(t)}))},disconnect:function(){this.$store.dispatch("disconnect")}}},s=a(42),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"main-navbar",attrs:{toggleable:"md",type:"light",variant:"light",fixed:"top",sticky:!0}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-navbar-brand",{attrs:{to:"/"}},[a("b-img",{attrs:{src:t.$withBase("/assets/images/logo/friendsfingers.svg"),rounded:"circle",height:"24",alt:t.$site.title}}),t._v("\n        "+t._s(t.$site.title)+"\n    ")],1),t._v(" "),a("b-badge",{attrs:{variant:"warning"}},[t._v("beta")]),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:t.$withBase("/dao")}},[t._v("DAO")]),t._v(" "),a("b-nav-item",{attrs:{to:t.$withBase("/dealer")}},[t._v("Dealer")]),t._v(" "),a("b-nav-item",{attrs:{to:t.$withBase("/faucet")}},[t._v("Faucet")])],1),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{href:"https://medium.com/friendsfingers",target:"_blank"}},[t._v("Blog")]),t._v(" "),a("b-nav-item",{attrs:{to:t.$withBase("/whitepaper")}},[t._v("Whitepaper")]),t._v(" "),a("b-nav-item",{staticClass:"d-none d-md-block",attrs:{disabled:""}},[t._v("|")]),t._v(" "),""===t.dapp.metamask.address?a("b-nav-item",{attrs:{to:t.$withBase("/dashboard")}},[t._v("Connect")]):[a("b-nav-item",{attrs:{to:t.$withBase("/dashboard")}},[a("b-avatar",{staticClass:"mr-2",attrs:{size:"1.3em",variant:"light"}},[t.account.member?[a("ui--member-image",{attrs:{member:t.account.member}})]:t._e()],2),t._v("\n                    "+t._s(t._f("truncate")(t.dapp.metamask.address,10))+"\n                ")],1)],t._v(" "),a("b-nav-form",{staticClass:"ml-2 d-none d-lg-block d-xl-block",on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,eth_address:!0},expression:"{ required: true, eth_address: true }"}],staticClass:"mt-1",class:{"is-invalid":t.errors.has("query")},attrs:{id:"query",name:"query",size:"sm","data-vv-as":"Query",placeholder:"0x123456789..."},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),a("b-button",{staticClass:"mt-1 text-dark",attrs:{variant:"link",type:"submit",size:"sm"}},[a("font-awesome-icon",{attrs:{icon:"search"}})],1)],1)],2)],1)],1)}),[],!1,null,null,null);e.default=i.exports},334:function(t,e,a){"use strict";a.r(e);a(172);var r={name:"Footer",computed:{dapp:{get:function(){return this.$store.getters.dapp}},tokenLink:{get:function(){return"".concat(this.dapp.network.current.etherscanLink,"/token/").concat("0x93a7174dafd31d13400cd9fa01f4e5b5baa00d39")}},daoLink:{get:function(){return"".concat(this.dapp.network.current.etherscanLink,"/address/").concat("0xa042c9143c8758d2Ad5A3FCc08dEc39F6964453E")}}}},n=a(42),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer container-fluid mt-5 p-5 bg-dark text-white"},[a("b-container",[a("b-row",[a("b-col",{attrs:{lg:"4"}},[a("b-list-group",{staticClass:"mt-4",attrs:{flush:""}},[a("b-list-group-item",[a("b-badge",{attrs:{variant:t.dapp.network.current.color}},[t._v(t._s(t.dapp.network.current.name))])],1),t._v(" "),a("b-list-group-item",[a("font-awesome-icon",{staticClass:"peach",attrs:{icon:["fab","ethereum"]}}),t._v(" "),a("b-link",{staticClass:"text-light",attrs:{href:t.tokenLink,target:"_blank"}},[t._v("\n                            Explore Shaka Contract\n                        ")])],1),t._v(" "),a("b-list-group-item",[a("font-awesome-icon",{staticClass:"peach",attrs:{icon:["fab","ethereum"]}}),t._v(" "),a("b-link",{staticClass:"text-light",attrs:{href:t.daoLink,target:"_blank"}},[t._v("\n                            Explore DAO Contract\n                        ")])],1)],1)],1),t._v(" "),a("b-col",{attrs:{lg:"4"}},[a("b-list-group",{staticClass:"mt-4",attrs:{flush:""}},[a("b-list-group-item",[a("b-link",{staticClass:"text-light",attrs:{to:t.$withBase("/dao")}},[t._v("\n                            DAO\n                        ")])],1),t._v(" "),a("b-list-group-item",[a("b-link",{staticClass:"text-light",attrs:{to:t.$withBase("/dealer")}},[t._v("\n                            Dealer\n                        ")])],1),t._v(" "),a("b-list-group-item",[a("b-link",{staticClass:"text-light",attrs:{to:t.$withBase("/faucet")}},[t._v("\n                            Faucet\n                        ")])],1)],1)],1),t._v(" "),a("b-col",{attrs:{lg:"4"}},[a("b-list-group",{staticClass:"mt-4",attrs:{flush:""}},[a("b-list-group-item",[a("b-link",{staticClass:"text-light",attrs:{to:t.$withBase("/privacy")}},[a("small",[t._v("Privacy")])])],1),t._v(" "),a("b-list-group-item",[a("b-link",{staticClass:"text-light",attrs:{to:t.$withBase("/terms")}},[a("small",[t._v("Terms and Conditions")])])],1),t._v(" "),a("b-list-group-item",[a("b-link",{staticClass:"text-light",attrs:{to:t.$withBase("/faq")}},[a("small",[t._v("FAQ")])])],1)],1)],1)],1),t._v(" "),a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("hr"),t._v(" "),a("div",{staticClass:"mt-4 text-center"},[a("ui--social-links"),t._v(" "),a("small",[t._v("© 2020 🤙 FriendsFingers")])],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=s.exports},360:function(t,e,a){"use strict";a.r(e);var r=a(333),n=a(334),s={components:{SiteHeader:r.default,SiteFooter:n.default},computed:{page:function(){return this.$page.frontmatter.component||null},bodyClass:function(){return this.page.toLowerCase()}}},i=(a(324),a(42)),o=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("div",{class:"body "+this.bodyClass},[e("site-header"),this._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[this.page?e(this.page,{key:this.page,tag:"component"}):this._e()],1),this._v(" "),e("site-footer")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);