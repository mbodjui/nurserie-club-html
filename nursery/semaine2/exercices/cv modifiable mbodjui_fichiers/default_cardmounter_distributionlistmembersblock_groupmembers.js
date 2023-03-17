/*! Version: 5.0.210; Third Party Notices: https://res-1.cdn.office.net/midgard/versionless/tpn-1e138cda90010e79f6f0ea3b9c956ea296cb2ddf3c7b4544e07bc3a35be38aba8ae5db3d576964342b20152f16ca20b226fb6d659ad70821a9de3aebc8f82e47.txt */
(window.webpackJsonpLpc=window.webpackJsonpLpc||[]).push([[2],{1433:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(535),r=n(0),c=n(713);function i(){return Object(r.useContext)(c.a)||Object(a.throwError)("LPCAppContext not found.")}},1488:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(1912),r=n(60),c=n(364),i=n(0),u=n(129),o=n(238),f=n(47),d=n(48),s=n(135),b=function(){function e(t,n){var a=this,r=t.skipPersonaImageCallToLoki,c=t.isVerboseLoggingEnabled,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Other";Object(f.a)(this,e),this.componentLocation=i,r&&!c||(this.monitor=n.startMonitor("PersonaPhoto","PersonaImage"),this.timeoutId=window.setTimeout((function(){return a.finish("UnexpectedFailure","Timeout")}),3e4))}return Object(d.a)(e,[{key:"validationFailed",value:function(){this.finish("ExpectedFailure","ValidationFailed")}},{key:"loadDuringValidationFailed",value:function(){this.finish("UnexpectedFailure","LoadDuringValidationFailed")}},{key:"loadAfterValidationFailed",value:function(){this.finish("UnexpectedFailure","LoadAfterValidationFailed")}},{key:"success",value:function(){this.finish("Success","")}},{key:"finish",value:function(e,t){if(window.clearTimeout(this.timeoutId),this.monitor){var n={location:this.componentLocation};switch(e){case"Success":this.monitor.success(void 0,n);break;case"ExpectedFailure":this.monitor.expectedFailure(t,n);break;case"UnexpectedFailure":this.monitor.unexpectedFailure(t,n);break;default:Object(s.a)(e)}this.monitor=void 0}}}]),e}(),l=n(1433),m=n(172),g=n(366),p=n(144),h=n(1544),v=["ce8830d0ff40100c241e5bc79dc7ffe2","965331b9e159f7e263f86866902241e8","eee5b6cbccd10ec5a3f649d5dfc9dee9","6af7a901dd68b5d5d498c5f1e2d66ffd","14a4180ae52b6f52176f7a6a42071075","43dc601f252e5ce0b89de9fa7cac016f","2d523e15f73a2b345887c8b8299c8d3c","b12545d768476534c1655ab076bdad79","cc8830d0ff40100c241e5bc79dc7ffe2","e9882f3df07114f586820abd5565fde7","7a5121cba34a6a074399ed6d2e94ca48","be3894da5f14eb7f757ded35319b512f","e1dbb58ee2627cb5cc9cb6dd2d6eae15","f4c0d60c2343ff6178f7a8e43c128adc","2a7bf178c14481a9e47b83787eafd1b1","d5cbdc4bd3a69ae6bfc3e9db341ea20e","0381c1bcfc0b809623b805e322dd9fa1","03d374b16722d252588fa2d58a3e828d","07685baa515ccd7f52defd1043fca4cc","083313c7a8083e625c0def330dbd7cdd","0f78c3aa1a3da070d8f62bb9a2ee76ae","1778a41789eadf72ff596815bd4a8142","20f0b5fb7de21fa889b002714ec58f20","2149d6090d915f849f5c33c07545fb03","241b2579d59d10255b2e405fbcbb9117","26c7e578f204869be488e32df087e0e2","279ec9ccb88c02985b4e1f645b755faf","2c19c80edd26dbefbfc7323adc6fb4c8","2d1f23069e16bf5e1eaed1b4c03be39c","2fce211aefcaec7742455aa616edfa32","3178a5744ef0cd2b61757583d7b7ccf1","319f83a0e835d32ce2660a4de654a7c0","34e191d403613fb3a3c42cbaa27dca74","39e11eeed57439c6d971d8e84e5da6f2","4a48f26592f4e1498d7a478a4c48609c","4bc07a7cc1807667bfc78ba9c0688417","41ebba55d20ff0a87734a09d88dc8f27","4739197b045029c39547248eecc07368","5b2ac03cd90e3db3055a10a112df3be3","6055f33e5272f48adac671d8cc0af2f4","613c9c11d6bfdec3dd2a568412b79762","62fe9bb236110e4553483b02e1989986","6fe016add870f202c0a30c70ee943c73","72345a09eea06abc010d913f5ba887d3","79923a371960636218ef5a11bb8de6e5","7ad602295f8386b7615b582d87bcc294","7ccb6c71fdf26d31201a153489d770aa","8193ab3946149e9175a3c3d44219e9e1","8a2bceaca7e84b8f4da535d772625c6f","8ddba906d9614422695d3c9756afee7f","9029ea4d3ee7796fe043710dfff1d218","98f88501895b89e844d24793dadc8a9f","9a85f4ab720503d37748e2d854a238dc","9e1462a50cb09ac54693e1fabc4cbb25","b3b9212834745aa4457f459f12e56653","b59a3deb5a11cd3b48a3c49af7e52c50","c065f1d4e77c3678be1ff6aa835dda69","c90802ef1184641e2943446f37b6e09f","e1847d482b48762d724c3ed4f62884ce","ebaafd3a5e1de52fc789151123ebb6ab","f032bb917d5894352c4f285224b42d30","f0d90ca687e974534dfc12798166c7e6","ffb18190d6e56748b5d6d743ff7421ad"];function w(e,t){return!function(e){if(1===e.naturalHeight&&1===e.naturalWidth)return!0;return!1}(e)&&!function(e,t){if(""===e.src)return!1;var n=function(e,t){if(!e)return null;var n=function(e,t){if(!e||""===e.src||0===e.naturalHeight&&0===e.naturalWidth)return"";var n=t.ownerDocument.createElement("canvas");n.width=e.naturalWidth,n.height=e.naturalHeight;var a=n.getContext("2d");if(!a)return"";a.drawImage(e,0,0);try{return n.toDataURL("image/png")}catch(e){return""}}(e,t).slice("data:image/png;base64,".length);if(""===n)return"";return h(n)}(e,t);if(!n)return!1;return v.some((function(e){return e===n}))}(e,t)}var U=n(1656),O=n(620);function y(e,t,n,f){var d=Object(l.a)(),s=d.settings.useMicrosoftTeamsFeatures,h=Object(a.a)(),v=i.useRef(void 0),w=function(e,t,n){return Object(u.f)(i.useCallback((function(a){var r=n;if("largeRounded"===t&&e){var c=g.a.getSelectors(a).getPersonaImage(e.lpcKey,"smallRounded");"SUCCESS"===c.status&&(r=c.imageUri.uri)}return{personaImage:g.a.getSelectors(a).getPersonaImage(e&&e.lpcKey,t),fallbackImageUrl:r,isImageValidationUsingHttpRequestsEnabled:p.a.getSelectors(a).settings.isImageValidationUsingHttpRequestsEnabled}}),[e,t,n]),u.d)}(e,t,n),y=w.personaImage,E=w.fallbackImageUrl,F=w.isImageValidationUsingHttpRequestsEnabled,j=i.useRef(void 0);return i.useEffect((function(){if(!Object(m.b)(e)&&(!v.current||v.current.key!==(null==e?void 0:e.lpcKey.key)||v.current.status!==y.status)&&(v.current={key:null==e?void 0:e.lpcKey.key,status:y.status},e&&"FAILURE"!==y.status&&"NO_IMAGE"!==y.status&&"SUCCESS"!==y.status)){j.current||(j.current=new b(d.settings,d.logger,f));var n=j.current;if("NOT_LOADED"!==y.status&&"FORCE_RELOAD"!==y.status){if("UNVERIFIED_IMAGE_URI"===y.status){var a=function(n,a){o.g(e,{uri:n,origin:a},d,t)};s?a(y.imageUri.uri,"unspecified"):function(e,t,n,a,r,i){"UNVERIFIED_IMAGE_URI"===e.status&&e.bypassBrowserCache||!Object(c.a)(e.imageUri.headers)||t?function(e,t,n,a,r){if(!e.imageUri.uri)return;var i=new XMLHttpRequest;if(i.open("GET",e.imageUri.uri),!Object(c.a)(e.imageUri.headers)){var u=e.imageUri.headers;for(var o in u)u.hasOwnProperty(o)&&i.setRequestHeader(o,u[o])}t.settings.useMicrosoftTeamsFeatures&&(i.withCredentials=!0);"UNVERIFIED_IMAGE_URI"===e.status&&e.bypassBrowserCache&&i.setRequestHeader("cache-control","no-cache");i.responseType="blob",i.onload=function(){if(i.status>=200&&i.status<300&&i.response){var e=URL.createObjectURL(i.response),c=function(e){if(!e)return"unspecified";if("media.licdn.com"===new O(e).hostname)return"linkedin";return"unspecified"}(i.responseURL);I(e,t,(function(){return n(e,c)}),(function(){return a(e,c)}),r)}else r()},i.onerror=function(){4===i.readyState&&0===i.status&&e.imageUri.uri&&t.hostAppConfiguration.isDebug?I(e.imageUri.uri,t,(function(){return n(e.imageUri.uri,"unspecified")}),(function(){return a(e.imageUri.uri,"unspecified")}),r):r()},i.send()}(e,n,a,r,i):I(e.imageUri.uri,n,(function(){return a(e.imageUri.uri,"unspecified")}),(function(){return r(e.imageUri.uri,"unspecified")}),i)}(y,F,d,a,(function(a,r){n.validationFailed(),o.f(e,{uri:a,origin:r},d,t)}),(function(){n.loadDuringValidationFailed(),e&&o.f(e,y.imageUri,d,t)}))}}else Object(U.a)(e,d,h,d.cardCorrelationId||"",d.logger,E,!0,t)}}),[e,y.status]),i.useEffect((function(){return function(){j.current&&(j.current=void 0)}}),[]),function(e){j.current&&(e===r.c.error?j.current.loadAfterValidationFailed():e===r.c.loaded&&j.current.success())}}function I(e,t,n,a,r){if(e){var c=new Image,i=function(){w(c,t)?n():a()},u=r,o=function(e){return t.ownerWindow.requestAnimationFrame((function(){return setTimeout(e,0)}))};c.onload=function(){return o(i)},c.onerror=function(){return o(u)},c.src=e}}},1656:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(10),r=n.n(a),c=n(8),i=n.n(c),u=n(16),o=n(2027),f=n(238),d=n(162),s=n(712),b=n(366),l=function(e,t,n,a){return new(n||(n=i.a))((function(r,c){function i(e){try{o(a.next(e))}catch(e){c(e)}}function u(e){try{o(a.throw(e))}catch(e){c(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}o((a=a.apply(e,t||[])).next())}))};function m(e,t,n,a,c,i,m){var g=this,p=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"smallRounded",h=t.getState(),v=t.dispatch,w=b.a.getSelectors(h).getPersonaImage(e.lpcKey,p);if(Object(f.h)(w)){var U=Object(s.a)(h,e);Object(f.d)(e,t,n,c,p,U).catch((function(){return Object(f.e)(e,t,m,a)})).catch((function(){return Object(f.c)(i)})).then((function(n){return l(g,void 0,void 0,r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(o.a)(t.ownerWindow);case 2:v(d.c({personaLpcKey:e.lpcKey,smtp:Object(u.m)(e)||"",personaImage:n,personaImageStyle:p,bypassBrowserCache:"FORCE_RELOAD"===w.status}));case 3:case"end":return a.stop()}}),a)})))}),(function(){return l(g,void 0,void 0,r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(t.ownerWindow);case 2:v(d.d({personaLpcKey:e.lpcKey,smtp:Object(u.m)(e)||"",personaImageStyle:p}));case 3:case"end":return n.stop()}}),n)})))}))}}},1912:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(450);function c(){return Object(a.useContext)(r.b)}},2027:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r=n(2);function c(e){return new Promise((function(t){var n=null!=e?e:window;n&&n.requestAnimationFrame?n.requestAnimationFrame(t):t()}))}function i(){return new Promise((function(e){(function(e){if(!(window&&window.postMessage&&window.addEventListener&&window.removeEventListener))return!1;try{var t="".concat(Math.random()),n=function(a){a.data===t&&(window.removeEventListener("message",n),e())};return window.addEventListener("message",n),window.postMessage(t,"*"),!0}catch(e){return!1}})(e)||function(e){if(!setTimeout)return!1;try{return setTimeout(e,0),!0}catch(e){return!1}}(e)||e()}))}function u(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),a||(a=function(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,c(e)];case 1:return t.sent(),a=void 0,[4,i()];case 2:return t.sent(),[2]}}))}))}(e)),[4,a];case 1:return t.sent(),[3,3];case 2:return t.sent(),[3,3];case 3:return[2]}}))}))}},2029:function(e,t,n){"use strict";function a(e){if(e&&e.personaCoinColor)return e.personaCoinColor}n.d(t,"a",(function(){return a}))},2146:function(e,t,n){"use strict";function a(e,t){var n,a,r=t||e.displayName||"";return e.personaCoinName?r=e.personaCoinName:(e.firstName||e.lastName)&&(n=e.firstName,a=e.lastName,r=n&&a?"".concat(n," ").concat(a):n||a||""),r}n.d(t,"a",(function(){return a}))}}]);