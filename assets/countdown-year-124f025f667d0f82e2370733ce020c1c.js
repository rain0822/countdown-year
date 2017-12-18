"use strict"
define("countdown-year/app",["exports","countdown-year/resolver","ember-load-initializers","countdown-year/config/environment"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,n.default)(o,r.default.modulePrefix),e.default=o}),define("countdown-year/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/basic-dropdown",["exports","ember-basic-dropdown/components/basic-dropdown"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/basic-dropdown/content-element",["exports","ember-basic-dropdown/components/basic-dropdown/content-element"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/basic-dropdown/content",["exports","ember-basic-dropdown/components/basic-dropdown/content"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/basic-dropdown/trigger",["exports","ember-basic-dropdown/components/basic-dropdown/trigger"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/cy-youtube",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Component
e.default=t.extend({test:!0,playerVars:{autoplay:0,showinfo:0,controls:0,modestbranding:1},actions:{test:function(){this.set("test",!this.get("test"))}}})}),define("countdown-year/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/ember-youtube",["exports","ember-youtube/components/ember-youtube"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("countdown-year/components/esp-menu",["exports","ember-slide-push-menu/components/esp-menu"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/fa-icon",["exports","ember-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/fa-list",["exports","ember-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/fa-stack",["exports","ember-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("countdown-year/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/sticky-container",["exports","ember-cli-sticky/components/sticky-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("countdown-year/components/sticky-element",["exports","ember-sticky-element/components/sticky-element"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/components/sticky-element/trigger",["exports","ember-sticky-element/components/sticky-element/trigger"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Controller,n=Ember.inject.service,r=Ember.computed
e.default=t.extend({cookies:n(),moment:n(),hours:"32",minutes:"31",seconds:"32",ytVideos:[{id:"Jv3zvWZlXkk",title:"終於結束的起點"},{id:"pd3eV-SG23E",title:"後來的我們"},{id:"zBJjFEE0rUc",title:"突然好想你"},{id:"znhb-_KgLoM",title:"傷心的人別聽慢歌"},{id:"zdF9gOpFoIQ",title:"派對動物"},{id:"jQE6biHTDow",title:"離開地球表面"},{id:"hr8jWDyb1jg",title:"你不是真正的快樂"},{id:"R2s-H_crYkc",title:"倔強"},{id:"5VUUGZ1-nlY",title:"志明與春嬌"}],playerVars:{autoplay:1,showinfo:0,controls:0,modestbranding:1},init:function(){this.set("ytSubVideos",this.get("ytVideos"))
var e=this.get("ytSubVideos").objectAt(0)
this.set("mainVideo",e),this.get("ytSubVideos").removeObject(e)},allCookies:r(function(){var e=this.get("cookies"),t=e.read().items
return(t=Ember.isEmpty(t)?[]:JSON.parse(t)).push(1),t.push(2),e.write("items",JSON.stringify(t)),""})})}),define("countdown-year/helpers/and",["exports","ember-truth-helpers/helpers/and"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})}),define("countdown-year/helpers/app-version",["exports","countdown-year/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?o.match(n.versionRegExp)[0]:t.hideVersion?o.match(n.shaRegExp)[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r
var o=t.default.APP.version
e.default=Ember.Helper.helper(r)})
define("countdown-year/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})}),define("countdown-year/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})}),define("countdown-year/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})}),define("countdown-year/helpers/is-after",["exports","ember-moment/helpers/is-after"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})}),define("countdown-year/helpers/is-before",["exports","ember-moment/helpers/is-before"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/is-between",["exports","ember-moment/helpers/is-between"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("countdown-year/helpers/is-same-or-after",["exports","ember-moment/helpers/is-same-or-after"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/is-same-or-before",["exports","ember-moment/helpers/is-same-or-before"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/is-same",["exports","ember-moment/helpers/is-same"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})}),define("countdown-year/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})}),define("countdown-year/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})}),define("countdown-year/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})}),define("countdown-year/helpers/moment-add",["exports","ember-moment/helpers/moment-add"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-calendar",["exports","ember-moment/helpers/moment-calendar"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-diff",["exports","ember-moment/helpers/moment-diff"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-duration",["exports","ember-moment/helpers/moment-duration"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-format",["exports","ember-moment/helpers/moment-format"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-from-now",["exports","ember-moment/helpers/moment-from-now"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-from",["exports","ember-moment/helpers/moment-from"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-subtract",["exports","ember-moment/helpers/moment-subtract"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-to-date",["exports","ember-moment/helpers/moment-to-date"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-to-now",["exports","ember-moment/helpers/moment-to-now"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-to",["exports","ember-moment/helpers/moment-to"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/moment-unix",["exports","ember-moment/helpers/unix"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"unix",{enumerable:!0,get:function(){return t.unix}})}),define("countdown-year/helpers/moment",["exports","ember-moment/helpers/moment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})}),define("countdown-year/helpers/not",["exports","ember-truth-helpers/helpers/not"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})})
define("countdown-year/helpers/now",["exports","ember-moment/helpers/now"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/or",["exports","ember-truth-helpers/helpers/or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})}),define("countdown-year/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("countdown-year/helpers/route-action",["exports","ember-route-action-helper/helpers/route-action"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("countdown-year/helpers/unix",["exports","ember-moment/helpers/unix"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"unix",{enumerable:!0,get:function(){return t.unix}})}),define("countdown-year/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})}),define("countdown-year/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","countdown-year/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var r=void 0,o=void 0
n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(r,o)}}),define("countdown-year/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("countdown-year/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("countdown-year/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("countdown-year/initializers/export-application-global",["exports","countdown-year/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("countdown-year/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("countdown-year/initializers/liquid-fire",["exports","liquid-fire/ember-internals","liquid-fire/velocity-ext"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),(0,t.initialize)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("countdown-year/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("countdown-year/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("countdown-year/initializers/viewport-config",["exports","countdown-year/config/environment","ember-in-viewport/utils/can-use-dom"],function(e,t,n){function r(){var e=arguments[1]||arguments[0],n=t.default.viewportConfig,r=i({},o,void 0===n?{}:n)
e.register("config:in-viewport",r,{instantiate:!1})}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r
var o={viewportEnabled:!0,viewportSpy:!1,viewportScrollSensitivity:1,viewportRefreshRate:100,viewportListeners:[{context:window,event:"scroll.scrollable"},{context:window,event:"resize.resizable"}],viewportTolerance:{top:0,left:0,bottom:0,right:0}}
n.default&&o.viewportListeners.push({context:document,event:"touchmove.scrollable"})
var i=Ember.assign||Ember.merge
e.default={name:"viewport-config",initialize:r}}),define("countdown-year/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("countdown-year/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("countdown-year/router",["exports","countdown-year/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("page1"),this.route("page2")}),e.default=n}),define("countdown-year/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Route
e.default=t.extend({actions:{adjust:function(e){var t=this.controller.get("mainVideo")
this.controller.set("mainVideo",e),this.controller.get("ytSubVideos").removeObject(e),this.controller.get("ytSubVideos").addObject(t),this.controller.set("hours","21")}}})}),define("countdown-year/routes/page1",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Route
e.default=t.extend({})}),define("countdown-year/routes/page2",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Route
e.default=t.extend({})}),define("countdown-year/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/services/cookies",["exports","ember-cookies/services/cookies"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("countdown-year/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("countdown-year/services/moment",["exports","ember-moment/services/moment","countdown-year/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.get
e.default=t.default.extend({defaultFormat:r(n.default,"moment.outputFormat")})}),define("countdown-year/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"4Qc90J7u",block:'{"symbols":["ytVideo","currentModel"],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n"],[0,"        "],[2,"<ul class=\\"tabs row\\">\\n            <li class=\\"tab col s6\\"><a href=\\"#witch\\">觀看</a></li>\\n            <li class=\\"tab col s6\\"><a href=\\"#choose\\">選擇</a></li>\\n        </ul>"],[0,"\\n"],[0,"    "],[6,"div"],[9,"class","row"],[7],[0,"\\n        "],[6,"div"],[9,"id","witch"],[9,"class","col s12"],[7],[0,"\\n"],[4,"sticky-element",null,null,{"statements":[[4,"liquid-bind",[[20,["mainVideo"]]],[["use"],["scale"]],{"statements":[[0,"                    "],[6,"div"],[9,"class","card"],[9,"style","margin: 0px;"],[7],[0,"\\n                        "],[6,"div"],[7],[0,"\\n                            "],[1,[25,"ember-youtube",null,[["ytid","playerVars","width","height","delegate","delegate-as"],[[20,["mainVideo","id"]],[20,["playerVars"]],"100%","100%",[19,0,[]],"emberYoutube"]]],false],[0,"\\n                        "],[8],[0,"\\n                        "],[6,"div"],[9,"class","card-content"],[7],[0,"\\n                            "],[6,"button"],[9,"class","btn-floating waves-effect"],[3,"action",[[19,0,[]],"togglePlay"],[["target"],[[20,["emberYoutube"]]]]],[7],[0,"\\n"],[4,"if",[[20,["emberYoutube","isPlaying"]]],null,{"statements":[[0,"                                    "],[6,"i"],[9,"class","material-icons"],[7],[0,""],[8],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                                    "],[6,"i"],[9,"class","material-icons"],[7],[0,""],[8],[0,"\\n"]],"parameters":[]}],[0,"                            "],[8],[0,"\\n                            "],[6,"button"],[9,"class","btn-floating waves-effect"],[3,"action",[[19,0,[]],"toggleVolume"],[["target"],[[20,["emberYoutube"]]]]],[7],[0,"\\n"],[4,"if",[[20,["emberYoutube","isMuted"]]],null,{"statements":[[0,"                                    "],[6,"i"],[9,"class","material-icons red"],[7],[0,""],[8],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                                    "],[6,"i"],[9,"class","material-icons"],[7],[0,""],[8],[0,"\\n"]],"parameters":[]}],[0,"                            "],[8],[0,"\\n                            "],[6,"div"],[9,"class","right"],[7],[1,[20,["mainVideo","title"]],false],[8],[0,"\\n                        "],[8],[0,"\\n                    "],[8],[0,"\\n"]],"parameters":[2]},null]],"parameters":[]},null],[0,"            "],[6,"div"],[9,"class","row"],[7],[0,"\\n"],[4,"each",[[20,["ytSubVideos"]]],null,{"statements":[[0,"                    "],[6,"div"],[9,"class","col s6 m4 l3"],[7],[1,[25,"cy-youtube",null,[["ytVideo"],[[19,1,[]]]]],false],[8],[0,"\\n"]],"parameters":[1]},null],[0,"            "],[8],[0,"\\n        "],[8],[0,"\\n        "],[2,"<div id=\\"choose\\" class=\\"col s12\\">\\n            <div>test22</div><div>test22</div><div>test22</div><div>test22</div><div>test22</div>\\n        </div>"],[0,"\\n    "],[8],[0,"\\n    "],[2,"page1"],[0,"\\n    "],[2,"page2"],[0,"\\n    "],[6,"br"],[7],[8],[0,"\\n    "],[1,[18,"outlet"],false],[0,"\\n    "],[1,[18,"allCookies"],false],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"countdown-year/templates/application.hbs"}})}),define("countdown-year/templates/components/cy-youtube",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"RzoA8dLk",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","card"],[9,"style","position: inherit;"],[7],[0,"\\n    "],[6,"div"],[7],[0,"\\n        "],[1,[25,"ember-youtube",null,[["ytid","playerVars","width","height","delegate","delegate-as"],[[20,["ytVideo","id"]],[20,["playerVars"]],"100%","100%",[19,0,[]],"emberYoutube"]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","card-content"],[7],[0,"\\n        "],[6,"small"],[7],[1,[20,["ytVideo","title"]],false],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","card-action"],[9,"style","position: inherit;"],[7],[0,"\\n        "],[6,"button"],[9,"class","btn-floating waves-effect"],[3,"action",[[19,0,[]],"togglePlay"],[["target"],[[20,["emberYoutube"]]]]],[7],[0,"\\n"],[4,"if",[[20,["emberYoutube","isPlaying"]]],null,{"statements":[[0,"                "],[6,"i"],[9,"class","material-icons"],[7],[0,""],[8],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                "],[6,"i"],[9,"class","material-icons"],[7],[0,""],[8],[0,"\\n"]],"parameters":[]}],[0,"        "],[8],[0,"\\n        "],[6,"button"],[9,"class","btn-floating waves-effect"],[3,"action",[[19,0,[]],"toggleVolume"],[["target"],[[20,["emberYoutube"]]]]],[7],[0,"\\n"],[4,"if",[[20,["emberYoutube","isMuted"]]],null,{"statements":[[0,"                "],[6,"i"],[9,"class","material-icons red"],[7],[0,""],[8],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                "],[6,"i"],[9,"class","material-icons"],[7],[0,""],[8],[0,"\\n"]],"parameters":[]}],[0,"        "],[8],[0,"\\n        "],[6,"button"],[9,"class","btn-floating waves-effect waves-write right"],[3,"action",[[19,0,[]],[25,"route-action",["adjust",[20,["ytVideo"]]],null]]],[7],[0,"\\n            "],[6,"i"],[9,"class","small material-icons"],[7],[0,"arrow_upward"],[8],[0,"\\n        "],[8],[0,"\\n    "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"countdown-year/templates/components/cy-youtube.hbs"}})}),define("countdown-year/templates/components/ember-youtube",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"scExsTuA",block:'{"symbols":["&default"],"statements":[[6,"div"],[9,"id","EmberYoutube-player"],[7],[8],[0,"\\n\\n"],[4,"if",[[20,["showExtras"]]],null,{"statements":[[0,"\\t"],[6,"div"],[9,"class","EmberYoutube-extras"],[7],[0,"\\n"],[4,"if",[[20,["showControls"]]],null,{"statements":[[0,"\\t\\t\\t"],[6,"menu"],[9,"class","EmberYoutube-controls"],[7],[0,"\\n\\t\\t\\t\\t"],[6,"button"],[3,"action",[[19,0,[]],"togglePlay"]],[7],[4,"if",[[20,["isPlaying"]]],null,{"statements":[[0,"Pause"]],"parameters":[]},{"statements":[[0,"Play"]],"parameters":[]}],[8],[0,"\\n\\t\\t\\t\\t"],[6,"button"],[3,"action",[[19,0,[]],"toggleVolume"]],[7],[4,"if",[[20,["isMuted"]]],null,{"statements":[[0,"Unmute"]],"parameters":[]},{"statements":[[0,"Mute"]],"parameters":[]}],[8],[0,"\\n\\t\\t\\t"],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[20,["showProgress"]]],null,{"statements":[[0,"\\t\\t\\t"],[6,"p"],[9,"class","EmberYoutube-progress"],[7],[0,"\\n\\t\\t\\t\\t"],[6,"progress"],[10,"value",[18,"currentTime"],null],[10,"max",[18,"duration"],null],[7],[8],[0,"\\n\\t\\t\\t"],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[20,["showDebug"]]],null,{"statements":[[0,"\\t\\t\\t"],[6,"p"],[9,"class","EmberYoutube-debug"],[7],[0,"\\n\\t\\t\\t\\t"],[6,"code"],[7],[0,"\\n\\t\\t\\t\\t\\tytid: "],[1,[18,"ytid"],false],[6,"br"],[7],[8],[0,"\\n\\t\\t\\t\\t\\tplayerState: "],[1,[18,"playerState"],false],[6,"br"],[7],[8],[0,"\\n\\t\\t\\t\\t\\tisMuted: "],[1,[18,"isMuted"],false],[6,"br"],[7],[8],[0,"\\n\\t\\t\\t\\t\\tisPlaying: "],[1,[18,"isPlaying"],false],[6,"br"],[7],[8],[0,"\\n\\t\\t\\t\\t\\tcurrentTime: "],[1,[18,"currentTime"],false],[6,"br"],[7],[8],[0,"\\n\\t\\t\\t\\t\\tduration: "],[1,[18,"duration"],false],[6,"br"],[7],[8],[0,"\\n\\t\\t\\t\\t\\tvolume: "],[1,[18,"volume"],false],[6,"br"],[7],[8],[0,"\\n\\t\\t\\t\\t"],[8],[0,"\\n\\t\\t\\t"],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\t"],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[22,1]],null,{"statements":[[0,"\\t"],[6,"div"],[9,"class","EmberYoutube-yield"],[7],[0,"\\n\\t\\t"],[11,1],[0,"\\n\\t"],[8],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"countdown-year/templates/components/ember-youtube.hbs"}})})
define("countdown-year/templates/page1",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"+pWrriSQ",block:'{"symbols":[],"statements":[[0,"page1\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"countdown-year/templates/page1.hbs"}})}),define("countdown-year/templates/page2",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"ouUvgVQm",block:'{"symbols":[],"statements":[[0,"page2\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"countdown-year/templates/page2.hbs"}})}),define("countdown-year/transitions",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){}}),define("countdown-year/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("countdown-year/config/environment",[],function(){try{var e="countdown-year/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("countdown-year/app").default.create({name:"countdown-year",version:"0.0.0+8d42fc6b"})
