


<!DOCTYPE html>
<html dir="ltr" lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml" prefix="og: https://ogp.me/ns#">
<head>


    <meta charset="utf-8" /><script type="62bff2e665d34e70882a4d87-text/javascript">window.NREUM||(NREUM={});NREUM.info = {"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"NRJS-22d0ecc7d839418cb0d","applicationID":"552038450","transactionName":"YVRbZRRTCEYEVRBeV1gedGclHTVQBEQHX3tZX01DCV4KUBcZNFZKV1xcRQNAClAWRTdSWURSUQ==","queueTime":1,"applicationTime":500,"agent":"","atts":""}</script><script type="62bff2e665d34e70882a4d87-text/javascript">(window.NREUM||(NREUM={})).init={privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]},feature_flags:["soft_nav"],distributed_tracing:{enabled:true}};(window.NREUM||(NREUM={})).loader_config={agentID:"594486309",accountID:"4441420",trustKey:"4441420",xpid:"UAIDUFJRCBAFUVNSBAkDU1Q=",licenseKey:"NRJS-22d0ecc7d839418cb0d",applicationID:"552038450",browserID:"594486309"};;/*! For license information please see nr-loader-spa-1.316.0.min.js.LICENSE.txt */
(()=>{var e,t,r={384:(e,t,r)=>{"use strict";r.d(t,{NT:()=>a,Zm:()=>c,bQ:()=>u,dV:()=>d,pV:()=>l});var n=r(6154),i=r(1863),s=r(944),o=r(1910);const a={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function c(){return n.gm.NREUM||(n.gm.NREUM={}),void 0===n.gm.newrelic&&(n.gm.newrelic=n.gm.NREUM),n.gm.NREUM}function d(){let e=c();return e.o||(e.o={ST:n.gm.setTimeout,SI:n.gm.setImmediate||n.gm.setInterval,CT:n.gm.clearTimeout,XHR:n.gm.XMLHttpRequest,REQ:n.gm.Request,EV:n.gm.Event,PR:n.gm.Promise,MO:n.gm.MutationObserver,FETCH:n.gm.fetch,WS:n.gm.WebSocket},(0,o.i)(...Object.values(e.o))),e}function u(e,t){let r=c();r.initializedAgents??={},t.initializedAt={ms:(0,i.t)(),date:new Date},r.initializedAgents[e]=t,2===Object.keys(r.initializedAgents).length&&(0,s.R)(69)}function l(){return function(){let e=c();const t=e.info||{};e.info={beacon:a.beacon,errorBeacon:a.errorBeacon,...t}}(),function(){let e=c();const t=e.init||{};e.init={...t}}(),d(),function(){let e=c();const t=e.loader_config||{};e.loader_config={...t}}(),c()}},733:(e,t,r)=>{"use strict";function n(e,t){return function(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")}("".concat(String(e),":").concat(String(t)))}r.d(t,{Y:()=>n})},782:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K7.pageViewTiming},860:(e,t,r)=>{"use strict";r.d(t,{$J:()=>u,K7:()=>c,P3:()=>d,XX:()=>i,Yy:()=>a,df:()=>s,qY:()=>n,v4:()=>o});const n="events",i="jserrors",s="browser/blobs",o="rum",a="browser/logs",c={ajax:"ajax",genericEvents:"generic_events",jserrors:i,logging:"logging",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",softNav:"soft_navigations"},d={[c.pageViewEvent]:1,[c.pageViewTiming]:2,[c.metrics]:3,[c.jserrors]:4,[c.softNav]:5,[c.ajax]:6,[c.sessionTrace]:7,[c.sessionReplay]:8,[c.logging]:9,[c.genericEvents]:10},u={[c.pageViewEvent]:o,[c.pageViewTiming]:n,[c.ajax]:n,[c.softNav]:n,[c.metrics]:i,[c.jserrors]:i,[c.sessionTrace]:s,[c.sessionReplay]:s,[c.logging]:a,[c.genericEvents]:"ins"}},944:(e,t,r)=>{"use strict";r.d(t,{R:()=>i});var n=r(3241);function i(e,t){"function"==typeof console.debug&&(console.debug("New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(e),t),(0,n.W)({drained:null,type:"data",name:"warn",feature:"warn",data:{code:e,secondary:t}}))}},993:(e,t,r)=>{"use strict";r.d(t,{A$:()=>s,ET:()=>o,TZ:()=>a,p_:()=>i});var n=r(860);const i={ERROR:"ERROR",WARN:"WARN",INFO:"INFO",DEBUG:"DEBUG",TRACE:"TRACE"},s={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4,TRACE:5},o="log",a=n.K7.logging},1687:(e,t,r)=>{"use strict";r.d(t,{Ak:()=>a,Ze:()=>d,x3:()=>c});var n=r(3241),i=r(3606),s=r(860),o=r(2646);function a(e,t){if(!e)return;const r={staged:!1,priority:s.P3[t]||0};e.runtime.drainRegistry.get(t)||e.runtime.drainRegistry.set(t,r)}function c(e,t){if(!e)return;const r=e.runtime.drainRegistry;r&&(r.get(t)&&r.delete(t),l(e,t,!1),r.size&&u(e))}function d(e,t="feature",r=!1){if(e){if(!e.runtime.drainRegistry.get(t)||r)return l(e,t);e.runtime.drainRegistry.get(t).staged=!0,u(e)}}function u(e){if(!e)return;const t=Array.from(e.runtime.drainRegistry);t.every(([e,t])=>t.staged)&&(t.sort((e,t)=>e[1].priority-t[1].priority),t.forEach(([t])=>{e.runtime.drainRegistry.delete(t),l(e,t)}))}function l(e,t,r=!0){if(!e)return;const s=e.ee,a=i.i.handlers;if(s&&!s.aborted&&s.backlog&&a){if((0,n.W)({type:"lifecycle",name:"drain",feature:t}),r){const e=s.backlog[t],r=a[t];if(r){for(let t=0;e&&t<e.length;++t)f(e[t],r);Object.entries(r).forEach(([e,t])=>{Object.values(t||{}).forEach(t=>{t[0]?.on&&t[0].context()instanceof o.y&&!t[0].listeners(e).includes(t[1])&&t[0].on(e,t[1])})})}}s.isolatedBacklog||delete a[t],s.backlog[t]=null,s.emit("drain-"+t,[])}}function f(e,t){var r=e[1];Object.values(t[r]||{}).forEach(t=>{var r=e[0];if(t[0]===r){var n=t[1],i=e[3],s=e[2];n.apply(i,s)}})}},1738:(e,t,r)=>{"use strict";r.d(t,{U:()=>f,Y:()=>l});var n=r(3241),i=r(9908),s=r(1863),o=r(944),a=r(3969),c=r(8362),d=r(860),u=r(4261);function l(e,t,r,s){const l=s||r;!l||l[e]&&l[e]!==c.d.prototype[e]||(l[e]=function(){(0,i.p)(a.xV,["API/"+e+"/called"],void 0,d.K7.metrics,r.ee),(0,n.W)({drained:!!r.runtime?.activatedFeatures,type:"data",name:"api",feature:u.Pl+e,data:{}});try{return t.apply(this,arguments)}catch(e){(0,o.R)(23,e)}})}function f(e,t,r,n,o){const a=e.info;null===r?delete a.jsAttributes[t]:a.jsAttributes[t]=r,(o||null===r)&&(0,i.p)(u.Pl+n,[(0,s.t)(),t,r],void 0,"session",e.ee)}},1741:(e,t,r)=>{"use strict";r.d(t,{W:()=>s});var n=r(944),i=r(4261);class s{#e(e,...t){if(this[e]!==s.prototype[e])return this[e](...t);(0,n.R)(35,e)}addPageAction(e,t){return this.#e(i.hG,e,t)}register(e){return this.#e(i.eY,e)}recordCustomEvent(e,t){return this.#e(i.fF,e,t)}setPageViewName(e,t){return this.#e(i.Fw,e,t)}setCustomAttribute(e,t,r){return this.#e(i.cD,e,t,r)}noticeError(e,t){return this.#e(i.o5,e,t)}setUserId(e,t=!1){return this.#e(i.Dl,e,t)}setApplicationVersion(e){return this.#e(i.nb,e)}setErrorHandler(e){return this.#e(i.bt,e)}addRelease(e,t){return this.#e(i.k6,e,t)}log(e,t){return this.#e(i.$9,e,t)}start(){return this.#e(i.d3)}finished(e){return this.#e(i.BL,e)}recordReplay(){return this.#e(i.CH)}pauseReplay(){return this.#e(i.Tb)}addToTrace(e){return this.#e(i.U2,e)}setCurrentRouteName(e){return this.#e(i.PA,e)}interaction(e){return this.#e(i.dT,e)}wrapLogger(e,t,r){return this.#e(i.Wb,e,t,r)}measure(e,t){return this.#e(i.V1,e,t)}consent(e){return this.#e(i.Pv,e)}}},1863:(e,t,r)=>{"use strict";function n(){return Math.floor(performance.now())}r.d(t,{t:()=>n})},1910:(e,t,r)=>{"use strict";r.d(t,{i:()=>s});var n=r(944);const i=new Map;function s(...e){return e.every(e=>{if(i.has(e))return i.get(e);const t="function"==typeof e?e.toString():"",r=t.includes("[native code]"),s=t.includes("nrWrapper");return r||s||(0,n.R)(64,e?.name||t),i.set(e,r),r})}},2555:(e,t,r)=>{"use strict";r.d(t,{D:()=>a,f:()=>o});var n=r(384),i=r(8122);const s={beacon:n.NT.beacon,errorBeacon:n.NT.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0};function o(e){try{return!!e.licenseKey&&!!e.errorBeacon&&!!e.applicationID}catch(e){return!1}}const a=e=>(0,i.a)(e,s)},2614:(e,t,r)=>{"use strict";r.d(t,{BB:()=>s,Wt:()=>n,g:()=>c,iL:()=>a,tS:()=>o,wk:()=>i});const n="NRBA_SESSION::",i=144e5,s=18e5,o={STARTED:"session-started",PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},a={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},c={OFF:0,FULL:1,ERROR:2}},2646:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});class n{constructor(e){this.contextId=e}}},2843:(e,t,r)=>{"use strict";r.d(t,{G:()=>s,u:()=>i});var n=r(3878);function i(e,t=!1,r,i){(0,n.DD)("visibilitychange",function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)},r,i)}function s(e,t,r){(0,n.sp)("pagehide",e,t,r)}},3241:(e,t,r)=>{"use strict";r.d(t,{W:()=>s});var n=r(6154);const i="newrelic";function s(e={}){try{n.gm.dispatchEvent(new CustomEvent(i,{detail:e}))}catch(e){}}},3304:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(7836);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function s(e){try{return JSON.stringify(e,i())??""}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}return""}}},3333:(e,t,r)=>{"use strict";r.d(t,{$v:()=>u,TZ:()=>n,Xh:()=>c,Zp:()=>i,kd:()=>d,mq:()=>a,nf:()=>o,qN:()=>s});const n=r(860).K7.genericEvents,i=["auxclick","click","copy","keydown","paste","scrollend"],s=["focus","blur"],o=4,a=1e3,c=2e3,d=["PageAction","UserAction","BrowserPerformance"],u={RESOURCES:"experimental.resources",REGISTER:"register"}},3434:(e,t,r)=>{"use strict";r.d(t,{Jt:()=>o,YM:()=>u});var n=r(7836),i=r(5607),s=r(5732);const o="nr@original:".concat(i.W),a=50;var c=Object.prototype.hasOwnProperty,d=!1;function u(e,t,r){return e||(e=n.ee),i.inPlace=function(e,t,r,n,s,o){r||(r="");const a="-"===r.charAt(0);for(let c=0;c<t.length;c++){const d=t[c],u=e[d];f(u)||(e[d]=i(u,a?d+r:r,n,d,s,o))}},i.flag=o,i;function i(t,n,i,d,h,p){return f(t)?t:(n||(n=""),nrWrapper[o]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach(function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})}),t}catch(e){l([e],r)}for(var n in e)c.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var o,c,f,g;let m,v;try{c=this,o=[...arguments],v=p?(0,s.$5)(r):[void 0],f="function"==typeof i?i(o,c):i||{}}catch(t){l([t,"",[o,c,d],f],e)}u(n+"start",[o,c,d,v],f,h);const y=performance.now();let b;try{return g=t.apply(c,o),b=performance.now(),g}catch(e){throw b=performance.now(),u(n+"err",[o,c,e,v],f,h),m=e,m}finally{const e=b-y,t={start:y,end:b,duration:e,isLongTask:e>=a,methodName:d,thrownError:m};t.isLongTask&&u("long-task",[t,c,v],f,h),u(n+"end",[o,c,g,v],f,h)}}}function u(r,n,i,s){if(!d||t){var o=d;d=!0;try{e.emit(r,n,i,t,s)}catch(t){l([t,r,n,i],e)}d=o}}}function l(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function f(e){return!(e&&"function"==typeof e&&e.apply&&!e[o])}},3606:(e,t,r)=>{"use strict";r.d(t,{i:()=>s});var n=r(9908);s.on=o;var i=s.handlers={};function s(e,t,r,s){o(s||n.d,i,e,t,r)}function o(e,t,r,i,s){s||(s="feature"),e||(e=n.d);var o=t[s]=t[s]||{};(o[r]=o[r]||[]).push([e,i])}},3738:(e,t,r)=>{"use strict";r.d(t,{He:()=>i,Kp:()=>a,Lc:()=>d,Rz:()=>u,TZ:()=>n,bD:()=>s,d3:()=>o,jx:()=>l,sl:()=>f,uP:()=>c});const n=r(860).K7.sessionTrace,i="bstResource",s="resource",o="-start",a="-end",c="fn"+o,d="fn"+a,u="pushState",l=1e3,f=3e4},3785:(e,t,r)=>{"use strict";r.d(t,{R:()=>c,b:()=>d});var n=r(9908),i=r(1863),s=r(860),o=r(3969),a=r(993);function c(e,t,r={},c=a.p_.INFO,d=!0,u,l=(0,i.t)()){(0,n.p)(o.xV,["API/logging/".concat(c.toLowerCase(),"/called")],void 0,s.K7.metrics,e),(0,n.p)(a.ET,[l,t,r,c,d,u],void 0,s.K7.logging,e)}function d(e){return"string"==typeof e&&Object.values(a.p_).some(t=>t===e.toUpperCase().trim())}},3878:(e,t,r)=>{"use strict";function n(e,t){return{capture:e,passive:!1,signal:t}}function i(e,t,r=!1,i){window.addEventListener(e,t,n(r,i))}function s(e,t,r=!1,i){document.addEventListener(e,t,n(r,i))}r.d(t,{DD:()=>s,jT:()=>n,sp:()=>i})},3962:(e,t,r)=>{"use strict";r.d(t,{AM:()=>o,O2:()=>l,OV:()=>s,Qu:()=>f,TZ:()=>c,ih:()=>h,pP:()=>a,t1:()=>u,tC:()=>i,wD:()=>d});var n=r(860);const i=["click","keydown","submit"],s="popstate",o="api",a="initialPageLoad",c=n.K7.softNav,d=5e3,u=500,l={INITIAL_PAGE_LOAD:"",ROUTE_CHANGE:1,UNSPECIFIED:2},f={INTERACTION:1,AJAX:2,CUSTOM_END:3,CUSTOM_TRACER:4},h={IP:"in progress",PF:"pending finish",FIN:"finished",CAN:"cancelled"}},3969:(e,t,r)=>{"use strict";r.d(t,{TZ:()=>n,XG:()=>a,rs:()=>i,xV:()=>o,z_:()=>s});const n=r(860).K7.metrics,i="sm",s="cm",o="storeSupportabilityMetrics",a="storeEventMetrics"},4234:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(1687);class i{constructor(e,t){this.agentRef=e,this.ee=e?.ee,this.featureName=t,this.blocked=!1}deregisterDrain(){(0,n.x3)(this.agentRef,this.featureName)}}},4261:(e,t,r)=>{"use strict";r.d(t,{$9:()=>u,BL:()=>c,CH:()=>p,Dl:()=>R,Fw:()=>w,PA:()=>v,Pl:()=>n,Pv:()=>x,Tb:()=>f,U2:()=>o,V1:()=>A,Wb:()=>T,bt:()=>b,cD:()=>y,d3:()=>E,dT:()=>d,eY:()=>g,fF:()=>h,hG:()=>s,hw:()=>i,k6:()=>a,nb:()=>m,o5:()=>l});const n="api-",i=n+"ixn-",s="addPageAction",o="addToTrace",a="addRelease",c="finished",d="interaction",u="log",l="noticeError",f="pauseReplay",h="recordCustomEvent",p="recordReplay",g="register",m="setApplicationVersion",v="setCurrentRouteName",y="setCustomAttribute",b="setErrorHandler",w="setPageViewName",R="setUserId",E="start",T="wrapLogger",A="measure",x="consent"},5270:(e,t,r)=>{"use strict";r.d(t,{Aw:()=>o,SR:()=>s,rF:()=>a});var n=r(384),i=r(7767);function s(e){return!!(0,n.dV)().o.MO&&(0,i.V)(e)&&!0===e?.session_trace.enabled}function o(e){return!0===e?.session_replay.preload&&s(e)}function a(e,t){try{if("string"==typeof t?.type){if("password"===t.type.toLowerCase())return"*".repeat(e?.length||0);if(void 0!==t?.dataset?.nrUnmask||t?.classList?.contains("nr-unmask"))return e}}catch(e){}return"string"==typeof e?e.replace(/[\S]/g,"*"):"*".repeat(e?.length||0)}},5289:(e,t,r)=>{"use strict";r.d(t,{GG:()=>o,Qr:()=>c,sB:()=>a});var n=r(3878),i=r(6389);function s(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(s())return e();const r=(0,i.J)(e),o=setInterval(()=>{s()&&(clearInterval(o),r())},500);(0,n.sp)("load",r,t)}function a(e){if(s())return e();(0,n.DD)("DOMContentLoaded",e)}function c(e){if(s())return e();(0,n.sp)("popstate",e)}},5607:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});const n=(0,r(9566).bz)()},5732:(e,t,r)=>{"use strict";r.d(t,{$5:()=>u,B5:()=>d,Ms:()=>s,Ux:()=>a,YA:()=>c,fQ:()=>i,yx:()=>o});var n=r(7508);const i={MFE:"MFE",BA:"BA"};function s(e,t){if(!e||!t?.init.api.register.enabled)return[];const r=t.runtime.registeredEntities;return r?.filter(t=>String(t.metadata.target.id)===String(e)).map(e=>e.metadata.target)||[]}function o(e,t){if(!e||!t?.init.api.register.enabled)return[];const r=t.runtime.registeredEntities;return r?.filter(t=>t.metadata.timings?.asset?.endsWith(e)).map(e=>e.metadata.target)||[]}function a(e,t){if(!l(t))return{};const r=t.agentRef.runtime.appMetadata.agents[0].entityGuid;return e?e.attributes:{"entity.guid":r,appId:t.agentRef.info.applicationID}}function c(e,t){return d(e,t)?{"child.id":e.id,"child.type":e.type,...a(void 0,t)}:{}}function d(e,t){return!!e&&!!l(t)&&t.agentRef.init.api.register.duplicate_data_to_container}function u(e){if(!e?.init.api.register.enabled)return[void 0];const t=[];try{var r=(0,n.AZ)((0,n.QL)());let i=r.length-1;for(;r[i];)t.push(...o(r[i--],e))}catch(e){}return t.length||t.push(void 0),t}function l(e){return 2===e?.harvestEndpointVersion}},6154:(e,t,r)=>{"use strict";r.d(t,{OF:()=>d,RI:()=>i,WN:()=>f,bv:()=>s,gm:()=>o,lR:()=>l,m:()=>c,mw:()=>a,sb:()=>u,zk:()=>h});var n=r(1863);const i="undefined"!=typeof window&&!!window.document,s="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),o=i?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),a=Boolean("hidden"===o?.document?.visibilityState),c=""+o?.location,d=/iPad|iPhone|iPod/.test(o.navigator?.userAgent),u=d&&"undefined"==typeof SharedWorker,l=(()=>{const e=o.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),f=Date.now()-(0,n.t)(),h=()=>{const e=o?.performance?.getEntriesByType?.("navigation")?.[0];if(e&&e.responseStart>0&&e.responseStart<o.performance.now())return e}},6344:(e,t,r)=>{"use strict";r.d(t,{BB:()=>u,Qb:()=>l,TZ:()=>i,Ug:()=>o,Vh:()=>s,_s:()=>a,bc:()=>d,yP:()=>c});var n=r(2614);const i=r(860).K7.sessionReplay,s="errorDuringReplay",o=.12,a={DomContentLoaded:0,Load:1,FullSnapshot:2,IncrementalSnapshot:3,Meta:4,Custom:5},c={[n.g.ERROR]:15e3,[n.g.FULL]:3e5,[n.g.OFF]:0},d={RESET:{message:"Session was reset",sm:"Reset"},IMPORT:{message:"Recorder failed to import",sm:"Import"},TOO_MANY:{message:"429: Too Many Requests",sm:"Too-Many"},TOO_BIG:{message:"Payload was too large",sm:"Too-Big"},CROSS_TAB:{message:"Session Entity was set to OFF on another tab",sm:"Cross-Tab"},ENTITLEMENTS:{message:"Session Replay is not allowed and will not be started",sm:"Entitlement"}},u=5e3,l={API:"api",RESUME:"resume",SWITCH_TO_FULL:"switchToFull",INITIALIZE:"initialize",PRELOAD:"preload"}},6389:(e,t,r)=>{"use strict";function n(e,t=500,r={}){const n=r?.leading||!1;let i;return(...r)=>{n&&void 0===i&&(e.apply(this,r),i=setTimeout(()=>{i=clearTimeout(i)},t)),n||(clearTimeout(i),i=setTimeout(()=>{e.apply(this,r)},t))}}function i(e){let t=!1;return(...r)=>{t||(t=!0,e.apply(this,r))}}r.d(t,{J:()=>i,s:()=>n})},6630:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K7.pageViewEvent},6774:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K7.jserrors},7295:(e,t,r)=>{"use strict";r.d(t,{Xv:()=>o,gX:()=>i,iW:()=>s});var n=[];function i(e){if(!e||s(e))return!1;if(0===n.length)return!0;if("*"===n[0].hostname)return!1;for(var t=0;t<n.length;t++){var r=n[t];if(r.hostname.test(e.hostname)&&r.pathname.test(e.pathname))return!1}return!0}function s(e){return void 0===e.hostname}function o(e){if(n=[],e&&e.length)for(var t=0;t<e.length;t++){let r=e[t];if(!r)continue;if("*"===r)return void(n=[{hostname:"*"}]);0===r.indexOf("http://")?r=r.substring(7):0===r.indexOf("https://")&&(r=r.substring(8));const i=r.indexOf("/");let s,o;i>0?(s=r.substring(0,i),o=r.substring(i)):(s=r,o="*");let[c]=s.split(":");n.push({hostname:a(c),pathname:a(o,!0)})}}function a(e,t=!1){const r=e.replace(/[.+?^${}()|[\]\\]/g,e=>"\\"+e).replace(/\*/g,".*?");return new RegExp((t?"^":"")+r+"$")}},7485:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(6154);function i(e){if(0===(e||"").indexOf("data:"))return{protocol:"data"};try{const t=new URL(e,location.href),r={port:t.port,hostname:t.hostname,pathname:t.pathname,search:t.search,protocol:t.protocol.slice(0,t.protocol.indexOf(":")),sameOrigin:t.protocol===n.gm?.location?.protocol&&t.host===n.gm?.location?.host};return r.port&&""!==r.port||("http:"===t.protocol&&(r.port="80"),"https:"===t.protocol&&(r.port="443")),r.pathname&&""!==r.pathname?r.pathname.startsWith("/")||(r.pathname="/".concat(r.pathname)):r.pathname="/",r}catch(e){return{}}}},7508:(e,t,r)=>{"use strict";r.d(t,{AZ:()=>g,Qr:()=>b,QL:()=>m});var n=r(6154),i=r(1863),s=r(9119),o=r(7866);class a{dom=new c;performance=new c;constructor(e){this.url=e}get script(){const e=Math.max(this.dom.start,this.performance.end);return{start:e,end:Math.max(this.dom.end,this.performance.end,e)}}}class c{start=0;end=0;value=void 0}let d;try{d=g(m())[0]}catch(e){d=g(e)[0]}const u=e=>"script"===e.initiatorType||["link","fetch"].includes(e.initiatorType)&&e.name.endsWith(".js"),l=new Map;let f=[];function h(e){return l.get(e)}function p(e){const t=h(e);if(t)return t;const r=new a(e);if(l.set(e,r),l.size>1e3){const e=l.keys().next().value;l.delete(e)}return r}if(n.gm.MutationObserver&&n.gm.document){new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{if("SCRIPT"===e.nodeName&&e.src){const t=p((0,s.L)(e.src));t.dom.start=(0,i.t)(),t.dom.value=e;const r=()=>{t.dom.end=(0,i.t)()};["load","error"].forEach(t=>e.addEventListener(t,r,{once:!0}))}})})}).observe(n.gm.document,{childList:!0,subtree:!0})}if(n.gm.PerformanceObserver?.supportedEntryTypes.includes("resource")){new PerformanceObserver(e=>{e.getEntries().filter(u).forEach(e=>{const t=p((0,s.L)(e.name));t.performance.start=Math.floor(e.startTime),t.performance.end=Math.floor(e.responseEnd),t.performance.value=e;const r=[];f.forEach(({test:t,addedAt:n},s)=>{(t(e)||(0,i.t)()-n>1e4)&&r.push(s)}),f=f.filter((e,t)=>!r.includes(t))})}).observe({type:"resource",buffered:!0})}function g(e){if(!e||"string"!=typeof e)return[];const t=new Set,r=e.split("\n");for(const e of r){const r=e.match(o.cn)||e.match(o.hB)||e.match(o.fL);if(r&&r[2])t.add((0,s.L)(r[2]));else{const r=e.match(/\(([^)]+\.js):\d+:\d+\)/)||e.match(/^\s+at\s+([^\s(]+\.js):\d+:\d+/);r&&r[1]&&t.add((0,s.L)(r[1]))}}return[...t]}function m(){let e;try{const t=Error.stackTraceLimit;Error.stackTraceLimit=50,e=(new Error).stack,Error.stackTraceLimit=t}catch(t){e=(new Error).stack}return e}function v(e,t){return(0,s.L)(e.name)===t}function y(e,t){e.fetchStart=Math.floor(t.startTime),e.fetchEnd=Math.floor(t.responseEnd),e.asset=t.name,e.type=t.initiatorType}function b(){const e={registeredAt:(0,i.t)(),reportedAt:void 0,fetchStart:0,fetchEnd:0,scriptStart:0,scriptEnd:0,asset:void 0,type:"unknown"},t=m();if(!t)return e;const r=n.gm.performance?.getEntriesByType("navigation")?.[0]?.name||"";try{const o=g(t),a=(o.length>1?o.filter(e=>d!==e):o)[0];if(!a)return e;if(r.includes(a))return e.asset=(0,s.L)(r),e.type="inline",e;e.correlation=h(a);const c=e.correlation?.performance.value||performance.getEntriesByType("resource").find(e=>v(e,a));c?y(e,c):function(e){if(!e||!n.gm.document)return!1;try{const t=n.gm.document.querySelectorAll('link[rel="preload"][as="script"]');for(const r of t)if((0,s.L)(r.href)===e)return!0}catch(e){}return!1}(a)&&(e.asset=a,e.type="preload",f.push({addedAt:(0,i.t)(),test:t=>!!v(t,a)&&(y(e,t),!0)})),Object.defineProperty(e,"scriptStart",{get:()=>e.correlation?.script.start||e.fetchEnd}),Object.defineProperty(e,"scriptEnd",{get:()=>e.correlation?.script.end||e.registeredAt})}catch(e){}return e}},7699:(e,t,r)=>{"use strict";r.d(t,{It:()=>s,KC:()=>a,No:()=>i,qh:()=>o});var n=r(860);const i=16e3,s=1e6,o="SESSION_ERROR",a={[n.K7.logging]:!0,[n.K7.genericEvents]:!0,[n.K7.jserrors]:!0,[n.K7.ajax]:!0}},7767:(e,t,r)=>{"use strict";r.d(t,{V:()=>i});var n=r(6154);const i=e=>n.RI&&!0===e?.privacy.cookies_enabled},7836:(e,t,r)=>{"use strict";r.d(t,{P:()=>a,ee:()=>c});var n=r(384),i=r(8990),s=r(2646),o=r(5607);const a="nr@context:".concat(o.W),c=function e(t,r){var n={},o={},u={},l=!1;try{l=16===r.length&&d.initializedAgents?.[r]?.runtime.isolatedBacklog}catch(e){}var f={on:p,addEventListener:p,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,s){!1!==s&&(s=!0);if(c.aborted&&!i)return;t&&s&&t.emit(e,r,n);var a=h(n);g(e).forEach(e=>{e.apply(a,r)});var d=v()[o[e]];d&&d.push([f,e,r,a]);return a},get:m,listeners:g,context:h,buffer:function(e,t){const r=v();if(t=t||"feature",f.aborted)return;Object.entries(e||{}).forEach(([e,n])=>{o[n]=t,t in r||(r[t]=[])})},abort:function(){f._aborted=!0,Object.keys(f.backlog).forEach(e=>{delete f.backlog[e]})},isBuffering:function(e){return!!v()[o[e]]},debugId:r,backlog:l?{}:t&&"object"==typeof t.backlog?t.backlog:{},isolatedBacklog:l};return Object.defineProperty(f,"aborted",{get:()=>{let e=f._aborted||!1;return e||(t&&(e=t.aborted),e)}}),f;function h(e){return e&&e instanceof s.y?e:e?(0,i.I)(e,a,()=>new s.y(a)):new s.y(a)}function p(e,t){n[e]=g(e).concat(t)}function g(e){return n[e]||[]}function m(t){return u[t]=u[t]||e(f,t)}function v(){return f.backlog}}(void 0,"globalEE"),d=(0,n.Zm)();d.ee||(d.ee=c)},7866:(e,t,r)=>{"use strict";r.d(t,{Nc:()=>s,cn:()=>a,fL:()=>i,h3:()=>n,hB:()=>o});const n=/function (.+?)\s*\(/,i=/^\s*at .+ \(eval at \S+ \((?:(?:file|http|https):[^)]+)?\)(?:, [^:]*:\d+:\d+)?\)$/i,s=/^\s*at Function code \(Function code:\d+:\d+\)\s*/i,o=/^\s*at (?:((?:\[object object\])?(?:[^(]*\([^)]*\))*[^()]*(?: \[as \S+\])?) )?\(?((?:file|http|https|chrome-extension):.*?)?:(\d+)(?::(\d+))?\)?\s*$/i,a=/^\s*(?:([^@]*)(?:\(.*?\))?@)?((?:file|http|https|chrome|safari-extension).*?):(\d+)(?::(\d+))?\s*$/i},8122:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});var n=r(944);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.R)(3);if(!t||"object"!=typeof t)return(0,n.R)(4);const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),s=0===Object.keys(r).length?e:r;for(let o in s)if(void 0!==e[o])try{if(null===e[o]){r[o]=null;continue}Array.isArray(e[o])&&Array.isArray(t[o])?r[o]=Array.from(new Set([...e[o],...t[o]])):e[o]instanceof Map||e[o]instanceof Set||e[o]instanceof Date||e[o]instanceof RegExp?r[o]=e[o]:"object"==typeof e[o]&&"object"==typeof t[o]?r[o]=i(e[o],t[o]):r[o]=e[o]}catch(e){r[o]||(0,n.R)(1,e)}return r}catch(e){(0,n.R)(2,e)}}},8139:(e,t,r)=>{"use strict";r.d(t,{u:()=>f});var n=r(7836),i=r(3434),s=r(8990),o=r(6154);const a={},c=o.gm.XMLHttpRequest,d="addEventListener",u="removeEventListener",l="nr@wrapped:".concat(n.P);function f(e){var t=function(e){return(e||n.ee).get("events")}(e);if(a[t.debugId]++)return t;a[t.debugId]=1;var r=(0,i.YM)(t,!0);function f(e){r.inPlace(e,[d,u],"-",p)}function p(e,t){return e[1]}return"getPrototypeOf"in Object&&(o.RI&&h(document,f),c&&h(c.prototype,f),h(o.gm,f)),t.on(d+"-start",function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)&&"newrelic"!==e[0]){var i=(0,s.I)(n,l,function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return e?r(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=e[1]=i}}),t.on(u+"-start",function(e){e[1]=this.wrapped||e[1]}),t}function h(e,t,...r){let n=e;for(;"object"==typeof n&&!Object.prototype.hasOwnProperty.call(n,d);)n=Object.getPrototypeOf(n);n&&t(n,...r)}},8362:(e,t,r)=>{"use strict";r.d(t,{d:()=>s});var n=r(9566),i=r(1741);class s extends i.W{agentIdentifier=(0,n.LA)(16)}},8374:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},8990:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},9119:(e,t,r)=>{"use strict";r.d(t,{L:()=>s});var n=/([^?#]*)[^#]*(#[^?]*|$).*/,i=/([^?#]*)().*/;function s(e,t){return e?e.replace(t?n:i,"$1$2"):e}},9300:(e,t,r)=>{"use strict";r.d(t,{T:()=>n,f:()=>i});const n=r(860).K7.ajax,i="ajaxRequest.id"},9324:(e,t,r)=>{"use strict";r.d(t,{AJ:()=>o,F3:()=>i,Xs:()=>s,Yq:()=>a,xv:()=>n});const n="1.316.0",i="PROD",s="CDN",o="@newrelic/rrweb",a="1.1.0"},9566:(e,t,r)=>{"use strict";r.d(t,{LA:()=>a,ZF:()=>c,bz:()=>o,el:()=>d});var n=r(6154);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function s(e,t){return e?15&e[t]:16*Math.random()|0}function o(){const e=n.gm?.crypto||n.gm?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map(e=>"x"===e?s(t,r++).toString(16):"y"===e?(3&s()|8).toString(16):e).join("")}function a(e){const t=n.gm?.crypto||n.gm?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const o=[];for(var a=0;a<e;a++)o.push(s(r,i++).toString(16));return o.join("")}function c(){return a(16)}function d(){return a(32)}},9908:(e,t,r)=>{"use strict";r.d(t,{d:()=>n,p:()=>i});var n=r(7836).ee.get("handle");function i(e,t,r,i,s){s?(s.buffer([e],i),s.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return r[e](s,s.exports,i),s.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce((t,r)=>(i.f[r](e,t),t),[])),i.u=e=>({212:"nr-spa-compressor",249:"nr-spa-recorder",478:"nr-spa"}[e]+"-1.316.0.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.316.0.PROD:",i.l=(r,n,s,o)=>{if(e[r])e[r].push(n);else{var a,c;if(void 0!==s)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+s){a=l;break}}if(!a){c=!0;var f={478:"sha512-/91tZUpAINW5VzLS+EdJpEe0gul6FJd2zTpGwLIhi/mqcTiQPUlhoJmX5zb4EPTwdGqun46DoGQPtDShDBw4bA==",249:"sha512-XqLQgD24Jrw2HFtuRDeuxMcY5WnEXG04tpC98UJOJlIfGqQst/lKUE+G++zwulwEzcM00bl5V0e1kKGq2Nxc1g==",212:"sha512-rOHSN/tvMjFe33yfRKMs44m3dZKgs9foEl0T2tdErrZKsAF8Oe5+OLJKgySrw3WwY4MgvuS4yWEr88MMv5LZaw=="};(a=document.createElement("script")).charset="utf-8",i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+s),a.src=r,0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous"),f[o]&&(a.integrity=f[o])}e[r]=[n];var h=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach(e=>e(n)),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),c&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={38:0,788:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((r,i)=>n=e[t]=[r,i]);r.push(n[2]=s);var o=i.p+i.u(t),a=new Error;i.l(o,r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed: ("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,n[1](a)}},"chunk-"+t,t)}};var t=(t,r)=>{var n,s,[o,a,c]=r,d=0;if(o.some(t=>0!==e[t])){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)c(i)}for(t&&t(r);d<o.length;d++)s=o[d],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0},r=self["webpackChunk:NRBA-1.316.0.PROD"]=self["webpackChunk:NRBA-1.316.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(8374);var e=i(8362),t=i(860);const r=Object.values(t.K7);var n=i(384),s=i(1741);var o=i(2555),a=i(3333);const c=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var d=i(2614),u=i(944),l=i(8122);const f="[data-nr-mask]",h=e=>(0,l.a)(e,(()=>{const e={feature_flags:[],experimental:{register:!1,resources:!1},mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{ajax:{deny_list:void 0,block_internal:!0,enabled:!0,autoStart:!0},api:{register:{get enabled(){return e.feature_flags.includes(a.$v.REGISTER)||e.experimental.register},set enabled(t){e.experimental.register=t},duplicate_data_to_container:!1}},browser_consent_mode:{enabled:!1},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},get feature_flags(){return e.feature_flags},set feature_flags(t){e.feature_flags=t},generic_events:{enabled:!0,autoStart:!0},harvest:{interval:30},jserrors:{enabled:!0,autoStart:!0},logging:{enabled:!0,autoStart:!0},metrics:{enabled:!0,autoStart:!0},obfuscate:void 0,page_action:{enabled:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,autoStart:!0},performance:{capture_marks:!1,capture_measures:!1,capture_detail:!0,resources:{get enabled(){return e.feature_flags.includes(a.$v.RESOURCES)||e.experimental.resources},set enabled(t){e.experimental.resources=t},asset_types:[],first_party_domains:[],ignore_newrelic:!0}},privacy:{cookies_enabled:!0},proxy:{assets:void 0,beacon:void 0},session:{expiresMs:d.wk,inactiveMs:d.BB},session_replay:{autoStart:!0,enabled:!1,preload:!1,sampling_rate:10,error_sampling_rate:100,collect_fonts:!1,inline_images:!1,fix_stylesheets:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){c(t)?e.mask_selector="".concat(t,",").concat(f):""===t||null===t?e.mask_selector=f:(0,u.R)(5,t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){c(t)?e.block_selector+=",".concat(t):""!==t&&(0,u.R)(6,t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,u.R)(7,t)}},session_trace:{enabled:!0,autoStart:!0},soft_navigations:{enabled:!0,autoStart:!0},ssl:void 0,user_actions:{enabled:!0,elementAttributes:["id","className","tagName","type"]}}})());var p=i(6154),g=i(9324);let m=0;const v={buildEnv:g.F3,distMethod:g.Xs,version:g.xv,originTime:p.WN},y={consented:!1},b={activatedFeatures:void 0,appMetadata:{},configured:!1,get consented(){return this.session?.state?.consent||y.consented},set consented(e){y.consented=e},customTransaction:void 0,denyList:[],disabled:!1,drainRegistry:new Map,harvester:void 0,isolatedBacklog:!1,isRecording:!1,loaderType:void 0,maxBytes:3e4,obfuscator:void 0,onerror:void 0,ptid:void 0,releaseIds:{},session:void 0,timeKeeper:void 0,registeredEntities:[],jsAttributesMetadata:{bytes:0},get harvestCount(){return++m}};var w=i(7836),R=i(3241);const E={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0};function T(e,t={},r,a){let{init:c,info:d,loader_config:u,runtime:f={},exposed:g=!0}=t;if(!d){const e=(0,n.pV)();c=e.init,d=e.info,u=e.loader_config}var m;e.init=h(c||{}),e.loader_config=(m=u||{},(0,l.a)(m,E)),d.jsAttributes??={},p.bv&&(d.jsAttributes.isWorker=!0),e.info=(0,o.D)(d);const y=e.init;e.runtime??=(e=>{const t=(0,l.a)(e,b),r=Object.keys(v).reduce((e,t)=>(e[t]={value:v[t],writable:!1,configurable:!0,enumerable:!0},e),{});return Object.defineProperties(t,r)})(f),y.proxy.assets&&(e=>{const t=e.startsWith("http");e+="/",i.p=t?e:"https://"+e})(y.proxy.assets),e.runtime.configured||(Object.defineProperty(e,"beacons",{get:()=>[e.info.beacon,e.info.errorBeacon,e.init.proxy.assets,e.init.proxy.beacon].filter(Boolean)}),Object.defineProperty(e.runtime,"denyList",{get:()=>[...e.init.ajax.deny_list||[],...e.init.ajax.block_internal?e.beacons:[]]}),e.runtime.ptid=e.agentIdentifier,function(e){const t=(0,n.pV)();Object.getOwnPropertyNames(s.W.prototype).forEach(r=>{const n=s.W.prototype[r];if("function"!=typeof n||"constructor"===n)return;let i=t[r];e[r]&&!1!==e.exposed&&"micro-agent"!==e.runtime?.loaderType&&(t[r]=(...t)=>{const n=e[r](...t);return i?i(...t):n})})}(e),e.runtime.loaderType=r,e.ee=w.ee.get(e.agentIdentifier),e.exposed=g,(0,R.W)({drained:!!e.runtime.activatedFeatures,type:"lifecycle",name:"initialize",feature:void 0,data:e.config}),e.runtime.configured=!0)}var A=i(9908),x=i(1863),S=i(4261),_=i(1738);var O=i(1687),P=i(4234),k=i(5289),N=i(5270),j=i(7767),C=i(6389),D=i(7699);const L=new WeakSet;class I extends P.W{constructor(e,t){super(e,t),this.abortHandler=void 0,this.featAggregate=void 0,this.loadedSuccessfully=void 0,this.onAggregateImported=new Promise(e=>{this.loadedSuccessfully=e}),this.deferred=Promise.resolve(),!1===e.init[this.featureName].autoStart?this.deferred=new Promise((t,r)=>{this.ee.on("manual-start-all",(0,C.J)(()=>{(0,O.Ak)(e,this.featureName),t()}))}):(0,O.Ak)(e,t)}importAggregator(e,t,r={}){if(this.featAggregate)return;const n=async()=>{if(await this.deferred,this.#t(e),!(0,o.f)(e.info))return(0,u.R)(43),e.ee.abort(),void this.loadedSuccessfully(!1);let n;try{if((0,j.V)(e.init)){const{setupAgentSession:t}=await i.e(478).then(i.bind(i,8766));n=t(e)}}catch(e){(0,u.R)(20,e),this.ee.emit("internal-error",[e]),(0,A.p)(D.qh,[e],void 0,this.featureName,this.ee)}try{if(!this.#r(this.featureName,n,e.init))return(0,O.Ze)(this.agentRef,this.featureName),void this.loadedSuccessfully(!1);const{Aggregate:i}=await t();this.featAggregate=new i(e,r),e.runtime.harvester.initializedAggregates.push(this.featAggregate),this.loadedSuccessfully(!0)}catch(e){(0,u.R)(34,e),this.abortHandler?.(),(0,O.Ze)(this.agentRef,this.featureName,!0),this.loadedSuccessfully(!1),this.ee&&this.ee.abort()}};p.RI?(0,k.GG)(()=>n(),!0):n()}#r(e,r,n){if(this.blocked)return!1;switch(e){case t.K7.sessionReplay:return(0,N.SR)(n)&&!!r;case t.K7.sessionTrace:return!!r;default:return!0}}#t(e){if(!L.has(e)&&(L.add(e),!(0,o.f)(e.info))){const t=(0,n.pV)();let r={...t.info?.jsAttributes};try{r={...r,...e.info?.jsAttributes}}catch(e){}T(e,{...t,info:{...t.info,jsAttributes:r},runtime:e.runtime},e.runtime.loaderType)}}}var M=i(6630);class B extends I{static featureName=M.T;constructor(e){var t;super(e,M.T),this.setupInspectionEvents(),t=e,(0,_.Y)(S.Fw,function(e,r){"string"==typeof e&&("/"!==e.charAt(0)&&(e="/"+e),t.runtime.customTransaction=(r||"http://custom.transaction")+e,(0,A.p)(S.Pl+S.Fw,[(0,x.t)()],void 0,void 0,t.ee))},t),this.importAggregator(e,()=>i.e(478).then(i.bind(i,5839)))}setupInspectionEvents(){const e=(e,t)=>{e&&(0,R.W)({timeStamp:e.timeStamp,loaded:"complete"===e.target.readyState,type:"window",name:t,data:e.target.location+""})};(0,k.sB)(t=>{e(t,"DOMContentLoaded")}),(0,k.GG)(t=>{e(t,"load")}),(0,k.Qr)(t=>{e(t,"navigate")}),this.ee.on(d.tS.UPDATE,(e,t)=>{(0,R.W)({type:"lifecycle",name:"session",data:t})})}}class H extends e.d{constructor(e){var t;(super(),p.gm)?(this.features={},(0,n.bQ)(this.agentIdentifier,this),this.desiredFeatures=new Set(e.features||[]),this.desiredFeatures.add(B),T(this,e,e.loaderType||"agent"),t=this,(0,_.Y)(S.cD,function(e,r,n=!1){if("string"==typeof e){if(["string","number","boolean"].includes(typeof r)||null===r)return(0,_.U)(t,e,r,S.cD,n);(0,u.R)(40,typeof r)}else(0,u.R)(39,typeof e)},t),function(e){(0,_.Y)(S.Dl,function(t,r=!1){if("string"!=typeof t&&null!==t)return void(0,u.R)(41,typeof t);const n=e.info.jsAttributes["enduser.id"];r&&null!=n&&n!==t?(0,A.p)(S.Pl+"setUserIdAndResetSession",[t],void 0,"session",e.ee):(0,_.U)(e,"enduser.id",t,S.Dl,!0)},e)}(this),function(e){(0,_.Y)(S.nb,function(t){if("string"==typeof t||null===t)return(0,_.U)(e,"application.version",t,S.nb,!1);(0,u.R)(42,typeof t)},e)}(this),function(e){(0,_.Y)(S.d3,function(){e.ee.emit("manual-start-all")},e)}(this),function(e){(0,_.Y)(S.Pv,function(t=!0){if("boolean"==typeof t){if((0,A.p)(S.Pl+S.Pv,[t],void 0,"session",e.ee),e.runtime.consented=t,t){const t=e.features.page_view_event;t.onAggregateImported.then(e=>{const r=t.featAggregate;e&&!r.sentRum&&r.sendRum()})}}else(0,u.R)(65,typeof t)},e)}(this),this.run()):(0,u.R)(21)}get config(){return{info:this.info,init:this.init,loader_config:this.loader_config,runtime:this.runtime}}get api(){return this}run(){try{const e=function(e){const t={};return r.forEach(r=>{t[r]=!!e[r]?.enabled}),t}(this.init),n=[...this.desiredFeatures];n.sort((e,r)=>t.P3[e.featureName]-t.P3[r.featureName]),n.forEach(r=>{if(!e[r.featureName]&&r.featureName!==t.K7.pageViewEvent)return;const n=function(e){switch(e){case t.K7.ajax:return[t.K7.jserrors];case t.K7.sessionTrace:return[t.K7.ajax,t.K7.pageViewEvent];case t.K7.sessionReplay:return[t.K7.sessionTrace];case t.K7.pageViewTiming:return[t.K7.pageViewEvent];default:return[]}}(r.featureName).filter(e=>!(e in this.features));n.length>0&&(0,u.R)(36,{targetFeature:r.featureName,missingDependencies:n}),this.features[r.featureName]=new r(this)})}catch(e){(0,u.R)(22,e);for(const e in this.features)this.features[e].abortHandler?.();const t=(0,n.Zm)();delete t.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator;return t.ee.get(this.agentIdentifier).abort(),!1}}}var K=i(2843),W=i(782);class F extends I{static featureName=W.T;constructor(e){super(e,W.T),p.RI&&((0,K.u)(()=>(0,A.p)("docHidden",[(0,x.t)()],void 0,W.T,this.ee),!0),(0,K.G)(()=>(0,A.p)("winPagehide",[(0,x.t)()],void 0,W.T,this.ee)),this.importAggregator(e,()=>i.e(478).then(i.bind(i,9917))))}}var U=i(3969);class V extends I{static featureName=U.TZ;constructor(e){super(e,U.TZ),this.importAggregator(e,()=>i.e(478).then(i.bind(i,6555)))}}var z=i(6774),G=i(3878),Y=i(3304);class Z{constructor(e,t,r,n,i){this.name="UncaughtError",this.message="string"==typeof e?e:(0,Y.A)(e),this.sourceURL=t,this.line=r,this.column=n,this.__newrelic=i}}function q(e){return J(e)?e:new Z(void 0!==e?.message?e.message:e,e?.filename||e?.sourceURL,e?.lineno||e?.line,e?.colno||e?.col,e?.__newrelic,e?.cause)}function X(e){const t="Unhandled Promise Rejection: ";if(!e?.reason)return;if(J(e.reason)){try{e.reason.message.startsWith(t)||(e.reason.message=t+e.reason.message)}catch(e){}return q(e.reason)}const r=q(e.reason);return(r.message||"").startsWith(t)||(r.message=t+r.message),r}function Q(e){if(e.error instanceof SyntaxError&&!/:\d+$/.test(e.error.stack?.trim())){const t=new Z(e.message,e.filename,e.lineno,e.colno,e.error.__newrelic,e.cause);return t.name=SyntaxError.name,t}return J(e.error)?e.error:q(e)}function J(e){return e instanceof Error&&!!e.stack}function ee(e,r,n,i,s=(0,x.t)()){"string"==typeof e&&(e=new Error(e)),(0,A.p)("err",[e,s,!1,r,n.runtime.isRecording,void 0,i],void 0,t.K7.jserrors,n.ee),(0,A.p)("uaErr",[],void 0,t.K7.genericEvents,n.ee)}var te=i(5732),re=i(993),ne=i(3785);function ie(e,{customAttributes:t={},level:r=re.p_.INFO}={},n,i,s=(0,x.t)()){(0,ne.R)(n.ee,e,t,r,!1,i,s)}function se(e,r,n,i,s=(0,x.t)()){(0,A.p)(S.Pl+S.hG,[s,e,r,i],void 0,t.K7.genericEvents,n.ee)}function oe(e,r,n,i,s=(0,x.t)()){const{start:o,end:a,customAttributes:c}=r||{},d={customAttributes:c||{}};if("object"!=typeof d.customAttributes||"string"!=typeof e||0===e.length)return void(0,u.R)(57);const l=(e,t)=>null==e?t:"number"==typeof e?e:e instanceof PerformanceMark?e.startTime:Number.NaN;if(d.start=l(o,0),d.end=l(a,s),Number.isNaN(d.start)||Number.isNaN(d.end))(0,u.R)(57);else{if(d.duration=d.end-d.start,!(d.duration<0))return(0,A.p)(S.Pl+S.V1,[d,e,i],void 0,t.K7.genericEvents,n.ee),d;(0,u.R)(58)}}function ae(e,r={},n,i,s=(0,x.t)()){(0,A.p)(S.Pl+S.fF,[s,e,r,i],void 0,t.K7.genericEvents,n.ee)}var ce=i(7508),de=i(9566);const ue=["name","id","type"],le=new Map([[se,"addPageAction"],[ie,"log"],[oe,"measure"],[ee,"noticeError"],[ae,"recordCustomEvent"]]),fe={experimental:(0,C.J)(()=>(0,u.R)(54,"newrelic.register")),disabled:(0,C.J)(()=>(0,u.R)(55)),invalidTarget:(0,C.J)(e=>(0,u.R)(48,e)),deregistered:(0,C.J)(()=>(0,u.R)(68))};function he(e){(0,_.Y)(S.eY,function(t){return pe(e,t)},e)}function pe(e,r){fe.experimental(),r||={},r.instance=(0,de.LA)(8),r.type=te.fQ.MFE,r.licenseKey||=e.info.licenseKey,r.blocked=!1,("object"!=typeof r.tags||null===r.tags||Array.isArray(r.tags))&&(r.tags={}),r.parent??={get id(){return e.runtime.appMetadata.agents[0].entityGuid},type:te.fQ.BA};const n=(0,ce.Qr)(),i={};Object.prototype.hasOwnProperty.call(r,"attributes")||Object.defineProperty(r,"attributes",{get:()=>({...i,"source.id":r.id,"source.name":r.name,"source.type":r.type,"parent.type":r.parent?.type||te.fQ.BA,"parent.id":r.parent?.id})}),Object.entries(r.tags).forEach(([e,t])=>{ue.includes(e)||(i["source.".concat(e)]=t)});let s=()=>{};const o=e.runtime.registeredEntities,a=e=>{r.blocked=!0,s=e};function c(e){return"string"==typeof e&&!!e.trim()&&e.trim().length<501}e.init.api.register.enabled||a(fe.disabled),c(r.id)&&c(r.name)||a(()=>fe.invalidTarget(r));const d={addPageAction:(t,n={})=>p(se,[t,{...i,...n},e],r),deregister:()=>{f(),a(fe.deregistered)},log:(t,n={})=>p(ie,[t,{...n,customAttributes:{...i,...n.customAttributes||{}}},e],r),measure:(t,n={})=>p(oe,[t,{...n,customAttributes:{...i,...n.customAttributes||{}}},e],r),noticeError:(t,n={})=>p(ee,[t,{...i,...n},e],r),recordCustomEvent:(t,n={})=>p(ae,[t,{...i,...n},e],r),setApplicationVersion:e=>h("application.version",e),setCustomAttribute:(e,t)=>h(e,t),setUserId:e=>h("enduser.id",e),metadata:{get customAttributes(){return i},target:r,timings:n}},l=()=>(r.blocked&&s(),r.blocked);function f(){if(n.reportedAt)return;n.reportedAt=(0,x.t)();const e=n.fetchEnd-n.fetchStart,t=n.scriptEnd-n.scriptStart;d.recordCustomEvent("MicroFrontEndTiming",{assetUrl:n.asset,assetType:n.type,timeAlive:n.reportedAt-n.registeredAt,timeToBeRequested:n.fetchStart,timeToExecute:t,timeToFetch:e,timeToLoad:e+t,timeToRegister:n.registeredAt})}l()||(o.push(d),(0,K.G)(f));const h=(e,t)=>{l()||(i[e]=t)},p=(r,n,i)=>{if(l()&&r!==pe)return;const s=(0,x.t)(),o=le.get(r)||"unknown";(0,A.p)(U.xV,["API/register/".concat(o,"/called")],void 0,t.K7.metrics,e.ee);try{return r(...n,i,s)}catch(e){(0,u.R)(50,e)}};return d}class ge extends I{static featureName=z.T;constructor(e){var t;super(e,z.T),t=e,(0,_.Y)(S.o5,(e,r)=>ee(e,r,t),t),function(e){(0,_.Y)(S.bt,function(t){e.runtime.onerror=t},e)}(e),function(e){let t=0;(0,_.Y)(S.k6,function(e,r){++t>10||(this.runtime.releaseIds[e.slice(-200)]=(""+r).slice(-200))},e)}(e),he(e);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("internal-error",(t,r)=>{this.abortHandler&&(0,A.p)("ierr",[q(t),(0,x.t)(),!0,{},e.runtime.isRecording,r],void 0,this.featureName,this.ee)}),p.gm.addEventListener("unhandledrejection",t=>{this.abortHandler&&(0,A.p)("err",[X(t),(0,x.t)(),!1,{unhandledPromiseRejection:1},e.runtime.isRecording],void 0,this.featureName,this.ee)},(0,G.jT)(!1,this.removeOnAbort?.signal)),p.gm.addEventListener("error",t=>{this.abortHandler&&(0,A.p)("err",[Q(t),(0,x.t)(),!1,{},e.runtime.isRecording],void 0,this.featureName,this.ee)},(0,G.jT)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#n,this.importAggregator(e,()=>i.e(478).then(i.bind(i,9377)))}#n(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}var me=i(8990);let ve=1;function ye(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===p.gm?0:(0,me.I)(e,"nr@id",function(){return ve++})}function be(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,Y.A)(e).length}catch(e){return}}}var we=i(8139),Re=i(3434);const Ee={},Te=["open","send"];function Ae(e,t){var r=e||w.ee;const n=function(e){return(e||w.ee).get("xhr")}(r);if(void 0===p.gm.XMLHttpRequest)return n;if(Ee[n.debugId]++)return n;Ee[n.debugId]=1,(0,we.u)(r);var i=(0,Re.YM)(n),s=p.gm.XMLHttpRequest,o=p.gm.MutationObserver,a=p.gm.Promise,c=p.gm.setInterval,d="readystatechange",l=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],f=[],h=p.gm.XMLHttpRequest=function(e){const r=new s(e),o=n.context(r);o.targets=(0,te.$5)(t);try{n.emit("new-xhr",[r],o),r.addEventListener(d,(a=o,function(){var e=this;e.readyState>3&&!a.resolved&&(a.resolved=!0,n.emit("xhr-resolved",[],e)),i.inPlace(e,l,"fn-",R)}),(0,G.jT)(!1))}catch(e){(0,u.R)(15,e);try{n.emit("internal-error",[e])}catch(e){}}var a;return r};function g(e,t){i.inPlace(t,["onreadystatechange"],"fn-",R)}if(function(e,t){for(var r in e)t[r]=e[r]}(s,h),h.prototype=s.prototype,i.inPlace(h.prototype,Te,"-xhr-",R),n.on("send-xhr-start",function(e,t){g(e,t),function(e){f.push(e),o&&(m?m.then(b):c?c(b):(v=-v,y.data=v))}(t)}),n.on("open-xhr-start",g),o){var m=a&&a.resolve();if(!c&&!a){var v=1,y=document.createTextNode(v);new o(b).observe(y,{characterData:!0})}}else r.on("fn-end",function(e){e[0]&&e[0].type===d||b()});function b(){for(var e=0;e<f.length;e++)g(0,f[e]);f.length&&(f=[])}function R(e,t){return t}return n}var xe="fetch-",Se=xe+"body-",_e=["arrayBuffer","blob","json","text","formData"],Oe=p.gm.Request,Pe=p.gm.Response,ke="prototype";const Ne={};function je(e,t){const r=function(e){return(e||w.ee).get("fetch")}(e);if(!(Oe&&Pe&&p.gm.fetch))return r;if(Ne[r.debugId]++)return r;function n(e,n,i){var s=e[n];"function"==typeof s&&(e[n]=function(){var e=[...arguments];const n={},o=(0,te.$5)(t);var a;r.emit(i+"before-start",[e],n),n[w.P]&&n[w.P].dt&&(a=n[w.P].dt);var c=s.apply(this,e);return r.emit(i+"start",[e,a],c),c.then(function(e){return r.emit(i+"end",[null,e,o],c),e},function(e){throw r.emit(i+"end",[e,void 0,o],c),e})})}return Ne[r.debugId]=1,_e.forEach(e=>{n(Oe[ke],e,Se),n(Pe[ke],e,Se)}),n(p.gm,"fetch",xe),r.on(xe+"end",function(e,t,n){var i=this;if(i.targets=n||[void 0],t){var s=t.headers.get("content-length");null!==s&&(i.rxSize=s),r.emit(xe+"done",[null,t],i)}else r.emit(xe+"done",[e],i)}),r}var Ce=i(7485);class De{constructor(e){this.agentRef=e}generateTracePayload(e){const t=this.agentRef.loader_config;if(!this.shouldGenerateTrace(e)||!t)return null;var r=(t.accountID||"").toString()||null,n=(t.agentID||"").toString()||null,i=(t.trustKey||"").toString()||null;if(!r||!n)return null;var s=(0,de.ZF)(),o=(0,de.el)(),a=Date.now(),c={spanId:s,traceId:o,timestamp:a};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(c.traceContextParentHeader=this.generateTraceContextParentHeader(s,o),c.traceContextStateHeader=this.generateTraceContextStateHeader(s,a,r,n,i)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(c.newrelicHeader=this.generateTraceHeader(s,o,a,r,n,i)),c}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,s){if(!("function"==typeof p.gm?.btoa))return null;var o={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return s&&n!==s&&(o.d.tk=s),btoa((0,Y.A)(o))}shouldGenerateTrace(e){return this.agentRef.init?.distributed_tracing?.enabled&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1;const r=this.agentRef.init?.distributed_tracing;if(e.sameOrigin)t=!0;else if(r?.allowed_origins instanceof Array)for(var n=0;n<r.allowed_origins.length;n++){var i=(0,Ce.D)(r.allowed_origins[n]);if(e.hostname===i.hostname&&e.protocol===i.protocol&&e.port===i.port){t=!0;break}}return t}excludeNewrelicHeader(){var e=this.agentRef.init?.distributed_tracing;return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=this.agentRef.init?.distributed_tracing;return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=this.agentRef.init?.distributed_tracing;return!!e&&!!e.cors_use_tracecontext_headers}}var Le=i(9300),Ie=i(7295);function Me(e){return"string"==typeof e?e:e instanceof(0,n.dV)().o.REQ?e.url:p.gm?.URL&&e instanceof URL?e.href:void 0}var Be=["load","error","abort","timeout"],He=Be.length,Ke=(0,n.dV)().o.REQ,We=(0,n.dV)().o.XHR;const Fe="X-NewRelic-App-Data";class Ue extends I{static featureName=Le.T;constructor(e){super(e,Le.T),this.dt=new De(e),this.handler=(e,t,r,n)=>(0,A.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};p.gm?.performance?.getEntriesByType("resource").forEach(r=>{if(r.initiatorType in e&&0!==r.responseStatus){const n={status:r.responseStatus},i={rxSize:r.transferSize,duration:Math.floor(r.duration),cbTime:0};Ve(n,r.name),this.handler("xhr",[n,i,r.startTime,r.responseEnd,e[r.initiatorType]],void 0,t.K7.ajax)}})}catch(e){}je(this.ee,e),Ae(this.ee,e),function(e,r,n,i){function s(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=R,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},t.latestLongtaskEnd=0,e.addEventListener("load",function(r){T(t,e)},(0,G.jT)(!1)),p.lR||e.addEventListener("progress",function(e){t.lastSize=e.loaded},(0,G.jT)(!1))}function o(e){this.params={method:e[0]},Ve(this,e[1]),this.metrics={}}function a(t,r){e.loader_config.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",e.loader_config.xpid);var n=i.generateTracePayload(this.parsedOrigin);if(n){var s=!1;n.newrelicHeader&&(r.setRequestHeader("newrelic",n.newrelicHeader),s=!0),n.traceContextParentHeader&&(r.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&r.setRequestHeader("tracestate",n.traceContextStateHeader),s=!0),s&&(this.dt=n)}}function c(e,t){var n=this.metrics,i=e[0],s=this;if(n&&i){var o=be(i);o&&(n.txSize=o)}this.startTime=(0,x.t)(),this.body=i,this.listener=function(e){try{"abort"!==e.type||s.loadCaptureCalled||(s.params.aborted=!0),("load"!==e.type||s.called===s.totalCbs&&(s.onloadCalled||"function"!=typeof t.onload)&&"function"==typeof s.end)&&s.end(t)}catch(e){try{r.emit("internal-error",[e])}catch(e){}}};for(var a=0;a<He;a++)t.addEventListener(Be[a],this.listener,(0,G.jT)(!1))}function d(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function u(e,t){var r=""+ye(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function l(e,t){var r=""+ye(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function f(){this.endTime=(0,x.t)()}function h(e,t){t instanceof We&&"load"===e[0]&&r.emit("xhr-load-added",[e[1],e[2]],t)}function g(e,t){t instanceof We&&"load"===e[0]&&r.emit("xhr-load-removed",[e[1],e[2]],t)}function m(e,t,r){t instanceof We&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,x.t)()))}function v(e,t){this.xhrCbStart&&r.emit("xhr-cb-time",[(0,x.t)()-this.xhrCbStart,this.onload,t],t)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&p.RI&&(t=""+p.gm.location.href):e[0]&&e[0].url?t=e[0].url:p.gm?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,Ce.D)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var n=i.generateTracePayload(this.parsedOrigin);if(n&&(n.newrelicHeader||n.traceContextParentHeader))if(e[0]&&e[0].headers)a(e[0].headers,n)&&(this.dt=n);else{var s={};for(var o in r)s[o]=r[o];s.headers=new Headers(r.headers||{}),a(s.headers,n)&&(this.dt=n),e.length>1?e[1]=s:e.push(s)}}function a(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function b(e,t){this.params={},this.metrics={},this.startTime=(0,x.t)(),this.dt=t;let[r,n={}]=e;Ve(this,Me(r));const i=(""+(r&&r instanceof Ke&&r.method||n.method||"GET")).toUpperCase();this.params.method=i,this.body=n.body,this.txSize=be(n.body)||0}function w(e,t){if(this.endTime=(0,x.t)(),this.params||(this.params={}),(0,Ie.iW)(this.params))return;let r;this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(r=+this.rxSize);const n={txSize:this.txSize,rxSize:r,duration:(0,x.t)()-this.startTime},i=[this.params,n,this.startTime,this.endTime,"fetch"];this.targets.forEach(e=>E(i,this,e))}function R(e){const t=this.params,r=this.metrics;if(this.ended)return;this.ended=!0;for(let t=0;t<He;t++)e.removeEventListener(Be[t],this.listener,!1);if(t.aborted)return;if((0,Ie.iW)(t))return;r.duration=(0,x.t)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):T(this,e),r.cbTime=this.cbTime;const n=[t,r,this.startTime,this.endTime,"xhr"];this.targets.forEach(e=>E(n,this,e))}function E(e,r,i){n("xhr",[...e,i],r,t.K7.ajax)}function T(e,n){e.params.status=n.status;var i=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?be(e.response):"text"===r||""===r||void 0===r?be(e.responseText):void 0}(n,e.lastSize);if(i&&(e.metrics.rxSize=i),e.sameOrigin&&n.getAllResponseHeaders().indexOf(Fe)>=0){var s=n.getResponseHeader(Fe);s&&((0,A.p)(U.rs,["Ajax/CrossApplicationTracing/Header/Seen"],void 0,t.K7.metrics,r),e.params.cat=s.split(", ").pop())}e.loadCaptureCalled=!0}r.on("new-xhr",s),r.on("open-xhr-start",o),r.on("open-xhr-end",a),r.on("send-xhr-start",c),r.on("xhr-cb-time",d),r.on("xhr-load-added",u),r.on("xhr-load-removed",l),r.on("xhr-resolved",f),r.on("addEventListener-end",h),r.on("removeEventListener-end",g),r.on("fn-end",v),r.on("fetch-before-start",y),r.on("fetch-start",b),r.on("fn-start",m),r.on("fetch-done",w)}(e,this.ee,this.handler,this.dt),this.importAggregator(e,()=>i.e(478).then(i.bind(i,3845)))}}function Ve(e,t){var r=(0,Ce.D)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}const ze={},Ge=["pushState","replaceState"];function Ye(e){const t=function(e){return(e||w.ee).get("history")}(e);return!p.RI||ze[t.debugId]++||(ze[t.debugId]=1,(0,Re.YM)(t).inPlace(window.history,Ge,"-")),t}var Ze=i(3738);function qe(e){(0,_.Y)(S.BL,function(r=Date.now()){const n=r-p.WN;n<0&&(0,u.R)(62,r),(0,A.p)(U.XG,[S.BL,{time:n}],void 0,t.K7.metrics,e.ee),e.addToTrace({name:S.BL,start:r,origin:"nr"}),(0,A.p)(S.Pl+S.hG,[n,S.BL],void 0,t.K7.genericEvents,e.ee)},e)}const{He:Xe,bD:$e,d3:Qe,Kp:Je,TZ:et,Lc:tt,uP:rt,Rz:nt}=Ze;class it extends I{static featureName=et;constructor(e){var r;super(e,et),r=e,(0,_.Y)(S.U2,function(e){if(!(e&&"object"==typeof e&&e.name&&e.start))return;const n={n:e.name,s:e.start-p.WN,e:(e.end||e.start)-p.WN,o:e.origin||"",t:"api"};n.s<0||n.e<0||n.e<n.s?(0,u.R)(61,{start:n.s,end:n.e}):(0,A.p)("bstApi",[n],void 0,t.K7.sessionTrace,r.ee)},r),qe(e);if(!(0,j.V)(e.init))return void this.deregisterDrain();const n=this.ee;let s;Ye(n),this.eventsEE=(0,we.u)(n),this.eventsEE.on(rt,function(e,t){this.bstStart=(0,x.t)()}),this.eventsEE.on(tt,function(e,r){(0,A.p)("bst",[e[0],r,this.bstStart,(0,x.t)()],void 0,t.K7.sessionTrace,n)}),n.on(nt+Qe,function(e){this.time=(0,x.t)(),this.startPath=location.pathname+location.hash}),n.on(nt+Je,function(e){(0,A.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,t.K7.sessionTrace,n)});try{s=new PerformanceObserver(e=>{const r=e.getEntries();(0,A.p)(Xe,[r],void 0,t.K7.sessionTrace,n)}),s.observe({type:$e,buffered:!0})}catch(e){}this.importAggregator(e,()=>i.e(478).then(i.bind(i,6974)),{resourceObserver:s})}}var st=i(733),ot=i(6344);class at extends I{static featureName=ot.TZ;#i;recorder;constructor(e){var r;let n;super(e,ot.TZ),r=e,(0,_.Y)(S.CH,function(){(0,A.p)(S.CH,[],void 0,t.K7.sessionReplay,r.ee)},r),function(e){(0,_.Y)(S.Tb,function(){(0,A.p)(S.Tb,[],void 0,t.K7.sessionReplay,e.ee)},e)}(e);const s="".concat(d.Wt).concat((0,st.Y)(e.info.licenseKey,e.info.applicationID));try{n=JSON.parse(localStorage.getItem(s))}catch(e){}(0,N.SR)(e.init)&&this.ee.on(S.CH,()=>this.#s()),this.#o(n)&&this.importRecorder().then(e=>{e.startRecording(ot.Qb.PRELOAD,n?.sessionReplayMode)}),this.importAggregator(this.agentRef,()=>i.e(478).then(i.bind(i,6167)),this),this.ee.on("err",e=>{this.blocked||this.agentRef.runtime.isRecording&&(this.errorNoticed=!0,(0,A.p)(ot.Vh,[e],void 0,this.featureName,this.ee))})}#o(e){return e&&(e.sessionReplayMode===d.g.FULL||e.sessionReplayMode===d.g.ERROR)||(0,N.Aw)(this.agentRef.init)}importRecorder(){return this.recorder?Promise.resolve(this.recorder):(this.#i??=Promise.all([i.e(478),i.e(249)]).then(i.bind(i,4866)).then(({Recorder:e})=>(this.recorder=new e(this),this.recorder)).catch(e=>{throw this.ee.emit("internal-error",[e]),this.blocked=!0,e}),this.#i)}#s(){this.blocked||(this.featAggregate?this.featAggregate.mode!==d.g.FULL&&this.featAggregate.initializeRecording(d.g.FULL,!0,ot.Qb.API):this.importRecorder().then(()=>{this.recorder.startRecording(ot.Qb.API,d.g.FULL)}))}}var ct=i(3962);class dt extends I{static featureName=ct.TZ;constructor(e){if(super(e,ct.TZ),function(e){const r=e.ee.get("tracer");function n(){}(0,_.Y)(S.dT,function(e){return(new n).get("object"==typeof e?e:{})},e);const i=n.prototype={createTracer:function(n,i){var s={},o=this,a="function"==typeof i;return(0,A.p)(U.xV,["API/createTracer/called"],void 0,t.K7.metrics,e.ee),function(){if(r.emit((a?"":"no-")+"fn-start",[(0,x.t)(),o,a],s),a)try{return i.apply(this,arguments)}catch(e){const t="string"==typeof e?new Error(e):e;throw r.emit("fn-err",[arguments,this,t],s),t}finally{r.emit("fn-end",[(0,x.t)()],s)}}}};["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach(r=>{_.Y.apply(this,[r,function(){return(0,A.p)(S.hw+r,[performance.now(),...arguments],this,t.K7.softNav,e.ee),this},e,i])}),(0,_.Y)(S.PA,function(){(0,A.p)(S.hw+"routeName",[performance.now(),...arguments],void 0,t.K7.softNav,e.ee)},e)}(e),!p.RI||!(0,n.dV)().o.MO)return;const r=Ye(this.ee);try{this.removeOnAbort=new AbortController}catch(e){}ct.tC.forEach(e=>{(0,G.sp)(e,e=>{c(e)},!0,this.removeOnAbort?.signal)});const s=()=>(0,A.p)("newURL",[(0,x.t)(),""+window.location],void 0,this.featureName,this.ee);r.on("pushState-end",s),r.on("replaceState-end",s),(0,G.sp)(ct.OV,e=>{c(e),(0,A.p)("newURL",[e.timeStamp,""+window.location],void 0,this.featureName,this.ee)},!0,this.removeOnAbort?.signal);let o=!1;const a=new((0,n.dV)().o.MO)((e,t)=>{o||(o=!0,requestAnimationFrame(()=>{(0,A.p)("newDom",[(0,x.t)()],void 0,this.featureName,this.ee),o=!1}))}),c=(0,C.s)(e=>{"loading"!==document.readyState&&((0,A.p)("newUIEvent",[e],void 0,this.featureName,this.ee),a.observe(document.body,{attributes:!0,childList:!0,subtree:!0,characterData:!0}))},100,{leading:!0});this.abortHandler=function(){this.removeOnAbort?.abort(),a.disconnect(),this.abortHandler=void 0},this.importAggregator(e,()=>i.e(478).then(i.bind(i,4393)),{domObserver:a})}}var ut=i(9119);const lt={},ft=new Set;function ht(e){return"string"==typeof e?{type:"string",size:(new TextEncoder).encode(e).length}:e instanceof ArrayBuffer?{type:"ArrayBuffer",size:e.byteLength}:e instanceof Blob?{type:"Blob",size:e.size}:e instanceof DataView?{type:"DataView",size:e.byteLength}:ArrayBuffer.isView(e)?{type:"TypedArray",size:e.byteLength}:{type:"unknown",size:0}}class pt{constructor(e,t){this.timestamp=(0,x.t)(),this.currentUrl=(0,ut.L)(window.location.href),this.socketId=(0,de.LA)(8),this.requestedUrl=(0,ut.L)(e),this.requestedProtocols=Array.isArray(t)?t.join(","):t||"",this.openedAt=void 0,this.protocol=void 0,this.extensions=void 0,this.binaryType=void 0,this.messageOrigin=void 0,this.messageCount=0,this.messageBytes=0,this.messageBytesMin=0,this.messageBytesMax=0,this.messageTypes=void 0,this.sendCount=0,this.sendBytes=0,this.sendBytesMin=0,this.sendBytesMax=0,this.sendTypes=void 0,this.closedAt=void 0,this.closeCode=void 0,this.closeReason="unknown",this.closeWasClean=void 0,this.connectedDuration=0,this.hasErrors=void 0}}class gt extends I{static featureName=a.TZ;constructor(e){super(e,a.TZ);const r=e.init.feature_flags.includes("websockets"),s=!e.init.feature_flags.includes("no_spv"),o=[e.init.page_action.enabled,e.init.performance.capture_marks,e.init.performance.capture_measures,e.init.performance.resources.enabled,e.init.user_actions.enabled,r,s];var c;let d;if(c=e,(0,_.Y)(S.hG,(e,t)=>se(e,t,c),c),function(e){(0,_.Y)(S.fF,(t,r)=>ae(t,r,e),e)}(e),qe(e),he(e),function(e){(0,_.Y)(S.V1,(t,r)=>oe(t,r,e),e)}(e),this.removeOnAbort=new AbortController,this.abortHandler=()=>{this.removeOnAbort.abort(),this.abortHandler=void 0},r){const u=function(e){if(!(0,n.dV)().o.WS)return e;const t=e.get("websockets");if(lt[t.debugId]++)return t;lt[t.debugId]=1,(0,K.G)(()=>{const e=(0,x.t)();ft.forEach(r=>{r.nrData.closedAt=e,r.nrData.closeCode=1001,r.nrData.closeReason="Page navigating away",r.nrData.closeWasClean=!1,r.nrData.openedAt&&(r.nrData.connectedDuration=e-r.nrData.openedAt),t.emit("ws",[r.nrData],r)})});class r extends WebSocket{static name="WebSocket";static toString(){return"function WebSocket() { [native code] }"}toString(){return"[object WebSocket]"}get[Symbol.toStringTag](){return r.name}#a(e){(e.__newrelic??={}).socketId=this.nrData.socketId,this.nrData.hasErrors??=!0}constructor(...e){super(...e),this.nrData=new pt(e[0],e[1]),this.addEventListener("open",()=>{this.nrData.openedAt=(0,x.t)(),["protocol","extensions","binaryType"].forEach(e=>{this.nrData[e]=this[e]}),ft.add(this)}),this.addEventListener("message",e=>{const{type:t,size:r}=ht(e.data);this.nrData.messageOrigin??=(0,ut.L)(e.origin),this.nrData.messageCount++,this.nrData.messageBytes+=r,this.nrData.messageBytesMin=Math.min(this.nrData.messageBytesMin||1/0,r),this.nrData.messageBytesMax=Math.max(this.nrData.messageBytesMax,r),(this.nrData.messageTypes??"").includes(t)||(this.nrData.messageTypes=this.nrData.messageTypes?"".concat(this.nrData.messageTypes,",").concat(t):t)}),this.addEventListener("close",e=>{this.nrData.closedAt=(0,x.t)(),this.nrData.closeCode=e.code,e.reason&&(this.nrData.closeReason=e.reason),this.nrData.closeWasClean=e.wasClean,this.nrData.connectedDuration=this.nrData.closedAt-this.nrData.openedAt,ft.delete(this),t.emit("ws",[this.nrData],this)})}addEventListener(e,t,...r){const n=this,i="function"==typeof t?function(...e){try{return t.apply(this,e)}catch(e){throw n.#a(e),e}}:t?.handleEvent?{handleEvent:function(...e){try{return t.handleEvent.apply(t,e)}catch(e){throw n.#a(e),e}}}:t;return super.addEventListener(e,i,...r)}send(e){if(this.readyState===WebSocket.OPEN){const{type:t,size:r}=ht(e);this.nrData.sendCount++,this.nrData.sendBytes+=r,this.nrData.sendBytesMin=Math.min(this.nrData.sendBytesMin||1/0,r),this.nrData.sendBytesMax=Math.max(this.nrData.sendBytesMax,r),(this.nrData.sendTypes??"").includes(t)||(this.nrData.sendTypes=this.nrData.sendTypes?"".concat(this.nrData.sendTypes,",").concat(t):t)}try{return super.send(e)}catch(e){throw this.#a(e),e}}close(...e){try{super.close(...e)}catch(e){throw this.#a(e),e}}}return p.gm.WebSocket=r,t}(this.ee);u.on("ws",e=>{(0,A.p)("ws-complete",[e],void 0,this.featureName,this.ee)})}if(s&&p.gm.addEventListener("securitypolicyviolation",e=>{(0,A.p)("spv",[e],void 0,t.K7.genericEvents,this.ee)},(0,G.jT)(!1,this.removeOnAbort.signal)),p.RI){if(je(this.ee,e),Ae(this.ee,e),d=Ye(this.ee),e.init.user_actions.enabled){function l(t){const r=(0,Ce.D)(t);return e.beacons.includes(r.hostname+":"+r.port)}function f(){d.emit("navChange")}a.Zp.forEach(e=>(0,G.sp)(e,e=>(0,A.p)("ua",[e],void 0,this.featureName,this.ee),!0)),a.qN.forEach(e=>{const t=(0,C.s)(e=>{(0,A.p)("ua",[e],void 0,this.featureName,this.ee)},500,{leading:!0});(0,G.sp)(e,t)}),p.gm.addEventListener("error",()=>{(0,A.p)("uaErr",[],void 0,t.K7.genericEvents,this.ee)},(0,G.jT)(!1,this.removeOnAbort.signal)),this.ee.on("open-xhr-start",(e,r)=>{l(e[1])||r.addEventListener("readystatechange",()=>{2===r.readyState&&(0,A.p)("uaXhr",[],void 0,t.K7.genericEvents,this.ee)},(0,G.jT)(void 0,this.removeOnAbort.signal))}),this.ee.on("fetch-start",e=>{e.length>=1&&!l(Me(e[0]))&&(0,A.p)("uaXhr",[],void 0,t.K7.genericEvents,this.ee)}),d.on("pushState-end",f),d.on("replaceState-end",f),window.addEventListener("hashchange",f,(0,G.jT)(!0,this.removeOnAbort.signal)),window.addEventListener("popstate",f,(0,G.jT)(!0,this.removeOnAbort.signal))}if(e.init.performance.resources.enabled&&p.gm.PerformanceObserver?.supportedEntryTypes.includes("resource")){new PerformanceObserver(e=>{e.getEntries().forEach(e=>{(0,A.p)("browserPerformance.resource",[e],void 0,this.featureName,this.ee)})}).observe({type:"resource",buffered:!0})}}o.some(e=>e)?this.importAggregator(e,()=>i.e(478).then(i.bind(i,8019))):this.deregisterDrain()}}var mt=i(2646);const vt=new Map;function yt(e,t,r,n,i=!0,s){if("object"!=typeof t||!t||"string"!=typeof r||!r||"function"!=typeof t[r])return(0,u.R)(29);const o=function(e){return(e||w.ee).get("logger")}(e),a=(0,Re.YM)(o,void 0,s),c=new mt.y(w.P);c.level=n.level,c.customAttributes=n.customAttributes,c.autoCaptured=i;const d=t[r]?.[Re.Jt]||t[r];return vt.set(d,c),a.inPlace(t,[r],"wrap-logger-",()=>vt.get(d),void 0,!0),o}var bt=i(1910);class wt extends I{static featureName=re.TZ;constructor(e){var t;super(e,re.TZ),t=e,(0,_.Y)(S.$9,(e,r)=>ie(e,r,t),t),function(e){(0,_.Y)(S.Wb,(t,r,{customAttributes:n={},level:i=re.p_.INFO}={})=>{yt(e.ee,t,r,{customAttributes:n,level:i},!1,e)},e)}(e),he(e);const r=this.ee;["log","error","warn","info","debug","trace"].forEach(t=>{(0,bt.i)(p.gm.console[t]),yt(r,p.gm.console,t,{level:"log"===t?"info":t},void 0,e)}),this.ee.on("wrap-logger-end",function([e],t,n,i=[]){const{level:s,customAttributes:o,autoCaptured:a}=this;i.forEach(t=>{(0,ne.R)(r,e,o,s,a,t)})}),this.importAggregator(e,()=>i.e(478).then(i.bind(i,5288)))}}new H({features:[Ue,B,F,it,at,V,ge,gt,wt,dt],loaderType:"spa"})})()})();</script>
    <meta http-equiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="INDEX, FOLLOW" />
    <meta name="description" content="Find your new stands & residential land in Zimbabwe on the No. 1 Real Estate Marketplace in Zimbabwe | Property.co.zw">
    <title>Stands &amp; Residential Land for Sale in Zimbabwe | 1,544 listings</title>

    <link rel="icon" href="/uploadedfiles/e0/2f/6c/e02f6ca2-8d94-496f-b5e8-ed6b775f1b3f.png">
        <link rel="canonical" href="https://www.property.co.zw/residential-land-stands-for-sale" />

    
            <link rel="next" href="https://www.property.co.zw/residential-land-stands-for-sale?page=2" />

        <link rel="alternate" href="https://www.property.co.zw/residential-land-stands-for-sale" hreflang="en" />
                <link rel="alternate" href="https://www.property.co.zw/residential-land-stands-for-sale" hreflang="x-default" />


        <link rel="preload" as="image" href="/uploadedfiles/37/57/96/3757961e-adad-4df6-a7aa-8bf2f6fc3794.jpg" />

<meta property="og:title" content="Stands & Residential Land for Sale in Zimbabwe" />
<meta property="og:description" content="See the latest Stands & Residential Land for Sale in the heart of Zimbabwe. Contact trusted agents." />
<meta property="og:type" content="Website" />
<meta property="og:url" content="https://www.property.co.zw/residential-land-stands-for-sale" />
<meta property="og:site_name" content="Property.co.zw" />
<meta property="og:ttl" content="2419200" />

        <meta property="og:image" content="https://www.property.co.zw/uploadedfiles/21/bf/a3/21bfa3fa-1d8c-4abb-ae58-a59803e1d1be.png" />

<meta property="fb:app_id" content="425654520929237" />

        <link href="/content/overhaul/css/portal_property.co.zw.min.css?v=3.1.2.13121" rel="stylesheet" />


    <style>
    .filter-secondary, .LeadIcon:hover {
        filter: brightness(0) saturate(100%) invert(37%) sepia(32%) saturate(973%) hue-rotate(160deg) brightness(92%) contrast(87%);
    }

    .filter-button, #share-modal .email:hover svg, #share-modal .email:hover img {
        filter: brightness(0) saturate(100%) invert(58%) sepia(21%) saturate(1326%) hue-rotate(161deg) brightness(84%) contrast(101%);
    }
    </style>

    


    



        <style type="text/css">
		@media(min-width: 1200px) and (max-width: 1536px){

.nav-desktop #accountMenu {
left: -100%;
}

}

.result-featured-text { display: none; }


.w-48 { width: 12rem; }
        </style>



<script type="application/ld+json" async>
{"@context":"http://www.schema.org","@type":"ItemList","image":null,"@url":null,"itemListElement":[{"@type":"ListItem","position":1,"name":"Home","url":"https://www.property.co.zw/"}]}
</script>





<script type="62bff2e665d34e70882a4d87-text/javascript">
    var _urlprefix = '/';
    var current_lang = 'en';
    var portalName = 'my-property';
    var _loggedIn = false;
    var _forceLoginWA = true;
    var _forceLoginPhone = true;
    var _forceLoginEmail = false;
    var reloadUrl = '';
    var defaultCurrencyId = '85';
    var defaultCurrencySymbol = '$';
    var returnUrlId = '';
    var fbAppId = '425654520929237';
    var fbApiVersion = '16.0';
    var googleAppId = '700381255476-kerhb2oa595jkufcnvma176bstmratbb.apps.googleusercontent.com';
    var COLORSECONDARY = '#358fca';
    var COLORSECONDARYRGB = '53, 143, 202';
    var useCondensedLeadForm = true;
    var APPVERSION = '3.1.2.13121';
    var PAGE_CATEGORY = 'general';
    var PAGE_NAME = 'search';
    var _enableGoogleAutoLoginOneTap = true;
    var QueryParam = 'category=28&type_id=1';
    var CondenseSingleSelectionLocation = true;
    var COUNTRY_NAME_EN = 'Zimbabwe';
    var MAIN_MARKER_ICON = `/content/mapicons/main_marker_${COUNTRY_NAME_EN}.svg`;
    var SEARCH_MARKER_ICON = `/content/mapicons/search_marker_${COUNTRY_NAME_EN}.svg`;
    var MAP_API_KEY = 'AIzaSyDX2XXDsCtq_S9gw1GefkSWccPpcuuFZFI';
    var MAP_ID = '901909fef7ca2062';
    var MAP_CIRCLE_COLOUR = '#358fcb';
    var MAP_LOAD_TYPE = 'Click';
    var MAP_MIN_RESULTS_CLUSTER = 100;
    var MAP_MIN_CLUSTER_SIZE = 3;
    var MAP_ALLOW_FULLSCREEN = true;
    var MAP_REMEMBER_OPEN = true;
    var MAP_OPTIMIZE_CLUSTER_THRESHOLD = 500;
    var CURRENT_SITE_ID = 15;
    var MAP_RESTRICTIONS = {
        latLngBounds: {
            north: -5,
            south: -33,
            east: 44,
            west: 15
        },
    };
    var MAP_MIN_ZOOM = 6;
    var MAP_MAX_ZOOM = 18;
    var LOCATION_DATA = `[{"id":"province_id_2","text":"Bulawayo"},{"id":"town_id_12","text":"Bulawayo CBD, Industrial | Bulawayo"},{"id":"suburb_id_200","text":"Belmont | Bulawayo CBD, Industrial"},{"id":"suburb_id_165","text":"Bulawayo City Centre | Bulawayo CBD, Industrial"},{"id":"suburb_id_201","text":"Donnington | Bulawayo CBD, Industrial"},{"id":"suburb_id_211","text":"Donnington West | Bulawayo CBD, Industrial"},{"id":"suburb_id_226","text":"Kelvin | Bulawayo CBD, Industrial"},{"id":"suburb_id_227","text":"Kelvin West | Bulawayo CBD, Industrial"},{"id":"suburb_id_198","text":"Steeldale | Bulawayo CBD, Industrial"},{"id":"suburb_id_213","text":"Thorngrove | Bulawayo CBD, Industrial"},{"id":"suburb_id_199","text":"Westgate | Bulawayo CBD, Industrial"},{"id":"suburb_id_197","text":"Westondale | Bulawayo CBD, Industrial"},{"id":"town_id_10","text":"Bulawayo East | Bulawayo"},{"id":"suburb_id_500","text":"Ascot | Bulawayo East"},{"id":"suburb_id_459","text":"Buena Vista | Bulawayo East"},{"id":"suburb_id_360","text":"Burnside | Bulawayo East"},{"id":"suburb_id_155","text":"Douglasdale | Bulawayo East"},{"id":"suburb_id_150","text":"Fortunes Gate | Bulawayo East"},{"id":"suburb_id_370","text":"Gumtree | Bulawayo East"},{"id":"suburb_id_164","text":"Hume Park | Bulawayo East"},{"id":"suburb_id_366","text":"Ilanda | Bulawayo East"},{"id":"suburb_id_371","text":"Kensington | Bulawayo East"},{"id":"suburb_id_163","text":"Killarney | Bulawayo East"},{"id":"suburb_id_161","text":"Kumalo | Bulawayo East"},{"id":"suburb_id_377","text":"Lakeside | Bulawayo East"},{"id":"suburb_id_458","text":"Lochview | Bulawayo East"},{"id":"suburb_id_153","text":"Manningdale | Bulawayo East"},{"id":"suburb_id_158","text":"Matsheumhlope | Bulawayo East"},{"id":"suburb_id_162","text":"Parklands | Bulawayo East"},{"id":"suburb_id_156","text":"Riverside North | Bulawayo East"},{"id":"suburb_id_151","text":"Riverside South | Bulawayo East"},{"id":"suburb_id_159","text":"Selbourne Park | Bulawayo East"},{"id":"suburb_id_368","text":"Suburbs | Bulawayo East"},{"id":"suburb_id_157","text":"Sunning Hill | Bulawayo East"},{"id":"suburb_id_154","text":"Waterford | Bulawayo East"},{"id":"suburb_id_152","text":"Willsgrove | Bulawayo East"},{"id":"suburb_id_160","text":"Woodlands | Bulawayo East"},{"id":"suburb_id_508","text":"Worringham | Bulawayo East"},{"id":"town_id_11","text":"Bulawayo High-Density | Bulawayo"},{"id":"suburb_id_192","text":"Barbour Fields | Bulawayo High-Density"},{"id":"suburb_id_205","text":"Bubi Umguza | Bulawayo High-Density"},{"id":"suburb_id_214","text":"Cowdray Park | Bulawayo High-Density"},{"id":"suburb_id_219","text":"Emakhandeni | Bulawayo High-Density"},{"id":"suburb_id_203","text":"Emganwini | Bulawayo High-Density"},{"id":"suburb_id_215","text":"Enqotsheni | Bulawayo High-Density"},{"id":"suburb_id_526","text":"Gwabalanda | Bulawayo High-Density"},{"id":"suburb_id_221","text":"Lobengula | Bulawayo High-Density"},{"id":"suburb_id_476","text":"Lower Rangemore | Bulawayo High-Density"},{"id":"suburb_id_218","text":"Luveve | Bulawayo High-Density"},{"id":"suburb_id_217","text":"Luveve North | Bulawayo High-Density"},{"id":"suburb_id_222","text":"Magwegwe | Bulawayo High-Density"},{"id":"suburb_id_194","text":"Makokoba | Bulawayo High-Density"},{"id":"suburb_id_195","text":"Matshombana | Bulawayo High-Density"},{"id":"suburb_id_501","text":"Mbundane | Bulawayo High-Density"},{"id":"suburb_id_224","text":"Mpopoma | Bulawayo High-Density"},{"id":"suburb_id_225","text":"Mpopoma South | Bulawayo High-Density"},{"id":"suburb_id_193","text":"Mzilikazi | Bulawayo High-Density"},{"id":"suburb_id_216","text":"New Luveve | Bulawayo High-Density"},{"id":"suburb_id_196","text":"Nguboyenja | Bulawayo High-Density"},{"id":"suburb_id_208","text":"Nketa | Bulawayo High-Density"},{"id":"suburb_id_207","text":"Nkulumane | Bulawayo High-Density"},{"id":"suburb_id_223","text":"Pelanbaba | Bulawayo High-Density"},{"id":"suburb_id_220","text":"Pelandaba | Bulawayo High-Density"},{"id":"suburb_id_228","text":"Pumula | Bulawayo High-Density"},{"id":"suburb_id_229","text":"Pumula South | Bulawayo High-Density"},{"id":"suburb_id_212","text":"Sizinda | Bulawayo High-Density"},{"id":"suburb_id_209","text":"Tshabalala | Bulawayo High-Density"},{"id":"suburb_id_210","text":"Tshabalala Extension | Bulawayo High-Density"},{"id":"suburb_id_204","text":"Umganin | Bulawayo High-Density"},{"id":"suburb_id_206","text":"Upper Rangemore | Bulawayo High-Density"},{"id":"suburb_id_202","text":"West Somerton | Bulawayo High-Density"},{"id":"town_id_2","text":"Bulawayo North | Bulawayo"},{"id":"suburb_id_191","text":"Entumbane | Bulawayo North"},{"id":"suburb_id_369","text":"Glengarry | Bulawayo North"},{"id":"suburb_id_188","text":"Glenville | Bulawayo North"},{"id":"suburb_id_440","text":"Harrisvale | Bulawayo North"},{"id":"suburb_id_407","text":"Highmount | Bulawayo North"},{"id":"suburb_id_527","text":"Hopelyn | Bulawayo North"},{"id":"suburb_id_502","text":"Hopeville | Bulawayo North"},{"id":"suburb_id_177","text":"Jacaranda | Bulawayo North"},{"id":"suburb_id_180","text":"Kingsdale | Bulawayo North"},{"id":"suburb_id_182","text":"Lobenvale | Bulawayo North"},{"id":"suburb_id_406","text":"Mahatshula | Bulawayo North"},{"id":"suburb_id_185","text":"North Trenance | Bulawayo North"},{"id":"suburb_id_533","text":"Northbrook | Bulawayo North"},{"id":"suburb_id_376","text":"Northend | Bulawayo North"},{"id":"suburb_id_174","text":"Northgate | Bulawayo North"},{"id":"suburb_id_178","text":"Northlea | Bulawayo North"},{"id":"suburb_id_473","text":"Norwood | Bulawayo North"},{"id":"suburb_id_175","text":"Orange Grove | Bulawayo North"},{"id":"suburb_id_168","text":"Paddonhurst | Bulawayo North"},{"id":"suburb_id_172","text":"Queens Park East | Bulawayo North"},{"id":"suburb_id_173","text":"Queens Park West | Bulawayo North"},{"id":"suburb_id_181","text":"Queensdale | Bulawayo North"},{"id":"suburb_id_503","text":"Reigate | Bulawayo North"},{"id":"suburb_id_186","text":"Richmond | Bulawayo North"},{"id":"suburb_id_171","text":"Romney Park | Bulawayo North"},{"id":"suburb_id_405","text":"Sauerstown | Bulawayo North"},{"id":"suburb_id_169","text":"Sunnyside | Bulawayo North"},{"id":"suburb_id_170","text":"Tegela | Bulawayo North"},{"id":"suburb_id_183","text":"The Jungle | Bulawayo North"},{"id":"suburb_id_190","text":"Trenance | Bulawayo North"},{"id":"suburb_id_187","text":"Upper Glenville | Bulawayo North"},{"id":"suburb_id_189","text":"Windsor Park | Bulawayo North"},{"id":"suburb_id_179","text":"Woodville | Bulawayo North"},{"id":"suburb_id_176","text":"Woodville Park | Bulawayo North"},{"id":"town_id_9","text":"Bulawayo South | Bulawayo"},{"id":"suburb_id_136","text":"Barham Green | Bulawayo South"},{"id":"suburb_id_140","text":"Bellevue | Bulawayo South"},{"id":"suburb_id_167","text":"Belmont East | Bulawayo South"},{"id":"suburb_id_166","text":"Bradfield | Bulawayo South"},{"id":"suburb_id_144","text":"Eloana | Bulawayo South"},{"id":"suburb_id_367","text":"Famona | Bulawayo South"},{"id":"suburb_id_143","text":"Four Winds | Bulawayo South"},{"id":"suburb_id_134","text":"Greenhill | Bulawayo South"},{"id":"suburb_id_138","text":"Hillcrest | Bulawayo South"},{"id":"suburb_id_3","text":"Hillside | Bulawayo South"},{"id":"suburb_id_148","text":"Intini | Bulawayo South"},{"id":"suburb_id_146","text":"Malindela | Bulawayo South"},{"id":"suburb_id_139","text":"Montrose | Bulawayo South"},{"id":"suburb_id_137","text":"Morningside | Bulawayo South"},{"id":"suburb_id_147","text":"Munda | Bulawayo South"},{"id":"suburb_id_141","text":"Newton | Bulawayo South"},{"id":"suburb_id_142","text":"Newton West | Bulawayo South"},{"id":"suburb_id_145","text":"South Riding | Bulawayo South"},{"id":"suburb_id_149","text":"Southdale | Bulawayo South"},{"id":"suburb_id_135","text":"Southwold | Bulawayo South"},{"id":"province_id_1","text":"Harare"},{"id":"town_id_7","text":"Harare CBD | Harare"},{"id":"suburb_id_8","text":"Avenues | Harare CBD"},{"id":"suburb_id_7","text":"Harare City Centre | Harare CBD"},{"id":"town_id_4","text":"Harare East | Harare"},{"id":"suburb_id_9","text":"Amby | Harare East"},{"id":"suburb_id_10","text":"Athlone | Harare East"},{"id":"suburb_id_12","text":"Eastlea | Harare East"},{"id":"suburb_id_13","text":"Greendale | Harare East"},{"id":"suburb_id_14","text":"Greengrove | Harare East"},{"id":"suburb_id_452","text":"Kamfinsa | Harare East"},{"id":"suburb_id_16","text":"Mandara | Harare East"},{"id":"suburb_id_17","text":"Manresa | Harare East"},{"id":"suburb_id_18","text":"Msasa | Harare East"},{"id":"suburb_id_19","text":"Rhodesville | Harare East"},{"id":"suburb_id_20","text":"Rockview | Harare East"},{"id":"suburb_id_21","text":"Sunway City | Harare East"},{"id":"suburb_id_23","text":"Upper Hillside | Harare East"},{"id":"suburb_id_510","text":"Wilmington Park | Harare East"},{"id":"suburb_id_22","text":"Zimre Park | Harare East"},{"id":"town_id_8","text":"Harare High Density | Harare"},{"id":"suburb_id_499","text":"Amalinda | Harare High Density"},{"id":"suburb_id_11","text":"Budiriro | Harare High Density"},{"id":"suburb_id_353","text":"Crowborough | Harare High Density"},{"id":"suburb_id_474","text":"Donnybrook | Harare High Density"},{"id":"suburb_id_26","text":"Dzivarasekwa | Harare High Density"},{"id":"suburb_id_492","text":"Eastview | Harare High Density"},{"id":"suburb_id_27","text":"Epworth | Harare High Density"},{"id":"suburb_id_24","text":"Glen Norah | Harare High Density"},{"id":"suburb_id_25","text":"Glen View | Harare High Density"},{"id":"suburb_id_470","text":"Granary Park | Harare High Density"},{"id":"suburb_id_29","text":"Hatcliffe | Harare High Density"},{"id":"suburb_id_28","text":"Highfield | Harare High Density"},{"id":"suburb_id_30","text":"Kambuzuma | Harare High Density"},{"id":"suburb_id_31","text":"Kuwadzana | Harare High Density"},{"id":"suburb_id_32","text":"Mabvuku | Harare High Density"},{"id":"suburb_id_34","text":"Marimba Park | Harare High Density"},{"id":"suburb_id_33","text":"Mbare | Harare High Density"},{"id":"suburb_id_35","text":"Mufakose | Harare High Density"},{"id":"suburb_id_495","text":"New Tafara | Harare High Density"},{"id":"suburb_id_457","text":"Rugare | Harare High Density"},{"id":"suburb_id_36","text":"Rydale Ridge | Harare High Density"},{"id":"suburb_id_38","text":"Snake Park | Harare High Density"},{"id":"suburb_id_37","text":"Sunningdale | Harare High Density"},{"id":"suburb_id_39","text":"Tafara | Harare High Density"},{"id":"suburb_id_40","text":"Warren Park | Harare High Density"},{"id":"town_id_1","text":"Harare North | Harare"},{"id":"suburb_id_5","text":"Alexandra Park | Harare North"},{"id":"suburb_id_4","text":"Avondale | Harare North"},{"id":"suburb_id_42","text":"Ballantyne Park | Harare North"},{"id":"suburb_id_43","text":"Belgravia | Harare North"},{"id":"suburb_id_1","text":"Borrowdale | Harare North"},{"id":"suburb_id_45","text":"Borrowdale Brooke | Harare North"},{"id":"suburb_id_44","text":"Borrowdale West | Harare North"},{"id":"suburb_id_487","text":"Brookview | Harare North"},{"id":"suburb_id_472","text":"Carrick Creagh | Harare North"},{"id":"suburb_id_46","text":"Charlotte Brooke | Harare North"},{"id":"suburb_id_2","text":"Chisipite | Harare North"},{"id":"suburb_id_49","text":"Colne Valley | Harare North"},{"id":"suburb_id_48","text":"Colray | Harare North"},{"id":"suburb_id_51","text":"Crowhill Views | Harare North"},{"id":"suburb_id_50","text":"Dandaro | Harare North"},{"id":"suburb_id_55","text":"Glen Forest | Harare North"},{"id":"suburb_id_54","text":"Glen Lorne | Harare North"},{"id":"suburb_id_56","text":"Gletwin Park | Harare North"},{"id":"suburb_id_379","text":"Greendale North | Harare North"},{"id":"suburb_id_57","text":"Greystone Park | Harare North"},{"id":"suburb_id_52","text":"Groom Bridge | Harare North"},{"id":"suburb_id_53","text":"Gunhill | Harare North"},{"id":"suburb_id_58","text":"Helensvale | Harare North"},{"id":"suburb_id_59","text":"Highlands | Harare North"},{"id":"suburb_id_60","text":"Hogerty Hill | Harare North"},{"id":"suburb_id_61","text":"Kambanji | Harare North"},{"id":"suburb_id_62","text":"Lewisam | Harare North"},{"id":"suburb_id_63","text":"Mount Pleasant | Harare North"},{"id":"suburb_id_65","text":"Mount Pleasant Heights | Harare North"},{"id":"suburb_id_531","text":"New Alexandra Park | Harare North"},{"id":"suburb_id_64","text":"Newlands | Harare North"},{"id":"suburb_id_66","text":"Northwood | Harare North"},{"id":"suburb_id_478","text":"Nyeredzi Ridge | Harare North"},{"id":"suburb_id_67","text":"Philadelphia | Harare North"},{"id":"suburb_id_68","text":"Pomona | Harare North"},{"id":"suburb_id_69","text":"Quinnington | Harare North"},{"id":"suburb_id_70","text":"Rolf Valley | Harare North"},{"id":"suburb_id_71","text":"Ryelands | Harare North"},{"id":"suburb_id_73","text":"Sally Mugabe Heights | Harare North"},{"id":"suburb_id_72","text":"Shawasha Hills | Harare North"},{"id":"suburb_id_74","text":"The Grange | Harare North"},{"id":"suburb_id_75","text":"Umwinsidale | Harare North"},{"id":"suburb_id_479","text":"Unidale | Harare North"},{"id":"suburb_id_76","text":"Vainona | Harare North"},{"id":"town_id_6","text":"Harare South | Harare"},{"id":"suburb_id_77","text":"Airport | Harare South"},{"id":"suburb_id_78","text":"Arcadia | Harare South"},{"id":"suburb_id_79","text":"Ardbennie | Harare South"},{"id":"suburb_id_408","text":"Arlington | Harare South"},{"id":"suburb_id_80","text":"Braeside | Harare South"},{"id":"suburb_id_81","text":"Chadcombe | Harare South"},{"id":"suburb_id_506","text":"Chiedza Park | Harare South"},{"id":"suburb_id_82","text":"Cranborne | Harare South"},{"id":"suburb_id_504","text":"Fidelity | Harare South"},{"id":"suburb_id_83","text":"Graniteside | Harare South"},{"id":"suburb_id_84","text":"Hatfield | Harare South"},{"id":"suburb_id_85","text":"Hillside | Harare South"},{"id":"suburb_id_518","text":"Hopley | Harare South"},{"id":"suburb_id_86","text":"Houghton Park | Harare South"},{"id":"suburb_id_464","text":"Lochinvar | Harare South"},{"id":"suburb_id_87","text":"Logan Park | Harare South"},{"id":"suburb_id_89","text":"Mainway Meadows | Harare South"},{"id":"suburb_id_520","text":"Mbudzi | Harare South"},{"id":"suburb_id_88","text":"Msasa Park | Harare South"},{"id":"suburb_id_534","text":"Newport | Harare South"},{"id":"suburb_id_91","text":"Park Meadowlands | Harare South"},{"id":"suburb_id_90","text":"Parktown | Harare South"},{"id":"suburb_id_92","text":"Prospect | Harare South"},{"id":"suburb_id_93","text":"Queensdale | Harare South"},{"id":"suburb_id_94","text":"Southerton | Harare South"},{"id":"suburb_id_516","text":"Southlands | Harare South"},{"id":"suburb_id_354","text":"Southlea Park | Harare South"},{"id":"suburb_id_441","text":"Southview Park | Harare South"},{"id":"suburb_id_95","text":"St. Martins | Harare South"},{"id":"suburb_id_462","text":"Stoneridge | Harare South"},{"id":"suburb_id_517","text":"Ushewokunze | Harare South"},{"id":"suburb_id_96","text":"Waterfalls | Harare South"},{"id":"suburb_id_97","text":"Willowvale | Harare South"},{"id":"suburb_id_98","text":"Workington | Harare South"},{"id":"town_id_5","text":"Harare West | Harare"},{"id":"suburb_id_99","text":"Adylinn | Harare West"},{"id":"suburb_id_100","text":"Ashbrittle | Harare West"},{"id":"suburb_id_101","text":"Ashdown Park | Harare West"},{"id":"suburb_id_460","text":"Aspindale Park | Harare West"},{"id":"suburb_id_102","text":"Avondale - The Ridge | Harare West"},{"id":"suburb_id_103","text":"Avondale West | Harare West"},{"id":"suburb_id_104","text":"Avonlea | Harare West"},{"id":"suburb_id_105","text":"Belvedere | Harare West"},{"id":"suburb_id_378","text":"Bloomingdale | Harare West"},{"id":"suburb_id_106","text":"Bluff Hill | Harare West"},{"id":"suburb_id_107","text":"Cold Comfort | Harare West"},{"id":"suburb_id_108","text":"Cotswold Hills | Harare West"},{"id":"suburb_id_109","text":"Dawnview Park | Harare West"},{"id":"suburb_id_110","text":"Emerald Hill | Harare West"},{"id":"suburb_id_455","text":"Fairview | Harare West"},{"id":"suburb_id_365","text":"Glaudina | Harare West"},{"id":"suburb_id_465","text":"Goodhope | Harare West"},{"id":"suburb_id_111","text":"Greencroft | Harare West"},{"id":"suburb_id_112","text":"Haig Park | Harare West"},{"id":"suburb_id_449","text":"Haydon Park | Harare West"},{"id":"suburb_id_113","text":"Kensington | Harare West"},{"id":"suburb_id_494","text":"Kutandara | Harare West"},{"id":"suburb_id_521","text":"Lenana Park | Harare West"},{"id":"suburb_id_115","text":"Mabelreign | Harare West"},{"id":"suburb_id_443","text":"Madokero | Harare West"},{"id":"suburb_id_532","text":"Maranatha | Harare West"},{"id":"suburb_id_114","text":"Marlborough | Harare West"},{"id":"suburb_id_116","text":"Matidoda | Harare West"},{"id":"suburb_id_117","text":"Meyrick Park | Harare West"},{"id":"suburb_id_118","text":"Milton Park | Harare West"},{"id":"suburb_id_119","text":"Monavale | Harare West"},{"id":"suburb_id_122","text":"Mt Hampden | Harare West"},{"id":"suburb_id_120","text":"Mt Pleasant Heights | Harare West"},{"id":"suburb_id_442","text":"New Marlborough | Harare West"},{"id":"suburb_id_121","text":"Nkwisi Gardens | Harare West"},{"id":"suburb_id_374","text":"Rainham | Harare West"},{"id":"suburb_id_123","text":"Ridgeview | Harare West"},{"id":"suburb_id_124","text":"Rydale Ridge Park | Harare West"},{"id":"suburb_id_444","text":"Sandton Park | Harare West"},{"id":"suburb_id_125","text":"Sentosa | Harare West"},{"id":"suburb_id_126","text":"Spitzkop | Harare West"},{"id":"suburb_id_127","text":"Strathaven | Harare West"},{"id":"suburb_id_128","text":"Sunridge | Harare West"},{"id":"suburb_id_129","text":"Tynwald | Harare West"},{"id":"suburb_id_130","text":"Warren Hills | Harare West"},{"id":"suburb_id_131","text":"Westgate | Harare West"},{"id":"suburb_id_132","text":"Westlea | Harare West"},{"id":"suburb_id_515","text":"Westwood | Harare West"},{"id":"suburb_id_133","text":"Whitecliff | Harare West"},{"id":"province_id_5","text":"Manicaland"},{"id":"town_id_61","text":"Buhera | Manicaland"},{"id":"town_id_62","text":"Chimanimani | Manicaland"},{"id":"town_id_63","text":"Chipinge | Manicaland"},{"id":"town_id_64","text":"Headlands | Manicaland"},{"id":"town_id_65","text":"Juliasdale | Manicaland"},{"id":"town_id_66","text":"Makoni | Manicaland"},{"id":"town_id_67","text":"Musikavanhu | Manicaland"},{"id":"town_id_13","text":"Mutare | Manicaland"},{"id":"suburb_id_254","text":"Avenues | Mutare"},{"id":"suburb_id_267","text":"Bordervale | Mutare"},{"id":"suburb_id_247","text":"Chikanga | Mutare"},{"id":"suburb_id_269","text":"Chisamba | Mutare"},{"id":"suburb_id_519","text":"Christmas Pass | Mutare"},{"id":"suburb_id_263","text":"Dangamvura | Mutare"},{"id":"suburb_id_256","text":"Darlington | Mutare"},{"id":"suburb_id_249","text":"Fairbridge Park | Mutare"},{"id":"suburb_id_265","text":"Fern valley | Mutare"},{"id":"suburb_id_260","text":"Florida | Mutare"},{"id":"suburb_id_257","text":"Greenside | Mutare"},{"id":"suburb_id_454","text":"Hospital Hill | Mutare"},{"id":"suburb_id_498","text":"Irene | Mutare"},{"id":"suburb_id_273","text":"Madanza | Mutare"},{"id":"suburb_id_271","text":"Maonde Dangare | Mutare"},{"id":"suburb_id_270","text":"Mazhambe | Mutare"},{"id":"suburb_id_251","text":"Morningside | Mutare"},{"id":"suburb_id_268","text":"Muchena | Mutare"},{"id":"suburb_id_272","text":"Muneni | Mutare"},{"id":"suburb_id_250","text":"Murambi | Mutare"},{"id":"suburb_id_248","text":"Mutare CBD | Mutare"},{"id":"suburb_id_375","text":"Nyakamete | Mutare"},{"id":"suburb_id_274","text":"Palm Erston | Mutare"},{"id":"suburb_id_253","text":"Palmerston | Mutare"},{"id":"suburb_id_275","text":"Park Cottages | Mutare"},{"id":"suburb_id_453","text":"Penhalonga | Mutare"},{"id":"suburb_id_262","text":"Sakubva | Mutare"},{"id":"suburb_id_276","text":"Target Area | Mutare"},{"id":"suburb_id_252","text":"Tiger's Kloof | Mutare"},{"id":"suburb_id_261","text":"Toronto | Mutare"},{"id":"suburb_id_255","text":"Utopia | Mutare"},{"id":"suburb_id_264","text":"Weirmouth | Mutare"},{"id":"suburb_id_514","text":"Westgate Park | Mutare"},{"id":"suburb_id_259","text":"Westlea | Mutare"},{"id":"suburb_id_258","text":"Yeovil | Mutare"},{"id":"suburb_id_266","text":"Zimunya | Mutare"},{"id":"town_id_68","text":"Nyanga | Manicaland"},{"id":"town_id_69","text":"Rusape | Manicaland"},{"id":"town_id_70","text":"Vumba | Manicaland"},{"id":"province_id_13","text":"Mashonaland Central"},{"id":"town_id_29","text":"Bindura | Mashonaland Central"},{"id":"town_id_30","text":"Centenary | Mashonaland Central"},{"id":"town_id_42","text":"Christon Bank | Mashonaland Central"},{"id":"town_id_31","text":"Concession | Mashonaland Central"},{"id":"town_id_102","text":"Glendale | Mashonaland Central"},{"id":"town_id_32","text":"Guruve | Mashonaland Central"},{"id":"town_id_36","text":"Mazowe | Mashonaland Central"},{"id":"town_id_112","text":"Mbire | Mashonaland Central"},{"id":"town_id_111","text":"Melfort | Mashonaland Central"},{"id":"town_id_33","text":"Mt Darwin | Mashonaland Central"},{"id":"town_id_37","text":"Mvurwi | Mashonaland Central"},{"id":"town_id_34","text":"Rushinga | Mashonaland Central"},{"id":"town_id_35","text":"Shamva | Mashonaland Central"},{"id":"province_id_7","text":"Mashonaland East"},{"id":"town_id_38","text":"Arcturus | Mashonaland East"},{"id":"suburb_id_523","text":"Cromlet | Arcturus"},{"id":"town_id_15","text":"Beatrice | Mashonaland East"},{"id":"town_id_118","text":"Bromley | Mashonaland East"},{"id":"town_id_40","text":"Chikomba | Mashonaland East"},{"id":"town_id_41","text":"Chitungwiza | Mashonaland East"},{"id":"suburb_id_450","text":"Manyame Park | Chitungwiza"},{"id":"suburb_id_448","text":"St. Marys | Chitungwiza"},{"id":"suburb_id_451","text":"Zengeza | Chitungwiza"},{"id":"town_id_88","text":"Chivhu | Mashonaland East"},{"id":"town_id_43","text":"Damofalls | Mashonaland East"},{"id":"town_id_107","text":"Domboshawa | Mashonaland East"},{"id":"town_id_44","text":"Goromonzi | Mashonaland East"},{"id":"town_id_104","text":"Macheke | Mashonaland East"},{"id":"town_id_45","text":"Marondera | Mashonaland East"},{"id":"town_id_46","text":"Mudzi | Mashonaland East"},{"id":"town_id_47","text":"Murehwa | Mashonaland East"},{"id":"town_id_48","text":"Mutoko | Mashonaland East"},{"id":"town_id_49","text":"Ruwa | Mashonaland East"},{"id":"suburb_id_373","text":"Adelaide Park | Ruwa"},{"id":"suburb_id_490","text":"Chipukutu Park | Ruwa"},{"id":"suburb_id_477","text":"Erasmus Park | Ruwa"},{"id":"suburb_id_496","text":"Fairview | Ruwa"},{"id":"suburb_id_488","text":"Mabvazuva | Ruwa"},{"id":"suburb_id_491","text":"Marcus Park | Ruwa"},{"id":"suburb_id_445","text":"Old Windsor | Ruwa"},{"id":"suburb_id_489","text":"Riverside Park | Ruwa"},{"id":"suburb_id_447","text":"Springvale | Ruwa"},{"id":"suburb_id_497","text":"Upfront | Ruwa"},{"id":"suburb_id_446","text":"Windsor Park | Ruwa"},{"id":"town_id_50","text":"Seke | Mashonaland East"},{"id":"town_id_51","text":"Wedza | Mashonaland East"},{"id":"province_id_8","text":"Mashonaland West"},{"id":"town_id_14","text":"Banket | Mashonaland West"},{"id":"town_id_16","text":"Chegutu | Mashonaland West"},{"id":"town_id_17","text":"Chinhoyi | Mashonaland West"},{"id":"town_id_18","text":"Chirundu | Mashonaland West"},{"id":"town_id_19","text":"Darwendale | Mashonaland West"},{"id":"town_id_20","text":"Hurungwe | Mashonaland West"},{"id":"town_id_22","text":"Kadoma | Mashonaland West"},{"id":"suburb_id_530","text":"Mornington | Kadoma"},{"id":"town_id_23","text":"Kariba | Mashonaland West"},{"id":"suburb_id_403","text":"Milibizi | Kariba"},{"id":"town_id_24","text":"Karoi | Mashonaland West"},{"id":"town_id_21","text":"Lake Chivero | Mashonaland West"},{"id":"suburb_id_505","text":"Lake City | Lake Chivero"},{"id":"suburb_id_507","text":"Rock Ridge | Lake Chivero"},{"id":"town_id_25","text":"Makonde | Mashonaland West"},{"id":"town_id_26","text":"Mazvikadei | Mashonaland West"},{"id":"town_id_116","text":"Mhangura | Mashonaland West"},{"id":"town_id_113","text":"Mhondoro Ngezi | Mashonaland West"},{"id":"town_id_27","text":"Norton | Mashonaland West"},{"id":"suburb_id_484","text":"Galloway | Norton"},{"id":"suburb_id_482","text":"Katanga | Norton"},{"id":"suburb_id_485","text":"Knowe | Norton"},{"id":"suburb_id_483","text":"Maridale | Norton"},{"id":"suburb_id_481","text":"Nharira | Norton"},{"id":"suburb_id_486","text":"Norton Industrial | Norton"},{"id":"suburb_id_480","text":"Twinlakes | Norton"},{"id":"town_id_110","text":"Nyabira | Mashonaland West"},{"id":"town_id_106","text":"Raffingora | Mashonaland West"},{"id":"town_id_103","text":"Selous | Mashonaland West"},{"id":"town_id_28","text":"Zvimba | Mashonaland West"},{"id":"province_id_6","text":"Masvingo Province"},{"id":"town_id_52","text":"Bikita | Masvingo Province"},{"id":"town_id_53","text":"Chiredzi | Masvingo Province"},{"id":"town_id_54","text":"Chivi | Masvingo Province"},{"id":"town_id_55","text":"Gutu | Masvingo Province"},{"id":"town_id_56","text":"Masvingo | Masvingo Province"},{"id":"suburb_id_428","text":"Clipsham | Masvingo"},{"id":"suburb_id_429","text":"Clovelly | Masvingo"},{"id":"suburb_id_432","text":"Eastvale | Masvingo"},{"id":"suburb_id_438","text":"Industrial Site | Masvingo"},{"id":"suburb_id_524","text":"Lake Mutirikwi | Masvingo"},{"id":"suburb_id_437","text":"Masvingo CBD | Masvingo"},{"id":"suburb_id_431","text":"Morningside | Masvingo"},{"id":"suburb_id_434","text":"Mucheke | Masvingo"},{"id":"suburb_id_425","text":"Northleigh | Masvingo"},{"id":"suburb_id_426","text":"Rhodene | Masvingo"},{"id":"suburb_id_435","text":"Rujeko | Masvingo"},{"id":"suburb_id_436","text":"Runyararo | Masvingo"},{"id":"suburb_id_433","text":"Target Kopje | Masvingo"},{"id":"suburb_id_525","text":"Victoria Range | Masvingo"},{"id":"suburb_id_439","text":"Westview Industrial Site | Masvingo"},{"id":"suburb_id_427","text":"ZIMRE Park | Masvingo"},{"id":"town_id_57","text":"Mwenezi | Masvingo Province"},{"id":"town_id_58","text":"Rutenga | Masvingo Province"},{"id":"town_id_59","text":"Triangle | Masvingo Province"},{"id":"town_id_60","text":"Zaka | Masvingo Province"},{"id":"province_id_11","text":"Matabeleland North"},{"id":"town_id_71","text":"Binga | Matabeleland North"},{"id":"town_id_72","text":"Bubi | Matabeleland North"},{"id":"town_id_73","text":"Deka | Matabeleland North"},{"id":"town_id_74","text":"Hwange | Matabeleland North"},{"id":"town_id_75","text":"Lupane | Matabeleland North"},{"id":"town_id_101","text":"Msuna | Matabeleland North"},{"id":"town_id_76","text":"Nkayi | Matabeleland North"},{"id":"town_id_109","text":"Nyamandlovu | Matabeleland North"},{"id":"town_id_77","text":"Tsholotsho | Matabeleland North"},{"id":"town_id_78","text":"Umguza | Matabeleland North"},{"id":"town_id_79","text":"Victoria Falls | Matabeleland North"},{"id":"province_id_12","text":"Matabeleland South"},{"id":"town_id_80","text":"Beitbridge | Matabeleland South"},{"id":"town_id_81","text":"Bulilimamangwe | Matabeleland South"},{"id":"town_id_108","text":"Esigodini | Matabeleland South"},{"id":"town_id_82","text":"Gwanda | Matabeleland South"},{"id":"town_id_114","text":"Gwatemba | Matabeleland South"},{"id":"town_id_83","text":"Insiza | Matabeleland South"},{"id":"town_id_117","text":"Mangwe | Matabeleland South"},{"id":"town_id_115","text":"Maphisa | Matabeleland South"},{"id":"town_id_84","text":"Matobo | Matabeleland South"},{"id":"town_id_85","text":"Plumtree | Matabeleland South"},{"id":"town_id_86","text":"Umzingwane | Matabeleland South"},{"id":"province_id_9","text":"Midlands Province"},{"id":"town_id_87","text":"Chirumhanzu | Midlands Province"},{"id":"town_id_89","text":"Gokwe | Midlands Province"},{"id":"town_id_3","text":"Gweru | Midlands Province"},{"id":"suburb_id_396","text":"Adelaide Park | Gweru"},{"id":"suburb_id_383","text":"Ascot | Gweru"},{"id":"suburb_id_382","text":"Athlone | Gweru"},{"id":"suburb_id_285","text":"Brackenhurst | Gweru"},{"id":"suburb_id_400","text":"Bradeleys Plots | Gweru"},{"id":"suburb_id_386","text":"Cliffton Park | Gweru"},{"id":"suburb_id_402","text":"Coolmoreen | Gweru"},{"id":"suburb_id_362","text":"Daylesford | Gweru"},{"id":"suburb_id_391","text":"Greenvale | Gweru"},{"id":"suburb_id_380","text":"Gweru CBD | Gweru"},{"id":"suburb_id_381","text":"Gweru East | Gweru"},{"id":"suburb_id_282","text":"Harben park | Gweru"},{"id":"suburb_id_390","text":"Hertifordshire | Gweru"},{"id":"suburb_id_394","text":"Ivene | Gweru"},{"id":"suburb_id_397","text":"Kingstone Park | Gweru"},{"id":"suburb_id_284","text":"Kopje | Gweru"},{"id":"suburb_id_280","text":"Lundi Park | Gweru"},{"id":"suburb_id_401","text":"Lynfield | Gweru"},{"id":"suburb_id_384","text":"Mambo | Gweru"},{"id":"suburb_id_277","text":"Mkoba | Gweru"},{"id":"suburb_id_387","text":"Montrose | Gweru"},{"id":"suburb_id_385","text":"Mtapa | Gweru"},{"id":"suburb_id_398","text":"Mtausi Park | Gweru"},{"id":"suburb_id_289","text":"Nashville | Gweru"},{"id":"suburb_id_364","text":"Nehosho | Gweru"},{"id":"suburb_id_392","text":"Northgate Heights | Gweru"},{"id":"suburb_id_279","text":"Northlea | Gweru"},{"id":"suburb_id_399","text":"Pattersonia | Gweru"},{"id":"suburb_id_389","text":"Ridgemont | Gweru"},{"id":"suburb_id_281","text":"Riverside | Gweru"},{"id":"suburb_id_363","text":"Senga | Gweru"},{"id":"suburb_id_288","text":"Shamrock Park | Gweru"},{"id":"suburb_id_278","text":"Southdowns | Gweru"},{"id":"suburb_id_395","text":"Southview | Gweru"},{"id":"suburb_id_283","text":"St Annes drive | Gweru"},{"id":"suburb_id_287","text":"Windsor Park | Gweru"},{"id":"suburb_id_388","text":"Woodlands Park | Gweru"},{"id":"town_id_90","text":"Kwekwe | Midlands Province"},{"id":"suburb_id_411","text":"Amaveni | Kwekwe"},{"id":"suburb_id_422","text":"Chicago | Kwekwe"},{"id":"suburb_id_415","text":"Fitchlea | Kwekwe"},{"id":"suburb_id_420","text":"Gaika Park | Kwekwe"},{"id":"suburb_id_424","text":"Glen Arroach | Kwekwe"},{"id":"suburb_id_421","text":"Glenwood | Kwekwe"},{"id":"suburb_id_414","text":"Globe & Phoenix | Kwekwe"},{"id":"suburb_id_418","text":"Golden Acres | Kwekwe"},{"id":"suburb_id_423","text":"Hazeldine | Kwekwe"},{"id":"suburb_id_413","text":"Hillandale | Kwekwe"},{"id":"suburb_id_410","text":"Mbizo | Kwekwe"},{"id":"suburb_id_416","text":"Msasa Park | Kwekwe"},{"id":"suburb_id_419","text":"Msasa Park Extension | Kwekwe"},{"id":"suburb_id_409","text":"Newtown | Kwekwe"},{"id":"suburb_id_417","text":"Southwood | Kwekwe"},{"id":"suburb_id_412","text":"Westend | Kwekwe"},{"id":"town_id_91","text":"Mberengwa | Midlands Province"},{"id":"town_id_105","text":"Mvuma | Midlands Province"},{"id":"town_id_92","text":"Redcliff | Midlands Province"},{"id":"town_id_93","text":"Shurugwi | Midlands Province"},{"id":"town_id_94","text":"Zvishavane | Midlands Province"},{"id":"province_id_14","text":"Regional"},{"id":"town_id_97","text":"Botswana | Regional"},{"id":"town_id_100","text":"Mauritius | Regional"},{"id":"town_id_98","text":"Mozambique | Regional"},{"id":"town_id_96","text":"South Africa | Regional"},{"id":"town_id_99","text":"Zambia | Regional"}]`;
    var AGENCY_DATA = `[{"id":"1198","text":"Access Homes"},{"id":"76","text":"Action Properties"},{"id":"1707","text":"AEG Properties"},{"id":"1381","text":"Agency Property Co."},{"id":"71","text":"AlexCourt Real Estate"},{"id":"1799","text":"Alliance Properties"},{"id":"1181","text":"amazon real estate"},{"id":"1493","text":"Ark Properties"},{"id":"179","text":"Ashbury Properties"},{"id":"1192","text":"Aurem Gates "},{"id":"1237","text":"Aurora Properties"},{"id":"51","text":"Avondale Estate Agents"},{"id":"1827","text":"Azotus Enterprises Pvt Ltd"},{"id":"54","text":"Bard Real Estate"},{"id":"1747","text":"Bard Real Estate Byo"},{"id":"1640","text":"Bechak Real estate"},{"id":"1523","text":"Becktone Properties"},{"id":"22","text":"Bill and Eileen"},{"id":"1754","text":"Blissful Real Estate"},{"id":"1665","text":"Bloomwell Properties"},{"id":"1311","text":"Blue Tribe"},{"id":"1582","text":"Boulders Estate"},{"id":"1714","text":"Bridges Real Estate"},{"id":"1734","text":"Camitel"},{"id":"1822","text":"Camitel - Property"},{"id":"1536","text":"Cardinal Properties"},{"id":"1373","text":"Carson & Carson Real Estate"},{"id":"1278","text":"Central Real Estate"},{"id":"1765","text":"CHAS EVERITT"},{"id":"1742","text":"Chihaya Real Estate Developers"},{"id":"1800","text":"Chris & Del Realtors"},{"id":"131","text":"Chronicles Properties"},{"id":"1670","text":"Clark Properties"},{"id":"95","text":"Clipcrunt Real Estate"},{"id":"103","text":"Colden Properties"},{"id":"1399","text":"Compact Homes"},{"id":"40","text":"Crowne Properties"},{"id":"36","text":"Crusader Real Estate"},{"id":"1312","text":"Crystal Real Estate"},{"id":"79","text":"Dandeal Properties"},{"id":"1206","text":"Darwin Properties"},{"id":"88","text":"Dawn Property Consultancy"},{"id":"61","text":"DBT Properties"},{"id":"1725","text":"Decorum Properties"},{"id":"1472","text":"Deep State Incorporated (Pvt)Ltd"},{"id":"1463","text":"Defiance Properties"},{"id":"1407","text":"Deridon"},{"id":"1772","text":"Dingamuzi Real Estate"},{"id":"1501","text":"Drew & Fraser International Real Estate"},{"id":"1363","text":"DylTan Properties"},{"id":"91","text":"Eagle Estate Agents Mutare"},{"id":"1750","text":"Echo Delta Land Developers"},{"id":"1231","text":"Eelis Real Estate"},{"id":"87","text":"EPG Global"},{"id":"1322","text":"Exodus and Company"},{"id":"1661","text":"FBC Properties"},{"id":"1290","text":"Fine and Country (Bulawayo)"},{"id":"1830","text":"First Banking Corporate Properties"},{"id":"1494","text":"Fortress Property Consultants (Pvt) Ltd"},{"id":"1768","text":"Forza Properties"},{"id":"26","text":"Gabriel Real Estate"},{"id":"1199","text":"Gatsby Real Estate"},{"id":"1597","text":"Genesis Real Estate"},{"id":"1812","text":"Glaudina Flats"},{"id":"28","text":"Glory Properties"},{"id":"1664","text":"GoldenWill Real Estate"},{"id":"144","text":"Graham and Douglas Real Estate"},{"id":"1719","text":"Grand Stride Real Estate"},{"id":"1595","text":"Grapple Properties"},{"id":"1657","text":"Graylands Park"},{"id":"1208","text":"Great Zimbabwe Realtors"},{"id":"1810","text":"Green Keys Realtors"},{"id":"44","text":"Guest and Tanner Real Estate"},{"id":"38","text":"Guidewall Properties"},{"id":"1265","text":"Hagan & Hill Estate Agents"},{"id":"121","text":"Hammer and Tongues Real Estate"},{"id":"1268","text":"Harmonyland Properties"},{"id":"1204","text":"Heaven On Earth Real Estate"},{"id":"1400","text":"Hillstec Real Estate"},{"id":"1817","text":"Hilton Properties"},{"id":"89","text":"Hollands Harare Estate Agents"},{"id":"1804","text":"Home of Housing projects"},{"id":"1592","text":"Home Pros Realty"},{"id":"148","text":"Homelux Real Estate"},{"id":"1689","text":"Homesforth Alex Park Branch"},{"id":"1377","text":"Homesforth Properties"},{"id":"1427","text":"Homeslea Real Estate"},{"id":"1473","text":"Homespecs Realty"},{"id":"1356","text":"House of Stone Properties"},{"id":"1811","text":"Hudson Mews"},{"id":"1821","text":"Illustrated Homes"},{"id":"1826","text":"Impali Development"},{"id":"1395","text":"Income Properties"},{"id":"1732","text":"iProperties"},{"id":"1816","text":"Irewil Real Estate (Pvt) Ltd"},{"id":"1627","text":"Isaac Biden Properties"},{"id":"81","text":"John Pocock and Company"},{"id":"1740","text":"Just Property"},{"id":"82","text":"Ken Estate Agents"},{"id":"13","text":"Kennan Properties"},{"id":"1336","text":"Keystone Real Estate"},{"id":"1358","text":"Khalida Realty"},{"id":"19","text":"Knight Frank"},{"id":"1603","text":"Krosmon Real Estate"},{"id":"1722","text":"Lavee Real Estate"},{"id":"16","text":"Laws"},{"id":"1775","text":"Leanvest"},{"id":"1374","text":"Leengate Land Developers"},{"id":"1382","text":"Legacy Real Estate"},{"id":"1221","text":"Lightvale Properties"},{"id":"34","text":"Lizhibowa Real Estate"},{"id":"1790","text":"LLM Kashaya Estate & Properties"},{"id":"1528","text":"Loopnet Realty"},{"id":"1452","text":"Lucile Real Estate"},{"id":"96","text":"Luxury Real Estate"},{"id":"65","text":"Mac Homes"},{"id":"1578","text":"Marian Real Estate Consultancy"},{"id":"77","text":"Matrix Realty"},{"id":"8","text":"Merctrust"},{"id":"1626","text":"Mountfin Properties"},{"id":"1641","text":"Murano Properties"},{"id":"1214","text":"Nal Properties"},{"id":"1786","text":"National Railways of Zimbabwe Contributory Pension Fund"},{"id":"1436","text":"Ndirimo Properties"},{"id":"1367","text":"Nest Property"},{"id":"145","text":"Neville Property Consultancy"},{"id":"1416","text":"New Age Properties"},{"id":"53","text":"NewHan Bridge Real Estate"},{"id":"1413","text":"Northpole Real Estate"},{"id":"1383","text":"Oasis Realty"},{"id":"1683","text":"Octalworld Real Estate"},{"id":"1673","text":"Own Your Home Real Estate"},{"id":"1544","text":"Oxford Properties"},{"id":"1216","text":"Oyster Real Estate"},{"id":"10","text":"Pam Golding Properties"},{"id":"1362","text":"Pearlville Land Developers"},{"id":"1378","text":"Perennial Real Estate"},{"id":"1733","text":"Plaza Properties"},{"id":"1196","text":"Prefered Properties"},{"id":"80","text":"Private"},{"id":"1815","text":"Probfix Properties"},{"id":"1325","text":"Property 101"},{"id":"1561","text":"Property Channel"},{"id":"78","text":"Property Dreams"},{"id":"123","text":"Property Exchange"},{"id":"11","text":"Property Link"},{"id":"1508","text":"Property Peak"},{"id":"5","text":"Property Shop"},{"id":"1431","text":"Property track"},{"id":"127","text":"Property World"},{"id":"1820","text":"PropertyBox Real Estate"},{"id":"1217","text":"Propertyhill Realty"},{"id":"1774","text":"Propertynet"},{"id":"1202","text":"Propertynet Real Estate"},{"id":"114","text":"R.E.D. Property"},{"id":"1545","text":"Rananga Properties"},{"id":"1205","text":"Rawson Properties Harare"},{"id":"1244","text":"Realgate Properties"},{"id":"1370","text":"Realtor Ville"},{"id":"1807","text":"Realtors Merchants"},{"id":"1823","text":"Realty Riddle Real Estate"},{"id":"1195","text":"Realty World Estate Agents"},{"id":"1509","text":"Rehoboth Realty"},{"id":"1379","text":"RightHaus Realty"},{"id":"1770","text":"Rivonia Real Estate"},{"id":"9","text":"Robert Root"},{"id":"159","text":"Rod Bell Real Estate"},{"id":"69","text":"Rodor Properties"},{"id":"1818","text":"Romapix Housing"},{"id":"58","text":"Root Pro"},{"id":"1730","text":"Rosh Properties"},{"id":"1805","text":"Safe Africa Real Estate"},{"id":"1271","text":"Seeff Zimbabwe"},{"id":"1403","text":"Sermony Properties"},{"id":"1600","text":"Shawana Capital Real Estate"},{"id":"1727","text":"Sisonke Properties"},{"id":"1364","text":"Sky Ryan Properties"},{"id":"1283","text":"Solid Real Estate"},{"id":"67","text":"Southbay Real Estate"},{"id":"1254","text":"Southview Holdings (Pvt) Ltd"},{"id":"1334","text":"Stevensons Realtors"},{"id":"146","text":"Sub-Saharan Estate Agents"},{"id":"1791","text":"Summit Properties"},{"id":"1766","text":"t19"},{"id":"154","text":"t21"},{"id":"1762","text":"t29"},{"id":"1824","text":"t3"},{"id":"1743","text":"t36"},{"id":"1619","text":"t39"},{"id":"1731","text":"Tagmin Properties"},{"id":"1496","text":"Tanvel Real Estate Harare North"},{"id":"18","text":"Test"},{"id":"1777","text":"Test 43"},{"id":"1785","text":"test12"},{"id":"1667","text":"test14"},{"id":"1224","text":"Test23"},{"id":"85","text":"Test24"},{"id":"1540","text":"test26"},{"id":"1368","text":"Test4"},{"id":"1512","text":"Test42"},{"id":"1724","text":"Thaton Property"},{"id":"1763","text":"The Benjamins Realty"},{"id":"1583","text":"The Property Connexion"},{"id":"1252","text":"Three Skys Properties"},{"id":"138","text":"Top Market Properties"},{"id":"1520","text":"Treasure Stewards"},{"id":"1281","text":"Tripple Horizon Real Estate"},{"id":"24","text":"Twincent Properties"},{"id":"1828","text":"Vantris Property Group"},{"id":"1793","text":"Venture Management"},{"id":"1787","text":"Vesta Properties"},{"id":"1814","text":"Wariach Properties"},{"id":"124","text":"Westlea Properties"},{"id":"1324","text":"WoodsBrand Properties"},{"id":"1798","text":"Zaneta Real Estate"},{"id":"1767","text":"Zenon Real Estate"},{"id":"143","text":"Zimre Properties"}]`;
    var NEIGHBORHOOD_DATA = `[{"id":"69","text":"Arlington East"},{"id":"67","text":"Arlington Estate"},{"id":"40","text":"Arundel Office Park"},{"id":"50","text":"Aspindale Park"},{"id":"65","text":"Borrowdale Valley Estate"},{"id":"66","text":"Borrowdale Villa"},{"id":"47","text":"Carrick Creagh Estate"},{"id":"41","text":"Celestial Office Park"},{"id":"37","text":"Graylands Park"},{"id":"38","text":"Helensvale Clusters"},{"id":"44","text":"Hopeville Estate"},{"id":"45","text":"Kingsbury Estate"},{"id":"49","text":"Mabvazuva Estate"},{"id":"48","text":"Madokero Estate"},{"id":"42","text":"Mount Pleasant Business Park"},{"id":"64","text":"Peakwood Village"},{"id":"36","text":"Pokugara Estate"},{"id":"43","text":"Rose Cottages"},{"id":"46","text":"Sibiti Private Estate"},{"id":"39","text":"The Strand Corporate Park"},{"id":"35","text":"ZESA Complex"}]`;
    var DEVELOPMENT_DATA = `[{"id":"96","text":"Greendale Clusters"},{"id":"111","text":"Aspire Heights Baobab"},{"id":"115","text":"Borrowdale Park"},{"id":"121","text":"SilverBrook Estate"},{"id":"128","text":"Boulders Estate"},{"id":"214","text":"The Strand office land in Borrowdale"},{"id":"249","text":"Zvishavane Eastlea"},{"id":"265","text":"Turnpike Industrial Park"},{"id":"266","text":"Bridgewood Residential"},{"id":"267","text":"Bridgewood Commercial"},{"id":"275","text":"Jetway Industrial Park"},{"id":"277","text":"Cromlet Farm"},{"id":"318","text":"Newport"},{"id":"319","text":"Northbrook"},{"id":"323","text":"The Frontier"},{"id":"325","text":"Marondera Ruware"},{"id":"326","text":"Glenlorne"},{"id":"328","text":"GrayLands Park"},{"id":"336","text":"Hudson Mews"},{"id":"337","text":"Green Keys Glaudina-Flats"},{"id":"343","text":"Kadoma Agro Plots"},{"id":"344","text":"Spring Valley  Estate Nyabira"},{"id":"361","text":"The Connaught"},{"id":"363","text":"Impali Development"},{"id":"364","text":"Azotus Enterprises Pvt Ltd"}]`;

    var USER_FIRST_NAME = '';
    var USER_LAST_NAME = '';
    var USER_EMAIL = '';
    var USER_PHONE = '';
    var USER_FINGERPRINT = '';
    var USER_IP = '213.172.147.174';

    var LISTING_RIBBONS_ENABLED = true;
    var RECAPTCHA_KEY = '6LfpiTcrAAAAAPN5ynnoaNL1v4JXriJalkiM7ePI';
    var DISPLAY_CAROUSEL_UNITS = false;
    var IS_DYNAMIC_AMENITY_LIST_ENABLED = true;

</script>

        <style>
            .SavedSearch {
                display: none;
            }
        </style>

        <script type="62bff2e665d34e70882a4d87-text/javascript">
            console.log = function () { }
        </script>



    <!-- Google Tag Manager -->
    <script type="62bff2e665d34e70882a4d87-text/javascript">
            (function (w, d, s, l, i) {
                w[l] = w[l] || []; w[l].push({
                    'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                }); var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5SBKD64');
    </script>

    <script type="62bff2e665d34e70882a4d87-text/javascript">
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 1235491, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    </script>




</head>
<body class="bg-white search  ">
    <input name="__RequestVerificationToken" type="hidden" value="4Ajz2wf6Da4kOyBznWBrE2nVgdtuiE0TU8j7UM5zfws3cmwvl0XHdIIa299-cbZ8tyiUkAiYgnU2xYOy0QtkJR5ATvwrDRyLm5WIr5PctyY1" />



    <div id="fb-root"></div>

<script type="62bff2e665d34e70882a4d87-text/javascript">
	var RESOURCES = new language();
	function language() {
		var self = this;
		self.search = "Enter a location";
		self.search_agency = "Enter an agency";
		self.search_neighborhood = "Enter a community";
		self.search_development = "Enter a development";
		self.locations = "locations";
		self.location = "Location";
		self.agencies = "agencies";
		self.agency = "agency";
		self.communities = "Communities";
		self.community = "Community";
		self.development = "development";
		self.developments = "developments";
		self.less_options = "Less options...";
		self.refinesearch = "Refine Search";
		self.more_options = "More options...";
		self.of = "of";
		self.selected = "selected";
		self.find = "Search:";
		self.access_saved_search = "This search has been saved as an email alert / search request. To access it, go to: <a href='/request-a-propertyrequest'> My account - request </a> (at the top of the page)";
		self.access_saved_search2 = "This search has been saved for e-mail alerts / agent contact requests";
		self.save_buyer_error = "You must be logged in to use this feature. Click  'Create Account' at the top of the page to quickly create an account";
		self.property_saved_favourites = "This property has been saved in your favourites list which you can access from the My Account - Favourites menu";
		self.favourite_property_updated = "Your favourite properties have been updated";
		self.email_invalid = "The e-mail address you entered doesn't appear to be valid!";
		self.captcha_message = "You must enter the letters and/or numbers from the image into the box below it so that we know you're a human :)";
		self.thanks_for_feedback = "Thanks for your feedback! Your report has been sent and will be evaluated by administration.";
		self.this_will_suspend_your_listing = "This will suspend your listing until you have made your changes and clicked Resume. Do you want to continue anyway?";
		self.edit = "Edit";
		self.extras = "Extras";
		self.resubmit = "Resubmit";
		self.resume = "Resume";
		self.wait_while_resume = "Please wait while we resume your listing...";
		self.suspend = "Suspend";
		self.publish = "Publish";
		self.renew_listing = "Renew Listing";
		self.reference = "Reference";
		self.categories = "Categories";
		self.address = "Address";
		self.valid_email = "Please enter in a valid email address.";
		self.next = "Next";
		self.prev = "Prev";
		self.previous = "Previous";
		self.cancel = "Cancel";
		self.status = "Status";
		self.type = "Type";
		self.price = "Price";
		self.placeholder_all = "All";
		self.please_select_valid_property = "Please select a valid property.";
		self.load_more = "Load More";
		self.select_all_text = "Select all";
		self.all_selected = "All selected";
		self.count_selected = "# of % selected";
		self.no_matches_found = "No matches found";
		self.placeholder = "All";
		self.listed_on = "Listed On";
		self.listing_expires = "Expires";
		self.address_not_found = "Sorry, the address wasn't found on Google Maps.";
		self.add_youtube_video = "Add YouTube Video";
		self.copy_paste_the_url = "Copy and paste the URL of the YouTube video below and click save.";
		self.are_you_sure_you_want_to_delete = "Are you sure you want to delete this file?";
		self.done = "Done!";
		self.save = "Save";
		self.error_settings_will_be_lost = "Are you sure? All unsaved settings will be lost.";
		self.error_required_red = "Please attend to the required details highlighted in red";
		self.no_properties = "There are no properties";
		self.numeric_separator = ",";
		self.password_minimum = "The new password does not meet minimum length requirements ({0} characters)";
		self.reset_password_not_strong = "Acceptable but not very strong.";
		self.reset_password_strong = "Good password.";
		self.reset_password_very_strong = "Very good password.";
		self.required_field = "This field is required.";
		self.error_reload_page = "An error has occurred, Please reload the page";
		self.please_attend_to_required_in_red = "Please attend to the required details highlighted in red.";
		self.boost = "Ad-Boost!";
		self.archive = "Archive";
		self.archived = "Archived";
		self.are_you_sure_you_want_to_archive = "Are you sure you want to archive this property?";
		self.archived = "Archived";
		self.error_archive = "Failed to archive this property.";
		self.restore = "Restore";
		self.show_archives = "Show Archives";
		self.hide_archive = "Hide Archive";
		self.already_have_an_account = "Already have an account?";
		self.no_account = "No account? Click here to register";
		self.like = "Like";
		self.liked = "Liked";
		self.dislike = "Dislike";
		self.disliked = "Disliked";
		self.archive_successful = "The advert was archived successfully.";
		self.restore_successful = "The advert was restored successfully.";
		self.hide_archives = "Hide Archives";
		self.show_archives_mobile_menu = "Show <br> Archives";
		self.hide_archives_mobile_menu = "Hide <br>Archives";
		self.inputtooshort = "Please enter 1 or more characters";
		self.searching = "Searching...";
		self.noresult = "No results found";
		self.read_more = "More Property News";
		self.please_enter_valid_phone_number = "Please enter a valid mobile number without space or special characters";
		self.phone_number_invalid = "Invalid phone number";
		self.please_enter_full_name = "Please enter full name";
		self.loading = "Loading...";
		self.error_invalid_captcha = "Captcha not completed correctly (we need to make sure you are a human!)";
		self.select_newsletter_option = "Please select Newsletter or Promo or both";
		self.readmore = "Read More";
		self.readless = "Read Less";
		self.you_will_be_notified = "You will be notified of similar properties by email";
		self.thanks_newsletter = "Thank you for subscribing to our newsletter!";
		self.your_enquiry_has_been_sent = "Your enquiry has been sent to the agent";
		self.enquiry_sent = "Your enquiry has been sent";
		self.more = "More &#9662";
		self.less = "Less &#9652";
		self.an_error_has_occurred = "An error has occurred";
		self.completed = "Completed";
		self.documents_successfully_uploaded = "Document(s) successfully uploaded";
		self.select_provider = "Select provider";
		self.create_request_success = "Your request has been created, an agent will revert back to you shortly";
		self.error_please_make_sure_you_are_logged_in_and_or_refresh_the_page = "Error: Please make sure you are logged in and/or refresh the page";
		self.not_enough_data = "Not enough data";
		self.average_sales_price = "Average sales price";
		self.average_rental_price = "Average rental price";
		self.bedroom = "Bedroom";
		self.bedrooms = "Bedrooms";
		self.please_verify_you_are_not_a_robot = "Please verify you're not a robot by completing the CAPTCHA.";
		self.view_more = "View More";
		self.view_less = "View Less";
	}
</script>











<style>
    @media(min-width: 1070px) {
        header {
            padding-bottom: 75px;
        }
        header > .container {
            left: 50%;
            top: 15px;
        }
        header > .container > nav {
            left: -50%;
        }
        .menu-pad {
            padding-bottom: 26px;
            padding-top: 11px;
        }
    }
    /* Use CSS sticky for a stationary header */
  
</style>


<div id="stickyHeader">
    
    <header class="header-search-result  shadow h-20">
        <div class="Header container absolute top-0 xl:w-[1200px]" style="z-index: 70;">
            <nav class="nav-hamburger ">



<div id="mobileLogo" class="w-full absolute top-0 left-0 h-20 bg-white z-30" style="box-shadow:0 18px 52px 29px rgba(158, 158, 158, 0.1); z-index: 90;">
    <a id="HeaderLogoMobile" class="mx-auto h-20 vcenterFlex" href="/" style="background-color:#ffffff">
            <img src="/uploadedfiles/ea/9c/a9/ea9ca976-6441-48e1-81ff-0ff7acf8018b.svg" class="mx-auto" alt="Property.co.zw" style="max-height: 70px;" loading="eager" />
    </a>
</div>

<div id="mobileMainNavBtn" class="absolute top-6 left-6 z-30" style="z-index: 90;">
    <img src="/content/overhaul/img/svg/mod/hamburger.svg" style="filter: brightness(0) invert(0%) sepia(0%) saturate(7500%) hue-rotate(327deg) brightness(96%) contrast(104%);" class="w-7 h-7" loading="eager" />
</div>

<div id="mobileProfileNavBtn" class="absolute right-6 z-30" style="top: 1.41rem; z-index: 90;">
    <img style="width: 30.4px; height: 30.4px; filter: brightness(0) invert(0%) sepia(0%) saturate(7500%) hue-rotate(327deg) brightness(96%) contrast(104%);" src="/content/overhaul/img/svg/icons/user2.svg" loading="eager" />
</div>



<div id="mobileMainNav" class="hidden -left-full fixed top-20 z-20 bg-white transition-all p-5" style="width: 300px; border-top: 1px #EBEFF2 solid; box-shadow: 4px 4px 15px rgba(0,0,0,0.1); overflow:scroll;">

        <a href="javascript:;"  class="block mb-4 relative dropdown-toggle" style="color: #384E85;">
            <img src="/content/overhaul/img/menu/main/1.svg" class="inline-block mr-2.5" style="width: 1.25rem; position: relative; bottom: 1px;"/>
            For Sale
             ▾
        </a>
            <div class="hidden mb-5">
                    <a href="/houses-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Houses
                    </a>
                    <a href="/townhouses-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Townhouses &amp; Complexes
                    </a>
                    <a href="/land-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Land
                    </a>
                    <a href="/residential-land-stands-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Stands &amp; Residential Land
                    </a>
                    <a href="/commercial-land-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Commercial &amp; Industrial Land
                    </a>
                    <a href="/agricultural-land-farms-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Farms &amp; Agricultural Land
                    </a>
                    <a href="/commercial-property-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Commercial Property
                    </a>
                    <a href="/warehouses-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Warehouses &amp; Factories
                    </a>
                    <a href="/shops-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Shops &amp; Retail Property
                    </a>
                    <a href="/offices-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Offices
                    </a>
                    <a href="/lodges-hotels-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Hotels &amp; Lodges
                    </a>
                    <a href="/flats-apartments-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Flats &amp; Apartments
                    </a>
                    <a href="/garden-flats-for-sale"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Garden Flats
                    </a>
            </div>
        <a href="javascript:;"  class="block mb-4 relative dropdown-toggle" style="color: #384E85;">
            <img src="/content/overhaul/img/menu/main/1.svg" class="inline-block mr-2.5" style="width: 1.25rem; position: relative; bottom: 1px;"/>
            To Rent
             ▾
        </a>
            <div class="hidden mb-5">
                    <a href="/houses-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Houses
                    </a>
                    <a href="/townhouses-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Townhouses &amp; Complexes
                    </a>
                    <a href="/cottages-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Cottages
                    </a>
                    <a href="/commercial-property-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Commercial Property
                    </a>
                    <a href="/offices-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Offices
                    </a>
                    <a href="/warehouses-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Warehouses &amp; Factories
                    </a>
                    <a href="/shops-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Shops &amp; Retail Property
                    </a>
                    <a href="/flats-apartments-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Flats &amp; Apartments
                    </a>
                    <a href="/garden-flats-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Garden Flats
                    </a>
                    <a href="/land-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Land
                    </a>
                    <a href="/agricultural-land-farms-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Farms &amp; Agricultural Land
                    </a>
                    <a href="/rooms-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Rooms
                    </a>
                    <a href="/student-accommodation-for-rent"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Student Accommodation
                    </a>
                    <a href="/property-short-term"
                       
                       class="flex mb-4 relative"
                       style="color: black;
                      opacity: 0.6;
                      padding-left: 2.125rem;">
                        Short Term
                    </a>
            </div>
        <a href="javascript:;"  class="block mb-4 relative dropdown-toggle" style="color: #384E85;">
            <img src="/content/overhaul/img/menu/main/1.svg" class="inline-block mr-2.5" style="width: 1.25rem; position: relative; bottom: 1px;"/>
            Projects
             ▾
        </a>
            <div class="hidden mb-5">
                    <a href="/development-projects"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        New Projects
                    </a>
                    <a href="/communities"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Communities
                    </a>
            </div>
        <a href="javascript:;"  class="block mb-4 relative dropdown-toggle" style="color: #384E85;">
            <img src="/content/overhaul/img/menu/main/1.svg" class="inline-block mr-2.5" style="width: 1.25rem; position: relative; bottom: 1px;"/>
            Market insights
             ▾
        </a>
            <div class="hidden mb-5">
                    <a href="/property-prices"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Property prices
                    </a>
                    <a href="/real-estate-index"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Real estate index
                    </a>
                    <a href="/home-loan-calculator"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Home loan calculator
                    </a>
            </div>
        <a href="javascript:;"  class="block mb-4 relative dropdown-toggle" style="color: #384E85;">
            <img src="/content/overhaul/img/menu/main/1.svg" class="inline-block mr-2.5" style="width: 1.25rem; position: relative; bottom: 1px;"/>
            Resources
             ▾
        </a>
            <div class="hidden mb-5">
                    <a href="/blog"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        News
                    </a>
                    <a href="/magazine"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Magazine
                    </a>
                    <a href="/neighborhoods"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Neighborhoods
                    </a>
                    <a href="/showdays"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Showdays
                    </a>
                    <a href="/request-a-property"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Request property
                    </a>
                    <a href="/valuation"
                       
                       class="flex mb-4 relative"
                       style="color: #384E85;
                      opacity: 0.6;
                      padding-left: 2.5rem;">
                        Valuation
                    </a>
            </div>

        <a href="/neighborhoods" class="block mb-4 relative" style="color: #384E85;">
            <img src="/content/overhaul/img/menu/main/1.svg" class="inline-block mr-2.5" style="width: 1.25rem; position: relative; bottom: 1px;"/>
            Neighborhoods
        </a>

</div>


<div id="mobileProfileNav" class="hidden fixed top-20 -right-full z-20 bg-white transition-all p-5" style="width: 300px;  border-top: 1px #EBEFF2 solid; box-shadow: -1px 4px 15px rgba(0,0,0,0.1); overflow: scroll;">
        <a href="/Home/PostAdvertClassifiedsRedirect" class="block w-full py-2 text-white bg-secondary text-center rounded-md mb-4">
            List Privately
        </a>
    <div class="MyAccountMobile">
        <div class="lds-ellipsis mx-auto" style="left: 94px; bottom: 32px;"><div></div><div></div><div></div><div></div></div>
    </div>

    <div class="relative py-5">
        <div class="seperator absolute -left-5" style="height: 1px; width: 300px; background: #EBEFF2;"></div>
    </div>

        <a href="javascript:void" class="block mb-4 dropdown-toggle" style="color: #384E85;">
            <img src="/content/overhaul/img/menu/settings.svg" class=" inline-block mr-2.5" style="width: 1.25rem; position: relative; bottom: 1px;" />
            Currency
        </a>
        <div class="hidden pl-9 relative -top-3">
                <a href="javascript:SetCurrency('85')" class="block text-graypurpledark py-1">USD</a>
                <a href="javascript:SetCurrency('3642')" class="block text-graypurpledark py-1">ZiG</a>
        </div>


</div>

            </nav>
            <nav class="nav-desktop justify-between absolute xl:w-[1200px]  " style="">
                <div class="flex">





    <a id="HeaderLogoSearch" class="vcenterFlex h-full" style="margin-right: 2rem; max-height: 3.75rem;" href="/">
        
            <img src="/uploadedfiles/ea/9c/a9/ea9ca976-6441-48e1-81ff-0ff7acf8018b.svg" class="" loading="eager" alt="Property.co.zw" style="" />
    </a>

<div class="vcenterFlex">
            <div class="top-item relative">
                <a href="/property-for-sale" class="menu-pad px-3 inline-block">For Sale &#9662</a>
                <div class='sub-item rounded-md whitespace-nowrap shadow-dark absolute left-2 bg-white opacity-0 invisible text-graypurpledark transition-all'>
                       <a href="/houses-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Houses
                       </a>
                       <a href="/townhouses-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Townhouses &amp; Complexes
                       </a>
                       <a href="/land-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Land
                       </a>
                       <a href="/residential-land-stands-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Stands &amp; Residential Land
                       </a>
                       <a href="/commercial-land-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Commercial &amp; Industrial Land
                       </a>
                       <a href="/agricultural-land-farms-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Farms &amp; Agricultural Land
                       </a>
                       <a href="/commercial-property-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Commercial Property
                       </a>
                       <a href="/warehouses-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Warehouses &amp; Factories
                       </a>
                       <a href="/shops-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Shops &amp; Retail Property
                       </a>
                       <a href="/offices-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Offices
                       </a>
                       <a href="/lodges-hotels-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Hotels &amp; Lodges
                       </a>
                       <a href="/flats-apartments-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Flats &amp; Apartments
                       </a>
                       <a href="/garden-flats-for-sale"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Garden Flats
                       </a>
                </div>
            </div>
            <div class="top-item relative">
                <a href="/property-for-rent" class="menu-pad px-3 inline-block">To Rent &#9662</a>
                <div class='sub-item rounded-md whitespace-nowrap shadow-dark absolute left-2 bg-white opacity-0 invisible text-graypurpledark transition-all'>
                       <a href="/houses-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Houses
                       </a>
                       <a href="/townhouses-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Townhouses &amp; Complexes
                       </a>
                       <a href="/cottages-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Cottages
                       </a>
                       <a href="/commercial-property-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Commercial Property
                       </a>
                       <a href="/offices-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Offices
                       </a>
                       <a href="/warehouses-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Warehouses &amp; Factories
                       </a>
                       <a href="/shops-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Shops &amp; Retail Property
                       </a>
                       <a href="/flats-apartments-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Flats &amp; Apartments
                       </a>
                       <a href="/garden-flats-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Garden Flats
                       </a>
                       <a href="/land-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Land
                       </a>
                       <a href="/agricultural-land-farms-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-4">
                            &gt; Farms &amp; Agricultural Land
                       </a>
                       <a href="/rooms-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Rooms
                       </a>
                       <a href="/student-accommodation-for-rent"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Student Accommodation
                       </a>
                       <a href="/property-short-term"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           text-black pl-2.5">
                           Short Term
                       </a>
                </div>
            </div>
            <div class="top-item relative">
                <a href="/development-projects" class="menu-pad px-3 inline-block">Projects &#9662</a>
                <div class='sub-item rounded-md whitespace-nowrap shadow-dark absolute left-2 bg-white opacity-0 invisible text-graypurpledark transition-all'>
                       <a href="/development-projects"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           New Projects
                       </a>
                       <a href="/communities"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           Communities
                       </a>
                </div>
            </div>
            <div class="top-item relative">
                <a href="/market-insights" class="menu-pad px-3 inline-block">Market insights &#9662</a>
                <div class='sub-item rounded-md whitespace-nowrap shadow-dark absolute left-2 bg-white opacity-0 invisible text-graypurpledark transition-all'>
                       <a href="/property-prices"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           Property prices
                       </a>
                       <a href="/real-estate-index"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           Real estate index
                       </a>
                       <a href="/home-loan-calculator"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           Home loan calculator
                       </a>
                </div>
            </div>
            <div class="top-item relative">
                <a href="/services" class="menu-pad px-3 inline-block">Resources &#9662</a>
                <div class='sub-item rounded-md whitespace-nowrap shadow-dark absolute left-2 bg-white opacity-0 invisible text-graypurpledark transition-all'>
                       <a href="/blog"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           News
                       </a>
                       <a href="/magazine"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           Magazine
                       </a>
                       <a href="/neighborhoods"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           Neighborhoods
                       </a>
                       <a href="/showdays"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           Showdays
                       </a>
                       <a href="/request-a-property"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           Request property
                       </a>
                       <a href="/valuation"
                          
                          class="block py-2.5 hover:bg-primary hover:text-white transition-all pr-6
                           pl-2.5">
                           Valuation
                       </a>
                </div>
            </div>

</div>


                </div>
                <div class="flex float-right">



<div class="vcenterFlex float-right h-full ">

        <div class="ListPrivately top-item relative mr-2">
            <a href="/Home/PostAdvertClassifiedsRedirect" class="cursor-pointer menu-pad px-3 inline-block" style="position: relative;">
                List Privately
                <span style="position: absolute; top: 0px; left: 12px; display: inline-block; font-size: 0.65rem; font-weight: 500; color: white; background-color: #dc2626; padding: 2px 6px; border-radius: 3px; line-height: 1;">NEW</span>
            </a>
        </div>

    <div class="MyAccount top-item relative">
        <a href="javascript:void(0)" class="cursor-pointer menu-pad px-3 inline-block">
            Account &#9662
        </a>
        
        <div class="account-loading sub-item rounded-md whitespace-nowrap absolute p-4 left-2 bg-white shadow-dark text-graypurpledark opacity-0 invisible transition-all">
            <div class="lds-ellipsis mx-auto" style="bottom: 32px;"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>

        <div class="MultiCurrency top-item relative">
            <a href="#" class="menu-pad px-3 inline-block">USD &#9662</a>
            <div class='sub-item rounded-md whitespace-nowrap absolute left-2 shadow-dark bg-white text-graypurpledark opacity-0 invisible transition-all'>

                    <a href="javascript:SetCurrency('85')" class="block py-2.5 pl-2.5 pr-6 hover:bg-primary hover:text-white transition-all">USD</a>
                    <a href="javascript:SetCurrency('3642')" class="block py-2.5 pl-2.5 pr-6 hover:bg-primary hover:text-white transition-all">ZiG</a>
            </div>
        </div>
    </div>




                </div>
            </nav>
        </div>
    </header>
</div>

<div class="content">
    

</div>




<div class="hidden modal" id="login-options-modal" role="dialog" style="height: 100%">
    <div class="vcenterFlex h-full">
        <div>

            
            <div class="flex mb-8">
                <img id="login-options-icon" src="/content/overhaul/img/png/icons/login-contact-seller.png"
                     data-notify-similar="/content/overhaul/img/png/icons/login-contact-seller.png"
                     data-contact-seller="/content/overhaul/img/png/icons/login-contact-seller.png"
                     data-request-property="/content/overhaul/img/png/icons/login-contact-seller.png"
                     data-download-brochure="/content/overhaul/img/png/icons/login-contact-seller.png"
                     data-favourite-property="/content/overhaul/img/png/icons/login-fav-property.png"
                     data-post-property="/content/overhaul/img/png/icons/login-post-property.png" />
                <div id="login-options-title" class="vcenterFlex px-8 font-medium text-lg"
                     data-notify-similar="Log in to get notified of similar properties"
                     data-request-property="Log in to request a property"
                     data-contact-seller="Log in to contact the seller"
                     data-download-brochure="Log in to download brochure"
                     data-favourite-property="Log in to favourite the property"
                     data-post-property="Log in to post a property">
                    Log in to contact the seller
                </div>
            </div>

                <div class="google-login-placeholder mb-2" data-text="continue_with"></div>

<span class="btn-login btn-login-new facebook text-center cursor-pointer block mb-2 relative" style="" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.ProcessLoginSignUp.Facebook()" data-cf-modified-62bff2e665d34e70882a4d87-="">
    <img src="/content/overhaul/img/svg/logos/facebook.svg" style="width: 20px; margin-right: 4px; display: inline; position: relative; bottom: 1px;"/>
    Continue with Facebook
</span>


            <span class="btn-login btn-login-new email text-center cursor-pointer block mb-8  hover:bg-gray-50" data-switch="#login-modal" style="">
                <img src="/content/overhaul/img/svg/mod/mail.svg" class="h-6 w-6 inline-block mr-1" style="position: relative; bottom: 1px; filter: invert(39%) sepia(33%) saturate(967%) hue-rotate(314deg) brightness(113%) contrast(108%);">
                Continue with Email
            </span>

            <span class="block mb-4 mt-8 cursor-pointer text-button text-center" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowRegisterModal()" data-cf-modified-62bff2e665d34e70882a4d87-="">Don&#39;t have an account? Create one.</span>

                <label class="vcenterFlex justify-center text-sm mb-4">
                    <input type="checkbox" id="marketing_consent" name="marketing_consent" checked="checked" onchange="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.UpdateMarketingConsentCookie();" style="width: 2rem; margin-bottom: 0;" data-cf-modified-62bff2e665d34e70882a4d87-="" />
                    <span>Send me marketing communications</span>
                </label>


            <div class="text-sm text-center">
                <span class="text-graypurple">By signing up I agree to the </span>
                <a href="/info/privacy-terms" style="color:#4297ff">Terms and Conditions</a>
                <span class="text-graypurple">and</span>
                <a href="/info/privacy-terms" style="color:#4297ff">Privacy Policy</a>
            </div>
        </div>
    </div>
</div>


<div class="hidden modal" id="login-modal" role="dialog">
    <div class="vcenterFlex h-full">
        <div class="w-full">
            <div class="modal-header">Login</div>
            <div class="hidden errorMessage alert-danger"></div>
            
<form action="/Account/Login" method="post"><input name="__RequestVerificationToken" type="hidden" value="L99tnKeohVwiKqRTq9Hk5OI3OXqNLfgELpdlqqOWgwx9WTXhUtqnQkfq-GVp5HiqswsdufoupbzeGYjgGJedqC5IAQanT3CSfvjlZV2QDoE1" /><input id="Username" name="Username" placeholder="Enter Email Address" required="required" type="email" value="" /><input class="mb-4" id="Password" name="Password" placeholder="Password" required="required" type="password" value="" />    <h6 class="cursor-pointer mb-4" data-switch="#reset-password-modal">Forgot your password?</h6>
    <button class="submit" type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.ProcessLoginSignUp.Email(true);" data-text="Login" data-cf-modified-62bff2e665d34e70882a4d87-="">
        Login
    </button>
</form>
        </div>
    </div>
</div>


<div class="hidden modal" id="registration-modal" role="dialog">
    <div class="vcenterFlex h-full">
        <div>
            <div class="modal-header">Register</div>
            <div class="hidden errorMessage alert-danger"></div>
            

    <div class="google-login-placeholder mb-2" data-text="signup_with"></div>

<span class="btn-login btn-login-new facebook text-center cursor-pointer block mb-2 relative" style="" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.ProcessLoginSignUp.Facebook()" data-cf-modified-62bff2e665d34e70882a4d87-="">
    <img src="/content/overhaul/img/svg/logos/facebook.svg" style="width: 20px; margin-right: 4px; display: inline; position: relative; bottom: 1px;"/>
    Sign up with Facebook
</span>


<div class="text-center mb-2">or</div>
<form action="/Account/SignUp" class="signup-form" method="post"><input name="__RequestVerificationToken" type="hidden" value="thCnIbPNSj9IiBi8VahaJaIhLfbaiIQGM-6wesiK4V02Mg2CL1US5c8CuE1eqXQrDqdKwqeVih6KydsYLHWI3sFia_AP0XG1ypYOn8X4uYQ1" /><input data-val="true" data-val-email="The e-mail address supplied does not appear to be valid" data-val-required="Email is required" id="EmailAddress" name="EmailAddress" placeholder="E-Mail" required="required" type="email" value="" /><input id="Firstname" name="Firstname" placeholder="First Name" required="required" type="text" value="" /><input id="Surname" name="Surname" placeholder="Surname" required="required" type="text" value="" /><div class="flex phone-select country-code">


<div class="custom-country-dropdown login-signup">
    <input type="hidden" name="CountryId" value="246" />

    <div class="selected-country-code dropdown-toggle dropdown-arrow block w-full mb-2 px-4 py-2.5 border border-inputborder rounded-md text-graypurpledark"
         data-scroll-to-selected="true"
         data-id="d_246">
        +263
    </div>
    <div class="country-code-list text-sm not-featherlight hidden absolute bg-white p-0 scrollWindow z-10 border border-inputborder rounded-md text-graypurpledark cursor-pointer">
            <div id="d_0" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Code</div>
            <div id="d_246" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Zimbabwe (+263)</div>
            <div id="d_1" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Afghanistan (+93)</div>
            <div id="d_3" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Albania (+355)</div>
            <div id="d_4" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Algeria (+213)</div>
            <div id="d_5" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">American Samoa (+1-684)</div>
            <div id="d_6" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Andorra (+376)</div>
            <div id="d_7" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Angola (+244)</div>
            <div id="d_8" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Anguilla (+1-264)</div>
            <div id="d_9" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Antarctica (+672)</div>
            <div id="d_10" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Antigua and Barbuda (+1-268)</div>
            <div id="d_11" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Argentina (+54)</div>
            <div id="d_12" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Armenia (+374)</div>
            <div id="d_13" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Aruba (+297)</div>
            <div id="d_14" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Australia (+61)</div>
            <div id="d_15" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Austria (+43)</div>
            <div id="d_16" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Azerbaijan (+994)</div>
            <div id="d_17" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Bahamas (+1-242)</div>
            <div id="d_18" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Bahrain (+973)</div>
            <div id="d_19" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Bangladesh (+880)</div>
            <div id="d_20" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Barbados (+1-246)</div>
            <div id="d_21" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Belarus (+375)</div>
            <div id="d_22" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Belgium (+32)</div>
            <div id="d_23" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Belize (+501)</div>
            <div id="d_24" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Benin (+229)</div>
            <div id="d_25" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Bermuda (+1-441)</div>
            <div id="d_26" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Bhutan (+975)</div>
            <div id="d_27" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Bolivia (+591)</div>
            <div id="d_28" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Bosnia and Herzegovina (+387)</div>
            <div id="d_29" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Botswana (+267)</div>
            <div id="d_31" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Brazil (+55)</div>
            <div id="d_33" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Brunei Darussalam (+673)</div>
            <div id="d_34" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Bulgaria (+359)</div>
            <div id="d_35" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Burkina Faso (+226)</div>
            <div id="d_36" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Burundi (+257)</div>
            <div id="d_37" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Cambodia (+855)</div>
            <div id="d_38" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Cameroon (+237)</div>
            <div id="d_39" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Canada (+1)</div>
            <div id="d_40" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Cape Verde (+238)</div>
            <div id="d_41" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Cayman Islands (+1-345)</div>
            <div id="d_42" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Central African Republic (+236)</div>
            <div id="d_43" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Chad (+235)</div>
            <div id="d_44" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Chile (+56)</div>
            <div id="d_45" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">China (+86)</div>
            <div id="d_46" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Christmas Island (+53)</div>
            <div id="d_47" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Cocos (Keeling) Islands (+61)</div>
            <div id="d_48" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Colombia (+57)</div>
            <div id="d_49" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Comoros (+269)</div>
            <div id="d_50" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Congo (Brazzaville) (+242)</div>
            <div id="d_51" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Congo (Kinshasa) (+243)</div>
            <div id="d_52" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Cook Islands (+682)</div>
            <div id="d_53" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Costa Rica (+506)</div>
            <div id="d_54" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">C&#244;te d`Ivoire (+225)</div>
            <div id="d_55" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Croatia (+385)</div>
            <div id="d_56" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Cuba (+53)</div>
            <div id="d_57" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Cyprus (+357)</div>
            <div id="d_58" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Czech Republic (+420)</div>
            <div id="d_59" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Denmark (+45)</div>
            <div id="d_60" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Djibouti (+253)</div>
            <div id="d_61" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Dominica (+1-767)</div>
            <div id="d_62" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Dominican Republic (+1-809)</div>
            <div id="d_63" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Ecuador (+593)</div>
            <div id="d_64" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Egypt (+20)</div>
            <div id="d_65" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">El Salvador (+503)</div>
            <div id="d_66" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Equatorial Guinea (+240)</div>
            <div id="d_67" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Eritrea (+291)</div>
            <div id="d_68" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Estonia (+372)</div>
            <div id="d_69" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Ethiopia (+251)</div>
            <div id="d_70" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Falkland Islands (+500)</div>
            <div id="d_71" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Faroe Islands (+298)</div>
            <div id="d_72" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Fiji (+679)</div>
            <div id="d_73" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Finland (+358)</div>
            <div id="d_74" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">France (+33)</div>
            <div id="d_75" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">French Guiana (+594)</div>
            <div id="d_76" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">French Polynesia (+689)</div>
            <div id="d_78" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Gabon (+241)</div>
            <div id="d_79" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Gambia (+220)</div>
            <div id="d_80" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Georgia (+995)</div>
            <div id="d_81" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Germany (+49)</div>
            <div id="d_82" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Ghana (+233)</div>
            <div id="d_83" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Gibraltar (+350)</div>
            <div id="d_84" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Greece (+30)</div>
            <div id="d_85" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Greenland (+299)</div>
            <div id="d_86" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Grenada (+1-473)</div>
            <div id="d_87" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Guadeloupe (+590)</div>
            <div id="d_88" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Guam (+1-671)</div>
            <div id="d_89" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Guatemala (+502)</div>
            <div id="d_91" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Guinea (+224)</div>
            <div id="d_92" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Guinea-Bissau (+245)</div>
            <div id="d_93" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Guyana (+592)</div>
            <div id="d_94" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Haiti (+509)</div>
            <div id="d_96" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Honduras (+504)</div>
            <div id="d_97" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Hong Kong (+852)</div>
            <div id="d_98" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Hungary (+36)</div>
            <div id="d_99" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Iceland (+354)</div>
            <div id="d_100" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">India (+91)</div>
            <div id="d_101" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Indonesia (+62)</div>
            <div id="d_102" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Iran (+98)</div>
            <div id="d_103" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Iraq (+964)</div>
            <div id="d_104" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Ireland (+353)</div>
            <div id="d_106" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Israel (+972)</div>
            <div id="d_107" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Italy (+39)</div>
            <div id="d_108" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Jamaica (+1-876)</div>
            <div id="d_109" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Japan (+81)</div>
            <div id="d_111" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Jordan (+962)</div>
            <div id="d_112" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Kazakhstan (+7)</div>
            <div id="d_113" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Kenya (+254)</div>
            <div id="d_114" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Kiribati (+686)</div>
            <div id="d_115" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Korea, North (+850)</div>
            <div id="d_116" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Korea, South (+82)</div>
            <div id="d_117" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Kuwait (+965)</div>
            <div id="d_118" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Kyrgyzstan (+996)</div>
            <div id="d_119" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Laos (+856)</div>
            <div id="d_120" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Latvia (+371)</div>
            <div id="d_121" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Lebanon (+961)</div>
            <div id="d_122" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Lesotho (+266)</div>
            <div id="d_123" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Liberia (+231)</div>
            <div id="d_124" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Libya (+218)</div>
            <div id="d_125" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Liechtenstein (+423)</div>
            <div id="d_126" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Lithuania (+370)</div>
            <div id="d_127" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Luxembourg (+352)</div>
            <div id="d_128" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Macau (+853)</div>
            <div id="d_129" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Macedonia (+389)</div>
            <div id="d_130" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Madagascar (+261)</div>
            <div id="d_131" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Malawi (+265)</div>
            <div id="d_132" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Malaysia (+60)</div>
            <div id="d_133" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Maldives (+960)</div>
            <div id="d_134" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Mali (+223)</div>
            <div id="d_135" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Malta (+356)</div>
            <div id="d_136" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Marshall Islands (+692)</div>
            <div id="d_137" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Martinique (+596)</div>
            <div id="d_138" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Mauritania (+222)</div>
            <div id="d_139" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Mauritius (+230)</div>
            <div id="d_140" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Mayotte (+269)</div>
            <div id="d_141" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Mexico (+52)</div>
            <div id="d_142" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Micronesia (+691)</div>
            <div id="d_143" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Moldova (+373)</div>
            <div id="d_144" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Monaco (+377)</div>
            <div id="d_145" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Mongolia (+976)</div>
            <div id="d_147" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Montserrat (+1-664)</div>
            <div id="d_148" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Morocco (+212)</div>
            <div id="d_149" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Mozambique (+258)</div>
            <div id="d_150" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Myanmar (+95)</div>
            <div id="d_151" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Namibia (+264)</div>
            <div id="d_152" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Nauru (+674)</div>
            <div id="d_153" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Nepal (+977)</div>
            <div id="d_154" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Netherlands (+31)</div>
            <div id="d_155" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Netherlands Antilles (+599)</div>
            <div id="d_156" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">New Caledonia (+687)</div>
            <div id="d_157" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">New Zealand (+64)</div>
            <div id="d_158" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Nicaragua (+505)</div>
            <div id="d_159" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Niger (+227)</div>
            <div id="d_160" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Nigeria (+234)</div>
            <div id="d_161" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Niue (+683)</div>
            <div id="d_162" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Norfolk Island (+672)</div>
            <div id="d_163" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Northern Mariana Islands (+1-670)</div>
            <div id="d_164" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Norway (+47)</div>
            <div id="d_165" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Oman (+968)</div>
            <div id="d_166" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Pakistan (+92)</div>
            <div id="d_167" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Palau (+680)</div>
            <div id="d_168" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Palestine (+970)</div>
            <div id="d_169" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Panama (+507)</div>
            <div id="d_170" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Papua New Guinea (+675)</div>
            <div id="d_171" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Paraguay (+595)</div>
            <div id="d_172" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Peru (+51)</div>
            <div id="d_173" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Philippines (+63)</div>
            <div id="d_175" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Poland (+48)</div>
            <div id="d_176" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Portugal (+351)</div>
            <div id="d_178" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Qatar (+974)</div>
            <div id="d_179" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Reunion (+262)</div>
            <div id="d_180" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Romania (+40)</div>
            <div id="d_181" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Russian Federation (+7)</div>
            <div id="d_182" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Rwanda (+250)</div>
            <div id="d_190" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Samoa (+685)</div>
            <div id="d_191" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">San Marino (+378)</div>
            <div id="d_192" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Sao Tome and Principe (+239)</div>
            <div id="d_193" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Saudi Arabia (+966)</div>
            <div id="d_194" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Senegal (+221)</div>
            <div id="d_196" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Seychelles (+248)</div>
            <div id="d_197" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Sierra Leone (+232)</div>
            <div id="d_198" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Singapore (+65)</div>
            <div id="d_199" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Slovakia (+421)</div>
            <div id="d_200" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Slovenia (+386)</div>
            <div id="d_201" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Solomon Islands (+677)</div>
            <div id="d_202" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Somalia (+252)</div>
            <div id="d_203" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">South Africa (+27)</div>
            <div id="d_205" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Spain (+34)</div>
            <div id="d_206" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Sri Lanka (+94)</div>
            <div id="d_184" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">St. Helena (+290)</div>
            <div id="d_185" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">St. Kitts and Nevis (+1-869)</div>
            <div id="d_186" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">St. Lucia (+1-758)</div>
            <div id="d_188" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">St. Pierre and Miquelon (+508)</div>
            <div id="d_189" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">St. Vincent &amp; The Grenadines (+1-784)</div>
            <div id="d_207" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Sudan (+249)</div>
            <div id="d_208" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Suriname (+597)</div>
            <div id="d_210" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Swaziland (+268)</div>
            <div id="d_211" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Sweden (+46)</div>
            <div id="d_212" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Switzerland (+41)</div>
            <div id="d_213" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Syria (+963)</div>
            <div id="d_214" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Taiwan (+886)</div>
            <div id="d_215" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Tajikistan (+992)</div>
            <div id="d_216" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Tanzania (+255)</div>
            <div id="d_217" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Thailand (+66)</div>
            <div id="d_220" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Tokelau (+690)</div>
            <div id="d_221" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Tonga (+676)</div>
            <div id="d_222" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Trinidad and Tobago (+1-868)</div>
            <div id="d_223" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Tunisia (+216)</div>
            <div id="d_224" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Turkey (+90)</div>
            <div id="d_225" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Turkmenistan (+993)</div>
            <div id="d_226" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Turks and Caicos Islands (+1-649)</div>
            <div id="d_227" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Tuvalu (+688)</div>
            <div id="d_228" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Uganda (+256)</div>
            <div id="d_229" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Ukraine (+380)</div>
            <div id="d_230" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">United Arab Emirates (+971)</div>
            <div id="d_231" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">United Kingdom (+44)</div>
            <div id="d_233" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">United States of America (+1)</div>
            <div id="d_234" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Uruguay (+598)</div>
            <div id="d_235" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Uzbekistan (+998)</div>
            <div id="d_236" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Vanuatu (+678)</div>
            <div id="d_237" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Vatican City (+418)</div>
            <div id="d_238" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Venezuela (+58)</div>
            <div id="d_239" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Vietnam (+84)</div>
            <div id="d_241" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Virgin Islands, U.S. (+1-284)</div>
            <div id="d_242" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Wallis and Futuna Islands (+681)</div>
            <div id="d_244" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Yemen (+967)</div>
            <div id="d_245" class="p-2 border-b border-inputborder hover:text-white hover:bg-primary">Zambia (+260)</div>
    </div>
</div>
    <input id="ContactNumber" name="ContactNumber" type="number" oninput="if (!window.__cfRLUnblockHandlers) return false; if(this.value.length > 12) this.value = this.value.slice(0,12)" placeholder="Phone" required="required" value="" tabindex="0" data-parsley-minlength="7" data-parsley-maxlength="12" data-parsley-minlength-message="Contact number must be at least 7 digits" data-parsley-maxlength-message="Contact number cannot exceed 12 digits" data-parsley-errors-container="#phone-error-container" data-cf-modified-62bff2e665d34e70882a4d87-="" />  
</div>
<div id="phone-error-container"></div>
<input data-val="true" data-val-required="Password is required" id="Password" name="Password" placeholder="Password" required="required" type="password" value="" /><input data-val="true" data-val-equalto="Your password and confirmation do not match" data-val-equalto-other="*.Password" data-val-required="Password is required" id="ConfirmPassword" name="ConfirmPassword" placeholder="Confirm Password" required="required" type="password" value="" /><input id="returnurl" name="returnurl" type="hidden" value="" /><input id="params" name="params" type="hidden" value="" />    <div id="register-form-recaptcha" class="recaptcha-container" data-action="register"></div>
        <label class="vcenterFlex text-sm mb-4">
            <input type="checkbox" id="marketing_consent" name="marketing_consent" checked="checked" onchange="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.UpdateMarketingConsentCookie();" style="width: 2rem; margin-bottom: 0;" data-cf-modified-62bff2e665d34e70882a4d87-="" />
            <span>Send me marketing communications</span>
        </label>
    <button type="button" class="submit" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.ProcessLoginSignUp.Email(false);" data-text="Create an Account" data-cf-modified-62bff2e665d34e70882a4d87-="">Create an Account</button>
</form>

        </div>
    </div>
</div>


<div class="hidden modal" id="reset-password-modal" role="dialog">
    <div class="vcenterFlex h-full">
        <div>
            <div class="modal-header">Reset Password</div>
            <form action="/Account/ResetPassword" class="loadingspinner" id="resetpwdform" method="post"><input name="__RequestVerificationToken" type="hidden" value="Z41M8ApJl9zo1gSTe3D9YeGhC-c7RJmvPLb2zSqEZQD2r3YhjGXqdmgqn7o_yB4RrmRMxQXmXKTOcWI5tm8MLEtwiQRB_ANUmpBvlG2I9Lc1" />    <div class="mb-2">Enter your email address and you will receive an email with a link to reset your password.</div>
<input data-val="true" data-val-required="You didn&#39;t enter an e-mail address. This must be the address you use to log in." id="Email" name="Email" placeholder="E-Mail" required="required" type="email" value="" />    <button id="resetBtn" class="submit" type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; resetPassword(this);" data-cf-modified-62bff2e665d34e70882a4d87-="">Reset Password</button>
</form>
        </div>
    </div>
</div>


<div class="hidden modal" id="waiting-modal" role="dialog">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
</div>



<div class="hidden modal" id="general-contact-modal" role="dialog">
    <form class="mx-auto text-secondary" style="max-width: 304px;" action="" method="POST">
        <input type="text" name="firstname" required="required" placeholder="First Name" class="w-full border border-gray-200 mb-3 px-4 py-3" />
        <input type="text" name="lastname" required="required" placeholder="Surname" class="w-full border border-gray-200 mb-3 px-4 py-3" />
        <input type="email" name="email" required="required" placeholder="E-Mail" class="w-full border border-gray-200 mb-3 px-4 py-3" />
        <div class="flex country-code phone-select countrycodemobile">
        </div>
        <textarea name="message" required="required" placeholder="Message" rows="5" class="NoSubmit w-full border border-gray-200 mb-3 px-4 py-3 rounded-md"></textarea>
        <input type="hidden" name="siteId" id="siteId" value="0" />
        <div id="contact-form-general-recaptcha" class="recaptcha-container" data-action="contact_form_general"></div>
        
        <button type="button" class="MoreInfo w-full text-white bg-button px-4 py-3">
            <span class="buttonText">Send</span>
            <div class="buttonLoading hidden">
                <div class="lds-ellipsis relative light" style="top: -33px;"><div></div><div></div><div></div><div></div></div>
            </div>
        </button>
    </form>
</div>


<div class="modal hidden" id="newsletter-modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-body">
                <div class="container-fluid">
                    
<div class="mx-auto text-center p-4" style="">
    <img src="/content/overhaul/img/png/letter 1.png" class="mx-auto mb-4" />
    <div class="mb-6">
        Subscribe to our newsletter
    </div>
        <div class="newsletter-form blog-newsletter-form md:ml-0 px-0 md:text-center">
            <div class="flex md:block gap-2 w-full">
                <input type="email" placeholder="Enter email address" value="" class="blog-newsletter-email px-3 py-3 md:py-2 border rounded-md flex-1 md:flex-none min-w-0 md:w-full md:mb-3" style="font-size: 15px !important;" />
                <button type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Newsletter.SubscribeBlog(this)" class="bg-secondary text-white px-5 md:px-6 py-3 md:py-2 rounded-md whitespace-nowrap md:w-auto md:mt-4" style="font-size: 15px !important;" data-cf-modified-62bff2e665d34e70882a4d87-="">Subscribe</button>
            </div>
        </div>
</div>

                </div>
            </div>
            <div class="modal-footer"></div>
        </div>
    </div>
</div>


<div class="hidden modal" id="report-listing" role="dialog" style="height: 50%">
    <form class="mx-auto text-secondary" style="max-width: 304px;" action="" method="POST">
        <div>
            <label class="text-gray-400">Report Listing</label>
            <select id="selProblem" name="problem" required="required">
                <option value="">Select Reason</option>
                <option value="Property is no longer available">Property is no longer available</option>
                <option value="Agent didn&#39;t contact me">Agent didn&#39;t contact me</option>
                <option value="Incorrect images">Incorrect images</option>
                <option value="Fraud">Fraud</option>
            </select>
        </div>
        <div>
            <textarea id="txtComment" name="comment" placeholder="Comment" rows="4" style="border:solid 1px;" class="w-full border border-gray-200 mb-3 px-4 py-3 rounded-md"></textarea>
        </div>
        <input type="hidden" name="mandateId" id="mandateId" />
        <div>
            <button id="btnReportListing" type="button" class="MoreInfo w-full text-white bg-button px-4 py-3">
                <span class="buttonText">Send</span>
                <div class="buttonLoading hidden">
                    <div class="lds-ellipsis relative light" style="top: -33px;"><div></div><div></div><div></div><div></div></div>
                </div>
            </button>
        </div>
    </form>
</div>

    

    <style>
        .search-map-container, .search-map-loading {
            display: none;
        }
    </style>



<style>
    .select2.select2-container {
        top: -6px;
    }

    input.select2-search__field {
        height: 20px;
        top: 2px;
        position: relative;
    }

    .select2-selection__choice {
        position: relative;
        top: 0px;
    }

    .select2-selection.select2-selection--multiple {
        height: 32px;
    }

    .select2-selection__rendered {
        height: 32px;
    }

    .select2-dropdown.select2-dropdown--below {
        top: 5px;
    }
</style>

<div class="searchFiltersMobile grid grid-cols-2 grid-rows-1 border-b border-inputborder h-14 mb-4 xl:hidden">
    <div class="vcenterFlex dropdown-toggle border-r border-inputborder pl-4" data-target=".searchFilters" data-noclose="true">
        <img src="/content/overhaul/img/svg/mod/adjust.svg" class="w-7 h-7 mr-4" loading="eager" />
        <span>Change filters</span>
    </div>
    <a href="/request-a-property" class="vcenterFlex pl-4">
        <img src="/content/overhaul/img/svg/mod/star.svg" class="w-7 h-7 mr-4" loading="eager" />
        <span>Requests</span>
    </a>
</div>

<div class="container hidden xl:block searchFilters xl:w-[1100px]">
    <form action="/search" id="searchResultForm" class="flex flex-col xl:flex-row">
        <input type="hidden" name="filterversion" value="new" />
        <input type="hidden" id="unfilterfeature" name="unfilterfeature" value="false" />
        

        <div id="mandateType" class="cursor-pointer">
            <input type="hidden" name="type_id" id="type_id" value="1" onchange="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.UpdateCategoryList(this.value)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
            <div style="background-position:93%;" data-match-width-mobile="true" class="dropdown-toggle dropdown-arrow vcenterFlex w-full rounded-md border border-inputborder p-4 mb-2 xl:mb-1.5 h-10 overflow-hidden">For Sale</div>
            <ul class="hidden absolute z-20 bg-white border border-inputborder rounded-md" data-select="type_id">
                    <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="1">For Sale</li>
                    <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="2">For Rent</li>
                    <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="3">Short Term</li>
            </ul>
        </div>

        
        <div id="search-location-filter"
             class="multiselect-container rounded-md border border-inputborder pt-2 px-2 mb-2 xl:mb-1.5 h-10 xl:ml-2 relative"
             data-pre-selected=""
             data-type="location">
            <span class="ajax-placeholder text-graypurpledark absolute w-full h-full top-0 left-0" style="padding-left:17px; padding-top:7px;">Enter a location</span>
            <div class="hidden lds-ellipsis select small absolute" style="top:0; right: 40px;"><div></div><div></div><div></div><div></div></div>
            <select class="invisible" name="Locations" aria-label="Location" multiple="multiple" size=1 style="width: 100%;"></select>
        </div>

        
<div id="categories" class="Categories cursor-pointer xl:w-1/6 xl:ml-2">
    <div style="background-position:93%;" data-match-width-mobile="true" class="dropdown-toggle dropdown-arrow vcenterFlex w-full rounded-md border border-inputborder p-4 mb-2 xl:mb-1.5 h-10 overflow-hidden">Type</div>
        <div class="multiselect-categories category-dropdown-items hidden absolute z-40 bg-white border border-inputborder rounded-md px-4 pt-4">
                <label for="14" class="checkboxItem ">
                    Houses (2851)
                    <input type="checkbox" value="14" name="14" id="14">
                    <span class="checkmark"></span>
                </label>
                <label for="22" class="checkboxItem text-graypurpledark">
                    &nbsp;Townhouses & Complexes (418)
                    <input type="checkbox" value="22" name="22" id="22">
                    <span class="checkmark"></span>
                </label>
                <label for="17" class="checkboxItem ">
                    Land (2612)
                    <input type="checkbox" value="17" name="17" id="17">
                    <span class="checkmark"></span>
                </label>
                <label for="28" class="checkboxItem text-graypurpledark">
                    &nbsp;Stands & Residential Land (1570)
                    <input type="checkbox" value="28" name="28" id="28">
                    <span class="checkmark"></span>
                </label>
                <label for="30" class="checkboxItem text-graypurpledark">
                    &nbsp;Commercial & Industrial Land (368)
                    <input type="checkbox" value="30" name="30" id="30">
                    <span class="checkmark"></span>
                </label>
                <label for="29" class="checkboxItem text-graypurpledark">
                    &nbsp;Farms & Agricultural Land (264)
                    <input type="checkbox" value="29" name="29" id="29">
                    <span class="checkmark"></span>
                </label>
                <label for="13" class="checkboxItem ">
                    Commercial Property (897)
                    <input type="checkbox" value="13" name="13" id="13">
                    <span class="checkmark"></span>
                </label>
                <label for="19" class="checkboxItem text-graypurpledark">
                    &nbsp;Warehouses & Factories (369)
                    <input type="checkbox" value="19" name="19" id="19">
                    <span class="checkmark"></span>
                </label>
                <label for="32" class="checkboxItem text-graypurpledark">
                    &nbsp;Shops & Retail Property (170)
                    <input type="checkbox" value="32" name="32" id="32">
                    <span class="checkmark"></span>
                </label>
                <label for="31" class="checkboxItem text-graypurpledark">
                    &nbsp;Offices (91)
                    <input type="checkbox" value="31" name="31" id="31">
                    <span class="checkmark"></span>
                </label>
                <label for="26" class="checkboxItem text-graypurpledark">
                    &nbsp;Hotels & Lodges (74)
                    <input type="checkbox" value="26" name="26" id="26">
                    <span class="checkmark"></span>
                </label>
                <label for="16" class="checkboxItem ">
                    Flats & Apartments (606)
                    <input type="checkbox" value="16" name="16" id="16">
                    <span class="checkmark"></span>
                </label>
                <label for="34" class="checkboxItem text-graypurpledark">
                    &nbsp;Garden Flats (153)
                    <input type="checkbox" value="34" name="34" id="34">
                    <span class="checkmark"></span>
                </label>
        </div>
        <input type="hidden" name="category" id="category" value="28" />
</div>


        

        <div class="md:hidden">
            <input type="hidden" id="maxSliderBudget" value="10000000" />

            <input id="minprice" name="minprice" type="text" inputmode="numeric" placeholder="Min. Price" value=""
                   class="w-full rounded-md border border-inputborder p-4 mb-2 xl:mb-1.5 h-10 overflow-hidden" />
            <input id="maxprice" name="maxprice" type="text" inputmode="numeric" placeholder="Max. Price" value=""
                   class="w-full rounded-md border border-inputborder p-4 mb-2 xl:mb-1.5 h-10 overflow-hidden" />
        </div>

        <div class="Budget hidden md:block relative xl:ml-2">
            <div style="background-position:93%;" class="dropdown-toggle dropdown-arrow vcenterFlex w-full rounded-md border border-inputborder p-4 mb-2 xl:mb-1.5 h-10">Price</div>
            <div class="w-80 bg-white border border-inputborder rounded-md absolute text-gray-400 p-2 z-20 hidden">
                <div class="flex w-full gap-2">
                    <input type="text" id="desktop-minprice" inputmode="numeric"
                           placeholder="Min. Price"
                           value=""
                           class="w-full rounded-md border border-inputborder p-4 h-10 overflow-hidden" />
                    <input type="text" id="desktop-maxprice" inputmode="numeric"
                           placeholder="Max. Price"
                           value=""
                           class="w-full rounded-md border border-inputborder p-4 h-10 overflow-hidden" />
                </div>

            </div>
        </div>

        
        <div id="moreFilters" style="background-position:93%;"
             class="dropdown-toggle dropdown-arrow flex rounded-md border border-inputborder h-10 text-left mb-2 pl-4 vcenterFlex xl:ml-2"
             data-hide-body-overflow-mobile="true">More filters</div>
        <div id="moreFiltersModal" class="scrollWindow hidden bg-white border border-inputborder shadow z-40 absolute xl:w-1/2 xl:w-1/3 2xl:w-1/4">

            
            <div id="moreFiltersCloseIcon" class="md:hidden">✕</div>

            <div class="text-lg font-medium mb-4 w-full">More filters</div>
            
            <div class="grid grid-cols-4 gap-4">
                <div id="bedrooms" class="col-span-2 cursor-pointer">
                    <input type="hidden" name="minbeds" id="minbeds" value="" />
                    <div class="dropdown-toggle dropdown-arrow vcenterFlex w-full rounded-md border border-inputborder p-4 mb-2 h-10" data-match-width="true" data-noclose-parent="true">Bedrooms</div>
                    <ul class="hidden absolute z-10 bg-white border border-inputborder rounded-md" data-select="minbeds">
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="">Any</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="1">1 Bedroom</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="2">2 Bedrooms</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="3">3 Bedrooms</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="4">4 Bedrooms</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="5">5+ Bedrooms</li>
                    </ul>
                </div>
                <div id="bathrooms_all" class="col-span-2 cursor-pointer">
                    <input type="hidden" name="bathrooms" id="bathrooms" value="" />
                    <div class="dropdown-toggle dropdown-arrow vcenterFlex w-full rounded-md border border-inputborder p-4 mb-2 h-10" data-match-width="true" data-noclose-parent="true">Bathrooms</div>
                    <ul class="hidden absolute z-10 bg-white border border-inputborder rounded-md" data-select="bathrooms">
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="">Any</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="1">1 Bathroom</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="2">2 Bathrooms</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="3">3 Bathrooms</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="4">4 Bathrooms</li>
                        <li class="px-4 py-2 transition-all hover:bg-primary hover:text-white" value="5">5+ Bathrooms</li>
                    </ul>
                </div>
            </div>
            
            <div class="grid grid-cols-2 grid-rows-1 gap-4 mb-2">
                <input type="text" class="w-full rounded-md border border-inputborder p-4 h-10" name="propertyref_box" id="propertyref_box" value="" placeholder="Reference" />
                <div class="grid grid-cols-6">
                    <input type="text" class="col-span-5 rounded-l-md rounded-r-none w-full rounded-md border border-inputborder p-4 h-10" id="size" name="size" value="" inputmode="numeric" placeholder="Min. Size" />
                    <div class="vcenterFlex col-span-1 border border-l-0 border-inputborder rounded-r-md h-10 justify-center">m²</div>
                </div>
            </div>


                <div id="search-agency-filter"
                     class="multiselect-container w-full rounded-md border border-inputborder pt-2 px-2 mb-2 h-10 relative"
                     data-pre-selected=""
                     data-type="agency">
                    <span class="ajax-placeholder text-graypurpledark absolute w-full h-full top-0 left-0" style="padding-left:17px; padding-top:7px;">Enter an agency</span>
                    <div class="hidden lds-ellipsis select small absolute" style="top:0; right: 40px;"><div></div><div></div><div></div><div></div></div>
                    <select class="invisible" name="site_ids" aria-label="Agency" multiple="multiple" size=1 style="width: 100%;"></select>
                </div>
            <div id="search-neighborhood-filter"
                 class=" multiselect-container w-full rounded-md border border-inputborder pt-2 px-2 mb-2 h-10 relative"
                 data-pre-selected=""
                 data-type="neighborhood">
                <span class="ajax-placeholder text-graypurpledark absolute w-full h-full top-0 left-0" style="padding-left:17px; padding-top:7px;">Enter a community</span>
                <div class="hidden lds-ellipsis select small absolute" style="top:0; right: 40px;"><div></div><div></div><div></div><div></div></div>
                <select class="invisible" name="neighborhood_ids" aria-label="Agency" multiple="multiple" size=1 style="width: 100%;"></select>
            </div>

            
            <div id="search-development-filter"
                 class=" multiselect-container w-full rounded-md border border-inputborder pt-2 px-2 mb-2 h-10 relative"
                 data-pre-selected=""
                 data-type="development">
                <span class="ajax-placeholder text-graypurpledark absolute w-full h-full top-0 left-0" style="padding-left:17px; padding-top:7px;">Enter a development</span>
                <div class="hidden lds-ellipsis select small absolute" style="top:0; right: 40px;"><div></div><div></div><div></div><div></div></div>
                <select class="invisible" name="development_ids" aria-label="Development" multiple="multiple" size=1 style="width: 100%;"></select>
            </div>

            
            <input type="text" class="rounded-l-md w-full rounded-md border border-inputborder p-4 h-10 mb-6" id="keywords" name="keywords" placeholder="Keywords" />
            
            
            <input type="hidden" name="amenities" id="amenities" value="" />

            
            <div class="text-lg font-medium mb-4 w-full hidden">Important Features</div>
            <div class="col-count-2 mb-4 ImportantFeatures hidden">
                                    <label for="onshow" class="checkboxItem">
                        Showdays
                        <input type="checkbox" name="onshow" id="onshow" >
                        <span class="checkmark"></span>
                    </label>
            </div>

            
            <div class="text-lg font-medium mb-4 w-full ">General Features</div>
            <div class="col-count-2 mb-4 GeneralFeatures ">
                    <label for="1049" class="checkboxItem">
                        Access Control
                        <input type="checkbox" value="1049" name="1049" id="1049">
                        <span class="checkmark"></span>
                    </label>
                    <label for="325345" class="checkboxItem">
                        Gravel Roads
                        <input type="checkbox" value="325345" name="325345" id="325345">
                        <span class="checkmark"></span>
                    </label>
                    <label for="10000005" class="checkboxItem">
                        Main Road Frontage
                        <input type="checkbox" value="10000005" name="10000005" id="10000005">
                        <span class="checkmark"></span>
                    </label>
                    <label for="847" class="checkboxItem">
                        Municipal Water
                        <input type="checkbox" value="847" name="847" id="847">
                        <span class="checkmark"></span>
                    </label>
                    <label for="453245" class="checkboxItem">
                        Sewer System
                        <input type="checkbox" value="453245" name="453245" id="453245">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1060" class="checkboxItem">
                        Subdivision Potential
                        <input type="checkbox" value="1060" name="1060" id="1060">
                        <span class="checkmark"></span>
                    </label>
                    <label for="43254" class="checkboxItem">
                        Tarred Roads
                        <input type="checkbox" value="43254" name="43254" id="43254">
                        <span class="checkmark"></span>
                    </label>
            </div>

            
            <div class="text-lg font-medium mb-4 w-full hidden">External Features</div>
            <div class="col-count-2 mb-4 ExternalFeatures hidden">
            </div>

            
            <div class="text-lg font-medium mb-4 w-full hidden">Internal Features</div>
            <div class="col-count-2 mb-4 InternalFeatures hidden">
            </div>
            <button class="SearchButton w-full border-button bg-button text-white h-10 md:hidden" type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.ReplaceWithLoading(this, 'light', 'bottom: 3px')" style="margin: 1rem 0;" data-cf-modified-62bff2e665d34e70882a4d87-="">
                Apply Filters
            </button>
        </div>
            <input type="hidden" value="" id="sortby" name="sortby" />

            
            <div class="grid grid-rows-1 grid-cols-2 gap-4 xl:block mb-4 xl:ml-2 xl:w-1/6 xl:mb-2">
                <a href="/request-a-property" class="w-full rounded-md border border-secondary px-4 pb-1 pt-1.5 text-center text-secondary xl:hidden">Save Search</a>
                <button class="SearchButton w-full border-button bg-button text-white mb-0 h-10" type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.ReplaceWithLoading(this, 'light', 'bottom: 3px')" data-cf-modified-62bff2e665d34e70882a4d87-="">
                    <span>Search</span>
                </button>
            </div>
        </form>
    </div>

    <div class="filter-seperator hidden xl:block w-full border-b border-inputborder mt-1 mb-3"></div>



<div class="search-map-container relative">
    <div class="search-map ga-map w-full h-full z-10"></div>
    <div class="hide-map absolute z-20 cursor-pointer hidden">✕</div>
</div>
<div class="search-map-loading absolute z-0 text-center">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
</div>

<input type="hidden" value="all regions" id="LocationStr" />
<input type="hidden" value="stands &amp; residential land" id="CategoryStr" />

<div class="container searchContainer xl:w-[1100px]">

    

<ol itemscope itemtype="https://schema.org/BreadcrumbList" class="breadcrumb mb-1 whitespace-nowrap overflow-x-scroll scrollbar-hidden">

        <li class="inline-block text-graypurpledark" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a itemprop="item" href="/land-for-sale">
                <span itemprop="name">Land for Sale </span>
            </a>
            <meta itemprop="position" content="1" />
        </li>
        <li class="inline-block ml-1 text-secondary" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a itemprop="item" href="/residential-land-stands-for-sale">
                <span itemprop="name">Stands &amp; Residential Land</span>
            </a>
            <meta itemprop="position" content="2" />
        </li>
</ol>
    
    <h1 class="mb-3 md:mb-2">Stands &amp; Residential Land for Sale in Zimbabwe</h1>

    <div class="xl:flex">
        <div class="relative xl:w-[788px]">
                <div class="relative flex justify-between mb-3 md:mb-4">

                    
                    <div class="result-description vcenterFlex text-graypurpledark text-sm md:text-base">
                        1 - 20 of 1544 properties
                    </div>

                    <div class="flex">

                            <div class="hidden xl:block">
                                <button onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.CreateEmailAlert('search')" type="button" class="btn w-full xl:w-auto whitespace-nowrap mr-2" data-cf-modified-62bff2e665d34e70882a4d87-="">Get email alerts</button>
                            </div>
                        <div class="SortbyFilter">
                            <button type="button" class="dropdown-toggle dropdown-arrow pr-12 w-full xl:w-auto whitespace-nowrap overflow-hidden">Default</button>
                            <ul class="hidden bg-white absolute top-12 right-0 z-30 border border-inputborder rounded-md cursor-pointer ResultOrderOptions" id="resultOrders">
                                    <li data-value="random" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Default</li>
                                    <li data-value="pricedesc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Price (Highest First)</li>
                                    <li data-value="priceasc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Price (Lowest First)</li>
                                    <li data-value="per_pricedesc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Price (Highest First) /m2</li>
                                    <li data-value="per_priceasc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Price (Lowest First) /m2</li>
                                    <li data-value="listeddesc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Listed (Newest First)</li>
                                    <li data-value="listedasc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Listed (Oldest First)</li>
                                    <li data-value="landasc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Land Size (Smallest)</li>
                                    <li data-value="landdesc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Land Size (Highest)</li>
                                    <li data-value="buildingasc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Building Area (Smallest)</li>
                                    <li data-value="buildingdesc" class="py-2 px-3 transition-all hover:text-white hover:bg-primary hover:cursor-pointer">Building Area (Highest)</li>
                            </ul>
                        </div>
                    </div>
                </div>
    <div class="mb-4 flex flex-col md:flex-row">
        <div class="py-1 mb-2 md:mb-0 xl:w-[110px]" style="color: #566;">Quick Filters:</div>
        <div class="quick-filter-options whitespace-nowrap overflow-x-scroll scrollbar-hidden xl:w-[688px]">
                <a href="/residential-land-stands-for-sale/harare" class="inline-block px-3 py-1 bg-graypurpledark rounded-md mr-2" style="background: #E7EAF1; color: #556;">Harare</a>
                <a href="/residential-land-stands-for-sale/mashonaland-west" class="inline-block px-3 py-1 bg-graypurpledark rounded-md mr-2" style="background: #E7EAF1; color: #556;">Mashonaland West</a>
                <a href="/residential-land-stands-for-sale/mashonaland-east" class="inline-block px-3 py-1 bg-graypurpledark rounded-md mr-2" style="background: #E7EAF1; color: #556;">Mashonaland East</a>
                <a href="/residential-land-stands-for-sale/bulawayo" class="inline-block px-3 py-1 bg-graypurpledark rounded-md mr-2" style="background: #E7EAF1; color: #556;">Bulawayo</a>
        </div>
    </div>

                    <div class="mt-1 mb-3">
    <div>
        <div id="advert-carousel-SearchTop" class="swiper-container swiper-advert-carousel-SearchTop" data-autoplay="true" data-carousel="banner" data-value="advert-carousel-SearchTop" data-slidesperview="1" data-slidesperview-md="1" data-slidesperview-lg="1" data-slidesperview-xl="1" data-slidesperview-xxl="1">
            <div class="swiper-wrapper">
                    <a href="https://www.property.co.zw/magazine/Directory-2026" class="swiper-slide ga-parent block" target="_blank">

                        
                        <img alt="Directory 2026"
                                loading="eager"
                                class="ga-banner-click ga-banner-view desktop hidden md:block mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Directory 2026" data-position="Search Page: Top"
                                src="/uploadedfiles/37/57/96/3757961e-adad-4df6-a7aa-8bf2f6fc3794.jpg"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Directory 2026"
                                loading="eager"
                                class="ga-banner-click ga-banner-view mobile md:hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Directory 2026" data-position="Search Page: Top"
                                src="/uploadedfiles/43/ab/7a/43ab7a86-de3a-4211-a984-0ccc2bcb650a.jpg"
                                style="width: 100%; min-height: 123px;">
                    </a>
                    <a href="https://www.property.co.zw/estate-agents/pocock-and-co" class="swiper-slide ga-parent block" target="_blank">

                        
                        <img alt="Pocock"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view desktop hidden md:block mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Pocock" data-position="Search Page: Top"
                                data-src="/uploadedfiles/6a/dd/cc/6addcc91-d045-48f1-984e-e2f9571425f8.jpg"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Pocock"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view mobile md:hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Pocock" data-position="Search Page: Top"
                                data-src="/uploadedfiles/a2/98/0c/a2980c42-2ea0-4887-9126-ee51a68e0e9c.jpg"
                                style="width: 100%; min-height: 123px;">
                    </a>
                    <a href="https://www.property.co.zw/estate-agents/rawson-properties" class="swiper-slide ga-parent block" target="_blank">

                        
                        <img alt="Rawson Properties"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view desktop hidden md:block mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Rawson Properties" data-position="Search Page: Top"
                                data-src="/uploadedfiles/d5/8c/33/d58c3320-f104-4e01-b4e9-e27cedb4901b.jpg"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Rawson Properties"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view mobile md:hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Rawson Properties" data-position="Search Page: Top"
                                data-src="/uploadedfiles/1b/c9/f3/1bc9f3fa-dab9-404f-8e3a-dc13aa511e4f.jpg"
                                style="width: 100%; min-height: 123px;">
                    </a>
            </div>
        </div>

    </div>

                    </div>
                    <div class="show-map xl:hidden cursor-pointer w-full mb-2 px-4 py-2 bg-white h-11 border border-button text-button text-center rounded-md transition-all hover:text-white hover:bg-button">
                        <i class="fa fa-map-marker-alt mr-1"></i> View results on map
                    </div>
                    <a onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.CreateEmailAlert('search')" href="javascript:;" class="block xl:hidden w-full mb-3 px-4 py-2 bg-white h-11 border border-button text-button text-center rounded-md transition-all hover:text-white hover:bg-button" data-cf-modified-62bff2e665d34e70882a4d87-="">
                        Get email alerts
                    </a>


<div class="result-cards">



<div id="246674" data-mandate-id="248396" class="ResultCardItem PriorityGrid  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(246674)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
        </div>

    <div class="aspectRatio invisible">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-246674 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="246674"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-azot246674">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="/uploadedfiles/63/51/10/635110ee-16a9-4731-b347-10d35134b8da_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7d/b1/01/7db101be-b64a-44a5-8502-775234f43a3c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d3/38/fd/d338fd38-9afc-4adf-85ce-2789bf78aca9_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/40/ac/e4/40ace41f-d10c-4062-9e72-39a7a179ffec_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/10/31/64/1031646f-27c4-4994-aaaa-93750ec22118_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/fc/e1/f0/fce1f07c-c50a-48af-b8e4-fb8fa235440c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5b/4a/07/5b4a07ab-6e1b-49a3-9764-6b2bbfdf66a0_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Prime 500 m&#178; residential stand for sale in Mutare CBD — a rare urban plot that combines city convenience with a peaceful, scenic outlook. The level parcel is ideal for a compact family home or investment development; municipal water and an active sewer connection are available, and tarred roads are within easy reach while the immediate approach is via well-maintained gravel access (as shown in the photos). The supplied images capture the gravel road leading toward rolling, green hills and open countryside, offering pleasant mountain views and a sense of space while remaining close to schools, shops and business services in Mutare. With established services, straightforward access and strong development potential in the heart of Manicaland, this stand represents an excellent opportunity for homeowners and investors alike. Arrange a viewing to appreciate the location and vistas in person.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-246674">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-246674">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="246674" />
            </div>

    </div>




</div>


        <a href="/for-sale/residential-land-stands-azot246674" class="gold-grid-thumbnails">
                <img src="/uploadedfiles/7d/b1/01/7db101be-b64a-44a5-8502-775234f43a3c_thumbnail194.webp" alt="Stands &amp; Residential Land" loading="lazy" />
                <img src="/uploadedfiles/d3/38/fd/d338fd38-9afc-4adf-85ce-2789bf78aca9_thumbnail194.webp" alt="Stands &amp; Residential Land" loading="lazy" />
                <img src="/uploadedfiles/40/ac/e4/40ace41f-d10c-4062-9e72-39a7a179ffec_thumbnail194.webp" alt="Stands &amp; Residential Land" loading="lazy" />
        </a>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-azot246674">USD 10,000 </a>
                                    <span class="inline-block" aria-label="Top listing" data-microtip-position="top" role="tooltip">
                        <img src="/fa_all/solid-bolt-lightning.svg" alt="Top listing" class="w-3 ml-1 filter-yellow" />
                    </span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-azot246674">
                        Mutare CBD 500m² Stand — Hills, Roads & Services
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Mutare CBD, Mutare</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="eager" />
                        500 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="246674"
                             data-entity-site-id="1827"
                             data-category="land"
                             data-type="sale"
                             data-reference="AZOT246674"
                             data-ajax-url="/ContactForm/PortalNumbers/248396?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-azot246674"
                             data-whatsapp-url="https://rply.link/l/lvEypn1xu1"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="eager" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="246674"
                             data-entity-site-id="1827"
                             data-category="land"
                             data-type="sale"
                             data-reference="AZOT246674"
                             data-ajax-url="/ContactForm/PortalNumbers/248396?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-azot246674"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="eager" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="246674"
                             data-entity-site-id="1827"
                             data-category="land"
                             data-type="sale"
                             data-reference="AZOT246674"
                             data-ajax-url="/ContactForm/PortalEmail/248396?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-azot246674"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="eager" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Mutare CBD 500m² Stand — Hills, Roads & Services","description":"Prime 500 m² residential stand for sale in Mutare CBD — a rare urban plot that combines city convenience with a peaceful, scenic outlook. The level parcel is ideal for a compact family home or investment development; municipal water and an active sewer connection are available, and tarred roads are within easy reach while the immediate approach is via well-maintained gravel access (as shown in the photos). The supplied images capture the gravel road leading toward rolling, green hills and open countryside, offering pleasant mountain views and a sense of space while remaining close to schools, shops and business services in Mutare. With established services, straightforward access and strong development potential in the heart of Manicaland, this stand represents an excellent opportunity for homeowners and investors alike. Arrange a viewing to appreciate the location and vistas in person.","url":"https://www.property.co.zw/for-sale/residential-land-stands-azot246674","identifier":"AZOT246674","datePosted":"2026-05-11","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-azot246674","availability":"http://schema.org/InStock","price":"10000","priceCurrency":"USD","serialNumber":"AZOT246674","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Azotus Enterprises Pvt Ltd"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Mutare CBD","addressRegion":"Mutare","addressCountry":"Zimbabwe"},"name":"Mutare CBD 500m² Stand — Hills, Roads & Services","description":"Prime 500 m² residential stand for sale in Mutare CBD — a rare urban plot that combines city convenience with a peaceful, scenic outlook. The level parcel is ideal for a compact family home or investment development; municipal water and an active sewer connection are available, and tarred roads are within easy reach while the immediate approach is via well-maintained gravel access (as shown in the photos). The supplied images capture the gravel road leading toward rolling, green hills and open countryside, offering pleasant mountain views and a sense of space while remaining close to schools, shops and business services in Mutare. With established services, straightforward access and strong development potential in the heart of Manicaland, this stand represents an excellent opportunity for homeowners and investors alike. Arrange a viewing to appreciate the location and vistas in person.","image":["https://www.property.co.zw/uploadedfiles/63/51/10/635110ee-16a9-4731-b347-10d35134b8da_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/b1/01/7db101be-b64a-44a5-8502-775234f43a3c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d3/38/fd/d338fd38-9afc-4adf-85ce-2789bf78aca9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/40/ac/e4/40ace41f-d10c-4062-9e72-39a7a179ffec_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/10/31/64/1031646f-27c4-4994-aaaa-93750ec22118_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fc/e1/f0/fce1f07c-c50a-48af-b8e4-fb8fa235440c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5b/4a/07/5b4a07ab-6e1b-49a3-9764-6b2bbfdf66a0_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/63/51/10/635110ee-16a9-4731-b347-10d35134b8da_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/b1/01/7db101be-b64a-44a5-8502-775234f43a3c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d3/38/fd/d338fd38-9afc-4adf-85ce-2789bf78aca9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/40/ac/e4/40ace41f-d10c-4062-9e72-39a7a179ffec_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/10/31/64/1031646f-27c4-4994-aaaa-93750ec22118_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fc/e1/f0/fce1f07c-c50a-48af-b8e4-fb8fa235440c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5b/4a/07/5b4a07ab-6e1b-49a3-9764-6b2bbfdf66a0_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Azotus Enterprises Pvt Ltd"}}
        </script>
</div>

<div id="247626" data-mandate-id="249348" class="ResultCardItem PriorityGrid  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(247626)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/camitel-pp" style="cursor: pointer;">
                        <img src="/uploadedfiles/3c/b9/d8/3cb9d832-5e57-47e2-ad79-b9f8c1ddb6bf.jpg" alt="Camitel" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Camitel" data-url="/estate-agents/camitel-pp" />
                    </a>

                        <a href="/estate-agents/camitel-pp/mefort-chimhoga/22499" class="vcenterFlex ">Mefort Chimhoga</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-247626 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="247626"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-cami247626">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d2/44/d9/d244d944-8cf2-4a5f-948d-b629794f03c8_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/63/44/6c/63446c15-b401-4c21-9239-62815c30c705_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/76/1c/b3/761cb3a2-1e00-4cf3-b39f-53d97607226b_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f1/49/b1/f149b19e-e066-4954-ab36-e179e312ba84_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/83/3a/5b/833a5b19-e534-4e3d-8045-747ae1af5452_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4f/56/dd/4f56dd78-6595-4fef-822a-803fb7b379b1_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9d/f5/cc/9df5ccef-cade-4507-8eb5-b504bcde6af7_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Prime 2,030 m&#178; residential stand in Arlington, Harare South — a rare level-to-gently undulating parcel framed by mature trees and natural rock outcrops. Fronting a quiet tarred road (see clear wide street views) with established single-storey homes nearby, this plot offers immediate curb appeal and easy construction access. Boundary markers and low concrete kerbing are already in place in sections, and the lot is serviced by municipal water. Located inside an access-controlled precinct, the stand promises security and peaceful suburban living while remaining within easy reach of Harare South amenities. Ideal for a spacious family home with gardens, a duplex development, or an investor looking to subdivide (subject to council approval). Sunlit, private and ready to build — bring your plans and take advantage of a sought-after Arlington location. Viewing by appointment.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-247626">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-247626">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            Sole Mandate
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="247626" />
            </div>

    </div>




</div>


        <a href="/for-sale/residential-land-stands-cami247626" class="gold-grid-thumbnails">
                <img src="/uploadedfiles/63/44/6c/63446c15-b401-4c21-9239-62815c30c705_thumbnail194.webp" alt="Stands &amp; Residential Land" loading="lazy" />
                <img src="/uploadedfiles/76/1c/b3/761cb3a2-1e00-4cf3-b39f-53d97607226b_thumbnail194.webp" alt="Stands &amp; Residential Land" loading="lazy" />
                <img src="/uploadedfiles/f1/49/b1/f149b19e-e066-4954-ab36-e179e312ba84_thumbnail194.webp" alt="Stands &amp; Residential Land" loading="lazy" />
        </a>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-cami247626">USD 160,000 </a>
                                    <span class="inline-block" aria-label="Top listing" data-microtip-position="top" role="tooltip">
                        <img src="/fa_all/solid-bolt-lightning.svg" alt="Top listing" class="w-3 ml-1 filter-yellow" />
                    </span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-cami247626">
                        2030m² Arlington Estate Stand on Quiet Tarred Street – Water & Access Control
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Arlington, Harare South</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        2,030 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="247626"
                             data-entity-site-id="1734"
                             data-category="land"
                             data-type="sale"
                             data-reference="CAMI247626"
                             data-ajax-url="/ContactForm/PortalNumbers/249348?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-cami247626"
                             data-whatsapp-url="https://rply.link/l/pxPXUbVK3y"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="247626"
                             data-entity-site-id="1734"
                             data-category="land"
                             data-type="sale"
                             data-reference="CAMI247626"
                             data-ajax-url="/ContactForm/PortalNumbers/249348?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-cami247626"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="247626"
                             data-entity-site-id="1734"
                             data-category="land"
                             data-type="sale"
                             data-reference="CAMI247626"
                             data-ajax-url="/ContactForm/PortalEmail/249348?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-cami247626"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"2030m² Arlington Estate Stand on Quiet Tarred Street – Water & Access Control","description":"Prime 2,030 m² residential stand in Arlington, Harare South — a rare level-to-gently undulating parcel framed by mature trees and natural rock outcrops. Fronting a quiet tarred road (see clear wide street views) with established single-storey homes nearby, this plot offers immediate curb appeal and easy construction access. Boundary markers and low concrete kerbing are already in place in sections, and the lot is serviced by municipal water. Located inside an access-controlled precinct, the stand promises security and peaceful suburban living while remaining within easy reach of Harare South amenities. Ideal for a spacious family home with gardens, a duplex development, or an investor looking to subdivide (subject to council approval). Sunlit, private and ready to build — bring your plans and take advantage of a sought-after Arlington location. Viewing by appointment.","url":"https://www.property.co.zw/for-sale/residential-land-stands-cami247626","identifier":"CAMI247626","datePosted":"2026-05-21","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-cami247626","availability":"http://schema.org/InStock","price":"160000","priceCurrency":"USD","serialNumber":"CAMI247626","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Camitel","logo":"https://www.property.co.zw/uploadedfiles/3c/b9/d8/3cb9d832-5e57-47e2-ad79-b9f8c1ddb6bf.jpg"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Arlington","addressRegion":"Harare South","addressCountry":"Zimbabwe"},"name":"2030m² Arlington Estate Stand on Quiet Tarred Street – Water & Access Control","description":"Prime 2,030 m² residential stand in Arlington, Harare South — a rare level-to-gently undulating parcel framed by mature trees and natural rock outcrops. Fronting a quiet tarred road (see clear wide street views) with established single-storey homes nearby, this plot offers immediate curb appeal and easy construction access. Boundary markers and low concrete kerbing are already in place in sections, and the lot is serviced by municipal water. Located inside an access-controlled precinct, the stand promises security and peaceful suburban living while remaining within easy reach of Harare South amenities. Ideal for a spacious family home with gardens, a duplex development, or an investor looking to subdivide (subject to council approval). Sunlit, private and ready to build — bring your plans and take advantage of a sought-after Arlington location. Viewing by appointment.","image":["https://www.property.co.zw/uploadedfiles/d2/44/d9/d244d944-8cf2-4a5f-948d-b629794f03c8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/63/44/6c/63446c15-b401-4c21-9239-62815c30c705_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/1c/b3/761cb3a2-1e00-4cf3-b39f-53d97607226b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f1/49/b1/f149b19e-e066-4954-ab36-e179e312ba84_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/83/3a/5b/833a5b19-e534-4e3d-8045-747ae1af5452_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4f/56/dd/4f56dd78-6595-4fef-822a-803fb7b379b1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9d/f5/cc/9df5ccef-cade-4507-8eb5-b504bcde6af7_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/d2/44/d9/d244d944-8cf2-4a5f-948d-b629794f03c8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/63/44/6c/63446c15-b401-4c21-9239-62815c30c705_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/1c/b3/761cb3a2-1e00-4cf3-b39f-53d97607226b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f1/49/b1/f149b19e-e066-4954-ab36-e179e312ba84_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/83/3a/5b/833a5b19-e534-4e3d-8045-747ae1af5452_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4f/56/dd/4f56dd78-6595-4fef-822a-803fb7b379b1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9d/f5/cc/9df5ccef-cade-4507-8eb5-b504bcde6af7_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Camitel","logo":"https://www.property.co.zw/uploadedfiles/3c/b9/d8/3cb9d832-5e57-47e2-ad79-b9f8c1ddb6bf.jpg"}}
        </script>
</div>

<div id="249112" data-mandate-id="250832" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(249112)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/southbay" style="cursor: pointer;">
                        <img src="/uploadedfiles/89/da/5f/89da5f51-e913-4adc-8752-144415c99078.jpg" alt="Southbay Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Southbay Real Estate" data-url="/estate-agents/southbay" />
                    </a>

                        <a href="/estate-agents/southbay/eunice-mufudze/23974" class="vcenterFlex ">Eunice Mufudze</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-249112 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="249112"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-sby249112">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/35/e5/d8/35e5d829-edf0-44e9-b8ec-9af0f6265d8d_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/75/43/25/754325cf-3bd5-499b-ad08-5549aee8d880_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/89/ed/7a/89ed7a5c-137d-41fd-b888-02d2199b9cef_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a6/46/01/a64601e1-bd1f-4add-b827-08b3a33d8cf5_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/cf/e3/7b/cfe37be2-e747-4f2c-9dea-c4cbc40430df_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b6/85/e8/b685e88f-f092-4c42-be9d-7d2aada516ae_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/12/26/10/12261093-fa03-4097-9920-1a49d7c86bb9_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0a/54/89/0a548904-081b-41d5-b26e-210676ac2b6c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e2/e0/52/e2e052c3-4800-4409-a8e0-b1d59c3ddc6d_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f2/ad/95/f2ad9566-d588-4253-8e99-51785ad96a71_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8a/f6/f7/8af6f7e1-5ec4-4ea3-a9ce-71618f88b9be_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8f/fc/76/8ffc769b-ca1a-4f46-9218-fc7621b67de6_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                LET&#39;S TURN YOUR VISION  INTO AN ADRESS WITH A PERFECTLY POSITIONED STAND FOR YOUR FAMILY`S NEXT CHAPTER. THE STAND IS MEASURING 300SQM WITH DEVELOPER CESSION AND READY TO  BUILD. SKIP THE WAIT AND START CONSTRUCTION NOW IN ROSEWOOD PARK.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-249112">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-249112">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            New
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="249112" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/southbay" style="cursor: pointer;">
                        <img src="/uploadedfiles/89/da/5f/89da5f51-e913-4adc-8752-144415c99078.jpg" alt="Southbay Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Southbay Real Estate" data-url="/estate-agents/southbay" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/southbay/eunice-mufudze/23974" class="block text-center">Eunice Mufudze</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-sby249112">USD 13,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-sby249112">
                        Investment Opportunity
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Nyabira</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        300 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="249112"
                             data-entity-site-id="67"
                             data-category="land"
                             data-type="sale"
                             data-reference="SBY249112"
                             data-ajax-url="/ContactForm/PortalNumbers/250832?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-sby249112"
                             data-whatsapp-url="https://rply.link/l/hxEgj15mwI"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="249112"
                             data-entity-site-id="67"
                             data-category="land"
                             data-type="sale"
                             data-reference="SBY249112"
                             data-ajax-url="/ContactForm/PortalNumbers/250832?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-sby249112"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="249112"
                             data-entity-site-id="67"
                             data-category="land"
                             data-type="sale"
                             data-reference="SBY249112"
                             data-ajax-url="/ContactForm/PortalEmail/250832?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-sby249112"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Investment Opportunity","description":"LET'S TURN YOUR VISION  INTO AN ADRESS WITH A PERFECTLY POSITIONED STAND FOR YOUR FAMILY`S NEXT CHAPTER. THE STAND IS MEASURING 300SQM WITH DEVELOPER CESSION AND READY TO  BUILD. SKIP THE WAIT AND START CONSTRUCTION NOW IN ROSEWOOD PARK.","url":"https://www.property.co.zw/for-sale/residential-land-stands-sby249112","identifier":"SBY249112","datePosted":"2026-06-11","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-sby249112","availability":"http://schema.org/InStock","price":"13000","priceCurrency":"USD","serialNumber":"SBY249112","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Southbay Real Estate","logo":"https://www.property.co.zw/uploadedfiles/89/da/5f/89da5f51-e913-4adc-8752-144415c99078.jpg"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Nyabira","addressRegion":"Nyabira","addressCountry":"Zimbabwe"},"name":"Investment Opportunity","description":"LET'S TURN YOUR VISION  INTO AN ADRESS WITH A PERFECTLY POSITIONED STAND FOR YOUR FAMILY`S NEXT CHAPTER. THE STAND IS MEASURING 300SQM WITH DEVELOPER CESSION AND READY TO  BUILD. SKIP THE WAIT AND START CONSTRUCTION NOW IN ROSEWOOD PARK.","image":["https://www.property.co.zw/uploadedfiles/35/e5/d8/35e5d829-edf0-44e9-b8ec-9af0f6265d8d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/75/43/25/754325cf-3bd5-499b-ad08-5549aee8d880_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/89/ed/7a/89ed7a5c-137d-41fd-b888-02d2199b9cef_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a6/46/01/a64601e1-bd1f-4add-b827-08b3a33d8cf5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cf/e3/7b/cfe37be2-e747-4f2c-9dea-c4cbc40430df_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b6/85/e8/b685e88f-f092-4c42-be9d-7d2aada516ae_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/12/26/10/12261093-fa03-4097-9920-1a49d7c86bb9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0a/54/89/0a548904-081b-41d5-b26e-210676ac2b6c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e2/e0/52/e2e052c3-4800-4409-a8e0-b1d59c3ddc6d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f2/ad/95/f2ad9566-d588-4253-8e99-51785ad96a71_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8a/f6/f7/8af6f7e1-5ec4-4ea3-a9ce-71618f88b9be_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/fc/76/8ffc769b-ca1a-4f46-9218-fc7621b67de6_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/35/e5/d8/35e5d829-edf0-44e9-b8ec-9af0f6265d8d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/75/43/25/754325cf-3bd5-499b-ad08-5549aee8d880_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/89/ed/7a/89ed7a5c-137d-41fd-b888-02d2199b9cef_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a6/46/01/a64601e1-bd1f-4add-b827-08b3a33d8cf5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cf/e3/7b/cfe37be2-e747-4f2c-9dea-c4cbc40430df_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b6/85/e8/b685e88f-f092-4c42-be9d-7d2aada516ae_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/12/26/10/12261093-fa03-4097-9920-1a49d7c86bb9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0a/54/89/0a548904-081b-41d5-b26e-210676ac2b6c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e2/e0/52/e2e052c3-4800-4409-a8e0-b1d59c3ddc6d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f2/ad/95/f2ad9566-d588-4253-8e99-51785ad96a71_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8a/f6/f7/8af6f7e1-5ec4-4ea3-a9ce-71618f88b9be_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/fc/76/8ffc769b-ca1a-4f46-9218-fc7621b67de6_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Southbay Real Estate","logo":"https://www.property.co.zw/uploadedfiles/89/da/5f/89da5f51-e913-4adc-8752-144415c99078.jpg"}}
        </script>
</div>

<div id="240579" data-mandate-id="242301" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(240579)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" />
                    </a>

                        <a href="/estate-agents/realtor-ville/unotdashe-moyo/22842" class="vcenterFlex ">Unotdashe Moyo</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-240579 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="240579"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-rvl240579">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/13/53/2a/13532a88-c2a8-4c2e-ad05-f1276a98216d_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d4/36/f4/d436f4b7-3ec3-4a13-8529-c5bd55573582_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e1/41/dd/e141dd59-7549-4653-af28-2f1dce503ffd_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b7/87/a1/b787a1d3-cbca-44e1-9bee-e2b2678d8ec1_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c9/bb/4c/c9bb4cad-68ad-4583-a965-028d5c60cafe_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/81/9a/d2/819ad277-d4ee-4110-8117-7880446cc219_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e3/ef/5d/e3ef5d88-121b-411c-bbb7-df69c6c5b44a_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/07/a3/8a/07a38a59-4d8b-4e4a-b6f3-db2b4dec2dad_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c0/c3/62/c0c3621b-6ac5-4903-8aa8-ded3cd3dae9a_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Secure this excellent investment opportunity in the peaceful and fast-growing suburb of Sallowfield, Norton. This 200sqm residential stand is located within a secure gated community, offering safety, privacy, and a great environment to build your dream home or investment property. Water and sewer connections are readily available, making it easier for you to start building right away. Priced at only $10,000, this is an affordable opportunity to own land in a promising area—don’t miss out!
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-240579">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-240579">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="240579" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
                <div class="w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/realtor-ville/unotdashe-moyo/22842" class="block text-center">Unotdashe Moyo</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-rvl240579">USD 13,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-rvl240579">
                        Prime 200sqm Stand for Sale in Swallowfield of Johannesburg in Norton – Only $10,000!
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Norton</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        200 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="240579"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL240579"
                             data-ajax-url="/ContactForm/PortalNumbers/242301?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-rvl240579"
                             data-whatsapp-url="https://rply.link/l/4r9107VObW"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="240579"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL240579"
                             data-ajax-url="/ContactForm/PortalNumbers/242301?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-rvl240579"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="240579"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL240579"
                             data-ajax-url="/ContactForm/PortalEmail/242301?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-rvl240579"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Prime 200sqm Stand for Sale in Swallowfield of Johannesburg in Norton – Only $10,000!","description":"Secure this excellent investment opportunity in the peaceful and fast-growing suburb of Sallowfield, Norton. This 200sqm residential stand is located within a secure gated community, offering safety, privacy, and a great environment to build your dream home or investment property. Water and sewer connections are readily available, making it easier for you to start building right away. Priced at only $10,000, this is an affordable opportunity to own land in a promising area—don’t miss out!","url":"https://www.property.co.zw/for-sale/residential-land-stands-rvl240579","identifier":"RVL240579","datePosted":"2026-02-16","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-rvl240579","availability":"http://schema.org/InStock","price":"13000","priceCurrency":"USD","serialNumber":"RVL240579","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Norton","addressRegion":"Norton","addressCountry":"Zimbabwe"},"name":"Prime 200sqm Stand for Sale in Swallowfield of Johannesburg in Norton – Only $10,000!","description":"Secure this excellent investment opportunity in the peaceful and fast-growing suburb of Sallowfield, Norton. This 200sqm residential stand is located within a secure gated community, offering safety, privacy, and a great environment to build your dream home or investment property. Water and sewer connections are readily available, making it easier for you to start building right away. Priced at only $10,000, this is an affordable opportunity to own land in a promising area—don’t miss out!","image":["https://www.property.co.zw/uploadedfiles/13/53/2a/13532a88-c2a8-4c2e-ad05-f1276a98216d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d4/36/f4/d436f4b7-3ec3-4a13-8529-c5bd55573582_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e1/41/dd/e141dd59-7549-4653-af28-2f1dce503ffd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b7/87/a1/b787a1d3-cbca-44e1-9bee-e2b2678d8ec1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c9/bb/4c/c9bb4cad-68ad-4583-a965-028d5c60cafe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/81/9a/d2/819ad277-d4ee-4110-8117-7880446cc219_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e3/ef/5d/e3ef5d88-121b-411c-bbb7-df69c6c5b44a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/07/a3/8a/07a38a59-4d8b-4e4a-b6f3-db2b4dec2dad_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c0/c3/62/c0c3621b-6ac5-4903-8aa8-ded3cd3dae9a_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/13/53/2a/13532a88-c2a8-4c2e-ad05-f1276a98216d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d4/36/f4/d436f4b7-3ec3-4a13-8529-c5bd55573582_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e1/41/dd/e141dd59-7549-4653-af28-2f1dce503ffd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b7/87/a1/b787a1d3-cbca-44e1-9bee-e2b2678d8ec1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c9/bb/4c/c9bb4cad-68ad-4583-a965-028d5c60cafe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/81/9a/d2/819ad277-d4ee-4110-8117-7880446cc219_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e3/ef/5d/e3ef5d88-121b-411c-bbb7-df69c6c5b44a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/07/a3/8a/07a38a59-4d8b-4e4a-b6f3-db2b4dec2dad_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c0/c3/62/c0c3621b-6ac5-4903-8aa8-ded3cd3dae9a_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"}}
        </script>
</div>

<div id="230988" data-mandate-id="232710" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(230988)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" />
                    </a>

                        <a href="/estate-agents/seeff/sindi-mangiza/4099" class="vcenterFlex ">Sindi Mangiza</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-230988 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="230988"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-sef230988">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a7/2a/6f/a72a6fcd-5173-4e89-8d87-c0e66dfa10c5_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2f/12/e1/2f12e1ec-552a-4ddf-ab03-a6613fd4ddc4_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/65/6b/6d/656b6d71-9b96-40f7-b530-015ed84a8206_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/dc/44/aa/dc44aa95-6c56-4729-9350-914478d1005f_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a5/b1/89/a5b189b3-235b-424d-ac6e-d611d1c5c406_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/39/1a/df/391adf84-4029-4b6f-9589-403e03303bab_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c6/f8/b9/c6f8b990-cf91-4afc-8e18-8b6dfa420bbc_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/42/fd/cc/42fdcced-84ee-49b0-8acb-12d448cf557c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c7/b7/6a/c7b76a41-89d8-4ca9-87b7-f8220e93bbd2_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8d/05/24/8d0524cb-5cef-45e3-9d0a-1d5d17084b9e_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a1/0c/a6/a10ca652-3dea-4293-8d4e-2aa50e563283_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/10/bb/08/10bb08b1-f070-4c00-a52d-322de0a69b4a_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/43/de/5c/43de5c4b-f4cb-4dd9-8567-9f4e261f1af7_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/29/1f/49/291f499b-6b2b-4bec-a984-576ad92e201c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3c/ad/87/3cad87f1-5f03-4c40-8cdd-b870f21de08f_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/04/5e/58/045e5802-fd84-4762-96e1-3eb69dbfca90_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/53/d1/b5/53d1b535-e2f1-435b-9e58-5dd7568b0259_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4f/c9/a2/4fc9a2de-a8b1-4300-99d4-3a166144de4c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b2/ad/bd/b2adbd47-d20d-4ff8-9f59-427fb22b2a12_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1c/4c/47/1c4c4752-1e1a-4265-a3e3-d19d50d1adbc_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Discover the perfect canvas for your dream home or next investment project in the prestigious suburb of Helensvale. This expansive 6687m&#178; residential stand offers a rare opportunity to own land in one of Harare North’s most sought-after locations.
Set in a serene and well-established neighborhood, the property boasts excellent ZESA connectivity, ensuring consistent power supply as you build your future. Access is a breeze via well-maintained tarred roads, placing you just minutes away from top local schools, shopping centers, and essential amenities.
Whether you&#39;re envisioning a private family retreat or a smart investment, this property delivers the space, location, and potential to make it happen. Enjoy the peace of suburban living without sacrificing convenience.
? 6687m&#178; of prime land
? Fully serviced with reliable electricity (ZESA)
? Easily accessible via tarred roads
? Cl...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-230988">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-230988">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            Sole Mandate
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="230988" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
                <div class="w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/seeff/sindi-mangiza/4099" class="block text-center">Sindi Mangiza</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-sef230988">USD 370,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-sef230988">
                        Prime Residential Stand for Sale – 6687m² in Helensvale, Harare North
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Helensvale, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        6,687 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="230988"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF230988"
                             data-ajax-url="/ContactForm/PortalNumbers/232710?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-sef230988"
                             data-whatsapp-url="https://rply.link/l/SZO9poCLVf"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="230988"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF230988"
                             data-ajax-url="/ContactForm/PortalNumbers/232710?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-sef230988"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="230988"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF230988"
                             data-ajax-url="/ContactForm/PortalEmail/232710?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-sef230988"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Prime Residential Stand for Sale – 6687m² in Helensvale, Harare North","description":"Discover the perfect canvas for your dream home or next investment project in the prestigious suburb of Helensvale. This expansive 6687m² residential stand offers a rare opportunity to own land in one of Harare North’s most sought-after locations.\r\nSet in a serene and well-established neighborhood, the property boasts excellent ZESA connectivity, ensuring consistent power supply as you build your future. Access is a breeze via well-maintained tarred roads, placing you just minutes away from top local schools, shopping centers, and essential amenities.\r\nWhether you're envisioning a private family retreat or a smart investment, this property delivers the space, location, and potential to make it happen. Enjoy the peace of suburban living without sacrificing convenience.\r\n? 6687m² of prime land\r\n? Fully serviced with reliable electricity (ZESA)\r\n? Easily accessible via tarred roads\r\n? Cl...","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef230988","identifier":"SEF230988","datePosted":"2025-10-06","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef230988","availability":"http://schema.org/InStock","price":"370000","priceCurrency":"USD","serialNumber":"SEF230988","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Helensvale","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Prime Residential Stand for Sale – 6687m² in Helensvale, Harare North","description":"Discover the perfect canvas for your dream home or next investment project in the prestigious suburb of Helensvale. This expansive 6687m² residential stand offers a rare opportunity to own land in one of Harare North’s most sought-after locations.\r\nSet in a serene and well-established neighborhood, the property boasts excellent ZESA connectivity, ensuring consistent power supply as you build your future. Access is a breeze via well-maintained tarred roads, placing you just minutes away from top local schools, shopping centers, and essential amenities.\r\nWhether you're envisioning a private family retreat or a smart investment, this property delivers the space, location, and potential to make it happen. Enjoy the peace of suburban living without sacrificing convenience.\r\n? 6687m² of prime land\r\n? Fully serviced with reliable electricity (ZESA)\r\n? Easily accessible via tarred roads\r\n? Cl...","image":["https://www.property.co.zw/uploadedfiles/a7/2a/6f/a72a6fcd-5173-4e89-8d87-c0e66dfa10c5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/12/e1/2f12e1ec-552a-4ddf-ab03-a6613fd4ddc4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/65/6b/6d/656b6d71-9b96-40f7-b530-015ed84a8206_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/dc/44/aa/dc44aa95-6c56-4729-9350-914478d1005f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a5/b1/89/a5b189b3-235b-424d-ac6e-d611d1c5c406_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/39/1a/df/391adf84-4029-4b6f-9589-403e03303bab_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c6/f8/b9/c6f8b990-cf91-4afc-8e18-8b6dfa420bbc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/42/fd/cc/42fdcced-84ee-49b0-8acb-12d448cf557c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c7/b7/6a/c7b76a41-89d8-4ca9-87b7-f8220e93bbd2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8d/05/24/8d0524cb-5cef-45e3-9d0a-1d5d17084b9e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a1/0c/a6/a10ca652-3dea-4293-8d4e-2aa50e563283_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/10/bb/08/10bb08b1-f070-4c00-a52d-322de0a69b4a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/43/de/5c/43de5c4b-f4cb-4dd9-8567-9f4e261f1af7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/29/1f/49/291f499b-6b2b-4bec-a984-576ad92e201c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3c/ad/87/3cad87f1-5f03-4c40-8cdd-b870f21de08f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/04/5e/58/045e5802-fd84-4762-96e1-3eb69dbfca90_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/53/d1/b5/53d1b535-e2f1-435b-9e58-5dd7568b0259_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4f/c9/a2/4fc9a2de-a8b1-4300-99d4-3a166144de4c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b2/ad/bd/b2adbd47-d20d-4ff8-9f59-427fb22b2a12_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1c/4c/47/1c4c4752-1e1a-4265-a3e3-d19d50d1adbc_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/a7/2a/6f/a72a6fcd-5173-4e89-8d87-c0e66dfa10c5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/12/e1/2f12e1ec-552a-4ddf-ab03-a6613fd4ddc4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/65/6b/6d/656b6d71-9b96-40f7-b530-015ed84a8206_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/dc/44/aa/dc44aa95-6c56-4729-9350-914478d1005f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a5/b1/89/a5b189b3-235b-424d-ac6e-d611d1c5c406_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/39/1a/df/391adf84-4029-4b6f-9589-403e03303bab_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c6/f8/b9/c6f8b990-cf91-4afc-8e18-8b6dfa420bbc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/42/fd/cc/42fdcced-84ee-49b0-8acb-12d448cf557c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c7/b7/6a/c7b76a41-89d8-4ca9-87b7-f8220e93bbd2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8d/05/24/8d0524cb-5cef-45e3-9d0a-1d5d17084b9e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a1/0c/a6/a10ca652-3dea-4293-8d4e-2aa50e563283_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/10/bb/08/10bb08b1-f070-4c00-a52d-322de0a69b4a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/43/de/5c/43de5c4b-f4cb-4dd9-8567-9f4e261f1af7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/29/1f/49/291f499b-6b2b-4bec-a984-576ad92e201c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3c/ad/87/3cad87f1-5f03-4c40-8cdd-b870f21de08f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/04/5e/58/045e5802-fd84-4762-96e1-3eb69dbfca90_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/53/d1/b5/53d1b535-e2f1-435b-9e58-5dd7568b0259_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4f/c9/a2/4fc9a2de-a8b1-4300-99d4-3a166144de4c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b2/ad/bd/b2adbd47-d20d-4ff8-9f59-427fb22b2a12_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1c/4c/47/1c4c4752-1e1a-4265-a3e3-d19d50d1adbc_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}}
        </script>
</div>            <div class="fifth-content">

                    <div class="banner-in-results">
    <div>
        <div id="advert-carousel-Fifth" class="swiper-container swiper-advert-carousel-Fifth" data-autoplay="true" data-carousel="banner" data-value="advert-carousel-Fifth" data-slidesperview="1" data-slidesperview-md="1" data-slidesperview-lg="1" data-slidesperview-xl="1" data-slidesperview-xxl="1">
            <div class="swiper-wrapper">
                    <a href="https://www.property.co.zw/magazine/Directory-2026" class="swiper-slide ga-parent block" target="_blank">

                        
                        <img alt="Directory 2026"
                                loading="eager"
                                class="ga-banner-click ga-banner-view desktop hidden md:block mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Directory 2026" data-position="Search Page: 5th"
                                src="/uploadedfiles/51/10/de/5110de93-17b6-4c5f-9a23-97251af07013.jpg"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Directory 2026"
                                loading="eager"
                                class="ga-banner-click ga-banner-view mobile md:hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Directory 2026" data-position="Search Page: 5th"
                                src="/uploadedfiles/1a/ee/b9/1aeeb978-00c5-4d62-8fb1-faa275a8aac0.jpg"
                                style="width: 100%; min-height: 123px;">
                    </a>
                    <a href="https://www.property.co.zw/for-sale/commercial-land-ccp201109" class="swiper-slide ga-parent block" target="_blank">

                        
                        <img alt="Bridgewood"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view desktop hidden md:block mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Bridgewood" data-position="Search Page: 5th"
                                data-src="/uploadedfiles/b5/79/af/b579afb7-e7b6-4140-9ec3-a1a992406bab.jpg"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Bridgewood"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view mobile md:hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Bridgewood" data-position="Search Page: 5th"
                                data-src="/uploadedfiles/9c/1b/67/9c1b6712-b4a1-4db6-9cbd-fbb407dd6556.jpg"
                                style="width: 100%; min-height: 123px;">
                    </a>
                    <a href="https://www.property.co.zw/development-projects/the-golden-stairs-garden-executive-apartments" class="swiper-slide ga-parent block" target="_blank">

                        
                        <img alt="Golden Stairs"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view desktop hidden md:block mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Golden Stairs" data-position="Search Page: 5th"
                                data-src="/uploadedfiles/9d/c3/d0/9dc3d0ec-5dbf-47e7-b9cf-ab2b170ba3d0.jpg"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Golden Stairs"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view mobile md:hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Golden Stairs" data-position="Search Page: 5th"
                                data-src="/uploadedfiles/c1/6f/58/c16f586e-2184-4335-916b-1865c14b44cb.jpg"
                                style="width: 100%; min-height: 123px;">
                    </a>
                    <a href="https://www.property.co.zw/estate-agents/ranangaproperties" class="swiper-slide ga-parent block" target="_blank">

                        
                        <img alt="Rananga Properties Search Page Banner"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view desktop hidden md:block mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Rananga Properties Search Page Banner" data-position="Search Page: 5th"
                                data-src="/uploadedfiles/1b/78/10/1b781043-d129-43cd-b25b-55ca4de8eca7.png"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Rananga Properties Search Page Banner"
                                loading="lazy"
                                class="ga-banner-click ga-banner-view mobile md:hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Rananga Properties Search Page Banner" data-position="Search Page: 5th"
                                data-src="/uploadedfiles/1d/f1/ab/1df1abf8-9427-4c65-9819-426cd9f68138.png"
                                style="width: 100%; min-height: 123px;">
                    </a>
            </div>
        </div>

    </div>

                    </div>

                
            </div>


<div id="240708" data-mandate-id="242430" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(240708)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #fed504; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/rawson-properties" style="cursor: pointer;">
                        <img src="/uploadedfiles/9e/86/67/9e8667c8-6d7c-446d-bbd5-547ff9b1c4cd.jpg" alt="Rawson Properties Harare" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Rawson Properties Harare" data-url="/estate-agents/rawson-properties" />
                    </a>

                        <a href="/estate-agents/rawson-properties/mutsa-mafodya/19131" class="vcenterFlex ">Mutsa Mafodya</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-240708 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="240708"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-rws240708">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1e/37/de/1e37def3-e1a1-43e6-a067-47a699c984d0_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4f/30/9b/4f309b3b-ece0-49bc-9b50-68cea67f1c44_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/63/16/0a/63160a6c-7b22-47a4-99f4-729495441f07_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6b/50/05/6b500501-0267-44d5-89aa-9510507eecea_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d2/d5/0f/d2d50f9f-6eb9-499c-b738-0a6d0f7fface_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5a/f1/b1/5af1b147-4f58-4dec-9d35-2e95c4db8751_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e8/23/f9/e823f9ed-78db-4260-9d4a-c9fceca7ebd2_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/11/2c/87/112c87fc-102a-44fa-ab66-31776980a4ea_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a1/37/18/a13718a3-9b7e-46de-bb5e-31309ed43718_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                A stand with a cottage comprising of  3 beds mes Fitted Kitchen open plan lounge ,dining and its walled and gated it&#39;s in a  prestigious area of old malbrough measuring 2200sqm full tittle deeds 
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-240708">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-240708">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="240708" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #fed504; ">
                <div class="w-full">
                    <a href="/estate-agents/rawson-properties" style="cursor: pointer;">
                        <img src="/uploadedfiles/9e/86/67/9e8667c8-6d7c-446d-bbd5-547ff9b1c4cd.jpg" alt="Rawson Properties Harare" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Rawson Properties Harare" data-url="/estate-agents/rawson-properties" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/rawson-properties/mutsa-mafodya/19131" class="block text-center">Mutsa Mafodya</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-rws240708">USD 165,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-rws240708">
                        Old Malbrough build your dream home
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Marlborough, Harare West</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        2,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="240708"
                             data-entity-site-id="1205"
                             data-category="land"
                             data-type="sale"
                             data-reference="RWS240708"
                             data-ajax-url="/ContactForm/PortalNumbers/242430?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-rws240708"
                             data-whatsapp-url="https://rply.link/l/Ua6G2QV7Wr"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="240708"
                             data-entity-site-id="1205"
                             data-category="land"
                             data-type="sale"
                             data-reference="RWS240708"
                             data-ajax-url="/ContactForm/PortalNumbers/242430?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-rws240708"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="240708"
                             data-entity-site-id="1205"
                             data-category="land"
                             data-type="sale"
                             data-reference="RWS240708"
                             data-ajax-url="/ContactForm/PortalEmail/242430?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-rws240708"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Old Malbrough build your dream home","description":"A stand with a cottage comprising of  3 beds mes Fitted Kitchen open plan lounge ,dining and its walled and gated it's in a  prestigious area of old malbrough measuring 2200sqm full tittle deeds ","url":"https://www.property.co.zw/for-sale/residential-land-stands-rws240708","identifier":"RWS240708","datePosted":"2026-02-17","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-rws240708","availability":"http://schema.org/InStock","price":"165000","priceCurrency":"USD","serialNumber":"RWS240708","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Rawson Properties Harare","logo":"https://www.property.co.zw/uploadedfiles/9e/86/67/9e8667c8-6d7c-446d-bbd5-547ff9b1c4cd.jpg"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Marlborough","addressRegion":"Harare West","addressCountry":"Zimbabwe"},"name":"Old Malbrough build your dream home","description":"A stand with a cottage comprising of  3 beds mes Fitted Kitchen open plan lounge ,dining and its walled and gated it's in a  prestigious area of old malbrough measuring 2200sqm full tittle deeds ","image":["https://www.property.co.zw/uploadedfiles/1e/37/de/1e37def3-e1a1-43e6-a067-47a699c984d0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4f/30/9b/4f309b3b-ece0-49bc-9b50-68cea67f1c44_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/63/16/0a/63160a6c-7b22-47a4-99f4-729495441f07_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6b/50/05/6b500501-0267-44d5-89aa-9510507eecea_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d2/d5/0f/d2d50f9f-6eb9-499c-b738-0a6d0f7fface_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5a/f1/b1/5af1b147-4f58-4dec-9d35-2e95c4db8751_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e8/23/f9/e823f9ed-78db-4260-9d4a-c9fceca7ebd2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/11/2c/87/112c87fc-102a-44fa-ab66-31776980a4ea_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a1/37/18/a13718a3-9b7e-46de-bb5e-31309ed43718_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/1e/37/de/1e37def3-e1a1-43e6-a067-47a699c984d0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4f/30/9b/4f309b3b-ece0-49bc-9b50-68cea67f1c44_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/63/16/0a/63160a6c-7b22-47a4-99f4-729495441f07_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6b/50/05/6b500501-0267-44d5-89aa-9510507eecea_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d2/d5/0f/d2d50f9f-6eb9-499c-b738-0a6d0f7fface_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5a/f1/b1/5af1b147-4f58-4dec-9d35-2e95c4db8751_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e8/23/f9/e823f9ed-78db-4260-9d4a-c9fceca7ebd2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/11/2c/87/112c87fc-102a-44fa-ab66-31776980a4ea_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a1/37/18/a13718a3-9b7e-46de-bb5e-31309ed43718_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Rawson Properties Harare","logo":"https://www.property.co.zw/uploadedfiles/9e/86/67/9e8667c8-6d7c-446d-bbd5-547ff9b1c4cd.jpg"}}
        </script>
</div>

<div id="236531" data-mandate-id="238253" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(236531)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #154734; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/pam-golding" style="cursor: pointer;">
                        <img src="/uploadedfiles/76/b8/ba/76b8ba53-6999-424e-99ad-6532e21930e5.jpg" alt="Pam Golding Properties" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Pam Golding Properties" data-url="/estate-agents/pam-golding" />
                    </a>

                        <a href="/estate-agents/pam-golding/fortunate-mandaza/25135" class="vcenterFlex ">Fortunate Mandaza</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-236531 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="236531"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-pgp236531">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c9/d5/a0/c9d5a0f1-a5dc-4926-95d9-c9f16e36aac6_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/dc/1e/93/dc1e93b8-5d37-44a6-aac4-2546f2aa3b3a_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c8/85/54/c88554bf-e90e-4878-bf35-ecd61d634ff2_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/66/11/21/66112121-c677-4322-a5df-a4c37606b9fe_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b4/3c/28/b43c28aa-6d83-4ff8-acb9-4d295b2ec769_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/40/63/52/406352da-1219-4733-bf74-c70e5528bc63_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/06/4b/37/064b37f5-341f-4431-8c3a-d3789cb44624_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/46/65/eb/4665eb8e-46a9-4006-909c-bdd68ad1f9f0_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/17/71/14/1771141d-4165-4635-82ae-6b8ae2ea6c5a_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/32/5f/9a/325f9ab1-c811-4ba9-89e1-8acca259e77c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Discover a remarkable opportunity with this residential stand for sale in the in Quinnington, Harare. Spanning an impressive 2056 sqm, this property is equipped with essential utilities, including municipal water, reliable Zesa power, and internet connectivity. 

This stand comes with title deeds and existing infrastructure, including a sewer line and culverts, ensuring a seamless transition for its new owner. Embrace the possibilities this prime location offers.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-236531">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-236531">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="236531" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #154734; ">
                <div class="w-full">
                    <a href="/estate-agents/pam-golding" style="cursor: pointer;">
                        <img src="/uploadedfiles/76/b8/ba/76b8ba53-6999-424e-99ad-6532e21930e5.jpg" alt="Pam Golding Properties" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Pam Golding Properties" data-url="/estate-agents/pam-golding" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/pam-golding/fortunate-mandaza/25135" class="block text-center">Fortunate Mandaza</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-pgp236531">USD 200,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-pgp236531">
                        Stand for sale
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Helensvale, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        2,059 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="236531"
                             data-entity-site-id="10"
                             data-category="land"
                             data-type="sale"
                             data-reference="PGP236531"
                             data-ajax-url="/ContactForm/PortalNumbers/238253?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-pgp236531"
                             data-whatsapp-url="https://rply.link/l/k0BbulMZk6"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="236531"
                             data-entity-site-id="10"
                             data-category="land"
                             data-type="sale"
                             data-reference="PGP236531"
                             data-ajax-url="/ContactForm/PortalNumbers/238253?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-pgp236531"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="236531"
                             data-entity-site-id="10"
                             data-category="land"
                             data-type="sale"
                             data-reference="PGP236531"
                             data-ajax-url="/ContactForm/PortalEmail/238253?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-pgp236531"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Stand for sale","description":"Discover a remarkable opportunity with this residential stand for sale in the in Quinnington, Harare. Spanning an impressive 2056 sqm, this property is equipped with essential utilities, including municipal water, reliable Zesa power, and internet connectivity. \r\n\r\nThis stand comes with title deeds and existing infrastructure, including a sewer line and culverts, ensuring a seamless transition for its new owner. Embrace the possibilities this prime location offers.","url":"https://www.property.co.zw/for-sale/residential-land-stands-pgp236531","identifier":"PGP236531","datePosted":"2025-12-16","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-pgp236531","availability":"http://schema.org/InStock","price":"200000","priceCurrency":"USD","serialNumber":"PGP236531","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Pam Golding Properties","logo":"https://www.property.co.zw/uploadedfiles/76/b8/ba/76b8ba53-6999-424e-99ad-6532e21930e5.jpg"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Helensvale","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Stand for sale","description":"Discover a remarkable opportunity with this residential stand for sale in the in Quinnington, Harare. Spanning an impressive 2056 sqm, this property is equipped with essential utilities, including municipal water, reliable Zesa power, and internet connectivity. \r\n\r\nThis stand comes with title deeds and existing infrastructure, including a sewer line and culverts, ensuring a seamless transition for its new owner. Embrace the possibilities this prime location offers.","image":["https://www.property.co.zw/uploadedfiles/c9/d5/a0/c9d5a0f1-a5dc-4926-95d9-c9f16e36aac6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/dc/1e/93/dc1e93b8-5d37-44a6-aac4-2546f2aa3b3a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c8/85/54/c88554bf-e90e-4878-bf35-ecd61d634ff2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/66/11/21/66112121-c677-4322-a5df-a4c37606b9fe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b4/3c/28/b43c28aa-6d83-4ff8-acb9-4d295b2ec769_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/40/63/52/406352da-1219-4733-bf74-c70e5528bc63_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/06/4b/37/064b37f5-341f-4431-8c3a-d3789cb44624_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/46/65/eb/4665eb8e-46a9-4006-909c-bdd68ad1f9f0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/17/71/14/1771141d-4165-4635-82ae-6b8ae2ea6c5a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/32/5f/9a/325f9ab1-c811-4ba9-89e1-8acca259e77c_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/c9/d5/a0/c9d5a0f1-a5dc-4926-95d9-c9f16e36aac6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/dc/1e/93/dc1e93b8-5d37-44a6-aac4-2546f2aa3b3a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c8/85/54/c88554bf-e90e-4878-bf35-ecd61d634ff2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/66/11/21/66112121-c677-4322-a5df-a4c37606b9fe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b4/3c/28/b43c28aa-6d83-4ff8-acb9-4d295b2ec769_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/40/63/52/406352da-1219-4733-bf74-c70e5528bc63_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/06/4b/37/064b37f5-341f-4431-8c3a-d3789cb44624_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/46/65/eb/4665eb8e-46a9-4006-909c-bdd68ad1f9f0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/17/71/14/1771141d-4165-4635-82ae-6b8ae2ea6c5a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/32/5f/9a/325f9ab1-c811-4ba9-89e1-8acca259e77c_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Pam Golding Properties","logo":"https://www.property.co.zw/uploadedfiles/76/b8/ba/76b8ba53-6999-424e-99ad-6532e21930e5.jpg"}}
        </script>
</div>

<div id="244428" data-mandate-id="246150" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(244428)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" />
                    </a>

                        <a href="/estate-agents/seeff/frank-mangena/24970" class="vcenterFlex ">Frank Mangena</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-244428 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="244428"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-sef244428">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7e/99/11/7e99113a-14df-4455-9d9a-7ebd5c55a4b7_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/37/9a/f3/379af3cf-4872-4af2-9c75-2aaaa5788e30_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4c/12/85/4c1285b4-f685-4368-a27a-0d8c4e27647e_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/cd/22/c6/cd22c604-ea1c-4aab-ac4f-6a75defd464b_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/cb/e0/36/cbe0369b-758f-4dac-a997-c1c18a32c23e_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/60/ae/29/60ae2984-816d-4faf-bbcf-4d138a41a104_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a0/20/ad/a020ad5f-6993-4b94-bb8b-097558a9fc39_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                RESIDENTIAL STANDS  FOR SALE

BLESSED PARK - RUWA

-STAND SIZES 200Sqm - 324Sqm
-PRICE $79,6/Sqm
-INCLUDING VAT
-GATED COMMUNITY 
-PAYMENT TERMS ARE ACCEPTED
-50% DEPOSITE BALANCE OVER 12 MONTHS 

-TARRED ROADS ARE CURRENTLY BEING LAID
-THE SEWER &amp; WATER PIPE INSTALLATION IS APPROACHING FINALIZATION
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-244428">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-244428">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="244428" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
                <div class="w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/seeff/frank-mangena/24970" class="block text-center">Frank Mangena</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-sef244428">USD 15,939 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-sef244428">
                        Blessed Park - Ruwa Residential Stands For Sale
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Fairview, Ruwa</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        200 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="244428"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF244428"
                             data-ajax-url="/ContactForm/PortalNumbers/246150?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-sef244428"
                             data-whatsapp-url="https://rply.link/l/h6nUj3HeA9"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="244428"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF244428"
                             data-ajax-url="/ContactForm/PortalNumbers/246150?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-sef244428"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="244428"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF244428"
                             data-ajax-url="/ContactForm/PortalEmail/246150?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-sef244428"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Blessed Park - Ruwa Residential Stands For Sale","description":"RESIDENTIAL STANDS  FOR SALE\r\n\r\nBLESSED PARK - RUWA\r\n\r\n-STAND SIZES 200Sqm - 324Sqm\r\n-PRICE $79,6/Sqm\r\n-INCLUDING VAT\r\n-GATED COMMUNITY \r\n-PAYMENT TERMS ARE ACCEPTED\r\n-50% DEPOSITE BALANCE OVER 12 MONTHS \r\n\r\n-TARRED ROADS ARE CURRENTLY BEING LAID\r\n-THE SEWER & WATER PIPE INSTALLATION IS APPROACHING FINALIZATION","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef244428","identifier":"SEF244428","datePosted":"2026-04-10","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef244428","availability":"http://schema.org/InStock","price":"15939","priceCurrency":"USD","serialNumber":"SEF244428","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Fairview","addressRegion":"Ruwa","addressCountry":"Zimbabwe"},"name":"Blessed Park - Ruwa Residential Stands For Sale","description":"RESIDENTIAL STANDS  FOR SALE\r\n\r\nBLESSED PARK - RUWA\r\n\r\n-STAND SIZES 200Sqm - 324Sqm\r\n-PRICE $79,6/Sqm\r\n-INCLUDING VAT\r\n-GATED COMMUNITY \r\n-PAYMENT TERMS ARE ACCEPTED\r\n-50% DEPOSITE BALANCE OVER 12 MONTHS \r\n\r\n-TARRED ROADS ARE CURRENTLY BEING LAID\r\n-THE SEWER & WATER PIPE INSTALLATION IS APPROACHING FINALIZATION","image":["https://www.property.co.zw/uploadedfiles/7e/99/11/7e99113a-14df-4455-9d9a-7ebd5c55a4b7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/37/9a/f3/379af3cf-4872-4af2-9c75-2aaaa5788e30_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4c/12/85/4c1285b4-f685-4368-a27a-0d8c4e27647e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cd/22/c6/cd22c604-ea1c-4aab-ac4f-6a75defd464b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cb/e0/36/cbe0369b-758f-4dac-a997-c1c18a32c23e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/60/ae/29/60ae2984-816d-4faf-bbcf-4d138a41a104_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a0/20/ad/a020ad5f-6993-4b94-bb8b-097558a9fc39_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/7e/99/11/7e99113a-14df-4455-9d9a-7ebd5c55a4b7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/37/9a/f3/379af3cf-4872-4af2-9c75-2aaaa5788e30_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4c/12/85/4c1285b4-f685-4368-a27a-0d8c4e27647e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cd/22/c6/cd22c604-ea1c-4aab-ac4f-6a75defd464b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cb/e0/36/cbe0369b-758f-4dac-a997-c1c18a32c23e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/60/ae/29/60ae2984-816d-4faf-bbcf-4d138a41a104_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a0/20/ad/a020ad5f-6993-4b94-bb8b-097558a9fc39_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}}
        </script>
</div>

<div id="244866" data-mandate-id="246588" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(244866)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/zaneta-realestate" style="cursor: pointer;">
                        <img src="/uploadedfiles/45/bb/41/45bb41b3-9779-4ef0-9dd9-a880dbce1caf.png" alt="Zaneta Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Zaneta Real Estate" data-url="/estate-agents/zaneta-realestate" />
                    </a>

                        <a href="/estate-agents/zaneta-realestate/melisa-dina/24912" class="vcenterFlex ">Melisa Dina</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-244866 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="244866"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-zane244866">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7a/7b/45/7a7b45a2-c87d-4c60-b6e7-2c6c1341c70d_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/11/1e/39/111e39d9-6cb4-401e-8423-97d65c5ea262_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/62/98/f5/6298f5dc-17c7-4467-93c1-b3e26bd3c397_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c7/fa/b7/c7fab7a8-38f5-428b-b364-0687f7402f64_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/bc/dd/5f/bcdd5faa-94b2-4d2e-b917-14d293574ecd_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/03/26/2b/03262bf0-be34-4b0b-8129-951e6ac99d38_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7b/46/d5/7b46d541-2100-4608-9ca1-ffd2c68d2a74_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f8/3a/ad/f83aad0a-0141-4dc2-92f9-28ac9908818a_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ae/80/51/ae805195-7178-4ea9-aca9-ed55e17b1bc8_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/29/f7/aa/29f7aa53-343a-4268-928f-a9d2dd6c1114_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d7/dc/00/d7dc001b-718b-4158-b906-76ef32721685_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/da/dc/d7/dadcd7ca-bc30-4146-80ba-158eaeee5267_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3b/c3/65/3bc36541-fdea-4803-ac9b-73eeed64169e_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Prime 1,200 m&#178; residential stand in Norton, Mashonaland West — ready for your dream home or investment. Located within a newly laid subdivision (see aerial map), this plot is clearly demarcated among level, well-sized stands and enjoys direct access via compacted gravel roads shown in the photos. A functioning sewer system servitude is in place, and electricity poles are visible along the roadside, simplifying connection. The site offers open, sunny terrain with scattered trees on the horizon, easy vehicle access year-round, and excellent potential for a tranquil family homestead or rental development. Conveniently positioned within reach of Norton town amenities, this stand combines rural quiet with practical infrastructure. Contact us to arrange a viewing and secure this prime residential land before it’s gone.


            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-244866">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-244866">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="244866" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/zaneta-realestate" style="cursor: pointer;">
                        <img src="/uploadedfiles/45/bb/41/45bb41b3-9779-4ef0-9dd9-a880dbce1caf.png" alt="Zaneta Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Zaneta Real Estate" data-url="/estate-agents/zaneta-realestate" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/zaneta-realestate/melisa-dina/24912" class="block text-center">Melisa Dina</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-zane244866">USD 15,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-zane244866">
                        Residential stand for sale Mwashuma Park Norton
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Norton</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        1,200 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="244866"
                             data-entity-site-id="1798"
                             data-category="land"
                             data-type="sale"
                             data-reference="ZANE244866"
                             data-ajax-url="/ContactForm/PortalNumbers/246588?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-zane244866"
                             data-whatsapp-url="https://rply.link/l/2XEloPOf1M"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="244866"
                             data-entity-site-id="1798"
                             data-category="land"
                             data-type="sale"
                             data-reference="ZANE244866"
                             data-ajax-url="/ContactForm/PortalNumbers/246588?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-zane244866"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="244866"
                             data-entity-site-id="1798"
                             data-category="land"
                             data-type="sale"
                             data-reference="ZANE244866"
                             data-ajax-url="/ContactForm/PortalEmail/246588?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-zane244866"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Residential stand for sale Mwashuma Park Norton","description":"Prime 1,200 m² residential stand in Norton, Mashonaland West — ready for your dream home or investment. Located within a newly laid subdivision (see aerial map), this plot is clearly demarcated among level, well-sized stands and enjoys direct access via compacted gravel roads shown in the photos. A functioning sewer system servitude is in place, and electricity poles are visible along the roadside, simplifying connection. The site offers open, sunny terrain with scattered trees on the horizon, easy vehicle access year-round, and excellent potential for a tranquil family homestead or rental development. Conveniently positioned within reach of Norton town amenities, this stand combines rural quiet with practical infrastructure. Contact us to arrange a viewing and secure this prime residential land before it’s gone.\r\n\r\n","url":"https://www.property.co.zw/for-sale/residential-land-stands-zane244866","identifier":"ZANE244866","datePosted":"2026-04-16","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-zane244866","availability":"http://schema.org/InStock","price":"15000","priceCurrency":"USD","serialNumber":"ZANE244866","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Zaneta Real Estate","logo":"https://www.property.co.zw/uploadedfiles/45/bb/41/45bb41b3-9779-4ef0-9dd9-a880dbce1caf.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Norton","addressRegion":"Norton","addressCountry":"Zimbabwe"},"name":"Residential stand for sale Mwashuma Park Norton","description":"Prime 1,200 m² residential stand in Norton, Mashonaland West — ready for your dream home or investment. Located within a newly laid subdivision (see aerial map), this plot is clearly demarcated among level, well-sized stands and enjoys direct access via compacted gravel roads shown in the photos. A functioning sewer system servitude is in place, and electricity poles are visible along the roadside, simplifying connection. The site offers open, sunny terrain with scattered trees on the horizon, easy vehicle access year-round, and excellent potential for a tranquil family homestead or rental development. Conveniently positioned within reach of Norton town amenities, this stand combines rural quiet with practical infrastructure. Contact us to arrange a viewing and secure this prime residential land before it’s gone.\r\n\r\n","image":["https://www.property.co.zw/uploadedfiles/7a/7b/45/7a7b45a2-c87d-4c60-b6e7-2c6c1341c70d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/11/1e/39/111e39d9-6cb4-401e-8423-97d65c5ea262_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/62/98/f5/6298f5dc-17c7-4467-93c1-b3e26bd3c397_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c7/fa/b7/c7fab7a8-38f5-428b-b364-0687f7402f64_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bc/dd/5f/bcdd5faa-94b2-4d2e-b917-14d293574ecd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/03/26/2b/03262bf0-be34-4b0b-8129-951e6ac99d38_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7b/46/d5/7b46d541-2100-4608-9ca1-ffd2c68d2a74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f8/3a/ad/f83aad0a-0141-4dc2-92f9-28ac9908818a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ae/80/51/ae805195-7178-4ea9-aca9-ed55e17b1bc8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/29/f7/aa/29f7aa53-343a-4268-928f-a9d2dd6c1114_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/dc/00/d7dc001b-718b-4158-b906-76ef32721685_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/da/dc/d7/dadcd7ca-bc30-4146-80ba-158eaeee5267_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3b/c3/65/3bc36541-fdea-4803-ac9b-73eeed64169e_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/7a/7b/45/7a7b45a2-c87d-4c60-b6e7-2c6c1341c70d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/11/1e/39/111e39d9-6cb4-401e-8423-97d65c5ea262_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/62/98/f5/6298f5dc-17c7-4467-93c1-b3e26bd3c397_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c7/fa/b7/c7fab7a8-38f5-428b-b364-0687f7402f64_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bc/dd/5f/bcdd5faa-94b2-4d2e-b917-14d293574ecd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/03/26/2b/03262bf0-be34-4b0b-8129-951e6ac99d38_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7b/46/d5/7b46d541-2100-4608-9ca1-ffd2c68d2a74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f8/3a/ad/f83aad0a-0141-4dc2-92f9-28ac9908818a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ae/80/51/ae805195-7178-4ea9-aca9-ed55e17b1bc8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/29/f7/aa/29f7aa53-343a-4268-928f-a9d2dd6c1114_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/dc/00/d7dc001b-718b-4158-b906-76ef32721685_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/da/dc/d7/dadcd7ca-bc30-4146-80ba-158eaeee5267_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3b/c3/65/3bc36541-fdea-4803-ac9b-73eeed64169e_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Zaneta Real Estate","logo":"https://www.property.co.zw/uploadedfiles/45/bb/41/45bb41b3-9779-4ef0-9dd9-a880dbce1caf.png"}}
        </script>
</div>

<div id="247661" data-mandate-id="249383" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(247661)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #2f3293; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/legacy-real-estate" style="cursor: pointer;">
                        <img src="/uploadedfiles/51/7a/74/517a74cd-7422-4b27-b37c-869abe428f78.jpg" alt="Legacy Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Legacy Real Estate" data-url="/estate-agents/legacy-real-estate" />
                    </a>

                        <a href="/estate-agents/legacy-real-estate/tinashe-kutsakatika/25613" class="vcenterFlex ">Tinashe Kutsakatika</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-247661 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="247661"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-leg247661">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1d/0a/55/1d0a5560-41b6-4866-8718-f1ec0472fc82_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ad/cf/61/adcf61df-2526-4de0-9a84-6211a9f9ce5c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8f/89/65/8f896560-af43-44c7-bf92-bbf90abf6285_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/25/4e/0c/254e0c82-5e1f-4d39-96b0-6b5fd32d8157_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ac/3d/cc/ac3dcc86-64e6-48fd-858b-4fc588534f11_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2a/2c/ca/2a2cca2e-f31f-481e-a258-aa55f0a94f77_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                A choice of 6 residential stands available in the growing and well-built area of Goodhope. These spacious 2000sqm stands are ready to build and offer an excellent opportunity for both home seekers and investors looking for value in a prime location.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-247661">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-247661">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="247661" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #2f3293; ">
                <div class="w-full">
                    <a href="/estate-agents/legacy-real-estate" style="cursor: pointer;">
                        <img src="/uploadedfiles/51/7a/74/517a74cd-7422-4b27-b37c-869abe428f78.jpg" alt="Legacy Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Legacy Real Estate" data-url="/estate-agents/legacy-real-estate" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/legacy-real-estate/tinashe-kutsakatika/25613" class="block text-center">Tinashe Kutsakatika</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-leg247661">USD 70,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-leg247661">
                        Goodhope Residential Stands With Negotiable Terms
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Goodhope, Harare West</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        2,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="247661"
                             data-entity-site-id="1382"
                             data-category="land"
                             data-type="sale"
                             data-reference="LEG247661"
                             data-ajax-url="/ContactForm/PortalNumbers/249383?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-leg247661"
                             data-whatsapp-url="https://rply.link/l/wR2lszyr0d"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="247661"
                             data-entity-site-id="1382"
                             data-category="land"
                             data-type="sale"
                             data-reference="LEG247661"
                             data-ajax-url="/ContactForm/PortalNumbers/249383?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-leg247661"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="247661"
                             data-entity-site-id="1382"
                             data-category="land"
                             data-type="sale"
                             data-reference="LEG247661"
                             data-ajax-url="/ContactForm/PortalEmail/249383?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-leg247661"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Goodhope Residential Stands With Negotiable Terms","description":"A choice of 6 residential stands available in the growing and well-built area of Goodhope. These spacious 2000sqm stands are ready to build and offer an excellent opportunity for both home seekers and investors looking for value in a prime location.","url":"https://www.property.co.zw/for-sale/residential-land-stands-leg247661","identifier":"LEG247661","datePosted":"2026-05-22","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-leg247661","availability":"http://schema.org/InStock","price":"70000","priceCurrency":"USD","serialNumber":"LEG247661","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Legacy Real Estate","logo":"https://www.property.co.zw/uploadedfiles/51/7a/74/517a74cd-7422-4b27-b37c-869abe428f78.jpg"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Goodhope","addressRegion":"Harare West","addressCountry":"Zimbabwe"},"name":"Goodhope Residential Stands With Negotiable Terms","description":"A choice of 6 residential stands available in the growing and well-built area of Goodhope. These spacious 2000sqm stands are ready to build and offer an excellent opportunity for both home seekers and investors looking for value in a prime location.","image":["https://www.property.co.zw/uploadedfiles/1d/0a/55/1d0a5560-41b6-4866-8718-f1ec0472fc82_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ad/cf/61/adcf61df-2526-4de0-9a84-6211a9f9ce5c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/89/65/8f896560-af43-44c7-bf92-bbf90abf6285_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/25/4e/0c/254e0c82-5e1f-4d39-96b0-6b5fd32d8157_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ac/3d/cc/ac3dcc86-64e6-48fd-858b-4fc588534f11_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2a/2c/ca/2a2cca2e-f31f-481e-a258-aa55f0a94f77_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/1d/0a/55/1d0a5560-41b6-4866-8718-f1ec0472fc82_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ad/cf/61/adcf61df-2526-4de0-9a84-6211a9f9ce5c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/89/65/8f896560-af43-44c7-bf92-bbf90abf6285_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/25/4e/0c/254e0c82-5e1f-4d39-96b0-6b5fd32d8157_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ac/3d/cc/ac3dcc86-64e6-48fd-858b-4fc588534f11_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2a/2c/ca/2a2cca2e-f31f-481e-a258-aa55f0a94f77_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Legacy Real Estate","logo":"https://www.property.co.zw/uploadedfiles/51/7a/74/517a74cd-7422-4b27-b37c-869abe428f78.jpg"}}
        </script>
</div>

<div id="210808" data-mandate-id="212536" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(210808)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" />
                    </a>

                        <a href="/estate-agents/realtor-ville/unotdashe-moyo/22842" class="vcenterFlex ">Unotdashe Moyo</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-210808 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="210808"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-rvl210808">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a6/b3/9c/a6b39c80-0ee3-4d25-a11d-cd8107993829_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ea/ea/15/eaea15d9-d714-4bbc-a0b4-71485e87699e_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d7/d8/33/d7d8336f-7ca9-4795-88e1-76fc7562280d_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9f/e9/e1/9fe9e17d-4cca-4992-9022-4875cac0340a_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/49/09/37/490937f4-854a-4286-9d53-391a517bceb7_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/01/40/58/0140582e-b04a-417b-86f1-9fba733c0b34_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Nestled next to prestigious Borrowdale Country Estate, is the gated community, its just 9 kilometers from Sam Levy Village. The development has a very convenient location, stunning views, and access to top-notch amenities. The development is very small and intimate and has access from Domboshava Road. This development is the perfect place to build your dream home. With beautiful green spaces and a secure environment. Start living your best life today
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-210808">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-210808">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            Sole Mandate
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/rKQiZwXiqwU" data-is-portrait="False" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="210808" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
                <div class="w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/realtor-ville/unotdashe-moyo/22842" class="block text-center">Unotdashe Moyo</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-rvl210808">USD 23,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-rvl210808">
                        Guildford Estate  gated community stands for sale
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Borrowdale, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        200 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="210808"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL210808"
                             data-ajax-url="/ContactForm/PortalNumbers/212536?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-rvl210808"
                             data-whatsapp-url="https://rply.link/l/Tq1oKnFE0D"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="210808"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL210808"
                             data-ajax-url="/ContactForm/PortalNumbers/212536?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-rvl210808"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="210808"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL210808"
                             data-ajax-url="/ContactForm/PortalEmail/212536?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-rvl210808"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Guildford Estate  gated community stands for sale","description":"Nestled next to prestigious Borrowdale Country Estate, is the gated community, its just 9 kilometers from Sam Levy Village. The development has a very convenient location, stunning views, and access to top-notch amenities. The development is very small and intimate and has access from Domboshava Road. This development is the perfect place to build your dream home. With beautiful green spaces and a secure environment. Start living your best life today","url":"https://www.property.co.zw/for-sale/residential-land-stands-rvl210808","identifier":"RVL210808","datePosted":"2025-01-15","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-rvl210808","availability":"http://schema.org/InStock","price":"23000","priceCurrency":"USD","serialNumber":"RVL210808","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Borrowdale","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Guildford Estate  gated community stands for sale","description":"Nestled next to prestigious Borrowdale Country Estate, is the gated community, its just 9 kilometers from Sam Levy Village. The development has a very convenient location, stunning views, and access to top-notch amenities. The development is very small and intimate and has access from Domboshava Road. This development is the perfect place to build your dream home. With beautiful green spaces and a secure environment. Start living your best life today","image":["https://www.property.co.zw/uploadedfiles/a6/b3/9c/a6b39c80-0ee3-4d25-a11d-cd8107993829_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ea/ea/15/eaea15d9-d714-4bbc-a0b4-71485e87699e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/d8/33/d7d8336f-7ca9-4795-88e1-76fc7562280d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9f/e9/e1/9fe9e17d-4cca-4992-9022-4875cac0340a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/49/09/37/490937f4-854a-4286-9d53-391a517bceb7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/01/40/58/0140582e-b04a-417b-86f1-9fba733c0b34_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/a6/b3/9c/a6b39c80-0ee3-4d25-a11d-cd8107993829_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ea/ea/15/eaea15d9-d714-4bbc-a0b4-71485e87699e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/d8/33/d7d8336f-7ca9-4795-88e1-76fc7562280d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9f/e9/e1/9fe9e17d-4cca-4992-9022-4875cac0340a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/49/09/37/490937f4-854a-4286-9d53-391a517bceb7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/01/40/58/0140582e-b04a-417b-86f1-9fba733c0b34_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"}}
        </script>
</div>            <div class="middle-content">
                                                    <div class="citify-snippet w-full max-w-full overflow-hidden mb-4">
                        <div class="flex items-center gap-2 md:gap-3 p-3 md:p-5 bg-gray-100 border border-neutral-200 text-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm">
                            <div class="article" data-height="58">
                                <p>Stands and residential land for sale in Zimbabwe offer a variety of options for buyers, with an average price of $73,310. The median land size is about 1,350 ㎡, ranging from smaller plots of 200 ㎡ to large parcels up to 130,852 ㎡, providing choices for different budgets and needs.</p>
<p>These land properties are typically undeveloped, allowing buyers to build according to their preferences. They are suitable for residential development or investment, with many plots located in areas experiencing growth and urban expansion. The flexibility of these stands makes them attractive for both individual homeowners and developers.</p>
<p>Zimbabwe is known for its diverse landscapes and rich cultural heritage, with major cities like Harare offering access to universities such as the University of Zimbabwe and shopping centers like Sam Levy's Village. The country also features notable natural attractions including Victoria Falls and several national parks. Buyers can enjoy a mix of urban amenities and natural beauty, making residential land in Zimbabwe a promising option for those seeking to build a home or invest in property.</p>
                            </div>
                        </div>
                    </div>
                
                    <div class="development-carousel">
                        <style>
                            .swiper-development-carousel h3 {
                                width: 340px;
                            }

                            @media(min-width: 768px) {
                                .swiper-development-carousel h3 {
                                    width: 300px;
                                }
                            }
                        </style>

                        <div class="development-carousel-results flex flex-col md:flex-row mb-6 border-0 rounded-md shadow relative">
                            <div class="w-full overflow-hidden">
                                <div class="swiper-container swiper-development-carousel overflow-hidden"
                                     data-carousel="development-carousel"
                                     data-value="development-carousel"
                                     data-autoplay="true"
                                     data-space-between="10"
                                     data-slidesperview="1"
                                     data-slidesperview-md="2"
                                     data-slidesperview-lg="3"
                                     data-slidesperview-xl="3"
                                     data-slidesperview-xxl="3">
                                    <div class="swiper-wrapper">
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/north-brook">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">Northbrook</h3>
                                                    <img src="/uploadedfiles/3d/59/85/3d598586-0834-400b-a1fa-f653032b37a9_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Northbrook, Bulawayo</p>
                                                            <p class="text-sm">From USD 12,700</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/aspireheightsaspindale">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis"> Aspire Heights Baobab</h3>
                                                    <img src="/uploadedfiles/08/0d/ce/080dce13-7409-4ac9-9ce6-df9fc12ccab3_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Aspindale Park, Harare</p>
                                                            <p class="text-sm">From USD 65,000</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/the-strand">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">The Strand office land in Borrowdale</h3>
                                                    <img src="/uploadedfiles/d8/50/06/d8500648-0fa2-4580-acba-77e8d41978dd_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Borrowdale, Harare</p>
                                                            <p class="text-sm">From USD 1,600,000</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/new-port">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">Newport</h3>
                                                    <img src="/uploadedfiles/ae/f3/57/aef3573f-18be-4c12-91cb-eb86d698fc74_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Newport, Harare</p>
                                                            <p class="text-sm">From USD 19,900</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/hudson-mews">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">Hudson Mews </h3>
                                                    <img src="/uploadedfiles/5a/05/2a/5a052a13-be81-40c8-89d7-e44d8551134e_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Hatfield, Harare</p>
                                                            <p class="text-sm">From USD 135,000</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/b-park">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">Borrowdale Park</h3>
                                                    <img src="/uploadedfiles/46/93/39/469339b2-703c-4aa3-b507-10324baffa3f_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Borrowdale, Harare</p>
                                                            <p class="text-sm">From USD 66,000</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/the-barnes">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">THE BARNES</h3>
                                                    <img src="/uploadedfiles/da/be/63/dabe6330-f762-40ff-b32e-a5f0d642d6e0_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">The Grange, Harare</p>
                                                            <p class="text-sm">From USD 205,000</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/silverbrook-estate">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">SilverBrook Estate</h3>
                                                    <img src="/uploadedfiles/c2/2c/51/c22c51da-fe8a-4fc6-b662-ff4ffedf09d4_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Ruwa, Mashonaland East</p>
                                                            <p class="text-sm">From USD 30,000</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/kadoma-plots">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">Kadoma Agro Plots </h3>
                                                    <img src="/uploadedfiles/ef/c6/e3/efc6e3ca-cf5e-4d0a-a522-a763387673d8_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Kadoma, Mashonaland West</p>
                                                            <p class="text-sm">From USD 25,000</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/spring-valley">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">Spring Valley  Estate Nyabira</h3>
                                                    <img src="/uploadedfiles/3d/06/77/3d067743-4dba-4b83-9e44-d56464005e5d_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Nyabira, Mashonaland West</p>
                                                            <p class="text-sm">From USD 19,500</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/bridgewood">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">Bridgewood Residential</h3>
                                                    <img src="/uploadedfiles/eb/fc/c5/ebfcc560-72df-43bf-bff0-72a4278798fc_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Gweru CBD, Midlands Province</p>
                                                            <p class="text-sm">From USD 17,500</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/bridgewood-commercial">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">Bridgewood Commercial</h3>
                                                    <img src="/uploadedfiles/4d/b1/1a/4db11a8b-9c5f-4575-8496-7783924f250f_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Gweru CBD, Midlands Province</p>
                                                            <p class="text-sm">From USD 67,500</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                            <div class="swiper-slide cursor-pointer">
                                                <a href="/development-projects/impali-dev">
                                                    <h3 class="text-secondary ml-1 mb-1 overflow-ellipsis">Impali Development</h3>
                                                    <img src="/uploadedfiles/1d/55/93/1d559311-1ccd-481f-8fce-a13173502dd2_thumbnail360.webp" class="w-full" />
                                                    <div class="flex justify-between p-1" style="margin-bottom: 2px;">
                                                        <div>
                                                            <p class="text-sm text-graypurpledark">Shurugwi, Midlands Province</p>
                                                            <p class="text-sm">From USD 20,000</p>
                                                        </div>
                                                        <div>
                                                            <div class="mt-1 py-1 px-2 bg-secondary text-white rounded-md">View</div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                    </div>
                                    <div class="carousel-prev-development-carousel w-6 h-full absolute left-0 top-0 z-10 cursor-pointer">
                                        <div class="w-6 h-full absolute left-0 vcenterFlex">
                                            <div class="w-full h-14 bg-gray-200 vcenterFlex opacity-50">
                                                <div class="arrow-l mx-auto" style="border-width: 8px; position: relative; right: 4px;"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-next-development-carousel w-6 h-full absolute top-0 right-0 z-10 cursor-pointer">
                                        <div class="w-6 h-full absolute right-0 vcenterFlex">
                                            <div class="w-full h-14 bg-gray-200 vcenterFlex opacity-50">
                                                <div class="arrow-r mx-auto" style="border-width: 8px; position: relative; left: 4px;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

            </div>
            <div class="eleventh-content">
                    <div class="banner-in-results">
    <div>
        <div id="advert-carousel-Eleventh" class="banner-rotate-on-refresh swiper-advert-carousel-Eleventh" data-autoplay="true" data-carousel="banner" data-value="advert-carousel-Eleventh" data-slidesperview="1" data-slidesperview-md="1" data-slidesperview-lg="1" data-slidesperview-xl="1" data-slidesperview-xxl="1">
            <div class="">
                    <a href="https://www.classifieds.co.zw/" class=" ga-parent block" target="_blank">

                        
                        <img alt="Classifieds"
                                loading="eager"
                                class="ga-banner-click ga-banner-view desktop hidden mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Classifieds" data-position="Search Page: 11th"
                                src="/uploadedfiles/3f/6a/7e/3f6a7e81-77e9-46b6-8ae4-ed68b38b51a9.webp"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Classifieds"
                                loading="eager"
                                class="ga-banner-click ga-banner-view mobile hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Classifieds" data-position="Search Page: 11th"
                                src="/uploadedfiles/ea/24/b4/ea24b42e-0ed1-43c1-9f4e-6f5bf6d34625.webp"
                                style="width: 100%; min-height: 123px;">
                    </a>
                    <a href="https://www.cars.co.zw/" class=" ga-parent block" target="_blank">

                        
                        <img alt="Cars"
                                loading="eager"
                                class="ga-banner-click ga-banner-view desktop hidden mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Cars" data-position="Search Page: 11th"
                                src="/uploadedfiles/22/2f/a3/222fa3f5-c7bc-4039-b8bf-b1d94e398271.jpg"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Cars"
                                loading="eager"
                                class="ga-banner-click ga-banner-view mobile hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Cars" data-position="Search Page: 11th"
                                src="/uploadedfiles/f7/01/58/f7015897-f910-4782-83d9-54a4681b9a61.jpg"
                                style="width: 100%; min-height: 123px;">
                    </a>
                    <a href="https://www.property.co.zw/development-projects" class=" ga-parent block" target="_blank">

                        
                        <img alt="PRZW Projects"
                                loading="eager"
                                class="ga-banner-click ga-banner-view desktop hidden mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="PRZW Projects" data-position="Search Page: 11th"
                                src="/uploadedfiles/1a/27/4c/1a274cfb-73ff-4817-a942-97025f1e4a01.webp"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="PRZW Projects"
                                loading="eager"
                                class="ga-banner-click ga-banner-view mobile hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="PRZW Projects" data-position="Search Page: 11th"
                                src="/uploadedfiles/ae/d6/56/aed65668-ae53-4b4d-b473-7281cbfa877c.webp"
                                style="width: 100%; min-height: 123px;">
                    </a>
                    <a href="https://www.property.co.zw/request-a-property" class=" ga-parent block" target="_blank">

                        
                        <img alt="PRZW RaP"
                                loading="eager"
                                class="ga-banner-click ga-banner-view desktop hidden mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="PRZW RaP" data-position="Search Page: 11th"
                                src="/uploadedfiles/81/5a/c1/815ac14b-84a8-4c60-bb5c-6a2c9b7ee8af.webp"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="PRZW RaP"
                                loading="eager"
                                class="ga-banner-click ga-banner-view mobile hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="PRZW RaP" data-position="Search Page: 11th"
                                src="/uploadedfiles/3b/29/43/3b29433b-17a1-40bf-9746-2916c9936c6f.webp"
                                style="width: 100%; min-height: 123px;">
                    </a>
                    <a href="https://www.calameo.com/read/0076167118b5ff03b5587" class=" ga-parent block" target="_blank">

                        
                        <img alt="Directory"
                                loading="eager"
                                class="ga-banner-click ga-banner-view desktop hidden mx-auto w-full swiper-fullsize swiper-lazy"
                                data-name="Directory" data-position="Search Page: 11th"
                                src="/uploadedfiles/41/e7/bb/41e7bb6d-de38-4475-bd4d-9fed67385755.jpg"
                                style="width: 788px; height:101px;">
                        
                        
                        <img alt="Directory"
                                loading="eager"
                                class="ga-banner-click ga-banner-view mobile hidden mx-auto w-full swiper-thumbnail swiper-lazy"
                                data-name="Directory" data-position="Search Page: 11th"
                                src="/uploadedfiles/da/2d/f4/da2df4ba-f311-4544-a687-e02660c83bee.jpg"
                                style="width: 100%; min-height: 123px;">
                    </a>
            </div>
        </div>

    </div>

                    </div>
                            </div>


<div id="234873" data-mandate-id="236595" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(234873)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" />
                    </a>

                        <a href="/estate-agents/seeff/brenda-sengwayo/19825" class="vcenterFlex ">Brenda Sengwayo</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-234873 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="234873"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-sef234873">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/fd/d0/7d/fdd07d8c-70ad-4500-8170-b6f2e1678a70_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/30/40/d1/3040d1fa-211d-412e-8946-3597e23ee5a4_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b1/94/7e/b1947ec2-56cc-41f4-ba03-c77fb9f7c296_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/fb/ef/3b/fbef3b0c-1284-4984-8d3a-5547d7c69afe_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a7/39/f5/a739f502-9a3b-458d-a07c-800c3802fed2_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/41/ee/4f/41ee4f32-f2f0-4c9e-8ad5-288d2d77feed_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9f/63/8b/9f638bd1-bcd3-4524-ab14-9c2a529ebbb5_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                This is an exceptional opportunity to acquire a substantial parcel of vacant land strategically located in the sought-after Hatfield area just behind Airport Road and off Harare Drive.

Key Property Details

Location: Situated directly along Falcon Road, offering excellent accessibility.

Proximity: Adjacent to the renowned Falcon Gold Club, enhancing its appeal and potential value.

Size: Generous expanse of 6.1 Hectares (approximately 15.07 acres).

Documentation: Secured by a Full Title Deed, ensuring a clear and unencumbered transfer of ownership.

Development and Utility Infrastructure

The site is particularly well-suited for development due to existing and planned infrastructure:

Sewerage: A major sewer line runs parallel to the stand, simplifying connection and reducing potential infrastructure costs for development.

Water: Two boreholes have been successfu...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-234873">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-234873">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="234873" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
                <div class="w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/seeff/brenda-sengwayo/19825" class="block text-center">Brenda Sengwayo</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-sef234873">USD 3,000,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-sef234873">
                        Exclusive Development Opportunity: Prime Vacant Land in Hatfield
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Hatfield, Harare South</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        61,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="234873"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF234873"
                             data-ajax-url="/ContactForm/PortalNumbers/236595?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-sef234873"
                             data-whatsapp-url="https://rply.link/l/4cJjxD0zHZ"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="234873"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF234873"
                             data-ajax-url="/ContactForm/PortalNumbers/236595?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-sef234873"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="234873"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF234873"
                             data-ajax-url="/ContactForm/PortalEmail/236595?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-sef234873"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Exclusive Development Opportunity: Prime Vacant Land in Hatfield","description":"This is an exceptional opportunity to acquire a substantial parcel of vacant land strategically located in the sought-after Hatfield area just behind Airport Road and off Harare Drive.\r\n\r\nKey Property Details\r\n\r\nLocation: Situated directly along Falcon Road, offering excellent accessibility.\r\n\r\nProximity: Adjacent to the renowned Falcon Gold Club, enhancing its appeal and potential value.\r\n\r\nSize: Generous expanse of 6.1 Hectares (approximately 15.07 acres).\r\n\r\nDocumentation: Secured by a Full Title Deed, ensuring a clear and unencumbered transfer of ownership.\r\n\r\nDevelopment and Utility Infrastructure\r\n\r\nThe site is particularly well-suited for development due to existing and planned infrastructure:\r\n\r\nSewerage: A major sewer line runs parallel to the stand, simplifying connection and reducing potential infrastructure costs for development.\r\n\r\nWater: Two boreholes have been successfu...","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef234873","identifier":"SEF234873","datePosted":"2025-11-24","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef234873","availability":"http://schema.org/InStock","price":"3000000","priceCurrency":"USD","serialNumber":"SEF234873","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Hatfield","addressRegion":"Harare South","addressCountry":"Zimbabwe"},"name":"Exclusive Development Opportunity: Prime Vacant Land in Hatfield","description":"This is an exceptional opportunity to acquire a substantial parcel of vacant land strategically located in the sought-after Hatfield area just behind Airport Road and off Harare Drive.\r\n\r\nKey Property Details\r\n\r\nLocation: Situated directly along Falcon Road, offering excellent accessibility.\r\n\r\nProximity: Adjacent to the renowned Falcon Gold Club, enhancing its appeal and potential value.\r\n\r\nSize: Generous expanse of 6.1 Hectares (approximately 15.07 acres).\r\n\r\nDocumentation: Secured by a Full Title Deed, ensuring a clear and unencumbered transfer of ownership.\r\n\r\nDevelopment and Utility Infrastructure\r\n\r\nThe site is particularly well-suited for development due to existing and planned infrastructure:\r\n\r\nSewerage: A major sewer line runs parallel to the stand, simplifying connection and reducing potential infrastructure costs for development.\r\n\r\nWater: Two boreholes have been successfu...","image":["https://www.property.co.zw/uploadedfiles/fd/d0/7d/fdd07d8c-70ad-4500-8170-b6f2e1678a70_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/30/40/d1/3040d1fa-211d-412e-8946-3597e23ee5a4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b1/94/7e/b1947ec2-56cc-41f4-ba03-c77fb9f7c296_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fb/ef/3b/fbef3b0c-1284-4984-8d3a-5547d7c69afe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a7/39/f5/a739f502-9a3b-458d-a07c-800c3802fed2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/41/ee/4f/41ee4f32-f2f0-4c9e-8ad5-288d2d77feed_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9f/63/8b/9f638bd1-bcd3-4524-ab14-9c2a529ebbb5_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/fd/d0/7d/fdd07d8c-70ad-4500-8170-b6f2e1678a70_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/30/40/d1/3040d1fa-211d-412e-8946-3597e23ee5a4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b1/94/7e/b1947ec2-56cc-41f4-ba03-c77fb9f7c296_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fb/ef/3b/fbef3b0c-1284-4984-8d3a-5547d7c69afe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a7/39/f5/a739f502-9a3b-458d-a07c-800c3802fed2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/41/ee/4f/41ee4f32-f2f0-4c9e-8ad5-288d2d77feed_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9f/63/8b/9f638bd1-bcd3-4524-ab14-9c2a529ebbb5_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}}
        </script>
</div>

<div id="248603" data-mandate-id="250325" class="ResultCardItem PriorityCarousel LessThan4 mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(248603)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #093c71; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/just-property" style="cursor: pointer;">
                        <img src="/uploadedfiles/81/e5/5f/81e55f9c-712f-415d-b957-1a87c05e9ac3.png" alt="Just Property" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Just Property" data-url="/estate-agents/just-property" />
                    </a>

                        <a href="/estate-agents/just-property/mercy-madziva/24053" class="vcenterFlex ">Mercy Madziva</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-248603 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="248603"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-jspp248603">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5f/31/eb/5f31eb3d-2a29-4066-bb3b-1d80e2c1d70c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/41/d7/e1/41d7e1d8-7c84-4a81-8d75-e8250d0e293c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/48/a2/a2/48a2a2f6-b324-4933-ae9f-7f8cabcf72c8_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Vacant stand in the new development of Pomona City.  This has development has great access fully tarred roads.  Promising to be a secure neighborhood.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-248603">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-248603">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            New
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="248603" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #093c71; ">
                <div class="w-full">
                    <a href="/estate-agents/just-property" style="cursor: pointer;">
                        <img src="/uploadedfiles/81/e5/5f/81e55f9c-712f-415d-b957-1a87c05e9ac3.png" alt="Just Property" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Just Property" data-url="/estate-agents/just-property" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/just-property/mercy-madziva/24053" class="block text-center">Mercy Madziva</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-jspp248603">USD 60,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-jspp248603">
                        Vacant Stand in Pomona City Reduced to Go
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Pomona, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        501 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="248603"
                             data-entity-site-id="1740"
                             data-category="land"
                             data-type="sale"
                             data-reference="JSPP248603"
                             data-ajax-url="/ContactForm/PortalNumbers/250325?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-jspp248603"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="248603"
                             data-entity-site-id="1740"
                             data-category="land"
                             data-type="sale"
                             data-reference="JSPP248603"
                             data-ajax-url="/ContactForm/PortalEmail/250325?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-jspp248603"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Vacant Stand in Pomona City Reduced to Go","description":"Vacant stand in the new development of Pomona City.  This has development has great access fully tarred roads.  Promising to be a secure neighborhood.","url":"https://www.property.co.zw/for-sale/residential-land-stands-jspp248603","identifier":"JSPP248603","datePosted":"2026-06-04","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-jspp248603","availability":"http://schema.org/InStock","price":"60000","priceCurrency":"USD","serialNumber":"JSPP248603","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Just Property","logo":"https://www.property.co.zw/uploadedfiles/81/e5/5f/81e55f9c-712f-415d-b957-1a87c05e9ac3.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Pomona","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Vacant Stand in Pomona City Reduced to Go","description":"Vacant stand in the new development of Pomona City.  This has development has great access fully tarred roads.  Promising to be a secure neighborhood.","image":["https://www.property.co.zw/uploadedfiles/5f/31/eb/5f31eb3d-2a29-4066-bb3b-1d80e2c1d70c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/41/d7/e1/41d7e1d8-7c84-4a81-8d75-e8250d0e293c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/48/a2/a2/48a2a2f6-b324-4933-ae9f-7f8cabcf72c8_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/5f/31/eb/5f31eb3d-2a29-4066-bb3b-1d80e2c1d70c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/41/d7/e1/41d7e1d8-7c84-4a81-8d75-e8250d0e293c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/48/a2/a2/48a2a2f6-b324-4933-ae9f-7f8cabcf72c8_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Just Property","logo":"https://www.property.co.zw/uploadedfiles/81/e5/5f/81e55f9c-712f-415d-b957-1a87c05e9ac3.png"}}
        </script>
</div>

<div id="248285" data-mandate-id="250007" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(248285)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/vantris-property-group" style="cursor: pointer;">
                        <img src="/uploadedfiles/07/89/34/07893427-17c5-41d5-b888-a598a49c018a.jpg" alt="Vantris Property Group" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Vantris Property Group" data-url="/estate-agents/vantris-property-group" />
                    </a>

                        <a href="/estate-agents/vantris-property-group/sandra-madanhi/26378" class="vcenterFlex ">Sandra Madanhi</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-248285 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="248285"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-vpg248285">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9b/99/17/9b9917fd-1f16-4d1d-880a-7d3e65f34c0f_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a5/f2/2b/a5f22b5e-fada-4b28-b41f-779ac1eeebba_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/14/06/19/140619c6-857e-440a-a918-ad50bf45c932_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/65/8b/b7/658bb763-a220-4443-a786-b81d23401de0_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/34/85/1f/34851f16-6e39-41bf-9bda-440258ca390d_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4d/48/9e/4d489eef-c20b-4127-84fd-d858dbf2ef0f_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                HARARE NORTH STANDS FOR SALE :
SAWARA HILLS SURBURB - 1,7 KM FROM CROWHILL RD ROUNDABOUT ????

?? SIZE  : 1000 SQM
?? STATUS: Ready to build 
?? PAPERWORK: Title 
deeds 
?? ASKING  PRICE : US$15000,00
NB: 60 STANDS AVAILABLE...??????????????
Contact us for viewings 
Hurry while stocks last.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-248285">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-248285">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            New
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="248285" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/vantris-property-group" style="cursor: pointer;">
                        <img src="/uploadedfiles/07/89/34/07893427-17c5-41d5-b888-a598a49c018a.jpg" alt="Vantris Property Group" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Vantris Property Group" data-url="/estate-agents/vantris-property-group" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/vantris-property-group/sandra-madanhi/26378" class="block text-center">Sandra Madanhi</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-vpg248285">USD 15,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-vpg248285">
                        Sawara hills stands for sale with Title Deeds!!!
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Crowhill Views, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        1,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="248285"
                             data-entity-site-id="1828"
                             data-category="land"
                             data-type="sale"
                             data-reference="VPG248285"
                             data-ajax-url="/ContactForm/PortalNumbers/250007?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-vpg248285"
                             data-whatsapp-url="https://rply.link/l/DgTQ3hPhVh"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="248285"
                             data-entity-site-id="1828"
                             data-category="land"
                             data-type="sale"
                             data-reference="VPG248285"
                             data-ajax-url="/ContactForm/PortalNumbers/250007?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-vpg248285"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="248285"
                             data-entity-site-id="1828"
                             data-category="land"
                             data-type="sale"
                             data-reference="VPG248285"
                             data-ajax-url="/ContactForm/PortalEmail/250007?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-vpg248285"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Sawara hills stands for sale with Title Deeds!!!","description":"HARARE NORTH STANDS FOR SALE :\r\nSAWARA HILLS SURBURB - 1,7 KM FROM CROWHILL RD ROUNDABOUT ????\r\n\r\n?? SIZE  : 1000 SQM\r\n?? STATUS: Ready to build \r\n?? PAPERWORK: Title \r\ndeeds \r\n?? ASKING  PRICE : US$15000,00\r\nNB: 60 STANDS AVAILABLE...??????????????\r\nContact us for viewings \r\nHurry while stocks last.","url":"https://www.property.co.zw/for-sale/residential-land-stands-vpg248285","identifier":"VPG248285","datePosted":"2026-06-01","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-vpg248285","availability":"http://schema.org/InStock","price":"15000","priceCurrency":"USD","serialNumber":"VPG248285","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Vantris Property Group","logo":"https://www.property.co.zw/uploadedfiles/07/89/34/07893427-17c5-41d5-b888-a598a49c018a.jpg"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Crowhill Views","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Sawara hills stands for sale with Title Deeds!!!","description":"HARARE NORTH STANDS FOR SALE :\r\nSAWARA HILLS SURBURB - 1,7 KM FROM CROWHILL RD ROUNDABOUT ????\r\n\r\n?? SIZE  : 1000 SQM\r\n?? STATUS: Ready to build \r\n?? PAPERWORK: Title \r\ndeeds \r\n?? ASKING  PRICE : US$15000,00\r\nNB: 60 STANDS AVAILABLE...??????????????\r\nContact us for viewings \r\nHurry while stocks last.","image":["https://www.property.co.zw/uploadedfiles/9b/99/17/9b9917fd-1f16-4d1d-880a-7d3e65f34c0f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a5/f2/2b/a5f22b5e-fada-4b28-b41f-779ac1eeebba_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/14/06/19/140619c6-857e-440a-a918-ad50bf45c932_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/65/8b/b7/658bb763-a220-4443-a786-b81d23401de0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/85/1f/34851f16-6e39-41bf-9bda-440258ca390d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4d/48/9e/4d489eef-c20b-4127-84fd-d858dbf2ef0f_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/9b/99/17/9b9917fd-1f16-4d1d-880a-7d3e65f34c0f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a5/f2/2b/a5f22b5e-fada-4b28-b41f-779ac1eeebba_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/14/06/19/140619c6-857e-440a-a918-ad50bf45c932_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/65/8b/b7/658bb763-a220-4443-a786-b81d23401de0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/85/1f/34851f16-6e39-41bf-9bda-440258ca390d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4d/48/9e/4d489eef-c20b-4127-84fd-d858dbf2ef0f_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Vantris Property Group","logo":"https://www.property.co.zw/uploadedfiles/07/89/34/07893427-17c5-41d5-b888-a598a49c018a.jpg"}}
        </script>
</div>

<div id="243662" data-mandate-id="245384" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(243662)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" />
                    </a>

                        <a href="/estate-agents/seeff/brenda-sengwayo/19825" class="vcenterFlex ">Brenda Sengwayo</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-243662 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="243662"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-sef243662">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ce/a7/cf/cea7cf19-50a1-4f0d-95ec-047156c24527_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/54/69/40/546940ec-0954-46fe-9b3a-8164b111aa34_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5d/de/b2/5ddeb258-2bbe-4c2c-8e3f-a04aef31aa3c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e1/91/a4/e191a4a1-c557-43b3-9c75-253e27802479_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/27/09/c4/2709c437-78e0-4da8-973c-e3ac65aace82_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2f/d1/d0/2fd1d09b-f0bb-4a10-8729-ed5585f98b45_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                
Discover an exceptional investment opportunity in the heart of Hatfield. We are pleased to offer a selection of three prime vacant stands situated along the well-regarded Glamis Road. These properties offer a perfect blend of space, convenience, and security for your future home or project.
Property Highlights
* Generous Sizes: Choice of three stands ranging from 2,004m&#178; to 2,021m&#178; at $40 per sqm.
* Prime Location: Ideally positioned on Glamis Road with easy access to local amenities.
* Full Services: Each stand is fully serviced, ensuring a seamless transition to construction.
* Ownership Ready: All properties are ready for immediate title deed processing.


$85 000 price for terms - 50% deposit balance in 8 months 
$80 160 cash once off payment 
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-243662">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-243662">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            Sole Mandate
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="243662" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
                <div class="w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/seeff/brenda-sengwayo/19825" class="block text-center">Brenda Sengwayo</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-sef243662">USD 85,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-sef243662">
                        Hatfield ready to build stands with option of Terms
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Hatfield, Harare South</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        2,004 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="243662"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF243662"
                             data-ajax-url="/ContactForm/PortalNumbers/245384?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-sef243662"
                             data-whatsapp-url="https://rply.link/l/Msy767CFEh"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="243662"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF243662"
                             data-ajax-url="/ContactForm/PortalNumbers/245384?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-sef243662"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="243662"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF243662"
                             data-ajax-url="/ContactForm/PortalEmail/245384?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-sef243662"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Hatfield ready to build stands with option of Terms","description":"\r\nDiscover an exceptional investment opportunity in the heart of Hatfield. We are pleased to offer a selection of three prime vacant stands situated along the well-regarded Glamis Road. These properties offer a perfect blend of space, convenience, and security for your future home or project.\r\nProperty Highlights\r\n* Generous Sizes: Choice of three stands ranging from 2,004m² to 2,021m² at $40 per sqm.\r\n* Prime Location: Ideally positioned on Glamis Road with easy access to local amenities.\r\n* Full Services: Each stand is fully serviced, ensuring a seamless transition to construction.\r\n* Ownership Ready: All properties are ready for immediate title deed processing.\r\n\r\n\r\n$85 000 price for terms - 50% deposit balance in 8 months \r\n$80 160 cash once off payment ","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef243662","identifier":"SEF243662","datePosted":"2026-03-27","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef243662","availability":"http://schema.org/InStock","price":"85000","priceCurrency":"USD","serialNumber":"SEF243662","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Hatfield","addressRegion":"Harare South","addressCountry":"Zimbabwe"},"name":"Hatfield ready to build stands with option of Terms","description":"\r\nDiscover an exceptional investment opportunity in the heart of Hatfield. We are pleased to offer a selection of three prime vacant stands situated along the well-regarded Glamis Road. These properties offer a perfect blend of space, convenience, and security for your future home or project.\r\nProperty Highlights\r\n* Generous Sizes: Choice of three stands ranging from 2,004m² to 2,021m² at $40 per sqm.\r\n* Prime Location: Ideally positioned on Glamis Road with easy access to local amenities.\r\n* Full Services: Each stand is fully serviced, ensuring a seamless transition to construction.\r\n* Ownership Ready: All properties are ready for immediate title deed processing.\r\n\r\n\r\n$85 000 price for terms - 50% deposit balance in 8 months \r\n$80 160 cash once off payment ","image":["https://www.property.co.zw/uploadedfiles/ce/a7/cf/cea7cf19-50a1-4f0d-95ec-047156c24527_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/54/69/40/546940ec-0954-46fe-9b3a-8164b111aa34_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5d/de/b2/5ddeb258-2bbe-4c2c-8e3f-a04aef31aa3c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e1/91/a4/e191a4a1-c557-43b3-9c75-253e27802479_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/27/09/c4/2709c437-78e0-4da8-973c-e3ac65aace82_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/d1/d0/2fd1d09b-f0bb-4a10-8729-ed5585f98b45_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/ce/a7/cf/cea7cf19-50a1-4f0d-95ec-047156c24527_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/54/69/40/546940ec-0954-46fe-9b3a-8164b111aa34_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5d/de/b2/5ddeb258-2bbe-4c2c-8e3f-a04aef31aa3c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e1/91/a4/e191a4a1-c557-43b3-9c75-253e27802479_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/27/09/c4/2709c437-78e0-4da8-973c-e3ac65aace82_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/d1/d0/2fd1d09b-f0bb-4a10-8729-ed5585f98b45_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}}
        </script>
</div>            <div class="fifteenth-content">
                                    <div class="snippet-in-results">



<div class="shadow text-lg SocialSnippetAll">
	<div class="text-center text-white bg-secondary py-2 rounded-t-md">Follow us on Social Media</div>
	<div class="w-full px-4 py-2 border border-secondary rounded-b-md text-secondary flex flex-col md:flex-row" style="justify-content: space-evenly">
        <a href="https://www.facebook.com/property.co.zw" class="text-center mb-2 md:mb-0" target="_blank"><i class="fa mr-2 fa-facebook" aria-hidden="true"></i>Property.co.zw Page</a>
        <a href="https://x.com/Property_Zw" class="text-center" target="_blank"><i class="fa mr-2 fa-twitter" aria-hidden="true"></i>Property.co.zw X Page</a>
    </div>
</div>
                    </div>
                
            </div>


<div id="220814" data-mandate-id="222541" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(220814)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" />
                    </a>

                        <a href="/estate-agents/seeff/tinashe/20416" class="vcenterFlex ">Tinashe </a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-220814 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="220814"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-sef220814">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/94/01/35/940135da-33cc-4534-8349-18619fb0400d_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0a/32/32/0a323239-22e5-4f07-b567-afed7537de4b_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0b/fa/b8/0bfab8d0-2ce1-402f-a091-93f3113f40f9_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/cd/a5/3d/cda53dc1-5656-4d6b-9738-d2a0f2ee79dd_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8f/98/8f/8f988f58-024d-4eb5-a7fb-167d83ed10f3_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7d/d9/dc/7dd9dcc2-83a7-4cc0-9cb2-74186154e6ef_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/47/8c/bb/478cbb76-1ceb-478f-98b9-836600dbaa3b_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c5/79/bb/c579bb5e-5c76-456b-bf80-aef72944a71c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c6/aa/ff/c6aaff75-ec67-412e-826c-10d45ac49ef9_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c5/f5/6a/c5f56ab5-bacd-42c0-99ee-19fc00891271_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/05/0d/06/050d06d9-6eaf-4689-b28e-e40a38a2373d_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/98/4d/cc/984dccf4-c84b-4fc8-a02b-9fdf54413ca3_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/07/3a/67/073a6728-af52-4a35-ad07-a33b56415a3e_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/78/f0/35/78f03514-9624-4f65-be18-bad52da230e3_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e5/ab/37/e5ab3796-3e84-43b4-8c70-ccce79059e17_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c7/22/a1/c722a122-04a3-4da7-9e2b-6b0e5e5ea276_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b9/cd/a6/b9cda640-c350-4bf9-9ede-1b8c17a46ad5_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/14/e6/ce/14e6ce32-c4da-48a3-9e37-9987f51b1242_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1b/14/12/1b141292-f711-4403-86b2-f7a981110118_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Discover an unparalleled opportunity to acquire a magnificent 3420 square meter residential stand situated on elevated land within a pristine cul-de-sac of the highly coveted Pomona, Borrowdale suburb. This exceptional property offers fantastic, sweeping views and boasts a desirable gently sloping terrain, perfect for a bespoke architectural design that capitalizes on its scenic surroundings. Fully serviced with tarred roads and electricity, this stand is primed for immediate development. Its prime location places it within the immediate vicinity of upmarket amenities, ensuring a lifestyle of ultimate convenience and luxury. With all documentation in order and ready for title deeds, this is a secure and swift investment. Seize this rare chance to build your dream home in one of Borrowdale&#39;s most prestigious enclaves for an asking price of $350,000 USD.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-220814">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-220814">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="220814" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
                <div class="w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/seeff/tinashe/20416" class="block text-center">Tinashe </a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-sef220814">USD 350,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-sef220814">
                        Panoramic Views Await: Prime Residential Stand in Prestigious Pomona!
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Pomona, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        3,420 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="220814"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF220814"
                             data-ajax-url="/ContactForm/PortalNumbers/222541?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-sef220814"
                             data-whatsapp-url="https://rply.link/l/vg6s4iCpbG"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="220814"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF220814"
                             data-ajax-url="/ContactForm/PortalNumbers/222541?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-sef220814"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="220814"
                             data-entity-site-id="1271"
                             data-category="land"
                             data-type="sale"
                             data-reference="SEF220814"
                             data-ajax-url="/ContactForm/PortalEmail/222541?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-sef220814"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Panoramic Views Await: Prime Residential Stand in Prestigious Pomona!","description":"Discover an unparalleled opportunity to acquire a magnificent 3420 square meter residential stand situated on elevated land within a pristine cul-de-sac of the highly coveted Pomona, Borrowdale suburb. This exceptional property offers fantastic, sweeping views and boasts a desirable gently sloping terrain, perfect for a bespoke architectural design that capitalizes on its scenic surroundings. Fully serviced with tarred roads and electricity, this stand is primed for immediate development. Its prime location places it within the immediate vicinity of upmarket amenities, ensuring a lifestyle of ultimate convenience and luxury. With all documentation in order and ready for title deeds, this is a secure and swift investment. Seize this rare chance to build your dream home in one of Borrowdale's most prestigious enclaves for an asking price of $350,000 USD.","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef220814","identifier":"SEF220814","datePosted":"2025-05-23","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-sef220814","availability":"http://schema.org/InStock","price":"350000","priceCurrency":"USD","serialNumber":"SEF220814","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Pomona","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Panoramic Views Await: Prime Residential Stand in Prestigious Pomona!","description":"Discover an unparalleled opportunity to acquire a magnificent 3420 square meter residential stand situated on elevated land within a pristine cul-de-sac of the highly coveted Pomona, Borrowdale suburb. This exceptional property offers fantastic, sweeping views and boasts a desirable gently sloping terrain, perfect for a bespoke architectural design that capitalizes on its scenic surroundings. Fully serviced with tarred roads and electricity, this stand is primed for immediate development. Its prime location places it within the immediate vicinity of upmarket amenities, ensuring a lifestyle of ultimate convenience and luxury. With all documentation in order and ready for title deeds, this is a secure and swift investment. Seize this rare chance to build your dream home in one of Borrowdale's most prestigious enclaves for an asking price of $350,000 USD.","image":["https://www.property.co.zw/uploadedfiles/94/01/35/940135da-33cc-4534-8349-18619fb0400d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0a/32/32/0a323239-22e5-4f07-b567-afed7537de4b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/fa/b8/0bfab8d0-2ce1-402f-a091-93f3113f40f9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cd/a5/3d/cda53dc1-5656-4d6b-9738-d2a0f2ee79dd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/98/8f/8f988f58-024d-4eb5-a7fb-167d83ed10f3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/d9/dc/7dd9dcc2-83a7-4cc0-9cb2-74186154e6ef_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/47/8c/bb/478cbb76-1ceb-478f-98b9-836600dbaa3b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/79/bb/c579bb5e-5c76-456b-bf80-aef72944a71c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c6/aa/ff/c6aaff75-ec67-412e-826c-10d45ac49ef9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/f5/6a/c5f56ab5-bacd-42c0-99ee-19fc00891271_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/05/0d/06/050d06d9-6eaf-4689-b28e-e40a38a2373d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/98/4d/cc/984dccf4-c84b-4fc8-a02b-9fdf54413ca3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/07/3a/67/073a6728-af52-4a35-ad07-a33b56415a3e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/78/f0/35/78f03514-9624-4f65-be18-bad52da230e3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e5/ab/37/e5ab3796-3e84-43b4-8c70-ccce79059e17_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c7/22/a1/c722a122-04a3-4da7-9e2b-6b0e5e5ea276_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b9/cd/a6/b9cda640-c350-4bf9-9ede-1b8c17a46ad5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/14/e6/ce/14e6ce32-c4da-48a3-9e37-9987f51b1242_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/14/12/1b141292-f711-4403-86b2-f7a981110118_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/94/01/35/940135da-33cc-4534-8349-18619fb0400d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0a/32/32/0a323239-22e5-4f07-b567-afed7537de4b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/fa/b8/0bfab8d0-2ce1-402f-a091-93f3113f40f9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cd/a5/3d/cda53dc1-5656-4d6b-9738-d2a0f2ee79dd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/98/8f/8f988f58-024d-4eb5-a7fb-167d83ed10f3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/d9/dc/7dd9dcc2-83a7-4cc0-9cb2-74186154e6ef_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/47/8c/bb/478cbb76-1ceb-478f-98b9-836600dbaa3b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/79/bb/c579bb5e-5c76-456b-bf80-aef72944a71c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c6/aa/ff/c6aaff75-ec67-412e-826c-10d45ac49ef9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/f5/6a/c5f56ab5-bacd-42c0-99ee-19fc00891271_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/05/0d/06/050d06d9-6eaf-4689-b28e-e40a38a2373d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/98/4d/cc/984dccf4-c84b-4fc8-a02b-9fdf54413ca3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/07/3a/67/073a6728-af52-4a35-ad07-a33b56415a3e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/78/f0/35/78f03514-9624-4f65-be18-bad52da230e3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e5/ab/37/e5ab3796-3e84-43b4-8c70-ccce79059e17_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c7/22/a1/c722a122-04a3-4da7-9e2b-6b0e5e5ea276_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b9/cd/a6/b9cda640-c350-4bf9-9ede-1b8c17a46ad5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/14/e6/ce/14e6ce32-c4da-48a3-9e37-9987f51b1242_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/14/12/1b141292-f711-4403-86b2-f7a981110118_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}}
        </script>
</div>

<div id="244445" data-mandate-id="246167" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(244445)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #0b2518; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/machomes" style="cursor: pointer;">
                        <img src="/uploadedfiles/e4/40/d2/e440d2af-7aea-42e6-80ef-db54fd4025ee.jpg" alt="Mac Homes" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Mac Homes" data-url="/estate-agents/machomes" />
                    </a>

                        <a href="/estate-agents/machomes/sibongile-muchinenyika/24686" class="vcenterFlex ">Sibongile Muchinenyika</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-244445 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="244445"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-mac244445">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b4/e2/31/b4e2313b-05c5-41ef-99e0-192b0e377fcd_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/82/88/d0/8288d03f-5b22-405d-9242-073a5d23e2e9_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d5/f3/c4/d5f3c48d-bba1-4c05-853b-178c9ae58d01_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/35/e1/f3/35e1f32e-c9ca-4ffc-a825-4a8700e99c81_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Prime 800 m&#178; stand for sale in Chipukutu Park, Ruwa — perfect for your dream home or a secure investment. This level, easy-to-develop parcel fronts a quiet tarred road, as shown in the photos, with neat kerbside grass, a few established trees and productive garden beds indicating fertile soil. Neighbouring single-storey homes with tiled roofs and a visible green municipal water tank confirm reliable municipal water supply and an emerging, low-density residential community. The plot receives excellent natural light beneath clear skies and offers straightforward access for construction vehicles and services. Ideal for a family residence, a modern townhouse scheme (subject to approvals) or long-term capital growth. Secure this well-located stand in Mashonaland East and build with confidence — enquire today to arrange a viewing and start your plans.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-244445">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-244445">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            Sole Mandate
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="244445" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #0b2518; ">
                <div class="w-full">
                    <a href="/estate-agents/machomes" style="cursor: pointer;">
                        <img src="/uploadedfiles/e4/40/d2/e440d2af-7aea-42e6-80ef-db54fd4025ee.jpg" alt="Mac Homes" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Mac Homes" data-url="/estate-agents/machomes" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/machomes/sibongile-muchinenyika/24686" class="block text-center">Sibongile Muchinenyika</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-mac244445">USD 30,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-mac244445">
                        Ruwa Chipukutu park residential stand for sale 
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Chipukutu Park, Ruwa</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        800 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="244445"
                             data-entity-site-id="65"
                             data-category="land"
                             data-type="sale"
                             data-reference="MAC244445"
                             data-ajax-url="/ContactForm/PortalNumbers/246167?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-mac244445"
                             data-whatsapp-url="https://rply.link/l/47IxRPnijA"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="244445"
                             data-entity-site-id="65"
                             data-category="land"
                             data-type="sale"
                             data-reference="MAC244445"
                             data-ajax-url="/ContactForm/PortalNumbers/246167?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-mac244445"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="244445"
                             data-entity-site-id="65"
                             data-category="land"
                             data-type="sale"
                             data-reference="MAC244445"
                             data-ajax-url="/ContactForm/PortalEmail/246167?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-mac244445"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Ruwa Chipukutu park residential stand for sale ","description":"Prime 800 m² stand for sale in Chipukutu Park, Ruwa — perfect for your dream home or a secure investment. This level, easy-to-develop parcel fronts a quiet tarred road, as shown in the photos, with neat kerbside grass, a few established trees and productive garden beds indicating fertile soil. Neighbouring single-storey homes with tiled roofs and a visible green municipal water tank confirm reliable municipal water supply and an emerging, low-density residential community. The plot receives excellent natural light beneath clear skies and offers straightforward access for construction vehicles and services. Ideal for a family residence, a modern townhouse scheme (subject to approvals) or long-term capital growth. Secure this well-located stand in Mashonaland East and build with confidence — enquire today to arrange a viewing and start your plans.","url":"https://www.property.co.zw/for-sale/residential-land-stands-mac244445","identifier":"MAC244445","datePosted":"2026-04-10","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-mac244445","availability":"http://schema.org/InStock","price":"30000","priceCurrency":"USD","serialNumber":"MAC244445","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Mac Homes","logo":"https://www.property.co.zw/uploadedfiles/e4/40/d2/e440d2af-7aea-42e6-80ef-db54fd4025ee.jpg"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Chipukutu Park","addressRegion":"Ruwa","addressCountry":"Zimbabwe"},"name":"Ruwa Chipukutu park residential stand for sale ","description":"Prime 800 m² stand for sale in Chipukutu Park, Ruwa — perfect for your dream home or a secure investment. This level, easy-to-develop parcel fronts a quiet tarred road, as shown in the photos, with neat kerbside grass, a few established trees and productive garden beds indicating fertile soil. Neighbouring single-storey homes with tiled roofs and a visible green municipal water tank confirm reliable municipal water supply and an emerging, low-density residential community. The plot receives excellent natural light beneath clear skies and offers straightforward access for construction vehicles and services. Ideal for a family residence, a modern townhouse scheme (subject to approvals) or long-term capital growth. Secure this well-located stand in Mashonaland East and build with confidence — enquire today to arrange a viewing and start your plans.","image":["https://www.property.co.zw/uploadedfiles/b4/e2/31/b4e2313b-05c5-41ef-99e0-192b0e377fcd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/82/88/d0/8288d03f-5b22-405d-9242-073a5d23e2e9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d5/f3/c4/d5f3c48d-bba1-4c05-853b-178c9ae58d01_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/35/e1/f3/35e1f32e-c9ca-4ffc-a825-4a8700e99c81_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/b4/e2/31/b4e2313b-05c5-41ef-99e0-192b0e377fcd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/82/88/d0/8288d03f-5b22-405d-9242-073a5d23e2e9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d5/f3/c4/d5f3c48d-bba1-4c05-853b-178c9ae58d01_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/35/e1/f3/35e1f32e-c9ca-4ffc-a825-4a8700e99c81_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Mac Homes","logo":"https://www.property.co.zw/uploadedfiles/e4/40/d2/e440d2af-7aea-42e6-80ef-db54fd4025ee.jpg"}}
        </script>
</div>

<div id="226308" data-mandate-id="228035" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(226308)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/ranangaproperties" style="cursor: pointer;">
                        <img src="/uploadedfiles/b9/38/24/b93824e9-110c-4942-a040-f621e306d694.jpg" alt="Rananga Properties" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Rananga Properties" data-url="/estate-agents/ranangaproperties" />
                    </a>

                        <a href="/estate-agents/ranangaproperties/tinei-goto/15583" class="vcenterFlex ">Tinei Goto</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-226308 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="226308"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-rang226308">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/dd/1b/cd/dd1bcd4a-36ce-42b8-b79b-4c82ae85a5f8_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ea/77/57/ea775785-8e8d-4759-b0bc-e13a4f6527b8_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/49/20/e3/4920e39d-6ee6-4649-96e4-619c317f0a5e_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6f/44/26/6f442614-185b-4b0a-ab1f-07ae4f815da4_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/73/6b/07/736b071d-e34f-4c5f-917e-a9ed9aff790c_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/72/35/97/723597a7-08b0-40fb-9c38-623828acb1af_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/06/fb/5f/06fb5f60-354c-41b2-9684-abd2afdc8b58_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3f/b8/14/3fb814e9-673d-47ef-b97c-7f213808504f_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/56/89/fb/5689fb2d-5ff5-41b0-b826-2c4a03b8f733_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Grab this solid opportunity in one of the city’s growing residential zones!

Location: North Lynn/North lea

-Title Deeds Available
-Fully Serviced Stand – ready to build
-Water |  Electricity |  Access Roads in place

Ideal for building your dream home or starting your investment project!

Serious buyers welcome. Inquire now for details!
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-226308">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-226308">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="226308" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/ranangaproperties" style="cursor: pointer;">
                        <img src="/uploadedfiles/b9/38/24/b93824e9-110c-4942-a040-f621e306d694.jpg" alt="Rananga Properties" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Rananga Properties" data-url="/estate-agents/ranangaproperties" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/ranangaproperties/tinei-goto/15583" class="block text-center">Tinei Goto</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-rang226308">USD 75,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-rang226308">
                        Northlynn Stand for Sale – Fully Serviced with Title Deeds!
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Northlea, Bulawayo North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        7,086 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="226308"
                             data-entity-site-id="1545"
                             data-category="land"
                             data-type="sale"
                             data-reference="RANG226308"
                             data-ajax-url="/ContactForm/PortalNumbers/228035?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-rang226308"
                             data-whatsapp-url="https://rply.link/l/eEPZVVMvD7"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="226308"
                             data-entity-site-id="1545"
                             data-category="land"
                             data-type="sale"
                             data-reference="RANG226308"
                             data-ajax-url="/ContactForm/PortalNumbers/228035?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-rang226308"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="226308"
                             data-entity-site-id="1545"
                             data-category="land"
                             data-type="sale"
                             data-reference="RANG226308"
                             data-ajax-url="/ContactForm/PortalEmail/228035?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-rang226308"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Northlynn Stand for Sale – Fully Serviced with Title Deeds!","description":"Grab this solid opportunity in one of the city’s growing residential zones!\r\n\r\nLocation: North Lynn/North lea\r\n\r\n-Title Deeds Available\r\n-Fully Serviced Stand – ready to build\r\n-Water |  Electricity |  Access Roads in place\r\n\r\nIdeal for building your dream home or starting your investment project!\r\n\r\nSerious buyers welcome. Inquire now for details!","url":"https://www.property.co.zw/for-sale/residential-land-stands-rang226308","identifier":"RANG226308","datePosted":"2025-07-31","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-rang226308","availability":"http://schema.org/InStock","price":"75000","priceCurrency":"USD","serialNumber":"RANG226308","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Rananga Properties","logo":"https://www.property.co.zw/uploadedfiles/b9/38/24/b93824e9-110c-4942-a040-f621e306d694.jpg"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Northlea","addressRegion":"Bulawayo North","addressCountry":"Zimbabwe"},"name":"Northlynn Stand for Sale – Fully Serviced with Title Deeds!","description":"Grab this solid opportunity in one of the city’s growing residential zones!\r\n\r\nLocation: North Lynn/North lea\r\n\r\n-Title Deeds Available\r\n-Fully Serviced Stand – ready to build\r\n-Water |  Electricity |  Access Roads in place\r\n\r\nIdeal for building your dream home or starting your investment project!\r\n\r\nSerious buyers welcome. Inquire now for details!","image":["https://www.property.co.zw/uploadedfiles/dd/1b/cd/dd1bcd4a-36ce-42b8-b79b-4c82ae85a5f8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ea/77/57/ea775785-8e8d-4759-b0bc-e13a4f6527b8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/49/20/e3/4920e39d-6ee6-4649-96e4-619c317f0a5e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6f/44/26/6f442614-185b-4b0a-ab1f-07ae4f815da4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/73/6b/07/736b071d-e34f-4c5f-917e-a9ed9aff790c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/35/97/723597a7-08b0-40fb-9c38-623828acb1af_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/06/fb/5f/06fb5f60-354c-41b2-9684-abd2afdc8b58_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3f/b8/14/3fb814e9-673d-47ef-b97c-7f213808504f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/56/89/fb/5689fb2d-5ff5-41b0-b826-2c4a03b8f733_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/dd/1b/cd/dd1bcd4a-36ce-42b8-b79b-4c82ae85a5f8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ea/77/57/ea775785-8e8d-4759-b0bc-e13a4f6527b8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/49/20/e3/4920e39d-6ee6-4649-96e4-619c317f0a5e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6f/44/26/6f442614-185b-4b0a-ab1f-07ae4f815da4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/73/6b/07/736b071d-e34f-4c5f-917e-a9ed9aff790c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/35/97/723597a7-08b0-40fb-9c38-623828acb1af_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/06/fb/5f/06fb5f60-354c-41b2-9684-abd2afdc8b58_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3f/b8/14/3fb814e9-673d-47ef-b97c-7f213808504f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/56/89/fb/5689fb2d-5ff5-41b0-b826-2c4a03b8f733_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Rananga Properties","logo":"https://www.property.co.zw/uploadedfiles/b9/38/24/b93824e9-110c-4942-a040-f621e306d694.jpg"}}
        </script>
</div>

<div id="236674" data-mandate-id="238396" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(236674)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" />
                    </a>

                        <a href="/estate-agents/realtor-ville/unotdashe-moyo/22842" class="vcenterFlex ">Unotdashe Moyo</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-236674 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="236674"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-rvl236674">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/96/8c/3f/968c3f77-c3d4-449c-b70d-74455c9d886b_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5b/af/a3/5bafa3db-1f00-476e-afdc-590abb6134f0_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/93/de/0e/93de0e62-8420-499d-b79f-2ba66bfdd7a7_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d1/2c/ef/d12cefdf-495d-47bd-acd8-f9ea933149f2_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/79/65/c4/7965c4d1-e384-4040-bdb6-505a23050ebf_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3d/05/8a/3d058adb-c3dc-4ce7-9357-8ece11898c39_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2f/47/81/2f4781b1-e1df-4b61-82c8-dd289ec69337_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                200-265 Sqm 
Price 100 USD per square meter 
Terms First 10 only 30% deposit balance over 12 months!. 
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-236674">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-236674">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            Sole Mandate
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="236674" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
                <div class="w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/realtor-ville/unotdashe-moyo/22842" class="block text-center">Unotdashe Moyo</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-rvl236674">USD 20,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-rvl236674">
                        ALPES ROAD Next Radiation Authority Opposite ZOU
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Borrowdale, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        200 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="236674"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL236674"
                             data-ajax-url="/ContactForm/PortalNumbers/238396?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-rvl236674"
                             data-whatsapp-url="https://rply.link/l/7yAs2L87OH"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="236674"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL236674"
                             data-ajax-url="/ContactForm/PortalNumbers/238396?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-rvl236674"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="236674"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL236674"
                             data-ajax-url="/ContactForm/PortalEmail/238396?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-rvl236674"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"ALPES ROAD Next Radiation Authority Opposite ZOU","description":"200-265 Sqm \r\nPrice 100 USD per square meter \r\nTerms First 10 only 30% deposit balance over 12 months!. ","url":"https://www.property.co.zw/for-sale/residential-land-stands-rvl236674","identifier":"RVL236674","datePosted":"2025-12-18","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-rvl236674","availability":"http://schema.org/InStock","price":"20000","priceCurrency":"USD","serialNumber":"RVL236674","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Borrowdale","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"ALPES ROAD Next Radiation Authority Opposite ZOU","description":"200-265 Sqm \r\nPrice 100 USD per square meter \r\nTerms First 10 only 30% deposit balance over 12 months!. ","image":["https://www.property.co.zw/uploadedfiles/96/8c/3f/968c3f77-c3d4-449c-b70d-74455c9d886b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5b/af/a3/5bafa3db-1f00-476e-afdc-590abb6134f0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/93/de/0e/93de0e62-8420-499d-b79f-2ba66bfdd7a7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d1/2c/ef/d12cefdf-495d-47bd-acd8-f9ea933149f2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/79/65/c4/7965c4d1-e384-4040-bdb6-505a23050ebf_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3d/05/8a/3d058adb-c3dc-4ce7-9357-8ece11898c39_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/47/81/2f4781b1-e1df-4b61-82c8-dd289ec69337_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/96/8c/3f/968c3f77-c3d4-449c-b70d-74455c9d886b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5b/af/a3/5bafa3db-1f00-476e-afdc-590abb6134f0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/93/de/0e/93de0e62-8420-499d-b79f-2ba66bfdd7a7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d1/2c/ef/d12cefdf-495d-47bd-acd8-f9ea933149f2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/79/65/c4/7965c4d1-e384-4040-bdb6-505a23050ebf_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3d/05/8a/3d058adb-c3dc-4ce7-9357-8ece11898c39_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/47/81/2f4781b1-e1df-4b61-82c8-dd289ec69337_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"}}
        </script>
</div>

<div id="245419" data-mandate-id="247141" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(245419)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #fed504; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/rawson-properties" style="cursor: pointer;">
                        <img src="/uploadedfiles/9e/86/67/9e8667c8-6d7c-446d-bbd5-547ff9b1c4cd.jpg" alt="Rawson Properties Harare" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Rawson Properties Harare" data-url="/estate-agents/rawson-properties" />
                    </a>

                        <a href="/estate-agents/rawson-properties/ashley-rusena/23042" class="vcenterFlex ">Ashley Rusena</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-245419 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="245419"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-rws245419">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/36/11/00/36110070-70f0-4a4b-aa68-1652f38a7d73_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2e/90/b4/2e90b445-2050-4025-8e77-c08a812945ca_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c4/f4/bd/c4f4bd16-9157-4cc6-a25b-a5e238938187_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/78/c2/da/78c2da1d-3409-4eb4-aeb4-128cca14dc0a_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2f/d4/a2/2fd4a21d-8815-4e6c-a533-25d9e197d0cb_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ca/28/bf/ca28bf82-f17a-414f-860e-cc1685af7056_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/33/81/b3/3381b3c0-514d-438e-902e-f3c2a4230556_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b3/d9/45/b3d94579-243d-4657-9b12-041b80def9ae_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d6/89/c3/d689c322-030f-4b8a-87ea-1900c4b621ed_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a5/6e/23/a56e231a-91f4-4574-b83c-caaedfa9cfc2_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c3/a3/9a/c3a39a79-1a48-43c4-8c3c-c5767a2c3bcb_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/86/01/e7/8601e7b8-a42b-4519-ba81-a3a58bb513a1_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e3/18/1c/e3181c16-25d8-4559-8de1-083f1dd5dce2_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a4/71/82/a4718296-61ac-44ba-ba08-eb88f0f8d686_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d0/6d/f3/d06df39d-b5b0-4d71-b3c5-a19ec85180e7_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/43/69/4e/43694e14-acbb-4212-9912-7e2650a369af_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                PRIME CLUSTER STANDS FOR SALE – BORROWDALE

Located in the fast-growing Borrowdale, Harare corridor near Nyeredzi Ridge Estate, these cluster stands offer an excellent opportunity for both homeowners and investors.

?? Price: $130 per sqm (excluding VAT)
?? Stand Sizes: 400 – 500 sqm

Highlights:

* Ideal for cluster homes / gated community living
* Ongoing development in the area
* Easy access via Domboshava Road
* High potential for capital appreciation

Payment Terms:

* 50% deposit
* Balance payable over 6 months

Secure your spot in one of Borrowdale’s most promising growth zones.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-245419">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-245419">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="245419" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #fed504; ">
                <div class="w-full">
                    <a href="/estate-agents/rawson-properties" style="cursor: pointer;">
                        <img src="/uploadedfiles/9e/86/67/9e8667c8-6d7c-446d-bbd5-547ff9b1c4cd.jpg" alt="Rawson Properties Harare" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Rawson Properties Harare" data-url="/estate-agents/rawson-properties" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/rawson-properties/ashley-rusena/23042" class="block text-center">Ashley Rusena</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-rws245419">USD 52,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-rws245419">
                        Don’t miss out !!!
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Borrowdale, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        400 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="245419"
                             data-entity-site-id="1205"
                             data-category="land"
                             data-type="sale"
                             data-reference="RWS245419"
                             data-ajax-url="/ContactForm/PortalNumbers/247141?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-rws245419"
                             data-whatsapp-url="https://rply.link/l/pueKbKY81S"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="245419"
                             data-entity-site-id="1205"
                             data-category="land"
                             data-type="sale"
                             data-reference="RWS245419"
                             data-ajax-url="/ContactForm/PortalNumbers/247141?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-rws245419"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="245419"
                             data-entity-site-id="1205"
                             data-category="land"
                             data-type="sale"
                             data-reference="RWS245419"
                             data-ajax-url="/ContactForm/PortalEmail/247141?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-rws245419"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Don’t miss out !!!","description":"PRIME CLUSTER STANDS FOR SALE – BORROWDALE\r\n\r\nLocated in the fast-growing Borrowdale, Harare corridor near Nyeredzi Ridge Estate, these cluster stands offer an excellent opportunity for both homeowners and investors.\r\n\r\n?? Price: $130 per sqm (excluding VAT)\r\n?? Stand Sizes: 400 – 500 sqm\r\n\r\nHighlights:\r\n\r\n* Ideal for cluster homes / gated community living\r\n* Ongoing development in the area\r\n* Easy access via Domboshava Road\r\n* High potential for capital appreciation\r\n\r\nPayment Terms:\r\n\r\n* 50% deposit\r\n* Balance payable over 6 months\r\n\r\nSecure your spot in one of Borrowdale’s most promising growth zones.","url":"https://www.property.co.zw/for-sale/residential-land-stands-rws245419","identifier":"RWS245419","datePosted":"2026-04-22","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-rws245419","availability":"http://schema.org/InStock","price":"52000","priceCurrency":"USD","serialNumber":"RWS245419","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Rawson Properties Harare","logo":"https://www.property.co.zw/uploadedfiles/9e/86/67/9e8667c8-6d7c-446d-bbd5-547ff9b1c4cd.jpg"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Borrowdale","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Don’t miss out !!!","description":"PRIME CLUSTER STANDS FOR SALE – BORROWDALE\r\n\r\nLocated in the fast-growing Borrowdale, Harare corridor near Nyeredzi Ridge Estate, these cluster stands offer an excellent opportunity for both homeowners and investors.\r\n\r\n?? Price: $130 per sqm (excluding VAT)\r\n?? Stand Sizes: 400 – 500 sqm\r\n\r\nHighlights:\r\n\r\n* Ideal for cluster homes / gated community living\r\n* Ongoing development in the area\r\n* Easy access via Domboshava Road\r\n* High potential for capital appreciation\r\n\r\nPayment Terms:\r\n\r\n* 50% deposit\r\n* Balance payable over 6 months\r\n\r\nSecure your spot in one of Borrowdale’s most promising growth zones.","image":["https://www.property.co.zw/uploadedfiles/36/11/00/36110070-70f0-4a4b-aa68-1652f38a7d73_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2e/90/b4/2e90b445-2050-4025-8e77-c08a812945ca_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c4/f4/bd/c4f4bd16-9157-4cc6-a25b-a5e238938187_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/78/c2/da/78c2da1d-3409-4eb4-aeb4-128cca14dc0a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/d4/a2/2fd4a21d-8815-4e6c-a533-25d9e197d0cb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ca/28/bf/ca28bf82-f17a-414f-860e-cc1685af7056_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/33/81/b3/3381b3c0-514d-438e-902e-f3c2a4230556_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b3/d9/45/b3d94579-243d-4657-9b12-041b80def9ae_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/89/c3/d689c322-030f-4b8a-87ea-1900c4b621ed_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a5/6e/23/a56e231a-91f4-4574-b83c-caaedfa9cfc2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c3/a3/9a/c3a39a79-1a48-43c4-8c3c-c5767a2c3bcb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/86/01/e7/8601e7b8-a42b-4519-ba81-a3a58bb513a1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e3/18/1c/e3181c16-25d8-4559-8de1-083f1dd5dce2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a4/71/82/a4718296-61ac-44ba-ba08-eb88f0f8d686_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d0/6d/f3/d06df39d-b5b0-4d71-b3c5-a19ec85180e7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/43/69/4e/43694e14-acbb-4212-9912-7e2650a369af_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/36/11/00/36110070-70f0-4a4b-aa68-1652f38a7d73_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2e/90/b4/2e90b445-2050-4025-8e77-c08a812945ca_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c4/f4/bd/c4f4bd16-9157-4cc6-a25b-a5e238938187_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/78/c2/da/78c2da1d-3409-4eb4-aeb4-128cca14dc0a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/d4/a2/2fd4a21d-8815-4e6c-a533-25d9e197d0cb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ca/28/bf/ca28bf82-f17a-414f-860e-cc1685af7056_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/33/81/b3/3381b3c0-514d-438e-902e-f3c2a4230556_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b3/d9/45/b3d94579-243d-4657-9b12-041b80def9ae_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/89/c3/d689c322-030f-4b8a-87ea-1900c4b621ed_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a5/6e/23/a56e231a-91f4-4574-b83c-caaedfa9cfc2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c3/a3/9a/c3a39a79-1a48-43c4-8c3c-c5767a2c3bcb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/86/01/e7/8601e7b8-a42b-4519-ba81-a3a58bb513a1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e3/18/1c/e3181c16-25d8-4559-8de1-083f1dd5dce2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a4/71/82/a4718296-61ac-44ba-ba08-eb88f0f8d686_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d0/6d/f3/d06df39d-b5b0-4d71-b3c5-a19ec85180e7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/43/69/4e/43694e14-acbb-4212-9912-7e2650a369af_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Rawson Properties Harare","logo":"https://www.property.co.zw/uploadedfiles/9e/86/67/9e8667c8-6d7c-446d-bbd5-547ff9b1c4cd.jpg"}}
        </script>
</div>

<div id="245297" data-mandate-id="247019" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(245297)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" />
                    </a>

                        <a href="/estate-agents/realtor-ville/unotdashe-moyo/22842" class="vcenterFlex ">Unotdashe Moyo</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-245297 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="245297"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-rvl245297">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e6/0b/ec/e60beca7-167c-4d79-bf15-17cf18c9630e_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/88/2b/2d/882b2d38-e436-4a8c-8360-54cfc44722c1_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/22/3a/db/223adb00-957d-46b2-ba63-0efdb8cd70fd_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/78/f4/b6/78f4b6e8-bf57-4fc5-b3b6-be54a47ff39b_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c5/d6/03/c5d6032e-09d1-4555-b013-fa776f8eab15_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/34/f3/5e/34f35e49-5080-472c-ab1e-e71445d4c0c5_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f2/4e/44/f24e448b-828d-4c51-9912-a1a85c36fa48_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a7/81/32/a781322a-ce69-45f8-987d-8800552161af_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Prime development opportunity in Greendale, Harare East — a 6,000 m&#178; stand with excellent main road frontage and immediate subdivision potential. As seen in the aerial photos, the property presents a well-defined rectangular parcel with a secure walled entrance, gated parking area and a compact site office/yard already in use, making initial site work straightforward. The gravelled frontage and visible power poles along the road provide easy services access, while a functional sewer connection is confirmed for smooth approvals and rapid development.

Surrounded by established residential homes and mature trees, the stand offers an attractive setting for a boutique residential subdivision, gated community, townhouses or mixed-use development with commercial exposure to passing traffic. The gently cleared central area and remaining vegetated sections allow flexible layout options and ...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-245297">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-245297">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="245297" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
                <div class="w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/realtor-ville/unotdashe-moyo/22842" class="block text-center">Unotdashe Moyo</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-rvl245297">USD 450,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-rvl245297">
                        Prime Greendale 6000m² — Main Road Frontage, Sewered & Subdividable
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Greendale, Harare East</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        6,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="245297"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL245297"
                             data-ajax-url="/ContactForm/PortalNumbers/247019?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-rvl245297"
                             data-whatsapp-url="https://rply.link/l/xPgw3rIFVP"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="245297"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL245297"
                             data-ajax-url="/ContactForm/PortalNumbers/247019?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-rvl245297"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="245297"
                             data-entity-site-id="1370"
                             data-category="land"
                             data-type="sale"
                             data-reference="RVL245297"
                             data-ajax-url="/ContactForm/PortalEmail/247019?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-rvl245297"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Prime Greendale 6000m² — Main Road Frontage, Sewered & Subdividable","description":"Prime development opportunity in Greendale, Harare East — a 6,000 m² stand with excellent main road frontage and immediate subdivision potential. As seen in the aerial photos, the property presents a well-defined rectangular parcel with a secure walled entrance, gated parking area and a compact site office/yard already in use, making initial site work straightforward. The gravelled frontage and visible power poles along the road provide easy services access, while a functional sewer connection is confirmed for smooth approvals and rapid development.\r\n\r\nSurrounded by established residential homes and mature trees, the stand offers an attractive setting for a boutique residential subdivision, gated community, townhouses or mixed-use development with commercial exposure to passing traffic. The gently cleared central area and remaining vegetated sections allow flexible layout options and ...","url":"https://www.property.co.zw/for-sale/residential-land-stands-rvl245297","identifier":"RVL245297","datePosted":"2026-04-21","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-rvl245297","availability":"http://schema.org/InStock","price":"450000","priceCurrency":"USD","serialNumber":"RVL245297","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Greendale","addressRegion":"Harare East","addressCountry":"Zimbabwe"},"name":"Prime Greendale 6000m² — Main Road Frontage, Sewered & Subdividable","description":"Prime development opportunity in Greendale, Harare East — a 6,000 m² stand with excellent main road frontage and immediate subdivision potential. As seen in the aerial photos, the property presents a well-defined rectangular parcel with a secure walled entrance, gated parking area and a compact site office/yard already in use, making initial site work straightforward. The gravelled frontage and visible power poles along the road provide easy services access, while a functional sewer connection is confirmed for smooth approvals and rapid development.\r\n\r\nSurrounded by established residential homes and mature trees, the stand offers an attractive setting for a boutique residential subdivision, gated community, townhouses or mixed-use development with commercial exposure to passing traffic. The gently cleared central area and remaining vegetated sections allow flexible layout options and ...","image":["https://www.property.co.zw/uploadedfiles/e6/0b/ec/e60beca7-167c-4d79-bf15-17cf18c9630e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/88/2b/2d/882b2d38-e436-4a8c-8360-54cfc44722c1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/22/3a/db/223adb00-957d-46b2-ba63-0efdb8cd70fd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/78/f4/b6/78f4b6e8-bf57-4fc5-b3b6-be54a47ff39b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/d6/03/c5d6032e-09d1-4555-b013-fa776f8eab15_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/f3/5e/34f35e49-5080-472c-ab1e-e71445d4c0c5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f2/4e/44/f24e448b-828d-4c51-9912-a1a85c36fa48_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a7/81/32/a781322a-ce69-45f8-987d-8800552161af_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/e6/0b/ec/e60beca7-167c-4d79-bf15-17cf18c9630e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/88/2b/2d/882b2d38-e436-4a8c-8360-54cfc44722c1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/22/3a/db/223adb00-957d-46b2-ba63-0efdb8cd70fd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/78/f4/b6/78f4b6e8-bf57-4fc5-b3b6-be54a47ff39b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/d6/03/c5d6032e-09d1-4555-b013-fa776f8eab15_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/f3/5e/34f35e49-5080-472c-ab1e-e71445d4c0c5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f2/4e/44/f24e448b-828d-4c51-9912-a1a85c36fa48_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a7/81/32/a781322a-ce69-45f8-987d-8800552161af_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"}}
        </script>
</div>

<div id="243627" data-mandate-id="245349" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(243627)" data-cf-modified-62bff2e665d34e70882a4d87-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #f9981b; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/guest-and-tanner" style="cursor: pointer;">
                        <img src="/uploadedfiles/5b/cf/fd/5bcffdd3-f057-4920-b887-c6e5e7bc0f2d.png" alt="Guest and Tanner Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Guest and Tanner Real Estate" data-url="/estate-agents/guest-and-tanner" />
                    </a>

                        <a href="/estate-agents/guest-and-tanner/george-nzunga/3183" class="vcenterFlex ">George Nzunga</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-243627 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="243627"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-sale/residential-land-stands-gat243627">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f8/19/79/f819791b-1ad3-4b2c-8236-2e295ff64598_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ca/98/20/ca98204a-029f-4fd7-a8ba-5aa6d84fb055_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c9/9b/4d/c99b4d43-9f1e-42da-b73b-733216f1a0fb_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/af/8f/6e/af8f6e24-dfa1-4d82-89d6-349435c4f516_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d7/54/33/d7543304-16c1-4716-b6ac-2a57ad8fd1fb_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c2/2c/bf/c22cbf51-a682-49e7-b7c5-7b2fb95a9ad7_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/81/95/d9/8195d98b-165a-425d-8f69-34692bf181b2_thumbnail591.webp" alt="Stands &amp; Residential Land" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                A prime 970m&#178; vacant residential stand for sale in Rockview, Ruwa. The stand is ready to build and is located in a fully built-up area, making it ideal for immediate development. 

The property is under a developer&#39;s cession.

The property offers easy access to main roads, schools, shops, and other amenities, making it perfect for building your dream home or for investment purposes.
Asking Price: $60k.

For more information or to arrange a viewing, get in touch today. Call George.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-243627">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-243627">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="sale"
                     data-category="land"
                     data-entityId="243627" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #f9981b; ">
                <div class="w-full">
                    <a href="/estate-agents/guest-and-tanner" style="cursor: pointer;">
                        <img src="/uploadedfiles/5b/cf/fd/5bcffdd3-f057-4920-b887-c6e5e7bc0f2d.png" alt="Guest and Tanner Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Guest and Tanner Real Estate" data-url="/estate-agents/guest-and-tanner" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/guest-and-tanner/george-nzunga/3183" class="block text-center">George Nzunga</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-sale/residential-land-stands-gat243627">USD 60,000 </a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-sale/residential-land-stands-gat243627">
                        Vacant Stand in Rockview, Ruwa – 970m²
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Rockview, Harare East</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">Stands & Residential Land</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                
                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        970 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="243627"
                             data-entity-site-id="44"
                             data-category="land"
                             data-type="sale"
                             data-reference="GAT243627"
                             data-ajax-url="/ContactForm/PortalNumbers/245349?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-sale/residential-land-stands-gat243627"
                             data-whatsapp-url="https://rply.link/l/09bTP6Huta"
                             aria-label="Whatsapp"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="WhatsApp"
                                 aria-label="Whatsapp" data-microtip-position="top"
                                 src="/content/overhaul/img/svg/icons/whatsapp.svg" loading="lazy" />
                        </div>
                    
                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="phone"
                             data-entity-id="243627"
                             data-entity-site-id="44"
                             data-category="land"
                             data-type="sale"
                             data-reference="GAT243627"
                             data-ajax-url="/ContactForm/PortalNumbers/245349?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-sale/residential-land-stands-gat243627"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="243627"
                             data-entity-site-id="44"
                             data-category="land"
                             data-type="sale"
                             data-reference="GAT243627"
                             data-ajax-url="/ContactForm/PortalEmail/245349?entityType=listing&amp;listingurl=/for-sale/residential-land-stands-gat243627"
                             aria-label="Email"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Email"
                                 src="/content/overhaul/img/svg/icons/Mail_24x24.svg" loading="lazy" />

                        </div>

                </div>


        </div>
    </div>

    
        <script type="application/ld+json">
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Vacant Stand in Rockview, Ruwa – 970m²","description":"A prime 970m² vacant residential stand for sale in Rockview, Ruwa. The stand is ready to build and is located in a fully built-up area, making it ideal for immediate development. \r\n\r\nThe property is under a developer's cession.\r\n\r\nThe property offers easy access to main roads, schools, shops, and other amenities, making it perfect for building your dream home or for investment purposes.\r\nAsking Price: $60k.\r\n\r\nFor more information or to arrange a viewing, get in touch today. Call George.","url":"https://www.property.co.zw/for-sale/residential-land-stands-gat243627","identifier":"GAT243627","datePosted":"2026-03-27","offers":{"@type":"Offer","url":"https://www.property.co.zw/for-sale/residential-land-stands-gat243627","availability":"http://schema.org/InStock","price":"60000","priceCurrency":"USD","serialNumber":"GAT243627","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Guest and Tanner Real Estate","logo":"https://www.property.co.zw/uploadedfiles/5b/cf/fd/5bcffdd3-f057-4920-b887-c6e5e7bc0f2d.png"}},"about":{"@type":"Accommodation","address":{"@type":"PostalAddress","addressLocality":"Rockview","addressRegion":"Harare East","addressCountry":"Zimbabwe"},"name":"Vacant Stand in Rockview, Ruwa – 970m²","description":"A prime 970m² vacant residential stand for sale in Rockview, Ruwa. The stand is ready to build and is located in a fully built-up area, making it ideal for immediate development. \r\n\r\nThe property is under a developer's cession.\r\n\r\nThe property offers easy access to main roads, schools, shops, and other amenities, making it perfect for building your dream home or for investment purposes.\r\nAsking Price: $60k.\r\n\r\nFor more information or to arrange a viewing, get in touch today. Call George.","image":["https://www.property.co.zw/uploadedfiles/f8/19/79/f819791b-1ad3-4b2c-8236-2e295ff64598_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ca/98/20/ca98204a-029f-4fd7-a8ba-5aa6d84fb055_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c9/9b/4d/c99b4d43-9f1e-42da-b73b-733216f1a0fb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/af/8f/6e/af8f6e24-dfa1-4d82-89d6-349435c4f516_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/54/33/d7543304-16c1-4716-b6ac-2a57ad8fd1fb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c2/2c/bf/c22cbf51-a682-49e7-b7c5-7b2fb95a9ad7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/81/95/d9/8195d98b-165a-425d-8f69-34692bf181b2_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/f8/19/79/f819791b-1ad3-4b2c-8236-2e295ff64598_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ca/98/20/ca98204a-029f-4fd7-a8ba-5aa6d84fb055_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c9/9b/4d/c99b4d43-9f1e-42da-b73b-733216f1a0fb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/af/8f/6e/af8f6e24-dfa1-4d82-89d6-349435c4f516_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/54/33/d7543304-16c1-4716-b6ac-2a57ad8fd1fb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c2/2c/bf/c22cbf51-a682-49e7-b7c5-7b2fb95a9ad7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/81/95/d9/8195d98b-165a-425d-8f69-34692bf181b2_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Guest and Tanner Real Estate","logo":"https://www.property.co.zw/uploadedfiles/5b/cf/fd/5bcffdd3-f057-4920-b887-c6e5e7bc0f2d.png"}}
        </script>
</div>


<nav class="PaginationPortal">
    <!-- Desktop Pagination (hidden on mobile) -->
    <div class="hidden md:flex justify-center items-center mb-4">
        <!-- Previous Button -->
        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-400 bg-gray-50 border border-gray-300 rounded-md cursor-not-allowed" 
           aria-label="Previous" 
           href="javascript:void(0)">
            <span class="text-base font-bold leading-none">‹</span>
        </a>

        <!-- First Page -->
                <span class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-white bg-secondary rounded-md transition-all duration-200">1</span>

            <!-- Dynamic Pages -->
                        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 no-underline"
                           href="https://www.property.co.zw/residential-land-stands-for-sale?page=2">2</a>
                        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 no-underline"
                           href="https://www.property.co.zw/residential-land-stands-for-sale?page=3">3</a>
                        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 no-underline"
                           href="https://www.property.co.zw/residential-land-stands-for-sale?page=4">4</a>
                        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 no-underline"
                           href="https://www.property.co.zw/residential-land-stands-for-sale?page=5">5</a>
                    <span class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-400 bg-gray-50 border border-gray-300 rounded-md cursor-not-allowed">...</span>
            <!-- Last Page -->
                    <span class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">78</span>

        <!-- Next Button -->
        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 no-underline" 
           href="https://www.property.co.zw/residential-land-stands-for-sale?page=2" 
           aria-label="Next">
            <span class="text-base font-bold leading-none">›</span>
        </a>
    </div>

    <!-- Mobile Pagination (hidden on desktop) -->
    <div class="flex md:hidden justify-center items-center mb-4">
        <!-- Previous Button (Double Arrow) -->
        <a class="inline-flex items-center justify-center w-8 h-8 mx-1 px-2 py-1 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-300 rounded cursor-not-allowed" 
           aria-label="Previous" 
           href="javascript:void(0)">
            <span class="text-sm font-bold leading-none">‹‹</span>
        </a>

        <!-- Mobile Page Numbers (only show 5 pages max around current) -->
                <span class="inline-flex items-center justify-center w-8 h-8 mx-1 px-2 py-1 text-xs font-medium text-white bg-secondary border border-secondary rounded">1</span>
                <a class="inline-flex items-center justify-center w-8 h-8 mx-1 px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-all duration-200 no-underline"
                   href="https://www.property.co.zw/residential-land-stands-for-sale?page=2">2</a>
                <a class="inline-flex items-center justify-center w-8 h-8 mx-1 px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-all duration-200 no-underline"
                   href="https://www.property.co.zw/residential-land-stands-for-sale?page=3">3</a>

        <!-- Next Button (Double Arrow) -->
        <a class="inline-flex items-center justify-center w-8 h-8 mx-1 px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-all duration-200 no-underline" 
           href="https://www.property.co.zw/residential-land-stands-for-sale?page=2" 
           aria-label="Next">
            <span class="text-sm font-bold leading-none">››</span>
        </a>
    </div>
    
    <!-- Results Summary -->
        <div class="text-center text-gray-500 text-sm mb-4">
            1 - 20 of 1544 properties
        </div>

</nav>
</div>
            
                <div class="bottom-rap-widget mb-8">
<div class="rap-widget w-full max-w-full overflow-hidden mb-4">
    <div class="flex items-center gap-3 md:gap-5 p-3 md:p-5 bg-gray-100 border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <!-- Icon Section -->
        <div class="flex-shrink-0">
            <img src="/content/overhaul/img/png/RAP/rapHouse.png" 
                 class="w-8 h-8 md:w-12 md:h-12 object-contain" 
                 alt="Property Alerts" />
        </div>
        
        <!-- Content Section -->
        <div class="flex-1 min-w-0">
            <h3 class="text-sm md:text-lg font-medium text-gray-900 mb-0.5 md:mb-1">
                Property alerts
            </h3>
            <p class="text-xs md:text-sm text-gray-600 leading-snug md:leading-normal">
                Be the first to see new properties for sale
            </p>
        </div>
        
        <!-- Button Section -->
        <div class="flex-shrink-0">
            <button onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.CreateEmailAlert('search')" class="bg-secondary hover:bg-secondary/90 text-white font-medium text-xs md:text-base px-3 py-2 md:px-6 md:py-3 rounded-md transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-secondary/50" data-cf-modified-62bff2e665d34e70882a4d87-="">
                Get email alerts
            </button>
        </div>
    </div>
</div>
                </div>
            
        </div>

        
        <div id="SearchSide" class="xl:pl-6 xl:w-[312px]">

                <div class="show-map hidden xl:block cursor-pointer w-full mb-4 px-4 py-2 bg-white h-11 border border-button text-button text-center rounded-md transition-all hover:text-white hover:bg-button">
                    <i class="fa fa-map-marker-alt mr-1"></i> View results on map
                </div>
                <a href="/request-a-property" class="hidden xl:block w-full mb-4 px-4 py-2 bg-white h-11 border border-button text-button text-center rounded-md transition-all hover:text-white hover:bg-button">
                    Request a property
                </a>
                <a href="/magazine/zimbabwe-property-market-trends" class="block xl:hidden w-full mb-4 bg-white h-11 border border-button text-button text-center rounded-md transition-all hover:text-white hover:bg-button"
                   style="font-size: 0.875rem; padding-top: 0.65rem;">
                    Zimbabwe Property Market Trends | Read now
                </a>

            <div class="mb-8">
            <style>
                .viewAgency {
                    color: #2E294E;
                    border-color: #2E294E;
                }

                .viewAgency:hover {
                    background: #2E294E;
                }

                @media(min-width: 1200px) {
                    .swiper-featured-agency img {
                        max-width: 150px;
                    }
                }

                
            </style>
            <div class="text-center bg-white border border-none rounded-md shadow mb-4 xl:mb-6 xl:py-3">
                <h2 class="hidden xl:block text-lg mb-5 font-medium">Featured agency</h2>

                <div class="swiper-container swiper-featured-agency" data-autoplay="5000" data-carousel="result" data-value="featured-agency" data-slidesperview="1" data-slidesperview-md="1" data-slidesperview-lg="1" data-slidesperview-xl="1" data-slidesperview-xxl="1">
                    <div class="swiper-wrapper vcenterFlex" style="min-height: 104px;">
                            <div class="swiper-slide ga-parent" data-category="featured_agency" data-url="/estate-agents/rawson-properties">
                                <div class="hidden xl:block">
                                    <div class="px-4">
                                        <a href="/estate-agents/rawson-properties">
                                            <img src="/uploadedfiles/38/9b/21/389b21b6-d573-4878-a6d8-a9050b473dab.jpg" class="ga-sidebar mx-auto mb-4" />
                                        </a>
                                        <h3 class="mb-4">Rawson Properties Harare</h3>
                                    </div>
                                    <a href="/estate-agents/rawson-properties" class="viewAgency ga-sidebar px-4 py-2 inline-block mb-4 border rounded-md hover:text-white transition-all">
                                        View agency and listings
                                    </a>
                                </div>

                                <div class="text-left flex xl:hidden">
                                    <a href="/estate-agents/rawson-properties" class="w-1/3 vcenterFlex">
                                        <img src="/uploadedfiles/38/9b/21/389b21b6-d573-4878-a6d8-a9050b473dab.jpg" class="ga-sidebar w-full" />
                                    </a>
                                    <div class="w-2/3 p-2 vcenterFlex">
                                        <div>
                                            <div class="text-graypurpledark text-sm mb-0.5">
                                                Featured agency
                                            </div>
                                            <div class="font-medium mb-0.5">
                                                Rawson Properties Harare
                                            </div>
                                            <div class="text-graypurpledark text-sm">
                                                View agency and listings
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="swiper-slide ga-parent" data-category="featured_agency" data-url="/estate-agents/seeff">
                                <div class="hidden xl:block">
                                    <div class="px-4">
                                        <a href="/estate-agents/seeff">
                                            <img src="/uploadedfiles/55/4a/a5/554aa5f8-9fbd-4b1f-afde-e7207f7b51aa.png" class="ga-sidebar mx-auto mb-4" />
                                        </a>
                                        <h3 class="mb-4">Seeff Zimbabwe</h3>
                                    </div>
                                    <a href="/estate-agents/seeff" class="viewAgency ga-sidebar px-4 py-2 inline-block mb-4 border rounded-md hover:text-white transition-all">
                                        View agency and listings
                                    </a>
                                </div>

                                <div class="text-left flex xl:hidden">
                                    <a href="/estate-agents/seeff" class="w-1/3 vcenterFlex">
                                        <img src="/uploadedfiles/55/4a/a5/554aa5f8-9fbd-4b1f-afde-e7207f7b51aa.png" class="ga-sidebar w-full" />
                                    </a>
                                    <div class="w-2/3 p-2 vcenterFlex">
                                        <div>
                                            <div class="text-graypurpledark text-sm mb-0.5">
                                                Featured agency
                                            </div>
                                            <div class="font-medium mb-0.5">
                                                Seeff Zimbabwe
                                            </div>
                                            <div class="text-graypurpledark text-sm">
                                                View agency and listings
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="swiper-slide ga-parent" data-category="featured_agency" data-url="/estate-agents/plaza-properties">
                                <div class="hidden xl:block">
                                    <div class="px-4">
                                        <a href="/estate-agents/plaza-properties">
                                            <img src="/uploadedfiles/dd/a3/79/dda379a7-0e9c-45cb-b9a9-ebacdd4ea51b.png" class="ga-sidebar mx-auto mb-4" />
                                        </a>
                                        <h3 class="mb-4">Plaza Properties</h3>
                                    </div>
                                    <a href="/estate-agents/plaza-properties" class="viewAgency ga-sidebar px-4 py-2 inline-block mb-4 border rounded-md hover:text-white transition-all">
                                        View agency and listings
                                    </a>
                                </div>

                                <div class="text-left flex xl:hidden">
                                    <a href="/estate-agents/plaza-properties" class="w-1/3 vcenterFlex">
                                        <img src="/uploadedfiles/dd/a3/79/dda379a7-0e9c-45cb-b9a9-ebacdd4ea51b.png" class="ga-sidebar w-full" />
                                    </a>
                                    <div class="w-2/3 p-2 vcenterFlex">
                                        <div>
                                            <div class="text-graypurpledark text-sm mb-0.5">
                                                Featured agency
                                            </div>
                                            <div class="font-medium mb-0.5">
                                                Plaza Properties
                                            </div>
                                            <div class="text-graypurpledark text-sm">
                                                View agency and listings
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="swiper-slide ga-parent" data-category="featured_agency" data-url="/estate-agents/pam-golding">
                                <div class="hidden xl:block">
                                    <div class="px-4">
                                        <a href="/estate-agents/pam-golding">
                                            <img src="/uploadedfiles/2c/1f/5b/2c1f5b39-9086-4b6c-b066-f58bfa0179c3.png" class="ga-sidebar mx-auto mb-4" />
                                        </a>
                                        <h3 class="mb-4">Pam Golding Properties</h3>
                                    </div>
                                    <a href="/estate-agents/pam-golding" class="viewAgency ga-sidebar px-4 py-2 inline-block mb-4 border rounded-md hover:text-white transition-all">
                                        View agency and listings
                                    </a>
                                </div>

                                <div class="text-left flex xl:hidden">
                                    <a href="/estate-agents/pam-golding" class="w-1/3 vcenterFlex">
                                        <img src="/uploadedfiles/2c/1f/5b/2c1f5b39-9086-4b6c-b066-f58bfa0179c3.png" class="ga-sidebar w-full" />
                                    </a>
                                    <div class="w-2/3 p-2 vcenterFlex">
                                        <div>
                                            <div class="text-graypurpledark text-sm mb-0.5">
                                                Featured agency
                                            </div>
                                            <div class="font-medium mb-0.5">
                                                Pam Golding Properties
                                            </div>
                                            <div class="text-graypurpledark text-sm">
                                                View agency and listings
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="swiper-slide ga-parent" data-category="featured_agency" data-url="/estate-agents/pocock-and-co">
                                <div class="hidden xl:block">
                                    <div class="px-4">
                                        <a href="/estate-agents/pocock-and-co">
                                            <img src="/uploadedfiles/0a/ed/b9/0aedb95a-3567-4961-aa83-fc4dfa7c022f.webp" class="ga-sidebar mx-auto mb-4" />
                                        </a>
                                        <h3 class="mb-4">John Pocock and Company</h3>
                                    </div>
                                    <a href="/estate-agents/pocock-and-co" class="viewAgency ga-sidebar px-4 py-2 inline-block mb-4 border rounded-md hover:text-white transition-all">
                                        View agency and listings
                                    </a>
                                </div>

                                <div class="text-left flex xl:hidden">
                                    <a href="/estate-agents/pocock-and-co" class="w-1/3 vcenterFlex">
                                        <img src="/uploadedfiles/0a/ed/b9/0aedb95a-3567-4961-aa83-fc4dfa7c022f.webp" class="ga-sidebar w-full" />
                                    </a>
                                    <div class="w-2/3 p-2 vcenterFlex">
                                        <div>
                                            <div class="text-graypurpledark text-sm mb-0.5">
                                                Featured agency
                                            </div>
                                            <div class="font-medium mb-0.5">
                                                John Pocock and Company
                                            </div>
                                            <div class="text-graypurpledark text-sm">
                                                View agency and listings
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="swiper-slide ga-parent" data-category="featured_agency" data-url="/estate-agents/prob-fix">
                                <div class="hidden xl:block">
                                    <div class="px-4">
                                        <a href="/estate-agents/prob-fix">
                                            <img src="/uploadedfiles/b2/c1/c3/b2c1c3d7-c8d9-4dd1-8029-3b96cf00331f.jpg" class="ga-sidebar mx-auto mb-4" />
                                        </a>
                                        <h3 class="mb-4">Probfix Properties</h3>
                                    </div>
                                    <a href="/estate-agents/prob-fix" class="viewAgency ga-sidebar px-4 py-2 inline-block mb-4 border rounded-md hover:text-white transition-all">
                                        View agency and listings
                                    </a>
                                </div>

                                <div class="text-left flex xl:hidden">
                                    <a href="/estate-agents/prob-fix" class="w-1/3 vcenterFlex">
                                        <img src="/uploadedfiles/b2/c1/c3/b2c1c3d7-c8d9-4dd1-8029-3b96cf00331f.jpg" class="ga-sidebar w-full" />
                                    </a>
                                    <div class="w-2/3 p-2 vcenterFlex">
                                        <div>
                                            <div class="text-graypurpledark text-sm mb-0.5">
                                                Featured agency
                                            </div>
                                            <div class="font-medium mb-0.5">
                                                Probfix Properties
                                            </div>
                                            <div class="text-graypurpledark text-sm">
                                                View agency and listings
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    </div>
                </div>

            </div>
            <div class="bg-white border border-none rounded-md shadow mb-4 md:mb-6">
                
<div class="mx-auto text-center p-4" style="">
    <img src="/content/overhaul/img/png/letter 1.png" class="mx-auto mb-4" />
    <div class="mb-6">
        Subscribe to our newsletter
    </div>
        <div class="newsletter-form blog-newsletter-form md:ml-0 px-0 md:text-center">
            <div class="flex md:block gap-2 w-full">
                <input type="email" placeholder="Enter email address" value="" class="blog-newsletter-email px-3 py-3 md:py-2 border rounded-md flex-1 md:flex-none min-w-0 md:w-full md:mb-3" style="font-size: 15px !important;" />
                <button type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Newsletter.SubscribeBlog(this)" class="bg-secondary text-white px-5 md:px-6 py-3 md:py-2 rounded-md whitespace-nowrap md:w-auto md:mt-4" style="font-size: 15px !important;" data-cf-modified-62bff2e665d34e70882a4d87-="">Subscribe</button>
            </div>
        </div>
</div>

            </div>
        <div class="flex justify-between items-center shadow rounded-md px-3 py-6 mb-6">
            <div class="font-medium xl:text-sm">
                Join our community
            </div>
            <div class="flex gap-2 xl:gap-1">
                    <a href="https://www.facebook.com/property.co.zw" target="_blank">
                        <img src="/fa_all/brands-square-facebook.svg" class="w-8 xl:w-6 filter-facebook" />
                    </a>
                                    <a href="https://www.linkedin.com/company/property.co.zw" target="_blank">
                        <img src="/fa_all/brands-linkedin.svg" class="w-8 xl:w-6 filter-linkedin" />
                    </a>
                                    <a href="https://www.instagram.com/property.co.zw/" target="_blank">
                        <img src="/fa_all/brands-square-instagram.svg" class="w-8 xl:w-6 filter-instagram" />
                    </a>

            </div>
        </div>



    <div class="mb-8">
            <a href="/valuation" class="ga-parent" data-category="value_chain" data-url="/valuation">
                <div class="ga-sidebar shadow mb-2 flex justify-between font-medium rounded-md" style="height: 70px;">
                    <div class="vcenterFlex ga-sidebar" style="padding-left: 20px;">Valuation</div>
                    <img src="/content/overhaul/img/valuechain/search-widget/valuation.jpg" loading="eager" class="rounded-md ga-sidebar" />
                </div>
            </a>
    </div>
        <h2 class="font-medium mb-2 pb-2 border-b border-graypurple text-base">Important Features</h2>
        <ul>
                <li class="mb-2">

                            <a aria-label="Properties on show" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/showdays" data-category="filter_links" data-url="/showdays">
                                Showdays
                            </a>

                </li>
        </ul>
        <h2 class="font-medium mb-2 pb-2 border-b border-graypurple text-base">Provinces in Zimbabwe</h2>
        <ul>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Harare" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/harare" data-category="filter_links" data-url="/residential-land-stands-for-sale/harare">
                                Harare
                            </a>
 (974)
                </li>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Mashonaland West" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/mashonaland-west" data-category="filter_links" data-url="/residential-land-stands-for-sale/mashonaland-west">
                                Mashonaland West
                            </a>
 (219)
                </li>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Mashonaland East" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/mashonaland-east" data-category="filter_links" data-url="/residential-land-stands-for-sale/mashonaland-east">
                                Mashonaland East
                            </a>
 (190)
                </li>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Bulawayo" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/bulawayo" data-category="filter_links" data-url="/residential-land-stands-for-sale/bulawayo">
                                Bulawayo
                            </a>
 (72)
                </li>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Midlands Province" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/midlands-province" data-category="filter_links" data-url="/residential-land-stands-for-sale/midlands-province">
                                Midlands Province
                            </a>
 (38)
                </li>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Manicaland" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/manicaland" data-category="filter_links" data-url="/residential-land-stands-for-sale/manicaland">
                                Manicaland
                            </a>
 (36)
                </li>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Mashonaland Central" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/mashonaland-central" data-category="filter_links" data-url="/residential-land-stands-for-sale/mashonaland-central">
                                Mashonaland Central
                            </a>
 (15)
                </li>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Matabeleland North" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/matabeleland-north" data-category="filter_links" data-url="/residential-land-stands-for-sale/matabeleland-north">
                                Matabeleland North
                            </a>
 (10)
                </li>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Matabeleland South" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/matabeleland-south" data-category="filter_links" data-url="/residential-land-stands-for-sale/matabeleland-south">
                                Matabeleland South
                            </a>
 (9)
                </li>
                <li class="mb-2">

                            <a aria-label="Stands &amp; Residential Land for sale in Masvingo Province" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/residential-land-stands-for-sale/masvingo-province" data-category="filter_links" data-url="/residential-land-stands-for-sale/masvingo-province">
                                Masvingo Province
                            </a>
 (7)
                </li>
        </ul>


            </div>





        </div>
    </div>

    <div class="xl:w-3/4">

        

        <div class="w-full max-w-full overflow-hidden mb-6 md:mb-8" style="max-width: 788px;">
                <h2 class="text-base md:text-lg font-medium text-gray-900 mb-3 md:mb-4">What is the average price of land for sale in Zimbabwe?</h2>
                <div class="border-l border-r border-t border-b border-gray-200 rounded-lg overflow-hidden" style="max-width: 788px;">
                    <table class="w-full text-xs md:text-sm border-collapse">
                        <thead>
                            <tr class="bg-gray-50">
                                <th class="text-left py-2 px-2 md:py-3 md:px-4 font-medium text-gray-700 border-b border-gray-200">Type</th>
                                <th class="text-right py-2 px-2 md:py-3 md:px-4 font-medium text-gray-700 border-b border-gray-200">Avg. price</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr class="border-b border-gray-100">
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-gray-600">
                                        Average price
                                    </td>
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-right text-secondary font-medium">$73,310</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    <div class="text-graypurpledark mb-4 md:p-4 md:shadow">
        <h2 class="mb-2 text-lg">Articles relating to Stands &amp; Residential Land for Sale in Zimbabwe</h2>
            <div class="mb-1 text-sm">
                <a href="/blog/what-happens-if-a-property-owner-dies-without-a-will-in-zimbabwe" class="font-medium text-secondary overflow-ellipsis block">What Happens If a Property Owner Dies Without a Will in Zimbabwe?</a>
                <p class="overflow-ellipsis">Understand the legal realities of dying intestate in Zimbabwe, where passing away without a will means your property automatically reverts to the deceased</p>
            </div>
            <div class="mb-1 text-sm">
                <a href="/blog/the-ultimate-zimbabwe-property-law-guide-everything-buyers-sellers-landlords-and-investors-must-know" class="font-medium text-secondary overflow-ellipsis block">The Ultimate Zimbabwe Property Law Guide: Everything Buyers, Sellers, Landlords and Investors Must Know</a>
                <p class="overflow-ellipsis">Navigate Zimbabwe&#39;s rapidly maturing real estate market with this definitive legal guide, covering everything from the Deeds Registries Act to landlord complian</p>
            </div>
            <div class="mb-1 text-sm">
                <a href="/blog/im-getting-divorced-will-my-spouse-automatically-get-the-house-in-zimbabwe" class="font-medium text-secondary overflow-ellipsis block">I’m Getting Divorced. Will My Spouse Automatically Get the House in Zimbabwe?</a>
                <p class="overflow-ellipsis">Navigate the complexities of property division during a Zimbabwean divorce by understanding that joint title deeds do not guarantee an automatic buyout or equal</p>
            </div>
            <div class="mb-1 text-sm">
                <a href="/blog/when-your-neighbours-tree-damages-your-property-in-zimbabwe-who-pays-for-repairs" class="font-medium text-secondary overflow-ellipsis block">When Your Neighbour’s Tree Damages Your Property in Zimbabwe: Who Pays for Repairs?</a>
                <p class="overflow-ellipsis">Protect your structural investments by understanding how Zimbabwe&#39;s common law of nuisance applies when a neighbor&#39;s tree damages your boundary fence.</p>
            </div>
            <div class="mb-1 text-sm">
                <a href="/blog/can-a-property-trust-be-dissolved-in-zimbabwe" class="font-medium text-secondary overflow-ellipsis block">Can a Property Trust Be Dissolved in Zimbabwe?</a>
                <p class="overflow-ellipsis">Unwind property ownership held in a family trust by ensuring all beneficiaries are over 18, mentally competent, and provide unanimous written consent to the </p>
            </div>
    </div>

    </div>
</div>







<footer class="footer-mobile lg:hidden w-full mt-20 relative">

        <div class="w-full bg-gray-100 p-8" style="color: #555">
            <div class="grid grid-cols-2 gap-3">
                <div>
                    <div class="font-medium mb-2">About us</div>
                    <a href="/home/contactus" class="block mb-1">Contact us</a>
                        <span class="block mb-1">
                            <span class="cursor-pointer" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowLoginModal()" data-cf-modified-62bff2e665d34e70882a4d87-="">Sign In</span> /
                            <span class="cursor-pointer" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowRegisterModal()" data-cf-modified-62bff2e665d34e70882a4d87-="">Sign Up</span>
                        </span>
                    <a class="block mb-1" href="/info/privacy-terms">Terms &amp; conditions</a>
                    <a class="block mb-1" href="/html-sitemap">Sitemap</a>
                </div>
                <div>
                    <div class="font-medium mb-2">Property</div>
                    <a class="block mb-1" href="/property-for-sale">Property for sale</a>
                    <a class="block mb-1" href="/property-for-rent">Property for rent</a>
                    <a class="block mb-1" href="/request-a-property">Request a property</a>
                    <a class="block mb-1" href="/development-projects">Projects</a>
                </div>
                <div>
                    <div class="font-medium mb-2">Services</div>
                    <a class="block mb-1" href="/home-loan-calculator">Home Loan Calculator</a>
                                            <a class="block mb-1" href="/valuation">Valuations</a>
                                            <a class="block mb-1" href="/showdays">Showdays</a>
                </div>
                <div>
                    <div class="font-medium mb-2">Resources</div>
                    <a class="block mb-1" href="/magazine">Magazine</a>
                    <a class="block mb-1" href="https://www.classifieds.co.zw/" target="_blank">classifieds.co.zw</a>
                    <a class="block mb-1" href="https://www.cars.co.zw/" target="_blank">cars.co.zw</a>
                    <div class="text-xs whitespace-nowrap mt-2">&copy; 2026 Property.co.zw</div>
                </div>
            </div>
        </div>

</footer>


<footer class="footer-desktop hidden lg:block w-full mt-20 pt-12 pb-6 lg:pt-16 lg:pb-8" style="background-color: #2d6c95;">
    <div class="footer-content-wrapper container mx-auto text-white text-xs xl:text-sm px-4">
        <div>
            <div class="FooterGrid flex flex-row justify-between gap-6 lg:gap-8">

                    <div class="contact_us">
                        <div class="font-medium mb-2 2xl:mb-4">About us</div>
                        <a href="/home/contactus" class="mb-2 2xl:mb-4 block">Contact us</a>
                            <span class="mb-2 2xl:mb-4 block">
                                <span class="cursor-pointer" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowLoginModal()" data-cf-modified-62bff2e665d34e70882a4d87-="">Sign In</span> /
                                <span class="cursor-pointer" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowRegisterModal()" data-cf-modified-62bff2e665d34e70882a4d87-="">Sign Up</span>
                            </span>
                        <a class="mb-2 2xl:mb-4 block" href="/info/privacy-terms">Terms &amp; conditions</a>
                        <a class="mb-2 2xl:mb-4 block" href="/html-sitemap">Sitemap</a>
                    </div>
                    <div class="hidden lg:block relative">
                        <div class="font-medium mb-2 2xl:mb-4">Property</div>
                        <a class="mb-2 2xl:mb-4 block" href="/property-for-sale">Property for sale</a>
                        <a class="mb-2 2xl:mb-4 block" href="/property-for-rent">Property for rent</a>
                        <a class="mb-2 2xl:mb-4 block" href="/request-a-property">Request a property</a>
                        <a class="mb-2 2xl:mb-4 block" href="/development-projects">Projects</a>
                    </div>
                    <div class="">
                        <div class="font-medium mb-2 2xl:mb-4">Services</div>
                        <a class="mb-2 2xl:mb-4 block" href="/home-loan-calculator">Home Loan Calculator</a>
                                                    <a class="mb-2 2xl:mb-4 block" href="/valuation">Valuations</a>
                                                    <a class="mb-2 2xl:mb-4 block" href="/showdays">Showdays</a>
                    </div>
                    <div class="">
                        <div class="font-medium mb-2 2xl:mb-4">Resources</div>
                        <a class="mb-2 2xl:mb-4 block" href="/magazine">Magazine</a>
                        <a class="mb-2 2xl:mb-4 block" href="https://www.classifieds.co.zw/" target="_blank">classifieds.co.zw</a>
                        <a class="mb-2 2xl:mb-4 block" href="https://www.cars.co.zw/" target="_blank">cars.co.zw</a>
                        <div class="mb-2 2xl:mb-4 whitespace-nowrap">&copy; 2026 Property.co.zw</div>
                    </div>
            </div>
        </div>
    </div>
</footer>



<script type="62bff2e665d34e70882a4d87-text/javascript">
    var MAP_SERIALIZED = ``;
</script>

    <script src="https://www.google.com/recaptcha/enterprise.js?onload=RenderRecaptcha&render=explicit&hl=en" async defer type="62bff2e665d34e70882a4d87-text/javascript"></script>

    <script src="/content/overhaul/js/portal.min.js?v=3.1.2.13121" type="62bff2e665d34e70882a4d87-text/javascript"></script>

<script src="/content/overhaul/lib/fontawesome/__selected.min.js?v=3.1.2.13121" async type="62bff2e665d34e70882a4d87-text/javascript"></script>




<script src="https://accounts.google.com/gsi/client" async type="62bff2e665d34e70882a4d87-text/javascript"></script>








    <script type="62bff2e665d34e70882a4d87-text/javascript">
        if (typeof jQuery !== 'undefined') {
            (function () {
                var token = $("input[name='__RequestVerificationToken']").first().val();
                if (token) {
                    $.ajaxSetup({
                        beforeSend: function (xhr, settings) {
                            if (settings.type === 'POST') {
                                xhr.setRequestHeader('__RequestVerificationToken', token);
                            }
                        }
                    });
                    $(document).on('submit', 'form', function () {
                        if (!$(this).find("input[name='__RequestVerificationToken']").length) {
                            $(this).append('<input type="hidden" name="__RequestVerificationToken" value="' + token + '">');
                        }
                    });
                }
            })();
        }
    </script>

    

    <span id="routeInfo" data-route="search_en_residential-land-stands_for-sale"></span>


    
    <feather></feather>
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="62bff2e665d34e70882a4d87-|49" defer></script></body>
</html>