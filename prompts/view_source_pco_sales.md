


<!DOCTYPE html>
<html dir="ltr" lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml" prefix="og: https://ogp.me/ns#">
<head>


    <meta charset="utf-8" /><script type="b2460e50d817b0df62da8c5d-text/javascript">window.NREUM||(NREUM={});NREUM.info = {"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"NRJS-22d0ecc7d839418cb0d","applicationID":"552038450","transactionName":"YVRbZRRTCEYEVRBeV1gedGclHTVQBEQHX3tZX01DCV4KUBcZNFZKV1xcRQNAClAWRTdSWURSUQ==","queueTime":0,"applicationTime":442,"agent":"","atts":""}</script><script type="b2460e50d817b0df62da8c5d-text/javascript">(window.NREUM||(NREUM={})).init={privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]},feature_flags:["soft_nav"],distributed_tracing:{enabled:true}};(window.NREUM||(NREUM={})).loader_config={agentID:"594486309",accountID:"4441420",trustKey:"4441420",xpid:"UAIDUFJRCBAFUVNSBAkDU1Q=",licenseKey:"NRJS-22d0ecc7d839418cb0d",applicationID:"552038450",browserID:"594486309"};;/*! For license information please see nr-loader-spa-1.316.0.min.js.LICENSE.txt */
(()=>{var e,t,r={384:(e,t,r)=>{"use strict";r.d(t,{NT:()=>a,Zm:()=>c,bQ:()=>u,dV:()=>d,pV:()=>l});var n=r(6154),i=r(1863),s=r(944),o=r(1910);const a={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function c(){return n.gm.NREUM||(n.gm.NREUM={}),void 0===n.gm.newrelic&&(n.gm.newrelic=n.gm.NREUM),n.gm.NREUM}function d(){let e=c();return e.o||(e.o={ST:n.gm.setTimeout,SI:n.gm.setImmediate||n.gm.setInterval,CT:n.gm.clearTimeout,XHR:n.gm.XMLHttpRequest,REQ:n.gm.Request,EV:n.gm.Event,PR:n.gm.Promise,MO:n.gm.MutationObserver,FETCH:n.gm.fetch,WS:n.gm.WebSocket},(0,o.i)(...Object.values(e.o))),e}function u(e,t){let r=c();r.initializedAgents??={},t.initializedAt={ms:(0,i.t)(),date:new Date},r.initializedAgents[e]=t,2===Object.keys(r.initializedAgents).length&&(0,s.R)(69)}function l(){return function(){let e=c();const t=e.info||{};e.info={beacon:a.beacon,errorBeacon:a.errorBeacon,...t}}(),function(){let e=c();const t=e.init||{};e.init={...t}}(),d(),function(){let e=c();const t=e.loader_config||{};e.loader_config={...t}}(),c()}},733:(e,t,r)=>{"use strict";function n(e,t){return function(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")}("".concat(String(e),":").concat(String(t)))}r.d(t,{Y:()=>n})},782:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K7.pageViewTiming},860:(e,t,r)=>{"use strict";r.d(t,{$J:()=>u,K7:()=>c,P3:()=>d,XX:()=>i,Yy:()=>a,df:()=>s,qY:()=>n,v4:()=>o});const n="events",i="jserrors",s="browser/blobs",o="rum",a="browser/logs",c={ajax:"ajax",genericEvents:"generic_events",jserrors:i,logging:"logging",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",softNav:"soft_navigations"},d={[c.pageViewEvent]:1,[c.pageViewTiming]:2,[c.metrics]:3,[c.jserrors]:4,[c.softNav]:5,[c.ajax]:6,[c.sessionTrace]:7,[c.sessionReplay]:8,[c.logging]:9,[c.genericEvents]:10},u={[c.pageViewEvent]:o,[c.pageViewTiming]:n,[c.ajax]:n,[c.softNav]:n,[c.metrics]:i,[c.jserrors]:i,[c.sessionTrace]:s,[c.sessionReplay]:s,[c.logging]:a,[c.genericEvents]:"ins"}},944:(e,t,r)=>{"use strict";r.d(t,{R:()=>i});var n=r(3241);function i(e,t){"function"==typeof console.debug&&(console.debug("New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(e),t),(0,n.W)({drained:null,type:"data",name:"warn",feature:"warn",data:{code:e,secondary:t}}))}},993:(e,t,r)=>{"use strict";r.d(t,{A$:()=>s,ET:()=>o,TZ:()=>a,p_:()=>i});var n=r(860);const i={ERROR:"ERROR",WARN:"WARN",INFO:"INFO",DEBUG:"DEBUG",TRACE:"TRACE"},s={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4,TRACE:5},o="log",a=n.K7.logging},1687:(e,t,r)=>{"use strict";r.d(t,{Ak:()=>a,Ze:()=>d,x3:()=>c});var n=r(3241),i=r(3606),s=r(860),o=r(2646);function a(e,t){if(!e)return;const r={staged:!1,priority:s.P3[t]||0};e.runtime.drainRegistry.get(t)||e.runtime.drainRegistry.set(t,r)}function c(e,t){if(!e)return;const r=e.runtime.drainRegistry;r&&(r.get(t)&&r.delete(t),l(e,t,!1),r.size&&u(e))}function d(e,t="feature",r=!1){if(e){if(!e.runtime.drainRegistry.get(t)||r)return l(e,t);e.runtime.drainRegistry.get(t).staged=!0,u(e)}}function u(e){if(!e)return;const t=Array.from(e.runtime.drainRegistry);t.every(([e,t])=>t.staged)&&(t.sort((e,t)=>e[1].priority-t[1].priority),t.forEach(([t])=>{e.runtime.drainRegistry.delete(t),l(e,t)}))}function l(e,t,r=!0){if(!e)return;const s=e.ee,a=i.i.handlers;if(s&&!s.aborted&&s.backlog&&a){if((0,n.W)({type:"lifecycle",name:"drain",feature:t}),r){const e=s.backlog[t],r=a[t];if(r){for(let t=0;e&&t<e.length;++t)f(e[t],r);Object.entries(r).forEach(([e,t])=>{Object.values(t||{}).forEach(t=>{t[0]?.on&&t[0].context()instanceof o.y&&!t[0].listeners(e).includes(t[1])&&t[0].on(e,t[1])})})}}s.isolatedBacklog||delete a[t],s.backlog[t]=null,s.emit("drain-"+t,[])}}function f(e,t){var r=e[1];Object.values(t[r]||{}).forEach(t=>{var r=e[0];if(t[0]===r){var n=t[1],i=e[3],s=e[2];n.apply(i,s)}})}},1738:(e,t,r)=>{"use strict";r.d(t,{U:()=>f,Y:()=>l});var n=r(3241),i=r(9908),s=r(1863),o=r(944),a=r(3969),c=r(8362),d=r(860),u=r(4261);function l(e,t,r,s){const l=s||r;!l||l[e]&&l[e]!==c.d.prototype[e]||(l[e]=function(){(0,i.p)(a.xV,["API/"+e+"/called"],void 0,d.K7.metrics,r.ee),(0,n.W)({drained:!!r.runtime?.activatedFeatures,type:"data",name:"api",feature:u.Pl+e,data:{}});try{return t.apply(this,arguments)}catch(e){(0,o.R)(23,e)}})}function f(e,t,r,n,o){const a=e.info;null===r?delete a.jsAttributes[t]:a.jsAttributes[t]=r,(o||null===r)&&(0,i.p)(u.Pl+n,[(0,s.t)(),t,r],void 0,"session",e.ee)}},1741:(e,t,r)=>{"use strict";r.d(t,{W:()=>s});var n=r(944),i=r(4261);class s{#e(e,...t){if(this[e]!==s.prototype[e])return this[e](...t);(0,n.R)(35,e)}addPageAction(e,t){return this.#e(i.hG,e,t)}register(e){return this.#e(i.eY,e)}recordCustomEvent(e,t){return this.#e(i.fF,e,t)}setPageViewName(e,t){return this.#e(i.Fw,e,t)}setCustomAttribute(e,t,r){return this.#e(i.cD,e,t,r)}noticeError(e,t){return this.#e(i.o5,e,t)}setUserId(e,t=!1){return this.#e(i.Dl,e,t)}setApplicationVersion(e){return this.#e(i.nb,e)}setErrorHandler(e){return this.#e(i.bt,e)}addRelease(e,t){return this.#e(i.k6,e,t)}log(e,t){return this.#e(i.$9,e,t)}start(){return this.#e(i.d3)}finished(e){return this.#e(i.BL,e)}recordReplay(){return this.#e(i.CH)}pauseReplay(){return this.#e(i.Tb)}addToTrace(e){return this.#e(i.U2,e)}setCurrentRouteName(e){return this.#e(i.PA,e)}interaction(e){return this.#e(i.dT,e)}wrapLogger(e,t,r){return this.#e(i.Wb,e,t,r)}measure(e,t){return this.#e(i.V1,e,t)}consent(e){return this.#e(i.Pv,e)}}},1863:(e,t,r)=>{"use strict";function n(){return Math.floor(performance.now())}r.d(t,{t:()=>n})},1910:(e,t,r)=>{"use strict";r.d(t,{i:()=>s});var n=r(944);const i=new Map;function s(...e){return e.every(e=>{if(i.has(e))return i.get(e);const t="function"==typeof e?e.toString():"",r=t.includes("[native code]"),s=t.includes("nrWrapper");return r||s||(0,n.R)(64,e?.name||t),i.set(e,r),r})}},2555:(e,t,r)=>{"use strict";r.d(t,{D:()=>a,f:()=>o});var n=r(384),i=r(8122);const s={beacon:n.NT.beacon,errorBeacon:n.NT.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0};function o(e){try{return!!e.licenseKey&&!!e.errorBeacon&&!!e.applicationID}catch(e){return!1}}const a=e=>(0,i.a)(e,s)},2614:(e,t,r)=>{"use strict";r.d(t,{BB:()=>s,Wt:()=>n,g:()=>c,iL:()=>a,tS:()=>o,wk:()=>i});const n="NRBA_SESSION::",i=144e5,s=18e5,o={STARTED:"session-started",PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},a={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},c={OFF:0,FULL:1,ERROR:2}},2646:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});class n{constructor(e){this.contextId=e}}},2843:(e,t,r)=>{"use strict";r.d(t,{G:()=>s,u:()=>i});var n=r(3878);function i(e,t=!1,r,i){(0,n.DD)("visibilitychange",function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)},r,i)}function s(e,t,r){(0,n.sp)("pagehide",e,t,r)}},3241:(e,t,r)=>{"use strict";r.d(t,{W:()=>s});var n=r(6154);const i="newrelic";function s(e={}){try{n.gm.dispatchEvent(new CustomEvent(i,{detail:e}))}catch(e){}}},3304:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(7836);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function s(e){try{return JSON.stringify(e,i())??""}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}return""}}},3333:(e,t,r)=>{"use strict";r.d(t,{$v:()=>u,TZ:()=>n,Xh:()=>c,Zp:()=>i,kd:()=>d,mq:()=>a,nf:()=>o,qN:()=>s});const n=r(860).K7.genericEvents,i=["auxclick","click","copy","keydown","paste","scrollend"],s=["focus","blur"],o=4,a=1e3,c=2e3,d=["PageAction","UserAction","BrowserPerformance"],u={RESOURCES:"experimental.resources",REGISTER:"register"}},3434:(e,t,r)=>{"use strict";r.d(t,{Jt:()=>o,YM:()=>u});var n=r(7836),i=r(5607),s=r(5732);const o="nr@original:".concat(i.W),a=50;var c=Object.prototype.hasOwnProperty,d=!1;function u(e,t,r){return e||(e=n.ee),i.inPlace=function(e,t,r,n,s,o){r||(r="");const a="-"===r.charAt(0);for(let c=0;c<t.length;c++){const d=t[c],u=e[d];f(u)||(e[d]=i(u,a?d+r:r,n,d,s,o))}},i.flag=o,i;function i(t,n,i,d,h,p){return f(t)?t:(n||(n=""),nrWrapper[o]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach(function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})}),t}catch(e){l([e],r)}for(var n in e)c.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var o,c,f,g;let m,v;try{c=this,o=[...arguments],v=p?(0,s.$5)(r):[void 0],f="function"==typeof i?i(o,c):i||{}}catch(t){l([t,"",[o,c,d],f],e)}u(n+"start",[o,c,d,v],f,h);const y=performance.now();let b;try{return g=t.apply(c,o),b=performance.now(),g}catch(e){throw b=performance.now(),u(n+"err",[o,c,e,v],f,h),m=e,m}finally{const e=b-y,t={start:y,end:b,duration:e,isLongTask:e>=a,methodName:d,thrownError:m};t.isLongTask&&u("long-task",[t,c,v],f,h),u(n+"end",[o,c,g,v],f,h)}}}function u(r,n,i,s){if(!d||t){var o=d;d=!0;try{e.emit(r,n,i,t,s)}catch(t){l([t,r,n,i],e)}d=o}}}function l(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function f(e){return!(e&&"function"==typeof e&&e.apply&&!e[o])}},3606:(e,t,r)=>{"use strict";r.d(t,{i:()=>s});var n=r(9908);s.on=o;var i=s.handlers={};function s(e,t,r,s){o(s||n.d,i,e,t,r)}function o(e,t,r,i,s){s||(s="feature"),e||(e=n.d);var o=t[s]=t[s]||{};(o[r]=o[r]||[]).push([e,i])}},3738:(e,t,r)=>{"use strict";r.d(t,{He:()=>i,Kp:()=>a,Lc:()=>d,Rz:()=>u,TZ:()=>n,bD:()=>s,d3:()=>o,jx:()=>l,sl:()=>f,uP:()=>c});const n=r(860).K7.sessionTrace,i="bstResource",s="resource",o="-start",a="-end",c="fn"+o,d="fn"+a,u="pushState",l=1e3,f=3e4},3785:(e,t,r)=>{"use strict";r.d(t,{R:()=>c,b:()=>d});var n=r(9908),i=r(1863),s=r(860),o=r(3969),a=r(993);function c(e,t,r={},c=a.p_.INFO,d=!0,u,l=(0,i.t)()){(0,n.p)(o.xV,["API/logging/".concat(c.toLowerCase(),"/called")],void 0,s.K7.metrics,e),(0,n.p)(a.ET,[l,t,r,c,d,u],void 0,s.K7.logging,e)}function d(e){return"string"==typeof e&&Object.values(a.p_).some(t=>t===e.toUpperCase().trim())}},3878:(e,t,r)=>{"use strict";function n(e,t){return{capture:e,passive:!1,signal:t}}function i(e,t,r=!1,i){window.addEventListener(e,t,n(r,i))}function s(e,t,r=!1,i){document.addEventListener(e,t,n(r,i))}r.d(t,{DD:()=>s,jT:()=>n,sp:()=>i})},3962:(e,t,r)=>{"use strict";r.d(t,{AM:()=>o,O2:()=>l,OV:()=>s,Qu:()=>f,TZ:()=>c,ih:()=>h,pP:()=>a,t1:()=>u,tC:()=>i,wD:()=>d});var n=r(860);const i=["click","keydown","submit"],s="popstate",o="api",a="initialPageLoad",c=n.K7.softNav,d=5e3,u=500,l={INITIAL_PAGE_LOAD:"",ROUTE_CHANGE:1,UNSPECIFIED:2},f={INTERACTION:1,AJAX:2,CUSTOM_END:3,CUSTOM_TRACER:4},h={IP:"in progress",PF:"pending finish",FIN:"finished",CAN:"cancelled"}},3969:(e,t,r)=>{"use strict";r.d(t,{TZ:()=>n,XG:()=>a,rs:()=>i,xV:()=>o,z_:()=>s});const n=r(860).K7.metrics,i="sm",s="cm",o="storeSupportabilityMetrics",a="storeEventMetrics"},4234:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(1687);class i{constructor(e,t){this.agentRef=e,this.ee=e?.ee,this.featureName=t,this.blocked=!1}deregisterDrain(){(0,n.x3)(this.agentRef,this.featureName)}}},4261:(e,t,r)=>{"use strict";r.d(t,{$9:()=>u,BL:()=>c,CH:()=>p,Dl:()=>R,Fw:()=>w,PA:()=>v,Pl:()=>n,Pv:()=>x,Tb:()=>f,U2:()=>o,V1:()=>A,Wb:()=>T,bt:()=>b,cD:()=>y,d3:()=>E,dT:()=>d,eY:()=>g,fF:()=>h,hG:()=>s,hw:()=>i,k6:()=>a,nb:()=>m,o5:()=>l});const n="api-",i=n+"ixn-",s="addPageAction",o="addToTrace",a="addRelease",c="finished",d="interaction",u="log",l="noticeError",f="pauseReplay",h="recordCustomEvent",p="recordReplay",g="register",m="setApplicationVersion",v="setCurrentRouteName",y="setCustomAttribute",b="setErrorHandler",w="setPageViewName",R="setUserId",E="start",T="wrapLogger",A="measure",x="consent"},5270:(e,t,r)=>{"use strict";r.d(t,{Aw:()=>o,SR:()=>s,rF:()=>a});var n=r(384),i=r(7767);function s(e){return!!(0,n.dV)().o.MO&&(0,i.V)(e)&&!0===e?.session_trace.enabled}function o(e){return!0===e?.session_replay.preload&&s(e)}function a(e,t){try{if("string"==typeof t?.type){if("password"===t.type.toLowerCase())return"*".repeat(e?.length||0);if(void 0!==t?.dataset?.nrUnmask||t?.classList?.contains("nr-unmask"))return e}}catch(e){}return"string"==typeof e?e.replace(/[\S]/g,"*"):"*".repeat(e?.length||0)}},5289:(e,t,r)=>{"use strict";r.d(t,{GG:()=>o,Qr:()=>c,sB:()=>a});var n=r(3878),i=r(6389);function s(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(s())return e();const r=(0,i.J)(e),o=setInterval(()=>{s()&&(clearInterval(o),r())},500);(0,n.sp)("load",r,t)}function a(e){if(s())return e();(0,n.DD)("DOMContentLoaded",e)}function c(e){if(s())return e();(0,n.sp)("popstate",e)}},5607:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});const n=(0,r(9566).bz)()},5732:(e,t,r)=>{"use strict";r.d(t,{$5:()=>u,B5:()=>d,Ms:()=>s,Ux:()=>a,YA:()=>c,fQ:()=>i,yx:()=>o});var n=r(7508);const i={MFE:"MFE",BA:"BA"};function s(e,t){if(!e||!t?.init.api.register.enabled)return[];const r=t.runtime.registeredEntities;return r?.filter(t=>String(t.metadata.target.id)===String(e)).map(e=>e.metadata.target)||[]}function o(e,t){if(!e||!t?.init.api.register.enabled)return[];const r=t.runtime.registeredEntities;return r?.filter(t=>t.metadata.timings?.asset?.endsWith(e)).map(e=>e.metadata.target)||[]}function a(e,t){if(!l(t))return{};const r=t.agentRef.runtime.appMetadata.agents[0].entityGuid;return e?e.attributes:{"entity.guid":r,appId:t.agentRef.info.applicationID}}function c(e,t){return d(e,t)?{"child.id":e.id,"child.type":e.type,...a(void 0,t)}:{}}function d(e,t){return!!e&&!!l(t)&&t.agentRef.init.api.register.duplicate_data_to_container}function u(e){if(!e?.init.api.register.enabled)return[void 0];const t=[];try{var r=(0,n.AZ)((0,n.QL)());let i=r.length-1;for(;r[i];)t.push(...o(r[i--],e))}catch(e){}return t.length||t.push(void 0),t}function l(e){return 2===e?.harvestEndpointVersion}},6154:(e,t,r)=>{"use strict";r.d(t,{OF:()=>d,RI:()=>i,WN:()=>f,bv:()=>s,gm:()=>o,lR:()=>l,m:()=>c,mw:()=>a,sb:()=>u,zk:()=>h});var n=r(1863);const i="undefined"!=typeof window&&!!window.document,s="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),o=i?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),a=Boolean("hidden"===o?.document?.visibilityState),c=""+o?.location,d=/iPad|iPhone|iPod/.test(o.navigator?.userAgent),u=d&&"undefined"==typeof SharedWorker,l=(()=>{const e=o.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),f=Date.now()-(0,n.t)(),h=()=>{const e=o?.performance?.getEntriesByType?.("navigation")?.[0];if(e&&e.responseStart>0&&e.responseStart<o.performance.now())return e}},6344:(e,t,r)=>{"use strict";r.d(t,{BB:()=>u,Qb:()=>l,TZ:()=>i,Ug:()=>o,Vh:()=>s,_s:()=>a,bc:()=>d,yP:()=>c});var n=r(2614);const i=r(860).K7.sessionReplay,s="errorDuringReplay",o=.12,a={DomContentLoaded:0,Load:1,FullSnapshot:2,IncrementalSnapshot:3,Meta:4,Custom:5},c={[n.g.ERROR]:15e3,[n.g.FULL]:3e5,[n.g.OFF]:0},d={RESET:{message:"Session was reset",sm:"Reset"},IMPORT:{message:"Recorder failed to import",sm:"Import"},TOO_MANY:{message:"429: Too Many Requests",sm:"Too-Many"},TOO_BIG:{message:"Payload was too large",sm:"Too-Big"},CROSS_TAB:{message:"Session Entity was set to OFF on another tab",sm:"Cross-Tab"},ENTITLEMENTS:{message:"Session Replay is not allowed and will not be started",sm:"Entitlement"}},u=5e3,l={API:"api",RESUME:"resume",SWITCH_TO_FULL:"switchToFull",INITIALIZE:"initialize",PRELOAD:"preload"}},6389:(e,t,r)=>{"use strict";function n(e,t=500,r={}){const n=r?.leading||!1;let i;return(...r)=>{n&&void 0===i&&(e.apply(this,r),i=setTimeout(()=>{i=clearTimeout(i)},t)),n||(clearTimeout(i),i=setTimeout(()=>{e.apply(this,r)},t))}}function i(e){let t=!1;return(...r)=>{t||(t=!0,e.apply(this,r))}}r.d(t,{J:()=>i,s:()=>n})},6630:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K7.pageViewEvent},6774:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K7.jserrors},7295:(e,t,r)=>{"use strict";r.d(t,{Xv:()=>o,gX:()=>i,iW:()=>s});var n=[];function i(e){if(!e||s(e))return!1;if(0===n.length)return!0;if("*"===n[0].hostname)return!1;for(var t=0;t<n.length;t++){var r=n[t];if(r.hostname.test(e.hostname)&&r.pathname.test(e.pathname))return!1}return!0}function s(e){return void 0===e.hostname}function o(e){if(n=[],e&&e.length)for(var t=0;t<e.length;t++){let r=e[t];if(!r)continue;if("*"===r)return void(n=[{hostname:"*"}]);0===r.indexOf("http://")?r=r.substring(7):0===r.indexOf("https://")&&(r=r.substring(8));const i=r.indexOf("/");let s,o;i>0?(s=r.substring(0,i),o=r.substring(i)):(s=r,o="*");let[c]=s.split(":");n.push({hostname:a(c),pathname:a(o,!0)})}}function a(e,t=!1){const r=e.replace(/[.+?^${}()|[\]\\]/g,e=>"\\"+e).replace(/\*/g,".*?");return new RegExp((t?"^":"")+r+"$")}},7485:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(6154);function i(e){if(0===(e||"").indexOf("data:"))return{protocol:"data"};try{const t=new URL(e,location.href),r={port:t.port,hostname:t.hostname,pathname:t.pathname,search:t.search,protocol:t.protocol.slice(0,t.protocol.indexOf(":")),sameOrigin:t.protocol===n.gm?.location?.protocol&&t.host===n.gm?.location?.host};return r.port&&""!==r.port||("http:"===t.protocol&&(r.port="80"),"https:"===t.protocol&&(r.port="443")),r.pathname&&""!==r.pathname?r.pathname.startsWith("/")||(r.pathname="/".concat(r.pathname)):r.pathname="/",r}catch(e){return{}}}},7508:(e,t,r)=>{"use strict";r.d(t,{AZ:()=>g,Qr:()=>b,QL:()=>m});var n=r(6154),i=r(1863),s=r(9119),o=r(7866);class a{dom=new c;performance=new c;constructor(e){this.url=e}get script(){const e=Math.max(this.dom.start,this.performance.end);return{start:e,end:Math.max(this.dom.end,this.performance.end,e)}}}class c{start=0;end=0;value=void 0}let d;try{d=g(m())[0]}catch(e){d=g(e)[0]}const u=e=>"script"===e.initiatorType||["link","fetch"].includes(e.initiatorType)&&e.name.endsWith(".js"),l=new Map;let f=[];function h(e){return l.get(e)}function p(e){const t=h(e);if(t)return t;const r=new a(e);if(l.set(e,r),l.size>1e3){const e=l.keys().next().value;l.delete(e)}return r}if(n.gm.MutationObserver&&n.gm.document){new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{if("SCRIPT"===e.nodeName&&e.src){const t=p((0,s.L)(e.src));t.dom.start=(0,i.t)(),t.dom.value=e;const r=()=>{t.dom.end=(0,i.t)()};["load","error"].forEach(t=>e.addEventListener(t,r,{once:!0}))}})})}).observe(n.gm.document,{childList:!0,subtree:!0})}if(n.gm.PerformanceObserver?.supportedEntryTypes.includes("resource")){new PerformanceObserver(e=>{e.getEntries().filter(u).forEach(e=>{const t=p((0,s.L)(e.name));t.performance.start=Math.floor(e.startTime),t.performance.end=Math.floor(e.responseEnd),t.performance.value=e;const r=[];f.forEach(({test:t,addedAt:n},s)=>{(t(e)||(0,i.t)()-n>1e4)&&r.push(s)}),f=f.filter((e,t)=>!r.includes(t))})}).observe({type:"resource",buffered:!0})}function g(e){if(!e||"string"!=typeof e)return[];const t=new Set,r=e.split("\n");for(const e of r){const r=e.match(o.cn)||e.match(o.hB)||e.match(o.fL);if(r&&r[2])t.add((0,s.L)(r[2]));else{const r=e.match(/\(([^)]+\.js):\d+:\d+\)/)||e.match(/^\s+at\s+([^\s(]+\.js):\d+:\d+/);r&&r[1]&&t.add((0,s.L)(r[1]))}}return[...t]}function m(){let e;try{const t=Error.stackTraceLimit;Error.stackTraceLimit=50,e=(new Error).stack,Error.stackTraceLimit=t}catch(t){e=(new Error).stack}return e}function v(e,t){return(0,s.L)(e.name)===t}function y(e,t){e.fetchStart=Math.floor(t.startTime),e.fetchEnd=Math.floor(t.responseEnd),e.asset=t.name,e.type=t.initiatorType}function b(){const e={registeredAt:(0,i.t)(),reportedAt:void 0,fetchStart:0,fetchEnd:0,scriptStart:0,scriptEnd:0,asset:void 0,type:"unknown"},t=m();if(!t)return e;const r=n.gm.performance?.getEntriesByType("navigation")?.[0]?.name||"";try{const o=g(t),a=(o.length>1?o.filter(e=>d!==e):o)[0];if(!a)return e;if(r.includes(a))return e.asset=(0,s.L)(r),e.type="inline",e;e.correlation=h(a);const c=e.correlation?.performance.value||performance.getEntriesByType("resource").find(e=>v(e,a));c?y(e,c):function(e){if(!e||!n.gm.document)return!1;try{const t=n.gm.document.querySelectorAll('link[rel="preload"][as="script"]');for(const r of t)if((0,s.L)(r.href)===e)return!0}catch(e){}return!1}(a)&&(e.asset=a,e.type="preload",f.push({addedAt:(0,i.t)(),test:t=>!!v(t,a)&&(y(e,t),!0)})),Object.defineProperty(e,"scriptStart",{get:()=>e.correlation?.script.start||e.fetchEnd}),Object.defineProperty(e,"scriptEnd",{get:()=>e.correlation?.script.end||e.registeredAt})}catch(e){}return e}},7699:(e,t,r)=>{"use strict";r.d(t,{It:()=>s,KC:()=>a,No:()=>i,qh:()=>o});var n=r(860);const i=16e3,s=1e6,o="SESSION_ERROR",a={[n.K7.logging]:!0,[n.K7.genericEvents]:!0,[n.K7.jserrors]:!0,[n.K7.ajax]:!0}},7767:(e,t,r)=>{"use strict";r.d(t,{V:()=>i});var n=r(6154);const i=e=>n.RI&&!0===e?.privacy.cookies_enabled},7836:(e,t,r)=>{"use strict";r.d(t,{P:()=>a,ee:()=>c});var n=r(384),i=r(8990),s=r(2646),o=r(5607);const a="nr@context:".concat(o.W),c=function e(t,r){var n={},o={},u={},l=!1;try{l=16===r.length&&d.initializedAgents?.[r]?.runtime.isolatedBacklog}catch(e){}var f={on:p,addEventListener:p,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,s){!1!==s&&(s=!0);if(c.aborted&&!i)return;t&&s&&t.emit(e,r,n);var a=h(n);g(e).forEach(e=>{e.apply(a,r)});var d=v()[o[e]];d&&d.push([f,e,r,a]);return a},get:m,listeners:g,context:h,buffer:function(e,t){const r=v();if(t=t||"feature",f.aborted)return;Object.entries(e||{}).forEach(([e,n])=>{o[n]=t,t in r||(r[t]=[])})},abort:function(){f._aborted=!0,Object.keys(f.backlog).forEach(e=>{delete f.backlog[e]})},isBuffering:function(e){return!!v()[o[e]]},debugId:r,backlog:l?{}:t&&"object"==typeof t.backlog?t.backlog:{},isolatedBacklog:l};return Object.defineProperty(f,"aborted",{get:()=>{let e=f._aborted||!1;return e||(t&&(e=t.aborted),e)}}),f;function h(e){return e&&e instanceof s.y?e:e?(0,i.I)(e,a,()=>new s.y(a)):new s.y(a)}function p(e,t){n[e]=g(e).concat(t)}function g(e){return n[e]||[]}function m(t){return u[t]=u[t]||e(f,t)}function v(){return f.backlog}}(void 0,"globalEE"),d=(0,n.Zm)();d.ee||(d.ee=c)},7866:(e,t,r)=>{"use strict";r.d(t,{Nc:()=>s,cn:()=>a,fL:()=>i,h3:()=>n,hB:()=>o});const n=/function (.+?)\s*\(/,i=/^\s*at .+ \(eval at \S+ \((?:(?:file|http|https):[^)]+)?\)(?:, [^:]*:\d+:\d+)?\)$/i,s=/^\s*at Function code \(Function code:\d+:\d+\)\s*/i,o=/^\s*at (?:((?:\[object object\])?(?:[^(]*\([^)]*\))*[^()]*(?: \[as \S+\])?) )?\(?((?:file|http|https|chrome-extension):.*?)?:(\d+)(?::(\d+))?\)?\s*$/i,a=/^\s*(?:([^@]*)(?:\(.*?\))?@)?((?:file|http|https|chrome|safari-extension).*?):(\d+)(?::(\d+))?\s*$/i},8122:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});var n=r(944);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.R)(3);if(!t||"object"!=typeof t)return(0,n.R)(4);const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),s=0===Object.keys(r).length?e:r;for(let o in s)if(void 0!==e[o])try{if(null===e[o]){r[o]=null;continue}Array.isArray(e[o])&&Array.isArray(t[o])?r[o]=Array.from(new Set([...e[o],...t[o]])):e[o]instanceof Map||e[o]instanceof Set||e[o]instanceof Date||e[o]instanceof RegExp?r[o]=e[o]:"object"==typeof e[o]&&"object"==typeof t[o]?r[o]=i(e[o],t[o]):r[o]=e[o]}catch(e){r[o]||(0,n.R)(1,e)}return r}catch(e){(0,n.R)(2,e)}}},8139:(e,t,r)=>{"use strict";r.d(t,{u:()=>f});var n=r(7836),i=r(3434),s=r(8990),o=r(6154);const a={},c=o.gm.XMLHttpRequest,d="addEventListener",u="removeEventListener",l="nr@wrapped:".concat(n.P);function f(e){var t=function(e){return(e||n.ee).get("events")}(e);if(a[t.debugId]++)return t;a[t.debugId]=1;var r=(0,i.YM)(t,!0);function f(e){r.inPlace(e,[d,u],"-",p)}function p(e,t){return e[1]}return"getPrototypeOf"in Object&&(o.RI&&h(document,f),c&&h(c.prototype,f),h(o.gm,f)),t.on(d+"-start",function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)&&"newrelic"!==e[0]){var i=(0,s.I)(n,l,function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return e?r(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=e[1]=i}}),t.on(u+"-start",function(e){e[1]=this.wrapped||e[1]}),t}function h(e,t,...r){let n=e;for(;"object"==typeof n&&!Object.prototype.hasOwnProperty.call(n,d);)n=Object.getPrototypeOf(n);n&&t(n,...r)}},8362:(e,t,r)=>{"use strict";r.d(t,{d:()=>s});var n=r(9566),i=r(1741);class s extends i.W{agentIdentifier=(0,n.LA)(16)}},8374:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},8990:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},9119:(e,t,r)=>{"use strict";r.d(t,{L:()=>s});var n=/([^?#]*)[^#]*(#[^?]*|$).*/,i=/([^?#]*)().*/;function s(e,t){return e?e.replace(t?n:i,"$1$2"):e}},9300:(e,t,r)=>{"use strict";r.d(t,{T:()=>n,f:()=>i});const n=r(860).K7.ajax,i="ajaxRequest.id"},9324:(e,t,r)=>{"use strict";r.d(t,{AJ:()=>o,F3:()=>i,Xs:()=>s,Yq:()=>a,xv:()=>n});const n="1.316.0",i="PROD",s="CDN",o="@newrelic/rrweb",a="1.1.0"},9566:(e,t,r)=>{"use strict";r.d(t,{LA:()=>a,ZF:()=>c,bz:()=>o,el:()=>d});var n=r(6154);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function s(e,t){return e?15&e[t]:16*Math.random()|0}function o(){const e=n.gm?.crypto||n.gm?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map(e=>"x"===e?s(t,r++).toString(16):"y"===e?(3&s()|8).toString(16):e).join("")}function a(e){const t=n.gm?.crypto||n.gm?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const o=[];for(var a=0;a<e;a++)o.push(s(r,i++).toString(16));return o.join("")}function c(){return a(16)}function d(){return a(32)}},9908:(e,t,r)=>{"use strict";r.d(t,{d:()=>n,p:()=>i});var n=r(7836).ee.get("handle");function i(e,t,r,i,s){s?(s.buffer([e],i),s.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return r[e](s,s.exports,i),s.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce((t,r)=>(i.f[r](e,t),t),[])),i.u=e=>({212:"nr-spa-compressor",249:"nr-spa-recorder",478:"nr-spa"}[e]+"-1.316.0.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.316.0.PROD:",i.l=(r,n,s,o)=>{if(e[r])e[r].push(n);else{var a,c;if(void 0!==s)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+s){a=l;break}}if(!a){c=!0;var f={478:"sha512-/91tZUpAINW5VzLS+EdJpEe0gul6FJd2zTpGwLIhi/mqcTiQPUlhoJmX5zb4EPTwdGqun46DoGQPtDShDBw4bA==",249:"sha512-XqLQgD24Jrw2HFtuRDeuxMcY5WnEXG04tpC98UJOJlIfGqQst/lKUE+G++zwulwEzcM00bl5V0e1kKGq2Nxc1g==",212:"sha512-rOHSN/tvMjFe33yfRKMs44m3dZKgs9foEl0T2tdErrZKsAF8Oe5+OLJKgySrw3WwY4MgvuS4yWEr88MMv5LZaw=="};(a=document.createElement("script")).charset="utf-8",i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+s),a.src=r,0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous"),f[o]&&(a.integrity=f[o])}e[r]=[n];var h=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach(e=>e(n)),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),c&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={38:0,788:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((r,i)=>n=e[t]=[r,i]);r.push(n[2]=s);var o=i.p+i.u(t),a=new Error;i.l(o,r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed: ("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,n[1](a)}},"chunk-"+t,t)}};var t=(t,r)=>{var n,s,[o,a,c]=r,d=0;if(o.some(t=>0!==e[t])){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)c(i)}for(t&&t(r);d<o.length;d++)s=o[d],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0},r=self["webpackChunk:NRBA-1.316.0.PROD"]=self["webpackChunk:NRBA-1.316.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(8374);var e=i(8362),t=i(860);const r=Object.values(t.K7);var n=i(384),s=i(1741);var o=i(2555),a=i(3333);const c=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var d=i(2614),u=i(944),l=i(8122);const f="[data-nr-mask]",h=e=>(0,l.a)(e,(()=>{const e={feature_flags:[],experimental:{register:!1,resources:!1},mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{ajax:{deny_list:void 0,block_internal:!0,enabled:!0,autoStart:!0},api:{register:{get enabled(){return e.feature_flags.includes(a.$v.REGISTER)||e.experimental.register},set enabled(t){e.experimental.register=t},duplicate_data_to_container:!1}},browser_consent_mode:{enabled:!1},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},get feature_flags(){return e.feature_flags},set feature_flags(t){e.feature_flags=t},generic_events:{enabled:!0,autoStart:!0},harvest:{interval:30},jserrors:{enabled:!0,autoStart:!0},logging:{enabled:!0,autoStart:!0},metrics:{enabled:!0,autoStart:!0},obfuscate:void 0,page_action:{enabled:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,autoStart:!0},performance:{capture_marks:!1,capture_measures:!1,capture_detail:!0,resources:{get enabled(){return e.feature_flags.includes(a.$v.RESOURCES)||e.experimental.resources},set enabled(t){e.experimental.resources=t},asset_types:[],first_party_domains:[],ignore_newrelic:!0}},privacy:{cookies_enabled:!0},proxy:{assets:void 0,beacon:void 0},session:{expiresMs:d.wk,inactiveMs:d.BB},session_replay:{autoStart:!0,enabled:!1,preload:!1,sampling_rate:10,error_sampling_rate:100,collect_fonts:!1,inline_images:!1,fix_stylesheets:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){c(t)?e.mask_selector="".concat(t,",").concat(f):""===t||null===t?e.mask_selector=f:(0,u.R)(5,t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){c(t)?e.block_selector+=",".concat(t):""!==t&&(0,u.R)(6,t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,u.R)(7,t)}},session_trace:{enabled:!0,autoStart:!0},soft_navigations:{enabled:!0,autoStart:!0},ssl:void 0,user_actions:{enabled:!0,elementAttributes:["id","className","tagName","type"]}}})());var p=i(6154),g=i(9324);let m=0;const v={buildEnv:g.F3,distMethod:g.Xs,version:g.xv,originTime:p.WN},y={consented:!1},b={activatedFeatures:void 0,appMetadata:{},configured:!1,get consented(){return this.session?.state?.consent||y.consented},set consented(e){y.consented=e},customTransaction:void 0,denyList:[],disabled:!1,drainRegistry:new Map,harvester:void 0,isolatedBacklog:!1,isRecording:!1,loaderType:void 0,maxBytes:3e4,obfuscator:void 0,onerror:void 0,ptid:void 0,releaseIds:{},session:void 0,timeKeeper:void 0,registeredEntities:[],jsAttributesMetadata:{bytes:0},get harvestCount(){return++m}};var w=i(7836),R=i(3241);const E={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0};function T(e,t={},r,a){let{init:c,info:d,loader_config:u,runtime:f={},exposed:g=!0}=t;if(!d){const e=(0,n.pV)();c=e.init,d=e.info,u=e.loader_config}var m;e.init=h(c||{}),e.loader_config=(m=u||{},(0,l.a)(m,E)),d.jsAttributes??={},p.bv&&(d.jsAttributes.isWorker=!0),e.info=(0,o.D)(d);const y=e.init;e.runtime??=(e=>{const t=(0,l.a)(e,b),r=Object.keys(v).reduce((e,t)=>(e[t]={value:v[t],writable:!1,configurable:!0,enumerable:!0},e),{});return Object.defineProperties(t,r)})(f),y.proxy.assets&&(e=>{const t=e.startsWith("http");e+="/",i.p=t?e:"https://"+e})(y.proxy.assets),e.runtime.configured||(Object.defineProperty(e,"beacons",{get:()=>[e.info.beacon,e.info.errorBeacon,e.init.proxy.assets,e.init.proxy.beacon].filter(Boolean)}),Object.defineProperty(e.runtime,"denyList",{get:()=>[...e.init.ajax.deny_list||[],...e.init.ajax.block_internal?e.beacons:[]]}),e.runtime.ptid=e.agentIdentifier,function(e){const t=(0,n.pV)();Object.getOwnPropertyNames(s.W.prototype).forEach(r=>{const n=s.W.prototype[r];if("function"!=typeof n||"constructor"===n)return;let i=t[r];e[r]&&!1!==e.exposed&&"micro-agent"!==e.runtime?.loaderType&&(t[r]=(...t)=>{const n=e[r](...t);return i?i(...t):n})})}(e),e.runtime.loaderType=r,e.ee=w.ee.get(e.agentIdentifier),e.exposed=g,(0,R.W)({drained:!!e.runtime.activatedFeatures,type:"lifecycle",name:"initialize",feature:void 0,data:e.config}),e.runtime.configured=!0)}var A=i(9908),x=i(1863),S=i(4261),_=i(1738);var O=i(1687),P=i(4234),k=i(5289),N=i(5270),j=i(7767),C=i(6389),D=i(7699);const L=new WeakSet;class I extends P.W{constructor(e,t){super(e,t),this.abortHandler=void 0,this.featAggregate=void 0,this.loadedSuccessfully=void 0,this.onAggregateImported=new Promise(e=>{this.loadedSuccessfully=e}),this.deferred=Promise.resolve(),!1===e.init[this.featureName].autoStart?this.deferred=new Promise((t,r)=>{this.ee.on("manual-start-all",(0,C.J)(()=>{(0,O.Ak)(e,this.featureName),t()}))}):(0,O.Ak)(e,t)}importAggregator(e,t,r={}){if(this.featAggregate)return;const n=async()=>{if(await this.deferred,this.#t(e),!(0,o.f)(e.info))return(0,u.R)(43),e.ee.abort(),void this.loadedSuccessfully(!1);let n;try{if((0,j.V)(e.init)){const{setupAgentSession:t}=await i.e(478).then(i.bind(i,8766));n=t(e)}}catch(e){(0,u.R)(20,e),this.ee.emit("internal-error",[e]),(0,A.p)(D.qh,[e],void 0,this.featureName,this.ee)}try{if(!this.#r(this.featureName,n,e.init))return(0,O.Ze)(this.agentRef,this.featureName),void this.loadedSuccessfully(!1);const{Aggregate:i}=await t();this.featAggregate=new i(e,r),e.runtime.harvester.initializedAggregates.push(this.featAggregate),this.loadedSuccessfully(!0)}catch(e){(0,u.R)(34,e),this.abortHandler?.(),(0,O.Ze)(this.agentRef,this.featureName,!0),this.loadedSuccessfully(!1),this.ee&&this.ee.abort()}};p.RI?(0,k.GG)(()=>n(),!0):n()}#r(e,r,n){if(this.blocked)return!1;switch(e){case t.K7.sessionReplay:return(0,N.SR)(n)&&!!r;case t.K7.sessionTrace:return!!r;default:return!0}}#t(e){if(!L.has(e)&&(L.add(e),!(0,o.f)(e.info))){const t=(0,n.pV)();let r={...t.info?.jsAttributes};try{r={...r,...e.info?.jsAttributes}}catch(e){}T(e,{...t,info:{...t.info,jsAttributes:r},runtime:e.runtime},e.runtime.loaderType)}}}var M=i(6630);class B extends I{static featureName=M.T;constructor(e){var t;super(e,M.T),this.setupInspectionEvents(),t=e,(0,_.Y)(S.Fw,function(e,r){"string"==typeof e&&("/"!==e.charAt(0)&&(e="/"+e),t.runtime.customTransaction=(r||"http://custom.transaction")+e,(0,A.p)(S.Pl+S.Fw,[(0,x.t)()],void 0,void 0,t.ee))},t),this.importAggregator(e,()=>i.e(478).then(i.bind(i,5839)))}setupInspectionEvents(){const e=(e,t)=>{e&&(0,R.W)({timeStamp:e.timeStamp,loaded:"complete"===e.target.readyState,type:"window",name:t,data:e.target.location+""})};(0,k.sB)(t=>{e(t,"DOMContentLoaded")}),(0,k.GG)(t=>{e(t,"load")}),(0,k.Qr)(t=>{e(t,"navigate")}),this.ee.on(d.tS.UPDATE,(e,t)=>{(0,R.W)({type:"lifecycle",name:"session",data:t})})}}class H extends e.d{constructor(e){var t;(super(),p.gm)?(this.features={},(0,n.bQ)(this.agentIdentifier,this),this.desiredFeatures=new Set(e.features||[]),this.desiredFeatures.add(B),T(this,e,e.loaderType||"agent"),t=this,(0,_.Y)(S.cD,function(e,r,n=!1){if("string"==typeof e){if(["string","number","boolean"].includes(typeof r)||null===r)return(0,_.U)(t,e,r,S.cD,n);(0,u.R)(40,typeof r)}else(0,u.R)(39,typeof e)},t),function(e){(0,_.Y)(S.Dl,function(t,r=!1){if("string"!=typeof t&&null!==t)return void(0,u.R)(41,typeof t);const n=e.info.jsAttributes["enduser.id"];r&&null!=n&&n!==t?(0,A.p)(S.Pl+"setUserIdAndResetSession",[t],void 0,"session",e.ee):(0,_.U)(e,"enduser.id",t,S.Dl,!0)},e)}(this),function(e){(0,_.Y)(S.nb,function(t){if("string"==typeof t||null===t)return(0,_.U)(e,"application.version",t,S.nb,!1);(0,u.R)(42,typeof t)},e)}(this),function(e){(0,_.Y)(S.d3,function(){e.ee.emit("manual-start-all")},e)}(this),function(e){(0,_.Y)(S.Pv,function(t=!0){if("boolean"==typeof t){if((0,A.p)(S.Pl+S.Pv,[t],void 0,"session",e.ee),e.runtime.consented=t,t){const t=e.features.page_view_event;t.onAggregateImported.then(e=>{const r=t.featAggregate;e&&!r.sentRum&&r.sendRum()})}}else(0,u.R)(65,typeof t)},e)}(this),this.run()):(0,u.R)(21)}get config(){return{info:this.info,init:this.init,loader_config:this.loader_config,runtime:this.runtime}}get api(){return this}run(){try{const e=function(e){const t={};return r.forEach(r=>{t[r]=!!e[r]?.enabled}),t}(this.init),n=[...this.desiredFeatures];n.sort((e,r)=>t.P3[e.featureName]-t.P3[r.featureName]),n.forEach(r=>{if(!e[r.featureName]&&r.featureName!==t.K7.pageViewEvent)return;const n=function(e){switch(e){case t.K7.ajax:return[t.K7.jserrors];case t.K7.sessionTrace:return[t.K7.ajax,t.K7.pageViewEvent];case t.K7.sessionReplay:return[t.K7.sessionTrace];case t.K7.pageViewTiming:return[t.K7.pageViewEvent];default:return[]}}(r.featureName).filter(e=>!(e in this.features));n.length>0&&(0,u.R)(36,{targetFeature:r.featureName,missingDependencies:n}),this.features[r.featureName]=new r(this)})}catch(e){(0,u.R)(22,e);for(const e in this.features)this.features[e].abortHandler?.();const t=(0,n.Zm)();delete t.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator;return t.ee.get(this.agentIdentifier).abort(),!1}}}var K=i(2843),W=i(782);class F extends I{static featureName=W.T;constructor(e){super(e,W.T),p.RI&&((0,K.u)(()=>(0,A.p)("docHidden",[(0,x.t)()],void 0,W.T,this.ee),!0),(0,K.G)(()=>(0,A.p)("winPagehide",[(0,x.t)()],void 0,W.T,this.ee)),this.importAggregator(e,()=>i.e(478).then(i.bind(i,9917))))}}var U=i(3969);class V extends I{static featureName=U.TZ;constructor(e){super(e,U.TZ),this.importAggregator(e,()=>i.e(478).then(i.bind(i,6555)))}}var z=i(6774),G=i(3878),Y=i(3304);class Z{constructor(e,t,r,n,i){this.name="UncaughtError",this.message="string"==typeof e?e:(0,Y.A)(e),this.sourceURL=t,this.line=r,this.column=n,this.__newrelic=i}}function q(e){return J(e)?e:new Z(void 0!==e?.message?e.message:e,e?.filename||e?.sourceURL,e?.lineno||e?.line,e?.colno||e?.col,e?.__newrelic,e?.cause)}function X(e){const t="Unhandled Promise Rejection: ";if(!e?.reason)return;if(J(e.reason)){try{e.reason.message.startsWith(t)||(e.reason.message=t+e.reason.message)}catch(e){}return q(e.reason)}const r=q(e.reason);return(r.message||"").startsWith(t)||(r.message=t+r.message),r}function Q(e){if(e.error instanceof SyntaxError&&!/:\d+$/.test(e.error.stack?.trim())){const t=new Z(e.message,e.filename,e.lineno,e.colno,e.error.__newrelic,e.cause);return t.name=SyntaxError.name,t}return J(e.error)?e.error:q(e)}function J(e){return e instanceof Error&&!!e.stack}function ee(e,r,n,i,s=(0,x.t)()){"string"==typeof e&&(e=new Error(e)),(0,A.p)("err",[e,s,!1,r,n.runtime.isRecording,void 0,i],void 0,t.K7.jserrors,n.ee),(0,A.p)("uaErr",[],void 0,t.K7.genericEvents,n.ee)}var te=i(5732),re=i(993),ne=i(3785);function ie(e,{customAttributes:t={},level:r=re.p_.INFO}={},n,i,s=(0,x.t)()){(0,ne.R)(n.ee,e,t,r,!1,i,s)}function se(e,r,n,i,s=(0,x.t)()){(0,A.p)(S.Pl+S.hG,[s,e,r,i],void 0,t.K7.genericEvents,n.ee)}function oe(e,r,n,i,s=(0,x.t)()){const{start:o,end:a,customAttributes:c}=r||{},d={customAttributes:c||{}};if("object"!=typeof d.customAttributes||"string"!=typeof e||0===e.length)return void(0,u.R)(57);const l=(e,t)=>null==e?t:"number"==typeof e?e:e instanceof PerformanceMark?e.startTime:Number.NaN;if(d.start=l(o,0),d.end=l(a,s),Number.isNaN(d.start)||Number.isNaN(d.end))(0,u.R)(57);else{if(d.duration=d.end-d.start,!(d.duration<0))return(0,A.p)(S.Pl+S.V1,[d,e,i],void 0,t.K7.genericEvents,n.ee),d;(0,u.R)(58)}}function ae(e,r={},n,i,s=(0,x.t)()){(0,A.p)(S.Pl+S.fF,[s,e,r,i],void 0,t.K7.genericEvents,n.ee)}var ce=i(7508),de=i(9566);const ue=["name","id","type"],le=new Map([[se,"addPageAction"],[ie,"log"],[oe,"measure"],[ee,"noticeError"],[ae,"recordCustomEvent"]]),fe={experimental:(0,C.J)(()=>(0,u.R)(54,"newrelic.register")),disabled:(0,C.J)(()=>(0,u.R)(55)),invalidTarget:(0,C.J)(e=>(0,u.R)(48,e)),deregistered:(0,C.J)(()=>(0,u.R)(68))};function he(e){(0,_.Y)(S.eY,function(t){return pe(e,t)},e)}function pe(e,r){fe.experimental(),r||={},r.instance=(0,de.LA)(8),r.type=te.fQ.MFE,r.licenseKey||=e.info.licenseKey,r.blocked=!1,("object"!=typeof r.tags||null===r.tags||Array.isArray(r.tags))&&(r.tags={}),r.parent??={get id(){return e.runtime.appMetadata.agents[0].entityGuid},type:te.fQ.BA};const n=(0,ce.Qr)(),i={};Object.prototype.hasOwnProperty.call(r,"attributes")||Object.defineProperty(r,"attributes",{get:()=>({...i,"source.id":r.id,"source.name":r.name,"source.type":r.type,"parent.type":r.parent?.type||te.fQ.BA,"parent.id":r.parent?.id})}),Object.entries(r.tags).forEach(([e,t])=>{ue.includes(e)||(i["source.".concat(e)]=t)});let s=()=>{};const o=e.runtime.registeredEntities,a=e=>{r.blocked=!0,s=e};function c(e){return"string"==typeof e&&!!e.trim()&&e.trim().length<501}e.init.api.register.enabled||a(fe.disabled),c(r.id)&&c(r.name)||a(()=>fe.invalidTarget(r));const d={addPageAction:(t,n={})=>p(se,[t,{...i,...n},e],r),deregister:()=>{f(),a(fe.deregistered)},log:(t,n={})=>p(ie,[t,{...n,customAttributes:{...i,...n.customAttributes||{}}},e],r),measure:(t,n={})=>p(oe,[t,{...n,customAttributes:{...i,...n.customAttributes||{}}},e],r),noticeError:(t,n={})=>p(ee,[t,{...i,...n},e],r),recordCustomEvent:(t,n={})=>p(ae,[t,{...i,...n},e],r),setApplicationVersion:e=>h("application.version",e),setCustomAttribute:(e,t)=>h(e,t),setUserId:e=>h("enduser.id",e),metadata:{get customAttributes(){return i},target:r,timings:n}},l=()=>(r.blocked&&s(),r.blocked);function f(){if(n.reportedAt)return;n.reportedAt=(0,x.t)();const e=n.fetchEnd-n.fetchStart,t=n.scriptEnd-n.scriptStart;d.recordCustomEvent("MicroFrontEndTiming",{assetUrl:n.asset,assetType:n.type,timeAlive:n.reportedAt-n.registeredAt,timeToBeRequested:n.fetchStart,timeToExecute:t,timeToFetch:e,timeToLoad:e+t,timeToRegister:n.registeredAt})}l()||(o.push(d),(0,K.G)(f));const h=(e,t)=>{l()||(i[e]=t)},p=(r,n,i)=>{if(l()&&r!==pe)return;const s=(0,x.t)(),o=le.get(r)||"unknown";(0,A.p)(U.xV,["API/register/".concat(o,"/called")],void 0,t.K7.metrics,e.ee);try{return r(...n,i,s)}catch(e){(0,u.R)(50,e)}};return d}class ge extends I{static featureName=z.T;constructor(e){var t;super(e,z.T),t=e,(0,_.Y)(S.o5,(e,r)=>ee(e,r,t),t),function(e){(0,_.Y)(S.bt,function(t){e.runtime.onerror=t},e)}(e),function(e){let t=0;(0,_.Y)(S.k6,function(e,r){++t>10||(this.runtime.releaseIds[e.slice(-200)]=(""+r).slice(-200))},e)}(e),he(e);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("internal-error",(t,r)=>{this.abortHandler&&(0,A.p)("ierr",[q(t),(0,x.t)(),!0,{},e.runtime.isRecording,r],void 0,this.featureName,this.ee)}),p.gm.addEventListener("unhandledrejection",t=>{this.abortHandler&&(0,A.p)("err",[X(t),(0,x.t)(),!1,{unhandledPromiseRejection:1},e.runtime.isRecording],void 0,this.featureName,this.ee)},(0,G.jT)(!1,this.removeOnAbort?.signal)),p.gm.addEventListener("error",t=>{this.abortHandler&&(0,A.p)("err",[Q(t),(0,x.t)(),!1,{},e.runtime.isRecording],void 0,this.featureName,this.ee)},(0,G.jT)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#n,this.importAggregator(e,()=>i.e(478).then(i.bind(i,9377)))}#n(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}var me=i(8990);let ve=1;function ye(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===p.gm?0:(0,me.I)(e,"nr@id",function(){return ve++})}function be(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,Y.A)(e).length}catch(e){return}}}var we=i(8139),Re=i(3434);const Ee={},Te=["open","send"];function Ae(e,t){var r=e||w.ee;const n=function(e){return(e||w.ee).get("xhr")}(r);if(void 0===p.gm.XMLHttpRequest)return n;if(Ee[n.debugId]++)return n;Ee[n.debugId]=1,(0,we.u)(r);var i=(0,Re.YM)(n),s=p.gm.XMLHttpRequest,o=p.gm.MutationObserver,a=p.gm.Promise,c=p.gm.setInterval,d="readystatechange",l=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],f=[],h=p.gm.XMLHttpRequest=function(e){const r=new s(e),o=n.context(r);o.targets=(0,te.$5)(t);try{n.emit("new-xhr",[r],o),r.addEventListener(d,(a=o,function(){var e=this;e.readyState>3&&!a.resolved&&(a.resolved=!0,n.emit("xhr-resolved",[],e)),i.inPlace(e,l,"fn-",R)}),(0,G.jT)(!1))}catch(e){(0,u.R)(15,e);try{n.emit("internal-error",[e])}catch(e){}}var a;return r};function g(e,t){i.inPlace(t,["onreadystatechange"],"fn-",R)}if(function(e,t){for(var r in e)t[r]=e[r]}(s,h),h.prototype=s.prototype,i.inPlace(h.prototype,Te,"-xhr-",R),n.on("send-xhr-start",function(e,t){g(e,t),function(e){f.push(e),o&&(m?m.then(b):c?c(b):(v=-v,y.data=v))}(t)}),n.on("open-xhr-start",g),o){var m=a&&a.resolve();if(!c&&!a){var v=1,y=document.createTextNode(v);new o(b).observe(y,{characterData:!0})}}else r.on("fn-end",function(e){e[0]&&e[0].type===d||b()});function b(){for(var e=0;e<f.length;e++)g(0,f[e]);f.length&&(f=[])}function R(e,t){return t}return n}var xe="fetch-",Se=xe+"body-",_e=["arrayBuffer","blob","json","text","formData"],Oe=p.gm.Request,Pe=p.gm.Response,ke="prototype";const Ne={};function je(e,t){const r=function(e){return(e||w.ee).get("fetch")}(e);if(!(Oe&&Pe&&p.gm.fetch))return r;if(Ne[r.debugId]++)return r;function n(e,n,i){var s=e[n];"function"==typeof s&&(e[n]=function(){var e=[...arguments];const n={},o=(0,te.$5)(t);var a;r.emit(i+"before-start",[e],n),n[w.P]&&n[w.P].dt&&(a=n[w.P].dt);var c=s.apply(this,e);return r.emit(i+"start",[e,a],c),c.then(function(e){return r.emit(i+"end",[null,e,o],c),e},function(e){throw r.emit(i+"end",[e,void 0,o],c),e})})}return Ne[r.debugId]=1,_e.forEach(e=>{n(Oe[ke],e,Se),n(Pe[ke],e,Se)}),n(p.gm,"fetch",xe),r.on(xe+"end",function(e,t,n){var i=this;if(i.targets=n||[void 0],t){var s=t.headers.get("content-length");null!==s&&(i.rxSize=s),r.emit(xe+"done",[null,t],i)}else r.emit(xe+"done",[e],i)}),r}var Ce=i(7485);class De{constructor(e){this.agentRef=e}generateTracePayload(e){const t=this.agentRef.loader_config;if(!this.shouldGenerateTrace(e)||!t)return null;var r=(t.accountID||"").toString()||null,n=(t.agentID||"").toString()||null,i=(t.trustKey||"").toString()||null;if(!r||!n)return null;var s=(0,de.ZF)(),o=(0,de.el)(),a=Date.now(),c={spanId:s,traceId:o,timestamp:a};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(c.traceContextParentHeader=this.generateTraceContextParentHeader(s,o),c.traceContextStateHeader=this.generateTraceContextStateHeader(s,a,r,n,i)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(c.newrelicHeader=this.generateTraceHeader(s,o,a,r,n,i)),c}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,s){if(!("function"==typeof p.gm?.btoa))return null;var o={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return s&&n!==s&&(o.d.tk=s),btoa((0,Y.A)(o))}shouldGenerateTrace(e){return this.agentRef.init?.distributed_tracing?.enabled&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1;const r=this.agentRef.init?.distributed_tracing;if(e.sameOrigin)t=!0;else if(r?.allowed_origins instanceof Array)for(var n=0;n<r.allowed_origins.length;n++){var i=(0,Ce.D)(r.allowed_origins[n]);if(e.hostname===i.hostname&&e.protocol===i.protocol&&e.port===i.port){t=!0;break}}return t}excludeNewrelicHeader(){var e=this.agentRef.init?.distributed_tracing;return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=this.agentRef.init?.distributed_tracing;return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=this.agentRef.init?.distributed_tracing;return!!e&&!!e.cors_use_tracecontext_headers}}var Le=i(9300),Ie=i(7295);function Me(e){return"string"==typeof e?e:e instanceof(0,n.dV)().o.REQ?e.url:p.gm?.URL&&e instanceof URL?e.href:void 0}var Be=["load","error","abort","timeout"],He=Be.length,Ke=(0,n.dV)().o.REQ,We=(0,n.dV)().o.XHR;const Fe="X-NewRelic-App-Data";class Ue extends I{static featureName=Le.T;constructor(e){super(e,Le.T),this.dt=new De(e),this.handler=(e,t,r,n)=>(0,A.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};p.gm?.performance?.getEntriesByType("resource").forEach(r=>{if(r.initiatorType in e&&0!==r.responseStatus){const n={status:r.responseStatus},i={rxSize:r.transferSize,duration:Math.floor(r.duration),cbTime:0};Ve(n,r.name),this.handler("xhr",[n,i,r.startTime,r.responseEnd,e[r.initiatorType]],void 0,t.K7.ajax)}})}catch(e){}je(this.ee,e),Ae(this.ee,e),function(e,r,n,i){function s(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=R,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},t.latestLongtaskEnd=0,e.addEventListener("load",function(r){T(t,e)},(0,G.jT)(!1)),p.lR||e.addEventListener("progress",function(e){t.lastSize=e.loaded},(0,G.jT)(!1))}function o(e){this.params={method:e[0]},Ve(this,e[1]),this.metrics={}}function a(t,r){e.loader_config.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",e.loader_config.xpid);var n=i.generateTracePayload(this.parsedOrigin);if(n){var s=!1;n.newrelicHeader&&(r.setRequestHeader("newrelic",n.newrelicHeader),s=!0),n.traceContextParentHeader&&(r.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&r.setRequestHeader("tracestate",n.traceContextStateHeader),s=!0),s&&(this.dt=n)}}function c(e,t){var n=this.metrics,i=e[0],s=this;if(n&&i){var o=be(i);o&&(n.txSize=o)}this.startTime=(0,x.t)(),this.body=i,this.listener=function(e){try{"abort"!==e.type||s.loadCaptureCalled||(s.params.aborted=!0),("load"!==e.type||s.called===s.totalCbs&&(s.onloadCalled||"function"!=typeof t.onload)&&"function"==typeof s.end)&&s.end(t)}catch(e){try{r.emit("internal-error",[e])}catch(e){}}};for(var a=0;a<He;a++)t.addEventListener(Be[a],this.listener,(0,G.jT)(!1))}function d(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function u(e,t){var r=""+ye(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function l(e,t){var r=""+ye(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function f(){this.endTime=(0,x.t)()}function h(e,t){t instanceof We&&"load"===e[0]&&r.emit("xhr-load-added",[e[1],e[2]],t)}function g(e,t){t instanceof We&&"load"===e[0]&&r.emit("xhr-load-removed",[e[1],e[2]],t)}function m(e,t,r){t instanceof We&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,x.t)()))}function v(e,t){this.xhrCbStart&&r.emit("xhr-cb-time",[(0,x.t)()-this.xhrCbStart,this.onload,t],t)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&p.RI&&(t=""+p.gm.location.href):e[0]&&e[0].url?t=e[0].url:p.gm?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,Ce.D)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var n=i.generateTracePayload(this.parsedOrigin);if(n&&(n.newrelicHeader||n.traceContextParentHeader))if(e[0]&&e[0].headers)a(e[0].headers,n)&&(this.dt=n);else{var s={};for(var o in r)s[o]=r[o];s.headers=new Headers(r.headers||{}),a(s.headers,n)&&(this.dt=n),e.length>1?e[1]=s:e.push(s)}}function a(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function b(e,t){this.params={},this.metrics={},this.startTime=(0,x.t)(),this.dt=t;let[r,n={}]=e;Ve(this,Me(r));const i=(""+(r&&r instanceof Ke&&r.method||n.method||"GET")).toUpperCase();this.params.method=i,this.body=n.body,this.txSize=be(n.body)||0}function w(e,t){if(this.endTime=(0,x.t)(),this.params||(this.params={}),(0,Ie.iW)(this.params))return;let r;this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(r=+this.rxSize);const n={txSize:this.txSize,rxSize:r,duration:(0,x.t)()-this.startTime},i=[this.params,n,this.startTime,this.endTime,"fetch"];this.targets.forEach(e=>E(i,this,e))}function R(e){const t=this.params,r=this.metrics;if(this.ended)return;this.ended=!0;for(let t=0;t<He;t++)e.removeEventListener(Be[t],this.listener,!1);if(t.aborted)return;if((0,Ie.iW)(t))return;r.duration=(0,x.t)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):T(this,e),r.cbTime=this.cbTime;const n=[t,r,this.startTime,this.endTime,"xhr"];this.targets.forEach(e=>E(n,this,e))}function E(e,r,i){n("xhr",[...e,i],r,t.K7.ajax)}function T(e,n){e.params.status=n.status;var i=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?be(e.response):"text"===r||""===r||void 0===r?be(e.responseText):void 0}(n,e.lastSize);if(i&&(e.metrics.rxSize=i),e.sameOrigin&&n.getAllResponseHeaders().indexOf(Fe)>=0){var s=n.getResponseHeader(Fe);s&&((0,A.p)(U.rs,["Ajax/CrossApplicationTracing/Header/Seen"],void 0,t.K7.metrics,r),e.params.cat=s.split(", ").pop())}e.loadCaptureCalled=!0}r.on("new-xhr",s),r.on("open-xhr-start",o),r.on("open-xhr-end",a),r.on("send-xhr-start",c),r.on("xhr-cb-time",d),r.on("xhr-load-added",u),r.on("xhr-load-removed",l),r.on("xhr-resolved",f),r.on("addEventListener-end",h),r.on("removeEventListener-end",g),r.on("fn-end",v),r.on("fetch-before-start",y),r.on("fetch-start",b),r.on("fn-start",m),r.on("fetch-done",w)}(e,this.ee,this.handler,this.dt),this.importAggregator(e,()=>i.e(478).then(i.bind(i,3845)))}}function Ve(e,t){var r=(0,Ce.D)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}const ze={},Ge=["pushState","replaceState"];function Ye(e){const t=function(e){return(e||w.ee).get("history")}(e);return!p.RI||ze[t.debugId]++||(ze[t.debugId]=1,(0,Re.YM)(t).inPlace(window.history,Ge,"-")),t}var Ze=i(3738);function qe(e){(0,_.Y)(S.BL,function(r=Date.now()){const n=r-p.WN;n<0&&(0,u.R)(62,r),(0,A.p)(U.XG,[S.BL,{time:n}],void 0,t.K7.metrics,e.ee),e.addToTrace({name:S.BL,start:r,origin:"nr"}),(0,A.p)(S.Pl+S.hG,[n,S.BL],void 0,t.K7.genericEvents,e.ee)},e)}const{He:Xe,bD:$e,d3:Qe,Kp:Je,TZ:et,Lc:tt,uP:rt,Rz:nt}=Ze;class it extends I{static featureName=et;constructor(e){var r;super(e,et),r=e,(0,_.Y)(S.U2,function(e){if(!(e&&"object"==typeof e&&e.name&&e.start))return;const n={n:e.name,s:e.start-p.WN,e:(e.end||e.start)-p.WN,o:e.origin||"",t:"api"};n.s<0||n.e<0||n.e<n.s?(0,u.R)(61,{start:n.s,end:n.e}):(0,A.p)("bstApi",[n],void 0,t.K7.sessionTrace,r.ee)},r),qe(e);if(!(0,j.V)(e.init))return void this.deregisterDrain();const n=this.ee;let s;Ye(n),this.eventsEE=(0,we.u)(n),this.eventsEE.on(rt,function(e,t){this.bstStart=(0,x.t)()}),this.eventsEE.on(tt,function(e,r){(0,A.p)("bst",[e[0],r,this.bstStart,(0,x.t)()],void 0,t.K7.sessionTrace,n)}),n.on(nt+Qe,function(e){this.time=(0,x.t)(),this.startPath=location.pathname+location.hash}),n.on(nt+Je,function(e){(0,A.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,t.K7.sessionTrace,n)});try{s=new PerformanceObserver(e=>{const r=e.getEntries();(0,A.p)(Xe,[r],void 0,t.K7.sessionTrace,n)}),s.observe({type:$e,buffered:!0})}catch(e){}this.importAggregator(e,()=>i.e(478).then(i.bind(i,6974)),{resourceObserver:s})}}var st=i(733),ot=i(6344);class at extends I{static featureName=ot.TZ;#i;recorder;constructor(e){var r;let n;super(e,ot.TZ),r=e,(0,_.Y)(S.CH,function(){(0,A.p)(S.CH,[],void 0,t.K7.sessionReplay,r.ee)},r),function(e){(0,_.Y)(S.Tb,function(){(0,A.p)(S.Tb,[],void 0,t.K7.sessionReplay,e.ee)},e)}(e);const s="".concat(d.Wt).concat((0,st.Y)(e.info.licenseKey,e.info.applicationID));try{n=JSON.parse(localStorage.getItem(s))}catch(e){}(0,N.SR)(e.init)&&this.ee.on(S.CH,()=>this.#s()),this.#o(n)&&this.importRecorder().then(e=>{e.startRecording(ot.Qb.PRELOAD,n?.sessionReplayMode)}),this.importAggregator(this.agentRef,()=>i.e(478).then(i.bind(i,6167)),this),this.ee.on("err",e=>{this.blocked||this.agentRef.runtime.isRecording&&(this.errorNoticed=!0,(0,A.p)(ot.Vh,[e],void 0,this.featureName,this.ee))})}#o(e){return e&&(e.sessionReplayMode===d.g.FULL||e.sessionReplayMode===d.g.ERROR)||(0,N.Aw)(this.agentRef.init)}importRecorder(){return this.recorder?Promise.resolve(this.recorder):(this.#i??=Promise.all([i.e(478),i.e(249)]).then(i.bind(i,4866)).then(({Recorder:e})=>(this.recorder=new e(this),this.recorder)).catch(e=>{throw this.ee.emit("internal-error",[e]),this.blocked=!0,e}),this.#i)}#s(){this.blocked||(this.featAggregate?this.featAggregate.mode!==d.g.FULL&&this.featAggregate.initializeRecording(d.g.FULL,!0,ot.Qb.API):this.importRecorder().then(()=>{this.recorder.startRecording(ot.Qb.API,d.g.FULL)}))}}var ct=i(3962);class dt extends I{static featureName=ct.TZ;constructor(e){if(super(e,ct.TZ),function(e){const r=e.ee.get("tracer");function n(){}(0,_.Y)(S.dT,function(e){return(new n).get("object"==typeof e?e:{})},e);const i=n.prototype={createTracer:function(n,i){var s={},o=this,a="function"==typeof i;return(0,A.p)(U.xV,["API/createTracer/called"],void 0,t.K7.metrics,e.ee),function(){if(r.emit((a?"":"no-")+"fn-start",[(0,x.t)(),o,a],s),a)try{return i.apply(this,arguments)}catch(e){const t="string"==typeof e?new Error(e):e;throw r.emit("fn-err",[arguments,this,t],s),t}finally{r.emit("fn-end",[(0,x.t)()],s)}}}};["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach(r=>{_.Y.apply(this,[r,function(){return(0,A.p)(S.hw+r,[performance.now(),...arguments],this,t.K7.softNav,e.ee),this},e,i])}),(0,_.Y)(S.PA,function(){(0,A.p)(S.hw+"routeName",[performance.now(),...arguments],void 0,t.K7.softNav,e.ee)},e)}(e),!p.RI||!(0,n.dV)().o.MO)return;const r=Ye(this.ee);try{this.removeOnAbort=new AbortController}catch(e){}ct.tC.forEach(e=>{(0,G.sp)(e,e=>{c(e)},!0,this.removeOnAbort?.signal)});const s=()=>(0,A.p)("newURL",[(0,x.t)(),""+window.location],void 0,this.featureName,this.ee);r.on("pushState-end",s),r.on("replaceState-end",s),(0,G.sp)(ct.OV,e=>{c(e),(0,A.p)("newURL",[e.timeStamp,""+window.location],void 0,this.featureName,this.ee)},!0,this.removeOnAbort?.signal);let o=!1;const a=new((0,n.dV)().o.MO)((e,t)=>{o||(o=!0,requestAnimationFrame(()=>{(0,A.p)("newDom",[(0,x.t)()],void 0,this.featureName,this.ee),o=!1}))}),c=(0,C.s)(e=>{"loading"!==document.readyState&&((0,A.p)("newUIEvent",[e],void 0,this.featureName,this.ee),a.observe(document.body,{attributes:!0,childList:!0,subtree:!0,characterData:!0}))},100,{leading:!0});this.abortHandler=function(){this.removeOnAbort?.abort(),a.disconnect(),this.abortHandler=void 0},this.importAggregator(e,()=>i.e(478).then(i.bind(i,4393)),{domObserver:a})}}var ut=i(9119);const lt={},ft=new Set;function ht(e){return"string"==typeof e?{type:"string",size:(new TextEncoder).encode(e).length}:e instanceof ArrayBuffer?{type:"ArrayBuffer",size:e.byteLength}:e instanceof Blob?{type:"Blob",size:e.size}:e instanceof DataView?{type:"DataView",size:e.byteLength}:ArrayBuffer.isView(e)?{type:"TypedArray",size:e.byteLength}:{type:"unknown",size:0}}class pt{constructor(e,t){this.timestamp=(0,x.t)(),this.currentUrl=(0,ut.L)(window.location.href),this.socketId=(0,de.LA)(8),this.requestedUrl=(0,ut.L)(e),this.requestedProtocols=Array.isArray(t)?t.join(","):t||"",this.openedAt=void 0,this.protocol=void 0,this.extensions=void 0,this.binaryType=void 0,this.messageOrigin=void 0,this.messageCount=0,this.messageBytes=0,this.messageBytesMin=0,this.messageBytesMax=0,this.messageTypes=void 0,this.sendCount=0,this.sendBytes=0,this.sendBytesMin=0,this.sendBytesMax=0,this.sendTypes=void 0,this.closedAt=void 0,this.closeCode=void 0,this.closeReason="unknown",this.closeWasClean=void 0,this.connectedDuration=0,this.hasErrors=void 0}}class gt extends I{static featureName=a.TZ;constructor(e){super(e,a.TZ);const r=e.init.feature_flags.includes("websockets"),s=!e.init.feature_flags.includes("no_spv"),o=[e.init.page_action.enabled,e.init.performance.capture_marks,e.init.performance.capture_measures,e.init.performance.resources.enabled,e.init.user_actions.enabled,r,s];var c;let d;if(c=e,(0,_.Y)(S.hG,(e,t)=>se(e,t,c),c),function(e){(0,_.Y)(S.fF,(t,r)=>ae(t,r,e),e)}(e),qe(e),he(e),function(e){(0,_.Y)(S.V1,(t,r)=>oe(t,r,e),e)}(e),this.removeOnAbort=new AbortController,this.abortHandler=()=>{this.removeOnAbort.abort(),this.abortHandler=void 0},r){const u=function(e){if(!(0,n.dV)().o.WS)return e;const t=e.get("websockets");if(lt[t.debugId]++)return t;lt[t.debugId]=1,(0,K.G)(()=>{const e=(0,x.t)();ft.forEach(r=>{r.nrData.closedAt=e,r.nrData.closeCode=1001,r.nrData.closeReason="Page navigating away",r.nrData.closeWasClean=!1,r.nrData.openedAt&&(r.nrData.connectedDuration=e-r.nrData.openedAt),t.emit("ws",[r.nrData],r)})});class r extends WebSocket{static name="WebSocket";static toString(){return"function WebSocket() { [native code] }"}toString(){return"[object WebSocket]"}get[Symbol.toStringTag](){return r.name}#a(e){(e.__newrelic??={}).socketId=this.nrData.socketId,this.nrData.hasErrors??=!0}constructor(...e){super(...e),this.nrData=new pt(e[0],e[1]),this.addEventListener("open",()=>{this.nrData.openedAt=(0,x.t)(),["protocol","extensions","binaryType"].forEach(e=>{this.nrData[e]=this[e]}),ft.add(this)}),this.addEventListener("message",e=>{const{type:t,size:r}=ht(e.data);this.nrData.messageOrigin??=(0,ut.L)(e.origin),this.nrData.messageCount++,this.nrData.messageBytes+=r,this.nrData.messageBytesMin=Math.min(this.nrData.messageBytesMin||1/0,r),this.nrData.messageBytesMax=Math.max(this.nrData.messageBytesMax,r),(this.nrData.messageTypes??"").includes(t)||(this.nrData.messageTypes=this.nrData.messageTypes?"".concat(this.nrData.messageTypes,",").concat(t):t)}),this.addEventListener("close",e=>{this.nrData.closedAt=(0,x.t)(),this.nrData.closeCode=e.code,e.reason&&(this.nrData.closeReason=e.reason),this.nrData.closeWasClean=e.wasClean,this.nrData.connectedDuration=this.nrData.closedAt-this.nrData.openedAt,ft.delete(this),t.emit("ws",[this.nrData],this)})}addEventListener(e,t,...r){const n=this,i="function"==typeof t?function(...e){try{return t.apply(this,e)}catch(e){throw n.#a(e),e}}:t?.handleEvent?{handleEvent:function(...e){try{return t.handleEvent.apply(t,e)}catch(e){throw n.#a(e),e}}}:t;return super.addEventListener(e,i,...r)}send(e){if(this.readyState===WebSocket.OPEN){const{type:t,size:r}=ht(e);this.nrData.sendCount++,this.nrData.sendBytes+=r,this.nrData.sendBytesMin=Math.min(this.nrData.sendBytesMin||1/0,r),this.nrData.sendBytesMax=Math.max(this.nrData.sendBytesMax,r),(this.nrData.sendTypes??"").includes(t)||(this.nrData.sendTypes=this.nrData.sendTypes?"".concat(this.nrData.sendTypes,",").concat(t):t)}try{return super.send(e)}catch(e){throw this.#a(e),e}}close(...e){try{super.close(...e)}catch(e){throw this.#a(e),e}}}return p.gm.WebSocket=r,t}(this.ee);u.on("ws",e=>{(0,A.p)("ws-complete",[e],void 0,this.featureName,this.ee)})}if(s&&p.gm.addEventListener("securitypolicyviolation",e=>{(0,A.p)("spv",[e],void 0,t.K7.genericEvents,this.ee)},(0,G.jT)(!1,this.removeOnAbort.signal)),p.RI){if(je(this.ee,e),Ae(this.ee,e),d=Ye(this.ee),e.init.user_actions.enabled){function l(t){const r=(0,Ce.D)(t);return e.beacons.includes(r.hostname+":"+r.port)}function f(){d.emit("navChange")}a.Zp.forEach(e=>(0,G.sp)(e,e=>(0,A.p)("ua",[e],void 0,this.featureName,this.ee),!0)),a.qN.forEach(e=>{const t=(0,C.s)(e=>{(0,A.p)("ua",[e],void 0,this.featureName,this.ee)},500,{leading:!0});(0,G.sp)(e,t)}),p.gm.addEventListener("error",()=>{(0,A.p)("uaErr",[],void 0,t.K7.genericEvents,this.ee)},(0,G.jT)(!1,this.removeOnAbort.signal)),this.ee.on("open-xhr-start",(e,r)=>{l(e[1])||r.addEventListener("readystatechange",()=>{2===r.readyState&&(0,A.p)("uaXhr",[],void 0,t.K7.genericEvents,this.ee)},(0,G.jT)(void 0,this.removeOnAbort.signal))}),this.ee.on("fetch-start",e=>{e.length>=1&&!l(Me(e[0]))&&(0,A.p)("uaXhr",[],void 0,t.K7.genericEvents,this.ee)}),d.on("pushState-end",f),d.on("replaceState-end",f),window.addEventListener("hashchange",f,(0,G.jT)(!0,this.removeOnAbort.signal)),window.addEventListener("popstate",f,(0,G.jT)(!0,this.removeOnAbort.signal))}if(e.init.performance.resources.enabled&&p.gm.PerformanceObserver?.supportedEntryTypes.includes("resource")){new PerformanceObserver(e=>{e.getEntries().forEach(e=>{(0,A.p)("browserPerformance.resource",[e],void 0,this.featureName,this.ee)})}).observe({type:"resource",buffered:!0})}}o.some(e=>e)?this.importAggregator(e,()=>i.e(478).then(i.bind(i,8019))):this.deregisterDrain()}}var mt=i(2646);const vt=new Map;function yt(e,t,r,n,i=!0,s){if("object"!=typeof t||!t||"string"!=typeof r||!r||"function"!=typeof t[r])return(0,u.R)(29);const o=function(e){return(e||w.ee).get("logger")}(e),a=(0,Re.YM)(o,void 0,s),c=new mt.y(w.P);c.level=n.level,c.customAttributes=n.customAttributes,c.autoCaptured=i;const d=t[r]?.[Re.Jt]||t[r];return vt.set(d,c),a.inPlace(t,[r],"wrap-logger-",()=>vt.get(d),void 0,!0),o}var bt=i(1910);class wt extends I{static featureName=re.TZ;constructor(e){var t;super(e,re.TZ),t=e,(0,_.Y)(S.$9,(e,r)=>ie(e,r,t),t),function(e){(0,_.Y)(S.Wb,(t,r,{customAttributes:n={},level:i=re.p_.INFO}={})=>{yt(e.ee,t,r,{customAttributes:n,level:i},!1,e)},e)}(e),he(e);const r=this.ee;["log","error","warn","info","debug","trace"].forEach(t=>{(0,bt.i)(p.gm.console[t]),yt(r,p.gm.console,t,{level:"log"===t?"info":t},void 0,e)}),this.ee.on("wrap-logger-end",function([e],t,n,i=[]){const{level:s,customAttributes:o,autoCaptured:a}=this;i.forEach(t=>{(0,ne.R)(r,e,o,s,a,t)})}),this.importAggregator(e,()=>i.e(478).then(i.bind(i,5288)))}}new H({features:[Ue,B,F,it,at,V,ge,gt,wt,dt],loaderType:"spa"})})()})();</script>
    <meta http-equiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="INDEX, FOLLOW" />
    <meta name="description" content="Find your new 🏡 house for rent in Zimbabwe 🇿🇼 on the N°1 Real Estate Marketplace at the best price.">
    <title>Houses for Rent in Zimbabwe | 435 listings</title>

    <link rel="icon" href="/uploadedfiles/e0/2f/6c/e02f6ca2-8d94-496f-b5e8-ed6b775f1b3f.png">
        <link rel="canonical" href="https://www.property.co.zw/houses-for-rent" />

    
            <link rel="next" href="https://www.property.co.zw/houses-for-rent?page=2" />

        <link rel="alternate" href="https://www.property.co.zw/houses-for-rent" hreflang="en" />
                <link rel="alternate" href="https://www.property.co.zw/houses-for-rent" hreflang="x-default" />


        <link rel="preload" as="image" href="/uploadedfiles/37/57/96/3757961e-adad-4df6-a7aa-8bf2f6fc3794.jpg" />

<meta property="og:title" content="House for Rent in Zimbabwe" />
<meta property="og:description" content="See the latest House for Rent in the heart of Zimbabwe. Contact trusted agents." />
<meta property="og:type" content="Website" />
<meta property="og:url" content="https://www.property.co.zw/houses-for-rent" />
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





<script type="b2460e50d817b0df62da8c5d-text/javascript">
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
    var QueryParam = 'category=14&type_id=2';
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

        <script type="b2460e50d817b0df62da8c5d-text/javascript">
            console.log = function () { }
        </script>



    <!-- Google Tag Manager -->
    <script type="b2460e50d817b0df62da8c5d-text/javascript">
            (function (w, d, s, l, i) {
                w[l] = w[l] || []; w[l].push({
                    'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                }); var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5SBKD64');
    </script>

    <script type="b2460e50d817b0df62da8c5d-text/javascript">
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
    <input name="__RequestVerificationToken" type="hidden" value="Fg95zPOpwycG5ePpDPLjqK3U-q4IxgfvPX_PfguNvnh2kDs3fmFB6Svj5WJEGGUT07Gd9hTgqT0FaPpnonfUXEOl4Nqa1-ZvR8X6W4wu6NQ1" />



    <div id="fb-root"></div>

<script type="b2460e50d817b0df62da8c5d-text/javascript">
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

<span class="btn-login btn-login-new facebook text-center cursor-pointer block mb-2 relative" style="" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.ProcessLoginSignUp.Facebook()" data-cf-modified-b2460e50d817b0df62da8c5d-="">
    <img src="/content/overhaul/img/svg/logos/facebook.svg" style="width: 20px; margin-right: 4px; display: inline; position: relative; bottom: 1px;"/>
    Continue with Facebook
</span>


            <span class="btn-login btn-login-new email text-center cursor-pointer block mb-8  hover:bg-gray-50" data-switch="#login-modal" style="">
                <img src="/content/overhaul/img/svg/mod/mail.svg" class="h-6 w-6 inline-block mr-1" style="position: relative; bottom: 1px; filter: invert(39%) sepia(33%) saturate(967%) hue-rotate(314deg) brightness(113%) contrast(108%);">
                Continue with Email
            </span>

            <span class="block mb-4 mt-8 cursor-pointer text-button text-center" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowRegisterModal()" data-cf-modified-b2460e50d817b0df62da8c5d-="">Don&#39;t have an account? Create one.</span>

                <label class="vcenterFlex justify-center text-sm mb-4">
                    <input type="checkbox" id="marketing_consent" name="marketing_consent" checked="checked" onchange="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.UpdateMarketingConsentCookie();" style="width: 2rem; margin-bottom: 0;" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
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
            
<form action="/Account/Login" method="post"><input name="__RequestVerificationToken" type="hidden" value="JqbrsG0eYlVMGwrpjjXKCwQuuxw0OFhpIblc2uTt24yTK-KF0V3q0B1JA2lkufDA42BZBm53FKQJMc86yjxDKyFzIZC20e2wWvZWY1yGFok1" /><input id="Username" name="Username" placeholder="Enter Email Address" required="required" type="email" value="" /><input class="mb-4" id="Password" name="Password" placeholder="Password" required="required" type="password" value="" />    <h6 class="cursor-pointer mb-4" data-switch="#reset-password-modal">Forgot your password?</h6>
    <button class="submit" type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.ProcessLoginSignUp.Email(true);" data-text="Login" data-cf-modified-b2460e50d817b0df62da8c5d-="">
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

<span class="btn-login btn-login-new facebook text-center cursor-pointer block mb-2 relative" style="" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.ProcessLoginSignUp.Facebook()" data-cf-modified-b2460e50d817b0df62da8c5d-="">
    <img src="/content/overhaul/img/svg/logos/facebook.svg" style="width: 20px; margin-right: 4px; display: inline; position: relative; bottom: 1px;"/>
    Sign up with Facebook
</span>


<div class="text-center mb-2">or</div>
<form action="/Account/SignUp" class="signup-form" method="post"><input name="__RequestVerificationToken" type="hidden" value="vPbRGgd69Ofp23I5MuYOoWcFAChtXGbPhYRI8BuMYspHjHXleeECGzK7j8Yi9j-4iAnz3pD82FKvPxcZBNEAaAwvMLoUV7nNTNt66c4zpU41" /><input data-val="true" data-val-email="The e-mail address supplied does not appear to be valid" data-val-required="Email is required" id="EmailAddress" name="EmailAddress" placeholder="E-Mail" required="required" type="email" value="" /><input id="Firstname" name="Firstname" placeholder="First Name" required="required" type="text" value="" /><input id="Surname" name="Surname" placeholder="Surname" required="required" type="text" value="" /><div class="flex phone-select country-code">


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
    <input id="ContactNumber" name="ContactNumber" type="number" oninput="if (!window.__cfRLUnblockHandlers) return false; if(this.value.length > 12) this.value = this.value.slice(0,12)" placeholder="Phone" required="required" value="" tabindex="0" data-parsley-minlength="7" data-parsley-maxlength="12" data-parsley-minlength-message="Contact number must be at least 7 digits" data-parsley-maxlength-message="Contact number cannot exceed 12 digits" data-parsley-errors-container="#phone-error-container" data-cf-modified-b2460e50d817b0df62da8c5d-="" />  
</div>
<div id="phone-error-container"></div>
<input data-val="true" data-val-required="Password is required" id="Password" name="Password" placeholder="Password" required="required" type="password" value="" /><input data-val="true" data-val-equalto="Your password and confirmation do not match" data-val-equalto-other="*.Password" data-val-required="Password is required" id="ConfirmPassword" name="ConfirmPassword" placeholder="Confirm Password" required="required" type="password" value="" /><input id="returnurl" name="returnurl" type="hidden" value="" /><input id="params" name="params" type="hidden" value="" />    <div id="register-form-recaptcha" class="recaptcha-container" data-action="register"></div>
        <label class="vcenterFlex text-sm mb-4">
            <input type="checkbox" id="marketing_consent" name="marketing_consent" checked="checked" onchange="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.UpdateMarketingConsentCookie();" style="width: 2rem; margin-bottom: 0;" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
            <span>Send me marketing communications</span>
        </label>
    <button type="button" class="submit" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.ProcessLoginSignUp.Email(false);" data-text="Create an Account" data-cf-modified-b2460e50d817b0df62da8c5d-="">Create an Account</button>
</form>

        </div>
    </div>
</div>


<div class="hidden modal" id="reset-password-modal" role="dialog">
    <div class="vcenterFlex h-full">
        <div>
            <div class="modal-header">Reset Password</div>
            <form action="/Account/ResetPassword" class="loadingspinner" id="resetpwdform" method="post"><input name="__RequestVerificationToken" type="hidden" value="Ib0gdTd4y1-9O0NOyY3n5CEY6246fCEK7VTFmIIL00tmNpRAumwg4UZpDbh183nsFfeP54MVXNsLhg--oEhj36PvoN_ubKpmNAYgg5rB1F81" />    <div class="mb-2">Enter your email address and you will receive an email with a link to reset your password.</div>
<input data-val="true" data-val-required="You didn&#39;t enter an e-mail address. This must be the address you use to log in." id="Email" name="Email" placeholder="E-Mail" required="required" type="email" value="" />    <button id="resetBtn" class="submit" type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; resetPassword(this);" data-cf-modified-b2460e50d817b0df62da8c5d-="">Reset Password</button>
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
                <button type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Newsletter.SubscribeBlog(this)" class="bg-secondary text-white px-5 md:px-6 py-3 md:py-2 rounded-md whitespace-nowrap md:w-auto md:mt-4" style="font-size: 15px !important;" data-cf-modified-b2460e50d817b0df62da8c5d-="">Subscribe</button>
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
            <input type="hidden" name="type_id" id="type_id" value="2" onchange="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.UpdateCategoryList(this.value)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
            <div style="background-position:93%;" data-match-width-mobile="true" class="dropdown-toggle dropdown-arrow vcenterFlex w-full rounded-md border border-inputborder p-4 mb-2 xl:mb-1.5 h-10 overflow-hidden">For Rent</div>
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
                    Houses (439)
                    <input type="checkbox" value="14" name="14" id="14">
                    <span class="checkmark"></span>
                </label>
                <label for="22" class="checkboxItem text-graypurpledark">
                    &nbsp;Townhouses & Complexes (76)
                    <input type="checkbox" value="22" name="22" id="22">
                    <span class="checkmark"></span>
                </label>
                <label for="35" class="checkboxItem text-graypurpledark">
                    &nbsp;Cottages (53)
                    <input type="checkbox" value="35" name="35" id="35">
                    <span class="checkmark"></span>
                </label>
                <label for="13" class="checkboxItem ">
                    Commercial Property (307)
                    <input type="checkbox" value="13" name="13" id="13">
                    <span class="checkmark"></span>
                </label>
                <label for="31" class="checkboxItem text-graypurpledark">
                    &nbsp;Offices (140)
                    <input type="checkbox" value="31" name="31" id="31">
                    <span class="checkmark"></span>
                </label>
                <label for="32" class="checkboxItem text-graypurpledark">
                    &nbsp;Shops & Retail Property (59)
                    <input type="checkbox" value="32" name="32" id="32">
                    <span class="checkmark"></span>
                </label>
                <label for="19" class="checkboxItem text-graypurpledark">
                    &nbsp;Warehouses & Factories (55)
                    <input type="checkbox" value="19" name="19" id="19">
                    <span class="checkmark"></span>
                </label>
                <label for="16" class="checkboxItem ">
                    Flats & Apartments (231)
                    <input type="checkbox" value="16" name="16" id="16">
                    <span class="checkmark"></span>
                </label>
                <label for="34" class="checkboxItem text-graypurpledark">
                    &nbsp;Garden Flats (71)
                    <input type="checkbox" value="34" name="34" id="34">
                    <span class="checkmark"></span>
                </label>
                <label for="17" class="checkboxItem ">
                    Land (10)
                    <input type="checkbox" value="17" name="17" id="17">
                    <span class="checkmark"></span>
                </label>
                <label for="29" class="checkboxItem text-graypurpledark">
                    &nbsp;Farms & Agricultural Land (4)
                    <input type="checkbox" value="29" name="29" id="29">
                    <span class="checkmark"></span>
                </label>
                <label for="21" class="checkboxItem ">
                    Rooms (3)
                    <input type="checkbox" value="21" name="21" id="21">
                    <span class="checkmark"></span>
                </label>
                <label for="36" class="checkboxItem ">
                    Student Accommodation (2)
                    <input type="checkbox" value="36" name="36" id="36">
                    <span class="checkmark"></span>
                </label>
        </div>
        <input type="hidden" name="category" id="category" value="14" />
</div>


        

        <div class="md:hidden">
            <input type="hidden" id="maxSliderBudget" value="10000" />

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

            
            <div class="text-lg font-medium mb-4 w-full ">Important Features</div>
            <div class="col-count-2 mb-4 ImportantFeatures ">
                    <label for="837" class="checkboxItem">
                        Borehole
                        <input type="checkbox" value="837" name="837" id="837">
                        <span class="checkmark"></span>
                    </label>
                    <label for="880" class="checkboxItem">
                        Fully Furnished
                        <input type="checkbox" value="880" name="880" id="880">
                        <span class="checkmark"></span>
                    </label>
                    <label for="863" class="checkboxItem">
                        Swimming Pool
                        <input type="checkbox" value="863" name="863" id="863">
                        <span class="checkmark"></span>
                    </label>
                                    <label for="onshow" class="checkboxItem">
                        Showdays
                        <input type="checkbox" name="onshow" id="onshow" >
                        <span class="checkmark"></span>
                    </label>
            </div>

            
            <div class="text-lg font-medium mb-4 w-full ">General Features</div>
            <div class="col-count-2 mb-4 GeneralFeatures ">
                    <label for="111222" class="checkboxItem">
                        24hr Security
                        <input type="checkbox" value="111222" name="111222" id="111222">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1049" class="checkboxItem">
                        Access Control
                        <input type="checkbox" value="1049" name="1049" id="1049">
                        <span class="checkmark"></span>
                    </label>
                    <label for="32453" class="checkboxItem">
                        Clubhouse
                        <input type="checkbox" value="32453" name="32453" id="32453">
                        <span class="checkmark"></span>
                    </label>
                    <label for="843" class="checkboxItem">
                        Double Storey
                        <input type="checkbox" value="843" name="843" id="843">
                        <span class="checkmark"></span>
                    </label>
                    <label for="841" class="checkboxItem">
                        Entertainment Area
                        <input type="checkbox" value="841" name="841" id="841">
                        <span class="checkmark"></span>
                    </label>
                    <label for="3425435" class="checkboxItem">
                        Fitness Center
                        <input type="checkbox" value="3425435" name="3425435" id="3425435">
                        <span class="checkmark"></span>
                    </label>
                    <label for="840" class="checkboxItem">
                        Flatlet/Cottage
                        <input type="checkbox" value="840" name="840" id="840">
                        <span class="checkmark"></span>
                    </label>
                    <label for="845" class="checkboxItem">
                        Garage
                        <input type="checkbox" value="845" name="845" id="845">
                        <span class="checkmark"></span>
                    </label>
                    <label for="853" class="checkboxItem">
                        Good ZESA
                        <input type="checkbox" value="853" name="853" id="853">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1058" class="checkboxItem">
                        Intercom System
                        <input type="checkbox" value="1058" name="1058" id="1058">
                        <span class="checkmark"></span>
                    </label>
                    <label for="838" class="checkboxItem">
                        Internet Connection
                        <input type="checkbox" value="838" name="838" id="838">
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
                    <label for="43533" class="checkboxItem">
                        Solar System
                        <input type="checkbox" value="43533" name="43533" id="43533">
                        <span class="checkmark"></span>
                    </label>
                    <label for="849" class="checkboxItem">
                        Split Level
                        <input type="checkbox" value="849" name="849" id="849">
                        <span class="checkmark"></span>
                    </label>
                    <label for="851" class="checkboxItem">
                        Staff Quarters
                        <input type="checkbox" value="851" name="851" id="851">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1053" class="checkboxItem">
                        Wheelchair Accessibility
                        <input type="checkbox" value="1053" name="1053" id="1053">
                        <span class="checkmark"></span>
                    </label>
            </div>

            
            <div class="text-lg font-medium mb-4 w-full ">External Features</div>
            <div class="col-count-2 mb-4 ExternalFeatures ">
                    <label for="857" class="checkboxItem">
                        Carport
                        <input type="checkbox" value="857" name="857" id="857">
                        <span class="checkmark"></span>
                    </label>
                    <label for="859" class="checkboxItem">
                        Electric Fence
                        <input type="checkbox" value="859" name="859" id="859">
                        <span class="checkmark"></span>
                    </label>
                    <label for="861" class="checkboxItem">
                        Electric Gate
                        <input type="checkbox" value="861" name="861" id="861">
                        <span class="checkmark"></span>
                    </label>
                    <label for="855" class="checkboxItem">
                        Garden
                        <input type="checkbox" value="855" name="855" id="855">
                        <span class="checkmark"></span>
                    </label>
                    <label for="34252" class="checkboxItem">
                        Paved
                        <input type="checkbox" value="34252" name="34252" id="34252">
                        <span class="checkmark"></span>
                    </label>
                    <label for="865" class="checkboxItem">
                        Tennis Court
                        <input type="checkbox" value="865" name="865" id="865">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1000000" class="checkboxItem">
                        Tiled
                        <input type="checkbox" value="1000000" name="1000000" id="1000000">
                        <span class="checkmark"></span>
                    </label>
                    <label for="867" class="checkboxItem">
                        Verandah
                        <input type="checkbox" value="867" name="867" id="867">
                        <span class="checkmark"></span>
                    </label>
                    <label for="869" class="checkboxItem">
                        Walled
                        <input type="checkbox" value="869" name="869" id="869">
                        <span class="checkmark"></span>
                    </label>
                    <label for="882" class="checkboxItem">
                        Water Tank
                        <input type="checkbox" value="882" name="882" id="882">
                        <span class="checkmark"></span>
                    </label>
            </div>

            
            <div class="text-lg font-medium mb-4 w-full ">Internal Features</div>
            <div class="col-count-2 mb-4 InternalFeatures ">
                    <label for="871" class="checkboxItem">
                        Air Conditioning
                        <input type="checkbox" value="871" name="871" id="871">
                        <span class="checkmark"></span>
                    </label>
                    <label for="873" class="checkboxItem">
                        Burglar Alarm
                        <input type="checkbox" value="873" name="873" id="873">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1048" class="checkboxItem">
                        CCTV Surveillance
                        <input type="checkbox" value="1048" name="1048" id="1048">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1064" class="checkboxItem">
                        Elevator/Lift
                        <input type="checkbox" value="1064" name="1064" id="1064">
                        <span class="checkmark"></span>
                    </label>
                    <label for="878" class="checkboxItem">
                        Fireplace
                        <input type="checkbox" value="878" name="878" id="878">
                        <span class="checkmark"></span>
                    </label>
                    <label for="876" class="checkboxItem">
                        Fitted Kitchen
                        <input type="checkbox" value="876" name="876" id="876">
                        <span class="checkmark"></span>
                    </label>
                    <label for="874" class="checkboxItem">
                        Fully Carpeted
                        <input type="checkbox" value="874" name="874" id="874">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1059" class="checkboxItem">
                        Gym
                        <input type="checkbox" value="1059" name="1059" id="1059">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1000001" class="checkboxItem">
                        Main En Suite
                        <input type="checkbox" value="1000001" name="1000001" id="1000001">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1065" class="checkboxItem">
                        Storage Room
                        <input type="checkbox" value="1065" name="1065" id="1065">
                        <span class="checkmark"></span>
                    </label>
                    <label for="1000002" class="checkboxItem">
                        Study/Office
                        <input type="checkbox" value="1000002" name="1000002" id="1000002">
                        <span class="checkmark"></span>
                    </label>
                    <label for="324554" class="checkboxItem">
                        Wooden Floor
                        <input type="checkbox" value="324554" name="324554" id="324554">
                        <span class="checkmark"></span>
                    </label>
            </div>
            <button class="SearchButton w-full border-button bg-button text-white h-10 md:hidden" type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.ReplaceWithLoading(this, 'light', 'bottom: 3px')" style="margin: 1rem 0;" data-cf-modified-b2460e50d817b0df62da8c5d-="">
                Apply Filters
            </button>
        </div>
            <input type="hidden" value="" id="sortby" name="sortby" />

            
            <div class="grid grid-rows-1 grid-cols-2 gap-4 xl:block mb-4 xl:ml-2 xl:w-1/6 xl:mb-2">
                <a href="/request-a-property" class="w-full rounded-md border border-secondary px-4 pb-1 pt-1.5 text-center text-secondary xl:hidden">Save Search</a>
                <button class="SearchButton w-full border-button bg-button text-white mb-0 h-10" type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.ReplaceWithLoading(this, 'light', 'bottom: 3px')" data-cf-modified-b2460e50d817b0df62da8c5d-="">
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
<input type="hidden" value="house" id="CategoryStr" />

<div class="container searchContainer xl:w-[1100px]">

    

<ol itemscope itemtype="https://schema.org/BreadcrumbList" class="breadcrumb mb-1 whitespace-nowrap overflow-x-scroll scrollbar-hidden">

        <li class="inline-block text-graypurpledark" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a itemprop="item" href="/houses-for-rent">
                <span itemprop="name">Houses for Rent </span>
            </a>
            <meta itemprop="position" content="1" />
        </li>
</ol>
    
    <h1 class="mb-3 md:mb-2">Houses for Rent in Zimbabwe</h1>

    <div class="xl:flex">
        <div class="relative xl:w-[788px]">
                <div class="relative flex justify-between mb-3 md:mb-4">

                    
                    <div class="result-description vcenterFlex text-graypurpledark text-sm md:text-base">
                        1 - 20 of 435 properties
                    </div>

                    <div class="flex">

                            <div class="hidden xl:block">
                                <button onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.CreateEmailAlert('search')" type="button" class="btn w-full xl:w-auto whitespace-nowrap mr-2" data-cf-modified-b2460e50d817b0df62da8c5d-="">Get email alerts</button>
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
                <a href="/townhouses-for-rent" class="inline-block px-3 py-1 bg-graypurpledark rounded-md mr-2" style="background: #E7EAF1; color: #556;">Townhouses &amp; Complexes</a>
                <a href="/cottages-for-rent" class="inline-block px-3 py-1 bg-graypurpledark rounded-md mr-2" style="background: #E7EAF1; color: #556;">Cottages</a>
                <a href="/houses-for-rent/harare" class="inline-block px-3 py-1 bg-graypurpledark rounded-md mr-2" style="background: #E7EAF1; color: #556;">Harare</a>
                <a href="/houses-for-rent/mashonaland-east" class="inline-block px-3 py-1 bg-graypurpledark rounded-md mr-2" style="background: #E7EAF1; color: #556;">Mashonaland East</a>
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
                    <a onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.CreateEmailAlert('search')" href="javascript:;" class="block xl:hidden w-full mb-3 px-4 py-2 bg-white h-11 border border-button text-button text-center rounded-md transition-all hover:text-white hover:bg-button" data-cf-modified-b2460e50d817b0df62da8c5d-="">
                        Get email alerts
                    </a>


<div class="result-cards">



<div id="243866" data-mandate-id="245588" class="ResultCardItem PriorityGrid  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(243866)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/alexcourt" style="cursor: pointer;">
                        <img src="/uploadedfiles/f3/a3/1a/f3a31a42-85fe-44e2-820c-a7d09ecc4b58.jpeg" alt="AlexCourt Real Estate" loading="eager" class="max-h-12 ga-parent ga-agency-logo" data-name="AlexCourt Real Estate" data-url="/estate-agents/alexcourt" />
                    </a>

                        <a href="/estate-agents/alexcourt/panashe-gomendo/22778" class="vcenterFlex ">Panashe Gomendo</a>

                </div>
        </div>

    <div class="aspectRatio invisible">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-243866 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="243866"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-alx243866">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="/uploadedfiles/81/82/a5/8182a5e5-bb85-4a8a-a263-065bd3b13e61_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4d/79/8c/4d798cd1-ca79-4b2c-826c-f4802d42f937_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/af/2e/da/af2eda53-922b-4b07-8e3f-92a5b6d3098b_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/19/f1/e3/19f1e3b0-fb84-463c-b1d2-937c40586630_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f8/e2/f7/f8e2f779-367d-4999-8b1e-04550f746788_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b7/2b/95/b72b95c2-6013-4190-b443-97a903773118_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2c/c5/f0/2cc5f07e-7497-4d4f-ba13-e618ac7f5c41_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ec/d1/ec/ecd1ece3-62d4-4e27-abb1-7ee84cde7689_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/16/b0/2a/16b02a28-2422-4c78-a475-ad8294c41784_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4e/63/fa/4e63fa0e-3da7-49e2-8bf9-f18403c68952_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/64/20/6f/64206f96-c125-4b92-8800-bc21f1615eec_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/18/55/81/18558144-4b48-4f48-9f9b-9eef5b68907b_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/26/e8/be/26e8bed5-d71a-4e33-ac6a-a6c7a0a88384_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/cf/db/c4/cfdbc489-8a08-47f0-bbd8-093c38d426da_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/42/90/5b/42905bda-78f6-475e-b16e-261e4c172cda_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f0/e2/5d/f0e25df3-ff4d-49c7-a41a-de4b86d08354_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4c/0e/63/4c0e63a9-db51-46db-b566-83db61ac5f3c_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/bf/c3/e3/bfc3e3ee-3621-4218-b483-a81d143dd49e_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8f/ef/ef/8fefef9c-01e4-4077-8933-aaafaa16cf99_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d7/c9/c1/d7c9c179-b2b7-4563-8a63-e74a2dc1af5b_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ac/0c/1b/ac0c1b0e-12ae-4c46-bc34-4835442ecef1_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/98/53/05/98530551-94d3-48bd-abb1-b746b28edfa3_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/58/8b/98/588b98ac-4b37-4a34-bbe3-098b4de21fb9_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="eager" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                WATERFALLS, Prospect Area.

AVAILABLE FROM 1st of July
3 spacious bedrooms
Fitted Kitchen
Solar backup system 
Well maintained yard comes with a Caretaker
Borehole Water plus 1000L Tank,
Walled and gated

Asking $600
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-243866">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-243866">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="243866" />
            </div>

    </div>




</div>


        <a href="/for-rent/houses-alx243866" class="gold-grid-thumbnails">
                <img src="/uploadedfiles/4d/79/8c/4d798cd1-ca79-4b2c-826c-f4802d42f937_thumbnail194.webp" alt="3 Bedroom House" loading="lazy" />
                <img src="/uploadedfiles/af/2e/da/af2eda53-922b-4b07-8e3f-92a5b6d3098b_thumbnail194.webp" alt="3 Bedroom House" loading="lazy" />
                <img src="/uploadedfiles/19/f1/e3/19f1e3b0-fb84-463c-b1d2-937c40586630_thumbnail194.webp" alt="3 Bedroom House" loading="lazy" />
        </a>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-alx243866">USD 600 per month</a>
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
                    <a href="/for-rent/houses-alx243866">
                        Spacious Home In Prospect, Waterfalls For Rent
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Waterfalls, Harare South</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">3 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="eager" /> 3
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="eager" /> 2
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        350 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="eager" />
                        2,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="243866"
                             data-entity-site-id="71"
                             data-category="house"
                             data-type="rent"
                             data-reference="ALX243866"
                             data-ajax-url="/ContactForm/PortalNumbers/245588?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-alx243866"
                             data-whatsapp-url="https://rply.link/l/NJUSfNOAQ8"
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
                             data-entity-id="243866"
                             data-entity-site-id="71"
                             data-category="house"
                             data-type="rent"
                             data-reference="ALX243866"
                             data-ajax-url="/ContactForm/PortalNumbers/245588?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-alx243866"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="eager" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="243866"
                             data-entity-site-id="71"
                             data-category="house"
                             data-type="rent"
                             data-reference="ALX243866"
                             data-ajax-url="/ContactForm/PortalEmail/245588?entityType=listing&amp;listingurl=/for-rent/houses-alx243866"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Spacious Home In Prospect, Waterfalls For Rent","description":"WATERFALLS, Prospect Area.\r\n\r\nAVAILABLE FROM 1st of July\r\n3 spacious bedrooms\r\nFitted Kitchen\r\nSolar backup system \r\nWell maintained yard comes with a Caretaker\r\nBorehole Water plus 1000L Tank,\r\nWalled and gated\r\n\r\nAsking $600","url":"https://www.property.co.zw/for-rent/houses-alx243866","identifier":"ALX243866","datePosted":"2026-03-31","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-alx243866","availability":"http://schema.org/InStock","price":"600","priceCurrency":"USD","serialNumber":"ALX243866","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"AlexCourt Real Estate","logo":"https://www.property.co.zw/uploadedfiles/f3/a3/1a/f3a31a42-85fe-44e2-820c-a7d09ecc4b58.jpeg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"600","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":3,"numberOfBathroomsTotal":2,"floorSize":{"@type":"QuantitativeValue","value":350.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Waterfalls","addressRegion":"Harare South","addressCountry":"Zimbabwe"},"name":"Spacious Home In Prospect, Waterfalls For Rent","description":"WATERFALLS, Prospect Area.\r\n\r\nAVAILABLE FROM 1st of July\r\n3 spacious bedrooms\r\nFitted Kitchen\r\nSolar backup system \r\nWell maintained yard comes with a Caretaker\r\nBorehole Water plus 1000L Tank,\r\nWalled and gated\r\n\r\nAsking $600","image":["https://www.property.co.zw/uploadedfiles/81/82/a5/8182a5e5-bb85-4a8a-a263-065bd3b13e61_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4d/79/8c/4d798cd1-ca79-4b2c-826c-f4802d42f937_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/af/2e/da/af2eda53-922b-4b07-8e3f-92a5b6d3098b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/19/f1/e3/19f1e3b0-fb84-463c-b1d2-937c40586630_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f8/e2/f7/f8e2f779-367d-4999-8b1e-04550f746788_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b7/2b/95/b72b95c2-6013-4190-b443-97a903773118_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2c/c5/f0/2cc5f07e-7497-4d4f-ba13-e618ac7f5c41_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ec/d1/ec/ecd1ece3-62d4-4e27-abb1-7ee84cde7689_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/16/b0/2a/16b02a28-2422-4c78-a475-ad8294c41784_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4e/63/fa/4e63fa0e-3da7-49e2-8bf9-f18403c68952_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/64/20/6f/64206f96-c125-4b92-8800-bc21f1615eec_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/18/55/81/18558144-4b48-4f48-9f9b-9eef5b68907b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/26/e8/be/26e8bed5-d71a-4e33-ac6a-a6c7a0a88384_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cf/db/c4/cfdbc489-8a08-47f0-bbd8-093c38d426da_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/42/90/5b/42905bda-78f6-475e-b16e-261e4c172cda_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f0/e2/5d/f0e25df3-ff4d-49c7-a41a-de4b86d08354_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4c/0e/63/4c0e63a9-db51-46db-b566-83db61ac5f3c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bf/c3/e3/bfc3e3ee-3621-4218-b483-a81d143dd49e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/ef/ef/8fefef9c-01e4-4077-8933-aaafaa16cf99_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/c9/c1/d7c9c179-b2b7-4563-8a63-e74a2dc1af5b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ac/0c/1b/ac0c1b0e-12ae-4c46-bc34-4835442ecef1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/98/53/05/98530551-94d3-48bd-abb1-b746b28edfa3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/58/8b/98/588b98ac-4b37-4a34-bbe3-098b4de21fb9_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/81/82/a5/8182a5e5-bb85-4a8a-a263-065bd3b13e61_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4d/79/8c/4d798cd1-ca79-4b2c-826c-f4802d42f937_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/af/2e/da/af2eda53-922b-4b07-8e3f-92a5b6d3098b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/19/f1/e3/19f1e3b0-fb84-463c-b1d2-937c40586630_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f8/e2/f7/f8e2f779-367d-4999-8b1e-04550f746788_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b7/2b/95/b72b95c2-6013-4190-b443-97a903773118_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2c/c5/f0/2cc5f07e-7497-4d4f-ba13-e618ac7f5c41_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ec/d1/ec/ecd1ece3-62d4-4e27-abb1-7ee84cde7689_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/16/b0/2a/16b02a28-2422-4c78-a475-ad8294c41784_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4e/63/fa/4e63fa0e-3da7-49e2-8bf9-f18403c68952_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/64/20/6f/64206f96-c125-4b92-8800-bc21f1615eec_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/18/55/81/18558144-4b48-4f48-9f9b-9eef5b68907b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/26/e8/be/26e8bed5-d71a-4e33-ac6a-a6c7a0a88384_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cf/db/c4/cfdbc489-8a08-47f0-bbd8-093c38d426da_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/42/90/5b/42905bda-78f6-475e-b16e-261e4c172cda_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f0/e2/5d/f0e25df3-ff4d-49c7-a41a-de4b86d08354_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4c/0e/63/4c0e63a9-db51-46db-b566-83db61ac5f3c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bf/c3/e3/bfc3e3ee-3621-4218-b483-a81d143dd49e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/ef/ef/8fefef9c-01e4-4077-8933-aaafaa16cf99_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/c9/c1/d7c9c179-b2b7-4563-8a63-e74a2dc1af5b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ac/0c/1b/ac0c1b0e-12ae-4c46-bc34-4835442ecef1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/98/53/05/98530551-94d3-48bd-abb1-b746b28edfa3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/58/8b/98/588b98ac-4b37-4a34-bbe3-098b4de21fb9_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"AlexCourt Real Estate","logo":"https://www.property.co.zw/uploadedfiles/f3/a3/1a/f3a31a42-85fe-44e2-820c-a7d09ecc4b58.jpeg"}}
        </script>
</div>

<div id="242862" data-mandate-id="244584" class="ResultCardItem PriorityGrid  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(242862)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #f9981b; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/guest-and-tanner" style="cursor: pointer;">
                        <img src="/uploadedfiles/5b/cf/fd/5bcffdd3-f057-4920-b887-c6e5e7bc0f2d.png" alt="Guest and Tanner Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Guest and Tanner Real Estate" data-url="/estate-agents/guest-and-tanner" />
                    </a>

                        <a href="/estate-agents/guest-and-tanner/letting-officer/18584" class="vcenterFlex ">Letting Officer</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-242862 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="242862"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-gat242862">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e0/ff/c4/e0ffc4fc-b028-43b9-ad8e-2d9658b5a4c6_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/74/3a/0f/743a0f4e-ade3-48e6-befd-4d3d0773709b_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/72/4e/00/724e00fb-e7b5-4280-8f1b-7a24ee0950fc_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/46/7d/a8/467da866-7563-41bf-9e18-a3f8eb52d5aa_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ec/50/5b/ec505b7d-7ec6-461f-a84f-fc149a2b47fb_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8d/11/a7/8d11a71f-f348-4b48-b8c8-71fe3b0e5f3f_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/bb/3f/20/bb3f2096-f316-4241-8b5e-29f111cff753_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/38/75/ed/3875ed3c-4b03-4f33-a9aa-b5d0bb0fb309_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/69/a1/b5/69a1b545-9ad6-476e-975f-7a52f8bba218_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5d/13/1b/5d131b20-6e8c-4dbe-9e7b-4c080ecb7a0e_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/60/40/a3/6040a3b4-7dce-40b2-a83e-52eb336633a0_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/fb/2d/98/fb2d9814-9911-44c5-81e8-1dcb07990e34_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3b/3e/63/3b3e6364-2143-4a4d-a1ea-3f39ba89ef90_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/fd/34/55/fd3455d4-b1a4-444c-aee9-2d4a4aaaffa9_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/56/bb/18/56bb183a-e281-4ceb-96df-665975ef8d4e_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Welcome to your dream home in the heart of Windsor Park, Ruwa! This stunning 5-bedroom residence offers a perfect blend of luxury and comfort. Step inside to discover two spacious lounges, ideal for family gatherings or relaxing evenings. The elegant dining area seamlessly connects to a beautifully fitted kitchen, complete with scullery and pantry – a chef&#39;s delight!

Retreat to the privacy of your ensuite master bedroom while family or guests enjoy the additional well-appointed bedrooms with seperate toilet and bathroom. Three of the bedrooms are fitted. Enjoy modern convenience with solar backup power ensuring uninterrupted living.

Outside, find peace of mind within a secure durawall. There is borehole water and a 5000L tank. 

Rent $750/pm
Floor area 210sqm
Land area 950 sqm
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-242862">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-242862">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="242862" />
            </div>

    </div>




</div>


        <a href="/for-rent/houses-gat242862" class="gold-grid-thumbnails">
                <img src="/uploadedfiles/74/3a/0f/743a0f4e-ade3-48e6-befd-4d3d0773709b_thumbnail194.webp" alt="5 Bedroom House" loading="lazy" />
                <img src="/uploadedfiles/72/4e/00/724e00fb-e7b5-4280-8f1b-7a24ee0950fc_thumbnail194.webp" alt="5 Bedroom House" loading="lazy" />
                <img src="/uploadedfiles/46/7d/a8/467da866-7563-41bf-9e18-a3f8eb52d5aa_thumbnail194.webp" alt="5 Bedroom House" loading="lazy" />
        </a>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-gat242862">USD 650 per month</a>
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
                    <a href="/for-rent/houses-gat242862">
                        Dream Home in the Heart of Windsor Park, Ruwa - To Rent
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Windsor Park, Ruwa</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">5 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 5
                    </span>
                
                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        210 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        950 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="242862"
                             data-entity-site-id="44"
                             data-category="house"
                             data-type="rent"
                             data-reference="GAT242862"
                             data-ajax-url="/ContactForm/PortalNumbers/244584?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-gat242862"
                             data-whatsapp-url="https://rply.link/l/rZumQrJORB"
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
                             data-entity-id="242862"
                             data-entity-site-id="44"
                             data-category="house"
                             data-type="rent"
                             data-reference="GAT242862"
                             data-ajax-url="/ContactForm/PortalNumbers/244584?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-gat242862"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="242862"
                             data-entity-site-id="44"
                             data-category="house"
                             data-type="rent"
                             data-reference="GAT242862"
                             data-ajax-url="/ContactForm/PortalEmail/244584?entityType=listing&amp;listingurl=/for-rent/houses-gat242862"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Dream Home in the Heart of Windsor Park, Ruwa - To Rent","description":"Welcome to your dream home in the heart of Windsor Park, Ruwa! This stunning 5-bedroom residence offers a perfect blend of luxury and comfort. Step inside to discover two spacious lounges, ideal for family gatherings or relaxing evenings. The elegant dining area seamlessly connects to a beautifully fitted kitchen, complete with scullery and pantry – a chef's delight!\r\n\r\nRetreat to the privacy of your ensuite master bedroom while family or guests enjoy the additional well-appointed bedrooms with seperate toilet and bathroom. Three of the bedrooms are fitted. Enjoy modern convenience with solar backup power ensuring uninterrupted living.\r\n\r\nOutside, find peace of mind within a secure durawall. There is borehole water and a 5000L tank. \r\n\r\nRent $750/pm\r\nFloor area 210sqm\r\nLand area 950 sqm","url":"https://www.property.co.zw/for-rent/houses-gat242862","identifier":"GAT242862","datePosted":"2026-03-17","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-gat242862","availability":"http://schema.org/InStock","price":"650","priceCurrency":"USD","serialNumber":"GAT242862","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Guest and Tanner Real Estate","logo":"https://www.property.co.zw/uploadedfiles/5b/cf/fd/5bcffdd3-f057-4920-b887-c6e5e7bc0f2d.png"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"650","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":5,"floorSize":{"@type":"QuantitativeValue","value":210.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Windsor Park","addressRegion":"Ruwa","addressCountry":"Zimbabwe"},"name":"Dream Home in the Heart of Windsor Park, Ruwa - To Rent","description":"Welcome to your dream home in the heart of Windsor Park, Ruwa! This stunning 5-bedroom residence offers a perfect blend of luxury and comfort. Step inside to discover two spacious lounges, ideal for family gatherings or relaxing evenings. The elegant dining area seamlessly connects to a beautifully fitted kitchen, complete with scullery and pantry – a chef's delight!\r\n\r\nRetreat to the privacy of your ensuite master bedroom while family or guests enjoy the additional well-appointed bedrooms with seperate toilet and bathroom. Three of the bedrooms are fitted. Enjoy modern convenience with solar backup power ensuring uninterrupted living.\r\n\r\nOutside, find peace of mind within a secure durawall. There is borehole water and a 5000L tank. \r\n\r\nRent $750/pm\r\nFloor area 210sqm\r\nLand area 950 sqm","image":["https://www.property.co.zw/uploadedfiles/e0/ff/c4/e0ffc4fc-b028-43b9-ad8e-2d9658b5a4c6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/74/3a/0f/743a0f4e-ade3-48e6-befd-4d3d0773709b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/4e/00/724e00fb-e7b5-4280-8f1b-7a24ee0950fc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/46/7d/a8/467da866-7563-41bf-9e18-a3f8eb52d5aa_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ec/50/5b/ec505b7d-7ec6-461f-a84f-fc149a2b47fb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8d/11/a7/8d11a71f-f348-4b48-b8c8-71fe3b0e5f3f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bb/3f/20/bb3f2096-f316-4241-8b5e-29f111cff753_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/38/75/ed/3875ed3c-4b03-4f33-a9aa-b5d0bb0fb309_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/69/a1/b5/69a1b545-9ad6-476e-975f-7a52f8bba218_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5d/13/1b/5d131b20-6e8c-4dbe-9e7b-4c080ecb7a0e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/60/40/a3/6040a3b4-7dce-40b2-a83e-52eb336633a0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fb/2d/98/fb2d9814-9911-44c5-81e8-1dcb07990e34_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3b/3e/63/3b3e6364-2143-4a4d-a1ea-3f39ba89ef90_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fd/34/55/fd3455d4-b1a4-444c-aee9-2d4a4aaaffa9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/56/bb/18/56bb183a-e281-4ceb-96df-665975ef8d4e_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/e0/ff/c4/e0ffc4fc-b028-43b9-ad8e-2d9658b5a4c6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/74/3a/0f/743a0f4e-ade3-48e6-befd-4d3d0773709b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/4e/00/724e00fb-e7b5-4280-8f1b-7a24ee0950fc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/46/7d/a8/467da866-7563-41bf-9e18-a3f8eb52d5aa_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ec/50/5b/ec505b7d-7ec6-461f-a84f-fc149a2b47fb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8d/11/a7/8d11a71f-f348-4b48-b8c8-71fe3b0e5f3f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bb/3f/20/bb3f2096-f316-4241-8b5e-29f111cff753_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/38/75/ed/3875ed3c-4b03-4f33-a9aa-b5d0bb0fb309_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/69/a1/b5/69a1b545-9ad6-476e-975f-7a52f8bba218_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5d/13/1b/5d131b20-6e8c-4dbe-9e7b-4c080ecb7a0e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/60/40/a3/6040a3b4-7dce-40b2-a83e-52eb336633a0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fb/2d/98/fb2d9814-9911-44c5-81e8-1dcb07990e34_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3b/3e/63/3b3e6364-2143-4a4d-a1ea-3f39ba89ef90_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fd/34/55/fd3455d4-b1a4-444c-aee9-2d4a4aaaffa9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/56/bb/18/56bb183a-e281-4ceb-96df-665975ef8d4e_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Guest and Tanner Real Estate","logo":"https://www.property.co.zw/uploadedfiles/5b/cf/fd/5bcffdd3-f057-4920-b887-c6e5e7bc0f2d.png"}}
        </script>
</div>

<div id="248787" data-mandate-id="250509" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(248787)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/red-property" style="cursor: pointer;">
                        <img src="/uploadedfiles/4a/90/72/4a90726a-fd76-4ee5-972c-11b1f6940814.jpg" alt="R.E.D. Property" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="R.E.D. Property" data-url="/estate-agents/red-property" />
                    </a>

                        <a href="/estate-agents/red-property/renee-pullen/25179" class="vcenterFlex ">Renee Pullen</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-248787 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="248787"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-red248787">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/87/8a/00/878a0053-c4de-4d1c-a3db-4f7d540af6ce_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/44/73/5e/44735edf-cb87-41ba-85f1-0f96bb7ba55d_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2a/b7/fc/2ab7fc07-62ed-489d-beb9-c322a691ebfb_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/23/e4/c5/23e4c56d-b57e-4dd0-9272-1f9e3d2b350d_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7e/25/05/7e250522-cde2-49ea-a75a-1c698e017eee_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f5/76/83/f57683bd-c3d4-41a5-9ad9-74766a53ff41_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/12/22/3a/12223a5c-830e-4618-9e67-0c87ed17da1d_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e7/fd/8e/e7fd8e29-7521-4ab3-90ad-cd74bd72a5f3_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/59/e9/68/59e9689b-7891-48e9-ae46-c22de6390a7e_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ae/ac/fe/aeacfe16-681e-485e-a21a-ec1ad3f9ed45_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/10/8a/1f/108a1f8a-8c74-4f18-b950-4066a8d2f0d6_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                This well-maintained double-storey flat offers comfortable and practical family living. The property comprises three spacious bedrooms, a family bathroom, and a separate toilet. The fitted kitchen and  lounge.

Additional improvements include staff quarters, carports, JoJo water tanks for reliable water storage, and a solar geyser. 
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-248787">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-248787">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="248787" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/red-property" style="cursor: pointer;">
                        <img src="/uploadedfiles/4a/90/72/4a90726a-fd76-4ee5-972c-11b1f6940814.jpg" alt="R.E.D. Property" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="R.E.D. Property" data-url="/estate-agents/red-property" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/red-property/renee-pullen/25179" class="block text-center">Renee Pullen</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-red248787">USD 620 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-red248787">
                        Semi- detached house To Let In Paddonhurst!
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Paddonhurst, Bulawayo North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">3 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 3
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 1
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        0 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        0 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="248787"
                             data-entity-site-id="114"
                             data-category="house"
                             data-type="rent"
                             data-reference="RED248787"
                             data-ajax-url="/ContactForm/PortalNumbers/250509?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-red248787"
                             data-whatsapp-url="https://rply.link/l/bo2ktsxlT2"
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
                             data-entity-id="248787"
                             data-entity-site-id="114"
                             data-category="house"
                             data-type="rent"
                             data-reference="RED248787"
                             data-ajax-url="/ContactForm/PortalNumbers/250509?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-red248787"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="248787"
                             data-entity-site-id="114"
                             data-category="house"
                             data-type="rent"
                             data-reference="RED248787"
                             data-ajax-url="/ContactForm/PortalEmail/250509?entityType=listing&amp;listingurl=/for-rent/houses-red248787"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Semi- detached house To Let In Paddonhurst!","description":"This well-maintained double-storey flat offers comfortable and practical family living. The property comprises three spacious bedrooms, a family bathroom, and a separate toilet. The fitted kitchen and  lounge.\r\n\r\nAdditional improvements include staff quarters, carports, JoJo water tanks for reliable water storage, and a solar geyser. ","url":"https://www.property.co.zw/for-rent/houses-red248787","identifier":"RED248787","datePosted":"2026-06-08","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-red248787","availability":"http://schema.org/InStock","price":"620","priceCurrency":"USD","serialNumber":"RED248787","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"R.E.D. Property","logo":"https://www.property.co.zw/uploadedfiles/4a/90/72/4a90726a-fd76-4ee5-972c-11b1f6940814.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"620","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":3,"numberOfBathroomsTotal":1,"floorSize":{"@type":"QuantitativeValue","value":0.010000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Paddonhurst","addressRegion":"Bulawayo North","addressCountry":"Zimbabwe"},"name":"Semi- detached house To Let In Paddonhurst!","description":"This well-maintained double-storey flat offers comfortable and practical family living. The property comprises three spacious bedrooms, a family bathroom, and a separate toilet. The fitted kitchen and  lounge.\r\n\r\nAdditional improvements include staff quarters, carports, JoJo water tanks for reliable water storage, and a solar geyser. ","image":["https://www.property.co.zw/uploadedfiles/87/8a/00/878a0053-c4de-4d1c-a3db-4f7d540af6ce_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/44/73/5e/44735edf-cb87-41ba-85f1-0f96bb7ba55d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2a/b7/fc/2ab7fc07-62ed-489d-beb9-c322a691ebfb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/23/e4/c5/23e4c56d-b57e-4dd0-9272-1f9e3d2b350d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/25/05/7e250522-cde2-49ea-a75a-1c698e017eee_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f5/76/83/f57683bd-c3d4-41a5-9ad9-74766a53ff41_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/12/22/3a/12223a5c-830e-4618-9e67-0c87ed17da1d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e7/fd/8e/e7fd8e29-7521-4ab3-90ad-cd74bd72a5f3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/59/e9/68/59e9689b-7891-48e9-ae46-c22de6390a7e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ae/ac/fe/aeacfe16-681e-485e-a21a-ec1ad3f9ed45_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/10/8a/1f/108a1f8a-8c74-4f18-b950-4066a8d2f0d6_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/87/8a/00/878a0053-c4de-4d1c-a3db-4f7d540af6ce_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/44/73/5e/44735edf-cb87-41ba-85f1-0f96bb7ba55d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2a/b7/fc/2ab7fc07-62ed-489d-beb9-c322a691ebfb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/23/e4/c5/23e4c56d-b57e-4dd0-9272-1f9e3d2b350d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/25/05/7e250522-cde2-49ea-a75a-1c698e017eee_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f5/76/83/f57683bd-c3d4-41a5-9ad9-74766a53ff41_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/12/22/3a/12223a5c-830e-4618-9e67-0c87ed17da1d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e7/fd/8e/e7fd8e29-7521-4ab3-90ad-cd74bd72a5f3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/59/e9/68/59e9689b-7891-48e9-ae46-c22de6390a7e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ae/ac/fe/aeacfe16-681e-485e-a21a-ec1ad3f9ed45_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/10/8a/1f/108a1f8a-8c74-4f18-b950-4066a8d2f0d6_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"R.E.D. Property","logo":"https://www.property.co.zw/uploadedfiles/4a/90/72/4a90726a-fd76-4ee5-972c-11b1f6940814.jpg"}}
        </script>
</div>

<div id="248852" data-mandate-id="250574" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(248852)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/oasis-realty" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/68/09/ee6809bf-6b45-4dbd-9721-07729be5be3e.jpg" alt="Oasis Realty" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Oasis Realty" data-url="/estate-agents/oasis-realty" />
                    </a>

                        <a href="/estate-agents/oasis-realty/xolani-dube/20319" class="vcenterFlex ">Xolani Dube</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-248852 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="248852"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/townhouses-oas248852">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/bf/89/49/bf8949e7-4928-4ee1-b3d8-d051e52bd3d0_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9b/48/17/9b4817aa-ffeb-41c2-ae20-cd1f876671ff_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/26/ce/c4/26cec4fc-f267-4077-8c9c-2d69e0646c51_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b7/f9/15/b7f9156c-a728-4dbe-ba70-531ded5ddaea_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ec/3b/f0/ec3bf08a-b8c5-41e5-af81-8555b4ad31a7_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/14/71/33/14713387-6d85-4008-af87-0ce27be7a694_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/de/18/86/de1886bf-a121-4cd5-ba2e-ff84bb3bf6c8_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b9/da/78/b9da78d5-ae0a-423c-aa09-1e44b09991b5_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/76/0c/ea/760cea03-ed3c-4e84-ae17-36a5d0184f4f_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/88/d8/b5/88d8b5fc-1644-471c-986a-5807d115d639_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/62/25/fc/6225fc44-6e80-41ea-9641-d504f46fa4c8_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/37/e6/0d/37e60dc1-7f16-46dc-a81b-1ccf3eb300a5_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/76/ed/11/76ed1121-7a96-41fc-bfb5-41df2cd1dfb3_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/89/08/f7/8908f79b-44ab-4563-bf1a-2feb1e25aae0_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/cc/47/bb/cc47bb6c-e42d-4b11-843d-67d4a0faa908_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7a/c5/1a/7ac51a21-8d14-4517-9f8f-05ecd38d4a32_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Modern 3-Bedroom Gated Community House for Rent in Arlington East
Rent: $1,300 per month
Availability: Beginning of July

Available for move-in this July is this stunning 3-bedroom modern home located in the secure and highly sought-after Arlington East gated community. This property blends luxury, comfort, and top-tier utility with full solar backup and reliable water storage.

Elegant Bedrooms &amp; Bathrooms
•	Main Bedroom: Exceptionally spacious main bedroom featuring a luxury combined bath and shower.
•	Second Bedroom: Comfortable room with its own private ensuite toilet and shower.
•	Guest Bathroom: Modern bathroom equipped with a sleek shower.
•	Spacious Living &amp; Gourmet Kitchen
•	Lounge: Large, airy living room perfect for family relaxation.
•	Dining Room: Separate, dedicated space for family meals and entertaining.
•	Kitchen: Spacious culinary space featuring high-en...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-248852">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-248852">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            New
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/DB68K2z7OTo" data-is-portrait="True" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="rent"
                     data-category="house"
                     data-entityId="248852" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/oasis-realty" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/68/09/ee6809bf-6b45-4dbd-9721-07729be5be3e.jpg" alt="Oasis Realty" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Oasis Realty" data-url="/estate-agents/oasis-realty" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/oasis-realty/xolani-dube/20319" class="block text-center">Xolani Dube</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/townhouses-oas248852">USD 1,300 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/townhouses-oas248852">
                        Newly Built Modern Townhouse For Rent in Arlington East
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Arlington, Harare South</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">3 Bedroom Townhouse Complex</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 3
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 3
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        250 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        400 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="248852"
                             data-entity-site-id="1383"
                             data-category="house"
                             data-type="rent"
                             data-reference="OAS248852"
                             data-ajax-url="/ContactForm/PortalNumbers/250574?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/townhouses-oas248852"
                             data-whatsapp-url="https://rply.link/l/qy37VuvX2o"
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
                             data-entity-id="248852"
                             data-entity-site-id="1383"
                             data-category="house"
                             data-type="rent"
                             data-reference="OAS248852"
                             data-ajax-url="/ContactForm/PortalNumbers/250574?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/townhouses-oas248852"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="248852"
                             data-entity-site-id="1383"
                             data-category="house"
                             data-type="rent"
                             data-reference="OAS248852"
                             data-ajax-url="/ContactForm/PortalEmail/250574?entityType=listing&amp;listingurl=/for-rent/townhouses-oas248852"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Newly Built Modern Townhouse For Rent in Arlington East","description":"Modern 3-Bedroom Gated Community House for Rent in Arlington East\r\nRent: $1,300 per month\r\nAvailability: Beginning of July\r\n\r\nAvailable for move-in this July is this stunning 3-bedroom modern home located in the secure and highly sought-after Arlington East gated community. This property blends luxury, comfort, and top-tier utility with full solar backup and reliable water storage.\r\n\r\nElegant Bedrooms & Bathrooms\r\n•\tMain Bedroom: Exceptionally spacious main bedroom featuring a luxury combined bath and shower.\r\n•\tSecond Bedroom: Comfortable room with its own private ensuite toilet and shower.\r\n•\tGuest Bathroom: Modern bathroom equipped with a sleek shower.\r\n•\tSpacious Living & Gourmet Kitchen\r\n•\tLounge: Large, airy living room perfect for family relaxation.\r\n•\tDining Room: Separate, dedicated space for family meals and entertaining.\r\n•\tKitchen: Spacious culinary space featuring high-en...","url":"https://www.property.co.zw/for-rent/townhouses-oas248852","identifier":"OAS248852","datePosted":"2026-06-08","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/townhouses-oas248852","availability":"http://schema.org/InStock","price":"1300","priceCurrency":"USD","serialNumber":"OAS248852","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Oasis Realty","logo":"https://www.property.co.zw/uploadedfiles/ee/68/09/ee6809bf-6b45-4dbd-9721-07729be5be3e.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"1300","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":3,"numberOfBathroomsTotal":3,"floorSize":{"@type":"QuantitativeValue","value":250.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Arlington","addressRegion":"Harare South","addressCountry":"Zimbabwe"},"name":"Newly Built Modern Townhouse For Rent in Arlington East","description":"Modern 3-Bedroom Gated Community House for Rent in Arlington East\r\nRent: $1,300 per month\r\nAvailability: Beginning of July\r\n\r\nAvailable for move-in this July is this stunning 3-bedroom modern home located in the secure and highly sought-after Arlington East gated community. This property blends luxury, comfort, and top-tier utility with full solar backup and reliable water storage.\r\n\r\nElegant Bedrooms & Bathrooms\r\n•\tMain Bedroom: Exceptionally spacious main bedroom featuring a luxury combined bath and shower.\r\n•\tSecond Bedroom: Comfortable room with its own private ensuite toilet and shower.\r\n•\tGuest Bathroom: Modern bathroom equipped with a sleek shower.\r\n•\tSpacious Living & Gourmet Kitchen\r\n•\tLounge: Large, airy living room perfect for family relaxation.\r\n•\tDining Room: Separate, dedicated space for family meals and entertaining.\r\n•\tKitchen: Spacious culinary space featuring high-en...","image":["https://www.property.co.zw/uploadedfiles/bf/89/49/bf8949e7-4928-4ee1-b3d8-d051e52bd3d0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9b/48/17/9b4817aa-ffeb-41c2-ae20-cd1f876671ff_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/26/ce/c4/26cec4fc-f267-4077-8c9c-2d69e0646c51_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b7/f9/15/b7f9156c-a728-4dbe-ba70-531ded5ddaea_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ec/3b/f0/ec3bf08a-b8c5-41e5-af81-8555b4ad31a7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/14/71/33/14713387-6d85-4008-af87-0ce27be7a694_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/de/18/86/de1886bf-a121-4cd5-ba2e-ff84bb3bf6c8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b9/da/78/b9da78d5-ae0a-423c-aa09-1e44b09991b5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/0c/ea/760cea03-ed3c-4e84-ae17-36a5d0184f4f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/88/d8/b5/88d8b5fc-1644-471c-986a-5807d115d639_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/62/25/fc/6225fc44-6e80-41ea-9641-d504f46fa4c8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/37/e6/0d/37e60dc1-7f16-46dc-a81b-1ccf3eb300a5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/ed/11/76ed1121-7a96-41fc-bfb5-41df2cd1dfb3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/89/08/f7/8908f79b-44ab-4563-bf1a-2feb1e25aae0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cc/47/bb/cc47bb6c-e42d-4b11-843d-67d4a0faa908_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7a/c5/1a/7ac51a21-8d14-4517-9f8f-05ecd38d4a32_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/bf/89/49/bf8949e7-4928-4ee1-b3d8-d051e52bd3d0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9b/48/17/9b4817aa-ffeb-41c2-ae20-cd1f876671ff_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/26/ce/c4/26cec4fc-f267-4077-8c9c-2d69e0646c51_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b7/f9/15/b7f9156c-a728-4dbe-ba70-531ded5ddaea_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ec/3b/f0/ec3bf08a-b8c5-41e5-af81-8555b4ad31a7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/14/71/33/14713387-6d85-4008-af87-0ce27be7a694_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/de/18/86/de1886bf-a121-4cd5-ba2e-ff84bb3bf6c8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b9/da/78/b9da78d5-ae0a-423c-aa09-1e44b09991b5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/0c/ea/760cea03-ed3c-4e84-ae17-36a5d0184f4f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/88/d8/b5/88d8b5fc-1644-471c-986a-5807d115d639_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/62/25/fc/6225fc44-6e80-41ea-9641-d504f46fa4c8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/37/e6/0d/37e60dc1-7f16-46dc-a81b-1ccf3eb300a5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/ed/11/76ed1121-7a96-41fc-bfb5-41df2cd1dfb3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/89/08/f7/8908f79b-44ab-4563-bf1a-2feb1e25aae0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cc/47/bb/cc47bb6c-e42d-4b11-843d-67d4a0faa908_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7a/c5/1a/7ac51a21-8d14-4517-9f8f-05ecd38d4a32_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Oasis Realty","logo":"https://www.property.co.zw/uploadedfiles/ee/68/09/ee6809bf-6b45-4dbd-9721-07729be5be3e.jpg"}}
        </script>
</div>

<div id="245265" data-mandate-id="246987" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(245265)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/bridges" style="cursor: pointer;">
                        <img src="/uploadedfiles/c6/ef/0a/c6ef0aaa-3232-40dd-be05-da02f5e155fa.webp" alt="Bridges Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Bridges Real Estate" data-url="/estate-agents/bridges" />
                    </a>

                        <a href="/estate-agents/bridges/mark-musvibe/20545" class="vcenterFlex ">Mark Musvibe</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-245265 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="245265"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-brst245265">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8e/c5/1b/8ec51bc7-23e0-4d33-826b-2c77015ecb31_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/25/29/3f/25293f6a-9d9f-4660-a988-5a686a76a923_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/77/4e/34/774e341c-48e7-4235-b663-fb90e64eaebc_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/99/63/f6/9963f6ce-fe11-4302-8106-423d40a9ebd9_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/15/71/0e/15710e07-4dce-404c-9f5e-92cf043154fe_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/dd/a6/42/dda642d6-a680-431d-ac09-5b20bde0e365_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ed/51/d0/ed51d028-cacd-4003-ade0-4ca82a200ebf_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3d/34/18/3d34186a-e55c-43ec-a7e7-e686f074c089_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5a/8a/72/5a8a7293-a20c-411b-a41d-a964d8493e9c_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ce/af/0e/ceaf0e08-be56-4108-8fa3-bf096e49d480_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f1/47/b9/f147b9fb-fdf5-4e13-80e6-ea318d66343d_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8a/57/47/8a57470d-f6e4-42e5-bc80-e0323b7ed689_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c1/ad/75/c1ad759b-fc99-4baa-99aa-be8516ad5067_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e8/80/e5/e880e558-af80-4460-a487-6a8a5012f6fa_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9e/f3/e7/9ef3e7b6-16f8-4775-ae96-e1089d59d6dc_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/52/dd/17/52dd1733-efd3-482a-b45a-36bad19b007e_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/36/b7/ea/36b7eaf3-0042-4b1e-8c90-bdbf24f08122_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                To share at $250 apiece is this rendered brick under asbestos pane tile 4 Bed House in Old Budiriro 4 ,a short hop to the mature Budiriro 4 shopping centre, pretty close to good schools,places of worship and close to excellent amenities in a well built up area of Budiriro.

The house features 4 Bedrooms, roomy ,semi open plan Lounge and Dining spaces, fitted Kitchen ,separate Toilets and Bathrooms (Shower)

Also Features
a.Reliable Borehole 
b.Reliable Solar System
Other Features 
1. Standard height walling and partly paved yard.
2. Spacious car port for +-4 cars.
3. Fowl run for -+ 400 birds.
4. LPG Gas Cylinder Cage
5. Generator Room
6. Water Storage Tank (5000)l
7. Security Camera
8. Food lights
9. Motion Sensor Lights

The property is set in a good neighbourhood which is well built up and highly accessible with via tarmac surfaces servicing the Cabs Budiriro Deve...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-245265">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-245265">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="245265" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/bridges" style="cursor: pointer;">
                        <img src="/uploadedfiles/c6/ef/0a/c6ef0aaa-3232-40dd-be05-da02f5e155fa.webp" alt="Bridges Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Bridges Real Estate" data-url="/estate-agents/bridges" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/bridges/mark-musvibe/20545" class="block text-center">Mark Musvibe</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-brst245265">USD 250 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-brst245265">
                        House to share-2 small families
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Budiriro, Harare High Density</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">4 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 4
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 2
                    </span>

                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        300 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="245265"
                             data-entity-site-id="1714"
                             data-category="house"
                             data-type="rent"
                             data-reference="BRST245265"
                             data-ajax-url="/ContactForm/PortalNumbers/246987?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-brst245265"
                             data-whatsapp-url="https://rply.link/l/95kKkquiFe"
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
                             data-entity-id="245265"
                             data-entity-site-id="1714"
                             data-category="house"
                             data-type="rent"
                             data-reference="BRST245265"
                             data-ajax-url="/ContactForm/PortalNumbers/246987?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-brst245265"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="245265"
                             data-entity-site-id="1714"
                             data-category="house"
                             data-type="rent"
                             data-reference="BRST245265"
                             data-ajax-url="/ContactForm/PortalEmail/246987?entityType=listing&amp;listingurl=/for-rent/houses-brst245265"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"House to share-2 small families","description":"To share at $250 apiece is this rendered brick under asbestos pane tile 4 Bed House in Old Budiriro 4 ,a short hop to the mature Budiriro 4 shopping centre, pretty close to good schools,places of worship and close to excellent amenities in a well built up area of Budiriro.\r\n\r\nThe house features 4 Bedrooms, roomy ,semi open plan Lounge and Dining spaces, fitted Kitchen ,separate Toilets and Bathrooms (Shower)\r\n\r\nAlso Features\r\na.Reliable Borehole \r\nb.Reliable Solar System\r\nOther Features \r\n1. Standard height walling and partly paved yard.\r\n2. Spacious car port for +-4 cars.\r\n3. Fowl run for -+ 400 birds.\r\n4. LPG Gas Cylinder Cage\r\n5. Generator Room\r\n6. Water Storage Tank (5000)l\r\n7. Security Camera\r\n8. Food lights\r\n9. Motion Sensor Lights\r\n\r\nThe property is set in a good neighbourhood which is well built up and highly accessible with via tarmac surfaces servicing the Cabs Budiriro Deve...","url":"https://www.property.co.zw/for-rent/houses-brst245265","identifier":"BRST245265","datePosted":"2026-04-21","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-brst245265","availability":"http://schema.org/InStock","price":"250","priceCurrency":"USD","serialNumber":"BRST245265","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Bridges Real Estate","logo":"https://www.property.co.zw/uploadedfiles/c6/ef/0a/c6ef0aaa-3232-40dd-be05-da02f5e155fa.webp"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"250","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":4,"numberOfBathroomsTotal":2,"address":{"@type":"PostalAddress","addressLocality":"Budiriro","addressRegion":"Harare High Density","addressCountry":"Zimbabwe"},"name":"House to share-2 small families","description":"To share at $250 apiece is this rendered brick under asbestos pane tile 4 Bed House in Old Budiriro 4 ,a short hop to the mature Budiriro 4 shopping centre, pretty close to good schools,places of worship and close to excellent amenities in a well built up area of Budiriro.\r\n\r\nThe house features 4 Bedrooms, roomy ,semi open plan Lounge and Dining spaces, fitted Kitchen ,separate Toilets and Bathrooms (Shower)\r\n\r\nAlso Features\r\na.Reliable Borehole \r\nb.Reliable Solar System\r\nOther Features \r\n1. Standard height walling and partly paved yard.\r\n2. Spacious car port for +-4 cars.\r\n3. Fowl run for -+ 400 birds.\r\n4. LPG Gas Cylinder Cage\r\n5. Generator Room\r\n6. Water Storage Tank (5000)l\r\n7. Security Camera\r\n8. Food lights\r\n9. Motion Sensor Lights\r\n\r\nThe property is set in a good neighbourhood which is well built up and highly accessible with via tarmac surfaces servicing the Cabs Budiriro Deve...","image":["https://www.property.co.zw/uploadedfiles/8e/c5/1b/8ec51bc7-23e0-4d33-826b-2c77015ecb31_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/25/29/3f/25293f6a-9d9f-4660-a988-5a686a76a923_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/77/4e/34/774e341c-48e7-4235-b663-fb90e64eaebc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/99/63/f6/9963f6ce-fe11-4302-8106-423d40a9ebd9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/71/0e/15710e07-4dce-404c-9f5e-92cf043154fe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/dd/a6/42/dda642d6-a680-431d-ac09-5b20bde0e365_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ed/51/d0/ed51d028-cacd-4003-ade0-4ca82a200ebf_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3d/34/18/3d34186a-e55c-43ec-a7e7-e686f074c089_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5a/8a/72/5a8a7293-a20c-411b-a41d-a964d8493e9c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ce/af/0e/ceaf0e08-be56-4108-8fa3-bf096e49d480_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f1/47/b9/f147b9fb-fdf5-4e13-80e6-ea318d66343d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8a/57/47/8a57470d-f6e4-42e5-bc80-e0323b7ed689_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c1/ad/75/c1ad759b-fc99-4baa-99aa-be8516ad5067_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e8/80/e5/e880e558-af80-4460-a487-6a8a5012f6fa_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9e/f3/e7/9ef3e7b6-16f8-4775-ae96-e1089d59d6dc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/52/dd/17/52dd1733-efd3-482a-b45a-36bad19b007e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/36/b7/ea/36b7eaf3-0042-4b1e-8c90-bdbf24f08122_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/8e/c5/1b/8ec51bc7-23e0-4d33-826b-2c77015ecb31_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/25/29/3f/25293f6a-9d9f-4660-a988-5a686a76a923_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/77/4e/34/774e341c-48e7-4235-b663-fb90e64eaebc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/99/63/f6/9963f6ce-fe11-4302-8106-423d40a9ebd9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/71/0e/15710e07-4dce-404c-9f5e-92cf043154fe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/dd/a6/42/dda642d6-a680-431d-ac09-5b20bde0e365_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ed/51/d0/ed51d028-cacd-4003-ade0-4ca82a200ebf_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3d/34/18/3d34186a-e55c-43ec-a7e7-e686f074c089_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5a/8a/72/5a8a7293-a20c-411b-a41d-a964d8493e9c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ce/af/0e/ceaf0e08-be56-4108-8fa3-bf096e49d480_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f1/47/b9/f147b9fb-fdf5-4e13-80e6-ea318d66343d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8a/57/47/8a57470d-f6e4-42e5-bc80-e0323b7ed689_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c1/ad/75/c1ad759b-fc99-4baa-99aa-be8516ad5067_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e8/80/e5/e880e558-af80-4460-a487-6a8a5012f6fa_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9e/f3/e7/9ef3e7b6-16f8-4775-ae96-e1089d59d6dc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/52/dd/17/52dd1733-efd3-482a-b45a-36bad19b007e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/36/b7/ea/36b7eaf3-0042-4b1e-8c90-bdbf24f08122_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Bridges Real Estate","logo":"https://www.property.co.zw/uploadedfiles/c6/ef/0a/c6ef0aaa-3232-40dd-be05-da02f5e155fa.webp"}}
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


<div id="246536" data-mandate-id="248258" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(246536)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/graham-douglas" style="cursor: pointer;">
                        <img src="/uploadedfiles/3c/ea/3b/3cea3b3e-5815-47e9-acf7-948c84179def.jpg" alt="Graham and Douglas Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Graham and Douglas Real Estate" data-url="/estate-agents/graham-douglas" />
                    </a>

                        <a href="/estate-agents/graham-douglas/nyasha-chagonda/20586" class="vcenterFlex ">Nyasha Chagonda</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-246536 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="246536"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-grm246536">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/15/e1/a3/15e1a365-f080-4f7e-924a-18432ea02060_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b8/3f/5f/b83f5f28-effd-4deb-9433-cd317171c2b5_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/53/27/e3/5327e350-988f-43c0-86cf-716b68495cf7_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6a/bd/bf/6abdbf58-bbb1-4be7-a5b5-6e7bfd8a6d1b_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/82/bb/cf/82bbcfea-9905-4619-afd6-4fc4e1c2210c_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/83/4e/1e/834e1ec7-f0b2-432a-b725-24ad633b0189_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/66/99/e6/6699e6e9-9b7e-45d3-81f3-87cd05fefa3c_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/47/60/85/4760854b-27ec-42e0-8257-5618517e78ff_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                4 beds along Borrowdale Road with fitted kitchen, entrance hall, 2 lounges, dining room, passages, separate toilet, bathroom. Outbuildings include single staff quarters, a garage affording parking for three cars, a brick driveway, walled and gated. Immediate occupation.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-246536">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-246536">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="246536" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/graham-douglas" style="cursor: pointer;">
                        <img src="/uploadedfiles/3c/ea/3b/3cea3b3e-5815-47e9-acf7-948c84179def.jpg" alt="Graham and Douglas Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Graham and Douglas Real Estate" data-url="/estate-agents/graham-douglas" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/graham-douglas/nyasha-chagonda/20586" class="block text-center">Nyasha Chagonda</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-grm246536">USD 2,000 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-grm246536">
                        Gunhill house to let
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Gunhill, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">3 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 3
                    </span>
                
                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        150 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        3,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="246536"
                             data-entity-site-id="144"
                             data-category="house"
                             data-type="rent"
                             data-reference="GRM246536"
                             data-ajax-url="/ContactForm/PortalNumbers/248258?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-grm246536"
                             data-whatsapp-url="https://rply.link/l/JMPsYv99Nj"
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
                             data-entity-id="246536"
                             data-entity-site-id="144"
                             data-category="house"
                             data-type="rent"
                             data-reference="GRM246536"
                             data-ajax-url="/ContactForm/PortalNumbers/248258?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-grm246536"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="246536"
                             data-entity-site-id="144"
                             data-category="house"
                             data-type="rent"
                             data-reference="GRM246536"
                             data-ajax-url="/ContactForm/PortalEmail/248258?entityType=listing&amp;listingurl=/for-rent/houses-grm246536"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Gunhill house to let","description":"4 beds along Borrowdale Road with fitted kitchen, entrance hall, 2 lounges, dining room, passages, separate toilet, bathroom. Outbuildings include single staff quarters, a garage affording parking for three cars, a brick driveway, walled and gated. Immediate occupation.","url":"https://www.property.co.zw/for-rent/houses-grm246536","identifier":"GRM246536","datePosted":"2026-05-08","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-grm246536","availability":"http://schema.org/InStock","price":"2000","priceCurrency":"USD","serialNumber":"GRM246536","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Graham and Douglas Real Estate","logo":"https://www.property.co.zw/uploadedfiles/3c/ea/3b/3cea3b3e-5815-47e9-acf7-948c84179def.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"2000","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":3,"floorSize":{"@type":"QuantitativeValue","value":150.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Gunhill","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Gunhill house to let","description":"4 beds along Borrowdale Road with fitted kitchen, entrance hall, 2 lounges, dining room, passages, separate toilet, bathroom. Outbuildings include single staff quarters, a garage affording parking for three cars, a brick driveway, walled and gated. Immediate occupation.","image":["https://www.property.co.zw/uploadedfiles/15/e1/a3/15e1a365-f080-4f7e-924a-18432ea02060_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b8/3f/5f/b83f5f28-effd-4deb-9433-cd317171c2b5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/53/27/e3/5327e350-988f-43c0-86cf-716b68495cf7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6a/bd/bf/6abdbf58-bbb1-4be7-a5b5-6e7bfd8a6d1b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/82/bb/cf/82bbcfea-9905-4619-afd6-4fc4e1c2210c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/83/4e/1e/834e1ec7-f0b2-432a-b725-24ad633b0189_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/66/99/e6/6699e6e9-9b7e-45d3-81f3-87cd05fefa3c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/47/60/85/4760854b-27ec-42e0-8257-5618517e78ff_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/15/e1/a3/15e1a365-f080-4f7e-924a-18432ea02060_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b8/3f/5f/b83f5f28-effd-4deb-9433-cd317171c2b5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/53/27/e3/5327e350-988f-43c0-86cf-716b68495cf7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6a/bd/bf/6abdbf58-bbb1-4be7-a5b5-6e7bfd8a6d1b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/82/bb/cf/82bbcfea-9905-4619-afd6-4fc4e1c2210c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/83/4e/1e/834e1ec7-f0b2-432a-b725-24ad633b0189_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/66/99/e6/6699e6e9-9b7e-45d3-81f3-87cd05fefa3c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/47/60/85/4760854b-27ec-42e0-8257-5618517e78ff_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Graham and Douglas Real Estate","logo":"https://www.property.co.zw/uploadedfiles/3c/ea/3b/3cea3b3e-5815-47e9-acf7-948c84179def.jpg"}}
        </script>
</div>

<div id="230616" data-mandate-id="232342" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(230616)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/oasis-realty" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/68/09/ee6809bf-6b45-4dbd-9721-07729be5be3e.jpg" alt="Oasis Realty" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Oasis Realty" data-url="/estate-agents/oasis-realty" />
                    </a>

                        <a href="/estate-agents/oasis-realty/andrew-mupandasekwa/22946" class="vcenterFlex ">Andrew Mupandasekwa</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-230616 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="230616"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-oas230616">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/81/dd/63/81dd637a-f03f-43e3-8f77-f58dbecba331_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/09/05/7f/09057fcd-c226-439a-ac94-abe934a1ff2d_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/37/92/c9/3792c9a0-6efe-4888-83d3-b44c0b23f6d5_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/fc/8d/1b/fc8d1b84-dba8-4f8e-a77a-48256dc00007_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/56/a3/e5/56a3e5d2-d7f4-4388-bea9-3f3e436f50c7_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/20/33/e0/2033e055-3709-4cdc-9814-842bb63b9ff4_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f5/c5/12/f5c512e2-d343-481b-b1ef-4dec64e7709a_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4c/e6/3e/4ce63e6a-b47f-49ce-b60c-9fee843aeb42_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/72/00/62/72006277-abf0-4386-ae2b-bdaa3d084905_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8a/cc/b3/8accb384-dc0b-453a-80b6-c88150e6364b_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/eb/7e/06/eb7e0675-39e2-4376-a007-5b8d70f55330_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d8/04/7e/d8047e38-c12f-4cb9-8279-1dd9ff8453f7_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0d/21/85/0d2185a3-4e7a-429d-8a23-78905207e518_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6c/46/a9/6c46a9d0-7f23-459c-909a-ba060e4a476f_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f7/11/47/f711472d-366c-42e4-a45e-36090f10b0ef_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/18/a2/23/18a22327-628d-4ee7-ab36-243d4c91a16f_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0b/2e/35/0b2e355f-5cb2-4a7b-a21c-bd964bd15e43_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d2/4b/68/d24b68de-b454-46c4-8487-299c69753448_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e2/e1/d0/e2e1d05c-45db-4582-96ac-aa6a8fa4059d_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1b/c4/74/1bc4745e-869d-4e55-acf9-31c746a12ecd_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Oasis Realty is proud to present this beautifully renovated family residence, available for occupation from 1 July 2026, situated within the exclusive and highly sought-after Borrowdale Brooke Golf Estate. Positioned along Brooke Lane, the home enjoys close proximity to the golf course, shopping centre, fuel station, medical facilities, and some of Harare’s leading schools, offering both convenience and an exceptional lifestyle.

Designed for comfortable family living and effortless entertaining, the property offers:

-4 spacious bedrooms with built-in cupboards
-2 well-appointed bathrooms, including a main en-suite
-A generous and inviting lounge area
-Contemporary fitted kitchen with ample cupboard space
-Attached staff quarters
-Double lock-up garage

The home is further complemented by a range of practical and energy-efficient features, including a solar geyser, 5kVA so...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-230616">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-230616">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            Sole Mandate
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/utk9HrIhCbk" data-is-portrait="False" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="rent"
                     data-category="house"
                     data-entityId="230616" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/oasis-realty" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/68/09/ee6809bf-6b45-4dbd-9721-07729be5be3e.jpg" alt="Oasis Realty" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Oasis Realty" data-url="/estate-agents/oasis-realty" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/oasis-realty/andrew-mupandasekwa/22946" class="block text-center">Andrew Mupandasekwa</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-oas230616">USD 3,000 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-oas230616">
                        Recently Renovated House For Rent - Available On the 1st of November 2025
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Borrowdale Brooke, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">4 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 4
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 2
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        250 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        800 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="230616"
                             data-entity-site-id="1383"
                             data-category="house"
                             data-type="rent"
                             data-reference="OAS230616"
                             data-ajax-url="/ContactForm/PortalNumbers/232342?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-oas230616"
                             data-whatsapp-url="https://rply.link/l/sbRKJP6Y9Y"
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
                             data-entity-id="230616"
                             data-entity-site-id="1383"
                             data-category="house"
                             data-type="rent"
                             data-reference="OAS230616"
                             data-ajax-url="/ContactForm/PortalNumbers/232342?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-oas230616"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="230616"
                             data-entity-site-id="1383"
                             data-category="house"
                             data-type="rent"
                             data-reference="OAS230616"
                             data-ajax-url="/ContactForm/PortalEmail/232342?entityType=listing&amp;listingurl=/for-rent/houses-oas230616"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Recently Renovated House For Rent - Available On the 1st of November 2025","description":"Oasis Realty is proud to present this beautifully renovated family residence, available for occupation from 1 July 2026, situated within the exclusive and highly sought-after Borrowdale Brooke Golf Estate. Positioned along Brooke Lane, the home enjoys close proximity to the golf course, shopping centre, fuel station, medical facilities, and some of Harare’s leading schools, offering both convenience and an exceptional lifestyle.\r\n\r\nDesigned for comfortable family living and effortless entertaining, the property offers:\r\n\r\n-4 spacious bedrooms with built-in cupboards\r\n-2 well-appointed bathrooms, including a main en-suite\r\n-A generous and inviting lounge area\r\n-Contemporary fitted kitchen with ample cupboard space\r\n-Attached staff quarters\r\n-Double lock-up garage\r\n\r\nThe home is further complemented by a range of practical and energy-efficient features, including a solar geyser, 5kVA so...","url":"https://www.property.co.zw/for-rent/houses-oas230616","identifier":"OAS230616","datePosted":"2025-10-01","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-oas230616","availability":"http://schema.org/InStock","price":"3000","priceCurrency":"USD","serialNumber":"OAS230616","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Oasis Realty","logo":"https://www.property.co.zw/uploadedfiles/ee/68/09/ee6809bf-6b45-4dbd-9721-07729be5be3e.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"3000","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":4,"numberOfBathroomsTotal":2,"floorSize":{"@type":"QuantitativeValue","value":250.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Borrowdale Brooke","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Recently Renovated House For Rent - Available On the 1st of November 2025","description":"Oasis Realty is proud to present this beautifully renovated family residence, available for occupation from 1 July 2026, situated within the exclusive and highly sought-after Borrowdale Brooke Golf Estate. Positioned along Brooke Lane, the home enjoys close proximity to the golf course, shopping centre, fuel station, medical facilities, and some of Harare’s leading schools, offering both convenience and an exceptional lifestyle.\r\n\r\nDesigned for comfortable family living and effortless entertaining, the property offers:\r\n\r\n-4 spacious bedrooms with built-in cupboards\r\n-2 well-appointed bathrooms, including a main en-suite\r\n-A generous and inviting lounge area\r\n-Contemporary fitted kitchen with ample cupboard space\r\n-Attached staff quarters\r\n-Double lock-up garage\r\n\r\nThe home is further complemented by a range of practical and energy-efficient features, including a solar geyser, 5kVA so...","image":["https://www.property.co.zw/uploadedfiles/81/dd/63/81dd637a-f03f-43e3-8f77-f58dbecba331_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/09/05/7f/09057fcd-c226-439a-ac94-abe934a1ff2d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/37/92/c9/3792c9a0-6efe-4888-83d3-b44c0b23f6d5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fc/8d/1b/fc8d1b84-dba8-4f8e-a77a-48256dc00007_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/56/a3/e5/56a3e5d2-d7f4-4388-bea9-3f3e436f50c7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/20/33/e0/2033e055-3709-4cdc-9814-842bb63b9ff4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f5/c5/12/f5c512e2-d343-481b-b1ef-4dec64e7709a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4c/e6/3e/4ce63e6a-b47f-49ce-b60c-9fee843aeb42_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/00/62/72006277-abf0-4386-ae2b-bdaa3d084905_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8a/cc/b3/8accb384-dc0b-453a-80b6-c88150e6364b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/eb/7e/06/eb7e0675-39e2-4376-a007-5b8d70f55330_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d8/04/7e/d8047e38-c12f-4cb9-8279-1dd9ff8453f7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0d/21/85/0d2185a3-4e7a-429d-8a23-78905207e518_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6c/46/a9/6c46a9d0-7f23-459c-909a-ba060e4a476f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f7/11/47/f711472d-366c-42e4-a45e-36090f10b0ef_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/18/a2/23/18a22327-628d-4ee7-ab36-243d4c91a16f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/2e/35/0b2e355f-5cb2-4a7b-a21c-bd964bd15e43_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d2/4b/68/d24b68de-b454-46c4-8487-299c69753448_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e2/e1/d0/e2e1d05c-45db-4582-96ac-aa6a8fa4059d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/c4/74/1bc4745e-869d-4e55-acf9-31c746a12ecd_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/81/dd/63/81dd637a-f03f-43e3-8f77-f58dbecba331_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/09/05/7f/09057fcd-c226-439a-ac94-abe934a1ff2d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/37/92/c9/3792c9a0-6efe-4888-83d3-b44c0b23f6d5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fc/8d/1b/fc8d1b84-dba8-4f8e-a77a-48256dc00007_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/56/a3/e5/56a3e5d2-d7f4-4388-bea9-3f3e436f50c7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/20/33/e0/2033e055-3709-4cdc-9814-842bb63b9ff4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f5/c5/12/f5c512e2-d343-481b-b1ef-4dec64e7709a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4c/e6/3e/4ce63e6a-b47f-49ce-b60c-9fee843aeb42_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/00/62/72006277-abf0-4386-ae2b-bdaa3d084905_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8a/cc/b3/8accb384-dc0b-453a-80b6-c88150e6364b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/eb/7e/06/eb7e0675-39e2-4376-a007-5b8d70f55330_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d8/04/7e/d8047e38-c12f-4cb9-8279-1dd9ff8453f7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0d/21/85/0d2185a3-4e7a-429d-8a23-78905207e518_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6c/46/a9/6c46a9d0-7f23-459c-909a-ba060e4a476f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f7/11/47/f711472d-366c-42e4-a45e-36090f10b0ef_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/18/a2/23/18a22327-628d-4ee7-ab36-243d4c91a16f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/2e/35/0b2e355f-5cb2-4a7b-a21c-bd964bd15e43_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d2/4b/68/d24b68de-b454-46c4-8487-299c69753448_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e2/e1/d0/e2e1d05c-45db-4582-96ac-aa6a8fa4059d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/c4/74/1bc4745e-869d-4e55-acf9-31c746a12ecd_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Oasis Realty","logo":"https://www.property.co.zw/uploadedfiles/ee/68/09/ee6809bf-6b45-4dbd-9721-07729be5be3e.jpg"}}
        </script>
</div>

<div id="248751" data-mandate-id="250473" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(248751)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/grapple-properties" style="cursor: pointer;">
                        <img src="/uploadedfiles/8c/e6/1d/8ce61df1-bdb9-41e7-ad83-f0d5f9cbdcf3.webp" alt="Grapple Properties" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Grapple Properties" data-url="/estate-agents/grapple-properties" />
                    </a>

                        <a href="/estate-agents/grapple-properties/allen-chigwaza/17779" class="vcenterFlex ">Allen Chigwaza</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-248751 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="248751"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-gpp248751">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2d/fd/ec/2dfdec34-b9d4-4158-9b7a-a4b6b5ad4535_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/94/44/1c/94441c75-6f5d-4653-99cd-2e2a1f4dec74_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f7/3c/f5/f73cf572-4de3-42a3-99c8-b74e1c20c7fa_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/59/3e/3d/593e3d01-9652-42aa-9858-9829358ac0ac_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a0/35/ee/a035ee3e-f1ec-4452-9669-ff0d59bb511f_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5b/72/20/5b72203b-cca3-4d94-9943-dc8b4fd12d06_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a6/bf/27/a6bf271d-0d12-431d-a9ad-e0a676804144_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a1/13/d9/a113d979-959f-4b5c-992c-e00b25b589fc_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/cb/7b/f7/cb7bf76a-5651-4999-9cf3-4b85c292a6f4_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/11/90/1b/11901b2c-9bd8-49f9-aa5f-59b0a0a56351_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/93/66/ab/9366abd8-c93b-48cc-8ce3-d2cef1330b92_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/87/5c/02/875c0296-82a4-46c9-818d-ac5a70f14279_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/58/20/94/5820940c-5607-478a-893b-92bd36e16851_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f3/bc/14/f3bc1411-ae7b-43ca-a0fd-287747d47eeb_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1e/ef/57/1eef5711-1665-464c-a9f8-0ea614457ee5_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Nestled in Highlands close to (Highlands Office Park), this exceptional double-story residence suitable for residential or commercial is a must-see.
Key features include:

Downstairs: 2 well-appointed bedrooms, 1 with an en-suite bathroom and jacuzzi, office, library, lounge, kitchen with built-in cupboards, and x2 common toilets. 

Upstairs: 3 spacious bedrooms with built-in cupboards, x2 common toilets, and breathtaking views. 

Outside Yard: A substantial yard featuring a swimming pool, tennis court,  water fountain,x2 high-capacity boreholes, x2 5000-liter tanks, and secure electric gating.

Rent : $3 500p/m 
Available 1 August 2026

Contact |9
WhatsApp |6
email  for more information.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-248751">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-248751">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            New
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/u9a3fEEjDdA" data-is-portrait="True" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="rent"
                     data-category="house"
                     data-entityId="248751" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/grapple-properties" style="cursor: pointer;">
                        <img src="/uploadedfiles/8c/e6/1d/8ce61df1-bdb9-41e7-ad83-f0d5f9cbdcf3.webp" alt="Grapple Properties" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Grapple Properties" data-url="/estate-agents/grapple-properties" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/grapple-properties/allen-chigwaza/17779" class="block text-center">Allen Chigwaza</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-gpp248751">USD 3,500 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-gpp248751">
                        Highlands House close to Highlands Office Park suitable for residential or commercial use
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Highlands, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">5 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 5
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 3
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        600 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        3,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="248751"
                             data-entity-site-id="1595"
                             data-category="house"
                             data-type="rent"
                             data-reference="GPP248751"
                             data-ajax-url="/ContactForm/PortalNumbers/250473?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-gpp248751"
                             data-whatsapp-url="https://rply.link/l/7JkIJ1y2aS"
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
                             data-entity-id="248751"
                             data-entity-site-id="1595"
                             data-category="house"
                             data-type="rent"
                             data-reference="GPP248751"
                             data-ajax-url="/ContactForm/PortalNumbers/250473?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-gpp248751"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="248751"
                             data-entity-site-id="1595"
                             data-category="house"
                             data-type="rent"
                             data-reference="GPP248751"
                             data-ajax-url="/ContactForm/PortalEmail/250473?entityType=listing&amp;listingurl=/for-rent/houses-gpp248751"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Highlands House close to Highlands Office Park suitable for residential or commercial use","description":"Nestled in Highlands close to (Highlands Office Park), this exceptional double-story residence suitable for residential or commercial is a must-see.\r\nKey features include:\r\n\r\nDownstairs: 2 well-appointed bedrooms, 1 with an en-suite bathroom and jacuzzi, office, library, lounge, kitchen with built-in cupboards, and x2 common toilets. \r\n\r\nUpstairs: 3 spacious bedrooms with built-in cupboards, x2 common toilets, and breathtaking views. \r\n\r\nOutside Yard: A substantial yard featuring a swimming pool, tennis court,  water fountain,x2 high-capacity boreholes, x2 5000-liter tanks, and secure electric gating.\r\n\r\nRent : $3 500p/m \r\nAvailable 1 August 2026\r\n\r\nContact |9\r\nWhatsApp |6\r\nemail  for more information.","url":"https://www.property.co.zw/for-rent/houses-gpp248751","identifier":"GPP248751","datePosted":"2026-06-07","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-gpp248751","availability":"http://schema.org/InStock","price":"3500","priceCurrency":"USD","serialNumber":"GPP248751","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Grapple Properties","logo":"https://www.property.co.zw/uploadedfiles/8c/e6/1d/8ce61df1-bdb9-41e7-ad83-f0d5f9cbdcf3.webp"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"3500","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":5,"numberOfBathroomsTotal":3,"floorSize":{"@type":"QuantitativeValue","value":600.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Highlands","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Highlands House close to Highlands Office Park suitable for residential or commercial use","description":"Nestled in Highlands close to (Highlands Office Park), this exceptional double-story residence suitable for residential or commercial is a must-see.\r\nKey features include:\r\n\r\nDownstairs: 2 well-appointed bedrooms, 1 with an en-suite bathroom and jacuzzi, office, library, lounge, kitchen with built-in cupboards, and x2 common toilets. \r\n\r\nUpstairs: 3 spacious bedrooms with built-in cupboards, x2 common toilets, and breathtaking views. \r\n\r\nOutside Yard: A substantial yard featuring a swimming pool, tennis court,  water fountain,x2 high-capacity boreholes, x2 5000-liter tanks, and secure electric gating.\r\n\r\nRent : $3 500p/m \r\nAvailable 1 August 2026\r\n\r\nContact |9\r\nWhatsApp |6\r\nemail  for more information.","image":["https://www.property.co.zw/uploadedfiles/2d/fd/ec/2dfdec34-b9d4-4158-9b7a-a4b6b5ad4535_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/94/44/1c/94441c75-6f5d-4653-99cd-2e2a1f4dec74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f7/3c/f5/f73cf572-4de3-42a3-99c8-b74e1c20c7fa_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/59/3e/3d/593e3d01-9652-42aa-9858-9829358ac0ac_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a0/35/ee/a035ee3e-f1ec-4452-9669-ff0d59bb511f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5b/72/20/5b72203b-cca3-4d94-9943-dc8b4fd12d06_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a6/bf/27/a6bf271d-0d12-431d-a9ad-e0a676804144_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a1/13/d9/a113d979-959f-4b5c-992c-e00b25b589fc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cb/7b/f7/cb7bf76a-5651-4999-9cf3-4b85c292a6f4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/11/90/1b/11901b2c-9bd8-49f9-aa5f-59b0a0a56351_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/93/66/ab/9366abd8-c93b-48cc-8ce3-d2cef1330b92_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/87/5c/02/875c0296-82a4-46c9-818d-ac5a70f14279_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/58/20/94/5820940c-5607-478a-893b-92bd36e16851_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f3/bc/14/f3bc1411-ae7b-43ca-a0fd-287747d47eeb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1e/ef/57/1eef5711-1665-464c-a9f8-0ea614457ee5_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/2d/fd/ec/2dfdec34-b9d4-4158-9b7a-a4b6b5ad4535_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/94/44/1c/94441c75-6f5d-4653-99cd-2e2a1f4dec74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f7/3c/f5/f73cf572-4de3-42a3-99c8-b74e1c20c7fa_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/59/3e/3d/593e3d01-9652-42aa-9858-9829358ac0ac_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a0/35/ee/a035ee3e-f1ec-4452-9669-ff0d59bb511f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5b/72/20/5b72203b-cca3-4d94-9943-dc8b4fd12d06_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a6/bf/27/a6bf271d-0d12-431d-a9ad-e0a676804144_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a1/13/d9/a113d979-959f-4b5c-992c-e00b25b589fc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/cb/7b/f7/cb7bf76a-5651-4999-9cf3-4b85c292a6f4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/11/90/1b/11901b2c-9bd8-49f9-aa5f-59b0a0a56351_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/93/66/ab/9366abd8-c93b-48cc-8ce3-d2cef1330b92_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/87/5c/02/875c0296-82a4-46c9-818d-ac5a70f14279_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/58/20/94/5820940c-5607-478a-893b-92bd36e16851_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f3/bc/14/f3bc1411-ae7b-43ca-a0fd-287747d47eeb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1e/ef/57/1eef5711-1665-464c-a9f8-0ea614457ee5_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Grapple Properties","logo":"https://www.property.co.zw/uploadedfiles/8c/e6/1d/8ce61df1-bdb9-41e7-ad83-f0d5f9cbdcf3.webp"}}
        </script>
</div>

<div id="247982" data-mandate-id="249704" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(247982)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #003a87; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/solid-real-estate" style="cursor: pointer;">
                        <img src="/uploadedfiles/2f/17/86/2f178651-f53a-4627-8580-726c75d83dad.jpg" alt="Solid Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Solid Real Estate" data-url="/estate-agents/solid-real-estate" />
                    </a>

                        <a href="/estate-agents/solid-real-estate/michael-mugauri/24703" class="vcenterFlex ">Michael Mugauri</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-247982 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="247982"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-sore247982">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/96/15/54/961554cb-29f3-4a67-8240-108b8633ec6f_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/86/3c/8f/863c8f51-6e1e-4b78-9e35-c83bca452d82_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/15/56/9d/15569d82-7581-4203-a563-ba7b9ca44597_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/25/da/6d/25da6dce-2fdf-4197-b370-98dfa4742969_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8a/b6/18/8ab618a4-d918-40eb-8503-fa5b83ace954_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7a/4a/5b/7a4a5ba7-f323-47a9-9241-db28fb9f81d0_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9e/34/2d/9e342d3e-8fdc-414d-8886-5226b873824d_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1e/a7/83/1ea783c3-65f8-4766-84d9-966f73a22bcb_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ff/63/34/ff633454-c6d5-43a5-a8db-46c5ceb2829c_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/eb/c3/4b/ebc34b8f-97c2-4477-b2dd-ed93c558a864_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/79/ea/1d/79ea1dfc-1cc2-4b20-a9f7-4ffbd82de1f9_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/45/d1/fb/45d1fbe4-40e4-489a-b20b-5152ee5b0e7f_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5d/99/1a/5d991a67-e006-4167-8c5f-b3f4ee402337_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e6/5f/f5/e65ff54b-1880-4b44-905d-a8d8df69f187_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Commercial or Residential — Be First to Move In

Nestled in a well established and sought after suburb in Avondale West, along Bishop Gaul, is this spacious double storey home with well positioned 5 bedrooms downstairs, with a private upstairs master suite with balcony access. 

Fully furnished and ready for instant move-in 

Additionally, the house features an inviting kitchen, spacious lounge, and a living area. 

A prolific borehole ensures a steady and safe water supply, while a 3 kVa solar back-up system offers an additional power guarantee. A double lock-up garage offers enhanced car security on the premises. 

Carefully positioned servant quarters allows uninterrupted privacy
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-247982">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-247982">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="247982" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #003a87; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/solid-real-estate" style="cursor: pointer;">
                        <img src="/uploadedfiles/2f/17/86/2f178651-f53a-4627-8580-726c75d83dad.jpg" alt="Solid Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Solid Real Estate" data-url="/estate-agents/solid-real-estate" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/solid-real-estate/michael-mugauri/24703" class="block text-center">Michael Mugauri</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-sore247982">USD 2,800 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-sore247982">
                        Grab this fully furnished house to let in Avondale 
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Avondale West, Harare West</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">6 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 6
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 4
                    </span>

                                    <span class="land-size mr-2 relative " style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        2,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="247982"
                             data-entity-site-id="1283"
                             data-category="house"
                             data-type="rent"
                             data-reference="SORE247982"
                             data-ajax-url="/ContactForm/PortalNumbers/249704?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-sore247982"
                             data-whatsapp-url="https://rply.link/l/X03q5c6xp5"
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
                             data-entity-id="247982"
                             data-entity-site-id="1283"
                             data-category="house"
                             data-type="rent"
                             data-reference="SORE247982"
                             data-ajax-url="/ContactForm/PortalNumbers/249704?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-sore247982"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="247982"
                             data-entity-site-id="1283"
                             data-category="house"
                             data-type="rent"
                             data-reference="SORE247982"
                             data-ajax-url="/ContactForm/PortalEmail/249704?entityType=listing&amp;listingurl=/for-rent/houses-sore247982"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Grab this fully furnished house to let in Avondale ","description":"Commercial or Residential — Be First to Move In\r\n\r\nNestled in a well established and sought after suburb in Avondale West, along Bishop Gaul, is this spacious double storey home with well positioned 5 bedrooms downstairs, with a private upstairs master suite with balcony access. \r\n\r\nFully furnished and ready for instant move-in \r\n\r\nAdditionally, the house features an inviting kitchen, spacious lounge, and a living area. \r\n\r\nA prolific borehole ensures a steady and safe water supply, while a 3 kVa solar back-up system offers an additional power guarantee. A double lock-up garage offers enhanced car security on the premises. \r\n\r\nCarefully positioned servant quarters allows uninterrupted privacy","url":"https://www.property.co.zw/for-rent/houses-sore247982","identifier":"SORE247982","datePosted":"2026-05-27","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-sore247982","availability":"http://schema.org/InStock","price":"2800","priceCurrency":"USD","serialNumber":"SORE247982","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Solid Real Estate","logo":"https://www.property.co.zw/uploadedfiles/2f/17/86/2f178651-f53a-4627-8580-726c75d83dad.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"2800","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":6,"numberOfBathroomsTotal":4,"address":{"@type":"PostalAddress","addressLocality":"Avondale West","addressRegion":"Harare West","addressCountry":"Zimbabwe"},"name":"Grab this fully furnished house to let in Avondale ","description":"Commercial or Residential — Be First to Move In\r\n\r\nNestled in a well established and sought after suburb in Avondale West, along Bishop Gaul, is this spacious double storey home with well positioned 5 bedrooms downstairs, with a private upstairs master suite with balcony access. \r\n\r\nFully furnished and ready for instant move-in \r\n\r\nAdditionally, the house features an inviting kitchen, spacious lounge, and a living area. \r\n\r\nA prolific borehole ensures a steady and safe water supply, while a 3 kVa solar back-up system offers an additional power guarantee. A double lock-up garage offers enhanced car security on the premises. \r\n\r\nCarefully positioned servant quarters allows uninterrupted privacy","image":["https://www.property.co.zw/uploadedfiles/96/15/54/961554cb-29f3-4a67-8240-108b8633ec6f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/86/3c/8f/863c8f51-6e1e-4b78-9e35-c83bca452d82_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/56/9d/15569d82-7581-4203-a563-ba7b9ca44597_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/25/da/6d/25da6dce-2fdf-4197-b370-98dfa4742969_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8a/b6/18/8ab618a4-d918-40eb-8503-fa5b83ace954_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7a/4a/5b/7a4a5ba7-f323-47a9-9241-db28fb9f81d0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9e/34/2d/9e342d3e-8fdc-414d-8886-5226b873824d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1e/a7/83/1ea783c3-65f8-4766-84d9-966f73a22bcb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ff/63/34/ff633454-c6d5-43a5-a8db-46c5ceb2829c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/eb/c3/4b/ebc34b8f-97c2-4477-b2dd-ed93c558a864_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/79/ea/1d/79ea1dfc-1cc2-4b20-a9f7-4ffbd82de1f9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/45/d1/fb/45d1fbe4-40e4-489a-b20b-5152ee5b0e7f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5d/99/1a/5d991a67-e006-4167-8c5f-b3f4ee402337_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e6/5f/f5/e65ff54b-1880-4b44-905d-a8d8df69f187_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/96/15/54/961554cb-29f3-4a67-8240-108b8633ec6f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/86/3c/8f/863c8f51-6e1e-4b78-9e35-c83bca452d82_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/56/9d/15569d82-7581-4203-a563-ba7b9ca44597_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/25/da/6d/25da6dce-2fdf-4197-b370-98dfa4742969_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8a/b6/18/8ab618a4-d918-40eb-8503-fa5b83ace954_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7a/4a/5b/7a4a5ba7-f323-47a9-9241-db28fb9f81d0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9e/34/2d/9e342d3e-8fdc-414d-8886-5226b873824d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1e/a7/83/1ea783c3-65f8-4766-84d9-966f73a22bcb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ff/63/34/ff633454-c6d5-43a5-a8db-46c5ceb2829c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/eb/c3/4b/ebc34b8f-97c2-4477-b2dd-ed93c558a864_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/79/ea/1d/79ea1dfc-1cc2-4b20-a9f7-4ffbd82de1f9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/45/d1/fb/45d1fbe4-40e4-489a-b20b-5152ee5b0e7f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5d/99/1a/5d991a67-e006-4167-8c5f-b3f4ee402337_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e6/5f/f5/e65ff54b-1880-4b44-905d-a8d8df69f187_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Solid Real Estate","logo":"https://www.property.co.zw/uploadedfiles/2f/17/86/2f178651-f53a-4627-8580-726c75d83dad.jpg"}}
        </script>
</div>

<div id="247580" data-mandate-id="249302" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(247580)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" />
                    </a>

                        <a href="/estate-agents/seeff/joyleen-hayisoswi/18729" class="vcenterFlex ">Joyleen Hayisoswi</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-247580 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="247580"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-sef247580">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0d/2d/de/0d2ddee9-320b-4f8a-a9f1-b07ccc1606c9_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6e/5c/bc/6e5cbc9c-7476-4dbd-8ef3-f5483eaa1785_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c6/6b/b6/c66bb615-0c4c-43da-976b-8cf35112d807_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ae/d8/e2/aed8e2d9-7637-49a6-a990-102d34c6c47f_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c0/6c/73/c06c73f1-e80d-45c9-8242-2e1995ca4e56_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a6/61/96/a661960d-2b54-43ef-a562-083287a92a42_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e1/74/1a/e1741af4-5c95-4d12-9eaa-79d6b1f5fc20_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b6/e6/35/b6e635b6-98fe-4e19-b0cd-95ed138d473d_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/72/c1/7b/72c17b2b-fb26-40e7-9133-37f2c93b483e_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a0/13/87/a013879b-f1f5-40bd-8bd0-b7488528d21f_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1b/00/a3/1b00a3c1-3260-488e-9536-a2817b72e63e_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/45/ce/30/45ce30aa-5598-4f08-836a-a570412145c5_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/36/5b/47/365b474c-27db-49ea-a10a-1a9e8a504dd0_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7d/6a/f3/7d6af35e-a8c5-4974-8fdb-6d3a2ce3d886_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/70/58/e0/7058e073-d02e-49c6-995b-8b75e93997f8_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3c/c8/7f/3cc87f25-ca18-4d1b-aef2-95f486004bdd_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5e/8f/31/5e8f314f-71dc-49bc-9b37-502edaaa7c8c_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8b/82/bc/8b82bc7e-3a62-410e-b603-2b1d7be29bf7_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0f/aa/9a/0faa9aef-a4d6-4b9b-bb52-34eb34bb9784_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/13/45/1e/13451e42-2c43-4b78-9481-f1762a8dee31_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d9/25/44/d925448a-ce80-458e-88b0-031b735d989a_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2c/b2/c3/2cb2c3b8-6004-4e49-8844-6cba3de06d63_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9f/5d/83/9f5d83b6-c68c-49b0-8edd-89b6e5a89eaa_thumbnail591.webp" alt="6 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                This spacious double storey home offers 6 bedrooms, multiple living areas, and modern finishes throughout. The ground floor features an open plan fitted kitchen and dining area with a scullery and pantry, a tiled lounge with sliding doors leading outside, 3 bedrooms, and a family bathroom. A smaller additional room downstairs will be retained by the property owner for storage use. Upstairs boasts an open plan lounge and kitchenette opening onto a balcony, a luxurious main bedroom with walk-in closet and en-suite bathroom, another en-suite bedroom with balcony access, and an additional bedroom with a separate bathroom. The property also includes a double lock-up garage, solar geyser, borehole, and comes with a gardener.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-247580">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-247580">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="247580" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #0c2c56; ">
                <div class="w-full">
                    <a href="/estate-agents/seeff" style="cursor: pointer;">
                        <img src="/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png" alt="Seeff Zimbabwe" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Seeff Zimbabwe" data-url="/estate-agents/seeff" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/seeff/joyleen-hayisoswi/18729" class="block text-center">Joyleen Hayisoswi</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-sef247580">USD 1,800 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-sef247580">
                        Spacious 6-Bedroom Double Storey Home with Borehole
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Goodhope, Harare West</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">6 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 6
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 3
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        600 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        2,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="247580"
                             data-entity-site-id="1271"
                             data-category="house"
                             data-type="rent"
                             data-reference="SEF247580"
                             data-ajax-url="/ContactForm/PortalNumbers/249302?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-sef247580"
                             data-whatsapp-url="https://rply.link/l/7RmYRrihYY"
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
                             data-entity-id="247580"
                             data-entity-site-id="1271"
                             data-category="house"
                             data-type="rent"
                             data-reference="SEF247580"
                             data-ajax-url="/ContactForm/PortalNumbers/249302?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-sef247580"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="247580"
                             data-entity-site-id="1271"
                             data-category="house"
                             data-type="rent"
                             data-reference="SEF247580"
                             data-ajax-url="/ContactForm/PortalEmail/249302?entityType=listing&amp;listingurl=/for-rent/houses-sef247580"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Spacious 6-Bedroom Double Storey Home with Borehole","description":"This spacious double storey home offers 6 bedrooms, multiple living areas, and modern finishes throughout. The ground floor features an open plan fitted kitchen and dining area with a scullery and pantry, a tiled lounge with sliding doors leading outside, 3 bedrooms, and a family bathroom. A smaller additional room downstairs will be retained by the property owner for storage use. Upstairs boasts an open plan lounge and kitchenette opening onto a balcony, a luxurious main bedroom with walk-in closet and en-suite bathroom, another en-suite bedroom with balcony access, and an additional bedroom with a separate bathroom. The property also includes a double lock-up garage, solar geyser, borehole, and comes with a gardener.","url":"https://www.property.co.zw/for-rent/houses-sef247580","identifier":"SEF247580","datePosted":"2026-05-21","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-sef247580","availability":"http://schema.org/InStock","price":"1800","priceCurrency":"USD","serialNumber":"SEF247580","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"1800","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":6,"numberOfBathroomsTotal":3,"floorSize":{"@type":"QuantitativeValue","value":600.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Goodhope","addressRegion":"Harare West","addressCountry":"Zimbabwe"},"name":"Spacious 6-Bedroom Double Storey Home with Borehole","description":"This spacious double storey home offers 6 bedrooms, multiple living areas, and modern finishes throughout. The ground floor features an open plan fitted kitchen and dining area with a scullery and pantry, a tiled lounge with sliding doors leading outside, 3 bedrooms, and a family bathroom. A smaller additional room downstairs will be retained by the property owner for storage use. Upstairs boasts an open plan lounge and kitchenette opening onto a balcony, a luxurious main bedroom with walk-in closet and en-suite bathroom, another en-suite bedroom with balcony access, and an additional bedroom with a separate bathroom. The property also includes a double lock-up garage, solar geyser, borehole, and comes with a gardener.","image":["https://www.property.co.zw/uploadedfiles/0d/2d/de/0d2ddee9-320b-4f8a-a9f1-b07ccc1606c9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6e/5c/bc/6e5cbc9c-7476-4dbd-8ef3-f5483eaa1785_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c6/6b/b6/c66bb615-0c4c-43da-976b-8cf35112d807_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ae/d8/e2/aed8e2d9-7637-49a6-a990-102d34c6c47f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c0/6c/73/c06c73f1-e80d-45c9-8242-2e1995ca4e56_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a6/61/96/a661960d-2b54-43ef-a562-083287a92a42_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e1/74/1a/e1741af4-5c95-4d12-9eaa-79d6b1f5fc20_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b6/e6/35/b6e635b6-98fe-4e19-b0cd-95ed138d473d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/c1/7b/72c17b2b-fb26-40e7-9133-37f2c93b483e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a0/13/87/a013879b-f1f5-40bd-8bd0-b7488528d21f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/00/a3/1b00a3c1-3260-488e-9536-a2817b72e63e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/45/ce/30/45ce30aa-5598-4f08-836a-a570412145c5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/36/5b/47/365b474c-27db-49ea-a10a-1a9e8a504dd0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/6a/f3/7d6af35e-a8c5-4974-8fdb-6d3a2ce3d886_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/70/58/e0/7058e073-d02e-49c6-995b-8b75e93997f8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3c/c8/7f/3cc87f25-ca18-4d1b-aef2-95f486004bdd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5e/8f/31/5e8f314f-71dc-49bc-9b37-502edaaa7c8c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8b/82/bc/8b82bc7e-3a62-410e-b603-2b1d7be29bf7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0f/aa/9a/0faa9aef-a4d6-4b9b-bb52-34eb34bb9784_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/13/45/1e/13451e42-2c43-4b78-9481-f1762a8dee31_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d9/25/44/d925448a-ce80-458e-88b0-031b735d989a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2c/b2/c3/2cb2c3b8-6004-4e49-8844-6cba3de06d63_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9f/5d/83/9f5d83b6-c68c-49b0-8edd-89b6e5a89eaa_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/0d/2d/de/0d2ddee9-320b-4f8a-a9f1-b07ccc1606c9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6e/5c/bc/6e5cbc9c-7476-4dbd-8ef3-f5483eaa1785_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c6/6b/b6/c66bb615-0c4c-43da-976b-8cf35112d807_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ae/d8/e2/aed8e2d9-7637-49a6-a990-102d34c6c47f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c0/6c/73/c06c73f1-e80d-45c9-8242-2e1995ca4e56_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a6/61/96/a661960d-2b54-43ef-a562-083287a92a42_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e1/74/1a/e1741af4-5c95-4d12-9eaa-79d6b1f5fc20_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b6/e6/35/b6e635b6-98fe-4e19-b0cd-95ed138d473d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/c1/7b/72c17b2b-fb26-40e7-9133-37f2c93b483e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a0/13/87/a013879b-f1f5-40bd-8bd0-b7488528d21f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/00/a3/1b00a3c1-3260-488e-9536-a2817b72e63e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/45/ce/30/45ce30aa-5598-4f08-836a-a570412145c5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/36/5b/47/365b474c-27db-49ea-a10a-1a9e8a504dd0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/6a/f3/7d6af35e-a8c5-4974-8fdb-6d3a2ce3d886_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/70/58/e0/7058e073-d02e-49c6-995b-8b75e93997f8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3c/c8/7f/3cc87f25-ca18-4d1b-aef2-95f486004bdd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5e/8f/31/5e8f314f-71dc-49bc-9b37-502edaaa7c8c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8b/82/bc/8b82bc7e-3a62-410e-b603-2b1d7be29bf7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0f/aa/9a/0faa9aef-a4d6-4b9b-bb52-34eb34bb9784_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/13/45/1e/13451e42-2c43-4b78-9481-f1762a8dee31_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d9/25/44/d925448a-ce80-458e-88b0-031b735d989a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2c/b2/c3/2cb2c3b8-6004-4e49-8844-6cba3de06d63_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9f/5d/83/9f5d83b6-c68c-49b0-8edd-89b6e5a89eaa_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Seeff Zimbabwe","logo":"https://www.property.co.zw/uploadedfiles/32/44/b7/3244b778-64f1-441c-90b6-aae4ac690d45.png"}}
        </script>
</div>

<div id="247148" data-mandate-id="248870" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(247148)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" />
                    </a>

                        <a href="/estate-agents/realtor-ville/fungai-vhezha/18645" class="vcenterFlex ">Fungai Vhezha</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-247148 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="247148"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-rvl247148">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d5/26/96/d526962e-35ea-4cf0-b79c-842fc5efc1d4_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f9/96/b2/f996b206-dd18-4eea-b838-ff5ab50c4fc8_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/36/50/3f/36503f8e-9980-4c55-847b-cd1426930a74_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8e/2a/f2/8e2af27c-7413-4ce2-91ed-70c37170aeba_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/34/00/ad/3400adbe-5d11-40fd-8501-528aa62a4870_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/74/5a/df/745adff6-1561-4c95-8f27-007481a7e5c6_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9b/76/24/9b762456-0aca-481f-804d-b4034b9456f7_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/68/c9/99/68c99979-d566-4792-8681-2ecdca8c696a_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d7/d1/a2/d7d1a294-45bd-4c87-af65-17ffcb15cc95_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/08/68/fa/0868fad0-c3eb-478b-b939-0f098bf4e136_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c6/47/b2/c647b233-4723-43be-bd2a-1ff36fc37f11_thumbnail591.webp" alt="7 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Beautifully proportioned 7-bedroom family home for rent in Westgate, Harare West — set on a generous 1,000 m&#178; erf with a comfortable 400 m&#178; building footprint. Ideal for a large household or shared living, the property features a spacious, timber-cabinet kitchen with central island and breakfast bar (see kitchen photos) offering abundant storage and natural light through charming arched windows. The roomy reception and dining areas are defined by elegant archways and tiled floors, perfect for entertaining or homeschooling space. The main family bathroom is large with separate shower and sunken bath and full wall tiling (see bathroom photo). Outside, the cream-painted exterior with brick plinth, tiled roof, mature trees and a paved driveway provides curb appeal and safe parking (see exterior photo). A reliable borehole ensures steady water supply — a major bonus in this area. This prop...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-247148">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-247148">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/GQT_onzdVvs" data-is-portrait="False" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="rent"
                     data-category="house"
                     data-entityId="247148" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #005a8f; ">
                <div class="w-full">
                    <a href="/estate-agents/realtor-ville" style="cursor: pointer;">
                        <img src="/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png" alt="Realtor Ville" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Realtor Ville" data-url="/estate-agents/realtor-ville" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/realtor-ville/fungai-vhezha/18645" class="block text-center">Fungai Vhezha</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-rvl247148">USD 2,030 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-rvl247148">
                        Spacious 7-Bed Westgate Home with Large Kitchen & Borehole
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Westgate, Harare West</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">7 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 7
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 2
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        400 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        1,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="247148"
                             data-entity-site-id="1370"
                             data-category="house"
                             data-type="rent"
                             data-reference="RVL247148"
                             data-ajax-url="/ContactForm/PortalNumbers/248870?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-rvl247148"
                             data-whatsapp-url="https://rply.link/l/8mnu4ublph"
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
                             data-entity-id="247148"
                             data-entity-site-id="1370"
                             data-category="house"
                             data-type="rent"
                             data-reference="RVL247148"
                             data-ajax-url="/ContactForm/PortalNumbers/248870?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-rvl247148"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="247148"
                             data-entity-site-id="1370"
                             data-category="house"
                             data-type="rent"
                             data-reference="RVL247148"
                             data-ajax-url="/ContactForm/PortalEmail/248870?entityType=listing&amp;listingurl=/for-rent/houses-rvl247148"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Spacious 7-Bed Westgate Home with Large Kitchen & Borehole","description":"Beautifully proportioned 7-bedroom family home for rent in Westgate, Harare West — set on a generous 1,000 m² erf with a comfortable 400 m² building footprint. Ideal for a large household or shared living, the property features a spacious, timber-cabinet kitchen with central island and breakfast bar (see kitchen photos) offering abundant storage and natural light through charming arched windows. The roomy reception and dining areas are defined by elegant archways and tiled floors, perfect for entertaining or homeschooling space. The main family bathroom is large with separate shower and sunken bath and full wall tiling (see bathroom photo). Outside, the cream-painted exterior with brick plinth, tiled roof, mature trees and a paved driveway provides curb appeal and safe parking (see exterior photo). A reliable borehole ensures steady water supply — a major bonus in this area. This prop...","url":"https://www.property.co.zw/for-rent/houses-rvl247148","identifier":"RVL247148","datePosted":"2026-05-16","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-rvl247148","availability":"http://schema.org/InStock","price":"2030","priceCurrency":"USD","serialNumber":"RVL247148","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"2030","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":7,"numberOfBathroomsTotal":2,"floorSize":{"@type":"QuantitativeValue","value":400.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Westgate","addressRegion":"Harare West","addressCountry":"Zimbabwe"},"name":"Spacious 7-Bed Westgate Home with Large Kitchen & Borehole","description":"Beautifully proportioned 7-bedroom family home for rent in Westgate, Harare West — set on a generous 1,000 m² erf with a comfortable 400 m² building footprint. Ideal for a large household or shared living, the property features a spacious, timber-cabinet kitchen with central island and breakfast bar (see kitchen photos) offering abundant storage and natural light through charming arched windows. The roomy reception and dining areas are defined by elegant archways and tiled floors, perfect for entertaining or homeschooling space. The main family bathroom is large with separate shower and sunken bath and full wall tiling (see bathroom photo). Outside, the cream-painted exterior with brick plinth, tiled roof, mature trees and a paved driveway provides curb appeal and safe parking (see exterior photo). A reliable borehole ensures steady water supply — a major bonus in this area. This prop...","image":["https://www.property.co.zw/uploadedfiles/d5/26/96/d526962e-35ea-4cf0-b79c-842fc5efc1d4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f9/96/b2/f996b206-dd18-4eea-b838-ff5ab50c4fc8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/36/50/3f/36503f8e-9980-4c55-847b-cd1426930a74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8e/2a/f2/8e2af27c-7413-4ce2-91ed-70c37170aeba_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/00/ad/3400adbe-5d11-40fd-8501-528aa62a4870_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/74/5a/df/745adff6-1561-4c95-8f27-007481a7e5c6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9b/76/24/9b762456-0aca-481f-804d-b4034b9456f7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/68/c9/99/68c99979-d566-4792-8681-2ecdca8c696a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/d1/a2/d7d1a294-45bd-4c87-af65-17ffcb15cc95_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/08/68/fa/0868fad0-c3eb-478b-b939-0f098bf4e136_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c6/47/b2/c647b233-4723-43be-bd2a-1ff36fc37f11_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/d5/26/96/d526962e-35ea-4cf0-b79c-842fc5efc1d4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f9/96/b2/f996b206-dd18-4eea-b838-ff5ab50c4fc8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/36/50/3f/36503f8e-9980-4c55-847b-cd1426930a74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8e/2a/f2/8e2af27c-7413-4ce2-91ed-70c37170aeba_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/00/ad/3400adbe-5d11-40fd-8501-528aa62a4870_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/74/5a/df/745adff6-1561-4c95-8f27-007481a7e5c6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9b/76/24/9b762456-0aca-481f-804d-b4034b9456f7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/68/c9/99/68c99979-d566-4792-8681-2ecdca8c696a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/d1/a2/d7d1a294-45bd-4c87-af65-17ffcb15cc95_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/08/68/fa/0868fad0-c3eb-478b-b939-0f098bf4e136_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c6/47/b2/c647b233-4723-43be-bd2a-1ff36fc37f11_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Realtor Ville","logo":"https://www.property.co.zw/uploadedfiles/ee/27/5e/ee275ebf-1755-419d-bbc1-e36bfe5a48cc.png"}}
        </script>
</div>            <div class="middle-content">
                                                    <div class="citify-snippet w-full max-w-full overflow-hidden mb-4">
                        <div class="flex items-center gap-2 md:gap-3 p-3 md:p-5 bg-gray-100 border border-neutral-200 text-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm">
                            <div class="article" data-height="58">
                                <p>Houses for rent in Zimbabwe offer a variety of options with an average monthly rental price of $1,100. These homes typically have a median land area of 625 ㎡ and a median building size of about 200 ㎡, with some larger properties reaching up to 4,000 ㎡ in size and land areas as large as 5,600 ㎡. Rental prices start from as low as USD 195, making the market accessible to a wide range of renters.</p>
<p>Many of these houses feature practical amenities such as fitted kitchens, gardens, and verandahs, providing comfortable living spaces. Properties are often walled for added security and come with tiled floors. Water supply is supported by features like water tanks and boreholes, and several homes include a main en suite bedroom for convenience and privacy.</p>
<p>Zimbabwe’s diverse environment combines urban and natural settings, with access to cultural and recreational sites. Major cities offer proximity to schools, universities, healthcare facilities, and shopping centers such as Sam Levy’s Village and Eastgate Mall. The local lifestyle benefits from a mix of traditional and modern influences, with a variety of restaurants serving both local and international cuisine, making these rental homes suitable for families and professionals alike.</p>
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


<div id="246718" data-mandate-id="248440" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(246718)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/golden-will" style="cursor: pointer;">
                        <img src="/uploadedfiles/26/cd/bb/26cdbb8c-6cd8-461b-9675-654c870babc4.jpg" alt="GoldenWill Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="GoldenWill Real Estate" data-url="/estate-agents/golden-will" />
                    </a>

                        <a href="/estate-agents/golden-will/gugulethu-ncube/20040" class="vcenterFlex ">Gugulethu Ncube</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-246718 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="246718"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-glre246718">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e6/d9/2e/e6d92ebf-e392-4ed3-bb8a-7fc28f2e531f_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b6/dd/e5/b6dde5c4-eb69-4959-bf61-dca05dedd988_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c4/54/e2/c454e278-f8b5-431e-a0e4-e4a48d49d63f_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a8/a0/51/a8a05197-c62e-4ec1-88f2-c43c95ff1dac_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3c/73/bb/3c73bb03-f014-4269-a7f8-6caeeba11a4e_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0a/0e/93/0a0e9388-5638-4a37-a975-dd221ac2a6cc_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8d/93/b4/8d93b494-62b7-4810-8fe0-4d32faed9603_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/34/55/fd/3455fda5-c57e-409c-b1e0-e731c1c282d0_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/fd/83/0f/fd830f0d-34f2-4a93-a88f-b8569187fd22_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6e/3d/9d/6e3d9d5d-175f-474d-84cd-e6e32d9e825c_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b7/c0/f8/b7c0f87e-dcb8-4013-938d-e4c58e1fe9be_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b9/d5/31/b9d531a8-0fd1-4e8f-960b-7f00770b6dab_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/13/3c/c5/133cc56e-aa81-46aa-8df5-39b1e13c978e_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/94/a0/d8/94a0d8a4-fe88-4d43-9cc4-d49840206d28_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7e/a8/11/7ea811ad-ad3b-44f8-9610-33c765ebd9f1_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Modern 3-bedroom, 2-bathroom family home for rent in Arlington, Harare South — a comfortable blend of space and practical living. Situated on a neat 500 m&#178; stand with a generous 350 m&#178; building footprint, this property offers ample indoor space and outdoor potential for gardening, entertaining or safe play. The house features bright, airy living areas, a functional kitchen and well-proportioned bedrooms that suit families or professionals seeking convenience and privacy. Reliable water supply is assured by a borehole, reducing reliance on municipal interruptions. Secure boundary walls and a tidy yard create a low-maintenance environment, while the Arlington location provides easy access to local shops, schools and transport links in Harare South. Ready to move in — contact us today to arrange a viewing and experience the space in person.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-246718">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-246718">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/CQJJQi7lt60" data-is-portrait="True" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="rent"
                     data-category="house"
                     data-entityId="246718" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/golden-will" style="cursor: pointer;">
                        <img src="/uploadedfiles/26/cd/bb/26cdbb8c-6cd8-461b-9675-654c870babc4.jpg" alt="GoldenWill Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="GoldenWill Real Estate" data-url="/estate-agents/golden-will" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/golden-will/gugulethu-ncube/20040" class="block text-center">Gugulethu Ncube</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-glre246718">USD 1,300 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-glre246718">
                        Spacious 3BR/2BA Arlington Home with Borehole — Harare South
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Arlington, Harare South</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">3 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 3
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 2
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        350 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        500 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="246718"
                             data-entity-site-id="1664"
                             data-category="house"
                             data-type="rent"
                             data-reference="GLRE246718"
                             data-ajax-url="/ContactForm/PortalNumbers/248440?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-glre246718"
                             data-whatsapp-url="https://rply.link/l/8CexmVsvxc"
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
                             data-entity-id="246718"
                             data-entity-site-id="1664"
                             data-category="house"
                             data-type="rent"
                             data-reference="GLRE246718"
                             data-ajax-url="/ContactForm/PortalNumbers/248440?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-glre246718"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="246718"
                             data-entity-site-id="1664"
                             data-category="house"
                             data-type="rent"
                             data-reference="GLRE246718"
                             data-ajax-url="/ContactForm/PortalEmail/248440?entityType=listing&amp;listingurl=/for-rent/houses-glre246718"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Spacious 3BR/2BA Arlington Home with Borehole — Harare South","description":"Modern 3-bedroom, 2-bathroom family home for rent in Arlington, Harare South — a comfortable blend of space and practical living. Situated on a neat 500 m² stand with a generous 350 m² building footprint, this property offers ample indoor space and outdoor potential for gardening, entertaining or safe play. The house features bright, airy living areas, a functional kitchen and well-proportioned bedrooms that suit families or professionals seeking convenience and privacy. Reliable water supply is assured by a borehole, reducing reliance on municipal interruptions. Secure boundary walls and a tidy yard create a low-maintenance environment, while the Arlington location provides easy access to local shops, schools and transport links in Harare South. Ready to move in — contact us today to arrange a viewing and experience the space in person.","url":"https://www.property.co.zw/for-rent/houses-glre246718","identifier":"GLRE246718","datePosted":"2026-05-12","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-glre246718","availability":"http://schema.org/InStock","price":"1300","priceCurrency":"USD","serialNumber":"GLRE246718","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"GoldenWill Real Estate","logo":"https://www.property.co.zw/uploadedfiles/26/cd/bb/26cdbb8c-6cd8-461b-9675-654c870babc4.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"1300","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":3,"numberOfBathroomsTotal":2,"floorSize":{"@type":"QuantitativeValue","value":350.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Arlington","addressRegion":"Harare South","addressCountry":"Zimbabwe"},"name":"Spacious 3BR/2BA Arlington Home with Borehole — Harare South","description":"Modern 3-bedroom, 2-bathroom family home for rent in Arlington, Harare South — a comfortable blend of space and practical living. Situated on a neat 500 m² stand with a generous 350 m² building footprint, this property offers ample indoor space and outdoor potential for gardening, entertaining or safe play. The house features bright, airy living areas, a functional kitchen and well-proportioned bedrooms that suit families or professionals seeking convenience and privacy. Reliable water supply is assured by a borehole, reducing reliance on municipal interruptions. Secure boundary walls and a tidy yard create a low-maintenance environment, while the Arlington location provides easy access to local shops, schools and transport links in Harare South. Ready to move in — contact us today to arrange a viewing and experience the space in person.","image":["https://www.property.co.zw/uploadedfiles/e6/d9/2e/e6d92ebf-e392-4ed3-bb8a-7fc28f2e531f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b6/dd/e5/b6dde5c4-eb69-4959-bf61-dca05dedd988_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c4/54/e2/c454e278-f8b5-431e-a0e4-e4a48d49d63f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a8/a0/51/a8a05197-c62e-4ec1-88f2-c43c95ff1dac_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3c/73/bb/3c73bb03-f014-4269-a7f8-6caeeba11a4e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0a/0e/93/0a0e9388-5638-4a37-a975-dd221ac2a6cc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8d/93/b4/8d93b494-62b7-4810-8fe0-4d32faed9603_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/55/fd/3455fda5-c57e-409c-b1e0-e731c1c282d0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fd/83/0f/fd830f0d-34f2-4a93-a88f-b8569187fd22_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6e/3d/9d/6e3d9d5d-175f-474d-84cd-e6e32d9e825c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b7/c0/f8/b7c0f87e-dcb8-4013-938d-e4c58e1fe9be_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b9/d5/31/b9d531a8-0fd1-4e8f-960b-7f00770b6dab_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/13/3c/c5/133cc56e-aa81-46aa-8df5-39b1e13c978e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/94/a0/d8/94a0d8a4-fe88-4d43-9cc4-d49840206d28_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/a8/11/7ea811ad-ad3b-44f8-9610-33c765ebd9f1_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/e6/d9/2e/e6d92ebf-e392-4ed3-bb8a-7fc28f2e531f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b6/dd/e5/b6dde5c4-eb69-4959-bf61-dca05dedd988_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c4/54/e2/c454e278-f8b5-431e-a0e4-e4a48d49d63f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a8/a0/51/a8a05197-c62e-4ec1-88f2-c43c95ff1dac_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3c/73/bb/3c73bb03-f014-4269-a7f8-6caeeba11a4e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0a/0e/93/0a0e9388-5638-4a37-a975-dd221ac2a6cc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8d/93/b4/8d93b494-62b7-4810-8fe0-4d32faed9603_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/55/fd/3455fda5-c57e-409c-b1e0-e731c1c282d0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fd/83/0f/fd830f0d-34f2-4a93-a88f-b8569187fd22_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6e/3d/9d/6e3d9d5d-175f-474d-84cd-e6e32d9e825c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b7/c0/f8/b7c0f87e-dcb8-4013-938d-e4c58e1fe9be_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b9/d5/31/b9d531a8-0fd1-4e8f-960b-7f00770b6dab_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/13/3c/c5/133cc56e-aa81-46aa-8df5-39b1e13c978e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/94/a0/d8/94a0d8a4-fe88-4d43-9cc4-d49840206d28_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/a8/11/7ea811ad-ad3b-44f8-9610-33c765ebd9f1_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"GoldenWill Real Estate","logo":"https://www.property.co.zw/uploadedfiles/26/cd/bb/26cdbb8c-6cd8-461b-9675-654c870babc4.jpg"}}
        </script>
</div>

<div id="243545" data-mandate-id="245267" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(243545)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/heaven-on-earth" style="cursor: pointer;">
                        <img src="/uploadedfiles/60/ad/c2/60adc24f-59a1-4f15-a2bd-ff386a7b7f57.jpeg" alt="Heaven On Earth Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Heaven On Earth Real Estate" data-url="/estate-agents/heaven-on-earth" />
                    </a>

                        <a href="/estate-agents/heaven-on-earth/mascelyn-scotch/19771" class="vcenterFlex ">Mascelyn Scotch</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-243545 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="243545"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-hvn243545">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0f/da/28/0fda283c-30f7-42dd-b2a1-df4d07d737a4_thumbnail591.webp" alt="2 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c5/9c/a2/c59ca291-c982-4bc4-9084-05d9cbab4505_thumbnail591.webp" alt="2 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/23/cc/21/23cc219c-ee9f-48e2-88ac-76ac7c94d524_thumbnail591.webp" alt="2 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0e/a6/44/0ea64476-8804-4d79-8b61-d0d20c5955bc_thumbnail591.webp" alt="2 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/70/cc/03/70cc0325-ed41-497a-a61c-3b5186b834f4_thumbnail591.webp" alt="2 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/71/ac/4d/71ac4dcf-ea10-4252-8540-eb8a2f7bd79a_thumbnail591.webp" alt="2 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9a/5f/5e/9a5f5e79-6087-41ed-a750-9e1f50df860f_thumbnail591.webp" alt="2 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7d/7d/40/7d7d40cb-1961-4d01-8d5b-33cae8876dce_thumbnail591.webp" alt="2 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6c/d6/9e/6cd69e2b-0440-414c-a8c7-641975d366ab_thumbnail591.webp" alt="2 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Mufakose near Magandanga Shops. 2 beds, lounge and kitchen available at $250 exclusive of bills. Available for occupation 1st of April 2026
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-243545">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-243545">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="243545" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/heaven-on-earth" style="cursor: pointer;">
                        <img src="/uploadedfiles/60/ad/c2/60adc24f-59a1-4f15-a2bd-ff386a7b7f57.jpeg" alt="Heaven On Earth Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Heaven On Earth Real Estate" data-url="/estate-agents/heaven-on-earth" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/heaven-on-earth/mascelyn-scotch/19771" class="block text-center">Mascelyn Scotch</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-hvn243545">USD 250 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-hvn243545">
                        Mufakose 2 bed corehouse to let
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Mufakose, Harare High Density</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">2 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 2
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 1
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        1 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        1 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="243545"
                             data-entity-site-id="1204"
                             data-category="house"
                             data-type="rent"
                             data-reference="HVN243545"
                             data-ajax-url="/ContactForm/PortalNumbers/245267?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-hvn243545"
                             data-whatsapp-url="https://rply.link/l/ZghKs4fxqH"
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
                             data-entity-id="243545"
                             data-entity-site-id="1204"
                             data-category="house"
                             data-type="rent"
                             data-reference="HVN243545"
                             data-ajax-url="/ContactForm/PortalNumbers/245267?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-hvn243545"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="243545"
                             data-entity-site-id="1204"
                             data-category="house"
                             data-type="rent"
                             data-reference="HVN243545"
                             data-ajax-url="/ContactForm/PortalEmail/245267?entityType=listing&amp;listingurl=/for-rent/houses-hvn243545"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Mufakose 2 bed corehouse to let","description":"Mufakose near Magandanga Shops. 2 beds, lounge and kitchen available at $250 exclusive of bills. Available for occupation 1st of April 2026","url":"https://www.property.co.zw/for-rent/houses-hvn243545","identifier":"HVN243545","datePosted":"2026-03-26","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-hvn243545","availability":"http://schema.org/InStock","price":"250","priceCurrency":"USD","serialNumber":"HVN243545","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Heaven On Earth Real Estate","logo":"https://www.property.co.zw/uploadedfiles/60/ad/c2/60adc24f-59a1-4f15-a2bd-ff386a7b7f57.jpeg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"250","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":2,"numberOfBathroomsTotal":1,"floorSize":{"@type":"QuantitativeValue","value":1.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Mufakose","addressRegion":"Harare High Density","addressCountry":"Zimbabwe"},"name":"Mufakose 2 bed corehouse to let","description":"Mufakose near Magandanga Shops. 2 beds, lounge and kitchen available at $250 exclusive of bills. Available for occupation 1st of April 2026","image":["https://www.property.co.zw/uploadedfiles/0f/da/28/0fda283c-30f7-42dd-b2a1-df4d07d737a4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/9c/a2/c59ca291-c982-4bc4-9084-05d9cbab4505_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/23/cc/21/23cc219c-ee9f-48e2-88ac-76ac7c94d524_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0e/a6/44/0ea64476-8804-4d79-8b61-d0d20c5955bc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/70/cc/03/70cc0325-ed41-497a-a61c-3b5186b834f4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/71/ac/4d/71ac4dcf-ea10-4252-8540-eb8a2f7bd79a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9a/5f/5e/9a5f5e79-6087-41ed-a750-9e1f50df860f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/7d/40/7d7d40cb-1961-4d01-8d5b-33cae8876dce_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6c/d6/9e/6cd69e2b-0440-414c-a8c7-641975d366ab_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/0f/da/28/0fda283c-30f7-42dd-b2a1-df4d07d737a4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/9c/a2/c59ca291-c982-4bc4-9084-05d9cbab4505_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/23/cc/21/23cc219c-ee9f-48e2-88ac-76ac7c94d524_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0e/a6/44/0ea64476-8804-4d79-8b61-d0d20c5955bc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/70/cc/03/70cc0325-ed41-497a-a61c-3b5186b834f4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/71/ac/4d/71ac4dcf-ea10-4252-8540-eb8a2f7bd79a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9a/5f/5e/9a5f5e79-6087-41ed-a750-9e1f50df860f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/7d/40/7d7d40cb-1961-4d01-8d5b-33cae8876dce_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6c/d6/9e/6cd69e2b-0440-414c-a8c7-641975d366ab_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Heaven On Earth Real Estate","logo":"https://www.property.co.zw/uploadedfiles/60/ad/c2/60adc24f-59a1-4f15-a2bd-ff386a7b7f57.jpeg"}}
        </script>
</div>

<div id="239427" data-mandate-id="241149" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(239427)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

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

    
<div class="swiper-container swiper-239427 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="239427"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/townhouses-cami239427">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6e/ff/81/6eff8137-3084-422f-b67f-074cc2043af1_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f9/95/ef/f995efbc-d2f8-43a9-b9f5-770e75134f21_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/05/a0/0e/05a00e41-9eec-47d8-b954-a3febc4da6c0_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/34/e9/2a/34e92a6b-d34c-402e-9b58-ef5fa9a0c4b6_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a8/d1/98/a8d19848-fa20-4885-8a6b-807ae81bf5e4_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c0/ac/48/c0ac4835-ecf6-45bb-9fa7-5a1cde7ebf87_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c8/23/5d/c8235dc4-3bc1-4721-b04b-3fc14c9c0b0f_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7e/f2/18/7ef218ff-91ed-41b9-87e0-276ae6c275f8_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/54/65/3d/54653d49-e124-4ea2-9f07-9a562450202c_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/34/f7/75/34f7759d-fbd8-49ba-b450-68f8e50c9efa_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/55/73/ca/5573ca00-f649-4076-a0e6-184ebe36050e_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8c/78/18/8c7818e4-0633-4c71-b613-87096d67608f_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/56/1c/a6/561ca6c2-f08e-43e8-ae82-6efc8364284b_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b1/92/08/b192087c-de24-45ff-b1f5-30498bc5a974_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/bc/90/e0/bc90e0f2-c394-47f7-b3ca-9fa58ade1e39_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/22/7f/1b/227f1bf2-2b90-42a5-8d62-60870a25d3ee_thumbnail591.webp" alt="3 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Its Mabasa. Lewrod investments.

We have a vacant unit at 21 St Patrick&#39;s . Gated community with six units.

&#166; 3 bedroomed, fitted wardropes.
&#166; Fitted kitchen with gas stove.
&#166; Laundry machine.
&#166; Solar &amp; borehole tank 5,000ltrs.
&#166; Lawn and parking area x 2 cars.
&#166; High security , rapid response panic system and 2 x night security personnel. (reputable).
&#166; Swimming pool facility operational.
&#166; Gym unit.
&#166; About 5km to the Airport.
&#166; Private day/boarding school 400m away .(Forest Academy) cambridge.
&#166; Few kilometers from CBD.


            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-239427">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-239427">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="239427" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/camitel-pp" style="cursor: pointer;">
                        <img src="/uploadedfiles/3c/b9/d8/3cb9d832-5e57-47e2-ad79-b9f8c1ddb6bf.jpg" alt="Camitel" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Camitel" data-url="/estate-agents/camitel-pp" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/camitel-pp/mefort-chimhoga/22499" class="block text-center">Mefort Chimhoga</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/townhouses-cami239427">USD 1,200 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/townhouses-cami239427">
                        Hatfield modern complex with 6 units,borehole and swimming pool
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Hatfield, Harare South</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">3 Bedroom Townhouse Complex</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 3
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 2
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        400 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        3,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="239427"
                             data-entity-site-id="1734"
                             data-category="house"
                             data-type="rent"
                             data-reference="CAMI239427"
                             data-ajax-url="/ContactForm/PortalNumbers/241149?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/townhouses-cami239427"
                             data-whatsapp-url="https://rply.link/l/oxt8ncNlYD"
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
                             data-entity-id="239427"
                             data-entity-site-id="1734"
                             data-category="house"
                             data-type="rent"
                             data-reference="CAMI239427"
                             data-ajax-url="/ContactForm/PortalNumbers/241149?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/townhouses-cami239427"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="239427"
                             data-entity-site-id="1734"
                             data-category="house"
                             data-type="rent"
                             data-reference="CAMI239427"
                             data-ajax-url="/ContactForm/PortalEmail/241149?entityType=listing&amp;listingurl=/for-rent/townhouses-cami239427"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Hatfield modern complex with 6 units,borehole and swimming pool","description":"Its Mabasa. Lewrod investments.\r\n\r\nWe have a vacant unit at 21 St Patrick's . Gated community with six units.\r\n\r\n¦ 3 bedroomed, fitted wardropes.\r\n¦ Fitted kitchen with gas stove.\r\n¦ Laundry machine.\r\n¦ Solar & borehole tank 5,000ltrs.\r\n¦ Lawn and parking area x 2 cars.\r\n¦ High security , rapid response panic system and 2 x night security personnel. (reputable).\r\n¦ Swimming pool facility operational.\r\n¦ Gym unit.\r\n¦ About 5km to the Airport.\r\n¦ Private day/boarding school 400m away .(Forest Academy) cambridge.\r\n¦ Few kilometers from CBD.\r\n\r\n","url":"https://www.property.co.zw/for-rent/townhouses-cami239427","identifier":"CAMI239427","datePosted":"2026-02-01","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/townhouses-cami239427","availability":"http://schema.org/InStock","price":"1200","priceCurrency":"USD","serialNumber":"CAMI239427","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Camitel","logo":"https://www.property.co.zw/uploadedfiles/3c/b9/d8/3cb9d832-5e57-47e2-ad79-b9f8c1ddb6bf.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"1200","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":3,"numberOfBathroomsTotal":2,"floorSize":{"@type":"QuantitativeValue","value":400.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Hatfield","addressRegion":"Harare South","addressCountry":"Zimbabwe"},"name":"Hatfield modern complex with 6 units,borehole and swimming pool","description":"Its Mabasa. Lewrod investments.\r\n\r\nWe have a vacant unit at 21 St Patrick's . Gated community with six units.\r\n\r\n¦ 3 bedroomed, fitted wardropes.\r\n¦ Fitted kitchen with gas stove.\r\n¦ Laundry machine.\r\n¦ Solar & borehole tank 5,000ltrs.\r\n¦ Lawn and parking area x 2 cars.\r\n¦ High security , rapid response panic system and 2 x night security personnel. (reputable).\r\n¦ Swimming pool facility operational.\r\n¦ Gym unit.\r\n¦ About 5km to the Airport.\r\n¦ Private day/boarding school 400m away .(Forest Academy) cambridge.\r\n¦ Few kilometers from CBD.\r\n\r\n","image":["https://www.property.co.zw/uploadedfiles/6e/ff/81/6eff8137-3084-422f-b67f-074cc2043af1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f9/95/ef/f995efbc-d2f8-43a9-b9f5-770e75134f21_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/05/a0/0e/05a00e41-9eec-47d8-b954-a3febc4da6c0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/e9/2a/34e92a6b-d34c-402e-9b58-ef5fa9a0c4b6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a8/d1/98/a8d19848-fa20-4885-8a6b-807ae81bf5e4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c0/ac/48/c0ac4835-ecf6-45bb-9fa7-5a1cde7ebf87_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c8/23/5d/c8235dc4-3bc1-4721-b04b-3fc14c9c0b0f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/f2/18/7ef218ff-91ed-41b9-87e0-276ae6c275f8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/54/65/3d/54653d49-e124-4ea2-9f07-9a562450202c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/f7/75/34f7759d-fbd8-49ba-b450-68f8e50c9efa_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/55/73/ca/5573ca00-f649-4076-a0e6-184ebe36050e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8c/78/18/8c7818e4-0633-4c71-b613-87096d67608f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/56/1c/a6/561ca6c2-f08e-43e8-ae82-6efc8364284b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b1/92/08/b192087c-de24-45ff-b1f5-30498bc5a974_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bc/90/e0/bc90e0f2-c394-47f7-b3ca-9fa58ade1e39_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/22/7f/1b/227f1bf2-2b90-42a5-8d62-60870a25d3ee_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/6e/ff/81/6eff8137-3084-422f-b67f-074cc2043af1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f9/95/ef/f995efbc-d2f8-43a9-b9f5-770e75134f21_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/05/a0/0e/05a00e41-9eec-47d8-b954-a3febc4da6c0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/e9/2a/34e92a6b-d34c-402e-9b58-ef5fa9a0c4b6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a8/d1/98/a8d19848-fa20-4885-8a6b-807ae81bf5e4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c0/ac/48/c0ac4835-ecf6-45bb-9fa7-5a1cde7ebf87_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c8/23/5d/c8235dc4-3bc1-4721-b04b-3fc14c9c0b0f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/f2/18/7ef218ff-91ed-41b9-87e0-276ae6c275f8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/54/65/3d/54653d49-e124-4ea2-9f07-9a562450202c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/f7/75/34f7759d-fbd8-49ba-b450-68f8e50c9efa_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/55/73/ca/5573ca00-f649-4076-a0e6-184ebe36050e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8c/78/18/8c7818e4-0633-4c71-b613-87096d67608f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/56/1c/a6/561ca6c2-f08e-43e8-ae82-6efc8364284b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b1/92/08/b192087c-de24-45ff-b1f5-30498bc5a974_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bc/90/e0/bc90e0f2-c394-47f7-b3ca-9fa58ade1e39_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/22/7f/1b/227f1bf2-2b90-42a5-8d62-60870a25d3ee_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Camitel","logo":"https://www.property.co.zw/uploadedfiles/3c/b9/d8/3cb9d832-5e57-47e2-ad79-b9f8c1ddb6bf.jpg"}}
        </script>
</div>

<div id="249197" data-mandate-id="250917" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(249197)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #275e9e; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/chas-everitt" style="cursor: pointer;">
                        <img src="/uploadedfiles/4f/0b/a9/4f0ba961-8323-4f9e-9b40-21512e961c66.jpg" alt="CHAS EVERITT" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="CHAS EVERITT" data-url="/estate-agents/chas-everitt" />
                    </a>

                        <a href="/estate-agents/chas-everitt/florence-taderera/23125" class="vcenterFlex ">Florence Taderera</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-249197 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="249197"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-chas249197">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/51/7f/7c/517f7c08-c7e1-4b40-814e-55f765c88d47_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/38/eb/d3/38ebd31f-ac9b-4d9d-8511-8bbced9e820c_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/15/ff/3e/15ff3ee0-49f3-4074-8394-774432b1bb9c_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d1/15/17/d11517b7-b5f8-4a98-86b8-9aed12cbb2ec_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/47/a7/5e/47a75e4f-632f-460e-99fc-9c9361fba4f7_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1f/0e/8f/1f0e8f29-cb20-4952-826f-194815a7fb8b_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2d/9a/63/2d9a638e-0fce-4266-9ce1-75f7a19121c0_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/82/53/de/8253de68-48b7-4a06-8999-c4542a1e313e_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d4/8f/2b/d48f2b30-9ead-4240-9790-f391bee7bbdb_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8e/93/2f/8e932f5f-e5ef-44fc-ad37-9a8c854c1740_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9c/57/19/9c5719b4-1c77-4580-8cb2-f7f04acc91ca_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9f/71/ad/9f71adae-d41f-4f6e-a028-fb9ccedc79ab_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5a/f4/0b/5af40b89-b149-44aa-b7e7-591b54bb145c_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7e/d5/2c/7ed52c6e-910b-4e32-baca-e6d9a8387a87_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d1/43/3a/d1433af1-b987-4cc1-b85e-149d6a4b97f5_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/bb/66/95/bb669559-0250-4bd2-8333-4455ec7f522c_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e0/58/f9/e058f94b-283c-4c78-9eff-a9cd06ac40cc_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d3/23/1d/d3231dc4-51bf-459c-8178-889844828926_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/50/4a/af/504aaf5f-5ad7-4357-bf32-a015160aef61_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e9/99/5d/e9995d2d-ce49-4138-85b7-bded01eabb05_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0d/64/74/0d6474c9-18a5-493a-b7e6-f266e4f22152_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3f/30/dd/3f30dddc-2553-4312-99a5-f01e60ba2b97_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d7/67/0a/d7670a3d-b5d4-4e53-8476-dea63439c2ed_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c3/5d/34/c35d34be-fdc6-4509-9c75-8db61ec8a84c_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5b/60/82/5b608299-977f-429f-aeed-16d076872e06_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/58/bc/8e/58bc8e76-0d40-48c4-9c67-0cdaa064ece3_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Elegant Family Home for Rent in a Secure Exclusive Close
 Set within a prestigious and tranquil close with 24-hour security, this beautifully maintained family home offers the perfect blend of comfort, space, privacy, and convenience. 
 The home welcomes you through a spacious entrance hall and features a private study, as well as a guest bathroom with shower facilities. The main lounge, complete with a built-in bar, opens onto a charming veranda overlooking the garden, creating an ideal space for relaxation and entertaining. A formal dining room flows seamlessly into a modern fitted kitchen with a separate scullery and direct outdoor access. 
 Accommodation includes a private guest wing with an ensuite bathroom featuring both a shower and bathtub. A second family lounge opens onto a covered veranda through sliding doors, while three generously sized bedrooms with built-in cupboard...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-249197">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-249197">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            New
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/pxR5KTsHlxs" data-is-portrait="True" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="rent"
                     data-category="house"
                     data-entityId="249197" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #275e9e; ">
                <div class="w-full">
                    <a href="/estate-agents/chas-everitt" style="cursor: pointer;">
                        <img src="/uploadedfiles/4f/0b/a9/4f0ba961-8323-4f9e-9b40-21512e961c66.jpg" alt="CHAS EVERITT" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="CHAS EVERITT" data-url="/estate-agents/chas-everitt" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/chas-everitt/florence-taderera/23125" class="block text-center">Florence Taderera</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-chas249197">USD 3,500 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-chas249197">
                        Four Bedroomed House In Borrowdale 
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Borrowdale, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">4 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 4
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 4
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        500 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        2,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="249197"
                             data-entity-site-id="1765"
                             data-category="house"
                             data-type="rent"
                             data-reference="CHAS249197"
                             data-ajax-url="/ContactForm/PortalNumbers/250917?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-chas249197"
                             data-whatsapp-url="https://rply.link/l/ILmGtKQUta"
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
                             data-entity-id="249197"
                             data-entity-site-id="1765"
                             data-category="house"
                             data-type="rent"
                             data-reference="CHAS249197"
                             data-ajax-url="/ContactForm/PortalNumbers/250917?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-chas249197"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="249197"
                             data-entity-site-id="1765"
                             data-category="house"
                             data-type="rent"
                             data-reference="CHAS249197"
                             data-ajax-url="/ContactForm/PortalEmail/250917?entityType=listing&amp;listingurl=/for-rent/houses-chas249197"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Four Bedroomed House In Borrowdale ","description":"Elegant Family Home for Rent in a Secure Exclusive Close\r\n Set within a prestigious and tranquil close with 24-hour security, this beautifully maintained family home offers the perfect blend of comfort, space, privacy, and convenience. \r\n The home welcomes you through a spacious entrance hall and features a private study, as well as a guest bathroom with shower facilities. The main lounge, complete with a built-in bar, opens onto a charming veranda overlooking the garden, creating an ideal space for relaxation and entertaining. A formal dining room flows seamlessly into a modern fitted kitchen with a separate scullery and direct outdoor access. \r\n Accommodation includes a private guest wing with an ensuite bathroom featuring both a shower and bathtub. A second family lounge opens onto a covered veranda through sliding doors, while three generously sized bedrooms with built-in cupboard...","url":"https://www.property.co.zw/for-rent/houses-chas249197","identifier":"CHAS249197","datePosted":"2026-06-12","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-chas249197","availability":"http://schema.org/InStock","price":"3500","priceCurrency":"USD","serialNumber":"CHAS249197","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"CHAS EVERITT","logo":"https://www.property.co.zw/uploadedfiles/4f/0b/a9/4f0ba961-8323-4f9e-9b40-21512e961c66.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"3500","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":4,"numberOfBathroomsTotal":4,"floorSize":{"@type":"QuantitativeValue","value":500.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Borrowdale","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Four Bedroomed House In Borrowdale ","description":"Elegant Family Home for Rent in a Secure Exclusive Close\r\n Set within a prestigious and tranquil close with 24-hour security, this beautifully maintained family home offers the perfect blend of comfort, space, privacy, and convenience. \r\n The home welcomes you through a spacious entrance hall and features a private study, as well as a guest bathroom with shower facilities. The main lounge, complete with a built-in bar, opens onto a charming veranda overlooking the garden, creating an ideal space for relaxation and entertaining. A formal dining room flows seamlessly into a modern fitted kitchen with a separate scullery and direct outdoor access. \r\n Accommodation includes a private guest wing with an ensuite bathroom featuring both a shower and bathtub. A second family lounge opens onto a covered veranda through sliding doors, while three generously sized bedrooms with built-in cupboard...","image":["https://www.property.co.zw/uploadedfiles/51/7f/7c/517f7c08-c7e1-4b40-814e-55f765c88d47_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/38/eb/d3/38ebd31f-ac9b-4d9d-8511-8bbced9e820c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/ff/3e/15ff3ee0-49f3-4074-8394-774432b1bb9c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d1/15/17/d11517b7-b5f8-4a98-86b8-9aed12cbb2ec_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/47/a7/5e/47a75e4f-632f-460e-99fc-9c9361fba4f7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1f/0e/8f/1f0e8f29-cb20-4952-826f-194815a7fb8b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2d/9a/63/2d9a638e-0fce-4266-9ce1-75f7a19121c0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/82/53/de/8253de68-48b7-4a06-8999-c4542a1e313e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d4/8f/2b/d48f2b30-9ead-4240-9790-f391bee7bbdb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8e/93/2f/8e932f5f-e5ef-44fc-ad37-9a8c854c1740_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9c/57/19/9c5719b4-1c77-4580-8cb2-f7f04acc91ca_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9f/71/ad/9f71adae-d41f-4f6e-a028-fb9ccedc79ab_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5a/f4/0b/5af40b89-b149-44aa-b7e7-591b54bb145c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/d5/2c/7ed52c6e-910b-4e32-baca-e6d9a8387a87_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d1/43/3a/d1433af1-b987-4cc1-b85e-149d6a4b97f5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bb/66/95/bb669559-0250-4bd2-8333-4455ec7f522c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e0/58/f9/e058f94b-283c-4c78-9eff-a9cd06ac40cc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d3/23/1d/d3231dc4-51bf-459c-8178-889844828926_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/50/4a/af/504aaf5f-5ad7-4357-bf32-a015160aef61_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e9/99/5d/e9995d2d-ce49-4138-85b7-bded01eabb05_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0d/64/74/0d6474c9-18a5-493a-b7e6-f266e4f22152_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3f/30/dd/3f30dddc-2553-4312-99a5-f01e60ba2b97_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/67/0a/d7670a3d-b5d4-4e53-8476-dea63439c2ed_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c3/5d/34/c35d34be-fdc6-4509-9c75-8db61ec8a84c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5b/60/82/5b608299-977f-429f-aeed-16d076872e06_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/58/bc/8e/58bc8e76-0d40-48c4-9c67-0cdaa064ece3_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/51/7f/7c/517f7c08-c7e1-4b40-814e-55f765c88d47_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/38/eb/d3/38ebd31f-ac9b-4d9d-8511-8bbced9e820c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/ff/3e/15ff3ee0-49f3-4074-8394-774432b1bb9c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d1/15/17/d11517b7-b5f8-4a98-86b8-9aed12cbb2ec_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/47/a7/5e/47a75e4f-632f-460e-99fc-9c9361fba4f7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1f/0e/8f/1f0e8f29-cb20-4952-826f-194815a7fb8b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2d/9a/63/2d9a638e-0fce-4266-9ce1-75f7a19121c0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/82/53/de/8253de68-48b7-4a06-8999-c4542a1e313e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d4/8f/2b/d48f2b30-9ead-4240-9790-f391bee7bbdb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8e/93/2f/8e932f5f-e5ef-44fc-ad37-9a8c854c1740_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9c/57/19/9c5719b4-1c77-4580-8cb2-f7f04acc91ca_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9f/71/ad/9f71adae-d41f-4f6e-a028-fb9ccedc79ab_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5a/f4/0b/5af40b89-b149-44aa-b7e7-591b54bb145c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/d5/2c/7ed52c6e-910b-4e32-baca-e6d9a8387a87_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d1/43/3a/d1433af1-b987-4cc1-b85e-149d6a4b97f5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bb/66/95/bb669559-0250-4bd2-8333-4455ec7f522c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e0/58/f9/e058f94b-283c-4c78-9eff-a9cd06ac40cc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d3/23/1d/d3231dc4-51bf-459c-8178-889844828926_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/50/4a/af/504aaf5f-5ad7-4357-bf32-a015160aef61_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e9/99/5d/e9995d2d-ce49-4138-85b7-bded01eabb05_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0d/64/74/0d6474c9-18a5-493a-b7e6-f266e4f22152_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3f/30/dd/3f30dddc-2553-4312-99a5-f01e60ba2b97_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d7/67/0a/d7670a3d-b5d4-4e53-8476-dea63439c2ed_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c3/5d/34/c35d34be-fdc6-4509-9c75-8db61ec8a84c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5b/60/82/5b608299-977f-429f-aeed-16d076872e06_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/58/bc/8e/58bc8e76-0d40-48c4-9c67-0cdaa064ece3_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"CHAS EVERITT","logo":"https://www.property.co.zw/uploadedfiles/4f/0b/a9/4f0ba961-8323-4f9e-9b40-21512e961c66.jpg"}}
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


<div id="127760" data-mandate-id="129348" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(127760)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #16659c; background-color: #16659c; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/private" style="cursor: pointer;">
                        <img src="/uploadedfiles/78/7c/40/787c4031-0eff-4c1e-abbf-9ec59f5e7362.webp" alt="Private" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Private" data-url="/estate-agents/private" />
                    </a>

                        <a href="/estate-agents/private/amy-saunderson-meyer/26546" class="vcenterFlex ">Amy Saunderson-Meyer</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-127760 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="127760"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-prv11001">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8c/7b/0f/8c7b0f1e-2502-43d3-86e6-66050c782cca_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d6/bb/2b/d6bb2b3c-9f0a-4608-a8ab-8c83e570ae60_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/91/63/d1/9163d182-56fe-4b4d-9f14-2271fe0f473d_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/84/54/c7/8454c753-e1fb-43da-affd-2fd46228dd47_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e7/ce/d1/e7ced177-70b0-4a3b-b4a9-af1f9dd414c5_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8b/27/ac/8b27acfd-8e17-483f-bd9c-1cd566ec56cf_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7b/61/ed/7b61ed1c-e5cb-460f-8a82-2062673c7011_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/df/ed/cb/dfedcbee-8bf5-4b64-9b78-e5151d70a028_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/33/03/8a/33038ae6-8724-4318-ac05-d8f1429f62c3_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c5/41/ea/c541eac1-c1bc-499b-9c39-517cdf3cb372_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/79/f5/31/79f53179-5ff4-4535-8a90-019b84cee3a8_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/41/0f/b9/410fb978-28c6-47d3-abf6-884fe71ae64d_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/15/b3/df/15b3dfbf-d014-4df1-bf44-844aac59d3cb_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5f/6c/2f/5f6c2fea-d894-4e21-85f3-0a6cc827fb20_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8f/00/91/8f00911b-3c09-4347-bcef-02f762b90089_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/bc/a9/bc/bca9bcab-66de-472c-8307-83f055db566b_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4f/80/70/4f8070a3-71fa-4599-aec3-5e9885c5cdb2_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d1/9f/3d/d19f3dc0-8e9d-4001-8d43-b75a4c29738a_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c3/87/3d/c3873d13-873e-4791-a94b-6d9c45512f0f_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/26/7b/65/267b65ab-0cfc-4300-a508-e1f76e3d340a_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8b/a6/0d/8ba60d11-d05e-44b8-a88a-000ccb1a5f8a_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2f/99/65/2f99651c-5eb7-4ae4-a392-64fb3fd9a1e2_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e2/26/57/e226577e-7985-4adc-af3c-eb325be43e13_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0c/a4/84/0ca4843b-0a7b-453c-aa4f-161a9bd35f0f_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/39/74/18/3974186e-02b8-418b-8642-c1448bb1eaba_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a0/bc/0c/a0bc0c73-8651-422e-8bdf-971c732dc9ce_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c3/50/7d/c3507d25-c294-41cf-a721-71b484bbcc02_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0b/d4/65/0bd46524-9c68-46f8-b98a-17858945da96_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7d/aa/a1/7daaa126-bb82-4111-b742-7910a0275b81_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/46/34/56/46345678-0d8f-41d8-8af1-4658ccfc7e7a_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2e/46/90/2e469029-a777-4d05-ba6d-3fc40516f027_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/75/8f/6f/758f6f05-2798-4756-af0f-742806d60636_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/04/c3/e4/04c3e4fb-c411-4d97-9513-7702add7889c_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d6/15/fd/d615fd62-e609-404e-89e0-dac6391ee63a_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                4 bedroom wilderness home. 2 bedrooms with ensuite bathrooms. 3rd smaller office or kids room. 4th bedroom Garage conversion ensuite. Guest loo with shower. 
Open plan living space with separate scullery/laundry/pantry.
Large covered veranda.
Plunge pool with rolling sunset deck cover.
Lock-up garage, store room. 3 car shade port. Reliable drinking water from a local private borehole system. Rain water harvesting.
Wibroniks fibre speed internet, and liquid fibre running past the property. Electric fence, electric gate. Burglar bars secure the bedroom wing.
Solar and inverter.
Community run security system with booms, patrols and radio response.
Staff quarters.
Tar road door to door.
3 acres of indigenous woodland garden. Beautiful walks and rides right from the house. Live in paradise 15 minutes from the city. Miombo Mountain lodge and Mazowe botanical reserve on your doorstep.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-127760">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-127760">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            Reduced
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="127760" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #16659c; background-color: #16659c; ">
                <div class="w-full">
                    <a href="/estate-agents/private" style="cursor: pointer;">
                        <img src="/uploadedfiles/78/7c/40/787c4031-0eff-4c1e-abbf-9ec59f5e7362.webp" alt="Private" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Private" data-url="/estate-agents/private" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/private/amy-saunderson-meyer/26546" class="block text-center">Amy Saunderson-Meyer</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-prv11001">USD 2,200 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-prv11001">
                        Panoramic views in Christon Bank. Paradise 15 mins from Harare.
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Christon Bank</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">4 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 4
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 4
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        400 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        12,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="127760"
                             data-entity-site-id="80"
                             data-category="house"
                             data-type="rent"
                             data-reference="PRV11001"
                             data-ajax-url="/ContactForm/PortalNumbers/129348?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-prv11001"
                             data-whatsapp-url="https://rply.link/l/JEiTTueLpc"
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
                             data-entity-id="127760"
                             data-entity-site-id="80"
                             data-category="house"
                             data-type="rent"
                             data-reference="PRV11001"
                             data-ajax-url="/ContactForm/PortalNumbers/129348?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-prv11001"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="127760"
                             data-entity-site-id="80"
                             data-category="house"
                             data-type="rent"
                             data-reference="PRV11001"
                             data-ajax-url="/ContactForm/PortalEmail/129348?entityType=listing&amp;listingurl=/for-rent/houses-prv11001"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Panoramic views in Christon Bank. Paradise 15 mins from Harare.","description":"4 bedroom wilderness home. 2 bedrooms with ensuite bathrooms. 3rd smaller office or kids room. 4th bedroom Garage conversion ensuite. Guest loo with shower. \r\nOpen plan living space with separate scullery/laundry/pantry.\r\nLarge covered veranda.\r\nPlunge pool with rolling sunset deck cover.\r\nLock-up garage, store room. 3 car shade port. Reliable drinking water from a local private borehole system. Rain water harvesting.\r\nWibroniks fibre speed internet, and liquid fibre running past the property. Electric fence, electric gate. Burglar bars secure the bedroom wing.\r\nSolar and inverter.\r\nCommunity run security system with booms, patrols and radio response.\r\nStaff quarters.\r\nTar road door to door.\r\n3 acres of indigenous woodland garden. Beautiful walks and rides right from the house. Live in paradise 15 minutes from the city. Miombo Mountain lodge and Mazowe botanical reserve on your doorstep.","url":"https://www.property.co.zw/for-rent/houses-prv11001","identifier":"PRV11001","datePosted":"2021-07-04","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-prv11001","availability":"http://schema.org/InStock","price":"2200","priceCurrency":"USD","serialNumber":"PRV11001","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Private","logo":"https://www.property.co.zw/uploadedfiles/78/7c/40/787c4031-0eff-4c1e-abbf-9ec59f5e7362.webp"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"2200","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":4,"numberOfBathroomsTotal":4,"floorSize":{"@type":"QuantitativeValue","value":400.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Christon Bank","addressRegion":"Christon Bank","addressCountry":"Zimbabwe"},"name":"Panoramic views in Christon Bank. Paradise 15 mins from Harare.","description":"4 bedroom wilderness home. 2 bedrooms with ensuite bathrooms. 3rd smaller office or kids room. 4th bedroom Garage conversion ensuite. Guest loo with shower. \r\nOpen plan living space with separate scullery/laundry/pantry.\r\nLarge covered veranda.\r\nPlunge pool with rolling sunset deck cover.\r\nLock-up garage, store room. 3 car shade port. Reliable drinking water from a local private borehole system. Rain water harvesting.\r\nWibroniks fibre speed internet, and liquid fibre running past the property. Electric fence, electric gate. Burglar bars secure the bedroom wing.\r\nSolar and inverter.\r\nCommunity run security system with booms, patrols and radio response.\r\nStaff quarters.\r\nTar road door to door.\r\n3 acres of indigenous woodland garden. Beautiful walks and rides right from the house. Live in paradise 15 minutes from the city. Miombo Mountain lodge and Mazowe botanical reserve on your doorstep.","image":["https://www.property.co.zw/uploadedfiles/8c/7b/0f/8c7b0f1e-2502-43d3-86e6-66050c782cca_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/bb/2b/d6bb2b3c-9f0a-4608-a8ab-8c83e570ae60_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/91/63/d1/9163d182-56fe-4b4d-9f14-2271fe0f473d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/84/54/c7/8454c753-e1fb-43da-affd-2fd46228dd47_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e7/ce/d1/e7ced177-70b0-4a3b-b4a9-af1f9dd414c5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8b/27/ac/8b27acfd-8e17-483f-bd9c-1cd566ec56cf_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7b/61/ed/7b61ed1c-e5cb-460f-8a82-2062673c7011_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/df/ed/cb/dfedcbee-8bf5-4b64-9b78-e5151d70a028_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/33/03/8a/33038ae6-8724-4318-ac05-d8f1429f62c3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/41/ea/c541eac1-c1bc-499b-9c39-517cdf3cb372_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/79/f5/31/79f53179-5ff4-4535-8a90-019b84cee3a8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/41/0f/b9/410fb978-28c6-47d3-abf6-884fe71ae64d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/b3/df/15b3dfbf-d014-4df1-bf44-844aac59d3cb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5f/6c/2f/5f6c2fea-d894-4e21-85f3-0a6cc827fb20_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/00/91/8f00911b-3c09-4347-bcef-02f762b90089_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bc/a9/bc/bca9bcab-66de-472c-8307-83f055db566b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4f/80/70/4f8070a3-71fa-4599-aec3-5e9885c5cdb2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d1/9f/3d/d19f3dc0-8e9d-4001-8d43-b75a4c29738a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c3/87/3d/c3873d13-873e-4791-a94b-6d9c45512f0f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/26/7b/65/267b65ab-0cfc-4300-a508-e1f76e3d340a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8b/a6/0d/8ba60d11-d05e-44b8-a88a-000ccb1a5f8a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/99/65/2f99651c-5eb7-4ae4-a392-64fb3fd9a1e2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e2/26/57/e226577e-7985-4adc-af3c-eb325be43e13_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0c/a4/84/0ca4843b-0a7b-453c-aa4f-161a9bd35f0f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/39/74/18/3974186e-02b8-418b-8642-c1448bb1eaba_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a0/bc/0c/a0bc0c73-8651-422e-8bdf-971c732dc9ce_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c3/50/7d/c3507d25-c294-41cf-a721-71b484bbcc02_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/d4/65/0bd46524-9c68-46f8-b98a-17858945da96_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/aa/a1/7daaa126-bb82-4111-b742-7910a0275b81_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/46/34/56/46345678-0d8f-41d8-8af1-4658ccfc7e7a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2e/46/90/2e469029-a777-4d05-ba6d-3fc40516f027_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/75/8f/6f/758f6f05-2798-4756-af0f-742806d60636_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/04/c3/e4/04c3e4fb-c411-4d97-9513-7702add7889c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/15/fd/d615fd62-e609-404e-89e0-dac6391ee63a_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/8c/7b/0f/8c7b0f1e-2502-43d3-86e6-66050c782cca_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/bb/2b/d6bb2b3c-9f0a-4608-a8ab-8c83e570ae60_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/91/63/d1/9163d182-56fe-4b4d-9f14-2271fe0f473d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/84/54/c7/8454c753-e1fb-43da-affd-2fd46228dd47_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e7/ce/d1/e7ced177-70b0-4a3b-b4a9-af1f9dd414c5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8b/27/ac/8b27acfd-8e17-483f-bd9c-1cd566ec56cf_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7b/61/ed/7b61ed1c-e5cb-460f-8a82-2062673c7011_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/df/ed/cb/dfedcbee-8bf5-4b64-9b78-e5151d70a028_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/33/03/8a/33038ae6-8724-4318-ac05-d8f1429f62c3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c5/41/ea/c541eac1-c1bc-499b-9c39-517cdf3cb372_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/79/f5/31/79f53179-5ff4-4535-8a90-019b84cee3a8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/41/0f/b9/410fb978-28c6-47d3-abf6-884fe71ae64d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/b3/df/15b3dfbf-d014-4df1-bf44-844aac59d3cb_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5f/6c/2f/5f6c2fea-d894-4e21-85f3-0a6cc827fb20_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/00/91/8f00911b-3c09-4347-bcef-02f762b90089_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bc/a9/bc/bca9bcab-66de-472c-8307-83f055db566b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4f/80/70/4f8070a3-71fa-4599-aec3-5e9885c5cdb2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d1/9f/3d/d19f3dc0-8e9d-4001-8d43-b75a4c29738a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c3/87/3d/c3873d13-873e-4791-a94b-6d9c45512f0f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/26/7b/65/267b65ab-0cfc-4300-a508-e1f76e3d340a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8b/a6/0d/8ba60d11-d05e-44b8-a88a-000ccb1a5f8a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/99/65/2f99651c-5eb7-4ae4-a392-64fb3fd9a1e2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e2/26/57/e226577e-7985-4adc-af3c-eb325be43e13_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0c/a4/84/0ca4843b-0a7b-453c-aa4f-161a9bd35f0f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/39/74/18/3974186e-02b8-418b-8642-c1448bb1eaba_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a0/bc/0c/a0bc0c73-8651-422e-8bdf-971c732dc9ce_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c3/50/7d/c3507d25-c294-41cf-a721-71b484bbcc02_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/d4/65/0bd46524-9c68-46f8-b98a-17858945da96_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7d/aa/a1/7daaa126-bb82-4111-b742-7910a0275b81_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/46/34/56/46345678-0d8f-41d8-8af1-4658ccfc7e7a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2e/46/90/2e469029-a777-4d05-ba6d-3fc40516f027_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/75/8f/6f/758f6f05-2798-4756-af0f-742806d60636_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/04/c3/e4/04c3e4fb-c411-4d97-9513-7702add7889c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/15/fd/d615fd62-e609-404e-89e0-dac6391ee63a_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Private","logo":"https://www.property.co.zw/uploadedfiles/78/7c/40/787c4031-0eff-4c1e-abbf-9ec59f5e7362.webp"}}
        </script>
</div>

<div id="247076" data-mandate-id="248798" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(247076)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/golden-will" style="cursor: pointer;">
                        <img src="/uploadedfiles/26/cd/bb/26cdbb8c-6cd8-461b-9675-654c870babc4.jpg" alt="GoldenWill Real Estate" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="GoldenWill Real Estate" data-url="/estate-agents/golden-will" />
                    </a>

                        <a href="/estate-agents/golden-will/rachel-mutyavaviri/18889" class="vcenterFlex ">Rachel Mutyavaviri</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-247076 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="247076"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/townhouses-glre247076">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6b/c1/23/6bc1234f-1e34-4b86-b36d-5b3bb220a944_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/73/4b/6b/734b6ba2-5b80-43da-beaf-4e8d49369731_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1b/54/2b/1b542bfe-9fbe-40ca-b7c5-e03ef875112f_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/79/cd/01/79cd01bc-1fcb-4ef5-be97-77011c3a4d6b_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3b/5a/c3/3b5ac315-8d00-4057-a445-b85f14936a50_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/36/5c/f8/365cf878-be4f-443b-8554-6c478a7b9f8d_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4d/1e/ae/4d1eae38-2d2d-42d5-b333-f0607fa5c62f_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/88/ce/82/88ce8201-6ed5-474c-8823-326765be2dd5_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ba/ea/c1/baeac161-336b-4141-9aec-319eab3f2475_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6e/d0/93/6ed09319-f653-412c-b6d5-9cc1d14336fd_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f6/41/a2/f641a2cb-719a-4ebb-8a85-f6bcb53da7d4_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/76/41/98/764198c0-df54-4fb3-81f2-dd87a2f9a6ec_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8f/24/de/8f24de02-47c2-4013-92aa-c7384e804a90_thumbnail591.webp" alt="4 Bedroom Townhouse Complex" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Contemporary 4-bedroom, 4-bathroom townhouse in a secure New Marlborough complex — ideal for family living or professionals. Set on a 450 m&#178; stand with a 300 m&#178; building footprint, this two-storey unit sits in a neatly landscaped compound visible in the photos: paved driveway, manicured front lawn, decorative gravel beds and a high perimeter wall for privacy. The fa&#231;ade features clean grey finishes and private balconies with stainless-steel railings that overlook the garden and communal parking area. Inside you’ll enjoy generous, light-filled living spaces, ensuite bathrooms for privacy, modern kitchen space and thoughtful storage. Reliable water supply is guaranteed by an on-site borehole, reducing dependence on municipal supply. Secure, well-maintained and conveniently located in Harare West, this townhouse offers comfortable, low-maintenance living in a stylish modern setting. Cont...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-247076">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-247076">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/lQGgGuSsXfM" data-is-portrait="True" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="rent"
                     data-category="house"
                     data-entityId="247076" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/golden-will" style="cursor: pointer;">
                        <img src="/uploadedfiles/26/cd/bb/26cdbb8c-6cd8-461b-9675-654c870babc4.jpg" alt="GoldenWill Real Estate" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="GoldenWill Real Estate" data-url="/estate-agents/golden-will" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/golden-will/rachel-mutyavaviri/18889" class="block text-center">Rachel Mutyavaviri</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/townhouses-glre247076">USD 1,300 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/townhouses-glre247076">
                        Modern 4BR Townhouse Complex w/ Borehole — New Marlborough
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">New Marlborough, Harare West</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">4 Bedroom Townhouse Complex</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 4
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 4
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        300 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        450 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="247076"
                             data-entity-site-id="1664"
                             data-category="house"
                             data-type="rent"
                             data-reference="GLRE247076"
                             data-ajax-url="/ContactForm/PortalNumbers/248798?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/townhouses-glre247076"
                             data-whatsapp-url="https://rply.link/l/YF6jD3SbDL"
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
                             data-entity-id="247076"
                             data-entity-site-id="1664"
                             data-category="house"
                             data-type="rent"
                             data-reference="GLRE247076"
                             data-ajax-url="/ContactForm/PortalNumbers/248798?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/townhouses-glre247076"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="247076"
                             data-entity-site-id="1664"
                             data-category="house"
                             data-type="rent"
                             data-reference="GLRE247076"
                             data-ajax-url="/ContactForm/PortalEmail/248798?entityType=listing&amp;listingurl=/for-rent/townhouses-glre247076"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Modern 4BR Townhouse Complex w/ Borehole — New Marlborough","description":"Contemporary 4-bedroom, 4-bathroom townhouse in a secure New Marlborough complex — ideal for family living or professionals. Set on a 450 m² stand with a 300 m² building footprint, this two-storey unit sits in a neatly landscaped compound visible in the photos: paved driveway, manicured front lawn, decorative gravel beds and a high perimeter wall for privacy. The façade features clean grey finishes and private balconies with stainless-steel railings that overlook the garden and communal parking area. Inside you’ll enjoy generous, light-filled living spaces, ensuite bathrooms for privacy, modern kitchen space and thoughtful storage. Reliable water supply is guaranteed by an on-site borehole, reducing dependence on municipal supply. Secure, well-maintained and conveniently located in Harare West, this townhouse offers comfortable, low-maintenance living in a stylish modern setting. Cont...","url":"https://www.property.co.zw/for-rent/townhouses-glre247076","identifier":"GLRE247076","datePosted":"2026-05-15","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/townhouses-glre247076","availability":"http://schema.org/InStock","price":"1300","priceCurrency":"USD","serialNumber":"GLRE247076","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"GoldenWill Real Estate","logo":"https://www.property.co.zw/uploadedfiles/26/cd/bb/26cdbb8c-6cd8-461b-9675-654c870babc4.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"1300","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":4,"numberOfBathroomsTotal":4,"floorSize":{"@type":"QuantitativeValue","value":300.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"New Marlborough","addressRegion":"Harare West","addressCountry":"Zimbabwe"},"name":"Modern 4BR Townhouse Complex w/ Borehole — New Marlborough","description":"Contemporary 4-bedroom, 4-bathroom townhouse in a secure New Marlborough complex — ideal for family living or professionals. Set on a 450 m² stand with a 300 m² building footprint, this two-storey unit sits in a neatly landscaped compound visible in the photos: paved driveway, manicured front lawn, decorative gravel beds and a high perimeter wall for privacy. The façade features clean grey finishes and private balconies with stainless-steel railings that overlook the garden and communal parking area. Inside you’ll enjoy generous, light-filled living spaces, ensuite bathrooms for privacy, modern kitchen space and thoughtful storage. Reliable water supply is guaranteed by an on-site borehole, reducing dependence on municipal supply. Secure, well-maintained and conveniently located in Harare West, this townhouse offers comfortable, low-maintenance living in a stylish modern setting. Cont...","image":["https://www.property.co.zw/uploadedfiles/6b/c1/23/6bc1234f-1e34-4b86-b36d-5b3bb220a944_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/73/4b/6b/734b6ba2-5b80-43da-beaf-4e8d49369731_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/54/2b/1b542bfe-9fbe-40ca-b7c5-e03ef875112f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/79/cd/01/79cd01bc-1fcb-4ef5-be97-77011c3a4d6b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3b/5a/c3/3b5ac315-8d00-4057-a445-b85f14936a50_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/36/5c/f8/365cf878-be4f-443b-8554-6c478a7b9f8d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4d/1e/ae/4d1eae38-2d2d-42d5-b333-f0607fa5c62f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/88/ce/82/88ce8201-6ed5-474c-8823-326765be2dd5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ba/ea/c1/baeac161-336b-4141-9aec-319eab3f2475_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6e/d0/93/6ed09319-f653-412c-b6d5-9cc1d14336fd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f6/41/a2/f641a2cb-719a-4ebb-8a85-f6bcb53da7d4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/41/98/764198c0-df54-4fb3-81f2-dd87a2f9a6ec_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/24/de/8f24de02-47c2-4013-92aa-c7384e804a90_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/6b/c1/23/6bc1234f-1e34-4b86-b36d-5b3bb220a944_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/73/4b/6b/734b6ba2-5b80-43da-beaf-4e8d49369731_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/54/2b/1b542bfe-9fbe-40ca-b7c5-e03ef875112f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/79/cd/01/79cd01bc-1fcb-4ef5-be97-77011c3a4d6b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3b/5a/c3/3b5ac315-8d00-4057-a445-b85f14936a50_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/36/5c/f8/365cf878-be4f-443b-8554-6c478a7b9f8d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4d/1e/ae/4d1eae38-2d2d-42d5-b333-f0607fa5c62f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/88/ce/82/88ce8201-6ed5-474c-8823-326765be2dd5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ba/ea/c1/baeac161-336b-4141-9aec-319eab3f2475_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6e/d0/93/6ed09319-f653-412c-b6d5-9cc1d14336fd_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f6/41/a2/f641a2cb-719a-4ebb-8a85-f6bcb53da7d4_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/41/98/764198c0-df54-4fb3-81f2-dd87a2f9a6ec_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/24/de/8f24de02-47c2-4013-92aa-c7384e804a90_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"GoldenWill Real Estate","logo":"https://www.property.co.zw/uploadedfiles/26/cd/bb/26cdbb8c-6cd8-461b-9675-654c870babc4.jpg"}}
        </script>
</div>

<div id="248110" data-mandate-id="249832" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(248110)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #d6a24c; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/all-iance" style="cursor: pointer;">
                        <img src="/uploadedfiles/e2/69/6e/e2696e3d-b6ff-490a-ac1a-933900b39eec.png" alt="Alliance Properties" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Alliance Properties" data-url="/estate-agents/all-iance" />
                    </a>

                        <a href="/estate-agents/all-iance/letwin-nyamugafata/25001" class="vcenterFlex ">Letwin Nyamugafata</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-248110 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="248110"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-aalp248110">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/56/31/09/56310940-3584-472c-9209-15c143430bb0_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6b/c6/a1/6bc6a1c7-a43b-48d5-9b16-6d942d41b019_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/83/57/3d/83573d6b-15c2-4927-9f59-47a3fe2e848b_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e3/02/a5/e302a576-c256-47e1-9806-91659b2e62c3_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5f/fa/aa/5ffaaab9-d17c-4a6a-a110-09bf72aa1ede_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/62/59/bb/6259bbc5-fd62-4b6d-bb97-c59d1fcfabb6_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/85/00/e6/8500e63d-49c7-40be-889c-41029d975e0b_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2c/bb/af/2cbbaf85-06ba-437e-af0f-749bdde37d0d_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/61/29/cb/6129cba9-2f64-4e2a-b04a-e7b688b05793_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4d/90/c9/4d90c91d-85cc-4999-9c2e-dbaeacf9c77f_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/31/93/1f/31931f62-8c95-4db8-8851-5a09836ca07f_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/57/49/cb/5749cb87-c1e0-4573-b2b5-df5336b19087_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/2f/25/bf/2f25bf70-7d43-435e-a13c-fe120acd0c74_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4c/30/31/4c3031e2-dae6-4f48-8c65-93fdd2b20116_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/80/c1/60/80c160ff-55d8-4cc2-ab1b-e177eebaf537_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/86/a2/09/86a20955-1e7f-4d2d-8751-0bfc1401c5e9_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/26/38/f6/2638f61b-89f2-4811-a75f-3438f8827d35_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/03/6c/b7/036cb73a-6d15-4573-822a-907e291f6608_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/34/25/0a/34250a88-b986-44cc-b72b-0340fb976010_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/94/18/8b/94188b49-65e8-485e-9c3a-665bee987160_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/70/0c/20/700c20e7-1211-463a-8154-20f0be30e9c6_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d6/05/b4/d605b478-6b90-4bf6-b73c-bcee2d2c2312_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/99/dd/29/99dd29b7-4840-40ab-bb41-07140a20bf82_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b4/50/72/b45072e4-c60c-4b7a-b5dc-c3b27da2dc12_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/17/bb/ee/17bbee8e-3098-418c-aac3-ca63752b5ff6_thumbnail591.webp" alt="4 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                The Property sits right opposite Westgate Shopping Mall – quiet suburb, close to amenities, popular with families and NGOs. 

Main features 4 beds, main en-suite, 1 lounge, dining, fitted modern kitchen + scullery + pantry, 2 lock-up garage, borehole and council water .
Walled with manual gate, staff quarters, 5000L tank,   on a large yard.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-248110">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-248110">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="248110" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #d6a24c; ">
                <div class="w-full">
                    <a href="/estate-agents/all-iance" style="cursor: pointer;">
                        <img src="/uploadedfiles/e2/69/6e/e2696e3d-b6ff-490a-ac1a-933900b39eec.png" alt="Alliance Properties" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Alliance Properties" data-url="/estate-agents/all-iance" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/all-iance/letwin-nyamugafata/25001" class="block text-center">Letwin Nyamugafata</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-aalp248110">USD 1,500 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-aalp248110">
                        4-Bedroom Morden House for Rent  Bluffhill Opposite American Embassy
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Bluff Hill, Harare West</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">4 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 4
                    </span>
                
                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        390 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        4,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="248110"
                             data-entity-site-id="1799"
                             data-category="house"
                             data-type="rent"
                             data-reference="AALP248110"
                             data-ajax-url="/ContactForm/PortalNumbers/249832?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-aalp248110"
                             data-whatsapp-url="https://rply.link/l/2dwQnD2Ped"
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
                             data-entity-id="248110"
                             data-entity-site-id="1799"
                             data-category="house"
                             data-type="rent"
                             data-reference="AALP248110"
                             data-ajax-url="/ContactForm/PortalNumbers/249832?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-aalp248110"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="248110"
                             data-entity-site-id="1799"
                             data-category="house"
                             data-type="rent"
                             data-reference="AALP248110"
                             data-ajax-url="/ContactForm/PortalEmail/249832?entityType=listing&amp;listingurl=/for-rent/houses-aalp248110"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"4-Bedroom Morden House for Rent  Bluffhill Opposite American Embassy","description":"The Property sits right opposite Westgate Shopping Mall – quiet suburb, close to amenities, popular with families and NGOs. \r\n\r\nMain features 4 beds, main en-suite, 1 lounge, dining, fitted modern kitchen + scullery + pantry, 2 lock-up garage, borehole and council water .\r\nWalled with manual gate, staff quarters, 5000L tank,   on a large yard.","url":"https://www.property.co.zw/for-rent/houses-aalp248110","identifier":"AALP248110","datePosted":"2026-05-29","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-aalp248110","availability":"http://schema.org/InStock","price":"1500","priceCurrency":"USD","serialNumber":"AALP248110","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Alliance Properties","logo":"https://www.property.co.zw/uploadedfiles/e2/69/6e/e2696e3d-b6ff-490a-ac1a-933900b39eec.png"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"1500","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":4,"floorSize":{"@type":"QuantitativeValue","value":390.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Bluff Hill","addressRegion":"Harare West","addressCountry":"Zimbabwe"},"name":"4-Bedroom Morden House for Rent  Bluffhill Opposite American Embassy","description":"The Property sits right opposite Westgate Shopping Mall – quiet suburb, close to amenities, popular with families and NGOs. \r\n\r\nMain features 4 beds, main en-suite, 1 lounge, dining, fitted modern kitchen + scullery + pantry, 2 lock-up garage, borehole and council water .\r\nWalled with manual gate, staff quarters, 5000L tank,   on a large yard.","image":["https://www.property.co.zw/uploadedfiles/56/31/09/56310940-3584-472c-9209-15c143430bb0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6b/c6/a1/6bc6a1c7-a43b-48d5-9b16-6d942d41b019_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/83/57/3d/83573d6b-15c2-4927-9f59-47a3fe2e848b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e3/02/a5/e302a576-c256-47e1-9806-91659b2e62c3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5f/fa/aa/5ffaaab9-d17c-4a6a-a110-09bf72aa1ede_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/62/59/bb/6259bbc5-fd62-4b6d-bb97-c59d1fcfabb6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/85/00/e6/8500e63d-49c7-40be-889c-41029d975e0b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2c/bb/af/2cbbaf85-06ba-437e-af0f-749bdde37d0d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/61/29/cb/6129cba9-2f64-4e2a-b04a-e7b688b05793_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4d/90/c9/4d90c91d-85cc-4999-9c2e-dbaeacf9c77f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/31/93/1f/31931f62-8c95-4db8-8851-5a09836ca07f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/57/49/cb/5749cb87-c1e0-4573-b2b5-df5336b19087_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/25/bf/2f25bf70-7d43-435e-a13c-fe120acd0c74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4c/30/31/4c3031e2-dae6-4f48-8c65-93fdd2b20116_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/80/c1/60/80c160ff-55d8-4cc2-ab1b-e177eebaf537_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/86/a2/09/86a20955-1e7f-4d2d-8751-0bfc1401c5e9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/26/38/f6/2638f61b-89f2-4811-a75f-3438f8827d35_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/03/6c/b7/036cb73a-6d15-4573-822a-907e291f6608_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/25/0a/34250a88-b986-44cc-b72b-0340fb976010_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/94/18/8b/94188b49-65e8-485e-9c3a-665bee987160_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/70/0c/20/700c20e7-1211-463a-8154-20f0be30e9c6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/05/b4/d605b478-6b90-4bf6-b73c-bcee2d2c2312_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/99/dd/29/99dd29b7-4840-40ab-bb41-07140a20bf82_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b4/50/72/b45072e4-c60c-4b7a-b5dc-c3b27da2dc12_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/17/bb/ee/17bbee8e-3098-418c-aac3-ca63752b5ff6_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/56/31/09/56310940-3584-472c-9209-15c143430bb0_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6b/c6/a1/6bc6a1c7-a43b-48d5-9b16-6d942d41b019_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/83/57/3d/83573d6b-15c2-4927-9f59-47a3fe2e848b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e3/02/a5/e302a576-c256-47e1-9806-91659b2e62c3_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5f/fa/aa/5ffaaab9-d17c-4a6a-a110-09bf72aa1ede_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/62/59/bb/6259bbc5-fd62-4b6d-bb97-c59d1fcfabb6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/85/00/e6/8500e63d-49c7-40be-889c-41029d975e0b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2c/bb/af/2cbbaf85-06ba-437e-af0f-749bdde37d0d_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/61/29/cb/6129cba9-2f64-4e2a-b04a-e7b688b05793_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4d/90/c9/4d90c91d-85cc-4999-9c2e-dbaeacf9c77f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/31/93/1f/31931f62-8c95-4db8-8851-5a09836ca07f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/57/49/cb/5749cb87-c1e0-4573-b2b5-df5336b19087_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/2f/25/bf/2f25bf70-7d43-435e-a13c-fe120acd0c74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4c/30/31/4c3031e2-dae6-4f48-8c65-93fdd2b20116_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/80/c1/60/80c160ff-55d8-4cc2-ab1b-e177eebaf537_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/86/a2/09/86a20955-1e7f-4d2d-8751-0bfc1401c5e9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/26/38/f6/2638f61b-89f2-4811-a75f-3438f8827d35_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/03/6c/b7/036cb73a-6d15-4573-822a-907e291f6608_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/34/25/0a/34250a88-b986-44cc-b72b-0340fb976010_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/94/18/8b/94188b49-65e8-485e-9c3a-665bee987160_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/70/0c/20/700c20e7-1211-463a-8154-20f0be30e9c6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/05/b4/d605b478-6b90-4bf6-b73c-bcee2d2c2312_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/99/dd/29/99dd29b7-4840-40ab-bb41-07140a20bf82_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b4/50/72/b45072e4-c60c-4b7a-b5dc-c3b27da2dc12_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/17/bb/ee/17bbee8e-3098-418c-aac3-ca63752b5ff6_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Alliance Properties","logo":"https://www.property.co.zw/uploadedfiles/e2/69/6e/e2696e3d-b6ff-490a-ac1a-933900b39eec.png"}}
        </script>
</div>

<div id="248867" data-mandate-id="250589" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(248867)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/khalida-realty" style="cursor: pointer;">
                        <img src="/uploadedfiles/3e/bd/01/3ebd016c-4f16-40d8-b3bc-d1f95ad5718b.jpg" alt="Khalida Realty" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Khalida Realty" data-url="/estate-agents/khalida-realty" />
                    </a>

                        <a href="/estate-agents/khalida-realty/prince-karimanzira/15468" class="vcenterFlex ">Prince Karimanzira</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-248867 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="248867"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-kha248867">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ea/dd/0c/eadd0c7f-b1e8-494b-9bab-f4a90c622bbe_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c2/3f/a2/c23fa204-36a7-45c1-864e-75ee78d12d94_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/00/64/88/00648854-35a6-4e24-9d40-592d20d2666e_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a2/62/b6/a262b6c7-0608-423f-8de7-286bda86e029_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/72/49/e4/7249e43a-eee9-4fc4-83ec-eae2e7917239_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/33/94/ba/3394ba73-308a-48be-8ca4-08613dea0ec9_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/da/1e/16/da1e1679-fd83-426a-93d0-fb6729919eb5_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d2/aa/f7/d2aaf7d7-4502-4ce1-be65-a6b026f5db5a_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/46/7c/26/467c2657-c209-4607-9672-5cfff1a38be7_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0b/64/39/0b643919-dd64-4eab-95f5-120f0a317331_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f4/e3/53/f4e353f4-b8b1-4336-8fc6-563190768499_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/99/eb/5a/99eb5aab-882c-45e5-9d73-67727d9a8376_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a9/2f/a1/a92fa1fb-7675-42a6-a9ad-d1f8ac786003_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f7/5d/36/f75d36c3-cd2b-4d67-bd61-d5926ac16083_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e9/51/ad/e951ad2f-ec2b-4864-a922-a6c38996b61b_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ee/51/fd/ee51fdb7-4cb9-48e2-9a8e-2f447dbb4960_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9a/f5/93/9af5930b-798c-4aae-88a2-f08cc6ad6871_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0b/47/1e/0b471e9d-fe13-4ffd-924e-de818bdb618b_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c4/b8/ad/c4b8ada5-43b4-4825-a31f-b23de54ca210_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6e/dd/6e/6edd6e26-f90c-4c8f-8ae7-38264af50738_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                *Mainway meadows House to Let*

A stunning 3-bedroomed house is available for rent in waterfalls , offering a perfect blend of comfort, convenience, and versatility.

Features:

- Spacious kitchen with built in cupboards 
- combined lounge and dining
- Separate toilet
- Combined bathroom with toilet
- All bedrooms with built in cupboards 
- Passage with linen cupboards
- All rooms with ceramic tile flooring
- solar system
- ?single lock up garage 

- 2000-litre tank

Location:

- Conveniently located at the back of Mbuya docus hospital 

Rental Options:

- *Residential Rental*
    - Rent: $700.00 per month
    - Deposit: $700

Don&#39;t miss out on this fantastic opportunity! Contact us today to schedule a viewing.
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-248867">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-248867">
    <i class="fa fa-chevron-right"></i>
</div>
        <div class="absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 6px; left: 6px; background-color: rgba(255,255,255,0.9);">
            New
        </div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/daiVEUnmoBg" data-is-portrait="True" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="rent"
                     data-category="house"
                     data-entityId="248867" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #ffffff; border: 1px solid #E7EAF1;">
                <div class="w-full">
                    <a href="/estate-agents/khalida-realty" style="cursor: pointer;">
                        <img src="/uploadedfiles/3e/bd/01/3ebd016c-4f16-40d8-b3bc-d1f95ad5718b.jpg" alt="Khalida Realty" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Khalida Realty" data-url="/estate-agents/khalida-realty" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/khalida-realty/prince-karimanzira/15468" class="block text-center">Prince Karimanzira</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-kha248867">USD 700 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-kha248867">
                        Mainway Meadows House to let
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Mainway Meadows, Harare South</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">3 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 3
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 2
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        500 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        200 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="248867"
                             data-entity-site-id="1358"
                             data-category="house"
                             data-type="rent"
                             data-reference="KHA248867"
                             data-ajax-url="/ContactForm/PortalNumbers/250589?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-kha248867"
                             data-whatsapp-url="https://rply.link/l/autRTcezQB"
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
                             data-entity-id="248867"
                             data-entity-site-id="1358"
                             data-category="house"
                             data-type="rent"
                             data-reference="KHA248867"
                             data-ajax-url="/ContactForm/PortalNumbers/250589?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-kha248867"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="248867"
                             data-entity-site-id="1358"
                             data-category="house"
                             data-type="rent"
                             data-reference="KHA248867"
                             data-ajax-url="/ContactForm/PortalEmail/250589?entityType=listing&amp;listingurl=/for-rent/houses-kha248867"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Mainway Meadows House to let","description":"*Mainway meadows House to Let*\r\n\r\nA stunning 3-bedroomed house is available for rent in waterfalls , offering a perfect blend of comfort, convenience, and versatility.\r\n\r\nFeatures:\r\n\r\n- Spacious kitchen with built in cupboards \r\n- combined lounge and dining\r\n- Separate toilet\r\n- Combined bathroom with toilet\r\n- All bedrooms with built in cupboards \r\n- Passage with linen cupboards\r\n- All rooms with ceramic tile flooring\r\n- solar system\r\n- ?single lock up garage \r\n\r\n- 2000-litre tank\r\n\r\nLocation:\r\n\r\n- Conveniently located at the back of Mbuya docus hospital \r\n\r\nRental Options:\r\n\r\n- *Residential Rental*\r\n    - Rent: $700.00 per month\r\n    - Deposit: $700\r\n\r\nDon't miss out on this fantastic opportunity! Contact us today to schedule a viewing.","url":"https://www.property.co.zw/for-rent/houses-kha248867","identifier":"KHA248867","datePosted":"2026-06-09","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-kha248867","availability":"http://schema.org/InStock","price":"700","priceCurrency":"USD","serialNumber":"KHA248867","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Khalida Realty","logo":"https://www.property.co.zw/uploadedfiles/3e/bd/01/3ebd016c-4f16-40d8-b3bc-d1f95ad5718b.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"700","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":3,"numberOfBathroomsTotal":2,"floorSize":{"@type":"QuantitativeValue","value":500.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Mainway Meadows","addressRegion":"Harare South","addressCountry":"Zimbabwe"},"name":"Mainway Meadows House to let","description":"*Mainway meadows House to Let*\r\n\r\nA stunning 3-bedroomed house is available for rent in waterfalls , offering a perfect blend of comfort, convenience, and versatility.\r\n\r\nFeatures:\r\n\r\n- Spacious kitchen with built in cupboards \r\n- combined lounge and dining\r\n- Separate toilet\r\n- Combined bathroom with toilet\r\n- All bedrooms with built in cupboards \r\n- Passage with linen cupboards\r\n- All rooms with ceramic tile flooring\r\n- solar system\r\n- ?single lock up garage \r\n\r\n- 2000-litre tank\r\n\r\nLocation:\r\n\r\n- Conveniently located at the back of Mbuya docus hospital \r\n\r\nRental Options:\r\n\r\n- *Residential Rental*\r\n    - Rent: $700.00 per month\r\n    - Deposit: $700\r\n\r\nDon't miss out on this fantastic opportunity! Contact us today to schedule a viewing.","image":["https://www.property.co.zw/uploadedfiles/ea/dd/0c/eadd0c7f-b1e8-494b-9bab-f4a90c622bbe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c2/3f/a2/c23fa204-36a7-45c1-864e-75ee78d12d94_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/00/64/88/00648854-35a6-4e24-9d40-592d20d2666e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a2/62/b6/a262b6c7-0608-423f-8de7-286bda86e029_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/49/e4/7249e43a-eee9-4fc4-83ec-eae2e7917239_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/33/94/ba/3394ba73-308a-48be-8ca4-08613dea0ec9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/da/1e/16/da1e1679-fd83-426a-93d0-fb6729919eb5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d2/aa/f7/d2aaf7d7-4502-4ce1-be65-a6b026f5db5a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/46/7c/26/467c2657-c209-4607-9672-5cfff1a38be7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/64/39/0b643919-dd64-4eab-95f5-120f0a317331_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f4/e3/53/f4e353f4-b8b1-4336-8fc6-563190768499_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/99/eb/5a/99eb5aab-882c-45e5-9d73-67727d9a8376_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a9/2f/a1/a92fa1fb-7675-42a6-a9ad-d1f8ac786003_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f7/5d/36/f75d36c3-cd2b-4d67-bd61-d5926ac16083_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e9/51/ad/e951ad2f-ec2b-4864-a922-a6c38996b61b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ee/51/fd/ee51fdb7-4cb9-48e2-9a8e-2f447dbb4960_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9a/f5/93/9af5930b-798c-4aae-88a2-f08cc6ad6871_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/47/1e/0b471e9d-fe13-4ffd-924e-de818bdb618b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c4/b8/ad/c4b8ada5-43b4-4825-a31f-b23de54ca210_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6e/dd/6e/6edd6e26-f90c-4c8f-8ae7-38264af50738_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/ea/dd/0c/eadd0c7f-b1e8-494b-9bab-f4a90c622bbe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c2/3f/a2/c23fa204-36a7-45c1-864e-75ee78d12d94_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/00/64/88/00648854-35a6-4e24-9d40-592d20d2666e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a2/62/b6/a262b6c7-0608-423f-8de7-286bda86e029_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/72/49/e4/7249e43a-eee9-4fc4-83ec-eae2e7917239_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/33/94/ba/3394ba73-308a-48be-8ca4-08613dea0ec9_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/da/1e/16/da1e1679-fd83-426a-93d0-fb6729919eb5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d2/aa/f7/d2aaf7d7-4502-4ce1-be65-a6b026f5db5a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/46/7c/26/467c2657-c209-4607-9672-5cfff1a38be7_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/64/39/0b643919-dd64-4eab-95f5-120f0a317331_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f4/e3/53/f4e353f4-b8b1-4336-8fc6-563190768499_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/99/eb/5a/99eb5aab-882c-45e5-9d73-67727d9a8376_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a9/2f/a1/a92fa1fb-7675-42a6-a9ad-d1f8ac786003_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f7/5d/36/f75d36c3-cd2b-4d67-bd61-d5926ac16083_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e9/51/ad/e951ad2f-ec2b-4864-a922-a6c38996b61b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ee/51/fd/ee51fdb7-4cb9-48e2-9a8e-2f447dbb4960_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/9a/f5/93/9af5930b-798c-4aae-88a2-f08cc6ad6871_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0b/47/1e/0b471e9d-fe13-4ffd-924e-de818bdb618b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c4/b8/ad/c4b8ada5-43b4-4825-a31f-b23de54ca210_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6e/dd/6e/6edd6e26-f90c-4c8f-8ae7-38264af50738_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Khalida Realty","logo":"https://www.property.co.zw/uploadedfiles/3e/bd/01/3ebd016c-4f16-40d8-b3bc-d1f95ad5718b.jpg"}}
        </script>
</div>

<div id="243591" data-mandate-id="245313" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(243591)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #000000; background-color: #fee600; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/property-exchange" style="cursor: pointer;">
                        <img src="/uploadedfiles/43/89/34/43893445-5dec-404b-a888-6b4f5dd9a318.jpg" alt="Property Exchange" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Property Exchange" data-url="/estate-agents/property-exchange" />
                    </a>

                        <a href="/estate-agents/property-exchange/simbarashe-honyerwa/25576" class="vcenterFlex ">Simbarashe Honyerwa</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-243591 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="243591"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-pex243591">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/9a/a9/f7/9aa9f7ae-f571-4294-ab75-5070fde8a8de_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/49/2b/d9/492bd942-a44b-48ed-bd41-37f4c08b3dbf_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/64/44/6c/64446caf-1a7f-46db-b9c3-e6db8da2823b_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/76/20/be/7620becb-e321-4f6a-bab1-003b611b483e_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/22/fd/7e/22fd7e3f-351b-40d2-814c-bce24421f7db_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/83/04/aa/8304aae2-f0d4-44c2-875a-a3e2f9ca761c_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/69/8b/95/698b95a2-b314-4352-a622-dff704db9705_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e5/1f/f7/e51ff7b0-3a19-4ab4-8d5f-2ea12b19b4db_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1b/6c/0d/1b6c0dbb-e91a-42e9-b3ab-8ac7adc5581a_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8c/74/69/8c7469c7-b3fd-4369-b54d-7e0da86afbbe_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4e/b9/52/4eb9521e-13bf-45b5-b48d-72b4cf0b8125_thumbnail591.webp" alt="5 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Budiriro 5 at OK Budiriro,  recently rennovated 5 bedroomed house, mes, tiled, paved, walled and gated, 2000ltr tank on stand, municipal water. Rent does not include municipal bills (which will be paid separately by the tenant) Security Deposit required
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-243591">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-243591">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="243591" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #000000; background-color: #fee600; ">
                <div class="w-full">
                    <a href="/estate-agents/property-exchange" style="cursor: pointer;">
                        <img src="/uploadedfiles/43/89/34/43893445-5dec-404b-a888-6b4f5dd9a318.jpg" alt="Property Exchange" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Property Exchange" data-url="/estate-agents/property-exchange" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/property-exchange/simbarashe-honyerwa/25576" class="block text-center">Simbarashe Honyerwa</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-pex243591">USD 380 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-pex243591">
                        Budiriro 5B near OK
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Budiriro, Harare High Density</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">5 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 5
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 2
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        100 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        220 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="243591"
                             data-entity-site-id="123"
                             data-category="house"
                             data-type="rent"
                             data-reference="PEX243591"
                             data-ajax-url="/ContactForm/PortalNumbers/245313?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-pex243591"
                             data-whatsapp-url="https://rply.link/l/PFKe2zAhQx"
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
                             data-entity-id="243591"
                             data-entity-site-id="123"
                             data-category="house"
                             data-type="rent"
                             data-reference="PEX243591"
                             data-ajax-url="/ContactForm/PortalNumbers/245313?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-pex243591"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="243591"
                             data-entity-site-id="123"
                             data-category="house"
                             data-type="rent"
                             data-reference="PEX243591"
                             data-ajax-url="/ContactForm/PortalEmail/245313?entityType=listing&amp;listingurl=/for-rent/houses-pex243591"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Budiriro 5B near OK","description":"Budiriro 5 at OK Budiriro,  recently rennovated 5 bedroomed house, mes, tiled, paved, walled and gated, 2000ltr tank on stand, municipal water. Rent does not include municipal bills (which will be paid separately by the tenant) Security Deposit required","url":"https://www.property.co.zw/for-rent/houses-pex243591","identifier":"PEX243591","datePosted":"2026-03-26","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-pex243591","availability":"http://schema.org/InStock","price":"380","priceCurrency":"USD","serialNumber":"PEX243591","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Property Exchange","logo":"https://www.property.co.zw/uploadedfiles/43/89/34/43893445-5dec-404b-a888-6b4f5dd9a318.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"380","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":5,"numberOfBathroomsTotal":2,"floorSize":{"@type":"QuantitativeValue","value":100.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Budiriro","addressRegion":"Harare High Density","addressCountry":"Zimbabwe"},"name":"Budiriro 5B near OK","description":"Budiriro 5 at OK Budiriro,  recently rennovated 5 bedroomed house, mes, tiled, paved, walled and gated, 2000ltr tank on stand, municipal water. Rent does not include municipal bills (which will be paid separately by the tenant) Security Deposit required","image":["https://www.property.co.zw/uploadedfiles/9a/a9/f7/9aa9f7ae-f571-4294-ab75-5070fde8a8de_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/49/2b/d9/492bd942-a44b-48ed-bd41-37f4c08b3dbf_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/64/44/6c/64446caf-1a7f-46db-b9c3-e6db8da2823b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/20/be/7620becb-e321-4f6a-bab1-003b611b483e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/22/fd/7e/22fd7e3f-351b-40d2-814c-bce24421f7db_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/83/04/aa/8304aae2-f0d4-44c2-875a-a3e2f9ca761c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/69/8b/95/698b95a2-b314-4352-a622-dff704db9705_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e5/1f/f7/e51ff7b0-3a19-4ab4-8d5f-2ea12b19b4db_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/6c/0d/1b6c0dbb-e91a-42e9-b3ab-8ac7adc5581a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8c/74/69/8c7469c7-b3fd-4369-b54d-7e0da86afbbe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4e/b9/52/4eb9521e-13bf-45b5-b48d-72b4cf0b8125_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/9a/a9/f7/9aa9f7ae-f571-4294-ab75-5070fde8a8de_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/49/2b/d9/492bd942-a44b-48ed-bd41-37f4c08b3dbf_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/64/44/6c/64446caf-1a7f-46db-b9c3-e6db8da2823b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/76/20/be/7620becb-e321-4f6a-bab1-003b611b483e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/22/fd/7e/22fd7e3f-351b-40d2-814c-bce24421f7db_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/83/04/aa/8304aae2-f0d4-44c2-875a-a3e2f9ca761c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/69/8b/95/698b95a2-b314-4352-a622-dff704db9705_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/e5/1f/f7/e51ff7b0-3a19-4ab4-8d5f-2ea12b19b4db_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1b/6c/0d/1b6c0dbb-e91a-42e9-b3ab-8ac7adc5581a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8c/74/69/8c7469c7-b3fd-4369-b54d-7e0da86afbbe_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4e/b9/52/4eb9521e-13bf-45b5-b48d-72b4cf0b8125_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Property Exchange","logo":"https://www.property.co.zw/uploadedfiles/43/89/34/43893445-5dec-404b-a888-6b4f5dd9a318.jpg"}}
        </script>
</div>

<div id="247051" data-mandate-id="248773" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(247051)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #241f1f; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/clark-properties" style="cursor: pointer;">
                        <img src="/uploadedfiles/69/2d/60/692d6069-cf6e-4e11-b468-83bf3b60929f.jpg" alt="Clark Properties" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Clark Properties" data-url="/estate-agents/clark-properties" />
                    </a>

                        <a href="/estate-agents/clark-properties/winnette-makanza/19452" class="vcenterFlex ">Winnette Makanza</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-247051 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="247051"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/houses-clrp247051">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b9/7d/32/b97d325f-ed86-439c-82b7-8756e8c3454e_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/54/db/fc/54dbfc5a-846c-45b5-a5aa-0e70d8e70e86_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/67/81/2c/67812c4f-4619-4a3f-910a-fd67f26c4961_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c2/00/a3/c200a323-76ba-4fb2-9bf9-972f80525055_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b4/cc/ca/b4ccca3d-1a4a-439c-8b41-d44f8da3d54b_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3d/3f/e8/3d3fe8b4-8383-46a0-82f0-41c2c9d6168b_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a6/e3/17/a6e317ec-8767-4d8a-b847-657eae6e8b22_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d6/69/1e/d6691e41-7226-4a5f-90d9-b36434514c84_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/5d/c7/92/5dc79214-7f0b-4605-be19-184b17f66a24_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/0d/65/a0/0d65a026-6d2d-4598-8ace-27be16383669_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ae/07/68/ae076811-9f4d-4b56-976f-3fbe875becc6_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/89/0d/18/890d18ea-00e2-4ce0-872b-3af5075a938f_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/d8/33/35/d83335b0-17d2-4402-8760-dffea34d2698_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/4a/8f/e8/4a8fe8af-b613-4145-b0a2-0176fc5ea40a_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/da/86/bd/da86bd48-a2d1-4c10-926a-b37af1bd3aa2_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/64/7d/40/647d4087-e65e-4865-9bd9-05727088238c_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/23/bf/ce/23bfceec-dce7-4019-aca9-53e5f475bff6_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/b1/92/20/b1922051-c712-495f-a50a-5366a6c2b305_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/7e/78/09/7e78097e-02ab-4026-b48a-1f65a3a5a9dc_thumbnail591.webp" alt="3 Bedroom House" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                This charming property offers warm and inviting living spaces, featuring two lounges—one centered around a fireplace, a dining area, and a well-appointed kitchen with ample cupboard space.
The main house features a spacious master bedroom with doors opening onto the garden, complemented by an ensuite bathroom with both a bath and shower. Two additional bedrooms, all with built-in cupboards. Two bathrooms, one with a shower, the other with a bath and a separate toilet.
The property extends its charm with a modern, self-contained cottage comprising an open-plan lounge, dining area, and kitchen fitted with a four-plate stove (two gas and two electric plates, plus an oven). It includes two bedrooms with built-in cupboards, a bathroom with a shower, and a small verandah.
Outdoor living is equally impressive, with a swimming pool, a dedicated pool house, and a large manicured garden that...
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-247051">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-247051">
    <i class="fa fa-chevron-right"></i>
</div>
    
    <div class="construction-status hidden absolute z-30 text-sm rounded-md py-0.5 px-2 shadow-dark" style="top: 60px; left: 6px; background-color: rgba(255,255,255,0.9);">
        Construction status: NotSet
    </div>



    <div class="flex items-center absolute z-30" style="right: 6px; top: 6px; gap: 6px;">

        
            <div class="vcenterFlex rounded-md shadow-dark cursor-pointer" data-load-youtube="https://www.youtube.com/embed/Tg7SkBrJuG0" data-is-portrait="True" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img src="/content/overhaul/img/png/play-icon.png" alt="Play video" class="video p-1 rounded-md" loading="lazy" />
            </div>
        
            <div class="rounded-md shadow-dark" style="width: 40px; height: 40px; background-color: rgba(255,255,255,0.9);">
                <img class="add-remove-favourite ga-favourite fav fav-btn w-10 h-10 p-1 "
                     src="/content/overhaul/img/svg/mod/favourite-heart-transparent.svg"
                     alt="Add to favourites"
                     data-detail="true"
                     data-similar="false"
                     data-status="added"
                     data-type="rent"
                     data-category="house"
                     data-entityId="247051" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #241f1f; ">
                <div class="w-full">
                    <a href="/estate-agents/clark-properties" style="cursor: pointer;">
                        <img src="/uploadedfiles/69/2d/60/692d6069-cf6e-4e11-b468-83bf3b60929f.jpg" alt="Clark Properties" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Clark Properties" data-url="/estate-agents/clark-properties" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/clark-properties/winnette-makanza/19452" class="block text-center">Winnette Makanza</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/houses-clrp247051">USD 4,200 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/houses-clrp247051">
                        A Warm and Inviting Home
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Mount Pleasant, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">3 Bedroom House</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 3
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 4
                    </span>

                    <span class="building-area mr-2 relative" style="top: 1px;">
                        <i class="fa fa-building text-gray-500 relative" style="top: 0.5px; margin-right: 2px;"></i>
                        500 m&#178;
                    </span>
                                    <span class="land-size mr-2 relative hidden md:inline" style="top: 1px;">
                        <img src="/content/overhaul/img/svg/mod/land-area.svg" alt="Land area" class="inline-block" style="margin-right: 1px; height: 18px; width: 18px;" loading="lazy" />
                        4,000 m&#178;
                    </span>

            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="247051"
                             data-entity-site-id="1670"
                             data-category="house"
                             data-type="rent"
                             data-reference="CLRP247051"
                             data-ajax-url="/ContactForm/PortalNumbers/248773?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/houses-clrp247051"
                             data-whatsapp-url="https://rply.link/l/xjg2xmyQAR"
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
                             data-entity-id="247051"
                             data-entity-site-id="1670"
                             data-category="house"
                             data-type="rent"
                             data-reference="CLRP247051"
                             data-ajax-url="/ContactForm/PortalNumbers/248773?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/houses-clrp247051"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="247051"
                             data-entity-site-id="1670"
                             data-category="house"
                             data-type="rent"
                             data-reference="CLRP247051"
                             data-ajax-url="/ContactForm/PortalEmail/248773?entityType=listing&amp;listingurl=/for-rent/houses-clrp247051"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"A Warm and Inviting Home","description":"This charming property offers warm and inviting living spaces, featuring two lounges—one centered around a fireplace, a dining area, and a well-appointed kitchen with ample cupboard space.\r\nThe main house features a spacious master bedroom with doors opening onto the garden, complemented by an ensuite bathroom with both a bath and shower. Two additional bedrooms, all with built-in cupboards. Two bathrooms, one with a shower, the other with a bath and a separate toilet.\r\nThe property extends its charm with a modern, self-contained cottage comprising an open-plan lounge, dining area, and kitchen fitted with a four-plate stove (two gas and two electric plates, plus an oven). It includes two bedrooms with built-in cupboards, a bathroom with a shower, and a small verandah.\r\nOutdoor living is equally impressive, with a swimming pool, a dedicated pool house, and a large manicured garden that...","url":"https://www.property.co.zw/for-rent/houses-clrp247051","identifier":"CLRP247051","datePosted":"2026-05-15","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/houses-clrp247051","availability":"http://schema.org/InStock","price":"4200","priceCurrency":"USD","serialNumber":"CLRP247051","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Clark Properties","logo":"https://www.property.co.zw/uploadedfiles/69/2d/60/692d6069-cf6e-4e11-b468-83bf3b60929f.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"4200","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":3,"numberOfBathroomsTotal":4,"floorSize":{"@type":"QuantitativeValue","value":500.000000,"unitText":"m²"},"address":{"@type":"PostalAddress","addressLocality":"Mount Pleasant","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"A Warm and Inviting Home","description":"This charming property offers warm and inviting living spaces, featuring two lounges—one centered around a fireplace, a dining area, and a well-appointed kitchen with ample cupboard space.\r\nThe main house features a spacious master bedroom with doors opening onto the garden, complemented by an ensuite bathroom with both a bath and shower. Two additional bedrooms, all with built-in cupboards. Two bathrooms, one with a shower, the other with a bath and a separate toilet.\r\nThe property extends its charm with a modern, self-contained cottage comprising an open-plan lounge, dining area, and kitchen fitted with a four-plate stove (two gas and two electric plates, plus an oven). It includes two bedrooms with built-in cupboards, a bathroom with a shower, and a small verandah.\r\nOutdoor living is equally impressive, with a swimming pool, a dedicated pool house, and a large manicured garden that...","image":["https://www.property.co.zw/uploadedfiles/b9/7d/32/b97d325f-ed86-439c-82b7-8756e8c3454e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/54/db/fc/54dbfc5a-846c-45b5-a5aa-0e70d8e70e86_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/67/81/2c/67812c4f-4619-4a3f-910a-fd67f26c4961_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c2/00/a3/c200a323-76ba-4fb2-9bf9-972f80525055_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b4/cc/ca/b4ccca3d-1a4a-439c-8b41-d44f8da3d54b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3d/3f/e8/3d3fe8b4-8383-46a0-82f0-41c2c9d6168b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a6/e3/17/a6e317ec-8767-4d8a-b847-657eae6e8b22_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/69/1e/d6691e41-7226-4a5f-90d9-b36434514c84_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5d/c7/92/5dc79214-7f0b-4605-be19-184b17f66a24_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0d/65/a0/0d65a026-6d2d-4598-8ace-27be16383669_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ae/07/68/ae076811-9f4d-4b56-976f-3fbe875becc6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/89/0d/18/890d18ea-00e2-4ce0-872b-3af5075a938f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d8/33/35/d83335b0-17d2-4402-8760-dffea34d2698_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4a/8f/e8/4a8fe8af-b613-4145-b0a2-0176fc5ea40a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/da/86/bd/da86bd48-a2d1-4c10-926a-b37af1bd3aa2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/64/7d/40/647d4087-e65e-4865-9bd9-05727088238c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/23/bf/ce/23bfceec-dce7-4019-aca9-53e5f475bff6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b1/92/20/b1922051-c712-495f-a50a-5366a6c2b305_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/78/09/7e78097e-02ab-4026-b48a-1f65a3a5a9dc_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/b9/7d/32/b97d325f-ed86-439c-82b7-8756e8c3454e_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/54/db/fc/54dbfc5a-846c-45b5-a5aa-0e70d8e70e86_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/67/81/2c/67812c4f-4619-4a3f-910a-fd67f26c4961_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c2/00/a3/c200a323-76ba-4fb2-9bf9-972f80525055_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b4/cc/ca/b4ccca3d-1a4a-439c-8b41-d44f8da3d54b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3d/3f/e8/3d3fe8b4-8383-46a0-82f0-41c2c9d6168b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a6/e3/17/a6e317ec-8767-4d8a-b847-657eae6e8b22_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d6/69/1e/d6691e41-7226-4a5f-90d9-b36434514c84_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/5d/c7/92/5dc79214-7f0b-4605-be19-184b17f66a24_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/0d/65/a0/0d65a026-6d2d-4598-8ace-27be16383669_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ae/07/68/ae076811-9f4d-4b56-976f-3fbe875becc6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/89/0d/18/890d18ea-00e2-4ce0-872b-3af5075a938f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/d8/33/35/d83335b0-17d2-4402-8760-dffea34d2698_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/4a/8f/e8/4a8fe8af-b613-4145-b0a2-0176fc5ea40a_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/da/86/bd/da86bd48-a2d1-4c10-926a-b37af1bd3aa2_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/64/7d/40/647d4087-e65e-4865-9bd9-05727088238c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/23/bf/ce/23bfceec-dce7-4019-aca9-53e5f475bff6_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/b1/92/20/b1922051-c712-495f-a50a-5366a6c2b305_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/7e/78/09/7e78097e-02ab-4026-b48a-1f65a3a5a9dc_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Clark Properties","logo":"https://www.property.co.zw/uploadedfiles/69/2d/60/692d6069-cf6e-4e11-b468-83bf3b60929f.jpg"}}
        </script>
</div>

<div id="246385" data-mandate-id="248107" class="ResultCardItem PriorityCarousel  mb-6 border-0 rounded-md shadow relative flex flex-col md:flex-row">

    <img src="/fa_all/solid-square-ellipsis-vertical.svg" alt="Admin menu" loading="lazy" class="admin-action-menu-ellipsis hidden absolute w-6 filter-graypurpledark cursor-pointer" style="top: -3px; left: -2rem;" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Utilities.AdminActionMenu.show(246385)" data-cf-modified-b2460e50d817b0df62da8c5d-="" />
    
    
    
    

        <div class="gold-logo-top rounded-t-md vcenterFlex" style="color: #ffffff; background-color: #154734; ">
            
                <div class="flex justify-between w-full">
                    <a href="/estate-agents/pam-golding" style="cursor: pointer;">
                        <img src="/uploadedfiles/76/b8/ba/76b8ba53-6999-424e-99ad-6532e21930e5.jpg" alt="Pam Golding Properties" loading="lazy" class="max-h-12 ga-parent ga-agency-logo" data-name="Pam Golding Properties" data-url="/estate-agents/pam-golding" />
                    </a>

                        <a href="/estate-agents/pam-golding/lavender-mashonga/9917" class="vcenterFlex ">Lavender Mashonga</a>

                </div>
        </div>

    <div class="aspectRatio ">
        <div class="lds-ellipsis absolute" style="top:33%; left: 39%;"><div></div><div></div><div></div><div></div></div>
    </div>

    
<div class="swiper-container swiper-246385 load-lazy-load absolute w-full border-0 cursor-pointer rounded-t-md md:rounded-l-md md:rounded-r-none"
     data-carousel="result"
     data-value="246385"
     data-slidesperview="1"
     data-slidesperview-md="1"
     data-slidesperview-lg="1"
     data-slidesperview-xl="1"
     data-slidesperview-xxl="1"
     data-href="/for-rent/cottages-pgp246385">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/e8/25/0d/e8250dfd-9517-42ab-b1c5-9feeae9dda56_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f0/80/14/f0801491-6f52-4de0-9532-50de990dd5e8_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6d/9e/bb/6d9ebb04-598e-40e1-a421-0c98e395bc6f_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/3b/60/78/3b6078b9-d4d7-4c99-9520-0b56efa323f8_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/38/cf/b5/38cfb56c-9bf7-47bf-bd96-3578a376334c_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/a8/36/f2/a836f28f-4c2c-404f-8281-7d2b7db43ea5_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/16/ce/1b/16ce1b1e-e714-4e8c-a5b5-2e0895be0477_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6b/e8/74/6be8742f-1d1d-44a7-a8c9-af881c0f7aab_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ff/31/16/ff311685-43fb-4414-97ed-a97a7b8ac790_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/bd/c6/0a/bdc60a08-5ecc-4981-b4bd-a200e00e0c55_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/24/7e/72/247e72a9-09c7-4ea6-a922-6ad067c6a836_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/68/c4/a9/68c4a93b-6398-4852-9653-cad451214d73_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/fe/bd/a8/febda849-0d97-4a88-998e-ad51568ea4df_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/ef/65/4c/ef654c7b-2cfa-4f93-8a31-68499d54a5b8_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/f7/b8/b2/f7b8b2a0-2f36-4dfd-8aa0-60f60dc33370_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/6d/75/0e/6d750eaf-b789-44cc-bfe0-35aace46f6dc_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/8f/96/3a/8f963a80-835f-4797-8170-461a9e7546d5_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/71/44/3b/71443b14-ccde-4153-a0c3-1b4d8e1e0b74_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/62/3f/63/623f6389-2d73-413d-b49d-c8b06d5643b1_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/15/f5/da/15f5da46-750e-47c7-a0dd-50c63058b130_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/1d/2c/e6/1d2ce696-2b49-49a1-bdec-01d671f4082b_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/db/0b/c0/db0bc0a1-4454-431e-9a60-a51b4c889a08_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
            <div class="swiper-slide">
                <img data-src="/uploadedfiles/c7/d9/d0/c7d9d088-dccc-417b-841e-f5c863314449_thumbnail591.webp" alt="3 Bedroom Cottage" class="swiper-lazy w-full xl:w-auto" loading="lazy" />
            </div>
                    <div class="ResultDescription swiper-slide bg-white vcenterFlex px-12 text-graypurpledark bg-gray-50">
                Discover this lovely 3-bedroom cottage nestled in Helensvale, featuring a spacious lounge with a fireplace, a separate dining room, and a modern kitchen. A small study off the lounge offers a perfect workspace. 

The property includes two generous bedrooms and a family bathroom, with the main bedroom boasting an en suite and private garden.

Additional highlights include a double covered garage and a beautifully manicured private garden at the back.

Contact our team today for a viewing!
            </div>

    </div>
    
        <div class="swiper-nav-arrow swiper-nav-arrow-prev carousel-prev-246385">
    <i class="fa fa-chevron-left"></i>
</div>
<div class="swiper-nav-arrow swiper-nav-arrow-next carousel-next-246385">
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
                     data-type="rent"
                     data-category="house"
                     data-entityId="246385" />
            </div>

    </div>




</div>


        <div class="gold-logo-right vcenterFlex" style="color: #ffffff; background-color: #154734; ">
                <div class="w-full">
                    <a href="/estate-agents/pam-golding" style="cursor: pointer;">
                        <img src="/uploadedfiles/76/b8/ba/76b8ba53-6999-424e-99ad-6532e21930e5.jpg" alt="Pam Golding Properties" loading="lazy" class="mx-auto mb-4 ga-parent ga-agency-logo" data-name="Pam Golding Properties" data-url="/estate-agents/pam-golding" style="max-width: 85%;" />
                    </a>

                        <a href="/estate-agents/pam-golding/lavender-mashonga/9917" class="block text-center">Lavender Mashonga</a>

                </div>
        </div>
    <div class="MainBody rounded-md w-full relative bg-white px-3 py-2 md:p-0">
        <div class="flex flex-row md:px-4 md:pt-1">

            
            <div class="result-price font-medium text-secondary mb-4 md:mb-0 md:mt-2">
                <a href="/for-rent/cottages-pgp246385">USD 1,500 per month</a>
                                    <span class="inline-block w-2 h-2 rounded-xl relative -top-0.5 left-0.5 result-dot-Gold" aria-label="Gold listing" data-microtip-position="top" role="tooltip"></span>

            </div>

                <div class="result-featured-text">
                    Featured
                </div>

        </div>


        <div class="result-details-container vcenterFlex">
            <div>
                
                <h2 class="mb-0.5 font-medium text-base md:px-4">
                    <a href="/for-rent/cottages-pgp246385">
                        Furnished 3 bedroom Cottage - Helensvale 
                    </a>
                </h2>

                
                <div class="text-graypurpledark md:px-4 overflow-ellipse-mobile mb-2 md:mb-0.5">Helensvale, Harare North</div>

                
                <div class="hidden md:block px-4 text-graypurpledark mb-2 md:mb-0.5">3 Bedroom Cottage</div>

            </div>
        </div>

        
        <div class="result-amenity-container flex vcenterFlex justify-between md:px-4 md:w-full md:h-1/4 md:absolute md:bottom-0 md:border-t md:border-inputborder ">

            
            <div class="ResultCardAmenities w-3/5 text-sm">
                    <span class="bed mr-2">
                        <img src="/content/overhaul/img/svg/mod/bed.svg" alt="Bedrooms" class="inline" loading="lazy" /> 3
                    </span>
                                    <span class="bath mr-2">
                        <img src="/content/overhaul/img/svg/mod/shower.svg" alt="Bathrooms" class="inline" loading="lazy" /> 2
                    </span>

                
            </div>

                <div class="ResultCardLeads w-2/5 text-right">
                        <div class="LeadButton Sudonum WhatsappLeadIcon cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="whatsapp"
                             data-entity-id="246385"
                             data-entity-site-id="10"
                             data-category="house"
                             data-type="rent"
                             data-reference="PGP246385"
                             data-ajax-url="/ContactForm/PortalNumbers/248107?entityType=listing&amp;isWhatsapp=true&amp;listingurl=/for-rent/cottages-pgp246385"
                             data-whatsapp-url="https://rply.link/l/EZRJa0GZPn"
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
                             data-entity-id="246385"
                             data-entity-site-id="10"
                             data-category="house"
                             data-type="rent"
                             data-reference="PGP246385"
                             data-ajax-url="/ContactForm/PortalNumbers/248107?entityType=listing&amp;isWhatsapp=false&amp;listingurl=/for-rent/cottages-pgp246385"
                             aria-label="Phone"
                             data-microtip-position="top"
                             role="tooltip">

                            <img class="LeadIcon w-7 h-7 transition-all"
                                 alt="Phone"
                                 src="/content/overhaul/img/svg/icons/Phone_24x24.svg" loading="lazy" />

                        </div>



                        <div class="LeadButton cursor-pointer inline-block p-1 border border-graypurpledark hover:border-secondary rounded-xl transition-all"
                             data-medium="email"
                             data-entity-id="246385"
                             data-entity-site-id="10"
                             data-category="house"
                             data-type="rent"
                             data-reference="PGP246385"
                             data-ajax-url="/ContactForm/PortalEmail/248107?entityType=listing&amp;listingurl=/for-rent/cottages-pgp246385"
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
            {"@context":"https://schema.org","@type":"RealEstateListing","name":"Furnished 3 bedroom Cottage - Helensvale ","description":"Discover this lovely 3-bedroom cottage nestled in Helensvale, featuring a spacious lounge with a fireplace, a separate dining room, and a modern kitchen. A small study off the lounge offers a perfect workspace. \r\n\r\nThe property includes two generous bedrooms and a family bathroom, with the main bedroom boasting an en suite and private garden.\r\n\r\nAdditional highlights include a double covered garage and a beautifully manicured private garden at the back.\r\n\r\nContact our team today for a viewing!","url":"https://www.property.co.zw/for-rent/cottages-pgp246385","identifier":"PGP246385","datePosted":"2026-05-07","offers":{"@type":"OfferForLease","url":"https://www.property.co.zw/for-rent/cottages-pgp246385","availability":"http://schema.org/InStock","price":"1500","priceCurrency":"USD","serialNumber":"PGP246385","seller":{"@context":"http://www.schema.org","@type":"Organization","name":"Pam Golding Properties","logo":"https://www.property.co.zw/uploadedfiles/76/b8/ba/76b8ba53-6999-424e-99ad-6532e21930e5.jpg"},"priceSpecification":{"@type":"UnitPriceSpecification","price":"1500","priceCurrency":"USD","referenceQuantity":{"@type":"QuantitativeValue","value":1.0,"unitCode":"MON","unitText":"month"}}},"about":{"@type":"Accommodation","numberOfBedrooms":3,"numberOfBathroomsTotal":2,"address":{"@type":"PostalAddress","addressLocality":"Helensvale","addressRegion":"Harare North","addressCountry":"Zimbabwe"},"name":"Furnished 3 bedroom Cottage - Helensvale ","description":"Discover this lovely 3-bedroom cottage nestled in Helensvale, featuring a spacious lounge with a fireplace, a separate dining room, and a modern kitchen. A small study off the lounge offers a perfect workspace. \r\n\r\nThe property includes two generous bedrooms and a family bathroom, with the main bedroom boasting an en suite and private garden.\r\n\r\nAdditional highlights include a double covered garage and a beautifully manicured private garden at the back.\r\n\r\nContact our team today for a viewing!","image":["https://www.property.co.zw/uploadedfiles/e8/25/0d/e8250dfd-9517-42ab-b1c5-9feeae9dda56_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f0/80/14/f0801491-6f52-4de0-9532-50de990dd5e8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6d/9e/bb/6d9ebb04-598e-40e1-a421-0c98e395bc6f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3b/60/78/3b6078b9-d4d7-4c99-9520-0b56efa323f8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/38/cf/b5/38cfb56c-9bf7-47bf-bd96-3578a376334c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a8/36/f2/a836f28f-4c2c-404f-8281-7d2b7db43ea5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/16/ce/1b/16ce1b1e-e714-4e8c-a5b5-2e0895be0477_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6b/e8/74/6be8742f-1d1d-44a7-a8c9-af881c0f7aab_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ff/31/16/ff311685-43fb-4414-97ed-a97a7b8ac790_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bd/c6/0a/bdc60a08-5ecc-4981-b4bd-a200e00e0c55_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/24/7e/72/247e72a9-09c7-4ea6-a922-6ad067c6a836_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/68/c4/a9/68c4a93b-6398-4852-9653-cad451214d73_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fe/bd/a8/febda849-0d97-4a88-998e-ad51568ea4df_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ef/65/4c/ef654c7b-2cfa-4f93-8a31-68499d54a5b8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f7/b8/b2/f7b8b2a0-2f36-4dfd-8aa0-60f60dc33370_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6d/75/0e/6d750eaf-b789-44cc-bfe0-35aace46f6dc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/96/3a/8f963a80-835f-4797-8170-461a9e7546d5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/71/44/3b/71443b14-ccde-4153-a0c3-1b4d8e1e0b74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/62/3f/63/623f6389-2d73-413d-b49d-c8b06d5643b1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/f5/da/15f5da46-750e-47c7-a0dd-50c63058b130_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1d/2c/e6/1d2ce696-2b49-49a1-bdec-01d671f4082b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/db/0b/c0/db0bc0a1-4454-431e-9a60-a51b4c889a08_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c7/d9/d0/c7d9d088-dccc-417b-841e-f5c863314449_thumbnail591.webp"]},"image":["https://www.property.co.zw/uploadedfiles/e8/25/0d/e8250dfd-9517-42ab-b1c5-9feeae9dda56_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f0/80/14/f0801491-6f52-4de0-9532-50de990dd5e8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6d/9e/bb/6d9ebb04-598e-40e1-a421-0c98e395bc6f_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/3b/60/78/3b6078b9-d4d7-4c99-9520-0b56efa323f8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/38/cf/b5/38cfb56c-9bf7-47bf-bd96-3578a376334c_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/a8/36/f2/a836f28f-4c2c-404f-8281-7d2b7db43ea5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/16/ce/1b/16ce1b1e-e714-4e8c-a5b5-2e0895be0477_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6b/e8/74/6be8742f-1d1d-44a7-a8c9-af881c0f7aab_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ff/31/16/ff311685-43fb-4414-97ed-a97a7b8ac790_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/bd/c6/0a/bdc60a08-5ecc-4981-b4bd-a200e00e0c55_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/24/7e/72/247e72a9-09c7-4ea6-a922-6ad067c6a836_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/68/c4/a9/68c4a93b-6398-4852-9653-cad451214d73_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/fe/bd/a8/febda849-0d97-4a88-998e-ad51568ea4df_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/ef/65/4c/ef654c7b-2cfa-4f93-8a31-68499d54a5b8_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/f7/b8/b2/f7b8b2a0-2f36-4dfd-8aa0-60f60dc33370_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/6d/75/0e/6d750eaf-b789-44cc-bfe0-35aace46f6dc_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/8f/96/3a/8f963a80-835f-4797-8170-461a9e7546d5_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/71/44/3b/71443b14-ccde-4153-a0c3-1b4d8e1e0b74_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/62/3f/63/623f6389-2d73-413d-b49d-c8b06d5643b1_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/15/f5/da/15f5da46-750e-47c7-a0dd-50c63058b130_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/1d/2c/e6/1d2ce696-2b49-49a1-bdec-01d671f4082b_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/db/0b/c0/db0bc0a1-4454-431e-9a60-a51b4c889a08_thumbnail591.webp","https://www.property.co.zw/uploadedfiles/c7/d9/d0/c7d9d088-dccc-417b-841e-f5c863314449_thumbnail591.webp"],"author":{"@type":"RealEstateAgent","name":"Pam Golding Properties","logo":"https://www.property.co.zw/uploadedfiles/76/b8/ba/76b8ba53-6999-424e-99ad-6532e21930e5.jpg"}}
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
                           href="https://www.property.co.zw/houses-for-rent?page=2">2</a>
                        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 no-underline"
                           href="https://www.property.co.zw/houses-for-rent?page=3">3</a>
                        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 no-underline"
                           href="https://www.property.co.zw/houses-for-rent?page=4">4</a>
                        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 no-underline"
                           href="https://www.property.co.zw/houses-for-rent?page=5">5</a>
                    <span class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-400 bg-gray-50 border border-gray-300 rounded-md cursor-not-allowed">...</span>
            <!-- Last Page -->
                    <span class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">22</span>

        <!-- Next Button -->
        <a class="inline-flex items-center justify-center w-10 h-10 mx-0.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 no-underline" 
           href="https://www.property.co.zw/houses-for-rent?page=2" 
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
                   href="https://www.property.co.zw/houses-for-rent?page=2">2</a>
                <a class="inline-flex items-center justify-center w-8 h-8 mx-1 px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-all duration-200 no-underline"
                   href="https://www.property.co.zw/houses-for-rent?page=3">3</a>

        <!-- Next Button (Double Arrow) -->
        <a class="inline-flex items-center justify-center w-8 h-8 mx-1 px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-all duration-200 no-underline" 
           href="https://www.property.co.zw/houses-for-rent?page=2" 
           aria-label="Next">
            <span class="text-sm font-bold leading-none">››</span>
        </a>
    </div>
    
    <!-- Results Summary -->
        <div class="text-center text-gray-500 text-sm mb-4">
            1 - 20 of 435 properties
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
                Be the first to see new properties for rent
            </p>
        </div>
        
        <!-- Button Section -->
        <div class="flex-shrink-0">
            <button onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.CreateEmailAlert('search')" class="bg-secondary hover:bg-secondary/90 text-white font-medium text-xs md:text-base px-3 py-2 md:px-6 md:py-3 rounded-md transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-secondary/50" data-cf-modified-b2460e50d817b0df62da8c5d-="">
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
                <button type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Newsletter.SubscribeBlog(this)" class="bg-secondary text-white px-5 md:px-6 py-3 md:py-2 rounded-md whitespace-nowrap md:w-auto md:mt-4" style="font-size: 15px !important;" data-cf-modified-b2460e50d817b0df62da8c5d-="">Subscribe</button>
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

                            <a aria-label="1 Bedroom properties for rent" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/1-bedroom" data-category="filter_links" data-url="/houses-for-rent/1-bedroom">
                                1 Bedroom
                            </a>
 (11)
                </li>
                <li class="mb-2">

                            <a aria-label="2 Bedroom properties for rent" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/2-bedroom" data-category="filter_links" data-url="/houses-for-rent/2-bedroom">
                                2 Bedroom
                            </a>
 (54)
                </li>
                <li class="mb-2">

                            <a aria-label="3 Bedroom properties for rent" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/3-bedroom" data-category="filter_links" data-url="/houses-for-rent/3-bedroom">
                                3 Bedroom
                            </a>
 (166)
                </li>
                <li class="mb-2">

                            <a aria-label="4 Bedroom properties for rent" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/4-bedroom" data-category="filter_links" data-url="/houses-for-rent/4-bedroom">
                                4 Bedroom
                            </a>
 (135)
                </li>
                <li class="mb-2">

                            <a aria-label="5+ Bedroom properties for rent" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/5-bedroom" data-category="filter_links" data-url="/houses-for-rent/5-bedroom">
                                5+ Bedroom
                            </a>
 (73)
                </li>
                <li class="mb-2">

                            <a aria-label="Properties with borehole for rent" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/borehole" data-category="filter_links" data-url="/houses-for-rent/borehole">
                                Borehole
                            </a>
 (290)
                </li>
                <li class="mb-2">

                            <a class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/furnished" data-category="filter_links" data-url="/houses-for-rent/furnished">
                                Fully Furnished
                            </a>
 (61)
                </li>
                <li class="mb-2">

                            <a aria-label="Properties with swimming pool for rent" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/swimming-pool" data-category="filter_links" data-url="/houses-for-rent/swimming-pool">
                                Swimming Pool
                            </a>
 (78)
                </li>
                <li class="mb-2">

                            <a aria-label="Properties on show" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/showdays" data-category="filter_links" data-url="/showdays">
                                Showdays
                            </a>

                </li>
        </ul>
        <h2 class="font-medium mb-2 pb-2 border-b border-graypurple text-base">Types of Houses</h2>
        <ul>
                <li class="mb-2">

                            <a aria-label="Townhouses &amp; Complexes for rent in Zimbabwe" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/townhouses-for-rent" data-category="filter_links" data-url="/townhouses-for-rent">
                                Townhouses &amp; Complexes
                            </a>
 (76)
                </li>
                <li class="mb-2">

                            <a aria-label="Cottages for rent in Zimbabwe" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/cottages-for-rent" data-category="filter_links" data-url="/cottages-for-rent">
                                Cottages
                            </a>
 (53)
                </li>
        </ul>
        <h2 class="font-medium mb-2 pb-2 border-b border-graypurple text-base">Provinces in Zimbabwe</h2>
        <ul>
                <li class="mb-2">

                            <a aria-label="Houses for rent in Harare" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/harare" data-category="filter_links" data-url="/houses-for-rent/harare">
                                Harare
                            </a>
 (387)
                </li>
                <li class="mb-2">

                            <a aria-label="Houses for rent in Mashonaland East" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/mashonaland-east" data-category="filter_links" data-url="/houses-for-rent/mashonaland-east">
                                Mashonaland East
                            </a>
 (31)
                </li>
                <li class="mb-2">

                            <a aria-label="Houses for rent in Bulawayo" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/bulawayo" data-category="filter_links" data-url="/houses-for-rent/bulawayo">
                                Bulawayo
                            </a>
 (9)
                </li>
                <li class="mb-2">

                            <a aria-label="Houses for rent in Mashonaland Central" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/mashonaland-central" data-category="filter_links" data-url="/houses-for-rent/mashonaland-central">
                                Mashonaland Central
                            </a>
 (3)
                </li>
                <li class="mb-2">

                            <a aria-label="Houses for rent in Midlands Province" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/midlands-province" data-category="filter_links" data-url="/houses-for-rent/midlands-province">
                                Midlands Province
                            </a>
 (3)
                </li>
                <li class="mb-2">

                            <a aria-label="Houses for rent in Mashonaland West" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/mashonaland-west" data-category="filter_links" data-url="/houses-for-rent/mashonaland-west">
                                Mashonaland West
                            </a>
 (3)
                </li>
                <li class="mb-2">

                            <a aria-label="Houses for rent in Manicaland" data-microtip-position="top" role="tooltip"
                               class="link-secondary text-graypurpledark ga-parent ga-sidebar" href="/houses-for-rent/manicaland" data-category="filter_links" data-url="/houses-for-rent/manicaland">
                                Manicaland
                            </a>
 (2)
                </li>
        </ul>


            </div>





        </div>
    </div>

    <div class="xl:w-3/4">

        

        <div class="w-full max-w-full overflow-hidden mb-6 md:mb-8" style="max-width: 788px;">
                <h2 class="text-base md:text-lg font-medium text-gray-900 mb-3 md:mb-4">What is the average price of houses for rent in Zimbabwe?</h2>
                <div class="border-l border-r border-t border-b border-gray-200 rounded-lg overflow-hidden" style="max-width: 788px;">
                    <table class="w-full text-xs md:text-sm border-collapse">
                        <thead>
                            <tr class="bg-gray-50">
                                <th class="text-left py-2 px-2 md:py-3 md:px-4 font-medium text-gray-700 border-b border-gray-200">Property Size</th>
                                <th class="text-right py-2 px-2 md:py-3 md:px-4 font-medium text-gray-700 border-b border-gray-200">Avg. price</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr class="border-b border-gray-100">
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-gray-600">
                                        1 bedroom
                                             (<a href="/houses-for-rent/1-bedroom" class="text-secondary">View 11 properties</a>)
                                    </td>
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-right text-secondary font-medium">$280</td>
                                </tr>
                                <tr class="border-b border-gray-100">
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-gray-600">
                                        2 bedroom
                                             (<a href="/houses-for-rent/2-bedroom" class="text-secondary">View 54 properties</a>)
                                    </td>
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-right text-secondary font-medium">$580</td>
                                </tr>
                                <tr class="border-b border-gray-100">
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-gray-600">
                                        3 bedroom
                                             (<a href="/houses-for-rent/3-bedroom" class="text-secondary">View 166 properties</a>)
                                    </td>
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-right text-secondary font-medium">$1,010</td>
                                </tr>
                                <tr class="border-b border-gray-100">
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-gray-600">
                                        4 bedroom
                                             (<a href="/houses-for-rent/4-bedroom" class="text-secondary">View 135 properties</a>)
                                    </td>
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-right text-secondary font-medium">$1,300</td>
                                </tr>
                                <tr class="border-b border-gray-100">
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-gray-600">
                                        5+ bedroom
                                             (<a href="/houses-for-rent/5-bedroom" class="text-secondary">View 73 properties</a>)
                                    </td>
                                    <td class="py-2 px-2 md:py-3 md:px-4 text-right text-secondary font-medium">$2,300</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    <div class="text-graypurpledark mb-4 md:p-4 md:shadow">
        <h2 class="mb-2 text-lg">Articles relating to Houses for Rent in Zimbabwe</h2>
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
                            <span class="cursor-pointer" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowLoginModal()" data-cf-modified-b2460e50d817b0df62da8c5d-="">Sign In</span> /
                            <span class="cursor-pointer" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowRegisterModal()" data-cf-modified-b2460e50d817b0df62da8c5d-="">Sign Up</span>
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
                                <span class="cursor-pointer" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowLoginModal()" data-cf-modified-b2460e50d817b0df62da8c5d-="">Sign In</span> /
                                <span class="cursor-pointer" onclick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowRegisterModal()" data-cf-modified-b2460e50d817b0df62da8c5d-="">Sign Up</span>
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



<script type="b2460e50d817b0df62da8c5d-text/javascript">
    var MAP_SERIALIZED = ``;
</script>

    <script src="https://www.google.com/recaptcha/enterprise.js?onload=RenderRecaptcha&render=explicit&hl=en" async defer type="b2460e50d817b0df62da8c5d-text/javascript"></script>

    <script src="/content/overhaul/js/portal.min.js?v=3.1.2.13121" type="b2460e50d817b0df62da8c5d-text/javascript"></script>

<script src="/content/overhaul/lib/fontawesome/__selected.min.js?v=3.1.2.13121" async type="b2460e50d817b0df62da8c5d-text/javascript"></script>




<script src="https://accounts.google.com/gsi/client" async type="b2460e50d817b0df62da8c5d-text/javascript"></script>








    <script type="b2460e50d817b0df62da8c5d-text/javascript">
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

    

    <span id="routeInfo" data-route="search_en_houses_for-rent"></span>


    
    <feather></feather>
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="b2460e50d817b0df62da8c5d-|49" defer></script></body>
</html>