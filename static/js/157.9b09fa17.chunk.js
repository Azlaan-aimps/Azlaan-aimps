(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[157],{783:function(e,t,n){window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(2),e.exports=n(6)},function(e,t,n){(function(o,i){var r,a;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o,i){"object"==s(t)&&void 0!==e?i():void 0===(a="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=a)}(0,(function(){"use strict";function e(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}function t(){}function n(e){if(!(this instanceof n))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function r(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,n._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void c(t.promise,e)}a(t.promise,o)}else(1===e._state?a:c)(t.promise,e._value)}))):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==s(t)||"function"==typeof t)){var o=t.then;if(t instanceof n)return e._state=3,e._value=t,void d(e);if("function"==typeof o)return void l(function(e,t){return function(){e.apply(t,arguments)}}(o,t),e)}e._state=1,e._value=t,d(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,d(e)}function d(e){2===e._state&&0===e._deferreds.length&&n._immediateFn((function(){e._handled||n._unhandledRejectionFn(e._value)}));for(var t=0,o=e._deferreds.length;o>t;t++)r(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e((function(e){n||(n=!0,a(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(e){if(n)return;n=!0,c(t,e)}}var u=setTimeout;n.prototype.catch=function(e){return this.then(null,e)},n.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,n,o)),o},n.prototype.finally=e,n.all=function(e){return new n((function(t,n){function o(e,a){try{if(a&&("object"==s(a)||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,(function(t){o(e,t)}),n)}i[e]=a,0==--r&&t(i)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var r=i.length,a=0;i.length>a;a++)o(a,i[a])}))},n.resolve=function(e){return e&&"object"==s(e)&&e.constructor===n?e:new n((function(t){t(e)}))},n.reject=function(e){return new n((function(t,n){n(e)}))},n.race=function(e){return new n((function(t,n){for(var o=0,i=e.length;i>o;o++)e[o].then(t,n)}))},n._immediateFn="function"==typeof o&&function(e){o(e)}||function(e){u(e,0)},n._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var f=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw Error("unable to locate global object")}();"Promise"in f?f.Promise.prototype.finally||(f.Promise.prototype.finally=e):f.Promise=n}))}).call(this,n(3).setImmediate,n(0))},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,i,r,a,s,c=1,d={},l=!1,u=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){p(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),o=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){p(e.data)},o=function(e){r.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(i=u.documentElement,o=function(e){var t=u.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):o=function(e){setTimeout(p,0,e)},f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return d[c]=i,o(c),c++},f.clearImmediate=h}function h(e){delete d[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=d[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{h(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(5))},function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,d=[],l=!1,u=-1;function f(){l&&c&&(l=!1,c.length?d=c.concat(d):u=-1,d.length&&h())}function h(){if(!l){var e=s(f);l=!0;for(var t=d.length;t;){for(c=d,d=[];++u<t;)c&&c[u].run();u=-1,t=d.length}c=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new p(e,t)),1!==d.length||l||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t),n.d(t,"getInstance",(function(){return h}));var o={},i=0;"undefined"==typeof console&&(window.console={log:function(){},warn:function(){},error:function(){}});var r=function(){for(var e=1;e<arguments.length;e++)for(var t=Object.keys(arguments[e]),n=0;n<t.length;n++)arguments[0][t[n]]=arguments[e][t[n]];return arguments[0]},a=function(e){var t=[];return e.forEach((function(e){t.push(e)})),t},s=function(e,t){var n;try{n=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0})}catch(o){(n=document.createEvent("Event")).initEvent(e,!0,!0),n.detail=t}return n};window.PDFNet&&!o.skipPDFNetWebViewerWarning&&console.warn("PDFNet.js and WebViewer.js have been included in the same context. See https://www.pdftron.com/kb_same_context for an explanation of why this could be an error in your application.");var c=new Map,d=new Map;o.WebViewer=function(e,t){var n=this;if(d.get(t))throw new Error("Two instances of WebViewer were created on the same HTML element. Please create a new element for each instance of WebViewer");d.set(t,!0),t.addEventListener("ready",(function e(){c.get(t).instance=n.getCompleteInstance(),t.removeEventListener("ready",e)})),this._validateOptions(e),"legacy"===e.ui&&(e.uiPath="./ui-legacy/index.html"),e.fullAPI&&e.pdftronServer&&(e.forceClientSideInit||console.warn("The fullAPI and pdftronServer options have both been set so the forceClientSideInit option is now enabled. This means that WebViewer will switch to client side rendering and processing to allow use of the full API."),e.forceClientSideInit=!0),this.options=r({},o.WebViewer.Options,e);var i=this.options.path.length-1;i>0&&"/"!==this.options.path[i]&&(this.options.path+="/"),this.options.uiPath=this.options.path+this.options.uiPath,t||console.error("ViewerElement is not defined. This may be caused by calling the WebViewer constructor before the DOM is loaded, or an invalid selector. Please see http://r.pdftron.com/guides/quick-start for an example."),this.element=t,this.element.style.overflow="hidden";var a=this;this.messageHandler=function(t){if("requestl"===t.data&&t.source&&t.source.postMessage({type:"responsel",value:e.l||e.licenseKey},"*"),"requestConfig"===t.data.type&&t.data.id===a.id&&t.source){var n=e.config?a._correctRelativePath(e.config):"";t.source.postMessage({type:"responseConfig",value:n},"*")}},window.addEventListener("message",this.messageHandler,!1),this.options.autoCreate&&this.create()};var l={licenseKey:void 0,enableAzureWorkaround:!1,isAdminUser:!1,isReadOnly:!1};o.WebViewer.prototype={version:"7.3.3",create:function(){if(this.options.initialDoc){var e=this._correctRelativePath(this.options.initialDoc);e=encodeURIComponent(e),this.options.initialDoc=e,this._create()}else this._create()},_create:function(){this.id=++i,void 0===this._trigger&&(this._trigger=function(e,t){var n=s(e,t);this.element.dispatchEvent(n)});var e=this.options.type.replace(" ","").split(",");e.length<1&&(e[0]="html5"),this._createViewer(e)},_validateOptions:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var i=t[n];i in r({},l,o.WebViewer.Options)||console.warn("".concat(i," is not a valid option name. See http://r.pdftron.com/api/options_anchor for all available options."))}!e.enableRedaction||e.fullAPI||e.pdftronServer||console.warn("FullAPI or WebViewer Server is needed to apply redactions")},_notSupportedMobile:function(){var e=document.createElement("div");e.id="webviewer-browser-unsupported",e.textContent="PDF document viewing is not supported by this browser.",this.element.appendChild(e)},_createViewer:function(e){var t,n=this;if(n.selectedType=null,this.isMobileDevice()){if(this.options.documentType&&"xod"!==this.options.documentType&&!this._testWebAssembly())return void this._notSupportedMobile();if(e=Array("html5Mobile"),n.selectedType="html5Mobile",this.options.mobileRedirect)return t=this.options.uiPath+this._getHTML5OptionsURL(),void(window.location=t)}for(var o=!1,i=!1,r=0;r<e.length;r++){if("html5mobile"===e[r].toLowerCase()){if(this.options.documentType&&"xod"!==this.options.documentType&&!this._testWebAssembly())continue;if(o=!0,n._testHTML5()){if(this.options.mobileRedirect)return n.selectedType="html5Mobile",t=this.options.uiPath+this._getHTML5OptionsURL(),void(window.location=t);if(this.options.xdomainProxyUrl||n.isSameOrigin(decodeURIComponent(n.options.initialDoc))||n._testCORS()){n.selectedType="html5Mobile";break}i=!0}}if("html5"===e[r].toLowerCase()&&(o=!0,n._testHTML5())){var a=n.isSameOrigin(decodeURIComponent(n.options.initialDoc));if(this.options.xdomainProxyUrl||a||n._testCORS()){n.selectedType="html5";break}i=!0}}if("html5"===n.selectedType)n._createHTML5();else if("html5Mobile"===n.selectedType)n._createHTML5Mobile();else{var s;if(i?s="This browser does not support cross origin requests. Please configure xdomain to support CORS.":o&&(s="Please use an HTML5 compatible browser."),s){var c=document.createElement("div");c.id="webviewer-browser-unsupported",c.textContent=s,n.element.appendChild(c)}}},_viewerLoaded:function(e){var t=this;this._trigger("ready");try{var n=e.contentWindow;if(n.postMessage({type:"viewerLoaded"},"*"),void 0!==this.options.encryption){var o=decodeURIComponent(this.options.initialDoc),i={decrypt:n.CoreControls.Encryption.decrypt,decryptOptions:this.options.encryption,documentId:this.options.documentId,extension:"xod"};this.loadDocument(o,i)}null===this.instance.docViewer.getDocument()?n.addEventListener("documentLoaded",(function(){t._trigger("documentLoaded")})):this._trigger("documentLoaded"),["displayModeChanged","layoutModeChanged","zoomChanged","pageChanged","fitModeChanged","toolModeChanged","rotationChanged","finishedSavingPDF","documentMerged"].forEach((function(e){n.addEventListener(e,(function(e){t._trigger(e.type,e.detail)}))}))}catch(e){console.warn("Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See http://r.pdftron.com/kb_cross_origin for more information.")}},_isPDFExtension:function(e){var t=!1;return e&&[".pdf",".png",".jpg","jpeg"].forEach((function(n){e===n&&(t=!0)})),t},_isOfficeExtension:function(e){var t=!1;return e&&[".docx",".doc",".pptx"].forEach((function(n){e===n&&(t=!0)})),t},_getHTML5OptionsURL:function(){var e,t,n,o=this.options,i="";if(o.initialDoc&&(i+="#d=".concat(o.initialDoc)),void 0===o.backendType&&(o.backendType=o.pdfBackend),o.documentType&&"xod"===o.documentType&&(e=o.documentType),o.preloadWorker&&"xod"===o.preloadWorker&&(e=o.preloadWorker),o.extension&&(e=o.extension),e&&(i+="&extension=".concat(e)),o.documentType&&"xod"!==o.documentType&&(t=o.documentType),o.preloadWorker&&"xod"!==o.preloadWorker&&(t=o.preloadWorker),t&&(i+="&preloadWorker=".concat(t)),o.backendType&&(i+="&pdf=".concat(o.backendType,"&office=").concat(o.backendType)),o.filename&&(i+="&filename=".concat(o.filename)),void 0!==o.streaming&&(i+="&streaming=".concat(o.streaming)),o.externalPath){var r=this._correctRelativePath(o.externalPath);r=encodeURIComponent(r),i+="&p=".concat(r)}if(o.encryption&&(i+="&auto_load=false"),o.enableAnnotations&&(i+="&a=1"),o.disabledElements){var a=encodeURIComponent(o.disabledElements.join(","));i+="&disabledElements=".concat(a)}if(o.serverUrl){var s=this._correctRelativePath(o.serverUrl);s=encodeURIComponent(s),i+="&server_url=".concat(s)}if(o.serverUrlHeaders&&(i+="&serverUrlHeaders=".concat(JSON.stringify(o.serverUrlHeaders))),o.documentId&&(i+="&did=".concat(o.documentId)),o.css){var c=this._correctRelativePath(o.css);c=encodeURIComponent(c),i+="&css=".concat(c)}return o.disableI18n&&(i+="&disableI18n=1"),o.enableOfflineMode&&(i+="&offline=1"),o.startOffline&&(i+="&startOffline=1"),(o.enableReadOnlyMode||o.isReadOnly)&&(i+="&readonly=1"),o.hideAnnotationPanel&&(i+="&hideAnnotationPanel=1"),o.disableToolGroupReordering&&(i+="&disableToolGroupReordering=1"),void 0!==o.annotationUser&&(i+="&user=".concat(o.annotationUser)),void 0===o.annotationAdmin&&void 0===o.isAdminUser||(i+="&admin=".concat(o.annotationAdmin||o.isAdminUser?1:0)),void 0!==o.custom&&(i+="&custom=".concat(encodeURIComponent(o.custom))),void 0===o.showLocalFilePicker&&void 0===o.enableFilePicker||(i+="&filepicker=".concat(o.showLocalFilePicker||o.enableFilePicker?1:0)),void 0!==o.fullAPI&&(i+="&pdfnet=".concat(o.fullAPI?1:0)),void 0!==o.enableRedaction&&(i+="&enableRedaction=".concat(o.enableRedaction?1:0)),void 0!==o.enableMeasurement&&(i+="&enableMeasurement=".concat(o.enableMeasurement?1:0)),void 0!==o.showToolbarControl&&(i+="&toolbar=".concat(o.showToolbarControl?"true":"false")),void 0!==o.showPageHistoryButtons&&(i+="&pageHistory=".concat(o.showPageHistoryButtons?1:0)),void 0!==o.notesInLeftPanel&&(i+="&notesInLeftPanel=".concat(o.notesInLeftPanel?1:0)),void 0!==o.xdomainProxyUrl&&(n="string"==typeof o.xdomainProxyUrl?{url:o.xdomainProxyUrl}:o.xdomainProxyUrl,i+="&xdomain_urls=".concat(encodeURIComponent(JSON.stringify(n)))),(o.azureWorkaround||o.enableAzureWorkaround)&&(i+="&azureWorkaround=1"),o.useDownloader||(i+="&useDownloader=0"),o.disableWebsockets&&(i+="&disableWebsockets=1"),o.disableStreaming&&(i+="&disableStreaming=1"),o.forceClientSideInit&&(i+="&forceClientSideInit=1"),o.loadAsPDF&&(i+="&loadAsPDF=1"),void 0!==o.workerTransportPromise&&(i+="&useSharedWorker=".concat(o.workerTransportPromise?"true":"false")),void 0!==o.pdftronServer&&o.pdftronServer&&(i+="&pdftronServer=".concat(encodeURIComponent(o.pdftronServer))),o.fallbackToClientSide&&(i+="&fallbackToClientSide=1"),void 0!==o.singleServerMode&&(i+="&singleServerMode=".concat(o.singleServerMode?"true":"false")),void 0!==o.accessibleMode&&(i+="&accessibleMode=".concat(o.accessibleMode?1:0)),o.disableLogs&&(i+="&disableLogs=1"),o.enableViewStateAnnotations&&(i+="&enableViewStateAnnotations=1"),o.disableFlattenedAnnotations&&(i+="&disableFlattenedAnnotations=1"),o.highContrastMode&&(i+="&highContrastMode=1"),void 0!==o.selectAnnotationOnCreation&&(i+="&selectAnnotationOnCreation=".concat(o.selectAnnotationOnCreation?1:0)),(i+="&id=".concat(this.id)).length>0&&"&"===i[0]&&(i="#".concat(i.slice(1))),i},setInstanceData:function(e){c.set(this.element,{iframe:e,l:this.options.l||this.options.licenseKey,workerTransportPromise:this.options.workerTransportPromise})},_createHTML5:function(){var e=this,t=this.options.uiPath+this._getHTML5OptionsURL(),n=document.createElement("iframe");this.setInstanceData(n),n.id="webviewer-".concat(this.id),n.src=t,n.title="webviewer",n.frameBorder=0,n.width="100%",n.height="100%",n.setAttribute("allowfullscreen",!0),n.setAttribute("webkitallowfullscreen",!0),n.setAttribute("mozallowfullscreen",!0),this.iframe=n,this.options.backgroundColor&&n.setAttribute("data-bgcolor",this.options.backgroundColor),this.options.assetPath&&n.setAttribute("data-assetpath",encodeURIComponent(this.options.assetPath)),this.loadListener=function(){var t=e.iframe;try{e.instance=t.contentWindow.readerControl,void 0===e.instance?t.contentWindow.addEventListener("viewerLoaded",(function(){e.instance=t.contentWindow.readerControl,e._viewerLoaded(t)})):e._viewerLoaded(t)}catch(n){e._viewerLoaded(t)}},n.addEventListener("load",this.loadListener),this.element.appendChild(n)},_createHTML5Mobile:function(){var e=this,t=this.options.uiPath+this._getHTML5OptionsURL(),n=document.createElement("iframe");this.setInstanceData(n),n.id="webviewer-".concat(this.id),n.src=t,n.frameborder=0,this.options.assetPath&&n.setAttribute("data-assetpath",encodeURIComponent(this.options.assetPath)),n.style.width="100%",n.style.height="100%",this.iframe=n,this.loadListener=function(){var t=e.iframe;try{e.instance=t.contentWindow.readerControl,void 0===e.instance?t.contentWindow.addEventListener("viewerLoaded",(function(){e.instance=t.contentWindow.readerControl,e._viewerLoaded(t)})):e._viewerLoaded(t)}catch(n){e._viewerLoaded(t)}},n.addEventListener("load",this.loadListener),this.element.appendChild(n)},dispose:function(){c.delete(this.element),d.delete(this.element),this.instance.closeDocument(),window.removeEventListener("message",this.messageHandler),this.iframe.removeEventListener("load",this.loadListener),this.iframe=null},getInstance:function(){return this.instance},setCompleteInstance:function(e){this.completeInstance=e},getCompleteInstance:function(e){return this.completeInstance},getSideWindowVisibility:function(){return this.getInstance().getShowSideWindow()},setSideWindowVisibility:function(e){this.getInstance().setShowSideWindow(e)},getShowSideWindow:function(){return this.getSideWindowVisibility()},setShowSideWindow:function(e){this.setSideWindowVisibility(e)},getToolbarVisibility:function(){console.warn("Unsupported method getToolbarVisibility")},setToolbarVisibility:function(e){this.getInstance().setToolbarVisibility(e)},getCurrentPageNumber:function(){return this.getInstance().getCurrentPageNumber()},setCurrentPageNumber:function(e){this.getInstance().setCurrentPageNumber(e)},getPageCount:function(){return this.getInstance().getPageCount()},getZoomLevel:function(){return this.getInstance().getZoomLevel()},setZoomLevel:function(e){this.getInstance().setZoomLevel(e)},rotateClockwise:function(){this.getInstance().rotateClockwise()},rotateCounterClockwise:function(){this.getInstance().rotateCounterClockwise()},getLayoutMode:function(){var e,t=this.getInstance().getLayoutMode(),n=this.iframe.contentWindow.CoreControls.DisplayModes;return t===n.Single?e=o.WebViewer.LayoutMode.Single:t===n.Continuous?e=o.WebViewer.LayoutMode.Continuous:t===n.Facing?e=o.WebViewer.LayoutMode.Facing:t===n.FacingContinuous?e=o.WebViewer.LayoutMode.FacingContinuous:t===n.Cover?e=o.WebViewer.LayoutMode.FacingCoverContinuous:t===n.CoverFacing&&(e=o.WebViewer.LayoutMode.FacingCover),e},setLayoutMode:function(e){var t=this.iframe.contentWindow.CoreControls.DisplayModes,n=t.Continuous;e===o.WebViewer.LayoutMode.Single?n=t.Single:e===o.WebViewer.LayoutMode.Continuous?n=t.Continuous:e===o.WebViewer.LayoutMode.Facing?n=t.Facing:e===o.WebViewer.LayoutMode.FacingContinuous?n=t.FacingContinuous:e===o.WebViewer.LayoutMode.FacingCover?n=t.CoverFacing:e===o.WebViewer.LayoutMode.FacingCoverContinuous&&(n=t.Cover),this.getInstance().setLayoutMode(n)},getToolMode:function(){return this.getInstance().getToolMode()},setToolMode:function(e){this.getInstance().setToolMode(e)},fitWidth:function(){var e=this.getInstance().docViewer;e.setFitMode(e.FitMode.FitWidth)},fitHeight:function(){},fitPage:function(){var e=this.getInstance().docViewer;e.setFitMode(e.FitMode.FitPage)},getFitMode:function(){var e=this.getInstance().getFitMode(),t=this.getInstance().docViewer.FitMode;switch(e){case t.FitWidth:return o.WebViewer.FitMode.FitWidth;case t.FitHeight:return o.WebViewer.FitMode.FitHeight;case t.FitPage:return o.WebViewer.FitMode.FitPage;case t.Zoom:return o.WebViewer.FitMode.Zoom;default:console.warn("Unsupported fit mode")}},setFitMode:function(e){e===o.WebViewer.FitMode.FitWidth?this.fitWidth():e===o.WebViewer.FitMode.FitHeight?this.fitHeight():e===o.WebViewer.FitMode.FitPage?this.fitPage():e===o.WebViewer.FitMode.Zoom?this.zoom():console.warn("Unsupported fit mode: ".concat(e))},zoom:function(){var e=this.getInstance().docViewer;e.setFitMode(e.FitMode.Zoom)},goToFirstPage:function(){this.getInstance().goToFirstPage()},goToLastPage:function(){this.getInstance().goToLastPage()},goToNextPage:function(){this.getInstance().goToNextPage()},goToPrevPage:function(){this.getInstance().goToPrevPage()},loadDocument:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={streaming:this.options.streaming},o=r({},n,t);void 0!==o.documentId&&(this.getInstance().docId=o.documentId),this.getInstance().loadDocument(this._correctRelativePath(e),o)},searchText:function(e,t){var n=0,o=t;if("string"==typeof o&&(o=t.split(",")),void 0!==o)for(var i=0;i<o.length;i++)"CaseSensitive"===o[i]?n+=1:"WholeWord"===o[i]?n+=2:"SearchUp"===o[i]?n+=4:"PageStop"===o[i]?n+=8:"ProvideQuads"===o[i]?n+=16:"AmbientString"===o[i]&&(n+=32);void 0===t?this.getInstance().searchText(e):this.getInstance().searchText(e,n)},setAnnotationUser:function(e){this.getInstance().setAnnotationUser(e)},setAdminUser:function(e){this.getInstance().setAdminUser(e)},setReadOnly:function(e){this.getInstance().setReadOnly(e)},downloadXodDocument:function(){if("xod"===this.documentType){var e=decodeURIComponent(this.options.initialDoc);window.open(e)}else console.warn("Unsupported method for this document type")},startPrintJob:function(e){"html5"===this.selectedType?this.getInstance().startPrintJob(e):console.warn("Unsupported method startPrintJob")},endPrintJob:function(){"html5"===this.selectedType?this.getInstance().endPrintJob():console.warn("Unsupported method endPrintJob")},_correctRelativePath:function(e){if("string"!=typeof e)return e;var t=window.location.pathname.substr(0,window.location.pathname.lastIndexOf("/"));return/^(\/|%2F|[a-z0-9-]+:)/i.test(e)?e:"".concat(t,"/").concat(e)},_testHTML5:function(){try{var e=document.createElement("canvas");return e&&e.getContext("2d")}catch(e){return!1}},_testWebAssembly:function(){return!(!window.WebAssembly||!window.WebAssembly.validate)},_supports:function(e){if(e===this.selectedType)return!0;for(var t=1;t<arguments.length;t++)if(arguments[t]===this.selectedType)return!0;return!1},_testCORS:function(){return"XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest},isIE:function(){var e=navigator.userAgent.toLowerCase(),t=/(msie) ([\w.]+)/.exec(e)||/(trident)(?:.*? rv:([\w.]+)|)/.exec(e);return t?parseInt(t[2],10):t},isMobileDevice:function(){return!this.isIE()&&(0===this.scrollbarWidth()&&navigator.userAgent.match(/Edge/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Touch/i)||navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/Silk/i))},scrollbarWidth:function(){var e=document.createElement("div");e.style.cssText="width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},isSameOrigin:function(e){var t=window.location,n=document.createElement("a");n.href=e,""===n.host&&(n.href=n.href);var o=window.location.port,i=n.port;return"http:"===n.protocol?(i=i||"80",o=o||"80"):"https:"===n.protocol&&(i=i||"443",o=o||"443"),n.hostname===t.hostname&&n.protocol===t.protocol&&i===o},runInIframe:function(e){var t=this.element.querySelector("iframe").contentWindow,n=this,o=function o(){n.element.removeEventListener("ready",o),e(t,n.getInstance(),t.$)};this.getInstance()?setTimeout(o,0):this.element.addEventListener("ready",o)}},o.WebViewer.Options={initialDoc:void 0,annotationAdmin:void 0,isAdminUser:void 0,annotationUser:void 0,assetPath:void 0,autoCreate:!0,azureWorkaround:!1,enableAzureWorkaround:!1,backgroundColor:void 0,backendType:void 0,css:void 0,config:void 0,custom:void 0,documentId:void 0,documentType:void 0,preloadWorker:void 0,extension:void 0,enableAnnotations:!0,filename:void 0,disableI18n:!1,disabledElements:void 0,disableWebsockets:!1,enableOfflineMode:!1,enableReadOnlyMode:!1,isReadOnly:!1,enableRedaction:!1,enableMeasurement:!1,encryption:void 0,externalPath:void 0,hideAnnotationPanel:!1,disableToolGroupReordering:!1,uiPath:"./ui/index.html",l:void 0,licenseKey:void 0,mobileRedirect:!1,path:"",pdfBackend:void 0,pdftronServer:void 0,fallbackToClientSide:!1,singleServerMode:!1,fullAPI:!1,preloadPDFWorker:!0,serverUrl:void 0,serverUrlHeaders:void 0,showLocalFilePicker:!1,enableFilePicker:!1,showPageHistoryButtons:!0,showToolbarControl:void 0,startOffline:!1,streaming:void 0,type:"html5",useDownloader:!0,workerTransportPromise:void 0,xdomainProxyUrl:void 0,ui:void 0,forceClientSideInit:!1,loadAsPDF:!1,accessibleMode:void 0,disableLogs:!1,enableViewStateAnnotations:!1,highContrastMode:!1,selectAnnotationOnCreation:!1,notesInLeftPanel:!1,documentXFDFRetriever:void 0,disableFlattenedAnnotations:!1,disableStreaming:!1},o.WebViewer.LayoutMode={Continuous:"Continuous",FacingCoverContinuous:"CoverContinuous",Facing:"Facing",FacingContinuous:"FacingContinuous",FacingCover:"FacingCover",Single:"SinglePage"},o.WebViewer.ToolMode={AnnotationCreateArrow:"AnnotationCreateArrow",AnnotationCreateCallout:"AnnotationCreateCallout",AnnotationCreateEllipse:"AnnotationCreateEllipse",AnnotationCreateFreeHand:"AnnotationCreateFreeHand",AnnotationCreateFreeText:"AnnotationCreateFreeText",AnnotationCreateLine:"AnnotationCreateLine",AnnotationCreatePolygon:"AnnotationCreatePolygon",AnnotationCreatePolygonCloud:"AnnotationCreatePolygonCloud",AnnotationCreatePolyline:"AnnotationCreatePolyline",AnnotationCreateRectangle:"AnnotationCreateRectangle",AnnotationCreateSignature:"AnnotationCreateSignature",AnnotationCreateStamp:"AnnotationCreateStamp",AnnotationCreateSticky:"AnnotationCreateSticky",AnnotationCreateTextHighlight:"AnnotationCreateTextHighlight",AnnotationCreateTextSquiggly:"AnnotationCreateTextSquiggly",AnnotationCreateTextStrikeout:"AnnotationCreateTextStrikeout",AnnotationCreateTextUnderline:"AnnotationCreateTextUnderline",AnnotationEdit:"AnnotationEdit"},o.WebViewer.FitMode={FitHeight:"FitHeight",FitPage:"FitPage",FitWidth:"FitWidth",Zoom:"Zoom"},o.WebViewer.SearchMode={CaseSensitive:1,WholeWord:2,SearchUp:4,PageStop:8,ProvideQuads:16,AmbientString:32},o.WebViewer.User=function(e,t,n){this.username=e,this.isAdmin=void 0!==t&&t,this.isReadOnly=void 0!==n&&n};var u=function(e,t){return new Promise((function(n,i){e.l=e.l||e.licenseKey,e.azureWorkaround=e.azureWorkaround||e.enableAzureWorkaround,e.annotationAdmin=e.annotationAdmin||e.isAdminUser,e.enableReadOnlyMode=e.enableReadOnlyMode||e.isReadOnly,e.showLocalFilePicker=e.showLocalFilePicker||e.enableFilePicker,t.addEventListener("ready",(function o(){t.removeEventListener("ready",o);try{var s=t.querySelector("iframe").contentWindow,c=s.Tools;if(void 0===c)return i("Viewer isn't instantiated correctly. It could be caused by the 'path' option in the WebViewer constructor not being defined correctly. The 'path' option should be relative to the HTML file you're loading the script on and the lib folder needs to be publicly accessible.");var d=a.getInstance(),l=r({},d,{dispose:a.dispose.bind(a),Tools:c,Annotations:s.Annotations,CoreControls:s.CoreControls,PartRetrievers:s.CoreControls.PartRetrievers,Actions:s.Actions,PDFNet:s.PDFNet,annotManager:d.docViewer.getAnnotationManager(),docViewer:d.docViewer,iframeWindow:s});a.setCompleteInstance(l);var u=Promise.resolve();e.documentXFDFRetriever&&(u=l.docViewer.setDocumentXFDFRetriever(e.documentXFDFRetriever)),u.then((function(){n(l)}))}catch(e){i("Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See https://www.pdftron.com/kb_cross_origin for more information.")}}));var a=new o.WebViewer(e,t)}))},f=function(e){for(var t=a(c),n=0;n<t.length;n++){var o=t[n];if(o.iframe===e)return o}return null};u.l=function(e){var t=f(e);return t&&t.l},u.workerTransportPromise=function(e){var t=f(e);return t&&t.workerTransportPromise};var h=function(e){var t=a(c);if(!t.length||!t.filter((function(e){return e.instance})).length)return console.warn("WebViewer.getInstance() was called before any instances were available"),null;if(t.length>1&&!e)throw new Error("More than one instance of WebViewer was found, and no element was passed into getInstance(). Please specify which instance you want to get.");return e?(c.get(e)||{}).instance:(t[0]||{}).instance};u.getInstance=h,window.getInstance=h,window.PDFTron=o,window.WebViewer=u,t.default=u}])}}]);
//# sourceMappingURL=157.9b09fa17.chunk.js.map