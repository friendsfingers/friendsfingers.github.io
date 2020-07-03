(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{309:function(a,t,e){"use strict";var n=e(1),s=e(310);n({target:"String",proto:!0,forced:e(311)("link")},{link:function(a){return s(this,"a","href",a)}})},310:function(a,t,e){var n=e(25),s=/"/g;a.exports=function(a,t,e,r){var o=String(n(a)),i="<"+t;return""!==e&&(i+=" "+e+'="'+String(r).replace(s,"&quot;")+'"'),i+">"+o+"</"+t+">"}},311:function(a,t,e){var n=e(2);a.exports=function(a){return n((function(){var t=""[a]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},376:function(a,t,e){"use strict";e.r(t);e(91),e(309);var n={name:"MemberDetails",props:["account","token"],data:function(){return{makingTransaction:!1,stakeAmount:"",unstakeAmount:"",trx:{hash:"",link:""}}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},methods:{stake:function(){var a=this;this.$validator.validate("stakeAmount").then((function(t){if(t){if(!a.dapp.metamask.installed)return void a.makeToast("Some errors occurred","Please verify that you have MetaMask installed and unlocked.","danger");if(a.dapp.metamask.netId!==a.dapp.network.current.id)return void a.makeToast("You are on the wrong Network","Please switch MetaMask on ".concat(a.dapp.network.current.name,"."),"danger");try{a.makingTransaction=!0,a.dapp.instances.token.transferAndCall(a.dapp.instances.dao.address,a.dapp.web3.toWei(a.stakeAmount),{from:a.dapp.metamask.address,to:a.token.address},(function(t,e){t?(console.log(t),a.makeToast("Some errors occurred","Maybe you rejected the transaction or you have MetaMask locked!","danger")):(a.trx.hash=e,a.trx.link=a.dapp.network.current.etherscanLink+"/tx/"+a.trx.hash),a.makingTransaction=!1}))}catch(t){console.log(t),a.makeToast("Cannot connect","Please verify that you have MetaMask installed and unlocked.","danger")}}})).catch((function(t){console.log(t),a.makeToast("Some errors occurred",t,"danger"),a.makingTransaction=!1}))},unstake:function(){var a=this;this.$validator.validate("unstakeAmount").then((function(t){if(t){if(!a.dapp.metamask.installed)return void a.makeToast("Cannot connect","Please verify that you have MetaMask installed and unlocked.","danger");if(a.dapp.metamask.netId!==a.dapp.network.current.id)return void a.makeToast("You are on the wrong Network","Please switch MetaMask on ".concat(a.dapp.network.current.name,"."),"danger");try{a.makingTransaction=!0,a.dapp.instances.dao.unstake(a.dapp.web3.toWei(a.unstakeAmount),{from:a.dapp.metamask.address,to:a.dapp.instances.dao.address},(function(t,e){t?(console.log(t),a.makeToast("Some errors occurred","Maybe you rejected the transaction or you have MetaMask locked!","danger")):(a.trx.hash=e,a.trx.link=a.dapp.network.current.etherscanLink+"/tx/"+a.trx.hash),a.makingTransaction=!1}))}catch(t){console.log(t),a.makeToast("Cannot connect","Please verify that you have MetaMask installed and unlocked.","danger")}}})).catch((function(t){console.log(t),a.makeToast("Some errors occurred",t,"danger"),a.makingTransaction=!1}))}}},s=e(41),r=Object(s.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-row",[a.trx.hash?e("b-col",{staticClass:"mb-2",attrs:{md:"12"}},[e("b-alert",{staticClass:"mt-3",attrs:{show:"",variant:"success"}},[a._v("\n            Last transaction:\n            "),e("b-link",{attrs:{href:a.trx.link,target:"_blank"}},[a._v(a._s(a.trx.hash))])],1)],1):a._e(),a._v(" "),e("b-col",{staticClass:"mb-4",attrs:{md:"8"}},[e("b-card",{staticClass:"text-center",attrs:{"no-body":""}},[e("b-card-body",[e("ui--member-image",{attrs:{member:a.account.member}})],1)],1)],1),a._v(" "),e("b-col",{staticClass:"mb-4",attrs:{md:"4"}},[e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[a._v("\n                Member #"+a._s(a.account.member.id)+"\n\n                "),e("div",{staticClass:"float-right"},[a.account.member.approved?e("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"p-1",attrs:{title:"Verified",variant:"success",pill:""}},[e("font-awesome-icon",{attrs:{icon:"check-circle"}})],1):a._e()],1)]),a._v(" "),e("b-list-group",{attrs:{flush:""}},[e("b-list-group-item",[a._v("\n                    Address:\n                    "),e("b-link",{attrs:{href:a.dapp.network.current.etherscanLink+"/address/"+a.account.member.address,target:"_blank"}},[a._v("\n                        "+a._s(a._f("truncate")(a.account.member.address,10))+"\n                    ")])],1),a._v(" "),e("b-list-group-item",[a._v("\n                    Balance: "),e("b",[a._v(a._s(a.account.tokenBalance)+" "+a._s(a.token.symbol))])]),a._v(" "),e("b-list-group-item",[a._v("\n                    Staked: "),e("b",[a._v(a._s(a.account.member.stakedTokens)+" "+a._s(a.token.symbol))])]),a._v(" "),e("b-list-group-item",[a._v("\n                    Used: "),e("b",[a._v(a._s(a.account.member.usedTokens)+" "+a._s(a.token.symbol))])])],1),a._v(" "),e("b-card-footer",[e("small",[a._v("Since: "+a._s(a._f("formatLocaleDate")(a.account.member.creationDate)))])])],1),a._v(" "),a.account.member.address===a.dapp.metamask.address?e("b-card",{staticClass:"mt-4",attrs:{header:"Stake "+a.token.symbol}},[e("b-form",{on:{submit:function(t){return t.preventDefault(),a.stake(t)}}},[e("b-input-group",[e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,numeric:!0,min_value:1,max_value:a.account.tokenBalance},expression:"{ required: true, numeric: true, min_value: 1, max_value: account.tokenBalance }"}],class:{"is-invalid":a.errors.has("stakeAmount")},attrs:{id:"stakeAmount",name:"stakeAmount",disabled:a.makingTransaction,"data-vv-as":"stake amount"},model:{value:a.stakeAmount,callback:function(t){a.stakeAmount="string"==typeof t?t.trim():t},expression:"stakeAmount"}}),a._v(" "),e("b-input-group-append",[e("b-button",{attrs:{disabled:a.makingTransaction,type:"submit",variant:"primary"}},[a._v("Stake")])],1)],1),a._v(" "),e("small",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("stakeAmount"),expression:"errors.has('stakeAmount')"}],staticClass:"text-danger"},[a._v("\n                    "+a._s(a.errors.first("stakeAmount"))+"\n                ")])],1)],1):a._e(),a._v(" "),a.account.member.address===a.dapp.metamask.address?e("b-card",{staticClass:"mt-4",attrs:{header:"Unstake "+a.token.symbol}},[e("b-form",{on:{submit:function(t){return t.preventDefault(),a.unstake(t)}}},[e("b-input-group",[e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,numeric:!0,min_value:1,max_value:a.account.member.stakedTokens},expression:"{ required: true, numeric: true, min_value: 1, max_value: account.member.stakedTokens }"}],class:{"is-invalid":a.errors.has("unstakeAmount")},attrs:{id:"unstakeAmount",name:"unstakeAmount",disabled:a.makingTransaction,"data-vv-as":"unstake amount"},model:{value:a.unstakeAmount,callback:function(t){a.unstakeAmount="string"==typeof t?t.trim():t},expression:"unstakeAmount"}}),a._v(" "),e("b-input-group-append",[e("b-button",{attrs:{disabled:a.makingTransaction,type:"submit",variant:"primary"}},[a._v("Unstake")])],1)],1),a._v(" "),e("small",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("unstakeAmount"),expression:"errors.has('unstakeAmount')"}],staticClass:"text-danger"},[a._v("\n                    "+a._s(a.errors.first("unstakeAmount"))+"\n                ")])],1)],1):a._e()],1),a._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-card",{staticClass:"mb-4"},[e("Disqus",{attrs:{shortname:"friendsfingers",identifier:"MEMBER_"+a.account.member.address}})],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);