(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.maptilersdk = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var maplibreGl = {exports: {}};

	/* MapLibre GL JS is licensed under the 3-Clause BSD License. Full text of license: https://github.com/maplibre/maplibre-gl-js/blob/v3.5.2/LICENSE.txt */

	(function (module, exports) {
		(function (global, factory) {
		module.exports = factory() ;
		})(commonjsGlobal, (function () {
		/* eslint-disable */

		var shared, worker, maplibregl;
		// define gets called three times: one for each chunk. we rely on the order
		// they're imported to know which is which
		function define(_, chunk) {
		    if (!shared) {
		        shared = chunk;
		    } else if (!worker) {
		        worker = chunk;
		    } else {
		        var workerBundleString = 'var sharedChunk = {}; (' + shared + ')(sharedChunk); (' + worker + ')(sharedChunk);';

		        var sharedChunk = {};
		        shared(sharedChunk);
		        maplibregl = chunk(sharedChunk);
		        if (typeof window !== 'undefined') {
		            maplibregl.workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
		        }
		    }
		}


		define(["exports"],(function(t){function e(t,e,r,n){return new(r||(r=Promise))((function(i,a){function s(t){try{l(n.next(t));}catch(t){a(t);}}function o(t){try{l(n.throw(t));}catch(t){a(t);}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e);}))).then(s,o);}l((n=n.apply(t,e||[])).next());}))}function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}"function"==typeof SuppressedError&&SuppressedError;var n=i;function i(t,e){this.x=t,this.y=e;}i.prototype={clone:function(){return new i(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[2]*this.x+t[3]*this.y;return this.x=t[0]*this.x+t[1]*this.y,this.y=e,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=r*this.x+e*this.y;return this.x=e*this.x-r*this.y,this.y=n,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=e.x+r*(this.x-e.x)-n*(this.y-e.y),this.y=i,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},i.convert=function(t){return t instanceof i?t:Array.isArray(t)?new i(t[0],t[1]):t};var a=r(n),s=o;function o(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=e,this.p2x=r,this.p2y=n;}o.prototype={sampleCurveX:function(t){return ((this.ax*t+this.bx)*t+this.cx)*t},sampleCurveY:function(t){return ((this.ay*t+this.by)*t+this.cy)*t},sampleCurveDerivativeX:function(t){return (3*this.ax*t+2*this.bx)*t+this.cx},solveCurveX:function(t,e){if(void 0===e&&(e=1e-6),t<0)return 0;if(t>1)return 1;for(var r=t,n=0;n<8;n++){var i=this.sampleCurveX(r)-t;if(Math.abs(i)<e)return r;var a=this.sampleCurveDerivativeX(r);if(Math.abs(a)<1e-6)break;r-=i/a;}var s=0,o=1;for(r=t,n=0;n<20&&(i=this.sampleCurveX(r),!(Math.abs(i-t)<e));n++)t>i?s=r:o=r,r=.5*(o-s)+s;return r},solve:function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))}};var l=r(s);let u,c;function h(){return null==u&&(u="undefined"!=typeof OffscreenCanvas&&new OffscreenCanvas(1,1).getContext("2d")&&"function"==typeof createImageBitmap),u}function p(){if(null==c&&(c=!1,h())){const t=5,e=new OffscreenCanvas(t,t).getContext("2d",{willReadFrequently:!0});if(e){for(let r=0;r<t*t;r++){const n=4*r;e.fillStyle=`rgb(${n},${n+1},${n+2})`,e.fillRect(r%t,Math.floor(r/t),1,1);}const r=e.getImageData(0,0,t,t).data;for(let e=0;e<t*t*4;e++)if(e%4!=3&&r[e]!==e){c=!0;break}}}return c||!1}function f(t,e,r,n){const i=new l(t,e,r,n);return function(t){return i.solve(t)}}const d=f(.25,.1,.25,1);function y(t,e,r){return Math.min(r,Math.max(e,t))}function m(t,e,r){const n=r-e,i=((t-e)%n+n)%n+e;return i===e?r:i}function g(t,...e){for(const r of e)for(const e in r)t[e]=r[e];return t}let x=1;function v(t,e,r){const n={};for(const i in t)n[i]=e.call(r||this,t[i],i,t);return n}function b(t,e,r){const n={};for(const i in t)e.call(r||this,t[i],i,t)&&(n[i]=t[i]);return n}function w(t){return Array.isArray(t)?t.map(w):"object"==typeof t&&t?v(t,w):t}const _={};function A(t){_[t]||("undefined"!=typeof console&&console.warn(t),_[t]=!0);}function S(t,e,r){return (r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function k(t){let e=0;for(let r,n,i=0,a=t.length,s=a-1;i<a;s=i++)r=t[i],n=t[s],e+=(n.x-r.x)*(r.y+n.y);return e}function I(){return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}let z=null;function M(t){return "undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap}const C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";function B(t,r,n,i,a){return e(this,void 0,void 0,(function*(){if("undefined"==typeof VideoFrame)throw new Error("VideoFrame not supported");const e=new VideoFrame(t,{timestamp:0});try{const s=null==e?void 0:e.format;if(!s||!s.startsWith("BGR")&&!s.startsWith("RGB"))throw new Error(`Unrecognized format ${s}`);const o=s.startsWith("BGR"),l=new Uint8ClampedArray(i*a*4);if(yield e.copyTo(l,function(t,e,r,n,i){const a=4*Math.max(-e,0),s=(Math.max(0,r)-r)*n*4+a,o=4*n,l=Math.max(0,e),u=Math.max(0,r);return {rect:{x:l,y:u,width:Math.min(t.width,e+n)-l,height:Math.min(t.height,r+i)-u},layout:[{offset:s,stride:o}]}}(t,r,n,i,a)),o)for(let t=0;t<l.length;t+=4){const e=l[t];l[t]=l[t+2],l[t+2]=e;}return l}finally{e.close();}}))}let P,V,E,F;const T={now:"undefined"!=typeof performance&&performance&&performance.now?performance.now.bind(performance):Date.now.bind(Date),frame(t){const e=requestAnimationFrame(t);return {cancel:()=>cancelAnimationFrame(e)}},getImageData(t,e=0){return this.getImageCanvasContext(t).getImageData(-e,-e,t.width+2*e,t.height+2*e)},getImageCanvasContext(t){const e=window.document.createElement("canvas"),r=e.getContext("2d",{willReadFrequently:!0});if(!r)throw new Error("failed to create canvas 2d context");return e.width=t.width,e.height=t.height,r.drawImage(t,0,0,t.width,t.height),r},resolveURL:t=>(E||(E=document.createElement("a")),E.href=t,E.href),hardwareConcurrency:"undefined"!=typeof navigator&&navigator.hardwareConcurrency||4,get prefersReducedMotion(){return !!matchMedia&&(null==F&&(F=matchMedia("(prefers-reduced-motion: reduce)")),F.matches)}},$={MAX_PARALLEL_IMAGE_REQUESTS:16,MAX_PARALLEL_IMAGE_REQUESTS_PER_FRAME:8,MAX_TILE_CACHE_ZOOM_LEVELS:5,REGISTERED_PROTOCOLS:{},WORKER_URL:""};class L extends Error{constructor(t,e,r,n){super(`AJAXError: ${e} (${t}): ${r}`),this.status=t,this.statusText=e,this.url=r,this.body=n;}}const D=I()?()=>self.worker&&self.worker.referrer:()=>("blob:"===window.location.protocol?window.parent:window).location.href,O=t=>$.REGISTERED_PROTOCOLS[t.substring(0,t.indexOf("://"))];function U(t,e){const r=new AbortController,n=new Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,cache:t.cache,referrer:D(),signal:r.signal});let i=!1,a=!1;"json"===t.type&&n.headers.set("Accept","application/json");return a||fetch(n).then((r=>r.ok?(r=>{("arrayBuffer"===t.type||"image"===t.type?r.arrayBuffer():"json"===t.type?r.json():r.text()).then((t=>{a||(i=!0,e(null,t,r.headers.get("Cache-Control"),r.headers.get("Expires")));})).catch((t=>{a||e(new Error(t.message));}));})(r):r.blob().then((n=>e(new L(r.status,r.statusText,t.url,n)))))).catch((t=>{20!==t.code&&e(new Error(t.message));})),{cancel:()=>{a=!0,i||r.abort();}}}const R=function(t,e){if(/:\/\//.test(t.url)&&!/^https?:|^file:/.test(t.url)){if(I()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e);if(!I())return (O(t.url)||U)(t,e)}if(!(/^file:/.test(r=t.url)||/^file:/.test(D())&&!/^\w+:/.test(r))){if(fetch&&Request&&AbortController&&Object.prototype.hasOwnProperty.call(Request.prototype,"signal"))return U(t,e);if(I()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e,void 0,!0)}var r;return function(t,e){const r=new XMLHttpRequest;r.open(t.method||"GET",t.url,!0),"arrayBuffer"!==t.type&&"image"!==t.type||(r.responseType="arraybuffer");for(const e in t.headers)r.setRequestHeader(e,t.headers[e]);return "json"===t.type&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials="include"===t.credentials,r.onerror=()=>{e(new Error(r.statusText));},r.onload=()=>{if((r.status>=200&&r.status<300||0===r.status)&&null!==r.response){let n=r.response;if("json"===t.type)try{n=JSON.parse(r.response);}catch(t){return e(t)}e(null,n,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"));}else {const n=new Blob([r.response],{type:r.getResponseHeader("Content-Type")});e(new L(r.status,r.statusText,t.url,n));}},r.send(t.body),{cancel:()=>r.abort()}}(t,e)},q=function(t,e){return R(g(t,{type:"arrayBuffer"}),e)};function j(t){if(!t||t.indexOf("://")<=0||0===t.indexOf("data:image/")||0===t.indexOf("blob:"))return !0;const e=new URL(t),r=window.location;return e.protocol===r.protocol&&e.host===r.host}function N(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e));}function Z(t,e,r){if(r&&r[t]){const n=r[t].indexOf(e);-1!==n&&r[t].splice(n,1);}}class K{constructor(t,e={}){g(this,e),this.type=t;}}class G extends K{constructor(t,e={}){super("error",g({error:t},e));}}class J{on(t,e){return this._listeners=this._listeners||{},N(t,e,this._listeners),this}off(t,e){return Z(t,e,this._listeners),Z(t,e,this._oneTimeListeners),this}once(t,e){return e?(this._oneTimeListeners=this._oneTimeListeners||{},N(t,e,this._oneTimeListeners),this):new Promise((e=>this.once(t,e)))}fire(t,e){"string"==typeof t&&(t=new K(t,e||{}));const r=t.type;if(this.listens(r)){t.target=this;const e=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];for(const r of e)r.call(this,t);const n=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];for(const e of n)Z(r,e,this._oneTimeListeners),e.call(this,t);const i=this._eventedParent;i&&(g(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),i.fire(t));}else t instanceof G&&console.error(t.error);return this}listens(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)}setEventedParent(t,e){return this._eventedParent=t,this._eventedParentData=e,this}}var X={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},terrain:{type:"terrain"},sources:{required:!0,type:"sources"},sprite:{type:"sprite"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},promoteId:{type:"promoteId"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{},custom:{}},default:"mapbox"},redFactor:{type:"number",default:1},blueFactor:{type:"number",default:1},greenFactor:{type:"number",default:1},baseShift:{type:"number",default:0},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{required:!0,type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},filter:{type:"*"},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterMinPoints:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1},promoteId:{type:"promoteId"}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image",{"!":"icon-overlap"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-overlap":{type:"enum",values:{never:{},always:{},cooperative:{}},requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"resolvedImage",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"padding",default:[2],units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},"viewport-glyph":{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-variable-anchor-offset":{type:"variableAnchorOffsetCollection",requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field",{"!":"text-overlap"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-overlap":{type:"enum",values:{never:{},always:{},cooperative:{}},requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{},within:{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:24,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},terrain:{source:{type:"string",required:!0},exaggeration:{type:"number",minimum:0,default:1}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}},promoteId:{"*":{type:"string"}}};const Y=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function H(t,e){const r={};for(const e in t)"ref"!==e&&(r[e]=t[e]);return Y.forEach((t=>{t in e&&(r[t]=e[t]);})),r}function W(t,e){if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return !1;for(let r=0;r<t.length;r++)if(!W(t[r],e[r]))return !1;return !0}if("object"==typeof t&&null!==t&&null!==e){if("object"!=typeof e)return !1;if(Object.keys(t).length!==Object.keys(e).length)return !1;for(const r in t)if(!W(t[r],e[r]))return !1;return !0}return t===e}const Q={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setGeoJSONSourceData:"setGeoJSONSourceData",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"};function tt(t,e,r){r.push({command:Q.addSource,args:[t,e[t]]});}function et(t,e,r){e.push({command:Q.removeSource,args:[t]}),r[t]=!0;}function rt(t,e,r,n){et(t,r,n),tt(t,e,r);}function nt(t,e,r){let n;for(n in t[r])if(Object.prototype.hasOwnProperty.call(t[r],n)&&"data"!==n&&!W(t[r][n],e[r][n]))return !1;for(n in e[r])if(Object.prototype.hasOwnProperty.call(e[r],n)&&"data"!==n&&!W(t[r][n],e[r][n]))return !1;return !0}function it(t,e,r,n,i,a){let s;for(s in e=e||{},t=t||{})Object.prototype.hasOwnProperty.call(t,s)&&(W(t[s],e[s])||r.push({command:a,args:[n,s,e[s],i]}));for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&!Object.prototype.hasOwnProperty.call(t,s)&&(W(t[s],e[s])||r.push({command:a,args:[n,s,e[s],i]}));}function at(t){return t.id}function st(t,e){return t[e.id]=e,t}class ot{constructor(t,e,r,n){this.message=(t?`${t}: `:"")+r,n&&(this.identifier=n),null!=e&&e.__line__&&(this.line=e.__line__);}}function lt(t,...e){for(const r of e)for(const e in r)t[e]=r[e];return t}class ut extends Error{constructor(t,e){super(e),this.message=e,this.key=t;}}class ct{constructor(t,e=[]){this.parent=t,this.bindings={};for(const[t,r]of e)this.bindings[t]=r;}concat(t){return new ct(this,t)}get(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(`${t} not found in scope.`)}has(t){return !!this.bindings[t]||!!this.parent&&this.parent.has(t)}}const ht={kind:"null"},pt={kind:"number"},ft={kind:"string"},dt={kind:"boolean"},yt={kind:"color"},mt={kind:"object"},gt={kind:"value"},xt={kind:"collator"},vt={kind:"formatted"},bt={kind:"padding"},wt={kind:"resolvedImage"},_t={kind:"variableAnchorOffsetCollection"};function At(t,e){return {kind:"array",itemType:t,N:e}}function St(t){if("array"===t.kind){const e=St(t.itemType);return "number"==typeof t.N?`array<${e}, ${t.N}>`:"value"===t.itemType.kind?"array":`array<${e}>`}return t.kind}const kt=[ht,pt,ft,dt,yt,vt,mt,At(gt),bt,wt,_t];function It(t,e){if("error"===e.kind)return null;if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!It(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else {if(t.kind===e.kind)return null;if("value"===t.kind)for(const t of kt)if(!It(t,e))return null}return `Expected ${St(t)} but found ${St(e)} instead.`}function zt(t,e){return e.some((e=>e.kind===t.kind))}function Mt(t,e){return e.some((e=>"null"===e?null===t:"array"===e?Array.isArray(t):"object"===e?t&&!Array.isArray(t)&&"object"==typeof t:e===typeof t))}function Ct(t,e){return "array"===t.kind&&"array"===e.kind?t.itemType.kind===e.itemType.kind&&"number"==typeof t.N:t.kind===e.kind}const Bt=.96422,Pt=.82521,Vt=4/29,Et=6/29,Ft=3*Et*Et,Tt=Et*Et*Et,$t=Math.PI/180,Lt=180/Math.PI;function Dt(t){return (t%=360)<0&&(t+=360),t}function Ot([t,e,r,n]){let i,a;const s=Rt((.2225045*(t=Ut(t))+.7168786*(e=Ut(e))+.0606169*(r=Ut(r)))/1);t===e&&e===r?i=a=s:(i=Rt((.4360747*t+.3850649*e+.1430804*r)/Bt),a=Rt((.0139322*t+.0971045*e+.7141733*r)/Pt));const o=116*s-16;return [o<0?0:o,500*(i-s),200*(s-a),n]}function Ut(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Rt(t){return t>Tt?Math.pow(t,1/3):t/Ft+Vt}function qt([t,e,r,n]){let i=(t+16)/116,a=isNaN(e)?i:i+e/500,s=isNaN(r)?i:i-r/200;return i=1*Nt(i),a=Bt*Nt(a),s=Pt*Nt(s),[jt(3.1338561*a-1.6168667*i-.4906146*s),jt(-.9787684*a+1.9161415*i+.033454*s),jt(.0719453*a-.2289914*i+1.4052427*s),n]}function jt(t){return (t=t<=.00304?12.92*t:1.055*Math.pow(t,1/2.4)-.055)<0?0:t>1?1:t}function Nt(t){return t>Et?t*t*t:Ft*(t-Vt)}function Zt(t){return parseInt(t.padEnd(2,t),16)/255}function Kt(t,e){return Gt(e?t/100:t,0,1)}function Gt(t,e,r){return Math.min(Math.max(e,t),r)}function Jt(t){return !t.some(Number.isNaN)}const Xt={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};class Yt{constructor(t,e,r,n=1,i=!0){this.r=t,this.g=e,this.b=r,this.a=n,i||(this.r*=n,this.g*=n,this.b*=n,n||this.overwriteGetter("rgb",[t,e,r,n]));}static parse(t){if(t instanceof Yt)return t;if("string"!=typeof t)return;const e=function(t){if("transparent"===(t=t.toLowerCase().trim()))return [0,0,0,0];const e=Xt[t];if(e){const[t,r,n]=e;return [t/255,r/255,n/255,1]}if(t.startsWith("#")&&/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(t)){const e=t.length<6?1:2;let r=1;return [Zt(t.slice(r,r+=e)),Zt(t.slice(r,r+=e)),Zt(t.slice(r,r+=e)),Zt(t.slice(r,r+e)||"ff")]}if(t.startsWith("rgb")){const e=t.match(/^rgba?\(\s*([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/);if(e){const[t,r,n,i,a,s,o,l,u,c,h,p]=e,f=[i||" ",o||" ",c].join("");if("  "===f||"  /"===f||",,"===f||",,,"===f){const t=[n,s,u].join(""),e="%%%"===t?100:""===t?255:0;if(e){const t=[Gt(+r/e,0,1),Gt(+a/e,0,1),Gt(+l/e,0,1),h?Kt(+h,p):1];if(Jt(t))return t}}return}}const r=t.match(/^hsla?\(\s*([\de.+-]+)(?:deg)?(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/);if(r){const[t,e,n,i,a,s,o,l,u]=r,c=[n||" ",a||" ",o].join("");if("  "===c||"  /"===c||",,"===c||",,,"===c){const t=[+e,Gt(+i,0,100),Gt(+s,0,100),l?Kt(+l,u):1];if(Jt(t))return function([t,e,r,n]){function i(n){const i=(n+t/30)%12,a=e*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(i-3,9-i,1))}return t=Dt(t),e/=100,r/=100,[i(0),i(8),i(4),n]}(t)}}}(t);return e?new Yt(...e,!1):void 0}get rgb(){const{r:t,g:e,b:r,a:n}=this,i=n||1/0;return this.overwriteGetter("rgb",[t/i,e/i,r/i,n])}get hcl(){return this.overwriteGetter("hcl",function(t){const[e,r,n,i]=Ot(t),a=Math.sqrt(r*r+n*n);return [Math.round(1e4*a)?Dt(Math.atan2(n,r)*Lt):NaN,a,e,i]}(this.rgb))}get lab(){return this.overwriteGetter("lab",Ot(this.rgb))}overwriteGetter(t,e){return Object.defineProperty(this,t,{value:e}),e}toString(){const[t,e,r,n]=this.rgb;return `rgba(${[t,e,r].map((t=>Math.round(255*t))).join(",")},${n})`}}Yt.black=new Yt(0,0,0,1),Yt.white=new Yt(1,1,1,1),Yt.transparent=new Yt(0,0,0,0),Yt.red=new Yt(1,0,0,1);class Ht{constructor(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"});}compare(t,e){return this.collator.compare(t,e)}resolvedLocale(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale}}class Wt{constructor(t,e,r,n,i){this.text=t,this.image=e,this.scale=r,this.fontStack=n,this.textColor=i;}}class Qt{constructor(t){this.sections=t;}static fromString(t){return new Qt([new Wt(t,null,null,null,null)])}isEmpty(){return 0===this.sections.length||!this.sections.some((t=>0!==t.text.length||t.image&&0!==t.image.name.length))}static factory(t){return t instanceof Qt?t:Qt.fromString(t)}toString(){return 0===this.sections.length?"":this.sections.map((t=>t.text)).join("")}}class te{constructor(t){this.values=t.slice();}static parse(t){if(t instanceof te)return t;if("number"==typeof t)return new te([t,t,t,t]);if(Array.isArray(t)&&!(t.length<1||t.length>4)){for(const e of t)if("number"!=typeof e)return;switch(t.length){case 1:t=[t[0],t[0],t[0],t[0]];break;case 2:t=[t[0],t[1],t[0],t[1]];break;case 3:t=[t[0],t[1],t[2],t[1]];}return new te(t)}}toString(){return JSON.stringify(this.values)}}const ee=new Set(["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"]);class re{constructor(t){this.values=t.slice();}static parse(t){if(t instanceof re)return t;if(Array.isArray(t)&&!(t.length<1)&&t.length%2==0){for(let e=0;e<t.length;e+=2){const r=t[e],n=t[e+1];if("string"!=typeof r||!ee.has(r))return;if(!Array.isArray(n)||2!==n.length||"number"!=typeof n[0]||"number"!=typeof n[1])return}return new re(t)}}toString(){return JSON.stringify(this.values)}}class ne{constructor(t){this.name=t.name,this.available=t.available;}toString(){return this.name}static fromString(t){return t?new ne({name:t,available:!1}):null}}function ie(t,e,r,n){return "number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===n||"number"==typeof n&&n>=0&&n<=1?null:`Invalid rgba value [${[t,e,r,n].join(", ")}]: 'a' must be between 0 and 1.`:`Invalid rgba value [${("number"==typeof n?[t,e,r,n]:[t,e,r]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`}function ae(t){if(null===t||"string"==typeof t||"boolean"==typeof t||"number"==typeof t||t instanceof Yt||t instanceof Ht||t instanceof Qt||t instanceof te||t instanceof re||t instanceof ne)return !0;if(Array.isArray(t)){for(const e of t)if(!ae(e))return !1;return !0}if("object"==typeof t){for(const e in t)if(!ae(t[e]))return !1;return !0}return !1}function se(t){if(null===t)return ht;if("string"==typeof t)return ft;if("boolean"==typeof t)return dt;if("number"==typeof t)return pt;if(t instanceof Yt)return yt;if(t instanceof Ht)return xt;if(t instanceof Qt)return vt;if(t instanceof te)return bt;if(t instanceof re)return _t;if(t instanceof ne)return wt;if(Array.isArray(t)){const e=t.length;let r;for(const e of t){const t=se(e);if(r){if(r===t)continue;r=gt;break}r=t;}return At(r||gt,e)}return mt}function oe(t){const e=typeof t;return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof Yt||t instanceof Qt||t instanceof te||t instanceof re||t instanceof ne?t.toString():JSON.stringify(t)}class le{constructor(t,e){this.type=t,this.value=e;}static parse(t,e){if(2!==t.length)return e.error(`'literal' expression requires exactly one argument, but found ${t.length-1} instead.`);if(!ae(t[1]))return e.error("invalid value");const r=t[1];let n=se(r);const i=e.expectedType;return "array"!==n.kind||0!==n.N||!i||"array"!==i.kind||"number"==typeof i.N&&0!==i.N||(n=i),new le(n,r)}evaluate(){return this.value}eachChild(){}outputDefined(){return !0}}class ue{constructor(t){this.name="ExpressionEvaluationError",this.message=t;}toJSON(){return this.message}}const ce={string:ft,number:pt,boolean:dt,object:mt};class he{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");let r,n=1;const i=t[0];if("array"===i){let i,a;if(t.length>2){const r=t[1];if("string"!=typeof r||!(r in ce)||"object"===r)return e.error('The item type argument of "array" must be one of string, number, boolean',1);i=ce[r],n++;}else i=gt;if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2);a=t[2],n++;}r=At(i,a);}else {if(!ce[i])throw new Error(`Types doesn't contain name = ${i}`);r=ce[i];}const a=[];for(;n<t.length;n++){const r=e.parse(t[n],n,gt);if(!r)return null;a.push(r);}return new he(r,a)}evaluate(t){for(let e=0;e<this.args.length;e++){const r=this.args[e].evaluate(t);if(!It(this.type,se(r)))return r;if(e===this.args.length-1)throw new ue(`Expected value to be of type ${St(this.type)}, but found ${St(se(r))} instead.`)}throw new Error}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}}const pe={"to-boolean":dt,"to-color":yt,"to-number":pt,"to-string":ft};class fe{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");const r=t[0];if(!pe[r])throw new Error(`Can't parse ${r} as it is not part of the known types`);if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.");const n=pe[r],i=[];for(let r=1;r<t.length;r++){const n=e.parse(t[r],r,gt);if(!n)return null;i.push(n);}return new fe(n,i)}evaluate(t){switch(this.type.kind){case"boolean":return Boolean(this.args[0].evaluate(t));case"color":{let e,r;for(const n of this.args){if(e=n.evaluate(t),r=null,e instanceof Yt)return e;if("string"==typeof e){const r=t.parseColor(e);if(r)return r}else if(Array.isArray(e)&&(r=e.length<3||e.length>4?`Invalid rbga value ${JSON.stringify(e)}: expected an array containing either three or four numeric values.`:ie(e[0],e[1],e[2],e[3]),!r))return new Yt(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new ue(r||`Could not parse color from value '${"string"==typeof e?e:JSON.stringify(e)}'`)}case"padding":{let e;for(const r of this.args){e=r.evaluate(t);const n=te.parse(e);if(n)return n}throw new ue(`Could not parse padding from value '${"string"==typeof e?e:JSON.stringify(e)}'`)}case"variableAnchorOffsetCollection":{let e;for(const r of this.args){e=r.evaluate(t);const n=re.parse(e);if(n)return n}throw new ue(`Could not parse variableAnchorOffsetCollection from value '${"string"==typeof e?e:JSON.stringify(e)}'`)}case"number":{let e=null;for(const r of this.args){if(e=r.evaluate(t),null===e)return 0;const n=Number(e);if(!isNaN(n))return n}throw new ue(`Could not convert ${JSON.stringify(e)} to number.`)}case"formatted":return Qt.fromString(oe(this.args[0].evaluate(t)));case"resolvedImage":return ne.fromString(oe(this.args[0].evaluate(t)));default:return oe(this.args[0].evaluate(t))}}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}}const de=["Unknown","Point","LineString","Polygon"];class ye{constructor(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null,this.canonical=null;}id(){return this.feature&&"id"in this.feature?this.feature.id:null}geometryType(){return this.feature?"number"==typeof this.feature.type?de[this.feature.type]:this.feature.type:null}geometry(){return this.feature&&"geometry"in this.feature?this.feature.geometry:null}canonicalID(){return this.canonical}properties(){return this.feature&&this.feature.properties||{}}parseColor(t){let e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=Yt.parse(t)),e}}class me{constructor(t,e,r=[],n,i=new ct,a=[]){this.registry=t,this.path=r,this.key=r.map((t=>`[${t}]`)).join(""),this.scope=i,this.errors=a,this.expectedType=n,this._isConstant=e;}parse(t,e,r,n,i={}){return e?this.concat(e,r,n)._parse(t,i):this._parse(t,i)}_parse(t,e){function r(t,e,r){return "assert"===r?new he(e,[t]):"coerce"===r?new fe(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');const n=t[0];if("string"!=typeof n)return this.error(`Expression name must be a string, but found ${typeof n} instead. If you wanted a literal array, use ["literal", [...]].`,0),null;const i=this.registry[n];if(i){let n=i.parse(t,this);if(!n)return null;if(this.expectedType){const t=this.expectedType,i=n.type;if("string"!==t.kind&&"number"!==t.kind&&"boolean"!==t.kind&&"object"!==t.kind&&"array"!==t.kind||"value"!==i.kind)if("color"!==t.kind&&"formatted"!==t.kind&&"resolvedImage"!==t.kind||"value"!==i.kind&&"string"!==i.kind)if("padding"!==t.kind||"value"!==i.kind&&"number"!==i.kind&&"array"!==i.kind)if("variableAnchorOffsetCollection"!==t.kind||"value"!==i.kind&&"array"!==i.kind){if(this.checkSubtype(t,i))return null}else n=r(n,t,e.typeAnnotation||"coerce");else n=r(n,t,e.typeAnnotation||"coerce");else n=r(n,t,e.typeAnnotation||"coerce");else n=r(n,t,e.typeAnnotation||"assert");}if(!(n instanceof le)&&"resolvedImage"!==n.type.kind&&this._isConstant(n)){const t=new ye;try{n=new le(n.type,n.evaluate(t));}catch(t){return this.error(t.message),null}}return n}return this.error(`Unknown expression "${n}". If you wanted a literal array, use ["literal", [...]].`,0)}return this.error(void 0===t?"'undefined' value invalid. Use null instead.":"object"==typeof t?'Bare objects invalid. Use ["literal", {...}] instead.':`Expected an array, but found ${typeof t} instead.`)}concat(t,e,r){const n="number"==typeof t?this.path.concat(t):this.path,i=r?this.scope.concat(r):this.scope;return new me(this.registry,this._isConstant,n,e||null,i,this.errors)}error(t,...e){const r=`${this.key}${e.map((t=>`[${t}]`)).join("")}`;this.errors.push(new ut(r,t));}checkSubtype(t,e){const r=It(t,e);return r&&this.error(r),r}}class ge{constructor(t,e,r){this.type=xt,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e;}static parse(t,e){if(2!==t.length)return e.error("Expected one argument.");const r=t[1];if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.");const n=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,dt);if(!n)return null;const i=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,dt);if(!i)return null;let a=null;return r.locale&&(a=e.parse(r.locale,1,ft),!a)?null:new ge(n,i,a)}evaluate(t){return new Ht(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)}eachChild(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale);}outputDefined(){return !1}}const xe=8192;function ve(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);}function be(t,e){return !(t[0]<=e[0]||t[2]>=e[2]||t[1]<=e[1]||t[3]>=e[3])}function we(t,e){const r=(180+t[0])/360,n=(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t[1]*Math.PI/360)))/360,i=Math.pow(2,e.z);return [Math.round(r*i*xe),Math.round(n*i*xe)]}function _e(t,e,r){const n=t[0]-e[0],i=t[1]-e[1],a=t[0]-r[0],s=t[1]-r[1];return n*s-a*i==0&&n*a<=0&&i*s<=0}function Ae(t,e){let r=!1;for(let s=0,o=e.length;s<o;s++){const o=e[s];for(let e=0,s=o.length;e<s-1;e++){if(_e(t,o[e],o[e+1]))return !1;(i=o[e])[1]>(n=t)[1]!=(a=o[e+1])[1]>n[1]&&n[0]<(a[0]-i[0])*(n[1]-i[1])/(a[1]-i[1])+i[0]&&(r=!r);}}var n,i,a;return r}function Se(t,e){for(let r=0;r<e.length;r++)if(Ae(t,e[r]))return !0;return !1}function ke(t,e,r,n){const i=n[0]-r[0],a=n[1]-r[1],s=(t[0]-r[0])*a-i*(t[1]-r[1]),o=(e[0]-r[0])*a-i*(e[1]-r[1]);return s>0&&o<0||s<0&&o>0}function Ie(t,e,r){for(const u of r)for(let r=0;r<u.length-1;++r)if(0!=(o=[(s=u[r+1])[0]-(a=u[r])[0],s[1]-a[1]])[0]*(l=[(i=e)[0]-(n=t)[0],i[1]-n[1]])[1]-o[1]*l[0]&&ke(n,i,a,s)&&ke(a,s,n,i))return !0;var n,i,a,s,o,l;return !1}function ze(t,e){for(let r=0;r<t.length;++r)if(!Ae(t[r],e))return !1;for(let r=0;r<t.length-1;++r)if(Ie(t[r],t[r+1],e))return !1;return !0}function Me(t,e){for(let r=0;r<e.length;r++)if(ze(t,e[r]))return !0;return !1}function Ce(t,e,r){const n=[];for(let i=0;i<t.length;i++){const a=[];for(let n=0;n<t[i].length;n++){const s=we(t[i][n],r);ve(e,s),a.push(s);}n.push(a);}return n}function Be(t,e,r){const n=[];for(let i=0;i<t.length;i++){const a=Ce(t[i],e,r);n.push(a);}return n}function Pe(t,e,r,n){if(t[0]<r[0]||t[0]>r[2]){const e=.5*n;let i=t[0]-r[0]>e?-n:r[0]-t[0]>e?n:0;0===i&&(i=t[0]-r[2]>e?-n:r[2]-t[0]>e?n:0),t[0]+=i;}ve(e,t);}function Ve(t,e,r,n){const i=Math.pow(2,n.z)*xe,a=[n.x*xe,n.y*xe],s=[];for(const n of t)for(const t of n){const n=[t.x+a[0],t.y+a[1]];Pe(n,e,r,i),s.push(n);}return s}function Ee(t,e,r,n){const i=Math.pow(2,n.z)*xe,a=[n.x*xe,n.y*xe],s=[];for(const r of t){const t=[];for(const n of r){const r=[n.x+a[0],n.y+a[1]];ve(e,r),t.push(r);}s.push(t);}if(e[2]-e[0]<=i/2){(o=e)[0]=o[1]=1/0,o[2]=o[3]=-1/0;for(const t of s)for(const n of t)Pe(n,e,r,i);}var o;return s}class Fe{constructor(t,e){this.type=dt,this.geojson=t,this.geometries=e;}static parse(t,e){if(2!==t.length)return e.error(`'within' expression requires exactly one argument, but found ${t.length-1} instead.`);if(ae(t[1])){const e=t[1];if("FeatureCollection"===e.type)for(let t=0;t<e.features.length;++t){const r=e.features[t].geometry.type;if("Polygon"===r||"MultiPolygon"===r)return new Fe(e,e.features[t].geometry)}else if("Feature"===e.type){const t=e.geometry.type;if("Polygon"===t||"MultiPolygon"===t)return new Fe(e,e.geometry)}else if("Polygon"===e.type||"MultiPolygon"===e.type)return new Fe(e,e)}return e.error("'within' expression requires valid geojson object that contains polygon geometry type.")}evaluate(t){if(null!=t.geometry()&&null!=t.canonicalID()){if("Point"===t.geometryType())return function(t,e){const r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if("Polygon"===e.type){const a=Ce(e.coordinates,n,i),s=Ve(t.geometry(),r,n,i);if(!be(r,n))return !1;for(const t of s)if(!Ae(t,a))return !1}if("MultiPolygon"===e.type){const a=Be(e.coordinates,n,i),s=Ve(t.geometry(),r,n,i);if(!be(r,n))return !1;for(const t of s)if(!Se(t,a))return !1}return !0}(t,this.geometries);if("LineString"===t.geometryType())return function(t,e){const r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if("Polygon"===e.type){const a=Ce(e.coordinates,n,i),s=Ee(t.geometry(),r,n,i);if(!be(r,n))return !1;for(const t of s)if(!ze(t,a))return !1}if("MultiPolygon"===e.type){const a=Be(e.coordinates,n,i),s=Ee(t.geometry(),r,n,i);if(!be(r,n))return !1;for(const t of s)if(!Me(t,a))return !1}return !0}(t,this.geometries)}return !1}eachChild(){}outputDefined(){return !0}}class Te{constructor(t,e){this.type=e.type,this.name=t,this.boundExpression=e;}static parse(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.");const r=t[1];return e.scope.has(r)?new Te(r,e.scope.get(r)):e.error(`Unknown variable "${r}". Make sure "${r}" has been bound in an enclosing "let" expression before using it.`,1)}evaluate(t){return this.boundExpression.evaluate(t)}eachChild(){}outputDefined(){return !1}}class $e{constructor(t,e,r,n){this.name=t,this.type=e,this._evaluate=r,this.args=n;}evaluate(t){return this._evaluate(t,this.args)}eachChild(t){this.args.forEach(t);}outputDefined(){return !1}static parse(t,e){const r=t[0],n=$e.definitions[r];if(!n)return e.error(`Unknown expression "${r}". If you wanted a literal array, use ["literal", [...]].`,0);const i=Array.isArray(n)?n[0]:n.type,a=Array.isArray(n)?[[n[1],n[2]]]:n.overloads,s=a.filter((([e])=>!Array.isArray(e)||e.length===t.length-1));let o=null;for(const[n,a]of s){o=new me(e.registry,Le,e.path,null,e.scope);const s=[];let l=!1;for(let e=1;e<t.length;e++){const r=t[e],i=Array.isArray(n)?n[e-1]:n.type,a=o.parse(r,1+s.length,i);if(!a){l=!0;break}s.push(a);}if(!l)if(Array.isArray(n)&&n.length!==s.length)o.error(`Expected ${n.length} arguments, but found ${s.length} instead.`);else {for(let t=0;t<s.length;t++){const e=Array.isArray(n)?n[t]:n.type,r=s[t];o.concat(t+1).checkSubtype(e,r.type);}if(0===o.errors.length)return new $e(r,i,a,s)}}if(1===s.length)e.errors.push(...o.errors);else {const r=(s.length?s:a).map((([t])=>{return e=t,Array.isArray(e)?`(${e.map(St).join(", ")})`:`(${St(e.type)}...)`;var e;})).join(" | "),n=[];for(let r=1;r<t.length;r++){const i=e.parse(t[r],1+n.length);if(!i)return null;n.push(St(i.type));}e.error(`Expected arguments of type ${r}, but found (${n.join(", ")}) instead.`);}return null}static register(t,e){$e.definitions=e;for(const r in e)t[r]=$e;}}function Le(t){if(t instanceof Te)return Le(t.boundExpression);if(t instanceof $e&&"error"===t.name)return !1;if(t instanceof ge)return !1;if(t instanceof Fe)return !1;const e=t instanceof fe||t instanceof he;let r=!0;return t.eachChild((t=>{r=e?r&&Le(t):r&&t instanceof le;})),!!r&&De(t)&&Ue(t,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}function De(t){if(t instanceof $e){if("get"===t.name&&1===t.args.length)return !1;if("feature-state"===t.name)return !1;if("has"===t.name&&1===t.args.length)return !1;if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return !1;if(/^filter-/.test(t.name))return !1}if(t instanceof Fe)return !1;let e=!0;return t.eachChild((t=>{e&&!De(t)&&(e=!1);})),e}function Oe(t){if(t instanceof $e&&"feature-state"===t.name)return !1;let e=!0;return t.eachChild((t=>{e&&!Oe(t)&&(e=!1);})),e}function Ue(t,e){if(t instanceof $e&&e.indexOf(t.name)>=0)return !1;let r=!0;return t.eachChild((t=>{r&&!Ue(t,e)&&(r=!1);})),r}function Re(t,e){const r=t.length-1;let n,i,a=0,s=r,o=0;for(;a<=s;)if(o=Math.floor((a+s)/2),n=t[o],i=t[o+1],n<=e){if(o===r||e<i)return o;a=o+1;}else {if(!(n>e))throw new ue("Input is not a number.");s=o-1;}return 0}class qe{constructor(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[];for(const[t,e]of r)this.labels.push(t),this.outputs.push(e);}static parse(t,e){if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");const r=e.parse(t[1],1,pt);if(!r)return null;const n=[];let i=null;e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType);for(let r=1;r<t.length;r+=2){const a=1===r?-1/0:t[r],s=t[r+1],o=r,l=r+1;if("number"!=typeof a)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',o);if(n.length&&n[n.length-1][0]>=a)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',o);const u=e.parse(s,l,i);if(!u)return null;i=i||u.type,n.push([a,u]);}return new qe(i,r,n)}evaluate(t){const e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);const n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);const i=e.length;return n>=e[i-1]?r[i-1].evaluate(t):r[Re(e,n)].evaluate(t)}eachChild(t){t(this.input);for(const e of this.outputs)t(e);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}}function je(t,e,r){return t+r*(e-t)}function Ne(t,e,r){return t.map(((t,n)=>je(t,e[n],r)))}const Ze={number:je,color:function(t,e,r,n="rgb"){switch(n){case"rgb":{const[n,i,a,s]=Ne(t.rgb,e.rgb,r);return new Yt(n,i,a,s,!1)}case"hcl":{const[n,i,a,s]=t.hcl,[o,l,u,c]=e.hcl;let h,p;if(isNaN(n)||isNaN(o))isNaN(n)?isNaN(o)?h=NaN:(h=o,1!==a&&0!==a||(p=l)):(h=n,1!==u&&0!==u||(p=i));else {let t=o-n;o>n&&t>180?t-=360:o<n&&n-o>180&&(t+=360),h=n+r*t;}const[f,d,y,m]=function([t,e,r,n]){return t=isNaN(t)?0:t*$t,qt([r,Math.cos(t)*e,Math.sin(t)*e,n])}([h,null!=p?p:je(i,l,r),je(a,u,r),je(s,c,r)]);return new Yt(f,d,y,m,!1)}case"lab":{const[n,i,a,s]=qt(Ne(t.lab,e.lab,r));return new Yt(n,i,a,s,!1)}}},array:Ne,padding:function(t,e,r){return new te(Ne(t.values,e.values,r))},variableAnchorOffsetCollection:function(t,e,r){const n=t.values,i=e.values;if(n.length!==i.length)throw new ue(`Cannot interpolate values of different length. from: ${t.toString()}, to: ${e.toString()}`);const a=[];for(let t=0;t<n.length;t+=2){if(n[t]!==i[t])throw new ue(`Cannot interpolate values containing mismatched anchors. from[${t}]: ${n[t]}, to[${t}]: ${i[t]}`);a.push(n[t]);const[e,s]=n[t+1],[o,l]=i[t+1];a.push([je(e,o,r),je(s,l,r)]);}return new re(a)}};class Ke{constructor(t,e,r,n,i){this.type=t,this.operator=e,this.interpolation=r,this.input=n,this.labels=[],this.outputs=[];for(const[t,e]of i)this.labels.push(t),this.outputs.push(e);}static interpolationFactor(t,e,r,n){let i=0;if("exponential"===t.name)i=Ge(e,t.base,r,n);else if("linear"===t.name)i=Ge(e,1,r,n);else if("cubic-bezier"===t.name){const a=t.controlPoints;i=new l(a[0],a[1],a[2],a[3]).solve(Ge(e,1,r,n));}return i}static parse(t,e){let[r,n,i,...a]=t;if(!Array.isArray(n)||0===n.length)return e.error("Expected an interpolation type expression.",1);if("linear"===n[0])n={name:"linear"};else if("exponential"===n[0]){const t=n[1];if("number"!=typeof t)return e.error("Exponential interpolation requires a numeric base.",1,1);n={name:"exponential",base:t};}else {if("cubic-bezier"!==n[0])return e.error(`Unknown interpolation type ${String(n[0])}`,1,0);{const t=n.slice(1);if(4!==t.length||t.some((t=>"number"!=typeof t||t<0||t>1)))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);n={name:"cubic-bezier",controlPoints:t};}}if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(i=e.parse(i,2,pt),!i)return null;const s=[];let o=null;"interpolate-hcl"===r||"interpolate-lab"===r?o=yt:e.expectedType&&"value"!==e.expectedType.kind&&(o=e.expectedType);for(let t=0;t<a.length;t+=2){const r=a[t],n=a[t+1],i=t+3,l=t+4;if("number"!=typeof r)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',i);if(s.length&&s[s.length-1][0]>=r)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',i);const u=e.parse(n,l,o);if(!u)return null;o=o||u.type,s.push([r,u]);}return Ct(o,pt)||Ct(o,yt)||Ct(o,bt)||Ct(o,_t)||Ct(o,At(pt))?new Ke(o,r,n,i,s):e.error(`Type ${St(o)} is not interpolatable.`)}evaluate(t){const e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);const n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);const i=e.length;if(n>=e[i-1])return r[i-1].evaluate(t);const a=Re(e,n),s=Ke.interpolationFactor(this.interpolation,n,e[a],e[a+1]),o=r[a].evaluate(t),l=r[a+1].evaluate(t);switch(this.operator){case"interpolate":return Ze[this.type.kind](o,l,s);case"interpolate-hcl":return Ze.color(o,l,s,"hcl");case"interpolate-lab":return Ze.color(o,l,s,"lab")}}eachChild(t){t(this.input);for(const e of this.outputs)t(e);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}}function Ge(t,e,r,n){const i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}class Je{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expectected at least one argument.");let r=null;const n=e.expectedType;n&&"value"!==n.kind&&(r=n);const i=[];for(const n of t.slice(1)){const t=e.parse(n,1+i.length,r,void 0,{typeAnnotation:"omit"});if(!t)return null;r=r||t.type,i.push(t);}if(!r)throw new Error("No output type");const a=n&&i.some((t=>It(n,t.type)));return new Je(a?gt:r,i)}evaluate(t){let e,r=null,n=0;for(const i of this.args)if(n++,r=i.evaluate(t),r&&r instanceof ne&&!r.available&&(e||(e=r.name),r=null,n===this.args.length&&(r=e)),null!==r)break;return r}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}}class Xe{constructor(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e;}evaluate(t){return this.result.evaluate(t)}eachChild(t){for(const e of this.bindings)t(e[1]);t(this.result);}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found ${t.length-1} instead.`);const r=[];for(let n=1;n<t.length-1;n+=2){const i=t[n];if("string"!=typeof i)return e.error(`Expected string, but found ${typeof i} instead.`,n);if(/[^a-zA-Z0-9_]/.test(i))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);const a=e.parse(t[n+1],n+1);if(!a)return null;r.push([i,a]);}const n=e.parse(t[t.length-1],t.length-1,e.expectedType,r);return n?new Xe(r,n):null}outputDefined(){return this.result.outputDefined()}}class Ye{constructor(t,e,r){this.type=t,this.index=e,this.input=r;}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,pt),n=e.parse(t[2],2,At(e.expectedType||gt));return r&&n?new Ye(n.type.itemType,r,n):null}evaluate(t){const e=this.index.evaluate(t),r=this.input.evaluate(t);if(e<0)throw new ue(`Array index out of bounds: ${e} < 0.`);if(e>=r.length)throw new ue(`Array index out of bounds: ${e} > ${r.length-1}.`);if(e!==Math.floor(e))throw new ue(`Array index must be an integer, but found ${e} instead.`);return r[e]}eachChild(t){t(this.index),t(this.input);}outputDefined(){return !1}}class He{constructor(t,e){this.type=dt,this.needle=t,this.haystack=e;}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,gt),n=e.parse(t[2],2,gt);return r&&n?zt(r.type,[dt,ft,pt,ht,gt])?new He(r,n):e.error(`Expected first argument to be of type boolean, string, number or null, but found ${St(r.type)} instead`):null}evaluate(t){const e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!r)return !1;if(!Mt(e,["boolean","string","number","null"]))throw new ue(`Expected first argument to be of type boolean, string, number or null, but found ${St(se(e))} instead.`);if(!Mt(r,["string","array"]))throw new ue(`Expected second argument to be of type array or string, but found ${St(se(r))} instead.`);return r.indexOf(e)>=0}eachChild(t){t(this.needle),t(this.haystack);}outputDefined(){return !0}}class We{constructor(t,e,r){this.type=pt,this.needle=t,this.haystack=e,this.fromIndex=r;}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,gt),n=e.parse(t[2],2,gt);if(!r||!n)return null;if(!zt(r.type,[dt,ft,pt,ht,gt]))return e.error(`Expected first argument to be of type boolean, string, number or null, but found ${St(r.type)} instead`);if(4===t.length){const i=e.parse(t[3],3,pt);return i?new We(r,n,i):null}return new We(r,n)}evaluate(t){const e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!Mt(e,["boolean","string","number","null"]))throw new ue(`Expected first argument to be of type boolean, string, number or null, but found ${St(se(e))} instead.`);if(!Mt(r,["string","array"]))throw new ue(`Expected second argument to be of type array or string, but found ${St(se(r))} instead.`);if(this.fromIndex){const n=this.fromIndex.evaluate(t);return r.indexOf(e,n)}return r.indexOf(e)}eachChild(t){t(this.needle),t(this.haystack),this.fromIndex&&t(this.fromIndex);}outputDefined(){return !1}}class Qe{constructor(t,e,r,n,i,a){this.inputType=t,this.type=e,this.input=r,this.cases=n,this.outputs=i,this.otherwise=a;}static parse(t,e){if(t.length<5)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if(t.length%2!=1)return e.error("Expected an even number of arguments.");let r,n;e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType);const i={},a=[];for(let s=2;s<t.length-1;s+=2){let o=t[s];const l=t[s+1];Array.isArray(o)||(o=[o]);const u=e.concat(s);if(0===o.length)return u.error("Expected at least one branch label.");for(const t of o){if("number"!=typeof t&&"string"!=typeof t)return u.error("Branch labels must be numbers or strings.");if("number"==typeof t&&Math.abs(t)>Number.MAX_SAFE_INTEGER)return u.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`);if("number"==typeof t&&Math.floor(t)!==t)return u.error("Numeric branch labels must be integer values.");if(r){if(u.checkSubtype(r,se(t)))return null}else r=se(t);if(void 0!==i[String(t)])return u.error("Branch labels must be unique.");i[String(t)]=a.length;}const c=e.parse(l,s,n);if(!c)return null;n=n||c.type,a.push(c);}const s=e.parse(t[1],1,gt);if(!s)return null;const o=e.parse(t[t.length-1],t.length-1,n);return o?"value"!==s.type.kind&&e.concat(1).checkSubtype(r,s.type)?null:new Qe(r,n,s,i,a,o):null}evaluate(t){const e=this.input.evaluate(t);return (se(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)}eachChild(t){t(this.input),this.outputs.forEach(t),t(this.otherwise);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))&&this.otherwise.outputDefined()}}class tr{constructor(t,e,r){this.type=t,this.branches=e,this.otherwise=r;}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found only ${t.length-1}.`);if(t.length%2!=0)return e.error("Expected an odd number of arguments.");let r;e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType);const n=[];for(let i=1;i<t.length-1;i+=2){const a=e.parse(t[i],i,dt);if(!a)return null;const s=e.parse(t[i+1],i+1,r);if(!s)return null;n.push([a,s]),r=r||s.type;}const i=e.parse(t[t.length-1],t.length-1,r);if(!i)return null;if(!r)throw new Error("Can't infer output type");return new tr(r,n,i)}evaluate(t){for(const[e,r]of this.branches)if(e.evaluate(t))return r.evaluate(t);return this.otherwise.evaluate(t)}eachChild(t){for(const[e,r]of this.branches)t(e),t(r);t(this.otherwise);}outputDefined(){return this.branches.every((([t,e])=>e.outputDefined()))&&this.otherwise.outputDefined()}}class er{constructor(t,e,r,n){this.type=t,this.input=e,this.beginIndex=r,this.endIndex=n;}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,gt),n=e.parse(t[2],2,pt);if(!r||!n)return null;if(!zt(r.type,[At(gt),ft,gt]))return e.error(`Expected first argument to be of type array or string, but found ${St(r.type)} instead`);if(4===t.length){const i=e.parse(t[3],3,pt);return i?new er(r.type,r,n,i):null}return new er(r.type,r,n)}evaluate(t){const e=this.input.evaluate(t),r=this.beginIndex.evaluate(t);if(!Mt(e,["string","array"]))throw new ue(`Expected first argument to be of type array or string, but found ${St(se(e))} instead.`);if(this.endIndex){const n=this.endIndex.evaluate(t);return e.slice(r,n)}return e.slice(r)}eachChild(t){t(this.input),t(this.beginIndex),this.endIndex&&t(this.endIndex);}outputDefined(){return !1}}function rr(t,e){return "=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function nr(t,e,r,n){return 0===n.compare(e,r)}function ir(t,e,r){const n="=="!==t&&"!="!==t;return class i{constructor(t,e,r){this.type=dt,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind;}static parse(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.");const r=t[0];let a=e.parse(t[1],1,gt);if(!a)return null;if(!rr(r,a.type))return e.concat(1).error(`"${r}" comparisons are not supported for type '${St(a.type)}'.`);let s=e.parse(t[2],2,gt);if(!s)return null;if(!rr(r,s.type))return e.concat(2).error(`"${r}" comparisons are not supported for type '${St(s.type)}'.`);if(a.type.kind!==s.type.kind&&"value"!==a.type.kind&&"value"!==s.type.kind)return e.error(`Cannot compare types '${St(a.type)}' and '${St(s.type)}'.`);n&&("value"===a.type.kind&&"value"!==s.type.kind?a=new he(s.type,[a]):"value"!==a.type.kind&&"value"===s.type.kind&&(s=new he(a.type,[s])));let o=null;if(4===t.length){if("string"!==a.type.kind&&"string"!==s.type.kind&&"value"!==a.type.kind&&"value"!==s.type.kind)return e.error("Cannot use collator to compare non-string types.");if(o=e.parse(t[3],3,xt),!o)return null}return new i(a,s,o)}evaluate(i){const a=this.lhs.evaluate(i),s=this.rhs.evaluate(i);if(n&&this.hasUntypedArgument){const e=se(a),r=se(s);if(e.kind!==r.kind||"string"!==e.kind&&"number"!==e.kind)throw new ue(`Expected arguments for "${t}" to be (string, string) or (number, number), but found (${e.kind}, ${r.kind}) instead.`)}if(this.collator&&!n&&this.hasUntypedArgument){const t=se(a),r=se(s);if("string"!==t.kind||"string"!==r.kind)return e(i,a,s)}return this.collator?r(i,a,s,this.collator.evaluate(i)):e(i,a,s)}eachChild(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator);}outputDefined(){return !0}}}const ar=ir("==",(function(t,e,r){return e===r}),nr),sr=ir("!=",(function(t,e,r){return e!==r}),(function(t,e,r,n){return !nr(0,e,r,n)})),or=ir("<",(function(t,e,r){return e<r}),(function(t,e,r,n){return n.compare(e,r)<0})),lr=ir(">",(function(t,e,r){return e>r}),(function(t,e,r,n){return n.compare(e,r)>0})),ur=ir("<=",(function(t,e,r){return e<=r}),(function(t,e,r,n){return n.compare(e,r)<=0})),cr=ir(">=",(function(t,e,r){return e>=r}),(function(t,e,r,n){return n.compare(e,r)>=0}));class hr{constructor(t,e,r,n,i){this.type=ft,this.number=t,this.locale=e,this.currency=r,this.minFractionDigits=n,this.maxFractionDigits=i;}static parse(t,e){if(3!==t.length)return e.error("Expected two arguments.");const r=e.parse(t[1],1,pt);if(!r)return null;const n=t[2];if("object"!=typeof n||Array.isArray(n))return e.error("NumberFormat options argument must be an object.");let i=null;if(n.locale&&(i=e.parse(n.locale,1,ft),!i))return null;let a=null;if(n.currency&&(a=e.parse(n.currency,1,ft),!a))return null;let s=null;if(n["min-fraction-digits"]&&(s=e.parse(n["min-fraction-digits"],1,pt),!s))return null;let o=null;return n["max-fraction-digits"]&&(o=e.parse(n["max-fraction-digits"],1,pt),!o)?null:new hr(r,i,a,s,o)}evaluate(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))}eachChild(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits);}outputDefined(){return !1}}class pr{constructor(t){this.type=vt,this.sections=t;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");const r=t[1];if(!Array.isArray(r)&&"object"==typeof r)return e.error("First argument must be an image or text section.");const n=[];let i=!1;for(let r=1;r<=t.length-1;++r){const a=t[r];if(i&&"object"==typeof a&&!Array.isArray(a)){i=!1;let t=null;if(a["font-scale"]&&(t=e.parse(a["font-scale"],1,pt),!t))return null;let r=null;if(a["text-font"]&&(r=e.parse(a["text-font"],1,At(ft)),!r))return null;let s=null;if(a["text-color"]&&(s=e.parse(a["text-color"],1,yt),!s))return null;const o=n[n.length-1];o.scale=t,o.font=r,o.textColor=s;}else {const a=e.parse(t[r],1,gt);if(!a)return null;const s=a.type.kind;if("string"!==s&&"value"!==s&&"null"!==s&&"resolvedImage"!==s)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");i=!0,n.push({content:a,scale:null,font:null,textColor:null});}}return new pr(n)}evaluate(t){return new Qt(this.sections.map((e=>{const r=e.content.evaluate(t);return se(r)===wt?new Wt("",r,null,null,null):new Wt(oe(r),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))}eachChild(t){for(const e of this.sections)t(e.content),e.scale&&t(e.scale),e.font&&t(e.font),e.textColor&&t(e.textColor);}outputDefined(){return !1}}class fr{constructor(t){this.type=wt,this.input=t;}static parse(t,e){if(2!==t.length)return e.error("Expected two arguments.");const r=e.parse(t[1],1,ft);return r?new fr(r):e.error("No image name provided.")}evaluate(t){const e=this.input.evaluate(t),r=ne.fromString(e);return r&&t.availableImages&&(r.available=t.availableImages.indexOf(e)>-1),r}eachChild(t){t(this.input);}outputDefined(){return !1}}class dr{constructor(t){this.type=pt,this.input=t;}static parse(t,e){if(2!==t.length)return e.error(`Expected 1 argument, but found ${t.length-1} instead.`);const r=e.parse(t[1],1);return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error(`Expected argument of type string or array, but found ${St(r.type)} instead.`):new dr(r):null}evaluate(t){const e=this.input.evaluate(t);if("string"==typeof e)return e.length;if(Array.isArray(e))return e.length;throw new ue(`Expected value to be of type string or array, but found ${St(se(e))} instead.`)}eachChild(t){t(this.input);}outputDefined(){return !1}}const yr={"==":ar,"!=":sr,">":lr,"<":or,">=":cr,"<=":ur,array:he,at:Ye,boolean:he,case:tr,coalesce:Je,collator:ge,format:pr,image:fr,in:He,"index-of":We,interpolate:Ke,"interpolate-hcl":Ke,"interpolate-lab":Ke,length:dr,let:Xe,literal:le,match:Qe,number:he,"number-format":hr,object:he,slice:er,step:qe,string:he,"to-boolean":fe,"to-color":fe,"to-number":fe,"to-string":fe,var:Te,within:Fe};function mr(t,[e,r,n,i]){e=e.evaluate(t),r=r.evaluate(t),n=n.evaluate(t);const a=i?i.evaluate(t):1,s=ie(e,r,n,a);if(s)throw new ue(s);return new Yt(e/255,r/255,n/255,a,!1)}function gr(t,e){return t in e}function xr(t,e){const r=e[t];return void 0===r?null:r}function vr(t){return {type:t}}function br(t){return {result:"success",value:t}}function wr(t){return {result:"error",value:t}}function _r(t){return "data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function Ar(t){return !!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function Sr(t){return !!t.expression&&t.expression.interpolated}function kr(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function Ir(t){return "object"==typeof t&&null!==t&&!Array.isArray(t)}function zr(t){return t}function Mr(t,e){const r="color"===e.type,n=t.stops&&"object"==typeof t.stops[0][0],i=n||!(n||void 0!==t.property),a=t.type||(Sr(e)?"exponential":"interval");if(r||"padding"===e.type){const n=r?Yt.parse:te.parse;(t=lt({},t)).stops&&(t.stops=t.stops.map((t=>[t[0],n(t[1])]))),t.default=n(t.default?t.default:e.default);}if(t.colorSpace&&"rgb"!==(s=t.colorSpace)&&"hcl"!==s&&"lab"!==s)throw new Error(`Unknown color space: "${t.colorSpace}"`);var s;let o,l,u;if("exponential"===a)o=Vr;else if("interval"===a)o=Pr;else if("categorical"===a){o=Br,l=Object.create(null);for(const e of t.stops)l[e[0]]=e[1];u=typeof t.stops[0][0];}else {if("identity"!==a)throw new Error(`Unknown function type "${a}"`);o=Er;}if(n){const r={},n=[];for(let e=0;e<t.stops.length;e++){const i=t.stops[e],a=i[0].zoom;void 0===r[a]&&(r[a]={zoom:a,type:t.type,property:t.property,default:t.default,stops:[]},n.push(a)),r[a].stops.push([i[0].value,i[1]]);}const i=[];for(const t of n)i.push([r[t].zoom,Mr(r[t],e)]);const a={name:"linear"};return {kind:"composite",interpolationType:a,interpolationFactor:Ke.interpolationFactor.bind(void 0,a),zoomStops:i.map((t=>t[0])),evaluate:({zoom:r},n)=>Vr({stops:i,base:t.base},e,r).evaluate(r,n)}}if(i){const r="exponential"===a?{name:"exponential",base:void 0!==t.base?t.base:1}:null;return {kind:"camera",interpolationType:r,interpolationFactor:Ke.interpolationFactor.bind(void 0,r),zoomStops:t.stops.map((t=>t[0])),evaluate:({zoom:r})=>o(t,e,r,l,u)}}return {kind:"source",evaluate(r,n){const i=n&&n.properties?n.properties[t.property]:void 0;return void 0===i?Cr(t.default,e.default):o(t,e,i,l,u)}}}function Cr(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function Br(t,e,r,n,i){return Cr(typeof r===i?n[r]:void 0,t.default,e.default)}function Pr(t,e,r){if("number"!==kr(r))return Cr(t.default,e.default);const n=t.stops.length;if(1===n)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[n-1][0])return t.stops[n-1][1];const i=Re(t.stops.map((t=>t[0])),r);return t.stops[i][1]}function Vr(t,e,r){const n=void 0!==t.base?t.base:1;if("number"!==kr(r))return Cr(t.default,e.default);const i=t.stops.length;if(1===i)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[i-1][0])return t.stops[i-1][1];const a=Re(t.stops.map((t=>t[0])),r),s=function(t,e,r,n){const i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}(r,n,t.stops[a][0],t.stops[a+1][0]),o=t.stops[a][1],l=t.stops[a+1][1],u=Ze[e.type]||zr;return "function"==typeof o.evaluate?{evaluate(...e){const r=o.evaluate.apply(void 0,e),n=l.evaluate.apply(void 0,e);if(void 0!==r&&void 0!==n)return u(r,n,s,t.colorSpace)}}:u(o,l,s,t.colorSpace)}function Er(t,e,r){switch(e.type){case"color":r=Yt.parse(r);break;case"formatted":r=Qt.fromString(r.toString());break;case"resolvedImage":r=ne.fromString(r.toString());break;case"padding":r=te.parse(r);break;default:kr(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0);}return Cr(r,t.default,e.default)}$e.register(yr,{error:[{kind:"error"},[ft],(t,[e])=>{throw new ue(e.evaluate(t))}],typeof:[ft,[gt],(t,[e])=>St(se(e.evaluate(t)))],"to-rgba":[At(pt,4),[yt],(t,[e])=>{const[r,n,i,a]=e.evaluate(t).rgb;return [255*r,255*n,255*i,a]}],rgb:[yt,[pt,pt,pt],mr],rgba:[yt,[pt,pt,pt,pt],mr],has:{type:dt,overloads:[[[ft],(t,[e])=>gr(e.evaluate(t),t.properties())],[[ft,mt],(t,[e,r])=>gr(e.evaluate(t),r.evaluate(t))]]},get:{type:gt,overloads:[[[ft],(t,[e])=>xr(e.evaluate(t),t.properties())],[[ft,mt],(t,[e,r])=>xr(e.evaluate(t),r.evaluate(t))]]},"feature-state":[gt,[ft],(t,[e])=>xr(e.evaluate(t),t.featureState||{})],properties:[mt,[],t=>t.properties()],"geometry-type":[ft,[],t=>t.geometryType()],id:[gt,[],t=>t.id()],zoom:[pt,[],t=>t.globals.zoom],"heatmap-density":[pt,[],t=>t.globals.heatmapDensity||0],"line-progress":[pt,[],t=>t.globals.lineProgress||0],accumulated:[gt,[],t=>void 0===t.globals.accumulated?null:t.globals.accumulated],"+":[pt,vr(pt),(t,e)=>{let r=0;for(const n of e)r+=n.evaluate(t);return r}],"*":[pt,vr(pt),(t,e)=>{let r=1;for(const n of e)r*=n.evaluate(t);return r}],"-":{type:pt,overloads:[[[pt,pt],(t,[e,r])=>e.evaluate(t)-r.evaluate(t)],[[pt],(t,[e])=>-e.evaluate(t)]]},"/":[pt,[pt,pt],(t,[e,r])=>e.evaluate(t)/r.evaluate(t)],"%":[pt,[pt,pt],(t,[e,r])=>e.evaluate(t)%r.evaluate(t)],ln2:[pt,[],()=>Math.LN2],pi:[pt,[],()=>Math.PI],e:[pt,[],()=>Math.E],"^":[pt,[pt,pt],(t,[e,r])=>Math.pow(e.evaluate(t),r.evaluate(t))],sqrt:[pt,[pt],(t,[e])=>Math.sqrt(e.evaluate(t))],log10:[pt,[pt],(t,[e])=>Math.log(e.evaluate(t))/Math.LN10],ln:[pt,[pt],(t,[e])=>Math.log(e.evaluate(t))],log2:[pt,[pt],(t,[e])=>Math.log(e.evaluate(t))/Math.LN2],sin:[pt,[pt],(t,[e])=>Math.sin(e.evaluate(t))],cos:[pt,[pt],(t,[e])=>Math.cos(e.evaluate(t))],tan:[pt,[pt],(t,[e])=>Math.tan(e.evaluate(t))],asin:[pt,[pt],(t,[e])=>Math.asin(e.evaluate(t))],acos:[pt,[pt],(t,[e])=>Math.acos(e.evaluate(t))],atan:[pt,[pt],(t,[e])=>Math.atan(e.evaluate(t))],min:[pt,vr(pt),(t,e)=>Math.min(...e.map((e=>e.evaluate(t))))],max:[pt,vr(pt),(t,e)=>Math.max(...e.map((e=>e.evaluate(t))))],abs:[pt,[pt],(t,[e])=>Math.abs(e.evaluate(t))],round:[pt,[pt],(t,[e])=>{const r=e.evaluate(t);return r<0?-Math.round(-r):Math.round(r)}],floor:[pt,[pt],(t,[e])=>Math.floor(e.evaluate(t))],ceil:[pt,[pt],(t,[e])=>Math.ceil(e.evaluate(t))],"filter-==":[dt,[ft,gt],(t,[e,r])=>t.properties()[e.value]===r.value],"filter-id-==":[dt,[gt],(t,[e])=>t.id()===e.value],"filter-type-==":[dt,[ft],(t,[e])=>t.geometryType()===e.value],"filter-<":[dt,[ft,gt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n<i}],"filter-id-<":[dt,[gt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r<n}],"filter->":[dt,[ft,gt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n>i}],"filter-id->":[dt,[gt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r>n}],"filter-<=":[dt,[ft,gt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n<=i}],"filter-id-<=":[dt,[gt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r<=n}],"filter->=":[dt,[ft,gt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n>=i}],"filter-id->=":[dt,[gt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r>=n}],"filter-has":[dt,[gt],(t,[e])=>e.value in t.properties()],"filter-has-id":[dt,[],t=>null!==t.id()&&void 0!==t.id()],"filter-type-in":[dt,[At(ft)],(t,[e])=>e.value.indexOf(t.geometryType())>=0],"filter-id-in":[dt,[At(gt)],(t,[e])=>e.value.indexOf(t.id())>=0],"filter-in-small":[dt,[ft,At(gt)],(t,[e,r])=>r.value.indexOf(t.properties()[e.value])>=0],"filter-in-large":[dt,[ft,At(gt)],(t,[e,r])=>function(t,e,r,n){for(;r<=n;){const i=r+n>>1;if(e[i]===t)return !0;e[i]>t?n=i-1:r=i+1;}return !1}(t.properties()[e.value],r.value,0,r.value.length-1)],all:{type:dt,overloads:[[[dt,dt],(t,[e,r])=>e.evaluate(t)&&r.evaluate(t)],[vr(dt),(t,e)=>{for(const r of e)if(!r.evaluate(t))return !1;return !0}]]},any:{type:dt,overloads:[[[dt,dt],(t,[e,r])=>e.evaluate(t)||r.evaluate(t)],[vr(dt),(t,e)=>{for(const r of e)if(r.evaluate(t))return !0;return !1}]]},"!":[dt,[dt],(t,[e])=>!e.evaluate(t)],"is-supported-script":[dt,[ft],(t,[e])=>{const r=t.globals&&t.globals.isSupportedScript;return !r||r(e.evaluate(t))}],upcase:[ft,[ft],(t,[e])=>e.evaluate(t).toUpperCase()],downcase:[ft,[ft],(t,[e])=>e.evaluate(t).toLowerCase()],concat:[ft,vr(gt),(t,e)=>e.map((e=>oe(e.evaluate(t)))).join("")],"resolved-locale":[ft,[xt],(t,[e])=>e.evaluate(t).resolvedLocale()]});class Fr{constructor(t,e){var r;this.expression=t,this._warningHistory={},this._evaluator=new ye,this._defaultValue=e?"color"===(r=e).type&&Ir(r.default)?new Yt(0,0,0,0):"color"===r.type?Yt.parse(r.default)||null:"padding"===r.type?te.parse(r.default)||null:"variableAnchorOffsetCollection"===r.type?re.parse(r.default)||null:void 0===r.default?null:r.default:null,this._enumValues=e&&"enum"===e.type?e.values:null;}evaluateWithoutErrorHandling(t,e,r,n,i,a){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.canonical=n,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=a,this.expression.evaluate(this._evaluator)}evaluate(t,e,r,n,i,a){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.canonical=n,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=a||null;try{const t=this.expression.evaluate(this._evaluator);if(null==t||"number"==typeof t&&t!=t)return this._defaultValue;if(this._enumValues&&!(t in this._enumValues))throw new ue(`Expected value to be one of ${Object.keys(this._enumValues).map((t=>JSON.stringify(t))).join(", ")}, but found ${JSON.stringify(t)} instead.`);return t}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}}}function Tr(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in yr}function $r(t,e){const r=new me(yr,Le,[],e?function(t){const e={color:yt,string:ft,number:pt,enum:ft,boolean:dt,formatted:vt,padding:bt,resolvedImage:wt,variableAnchorOffsetCollection:_t};return "array"===t.type?At(e[t.value]||gt,t.length):e[t.type]}(e):void 0),n=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0);return n?br(new Fr(n,e)):wr(r.errors)}class Lr{constructor(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!Oe(e.expression);}evaluateWithoutErrorHandling(t,e,r,n,i,a){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,a)}evaluate(t,e,r,n,i,a){return this._styleExpression.evaluate(t,e,r,n,i,a)}}class Dr{constructor(t,e,r,n){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!Oe(e.expression),this.interpolationType=n;}evaluateWithoutErrorHandling(t,e,r,n,i,a){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,a)}evaluate(t,e,r,n,i,a){return this._styleExpression.evaluate(t,e,r,n,i,a)}interpolationFactor(t,e,r){return this.interpolationType?Ke.interpolationFactor(this.interpolationType,t,e,r):0}}function Or(t,e){const r=$r(t,e);if("error"===r.result)return r;const n=r.value.expression,i=De(n);if(!i&&!_r(e))return wr([new ut("","data expressions not supported")]);const a=Ue(n,["zoom"]);if(!a&&!Ar(e))return wr([new ut("","zoom expressions not supported")]);const s=Rr(n);return s||a?s instanceof ut?wr([s]):s instanceof Ke&&!Sr(e)?wr([new ut("",'"interpolate" expressions cannot be used with this property')]):br(s?new Dr(i?"camera":"composite",r.value,s.labels,s instanceof Ke?s.interpolation:void 0):new Lr(i?"constant":"source",r.value)):wr([new ut("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}class Ur{constructor(t,e){this._parameters=t,this._specification=e,lt(this,Mr(this._parameters,this._specification));}static deserialize(t){return new Ur(t._parameters,t._specification)}static serialize(t){return {_parameters:t._parameters,_specification:t._specification}}}function Rr(t){let e=null;if(t instanceof Xe)e=Rr(t.result);else if(t instanceof Je){for(const r of t.args)if(e=Rr(r),e)break}else (t instanceof qe||t instanceof Ke)&&t.input instanceof $e&&"zoom"===t.input.name&&(e=t);return e instanceof ut||t.eachChild((t=>{const r=Rr(t);r instanceof ut?e=r:!e&&r?e=new ut("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):e&&r&&e!==r&&(e=new ut("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));})),e}function qr(t){if(!0===t||!1===t)return !0;if(!Array.isArray(t)||0===t.length)return !1;switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1];case"in":return t.length>=3&&("string"!=typeof t[1]||Array.isArray(t[2]));case"!in":case"!has":case"none":return !1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2]);case"any":case"all":for(const e of t.slice(1))if(!qr(e)&&"boolean"!=typeof e)return !1;return !0;default:return !0}}const jr={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}};function Nr(t){if(null==t)return {filter:()=>!0,needGeometry:!1};qr(t)||(t=Gr(t));const e=$r(t,jr);if("error"===e.result)throw new Error(e.value.map((t=>`${t.key}: ${t.message}`)).join(", "));return {filter:(t,r,n)=>e.value.evaluate(t,r,{},n),needGeometry:Kr(t)}}function Zr(t,e){return t<e?-1:t>e?1:0}function Kr(t){if(!Array.isArray(t))return !1;if("within"===t[0])return !0;for(let e=1;e<t.length;e++)if(Kr(t[e]))return !0;return !1}function Gr(t){if(!t)return !0;const e=t[0];return t.length<=1?"any"!==e:"=="===e?Jr(t[1],t[2],"=="):"!="===e?Hr(Jr(t[1],t[2],"==")):"<"===e||">"===e||"<="===e||">="===e?Jr(t[1],t[2],e):"any"===e?(r=t.slice(1),["any"].concat(r.map(Gr))):"all"===e?["all"].concat(t.slice(1).map(Gr)):"none"===e?["all"].concat(t.slice(1).map(Gr).map(Hr)):"in"===e?Xr(t[1],t.slice(2)):"!in"===e?Hr(Xr(t[1],t.slice(2))):"has"===e?Yr(t[1]):"!has"===e?Hr(Yr(t[1])):"within"!==e||t;var r;}function Jr(t,e,r){switch(t){case"$type":return [`filter-type-${r}`,e];case"$id":return [`filter-id-${r}`,e];default:return [`filter-${r}`,t,e]}}function Xr(t,e){if(0===e.length)return !1;switch(t){case"$type":return ["filter-type-in",["literal",e]];case"$id":return ["filter-id-in",["literal",e]];default:return e.length>200&&!e.some((t=>typeof t!=typeof e[0]))?["filter-in-large",t,["literal",e.sort(Zr)]]:["filter-in-small",t,["literal",e]]}}function Yr(t){switch(t){case"$type":return !0;case"$id":return ["filter-has-id"];default:return ["filter-has",t]}}function Hr(t){return ["!",t]}function Wr(t){const e=typeof t;if("number"===e||"boolean"===e||"string"===e||null==t)return JSON.stringify(t);if(Array.isArray(t)){let e="[";for(const r of t)e+=`${Wr(r)},`;return `${e}]`}const r=Object.keys(t).sort();let n="{";for(let e=0;e<r.length;e++)n+=`${JSON.stringify(r[e])}:${Wr(t[r[e]])},`;return `${n}}`}function Qr(t){let e="";for(const r of Y)e+=`/${Wr(t[r])}`;return e}function tn(t){const e=t.value;return e?[new ot(t.key,e,"constants have been deprecated as of v8")]:[]}function en(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function rn(t){if(Array.isArray(t))return t.map(rn);if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){const e={};for(const r in t)e[r]=rn(t[r]);return e}return en(t)}function nn(t){const e=t.key,r=t.value,n=t.valueSpec||{},i=t.objectElementValidators||{},a=t.style,s=t.styleSpec,o=t.validateSpec;let l=[];const u=kr(r);if("object"!==u)return [new ot(e,r,`object expected, ${u} found`)];for(const t in r){const u=t.split(".")[0],c=n[u]||n["*"];let h;if(i[u])h=i[u];else if(n[u])h=o;else if(i["*"])h=i["*"];else {if(!n["*"]){l.push(new ot(e,r[t],`unknown property "${t}"`));continue}h=o;}l=l.concat(h({key:(e?`${e}.`:e)+t,value:r[t],valueSpec:c,style:a,styleSpec:s,object:r,objectKey:t,validateSpec:o},r));}for(const t in n)i[t]||n[t].required&&void 0===n[t].default&&void 0===r[t]&&l.push(new ot(e,r,`missing required property "${t}"`));return l}function an(t){const e=t.value,r=t.valueSpec,n=t.style,i=t.styleSpec,a=t.key,s=t.arrayElementValidator||t.validateSpec;if("array"!==kr(e))return [new ot(a,e,`array expected, ${kr(e)} found`)];if(r.length&&e.length!==r.length)return [new ot(a,e,`array length ${r.length} expected, length ${e.length} found`)];if(r["min-length"]&&e.length<r["min-length"])return [new ot(a,e,`array length at least ${r["min-length"]} expected, length ${e.length} found`)];let o={type:r.value,values:r.values};i.$version<7&&(o.function=r.function),"object"===kr(r.value)&&(o=r.value);let l=[];for(let r=0;r<e.length;r++)l=l.concat(s({array:e,arrayIndex:r,value:e[r],valueSpec:o,validateSpec:t.validateSpec,style:n,styleSpec:i,key:`${a}[${r}]`}));return l}function sn(t){const e=t.key,r=t.value,n=t.valueSpec;let i=kr(r);return "number"===i&&r!=r&&(i="NaN"),"number"!==i?[new ot(e,r,`number expected, ${i} found`)]:"minimum"in n&&r<n.minimum?[new ot(e,r,`${r} is less than the minimum value ${n.minimum}`)]:"maximum"in n&&r>n.maximum?[new ot(e,r,`${r} is greater than the maximum value ${n.maximum}`)]:[]}function on(t){const e=t.valueSpec,r=en(t.value.type);let n,i,a,s={};const o="categorical"!==r&&void 0===t.value.property,l=!o,u="array"===kr(t.value.stops)&&"array"===kr(t.value.stops[0])&&"object"===kr(t.value.stops[0][0]),c=nn({key:t.key,value:t.value,valueSpec:t.styleSpec.function,validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===r)return [new ot(t.key,t.value,'identity function may not have a "stops" property')];let e=[];const n=t.value;return e=e.concat(an({key:t.key,value:n,valueSpec:t.valueSpec,validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:h})),"array"===kr(n)&&0===n.length&&e.push(new ot(t.key,n,"array must have at least one stop")),e},default:function(t){return t.validateSpec({key:t.key,value:t.value,valueSpec:e,validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec})}}});return "identity"===r&&o&&c.push(new ot(t.key,t.value,'missing required property "property"')),"identity"===r||t.value.stops||c.push(new ot(t.key,t.value,'missing required property "stops"')),"exponential"===r&&t.valueSpec.expression&&!Sr(t.valueSpec)&&c.push(new ot(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(l&&!_r(t.valueSpec)?c.push(new ot(t.key,t.value,"property functions not supported")):o&&!Ar(t.valueSpec)&&c.push(new ot(t.key,t.value,"zoom functions not supported"))),"categorical"!==r&&!u||void 0!==t.value.property||c.push(new ot(t.key,t.value,'"property" property is required')),c;function h(t){let r=[];const n=t.value,o=t.key;if("array"!==kr(n))return [new ot(o,n,`array expected, ${kr(n)} found`)];if(2!==n.length)return [new ot(o,n,`array length 2 expected, length ${n.length} found`)];if(u){if("object"!==kr(n[0]))return [new ot(o,n,`object expected, ${kr(n[0])} found`)];if(void 0===n[0].zoom)return [new ot(o,n,"object stop key must have zoom")];if(void 0===n[0].value)return [new ot(o,n,"object stop key must have value")];if(a&&a>en(n[0].zoom))return [new ot(o,n[0].zoom,"stop zoom values must appear in ascending order")];en(n[0].zoom)!==a&&(a=en(n[0].zoom),i=void 0,s={}),r=r.concat(nn({key:`${o}[0]`,value:n[0],valueSpec:{zoom:{}},validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:sn,value:p}}));}else r=r.concat(p({key:`${o}[0]`,value:n[0],valueSpec:{},validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec},n));return Tr(rn(n[1]))?r.concat([new ot(`${o}[1]`,n[1],"expressions are not allowed in function stops.")]):r.concat(t.validateSpec({key:`${o}[1]`,value:n[1],valueSpec:e,validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec}))}function p(t,a){const o=kr(t.value),l=en(t.value),u=null!==t.value?t.value:a;if(n){if(o!==n)return [new ot(t.key,u,`${o} stop domain type must match previous stop domain type ${n}`)]}else n=o;if("number"!==o&&"string"!==o&&"boolean"!==o)return [new ot(t.key,u,"stop domain value must be a number, string, or boolean")];if("number"!==o&&"categorical"!==r){let n=`number expected, ${o} found`;return _r(e)&&void 0===r&&(n+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new ot(t.key,u,n)]}return "categorical"!==r||"number"!==o||isFinite(l)&&Math.floor(l)===l?"categorical"!==r&&"number"===o&&void 0!==i&&l<i?[new ot(t.key,u,"stop domain values must appear in ascending order")]:(i=l,"categorical"===r&&l in s?[new ot(t.key,u,"stop domain values must be unique")]:(s[l]=!0,[])):[new ot(t.key,u,`integer expected, found ${l}`)]}}function ln(t){const e=("property"===t.expressionContext?Or:$r)(rn(t.value),t.valueSpec);if("error"===e.result)return e.value.map((e=>new ot(`${t.key}${e.key}`,t.value,e.message)));const r=e.value.expression||e.value._styleExpression.expression;if("property"===t.expressionContext&&"text-font"===t.propertyKey&&!r.outputDefined())return [new ot(t.key,t.value,`Invalid data expression for "${t.propertyKey}". Output values must be contained as literals within the expression.`)];if("property"===t.expressionContext&&"layout"===t.propertyType&&!Oe(r))return [new ot(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')];if("filter"===t.expressionContext&&!Oe(r))return [new ot(t.key,t.value,'"feature-state" data expressions are not supported with filters.')];if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!Ue(r,["zoom","feature-state"]))return [new ot(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')];if("cluster-initial"===t.expressionContext&&!De(r))return [new ot(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return []}function un(t){const e=t.key,r=t.value,n=t.valueSpec,i=[];return Array.isArray(n.values)?-1===n.values.indexOf(en(r))&&i.push(new ot(e,r,`expected one of [${n.values.join(", ")}], ${JSON.stringify(r)} found`)):-1===Object.keys(n.values).indexOf(en(r))&&i.push(new ot(e,r,`expected one of [${Object.keys(n.values).join(", ")}], ${JSON.stringify(r)} found`)),i}function cn(t){return qr(rn(t.value))?ln(lt({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):hn(t)}function hn(t){const e=t.value,r=t.key;if("array"!==kr(e))return [new ot(r,e,`array expected, ${kr(e)} found`)];const n=t.styleSpec;let i,a=[];if(e.length<1)return [new ot(r,e,"filter array must have at least 1 element")];switch(a=a.concat(un({key:`${r}[0]`,value:e[0],valueSpec:n.filter_operator,style:t.style,styleSpec:t.styleSpec})),en(e[0])){case"<":case"<=":case">":case">=":e.length>=2&&"$type"===en(e[1])&&a.push(new ot(r,e,`"$type" cannot be use with operator "${e[0]}"`));case"==":case"!=":3!==e.length&&a.push(new ot(r,e,`filter array for operator "${e[0]}" must have 3 elements`));case"in":case"!in":e.length>=2&&(i=kr(e[1]),"string"!==i&&a.push(new ot(`${r}[1]`,e[1],`string expected, ${i} found`)));for(let s=2;s<e.length;s++)i=kr(e[s]),"$type"===en(e[1])?a=a.concat(un({key:`${r}[${s}]`,value:e[s],valueSpec:n.geometry_type,style:t.style,styleSpec:t.styleSpec})):"string"!==i&&"number"!==i&&"boolean"!==i&&a.push(new ot(`${r}[${s}]`,e[s],`string, number, or boolean expected, ${i} found`));break;case"any":case"all":case"none":for(let n=1;n<e.length;n++)a=a.concat(hn({key:`${r}[${n}]`,value:e[n],style:t.style,styleSpec:t.styleSpec}));break;case"has":case"!has":i=kr(e[1]),2!==e.length?a.push(new ot(r,e,`filter array for "${e[0]}" operator must have 2 elements`)):"string"!==i&&a.push(new ot(`${r}[1]`,e[1],`string expected, ${i} found`));break;case"within":i=kr(e[1]),2!==e.length?a.push(new ot(r,e,`filter array for "${e[0]}" operator must have 2 elements`)):"object"!==i&&a.push(new ot(`${r}[1]`,e[1],`object expected, ${i} found`));}return a}function pn(t,e){const r=t.key,n=t.validateSpec,i=t.style,a=t.styleSpec,s=t.value,o=t.objectKey,l=a[`${e}_${t.layerType}`];if(!l)return [];const u=o.match(/^(.*)-transition$/);if("paint"===e&&u&&l[u[1]]&&l[u[1]].transition)return n({key:r,value:s,valueSpec:a.transition,style:i,styleSpec:a});const c=t.valueSpec||l[o];if(!c)return [new ot(r,s,`unknown property "${o}"`)];let h;if("string"===kr(s)&&_r(c)&&!c.tokens&&(h=/^{([^}]+)}$/.exec(s)))return [new ot(r,s,`"${o}" does not support interpolation syntax\nUse an identity property function instead: \`{ "type": "identity", "property": ${JSON.stringify(h[1])} }\`.`)];const p=[];return "symbol"===t.layerType&&("text-field"===o&&i&&!i.glyphs&&p.push(new ot(r,s,'use of "text-field" requires a style "glyphs" property')),"text-font"===o&&Ir(rn(s))&&"identity"===en(s.type)&&p.push(new ot(r,s,'"text-font" does not support identity functions'))),p.concat(n({key:t.key,value:s,valueSpec:c,style:i,styleSpec:a,expressionContext:"property",propertyType:e,propertyKey:o}))}function fn(t){return pn(t,"paint")}function dn(t){return pn(t,"layout")}function yn(t){let e=[];const r=t.value,n=t.key,i=t.style,a=t.styleSpec;r.type||r.ref||e.push(new ot(n,r,'either "type" or "ref" is required'));let s=en(r.type);const o=en(r.ref);if(r.id){const a=en(r.id);for(let s=0;s<t.arrayIndex;s++){const t=i.layers[s];en(t.id)===a&&e.push(new ot(n,r.id,`duplicate layer id "${r.id}", previously used at line ${t.id.__line__}`));}}if("ref"in r){let t;["type","source","source-layer","filter","layout"].forEach((t=>{t in r&&e.push(new ot(n,r[t],`"${t}" is prohibited for ref layers`));})),i.layers.forEach((e=>{en(e.id)===o&&(t=e);})),t?t.ref?e.push(new ot(n,r.ref,"ref cannot reference another ref layer")):s=en(t.type):e.push(new ot(n,r.ref,`ref layer "${o}" not found`));}else if("background"!==s)if(r.source){const t=i.sources&&i.sources[r.source],a=t&&en(t.type);t?"vector"===a&&"raster"===s?e.push(new ot(n,r.source,`layer "${r.id}" requires a raster source`)):"raster-dem"!==a&&"hillshade"===s?e.push(new ot(n,r.source,`layer "${r.id}" requires a raster-dem source`)):"raster"===a&&"raster"!==s?e.push(new ot(n,r.source,`layer "${r.id}" requires a vector source`)):"vector"!==a||r["source-layer"]?"raster-dem"===a&&"hillshade"!==s?e.push(new ot(n,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==s||!r.paint||!r.paint["line-gradient"]||"geojson"===a&&t.lineMetrics||e.push(new ot(n,r,`layer "${r.id}" specifies a line-gradient, which requires a GeoJSON source with \`lineMetrics\` enabled.`)):e.push(new ot(n,r,`layer "${r.id}" must specify a "source-layer"`)):e.push(new ot(n,r.source,`source "${r.source}" not found`));}else e.push(new ot(n,r,'missing required property "source"'));return e=e.concat(nn({key:n,value:r,valueSpec:a.layer,style:t.style,styleSpec:t.styleSpec,validateSpec:t.validateSpec,objectElementValidators:{"*":()=>[],type:()=>t.validateSpec({key:`${n}.type`,value:r.type,valueSpec:a.layer.type,style:t.style,styleSpec:t.styleSpec,validateSpec:t.validateSpec,object:r,objectKey:"type"}),filter:cn,layout:t=>nn({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,validateSpec:t.validateSpec,objectElementValidators:{"*":t=>dn(lt({layerType:s},t))}}),paint:t=>nn({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,validateSpec:t.validateSpec,objectElementValidators:{"*":t=>fn(lt({layerType:s},t))}})}})),e}function mn(t){const e=t.value,r=t.key,n=kr(e);return "string"!==n?[new ot(r,e,`string expected, ${n} found`)]:[]}const gn={promoteId:function({key:t,value:e}){if("string"===kr(e))return mn({key:t,value:e});{const r=[];for(const n in e)r.push(...mn({key:`${t}.${n}`,value:e[n]}));return r}}};function xn(t){const e=t.value,r=t.key,n=t.styleSpec,i=t.style,a=t.validateSpec;if(!e.type)return [new ot(r,e,'"type" is required')];const s=en(e.type);let o;switch(s){case"vector":case"raster":return o=nn({key:r,value:e,valueSpec:n[`source_${s.replace("-","_")}`],style:t.style,styleSpec:n,objectElementValidators:gn,validateSpec:a}),o;case"raster-dem":return o=function(t){var e;const r=null!==(e=t.sourceName)&&void 0!==e?e:"",n=t.value,i=t.styleSpec,a=i.source_raster_dem,s=t.style;let o=[];const l=kr(n);if(void 0===n)return o;if("object"!==l)return o.push(new ot("source_raster_dem",n,`object expected, ${l} found`)),o;const u="custom"===en(n.encoding),c=["redFactor","greenFactor","blueFactor","baseShift"],h=t.value.encoding?`"${t.value.encoding}"`:"Default";for(const e in n)!u&&c.includes(e)?o.push(new ot(e,n[e],`In "${r}": "${e}" is only valid when "encoding" is set to "custom". ${h} encoding found`)):a[e]?o=o.concat(t.validateSpec({key:e,value:n[e],valueSpec:a[e],validateSpec:t.validateSpec,style:s,styleSpec:i})):o.push(new ot(e,n[e],`unknown property "${e}"`));return o}({sourceName:r,value:e,style:t.style,styleSpec:n,validateSpec:a}),o;case"geojson":if(o=nn({key:r,value:e,valueSpec:n.source_geojson,style:i,styleSpec:n,validateSpec:a,objectElementValidators:gn}),e.cluster)for(const t in e.clusterProperties){const[n,i]=e.clusterProperties[t],s="string"==typeof n?[n,["accumulated"],["get",t]]:n;o.push(...ln({key:`${r}.${t}.map`,value:i,validateSpec:a,expressionContext:"cluster-map"})),o.push(...ln({key:`${r}.${t}.reduce`,value:s,validateSpec:a,expressionContext:"cluster-reduce"}));}return o;case"video":return nn({key:r,value:e,valueSpec:n.source_video,style:i,validateSpec:a,styleSpec:n});case"image":return nn({key:r,value:e,valueSpec:n.source_image,style:i,validateSpec:a,styleSpec:n});case"canvas":return [new ot(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")];default:return un({key:`${r}.type`,value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:i,validateSpec:a,styleSpec:n})}}function vn(t){const e=t.value,r=t.styleSpec,n=r.light,i=t.style;let a=[];const s=kr(e);if(void 0===e)return a;if("object"!==s)return a=a.concat([new ot("light",e,`object expected, ${s} found`)]),a;for(const s in e){const o=s.match(/^(.*)-transition$/);a=a.concat(o&&n[o[1]]&&n[o[1]].transition?t.validateSpec({key:s,value:e[s],valueSpec:r.transition,validateSpec:t.validateSpec,style:i,styleSpec:r}):n[s]?t.validateSpec({key:s,value:e[s],valueSpec:n[s],validateSpec:t.validateSpec,style:i,styleSpec:r}):[new ot(s,e[s],`unknown property "${s}"`)]);}return a}function bn(t){const e=t.value,r=t.styleSpec,n=r.terrain,i=t.style;let a=[];const s=kr(e);if(void 0===e)return a;if("object"!==s)return a=a.concat([new ot("terrain",e,`object expected, ${s} found`)]),a;for(const s in e)a=a.concat(n[s]?t.validateSpec({key:s,value:e[s],valueSpec:n[s],validateSpec:t.validateSpec,style:i,styleSpec:r}):[new ot(s,e[s],`unknown property "${s}"`)]);return a}function wn(t){let e=[];const r=t.value,n=t.key;if(Array.isArray(r)){const i=[],a=[];for(const s in r)r[s].id&&i.includes(r[s].id)&&e.push(new ot(n,r,`all the sprites' ids must be unique, but ${r[s].id} is duplicated`)),i.push(r[s].id),r[s].url&&a.includes(r[s].url)&&e.push(new ot(n,r,`all the sprites' URLs must be unique, but ${r[s].url} is duplicated`)),a.push(r[s].url),e=e.concat(nn({key:`${n}[${s}]`,value:r[s],valueSpec:{id:{type:"string",required:!0},url:{type:"string",required:!0}},validateSpec:t.validateSpec}));return e}return mn({key:n,value:r})}const _n={"*":()=>[],array:an,boolean:function(t){const e=t.value,r=t.key,n=kr(e);return "boolean"!==n?[new ot(r,e,`boolean expected, ${n} found`)]:[]},number:sn,color:function(t){const e=t.key,r=t.value,n=kr(r);return "string"!==n?[new ot(e,r,`color expected, ${n} found`)]:Yt.parse(String(r))?[]:[new ot(e,r,`color expected, "${r}" found`)]},constants:tn,enum:un,filter:cn,function:on,layer:yn,object:nn,source:xn,light:vn,terrain:bn,string:mn,formatted:function(t){return 0===mn(t).length?[]:ln(t)},resolvedImage:function(t){return 0===mn(t).length?[]:ln(t)},padding:function(t){const e=t.key,r=t.value;if("array"===kr(r)){if(r.length<1||r.length>4)return [new ot(e,r,`padding requires 1 to 4 values; ${r.length} values found`)];const n={type:"number"};let i=[];for(let a=0;a<r.length;a++)i=i.concat(t.validateSpec({key:`${e}[${a}]`,value:r[a],validateSpec:t.validateSpec,valueSpec:n}));return i}return sn({key:e,value:r,valueSpec:{}})},variableAnchorOffsetCollection:function(t){const e=t.key,r=t.value,n=kr(r),i=t.styleSpec;if("array"!==n||r.length<1||r.length%2!=0)return [new ot(e,r,"variableAnchorOffsetCollection requires a non-empty array of even length")];let a=[];for(let n=0;n<r.length;n+=2)a=a.concat(un({key:`${e}[${n}]`,value:r[n],valueSpec:i.layout_symbol["text-anchor"]})),a=a.concat(an({key:`${e}[${n+1}]`,value:r[n+1],valueSpec:{length:2,value:"number"},validateSpec:t.validateSpec,style:t.style,styleSpec:i}));return a},sprite:wn};function An(t){const e=t.value,r=t.valueSpec,n=t.styleSpec;return t.validateSpec=An,r.expression&&Ir(en(e))?on(t):r.expression&&Tr(rn(e))?ln(t):r.type&&_n[r.type]?_n[r.type](t):nn(lt({},t,{valueSpec:r.type?n[r.type]:r}))}function Sn(t){const e=t.value,r=t.key,n=mn(t);return n.length||(-1===e.indexOf("{fontstack}")&&n.push(new ot(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&n.push(new ot(r,e,'"glyphs" url must include a "{range}" token'))),n}function kn(t,e=X){let r=[];return r=r.concat(An({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,validateSpec:An,objectElementValidators:{glyphs:Sn,"*":()=>[]}})),t.constants&&(r=r.concat(tn({key:"constants",value:t.constants,style:t,styleSpec:e,validateSpec:An}))),zn(r)}function In(t){return function(e){return t({...e,validateSpec:An})}}function zn(t){return [].concat(t).sort(((t,e)=>t.line-e.line))}function Mn(t){return function(...e){return zn(t.apply(this,e))}}kn.source=Mn(In(xn)),kn.sprite=Mn(In(wn)),kn.glyphs=Mn(In(Sn)),kn.light=Mn(In(vn)),kn.terrain=Mn(In(bn)),kn.layer=Mn(In(yn)),kn.filter=Mn(In(cn)),kn.paintProperty=Mn(In(fn)),kn.layoutProperty=Mn(In(dn));const Cn=kn,Bn=Cn.light,Pn=Cn.paintProperty,Vn=Cn.layoutProperty;function En(t,e){let r=!1;if(e&&e.length)for(const n of e)t.fire(new G(new Error(n.message))),r=!0;return r}class Fn{constructor(t,e,r){const n=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;const i=new Int32Array(this.arrayBuffer);t=i[0],this.d=(e=i[1])+2*(r=i[2]);for(let t=0;t<this.d*this.d;t++){const e=i[3+t],r=i[3+t+1];n.push(e===r?null:i.subarray(e,r));}const a=i[3+n.length+1];this.keys=i.subarray(i[3+n.length],a),this.bboxes=i.subarray(a),this.insert=this._insertReadonly;}else {this.d=e+2*r;for(let t=0;t<this.d*this.d;t++)n.push([]);this.keys=[],this.bboxes=[];}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0;const i=r/e*t;this.min=-i,this.max=t+i;}insert(t,e,r,n,i){this._forEachCell(e,r,n,i,this._insertCell,this.uid++,void 0,void 0),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i);}_insertReadonly(){throw new Error("Cannot insert into a GridIndex created from an ArrayBuffer.")}_insertCell(t,e,r,n,i,a){this.cells[i].push(a);}query(t,e,r,n,i){const a=this.min,s=this.max;if(t<=a&&e<=a&&s<=r&&s<=n&&!i)return Array.prototype.slice.call(this.keys);{const a=[];return this._forEachCell(t,e,r,n,this._queryCell,a,{},i),a}}_queryCell(t,e,r,n,i,a,s,o){const l=this.cells[i];if(null!==l){const i=this.keys,u=this.bboxes;for(let c=0;c<l.length;c++){const h=l[c];if(void 0===s[h]){const l=4*h;(o?o(u[l+0],u[l+1],u[l+2],u[l+3]):t<=u[l+2]&&e<=u[l+3]&&r>=u[l+0]&&n>=u[l+1])?(s[h]=!0,a.push(i[h])):s[h]=!1;}}}}_forEachCell(t,e,r,n,i,a,s,o){const l=this._convertToCellCoord(t),u=this._convertToCellCoord(e),c=this._convertToCellCoord(r),h=this._convertToCellCoord(n);for(let p=l;p<=c;p++)for(let l=u;l<=h;l++){const u=this.d*l+p;if((!o||o(this._convertFromCellCoord(p),this._convertFromCellCoord(l),this._convertFromCellCoord(p+1),this._convertFromCellCoord(l+1)))&&i.call(this,t,e,r,n,u,a,s,o))return}}_convertFromCellCoord(t){return (t-this.padding)/this.scale}_convertToCellCoord(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))}toArrayBuffer(){if(this.arrayBuffer)return this.arrayBuffer;const t=this.cells,e=3+this.cells.length+1+1;let r=0;for(let t=0;t<this.cells.length;t++)r+=this.cells[t].length;const n=new Int32Array(e+r+this.keys.length+this.bboxes.length);n[0]=this.extent,n[1]=this.n,n[2]=this.padding;let i=e;for(let e=0;e<t.length;e++){const r=t[e];n[3+e]=i,n.set(r,i),i+=r.length;}return n[3+t.length]=i,n.set(this.keys,i),i+=this.keys.length,n[3+t.length+1]=i,n.set(this.bboxes,i),i+=this.bboxes.length,n.buffer}static serialize(t,e){const r=t.toArrayBuffer();return e&&e.push(r),{buffer:r}}static deserialize(t){return new Fn(t.buffer)}}const Tn={};function $n(t,e,r={}){if(Tn[t])throw new Error(`${t} is already registered.`);Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),Tn[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]};}$n("Object",Object),$n("TransferableGridIndex",Fn),$n("Color",Yt),$n("Error",Error),$n("AJAXError",L),$n("ResolvedImage",ne),$n("StylePropertyFunction",Ur),$n("StyleExpression",Fr,{omit:["_evaluator"]}),$n("ZoomDependentExpression",Dr),$n("ZoomConstantExpression",Lr),$n("CompoundExpression",$e,{omit:["_evaluate"]});for(const t in yr)yr[t]._classRegistryKey||$n(`Expression_${t}`,yr[t]);function Ln(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function Dn(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof Blob)return t;if(Ln(t))return e&&e.push(t),t;if(M(t))return e&&e.push(t),t;if(ArrayBuffer.isView(t)){const r=t;return e&&e.push(r.buffer),r}if(t instanceof ImageData)return e&&e.push(t.data.buffer),t;if(Array.isArray(t)){const r=[];for(const n of t)r.push(Dn(n,e));return r}if("object"==typeof t){const r=t.constructor,n=r._classRegistryKey;if(!n)throw new Error("can't serialize object of unregistered class");if(!Tn[n])throw new Error(`${n} is not registered.`);const i=r.serialize?r.serialize(t,e):{};if(r.serialize){if(e&&i===e[e.length-1])throw new Error("statically serialized object won't survive transfer of $name property")}else {for(const r in t){if(!t.hasOwnProperty(r))continue;if(Tn[n].omit.indexOf(r)>=0)continue;const a=t[r];i[r]=Tn[n].shallow.indexOf(r)>=0?a:Dn(a,e);}t instanceof Error&&(i.message=t.message);}if(i.$name)throw new Error("$name property is reserved for worker serialization logic.");return "Object"!==n&&(i.$name=n),i}throw new Error("can't serialize object of type "+typeof t)}function On(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof Blob||Ln(t)||M(t)||ArrayBuffer.isView(t)||t instanceof ImageData)return t;if(Array.isArray(t))return t.map(On);if("object"==typeof t){const e=t.$name||"Object";if(!Tn[e])throw new Error(`can't deserialize unregistered class ${e}`);const{klass:r}=Tn[e];if(!r)throw new Error(`can't deserialize unregistered class ${e}`);if(r.deserialize)return r.deserialize(t);const n=Object.create(r.prototype);for(const r of Object.keys(t)){if("$name"===r)continue;const i=t[r];n[r]=Tn[e].shallow.indexOf(r)>=0?i:On(i);}return n}throw new Error("can't deserialize object of type "+typeof t)}class Un{constructor(){this.first=!0;}update(t,e){const r=Math.floor(t);return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))}}const Rn={"Latin-1 Supplement":t=>t>=128&&t<=255,Arabic:t=>t>=1536&&t<=1791,"Arabic Supplement":t=>t>=1872&&t<=1919,"Arabic Extended-A":t=>t>=2208&&t<=2303,"Hangul Jamo":t=>t>=4352&&t<=4607,"Unified Canadian Aboriginal Syllabics":t=>t>=5120&&t<=5759,Khmer:t=>t>=6016&&t<=6143,"Unified Canadian Aboriginal Syllabics Extended":t=>t>=6320&&t<=6399,"General Punctuation":t=>t>=8192&&t<=8303,"Letterlike Symbols":t=>t>=8448&&t<=8527,"Number Forms":t=>t>=8528&&t<=8591,"Miscellaneous Technical":t=>t>=8960&&t<=9215,"Control Pictures":t=>t>=9216&&t<=9279,"Optical Character Recognition":t=>t>=9280&&t<=9311,"Enclosed Alphanumerics":t=>t>=9312&&t<=9471,"Geometric Shapes":t=>t>=9632&&t<=9727,"Miscellaneous Symbols":t=>t>=9728&&t<=9983,"Miscellaneous Symbols and Arrows":t=>t>=11008&&t<=11263,"CJK Radicals Supplement":t=>t>=11904&&t<=12031,"Kangxi Radicals":t=>t>=12032&&t<=12255,"Ideographic Description Characters":t=>t>=12272&&t<=12287,"CJK Symbols and Punctuation":t=>t>=12288&&t<=12351,Hiragana:t=>t>=12352&&t<=12447,Katakana:t=>t>=12448&&t<=12543,Bopomofo:t=>t>=12544&&t<=12591,"Hangul Compatibility Jamo":t=>t>=12592&&t<=12687,Kanbun:t=>t>=12688&&t<=12703,"Bopomofo Extended":t=>t>=12704&&t<=12735,"CJK Strokes":t=>t>=12736&&t<=12783,"Katakana Phonetic Extensions":t=>t>=12784&&t<=12799,"Enclosed CJK Letters and Months":t=>t>=12800&&t<=13055,"CJK Compatibility":t=>t>=13056&&t<=13311,"CJK Unified Ideographs Extension A":t=>t>=13312&&t<=19903,"Yijing Hexagram Symbols":t=>t>=19904&&t<=19967,"CJK Unified Ideographs":t=>t>=19968&&t<=40959,"Yi Syllables":t=>t>=40960&&t<=42127,"Yi Radicals":t=>t>=42128&&t<=42191,"Hangul Jamo Extended-A":t=>t>=43360&&t<=43391,"Hangul Syllables":t=>t>=44032&&t<=55215,"Hangul Jamo Extended-B":t=>t>=55216&&t<=55295,"Private Use Area":t=>t>=57344&&t<=63743,"CJK Compatibility Ideographs":t=>t>=63744&&t<=64255,"Arabic Presentation Forms-A":t=>t>=64336&&t<=65023,"Vertical Forms":t=>t>=65040&&t<=65055,"CJK Compatibility Forms":t=>t>=65072&&t<=65103,"Small Form Variants":t=>t>=65104&&t<=65135,"Arabic Presentation Forms-B":t=>t>=65136&&t<=65279,"Halfwidth and Fullwidth Forms":t=>t>=65280&&t<=65519};function qn(t){for(const e of t)if(Zn(e.charCodeAt(0)))return !0;return !1}function jn(t){for(const e of t)if(!Nn(e.charCodeAt(0)))return !1;return !0}function Nn(t){return !(Rn.Arabic(t)||Rn["Arabic Supplement"](t)||Rn["Arabic Extended-A"](t)||Rn["Arabic Presentation Forms-A"](t)||Rn["Arabic Presentation Forms-B"](t))}function Zn(t){return !(746!==t&&747!==t&&(t<4352||!(Rn["Bopomofo Extended"](t)||Rn.Bopomofo(t)||Rn["CJK Compatibility Forms"](t)&&!(t>=65097&&t<=65103)||Rn["CJK Compatibility Ideographs"](t)||Rn["CJK Compatibility"](t)||Rn["CJK Radicals Supplement"](t)||Rn["CJK Strokes"](t)||!(!Rn["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||Rn["CJK Unified Ideographs Extension A"](t)||Rn["CJK Unified Ideographs"](t)||Rn["Enclosed CJK Letters and Months"](t)||Rn["Hangul Compatibility Jamo"](t)||Rn["Hangul Jamo Extended-A"](t)||Rn["Hangul Jamo Extended-B"](t)||Rn["Hangul Jamo"](t)||Rn["Hangul Syllables"](t)||Rn.Hiragana(t)||Rn["Ideographic Description Characters"](t)||Rn.Kanbun(t)||Rn["Kangxi Radicals"](t)||Rn["Katakana Phonetic Extensions"](t)||Rn.Katakana(t)&&12540!==t||!(!Rn["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!Rn["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||Rn["Unified Canadian Aboriginal Syllabics"](t)||Rn["Unified Canadian Aboriginal Syllabics Extended"](t)||Rn["Vertical Forms"](t)||Rn["Yijing Hexagram Symbols"](t)||Rn["Yi Syllables"](t)||Rn["Yi Radicals"](t))))}function Kn(t){return !(Zn(t)||function(t){return !!(Rn["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||Rn["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||Rn["Letterlike Symbols"](t)||Rn["Number Forms"](t)||Rn["Miscellaneous Technical"](t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||Rn["Control Pictures"](t)&&9251!==t||Rn["Optical Character Recognition"](t)||Rn["Enclosed Alphanumerics"](t)||Rn["Geometric Shapes"](t)||Rn["Miscellaneous Symbols"](t)&&!(t>=9754&&t<=9759)||Rn["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||Rn["CJK Symbols and Punctuation"](t)||Rn.Katakana(t)||Rn["Private Use Area"](t)||Rn["CJK Compatibility Forms"](t)||Rn["Small Form Variants"](t)||Rn["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function Gn(t){return t>=1424&&t<=2303||Rn["Arabic Presentation Forms-A"](t)||Rn["Arabic Presentation Forms-B"](t)}function Jn(t,e){return !(!e&&Gn(t)||t>=2304&&t<=3583||t>=3840&&t<=4255||Rn.Khmer(t))}function Xn(t){for(const e of t)if(Gn(e.charCodeAt(0)))return !0;return !1}const Yn="deferred",Hn="loading",Wn="loaded";let Qn=null,ti="unavailable",ei=null;const ri=function(t){t&&"string"==typeof t&&t.indexOf("NetworkError")>-1&&(ti="error"),Qn&&Qn(t);};function ni(){ii.fire(new K("pluginStateChange",{pluginStatus:ti,pluginURL:ei}));}const ii=new J,ai=function(){return ti},si=function(){if(ti!==Yn||!ei)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified");ti=Hn,ni(),ei&&q({url:ei},(t=>{t?ri(t):(ti=Wn,ni());}));},oi={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:()=>ti===Wn||null!=oi.applyArabicShaping,isLoading:()=>ti===Hn,setState(t){if(!I())throw new Error("Cannot set the state of the rtl-text-plugin when not in the web-worker context");ti=t.pluginStatus,ei=t.pluginURL;},isParsed(){if(!I())throw new Error("rtl-text-plugin is only parsed on the worker-threads");return null!=oi.applyArabicShaping&&null!=oi.processBidirectionalText&&null!=oi.processStyledBidirectionalText},getPluginURL(){if(!I())throw new Error("rtl-text-plugin url can only be queried from the worker threads");return ei}};class li{constructor(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new Un,this.transition={});}isSupportedScript(t){return function(t,e){for(const r of t)if(!Jn(r.charCodeAt(0),e))return !1;return !0}(t,oi.isLoaded())}crossFadingFactor(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)}getCrossfadeParameters(){const t=this.zoom,e=t-Math.floor(t),r=this.crossFadingFactor();return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*r}:{fromScale:.5,toScale:1,t:1-(1-r)*e}}}class ui{constructor(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(Ir(t))return new Ur(t,e);if(Tr(t)){const r=Or(t,e);if("error"===r.result)throw new Error(r.value.map((t=>`${t.key}: ${t.message}`)).join(", "));return r.value}{let r=t;return "color"===e.type&&"string"==typeof t?r=Yt.parse(t):"padding"!==e.type||"number"!=typeof t&&!Array.isArray(t)?"variableAnchorOffsetCollection"===e.type&&Array.isArray(t)&&(r=re.parse(t)):r=te.parse(t),{kind:"constant",evaluate:()=>r}}}(void 0===e?t.specification.default:e,t.specification);}isDataDriven(){return "source"===this.expression.kind||"composite"===this.expression.kind}possiblyEvaluate(t,e,r){return this.property.possiblyEvaluate(this,t,e,r)}}class ci{constructor(t){this.property=t,this.value=new ui(t,void 0);}transitioned(t,e){return new pi(this.property,this.value,e,g({},t.transition,this.transition),t.now)}untransitioned(){return new pi(this.property,this.value,null,{},0)}}class hi{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues);}getValue(t){return w(this._values[t].value.value)}setValue(t,e){Object.prototype.hasOwnProperty.call(this._values,t)||(this._values[t]=new ci(this._values[t].property)),this._values[t].value=new ui(this._values[t].property,null===e?void 0:w(e));}getTransition(t){return w(this._values[t].transition)}setTransition(t,e){Object.prototype.hasOwnProperty.call(this._values,t)||(this._values[t]=new ci(this._values[t].property)),this._values[t].transition=w(e)||void 0;}serialize(){const t={};for(const e of Object.keys(this._values)){const r=this.getValue(e);void 0!==r&&(t[e]=r);const n=this.getTransition(e);void 0!==n&&(t[`${e}-transition`]=n);}return t}transitioned(t,e){const r=new fi(this._properties);for(const n of Object.keys(this._values))r._values[n]=this._values[n].transitioned(t,e._values[n]);return r}untransitioned(){const t=new fi(this._properties);for(const e of Object.keys(this._values))t._values[e]=this._values[e].untransitioned();return t}}class pi{constructor(t,e,r,n,i){this.property=t,this.value=e,this.begin=i+n.delay||0,this.end=this.begin+n.duration||0,t.specification.transition&&(n.delay||n.duration)&&(this.prior=r);}possiblyEvaluate(t,e,r){const n=t.now||0,i=this.value.possiblyEvaluate(t,e,r),a=this.prior;if(a){if(n>this.end)return this.prior=null,i;if(this.value.isDataDriven())return this.prior=null,i;if(n<this.begin)return a.possiblyEvaluate(t,e,r);{const s=(n-this.begin)/(this.end-this.begin);return this.property.interpolate(a.possiblyEvaluate(t,e,r),i,function(t){if(t<=0)return 0;if(t>=1)return 1;const e=t*t,r=e*t;return 4*(t<.5?r:3*(t-e)+r-.75)}(s))}}return i}}class fi{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues);}possiblyEvaluate(t,e,r){const n=new mi(this._properties);for(const i of Object.keys(this._values))n._values[i]=this._values[i].possiblyEvaluate(t,e,r);return n}hasTransition(){for(const t of Object.keys(this._values))if(this._values[t].prior)return !0;return !1}}class di{constructor(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues);}hasValue(t){return void 0!==this._values[t].value}getValue(t){return w(this._values[t].value)}setValue(t,e){this._values[t]=new ui(this._values[t].property,null===e?void 0:w(e));}serialize(){const t={};for(const e of Object.keys(this._values)){const r=this.getValue(e);void 0!==r&&(t[e]=r);}return t}possiblyEvaluate(t,e,r){const n=new mi(this._properties);for(const i of Object.keys(this._values))n._values[i]=this._values[i].possiblyEvaluate(t,e,r);return n}}class yi{constructor(t,e,r){this.property=t,this.value=e,this.parameters=r;}isConstant(){return "constant"===this.value.kind}constantOr(t){return "constant"===this.value.kind?this.value.value:t}evaluate(t,e,r,n){return this.property.evaluate(this.value,this.parameters,t,e,r,n)}}class mi{constructor(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues);}get(t){return this._values[t]}}class gi{constructor(t){this.specification=t;}possiblyEvaluate(t,e){if(t.isDataDriven())throw new Error("Value should not be data driven");return t.expression.evaluate(e)}interpolate(t,e,r){const n=Ze[this.specification.type];return n?n(t,e,r):t}}class xi{constructor(t,e){this.specification=t,this.overrides=e;}possiblyEvaluate(t,e,r,n){return new yi(this,"constant"===t.expression.kind||"camera"===t.expression.kind?{kind:"constant",value:t.expression.evaluate(e,null,{},r,n)}:t.expression,e)}interpolate(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0===t.value.value||void 0===e.value.value)return new yi(this,{kind:"constant",value:void 0},t.parameters);const n=Ze[this.specification.type];if(n){const i=n(t.value.value,e.value.value,r);return new yi(this,{kind:"constant",value:i},t.parameters)}return t}evaluate(t,e,r,n,i,a){return "constant"===t.kind?t.value:t.evaluate(e,r,n,i,a)}}class vi extends xi{possiblyEvaluate(t,e,r,n){if(void 0===t.value)return new yi(this,{kind:"constant",value:void 0},e);if("constant"===t.expression.kind){const i=t.expression.evaluate(e,null,{},r,n),a="resolvedImage"===t.property.specification.type&&"string"!=typeof i?i.name:i,s=this._calculate(a,a,a,e);return new yi(this,{kind:"constant",value:s},e)}if("camera"===t.expression.kind){const r=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e);return new yi(this,{kind:"constant",value:r},e)}return new yi(this,t.expression,e)}evaluate(t,e,r,n,i,a){if("source"===t.kind){const s=t.evaluate(e,r,n,i,a);return this._calculate(s,s,s,e)}return "composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},r,n),t.evaluate({zoom:Math.floor(e.zoom)},r,n),t.evaluate({zoom:Math.floor(e.zoom)+1},r,n),e):t.value}_calculate(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}}interpolate(t){return t}}class bi{constructor(t){this.specification=t;}possiblyEvaluate(t,e,r,n){if(void 0!==t.value){if("constant"===t.expression.kind){const i=t.expression.evaluate(e,null,{},r,n);return this._calculate(i,i,i,e)}return this._calculate(t.expression.evaluate(new li(Math.floor(e.zoom-1),e)),t.expression.evaluate(new li(Math.floor(e.zoom),e)),t.expression.evaluate(new li(Math.floor(e.zoom+1),e)),e)}}_calculate(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}}interpolate(t){return t}}class wi{constructor(t){this.specification=t;}possiblyEvaluate(t,e,r,n){return !!t.expression.evaluate(e,null,{},r,n)}interpolate(){return !1}}class _i{constructor(t){this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[];for(const e in t){const r=t[e];r.specification.overridable&&this.overridableProperties.push(e);const n=this.defaultPropertyValues[e]=new ui(r,void 0),i=this.defaultTransitionablePropertyValues[e]=new ci(r);this.defaultTransitioningPropertyValues[e]=i.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=n.possiblyEvaluate({});}}}$n("DataDrivenProperty",xi),$n("DataConstantProperty",gi),$n("CrossFadedDataDrivenProperty",vi),$n("CrossFadedProperty",bi),$n("ColorRampProperty",wi);const Ai="-transition";class Si extends J{constructor(t,e){if(super(),this.id=t.id,this.type=t.type,this._featureFilter={filter:()=>!0,needGeometry:!1},"custom"!==t.type&&(this.metadata=t.metadata,this.minzoom=t.minzoom,this.maxzoom=t.maxzoom,"background"!==t.type&&(this.source=t.source,this.sourceLayer=t["source-layer"],this.filter=t.filter),e.layout&&(this._unevaluatedLayout=new di(e.layout)),e.paint)){this._transitionablePaint=new hi(e.paint);for(const e in t.paint)this.setPaintProperty(e,t.paint[e],{validate:!1});for(const e in t.layout)this.setLayoutProperty(e,t.layout[e],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned(),this.paint=new mi(e.paint);}}getCrossfadeParameters(){return this._crossfadeParameters}getLayoutProperty(t){return "visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)}setLayoutProperty(t,e,r={}){null!=e&&this._validate(Vn,`layers.${this.id}.layout.${t}`,t,e,r)||("visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e);}getPaintProperty(t){return t.endsWith(Ai)?this._transitionablePaint.getTransition(t.slice(0,-11)):this._transitionablePaint.getValue(t)}setPaintProperty(t,e,r={}){if(null!=e&&this._validate(Pn,`layers.${this.id}.paint.${t}`,t,e,r))return !1;if(t.endsWith(Ai))return this._transitionablePaint.setTransition(t.slice(0,-11),e||void 0),!1;{const r=this._transitionablePaint._values[t],n="cross-faded-data-driven"===r.property.specification["property-type"],i=r.value.isDataDriven(),a=r.value;this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t);const s=this._transitionablePaint._values[t].value;return s.isDataDriven()||i||n||this._handleOverridablePaintPropertyUpdate(t,a,s)}}_handleSpecialPaintPropertyUpdate(t){}_handleOverridablePaintPropertyUpdate(t,e,r){return !1}isHidden(t){return !!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility}updateTransitions(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint);}hasTransition(){return this._transitioningPaint.hasTransition()}recalculate(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,void 0,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,void 0,e);}serialize(){const t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),b(t,((t,e)=>!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)))}_validate(t,e,r,n,i={}){return (!i||!1!==i.validate)&&En(this,t.call(Cn,{key:e,layerType:this.type,objectKey:r,value:n,styleSpec:X,style:{glyphs:!0,sprite:!0}}))}is3D(){return !1}isTileClipped(){return !1}hasOffscreenPass(){return !1}resize(){}isStateDependent(){for(const t in this.paint._values){const e=this.paint.get(t);if(e instanceof yi&&_r(e.property.specification)&&("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent)return !0}return !1}}const ki={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array};class Ii{constructor(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8;}}class zi{constructor(){this.isTransferred=!1,this.capacity=-1,this.resize(0);}static serialize(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}}static deserialize(t){const e=Object.create(this.prototype);return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e}_trim(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews());}clear(){this.length=0;}resize(t){this.reserve(t),this.length=t;}reserve(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);const e=this.uint8;this._refreshViews(),e&&this.uint8.set(e);}}_refreshViews(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")}}function Mi(t,e=1){let r=0,n=0;return {members:t.map((t=>{const i=ki[t.type].BYTES_PER_ELEMENT,a=r=Ci(r,Math.max(e,i)),s=t.components||1;return n=Math.max(n,i),r+=i*s,{name:t.name,type:t.type,components:s,offset:a}})),size:Ci(r,Math.max(n,e)),alignment:e}}function Ci(t,e){return Math.ceil(t/e)*e}class Bi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.int16[n+0]=e,this.int16[n+1]=r,t}}Bi.prototype.bytesPerElement=4,$n("StructArrayLayout2i4",Bi);class Pi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.int16[i+0]=e,this.int16[i+1]=r,this.int16[i+2]=n,t}}Pi.prototype.bytesPerElement=6,$n("StructArrayLayout3i6",Pi);class Vi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const a=4*t;return this.int16[a+0]=e,this.int16[a+1]=r,this.int16[a+2]=n,this.int16[a+3]=i,t}}Vi.prototype.bytesPerElement=8,$n("StructArrayLayout4i8",Vi);class Ei extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i,a)}emplace(t,e,r,n,i,a,s){const o=6*t;return this.int16[o+0]=e,this.int16[o+1]=r,this.int16[o+2]=n,this.int16[o+3]=i,this.int16[o+4]=a,this.int16[o+5]=s,t}}Ei.prototype.bytesPerElement=12,$n("StructArrayLayout2i4i12",Ei);class Fi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i,a)}emplace(t,e,r,n,i,a,s){const o=4*t,l=8*t;return this.int16[o+0]=e,this.int16[o+1]=r,this.uint8[l+4]=n,this.uint8[l+5]=i,this.uint8[l+6]=a,this.uint8[l+7]=s,t}}Fi.prototype.bytesPerElement=8,$n("StructArrayLayout2i4ub8",Fi);class Ti extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.float32[n+0]=e,this.float32[n+1]=r,t}}Ti.prototype.bytesPerElement=8,$n("StructArrayLayout2f8",Ti);class $i extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l,u){const c=this.length;return this.resize(c+1),this.emplace(c,t,e,r,n,i,a,s,o,l,u)}emplace(t,e,r,n,i,a,s,o,l,u,c){const h=10*t;return this.uint16[h+0]=e,this.uint16[h+1]=r,this.uint16[h+2]=n,this.uint16[h+3]=i,this.uint16[h+4]=a,this.uint16[h+5]=s,this.uint16[h+6]=o,this.uint16[h+7]=l,this.uint16[h+8]=u,this.uint16[h+9]=c,t}}$i.prototype.bytesPerElement=20,$n("StructArrayLayout10ui20",$i);class Li extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l,u,c,h){const p=this.length;return this.resize(p+1),this.emplace(p,t,e,r,n,i,a,s,o,l,u,c,h)}emplace(t,e,r,n,i,a,s,o,l,u,c,h,p){const f=12*t;return this.int16[f+0]=e,this.int16[f+1]=r,this.int16[f+2]=n,this.int16[f+3]=i,this.uint16[f+4]=a,this.uint16[f+5]=s,this.uint16[f+6]=o,this.uint16[f+7]=l,this.int16[f+8]=u,this.int16[f+9]=c,this.int16[f+10]=h,this.int16[f+11]=p,t}}Li.prototype.bytesPerElement=24,$n("StructArrayLayout4i4ui4i24",Li);class Di extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.float32[i+0]=e,this.float32[i+1]=r,this.float32[i+2]=n,t}}Di.prototype.bytesPerElement=12,$n("StructArrayLayout3f12",Di);class Oi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint32[1*t+0]=e,t}}Oi.prototype.bytesPerElement=4,$n("StructArrayLayout1ul4",Oi);class Ui extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l){const u=this.length;return this.resize(u+1),this.emplace(u,t,e,r,n,i,a,s,o,l)}emplace(t,e,r,n,i,a,s,o,l,u){const c=10*t,h=5*t;return this.int16[c+0]=e,this.int16[c+1]=r,this.int16[c+2]=n,this.int16[c+3]=i,this.int16[c+4]=a,this.int16[c+5]=s,this.uint32[h+3]=o,this.uint16[c+8]=l,this.uint16[c+9]=u,t}}Ui.prototype.bytesPerElement=20,$n("StructArrayLayout6i1ul2ui20",Ui);class Ri extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i,a)}emplace(t,e,r,n,i,a,s){const o=6*t;return this.int16[o+0]=e,this.int16[o+1]=r,this.int16[o+2]=n,this.int16[o+3]=i,this.int16[o+4]=a,this.int16[o+5]=s,t}}Ri.prototype.bytesPerElement=12,$n("StructArrayLayout2i2i2i12",Ri);class qi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i){const a=this.length;return this.resize(a+1),this.emplace(a,t,e,r,n,i)}emplace(t,e,r,n,i,a){const s=4*t,o=8*t;return this.float32[s+0]=e,this.float32[s+1]=r,this.float32[s+2]=n,this.int16[o+6]=i,this.int16[o+7]=a,t}}qi.prototype.bytesPerElement=16,$n("StructArrayLayout2f1f2i16",qi);class ji extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const a=12*t,s=3*t;return this.uint8[a+0]=e,this.uint8[a+1]=r,this.float32[s+1]=n,this.float32[s+2]=i,t}}ji.prototype.bytesPerElement=12,$n("StructArrayLayout2ub2f12",ji);class Ni extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.uint16[i+0]=e,this.uint16[i+1]=r,this.uint16[i+2]=n,t}}Ni.prototype.bytesPerElement=6,$n("StructArrayLayout3ui6",Ni);class Zi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m){const g=this.length;return this.resize(g+1),this.emplace(g,t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m)}emplace(t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m,g){const x=24*t,v=12*t,b=48*t;return this.int16[x+0]=e,this.int16[x+1]=r,this.uint16[x+2]=n,this.uint16[x+3]=i,this.uint32[v+2]=a,this.uint32[v+3]=s,this.uint32[v+4]=o,this.uint16[x+10]=l,this.uint16[x+11]=u,this.uint16[x+12]=c,this.float32[v+7]=h,this.float32[v+8]=p,this.uint8[b+36]=f,this.uint8[b+37]=d,this.uint8[b+38]=y,this.uint32[v+10]=m,this.int16[x+22]=g,t}}Zi.prototype.bytesPerElement=48,$n("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",Zi);class Ki extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m,g,x,v,b,w,_,A,S,k,I,z){const M=this.length;return this.resize(M+1),this.emplace(M,t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m,g,x,v,b,w,_,A,S,k,I,z)}emplace(t,e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m,g,x,v,b,w,_,A,S,k,I,z,M){const C=32*t,B=16*t;return this.int16[C+0]=e,this.int16[C+1]=r,this.int16[C+2]=n,this.int16[C+3]=i,this.int16[C+4]=a,this.int16[C+5]=s,this.int16[C+6]=o,this.int16[C+7]=l,this.uint16[C+8]=u,this.uint16[C+9]=c,this.uint16[C+10]=h,this.uint16[C+11]=p,this.uint16[C+12]=f,this.uint16[C+13]=d,this.uint16[C+14]=y,this.uint16[C+15]=m,this.uint16[C+16]=g,this.uint16[C+17]=x,this.uint16[C+18]=v,this.uint16[C+19]=b,this.uint16[C+20]=w,this.uint16[C+21]=_,this.uint16[C+22]=A,this.uint32[B+12]=S,this.float32[B+13]=k,this.float32[B+14]=I,this.uint16[C+30]=z,this.uint16[C+31]=M,t}}Ki.prototype.bytesPerElement=64,$n("StructArrayLayout8i15ui1ul2f2ui64",Ki);class Gi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.float32[1*t+0]=e,t}}Gi.prototype.bytesPerElement=4,$n("StructArrayLayout1f4",Gi);class Ji extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.uint16[6*t+0]=e,this.float32[i+1]=r,this.float32[i+2]=n,t}}Ji.prototype.bytesPerElement=12,$n("StructArrayLayout1ui2f12",Ji);class Xi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=4*t;return this.uint32[2*t+0]=e,this.uint16[i+2]=r,this.uint16[i+3]=n,t}}Xi.prototype.bytesPerElement=8,$n("StructArrayLayout1ul2ui8",Xi);class Yi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.uint16[n+0]=e,this.uint16[n+1]=r,t}}Yi.prototype.bytesPerElement=4,$n("StructArrayLayout2ui4",Yi);class Hi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint16[1*t+0]=e,t}}Hi.prototype.bytesPerElement=2,$n("StructArrayLayout1ui2",Hi);class Wi extends zi{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const a=4*t;return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=n,this.float32[a+3]=i,t}}Wi.prototype.bytesPerElement=16,$n("StructArrayLayout4f16",Wi);class Qi extends Ii{get anchorPointX(){return this._structArray.int16[this._pos2+0]}get anchorPointY(){return this._structArray.int16[this._pos2+1]}get x1(){return this._structArray.int16[this._pos2+2]}get y1(){return this._structArray.int16[this._pos2+3]}get x2(){return this._structArray.int16[this._pos2+4]}get y2(){return this._structArray.int16[this._pos2+5]}get featureIndex(){return this._structArray.uint32[this._pos4+3]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+8]}get bucketIndex(){return this._structArray.uint16[this._pos2+9]}get anchorPoint(){return new a(this.anchorPointX,this.anchorPointY)}}Qi.prototype.size=20;class ta extends Ui{get(t){return new Qi(this,t)}}$n("CollisionBoxArray",ta);class ea extends Ii{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get glyphStartIndex(){return this._structArray.uint16[this._pos2+2]}get numGlyphs(){return this._structArray.uint16[this._pos2+3]}get vertexStartIndex(){return this._structArray.uint32[this._pos4+2]}get lineStartIndex(){return this._structArray.uint32[this._pos4+3]}get lineLength(){return this._structArray.uint32[this._pos4+4]}get segment(){return this._structArray.uint16[this._pos2+10]}get lowerSize(){return this._structArray.uint16[this._pos2+11]}get upperSize(){return this._structArray.uint16[this._pos2+12]}get lineOffsetX(){return this._structArray.float32[this._pos4+7]}get lineOffsetY(){return this._structArray.float32[this._pos4+8]}get writingMode(){return this._structArray.uint8[this._pos1+36]}get placedOrientation(){return this._structArray.uint8[this._pos1+37]}set placedOrientation(t){this._structArray.uint8[this._pos1+37]=t;}get hidden(){return this._structArray.uint8[this._pos1+38]}set hidden(t){this._structArray.uint8[this._pos1+38]=t;}get crossTileID(){return this._structArray.uint32[this._pos4+10]}set crossTileID(t){this._structArray.uint32[this._pos4+10]=t;}get associatedIconIndex(){return this._structArray.int16[this._pos2+22]}}ea.prototype.size=48;class ra extends Zi{get(t){return new ea(this,t)}}$n("PlacedSymbolArray",ra);class na extends Ii{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get rightJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+2]}get centerJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+3]}get leftJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+4]}get verticalPlacedTextSymbolIndex(){return this._structArray.int16[this._pos2+5]}get placedIconSymbolIndex(){return this._structArray.int16[this._pos2+6]}get verticalPlacedIconSymbolIndex(){return this._structArray.int16[this._pos2+7]}get key(){return this._structArray.uint16[this._pos2+8]}get textBoxStartIndex(){return this._structArray.uint16[this._pos2+9]}get textBoxEndIndex(){return this._structArray.uint16[this._pos2+10]}get verticalTextBoxStartIndex(){return this._structArray.uint16[this._pos2+11]}get verticalTextBoxEndIndex(){return this._structArray.uint16[this._pos2+12]}get iconBoxStartIndex(){return this._structArray.uint16[this._pos2+13]}get iconBoxEndIndex(){return this._structArray.uint16[this._pos2+14]}get verticalIconBoxStartIndex(){return this._structArray.uint16[this._pos2+15]}get verticalIconBoxEndIndex(){return this._structArray.uint16[this._pos2+16]}get featureIndex(){return this._structArray.uint16[this._pos2+17]}get numHorizontalGlyphVertices(){return this._structArray.uint16[this._pos2+18]}get numVerticalGlyphVertices(){return this._structArray.uint16[this._pos2+19]}get numIconVertices(){return this._structArray.uint16[this._pos2+20]}get numVerticalIconVertices(){return this._structArray.uint16[this._pos2+21]}get useRuntimeCollisionCircles(){return this._structArray.uint16[this._pos2+22]}get crossTileID(){return this._structArray.uint32[this._pos4+12]}set crossTileID(t){this._structArray.uint32[this._pos4+12]=t;}get textBoxScale(){return this._structArray.float32[this._pos4+13]}get collisionCircleDiameter(){return this._structArray.float32[this._pos4+14]}get textAnchorOffsetStartIndex(){return this._structArray.uint16[this._pos2+30]}get textAnchorOffsetEndIndex(){return this._structArray.uint16[this._pos2+31]}}na.prototype.size=64;class ia extends Ki{get(t){return new na(this,t)}}$n("SymbolInstanceArray",ia);class aa extends Gi{getoffsetX(t){return this.float32[1*t+0]}}$n("GlyphOffsetArray",aa);class sa extends Pi{getx(t){return this.int16[3*t+0]}gety(t){return this.int16[3*t+1]}gettileUnitDistanceFromAnchor(t){return this.int16[3*t+2]}}$n("SymbolLineVertexArray",sa);class oa extends Ii{get textAnchor(){return this._structArray.uint16[this._pos2+0]}get textOffset0(){return this._structArray.float32[this._pos4+1]}get textOffset1(){return this._structArray.float32[this._pos4+2]}}oa.prototype.size=12;class la extends Ji{get(t){return new oa(this,t)}}$n("TextAnchorOffsetArray",la);class ua extends Ii{get featureIndex(){return this._structArray.uint32[this._pos4+0]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+2]}get bucketIndex(){return this._structArray.uint16[this._pos2+3]}}ua.prototype.size=8;class ca extends Xi{get(t){return new ua(this,t)}}$n("FeatureIndexArray",ca);class ha extends Bi{}class pa extends Bi{}class fa extends Bi{}class da extends Ei{}class ya extends Fi{}class ma extends Ti{}class ga extends $i{}class xa extends Li{}class va extends Di{}class ba extends Oi{}class wa extends Ri{}class _a extends ji{}class Aa extends Ni{}class Sa extends Yi{}const ka=Mi([{name:"a_pos",components:2,type:"Int16"}],4),{members:Ia}=ka;class za{constructor(t=[]){this.segments=t;}prepareSegment(t,e,r,n){let i=this.segments[this.segments.length-1];return t>za.MAX_VERTEX_ARRAY_LENGTH&&A(`Max vertices per segment is ${za.MAX_VERTEX_ARRAY_LENGTH}: bucket requested ${t}`),(!i||i.vertexLength+t>za.MAX_VERTEX_ARRAY_LENGTH||i.sortKey!==n)&&(i={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==n&&(i.sortKey=n),this.segments.push(i)),i}get(){return this.segments}destroy(){for(const t of this.segments)for(const e in t.vaos)t.vaos[e].destroy();}static simpleSegment(t,e,r,n){return new za([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:n,vaos:{},sortKey:0}])}}function Ma(t,e){return 256*(t=y(Math.floor(t),0,255))+y(Math.floor(e),0,255)}za.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,$n("SegmentVector",za);const Ca=Mi([{name:"a_pattern_from",components:4,type:"Uint16"},{name:"a_pattern_to",components:4,type:"Uint16"},{name:"a_pixel_ratio_from",components:1,type:"Uint16"},{name:"a_pixel_ratio_to",components:1,type:"Uint16"}]);var Ba={exports:{}},Pa={exports:{}};Pa.exports=function(t,e){var r,n,i,a,s,o,l,u;for(n=t.length-(r=3&t.length),i=e,s=3432918353,o=461845907,u=0;u<n;)l=255&t.charCodeAt(u)|(255&t.charCodeAt(++u))<<8|(255&t.charCodeAt(++u))<<16|(255&t.charCodeAt(++u))<<24,++u,i=27492+(65535&(a=5*(65535&(i=(i^=l=(65535&(l=(l=(65535&l)*s+(((l>>>16)*s&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(a>>>16)&65535)<<16);switch(l=0,r){case 3:l^=(255&t.charCodeAt(u+2))<<16;case 2:l^=(255&t.charCodeAt(u+1))<<8;case 1:i^=l=(65535&(l=(l=(65535&(l^=255&t.charCodeAt(u)))*s+(((l>>>16)*s&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295;}return i^=t.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0};var Va=Pa.exports,Ea={exports:{}};Ea.exports=function(t,e){for(var r,n=t.length,i=e^n,a=0;n>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))+((1540483477*(r>>>16)&65535)<<16),i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),n-=4,++a;switch(n){case 3:i^=(255&t.charCodeAt(a+2))<<16;case 2:i^=(255&t.charCodeAt(a+1))<<8;case 1:i=1540483477*(65535&(i^=255&t.charCodeAt(a)))+((1540483477*(i>>>16)&65535)<<16);}return i=1540483477*(65535&(i^=i>>>13))+((1540483477*(i>>>16)&65535)<<16),(i^=i>>>15)>>>0};var Fa=Va,Ta=Ea.exports;Ba.exports=Fa,Ba.exports.murmur3=Fa,Ba.exports.murmur2=Ta;var $a=r(Ba.exports);class La{constructor(){this.ids=[],this.positions=[],this.indexed=!1;}add(t,e,r,n){this.ids.push(Da(t)),this.positions.push(e,r,n);}getPositions(t){if(!this.indexed)throw new Error("Trying to get index, but feature positions are not indexed");const e=Da(t);let r=0,n=this.ids.length-1;for(;r<n;){const t=r+n>>1;this.ids[t]>=e?n=t:r=t+1;}const i=[];for(;this.ids[r]===e;)i.push({index:this.positions[3*r],start:this.positions[3*r+1],end:this.positions[3*r+2]}),r++;return i}static serialize(t,e){const r=new Float64Array(t.ids),n=new Uint32Array(t.positions);return Oa(r,n,0,r.length-1),e&&e.push(r.buffer,n.buffer),{ids:r,positions:n}}static deserialize(t){const e=new La;return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e}}function Da(t){const e=+t;return !isNaN(e)&&e<=Number.MAX_SAFE_INTEGER?e:$a(String(t))}function Oa(t,e,r,n){for(;r<n;){const i=t[r+n>>1];let a=r-1,s=n+1;for(;;){do{a++;}while(t[a]<i);do{s--;}while(t[s]>i);if(a>=s)break;Ua(t,a,s),Ua(e,3*a,3*s),Ua(e,3*a+1,3*s+1),Ua(e,3*a+2,3*s+2);}s-r<n-s?(Oa(t,e,r,s),r=s+1):(Oa(t,e,s+1,n),n=s);}}function Ua(t,e,r){const n=t[e];t[e]=t[r],t[r]=n;}$n("FeaturePositionMap",La);class Ra{constructor(t,e){this.gl=t.gl,this.location=e;}}class qa extends Ra{constructor(t,e){super(t,e),this.current=0;}set(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t));}}class ja extends Ra{constructor(t,e){super(t,e),this.current=[0,0,0,0];}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]));}}class Na extends Ra{constructor(t,e){super(t,e),this.current=Yt.transparent;}set(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a));}}const Za=new Float32Array(16);function Ka(t){return [Ma(255*t.r,255*t.g),Ma(255*t.b,255*t.a)]}class Ga{constructor(t,e,r){this.value=t,this.uniformNames=e.map((t=>`u_${t}`)),this.type=r;}setUniform(t,e,r){t.set(r.constantOr(this.value));}getBinding(t,e,r){return "color"===this.type?new Na(t,e):new qa(t,e)}}class Ja{constructor(t,e){this.uniformNames=e.map((t=>`u_${t}`)),this.patternFrom=null,this.patternTo=null,this.pixelRatioFrom=1,this.pixelRatioTo=1;}setConstantPatternPositions(t,e){this.pixelRatioFrom=e.pixelRatio,this.pixelRatioTo=t.pixelRatio,this.patternFrom=e.tlbr,this.patternTo=t.tlbr;}setUniform(t,e,r,n){const i="u_pattern_to"===n?this.patternTo:"u_pattern_from"===n?this.patternFrom:"u_pixel_ratio_to"===n?this.pixelRatioTo:"u_pixel_ratio_from"===n?this.pixelRatioFrom:null;i&&t.set(i);}getBinding(t,e,r){return "u_pattern"===r.substr(0,9)?new ja(t,e):new qa(t,e)}}class Xa{constructor(t,e,r,n){this.expression=t,this.type=r,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===r?2:1,offset:0}))),this.paintVertexArray=new n;}populatePaintArray(t,e,r,n,i){const a=this.paintVertexArray.length,s=this.expression.evaluate(new li(0),e,{},n,[],i);this.paintVertexArray.resize(t),this._setPaintValue(a,t,s);}updatePaintArray(t,e,r,n){const i=this.expression.evaluate({zoom:0},r,n);this._setPaintValue(t,e,i);}_setPaintValue(t,e,r){if("color"===this.type){const n=Ka(r);for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,n[0],n[1]);}else {for(let n=t;n<e;n++)this.paintVertexArray.emplace(n,r);this.maxValue=Math.max(this.maxValue,Math.abs(r));}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();}}class Ya{constructor(t,e,r,n,i,a){this.expression=t,this.uniformNames=e.map((t=>`u_${t}_t`)),this.type=r,this.useIntegerZoom=n,this.zoom=i,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===r?4:2,offset:0}))),this.paintVertexArray=new a;}populatePaintArray(t,e,r,n,i){const a=this.expression.evaluate(new li(this.zoom),e,{},n,[],i),s=this.expression.evaluate(new li(this.zoom+1),e,{},n,[],i),o=this.paintVertexArray.length;this.paintVertexArray.resize(t),this._setPaintValue(o,t,a,s);}updatePaintArray(t,e,r,n){const i=this.expression.evaluate({zoom:this.zoom},r,n),a=this.expression.evaluate({zoom:this.zoom+1},r,n);this._setPaintValue(t,e,i,a);}_setPaintValue(t,e,r,n){if("color"===this.type){const i=Ka(r),a=Ka(n);for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,i[0],i[1],a[0],a[1]);}else {for(let i=t;i<e;i++)this.paintVertexArray.emplace(i,r,n);this.maxValue=Math.max(this.maxValue,Math.abs(r),Math.abs(n));}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();}setUniform(t,e){const r=this.useIntegerZoom?Math.floor(e.zoom):e.zoom,n=y(this.expression.interpolationFactor(r,this.zoom,this.zoom+1),0,1);t.set(n);}getBinding(t,e,r){return new qa(t,e)}}class Ha{constructor(t,e,r,n,i,a){this.expression=t,this.type=e,this.useIntegerZoom=r,this.zoom=n,this.layerId=a,this.zoomInPaintVertexArray=new i,this.zoomOutPaintVertexArray=new i;}populatePaintArray(t,e,r){const n=this.zoomInPaintVertexArray.length;this.zoomInPaintVertexArray.resize(t),this.zoomOutPaintVertexArray.resize(t),this._setPaintValues(n,t,e.patterns&&e.patterns[this.layerId],r);}updatePaintArray(t,e,r,n,i){this._setPaintValues(t,e,r.patterns&&r.patterns[this.layerId],i);}_setPaintValues(t,e,r,n){if(!n||!r)return;const{min:i,mid:a,max:s}=r,o=n[i],l=n[a],u=n[s];if(o&&l&&u)for(let r=t;r<e;r++)this.zoomInPaintVertexArray.emplace(r,l.tl[0],l.tl[1],l.br[0],l.br[1],o.tl[0],o.tl[1],o.br[0],o.br[1],l.pixelRatio,o.pixelRatio),this.zoomOutPaintVertexArray.emplace(r,l.tl[0],l.tl[1],l.br[0],l.br[1],u.tl[0],u.tl[1],u.br[0],u.br[1],l.pixelRatio,u.pixelRatio);}upload(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,Ca.members,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,Ca.members,this.expression.isStateDependent));}destroy(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy();}}class Wa{constructor(t,e,r){this.binders={},this._buffers=[];const n=[];for(const i in t.paint._values){if(!r(i))continue;const a=t.paint.get(i);if(!(a instanceof yi&&_r(a.property.specification)))continue;const s=ts(i,t.type),o=a.value,l=a.property.specification.type,u=a.property.useIntegerZoom,c=a.property.specification["property-type"],h="cross-faded"===c||"cross-faded-data-driven"===c;if("constant"===o.kind)this.binders[i]=h?new Ja(o.value,s):new Ga(o.value,s,l),n.push(`/u_${i}`);else if("source"===o.kind||h){const r=es(i,l,"source");this.binders[i]=h?new Ha(o,l,u,e,r,t.id):new Xa(o,s,l,r),n.push(`/a_${i}`);}else {const t=es(i,l,"composite");this.binders[i]=new Ya(o,s,l,u,e,t),n.push(`/z_${i}`);}}this.cacheKey=n.sort().join("");}getMaxValue(t){const e=this.binders[t];return e instanceof Xa||e instanceof Ya?e.maxValue:0}populatePaintArrays(t,e,r,n,i){for(const a in this.binders){const s=this.binders[a];(s instanceof Xa||s instanceof Ya||s instanceof Ha)&&s.populatePaintArray(t,e,r,n,i);}}setConstantPatternPositions(t,e){for(const r in this.binders){const n=this.binders[r];n instanceof Ja&&n.setConstantPatternPositions(t,e);}}updatePaintArrays(t,e,r,n,i){let a=!1;for(const s in t){const o=e.getPositions(s);for(const e of o){const o=r.feature(e.index);for(const r in this.binders){const l=this.binders[r];if((l instanceof Xa||l instanceof Ya||l instanceof Ha)&&!0===l.expression.isStateDependent){const u=n.paint.get(r);l.expression=u.value,l.updatePaintArray(e.start,e.end,o,t[s],i),a=!0;}}}}return a}defines(){const t=[];for(const e in this.binders){const r=this.binders[e];(r instanceof Ga||r instanceof Ja)&&t.push(...r.uniformNames.map((t=>`#define HAS_UNIFORM_${t}`)));}return t}getBinderAttributes(){const t=[];for(const e in this.binders){const r=this.binders[e];if(r instanceof Xa||r instanceof Ya)for(let e=0;e<r.paintVertexAttributes.length;e++)t.push(r.paintVertexAttributes[e].name);else if(r instanceof Ha)for(let e=0;e<Ca.members.length;e++)t.push(Ca.members[e].name);}return t}getBinderUniforms(){const t=[];for(const e in this.binders){const r=this.binders[e];if(r instanceof Ga||r instanceof Ja||r instanceof Ya)for(const e of r.uniformNames)t.push(e);}return t}getPaintVertexBuffers(){return this._buffers}getUniforms(t,e){const r=[];for(const n in this.binders){const i=this.binders[n];if(i instanceof Ga||i instanceof Ja||i instanceof Ya)for(const a of i.uniformNames)if(e[a]){const s=i.getBinding(t,e[a],a);r.push({name:a,property:n,binding:s});}}return r}setUniforms(t,e,r,n){for(const{name:t,property:i,binding:a}of e)this.binders[i].setUniform(a,n,r.get(i),t);}updatePaintBuffers(t){this._buffers=[];for(const e in this.binders){const r=this.binders[e];if(t&&r instanceof Ha){const e=2===t.fromScale?r.zoomInPaintVertexBuffer:r.zoomOutPaintVertexBuffer;e&&this._buffers.push(e);}else (r instanceof Xa||r instanceof Ya)&&r.paintVertexBuffer&&this._buffers.push(r.paintVertexBuffer);}}upload(t){for(const e in this.binders){const r=this.binders[e];(r instanceof Xa||r instanceof Ya||r instanceof Ha)&&r.upload(t);}this.updatePaintBuffers();}destroy(){for(const t in this.binders){const e=this.binders[t];(e instanceof Xa||e instanceof Ya||e instanceof Ha)&&e.destroy();}}}class Qa{constructor(t,e,r=(()=>!0)){this.programConfigurations={};for(const n of t)this.programConfigurations[n.id]=new Wa(n,e,r);this.needsUpload=!1,this._featureMap=new La,this._bufferOffset=0;}populatePaintArrays(t,e,r,n,i,a){for(const r in this.programConfigurations)this.programConfigurations[r].populatePaintArrays(t,e,n,i,a);void 0!==e.id&&this._featureMap.add(e.id,r,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0;}updatePaintArrays(t,e,r,n){for(const i of r)this.needsUpload=this.programConfigurations[i.id].updatePaintArrays(t,this._featureMap,e,i,n)||this.needsUpload;}get(t){return this.programConfigurations[t]}upload(t){if(this.needsUpload){for(const e in this.programConfigurations)this.programConfigurations[e].upload(t);this.needsUpload=!1;}}destroy(){for(const t in this.programConfigurations)this.programConfigurations[t].destroy();}}function ts(t,e){return {"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-extrusion-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"]}[t]||[t.replace(`${e}-`,"").replace(/-/g,"_")]}function es(t,e,r){const n={color:{source:Ti,composite:Wi},number:{source:Gi,composite:Ti}},i=function(t){return {"line-pattern":{source:ga,composite:ga},"fill-pattern":{source:ga,composite:ga},"fill-extrusion-pattern":{source:ga,composite:ga}}[t]}(t);return i&&i[r]||n[e][r]}$n("ConstantBinder",Ga),$n("CrossFadedConstantBinder",Ja),$n("SourceExpressionBinder",Xa),$n("CrossFadedCompositeBinder",Ha),$n("CompositeExpressionBinder",Ya),$n("ProgramConfiguration",Wa,{omit:["_buffers"]}),$n("ProgramConfigurationSet",Qa);const rs=8192,ns=Math.pow(2,14)-1,is=-ns-1;function as(t){const e=rs/t.extent,r=t.loadGeometry();for(let t=0;t<r.length;t++){const n=r[t];for(let t=0;t<n.length;t++){const r=n[t],i=Math.round(r.x*e),a=Math.round(r.y*e);r.x=y(i,is,ns),r.y=y(a,is,ns),(i<r.x||i>r.x+1||a<r.y||a>r.y+1)&&A("Geometry exceeds allowed extent, reduce your vector tile buffer size");}}return r}function ss(t,e){return {type:t.type,id:t.id,properties:t.properties,geometry:e?as(t):[]}}function os(t,e,r,n,i){t.emplaceBack(2*e+(n+1)/2,2*r+(i+1)/2);}class ls{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new pa,this.indexArray=new Aa,this.segments=new za,this.programConfigurations=new Qa(t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){const n=this.layers[0],i=[];let a=null,s=!1;"circle"===n.type&&(a=n.layout.get("circle-sort-key"),s=!a.isConstant());for(const{feature:e,id:n,index:o,sourceLayerIndex:l}of t){const t=this.layers[0]._featureFilter.needGeometry,u=ss(e,t);if(!this.layers[0]._featureFilter.filter(new li(this.zoom),u,r))continue;const c=s?a.evaluate(u,{},r):void 0,h={id:n,properties:e.properties,type:e.type,sourceLayerIndex:l,index:o,geometry:t?u.geometry:as(e),patterns:{},sortKey:c};i.push(h);}s&&i.sort(((t,e)=>t.sortKey-e.sortKey));for(const n of i){const{geometry:i,index:a,sourceLayerIndex:s}=n,o=t[a].feature;this.addFeature(n,i,a,r),e.featureIndex.insert(o,i,a,s,this.index);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Ia),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());}addFeature(t,e,r,n){for(const r of e)for(const e of r){const r=e.x,n=e.y;if(r<0||r>=rs||n<0||n>=rs)continue;const i=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),a=i.vertexLength;os(this.layoutVertexArray,r,n,-1,-1),os(this.layoutVertexArray,r,n,1,-1),os(this.layoutVertexArray,r,n,1,1),os(this.layoutVertexArray,r,n,-1,1),this.indexArray.emplaceBack(a,a+1,a+2),this.indexArray.emplaceBack(a,a+3,a+2),i.vertexLength+=4,i.primitiveLength+=2;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{},n);}}function us(t,e){for(let r=0;r<t.length;r++)if(xs(e,t[r]))return !0;for(let r=0;r<e.length;r++)if(xs(t,e[r]))return !0;return !!fs(t,e)}function cs(t,e,r){return !!xs(t,e)||!!ys(e,t,r)}function hs(t,e){if(1===t.length)return gs(e,t[0]);for(let r=0;r<e.length;r++){const n=e[r];for(let e=0;e<n.length;e++)if(xs(t,n[e]))return !0}for(let r=0;r<t.length;r++)if(gs(e,t[r]))return !0;for(let r=0;r<e.length;r++)if(fs(t,e[r]))return !0;return !1}function ps(t,e,r){if(t.length>1){if(fs(t,e))return !0;for(let n=0;n<e.length;n++)if(ys(e[n],t,r))return !0}for(let n=0;n<t.length;n++)if(ys(t[n],e,r))return !0;return !1}function fs(t,e){if(0===t.length||0===e.length)return !1;for(let r=0;r<t.length-1;r++){const n=t[r],i=t[r+1];for(let t=0;t<e.length-1;t++)if(ds(n,i,e[t],e[t+1]))return !0}return !1}function ds(t,e,r,n){return S(t,r,n)!==S(e,r,n)&&S(t,e,r)!==S(t,e,n)}function ys(t,e,r){const n=r*r;if(1===e.length)return t.distSqr(e[0])<n;for(let r=1;r<e.length;r++)if(ms(t,e[r-1],e[r])<n)return !0;return !1}function ms(t,e,r){const n=e.distSqr(r);if(0===n)return t.distSqr(e);const i=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/n;return t.distSqr(i<0?e:i>1?r:r.sub(e)._mult(i)._add(e))}function gs(t,e){let r,n,i,a=!1;for(let s=0;s<t.length;s++){r=t[s];for(let t=0,s=r.length-1;t<r.length;s=t++)n=r[t],i=r[s],n.y>e.y!=i.y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(a=!a);}return a}function xs(t,e){let r=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){const a=t[n],s=t[i];a.y>e.y!=s.y>e.y&&e.x<(s.x-a.x)*(e.y-a.y)/(s.y-a.y)+a.x&&(r=!r);}return r}function vs(t,e,r){const n=r[0],i=r[2];if(t.x<n.x&&e.x<n.x||t.x>i.x&&e.x>i.x||t.y<n.y&&e.y<n.y||t.y>i.y&&e.y>i.y)return !1;const a=S(t,e,r[0]);return a!==S(t,e,r[1])||a!==S(t,e,r[2])||a!==S(t,e,r[3])}function bs(t,e,r){const n=e.paint.get(t).value;return "constant"===n.kind?n.value:r.programConfigurations.get(e.id).getMaxValue(t)}function ws(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function _s(t,e,r,n,i){if(!e[0]&&!e[1])return t;const s=a.convert(e)._mult(i);"viewport"===r&&s._rotate(-n);const o=[];for(let e=0;e<t.length;e++)o.push(t[e].sub(s));return o}let As,Ss;$n("CircleBucket",ls,{omit:["layers"]});var ks={get paint(){return Ss=Ss||new _i({"circle-radius":new xi(X.paint_circle["circle-radius"]),"circle-color":new xi(X.paint_circle["circle-color"]),"circle-blur":new xi(X.paint_circle["circle-blur"]),"circle-opacity":new xi(X.paint_circle["circle-opacity"]),"circle-translate":new gi(X.paint_circle["circle-translate"]),"circle-translate-anchor":new gi(X.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new gi(X.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new gi(X.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new xi(X.paint_circle["circle-stroke-width"]),"circle-stroke-color":new xi(X.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new xi(X.paint_circle["circle-stroke-opacity"])})},get layout(){return As=As||new _i({"circle-sort-key":new xi(X.layout_circle["circle-sort-key"])})}},Is=1e-6,zs="undefined"!=typeof Float32Array?Float32Array:Array;function Ms(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Cs(t,e,r){var n=e[0],i=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],p=e[9],f=e[10],d=e[11],y=e[12],m=e[13],g=e[14],x=e[15],v=r[0],b=r[1],w=r[2],_=r[3];return t[0]=v*n+b*o+w*h+_*y,t[1]=v*i+b*l+w*p+_*m,t[2]=v*a+b*u+w*f+_*g,t[3]=v*s+b*c+w*d+_*x,t[4]=(v=r[4])*n+(b=r[5])*o+(w=r[6])*h+(_=r[7])*y,t[5]=v*i+b*l+w*p+_*m,t[6]=v*a+b*u+w*f+_*g,t[7]=v*s+b*c+w*d+_*x,t[8]=(v=r[8])*n+(b=r[9])*o+(w=r[10])*h+(_=r[11])*y,t[9]=v*i+b*l+w*p+_*m,t[10]=v*a+b*u+w*f+_*g,t[11]=v*s+b*c+w*d+_*x,t[12]=(v=r[12])*n+(b=r[13])*o+(w=r[14])*h+(_=r[15])*y,t[13]=v*i+b*l+w*p+_*m,t[14]=v*a+b*u+w*f+_*g,t[15]=v*s+b*c+w*d+_*x,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var Bs,Ps=Cs;function Vs(t,e,r){var n=e[0],i=e[1],a=e[2],s=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*s,t[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*s,t[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*s,t[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*s,t}Bs=new zs(4),zs!=Float32Array&&(Bs[0]=0,Bs[1]=0,Bs[2]=0,Bs[3]=0);class Es extends Si{constructor(t){super(t,ks);}createBucket(t){return new ls(t)}queryRadius(t){const e=t;return bs("circle-radius",this,e)+bs("circle-stroke-width",this,e)+ws(this.paint.get("circle-translate"))}queryIntersectsFeature(t,e,r,n,i,a,s,o){const l=_s(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),a.angle,s),u=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r),c="map"===this.paint.get("circle-pitch-alignment"),h=c?l:function(t,e){return t.map((t=>Fs(t,e)))}(l,o),p=c?u*s:u;for(const t of n)for(const e of t){const t=c?e:Fs(e,o);let r=p;const n=Vs([],[e.x,e.y,0,1],o);if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?r*=n[3]/a.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(r*=a.cameraToCenterDistance/n[3]),cs(h,t,r))return !0}return !1}}function Fs(t,e){const r=Vs([],[t.x,t.y,0,1],e);return new a(r[0]/r[3],r[1]/r[3])}class Ts extends ls{}let $s;$n("HeatmapBucket",Ts,{omit:["layers"]});var Ls={get paint(){return $s=$s||new _i({"heatmap-radius":new xi(X.paint_heatmap["heatmap-radius"]),"heatmap-weight":new xi(X.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new gi(X.paint_heatmap["heatmap-intensity"]),"heatmap-color":new wi(X.paint_heatmap["heatmap-color"]),"heatmap-opacity":new gi(X.paint_heatmap["heatmap-opacity"])})}};function Ds(t,{width:e,height:r},n,i){if(i){if(i instanceof Uint8ClampedArray)i=new Uint8Array(i.buffer);else if(i.length!==e*r*n)throw new RangeError(`mismatched image size. expected: ${i.length} but got: ${e*r*n}`)}else i=new Uint8Array(e*r*n);return t.width=e,t.height=r,t.data=i,t}function Os(t,{width:e,height:r},n){if(e===t.width&&r===t.height)return;const i=Ds({},{width:e,height:r},n);Us(t,i,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,e),height:Math.min(t.height,r)},n),t.width=e,t.height=r,t.data=i.data;}function Us(t,e,r,n,i,a){if(0===i.width||0===i.height)return e;if(i.width>t.width||i.height>t.height||r.x>t.width-i.width||r.y>t.height-i.height)throw new RangeError("out of range source coordinates for image copy");if(i.width>e.width||i.height>e.height||n.x>e.width-i.width||n.y>e.height-i.height)throw new RangeError("out of range destination coordinates for image copy");const s=t.data,o=e.data;if(s===o)throw new Error("srcData equals dstData, so image is already copied");for(let l=0;l<i.height;l++){const u=((r.y+l)*t.width+r.x)*a,c=((n.y+l)*e.width+n.x)*a;for(let t=0;t<i.width*a;t++)o[c+t]=s[u+t];}return e}class Rs{constructor(t,e){Ds(this,t,1,e);}resize(t){Os(this,t,1);}clone(){return new Rs({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,r,n,i){Us(t,e,r,n,i,1);}}class qs{constructor(t,e){Ds(this,t,4,e);}resize(t){Os(this,t,4);}replace(t,e){e?this.data.set(t):this.data=t instanceof Uint8ClampedArray?new Uint8Array(t.buffer):t;}clone(){return new qs({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,r,n,i){Us(t,e,r,n,i,4);}}function js(t){const e={},r=t.resolution||256,n=t.clips?t.clips.length:1,i=t.image||new qs({width:r,height:n});if(Math.log(r)/Math.LN2%1!=0)throw new Error(`width is not a power of 2 - ${r}`);const a=(r,n,a)=>{e[t.evaluationKey]=a;const s=t.expression.evaluate(e);i.data[r+n+0]=Math.floor(255*s.r/s.a),i.data[r+n+1]=Math.floor(255*s.g/s.a),i.data[r+n+2]=Math.floor(255*s.b/s.a),i.data[r+n+3]=Math.floor(255*s.a);};if(t.clips)for(let e=0,i=0;e<n;++e,i+=4*r)for(let n=0,s=0;n<r;n++,s+=4){const o=n/(r-1),{start:l,end:u}=t.clips[e];a(i,s,l*(1-o)+u*o);}else for(let t=0,e=0;t<r;t++,e+=4)a(0,e,t/(r-1));return i}$n("AlphaImage",Rs),$n("RGBAImage",qs);class Ns extends Si{createBucket(t){return new Ts(t)}constructor(t){super(t,Ls),this._updateColorRamp();}_handleSpecialPaintPropertyUpdate(t){"heatmap-color"===t&&this._updateColorRamp();}_updateColorRamp(){this.colorRamp=js({expression:this._transitionablePaint._values["heatmap-color"].value.expression,evaluationKey:"heatmapDensity",image:this.colorRamp}),this.colorRampTexture=null;}resize(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null);}queryRadius(){return 0}queryIntersectsFeature(){return !1}hasOffscreenPass(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility}}let Zs;var Ks={get paint(){return Zs=Zs||new _i({"hillshade-illumination-direction":new gi(X.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new gi(X.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new gi(X.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new gi(X.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new gi(X.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new gi(X.paint_hillshade["hillshade-accent-color"])})}};class Gs extends Si{constructor(t){super(t,Ks);}hasOffscreenPass(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility}}const Js=Mi([{name:"a_pos",components:2,type:"Int16"}],4),{members:Xs}=Js;var Ys={exports:{}};function Hs(t,e,r){r=r||2;var n,i,a,s,o,l,u,c=e&&e.length,h=c?e[0]*r:t.length,p=Ws(t,0,h,r,!0),f=[];if(!p||p.next===p.prev)return f;if(c&&(p=function(t,e,r,n){var i,a,s,o=[];for(i=0,a=e.length;i<a;i++)(s=Ws(t,e[i]*n,i<a-1?e[i+1]*n:t.length,n,!1))===s.next&&(s.steiner=!0),o.push(uo(s));for(o.sort(ao),i=0;i<o.length;i++)r=so(o[i],r);return r}(t,e,p,r)),t.length>80*r){n=a=t[0],i=s=t[1];for(var d=r;d<h;d+=r)(o=t[d])<n&&(n=o),(l=t[d+1])<i&&(i=l),o>a&&(a=o),l>s&&(s=l);u=0!==(u=Math.max(a-n,s-i))?32767/u:0;}return to(p,f,r,n,i,u,0),f}function Ws(t,e,r,n,i){var a,s;if(i===Ao(t,e,r,n)>0)for(a=e;a<r;a+=n)s=bo(a,t[a],t[a+1],s);else for(a=r-n;a>=e;a-=n)s=bo(a,t[a],t[a+1],s);return s&&fo(s,s.next)&&(wo(s),s=s.next),s}function Qs(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!fo(n,n.next)&&0!==po(n.prev,n,n.next))n=n.next;else {if(wo(n),(n=e=n.prev)===n.next)break;r=!0;}}while(r||n!==e);return e}function to(t,e,r,n,i,a,s){if(t){!s&&a&&function(t,e,r,n){var i=t;do{0===i.z&&(i.z=lo(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,a,s,o,l,u=1;do{for(r=t,t=null,a=null,s=0;r;){for(s++,n=r,o=0,e=0;e<u&&(o++,n=n.nextZ);e++);for(l=u;o>0||l>0&&n;)0!==o&&(0===l||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,l--),a?a.nextZ=i:t=i,i.prevZ=a,a=i;r=n;}a.nextZ=null,u*=2;}while(s>1)}(i);}(t,n,i,a);for(var o,l,u=t;t.prev!==t.next;)if(o=t.prev,l=t.next,a?ro(t,n,i,a):eo(t))e.push(o.i/r|0),e.push(t.i/r|0),e.push(l.i/r|0),wo(t),t=l.next,u=l.next;else if((t=l)===u){s?1===s?to(t=no(Qs(t),e,r),e,r,n,i,a,2):2===s&&io(t,e,r,n,i,a):to(Qs(t),e,r,n,i,a,1);break}}}function eo(t){var e=t.prev,r=t,n=t.next;if(po(e,r,n)>=0)return !1;for(var i=e.x,a=r.x,s=n.x,o=e.y,l=r.y,u=n.y,c=i<a?i<s?i:s:a<s?a:s,h=o<l?o<u?o:u:l<u?l:u,p=i>a?i>s?i:s:a>s?a:s,f=o>l?o>u?o:u:l>u?l:u,d=n.next;d!==e;){if(d.x>=c&&d.x<=p&&d.y>=h&&d.y<=f&&co(i,o,a,l,s,u,d.x,d.y)&&po(d.prev,d,d.next)>=0)return !1;d=d.next;}return !0}function ro(t,e,r,n){var i=t.prev,a=t,s=t.next;if(po(i,a,s)>=0)return !1;for(var o=i.x,l=a.x,u=s.x,c=i.y,h=a.y,p=s.y,f=o<l?o<u?o:u:l<u?l:u,d=c<h?c<p?c:p:h<p?h:p,y=o>l?o>u?o:u:l>u?l:u,m=c>h?c>p?c:p:h>p?h:p,g=lo(f,d,e,r,n),x=lo(y,m,e,r,n),v=t.prevZ,b=t.nextZ;v&&v.z>=g&&b&&b.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=d&&v.y<=m&&v!==i&&v!==s&&co(o,c,l,h,u,p,v.x,v.y)&&po(v.prev,v,v.next)>=0)return !1;if(v=v.prevZ,b.x>=f&&b.x<=y&&b.y>=d&&b.y<=m&&b!==i&&b!==s&&co(o,c,l,h,u,p,b.x,b.y)&&po(b.prev,b,b.next)>=0)return !1;b=b.nextZ;}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=y&&v.y>=d&&v.y<=m&&v!==i&&v!==s&&co(o,c,l,h,u,p,v.x,v.y)&&po(v.prev,v,v.next)>=0)return !1;v=v.prevZ;}for(;b&&b.z<=x;){if(b.x>=f&&b.x<=y&&b.y>=d&&b.y<=m&&b!==i&&b!==s&&co(o,c,l,h,u,p,b.x,b.y)&&po(b.prev,b,b.next)>=0)return !1;b=b.nextZ;}return !0}function no(t,e,r){var n=t;do{var i=n.prev,a=n.next.next;!fo(i,a)&&yo(i,n,n.next,a)&&xo(i,a)&&xo(a,i)&&(e.push(i.i/r|0),e.push(n.i/r|0),e.push(a.i/r|0),wo(n),wo(n.next),n=t=a),n=n.next;}while(n!==t);return Qs(n)}function io(t,e,r,n,i,a){var s=t;do{for(var o=s.next.next;o!==s.prev;){if(s.i!==o.i&&ho(s,o)){var l=vo(s,o);return s=Qs(s,s.next),l=Qs(l,l.next),to(s,e,r,n,i,a,0),void to(l,e,r,n,i,a,0)}o=o.next;}s=s.next;}while(s!==t)}function ao(t,e){return t.x-e.x}function so(t,e){var r=function(t,e){var r,n=e,i=t.x,a=t.y,s=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var o=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=i&&o>s&&(s=o,r=n.x<n.next.x?n:n.next,o===i))return r}n=n.next;}while(n!==e);if(!r)return null;var l,u=r,c=r.x,h=r.y,p=1/0;n=r;do{i>=n.x&&n.x>=c&&i!==n.x&&co(a<h?i:s,a,c,h,a<h?s:i,a,n.x,n.y)&&(l=Math.abs(a-n.y)/(i-n.x),xo(n,t)&&(l<p||l===p&&(n.x>r.x||n.x===r.x&&oo(r,n)))&&(r=n,p=l)),n=n.next;}while(n!==u);return r}(t,e);if(!r)return e;var n=vo(r,t);return Qs(n,n.next),Qs(r,r.next)}function oo(t,e){return po(t.prev,t,e.prev)<0&&po(e.next,t,t.next)<0}function lo(t,e,r,n,i){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*i|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function uo(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;}while(e!==t);return r}function co(t,e,r,n,i,a,s,o){return (i-s)*(e-o)>=(t-s)*(a-o)&&(t-s)*(n-o)>=(r-s)*(e-o)&&(r-s)*(a-o)>=(i-s)*(n-o)}function ho(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&yo(r,r.next,t,e))return !0;r=r.next;}while(r!==t);return !1}(t,e)&&(xo(t,e)&&xo(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,a=(t.y+e.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;}while(r!==t);return n}(t,e)&&(po(t.prev,t,e.prev)||po(t,e.prev,e))||fo(t,e)&&po(t.prev,t,t.next)>0&&po(e.prev,e,e.next)>0)}function po(t,e,r){return (e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function fo(t,e){return t.x===e.x&&t.y===e.y}function yo(t,e,r,n){var i=go(po(t,e,r)),a=go(po(t,e,n)),s=go(po(r,n,t)),o=go(po(r,n,e));return i!==a&&s!==o||!(0!==i||!mo(t,r,e))||!(0!==a||!mo(t,n,e))||!(0!==s||!mo(r,t,n))||!(0!==o||!mo(r,e,n))}function mo(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function go(t){return t>0?1:t<0?-1:0}function xo(t,e){return po(t.prev,t,t.next)<0?po(t,e,t.next)>=0&&po(t,t.prev,e)>=0:po(t,e,t.prev)<0||po(t,t.next,e)<0}function vo(t,e){var r=new _o(t.i,t.x,t.y),n=new _o(e.i,e.x,e.y),i=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function bo(t,e,r,n){var i=new _o(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function wo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function _o(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function Ao(t,e,r,n){for(var i=0,a=e,s=r-n;a<r;a+=n)i+=(t[s]-t[a])*(t[a+1]+t[s+1]),s=a;return i}Ys.exports=Hs,Ys.exports.default=Hs,Hs.deviation=function(t,e,r,n){var i=e&&e.length,a=Math.abs(Ao(t,0,i?e[0]*r:t.length,r));if(i)for(var s=0,o=e.length;s<o;s++)a-=Math.abs(Ao(t,e[s]*r,s<o-1?e[s+1]*r:t.length,r));var l=0;for(s=0;s<n.length;s+=3){var u=n[s]*r,c=n[s+1]*r,h=n[s+2]*r;l+=Math.abs((t[u]-t[h])*(t[c+1]-t[u+1])-(t[u]-t[c])*(t[h+1]-t[u+1]));}return 0===a&&0===l?0:Math.abs((l-a)/a)},Hs.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var a=0;a<t[i].length;a++)for(var s=0;s<e;s++)r.vertices.push(t[i][a][s]);i>0&&r.holes.push(n+=t[i-1].length);}return r};var So=r(Ys.exports);function ko(t,e,r,n,i){Io(t,e,r||0,n||t.length-1,i||Mo);}function Io(t,e,r,n,i){for(;n>r;){if(n-r>600){var a=n-r+1,s=e-r+1,o=Math.log(a),l=.5*Math.exp(2*o/3),u=.5*Math.sqrt(o*l*(a-l)/a)*(s-a/2<0?-1:1);Io(t,e,Math.max(r,Math.floor(e-s*l/a+u)),Math.min(n,Math.floor(e+(a-s)*l/a+u)),i);}var c=t[e],h=r,p=n;for(zo(t,r,e),i(t[n],c)>0&&zo(t,r,n);h<p;){for(zo(t,h,p),h++,p--;i(t[h],c)<0;)h++;for(;i(t[p],c)>0;)p--;}0===i(t[r],c)?zo(t,r,p):zo(t,++p,n),p<=e&&(r=p+1),e<=p&&(n=p-1);}}function zo(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}function Mo(t,e){return t<e?-1:t>e?1:0}function Co(t,e){const r=t.length;if(r<=1)return [t];const n=[];let i,a;for(let e=0;e<r;e++){const r=k(t[e]);0!==r&&(t[e].area=Math.abs(r),void 0===a&&(a=r<0),a===r<0?(i&&n.push(i),i=[t[e]]):i.push(t[e]));}if(i&&n.push(i),e>1)for(let t=0;t<n.length;t++)n[t].length<=e||(ko(n[t],e,1,n[t].length-1,Bo),n[t]=n[t].slice(0,e));return n}function Bo(t,e){return e.area-t.area}function Po(t,e,r){const n=r.patternDependencies;let i=!1;for(const r of e){const e=r.paint.get(`${t}-pattern`);e.isConstant()||(i=!0);const a=e.constantOr(null);a&&(i=!0,n[a.to]=!0,n[a.from]=!0);}return i}function Vo(t,e,r,n,i){const a=i.patternDependencies;for(const s of e){const e=s.paint.get(`${t}-pattern`).value;if("constant"!==e.kind){let t=e.evaluate({zoom:n-1},r,{},i.availableImages),o=e.evaluate({zoom:n},r,{},i.availableImages),l=e.evaluate({zoom:n+1},r,{},i.availableImages);t=t&&t.name?t.name:t,o=o&&o.name?o.name:o,l=l&&l.name?l.name:l,a[t]=!0,a[o]=!0,a[l]=!0,r.patterns[s.id]={min:t,mid:o,max:l};}}return r}class Eo{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new fa,this.indexArray=new Aa,this.indexArray2=new Sa,this.programConfigurations=new Qa(t.layers,t.zoom),this.segments=new za,this.segments2=new za,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){this.hasPattern=Po("fill",this.layers,e);const n=this.layers[0].layout.get("fill-sort-key"),i=!n.isConstant(),a=[];for(const{feature:s,id:o,index:l,sourceLayerIndex:u}of t){const t=this.layers[0]._featureFilter.needGeometry,c=ss(s,t);if(!this.layers[0]._featureFilter.filter(new li(this.zoom),c,r))continue;const h=i?n.evaluate(c,{},r,e.availableImages):void 0,p={id:o,properties:s.properties,type:s.type,sourceLayerIndex:u,index:l,geometry:t?c.geometry:as(s),patterns:{},sortKey:h};a.push(p);}i&&a.sort(((t,e)=>t.sortKey-e.sortKey));for(const n of a){const{geometry:i,index:a,sourceLayerIndex:s}=n;if(this.hasPattern){const t=Vo("fill",this.layers,n,this.zoom,e);this.patternFeatures.push(t);}else this.addFeature(n,i,a,r,{});e.featureIndex.insert(t[a].feature,i,a,s,this.index);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}addFeatures(t,e,r){for(const t of this.patternFeatures)this.addFeature(t,t.geometry,t.index,e,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Xs),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy());}addFeature(t,e,r,n,i){for(const t of Co(e,500)){let e=0;for(const r of t)e+=r.length;const r=this.segments.prepareSegment(e,this.layoutVertexArray,this.indexArray),n=r.vertexLength,i=[],a=[];for(const e of t){if(0===e.length)continue;e!==t[0]&&a.push(i.length/2);const r=this.segments2.prepareSegment(e.length,this.layoutVertexArray,this.indexArray2),n=r.vertexLength;this.layoutVertexArray.emplaceBack(e[0].x,e[0].y),this.indexArray2.emplaceBack(n+e.length-1,n),i.push(e[0].x),i.push(e[0].y);for(let t=1;t<e.length;t++)this.layoutVertexArray.emplaceBack(e[t].x,e[t].y),this.indexArray2.emplaceBack(n+t-1,n+t),i.push(e[t].x),i.push(e[t].y);r.vertexLength+=e.length,r.primitiveLength+=e.length;}const s=So(i,a);for(let t=0;t<s.length;t+=3)this.indexArray.emplaceBack(n+s[t],n+s[t+1],n+s[t+2]);r.vertexLength+=e,r.primitiveLength+=s.length/3;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);}}let Fo,To;$n("FillBucket",Eo,{omit:["layers","patternFeatures"]});var $o={get paint(){return To=To||new _i({"fill-antialias":new gi(X.paint_fill["fill-antialias"]),"fill-opacity":new xi(X.paint_fill["fill-opacity"]),"fill-color":new xi(X.paint_fill["fill-color"]),"fill-outline-color":new xi(X.paint_fill["fill-outline-color"]),"fill-translate":new gi(X.paint_fill["fill-translate"]),"fill-translate-anchor":new gi(X.paint_fill["fill-translate-anchor"]),"fill-pattern":new vi(X.paint_fill["fill-pattern"])})},get layout(){return Fo=Fo||new _i({"fill-sort-key":new xi(X.layout_fill["fill-sort-key"])})}};class Lo extends Si{constructor(t){super(t,$o);}recalculate(t,e){super.recalculate(t,e);const r=this.paint._values["fill-outline-color"];"constant"===r.value.kind&&void 0===r.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"]);}createBucket(t){return new Eo(t)}queryRadius(){return ws(this.paint.get("fill-translate"))}queryIntersectsFeature(t,e,r,n,i,a,s){return hs(_s(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),a.angle,s),n)}isTileClipped(){return !0}}const Do=Mi([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4),Oo=Mi([{name:"a_centroid",components:2,type:"Int16"}],4),{members:Uo}=Do;var Ro={},qo=n,jo=No;function No(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(Zo,this,e);}function Zo(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){for(var r=t.readVarint()+t.pos;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i;}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos);}function Ko(t){for(var e,r,n=0,i=0,a=t.length,s=a-1;i<a;s=i++)n+=((r=t[s]).x-(e=t[i]).x)*(e.y+r.y);return n}No.types=["Unknown","Point","LineString","Polygon"],No.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,n=1,i=0,a=0,s=0,o=[];t.pos<r;){if(i<=0){var l=t.readVarint();n=7&l,i=l>>3;}if(i--,1===n||2===n)a+=t.readSVarint(),s+=t.readSVarint(),1===n&&(e&&o.push(e),e=[]),e.push(new qo(a,s));else {if(7!==n)throw new Error("unknown command "+n);e&&e.push(e[0].clone());}}return e&&o.push(e),o},No.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,a=0,s=1/0,o=-1/0,l=1/0,u=-1/0;t.pos<e;){if(n<=0){var c=t.readVarint();r=7&c,n=c>>3;}if(n--,1===r||2===r)(i+=t.readSVarint())<s&&(s=i),i>o&&(o=i),(a+=t.readSVarint())<l&&(l=a),a>u&&(u=a);else if(7!==r)throw new Error("unknown command "+r)}return [s,l,o,u]},No.prototype.toGeoJSON=function(t,e,r){var n,i,a=this.extent*Math.pow(2,r),s=this.extent*t,o=this.extent*e,l=this.loadGeometry(),u=No.types[this.type];function c(t){for(var e=0;e<t.length;e++){var r=t[e];t[e]=[360*(r.x+s)/a-180,360/Math.PI*Math.atan(Math.exp((180-360*(r.y+o)/a)*Math.PI/180))-90];}}switch(this.type){case 1:var h=[];for(n=0;n<l.length;n++)h[n]=l[n][0];c(l=h);break;case 2:for(n=0;n<l.length;n++)c(l[n]);break;case 3:for(l=function(t){var e=t.length;if(e<=1)return [t];for(var r,n,i=[],a=0;a<e;a++){var s=Ko(t[a]);0!==s&&(void 0===n&&(n=s<0),n===s<0?(r&&i.push(r),r=[t[a]]):r.push(t[a]));}return r&&i.push(r),i}(l),n=0;n<l.length;n++)for(i=0;i<l[n].length;i++)c(l[n][i]);}1===l.length?l=l[0]:u="Multi"+u;var p={type:"Feature",geometry:{type:u,coordinates:l},properties:this.properties};return "id"in this&&(p.id=this.id),p};var Go=jo,Jo=Xo;function Xo(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(Yo,this,e),this.length=this._features.length;}function Yo(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){for(var e=null,r=t.readVarint()+t.pos;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null;}return e}(r));}Xo.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new Go(this._pbf,e,this.extent,this._keys,this._values)};var Ho=Jo;function Wo(t,e,r){if(3===t){var n=new Ho(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n);}}Ro.VectorTile=function(t,e){this.layers=t.readFields(Wo,{},e);},Ro.VectorTileFeature=jo,Ro.VectorTileLayer=Jo;const Qo=Ro.VectorTileFeature.types,tl=Math.pow(2,13);function el(t,e,r,n,i,a,s,o){t.emplaceBack(e,r,2*Math.floor(n*tl)+s,i*tl*2,a*tl*2,Math.round(o));}class rl{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new da,this.centroidVertexArray=new ha,this.indexArray=new Aa,this.programConfigurations=new Qa(t.layers,t.zoom),this.segments=new za,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){this.features=[],this.hasPattern=Po("fill-extrusion",this.layers,e);for(const{feature:n,id:i,index:a,sourceLayerIndex:s}of t){const t=this.layers[0]._featureFilter.needGeometry,o=ss(n,t);if(!this.layers[0]._featureFilter.filter(new li(this.zoom),o,r))continue;const l={id:i,sourceLayerIndex:s,index:a,geometry:t?o.geometry:as(n),properties:n.properties,type:n.type,patterns:{}};this.hasPattern?this.features.push(Vo("fill-extrusion",this.layers,l,this.zoom,e)):this.addFeature(l,l.geometry,a,r,{}),e.featureIndex.insert(n,l.geometry,a,s,this.index,!0);}}addFeatures(t,e,r){for(const t of this.features){const{geometry:n}=t;this.addFeature(t,n,t.index,e,r);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}isEmpty(){return 0===this.layoutVertexArray.length&&0===this.centroidVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Uo),this.centroidVertexBuffer=t.createVertexBuffer(this.centroidVertexArray,Oo.members,!0),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.centroidVertexBuffer.destroy());}addFeature(t,e,r,n,i){const a={x:0,y:0,vertexCount:0};for(const r of Co(e,500)){let e=0;for(const t of r)e+=t.length;let n=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray);for(const t of r){if(0===t.length)continue;if(il(t))continue;let e=0;for(let r=0;r<t.length;r++){const i=t[r];if(r>=1){const s=t[r-1];if(!nl(i,s)){n.vertexLength+4>za.MAX_VERTEX_ARRAY_LENGTH&&(n=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray));const t=i.sub(s)._perp()._unit(),r=s.dist(i);e+r>32768&&(e=0),el(this.layoutVertexArray,i.x,i.y,t.x,t.y,0,0,e),el(this.layoutVertexArray,i.x,i.y,t.x,t.y,0,1,e),a.x+=2*i.x,a.y+=2*i.y,a.vertexCount+=2,e+=r,el(this.layoutVertexArray,s.x,s.y,t.x,t.y,0,0,e),el(this.layoutVertexArray,s.x,s.y,t.x,t.y,0,1,e),a.x+=2*s.x,a.y+=2*s.y,a.vertexCount+=2;const o=n.vertexLength;this.indexArray.emplaceBack(o,o+2,o+1),this.indexArray.emplaceBack(o+1,o+2,o+3),n.vertexLength+=4,n.primitiveLength+=2;}}}}if(n.vertexLength+e>za.MAX_VERTEX_ARRAY_LENGTH&&(n=this.segments.prepareSegment(e,this.layoutVertexArray,this.indexArray)),"Polygon"!==Qo[t.type])continue;const i=[],s=[],o=n.vertexLength;for(const t of r)if(0!==t.length){t!==r[0]&&s.push(i.length/2);for(let e=0;e<t.length;e++){const r=t[e];el(this.layoutVertexArray,r.x,r.y,0,0,1,1,0),a.x+=r.x,a.y+=r.y,a.vertexCount+=1,i.push(r.x),i.push(r.y);}}const l=So(i,s);for(let t=0;t<l.length;t+=3)this.indexArray.emplaceBack(o+l[t],o+l[t+2],o+l[t+1]);n.primitiveLength+=l.length/3,n.vertexLength+=e;}for(let t=0;t<a.vertexCount;t++)this.centroidVertexArray.emplaceBack(Math.floor(a.x/a.vertexCount),Math.floor(a.y/a.vertexCount));this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);}}function nl(t,e){return t.x===e.x&&(t.x<0||t.x>rs)||t.y===e.y&&(t.y<0||t.y>rs)}function il(t){return t.every((t=>t.x<0))||t.every((t=>t.x>rs))||t.every((t=>t.y<0))||t.every((t=>t.y>rs))}let al;$n("FillExtrusionBucket",rl,{omit:["layers","features"]});var sl={get paint(){return al=al||new _i({"fill-extrusion-opacity":new gi(X["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new xi(X["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new gi(X["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new gi(X["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new vi(X["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new xi(X["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new xi(X["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new gi(X["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})}};class ol extends Si{constructor(t){super(t,sl);}createBucket(t){return new rl(t)}queryRadius(){return ws(this.paint.get("fill-extrusion-translate"))}is3D(){return !0}queryIntersectsFeature(t,e,r,n,i,s,o,l){const u=_s(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),s.angle,o),c=this.paint.get("fill-extrusion-height").evaluate(e,r),h=this.paint.get("fill-extrusion-base").evaluate(e,r),p=function(t,e,r,n){const i=[];for(const r of t){const t=[r.x,r.y,0,1];Vs(t,t,e),i.push(new a(t[0]/t[3],t[1]/t[3]));}return i}(u,l),f=function(t,e,r,n){const i=[],s=[],o=n[8]*e,l=n[9]*e,u=n[10]*e,c=n[11]*e,h=n[8]*r,p=n[9]*r,f=n[10]*r,d=n[11]*r;for(const e of t){const t=[],r=[];for(const i of e){const e=i.x,s=i.y,y=n[0]*e+n[4]*s+n[12],m=n[1]*e+n[5]*s+n[13],g=n[2]*e+n[6]*s+n[14],x=n[3]*e+n[7]*s+n[15],v=g+u,b=x+c,w=y+h,_=m+p,A=g+f,S=x+d,k=new a((y+o)/b,(m+l)/b);k.z=v/b,t.push(k);const I=new a(w/S,_/S);I.z=A/S,r.push(I);}i.push(t),s.push(r);}return [i,s]}(n,h,c,l);return function(t,e,r){let n=1/0;hs(r,e)&&(n=ul(r,e[0]));for(let i=0;i<e.length;i++){const a=e[i],s=t[i];for(let t=0;t<a.length-1;t++){const e=a[t],i=[e,a[t+1],s[t+1],s[t],e];us(r,i)&&(n=Math.min(n,ul(r,i)));}}return n!==1/0&&n}(f[0],f[1],p)}}function ll(t,e){return t.x*e.x+t.y*e.y}function ul(t,e){if(1===t.length){let r=0;const n=e[r++];let i;for(;!i||n.equals(i);)if(i=e[r++],!i)return 1/0;for(;r<e.length;r++){const a=e[r],s=t[0],o=i.sub(n),l=a.sub(n),u=s.sub(n),c=ll(o,o),h=ll(o,l),p=ll(l,l),f=ll(u,o),d=ll(u,l),y=c*p-h*h,m=(p*f-h*d)/y,g=(c*d-h*f)/y,x=n.z*(1-m-g)+i.z*m+a.z*g;if(isFinite(x))return x}return 1/0}{let t=1/0;for(const r of e)t=Math.min(t,r.z);return t}}const cl=Mi([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4),{members:hl}=cl,pl=Mi([{name:"a_uv_x",components:1,type:"Float32"},{name:"a_split_index",components:1,type:"Float32"}]),{members:fl}=pl,dl=Ro.VectorTileFeature.types,yl=Math.cos(Math.PI/180*37.5),ml=Math.pow(2,14)/.5;class gl{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.lineClipsArray=[],this.gradients={},this.layers.forEach((t=>{this.gradients[t.id]={};})),this.layoutVertexArray=new ya,this.layoutVertexArray2=new ma,this.indexArray=new Aa,this.programConfigurations=new Qa(t.layers,t.zoom),this.segments=new za,this.maxLineLength=0,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){this.hasPattern=Po("line",this.layers,e);const n=this.layers[0].layout.get("line-sort-key"),i=!n.isConstant(),a=[];for(const{feature:e,id:s,index:o,sourceLayerIndex:l}of t){const t=this.layers[0]._featureFilter.needGeometry,u=ss(e,t);if(!this.layers[0]._featureFilter.filter(new li(this.zoom),u,r))continue;const c=i?n.evaluate(u,{},r):void 0,h={id:s,properties:e.properties,type:e.type,sourceLayerIndex:l,index:o,geometry:t?u.geometry:as(e),patterns:{},sortKey:c};a.push(h);}i&&a.sort(((t,e)=>t.sortKey-e.sortKey));for(const n of a){const{geometry:i,index:a,sourceLayerIndex:s}=n;if(this.hasPattern){const t=Vo("line",this.layers,n,this.zoom,e);this.patternFeatures.push(t);}else this.addFeature(n,i,a,r,{});e.featureIndex.insert(t[a].feature,i,a,s,this.index);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}addFeatures(t,e,r){for(const t of this.patternFeatures)this.addFeature(t,t.geometry,t.index,e,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(0!==this.layoutVertexArray2.length&&(this.layoutVertexBuffer2=t.createVertexBuffer(this.layoutVertexArray2,fl)),this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,hl),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());}lineFeatureClips(t){if(t.properties&&Object.prototype.hasOwnProperty.call(t.properties,"mapbox_clip_start")&&Object.prototype.hasOwnProperty.call(t.properties,"mapbox_clip_end"))return {start:+t.properties.mapbox_clip_start,end:+t.properties.mapbox_clip_end}}addFeature(t,e,r,n,i){const a=this.layers[0].layout,s=a.get("line-join").evaluate(t,{}),o=a.get("line-cap"),l=a.get("line-miter-limit"),u=a.get("line-round-limit");this.lineClips=this.lineFeatureClips(t);for(const r of e)this.addLine(r,t,s,o,l,u);this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);}addLine(t,e,r,n,i,a){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,this.lineClips){this.lineClipsArray.push(this.lineClips);for(let e=0;e<t.length-1;e++)this.totalDistance+=t[e].dist(t[e+1]);this.updateScaledDistance(),this.maxLineLength=Math.max(this.maxLineLength,this.totalDistance);}const s="Polygon"===dl[e.type];let o=t.length;for(;o>=2&&t[o-1].equals(t[o-2]);)o--;let l=0;for(;l<o-1&&t[l].equals(t[l+1]);)l++;if(o<(s?3:2))return;"bevel"===r&&(i=1.05);const u=this.overscaling<=16?15*rs/(512*this.overscaling):0,c=this.segments.prepareSegment(10*o,this.layoutVertexArray,this.indexArray);let h,p,f,d,y;this.e1=this.e2=-1,s&&(h=t[o-2],y=t[l].sub(h)._unit()._perp());for(let e=l;e<o;e++){if(f=e===o-1?s?t[l+1]:void 0:t[e+1],f&&t[e].equals(f))continue;y&&(d=y),h&&(p=h),h=t[e],y=f?f.sub(h)._unit()._perp():d,d=d||y;let m=d.add(y);0===m.x&&0===m.y||m._unit();const g=d.x*y.x+d.y*y.y,x=m.x*y.x+m.y*y.y,v=0!==x?1/x:1/0,b=2*Math.sqrt(2-2*x),w=x<yl&&p&&f,_=d.x*y.y-d.y*y.x>0;if(w&&e>l){const t=h.dist(p);if(t>2*u){const e=h.sub(h.sub(p)._mult(u/t)._round());this.updateDistance(p,e),this.addCurrentVertex(e,d,0,0,c),p=e;}}const A=p&&f;let S=A?r:s?"butt":n;if(A&&"round"===S&&(v<a?S="miter":v<=2&&(S="fakeround")),"miter"===S&&v>i&&(S="bevel"),"bevel"===S&&(v>2&&(S="flipbevel"),v<i&&(S="miter")),p&&this.updateDistance(p,h),"miter"===S)m._mult(v),this.addCurrentVertex(h,m,0,0,c);else if("flipbevel"===S){if(v>100)m=y.mult(-1);else {const t=v*d.add(y).mag()/d.sub(y).mag();m._perp()._mult(t*(_?-1:1));}this.addCurrentVertex(h,m,0,0,c),this.addCurrentVertex(h,m.mult(-1),0,0,c);}else if("bevel"===S||"fakeround"===S){const t=-Math.sqrt(v*v-1),e=_?t:0,r=_?0:t;if(p&&this.addCurrentVertex(h,d,e,r,c),"fakeround"===S){const t=Math.round(180*b/Math.PI/20);for(let e=1;e<t;e++){let r=e/t;if(.5!==r){const t=r-.5;r+=r*t*(r-1)*((1.0904+g*(g*(3.55645-1.43519*g)-3.2452))*t*t+(.848013+g*(.215638*g-1.06021)));}const n=y.sub(d)._mult(r)._add(d)._unit()._mult(_?-1:1);this.addHalfVertex(h,n.x,n.y,!1,_,0,c);}}f&&this.addCurrentVertex(h,y,-e,-r,c);}else if("butt"===S)this.addCurrentVertex(h,m,0,0,c);else if("square"===S){const t=p?1:-1;this.addCurrentVertex(h,m,t,t,c);}else "round"===S&&(p&&(this.addCurrentVertex(h,d,0,0,c),this.addCurrentVertex(h,d,1,1,c,!0)),f&&(this.addCurrentVertex(h,y,-1,-1,c,!0),this.addCurrentVertex(h,y,0,0,c)));if(w&&e<o-1){const t=h.dist(f);if(t>2*u){const e=h.add(f.sub(h)._mult(u/t)._round());this.updateDistance(h,e),this.addCurrentVertex(e,y,0,0,c),h=e;}}}}addCurrentVertex(t,e,r,n,i,a=!1){const s=e.y*n-e.x,o=-e.y-e.x*n;this.addHalfVertex(t,e.x+e.y*r,e.y-e.x*r,a,!1,r,i),this.addHalfVertex(t,s,o,a,!0,-n,i),this.distance>ml/2&&0===this.totalDistance&&(this.distance=0,this.updateScaledDistance(),this.addCurrentVertex(t,e,r,n,i,a));}addHalfVertex({x:t,y:e},r,n,i,a,s,o){const l=.5*(this.lineClips?this.scaledDistance*(ml-1):this.scaledDistance);this.layoutVertexArray.emplaceBack((t<<1)+(i?1:0),(e<<1)+(a?1:0),Math.round(63*r)+128,Math.round(63*n)+128,1+(0===s?0:s<0?-1:1)|(63&l)<<2,l>>6),this.lineClips&&this.layoutVertexArray2.emplaceBack((this.scaledDistance-this.lineClips.start)/(this.lineClips.end-this.lineClips.start),this.lineClipsArray.length);const u=o.vertexLength++;this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,u),o.primitiveLength++),a?this.e2=u:this.e1=u;}updateScaledDistance(){this.scaledDistance=this.lineClips?this.lineClips.start+(this.lineClips.end-this.lineClips.start)*this.distance/this.totalDistance:this.distance;}updateDistance(t,e){this.distance+=t.dist(e),this.updateScaledDistance();}}let xl,vl;$n("LineBucket",gl,{omit:["layers","patternFeatures"]});var bl={get paint(){return vl=vl||new _i({"line-opacity":new xi(X.paint_line["line-opacity"]),"line-color":new xi(X.paint_line["line-color"]),"line-translate":new gi(X.paint_line["line-translate"]),"line-translate-anchor":new gi(X.paint_line["line-translate-anchor"]),"line-width":new xi(X.paint_line["line-width"]),"line-gap-width":new xi(X.paint_line["line-gap-width"]),"line-offset":new xi(X.paint_line["line-offset"]),"line-blur":new xi(X.paint_line["line-blur"]),"line-dasharray":new bi(X.paint_line["line-dasharray"]),"line-pattern":new vi(X.paint_line["line-pattern"]),"line-gradient":new wi(X.paint_line["line-gradient"])})},get layout(){return xl=xl||new _i({"line-cap":new gi(X.layout_line["line-cap"]),"line-join":new xi(X.layout_line["line-join"]),"line-miter-limit":new gi(X.layout_line["line-miter-limit"]),"line-round-limit":new gi(X.layout_line["line-round-limit"]),"line-sort-key":new xi(X.layout_line["line-sort-key"])})}};class wl extends xi{possiblyEvaluate(t,e){return e=new li(Math.floor(e.zoom),{now:e.now,fadeDuration:e.fadeDuration,zoomHistory:e.zoomHistory,transition:e.transition}),super.possiblyEvaluate(t,e)}evaluate(t,e,r,n){return e=g({},e,{zoom:Math.floor(e.zoom)}),super.evaluate(t,e,r,n)}}let _l;class Al extends Si{constructor(t){super(t,bl),this.gradientVersion=0,_l||(_l=new wl(bl.paint.properties["line-width"].specification),_l.useIntegerZoom=!0);}_handleSpecialPaintPropertyUpdate(t){if("line-gradient"===t){const t=this.gradientExpression();this.stepInterpolant=!!function(t){return void 0!==t._styleExpression}(t)&&t._styleExpression.expression instanceof qe,this.gradientVersion=(this.gradientVersion+1)%Number.MAX_SAFE_INTEGER;}}gradientExpression(){return this._transitionablePaint._values["line-gradient"].value.expression}recalculate(t,e){super.recalculate(t,e),this.paint._values["line-floorwidth"]=_l.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,t);}createBucket(t){return new gl(t)}queryRadius(t){const e=t,r=Sl(bs("line-width",this,e),bs("line-gap-width",this,e)),n=bs("line-offset",this,e);return r/2+Math.abs(n)+ws(this.paint.get("line-translate"))}queryIntersectsFeature(t,e,r,n,i,s,o){const l=_s(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),s.angle,o),u=o/2*Sl(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),c=this.paint.get("line-offset").evaluate(e,r);return c&&(n=function(t,e){const r=[];for(let n=0;n<t.length;n++){const i=t[n],s=[];for(let t=0;t<i.length;t++){const r=i[t-1],n=i[t],o=i[t+1],l=0===t?new a(0,0):n.sub(r)._unit()._perp(),u=t===i.length-1?new a(0,0):o.sub(n)._unit()._perp(),c=l._add(u)._unit(),h=c.x*u.x+c.y*u.y;0!==h&&c._mult(1/h),s.push(c._mult(e)._add(n));}r.push(s);}return r}(n,c*o)),function(t,e,r){for(let n=0;n<e.length;n++){const i=e[n];if(t.length>=3)for(let e=0;e<i.length;e++)if(xs(t,i[e]))return !0;if(ps(t,i,r))return !0}return !1}(l,n,u)}isTileClipped(){return !0}}function Sl(t,e){return e>0?e+2*t:t}const kl=Mi([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),Il=Mi([{name:"a_projected_pos",components:3,type:"Float32"}],4);Mi([{name:"a_fade_opacity",components:1,type:"Uint32"}],4);const zl=Mi([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}]);Mi([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}]);const Ml=Mi([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4),Cl=Mi([{name:"a_pos",components:2,type:"Float32"},{name:"a_radius",components:1,type:"Float32"},{name:"a_flags",components:2,type:"Int16"}],4);function Bl(t,e,r){return t.sections.forEach((t=>{t.text=function(t,e,r){const n=e.layout.get("text-transform").evaluate(r,{});return "uppercase"===n?t=t.toLocaleUpperCase():"lowercase"===n&&(t=t.toLocaleLowerCase()),oi.applyArabicShaping&&(t=oi.applyArabicShaping(t)),t}(t.text,e,r);})),t}Mi([{name:"triangle",components:3,type:"Uint16"}]),Mi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),Mi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint16",name:"useRuntimeCollisionCircles"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",name:"collisionCircleDiameter"},{type:"Uint16",name:"textAnchorOffsetStartIndex"},{type:"Uint16",name:"textAnchorOffsetEndIndex"}]),Mi([{type:"Float32",name:"offsetX"}]),Mi([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}]),Mi([{type:"Uint16",name:"textAnchor"},{type:"Float32",components:2,name:"textOffset"}]);const Pl={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};var Vl=24,El=$l,Fl=function(t,e,r,n,i){var a,s,o=8*i-n-1,l=(1<<o)-1,u=l>>1,c=-7,h=r?i-1:0,p=r?-1:1,f=t[e+h];for(h+=p,a=f&(1<<-c)-1,f>>=-c,c+=o;c>0;a=256*a+t[e+h],h+=p,c-=8);for(s=a&(1<<-c)-1,a>>=-c,c+=n;c>0;s=256*s+t[e+h],h+=p,c-=8);if(0===a)a=1-u;else {if(a===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,n),a-=u;}return (f?-1:1)*s*Math.pow(2,a-n)},Tl=function(t,e,r,n,i,a){var s,o,l,u=8*a-i-1,c=(1<<u)-1,h=c>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:a-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+h>=1?p/l:p*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=c?(o=0,s=c):s+h>=1?(o=(e*l-1)*Math.pow(2,i),s+=h):(o=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[r+f]=255&o,f+=d,o/=256,i-=8);for(s=s<<i|o,u+=i;u>0;t[r+f]=255&s,f+=d,s/=256,u-=8);t[r+f-d]|=128*y;};function $l(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}$l.Varint=0,$l.Fixed64=1,$l.Bytes=2,$l.Fixed32=5;var Ll=4294967296,Dl=1/Ll,Ol="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function Ul(t){return t.type===$l.Bytes?t.readVarint()+t.pos:t.pos+1}function Rl(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function ql(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i];}function jl(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r]);}function Nl(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r]);}function Zl(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r]);}function Kl(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r]);}function Gl(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r]);}function Jl(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r]);}function Xl(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r]);}function Yl(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r]);}function Hl(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r]);}function Wl(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function Ql(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24;}function tu(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}$l.prototype={destroy:function(){this.buf=null;},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,a=this.pos;this.type=7&n,t(i,e,this),this.pos===a&&this.skip(n);}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=Wl(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=tu(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=Wl(this.buf,this.pos)+Wl(this.buf,this.pos+4)*Ll;return this.pos+=8,t},readSFixed64:function(){var t=Wl(this.buf,this.pos)+tu(this.buf,this.pos+4)*Ll;return this.pos+=8,t},readFloat:function(){var t=Fl(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=Fl(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,a=r.buf;if(n=(112&(i=a[r.pos++]))>>4,i<128)return Rl(t,n,e);if(n|=(127&(i=a[r.pos++]))<<3,i<128)return Rl(t,n,e);if(n|=(127&(i=a[r.pos++]))<<10,i<128)return Rl(t,n,e);if(n|=(127&(i=a[r.pos++]))<<17,i<128)return Rl(t,n,e);if(n|=(127&(i=a[r.pos++]))<<24,i<128)return Rl(t,n,e);if(n|=(1&(i=a[r.pos++]))<<31,i<128)return Rl(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&Ol?function(t,e,r){return Ol.decode(t.subarray(e,r))}(this.buf,e,t):function(t,e,r){for(var n="",i=e;i<r;){var a,s,o,l=t[i],u=null,c=l>239?4:l>223?3:l>191?2:1;if(i+c>r)break;1===c?l<128&&(u=l):2===c?128==(192&(a=t[i+1]))&&(u=(31&l)<<6|63&a)<=127&&(u=null):3===c?(s=t[i+2],128==(192&(a=t[i+1]))&&128==(192&s)&&((u=(15&l)<<12|(63&a)<<6|63&s)<=2047||u>=55296&&u<=57343)&&(u=null)):4===c&&(s=t[i+2],o=t[i+3],128==(192&(a=t[i+1]))&&128==(192&s)&&128==(192&o)&&((u=(15&l)<<18|(63&a)<<12|(63&s)<<6|63&o)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,c=1):u>65535&&(u-=65536,n+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),n+=String.fromCharCode(u),i+=c;}return n}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==$l.Bytes)return t.push(this.readVarint(e));var r=Ul(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==$l.Bytes)return t.push(this.readSVarint());var e=Ul(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==$l.Bytes)return t.push(this.readBoolean());var e=Ul(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==$l.Bytes)return t.push(this.readFloat());var e=Ul(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==$l.Bytes)return t.push(this.readDouble());var e=Ul(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==$l.Bytes)return t.push(this.readFixed32());var e=Ul(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==$l.Bytes)return t.push(this.readSFixed32());var e=Ul(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==$l.Bytes)return t.push(this.readFixed64());var e=Ul(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==$l.Bytes)return t.push(this.readSFixed64());var e=Ul(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===$l.Varint)for(;this.buf[this.pos++]>127;);else if(e===$l.Bytes)this.pos=this.readVarint()+this.pos;else if(e===$l.Fixed32)this.pos+=4;else {if(e!==$l.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8;}},writeTag:function(t,e){this.writeVarint(t<<3|e);},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),Ql(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),Ql(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),Ql(this.buf,-1&t,this.pos),Ql(this.buf,Math.floor(t*Dl),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),Ql(this.buf,-1&t,this.pos),Ql(this.buf,Math.floor(t*Dl),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;if(t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,r.buf[r.pos]=127&(t>>>=7);}(r,0,e),function(t,e){var r=(7&t)<<4;e.buf[e.pos++]|=r|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))));}(n,e);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,a=0;a<e.length;a++){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){n>56319||a+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null;}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128);}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&ql(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeFloat:function(t){this.realloc(4),Tl(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),Tl(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r];},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&ql(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n;},writeMessage:function(t,e,r){this.writeTag(t,$l.Bytes),this.writeRawMessage(e,r);},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,jl,e);},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,Nl,e);},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,Gl,e);},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,Zl,e);},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,Kl,e);},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,Jl,e);},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,Xl,e);},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,Yl,e);},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,Hl,e);},writeBytesField:function(t,e){this.writeTag(t,$l.Bytes),this.writeBytes(e);},writeFixed32Field:function(t,e){this.writeTag(t,$l.Fixed32),this.writeFixed32(e);},writeSFixed32Field:function(t,e){this.writeTag(t,$l.Fixed32),this.writeSFixed32(e);},writeFixed64Field:function(t,e){this.writeTag(t,$l.Fixed64),this.writeFixed64(e);},writeSFixed64Field:function(t,e){this.writeTag(t,$l.Fixed64),this.writeSFixed64(e);},writeVarintField:function(t,e){this.writeTag(t,$l.Varint),this.writeVarint(e);},writeSVarintField:function(t,e){this.writeTag(t,$l.Varint),this.writeSVarint(e);},writeStringField:function(t,e){this.writeTag(t,$l.Bytes),this.writeString(e);},writeFloatField:function(t,e){this.writeTag(t,$l.Fixed32),this.writeFloat(e);},writeDoubleField:function(t,e){this.writeTag(t,$l.Fixed64),this.writeDouble(e);},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e));}};var eu=r(El);const ru=3;function nu(t,e,r){1===t&&r.readMessage(iu,e);}function iu(t,e,r){if(3===t){const{id:t,bitmap:n,width:i,height:a,left:s,top:o,advance:l}=r.readMessage(au,{});e.push({id:t,bitmap:new Rs({width:i+2*ru,height:a+2*ru},n),metrics:{width:i,height:a,left:s,top:o,advance:l}});}}function au(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint());}const su=ru;function ou(t){let e=0,r=0;for(const n of t)e+=n.w*n.h,r=Math.max(r,n.w);t.sort(((t,e)=>e.h-t.h));const n=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}];let i=0,a=0;for(const e of t)for(let t=n.length-1;t>=0;t--){const r=n[t];if(!(e.w>r.w||e.h>r.h)){if(e.x=r.x,e.y=r.y,a=Math.max(a,e.y+e.h),i=Math.max(i,e.x+e.w),e.w===r.w&&e.h===r.h){const e=n.pop();t<n.length&&(n[t]=e);}else e.h===r.h?(r.x+=e.w,r.w-=e.w):e.w===r.w?(r.y+=e.h,r.h-=e.h):(n.push({x:r.x+e.w,y:r.y,w:r.w-e.w,h:e.h}),r.y+=e.h,r.h-=e.h);break}}return {w:i,h:a,fill:e/(i*a)||0}}const lu=1;class uu{constructor(t,{pixelRatio:e,version:r,stretchX:n,stretchY:i,content:a}){this.paddedRect=t,this.pixelRatio=e,this.stretchX=n,this.stretchY=i,this.content=a,this.version=r;}get tl(){return [this.paddedRect.x+lu,this.paddedRect.y+lu]}get br(){return [this.paddedRect.x+this.paddedRect.w-lu,this.paddedRect.y+this.paddedRect.h-lu]}get tlbr(){return this.tl.concat(this.br)}get displaySize(){return [(this.paddedRect.w-2*lu)/this.pixelRatio,(this.paddedRect.h-2*lu)/this.pixelRatio]}}class cu{constructor(t,e){const r={},n={};this.haveRenderCallbacks=[];const i=[];this.addImages(t,r,i),this.addImages(e,n,i);const{w:a,h:s}=ou(i),o=new qs({width:a||1,height:s||1});for(const e in t){const n=t[e],i=r[e].paddedRect;qs.copy(n.data,o,{x:0,y:0},{x:i.x+lu,y:i.y+lu},n.data);}for(const t in e){const r=e[t],i=n[t].paddedRect,a=i.x+lu,s=i.y+lu,l=r.data.width,u=r.data.height;qs.copy(r.data,o,{x:0,y:0},{x:a,y:s},r.data),qs.copy(r.data,o,{x:0,y:u-1},{x:a,y:s-1},{width:l,height:1}),qs.copy(r.data,o,{x:0,y:0},{x:a,y:s+u},{width:l,height:1}),qs.copy(r.data,o,{x:l-1,y:0},{x:a-1,y:s},{width:1,height:u}),qs.copy(r.data,o,{x:0,y:0},{x:a+l,y:s},{width:1,height:u});}this.image=o,this.iconPositions=r,this.patternPositions=n;}addImages(t,e,r){for(const n in t){const i=t[n],a={x:0,y:0,w:i.data.width+2*lu,h:i.data.height+2*lu};r.push(a),e[n]=new uu(a,i),i.hasRenderCallback&&this.haveRenderCallbacks.push(n);}}patchUpdatedImages(t,e){t.dispatchRenderCallbacks(this.haveRenderCallbacks);for(const r in t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e);}patchUpdatedImage(t,e,r){if(!t||!e)return;if(t.version===e.version)return;t.version=e.version;const[n,i]=t.tl;r.update(e.data,void 0,{x:n,y:i});}}var hu;$n("ImagePosition",uu),$n("ImageAtlas",cu),t.ai=void 0,(hu=t.ai||(t.ai={}))[hu.none=0]="none",hu[hu.horizontal=1]="horizontal",hu[hu.vertical=2]="vertical",hu[hu.horizontalOnly=3]="horizontalOnly";const pu=-17;class fu{constructor(){this.scale=1,this.fontStack="",this.imageName=null;}static forText(t,e){const r=new fu;return r.scale=t||1,r.fontStack=e,r}static forImage(t){const e=new fu;return e.imageName=t,e}}class du{constructor(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null;}static fromFeature(t,e){const r=new du;for(let n=0;n<t.sections.length;n++){const i=t.sections[n];i.image?r.addImageSection(i):r.addTextSection(i,e);}return r}length(){return this.text.length}getSection(t){return this.sections[this.sectionIndex[t]]}getSectionIndex(t){return this.sectionIndex[t]}getCharCode(t){return this.text.charCodeAt(t)}verticalizePunctuation(){this.text=function(t){let e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r+1)||null,i=t.charCodeAt(r-1)||null;e+=n&&Kn(n)&&!Pl[t[r+1]]||i&&Kn(i)&&!Pl[t[r-1]]||!Pl[t[r]]?t[r]:Pl[t[r]];}return e}(this.text);}trim(){let t=0;for(let e=0;e<this.text.length&&mu[this.text.charCodeAt(e)];e++)t++;let e=this.text.length;for(let r=this.text.length-1;r>=0&&r>=t&&mu[this.text.charCodeAt(r)];r--)e--;this.text=this.text.substring(t,e),this.sectionIndex=this.sectionIndex.slice(t,e);}substring(t,e){const r=new du;return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r}toString(){return this.text}getMaxScale(){return this.sectionIndex.reduce(((t,e)=>Math.max(t,this.sections[e].scale)),0)}addTextSection(t,e){this.text+=t.text,this.sections.push(fu.forText(t.scale,t.fontStack||e));const r=this.sections.length-1;for(let e=0;e<t.text.length;++e)this.sectionIndex.push(r);}addImageSection(t){const e=t.image?t.image.name:"";if(0===e.length)return void A("Can't add FormattedSection with an empty image.");const r=this.getNextImageSectionCharCode();r?(this.text+=String.fromCharCode(r),this.sections.push(fu.forImage(e)),this.sectionIndex.push(this.sections.length-1)):A("Reached maximum number of images 6401");}getNextImageSectionCharCode(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)}}function yu(e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m){const g=du.fromFeature(e,a);let x;p===t.ai.vertical&&g.verticalizePunctuation();const{processBidirectionalText:v,processStyledBidirectionalText:b}=oi;if(v&&1===g.sections.length){x=[];const t=v(g.toString(),Au(g,c,s,r,i,d,y));for(const e of t){const t=new du;t.text=e,t.sections=g.sections;for(let r=0;r<e.length;r++)t.sectionIndex.push(0);x.push(t);}}else if(b){x=[];const t=b(g.text,g.sectionIndex,Au(g,c,s,r,i,d,y));for(const e of t){const t=new du;t.text=e[0],t.sectionIndex=e[1],t.sections=g.sections,x.push(t);}}else x=function(t,e){const r=[],n=t.text;let i=0;for(const n of e)r.push(t.substring(i,n)),i=n;return i<n.length&&r.push(t.substring(i,n.length)),r}(g,Au(g,c,s,r,i,d,y));const w=[],_={positionedLines:w,text:g.toString(),top:h[1],bottom:h[1],left:h[0],right:h[0],writingMode:p,iconsInText:!1,verticalizable:!1};return function(e,r,n,i,a,s,o,l,u,c,h,p){let f=0,d=pu,y=0,m=0;const g="right"===l?1:"left"===l?0:.5;let x=0;for(const o of a){o.trim();const a=o.getMaxScale(),l=(a-1)*Vl,b={positionedGlyphs:[],lineOffset:0};e.positionedLines[x]=b;const w=b.positionedGlyphs;let _=0;if(!o.length()){d+=s,++x;continue}for(let s=0;s<o.length();s++){const y=o.getSection(s),m=o.getSectionIndex(s),g=o.getCharCode(s);let x=0,b=null,A=null,S=null,k=Vl;const I=!(u===t.ai.horizontal||!h&&!Zn(g)||h&&(mu[g]||(v=g,Rn.Arabic(v)||Rn["Arabic Supplement"](v)||Rn["Arabic Extended-A"](v)||Rn["Arabic Presentation Forms-A"](v)||Rn["Arabic Presentation Forms-B"](v))));if(y.imageName){const t=i[y.imageName];if(!t)continue;S=y.imageName,e.iconsInText=e.iconsInText||!0,A=t.paddedRect;const r=t.displaySize;y.scale=y.scale*Vl/p,b={width:r[0],height:r[1],left:lu,top:-su,advance:I?r[1]:r[0]},x=l+(Vl-r[1]*y.scale),k=b.advance;const n=I?r[0]*y.scale-Vl*a:r[1]*y.scale-Vl*a;n>0&&n>_&&(_=n);}else {const t=n[y.fontStack],e=t&&t[g];if(e&&e.rect)A=e.rect,b=e.metrics;else {const t=r[y.fontStack],e=t&&t[g];if(!e)continue;b=e.metrics;}x=(a-y.scale)*Vl;}I?(e.verticalizable=!0,w.push({glyph:g,imageName:S,x:f,y:d+x,vertical:I,scale:y.scale,fontStack:y.fontStack,sectionIndex:m,metrics:b,rect:A}),f+=k*y.scale+c):(w.push({glyph:g,imageName:S,x:f,y:d+x,vertical:I,scale:y.scale,fontStack:y.fontStack,sectionIndex:m,metrics:b,rect:A}),f+=b.advance*y.scale+c);}0!==w.length&&(y=Math.max(f-c,y),ku(w,0,w.length-1,g,_)),f=0;const A=s*a+_;b.lineOffset=Math.max(_,l),d+=A,m=Math.max(A,m),++x;}var v;const b=d-pu,{horizontalAlign:w,verticalAlign:_}=Su(o);(((function(t,e,r,n,i,a,s,o,l){const u=(e-r)*i;let c=0;c=a!==s?-o*n-pu:(-n*l+.5)*s;for(const e of t)for(const t of e.positionedGlyphs)t.x+=u,t.y+=c;})))(e.positionedLines,g,w,_,y,m,s,b,a.length),e.top+=-_*b,e.bottom=e.top+b,e.left+=-w*y,e.right=e.left+y;}(_,r,n,i,x,o,l,u,p,c,f,m),!function(t){for(const e of t)if(0!==e.positionedGlyphs.length)return !1;return !0}(w)&&_}const mu={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},gu={10:!0,32:!0,38:!0,40:!0,41:!0,43:!0,45:!0,47:!0,173:!0,183:!0,8203:!0,8208:!0,8211:!0,8231:!0};function xu(t,e,r,n,i,a){if(e.imageName){const t=n[e.imageName];return t?t.displaySize[0]*e.scale*Vl/a+i:0}{const n=r[e.fontStack],a=n&&n[t];return a?a.metrics.advance*e.scale+i:0}}function vu(t,e,r,n){const i=Math.pow(t-e,2);return n?t<e?i/2:2*i:i+Math.abs(r)*r}function bu(t,e,r){let n=0;return 10===t&&(n-=1e4),r&&(n+=150),40!==t&&65288!==t||(n+=50),41!==e&&65289!==e||(n+=50),n}function wu(t,e,r,n,i,a){let s=null,o=vu(e,r,i,a);for(const t of n){const n=vu(e-t.x,r,i,a)+t.badness;n<=o&&(s=t,o=n);}return {index:t,x:e,priorBreak:s,badness:o}}function _u(t){return t?_u(t.priorBreak).concat(t.index):[]}function Au(t,e,r,n,i,a,s){if("point"!==a)return [];if(!t)return [];const o=[],l=function(t,e,r,n,i,a){let s=0;for(let r=0;r<t.length();r++){const o=t.getSection(r);s+=xu(t.getCharCode(r),o,n,i,e,a);}return s/Math.max(1,Math.ceil(s/r))}(t,e,r,n,i,s),u=t.text.indexOf("​")>=0;let c=0;for(let r=0;r<t.length();r++){const a=t.getSection(r),p=t.getCharCode(r);if(mu[p]||(c+=xu(p,a,n,i,e,s)),r<t.length()-1){const e=!((h=p)<11904||!(Rn["Bopomofo Extended"](h)||Rn.Bopomofo(h)||Rn["CJK Compatibility Forms"](h)||Rn["CJK Compatibility Ideographs"](h)||Rn["CJK Compatibility"](h)||Rn["CJK Radicals Supplement"](h)||Rn["CJK Strokes"](h)||Rn["CJK Symbols and Punctuation"](h)||Rn["CJK Unified Ideographs Extension A"](h)||Rn["CJK Unified Ideographs"](h)||Rn["Enclosed CJK Letters and Months"](h)||Rn["Halfwidth and Fullwidth Forms"](h)||Rn.Hiragana(h)||Rn["Ideographic Description Characters"](h)||Rn["Kangxi Radicals"](h)||Rn["Katakana Phonetic Extensions"](h)||Rn.Katakana(h)||Rn["Vertical Forms"](h)||Rn["Yi Radicals"](h)||Rn["Yi Syllables"](h)));(gu[p]||e||a.imageName)&&o.push(wu(r+1,c,l,o,bu(p,t.getCharCode(r+1),e&&u),!1));}}var h;return _u(wu(t.length(),c,l,o,0,!0))}function Su(t){let e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;}return {horizontalAlign:e,verticalAlign:r}}function ku(t,e,r,n,i){if(!n&&!i)return;const a=t[r],s=(t[r].x+a.metrics.advance*a.scale)*n;for(let n=e;n<=r;n++)t[n].x-=s,t[n].y+=i;}function Iu(t,e,r){const{horizontalAlign:n,verticalAlign:i}=Su(r),a=e[0]-t.displaySize[0]*n,s=e[1]-t.displaySize[1]*i;return {image:t,top:s,bottom:s+t.displaySize[1],left:a,right:a+t.displaySize[0]}}function zu(t,e,r,n,i,a){const s=t.image;let o;if(s.content){const t=s.content,e=s.pixelRatio||1;o=[t[0]/e,t[1]/e,s.displaySize[0]-t[2]/e,s.displaySize[1]-t[3]/e];}const l=e.left*a,u=e.right*a;let c,h,p,f;"width"===r||"both"===r?(f=i[0]+l-n[3],h=i[0]+u+n[1]):(f=i[0]+(l+u-s.displaySize[0])/2,h=f+s.displaySize[0]);const d=e.top*a,y=e.bottom*a;return "height"===r||"both"===r?(c=i[1]+d-n[0],p=i[1]+y+n[2]):(c=i[1]+(d+y-s.displaySize[1])/2,p=c+s.displaySize[1]),{image:s,top:c,right:h,bottom:p,left:f,collisionPadding:o}}const Mu=255,Cu=128,Bu=Mu*Cu;function Pu(t,e){const{expression:r}=e;if("constant"===r.kind)return {kind:"constant",layoutSize:r.evaluate(new li(t+1))};if("source"===r.kind)return {kind:"source"};{const{zoomStops:e,interpolationType:n}=r;let i=0;for(;i<e.length&&e[i]<=t;)i++;i=Math.max(0,i-1);let a=i;for(;a<e.length&&e[a]<t+1;)a++;a=Math.min(e.length-1,a);const s=e[i],o=e[a];return "composite"===r.kind?{kind:"composite",minZoom:s,maxZoom:o,interpolationType:n}:{kind:"camera",minZoom:s,maxZoom:o,minSize:r.evaluate(new li(s)),maxSize:r.evaluate(new li(o)),interpolationType:n}}}function Vu(t,e,r){let n="never";const i=t.get(e);return i?n=i:t.get(r)&&(n="always"),n}const Eu=Ro.VectorTileFeature.types,Fu=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}];function Tu(t,e,r,n,i,a,s,o,l,u,c,h,p){const f=o?Math.min(Bu,Math.round(o[0])):0,d=o?Math.min(Bu,Math.round(o[1])):0;t.emplaceBack(e,r,Math.round(32*n),Math.round(32*i),a,s,(f<<1)+(l?1:0),d,16*u,16*c,256*h,256*p);}function $u(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r);}function Lu(t){for(const e of t.sections)if(Xn(e.text))return !0;return !1}class Du{constructor(t){this.layoutVertexArray=new xa,this.indexArray=new Aa,this.programConfigurations=t,this.segments=new za,this.dynamicLayoutVertexArray=new va,this.opacityVertexArray=new ba,this.hasVisibleVertices=!1,this.placedSymbolArray=new ra;}isEmpty(){return 0===this.layoutVertexArray.length&&0===this.indexArray.length&&0===this.dynamicLayoutVertexArray.length&&0===this.opacityVertexArray.length}upload(t,e,r,n){this.isEmpty()||(r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,kl.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,Il.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,Fu,!0),this.opacityVertexBuffer.itemSize=1),(r||n)&&this.programConfigurations.upload(t));}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy());}}$n("SymbolBuffers",Du);class Ou{constructor(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new za,this.collisionVertexArray=new _a;}upload(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,zl.members,!0);}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy());}}$n("CollisionBuffers",Ou);class Uu{constructor(e){this.collisionBoxArray=e.collisionBoxArray,this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=e.index,this.pixelRatio=e.pixelRatio,this.sourceLayerIndex=e.sourceLayerIndex,this.hasPattern=!1,this.hasRTLText=!1,this.sortKeyRanges=[],this.collisionCircleArray=[],this.placementInvProjMatrix=Ms([]),this.placementViewportMatrix=Ms([]);const r=this.layers[0]._unevaluatedLayout._values;this.textSizeData=Pu(this.zoom,r["text-size"]),this.iconSizeData=Pu(this.zoom,r["icon-size"]);const n=this.layers[0].layout,i=n.get("symbol-sort-key"),a=n.get("symbol-z-order");this.canOverlap="never"!==Vu(n,"text-overlap","text-allow-overlap")||"never"!==Vu(n,"icon-overlap","icon-allow-overlap")||n.get("text-ignore-placement")||n.get("icon-ignore-placement"),this.sortFeaturesByKey="viewport-y"!==a&&!i.isConstant(),this.sortFeaturesByY=("viewport-y"===a||"auto"===a&&!this.sortFeaturesByKey)&&this.canOverlap,"point"===n.get("symbol-placement")&&(this.writingModes=n.get("text-writing-mode").map((e=>t.ai[e]))),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id)),this.sourceID=e.sourceID;}createArrays(){this.text=new Du(new Qa(this.layers,this.zoom,(t=>/^text/.test(t)))),this.icon=new Du(new Qa(this.layers,this.zoom,(t=>/^icon/.test(t)))),this.glyphOffsetArray=new aa,this.lineVertexArray=new sa,this.symbolInstances=new ia,this.textAnchorOffsets=new la;}calculateGlyphDependencies(t,e,r,n,i){for(let a=0;a<t.length;a++)if(e[t.charCodeAt(a)]=!0,(r||n)&&i){const r=Pl[t.charAt(a)];r&&(e[r.charCodeAt(0)]=!0);}}populate(e,r,n){const i=this.layers[0],a=i.layout,s=a.get("text-font"),o=a.get("text-field"),l=a.get("icon-image"),u=("constant"!==o.value.kind||o.value.value instanceof Qt&&!o.value.value.isEmpty()||o.value.value.toString().length>0)&&("constant"!==s.value.kind||s.value.value.length>0),c="constant"!==l.value.kind||!!l.value.value||Object.keys(l.parameters).length>0,h=a.get("symbol-sort-key");if(this.features=[],!u&&!c)return;const p=r.iconDependencies,f=r.glyphDependencies,d=r.availableImages,y=new li(this.zoom);for(const{feature:r,id:o,index:l,sourceLayerIndex:m}of e){const e=i._featureFilter.needGeometry,g=ss(r,e);if(!i._featureFilter.filter(y,g,n))continue;let x,v;if(e||(g.geometry=as(r)),u){const t=i.getValueAndResolveTokens("text-field",g,n,d),e=Qt.factory(t);Lu(e)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===ai()||this.hasRTLText&&oi.isParsed())&&(x=Bl(e,i,g));}if(c){const t=i.getValueAndResolveTokens("icon-image",g,n,d);v=t instanceof ne?t:ne.fromString(t);}if(!x&&!v)continue;const b=this.sortFeaturesByKey?h.evaluate(g,{},n):void 0;if(this.features.push({id:o,text:x,icon:v,index:l,sourceLayerIndex:m,geometry:g.geometry,properties:r.properties,type:Eu[r.type],sortKey:b}),v&&(p[v.name]=!0),x){const e=s.evaluate(g,{},n).join(","),r="viewport"!==a.get("text-rotation-alignment")&&"point"!==a.get("symbol-placement");this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(t.ai.vertical)>=0;for(const t of x.sections)if(t.image)p[t.image.name]=!0;else {const n=qn(x.toString()),i=t.fontStack||e,a=f[i]=f[i]||{};this.calculateGlyphDependencies(t.text,a,r,this.allowVerticalPlacement,n);}}}"line"===a.get("symbol-placement")&&(this.features=function(t){const e={},r={},n=[];let i=0;function a(e){n.push(t[e]),i++;}function s(t,e,i){const a=r[t];return delete r[t],r[e]=a,n[a].geometry[0].pop(),n[a].geometry[0]=n[a].geometry[0].concat(i[0]),a}function o(t,r,i){const a=e[r];return delete e[r],e[t]=a,n[a].geometry[0].shift(),n[a].geometry[0]=i[0].concat(n[a].geometry[0]),a}function l(t,e,r){const n=r?e[0][e[0].length-1]:e[0][0];return `${t}:${n.x}:${n.y}`}for(let u=0;u<t.length;u++){const c=t[u],h=c.geometry,p=c.text?c.text.toString():null;if(!p){a(u);continue}const f=l(p,h),d=l(p,h,!0);if(f in r&&d in e&&r[f]!==e[d]){const t=o(f,d,h),i=s(f,d,n[t].geometry);delete e[f],delete r[d],r[l(p,n[i].geometry,!0)]=i,n[t].geometry=null;}else f in r?s(f,d,h):d in e?o(f,d,h):(a(u),e[f]=i-1,r[d]=i-1);}return n.filter((t=>t.geometry))}(this.features)),this.sortFeaturesByKey&&this.features.sort(((t,e)=>t.sortKey-e.sortKey));}update(t,e,r){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r));}isEmpty(){return 0===this.symbolInstances.length&&!this.hasRTLText}uploadPending(){return !this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload}upload(t){!this.uploaded&&this.hasDebugData()&&(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0;}destroyDebugData(){this.textCollisionBox.destroy(),this.iconCollisionBox.destroy();}destroy(){this.text.destroy(),this.icon.destroy(),this.hasDebugData()&&this.destroyDebugData();}addToLineVertexArray(t,e){const r=this.lineVertexArray.length;if(void 0!==t.segment){let r=t.dist(e[t.segment+1]),n=t.dist(e[t.segment]);const i={};for(let n=t.segment+1;n<e.length;n++)i[n]={x:e[n].x,y:e[n].y,tileUnitDistanceFromAnchor:r},n<e.length-1&&(r+=e[n+1].dist(e[n]));for(let r=t.segment||0;r>=0;r--)i[r]={x:e[r].x,y:e[r].y,tileUnitDistanceFromAnchor:n},r>0&&(n+=e[r-1].dist(e[r]));for(let t=0;t<e.length;t++){const e=i[t];this.lineVertexArray.emplaceBack(e.x,e.y,e.tileUnitDistanceFromAnchor);}}return {lineStartIndex:r,lineLength:this.lineVertexArray.length-r}}addSymbols(e,r,n,i,a,s,o,l,u,c,h,p){const f=e.indexArray,d=e.layoutVertexArray,y=e.segments.prepareSegment(4*r.length,d,f,this.canOverlap?s.sortKey:void 0),m=this.glyphOffsetArray.length,g=y.vertexLength,x=this.allowVerticalPlacement&&o===t.ai.vertical?Math.PI/2:0,v=s.text&&s.text.sections;for(let t=0;t<r.length;t++){const{tl:i,tr:a,bl:o,br:u,tex:c,pixelOffsetTL:h,pixelOffsetBR:m,minFontScaleX:g,minFontScaleY:b,glyphOffset:w,isSDF:_,sectionIndex:A}=r[t],S=y.vertexLength,k=w[1];Tu(d,l.x,l.y,i.x,k+i.y,c.x,c.y,n,_,h.x,h.y,g,b),Tu(d,l.x,l.y,a.x,k+a.y,c.x+c.w,c.y,n,_,m.x,h.y,g,b),Tu(d,l.x,l.y,o.x,k+o.y,c.x,c.y+c.h,n,_,h.x,m.y,g,b),Tu(d,l.x,l.y,u.x,k+u.y,c.x+c.w,c.y+c.h,n,_,m.x,m.y,g,b),$u(e.dynamicLayoutVertexArray,l,x),f.emplaceBack(S,S+1,S+2),f.emplaceBack(S+1,S+2,S+3),y.vertexLength+=4,y.primitiveLength+=2,this.glyphOffsetArray.emplaceBack(w[0]),t!==r.length-1&&A===r[t+1].sectionIndex||e.programConfigurations.populatePaintArrays(d.length,s,s.index,{},p,v&&v[A]);}e.placedSymbolArray.emplaceBack(l.x,l.y,m,this.glyphOffsetArray.length-m,g,u,c,l.segment,n?n[0]:0,n?n[1]:0,i[0],i[1],o,0,!1,0,h);}_addCollisionDebugVertex(t,e,r,n,i,a){return e.emplaceBack(0,0),t.emplaceBack(r.x,r.y,n,i,Math.round(a.x),Math.round(a.y))}addCollisionDebugVertices(t,e,r,n,i,s,o){const l=i.segments.prepareSegment(4,i.layoutVertexArray,i.indexArray),u=l.vertexLength,c=i.layoutVertexArray,h=i.collisionVertexArray,p=o.anchorX,f=o.anchorY;this._addCollisionDebugVertex(c,h,s,p,f,new a(t,e)),this._addCollisionDebugVertex(c,h,s,p,f,new a(r,e)),this._addCollisionDebugVertex(c,h,s,p,f,new a(r,n)),this._addCollisionDebugVertex(c,h,s,p,f,new a(t,n)),l.vertexLength+=4;const d=i.indexArray;d.emplaceBack(u,u+1),d.emplaceBack(u+1,u+2),d.emplaceBack(u+2,u+3),d.emplaceBack(u+3,u),l.primitiveLength+=4;}addDebugCollisionBoxes(t,e,r,n){for(let i=t;i<e;i++){const t=this.collisionBoxArray.get(i);this.addCollisionDebugVertices(t.x1,t.y1,t.x2,t.y2,n?this.textCollisionBox:this.iconCollisionBox,t.anchorPoint,r);}}generateCollisionDebugBuffers(){this.hasDebugData()&&this.destroyDebugData(),this.textCollisionBox=new Ou(wa,Ml.members,Sa),this.iconCollisionBox=new Ou(wa,Ml.members,Sa);for(let t=0;t<this.symbolInstances.length;t++){const e=this.symbolInstances.get(t);this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e,!1),this.addDebugCollisionBoxes(e.verticalIconBoxStartIndex,e.verticalIconBoxEndIndex,e,!1);}}_deserializeCollisionBoxesForSymbol(t,e,r,n,i,a,s,o,l){const u={};for(let n=e;n<r;n++){const e=t.get(n);u.textBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},u.textFeatureIndex=e.featureIndex;break}for(let e=n;e<i;e++){const r=t.get(e);u.verticalTextBox={x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,anchorPointX:r.anchorPointX,anchorPointY:r.anchorPointY},u.verticalTextFeatureIndex=r.featureIndex;break}for(let e=a;e<s;e++){const r=t.get(e);u.iconBox={x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,anchorPointX:r.anchorPointX,anchorPointY:r.anchorPointY},u.iconFeatureIndex=r.featureIndex;break}for(let e=o;e<l;e++){const r=t.get(e);u.verticalIconBox={x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,anchorPointX:r.anchorPointX,anchorPointY:r.anchorPointY},u.verticalIconFeatureIndex=r.featureIndex;break}return u}deserializeCollisionBoxes(t){this.collisionArrays=[];for(let e=0;e<this.symbolInstances.length;e++){const r=this.symbolInstances.get(e);this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex,r.verticalIconBoxStartIndex,r.verticalIconBoxEndIndex));}}hasTextData(){return this.text.segments.get().length>0}hasIconData(){return this.icon.segments.get().length>0}hasDebugData(){return this.textCollisionBox&&this.iconCollisionBox}hasTextCollisionBoxData(){return this.hasDebugData()&&this.textCollisionBox.segments.get().length>0}hasIconCollisionBoxData(){return this.hasDebugData()&&this.iconCollisionBox.segments.get().length>0}addIndicesForPlacedSymbol(t,e){const r=t.placedSymbolArray.get(e),n=r.vertexStartIndex+4*r.numGlyphs;for(let e=r.vertexStartIndex;e<n;e+=4)t.indexArray.emplaceBack(e,e+1,e+2),t.indexArray.emplaceBack(e+1,e+2,e+3);}getSortedSymbolIndexes(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes;const e=Math.sin(t),r=Math.cos(t),n=[],i=[],a=[];for(let t=0;t<this.symbolInstances.length;++t){a.push(t);const s=this.symbolInstances.get(t);n.push(0|Math.round(e*s.anchorX+r*s.anchorY)),i.push(s.featureIndex);}return a.sort(((t,e)=>n[t]-n[e]||i[e]-i[t])),a}addToSortKeyRanges(t,e){const r=this.sortKeyRanges[this.sortKeyRanges.length-1];r&&r.sortKey===e?r.symbolInstanceEnd=t+1:this.sortKeyRanges.push({sortKey:e,symbolInstanceStart:t,symbolInstanceEnd:t+1});}sortFeatures(t){if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[];for(const t of this.symbolInstanceIndexes){const e=this.symbolInstances.get(t);this.featureSortOrder.push(e.featureIndex),[e.rightJustifiedTextSymbolIndex,e.centerJustifiedTextSymbolIndex,e.leftJustifiedTextSymbolIndex].forEach(((t,e,r)=>{t>=0&&r.indexOf(t)===e&&this.addIndicesForPlacedSymbol(this.text,t);})),e.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.text,e.verticalPlacedTextSymbolIndex),e.placedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.placedIconSymbolIndex),e.verticalPlacedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.verticalPlacedIconSymbolIndex);}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray);}}}let Ru,qu;$n("SymbolBucket",Uu,{omit:["layers","collisionBoxArray","features","compareText"]}),Uu.MAX_GLYPHS=65535,Uu.addDynamicAttributes=$u;var ju={get paint(){return qu=qu||new _i({"icon-opacity":new xi(X.paint_symbol["icon-opacity"]),"icon-color":new xi(X.paint_symbol["icon-color"]),"icon-halo-color":new xi(X.paint_symbol["icon-halo-color"]),"icon-halo-width":new xi(X.paint_symbol["icon-halo-width"]),"icon-halo-blur":new xi(X.paint_symbol["icon-halo-blur"]),"icon-translate":new gi(X.paint_symbol["icon-translate"]),"icon-translate-anchor":new gi(X.paint_symbol["icon-translate-anchor"]),"text-opacity":new xi(X.paint_symbol["text-opacity"]),"text-color":new xi(X.paint_symbol["text-color"],{runtimeType:yt,getOverride:t=>t.textColor,hasOverride:t=>!!t.textColor}),"text-halo-color":new xi(X.paint_symbol["text-halo-color"]),"text-halo-width":new xi(X.paint_symbol["text-halo-width"]),"text-halo-blur":new xi(X.paint_symbol["text-halo-blur"]),"text-translate":new gi(X.paint_symbol["text-translate"]),"text-translate-anchor":new gi(X.paint_symbol["text-translate-anchor"])})},get layout(){return Ru=Ru||new _i({"symbol-placement":new gi(X.layout_symbol["symbol-placement"]),"symbol-spacing":new gi(X.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new gi(X.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new xi(X.layout_symbol["symbol-sort-key"]),"symbol-z-order":new gi(X.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new gi(X.layout_symbol["icon-allow-overlap"]),"icon-overlap":new gi(X.layout_symbol["icon-overlap"]),"icon-ignore-placement":new gi(X.layout_symbol["icon-ignore-placement"]),"icon-optional":new gi(X.layout_symbol["icon-optional"]),"icon-rotation-alignment":new gi(X.layout_symbol["icon-rotation-alignment"]),"icon-size":new xi(X.layout_symbol["icon-size"]),"icon-text-fit":new gi(X.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new gi(X.layout_symbol["icon-text-fit-padding"]),"icon-image":new xi(X.layout_symbol["icon-image"]),"icon-rotate":new xi(X.layout_symbol["icon-rotate"]),"icon-padding":new xi(X.layout_symbol["icon-padding"]),"icon-keep-upright":new gi(X.layout_symbol["icon-keep-upright"]),"icon-offset":new xi(X.layout_symbol["icon-offset"]),"icon-anchor":new xi(X.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new gi(X.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new gi(X.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new gi(X.layout_symbol["text-rotation-alignment"]),"text-field":new xi(X.layout_symbol["text-field"]),"text-font":new xi(X.layout_symbol["text-font"]),"text-size":new xi(X.layout_symbol["text-size"]),"text-max-width":new xi(X.layout_symbol["text-max-width"]),"text-line-height":new gi(X.layout_symbol["text-line-height"]),"text-letter-spacing":new xi(X.layout_symbol["text-letter-spacing"]),"text-justify":new xi(X.layout_symbol["text-justify"]),"text-radial-offset":new xi(X.layout_symbol["text-radial-offset"]),"text-variable-anchor":new gi(X.layout_symbol["text-variable-anchor"]),"text-variable-anchor-offset":new xi(X.layout_symbol["text-variable-anchor-offset"]),"text-anchor":new xi(X.layout_symbol["text-anchor"]),"text-max-angle":new gi(X.layout_symbol["text-max-angle"]),"text-writing-mode":new gi(X.layout_symbol["text-writing-mode"]),"text-rotate":new xi(X.layout_symbol["text-rotate"]),"text-padding":new gi(X.layout_symbol["text-padding"]),"text-keep-upright":new gi(X.layout_symbol["text-keep-upright"]),"text-transform":new xi(X.layout_symbol["text-transform"]),"text-offset":new xi(X.layout_symbol["text-offset"]),"text-allow-overlap":new gi(X.layout_symbol["text-allow-overlap"]),"text-overlap":new gi(X.layout_symbol["text-overlap"]),"text-ignore-placement":new gi(X.layout_symbol["text-ignore-placement"]),"text-optional":new gi(X.layout_symbol["text-optional"])})}};class Nu{constructor(t){if(void 0===t.property.overrides)throw new Error("overrides must be provided to instantiate FormatSectionOverride class");this.type=t.property.overrides?t.property.overrides.runtimeType:ht,this.defaultValue=t;}evaluate(t){if(t.formattedSection){const e=this.defaultValue.property.overrides;if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default}eachChild(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression);}outputDefined(){return !1}serialize(){return null}}$n("FormatSectionOverride",Nu,{omit:["defaultValue"]});class Zu extends Si{constructor(t){super(t,ju);}recalculate(t,e){if(super.recalculate(t,e),"auto"===this.layout.get("icon-rotation-alignment")&&(this.layout._values["icon-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-rotation-alignment")&&(this.layout._values["text-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]="map"===this.layout.get("text-rotation-alignment")?"map":"viewport"),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){const t=this.layout.get("text-writing-mode");if(t){const e=[];for(const r of t)e.indexOf(r)<0&&e.push(r);this.layout._values["text-writing-mode"]=e;}else this.layout._values["text-writing-mode"]=["horizontal"];}this._setPaintOverrides();}getValueAndResolveTokens(t,e,r,n){const i=this.layout.get(t).evaluate(e,{},r,n),a=this._unevaluatedLayout._values[t];return a.isDataDriven()||Tr(a.value)||!i?i:function(t,e){return e.replace(/{([^{}]+)}/g,((e,r)=>r in t?String(t[r]):""))}(e.properties,i)}createBucket(t){return new Uu(t)}queryRadius(){return 0}queryIntersectsFeature(){throw new Error("Should take a different path in FeatureIndex")}_setPaintOverrides(){for(const t of ju.paint.overridableProperties){if(!Zu.hasPaintOverride(this.layout,t))continue;const e=this.paint.get(t),r=new Nu(e),n=new Fr(r,e.property.specification);let i=null;i="constant"===e.value.kind||"source"===e.value.kind?new Lr("source",n):new Dr("composite",n,e.value.zoomStops),this.paint._values[t]=new yi(e.property,i,e.parameters);}}_handleOverridablePaintPropertyUpdate(t,e,r){return !(!this.layout||e.isDataDriven()||r.isDataDriven())&&Zu.hasPaintOverride(this.layout,t)}static hasPaintOverride(t,e){const r=t.get("text-field"),n=ju.paint.properties[e];let i=!1;const a=t=>{for(const e of t)if(n.overrides&&n.overrides.hasOverride(e))return void(i=!0)};if("constant"===r.value.kind&&r.value.value instanceof Qt)a(r.value.value.sections);else if("source"===r.value.kind){const t=e=>{i||(e instanceof le&&se(e.value)===vt?a(e.value.sections):e instanceof pr?a(e.sections):e.eachChild(t));},e=r.value;e._styleExpression&&t(e._styleExpression.expression);}return i}}let Ku;var Gu={get paint(){return Ku=Ku||new _i({"background-color":new gi(X.paint_background["background-color"]),"background-pattern":new bi(X.paint_background["background-pattern"]),"background-opacity":new gi(X.paint_background["background-opacity"])})}};class Ju extends Si{constructor(t){super(t,Gu);}}let Xu;var Yu={get paint(){return Xu=Xu||new _i({"raster-opacity":new gi(X.paint_raster["raster-opacity"]),"raster-hue-rotate":new gi(X.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new gi(X.paint_raster["raster-brightness-min"]),"raster-brightness-max":new gi(X.paint_raster["raster-brightness-max"]),"raster-saturation":new gi(X.paint_raster["raster-saturation"]),"raster-contrast":new gi(X.paint_raster["raster-contrast"]),"raster-resampling":new gi(X.paint_raster["raster-resampling"]),"raster-fade-duration":new gi(X.paint_raster["raster-fade-duration"])})}};class Hu extends Si{constructor(t){super(t,Yu);}}class Wu extends Si{constructor(t){super(t,{}),this.onAdd=t=>{this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl);},this.onRemove=t=>{this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl);},this.implementation=t;}is3D(){return "3d"===this.implementation.renderingMode}hasOffscreenPass(){return void 0!==this.implementation.prerender}recalculate(){}updateTransitions(){}hasTransition(){return !1}serialize(){throw new Error("Custom layers cannot be serialized")}}class Qu{constructor(t){this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=()=>{this._triggered=!1,this._callback();});}trigger(){this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((()=>{this._triggered=!1,this._callback();}),0));}remove(){delete this._channel,this._callback=()=>{};}}const tc=6371008.8;class ec{constructor(t,e){if(isNaN(t)||isNaN(e))throw new Error(`Invalid LngLat object: (${t}, ${e})`);if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")}wrap(){return new ec(m(this.lng,-180,180),this.lat)}toArray(){return [this.lng,this.lat]}toString(){return `LngLat(${this.lng}, ${this.lat})`}distanceTo(t){const e=Math.PI/180,r=this.lat*e,n=t.lat*e,i=Math.sin(r)*Math.sin(n)+Math.cos(r)*Math.cos(n)*Math.cos((t.lng-this.lng)*e);return tc*Math.acos(Math.min(i,1))}static convert(t){if(t instanceof ec)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new ec(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new ec(Number("lng"in t?t.lng:t.lon),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")}}const rc=2*Math.PI*tc;function nc(t){return rc*Math.cos(t*Math.PI/180)}function ic(t){return (180+t)/360}function ac(t){return (180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function sc(t,e){return t/nc(e)}function oc(t){return 360/Math.PI*Math.atan(Math.exp((180-360*t)*Math.PI/180))-90}class lc{constructor(t,e,r=0){this.x=+t,this.y=+e,this.z=+r;}static fromLngLat(t,e=0){const r=ec.convert(t);return new lc(ic(r.lng),ac(r.lat),sc(e,r.lat))}toLngLat(){return new ec(360*this.x-180,oc(this.y))}toAltitude(){return this.z*nc(oc(this.y))}meterInMercatorCoordinateUnits(){return 1/rc*(t=oc(this.y),1/Math.cos(t*Math.PI/180));var t;}}function uc(t,e,r){var n=2*Math.PI*6378137/256/Math.pow(2,r);return [t*n-2*Math.PI*6378137/2,e*n-2*Math.PI*6378137/2]}class cc{constructor(t,e,r){if(t<0||t>25||r<0||r>=Math.pow(2,t)||e<0||e>=Math.pow(2,t))throw new Error(`x=${e}, y=${r}, z=${t} outside of bounds. 0<=x<${Math.pow(2,t)}, 0<=y<${Math.pow(2,t)} 0<=z<=25 `);this.z=t,this.x=e,this.y=r,this.key=fc(0,t,t,e,r);}equals(t){return this.z===t.z&&this.x===t.x&&this.y===t.y}url(t,e,r){const n=(a=this.y,s=this.z,o=uc(256*(i=this.x),256*(a=Math.pow(2,s)-a-1),s),l=uc(256*(i+1),256*(a+1),s),o[0]+","+o[1]+","+l[0]+","+l[1]);var i,a,s,o,l;const u=function(t,e,r){let n,i="";for(let a=t;a>0;a--)n=1<<a-1,i+=(e&n?1:0)+(r&n?2:0);return i}(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace(/{prefix}/g,(this.x%16).toString(16)+(this.y%16).toString(16)).replace(/{z}/g,String(this.z)).replace(/{x}/g,String(this.x)).replace(/{y}/g,String("tms"===r?Math.pow(2,this.z)-this.y-1:this.y)).replace(/{ratio}/g,e>1?"@2x":"").replace(/{quadkey}/g,u).replace(/{bbox-epsg-3857}/g,n)}isChildOf(t){const e=this.z-t.z;return e>0&&t.x===this.x>>e&&t.y===this.y>>e}getTilePoint(t){const e=Math.pow(2,this.z);return new a((t.x*e-this.x)*rs,(t.y*e-this.y)*rs)}toString(){return `${this.z}/${this.x}/${this.y}`}}class hc{constructor(t,e){this.wrap=t,this.canonical=e,this.key=fc(t,e.z,e.z,e.x,e.y);}}class pc{constructor(t,e,r,n,i){if(t<r)throw new Error(`overscaledZ should be >= z; overscaledZ = ${t}; z = ${r}`);this.overscaledZ=t,this.wrap=e,this.canonical=new cc(r,+n,+i),this.key=fc(e,t,r,n,i);}clone(){return new pc(this.overscaledZ,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)}equals(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)}scaledTo(t){if(t>this.overscaledZ)throw new Error(`targetZ > this.overscaledZ; targetZ = ${t}; overscaledZ = ${this.overscaledZ}`);const e=this.canonical.z-t;return t>this.canonical.z?new pc(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new pc(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)}calculateScaledKey(t,e){if(t>this.overscaledZ)throw new Error(`targetZ > this.overscaledZ; targetZ = ${t}; overscaledZ = ${this.overscaledZ}`);const r=this.canonical.z-t;return t>this.canonical.z?fc(this.wrap*+e,t,this.canonical.z,this.canonical.x,this.canonical.y):fc(this.wrap*+e,t,t,this.canonical.x>>r,this.canonical.y>>r)}isChildOf(t){if(t.wrap!==this.wrap)return !1;const e=this.canonical.z-t.canonical.z;return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e}children(t){if(this.overscaledZ>=t)return [new pc(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];const e=this.canonical.z+1,r=2*this.canonical.x,n=2*this.canonical.y;return [new pc(e,this.wrap,e,r,n),new pc(e,this.wrap,e,r+1,n),new pc(e,this.wrap,e,r,n+1),new pc(e,this.wrap,e,r+1,n+1)]}isLessThan(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))}wrapped(){return new pc(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)}unwrapTo(t){return new pc(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)}overscaleFactor(){return Math.pow(2,this.overscaledZ-this.canonical.z)}toUnwrapped(){return new hc(this.wrap,this.canonical)}toString(){return `${this.overscaledZ}/${this.canonical.x}/${this.canonical.y}`}getTilePoint(t){return this.canonical.getTilePoint(new lc(t.x-this.wrap,t.y))}}function fc(t,e,r,n,i){(t*=2)<0&&(t=-1*t-1);const a=1<<r;return (a*a*t+a*i+n).toString(36)+r.toString(36)+e.toString(36)}$n("CanonicalTileID",cc),$n("OverscaledTileID",pc,{omit:["posMatrix"]});class dc{constructor(t,e,r,n=1,i=1,a=1,s=0){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square");if(r&&!["mapbox","terrarium","custom"].includes(r))return void A(`"${r}" is not a valid encoding type. Valid types include "mapbox", "terrarium" and "custom".`);this.stride=e.height;const o=this.dim=e.height-2;switch(this.data=new Uint32Array(e.data.buffer),r){case"terrarium":this.redFactor=256,this.greenFactor=1,this.blueFactor=1/256,this.baseShift=32768;break;case"custom":this.redFactor=n,this.greenFactor=i,this.blueFactor=a,this.baseShift=s;break;default:this.redFactor=6553.6,this.greenFactor=25.6,this.blueFactor=.1,this.baseShift=1e4;}for(let t=0;t<o;t++)this.data[this._idx(-1,t)]=this.data[this._idx(0,t)],this.data[this._idx(o,t)]=this.data[this._idx(o-1,t)],this.data[this._idx(t,-1)]=this.data[this._idx(t,0)],this.data[this._idx(t,o)]=this.data[this._idx(t,o-1)];this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(o,-1)]=this.data[this._idx(o-1,0)],this.data[this._idx(-1,o)]=this.data[this._idx(0,o-1)],this.data[this._idx(o,o)]=this.data[this._idx(o-1,o-1)],this.min=Number.MAX_SAFE_INTEGER,this.max=Number.MIN_SAFE_INTEGER;for(let t=0;t<o;t++)for(let e=0;e<o;e++){const r=this.get(t,e);r>this.max&&(this.max=r),r<this.min&&(this.min=r);}}get(t,e){const r=new Uint8Array(this.data.buffer),n=4*this._idx(t,e);return this.unpack(r[n],r[n+1],r[n+2])}getUnpackVector(){return [this.redFactor,this.greenFactor,this.blueFactor,this.baseShift]}_idx(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data");return (e+1)*this.stride+(t+1)}unpack(t,e,r){return t*this.redFactor+e*this.greenFactor+r*this.blueFactor-this.baseShift}getPixels(){return new qs({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))}backfillBorder(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch");let n=e*this.dim,i=e*this.dim+this.dim,a=r*this.dim,s=r*this.dim+this.dim;switch(e){case-1:n=i-1;break;case 1:i=n+1;}switch(r){case-1:a=s-1;break;case 1:s=a+1;}const o=-e*this.dim,l=-r*this.dim;for(let e=a;e<s;e++)for(let r=n;r<i;r++)this.data[this._idx(r,e)]=t.data[this._idx(r+o,e+l)];}}$n("DEMData",dc);class yc{constructor(t){this._stringToNumber={},this._numberToString=[];for(let e=0;e<t.length;e++){const r=t[e];this._stringToNumber[r]=e,this._numberToString[e]=r;}}encode(t){return this._stringToNumber[t]}decode(t){if(t>=this._numberToString.length)throw new Error(`Out of bounds. Index requested n=${t} can't be >= this._numberToString.length ${this._numberToString.length}`);return this._numberToString[t]}}class mc{constructor(t,e,r,n,i){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=n,this.properties=t.properties,this.id=i;}get geometry(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry}set geometry(t){this._geometry=t;}toJSON(){const t={geometry:this.geometry};for(const e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e]);return t}}class gc{constructor(t,e){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=new Fn(rs,16,0),this.grid3D=new Fn(rs,16,0),this.featureIndexArray=new ca,this.promoteId=e;}insert(t,e,r,n,i,a){const s=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(r,n,i);const o=a?this.grid3D:this.grid;for(let t=0;t<e.length;t++){const r=e[t],n=[1/0,1/0,-1/0,-1/0];for(let t=0;t<r.length;t++){const e=r[t];n[0]=Math.min(n[0],e.x),n[1]=Math.min(n[1],e.y),n[2]=Math.max(n[2],e.x),n[3]=Math.max(n[3],e.y);}n[0]<rs&&n[1]<rs&&n[2]>=0&&n[3]>=0&&o.insert(s,n[0],n[1],n[2],n[3]);}}loadVTLayers(){return this.vtLayers||(this.vtLayers=new Ro.VectorTile(new eu(this.rawTileData)).layers,this.sourceLayerCoder=new yc(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers}query(t,e,r,n){this.loadVTLayers();const i=t.params||{},s=rs/t.tileSize/t.scale,o=Nr(i.filter),l=t.queryGeometry,u=t.queryPadding*s,c=vc(l),h=this.grid.query(c.minX-u,c.minY-u,c.maxX+u,c.maxY+u),p=vc(t.cameraQueryGeometry),f=this.grid3D.query(p.minX-u,p.minY-u,p.maxX+u,p.maxY+u,((e,r,n,i)=>function(t,e,r,n,i){for(const a of t)if(e<=a.x&&r<=a.y&&n>=a.x&&i>=a.y)return !0;const s=[new a(e,r),new a(e,i),new a(n,i),new a(n,r)];if(t.length>2)for(const e of s)if(xs(t,e))return !0;for(let e=0;e<t.length-1;e++)if(vs(t[e],t[e+1],s))return !0;return !1}(t.cameraQueryGeometry,e-u,r-u,n+u,i+u)));for(const t of f)h.push(t);h.sort(bc);const d={};let y;for(let a=0;a<h.length;a++){const u=h[a];if(u===y)continue;y=u;const c=this.featureIndexArray.get(u);let p=null;this.loadMatchingFeature(d,c.bucketIndex,c.sourceLayerIndex,c.featureIndex,o,i.layers,i.availableImages,e,r,n,((e,r,n)=>(p||(p=as(e)),r.queryIntersectsFeature(l,e,n,p,this.z,t.transform,s,t.pixelPosMatrix))));}return d}loadMatchingFeature(t,e,r,n,i,a,s,o,l,u,c){const h=this.bucketLayerIDs[e];if(a&&!function(t,e){for(let r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return !0;return !1}(a,h))return;const p=this.sourceLayerCoder.decode(r),f=this.vtLayers[p].feature(n);if(i.needGeometry){const t=ss(f,!0);if(!i.filter(new li(this.tileID.overscaledZ),t,this.tileID.canonical))return}else if(!i.filter(new li(this.tileID.overscaledZ),f))return;const d=this.getId(f,p);for(let e=0;e<h.length;e++){const r=h[e];if(a&&a.indexOf(r)<0)continue;const i=o[r];if(!i)continue;let p={};d&&u&&(p=u.getState(i.sourceLayer||"_geojsonTileLayer",d));const y=g({},l[r]);y.paint=xc(y.paint,i.paint,f,p,s),y.layout=xc(y.layout,i.layout,f,p,s);const m=!c||c(f,i,p);if(!m)continue;const x=new mc(f,this.z,this.x,this.y,d);x.layer=y;let v=t[r];void 0===v&&(v=t[r]=[]),v.push({featureIndex:n,feature:x,intersectionZ:m});}}lookupSymbolFeatures(t,e,r,n,i,a,s,o){const l={};this.loadVTLayers();const u=Nr(i);for(const i of t)this.loadMatchingFeature(l,r,n,i,u,a,s,o,e);return l}hasLayer(t){for(const e of this.bucketLayerIDs)for(const r of e)if(t===r)return !0;return !1}getId(t,e){let r=t.id;return this.promoteId&&(r=t.properties["string"==typeof this.promoteId?this.promoteId:this.promoteId[e]],"boolean"==typeof r&&(r=Number(r))),r}}function xc(t,e,r,n,i){return v(t,((t,a)=>{const s=e instanceof mi?e.get(a):null;return s&&s.evaluate?s.evaluate(r,n,i):s}))}function vc(t){let e=1/0,r=1/0,n=-1/0,i=-1/0;for(const a of t)e=Math.min(e,a.x),r=Math.min(r,a.y),n=Math.max(n,a.x),i=Math.max(i,a.y);return {minX:e,minY:r,maxX:n,maxY:i}}function bc(t,e){return e-t}function wc(t,e,r,n,i){const s=[];for(let o=0;o<t.length;o++){const l=t[o];let u;for(let t=0;t<l.length-1;t++){let o=l[t],c=l[t+1];o.x<e&&c.x<e||(o.x<e?o=new a(e,o.y+(e-o.x)/(c.x-o.x)*(c.y-o.y))._round():c.x<e&&(c=new a(e,o.y+(e-o.x)/(c.x-o.x)*(c.y-o.y))._round()),o.y<r&&c.y<r||(o.y<r?o=new a(o.x+(r-o.y)/(c.y-o.y)*(c.x-o.x),r)._round():c.y<r&&(c=new a(o.x+(r-o.y)/(c.y-o.y)*(c.x-o.x),r)._round()),o.x>=n&&c.x>=n||(o.x>=n?o=new a(n,o.y+(n-o.x)/(c.x-o.x)*(c.y-o.y))._round():c.x>=n&&(c=new a(n,o.y+(n-o.x)/(c.x-o.x)*(c.y-o.y))._round()),o.y>=i&&c.y>=i||(o.y>=i?o=new a(o.x+(i-o.y)/(c.y-o.y)*(c.x-o.x),i)._round():c.y>=i&&(c=new a(o.x+(i-o.y)/(c.y-o.y)*(c.x-o.x),i)._round()),u&&o.equals(u[u.length-1])||(u=[o],s.push(u)),u.push(c)))));}}return s}$n("FeatureIndex",gc,{omit:["rawTileData","sourceLayerCoder"]});class _c extends a{constructor(t,e,r,n){super(t,e),this.angle=r,void 0!==n&&(this.segment=n);}clone(){return new _c(this.x,this.y,this.angle,this.segment)}}function Ac(t,e,r,n,i){if(void 0===e.segment||0===r)return !0;let a=e,s=e.segment+1,o=0;for(;o>-r/2;){if(s--,s<0)return !1;o-=t[s].dist(a),a=t[s];}o+=t[s].dist(t[s+1]),s++;const l=[];let u=0;for(;o<r/2;){const e=t[s],r=t[s+1];if(!r)return !1;let a=t[s-1].angleTo(e)-e.angleTo(r);for(a=Math.abs((a+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:o,angleDelta:a}),u+=a;o-l[0].distance>n;)u-=l.shift().angleDelta;if(u>i)return !1;s++,o+=e.dist(r);}return !0}function Sc(t){let e=0;for(let r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1]);return e}function kc(t,e,r){return t?.6*e*r:0}function Ic(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function zc(t,e,r,n,i,a){const s=kc(r,i,a),o=Ic(r,n)*a;let l=0;const u=Sc(t)/2;for(let r=0;r<t.length-1;r++){const n=t[r],i=t[r+1],a=n.dist(i);if(l+a>u){const c=(u-l)/a,h=Ze.number(n.x,i.x,c),p=Ze.number(n.y,i.y,c),f=new _c(h,p,i.angleTo(n),r);return f._round(),!s||Ac(t,f,o,s,e)?f:void 0}l+=a;}}function Mc(t,e,r,n,i,a,s,o,l){const u=kc(n,a,s),c=Ic(n,i),h=c*s,p=0===t[0].x||t[0].x===l||0===t[0].y||t[0].y===l;return e-h<e/4&&(e=h+e/4),Cc(t,p?e/2*o%e:(c/2+2*a)*s*o%e,e,u,r,h,p,!1,l)}function Cc(t,e,r,n,i,a,s,o,l){const u=a/2,c=Sc(t);let h=0,p=e-r,f=[];for(let e=0;e<t.length-1;e++){const s=t[e],o=t[e+1],d=s.dist(o),y=o.angleTo(s);for(;p+r<h+d;){p+=r;const m=(p-h)/d,g=Ze.number(s.x,o.x,m),x=Ze.number(s.y,o.y,m);if(g>=0&&g<l&&x>=0&&x<l&&p-u>=0&&p+u<=c){const r=new _c(g,x,y,e);r._round(),n&&!Ac(t,r,a,n,i)||f.push(r);}}h+=d;}return o||f.length||s||(f=Cc(t,h/2,r,n,i,a,s,!0,l)),f}$n("Anchor",_c);const Bc=lu;function Pc(t,e,r,n){const i=[],s=t.image,o=s.pixelRatio,l=s.paddedRect.w-2*Bc,u=s.paddedRect.h-2*Bc,c=t.right-t.left,h=t.bottom-t.top,p=s.stretchX||[[0,l]],f=s.stretchY||[[0,u]],d=(t,e)=>t+e[1]-e[0],y=p.reduce(d,0),m=f.reduce(d,0),g=l-y,x=u-m;let v=0,b=y,w=0,_=m,A=0,S=g,k=0,I=x;if(s.content&&n){const t=s.content;v=Vc(p,0,t[0]),w=Vc(f,0,t[1]),b=Vc(p,t[0],t[2]),_=Vc(f,t[1],t[3]),A=t[0]-v,k=t[1]-w,S=t[2]-t[0]-b,I=t[3]-t[1]-_;}const z=(n,i,l,u)=>{const p=Fc(n.stretch-v,b,c,t.left),f=Tc(n.fixed-A,S,n.stretch,y),d=Fc(i.stretch-w,_,h,t.top),g=Tc(i.fixed-k,I,i.stretch,m),x=Fc(l.stretch-v,b,c,t.left),z=Tc(l.fixed-A,S,l.stretch,y),M=Fc(u.stretch-w,_,h,t.top),C=Tc(u.fixed-k,I,u.stretch,m),B=new a(p,d),P=new a(x,d),V=new a(x,M),E=new a(p,M),F=new a(f/o,g/o),T=new a(z/o,C/o),$=e*Math.PI/180;if($){const t=Math.sin($),e=Math.cos($),r=[e,-t,t,e];B._matMult(r),P._matMult(r),E._matMult(r),V._matMult(r);}const L=n.stretch+n.fixed,D=i.stretch+i.fixed;return {tl:B,tr:P,bl:E,br:V,tex:{x:s.paddedRect.x+Bc+L,y:s.paddedRect.y+Bc+D,w:l.stretch+l.fixed-L,h:u.stretch+u.fixed-D},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:F,pixelOffsetBR:T,minFontScaleX:S/o/c,minFontScaleY:I/o/h,isSDF:r}};if(n&&(s.stretchX||s.stretchY)){const t=Ec(p,g,y),e=Ec(f,x,m);for(let r=0;r<t.length-1;r++){const n=t[r],a=t[r+1];for(let t=0;t<e.length-1;t++)i.push(z(n,e[t],a,e[t+1]));}}else i.push(z({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:l+1},{fixed:0,stretch:u+1}));return i}function Vc(t,e,r){let n=0;for(const i of t)n+=Math.max(e,Math.min(r,i[1]))-Math.max(e,Math.min(r,i[0]));return n}function Ec(t,e,r){const n=[{fixed:-Bc,stretch:0}];for(const[e,r]of t){const t=n[n.length-1];n.push({fixed:e-t.stretch,stretch:t.stretch}),n.push({fixed:e-t.stretch,stretch:t.stretch+(r-e)});}return n.push({fixed:e+Bc,stretch:r}),n}function Fc(t,e,r,n){return t/e*r+n}function Tc(t,e,r,n){return t-e*r/n}class $c{constructor(t,e,r,n,i,s,o,l,u,c){if(this.boxStartIndex=t.length,u){let t=s.top,e=s.bottom;const r=s.collisionPadding;r&&(t-=r[1],e+=r[3]);let n=e-t;n>0&&(n=Math.max(10,n),this.circleDiameter=n);}else {let u=s.top*o-l[0],h=s.bottom*o+l[2],p=s.left*o-l[3],f=s.right*o+l[1];const d=s.collisionPadding;if(d&&(p-=d[0]*o,u-=d[1]*o,f+=d[2]*o,h+=d[3]*o),c){const t=new a(p,u),e=new a(f,u),r=new a(p,h),n=new a(f,h),i=c*Math.PI/180;t._rotate(i),e._rotate(i),r._rotate(i),n._rotate(i),p=Math.min(t.x,e.x,r.x,n.x),f=Math.max(t.x,e.x,r.x,n.x),u=Math.min(t.y,e.y,r.y,n.y),h=Math.max(t.y,e.y,r.y,n.y);}t.emplaceBack(e.x,e.y,p,u,f,h,r,n,i);}this.boxEndIndex=t.length;}}class Lc{constructor(t=[],e=Dc){if(this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(let t=(this.length>>1)-1;t>=0;t--)this._down(t);}push(t){this.data.push(t),this.length++,this._up(this.length-1);}pop(){if(0===this.length)return;const t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:e,compare:r}=this,n=e[t];for(;t>0;){const i=t-1>>1,a=e[i];if(r(n,a)>=0)break;e[t]=a,t=i;}e[t]=n;}_down(t){const{data:e,compare:r}=this,n=this.length>>1,i=e[t];for(;t<n;){let n=1+(t<<1),a=e[n];const s=n+1;if(s<this.length&&r(e[s],a)<0&&(n=s,a=e[s]),r(a,i)>=0)break;e[t]=a,t=n;}e[t]=i;}}function Dc(t,e){return t<e?-1:t>e?1:0}function Oc(t,e=1,r=!1){let n=1/0,i=1/0,s=-1/0,o=-1/0;const l=t[0];for(let t=0;t<l.length;t++){const e=l[t];(!t||e.x<n)&&(n=e.x),(!t||e.y<i)&&(i=e.y),(!t||e.x>s)&&(s=e.x),(!t||e.y>o)&&(o=e.y);}const u=Math.min(s-n,o-i);let c=u/2;const h=new Lc([],Uc);if(0===u)return new a(n,i);for(let e=n;e<s;e+=u)for(let r=i;r<o;r+=u)h.push(new Rc(e+c,r+c,c,t));let p=function(t){let e=0,r=0,n=0;const i=t[0];for(let t=0,a=i.length,s=a-1;t<a;s=t++){const a=i[t],o=i[s],l=a.x*o.y-o.x*a.y;r+=(a.x+o.x)*l,n+=(a.y+o.y)*l,e+=3*l;}return new Rc(r/e,n/e,0,t)}(t),f=h.length;for(;h.length;){const n=h.pop();(n.d>p.d||!p.d)&&(p=n,r&&console.log("found best %d after %d probes",Math.round(1e4*n.d)/1e4,f)),n.max-p.d<=e||(c=n.h/2,h.push(new Rc(n.p.x-c,n.p.y-c,c,t)),h.push(new Rc(n.p.x+c,n.p.y-c,c,t)),h.push(new Rc(n.p.x-c,n.p.y+c,c,t)),h.push(new Rc(n.p.x+c,n.p.y+c,c,t)),f+=4);}return r&&(console.log(`num probes: ${f}`),console.log(`best distance: ${p.d}`)),p.p}function Uc(t,e){return e.max-t.max}function Rc(t,e,r,n){this.p=new a(t,e),this.h=r,this.d=function(t,e){let r=!1,n=1/0;for(let i=0;i<e.length;i++){const a=e[i];for(let e=0,i=a.length,s=i-1;e<i;s=e++){const i=a[e],o=a[s];i.y>t.y!=o.y>t.y&&t.x<(o.x-i.x)*(t.y-i.y)/(o.y-i.y)+i.x&&(r=!r),n=Math.min(n,ms(t,i,o));}}return (r?1:-1)*Math.sqrt(n)}(this.p,n),this.max=this.d+this.h*Math.SQRT2;}var qc;t.aq=void 0,(qc=t.aq||(t.aq={}))[qc.center=1]="center",qc[qc.left=2]="left",qc[qc.right=3]="right",qc[qc.top=4]="top",qc[qc.bottom=5]="bottom",qc[qc["top-left"]=6]="top-left",qc[qc["top-right"]=7]="top-right",qc[qc["bottom-left"]=8]="bottom-left",qc[qc["bottom-right"]=9]="bottom-right";const jc=7,Nc=Number.POSITIVE_INFINITY;function Zc(t,e){return e[1]!==Nc?function(t,e,r){let n=0,i=0;switch(e=Math.abs(e),r=Math.abs(r),t){case"top-right":case"top-left":case"top":i=r-jc;break;case"bottom-right":case"bottom-left":case"bottom":i=-r+jc;}switch(t){case"top-right":case"bottom-right":case"right":n=-e;break;case"top-left":case"bottom-left":case"left":n=e;}return [n,i]}(t,e[0],e[1]):function(t,e){let r=0,n=0;e<0&&(e=0);const i=e/Math.SQRT2;switch(t){case"top-right":case"top-left":n=i-jc;break;case"bottom-right":case"bottom-left":n=-i+jc;break;case"bottom":n=-e+jc;break;case"top":n=e-jc;}switch(t){case"top-right":case"bottom-right":r=-i;break;case"top-left":case"bottom-left":r=i;break;case"left":r=e;break;case"right":r=-e;}return [r,n]}(t,e[0])}function Kc(t,e,r){var n;const i=t.layout,a=null===(n=i.get("text-variable-anchor-offset"))||void 0===n?void 0:n.evaluate(e,{},r);if(a){const t=a.values,e=[];for(let r=0;r<t.length;r+=2){const n=e[r]=t[r],i=t[r+1].map((t=>t*Vl));n.startsWith("top")?i[1]-=jc:n.startsWith("bottom")&&(i[1]+=jc),e[r+1]=i;}return new re(e)}const s=i.get("text-variable-anchor");if(s){let n;n=void 0!==t._unevaluatedLayout.getValue("text-radial-offset")?[i.get("text-radial-offset").evaluate(e,{},r)*Vl,Nc]:i.get("text-offset").evaluate(e,{},r).map((t=>t*Vl));const a=[];for(const t of s)a.push(t,Zc(t,n));return new re(a)}return null}function Gc(t){switch(t){case"right":case"top-right":case"bottom-right":return "right";case"left":case"top-left":case"bottom-left":return "left"}return "center"}function Jc(e,r,n,i,a,s,o,l,u,c,h){let p=s.textMaxSize.evaluate(r,{});void 0===p&&(p=o);const f=e.layers[0].layout,d=f.get("icon-offset").evaluate(r,{},h),y=Yc(n.horizontal),m=o/24,g=e.tilePixelRatio*m,x=e.tilePixelRatio*p/24,v=e.tilePixelRatio*l,b=e.tilePixelRatio*f.get("symbol-spacing"),w=f.get("text-padding")*e.tilePixelRatio,_=function(t,e,r,n=1){const i=t.get("icon-padding").evaluate(e,{},r),a=i&&i.values;return [a[0]*n,a[1]*n,a[2]*n,a[3]*n]}(f,r,h,e.tilePixelRatio),S=f.get("text-max-angle")/180*Math.PI,k="viewport"!==f.get("text-rotation-alignment")&&"point"!==f.get("symbol-placement"),I="map"===f.get("icon-rotation-alignment")&&"point"!==f.get("symbol-placement"),z=f.get("symbol-placement"),M=b/2,C=f.get("icon-text-fit");let B;i&&"none"!==C&&(e.allowVerticalPlacement&&n.vertical&&(B=zu(i,n.vertical,C,f.get("icon-text-fit-padding"),d,m)),y&&(i=zu(i,y,C,f.get("icon-text-fit-padding"),d,m)));const P=(l,p)=>{p.x<0||p.x>=rs||p.y<0||p.y>=rs||function(e,r,n,i,a,s,o,l,u,c,h,p,f,d,y,m,g,x,v,b,w,_,S,k,I){const z=e.addToLineVertexArray(r,n);let M,C,B,P,V=0,E=0,F=0,T=0,$=-1,L=-1;const D={};let O=$a("");if(e.allowVerticalPlacement&&i.vertical){const t=l.layout.get("text-rotate").evaluate(w,{},k)+90;B=new $c(u,r,c,h,p,i.vertical,f,d,y,t),o&&(P=new $c(u,r,c,h,p,o,g,x,y,t));}if(a){const n=l.layout.get("icon-rotate").evaluate(w,{}),i="none"!==l.layout.get("icon-text-fit"),s=Pc(a,n,S,i),f=o?Pc(o,n,S,i):void 0;C=new $c(u,r,c,h,p,a,g,x,!1,n),V=4*s.length;const d=e.iconSizeData;let y=null;"source"===d.kind?(y=[Cu*l.layout.get("icon-size").evaluate(w,{})],y[0]>Bu&&A(`${e.layerIds[0]}: Value for "icon-size" is >= ${Mu}. Reduce your "icon-size".`)):"composite"===d.kind&&(y=[Cu*_.compositeIconSizes[0].evaluate(w,{},k),Cu*_.compositeIconSizes[1].evaluate(w,{},k)],(y[0]>Bu||y[1]>Bu)&&A(`${e.layerIds[0]}: Value for "icon-size" is >= ${Mu}. Reduce your "icon-size".`)),e.addSymbols(e.icon,s,y,b,v,w,t.ai.none,r,z.lineStartIndex,z.lineLength,-1,k),$=e.icon.placedSymbolArray.length-1,f&&(E=4*f.length,e.addSymbols(e.icon,f,y,b,v,w,t.ai.vertical,r,z.lineStartIndex,z.lineLength,-1,k),L=e.icon.placedSymbolArray.length-1);}const U=Object.keys(i.horizontal);for(const n of U){const a=i.horizontal[n];if(!M){O=$a(a.text);const t=l.layout.get("text-rotate").evaluate(w,{},k);M=new $c(u,r,c,h,p,a,f,d,y,t);}const o=1===a.positionedLines.length;if(F+=Xc(e,r,a,s,l,y,w,m,z,i.vertical?t.ai.horizontal:t.ai.horizontalOnly,o?U:[n],D,$,_,k),o)break}i.vertical&&(T+=Xc(e,r,i.vertical,s,l,y,w,m,z,t.ai.vertical,["vertical"],D,L,_,k));const R=M?M.boxStartIndex:e.collisionBoxArray.length,q=M?M.boxEndIndex:e.collisionBoxArray.length,j=B?B.boxStartIndex:e.collisionBoxArray.length,N=B?B.boxEndIndex:e.collisionBoxArray.length,Z=C?C.boxStartIndex:e.collisionBoxArray.length,K=C?C.boxEndIndex:e.collisionBoxArray.length,G=P?P.boxStartIndex:e.collisionBoxArray.length,J=P?P.boxEndIndex:e.collisionBoxArray.length;let X=-1;const Y=(t,e)=>t&&t.circleDiameter?Math.max(t.circleDiameter,e):e;X=Y(M,X),X=Y(B,X),X=Y(C,X),X=Y(P,X);const H=X>-1?1:0;H&&(X*=I/Vl),e.glyphOffsetArray.length>=Uu.MAX_GLYPHS&&A("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),void 0!==w.sortKey&&e.addToSortKeyRanges(e.symbolInstances.length,w.sortKey);const W=Kc(l,w,k),[Q,tt]=function(e,r){const n=e.length,i=null==r?void 0:r.values;if((null==i?void 0:i.length)>0)for(let r=0;r<i.length;r+=2){const n=i[r+1];e.emplaceBack(t.aq[i[r]],n[0],n[1]);}return [n,e.length]}(e.textAnchorOffsets,W);e.symbolInstances.emplaceBack(r.x,r.y,D.right>=0?D.right:-1,D.center>=0?D.center:-1,D.left>=0?D.left:-1,D.vertical||-1,$,L,O,R,q,j,N,Z,K,G,J,c,F,T,V,E,H,0,f,X,Q,tt);}(e,p,l,n,i,a,B,e.layers[0],e.collisionBoxArray,r.index,r.sourceLayerIndex,e.index,g,[w,w,w,w],k,u,v,_,I,d,r,s,c,h,o);};if("line"===z)for(const t of wc(r.geometry,0,0,rs,rs)){const r=Mc(t,b,S,n.vertical||y,i,24,x,e.overscaling,rs);for(const n of r)y&&Hc(e,y.text,M,n)||P(t,n);}else if("line-center"===z){for(const t of r.geometry)if(t.length>1){const e=zc(t,S,n.vertical||y,i,24,x);e&&P(t,e);}}else if("Polygon"===r.type)for(const t of Co(r.geometry,0)){const e=Oc(t,16);P(t[0],new _c(e.x,e.y,0));}else if("LineString"===r.type)for(const t of r.geometry)P(t,new _c(t[0].x,t[0].y,0));else if("Point"===r.type)for(const t of r.geometry)for(const e of t)P([e],new _c(e.x,e.y,0));}function Xc(t,e,r,n,i,s,o,l,u,c,h,p,f,d,y){const m=function(t,e,r,n,i,s,o,l){const u=n.layout.get("text-rotate").evaluate(s,{})*Math.PI/180,c=[];for(const t of e.positionedLines)for(const n of t.positionedGlyphs){if(!n.rect)continue;const s=n.rect||{};let h=su+1,p=!0,f=1,d=0;const y=(i||l)&&n.vertical,m=n.metrics.advance*n.scale/2;if(l&&e.verticalizable&&(d=t.lineOffset/2-(n.imageName?-(Vl-n.metrics.width*n.scale)/2:(n.scale-1)*Vl)),n.imageName){const t=o[n.imageName];p=t.sdf,f=t.pixelRatio,h=lu/f;}const g=i?[n.x+m,n.y]:[0,0];let x=i?[0,0]:[n.x+m+r[0],n.y+r[1]-d],v=[0,0];y&&(v=x,x=[0,0]);const b=n.metrics.isDoubleResolution?2:1,w=(n.metrics.left-h)*n.scale-m+x[0],_=(-n.metrics.top-h)*n.scale+x[1],A=w+s.w/b*n.scale/f,S=_+s.h/b*n.scale/f,k=new a(w,_),I=new a(A,_),z=new a(w,S),M=new a(A,S);if(y){const t=new a(-m,m-pu),e=-Math.PI/2,r=Vl/2-m,i=new a(5-pu-r,-(n.imageName?r:0)),s=new a(...v);k._rotateAround(e,t)._add(i)._add(s),I._rotateAround(e,t)._add(i)._add(s),z._rotateAround(e,t)._add(i)._add(s),M._rotateAround(e,t)._add(i)._add(s);}if(u){const t=Math.sin(u),e=Math.cos(u),r=[e,-t,t,e];k._matMult(r),I._matMult(r),z._matMult(r),M._matMult(r);}const C=new a(0,0),B=new a(0,0);c.push({tl:k,tr:I,bl:z,br:M,tex:s,writingMode:e.writingMode,glyphOffset:g,sectionIndex:n.sectionIndex,isSDF:p,pixelOffsetTL:C,pixelOffsetBR:B,minFontScaleX:0,minFontScaleY:0});}return c}(0,r,l,i,s,o,n,t.allowVerticalPlacement),g=t.textSizeData;let x=null;"source"===g.kind?(x=[Cu*i.layout.get("text-size").evaluate(o,{})],x[0]>Bu&&A(`${t.layerIds[0]}: Value for "text-size" is >= ${Mu}. Reduce your "text-size".`)):"composite"===g.kind&&(x=[Cu*d.compositeTextSizes[0].evaluate(o,{},y),Cu*d.compositeTextSizes[1].evaluate(o,{},y)],(x[0]>Bu||x[1]>Bu)&&A(`${t.layerIds[0]}: Value for "text-size" is >= ${Mu}. Reduce your "text-size".`)),t.addSymbols(t.text,m,x,l,s,o,c,e,u.lineStartIndex,u.lineLength,f,y);for(const e of h)p[e]=t.text.placedSymbolArray.length-1;return 4*m.length}function Yc(t){for(const e in t)return t[e];return null}function Hc(t,e,r,n){const i=t.compareText;if(e in i){const t=i[e];for(let e=t.length-1;e>=0;e--)if(n.dist(t[e])<r)return !0}else i[e]=[];return i[e].push(n),!1}const Wc=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];class Qc{static from(t){if(!(t instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");const[e,r]=new Uint8Array(t,0,2);if(219!==e)throw new Error("Data does not appear to be in a KDBush format.");const n=r>>4;if(1!==n)throw new Error(`Got v${n} data when expected v1.`);const i=Wc[15&r];if(!i)throw new Error("Unrecognized array type.");const[a]=new Uint16Array(t,2,1),[s]=new Uint32Array(t,4,1);return new Qc(s,a,i,t)}constructor(t,e=64,r=Float64Array,n){if(isNaN(t)||t<0)throw new Error(`Unpexpected numItems value: ${t}.`);this.numItems=+t,this.nodeSize=Math.min(Math.max(+e,2),65535),this.ArrayType=r,this.IndexArrayType=t<65536?Uint16Array:Uint32Array;const i=Wc.indexOf(this.ArrayType),a=2*t*this.ArrayType.BYTES_PER_ELEMENT,s=t*this.IndexArrayType.BYTES_PER_ELEMENT,o=(8-s%8)%8;if(i<0)throw new Error(`Unexpected typed array class: ${r}.`);n&&n instanceof ArrayBuffer?(this.data=n,this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+s+o,2*t),this._pos=2*t,this._finished=!0):(this.data=new ArrayBuffer(8+a+s+o),this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+s+o,2*t),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,16+i]),new Uint16Array(this.data,2,1)[0]=e,new Uint32Array(this.data,4,1)[0]=t);}add(t,e){const r=this._pos>>1;return this.ids[r]=r,this.coords[this._pos++]=t,this.coords[this._pos++]=e,r}finish(){const t=this._pos>>1;if(t!==this.numItems)throw new Error(`Added ${t} items when expected ${this.numItems}.`);return th(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(t,e,r,n){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:i,coords:a,nodeSize:s}=this,o=[0,i.length-1,0],l=[];for(;o.length;){const u=o.pop()||0,c=o.pop()||0,h=o.pop()||0;if(c-h<=s){for(let s=h;s<=c;s++){const o=a[2*s],u=a[2*s+1];o>=t&&o<=r&&u>=e&&u<=n&&l.push(i[s]);}continue}const p=h+c>>1,f=a[2*p],d=a[2*p+1];f>=t&&f<=r&&d>=e&&d<=n&&l.push(i[p]),(0===u?t<=f:e<=d)&&(o.push(h),o.push(p-1),o.push(1-u)),(0===u?r>=f:n>=d)&&(o.push(p+1),o.push(c),o.push(1-u));}return l}within(t,e,r){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:n,coords:i,nodeSize:a}=this,s=[0,n.length-1,0],o=[],l=r*r;for(;s.length;){const u=s.pop()||0,c=s.pop()||0,h=s.pop()||0;if(c-h<=a){for(let r=h;r<=c;r++)ih(i[2*r],i[2*r+1],t,e)<=l&&o.push(n[r]);continue}const p=h+c>>1,f=i[2*p],d=i[2*p+1];ih(f,d,t,e)<=l&&o.push(n[p]),(0===u?t-r<=f:e-r<=d)&&(s.push(h),s.push(p-1),s.push(1-u)),(0===u?t+r>=f:e+r>=d)&&(s.push(p+1),s.push(c),s.push(1-u));}return o}}function th(t,e,r,n,i,a){if(i-n<=r)return;const s=n+i>>1;eh(t,e,s,n,i,a),th(t,e,r,n,s-1,1-a),th(t,e,r,s+1,i,1-a);}function eh(t,e,r,n,i,a){for(;i>n;){if(i-n>600){const s=i-n+1,o=r-n+1,l=Math.log(s),u=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*u*(s-u)/s)*(o-s/2<0?-1:1);eh(t,e,r,Math.max(n,Math.floor(r-o*u/s+c)),Math.min(i,Math.floor(r+(s-o)*u/s+c)),a);}const s=e[2*r+a];let o=n,l=i;for(rh(t,e,n,r),e[2*i+a]>s&&rh(t,e,n,i);o<l;){for(rh(t,e,o,l),o++,l--;e[2*o+a]<s;)o++;for(;e[2*l+a]>s;)l--;}e[2*n+a]===s?rh(t,e,n,l):(l++,rh(t,e,l,i)),l<=r&&(n=l+1),r<=l&&(i=l-1);}}function rh(t,e,r,n){nh(t,r,n),nh(e,2*r,2*n),nh(e,2*r+1,2*n+1);}function nh(t,e,r){const n=t[e];t[e]=t[r],t[r]=n;}function ih(t,e,r,n){const i=t-r,a=e-n;return i*i+a*a}var ah;t.bg=void 0,(ah=t.bg||(t.bg={})).create="create",ah.load="load",ah.fullLoad="fullLoad";let sh=null,oh=[];const lh=1e3/60,uh="loadTime",ch="fullLoadTime",hh={mark(t){performance.mark(t);},frame(t){const e=t;null!=sh&&oh.push(e-sh),sh=e;},clearMetrics(){sh=null,oh=[],performance.clearMeasures(uh),performance.clearMeasures(ch);for(const e in t.bg)performance.clearMarks(t.bg[e]);},getPerformanceMetrics(){performance.measure(uh,t.bg.create,t.bg.load),performance.measure(ch,t.bg.create,t.bg.fullLoad);const e=performance.getEntriesByName(uh)[0].duration,r=performance.getEntriesByName(ch)[0].duration,n=oh.length,i=1/(oh.reduce(((t,e)=>t+e),0)/n/1e3),a=oh.filter((t=>t>lh)).reduce(((t,e)=>t+(e-lh)/lh),0);return {loadTime:e,fullLoadTime:r,fps:i,percentDroppedFrames:a/(n+a)*100,totalFrames:n}}};t.$=function(t,e,r){var n,i,a,s,o,l,u,c,h,p,f,d,y=r[0],m=r[1],g=r[2];return e===t?(t[12]=e[0]*y+e[4]*m+e[8]*g+e[12],t[13]=e[1]*y+e[5]*m+e[9]*g+e[13],t[14]=e[2]*y+e[6]*m+e[10]*g+e[14],t[15]=e[3]*y+e[7]*m+e[11]*g+e[15]):(i=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],p=e[9],f=e[10],d=e[11],t[0]=n=e[0],t[1]=i,t[2]=a,t[3]=s,t[4]=o,t[5]=l,t[6]=u,t[7]=c,t[8]=h,t[9]=p,t[10]=f,t[11]=d,t[12]=n*y+o*m+h*g+e[12],t[13]=i*y+l*m+p*g+e[13],t[14]=a*y+u*m+f*g+e[14],t[15]=s*y+c*m+d*g+e[15]),t},t.A=zs,t.B=Ze,t.C=class{constructor(t,e,r){this.receive=t=>{const e=t.data,r=e.id;if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[r];const t=this.cancelCallbacks[r];delete this.cancelCallbacks[r],t&&t();}else I()||e.mustQueue?(this.tasks[r]=e,this.taskQueue.push(r),this.invoker.trigger()):this.processTask(r,e);},this.process=()=>{if(!this.taskQueue.length)return;const t=this.taskQueue.shift(),e=this.tasks[t];delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),e&&this.processTask(t,e);},this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},this.invoker=new Qu(this.process),this.target.addEventListener("message",this.receive,!1),this.globalScope=I()?t:window;}send(t,e,r,n,i=!1){const a=Math.round(1e18*Math.random()).toString(36).substring(0,10);r&&(this.callbacks[a]=r);const s=[],o={id:a,type:t,hasCallback:!!r,targetMapId:n,mustQueue:i,sourceMapId:this.mapId,data:Dn(e,s)};return this.target.postMessage(o,{transfer:s}),{cancel:()=>{r&&delete this.callbacks[a],this.target.postMessage({id:a,type:"<cancel>",targetMapId:n,sourceMapId:this.mapId});}}}processTask(t,e){if("<response>"===e.type){const r=this.callbacks[t];delete this.callbacks[t],r&&(e.error?r(On(e.error)):r(null,On(e.data)));}else {let r=!1;const n=[],i=e.hasCallback?(e,i)=>{r=!0,delete this.cancelCallbacks[t];const a={id:t,type:"<response>",sourceMapId:this.mapId,error:e?Dn(e):null,data:Dn(i,n)};this.target.postMessage(a,{transfer:n});}:t=>{r=!0;};let a=null;const s=On(e.data);if(this.parent[e.type])a=this.parent[e.type](e.sourceMapId,s,i);else if("getWorkerSource"in this.parent){const t=e.type.split(".");a=this.parent.getWorkerSource(e.sourceMapId,t[0],s.source)[t[1]](s,i);}else i(new Error(`Could not find function ${e.type}`));!r&&a&&a.cancel&&(this.cancelCallbacks[t]=a.cancel);}}remove(){this.invoker.remove(),this.target.removeEventListener("message",this.receive,!1);}},t.D=gi,t.E=J,t.F=function(t,e){const r={};for(let n=0;n<e.length;n++){const i=e[n];i in t&&(r[i]=t[i]);}return r},t.G=ic,t.H=ac,t.I=uu,t.J=h,t.K=p,t.L=ec,t.M=B,t.N=rs,t.O=pc,t.P=a,t.Q=Mi,t.R=qs,t.S=za,t.T=hi,t.U=lc,t.V=class extends Vi{},t.W=cc,t.X=function(t,e){const r=window.document.createElement("video");r.muted=!0,r.onloadstart=function(){e(null,r);};for(let e=0;e<t.length;e++){const n=window.document.createElement("source");j(t[e])||(r.crossOrigin="Anonymous"),n.src=t[e],r.appendChild(n);}return {cancel:()=>{}}},t.Y=ot,t.Z=function(){var t=new zs(16);return zs!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t._=e,t.a=M,t.a$=class extends Hi{},t.a0=function(t,e,r){var n=r[0],i=r[1],a=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.a1=Cs,t.a2=function(){return x++},t.a3=ta,t.a4=Uu,t.a5=function(){oi.isLoading()||oi.isLoaded()||"deferred"!==ai()||si();},t.a6=Nr,t.a7=ss,t.a8=li,t.a9=mc,t.aA=ri,t.aB=function(t){t=t.slice();const e=Object.create(null);for(let r=0;r<t.length;r++)e[t[r].id]=t[r];for(let r=0;r<t.length;r++)"ref"in t[r]&&(t[r]=H(t[r],e[t[r].ref]));return t},t.aC=function(t){if("custom"===t.type)return new Wu(t);switch(t.type){case"background":return new Ju(t);case"circle":return new Es(t);case"fill":return new Lo(t);case"fill-extrusion":return new ol(t);case"heatmap":return new Ns(t);case"hillshade":return new Gs(t);case"line":return new Al(t);case"raster":return new Hu(t);case"symbol":return new Zu(t)}},t.aD=w,t.aE=function(t,e){if(!t)return [{command:Q.setStyle,args:[e]}];let r=[];try{if(!W(t.version,e.version))return [{command:Q.setStyle,args:[e]}];W(t.center,e.center)||r.push({command:Q.setCenter,args:[e.center]}),W(t.zoom,e.zoom)||r.push({command:Q.setZoom,args:[e.zoom]}),W(t.bearing,e.bearing)||r.push({command:Q.setBearing,args:[e.bearing]}),W(t.pitch,e.pitch)||r.push({command:Q.setPitch,args:[e.pitch]}),W(t.sprite,e.sprite)||r.push({command:Q.setSprite,args:[e.sprite]}),W(t.glyphs,e.glyphs)||r.push({command:Q.setGlyphs,args:[e.glyphs]}),W(t.transition,e.transition)||r.push({command:Q.setTransition,args:[e.transition]}),W(t.light,e.light)||r.push({command:Q.setLight,args:[e.light]});const n={},i=[];!function(t,e,r,n){let i;for(i in e=e||{},t=t||{})Object.prototype.hasOwnProperty.call(t,i)&&(Object.prototype.hasOwnProperty.call(e,i)||et(i,r,n));for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(Object.prototype.hasOwnProperty.call(t,i)?W(t[i],e[i])||("geojson"===t[i].type&&"geojson"===e[i].type&&nt(t,e,i)?r.push({command:Q.setGeoJSONSourceData,args:[i,e[i].data]}):rt(i,e,r,n)):tt(i,e,r));}(t.sources,e.sources,i,n);const a=[];t.layers&&t.layers.forEach((t=>{n[t.source]?r.push({command:Q.removeLayer,args:[t.id]}):a.push(t);})),r=r.concat(i),function(t,e,r){e=e||[];const n=(t=t||[]).map(at),i=e.map(at),a=t.reduce(st,{}),s=e.reduce(st,{}),o=n.slice(),l=Object.create(null);let u,c,h,p,f,d,y;for(u=0,c=0;u<n.length;u++)h=n[u],Object.prototype.hasOwnProperty.call(s,h)?c++:(r.push({command:Q.removeLayer,args:[h]}),o.splice(o.indexOf(h,c),1));for(u=0,c=0;u<i.length;u++)h=i[i.length-1-u],o[o.length-1-u]!==h&&(Object.prototype.hasOwnProperty.call(a,h)?(r.push({command:Q.removeLayer,args:[h]}),o.splice(o.lastIndexOf(h,o.length-c),1)):c++,d=o[o.length-u],r.push({command:Q.addLayer,args:[s[h],d]}),o.splice(o.length-u,0,h),l[h]=!0);for(u=0;u<i.length;u++)if(h=i[u],p=a[h],f=s[h],!l[h]&&!W(p,f))if(W(p.source,f.source)&&W(p["source-layer"],f["source-layer"])&&W(p.type,f.type)){for(y in it(p.layout,f.layout,r,h,null,Q.setLayoutProperty),it(p.paint,f.paint,r,h,null,Q.setPaintProperty),W(p.filter,f.filter)||r.push({command:Q.setFilter,args:[h,f.filter]}),W(p.minzoom,f.minzoom)&&W(p.maxzoom,f.maxzoom)||r.push({command:Q.setLayerZoomRange,args:[h,f.minzoom,f.maxzoom]}),p)Object.prototype.hasOwnProperty.call(p,y)&&"layout"!==y&&"paint"!==y&&"filter"!==y&&"metadata"!==y&&"minzoom"!==y&&"maxzoom"!==y&&(0===y.indexOf("paint.")?it(p[y],f[y],r,h,y.slice(6),Q.setPaintProperty):W(p[y],f[y])||r.push({command:Q.setLayerProperty,args:[h,y,f[y]]}));for(y in f)Object.prototype.hasOwnProperty.call(f,y)&&!Object.prototype.hasOwnProperty.call(p,y)&&"layout"!==y&&"paint"!==y&&"filter"!==y&&"metadata"!==y&&"minzoom"!==y&&"maxzoom"!==y&&(0===y.indexOf("paint.")?it(p[y],f[y],r,h,y.slice(6),Q.setPaintProperty):W(p[y],f[y])||r.push({command:Q.setLayerProperty,args:[h,y,f[y]]}));}else r.push({command:Q.removeLayer,args:[h]}),d=o[o.lastIndexOf(h)+1],r.push({command:Q.addLayer,args:[f,d]});}(a,e.layers,r);}catch(t){console.warn("Unable to compute style diff:",t),r=[{command:Q.setStyle,args:[e]}];}return r},t.aF=function(t){const e=[],r=t.id;return void 0===r&&e.push({message:`layers.${r}: missing required property "id"`}),void 0===t.render&&e.push({message:`layers.${r}: missing required method "render"`}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:`layers.${r}: property "renderingMode" must be either "2d" or "3d"`}),e},t.aG=function t(e,r){if(Array.isArray(e)){if(!Array.isArray(r)||e.length!==r.length)return !1;for(let n=0;n<e.length;n++)if(!t(e[n],r[n]))return !1;return !0}if("object"==typeof e&&null!==e&&null!==r){if("object"!=typeof r)return !1;if(Object.keys(e).length!==Object.keys(r).length)return !1;for(const n in e)if(!t(e[n],r[n]))return !1;return !0}return e===r},t.aH=v,t.aI=b,t.aJ=ii,t.aK=function(t){return t({pluginStatus:ti,pluginURL:ei}),ii.on("pluginStateChange",t),t},t.aL=class extends Ra{constructor(t,e){super(t,e),this.current=0;}set(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t));}},t.aM=qa,t.aN=class extends Ra{constructor(t,e){super(t,e),this.current=Za;}set(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t);for(let e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t);break}}},t.aO=ja,t.aP=class extends Ra{constructor(t,e){super(t,e),this.current=[0,0,0];}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]));}},t.aQ=class extends Ra{constructor(t,e){super(t,e),this.current=[0,0];}set(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]));}},t.aR=Na,t.aS=function(t,e,r,n,i,a,s){var o=1/(e-r),l=1/(n-i),u=1/(a-s);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+r)*o,t[13]=(i+n)*l,t[14]=(s+a)*u,t[15]=1,t},t.aT=Yt,t.aU=Ps,t.aV=class extends qi{},t.aW=Cl,t.aX=class extends Ni{},t.aY=function(t){return t<=1?1:Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},t.aZ=js,t.a_=ha,t.aa=function(t){const e={};if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,((t,r,n,i)=>{const a=n||i;return e[r]=!a||a.toLowerCase(),""})),e["max-age"]){const t=parseInt(e["max-age"],10);isNaN(t)?delete e["max-age"]:e["max-age"]=t;}return e},t.ab=function(t,e){const r=[];for(const n in t)n in e||r.push(n);return r},t.ac=function(t){if(null==z){const e=t.navigator?t.navigator.userAgent:null;z=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")));}return z},t.ad=y,t.ae=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],s=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],p=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i+u*n,t[1]=s*i+c*n,t[2]=o*i+h*n,t[3]=l*i+p*n,t[4]=u*i-a*n,t[5]=c*i-s*n,t[6]=h*i-o*n,t[7]=p*i-l*n,t},t.af=function(t){var e=new zs(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.ag=Vs,t.ah=function(t,e){let r=0,n=0;if("constant"===t.kind)n=t.layoutSize;else if("source"!==t.kind){const{interpolationType:i,minZoom:a,maxZoom:s}=t,o=i?y(Ke.interpolationFactor(i,e,a,s),0,1):0;"camera"===t.kind?n=Ze.number(t.minSize,t.maxSize,o):r=o;}return {uSizeT:r,uSize:n}},t.aj=function(t,{uSize:e,uSizeT:r},{lowerSize:n,upperSize:i}){return "source"===t.kind?n/Cu:"composite"===t.kind?Ze.number(n/Cu,i/Cu,r):e},t.ak=$u,t.al=function(t,e,r,n){const i=e.y-t.y,s=e.x-t.x,o=n.y-r.y,l=n.x-r.x,u=o*s-l*i;if(0===u)return null;const c=(l*(t.y-r.y)-o*(t.x-r.x))/u;return new a(t.x+c*s,t.y+c*i)},t.am=wc,t.an=us,t.ao=Ms,t.ap=Vl,t.ar=Vu,t.as=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],p=e[10],f=e[11],d=e[12],y=e[13],m=e[14],g=e[15],x=r*o-n*s,v=r*l-i*s,b=r*u-a*s,w=n*l-i*o,_=n*u-a*o,A=i*u-a*l,S=c*y-h*d,k=c*m-p*d,I=c*g-f*d,z=h*m-p*y,M=h*g-f*y,C=p*g-f*m,B=x*C-v*M+b*z+w*I-_*k+A*S;return B?(t[0]=(o*C-l*M+u*z)*(B=1/B),t[1]=(i*M-n*C-a*z)*B,t[2]=(y*A-m*_+g*w)*B,t[3]=(p*_-h*A-f*w)*B,t[4]=(l*I-s*C-u*k)*B,t[5]=(r*C-i*I+a*k)*B,t[6]=(m*b-d*A-g*v)*B,t[7]=(c*A-p*b+f*v)*B,t[8]=(s*M-o*I+u*S)*B,t[9]=(n*I-r*M-a*S)*B,t[10]=(d*_-y*b+g*x)*B,t[11]=(h*b-c*_-f*x)*B,t[12]=(o*k-s*z-l*S)*B,t[13]=(r*z-n*k+i*S)*B,t[14]=(y*v-d*w-m*x)*B,t[15]=(c*w-h*v+p*x)*B,t):null},t.at=Gc,t.au=Su,t.av=Qc,t.aw=function(){const t={},e=X.$version;for(const r in X.$root){const n=X.$root[r];if(n.required){let i=null;i="version"===r?e:"array"===n.type?[]:{},null!=i&&(t[r]=i);}}return t},t.ax=Q,t.ay=Un,t.az=D,t.b=function(t,e){const r=new Blob([new Uint8Array(t)],{type:"image/png"});createImageBitmap(r).then((t=>{e(null,t);})).catch((t=>{e(new Error(`Could not load image because of ${t.message}. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.`));}));},t.b0=Aa,t.b1=function(t,e){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=t[9],p=t[10],f=t[11],d=t[12],y=t[13],m=t[14],g=t[15],x=e[0],v=e[1],b=e[2],w=e[3],_=e[4],A=e[5],S=e[6],k=e[7],I=e[8],z=e[9],M=e[10],C=e[11],B=e[12],P=e[13],V=e[14],E=e[15];return Math.abs(r-x)<=Is*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(n-v)<=Is*Math.max(1,Math.abs(n),Math.abs(v))&&Math.abs(i-b)<=Is*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(a-w)<=Is*Math.max(1,Math.abs(a),Math.abs(w))&&Math.abs(s-_)<=Is*Math.max(1,Math.abs(s),Math.abs(_))&&Math.abs(o-A)<=Is*Math.max(1,Math.abs(o),Math.abs(A))&&Math.abs(l-S)<=Is*Math.max(1,Math.abs(l),Math.abs(S))&&Math.abs(u-k)<=Is*Math.max(1,Math.abs(u),Math.abs(k))&&Math.abs(c-I)<=Is*Math.max(1,Math.abs(c),Math.abs(I))&&Math.abs(h-z)<=Is*Math.max(1,Math.abs(h),Math.abs(z))&&Math.abs(p-M)<=Is*Math.max(1,Math.abs(p),Math.abs(M))&&Math.abs(f-C)<=Is*Math.max(1,Math.abs(f),Math.abs(C))&&Math.abs(d-B)<=Is*Math.max(1,Math.abs(d),Math.abs(B))&&Math.abs(y-P)<=Is*Math.max(1,Math.abs(y),Math.abs(P))&&Math.abs(m-V)<=Is*Math.max(1,Math.abs(m),Math.abs(V))&&Math.abs(g-E)<=Is*Math.max(1,Math.abs(g),Math.abs(E))},t.b2=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.b3=function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t},t.b4=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},t.b5=m,t.b6=hc,t.b7=sc,t.b8=function(t,e,r,n,i){var a,s=1/Math.tan(e/2);return t[0]=s/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(t[10]=(i+n)*(a=1/(n-i)),t[14]=2*i*n*a):(t[10]=-1,t[14]=-2*n),t},t.b9=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[4],s=e[5],o=e[6],l=e[7],u=e[8],c=e[9],h=e[10],p=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*i+u*n,t[5]=s*i+c*n,t[6]=o*i+h*n,t[7]=l*i+p*n,t[8]=u*i-a*n,t[9]=c*i-s*n,t[10]=h*i-o*n,t[11]=p*i-l*n,t},t.bA=El,t.bB=$r,t.bC=oi,t.ba=f,t.bb=d,t.bc=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.bd=class extends Pi{},t.be=tc,t.bf=hh,t.bh=L,t.bi=function(t,e,r=!1){if(ti===Yn||ti===Hn||ti===Wn)throw new Error("setRTLTextPlugin cannot be called multiple times.");ei=T.resolveURL(t),ti=Yn,Qn=e,ni(),r||si();},t.bj=ai,t.bk=function(t,e){const r={};for(let n=0;n<t.length;n++){const i=e&&e[t[n].id]||Qr(t[n]);e&&(e[t[n].id]=i);let a=r[i];a||(a=r[i]=[]),a.push(t[n]);}const n=[];for(const t in r)n.push(r[t]);return n},t.bl=$n,t.bm=yc,t.bn=gc,t.bo=cu,t.bp=function(e){e.bucket.createArrays(),e.bucket.tilePixelRatio=rs/(512*e.bucket.overscaling),e.bucket.compareText={},e.bucket.iconsNeedLinear=!1;const r=e.bucket.layers[0],n=r.layout,i=r._unevaluatedLayout._values,a={layoutIconSize:i["icon-size"].possiblyEvaluate(new li(e.bucket.zoom+1),e.canonical),layoutTextSize:i["text-size"].possiblyEvaluate(new li(e.bucket.zoom+1),e.canonical),textMaxSize:i["text-size"].possiblyEvaluate(new li(18))};if("composite"===e.bucket.textSizeData.kind){const{minZoom:t,maxZoom:r}=e.bucket.textSizeData;a.compositeTextSizes=[i["text-size"].possiblyEvaluate(new li(t),e.canonical),i["text-size"].possiblyEvaluate(new li(r),e.canonical)];}if("composite"===e.bucket.iconSizeData.kind){const{minZoom:t,maxZoom:r}=e.bucket.iconSizeData;a.compositeIconSizes=[i["icon-size"].possiblyEvaluate(new li(t),e.canonical),i["icon-size"].possiblyEvaluate(new li(r),e.canonical)];}const s=n.get("text-line-height")*Vl,o="viewport"!==n.get("text-rotation-alignment")&&"point"!==n.get("symbol-placement"),l=n.get("text-keep-upright"),u=n.get("text-size");for(const i of e.bucket.features){const c=n.get("text-font").evaluate(i,{},e.canonical).join(","),h=u.evaluate(i,{},e.canonical),p=a.layoutTextSize.evaluate(i,{},e.canonical),f=a.layoutIconSize.evaluate(i,{},e.canonical),d={horizontal:{},vertical:void 0},y=i.text;let m,g=[0,0];if(y){const a=y.toString(),u=n.get("text-letter-spacing").evaluate(i,{},e.canonical)*Vl,f=jn(a)?u:0,m=n.get("text-anchor").evaluate(i,{},e.canonical),x=Kc(r,i,e.canonical);if(!x){const t=n.get("text-radial-offset").evaluate(i,{},e.canonical);g=t?Zc(m,[t*Vl,Nc]):n.get("text-offset").evaluate(i,{},e.canonical).map((t=>t*Vl));}let v=o?"center":n.get("text-justify").evaluate(i,{},e.canonical);const b=n.get("symbol-placement"),w="point"===b?n.get("text-max-width").evaluate(i,{},e.canonical)*Vl:0,_=()=>{e.bucket.allowVerticalPlacement&&qn(a)&&(d.vertical=yu(y,e.glyphMap,e.glyphPositions,e.imagePositions,c,w,s,m,"left",f,g,t.ai.vertical,!0,b,p,h));};if(!o&&x){const r=new Set;if("auto"===v)for(let t=0;t<x.values.length;t+=2)r.add(Gc(x.values[t]));else r.add(v);let n=!1;for(const i of r)if(!d.horizontal[i])if(n)d.horizontal[i]=d.horizontal[0];else {const r=yu(y,e.glyphMap,e.glyphPositions,e.imagePositions,c,w,s,"center",i,f,g,t.ai.horizontal,!1,b,p,h);r&&(d.horizontal[i]=r,n=1===r.positionedLines.length);}_();}else {"auto"===v&&(v=Gc(m));const r=yu(y,e.glyphMap,e.glyphPositions,e.imagePositions,c,w,s,m,v,f,g,t.ai.horizontal,!1,b,p,h);r&&(d.horizontal[v]=r),_(),qn(a)&&o&&l&&(d.vertical=yu(y,e.glyphMap,e.glyphPositions,e.imagePositions,c,w,s,m,v,f,g,t.ai.vertical,!1,b,p,h));}}let x=!1;if(i.icon&&i.icon.name){const t=e.imageMap[i.icon.name];t&&(m=Iu(e.imagePositions[i.icon.name],n.get("icon-offset").evaluate(i,{},e.canonical),n.get("icon-anchor").evaluate(i,{},e.canonical)),x=!!t.sdf,void 0===e.bucket.sdfIcons?e.bucket.sdfIcons=x:e.bucket.sdfIcons!==x&&A("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),(t.pixelRatio!==e.bucket.pixelRatio||0!==n.get("icon-rotate").constantOr(1))&&(e.bucket.iconsNeedLinear=!0));}const v=Yc(d.horizontal)||d.vertical;e.bucket.iconsInText=!!v&&v.iconsInText,(v||m)&&Jc(e.bucket,i,d,m,e.imageMap,a,p,f,g,x,e.canonical);}e.showCollisionBoxes&&e.bucket.generateCollisionDebugBuffers();},t.bq=gl,t.br=Eo,t.bs=rl,t.bt=class{constructor(t){this._marks={start:[t.url,"start"].join("#"),end:[t.url,"end"].join("#"),measure:t.url.toString()},performance.mark(this._marks.start);}finish(){performance.mark(this._marks.end);let t=performance.getEntriesByName(this._marks.measure);return 0===t.length&&(performance.measure(this._marks.measure,this._marks.start,this._marks.end),t=performance.getEntriesByName(this._marks.measure),performance.clearMarks(this._marks.start),performance.clearMarks(this._marks.end),performance.clearMeasures(this._marks.measure)),t}},t.bu=eu,t.bv=Ro,t.bw=function(t,r,n,i,a){return e(this,void 0,void 0,(function*(){if(p())try{return yield B(t,r,n,i,a)}catch(t){}return function(t,e,r,n,i){const a=t.width,s=t.height;P&&V||(P=new OffscreenCanvas(a,s),V=P.getContext("2d",{willReadFrequently:!0})),P.width=a,P.height=s,V.drawImage(t,0,0,a,s);const o=V.getImageData(e,r,n,i);return V.clearRect(0,0,a,s),o.data}(t,r,n,i,a)}))},t.bx=dc,t.by=r,t.bz=n,t.c=$,t.d=function(t,e){const r=new Image;r.onload=()=>{e(null,r),URL.revokeObjectURL(r.src),r.onload=null,window.requestAnimationFrame((()=>{r.src=C;}));},r.onerror=()=>e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."));const n=new Blob([new Uint8Array(t)],{type:"image/png"});r.src=t.byteLength?URL.createObjectURL(n):C;},t.e=g,t.f=function(t,e){return R(g(t,{type:"json"}),e)},t.g=O,t.h=T,t.i=I,t.j=G,t.k=K,t.l=q,t.m=R,t.n=function(t){return new eu(t).readFields(nu,[])},t.o=function(t,e,r){if(!t.length)return r(null,[]);let n=t.length;const i=new Array(t.length);let a=null;t.forEach(((t,s)=>{e(t,((t,e)=>{t&&(a=t),i[s]=e,0==--n&&r(a,i);}));}));},t.p=ou,t.q=Rs,t.r=_i,t.s=j,t.t=Bn,t.u=Rn,t.v=X,t.w=A,t.x=En,t.y=Cn,t.z=function([t,e,r]){return e+=90,e*=Math.PI/180,r*=Math.PI/180,{x:t*Math.cos(e)*Math.sin(r),y:t*Math.sin(e)*Math.sin(r),z:t*Math.cos(r)}};}));

		define(["./shared"],(function(e){class t{constructor(e){this.keyCache={},e&&this.replace(e);}replace(e){this._layerConfigs={},this._layers={},this.update(e,[]);}update(t,i){for(const i of t){this._layerConfigs[i.id]=i;const t=this._layers[i.id]=e.aC(i);t._featureFilter=e.a6(t.filter),this.keyCache[i.id]&&delete this.keyCache[i.id];}for(const e of i)delete this.keyCache[e],delete this._layerConfigs[e],delete this._layers[e];this.familiesBySource={};const o=e.bk(Object.values(this._layerConfigs),this.keyCache);for(const e of o){const t=e.map((e=>this._layers[e.id])),i=t[0];if("none"===i.visibility)continue;const o=i.source||"";let r=this.familiesBySource[o];r||(r=this.familiesBySource[o]={});const s=i.sourceLayer||"_geojsonTileLayer";let n=r[s];n||(n=r[s]=[]),n.push(t);}}}class i{constructor(t){const i={},o=[];for(const e in t){const r=t[e],s=i[e]={};for(const e in r){const t=r[+e];if(!t||0===t.bitmap.width||0===t.bitmap.height)continue;const i={x:0,y:0,w:t.bitmap.width+2,h:t.bitmap.height+2};o.push(i),s[e]={rect:i,metrics:t.metrics};}}const{w:r,h:s}=e.p(o),n=new e.q({width:r||1,height:s||1});for(const o in t){const r=t[o];for(const t in r){const s=r[+t];if(!s||0===s.bitmap.width||0===s.bitmap.height)continue;const a=i[o][t].rect;e.q.copy(s.bitmap,n,{x:0,y:0},{x:a.x+1,y:a.y+1},s.bitmap);}}this.image=n,this.positions=i;}}e.bl("GlyphAtlas",i);class o{constructor(t){this.tileID=new e.O(t.tileID.overscaledZ,t.tileID.wrap,t.tileID.canonical.z,t.tileID.canonical.x,t.tileID.canonical.y),this.uid=t.uid,this.zoom=t.zoom,this.pixelRatio=t.pixelRatio,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=t.showCollisionBoxes,this.collectResourceTiming=!!t.collectResourceTiming,this.returnDependencies=!!t.returnDependencies,this.promoteId=t.promoteId,this.inFlightDependencies=[],this.dependencySentinel=-1;}parse(t,o,s,n,a){this.status="parsing",this.data=t,this.collisionBoxArray=new e.a3;const l=new e.bm(Object.keys(t.layers).sort()),c=new e.bn(this.tileID,this.promoteId);c.bucketLayerIDs=[];const h={},u={featureIndex:c,iconDependencies:{},patternDependencies:{},glyphDependencies:{},availableImages:s},d=o.familiesBySource[this.source];for(const i in d){const o=t.layers[i];if(!o)continue;1===o.version&&e.w(`Vector tile source "${this.source}" layer "${i}" does not use vector tile spec v2 and therefore may have some rendering errors.`);const n=l.encode(i),a=[];for(let e=0;e<o.length;e++){const t=o.feature(e),r=c.getId(t,i);a.push({feature:t,id:r,index:e,sourceLayerIndex:n});}for(const t of d[i]){const i=t[0];i.source!==this.source&&e.w(`layer.source = ${i.source} does not equal this.source = ${this.source}`),i.minzoom&&this.zoom<Math.floor(i.minzoom)||i.maxzoom&&this.zoom>=i.maxzoom||"none"!==i.visibility&&(r(t,this.zoom,s),(h[i.id]=i.createBucket({index:c.bucketLayerIDs.length,layers:t,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:n,sourceID:this.source})).populate(a,u,this.tileID.canonical),c.bucketLayerIDs.push(t.map((e=>e.id))));}}let p,f,g,m;const y=e.aH(u.glyphDependencies,(e=>Object.keys(e).map(Number)));this.inFlightDependencies.forEach((e=>null==e?void 0:e.cancel())),this.inFlightDependencies=[];const v=++this.dependencySentinel;Object.keys(y).length?this.inFlightDependencies.push(n.send("getGlyphs",{uid:this.uid,stacks:y,source:this.source,tileID:this.tileID,type:"glyphs"},((e,t)=>{v===this.dependencySentinel&&(p||(p=e,f=t,b.call(this)));}))):f={};const w=Object.keys(u.iconDependencies);w.length?this.inFlightDependencies.push(n.send("getImages",{icons:w,source:this.source,tileID:this.tileID,type:"icons"},((e,t)=>{v===this.dependencySentinel&&(p||(p=e,g=t,b.call(this)));}))):g={};const x=Object.keys(u.patternDependencies);function b(){if(p)return a(p);if(f&&g&&m){const t=new i(f),o=new e.bo(g,m);for(const i in h){const n=h[i];n instanceof e.a4?(r(n.layers,this.zoom,s),e.bp({bucket:n,glyphMap:f,glyphPositions:t.positions,imageMap:g,imagePositions:o.iconPositions,showCollisionBoxes:this.showCollisionBoxes,canonical:this.tileID.canonical})):n.hasPattern&&(n instanceof e.bq||n instanceof e.br||n instanceof e.bs)&&(r(n.layers,this.zoom,s),n.addFeatures(u,this.tileID.canonical,o.patternPositions));}this.status="done",a(null,{buckets:Object.values(h).filter((e=>!e.isEmpty())),featureIndex:c,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:t.image,imageAtlas:o,glyphMap:this.returnDependencies?f:null,iconMap:this.returnDependencies?g:null,glyphPositions:this.returnDependencies?t.positions:null});}}x.length?this.inFlightDependencies.push(n.send("getImages",{icons:x,source:this.source,tileID:this.tileID,type:"patterns"},((e,t)=>{v===this.dependencySentinel&&(p||(p=e,m=t,b.call(this)));}))):m={},b.call(this);}}function r(t,i,o){const r=new e.a8(i);for(const e of t)e.recalculate(r,o);}function s(t,i){const o=e.l(t.request,((o,r,s,n)=>{if(o)i(o);else if(r)try{const t=new e.bv.VectorTile(new e.bu(r));i(null,{vectorTile:t,rawData:r,cacheControl:s,expires:n});}catch(e){const o=new Uint8Array(r);let s=`Unable to parse the tile at ${t.request.url}, `;s+=31===o[0]&&139===o[1]?"please make sure the data is not gzipped and that you have configured the relevant header in the server":`got error: ${e.messge}`,i(new Error(s));}}));return ()=>{o.cancel(),i();}}class n{constructor(e,t,i,o){this.actor=e,this.layerIndex=t,this.availableImages=i,this.loadVectorData=o||s,this.fetching={},this.loading={},this.loaded={};}loadTile(t,i){const r=t.uid;this.loading||(this.loading={});const s=!!(t&&t.request&&t.request.collectResourceTiming)&&new e.bt(t.request),n=this.loading[r]=new o(t);n.abort=this.loadVectorData(t,((t,o)=>{if(delete this.loading[r],t||!o)return n.status="done",this.loaded[r]=n,i(t);const a=o.rawData,l={};o.expires&&(l.expires=o.expires),o.cacheControl&&(l.cacheControl=o.cacheControl);const c={};if(s){const e=s.finish();e&&(c.resourceTiming=JSON.parse(JSON.stringify(e)));}n.vectorTile=o.vectorTile,n.parse(o.vectorTile,this.layerIndex,this.availableImages,this.actor,((t,o)=>{if(delete this.fetching[r],t||!o)return i(t);i(null,e.e({rawTileData:a.slice(0)},o,l,c));})),this.loaded=this.loaded||{},this.loaded[r]=n,this.fetching[r]={rawTileData:a,cacheControl:l,resourceTiming:c};}));}reloadTile(t,i){const o=this.loaded,r=t.uid;if(o&&o[r]){const s=o[r];s.showCollisionBoxes=t.showCollisionBoxes,"parsing"===s.status?s.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,((t,o)=>{if(t||!o)return i(t,o);let s;if(this.fetching[r]){const{rawTileData:t,cacheControl:i,resourceTiming:n}=this.fetching[r];delete this.fetching[r],s=e.e({rawTileData:t.slice(0)},o,i,n);}else s=o;i(null,s);})):"done"===s.status&&(s.vectorTile?s.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,i):i());}}abortTile(e,t){const i=this.loading,o=e.uid;i&&i[o]&&i[o].abort&&(i[o].abort(),delete i[o]),t();}removeTile(e,t){const i=this.loaded,o=e.uid;i&&i[o]&&delete i[o],t();}}class a{constructor(){this.loaded={};}loadTile(t,i){return e._(this,void 0,void 0,(function*(){const{uid:o,encoding:r,rawImageData:s,redFactor:n,greenFactor:a,blueFactor:l,baseShift:c}=t,h=s.width+2,u=s.height+2,d=e.a(s)?new e.R({width:h,height:u},yield e.bw(s,-1,-1,h,u)):s,p=new e.bx(o,d,r,n,a,l,c);this.loaded=this.loaded||{},this.loaded[o]=p,i(null,p);}))}removeTile(e){const t=this.loaded,i=e.uid;t&&t[i]&&delete t[i];}}function l(e,t){if(0!==e.length){c(e[0],t);for(var i=1;i<e.length;i++)c(e[i],!t);}}function c(e,t){for(var i=0,o=0,r=0,s=e.length,n=s-1;r<s;n=r++){var a=(e[r][0]-e[n][0])*(e[n][1]+e[r][1]),l=i+a;o+=Math.abs(i)>=Math.abs(a)?i-l+a:a-l+i,i=l;}i+o>=0!=!!t&&e.reverse();}var h=e.by((function e(t,i){var o,r=t&&t.type;if("FeatureCollection"===r)for(o=0;o<t.features.length;o++)e(t.features[o],i);else if("GeometryCollection"===r)for(o=0;o<t.geometries.length;o++)e(t.geometries[o],i);else if("Feature"===r)e(t.geometry,i);else if("Polygon"===r)l(t.coordinates,i);else if("MultiPolygon"===r)for(o=0;o<t.coordinates.length;o++)l(t.coordinates[o],i);return t}));const u=e.bv.VectorTileFeature.prototype.toGeoJSON;var d={exports:{}},p=e.bz,f=e.bv.VectorTileFeature,g=m;function m(e,t){this.options=t||{},this.features=e,this.length=e.length;}function y(e,t){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=t||4096;}m.prototype.feature=function(e){return new y(this.features[e],this.options.extent)},y.prototype.loadGeometry=function(){var e=this.rawGeometry;this.geometry=[];for(var t=0;t<e.length;t++){for(var i=e[t],o=[],r=0;r<i.length;r++)o.push(new p(i[r][0],i[r][1]));this.geometry.push(o);}return this.geometry},y.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,i=-1/0,o=1/0,r=-1/0,s=0;s<e.length;s++)for(var n=e[s],a=0;a<n.length;a++){var l=n[a];t=Math.min(t,l.x),i=Math.max(i,l.x),o=Math.min(o,l.y),r=Math.max(r,l.y);}return [t,o,i,r]},y.prototype.toGeoJSON=f.prototype.toGeoJSON;var v=e.bA,w=g;function x(e){var t=new v;return function(e,t){for(var i in e.layers)t.writeMessage(3,b,e.layers[i]);}(e,t),t.finish()}function b(e,t){var i;t.writeVarintField(15,e.version||1),t.writeStringField(1,e.name||""),t.writeVarintField(5,e.extent||4096);var o={keys:[],values:[],keycache:{},valuecache:{}};for(i=0;i<e.length;i++)o.feature=e.feature(i),t.writeMessage(2,S,o);var r=o.keys;for(i=0;i<r.length;i++)t.writeStringField(3,r[i]);var s=o.values;for(i=0;i<s.length;i++)t.writeMessage(4,_,s[i]);}function S(e,t){var i=e.feature;void 0!==i.id&&t.writeVarintField(1,i.id),t.writeMessage(2,M,e),t.writeVarintField(3,i.type),t.writeMessage(4,T,i);}function M(e,t){var i=e.feature,o=e.keys,r=e.values,s=e.keycache,n=e.valuecache;for(var a in i.properties){var l=i.properties[a],c=s[a];if(null!==l){void 0===c&&(o.push(a),s[a]=c=o.length-1),t.writeVarint(c);var h=typeof l;"string"!==h&&"boolean"!==h&&"number"!==h&&(l=JSON.stringify(l));var u=h+":"+l,d=n[u];void 0===d&&(r.push(l),n[u]=d=r.length-1),t.writeVarint(d);}}}function I(e,t){return (t<<3)+(7&e)}function P(e){return e<<1^e>>31}function T(e,t){for(var i=e.loadGeometry(),o=e.type,r=0,s=0,n=i.length,a=0;a<n;a++){var l=i[a],c=1;1===o&&(c=l.length),t.writeVarint(I(1,c));for(var h=3===o?l.length-1:l.length,u=0;u<h;u++){1===u&&1!==o&&t.writeVarint(I(2,h-1));var d=l[u].x-r,p=l[u].y-s;t.writeVarint(P(d)),t.writeVarint(P(p)),r+=d,s+=p;}3===o&&t.writeVarint(I(7,1));}}function _(e,t){var i=typeof e;"string"===i?t.writeStringField(1,e):"boolean"===i?t.writeBooleanField(7,e):"number"===i&&(e%1!=0?t.writeDoubleField(3,e):e<0?t.writeSVarintField(6,e):t.writeVarintField(5,e));}d.exports=x,d.exports.fromVectorTileJs=x,d.exports.fromGeojsonVt=function(e,t){t=t||{};var i={};for(var o in e)i[o]=new w(e[o].features,t),i[o].name=o,i[o].version=t.version,i[o].extent=t.extent;return x({layers:i})},d.exports.GeoJSONWrapper=w;var k=e.by(d.exports);const C={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:e=>e},D=Math.fround||(O=new Float32Array(1),e=>(O[0]=+e,O[0]));var O;const L=3,F=5,z=6;class N{constructor(e){this.options=Object.assign(Object.create(C),e),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[];}load(e){const{log:t,minZoom:i,maxZoom:o}=this.options;t&&console.time("total time");const r=`prepare ${e.length} points`;t&&console.time(r),this.points=e;const s=[];for(let t=0;t<e.length;t++){const i=e[t];if(!i.geometry)continue;const[o,r]=i.geometry.coordinates,n=D(Z(o)),a=D(G(r));s.push(n,a,1/0,t,-1,1),this.options.reduce&&s.push(0);}let n=this.trees[o+1]=this._createTree(s);t&&console.timeEnd(r);for(let e=o;e>=i;e--){const i=+Date.now();n=this.trees[e]=this._createTree(this._cluster(n,e)),t&&console.log("z%d: %d clusters in %dms",e,n.numItems,+Date.now()-i);}return t&&console.timeEnd("total time"),this}getClusters(e,t){let i=((e[0]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,e[1]));let r=180===e[2]?180:((e[2]+180)%360+360)%360-180;const s=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)i=-180,r=180;else if(i>r){const e=this.getClusters([i,o,180,s],t),n=this.getClusters([-180,o,r,s],t);return e.concat(n)}const n=this.trees[this._limitZoom(t)],a=n.range(Z(i),G(s),Z(r),G(o)),l=n.data,c=[];for(const e of a){const t=this.stride*e;c.push(l[t+F]>1?E(l,t,this.clusterProps):this.points[l[t+L]]);}return c}getChildren(e){const t=this._getOriginId(e),i=this._getOriginZoom(e),o="No cluster with the specified id.",r=this.trees[i];if(!r)throw new Error(o);const s=r.data;if(t*this.stride>=s.length)throw new Error(o);const n=this.options.radius/(this.options.extent*Math.pow(2,i-1)),a=r.within(s[t*this.stride],s[t*this.stride+1],n),l=[];for(const t of a){const i=t*this.stride;s[i+4]===e&&l.push(s[i+F]>1?E(s,i,this.clusterProps):this.points[s[i+L]]);}if(0===l.length)throw new Error(o);return l}getLeaves(e,t,i){const o=[];return this._appendLeaves(o,e,t=t||10,i=i||0,0),o}getTile(e,t,i){const o=this.trees[this._limitZoom(e)],r=Math.pow(2,e),{extent:s,radius:n}=this.options,a=n/s,l=(i-a)/r,c=(i+1+a)/r,h={features:[]};return this._addTileFeatures(o.range((t-a)/r,l,(t+1+a)/r,c),o.data,t,i,r,h),0===t&&this._addTileFeatures(o.range(1-a/r,l,1,c),o.data,r,i,r,h),t===r-1&&this._addTileFeatures(o.range(0,l,a/r,c),o.data,-1,i,r,h),h.features.length?h:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom;){const i=this.getChildren(e);if(t++,1!==i.length)break;e=i[0].properties.cluster_id;}return t}_appendLeaves(e,t,i,o,r){const s=this.getChildren(t);for(const t of s){const s=t.properties;if(s&&s.cluster?r+s.point_count<=o?r+=s.point_count:r=this._appendLeaves(e,s.cluster_id,i,o,r):r<o?r++:e.push(t),e.length===i)break}return r}_createTree(t){const i=new e.av(t.length/this.stride|0,this.options.nodeSize,Float32Array);for(let e=0;e<t.length;e+=this.stride)i.add(t[e],t[e+1]);return i.finish(),i.data=t,i}_addTileFeatures(e,t,i,o,r,s){for(const n of e){const e=n*this.stride,a=t[e+F]>1;let l,c,h;if(a)l=j(t,e,this.clusterProps),c=t[e],h=t[e+1];else {const i=this.points[t[e+L]];l=i.properties;const[o,r]=i.geometry.coordinates;c=Z(o),h=G(r);}const u={type:1,geometry:[[Math.round(this.options.extent*(c*r-i)),Math.round(this.options.extent*(h*r-o))]],tags:l};let d;d=a||this.options.generateId?t[e+L]:this.points[t[e+L]].id,void 0!==d&&(u.id=d),s.features.push(u);}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){const{radius:i,extent:o,reduce:r,minPoints:s}=this.options,n=i/(o*Math.pow(2,t)),a=e.data,l=[],c=this.stride;for(let i=0;i<a.length;i+=c){if(a[i+2]<=t)continue;a[i+2]=t;const o=a[i],h=a[i+1],u=e.within(a[i],a[i+1],n),d=a[i+F];let p=d;for(const e of u){const i=e*c;a[i+2]>t&&(p+=a[i+F]);}if(p>d&&p>=s){let e,s=o*d,n=h*d,f=-1;const g=((i/c|0)<<5)+(t+1)+this.points.length;for(const o of u){const l=o*c;if(a[l+2]<=t)continue;a[l+2]=t;const h=a[l+F];s+=a[l]*h,n+=a[l+1]*h,a[l+4]=g,r&&(e||(e=this._map(a,i,!0),f=this.clusterProps.length,this.clusterProps.push(e)),r(e,this._map(a,l)));}a[i+4]=g,l.push(s/p,n/p,1/0,g,-1,p),r&&l.push(f);}else {for(let e=0;e<c;e++)l.push(a[i+e]);if(p>1)for(const e of u){const i=e*c;if(!(a[i+2]<=t)){a[i+2]=t;for(let e=0;e<c;e++)l.push(a[i+e]);}}}}return l}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return (e-this.points.length)%32}_map(e,t,i){if(e[t+F]>1){const o=this.clusterProps[e[t+z]];return i?Object.assign({},o):o}const o=this.points[e[t+L]].properties,r=this.options.map(o);return i&&r===o?Object.assign({},r):r}}function E(e,t,i){return {type:"Feature",id:e[t+L],properties:j(e,t,i),geometry:{type:"Point",coordinates:[(o=e[t],360*(o-.5)),J(e[t+1])]}};var o;}function j(e,t,i){const o=e[t+F],r=o>=1e4?`${Math.round(o/1e3)}k`:o>=1e3?Math.round(o/100)/10+"k":o,s=e[t+z],n=-1===s?{}:Object.assign({},i[s]);return Object.assign(n,{cluster:!0,cluster_id:e[t+L],point_count:o,point_count_abbreviated:r})}function Z(e){return e/360+.5}function G(e){const t=Math.sin(e*Math.PI/180),i=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return i<0?0:i>1?1:i}function J(e){const t=(180-360*e)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}function B(e,t,i,o){for(var r,s=o,n=i-t>>1,a=i-t,l=e[t],c=e[t+1],h=e[i],u=e[i+1],d=t+3;d<i;d+=3){var p=Y(e[d],e[d+1],l,c,h,u);if(p>s)r=d,s=p;else if(p===s){var f=Math.abs(d-n);f<a&&(r=d,a=f);}}s>o&&(r-t>3&&B(e,t,r,o),e[r+2]=s,i-r>3&&B(e,r,i,o));}function Y(e,t,i,o,r,s){var n=r-i,a=s-o;if(0!==n||0!==a){var l=((e-i)*n+(t-o)*a)/(n*n+a*a);l>1?(i=r,o=s):l>0&&(i+=n*l,o+=a*l);}return (n=e-i)*n+(a=t-o)*a}function A(e,t,i,o){var r={id:void 0===e?null:e,type:t,geometry:i,tags:o,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,i=e.type;if("Point"===i||"MultiPoint"===i||"LineString"===i)V(e,t);else if("Polygon"===i||"MultiLineString"===i)for(var o=0;o<t.length;o++)V(e,t[o]);else if("MultiPolygon"===i)for(o=0;o<t.length;o++)for(var r=0;r<t[o].length;r++)V(e,t[o][r]);}(r),r}function V(e,t){for(var i=0;i<t.length;i+=3)e.minX=Math.min(e.minX,t[i]),e.minY=Math.min(e.minY,t[i+1]),e.maxX=Math.max(e.maxX,t[i]),e.maxY=Math.max(e.maxY,t[i+1]);}function X(e,t,i,o){if(t.geometry){var r=t.geometry.coordinates,s=t.geometry.type,n=Math.pow(i.tolerance/((1<<i.maxZoom)*i.extent),2),a=[],l=t.id;if(i.promoteId?l=t.properties[i.promoteId]:i.generateId&&(l=o||0),"Point"===s)q(r,a);else if("MultiPoint"===s)for(var c=0;c<r.length;c++)q(r[c],a);else if("LineString"===s)R(r,a,n,!1);else if("MultiLineString"===s){if(i.lineMetrics){for(c=0;c<r.length;c++)R(r[c],a=[],n,!1),e.push(A(l,"LineString",a,t.properties));return}W(r,a,n,!1);}else if("Polygon"===s)W(r,a,n,!0);else {if("MultiPolygon"!==s){if("GeometryCollection"===s){for(c=0;c<t.geometry.geometries.length;c++)X(e,{id:l,geometry:t.geometry.geometries[c],properties:t.properties},i,o);return}throw new Error("Input data is not a valid GeoJSON object.")}for(c=0;c<r.length;c++){var h=[];W(r[c],h,n,!0),a.push(h);}}e.push(A(l,s,a,t.properties));}}function q(e,t){t.push($(e[0])),t.push(U(e[1])),t.push(0);}function R(e,t,i,o){for(var r,s,n=0,a=0;a<e.length;a++){var l=$(e[a][0]),c=U(e[a][1]);t.push(l),t.push(c),t.push(0),a>0&&(n+=o?(r*c-l*s)/2:Math.sqrt(Math.pow(l-r,2)+Math.pow(c-s,2))),r=l,s=c;}var h=t.length-3;t[2]=1,B(t,0,h,i),t[h+2]=1,t.size=Math.abs(n),t.start=0,t.end=t.size;}function W(e,t,i,o){for(var r=0;r<e.length;r++){var s=[];R(e[r],s,i,o),t.push(s);}}function $(e){return e/360+.5}function U(e){var t=Math.sin(e*Math.PI/180),i=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return i<0?0:i>1?1:i}function H(e,t,i,o,r,s,n,a){if(o/=t,s>=(i/=t)&&n<o)return e;if(n<i||s>=o)return null;for(var l=[],c=0;c<e.length;c++){var h=e[c],u=h.geometry,d=h.type,p=0===r?h.minX:h.minY,f=0===r?h.maxX:h.maxY;if(p>=i&&f<o)l.push(h);else if(!(f<i||p>=o)){var g=[];if("Point"===d||"MultiPoint"===d)K(u,g,i,o,r);else if("LineString"===d)Q(u,g,i,o,r,!1,a.lineMetrics);else if("MultiLineString"===d)te(u,g,i,o,r,!1);else if("Polygon"===d)te(u,g,i,o,r,!0);else if("MultiPolygon"===d)for(var m=0;m<u.length;m++){var y=[];te(u[m],y,i,o,r,!0),y.length&&g.push(y);}if(g.length){if(a.lineMetrics&&"LineString"===d){for(m=0;m<g.length;m++)l.push(A(h.id,d,g[m],h.tags));continue}"LineString"!==d&&"MultiLineString"!==d||(1===g.length?(d="LineString",g=g[0]):d="MultiLineString"),"Point"!==d&&"MultiPoint"!==d||(d=3===g.length?"Point":"MultiPoint"),l.push(A(h.id,d,g,h.tags));}}}return l.length?l:null}function K(e,t,i,o,r){for(var s=0;s<e.length;s+=3){var n=e[s+r];n>=i&&n<=o&&(t.push(e[s]),t.push(e[s+1]),t.push(e[s+2]));}}function Q(e,t,i,o,r,s,n){for(var a,l,c=ee(e),h=0===r?oe:re,u=e.start,d=0;d<e.length-3;d+=3){var p=e[d],f=e[d+1],g=e[d+2],m=e[d+3],y=e[d+4],v=0===r?p:f,w=0===r?m:y,x=!1;n&&(a=Math.sqrt(Math.pow(p-m,2)+Math.pow(f-y,2))),v<i?w>i&&(l=h(c,p,f,m,y,i),n&&(c.start=u+a*l)):v>o?w<o&&(l=h(c,p,f,m,y,o),n&&(c.start=u+a*l)):ie(c,p,f,g),w<i&&v>=i&&(l=h(c,p,f,m,y,i),x=!0),w>o&&v<=o&&(l=h(c,p,f,m,y,o),x=!0),!s&&x&&(n&&(c.end=u+a*l),t.push(c),c=ee(e)),n&&(u+=a);}var b=e.length-3;p=e[b],f=e[b+1],g=e[b+2],(v=0===r?p:f)>=i&&v<=o&&ie(c,p,f,g),b=c.length-3,s&&b>=3&&(c[b]!==c[0]||c[b+1]!==c[1])&&ie(c,c[0],c[1],c[2]),c.length&&t.push(c);}function ee(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function te(e,t,i,o,r,s){for(var n=0;n<e.length;n++)Q(e[n],t,i,o,r,s,!1);}function ie(e,t,i,o){e.push(t),e.push(i),e.push(o);}function oe(e,t,i,o,r,s){var n=(s-t)/(o-t);return e.push(s),e.push(i+(r-i)*n),e.push(1),n}function re(e,t,i,o,r,s){var n=(s-i)/(r-i);return e.push(t+(o-t)*n),e.push(s),e.push(1),n}function se(e,t){for(var i=[],o=0;o<e.length;o++){var r,s=e[o],n=s.type;if("Point"===n||"MultiPoint"===n||"LineString"===n)r=ne(s.geometry,t);else if("MultiLineString"===n||"Polygon"===n){r=[];for(var a=0;a<s.geometry.length;a++)r.push(ne(s.geometry[a],t));}else if("MultiPolygon"===n)for(r=[],a=0;a<s.geometry.length;a++){for(var l=[],c=0;c<s.geometry[a].length;c++)l.push(ne(s.geometry[a][c],t));r.push(l);}i.push(A(s.id,n,r,s.tags));}return i}function ne(e,t){var i=[];i.size=e.size,void 0!==e.start&&(i.start=e.start,i.end=e.end);for(var o=0;o<e.length;o+=3)i.push(e[o]+t,e[o+1],e[o+2]);return i}function ae(e,t){if(e.transformed)return e;var i,o,r,s=1<<e.z,n=e.x,a=e.y;for(i=0;i<e.features.length;i++){var l=e.features[i],c=l.geometry,h=l.type;if(l.geometry=[],1===h)for(o=0;o<c.length;o+=2)l.geometry.push(le(c[o],c[o+1],t,s,n,a));else for(o=0;o<c.length;o++){var u=[];for(r=0;r<c[o].length;r+=2)u.push(le(c[o][r],c[o][r+1],t,s,n,a));l.geometry.push(u);}}return e.transformed=!0,e}function le(e,t,i,o,r,s){return [Math.round(i*(e*o-r)),Math.round(i*(t*o-s))]}function ce(e,t,i,o,r){for(var s=t===r.maxZoom?0:r.tolerance/((1<<t)*r.extent),n={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:i,y:o,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},a=0;a<e.length;a++){n.numFeatures++,he(n,e[a],s,r);var l=e[a].minX,c=e[a].minY,h=e[a].maxX,u=e[a].maxY;l<n.minX&&(n.minX=l),c<n.minY&&(n.minY=c),h>n.maxX&&(n.maxX=h),u>n.maxY&&(n.maxY=u);}return n}function he(e,t,i,o){var r=t.geometry,s=t.type,n=[];if("Point"===s||"MultiPoint"===s)for(var a=0;a<r.length;a+=3)n.push(r[a]),n.push(r[a+1]),e.numPoints++,e.numSimplified++;else if("LineString"===s)ue(n,r,e,i,!1,!1);else if("MultiLineString"===s||"Polygon"===s)for(a=0;a<r.length;a++)ue(n,r[a],e,i,"Polygon"===s,0===a);else if("MultiPolygon"===s)for(var l=0;l<r.length;l++){var c=r[l];for(a=0;a<c.length;a++)ue(n,c[a],e,i,!0,0===a);}if(n.length){var h=t.tags||null;if("LineString"===s&&o.lineMetrics){for(var u in h={},t.tags)h[u]=t.tags[u];h.mapbox_clip_start=r.start/r.size,h.mapbox_clip_end=r.end/r.size;}var d={geometry:n,type:"Polygon"===s||"MultiPolygon"===s?3:"LineString"===s||"MultiLineString"===s?2:1,tags:h};null!==t.id&&(d.id=t.id),e.features.push(d);}}function ue(e,t,i,o,r,s){var n=o*o;if(o>0&&t.size<(r?n:o))i.numPoints+=t.length/3;else {for(var a=[],l=0;l<t.length;l+=3)(0===o||t[l+2]>n)&&(i.numSimplified++,a.push(t[l]),a.push(t[l+1])),i.numPoints++;r&&function(e,t){for(var i=0,o=0,r=e.length,s=r-2;o<r;s=o,o+=2)i+=(e[o]-e[s])*(e[o+1]+e[s+1]);if(i>0===t)for(o=0,r=e.length;o<r/2;o+=2){var n=e[o],a=e[o+1];e[o]=e[r-2-o],e[o+1]=e[r-1-o],e[r-2-o]=n,e[r-1-o]=a;}}(a,s),e.push(a);}}function de(e,t){var i=(t=this.options=function(e,t){for(var i in t)e[i]=t[i];return e}(Object.create(this.options),t)).debug;if(i&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var o=function(e,t){var i=[];if("FeatureCollection"===e.type)for(var o=0;o<e.features.length;o++)X(i,e.features[o],t,o);else X(i,"Feature"===e.type?e:{geometry:e},t);return i}(e,t);this.tiles={},this.tileCoords=[],i&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),o=function(e,t){var i=t.buffer/t.extent,o=e,r=H(e,1,-1-i,i,0,-1,2,t),s=H(e,1,1-i,2+i,0,-1,2,t);return (r||s)&&(o=H(e,1,-i,1+i,0,-1,2,t)||[],r&&(o=se(r,1).concat(o)),s&&(o=o.concat(se(s,-1)))),o}(o,t),o.length&&this.splitTile(o,0,0,0),i&&(o.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)));}function pe(e,t,i){return 32*((1<<e)*i+t)+e}function fe(e,t){return t?e.properties[t]:e.id}function ge(e,t){if(null==e)return !0;if("Feature"===e.type)return null!=fe(e,t);if("FeatureCollection"===e.type){const i=new Set;for(const o of e.features){const e=fe(o,t);if(null==e)return !1;if(i.has(e))return !1;i.add(e);}return !0}return !1}function me(e,t){const i=new Map;if(null==e);else if("Feature"===e.type)i.set(fe(e,t),e);else for(const o of e.features)i.set(fe(o,t),o);return i}de.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},de.prototype.splitTile=function(e,t,i,o,r,s,n){for(var a=[e,t,i,o],l=this.options,c=l.debug;a.length;){o=a.pop(),i=a.pop(),t=a.pop(),e=a.pop();var h=1<<t,u=pe(t,i,o),d=this.tiles[u];if(!d&&(c>1&&console.time("creation"),d=this.tiles[u]=ce(e,t,i,o,l),this.tileCoords.push({z:t,x:i,y:o}),c)){c>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,i,o,d.numFeatures,d.numPoints,d.numSimplified),console.timeEnd("creation"));var p="z"+t;this.stats[p]=(this.stats[p]||0)+1,this.total++;}if(d.source=e,r){if(t===l.maxZoom||t===r)continue;var f=1<<r-t;if(i!==Math.floor(s/f)||o!==Math.floor(n/f))continue}else if(t===l.indexMaxZoom||d.numPoints<=l.indexMaxPoints)continue;if(d.source=null,0!==e.length){c>1&&console.time("clipping");var g,m,y,v,w,x,b=.5*l.buffer/l.extent,S=.5-b,M=.5+b,I=1+b;g=m=y=v=null,w=H(e,h,i-b,i+M,0,d.minX,d.maxX,l),x=H(e,h,i+S,i+I,0,d.minX,d.maxX,l),e=null,w&&(g=H(w,h,o-b,o+M,1,d.minY,d.maxY,l),m=H(w,h,o+S,o+I,1,d.minY,d.maxY,l),w=null),x&&(y=H(x,h,o-b,o+M,1,d.minY,d.maxY,l),v=H(x,h,o+S,o+I,1,d.minY,d.maxY,l),x=null),c>1&&console.timeEnd("clipping"),a.push(g||[],t+1,2*i,2*o),a.push(m||[],t+1,2*i,2*o+1),a.push(y||[],t+1,2*i+1,2*o),a.push(v||[],t+1,2*i+1,2*o+1);}}},de.prototype.getTile=function(e,t,i){var o=this.options,r=o.extent,s=o.debug;if(e<0||e>24)return null;var n=1<<e,a=pe(e,t=(t%n+n)%n,i);if(this.tiles[a])return ae(this.tiles[a],r);s>1&&console.log("drilling down to z%d-%d-%d",e,t,i);for(var l,c=e,h=t,u=i;!l&&c>0;)c--,h=Math.floor(h/2),u=Math.floor(u/2),l=this.tiles[pe(c,h,u)];return l&&l.source?(s>1&&console.log("found parent tile z%d-%d-%d",c,h,u),s>1&&console.time("drilling down"),this.splitTile(l.source,c,h,u,e,t,i),s>1&&console.timeEnd("drilling down"),this.tiles[a]?ae(this.tiles[a],r):null):null};class ye extends n{constructor(t,i,o,r){super(t,i,o),this._dataUpdateable=new Map,this.loadGeoJSON=(t,i)=>{const{promoteId:o}=t;if(t.request)return e.f(t.request,((e,t,r,s)=>{this._dataUpdateable=ge(t,o)?me(t,o):void 0,i(e,t,r,s);}));if("string"==typeof t.data)try{const e=JSON.parse(t.data);this._dataUpdateable=ge(e,o)?me(e,o):void 0,i(null,e);}catch(e){i(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));}else t.dataDiff?this._dataUpdateable?(function(e,t,i){var o,r,s,n;if(t.removeAll&&e.clear(),t.remove)for(const i of t.remove)e.delete(i);if(t.add)for(const o of t.add){const t=fe(o,i);null!=t&&e.set(t,o);}if(t.update)for(const i of t.update){let t=e.get(i.id);if(null==t)continue;const a=!i.removeAllProperties&&((null===(o=i.removeProperties)||void 0===o?void 0:o.length)>0||(null===(r=i.addOrUpdateProperties)||void 0===r?void 0:r.length)>0);if((i.newGeometry||i.removeAllProperties||a)&&(t=Object.assign({},t),e.set(i.id,t),a&&(t.properties=Object.assign({},t.properties))),i.newGeometry&&(t.geometry=i.newGeometry),i.removeAllProperties)t.properties={};else if((null===(s=i.removeProperties)||void 0===s?void 0:s.length)>0)for(const e of i.removeProperties)Object.prototype.hasOwnProperty.call(t.properties,e)&&delete t.properties[e];if((null===(n=i.addOrUpdateProperties)||void 0===n?void 0:n.length)>0)for(const{key:e,value:o}of i.addOrUpdateProperties)t.properties[e]=o;}}(this._dataUpdateable,t.dataDiff,o),i(null,{type:"FeatureCollection",features:Array.from(this._dataUpdateable.values())})):i(new Error(`Cannot update existing geojson data in ${t.source}`)):i(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));return {cancel:()=>{}}},this.loadVectorData=this.loadGeoJSONTile,r&&(this.loadGeoJSON=r);}loadGeoJSONTile(t,i){const o=t.tileID.canonical;if(!this._geoJSONIndex)return i(null,null);const r=this._geoJSONIndex.getTile(o.z,o.x,o.y);if(!r)return i(null,null);const s=new class{constructor(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=e.N,this.length=t.length,this._features=t;}feature(t){return new class{constructor(t){this._feature=t,this.extent=e.N,this.type=t.type,this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10));}loadGeometry(){if(1===this._feature.type){const t=[];for(const i of this._feature.geometry)t.push([new e.P(i[0],i[1])]);return t}{const t=[];for(const i of this._feature.geometry){const o=[];for(const t of i)o.push(new e.P(t[0],t[1]));t.push(o);}return t}}toGeoJSON(e,t,i){return u.call(this,e,t,i)}}(this._features[t])}}(r.features);let n=k(s);0===n.byteOffset&&n.byteLength===n.buffer.byteLength||(n=new Uint8Array(n)),i(null,{vectorTile:s,rawData:n.buffer});}loadData(t,i){var o;null===(o=this._pendingRequest)||void 0===o||o.cancel(),this._pendingCallback&&this._pendingCallback(null,{abandoned:!0});const r=!!(t&&t.request&&t.request.collectResourceTiming)&&new e.bt(t.request);this._pendingCallback=i,this._pendingRequest=this.loadGeoJSON(t,((o,s)=>{if(delete this._pendingCallback,delete this._pendingRequest,o||!s)return i(o);if("object"!=typeof s)return i(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));{h(s,!0);try{if(t.filter){const i=e.bB(t.filter,{type:"boolean","property-type":"data-driven",overridable:!1,transition:!1});if("error"===i.result)throw new Error(i.value.map((e=>`${e.key}: ${e.message}`)).join(", "));const o=s.features.filter((e=>i.value.evaluate({zoom:0},e)));s={type:"FeatureCollection",features:o};}this._geoJSONIndex=t.cluster?new N(function({superclusterOptions:t,clusterProperties:i}){if(!i||!t)return t;const o={},r={},s={accumulated:null,zoom:0},n={properties:null},a=Object.keys(i);for(const t of a){const[s,n]=i[t],a=e.bB(n),l=e.bB("string"==typeof s?[s,["accumulated"],["get",t]]:s);o[t]=a.value,r[t]=l.value;}return t.map=e=>{n.properties=e;const t={};for(const e of a)t[e]=o[e].evaluate(s,n);return t},t.reduce=(e,t)=>{n.properties=t;for(const t of a)s.accumulated=e[t],e[t]=r[t].evaluate(s,n);},t}(t)).load(s.features):function(e,t){return new de(e,t)}(s,t.geojsonVtOptions);}catch(o){return i(o)}this.loaded={};const n={};if(r){const e=r.finish();e&&(n.resourceTiming={},n.resourceTiming[t.source]=JSON.parse(JSON.stringify(e)));}i(null,n);}}));}reloadTile(e,t){const i=this.loaded;return i&&i[e.uid]?super.reloadTile(e,t):this.loadTile(e,t)}removeSource(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),t();}getClusterExpansionZoom(e,t){try{t(null,this._geoJSONIndex.getClusterExpansionZoom(e.clusterId));}catch(e){t(e);}}getClusterChildren(e,t){try{t(null,this._geoJSONIndex.getChildren(e.clusterId));}catch(e){t(e);}}getClusterLeaves(e,t){try{t(null,this._geoJSONIndex.getLeaves(e.clusterId,e.limit,e.offset));}catch(e){t(e);}}}class ve{constructor(t){this.self=t,this.actor=new e.C(t,this),this.layerIndexes={},this.availableImages={},this.workerSourceTypes={vector:n,geojson:ye},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=(e,t)=>{if(this.workerSourceTypes[e])throw new Error(`Worker source with name "${e}" already registered.`);this.workerSourceTypes[e]=t;},this.self.registerRTLTextPlugin=t=>{if(e.bC.isParsed())throw new Error("RTL text plugin already registered.");e.bC.applyArabicShaping=t.applyArabicShaping,e.bC.processBidirectionalText=t.processBidirectionalText,e.bC.processStyledBidirectionalText=t.processStyledBidirectionalText;};}setReferrer(e,t){this.referrer=t;}setImages(e,t,i){this.availableImages[e]=t;for(const i in this.workerSources[e]){const o=this.workerSources[e][i];for(const e in o)o[e].availableImages=t;}i();}setLayers(e,t,i){this.getLayerIndex(e).replace(t),i();}updateLayers(e,t,i){this.getLayerIndex(e).update(t.layers,t.removedIds),i();}loadTile(e,t,i){this.getWorkerSource(e,t.type,t.source).loadTile(t,i);}loadDEMTile(e,t,i){this.getDEMWorkerSource(e,t.source).loadTile(t,i);}reloadTile(e,t,i){this.getWorkerSource(e,t.type,t.source).reloadTile(t,i);}abortTile(e,t,i){this.getWorkerSource(e,t.type,t.source).abortTile(t,i);}removeTile(e,t,i){this.getWorkerSource(e,t.type,t.source).removeTile(t,i);}removeDEMTile(e,t){this.getDEMWorkerSource(e,t.source).removeTile(t);}removeSource(e,t,i){if(!this.workerSources[e]||!this.workerSources[e][t.type]||!this.workerSources[e][t.type][t.source])return;const o=this.workerSources[e][t.type][t.source];delete this.workerSources[e][t.type][t.source],void 0!==o.removeSource?o.removeSource(t,i):i();}loadWorkerSource(e,t,i){try{this.self.importScripts(t.url),i();}catch(e){i(e.toString());}}syncRTLPluginState(t,i,o){try{e.bC.setState(i);const t=e.bC.getPluginURL();if(e.bC.isLoaded()&&!e.bC.isParsed()&&null!=t){this.self.importScripts(t);const i=e.bC.isParsed();o(i?void 0:new Error(`RTL Text Plugin failed to import scripts from ${t}`),i);}}catch(e){o(e.toString());}}getAvailableImages(e){let t=this.availableImages[e];return t||(t=[]),t}getLayerIndex(e){let i=this.layerIndexes[e];return i||(i=this.layerIndexes[e]=new t),i}getWorkerSource(e,t,i){return this.workerSources[e]||(this.workerSources[e]={}),this.workerSources[e][t]||(this.workerSources[e][t]={}),this.workerSources[e][t][i]||(this.workerSources[e][t][i]=new this.workerSourceTypes[t]({send:(t,i,o)=>{this.actor.send(t,i,o,e);}},this.getLayerIndex(e),this.getAvailableImages(e))),this.workerSources[e][t][i]}getDEMWorkerSource(e,t){return this.demWorkerSources[e]||(this.demWorkerSources[e]={}),this.demWorkerSources[e][t]||(this.demWorkerSources[e][t]=new a),this.demWorkerSources[e][t]}}return e.i()&&(self.worker=new ve(self)),ve}));

		define(["./shared"],(function(t){var e="3.5.2";class i{static testProp(t){if(!i.docStyle)return t[0];for(let e=0;e<t.length;e++)if(t[e]in i.docStyle)return t[e];return t[0]}static create(t,e,i){const s=window.document.createElement(t);return void 0!==e&&(s.className=e),i&&i.appendChild(s),s}static createNS(t,e){return window.document.createElementNS(t,e)}static disableDrag(){i.docStyle&&i.selectProp&&(i.userSelect=i.docStyle[i.selectProp],i.docStyle[i.selectProp]="none");}static enableDrag(){i.docStyle&&i.selectProp&&(i.docStyle[i.selectProp]=i.userSelect);}static setTransform(t,e){t.style[i.transformProp]=e;}static addEventListener(t,e,i,s={}){t.addEventListener(e,i,"passive"in s?s:s.capture);}static removeEventListener(t,e,i,s={}){t.removeEventListener(e,i,"passive"in s?s:s.capture);}static suppressClickInternal(t){t.preventDefault(),t.stopPropagation(),window.removeEventListener("click",i.suppressClickInternal,!0);}static suppressClick(){window.addEventListener("click",i.suppressClickInternal,!0),window.setTimeout((()=>{window.removeEventListener("click",i.suppressClickInternal,!0);}),0);}static mousePos(e,i){const s=e.getBoundingClientRect();return new t.P(i.clientX-s.left-e.clientLeft,i.clientY-s.top-e.clientTop)}static touchPos(e,i){const s=e.getBoundingClientRect(),a=[];for(let o=0;o<i.length;o++)a.push(new t.P(i[o].clientX-s.left-e.clientLeft,i[o].clientY-s.top-e.clientTop));return a}static mouseButton(t){return t.button}static remove(t){t.parentNode&&t.parentNode.removeChild(t);}}i.docStyle="undefined"!=typeof window&&window.document&&window.document.documentElement.style,i.selectProp=i.testProp(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"]),i.transformProp=i.testProp(["transform","WebkitTransform"]);const s={supported:!1,testSupport:function(t){!r&&o&&(n?l(t):a=t);}};let a,o,r=!1,n=!1;function l(t){const e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e);try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,o),t.isContextLost())return;s.supported=!0;}catch(t){}t.deleteTexture(e),r=!0;}var h,c;"undefined"!=typeof document&&(o=document.createElement("img"),o.onload=function(){a&&l(a),a=null,n=!0;},o.onerror=function(){r=!0,a=null;},o.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="),function(e){let i,a,o,r;e.resetRequestQueue=()=>{i=[],a=0,o=0,r={};},e.addThrottleControl=t=>{const e=o++;return r[e]=t,e},e.removeThrottleControl=t=>{delete r[t],h();},e.getImage=(t,e,o=!0)=>{s.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*");const r={requestParameters:t,supportImageRefresh:o,callback:e,cancelled:!1,completed:!1,cancel:()=>{r.completed||r.cancelled||(r.cancelled=!0,r.innerRequest&&(r.innerRequest.cancel(),a--),h());}};return i.push(r),h(),r};const n=e=>{const{requestParameters:i,supportImageRefresh:s,callback:a}=e;return t.e(i,{type:"image"}),(!1!==s||t.i()||t.g(i.url)||i.headers&&!Object.keys(i.headers).reduce(((t,e)=>t&&"accept"===e),!0)?t.m:c)(i,((t,i,s,o)=>{l(e,a,t,i,s,o);}))},l=(e,i,s,o,r,n)=>{s?i(s):o instanceof HTMLImageElement||t.a(o)?i(null,o):o&&((e,i)=>{"function"==typeof createImageBitmap?t.b(e,i):t.d(e,i);})(o,((t,e)=>{null!=t?i(t):null!=e&&i(null,e,{cacheControl:r,expires:n});})),e.cancelled||(e.completed=!0,a--,h());},h=()=>{const e=(()=>{const t=Object.keys(r);let e=!1;if(t.length>0)for(const i of t)if(e=r[i](),e)break;return e})()?t.c.MAX_PARALLEL_IMAGE_REQUESTS_PER_FRAME:t.c.MAX_PARALLEL_IMAGE_REQUESTS;for(let t=a;t<e&&i.length>0;t++){const e=i.shift();if(e.cancelled){t--;continue}const s=n(e);a++,e.innerRequest=s;}},c=(e,i)=>{const s=new Image,a=e.url;let o=!1;const r=e.credentials;return r&&"include"===r?s.crossOrigin="use-credentials":(r&&"same-origin"===r||!t.s(a))&&(s.crossOrigin="anonymous"),s.fetchPriority="high",s.onload=()=>{i(null,s),s.onerror=s.onload=null;},s.onerror=()=>{o||i(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.")),s.onerror=s.onload=null;},s.src=a,{cancel:()=>{o=!0,s.src="";}}};}(h||(h={})),h.resetRequestQueue(),function(t){t.Glyphs="Glyphs",t.Image="Image",t.Source="Source",t.SpriteImage="SpriteImage",t.SpriteJSON="SpriteJSON",t.Style="Style",t.Tile="Tile",t.Unknown="Unknown";}(c||(c={}));class u{constructor(t){this._transformRequestFn=t;}transformRequest(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}}normalizeSpriteURL(t,e,i){const s=function(t){const e=t.match(d);if(!e)throw new Error(`Unable to parse URL "${t}"`);return {protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}(t);return s.path+=`${e}${i}`,function(t){const e=t.params.length?`?${t.params.join("&")}`:"";return `${t.protocol}://${t.authority}${t.path}${e}`}(s)}setTransformRequest(t){this._transformRequestFn=t;}}const d=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;function _(e){var i=new t.A(3);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i}var p,m=function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t};p=new t.A(3),t.A!=Float32Array&&(p[0]=0,p[1]=0,p[2]=0);var f=function(t){var e=t[0],i=t[1];return e*e+i*i};function g(t){const e=[];if("string"==typeof t)e.push({id:"default",url:t});else if(t&&t.length>0){const i=[];for(const{id:s,url:a}of t){const t=`${s}${a}`;-1===i.indexOf(t)&&(i.push(t),e.push({id:s,url:a}));}}return e}function v(e,i,s,a,o){if(a)return void e(a);if(o!==Object.values(i).length||o!==Object.values(s).length)return;const r={};for(const e in i){r[e]={};const a=t.h.getImageCanvasContext(s[e]),o=i[e];for(const t in o){const{width:i,height:s,x:n,y:l,sdf:h,pixelRatio:c,stretchX:u,stretchY:d,content:_}=o[t];r[e][t]={data:null,pixelRatio:c,sdf:h,stretchX:u,stretchY:d,content:_,spriteData:{width:i,height:s,x:n,y:l,context:a}};}}e(null,r);}!function(){var e=new t.A(2);t.A!=Float32Array&&(e[0]=0,e[1]=0);}();class x{constructor(t,e,i,s){this.context=t,this.format=i,this.texture=t.gl.createTexture(),this.update(e,s);}update(e,i,s){const{width:a,height:o}=e,r=!(this.size&&this.size[0]===a&&this.size[1]===o||s),{context:n}=this,{gl:l}=n;if(this.useMipmap=Boolean(i&&i.useMipmap),l.bindTexture(l.TEXTURE_2D,this.texture),n.pixelStoreUnpackFlipY.set(!1),n.pixelStoreUnpack.set(1),n.pixelStoreUnpackPremultiplyAlpha.set(this.format===l.RGBA&&(!i||!1!==i.premultiply)),r)this.size=[a,o],e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageData||t.a(e)?l.texImage2D(l.TEXTURE_2D,0,this.format,this.format,l.UNSIGNED_BYTE,e):l.texImage2D(l.TEXTURE_2D,0,this.format,a,o,0,this.format,l.UNSIGNED_BYTE,e.data);else {const{x:i,y:r}=s||{x:0,y:0};e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageData||t.a(e)?l.texSubImage2D(l.TEXTURE_2D,0,i,r,l.RGBA,l.UNSIGNED_BYTE,e):l.texSubImage2D(l.TEXTURE_2D,0,i,r,a,o,l.RGBA,l.UNSIGNED_BYTE,e.data);}this.useMipmap&&this.isSizePowerOfTwo()&&l.generateMipmap(l.TEXTURE_2D);}bind(t,e,i){const{context:s}=this,{gl:a}=s;a.bindTexture(a.TEXTURE_2D,this.texture),i!==a.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(i=a.LINEAR),t!==this.filter&&(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,t),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,i||t),this.filter=t),e!==this.wrap&&(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,e),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,e),this.wrap=e);}isSizePowerOfTwo(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0}destroy(){const{gl:t}=this.context;t.deleteTexture(this.texture),this.texture=null;}}function y(t){const{userImage:e}=t;return !!(e&&e.render&&e.render())&&(t.data.replace(new Uint8Array(e.data.buffer)),!0)}class b extends t.E{constructor(){super(),this.images={},this.updatedImages={},this.callbackDispatchedThisFrame={},this.loaded=!1,this.requestors=[],this.patterns={},this.atlasImage=new t.R({width:1,height:1}),this.dirty=!0;}isLoaded(){return this.loaded}setLoaded(t){if(this.loaded!==t&&(this.loaded=t,t)){for(const{ids:t,callback:e}of this.requestors)this._notify(t,e);this.requestors=[];}}getImage(e){const i=this.images[e];if(i&&!i.data&&i.spriteData){const e=i.spriteData;i.data=new t.R({width:e.width,height:e.height},e.context.getImageData(e.x,e.y,e.width,e.height).data),i.spriteData=null;}return i}addImage(t,e){if(this.images[t])throw new Error(`Image id ${t} already exist, use updateImage instead`);this._validate(t,e)&&(this.images[t]=e);}_validate(e,i){let s=!0;const a=i.data||i.spriteData;return this._validateStretch(i.stretchX,a&&a.width)||(this.fire(new t.j(new Error(`Image "${e}" has invalid "stretchX" value`))),s=!1),this._validateStretch(i.stretchY,a&&a.height)||(this.fire(new t.j(new Error(`Image "${e}" has invalid "stretchY" value`))),s=!1),this._validateContent(i.content,i)||(this.fire(new t.j(new Error(`Image "${e}" has invalid "content" value`))),s=!1),s}_validateStretch(t,e){if(!t)return !0;let i=0;for(const s of t){if(s[0]<i||s[1]<s[0]||e<s[1])return !1;i=s[1];}return !0}_validateContent(t,e){if(!t)return !0;if(4!==t.length)return !1;const i=e.spriteData,s=i&&i.width||e.data.width,a=i&&i.height||e.data.height;return !(t[0]<0||s<t[0]||t[1]<0||a<t[1]||t[2]<0||s<t[2]||t[3]<0||a<t[3]||t[2]<t[0]||t[3]<t[1])}updateImage(t,e,i=!0){const s=this.getImage(t);if(i&&(s.data.width!==e.data.width||s.data.height!==e.data.height))throw new Error(`size mismatch between old image (${s.data.width}x${s.data.height}) and new image (${e.data.width}x${e.data.height}).`);e.version=s.version+1,this.images[t]=e,this.updatedImages[t]=!0;}removeImage(t){const e=this.images[t];delete this.images[t],delete this.patterns[t],e.userImage&&e.userImage.onRemove&&e.userImage.onRemove();}listImages(){return Object.keys(this.images)}getImages(t,e){let i=!0;if(!this.isLoaded())for(const e of t)this.images[e]||(i=!1);this.isLoaded()||i?this._notify(t,e):this.requestors.push({ids:t,callback:e});}_notify(e,i){const s={};for(const i of e){let e=this.getImage(i);e||(this.fire(new t.k("styleimagemissing",{id:i})),e=this.getImage(i)),e?s[i]={data:e.data.clone(),pixelRatio:e.pixelRatio,sdf:e.sdf,version:e.version,stretchX:e.stretchX,stretchY:e.stretchY,content:e.content,hasRenderCallback:Boolean(e.userImage&&e.userImage.render)}:t.w(`Image "${i}" could not be loaded. Please make sure you have added the image with map.addImage() or a "sprite" property in your style. You can provide missing images by listening for the "styleimagemissing" map event.`);}i(null,s);}getPixelSize(){const{width:t,height:e}=this.atlasImage;return {width:t,height:e}}getPattern(e){const i=this.patterns[e],s=this.getImage(e);if(!s)return null;if(i&&i.position.version===s.version)return i.position;if(i)i.position.version=s.version;else {const i={w:s.data.width+2,h:s.data.height+2,x:0,y:0},a=new t.I(i,s);this.patterns[e]={bin:i,position:a};}return this._updatePatternAtlas(),this.patterns[e].position}bind(t){const e=t.gl;this.atlasTexture?this.dirty&&(this.atlasTexture.update(this.atlasImage),this.dirty=!1):this.atlasTexture=new x(t,this.atlasImage,e.RGBA),this.atlasTexture.bind(e.LINEAR,e.CLAMP_TO_EDGE);}_updatePatternAtlas(){const e=[];for(const t in this.patterns)e.push(this.patterns[t].bin);const{w:i,h:s}=t.p(e),a=this.atlasImage;a.resize({width:i||1,height:s||1});for(const e in this.patterns){const{bin:i}=this.patterns[e],s=i.x+1,o=i.y+1,r=this.getImage(e).data,n=r.width,l=r.height;t.R.copy(r,a,{x:0,y:0},{x:s,y:o},{width:n,height:l}),t.R.copy(r,a,{x:0,y:l-1},{x:s,y:o-1},{width:n,height:1}),t.R.copy(r,a,{x:0,y:0},{x:s,y:o+l},{width:n,height:1}),t.R.copy(r,a,{x:n-1,y:0},{x:s-1,y:o},{width:1,height:l}),t.R.copy(r,a,{x:0,y:0},{x:s+n,y:o},{width:1,height:l});}this.dirty=!0;}beginFrame(){this.callbackDispatchedThisFrame={};}dispatchRenderCallbacks(e){for(const i of e){if(this.callbackDispatchedThisFrame[i])continue;this.callbackDispatchedThisFrame[i]=!0;const e=this.getImage(i);e||t.w(`Image with ID: "${i}" was not found`),y(e)&&this.updateImage(i,e);}}}const w=1e20;function T(t,e,i,s,a,o,r,n,l){for(let h=e;h<e+s;h++)I(t,i*o+h,o,a,r,n,l);for(let h=i;h<i+a;h++)I(t,h*o+e,1,s,r,n,l);}function I(t,e,i,s,a,o,r){o[0]=0,r[0]=-w,r[1]=w,a[0]=t[e];for(let n=1,l=0,h=0;n<s;n++){a[n]=t[e+n*i];const s=n*n;do{const t=o[l];h=(a[n]-a[t]+s-t*t)/(n-t)/2;}while(h<=r[l]&&--l>-1);l++,o[l]=n,r[l]=h,r[l+1]=w;}for(let n=0,l=0;n<s;n++){for(;r[l+1]<n;)l++;const s=o[l],h=n-s;t[e+n*i]=a[s]+h*h;}}class E{constructor(t,e){this.requestManager=t,this.localIdeographFontFamily=e,this.entries={};}setURL(t){this.url=t;}getGlyphs(e,i){const s=[];for(const t in e)for(const i of e[t])s.push({stack:t,id:i});t.o(s,(({stack:t,id:e},i)=>{let s=this.entries[t];s||(s=this.entries[t]={glyphs:{},requests:{},ranges:{}});let a=s.glyphs[e];if(void 0!==a)return void i(null,{stack:t,id:e,glyph:a});if(a=this._tinySDF(s,t,e),a)return s.glyphs[e]=a,void i(null,{stack:t,id:e,glyph:a});const o=Math.floor(e/256);if(256*o>65535)return void i(new Error("glyphs > 65535 not supported"));if(s.ranges[o])return void i(null,{stack:t,id:e,glyph:a});if(!this.url)return void i(new Error("glyphsUrl is not set"));let r=s.requests[o];r||(r=s.requests[o]=[],E.loadGlyphRange(t,o,this.url,this.requestManager,((t,e)=>{if(e){for(const t in e)this._doesCharSupportLocalGlyph(+t)||(s.glyphs[+t]=e[+t]);s.ranges[o]=!0;}for(const i of r)i(t,e);delete s.requests[o];}))),r.push(((s,a)=>{s?i(s):a&&i(null,{stack:t,id:e,glyph:a[e]||null});}));}),((t,e)=>{if(t)i(t);else if(e){const t={};for(const{stack:i,id:s,glyph:a}of e)(t[i]||(t[i]={}))[s]=a&&{id:a.id,bitmap:a.bitmap.clone(),metrics:a.metrics};i(null,t);}}));}_doesCharSupportLocalGlyph(e){return !!this.localIdeographFontFamily&&(t.u["CJK Unified Ideographs"](e)||t.u["Hangul Syllables"](e)||t.u.Hiragana(e)||t.u.Katakana(e))}_tinySDF(e,i,s){const a=this.localIdeographFontFamily;if(!a)return;if(!this._doesCharSupportLocalGlyph(s))return;let o=e.tinySDF;if(!o){let t="400";/bold/i.test(i)?t="900":/medium/i.test(i)?t="500":/light/i.test(i)&&(t="200"),o=e.tinySDF=new E.TinySDF({fontSize:48,buffer:6,radius:16,cutoff:.25,fontFamily:a,fontWeight:t});}const r=o.draw(String.fromCharCode(s));return {id:s,bitmap:new t.q({width:r.width||60,height:r.height||60},r.data),metrics:{width:r.glyphWidth/2||24,height:r.glyphHeight/2||24,left:r.glyphLeft/2+.5||0,top:r.glyphTop/2-27.5||-8,advance:r.glyphAdvance/2||24,isDoubleResolution:!0}}}}E.loadGlyphRange=function(e,i,s,a,o){const r=256*i,n=r+255,l=a.transformRequest(s.replace("{fontstack}",e).replace("{range}",`${r}-${n}`),c.Glyphs);t.l(l,((e,i)=>{if(e)o(e);else if(i){const e={};for(const s of t.n(i))e[s.id]=s;o(null,e);}}));},E.TinySDF=class{constructor({fontSize:t=24,buffer:e=3,radius:i=8,cutoff:s=.25,fontFamily:a="sans-serif",fontWeight:o="normal",fontStyle:r="normal"}={}){this.buffer=e,this.cutoff=s,this.radius=i;const n=this.size=t+4*e,l=this._createCanvas(n),h=this.ctx=l.getContext("2d",{willReadFrequently:!0});h.font=`${r} ${o} ${t}px ${a}`,h.textBaseline="alphabetic",h.textAlign="left",h.fillStyle="black",this.gridOuter=new Float64Array(n*n),this.gridInner=new Float64Array(n*n),this.f=new Float64Array(n),this.z=new Float64Array(n+1),this.v=new Uint16Array(n);}_createCanvas(t){const e=document.createElement("canvas");return e.width=e.height=t,e}draw(t){const{width:e,actualBoundingBoxAscent:i,actualBoundingBoxDescent:s,actualBoundingBoxLeft:a,actualBoundingBoxRight:o}=this.ctx.measureText(t),r=Math.ceil(i),n=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(o-a))),l=Math.min(this.size-this.buffer,r+Math.ceil(s)),h=n+2*this.buffer,c=l+2*this.buffer,u=Math.max(h*c,0),d=new Uint8ClampedArray(u),_={data:d,width:h,height:c,glyphWidth:n,glyphHeight:l,glyphTop:r,glyphLeft:0,glyphAdvance:e};if(0===n||0===l)return _;const{ctx:p,buffer:m,gridInner:f,gridOuter:g}=this;p.clearRect(m,m,n,l),p.fillText(t,m,m+r);const v=p.getImageData(m,m,n,l);g.fill(w,0,u),f.fill(0,0,u);for(let t=0;t<l;t++)for(let e=0;e<n;e++){const i=v.data[4*(t*n+e)+3]/255;if(0===i)continue;const s=(t+m)*h+e+m;if(1===i)g[s]=0,f[s]=w;else {const t=.5-i;g[s]=t>0?t*t:0,f[s]=t<0?t*t:0;}}T(g,0,0,h,c,h,this.f,this.v,this.z),T(f,m,m,n,l,h,this.f,this.v,this.z);for(let t=0;t<u;t++){const e=Math.sqrt(g[t])-Math.sqrt(f[t]);d[t]=Math.round(255-255*(e/this.radius+this.cutoff));}return _}};class S{constructor(){this.specification=t.v.light.position;}possiblyEvaluate(e,i){return t.z(e.expression.evaluate(i))}interpolate(e,i,s){return {x:t.B.number(e.x,i.x,s),y:t.B.number(e.y,i.y,s),z:t.B.number(e.z,i.z,s)}}}let C;class P extends t.E{constructor(e){super(),C=C||new t.r({anchor:new t.D(t.v.light.anchor),position:new S,color:new t.D(t.v.light.color),intensity:new t.D(t.v.light.intensity)}),this._transitionable=new t.T(C),this.setLight(e),this._transitioning=this._transitionable.untransitioned();}getLight(){return this._transitionable.serialize()}setLight(e,i={}){if(!this._validate(t.t,e,i))for(const t in e){const i=e[t];t.endsWith("-transition")?this._transitionable.setTransition(t.slice(0,-11),i):this._transitionable.setValue(t,i);}}updateTransitions(t){this._transitioning=this._transitionable.transitioned(t,this._transitioning);}hasTransition(){return this._transitioning.hasTransition()}recalculate(t){this.properties=this._transitioning.possiblyEvaluate(t);}_validate(e,i,s){return (!s||!1!==s.validate)&&t.x(this,e.call(t.y,t.e({value:i,style:{glyphs:!0,sprite:!0},styleSpec:t.v})))}}class D{constructor(t,e){this.width=t,this.height=e,this.nextRow=0,this.data=new Uint8Array(this.width*this.height),this.dashEntry={};}getDash(t,e){const i=t.join(",")+String(e);return this.dashEntry[i]||(this.dashEntry[i]=this.addDash(t,e)),this.dashEntry[i]}getDashRanges(t,e,i){const s=[];let a=t.length%2==1?-t[t.length-1]*i:0,o=t[0]*i,r=!0;s.push({left:a,right:o,isDash:r,zeroLength:0===t[0]});let n=t[0];for(let e=1;e<t.length;e++){r=!r;const l=t[e];a=n*i,n+=l,o=n*i,s.push({left:a,right:o,isDash:r,zeroLength:0===l});}return s}addRoundDash(t,e,i){const s=e/2;for(let e=-i;e<=i;e++){const a=this.width*(this.nextRow+i+e);let o=0,r=t[o];for(let n=0;n<this.width;n++){n/r.right>1&&(r=t[++o]);const l=Math.abs(n-r.left),h=Math.abs(n-r.right),c=Math.min(l,h);let u;const d=e/i*(s+1);if(r.isDash){const t=s-Math.abs(d);u=Math.sqrt(c*c+t*t);}else u=s-Math.sqrt(c*c+d*d);this.data[a+n]=Math.max(0,Math.min(255,u+128));}}}addRegularDash(t){for(let e=t.length-1;e>=0;--e){const i=t[e],s=t[e+1];i.zeroLength?t.splice(e,1):s&&s.isDash===i.isDash&&(s.left=i.left,t.splice(e,1));}const e=t[0],i=t[t.length-1];e.isDash===i.isDash&&(e.left=i.left-this.width,i.right=e.right+this.width);const s=this.width*this.nextRow;let a=0,o=t[a];for(let e=0;e<this.width;e++){e/o.right>1&&(o=t[++a]);const i=Math.abs(e-o.left),r=Math.abs(e-o.right),n=Math.min(i,r);this.data[s+e]=Math.max(0,Math.min(255,(o.isDash?n:-n)+128));}}addDash(e,i){const s=i?7:0,a=2*s+1;if(this.nextRow+a>this.height)return t.w("LineAtlas out of space"),null;let o=0;for(let t=0;t<e.length;t++)o+=e[t];if(0!==o){const t=this.width/o,a=this.getDashRanges(e,this.width,t);i?this.addRoundDash(a,t,s):this.addRegularDash(a);}const r={y:(this.nextRow+s+.5)/this.height,height:2*s/this.height,width:o};return this.nextRow+=a,this.dirty=!0,r}bind(t){const e=t.gl;this.texture?(e.bindTexture(e.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.width,this.height,e.ALPHA,e.UNSIGNED_BYTE,this.data))):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.ALPHA,this.width,this.height,0,e.ALPHA,e.UNSIGNED_BYTE,this.data));}}class M{constructor(e,i,s){this.workerPool=e,this.actors=[],this.currentActor=0,this.id=s;const a=this.workerPool.acquire(s);for(let e=0;e<a.length;e++){const o=new t.C(a[e],i,s);o.name=`Worker ${e}`,this.actors.push(o);}if(!this.actors.length)throw new Error("No actors found")}broadcast(e,i,s){t.o(this.actors,((t,s)=>{t.send(e,i,s);}),s=s||function(){});}getActor(){return this.currentActor=(this.currentActor+1)%this.actors.length,this.actors[this.currentActor]}remove(t=!0){this.actors.forEach((t=>{t.remove();})),this.actors=[],t&&this.workerPool.release(this.id);}}function z(e,i,s){const a=function(i,a){if(i)return s(i);if(a){const i=t.F(t.e(a,e),["tiles","minzoom","maxzoom","attribution","bounds","scheme","tileSize","encoding"]);a.vector_layers&&(i.vectorLayers=a.vector_layers,i.vectorLayerIds=i.vectorLayers.map((t=>t.id))),s(null,i);}};return e.url?t.f(i.transformRequest(e.url,c.Source),a):t.h.frame((()=>a(null,e)))}class L{constructor(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):Array.isArray(t)&&(4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1])));}setNorthEast(e){return this._ne=e instanceof t.L?new t.L(e.lng,e.lat):t.L.convert(e),this}setSouthWest(e){return this._sw=e instanceof t.L?new t.L(e.lng,e.lat):t.L.convert(e),this}extend(e){const i=this._sw,s=this._ne;let a,o;if(e instanceof t.L)a=e,o=e;else {if(!(e instanceof L))return Array.isArray(e)?4===e.length||e.every(Array.isArray)?this.extend(L.convert(e)):this.extend(t.L.convert(e)):e&&("lng"in e||"lon"in e)&&"lat"in e?this.extend(t.L.convert(e)):this;if(a=e._sw,o=e._ne,!a||!o)return this}return i||s?(i.lng=Math.min(a.lng,i.lng),i.lat=Math.min(a.lat,i.lat),s.lng=Math.max(o.lng,s.lng),s.lat=Math.max(o.lat,s.lat)):(this._sw=new t.L(a.lng,a.lat),this._ne=new t.L(o.lng,o.lat)),this}getCenter(){return new t.L((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)}getSouthWest(){return this._sw}getNorthEast(){return this._ne}getNorthWest(){return new t.L(this.getWest(),this.getNorth())}getSouthEast(){return new t.L(this.getEast(),this.getSouth())}getWest(){return this._sw.lng}getSouth(){return this._sw.lat}getEast(){return this._ne.lng}getNorth(){return this._ne.lat}toArray(){return [this._sw.toArray(),this._ne.toArray()]}toString(){return `LngLatBounds(${this._sw.toString()}, ${this._ne.toString()})`}isEmpty(){return !(this._sw&&this._ne)}contains(e){const{lng:i,lat:s}=t.L.convert(e);let a=this._sw.lng<=i&&i<=this._ne.lng;return this._sw.lng>this._ne.lng&&(a=this._sw.lng>=i&&i>=this._ne.lng),this._sw.lat<=s&&s<=this._ne.lat&&a}static convert(t){return t instanceof L?t:t?new L(t):t}static fromLngLat(e,i=0){const s=360*i/40075017,a=s/Math.cos(Math.PI/180*e.lat);return new L(new t.L(e.lng-a,e.lat-s),new t.L(e.lng+a,e.lat+s))}}class A{constructor(t,e,i){this.bounds=L.convert(this.validateBounds(t)),this.minzoom=e||0,this.maxzoom=i||24;}validateBounds(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]}contains(e){const i=Math.pow(2,e.z),s=Math.floor(t.G(this.bounds.getWest())*i),a=Math.floor(t.H(this.bounds.getNorth())*i),o=Math.ceil(t.G(this.bounds.getEast())*i),r=Math.ceil(t.H(this.bounds.getSouth())*i);return e.x>=s&&e.x<o&&e.y>=a&&e.y<r}}class R extends t.E{constructor(e,i,s,a){if(super(),this.load=()=>{this._loaded=!1,this.fire(new t.k("dataloading",{dataType:"source"})),this._tileJSONRequest=z(this._options,this.map._requestManager,((e,i)=>{this._tileJSONRequest=null,this._loaded=!0,this.map.style.sourceCaches[this.id].clearTiles(),e?this.fire(new t.j(e)):i&&(t.e(this,i),i.bounds&&(this.tileBounds=new A(i.bounds,this.minzoom,this.maxzoom)),this.fire(new t.k("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new t.k("data",{dataType:"source",sourceDataType:"content"})));}));},this.serialize=()=>t.e({},this._options),this.id=e,this.dispatcher=s,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,this._loaded=!1,t.e(this,t.F(i,["url","scheme","tileSize","promoteId"])),this._options=t.e({type:"vector"},i),this._collectResourceTiming=i.collectResourceTiming,512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512");this.setEventedParent(a);}loaded(){return this._loaded}hasTile(t){return !this.tileBounds||this.tileBounds.contains(t.canonical)}onAdd(t){this.map=t,this.load();}setSourceProperty(t){this._tileJSONRequest&&this._tileJSONRequest.cancel(),t(),this.load();}setTiles(t){return this.setSourceProperty((()=>{this._options.tiles=t;})),this}setUrl(t){return this.setSourceProperty((()=>{this.url=t,this._options.url=t;})),this}onRemove(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null);}loadTile(t,e){const i=t.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme),s={request:this.map._requestManager.transformRequest(i,c.Tile),uid:t.uid,tileID:t.tileID,zoom:t.tileID.overscaledZ,tileSize:this.tileSize*t.tileID.overscaleFactor(),type:this.type,source:this.id,pixelRatio:this.map.getPixelRatio(),showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId};function a(i,s){return delete t.request,t.aborted?e(null):i&&404!==i.status?e(i):(s&&s.resourceTiming&&(t.resourceTiming=s.resourceTiming),this.map._refreshExpiredTiles&&s&&t.setExpiryData(s),t.loadVectorData(s,this.map.painter),e(null),void(t.reloadCallback&&(this.loadTile(t,t.reloadCallback),t.reloadCallback=null)))}s.request.collectResourceTiming=this._collectResourceTiming,t.actor&&"expired"!==t.state?"loading"===t.state?t.reloadCallback=e:t.request=t.actor.send("reloadTile",s,a.bind(this)):(t.actor=this.dispatcher.getActor(),t.request=t.actor.send("loadTile",s,a.bind(this)));}abortTile(t){t.request&&(t.request.cancel(),delete t.request),t.actor&&t.actor.send("abortTile",{uid:t.uid,type:this.type,source:this.id},void 0);}unloadTile(t){t.unloadVectorData(),t.actor&&t.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id},void 0);}hasTransition(){return !1}}class k extends t.E{constructor(e,i,s,a){super(),this.id=e,this.dispatcher=s,this.setEventedParent(a),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=t.e({type:"raster"},i),t.e(this,t.F(i,["url","scheme","tileSize"]));}load(){this._loaded=!1,this.fire(new t.k("dataloading",{dataType:"source"})),this._tileJSONRequest=z(this._options,this.map._requestManager,((e,i)=>{this._tileJSONRequest=null,this._loaded=!0,e?this.fire(new t.j(e)):i&&(t.e(this,i),i.bounds&&(this.tileBounds=new A(i.bounds,this.minzoom,this.maxzoom)),this.fire(new t.k("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new t.k("data",{dataType:"source",sourceDataType:"content"})));}));}loaded(){return this._loaded}onAdd(t){this.map=t,this.load();}onRemove(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null);}setSourceProperty(t){this._tileJSONRequest&&this._tileJSONRequest.cancel(),t(),this.load();}setTiles(t){return this.setSourceProperty((()=>{this._options.tiles=t;})),this}serialize(){return t.e({},this._options)}hasTile(t){return !this.tileBounds||this.tileBounds.contains(t.canonical)}loadTile(t,e){const i=t.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme);t.request=h.getImage(this.map._requestManager.transformRequest(i,c.Tile),((i,s,a)=>{if(delete t.request,t.aborted)t.state="unloaded",e(null);else if(i)t.state="errored",e(i);else if(s){this.map._refreshExpiredTiles&&a&&t.setExpiryData(a);const i=this.map.painter.context,o=i.gl;t.texture=this.map.painter.getTileTexture(s.width),t.texture?t.texture.update(s,{useMipmap:!0}):(t.texture=new x(i,s,o.RGBA,{useMipmap:!0}),t.texture.bind(o.LINEAR,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),i.extTextureFilterAnisotropic&&o.texParameterf(o.TEXTURE_2D,i.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,i.extTextureFilterAnisotropicMax)),t.state="loaded",e(null);}}),this.map._refreshExpiredTiles);}abortTile(t,e){t.request&&(t.request.cancel(),delete t.request),e();}unloadTile(t,e){t.texture&&this.map.painter.saveTileTexture(t.texture),e();}hasTransition(){return !1}}class F extends k{constructor(e,i,s,a){super(e,i,s,a),this.type="raster-dem",this.maxzoom=22,this._options=t.e({type:"raster-dem"},i),this.encoding=i.encoding||"mapbox",this.redFactor=i.redFactor,this.greenFactor=i.greenFactor,this.blueFactor=i.blueFactor,this.baseShift=i.baseShift;}loadTile(e,i){const s=e.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme),a=this.map._requestManager.transformRequest(s,c.Tile);function o(t,s){t&&(e.state="errored",i(t)),s&&(e.dem=s,e.needsHillshadePrepare=!0,e.needsTerrainPrepare=!0,e.state="loaded",i(null));}e.neighboringTiles=this._getNeighboringTiles(e.tileID),e.request=h.getImage(a,((s,a,r)=>t._(this,void 0,void 0,(function*(){if(delete e.request,e.aborted)e.state="unloaded",i(null);else if(s)e.state="errored",i(s);else if(a){this.map._refreshExpiredTiles&&e.setExpiryData(r);const i=t.a(a)&&t.J()?a:yield function(e){return t._(this,void 0,void 0,(function*(){if("undefined"!=typeof VideoFrame&&t.K()){const i=e.width+2,s=e.height+2;try{return new t.R({width:i,height:s},yield t.M(e,-1,-1,i,s))}catch(t){}}return t.h.getImageData(e,1)}))}(a),s={uid:e.uid,coord:e.tileID,source:this.id,rawImageData:i,encoding:this.encoding,redFactor:this.redFactor,greenFactor:this.greenFactor,blueFactor:this.blueFactor,baseShift:this.baseShift};e.actor&&"expired"!==e.state||(e.actor=this.dispatcher.getActor(),e.actor.send("loadDEMTile",s,o));}}))),this.map._refreshExpiredTiles);}_getNeighboringTiles(e){const i=e.canonical,s=Math.pow(2,i.z),a=(i.x-1+s)%s,o=0===i.x?e.wrap-1:e.wrap,r=(i.x+1+s)%s,n=i.x+1===s?e.wrap+1:e.wrap,l={};return l[new t.O(e.overscaledZ,o,i.z,a,i.y).key]={backfilled:!1},l[new t.O(e.overscaledZ,n,i.z,r,i.y).key]={backfilled:!1},i.y>0&&(l[new t.O(e.overscaledZ,o,i.z,a,i.y-1).key]={backfilled:!1},l[new t.O(e.overscaledZ,e.wrap,i.z,i.x,i.y-1).key]={backfilled:!1},l[new t.O(e.overscaledZ,n,i.z,r,i.y-1).key]={backfilled:!1}),i.y+1<s&&(l[new t.O(e.overscaledZ,o,i.z,a,i.y+1).key]={backfilled:!1},l[new t.O(e.overscaledZ,e.wrap,i.z,i.x,i.y+1).key]={backfilled:!1},l[new t.O(e.overscaledZ,n,i.z,r,i.y+1).key]={backfilled:!1}),l}unloadTile(t){t.demTexture&&this.map.painter.saveTileTexture(t.demTexture),t.fbo&&(t.fbo.destroy(),delete t.fbo),t.dem&&delete t.dem,delete t.neighboringTiles,t.state="unloaded",t.actor&&t.actor.send("removeDEMTile",{uid:t.uid,source:this.id});}}class B extends t.E{constructor(e,i,s,a){super(),this.load=()=>{this._updateWorkerData();},this.serialize=()=>t.e({},this._options,{type:this.type,data:this._data}),this.id=e,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this._removed=!1,this._pendingLoads=0,this.actor=s.getActor(),this.setEventedParent(a),this._data=i.data,this._options=t.e({},i),this._collectResourceTiming=i.collectResourceTiming,void 0!==i.maxzoom&&(this.maxzoom=i.maxzoom),i.type&&(this.type=i.type),i.attribution&&(this.attribution=i.attribution),this.promoteId=i.promoteId;const o=t.N/this.tileSize;this.workerOptions=t.e({source:this.id,cluster:i.cluster||!1,geojsonVtOptions:{buffer:(void 0!==i.buffer?i.buffer:128)*o,tolerance:(void 0!==i.tolerance?i.tolerance:.375)*o,extent:t.N,maxZoom:this.maxzoom,lineMetrics:i.lineMetrics||!1,generateId:i.generateId||!1},superclusterOptions:{maxZoom:void 0!==i.clusterMaxZoom?i.clusterMaxZoom:this.maxzoom-1,minPoints:Math.max(2,i.clusterMinPoints||2),extent:t.N,radius:(i.clusterRadius||50)*o,log:!1,generateId:i.generateId||!1},clusterProperties:i.clusterProperties,filter:i.filter},i.workerOptions),"string"==typeof this.promoteId&&(this.workerOptions.promoteId=this.promoteId);}onAdd(t){this.map=t,this.load();}setData(t){return this._data=t,this._updateWorkerData(),this}updateData(t){return this._updateWorkerData(t),this}setClusterOptions(t){return this.workerOptions.cluster=t.cluster,t&&(void 0!==t.clusterRadius&&(this.workerOptions.superclusterOptions.radius=t.clusterRadius),void 0!==t.clusterMaxZoom&&(this.workerOptions.superclusterOptions.maxZoom=t.clusterMaxZoom)),this._updateWorkerData(),this}getClusterExpansionZoom(t,e){return this.actor.send("geojson.getClusterExpansionZoom",{clusterId:t,source:this.id},e),this}getClusterChildren(t,e){return this.actor.send("geojson.getClusterChildren",{clusterId:t,source:this.id},e),this}getClusterLeaves(t,e,i,s){return this.actor.send("geojson.getClusterLeaves",{source:this.id,clusterId:t,limit:e,offset:i},s),this}_updateWorkerData(e){const i=t.e({},this.workerOptions);e?i.dataDiff=e:"string"==typeof this._data?(i.request=this.map._requestManager.transformRequest(t.h.resolveURL(this._data),c.Source),i.request.collectResourceTiming=this._collectResourceTiming):i.data=JSON.stringify(this._data),this._pendingLoads++,this.fire(new t.k("dataloading",{dataType:"source"})),this.actor.send(`${this.type}.loadData`,i,((e,i)=>{if(this._pendingLoads--,this._removed||i&&i.abandoned)return void this.fire(new t.k("dataabort",{dataType:"source"}));let s=null;if(i&&i.resourceTiming&&i.resourceTiming[this.id]&&(s=i.resourceTiming[this.id].slice(0)),e)return void this.fire(new t.j(e));const a={dataType:"source"};this._collectResourceTiming&&s&&s.length>0&&t.e(a,{resourceTiming:s}),this.fire(new t.k("data",Object.assign(Object.assign({},a),{sourceDataType:"metadata"}))),this.fire(new t.k("data",Object.assign(Object.assign({},a),{sourceDataType:"content"})));}));}loaded(){return 0===this._pendingLoads}loadTile(t,e){const i=t.actor?"reloadTile":"loadTile";t.actor=this.actor;const s={type:this.type,uid:t.uid,tileID:t.tileID,zoom:t.tileID.overscaledZ,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,pixelRatio:this.map.getPixelRatio(),showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId};t.request=this.actor.send(i,s,((s,a)=>(delete t.request,t.unloadVectorData(),t.aborted?e(null):s?e(s):(t.loadVectorData(a,this.map.painter,"reloadTile"===i),e(null)))));}abortTile(t){t.request&&(t.request.cancel(),delete t.request),t.aborted=!0;}unloadTile(t){t.unloadVectorData(),this.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id});}onRemove(){this._removed=!0,this.actor.send("removeSource",{type:this.type,source:this.id});}hasTransition(){return !1}}var O=t.Q([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]);class N extends t.E{constructor(e,i,s,a){super(),this.load=(e,i)=>{this._loaded=!1,this.fire(new t.k("dataloading",{dataType:"source"})),this.url=this.options.url,this._request=h.getImage(this.map._requestManager.transformRequest(this.url,c.Image),((s,a)=>{this._request=null,this._loaded=!0,s?this.fire(new t.j(s)):a&&(this.image=a,e&&(this.coordinates=e),i&&i(),this._finishLoading());}));},this.prepare=()=>{if(0===Object.keys(this.tiles).length||!this.image)return;const e=this.map.painter.context,i=e.gl;this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,O.members)),this.boundsSegments||(this.boundsSegments=t.S.simpleSegment(0,0,4,2)),this.texture||(this.texture=new x(e,this.image,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE));let s=!1;for(const t in this.tiles){const e=this.tiles[t];"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture,s=!0);}s&&this.fire(new t.k("data",{dataType:"source",sourceDataType:"idle",sourceId:this.id}));},this.serialize=()=>({type:"image",url:this.options.url,coordinates:this.coordinates}),this.id=e,this.dispatcher=s,this.coordinates=i.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this._loaded=!1,this.setEventedParent(a),this.options=i;}loaded(){return this._loaded}updateImage(t){return t.url?(this._request&&(this._request.cancel(),this._request=null),this.options.url=t.url,this.load(t.coordinates,(()=>{this.texture=null;})),this):this}_finishLoading(){this.map&&(this.setCoordinates(this.coordinates),this.fire(new t.k("data",{dataType:"source",sourceDataType:"metadata"})));}onAdd(t){this.map=t,this.load();}onRemove(){this._request&&(this._request.cancel(),this._request=null);}setCoordinates(e){this.coordinates=e;const i=e.map(t.U.fromLngLat);this.tileID=function(e){let i=1/0,s=1/0,a=-1/0,o=-1/0;for(const t of e)i=Math.min(i,t.x),s=Math.min(s,t.y),a=Math.max(a,t.x),o=Math.max(o,t.y);const r=Math.max(a-i,o-s),n=Math.max(0,Math.floor(-Math.log(r)/Math.LN2)),l=Math.pow(2,n);return new t.W(n,Math.floor((i+a)/2*l),Math.floor((s+o)/2*l))}(i),this.minzoom=this.maxzoom=this.tileID.z;const s=i.map((t=>this.tileID.getTilePoint(t)._round()));return this._boundsArray=new t.V,this._boundsArray.emplaceBack(s[0].x,s[0].y,0,0),this._boundsArray.emplaceBack(s[1].x,s[1].y,t.N,0),this._boundsArray.emplaceBack(s[3].x,s[3].y,0,t.N),this._boundsArray.emplaceBack(s[2].x,s[2].y,t.N,t.N),this.boundsBuffer&&(this.boundsBuffer.destroy(),delete this.boundsBuffer),this.fire(new t.k("data",{dataType:"source",sourceDataType:"content"})),this}loadTile(t,e){this.tileID&&this.tileID.equals(t.tileID.canonical)?(this.tiles[String(t.tileID.wrap)]=t,t.buckets={},e(null)):(t.state="errored",e(null));}hasTransition(){return !1}}class U extends N{constructor(e,i,s,a){super(e,i,s,a),this.load=()=>{this._loaded=!1;const e=this.options;this.urls=[];for(const t of e.urls)this.urls.push(this.map._requestManager.transformRequest(t,c.Source).url);t.X(this.urls,((e,i)=>{this._loaded=!0,e?this.fire(new t.j(e)):i&&(this.video=i,this.video.loop=!0,this.video.addEventListener("playing",(()=>{this.map.triggerRepaint();})),this.map&&this.video.play(),this._finishLoading());}));},this.prepare=()=>{if(0===Object.keys(this.tiles).length||this.video.readyState<2)return;const e=this.map.painter.context,i=e.gl;this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,O.members)),this.boundsSegments||(this.boundsSegments=t.S.simpleSegment(0,0,4,2)),this.texture?this.video.paused||(this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE),i.texSubImage2D(i.TEXTURE_2D,0,0,0,i.RGBA,i.UNSIGNED_BYTE,this.video)):(this.texture=new x(e,this.video,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE));let s=!1;for(const t in this.tiles){const e=this.tiles[t];"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture,s=!0);}s&&this.fire(new t.k("data",{dataType:"source",sourceDataType:"idle",sourceId:this.id}));},this.serialize=()=>({type:"video",urls:this.urls,coordinates:this.coordinates}),this.roundZoom=!0,this.type="video",this.options=i;}pause(){this.video&&this.video.pause();}play(){this.video&&this.video.play();}seek(e){if(this.video){const i=this.video.seekable;e<i.start(0)||e>i.end(0)?this.fire(new t.j(new t.Y(`sources.${this.id}`,null,`Playback for this video can be set only between the ${i.start(0)} and ${i.end(0)}-second mark.`))):this.video.currentTime=e;}}getVideo(){return this.video}onAdd(t){this.map||(this.map=t,this.load(),this.video&&(this.video.play(),this.setCoordinates(this.coordinates)));}hasTransition(){return this.video&&!this.video.paused}}class Z extends N{constructor(e,i,s,a){super(e,i,s,a),this.load=()=>{this._loaded=!0,this.canvas||(this.canvas=this.options.canvas instanceof HTMLCanvasElement?this.options.canvas:document.getElementById(this.options.canvas)),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions()?this.fire(new t.j(new Error("Canvas dimensions cannot be less than or equal to zero."))):(this.play=function(){this._playing=!0,this.map.triggerRepaint();},this.pause=function(){this._playing&&(this.prepare(),this._playing=!1);},this._finishLoading());},this.prepare=()=>{let e=!1;if(this.canvas.width!==this.width&&(this.width=this.canvas.width,e=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,e=!0),this._hasInvalidDimensions())return;if(0===Object.keys(this.tiles).length)return;const i=this.map.painter.context,s=i.gl;this.boundsBuffer||(this.boundsBuffer=i.createVertexBuffer(this._boundsArray,O.members)),this.boundsSegments||(this.boundsSegments=t.S.simpleSegment(0,0,4,2)),this.texture?(e||this._playing)&&this.texture.update(this.canvas,{premultiply:!0}):this.texture=new x(i,this.canvas,s.RGBA,{premultiply:!0});let a=!1;for(const t in this.tiles){const e=this.tiles[t];"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture,a=!0);}a&&this.fire(new t.k("data",{dataType:"source",sourceDataType:"idle",sourceId:this.id}));},this.serialize=()=>({type:"canvas",coordinates:this.coordinates}),i.coordinates?Array.isArray(i.coordinates)&&4===i.coordinates.length&&!i.coordinates.some((t=>!Array.isArray(t)||2!==t.length||t.some((t=>"number"!=typeof t))))||this.fire(new t.j(new t.Y(`sources.${e}`,null,'"coordinates" property must be an array of 4 longitude/latitude array pairs'))):this.fire(new t.j(new t.Y(`sources.${e}`,null,'missing required property "coordinates"'))),i.animate&&"boolean"!=typeof i.animate&&this.fire(new t.j(new t.Y(`sources.${e}`,null,'optional "animate" property must be a boolean value'))),i.canvas?"string"==typeof i.canvas||i.canvas instanceof HTMLCanvasElement||this.fire(new t.j(new t.Y(`sources.${e}`,null,'"canvas" must be either a string representing the ID of the canvas element from which to read, or an HTMLCanvasElement instance'))):this.fire(new t.j(new t.Y(`sources.${e}`,null,'missing required property "canvas"'))),this.options=i,this.animate=void 0===i.animate||i.animate;}getCanvas(){return this.canvas}onAdd(t){this.map=t,this.load(),this.canvas&&this.animate&&this.play();}onRemove(){this.pause();}hasTransition(){return this._playing}_hasInvalidDimensions(){for(const t of [this.canvas.width,this.canvas.height])if(isNaN(t)||t<=0)return !0;return !1}}const G={},j=t=>{switch(t){case"geojson":return B;case"image":return N;case"raster":return k;case"raster-dem":return F;case"vector":return R;case"video":return U;case"canvas":return Z}return G[t]};function V(e,i){const s=t.Z();return t.$(s,s,[1,1,0]),t.a0(s,s,[.5*e.width,.5*e.height,1]),t.a1(s,s,e.calculatePosMatrix(i.toUnwrapped()))}function q(t,e,i,s,a,o){const r=function(t,e,i){if(t)for(const s of t){const t=e[s];if(t&&t.source===i&&"fill-extrusion"===t.type)return !0}else for(const t in e){const s=e[t];if(s.source===i&&"fill-extrusion"===s.type)return !0}return !1}(a&&a.layers,e,t.id),n=o.maxPitchScaleFactor(),l=t.tilesIn(s,n,r);l.sort($);const h=[];for(const s of l)h.push({wrappedTileID:s.tileID.wrapped().key,queryResults:s.tile.queryRenderedFeatures(e,i,t._state,s.queryGeometry,s.cameraQueryGeometry,s.scale,a,o,n,V(t.transform,s.tileID))});const c=function(t){const e={},i={};for(const s of t){const t=s.queryResults,a=s.wrappedTileID,o=i[a]=i[a]||{};for(const i in t){const s=t[i],a=o[i]=o[i]||{},r=e[i]=e[i]||[];for(const t of s)a[t.featureIndex]||(a[t.featureIndex]=!0,r.push(t));}}return e}(h);for(const e in c)c[e].forEach((e=>{const i=e.feature,s=t.getFeatureState(i.layer["source-layer"],i.id);i.source=i.layer.source,i.layer["source-layer"]&&(i.sourceLayer=i.layer["source-layer"]),i.state=s;}));return c}function $(t,e){const i=t.tileID,s=e.tileID;return i.overscaledZ-s.overscaledZ||i.canonical.y-s.canonical.y||i.wrap-s.wrap||i.canonical.x-s.canonical.x}class W{constructor(e,i){this.timeAdded=0,this.fadeEndTime=0,this.tileID=e,this.uid=t.a2(),this.uses=0,this.tileSize=i,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.rtt=[],this.rttCoords={},this.expiredRequestCount=0,this.state="loading";}registerFadeDuration(t){const e=t+this.timeAdded;e<this.fadeEndTime||(this.fadeEndTime=e);}wasRequested(){return "errored"===this.state||"loaded"===this.state||"reloading"===this.state}clearTextures(t){this.demTexture&&t.saveTileTexture(this.demTexture),this.demTexture=null;}loadVectorData(e,i,s){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",e){e.featureIndex&&(this.latestFeatureIndex=e.featureIndex,e.rawTileData?(this.latestRawTileData=e.rawTileData,this.latestFeatureIndex.rawTileData=e.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=e.collisionBoxArray,this.buckets=function(t,e){const i={};if(!e)return i;for(const s of t){const t=s.layerIds.map((t=>e.getLayer(t))).filter(Boolean);if(0!==t.length){s.layers=t,s.stateDependentLayerIds&&(s.stateDependentLayers=s.stateDependentLayerIds.map((e=>t.filter((t=>t.id===e))[0])));for(const e of t)i[e.id]=s;}}return i}(e.buckets,i.style),this.hasSymbolBuckets=!1;for(const e in this.buckets){const i=this.buckets[e];if(i instanceof t.a4){if(this.hasSymbolBuckets=!0,!s)break;i.justReloaded=!0;}}if(this.hasRTLText=!1,this.hasSymbolBuckets)for(const e in this.buckets){const i=this.buckets[e];if(i instanceof t.a4&&i.hasRTLText){this.hasRTLText=!0,t.a5();break}}this.queryPadding=0;for(const t in this.buckets){const e=this.buckets[t];this.queryPadding=Math.max(this.queryPadding,i.style.getLayer(t).queryRadius(e));}e.imageAtlas&&(this.imageAtlas=e.imageAtlas),e.glyphAtlasImage&&(this.glyphAtlasImage=e.glyphAtlasImage);}else this.collisionBoxArray=new t.a3;}unloadVectorData(){for(const t in this.buckets)this.buckets[t].destroy();this.buckets={},this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.imageAtlas&&(this.imageAtlas=null),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded";}getBucket(t){return this.buckets[t.id]}upload(t){for(const e in this.buckets){const i=this.buckets[e];i.uploadPending()&&i.upload(t);}const e=t.gl;this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new x(t,this.imageAtlas.image,e.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new x(t,this.glyphAtlasImage,e.ALPHA),this.glyphAtlasImage=null);}prepare(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture);}queryRenderedFeatures(t,e,i,s,a,o,r,n,l,h){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:s,cameraQueryGeometry:a,scale:o,tileSize:this.tileSize,pixelPosMatrix:h,transform:n,params:r,queryPadding:this.queryPadding*l},t,e,i):{}}querySourceFeatures(e,i){const s=this.latestFeatureIndex;if(!s||!s.rawTileData)return;const a=s.loadVTLayers(),o=i&&i.sourceLayer?i.sourceLayer:"",r=a._geojsonTileLayer||a[o];if(!r)return;const n=t.a6(i&&i.filter),{z:l,x:h,y:c}=this.tileID.canonical,u={z:l,x:h,y:c};for(let i=0;i<r.length;i++){const a=r.feature(i);if(n.needGeometry){const e=t.a7(a,!0);if(!n.filter(new t.a8(this.tileID.overscaledZ),e,this.tileID.canonical))continue}else if(!n.filter(new t.a8(this.tileID.overscaledZ),a))continue;const d=s.getId(a,o),_=new t.a9(a,l,h,c,d);_.tile=u,e.push(_);}}hasData(){return "loaded"===this.state||"reloading"===this.state||"expired"===this.state}patternsLoaded(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length}setExpiryData(e){const i=this.expirationTime;if(e.cacheControl){const i=t.aa(e.cacheControl);i["max-age"]&&(this.expirationTime=Date.now()+1e3*i["max-age"]);}else e.expires&&(this.expirationTime=new Date(e.expires).getTime());if(this.expirationTime){const t=Date.now();let e=!1;if(this.expirationTime>t)e=!1;else if(i)if(this.expirationTime<i)e=!0;else {const s=this.expirationTime-i;s?this.expirationTime=t+Math.max(s,3e4):e=!0;}else e=!0;e?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0;}}getExpiryTimeout(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)}setFeatureState(t,e){if(!this.latestFeatureIndex||!this.latestFeatureIndex.rawTileData||0===Object.keys(t).length)return;const i=this.latestFeatureIndex.loadVTLayers();for(const s in this.buckets){if(!e.style.hasLayer(s))continue;const a=this.buckets[s],o=a.layers[0].sourceLayer||"_geojsonTileLayer",r=i[o],n=t[o];if(!r||!n||0===Object.keys(n).length)continue;a.update(n,r,this.imageAtlas&&this.imageAtlas.patternPositions||{});const l=e&&e.style&&e.style.getLayer(s);l&&(this.queryPadding=Math.max(this.queryPadding,l.queryRadius(a)));}}holdingForFade(){return void 0!==this.symbolFadeHoldUntil}symbolFadeFinished(){return !this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<t.h.now()}clearFadeHold(){this.symbolFadeHoldUntil=void 0;}setHoldDuration(e){this.symbolFadeHoldUntil=t.h.now()+e;}setDependencies(t,e){const i={};for(const t of e)i[t]=!0;this.dependencies[t]=i;}hasDependency(t,e){for(const i of t){const t=this.dependencies[i];if(t)for(const i of e)if(t[i])return !0}return !1}}class H{constructor(t,e){this.max=t,this.onRemove=e,this.reset();}reset(){for(const t in this.data)for(const e of this.data[t])e.timeout&&clearTimeout(e.timeout),this.onRemove(e.value);return this.data={},this.order=[],this}add(t,e,i){const s=t.wrapped().key;void 0===this.data[s]&&(this.data[s]=[]);const a={value:e,timeout:void 0};if(void 0!==i&&(a.timeout=setTimeout((()=>{this.remove(t,a);}),i)),this.data[s].push(a),this.order.push(s),this.order.length>this.max){const t=this._getAndRemoveByKey(this.order[0]);t&&this.onRemove(t);}return this}has(t){return t.wrapped().key in this.data}getAndRemove(t){return this.has(t)?this._getAndRemoveByKey(t.wrapped().key):null}_getAndRemoveByKey(t){const e=this.data[t].shift();return e.timeout&&clearTimeout(e.timeout),0===this.data[t].length&&delete this.data[t],this.order.splice(this.order.indexOf(t),1),e.value}getByKey(t){const e=this.data[t];return e?e[0].value:null}get(t){return this.has(t)?this.data[t.wrapped().key][0].value:null}remove(t,e){if(!this.has(t))return this;const i=t.wrapped().key,s=void 0===e?0:this.data[i].indexOf(e),a=this.data[i][s];return this.data[i].splice(s,1),a.timeout&&clearTimeout(a.timeout),0===this.data[i].length&&delete this.data[i],this.onRemove(a.value),this.order.splice(this.order.indexOf(i),1),this}setMaxSize(t){for(this.max=t;this.order.length>this.max;){const t=this._getAndRemoveByKey(this.order[0]);t&&this.onRemove(t);}return this}filter(t){const e=[];for(const i in this.data)for(const s of this.data[i])t(s.value)||e.push(s);for(const t of e)this.remove(t.value.tileID,t);}}class X{constructor(){this.state={},this.stateChanges={},this.deletedStates={};}updateState(e,i,s){const a=String(i);if(this.stateChanges[e]=this.stateChanges[e]||{},this.stateChanges[e][a]=this.stateChanges[e][a]||{},t.e(this.stateChanges[e][a],s),null===this.deletedStates[e]){this.deletedStates[e]={};for(const t in this.state[e])t!==a&&(this.deletedStates[e][t]=null);}else if(this.deletedStates[e]&&null===this.deletedStates[e][a]){this.deletedStates[e][a]={};for(const t in this.state[e][a])s[t]||(this.deletedStates[e][a][t]=null);}else for(const t in s)this.deletedStates[e]&&this.deletedStates[e][a]&&null===this.deletedStates[e][a][t]&&delete this.deletedStates[e][a][t];}removeFeatureState(t,e,i){if(null===this.deletedStates[t])return;const s=String(e);if(this.deletedStates[t]=this.deletedStates[t]||{},i&&void 0!==e)null!==this.deletedStates[t][s]&&(this.deletedStates[t][s]=this.deletedStates[t][s]||{},this.deletedStates[t][s][i]=null);else if(void 0!==e)if(this.stateChanges[t]&&this.stateChanges[t][s])for(i in this.deletedStates[t][s]={},this.stateChanges[t][s])this.deletedStates[t][s][i]=null;else this.deletedStates[t][s]=null;else this.deletedStates[t]=null;}getState(e,i){const s=String(i),a=t.e({},(this.state[e]||{})[s],(this.stateChanges[e]||{})[s]);if(null===this.deletedStates[e])return {};if(this.deletedStates[e]){const t=this.deletedStates[e][i];if(null===t)return {};for(const e in t)delete a[e];}return a}initializeTileState(t,e){t.setFeatureState(this.state,e);}coalesceChanges(e,i){const s={};for(const e in this.stateChanges){this.state[e]=this.state[e]||{};const i={};for(const s in this.stateChanges[e])this.state[e][s]||(this.state[e][s]={}),t.e(this.state[e][s],this.stateChanges[e][s]),i[s]=this.state[e][s];s[e]=i;}for(const e in this.deletedStates){this.state[e]=this.state[e]||{};const i={};if(null===this.deletedStates[e])for(const t in this.state[e])i[t]={},this.state[e][t]={};else for(const t in this.deletedStates[e]){if(null===this.deletedStates[e][t])this.state[e][t]={};else for(const i of Object.keys(this.deletedStates[e][t]))delete this.state[e][t][i];i[t]=this.state[e][t];}s[e]=s[e]||{},t.e(s[e],i);}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(s).length)for(const t in e)e[t].setFeatureState(s,i);}}class K extends t.E{constructor(t,e,i){super(),this.id=t,this.dispatcher=i,this.on("data",(t=>{"source"===t.dataType&&"metadata"===t.sourceDataType&&(this._sourceLoaded=!0),this._sourceLoaded&&!this._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(this.reload(),this.transform&&this.update(this.transform,this.terrain),this._didEmitContent=!0);})),this.on("dataloading",(()=>{this._sourceErrored=!1;})),this.on("error",(()=>{this._sourceErrored=this._source.loaded();})),this._source=((t,e,i,s)=>{const a=new(j(e.type))(t,e,i,s);if(a.id!==t)throw new Error(`Expected Source id to be ${t} instead of ${a.id}`);return a})(t,e,i,this),this._tiles={},this._cache=new H(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._maxTileCacheZoomLevels=null,this._loadedParentTiles={},this._coveredTiles={},this._state=new X,this._didEmitContent=!1,this._updated=!1;}onAdd(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null,this._maxTileCacheZoomLevels=t?t._maxTileCacheZoomLevels:null,this._source&&this._source.onAdd&&this._source.onAdd(t);}onRemove(t){this.clearTiles(),this._source&&this._source.onRemove&&this._source.onRemove(t);}loaded(){if(this._sourceErrored)return !0;if(!this._sourceLoaded)return !1;if(!this._source.loaded())return !1;if(!(void 0===this.used&&void 0===this.usedForTerrain||this.used||this.usedForTerrain))return !0;if(!this._updated)return !1;for(const t in this._tiles){const e=this._tiles[t];if("loaded"!==e.state&&"errored"!==e.state)return !1}return !0}getSource(){return this._source}pause(){this._paused=!0;}resume(){if(!this._paused)return;const t=this._shouldReloadOnResume;this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform,this.terrain);}_loadTile(t,e){return this._source.loadTile(t,e)}_unloadTile(t){if(this._source.unloadTile)return this._source.unloadTile(t,(()=>{}))}_abortTile(e){this._source.abortTile&&this._source.abortTile(e,(()=>{})),this._source.fire(new t.k("dataabort",{tile:e,coord:e.tileID,dataType:"source"}));}serialize(){return this._source.serialize()}prepare(t){this._source.prepare&&this._source.prepare(),this._state.coalesceChanges(this._tiles,this.map?this.map.painter:null);for(const e in this._tiles){const i=this._tiles[e];i.upload(t),i.prepare(this.map.style.imageManager);}}getIds(){return Object.values(this._tiles).map((t=>t.tileID)).sort(Q).map((t=>t.key))}getRenderableIds(e){const i=[];for(const t in this._tiles)this._isIdRenderable(t,e)&&i.push(this._tiles[t]);return e?i.sort(((e,i)=>{const s=e.tileID,a=i.tileID,o=new t.P(s.canonical.x,s.canonical.y)._rotate(this.transform.angle),r=new t.P(a.canonical.x,a.canonical.y)._rotate(this.transform.angle);return s.overscaledZ-a.overscaledZ||r.y-o.y||r.x-o.x})).map((t=>t.tileID.key)):i.map((t=>t.tileID)).sort(Q).map((t=>t.key))}hasRenderableParent(t){const e=this.findLoadedParent(t,0);return !!e&&this._isIdRenderable(e.tileID.key)}_isIdRenderable(t,e){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]&&(e||!this._tiles[t].holdingForFade())}reload(){if(this._paused)this._shouldReloadOnResume=!0;else {this._cache.reset();for(const t in this._tiles)"errored"!==this._tiles[t].state&&this._reloadTile(t,"reloading");}}_reloadTile(t,e){const i=this._tiles[t];i&&("loading"!==i.state&&(i.state=e),this._loadTile(i,this._tileLoaded.bind(this,i,t,e)));}_tileLoaded(e,i,s,a){if(a)return e.state="errored",void(404!==a.status?this._source.fire(new t.j(a,{tile:e})):this.update(this.transform,this.terrain));e.timeAdded=t.h.now(),"expired"===s&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(i,e),"raster-dem"===this.getSource().type&&e.dem&&this._backfillDEM(e),this._state.initializeTileState(e,this.map?this.map.painter:null),e.aborted||this._source.fire(new t.k("data",{dataType:"source",tile:e,coord:e.tileID}));}_backfillDEM(t){const e=this.getRenderableIds();for(let s=0;s<e.length;s++){const a=e[s];if(t.neighboringTiles&&t.neighboringTiles[a]){const e=this.getTileByID(a);i(t,e),i(e,t);}}function i(t,e){t.needsHillshadePrepare=!0,t.needsTerrainPrepare=!0;let i=e.tileID.canonical.x-t.tileID.canonical.x;const s=e.tileID.canonical.y-t.tileID.canonical.y,a=Math.pow(2,t.tileID.canonical.z),o=e.tileID.key;0===i&&0===s||Math.abs(s)>1||(Math.abs(i)>1&&(1===Math.abs(i+a)?i+=a:1===Math.abs(i-a)&&(i-=a)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,i,s),t.neighboringTiles&&t.neighboringTiles[o]&&(t.neighboringTiles[o].backfilled=!0)));}}getTile(t){return this.getTileByID(t.key)}getTileByID(t){return this._tiles[t]}_retainLoadedChildren(t,e,i,s){for(const a in this._tiles){let o=this._tiles[a];if(s[a]||!o.hasData()||o.tileID.overscaledZ<=e||o.tileID.overscaledZ>i)continue;let r=o.tileID;for(;o&&o.tileID.overscaledZ>e+1;){const t=o.tileID.scaledTo(o.tileID.overscaledZ-1);o=this._tiles[t.key],o&&o.hasData()&&(r=t);}let n=r;for(;n.overscaledZ>e;)if(n=n.scaledTo(n.overscaledZ-1),t[n.key]){s[r.key]=r;break}}}findLoadedParent(t,e){if(t.key in this._loadedParentTiles){const i=this._loadedParentTiles[t.key];return i&&i.tileID.overscaledZ>=e?i:null}for(let i=t.overscaledZ-1;i>=e;i--){const e=t.scaledTo(i),s=this._getLoadedTile(e);if(s)return s}}_getLoadedTile(t){const e=this._tiles[t.key];return e&&e.hasData()?e:this._cache.getByKey(t.wrapped().key)}updateCacheSize(e){const i=Math.ceil(e.width/this._source.tileSize)+1,s=Math.ceil(e.height/this._source.tileSize)+1,a=Math.floor(i*s*(null===this._maxTileCacheZoomLevels?t.c.MAX_TILE_CACHE_ZOOM_LEVELS:this._maxTileCacheZoomLevels)),o="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,a):a;this._cache.setMaxSize(o);}handleWrapJump(t){const e=Math.round((t-(void 0===this._prevLng?t:this._prevLng))/360);if(this._prevLng=t,e){const t={};for(const i in this._tiles){const s=this._tiles[i];s.tileID=s.tileID.unwrapTo(s.tileID.wrap+e),t[s.tileID.key]=s;}this._tiles=t;for(const t in this._timers)clearTimeout(this._timers[t]),delete this._timers[t];for(const t in this._tiles)this._setTileReloadTimer(t,this._tiles[t]);}}update(e,i){if(this.transform=e,this.terrain=i,!this._sourceLoaded||this._paused)return;let s;this.updateCacheSize(e),this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used||this.usedForTerrain?this._source.tileID?s=e.getVisibleUnwrappedCoordinates(this._source.tileID).map((e=>new t.O(e.canonical.z,e.wrap,e.canonical.z,e.canonical.x,e.canonical.y))):(s=e.coveringTiles({tileSize:this.usedForTerrain?this.tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:!this.usedForTerrain&&this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled,terrain:i}),this._source.hasTile&&(s=s.filter((t=>this._source.hasTile(t))))):s=[];const a=e.coveringZoomLevel(this._source),o=Math.max(a-K.maxOverzooming,this._source.minzoom),r=Math.max(a+K.maxUnderzooming,this._source.minzoom);if(this.usedForTerrain){const t={};for(const e of s)if(e.canonical.z>this._source.minzoom){const i=e.scaledTo(e.canonical.z-1);t[i.key]=i;const s=e.scaledTo(Math.max(this._source.minzoom,Math.min(e.canonical.z,5)));t[s.key]=s;}s=s.concat(Object.values(t));}const n=0===s.length&&!this._updated&&this._didEmitContent;this._updated=!0,n&&this.fire(new t.k("data",{sourceDataType:"idle",dataType:"source",sourceId:this.id}));const l=this._updateRetainedTiles(s,a);if(Y(this._source.type)){const e={},n={},h=Object.keys(l),c=t.h.now();for(const t of h){const i=l[t],s=this._tiles[t];if(!s||0!==s.fadeEndTime&&s.fadeEndTime<=c)continue;const a=this.findLoadedParent(i,o);a&&(this._addTile(a.tileID),e[a.tileID.key]=a.tileID),n[t]=i;}this._retainLoadedChildren(n,a,r,l);for(const t in e)l[t]||(this._coveredTiles[t]=!0,l[t]=e[t]);if(i){const t={},e={};for(const i of s)this._tiles[i.key].hasData()?t[i.key]=i:e[i.key]=i;for(const i in e){const s=e[i].children(this._source.maxzoom);this._tiles[s[0].key]&&this._tiles[s[1].key]&&this._tiles[s[2].key]&&this._tiles[s[3].key]&&(t[s[0].key]=l[s[0].key]=s[0],t[s[1].key]=l[s[1].key]=s[1],t[s[2].key]=l[s[2].key]=s[2],t[s[3].key]=l[s[3].key]=s[3],delete e[i]);}for(const i in e){const s=this.findLoadedParent(e[i],this._source.minzoom);if(s){t[s.tileID.key]=l[s.tileID.key]=s.tileID;for(const e in t)t[e].isChildOf(s.tileID)&&delete t[e];}}for(const e in this._tiles)t[e]||(this._coveredTiles[e]=!0);}}for(const t in l)this._tiles[t].clearFadeHold();const h=t.ab(this._tiles,l);for(const t of h){const e=this._tiles[t];e.hasSymbolBuckets&&!e.holdingForFade()?e.setHoldDuration(this.map._fadeDuration):e.hasSymbolBuckets&&!e.symbolFadeFinished()||this._removeTile(t);}this._updateLoadedParentTileCache();}releaseSymbolFadeTiles(){for(const t in this._tiles)this._tiles[t].holdingForFade()&&this._removeTile(t);}_updateRetainedTiles(t,e){const i={},s={},a=Math.max(e-K.maxOverzooming,this._source.minzoom),o=Math.max(e+K.maxUnderzooming,this._source.minzoom),r={};for(const s of t){const t=this._addTile(s);i[s.key]=s,t.hasData()||e<this._source.maxzoom&&(r[s.key]=s);}this._retainLoadedChildren(r,e,o,i);for(const o of t){let t=this._tiles[o.key];if(t.hasData())continue;if(e+1>this._source.maxzoom){const t=o.children(this._source.maxzoom)[0],e=this.getTile(t);if(e&&e.hasData()){i[t.key]=t;continue}}else {const t=o.children(this._source.maxzoom);if(i[t[0].key]&&i[t[1].key]&&i[t[2].key]&&i[t[3].key])continue}let r=t.wasRequested();for(let e=o.overscaledZ-1;e>=a;--e){const a=o.scaledTo(e);if(s[a.key])break;if(s[a.key]=!0,t=this.getTile(a),!t&&r&&(t=this._addTile(a)),t){const e=t.hasData();if((r||e)&&(i[a.key]=a),r=t.wasRequested(),e)break}}}return i}_updateLoadedParentTileCache(){this._loadedParentTiles={};for(const t in this._tiles){const e=[];let i,s=this._tiles[t].tileID;for(;s.overscaledZ>0;){if(s.key in this._loadedParentTiles){i=this._loadedParentTiles[s.key];break}e.push(s.key);const t=s.scaledTo(s.overscaledZ-1);if(i=this._getLoadedTile(t),i)break;s=t;}for(const t of e)this._loadedParentTiles[t]=i;}}_addTile(e){let i=this._tiles[e.key];if(i)return i;i=this._cache.getAndRemove(e),i&&(this._setTileReloadTimer(e.key,i),i.tileID=e,this._state.initializeTileState(i,this.map?this.map.painter:null),this._cacheTimers[e.key]&&(clearTimeout(this._cacheTimers[e.key]),delete this._cacheTimers[e.key],this._setTileReloadTimer(e.key,i)));const s=i;return i||(i=new W(e,this._source.tileSize*e.overscaleFactor()),this._loadTile(i,this._tileLoaded.bind(this,i,e.key,i.state))),i.uses++,this._tiles[e.key]=i,s||this._source.fire(new t.k("dataloading",{tile:i,coord:i.tileID,dataType:"source"})),i}_setTileReloadTimer(t,e){t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t]);const i=e.getExpiryTimeout();i&&(this._timers[t]=setTimeout((()=>{this._reloadTile(t,"expired"),delete this._timers[t];}),i));}_removeTile(t){const e=this._tiles[t];e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()&&"reloading"!==e.state?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))));}clearTiles(){this._shouldReloadOnResume=!1,this._paused=!1;for(const t in this._tiles)this._removeTile(t);this._cache.reset();}tilesIn(e,i,s){const a=[],o=this.transform;if(!o)return a;const r=s?o.getCameraQueryGeometry(e):e,n=e.map((t=>o.pointCoordinate(t,this.terrain))),l=r.map((t=>o.pointCoordinate(t,this.terrain))),h=this.getIds();let c=1/0,u=1/0,d=-1/0,_=-1/0;for(const t of l)c=Math.min(c,t.x),u=Math.min(u,t.y),d=Math.max(d,t.x),_=Math.max(_,t.y);for(let e=0;e<h.length;e++){const s=this._tiles[h[e]];if(s.holdingForFade())continue;const r=s.tileID,p=Math.pow(2,o.zoom-s.tileID.overscaledZ),m=i*s.queryPadding*t.N/s.tileSize/p,f=[r.getTilePoint(new t.U(c,u)),r.getTilePoint(new t.U(d,_))];if(f[0].x-m<t.N&&f[0].y-m<t.N&&f[1].x+m>=0&&f[1].y+m>=0){const t=n.map((t=>r.getTilePoint(t))),e=l.map((t=>r.getTilePoint(t)));a.push({tile:s,tileID:r,queryGeometry:t,cameraQueryGeometry:e,scale:p});}}return a}getVisibleCoordinates(t){const e=this.getRenderableIds(t).map((t=>this._tiles[t].tileID));for(const t of e)t.posMatrix=this.transform.calculatePosMatrix(t.toUnwrapped());return e}hasTransition(){if(this._source.hasTransition())return !0;if(Y(this._source.type)){const e=t.h.now();for(const t in this._tiles)if(this._tiles[t].fadeEndTime>=e)return !0}return !1}setFeatureState(t,e,i){this._state.updateState(t=t||"_geojsonTileLayer",e,i);}removeFeatureState(t,e,i){this._state.removeFeatureState(t=t||"_geojsonTileLayer",e,i);}getFeatureState(t,e){return this._state.getState(t=t||"_geojsonTileLayer",e)}setDependencies(t,e,i){const s=this._tiles[t];s&&s.setDependencies(e,i);}reloadTilesForDependencies(t,e){for(const i in this._tiles)this._tiles[i].hasDependency(t,e)&&this._reloadTile(i,"reloading");this._cache.filter((i=>!i.hasDependency(t,e)));}}function Q(t,e){const i=Math.abs(2*t.wrap)-+(t.wrap<0),s=Math.abs(2*e.wrap)-+(e.wrap<0);return t.overscaledZ-e.overscaledZ||s-i||e.canonical.y-t.canonical.y||e.canonical.x-t.canonical.x}function Y(t){return "raster"===t||"image"===t||"video"===t}K.maxOverzooming=10,K.maxUnderzooming=3;const J="mapboxgl_preloaded_worker_pool";class tt{constructor(){this.active={};}acquire(e){if(!this.workers)for(this.workers=[];this.workers.length<tt.workerCount;)this.workers.push(new Worker(t.c.WORKER_URL));return this.active[e]=!0,this.workers.slice()}release(t){delete this.active[t],0===this.numActive()&&(this.workers.forEach((t=>{t.terminate();})),this.workers=null);}isPreloaded(){return !!this.active[J]}numActive(){return Object.keys(this.active).length}}const et=Math.floor(t.h.hardwareConcurrency/2);let it;function st(){return it||(it=new tt),it}tt.workerCount=t.ac(globalThis)?Math.max(Math.min(et,3),1):1;class at{constructor(t,e){this.reset(t,e);}reset(t,e){this.points=t||[],this._distances=[0];for(let t=1;t<this.points.length;t++)this._distances[t]=this._distances[t-1]+this.points[t].dist(this.points[t-1]);this.length=this._distances[this._distances.length-1],this.padding=Math.min(e||0,.5*this.length),this.paddedLength=this.length-2*this.padding;}lerp(e){if(1===this.points.length)return this.points[0];e=t.ad(e,0,1);let i=1,s=this._distances[i];const a=e*this.paddedLength+this.padding;for(;s<a&&i<this._distances.length;)s=this._distances[++i];const o=i-1,r=this._distances[o],n=s-r,l=n>0?(a-r)/n:0;return this.points[o].mult(1-l).add(this.points[i].mult(l))}}function ot(t,e){let i=!0;return "always"===t||"never"!==t&&"never"!==e||(i=!1),i}class rt{constructor(t,e,i){const s=this.boxCells=[],a=this.circleCells=[];this.xCellCount=Math.ceil(t/i),this.yCellCount=Math.ceil(e/i);for(let t=0;t<this.xCellCount*this.yCellCount;t++)s.push([]),a.push([]);this.circleKeys=[],this.boxKeys=[],this.bboxes=[],this.circles=[],this.width=t,this.height=e,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/e,this.boxUid=0,this.circleUid=0;}keysLength(){return this.boxKeys.length+this.circleKeys.length}insert(t,e,i,s,a){this._forEachCell(e,i,s,a,this._insertBoxCell,this.boxUid++),this.boxKeys.push(t),this.bboxes.push(e),this.bboxes.push(i),this.bboxes.push(s),this.bboxes.push(a);}insertCircle(t,e,i,s){this._forEachCell(e-s,i-s,e+s,i+s,this._insertCircleCell,this.circleUid++),this.circleKeys.push(t),this.circles.push(e),this.circles.push(i),this.circles.push(s);}_insertBoxCell(t,e,i,s,a,o){this.boxCells[a].push(o);}_insertCircleCell(t,e,i,s,a,o){this.circleCells[a].push(o);}_query(t,e,i,s,a,o,r){if(i<0||t>this.width||s<0||e>this.height)return [];const n=[];if(t<=0&&e<=0&&this.width<=i&&this.height<=s){if(a)return [{key:null,x1:t,y1:e,x2:i,y2:s}];for(let t=0;t<this.boxKeys.length;t++)n.push({key:this.boxKeys[t],x1:this.bboxes[4*t],y1:this.bboxes[4*t+1],x2:this.bboxes[4*t+2],y2:this.bboxes[4*t+3]});for(let t=0;t<this.circleKeys.length;t++){const e=this.circles[3*t],i=this.circles[3*t+1],s=this.circles[3*t+2];n.push({key:this.circleKeys[t],x1:e-s,y1:i-s,x2:e+s,y2:i+s});}}else this._forEachCell(t,e,i,s,this._queryCell,n,{hitTest:a,overlapMode:o,seenUids:{box:{},circle:{}}},r);return n}query(t,e,i,s){return this._query(t,e,i,s,!1,null)}hitTest(t,e,i,s,a,o){return this._query(t,e,i,s,!0,a,o).length>0}hitTestCircle(t,e,i,s,a){const o=t-i,r=t+i,n=e-i,l=e+i;if(r<0||o>this.width||l<0||n>this.height)return !1;const h=[];return this._forEachCell(o,n,r,l,this._queryCellCircle,h,{hitTest:!0,overlapMode:s,circle:{x:t,y:e,radius:i},seenUids:{box:{},circle:{}}},a),h.length>0}_queryCell(t,e,i,s,a,o,r,n){const{seenUids:l,hitTest:h,overlapMode:c}=r,u=this.boxCells[a];if(null!==u){const a=this.bboxes;for(const r of u)if(!l.box[r]){l.box[r]=!0;const u=4*r,d=this.boxKeys[r];if(t<=a[u+2]&&e<=a[u+3]&&i>=a[u+0]&&s>=a[u+1]&&(!n||n(d))&&(!h||!ot(c,d.overlapMode))&&(o.push({key:d,x1:a[u],y1:a[u+1],x2:a[u+2],y2:a[u+3]}),h))return !0}}const d=this.circleCells[a];if(null!==d){const a=this.circles;for(const r of d)if(!l.circle[r]){l.circle[r]=!0;const u=3*r,d=this.circleKeys[r];if(this._circleAndRectCollide(a[u],a[u+1],a[u+2],t,e,i,s)&&(!n||n(d))&&(!h||!ot(c,d.overlapMode))){const t=a[u],e=a[u+1],i=a[u+2];if(o.push({key:d,x1:t-i,y1:e-i,x2:t+i,y2:e+i}),h)return !0}}}return !1}_queryCellCircle(t,e,i,s,a,o,r,n){const{circle:l,seenUids:h,overlapMode:c}=r,u=this.boxCells[a];if(null!==u){const t=this.bboxes;for(const e of u)if(!h.box[e]){h.box[e]=!0;const i=4*e,s=this.boxKeys[e];if(this._circleAndRectCollide(l.x,l.y,l.radius,t[i+0],t[i+1],t[i+2],t[i+3])&&(!n||n(s))&&!ot(c,s.overlapMode))return o.push(!0),!0}}const d=this.circleCells[a];if(null!==d){const t=this.circles;for(const e of d)if(!h.circle[e]){h.circle[e]=!0;const i=3*e,s=this.circleKeys[e];if(this._circlesCollide(t[i],t[i+1],t[i+2],l.x,l.y,l.radius)&&(!n||n(s))&&!ot(c,s.overlapMode))return o.push(!0),!0}}}_forEachCell(t,e,i,s,a,o,r,n){const l=this._convertToXCellCoord(t),h=this._convertToYCellCoord(e),c=this._convertToXCellCoord(i),u=this._convertToYCellCoord(s);for(let d=l;d<=c;d++)for(let l=h;l<=u;l++)if(a.call(this,t,e,i,s,this.xCellCount*l+d,o,r,n))return}_convertToXCellCoord(t){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(t*this.xScale)))}_convertToYCellCoord(t){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(t*this.yScale)))}_circlesCollide(t,e,i,s,a,o){const r=s-t,n=a-e,l=i+o;return l*l>r*r+n*n}_circleAndRectCollide(t,e,i,s,a,o,r){const n=(o-s)/2,l=Math.abs(t-(s+n));if(l>n+i)return !1;const h=(r-a)/2,c=Math.abs(e-(a+h));if(c>h+i)return !1;if(l<=n||c<=h)return !0;const u=l-n,d=c-h;return u*u+d*d<=i*i}}function nt(e,i,s,a,o){const r=t.Z();return i?(t.a0(r,r,[1/o,1/o,1]),s||t.ae(r,r,a.angle)):t.a1(r,a.labelPlaneMatrix,e),r}function lt(e,i,s,a,o){if(i){const i=t.af(e);return t.a0(i,i,[o,o,1]),s||t.ae(i,i,-a.angle),i}return a.glCoordMatrix}function ht(e,i,s){let a;s?(a=[e.x,e.y,s(e.x,e.y),1],t.ag(a,a,i)):(a=[e.x,e.y,0,1],Tt(a,a,i));const o=a[3];return {point:new t.P(a[0]/o,a[1]/o),signedDistanceFromCamera:o}}function ct(t,e){return .5+t/e*.5}function ut(t,e){const i=t[0]/t[3],s=t[1]/t[3];return i>=-e[0]&&i<=e[0]&&s>=-e[1]&&s<=e[1]}function dt(e,i,s,a,o,r,n,l,h,c){const u=a?e.textSizeData:e.iconSizeData,d=t.ah(u,s.transform.zoom),_=[256/s.width*2+1,256/s.height*2+1],p=a?e.text.dynamicLayoutVertexArray:e.icon.dynamicLayoutVertexArray;p.clear();const m=e.lineVertexArray,f=a?e.text.placedSymbolArray:e.icon.placedSymbolArray,g=s.transform.width/s.transform.height;let v=!1;for(let a=0;a<f.length;a++){const x=f.get(a);if(x.hidden||x.writingMode===t.ai.vertical&&!v){wt(x.numGlyphs,p);continue}let y;if(v=!1,c?(y=[x.anchorX,x.anchorY,c(x.anchorX,x.anchorY),1],t.ag(y,y,i)):(y=[x.anchorX,x.anchorY,0,1],Tt(y,y,i)),!ut(y,_)){wt(x.numGlyphs,p);continue}const b=ct(s.transform.cameraToCenterDistance,y[3]),w=t.aj(u,d,x),T=n?w/b:w*b,I=new t.P(x.anchorX,x.anchorY),E=ht(I,o,c).point,S={projections:{},offsets:{}},C=mt(x,T,!1,l,i,o,r,e.glyphOffsetArray,m,p,E,I,S,g,h,c);v=C.useVertical,(C.notEnoughRoom||v||C.needsFlipping&&mt(x,T,!0,l,i,o,r,e.glyphOffsetArray,m,p,E,I,S,g,h,c).notEnoughRoom)&&wt(x.numGlyphs,p);}a?e.text.dynamicLayoutVertexBuffer.updateData(p):e.icon.dynamicLayoutVertexBuffer.updateData(p);}function _t(t,e,i,s,a,o,r,n,l,h,c,u,d){const _=n.glyphStartIndex+n.numGlyphs,p=n.lineStartIndex,m=n.lineStartIndex+n.lineLength,f=e.getoffsetX(n.glyphStartIndex),g=e.getoffsetX(_-1),v=yt(t*f,i,s,a,o,r,n.segment,p,m,l,h,c,u,d);if(!v)return null;const x=yt(t*g,i,s,a,o,r,n.segment,p,m,l,h,c,u,d);return x?{first:v,last:x}:null}function pt(e,i,s,a){return e===t.ai.horizontal&&Math.abs(s.y-i.y)>Math.abs(s.x-i.x)*a?{useVertical:!0}:(e===t.ai.vertical?i.y<s.y:i.x>s.x)?{needsFlipping:!0}:null}function mt(e,i,s,a,o,r,n,l,h,c,u,d,_,p,m,f){const g=i/24,v=e.lineOffsetX*g,x=e.lineOffsetY*g;let y;if(e.numGlyphs>1){const t=e.glyphStartIndex+e.numGlyphs,i=e.lineStartIndex,o=e.lineStartIndex+e.lineLength,c=_t(g,l,v,x,s,u,d,e,h,r,_,m,f);if(!c)return {notEnoughRoom:!0};const b=ht(c.first.point,n,f).point,w=ht(c.last.point,n,f).point;if(a&&!s){const t=pt(e.writingMode,b,w,p);if(t)return t}y=[c.first];for(let a=e.glyphStartIndex+1;a<t-1;a++)y.push(yt(g*l.getoffsetX(a),v,x,s,u,d,e.segment,i,o,h,r,_,m,f));y.push(c.last);}else {if(a&&!s){const i=ht(d,o,f).point,s=e.lineStartIndex+e.segment+1,a=new t.P(h.getx(s),h.gety(s)),r=ht(a,o,f),n=r.signedDistanceFromCamera>0?r.point:ft(d,a,i,1,o,f),l=pt(e.writingMode,i,n,p);if(l)return l}const i=yt(g*l.getoffsetX(e.glyphStartIndex),v,x,s,u,d,e.segment,e.lineStartIndex,e.lineStartIndex+e.lineLength,h,r,_,m,f);if(!i)return {notEnoughRoom:!0};y=[i];}for(const e of y)t.ak(c,e.point,e.angle);return {}}function ft(t,e,i,s,a,o){const r=ht(t.add(t.sub(e)._unit()),a,o).point,n=i.sub(r);return i.add(n._mult(s/n.mag()))}function gt(e,i){const{projectionCache:s,lineVertexArray:a,labelPlaneMatrix:o,tileAnchorPoint:r,distanceFromAnchor:n,getElevation:l,previousVertex:h,direction:c,absOffsetX:u}=i;if(s.projections[e])return s.projections[e];const d=new t.P(a.getx(e),a.gety(e)),_=ht(d,o,l);if(_.signedDistanceFromCamera>0)return s.projections[e]=_.point,_.point;const p=e-c;return ft(0===n?r:new t.P(a.getx(p),a.gety(p)),d,h,u-n+1,o,l)}function vt(t,e,i){return t._unit()._perp()._mult(e*i)}function xt(e,i,s,a,o,r,n,l){const{projectionCache:h,direction:c}=l;if(h.offsets[e])return h.offsets[e];const u=s.add(i);if(e+c<a||e+c>=o)return h.offsets[e]=u,u;const d=gt(e+c,l),_=vt(d.sub(s),n,c),p=s.add(_),m=d.add(_);return h.offsets[e]=t.al(r,u,p,m)||u,h.offsets[e]}function yt(t,e,i,s,a,o,r,n,l,h,c,u,d,_){const p=s?t-e:t+e;let m=p>0?1:-1,f=0;s&&(m*=-1,f=Math.PI),m<0&&(f+=Math.PI);let g,v,x=m>0?n+r:n+r+1,y=a,b=a,w=0,T=0;const I=Math.abs(p),E=[];let S;for(;w+T<=I;){if(x+=m,x<n||x>=l)return null;w+=T,b=y,v=g;const t={projectionCache:u,lineVertexArray:h,labelPlaneMatrix:c,tileAnchorPoint:o,distanceFromAnchor:w,getElevation:_,previousVertex:b,direction:m,absOffsetX:I};if(y=gt(x,t),0===i)E.push(b),S=y.sub(b);else {let e;const s=y.sub(b);e=0===s.mag()?vt(gt(x+m,t).sub(y),i,m):vt(s,i,m),v||(v=b.add(e)),g=xt(x,e,y,n,l,v,i,t),E.push(v),S=g.sub(v);}T=S.mag();}const C=S._mult((I-w)/T)._add(v||b),P=f+Math.atan2(y.y-b.y,y.x-b.x);return E.push(C),{point:C,angle:d?P:0,path:E}}const bt=new Float32Array([-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0]);function wt(t,e){for(let i=0;i<t;i++){const t=e.length;e.resize(t+4),e.float32.set(bt,3*t);}}function Tt(t,e,i){const s=e[0],a=e[1];return t[0]=i[0]*s+i[4]*a+i[12],t[1]=i[1]*s+i[5]*a+i[13],t[3]=i[3]*s+i[7]*a+i[15],t}const It=100;class Et{constructor(t,e=new rt(t.width+200,t.height+200,25),i=new rt(t.width+200,t.height+200,25)){this.transform=t,this.grid=e,this.ignoredGrid=i,this.pitchfactor=Math.cos(t._pitch)*t.cameraToCenterDistance,this.screenRightBoundary=t.width+It,this.screenBottomBoundary=t.height+It,this.gridRightBoundary=t.width+200,this.gridBottomBoundary=t.height+200,this.perspectiveRatioCutoff=.6;}placeCollisionBox(t,e,i,s,a,o){const r=this.projectAndGetPerspectiveRatio(s,t.anchorPointX,t.anchorPointY,o),n=i*r.perspectiveRatio,l=t.x1*n+r.point.x,h=t.y1*n+r.point.y,c=t.x2*n+r.point.x,u=t.y2*n+r.point.y;return !this.isInsideGrid(l,h,c,u)||"always"!==e&&this.grid.hitTest(l,h,c,u,e,a)||r.perspectiveRatio<this.perspectiveRatioCutoff?{box:[],offscreen:!1}:{box:[l,h,c,u],offscreen:this.isOffscreen(l,h,c,u)}}placeCollisionCircles(e,i,s,a,o,r,n,l,h,c,u,d,_,p){const m=[],f=new t.P(i.anchorX,i.anchorY),g=ht(f,r,p),v=ct(this.transform.cameraToCenterDistance,g.signedDistanceFromCamera),x=(c?o/v:o*v)/t.ap,y=ht(f,n,p).point,b=_t(x,a,i.lineOffsetX*x,i.lineOffsetY*x,!1,y,f,i,s,n,{projections:{},offsets:{}},!1,p);let w=!1,T=!1,I=!0;if(b){const i=.5*d*v+_,s=new t.P(-100,-100),a=new t.P(this.screenRightBoundary,this.screenBottomBoundary),o=new at,r=b.first,n=b.last;let c=[];for(let t=r.path.length-1;t>=1;t--)c.push(r.path[t]);for(let t=1;t<n.path.length;t++)c.push(n.path[t]);const f=2.5*i;if(l){const t=c.map((t=>ht(t,l,p)));c=t.some((t=>t.signedDistanceFromCamera<=0))?[]:t.map((t=>t.point));}let g=[];if(c.length>0){const e=c[0].clone(),i=c[0].clone();for(let t=1;t<c.length;t++)e.x=Math.min(e.x,c[t].x),e.y=Math.min(e.y,c[t].y),i.x=Math.max(i.x,c[t].x),i.y=Math.max(i.y,c[t].y);g=e.x>=s.x&&i.x<=a.x&&e.y>=s.y&&i.y<=a.y?[c]:i.x<s.x||e.x>a.x||i.y<s.y||e.y>a.y?[]:t.am([c],s.x,s.y,a.x,a.y);}for(const t of g){o.reset(t,.25*i);let s=0;s=o.length<=.5*i?1:Math.ceil(o.paddedLength/f)+1;for(let t=0;t<s;t++){const a=t/Math.max(s-1,1),r=o.lerp(a),n=r.x+It,l=r.y+It;m.push(n,l,i,0);const c=n-i,d=l-i,_=n+i,p=l+i;if(I=I&&this.isOffscreen(c,d,_,p),T=T||this.isInsideGrid(c,d,_,p),"always"!==e&&this.grid.hitTestCircle(n,l,i,e,u)&&(w=!0,!h))return {circles:[],offscreen:!1,collisionDetected:w}}}}return {circles:!h&&w||!T||v<this.perspectiveRatioCutoff?[]:m,offscreen:I,collisionDetected:w}}queryRenderedSymbols(e){if(0===e.length||0===this.grid.keysLength()&&0===this.ignoredGrid.keysLength())return {};const i=[];let s=1/0,a=1/0,o=-1/0,r=-1/0;for(const n of e){const e=new t.P(n.x+It,n.y+It);s=Math.min(s,e.x),a=Math.min(a,e.y),o=Math.max(o,e.x),r=Math.max(r,e.y),i.push(e);}const n=this.grid.query(s,a,o,r).concat(this.ignoredGrid.query(s,a,o,r)),l={},h={};for(const e of n){const s=e.key;if(void 0===l[s.bucketInstanceId]&&(l[s.bucketInstanceId]={}),l[s.bucketInstanceId][s.featureIndex])continue;const a=[new t.P(e.x1,e.y1),new t.P(e.x2,e.y1),new t.P(e.x2,e.y2),new t.P(e.x1,e.y2)];t.an(i,a)&&(l[s.bucketInstanceId][s.featureIndex]=!0,void 0===h[s.bucketInstanceId]&&(h[s.bucketInstanceId]=[]),h[s.bucketInstanceId].push(s.featureIndex));}return h}insertCollisionBox(t,e,i,s,a,o){(i?this.ignoredGrid:this.grid).insert({bucketInstanceId:s,featureIndex:a,collisionGroupID:o,overlapMode:e},t[0],t[1],t[2],t[3]);}insertCollisionCircles(t,e,i,s,a,o){const r=i?this.ignoredGrid:this.grid,n={bucketInstanceId:s,featureIndex:a,collisionGroupID:o,overlapMode:e};for(let e=0;e<t.length;e+=4)r.insertCircle(n,t[e],t[e+1],t[e+2]);}projectAndGetPerspectiveRatio(e,i,s,a){let o;return a?(o=[i,s,a(i,s),1],t.ag(o,o,e)):(o=[i,s,0,1],Tt(o,o,e)),{point:new t.P((o[0]/o[3]+1)/2*this.transform.width+It,(-o[1]/o[3]+1)/2*this.transform.height+It),perspectiveRatio:.5+this.transform.cameraToCenterDistance/o[3]*.5}}isOffscreen(t,e,i,s){return i<It||t>=this.screenRightBoundary||s<It||e>this.screenBottomBoundary}isInsideGrid(t,e,i,s){return i>=0&&t<this.gridRightBoundary&&s>=0&&e<this.gridBottomBoundary}getViewportMatrix(){const e=t.ao([]);return t.$(e,e,[-100,-100,0]),e}}function St(e,i,s){return i*(t.N/(e.tileSize*Math.pow(2,s-e.tileID.overscaledZ)))}class Ct{constructor(t,e,i,s){this.opacity=t?Math.max(0,Math.min(1,t.opacity+(t.placed?e:-e))):s&&i?1:0,this.placed=i;}isHidden(){return 0===this.opacity&&!this.placed}}class Pt{constructor(t,e,i,s,a){this.text=new Ct(t?t.text:null,e,i,a),this.icon=new Ct(t?t.icon:null,e,s,a);}isHidden(){return this.text.isHidden()&&this.icon.isHidden()}}class Dt{constructor(t,e,i){this.text=t,this.icon=e,this.skipFade=i;}}class Mt{constructor(){this.invProjMatrix=t.Z(),this.viewportMatrix=t.Z(),this.circles=[];}}class zt{constructor(t,e,i,s,a){this.bucketInstanceId=t,this.featureIndex=e,this.sourceLayerIndex=i,this.bucketIndex=s,this.tileID=a;}}class Lt{constructor(t){this.crossSourceCollisions=t,this.maxGroupID=0,this.collisionGroups={};}get(t){if(this.crossSourceCollisions)return {ID:0,predicate:null};if(!this.collisionGroups[t]){const e=++this.maxGroupID;this.collisionGroups[t]={ID:e,predicate:t=>t.collisionGroupID===e};}return this.collisionGroups[t]}}function At(e,i,s,a,o){const{horizontalAlign:r,verticalAlign:n}=t.au(e);return new t.P(-(r-.5)*i+a[0]*o,-(n-.5)*s+a[1]*o)}function Rt(e,i,s,a,o,r){const{x1:n,x2:l,y1:h,y2:c,anchorPointX:u,anchorPointY:d}=e,_=new t.P(i,s);return a&&_._rotate(o?r:-r),{x1:n+_.x,y1:h+_.y,x2:l+_.x,y2:c+_.y,anchorPointX:u,anchorPointY:d}}class kt{constructor(t,e,i,s,a){this.transform=t.clone(),this.terrain=e,this.collisionIndex=new Et(this.transform),this.placements={},this.opacities={},this.variableOffsets={},this.stale=!1,this.commitTime=0,this.fadeDuration=i,this.retainedQueryData={},this.collisionGroups=new Lt(s),this.collisionCircleArrays={},this.prevPlacement=a,a&&(a.prevPlacement=void 0),this.placedOrientations={};}getBucketParts(e,i,s,a){const o=s.getBucket(i),r=s.latestFeatureIndex;if(!o||!r||i.id!==o.layerIds[0])return;const n=s.collisionBoxArray,l=o.layers[0].layout,h=Math.pow(2,this.transform.zoom-s.tileID.overscaledZ),c=s.tileSize/t.N,u=this.transform.calculatePosMatrix(s.tileID.toUnwrapped()),d="map"===l.get("text-pitch-alignment"),_="map"===l.get("text-rotation-alignment"),p=St(s,1,this.transform.zoom),m=nt(u,d,_,this.transform,p);let f=null;if(d){const e=lt(u,d,_,this.transform,p);f=t.a1([],this.transform.labelPlaneMatrix,e);}this.retainedQueryData[o.bucketInstanceId]=new zt(o.bucketInstanceId,r,o.sourceLayerIndex,o.index,s.tileID);const g={bucket:o,layout:l,posMatrix:u,textLabelPlaneMatrix:m,labelToScreenMatrix:f,scale:h,textPixelRatio:c,holdingForFade:s.holdingForFade(),collisionBoxArray:n,partiallyEvaluatedTextSize:t.ah(o.textSizeData,this.transform.zoom),collisionGroup:this.collisionGroups.get(o.sourceID)};if(a)for(const t of o.sortKeyRanges){const{sortKey:i,symbolInstanceStart:s,symbolInstanceEnd:a}=t;e.push({sortKey:i,symbolInstanceStart:s,symbolInstanceEnd:a,parameters:g});}else e.push({symbolInstanceStart:0,symbolInstanceEnd:o.symbolInstances.length,parameters:g});}attemptAnchorPlacement(e,i,s,a,o,r,n,l,h,c,u,d,_,p,m,f){const g=t.aq[e.textAnchor],v=[e.textOffset0,e.textOffset1],x=At(g,s,a,v,o),y=this.collisionIndex.placeCollisionBox(Rt(i,x.x,x.y,r,n,this.transform.angle),u,l,h,c.predicate,f);if((!m||0!==this.collisionIndex.placeCollisionBox(Rt(m,x.x,x.y,r,n,this.transform.angle),u,l,h,c.predicate,f).box.length)&&y.box.length>0){let t;if(this.prevPlacement&&this.prevPlacement.variableOffsets[d.crossTileID]&&this.prevPlacement.placements[d.crossTileID]&&this.prevPlacement.placements[d.crossTileID].text&&(t=this.prevPlacement.variableOffsets[d.crossTileID].anchor),0===d.crossTileID)throw new Error("symbolInstance.crossTileID can't be 0");return this.variableOffsets[d.crossTileID]={textOffset:v,width:s,height:a,anchor:g,textBoxScale:o,prevAnchor:t},this.markUsedJustification(_,g,d,p),_.allowVerticalPlacement&&(this.markUsedOrientation(_,p,d),this.placedOrientations[d.crossTileID]=p),{shift:x,placedGlyphBoxes:y}}}placeLayerBucketPart(e,i,s){const{bucket:a,layout:o,posMatrix:r,textLabelPlaneMatrix:n,labelToScreenMatrix:l,textPixelRatio:h,holdingForFade:c,collisionBoxArray:u,partiallyEvaluatedTextSize:d,collisionGroup:_}=e.parameters,p=o.get("text-optional"),m=o.get("icon-optional"),f=t.ar(o,"text-overlap","text-allow-overlap"),g="always"===f,v=t.ar(o,"icon-overlap","icon-allow-overlap"),x="always"===v,y="map"===o.get("text-rotation-alignment"),b="map"===o.get("text-pitch-alignment"),w="none"!==o.get("icon-text-fit"),T="viewport-y"===o.get("symbol-z-order"),I=g&&(x||!a.hasIconData()||m),E=x&&(g||!a.hasTextData()||p);!a.collisionArrays&&u&&a.deserializeCollisionBoxes(u);const S=this.retainedQueryData[a.bucketInstanceId].tileID,C=this.terrain?(t,e)=>this.terrain.getElevation(S,t,e):null,P=(e,u)=>{var x,T;if(i[e.crossTileID])return;if(c)return void(this.placements[e.crossTileID]=new Dt(!1,!1,!1));let S=!1,P=!1,D=!0,M=null,z={box:null,offscreen:null},L={box:null,offscreen:null},A=null,R=null,k=null,F=0,B=0,O=0;u.textFeatureIndex?F=u.textFeatureIndex:e.useRuntimeCollisionCircles&&(F=e.featureIndex),u.verticalTextFeatureIndex&&(B=u.verticalTextFeatureIndex);const N=u.textBox;if(N){const i=i=>{let s=t.ai.horizontal;if(a.allowVerticalPlacement&&!i&&this.prevPlacement){const t=this.prevPlacement.placedOrientations[e.crossTileID];t&&(this.placedOrientations[e.crossTileID]=t,s=t,this.markUsedOrientation(a,s,e));}return s},s=(i,s)=>{if(a.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&u.verticalTextBox){for(const e of a.writingModes)if(e===t.ai.vertical?(z=s(),L=z):z=i(),z&&z.box&&z.box.length)break}else z=i();},o=e.textAnchorOffsetStartIndex,n=e.textAnchorOffsetEndIndex;if(n===o){const o=(t,i)=>{const s=this.collisionIndex.placeCollisionBox(t,f,h,r,_.predicate,C);return s&&s.box&&s.box.length&&(this.markUsedOrientation(a,i,e),this.placedOrientations[e.crossTileID]=i),s};s((()=>o(N,t.ai.horizontal)),(()=>{const i=u.verticalTextBox;return a.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&i?o(i,t.ai.vertical):{box:null,offscreen:null}})),i(z&&z.box&&z.box.length);}else {let l=t.aq[null===(T=null===(x=this.prevPlacement)||void 0===x?void 0:x.variableOffsets[e.crossTileID])||void 0===T?void 0:T.anchor];const c=(t,i,s)=>{const c=t.x2-t.x1,u=t.y2-t.y1,d=e.textBoxScale,p=w&&"never"===v?i:null;let m={box:[],offscreen:!1},g="never"===f?1:2,x="never";l&&g++;for(let i=0;i<g;i++){for(let i=o;i<n;i++){const o=a.textAnchorOffsets.get(i);if(l&&o.textAnchor!==l)continue;const n=this.attemptAnchorPlacement(o,t,c,u,d,y,b,h,r,_,x,e,a,s,p,C);if(n&&(m=n.placedGlyphBoxes,m&&m.box&&m.box.length))return S=!0,M=n.shift,m}l?l=null:x=f;}return m};s((()=>c(N,u.iconBox,t.ai.horizontal)),(()=>{const i=u.verticalTextBox;return a.allowVerticalPlacement&&!(z&&z.box&&z.box.length)&&e.numVerticalGlyphVertices>0&&i?c(i,u.verticalIconBox,t.ai.vertical):{box:null,offscreen:null}})),z&&(S=z.box,D=z.offscreen);const d=i(z&&z.box);if(!S&&this.prevPlacement){const t=this.prevPlacement.variableOffsets[e.crossTileID];t&&(this.variableOffsets[e.crossTileID]=t,this.markUsedJustification(a,t.anchor,e,d));}}}if(A=z,S=A&&A.box&&A.box.length>0,D=A&&A.offscreen,e.useRuntimeCollisionCircles){const i=a.text.placedSymbolArray.get(e.centerJustifiedTextSymbolIndex),h=t.aj(a.textSizeData,d,i),c=o.get("text-padding");R=this.collisionIndex.placeCollisionCircles(f,i,a.lineVertexArray,a.glyphOffsetArray,h,r,n,l,s,b,_.predicate,e.collisionCircleDiameter,c,C),R.circles.length&&R.collisionDetected&&!s&&t.w("Collisions detected, but collision boxes are not shown"),S=g||R.circles.length>0&&!R.collisionDetected,D=D&&R.offscreen;}if(u.iconFeatureIndex&&(O=u.iconFeatureIndex),u.iconBox){const t=t=>{const e=w&&M?Rt(t,M.x,M.y,y,b,this.transform.angle):t;return this.collisionIndex.placeCollisionBox(e,v,h,r,_.predicate,C)};L&&L.box&&L.box.length&&u.verticalIconBox?(k=t(u.verticalIconBox),P=k.box.length>0):(k=t(u.iconBox),P=k.box.length>0),D=D&&k.offscreen;}const U=p||0===e.numHorizontalGlyphVertices&&0===e.numVerticalGlyphVertices,Z=m||0===e.numIconVertices;if(U||Z?Z?U||(P=P&&S):S=P&&S:P=S=P&&S,S&&A&&A.box&&this.collisionIndex.insertCollisionBox(A.box,f,o.get("text-ignore-placement"),a.bucketInstanceId,L&&L.box&&B?B:F,_.ID),P&&k&&this.collisionIndex.insertCollisionBox(k.box,v,o.get("icon-ignore-placement"),a.bucketInstanceId,O,_.ID),R&&(S&&this.collisionIndex.insertCollisionCircles(R.circles,f,o.get("text-ignore-placement"),a.bucketInstanceId,F,_.ID),s)){const t=a.bucketInstanceId;let e=this.collisionCircleArrays[t];void 0===e&&(e=this.collisionCircleArrays[t]=new Mt);for(let t=0;t<R.circles.length;t+=4)e.circles.push(R.circles[t+0]),e.circles.push(R.circles[t+1]),e.circles.push(R.circles[t+2]),e.circles.push(R.collisionDetected?1:0);}if(0===e.crossTileID)throw new Error("symbolInstance.crossTileID can't be 0");if(0===a.bucketInstanceId)throw new Error("bucket.bucketInstanceId can't be 0");this.placements[e.crossTileID]=new Dt(S||I,P||E,D||a.justReloaded),i[e.crossTileID]=!0;};if(T){if(0!==e.symbolInstanceStart)throw new Error("bucket.bucketInstanceId should be 0");const t=a.getSortedSymbolIndexes(this.transform.angle);for(let e=t.length-1;e>=0;--e){const i=t[e];P(a.symbolInstances.get(i),a.collisionArrays[i]);}}else for(let t=e.symbolInstanceStart;t<e.symbolInstanceEnd;t++)P(a.symbolInstances.get(t),a.collisionArrays[t]);if(s&&a.bucketInstanceId in this.collisionCircleArrays){const e=this.collisionCircleArrays[a.bucketInstanceId];t.as(e.invProjMatrix,r),e.viewportMatrix=this.collisionIndex.getViewportMatrix();}a.justReloaded=!1;}markUsedJustification(e,i,s,a){let o;o=a===t.ai.vertical?s.verticalPlacedTextSymbolIndex:{left:s.leftJustifiedTextSymbolIndex,center:s.centerJustifiedTextSymbolIndex,right:s.rightJustifiedTextSymbolIndex}[t.at(i)];const r=[s.leftJustifiedTextSymbolIndex,s.centerJustifiedTextSymbolIndex,s.rightJustifiedTextSymbolIndex,s.verticalPlacedTextSymbolIndex];for(const t of r)t>=0&&(e.text.placedSymbolArray.get(t).crossTileID=o>=0&&t!==o?0:s.crossTileID);}markUsedOrientation(e,i,s){const a=i===t.ai.horizontal||i===t.ai.horizontalOnly?i:0,o=i===t.ai.vertical?i:0,r=[s.leftJustifiedTextSymbolIndex,s.centerJustifiedTextSymbolIndex,s.rightJustifiedTextSymbolIndex];for(const t of r)e.text.placedSymbolArray.get(t).placedOrientation=a;s.verticalPlacedTextSymbolIndex&&(e.text.placedSymbolArray.get(s.verticalPlacedTextSymbolIndex).placedOrientation=o);}commit(t){this.commitTime=t,this.zoomAtLastRecencyCheck=this.transform.zoom;const e=this.prevPlacement;let i=!1;this.prevZoomAdjustment=e?e.zoomAdjustment(this.transform.zoom):0;const s=e?e.symbolFadeChange(t):1,a=e?e.opacities:{},o=e?e.variableOffsets:{},r=e?e.placedOrientations:{};for(const t in this.placements){const e=this.placements[t],o=a[t];o?(this.opacities[t]=new Pt(o,s,e.text,e.icon),i=i||e.text!==o.text.placed||e.icon!==o.icon.placed):(this.opacities[t]=new Pt(null,s,e.text,e.icon,e.skipFade),i=i||e.text||e.icon);}for(const t in a){const e=a[t];if(!this.opacities[t]){const a=new Pt(e,s,!1,!1);a.isHidden()||(this.opacities[t]=a,i=i||e.text.placed||e.icon.placed);}}for(const t in o)this.variableOffsets[t]||!this.opacities[t]||this.opacities[t].isHidden()||(this.variableOffsets[t]=o[t]);for(const t in r)this.placedOrientations[t]||!this.opacities[t]||this.opacities[t].isHidden()||(this.placedOrientations[t]=r[t]);if(e&&void 0===e.lastPlacementChangeTime)throw new Error("Last placement time for previous placement is not defined");i?this.lastPlacementChangeTime=t:"number"!=typeof this.lastPlacementChangeTime&&(this.lastPlacementChangeTime=e?e.lastPlacementChangeTime:t);}updateLayerOpacities(t,e){const i={};for(const s of e){const e=s.getBucket(t);e&&s.latestFeatureIndex&&t.id===e.layerIds[0]&&this.updateBucketOpacities(e,i,s.collisionBoxArray);}}updateBucketOpacities(e,i,s){e.hasTextData()&&(e.text.opacityVertexArray.clear(),e.text.hasVisibleVertices=!1),e.hasIconData()&&(e.icon.opacityVertexArray.clear(),e.icon.hasVisibleVertices=!1),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexArray.clear(),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexArray.clear();const a=e.layers[0],o=a.layout,r=new Pt(null,0,!1,!1,!0),n=o.get("text-allow-overlap"),l=o.get("icon-allow-overlap"),h=a._unevaluatedLayout.hasValue("text-variable-anchor")||a._unevaluatedLayout.hasValue("text-variable-anchor-offset"),c="map"===o.get("text-rotation-alignment"),u="map"===o.get("text-pitch-alignment"),d="none"!==o.get("icon-text-fit"),_=new Pt(null,0,n&&(l||!e.hasIconData()||o.get("icon-optional")),l&&(n||!e.hasTextData()||o.get("text-optional")),!0);!e.collisionArrays&&s&&(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData())&&e.deserializeCollisionBoxes(s);const p=(t,e,i)=>{for(let s=0;s<e/4;s++)t.opacityVertexArray.emplaceBack(i);t.hasVisibleVertices=t.hasVisibleVertices||i!==qt;};for(let s=0;s<e.symbolInstances.length;s++){const a=e.symbolInstances.get(s),{numHorizontalGlyphVertices:o,numVerticalGlyphVertices:n,crossTileID:l}=a;let m=this.opacities[l];i[l]?m=r:m||(m=_,this.opacities[l]=m),i[l]=!0;const f=a.numIconVertices>0,g=this.placedOrientations[a.crossTileID],v=g===t.ai.vertical,x=g===t.ai.horizontal||g===t.ai.horizontalOnly;if(o>0||n>0){const t=Vt(m.text);p(e.text,o,v?qt:t),p(e.text,n,x?qt:t);const i=m.text.isHidden();[a.rightJustifiedTextSymbolIndex,a.centerJustifiedTextSymbolIndex,a.leftJustifiedTextSymbolIndex].forEach((t=>{t>=0&&(e.text.placedSymbolArray.get(t).hidden=i||v?1:0);})),a.verticalPlacedTextSymbolIndex>=0&&(e.text.placedSymbolArray.get(a.verticalPlacedTextSymbolIndex).hidden=i||x?1:0);const s=this.variableOffsets[a.crossTileID];s&&this.markUsedJustification(e,s.anchor,a,g);const r=this.placedOrientations[a.crossTileID];r&&(this.markUsedJustification(e,"left",a,r),this.markUsedOrientation(e,r,a));}if(f){const t=Vt(m.icon),i=!(d&&a.verticalPlacedIconSymbolIndex&&v);a.placedIconSymbolIndex>=0&&(p(e.icon,a.numIconVertices,i?t:qt),e.icon.placedSymbolArray.get(a.placedIconSymbolIndex).hidden=m.icon.isHidden()),a.verticalPlacedIconSymbolIndex>=0&&(p(e.icon,a.numVerticalIconVertices,i?qt:t),e.icon.placedSymbolArray.get(a.verticalPlacedIconSymbolIndex).hidden=m.icon.isHidden());}if(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData()){const i=e.collisionArrays[s];if(i){let s=new t.P(0,0);if(i.textBox||i.verticalTextBox){let t=!0;if(h){const e=this.variableOffsets[l];e?(s=At(e.anchor,e.width,e.height,e.textOffset,e.textBoxScale),c&&s._rotate(u?this.transform.angle:-this.transform.angle)):t=!1;}i.textBox&&Ft(e.textCollisionBox.collisionVertexArray,m.text.placed,!t||v,s.x,s.y),i.verticalTextBox&&Ft(e.textCollisionBox.collisionVertexArray,m.text.placed,!t||x,s.x,s.y);}const a=Boolean(!x&&i.verticalIconBox);i.iconBox&&Ft(e.iconCollisionBox.collisionVertexArray,m.icon.placed,a,d?s.x:0,d?s.y:0),i.verticalIconBox&&Ft(e.iconCollisionBox.collisionVertexArray,m.icon.placed,!a,d?s.x:0,d?s.y:0);}}}if(e.sortFeatures(this.transform.angle),this.retainedQueryData[e.bucketInstanceId]&&(this.retainedQueryData[e.bucketInstanceId].featureSortOrder=e.featureSortOrder),e.hasTextData()&&e.text.opacityVertexBuffer&&e.text.opacityVertexBuffer.updateData(e.text.opacityVertexArray),e.hasIconData()&&e.icon.opacityVertexBuffer&&e.icon.opacityVertexBuffer.updateData(e.icon.opacityVertexArray),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexBuffer&&e.iconCollisionBox.collisionVertexBuffer.updateData(e.iconCollisionBox.collisionVertexArray),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexBuffer&&e.textCollisionBox.collisionVertexBuffer.updateData(e.textCollisionBox.collisionVertexArray),e.text.opacityVertexArray.length!==e.text.layoutVertexArray.length/4)throw new Error(`bucket.text.opacityVertexArray.length (= ${e.text.opacityVertexArray.length}) !== bucket.text.layoutVertexArray.length (= ${e.text.layoutVertexArray.length}) / 4`);if(e.icon.opacityVertexArray.length!==e.icon.layoutVertexArray.length/4)throw new Error(`bucket.icon.opacityVertexArray.length (= ${e.icon.opacityVertexArray.length}) !== bucket.icon.layoutVertexArray.length (= ${e.icon.layoutVertexArray.length}) / 4`);if(e.bucketInstanceId in this.collisionCircleArrays){const t=this.collisionCircleArrays[e.bucketInstanceId];e.placementInvProjMatrix=t.invProjMatrix,e.placementViewportMatrix=t.viewportMatrix,e.collisionCircleArray=t.circles,delete this.collisionCircleArrays[e.bucketInstanceId];}}symbolFadeChange(t){return 0===this.fadeDuration?1:(t-this.commitTime)/this.fadeDuration+this.prevZoomAdjustment}zoomAdjustment(t){return Math.max(0,(this.transform.zoom-t)/1.5)}hasTransitions(t){return this.stale||t-this.lastPlacementChangeTime<this.fadeDuration}stillRecent(t,e){const i=this.zoomAtLastRecencyCheck===e?1-this.zoomAdjustment(e):1;return this.zoomAtLastRecencyCheck=e,this.commitTime+this.fadeDuration*i>t}setStale(){this.stale=!0;}}function Ft(t,e,i,s,a){t.emplaceBack(e?1:0,i?1:0,s||0,a||0),t.emplaceBack(e?1:0,i?1:0,s||0,a||0),t.emplaceBack(e?1:0,i?1:0,s||0,a||0),t.emplaceBack(e?1:0,i?1:0,s||0,a||0);}const Bt=Math.pow(2,25),Ot=Math.pow(2,24),Nt=Math.pow(2,17),Ut=Math.pow(2,16),Zt=Math.pow(2,9),Gt=Math.pow(2,8),jt=Math.pow(2,1);function Vt(t){if(0===t.opacity&&!t.placed)return 0;if(1===t.opacity&&t.placed)return 4294967295;const e=t.placed?1:0,i=Math.floor(127*t.opacity);return i*Bt+e*Ot+i*Nt+e*Ut+i*Zt+e*Gt+i*jt+e}const qt=0;class $t{constructor(t){this._sortAcrossTiles="viewport-y"!==t.layout.get("symbol-z-order")&&!t.layout.get("symbol-sort-key").isConstant(),this._currentTileIndex=0,this._currentPartIndex=0,this._seenCrossTileIDs={},this._bucketParts=[];}continuePlacement(t,e,i,s,a){const o=this._bucketParts;for(;this._currentTileIndex<t.length;)if(e.getBucketParts(o,s,t[this._currentTileIndex],this._sortAcrossTiles),this._currentTileIndex++,a())return !0;for(this._sortAcrossTiles&&(this._sortAcrossTiles=!1,o.sort(((t,e)=>t.sortKey-e.sortKey)));this._currentPartIndex<o.length;)if(e.placeLayerBucketPart(o[this._currentPartIndex],this._seenCrossTileIDs,i),this._currentPartIndex++,a())return !0;return !1}}class Wt{constructor(t,e,i,s,a,o,r,n){this.placement=new kt(t,e,o,r,n),this._currentPlacementIndex=i.length-1,this._forceFullPlacement=s,this._showCollisionBoxes=a,this._done=!1;}isDone(){return this._done}continuePlacement(e,i,s){const a=t.h.now(),o=()=>!this._forceFullPlacement&&t.h.now()-a>2;for(;this._currentPlacementIndex>=0;){const t=i[e[this._currentPlacementIndex]],a=this.placement.collisionIndex.transform.zoom;if("symbol"===t.type&&(!t.minzoom||t.minzoom<=a)&&(!t.maxzoom||t.maxzoom>a)){if(this._inProgressLayer||(this._inProgressLayer=new $t(t)),this._inProgressLayer.continuePlacement(s[t.source],this.placement,this._showCollisionBoxes,t,o))return;delete this._inProgressLayer;}this._currentPlacementIndex--;}this._done=!0;}commit(t){return this.placement.commit(t),this.placement}}const Ht=512/t.N/2;class Xt{constructor(e,i,s){this.tileID=e,this.bucketInstanceId=s,this._symbolsByKey={};const a=new Map;for(let t=0;t<i.length;t++){const e=i.get(t),s=e.key,o=a.get(s);o?o.push(e):a.set(s,[e]);}for(const[e,i]of a){const s={positions:i.map((t=>({x:Math.floor(t.anchorX*Ht),y:Math.floor(t.anchorY*Ht)}))),crossTileIDs:i.map((t=>t.crossTileID))};if(s.positions.length>128){const e=new t.av(s.positions.length,16,Uint16Array);for(const{x:t,y:i}of s.positions)e.add(t,i);e.finish(),delete s.positions,s.index=e;}this._symbolsByKey[e]=s;}}getScaledCoordinates(e,i){const{x:s,y:a,z:o}=this.tileID.canonical,{x:r,y:n,z:l}=i.canonical,h=Ht/Math.pow(2,l-o),c=(n*t.N+e.anchorY)*h,u=a*t.N*Ht;return {x:Math.floor((r*t.N+e.anchorX)*h-s*t.N*Ht),y:Math.floor(c-u)}}findMatches(t,e,i){const s=this.tileID.canonical.z<e.canonical.z?1:Math.pow(2,this.tileID.canonical.z-e.canonical.z);for(let a=0;a<t.length;a++){const o=t.get(a);if(o.crossTileID)continue;const r=this._symbolsByKey[o.key];if(!r)continue;const n=this.getScaledCoordinates(o,e);if(r.index){const t=r.index.range(n.x-s,n.y-s,n.x+s,n.y+s).sort();for(const e of t){const t=r.crossTileIDs[e];if(!i[t]){i[t]=!0,o.crossTileID=t;break}}}else if(r.positions)for(let t=0;t<r.positions.length;t++){const e=r.positions[t],a=r.crossTileIDs[t];if(Math.abs(e.x-n.x)<=s&&Math.abs(e.y-n.y)<=s&&!i[a]){i[a]=!0,o.crossTileID=a;break}}}}getCrossTileIDsLists(){return Object.values(this._symbolsByKey).map((({crossTileIDs:t})=>t))}}class Kt{constructor(){this.maxCrossTileID=0;}generate(){return ++this.maxCrossTileID}}class Qt{constructor(){this.indexes={},this.usedCrossTileIDs={},this.lng=0;}handleWrapJump(t){const e=Math.round((t-this.lng)/360);if(0!==e)for(const t in this.indexes){const i=this.indexes[t],s={};for(const t in i){const a=i[t];a.tileID=a.tileID.unwrapTo(a.tileID.wrap+e),s[a.tileID.key]=a;}this.indexes[t]=s;}this.lng=t;}addBucket(t,e,i){if(this.indexes[t.overscaledZ]&&this.indexes[t.overscaledZ][t.key]){if(this.indexes[t.overscaledZ][t.key].bucketInstanceId===e.bucketInstanceId)return !1;this.removeBucketCrossTileIDs(t.overscaledZ,this.indexes[t.overscaledZ][t.key]);}for(let t=0;t<e.symbolInstances.length;t++)e.symbolInstances.get(t).crossTileID=0;this.usedCrossTileIDs[t.overscaledZ]||(this.usedCrossTileIDs[t.overscaledZ]={});const s=this.usedCrossTileIDs[t.overscaledZ];for(const i in this.indexes){const a=this.indexes[i];if(Number(i)>t.overscaledZ)for(const i in a){const o=a[i];o.tileID.isChildOf(t)&&o.findMatches(e.symbolInstances,t,s);}else {const o=a[t.scaledTo(Number(i)).key];o&&o.findMatches(e.symbolInstances,t,s);}}for(let t=0;t<e.symbolInstances.length;t++){const a=e.symbolInstances.get(t);a.crossTileID||(a.crossTileID=i.generate(),s[a.crossTileID]=!0);}return void 0===this.indexes[t.overscaledZ]&&(this.indexes[t.overscaledZ]={}),this.indexes[t.overscaledZ][t.key]=new Xt(t,e.symbolInstances,e.bucketInstanceId),!0}removeBucketCrossTileIDs(t,e){for(const i of e.getCrossTileIDsLists())for(const e of i)delete this.usedCrossTileIDs[t][e];}removeStaleBuckets(t){let e=!1;for(const i in this.indexes){const s=this.indexes[i];for(const a in s)t[s[a].bucketInstanceId]||(this.removeBucketCrossTileIDs(i,s[a]),delete s[a],e=!0);}return e}}class Yt{constructor(){this.layerIndexes={},this.crossTileIDs=new Kt,this.maxBucketInstanceId=0,this.bucketsInCurrentPlacement={};}addLayer(t,e,i){let s=this.layerIndexes[t.id];void 0===s&&(s=this.layerIndexes[t.id]=new Qt);let a=!1;const o={};s.handleWrapJump(i);for(const i of e){const e=i.getBucket(t);e&&t.id===e.layerIds[0]&&(e.bucketInstanceId||(e.bucketInstanceId=++this.maxBucketInstanceId),s.addBucket(i.tileID,e,this.crossTileIDs)&&(a=!0),o[e.bucketInstanceId]=!0);}return s.removeStaleBuckets(o)&&(a=!0),a}pruneUnusedLayers(t){const e={};t.forEach((t=>{e[t]=!0;}));for(const t in this.layerIndexes)e[t]||delete this.layerIndexes[t];}}const Jt=(e,i)=>t.x(e,i&&i.filter((t=>"source.canvas"!==t.identifier))),te=t.F(t.ax,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition","setGeoJSONSourceData","setGlyphs","setSprite"]),ee=t.F(t.ax,["setCenter","setZoom","setBearing","setPitch"]),ie=t.aw();class se extends t.E{constructor(e,i={}){super(),this.map=e,this.dispatcher=new M(st(),this,e._getMapId()),this.imageManager=new b,this.imageManager.setEventedParent(this),this.glyphManager=new E(e._requestManager,i.localIdeographFontFamily),this.lineAtlas=new D(256,512),this.crossTileSymbolIndex=new Yt,this._spritesImagesIds={},this._layers={},this._order=[],this.sourceCaches={},this.zoomHistory=new t.ay,this._loaded=!1,this._availableImages=[],this._resetUpdates(),this.dispatcher.broadcast("setReferrer",t.az());const s=this;this._rtlTextPluginCallback=se.registerForPluginStateChange((e=>{s.dispatcher.broadcast("syncRTLPluginState",{pluginStatus:e.pluginStatus,pluginURL:e.pluginURL},((e,i)=>{if(t.aA(e),i&&i.every((t=>t)))for(const t in s.sourceCaches){const e=s.sourceCaches[t].getSource().type;"vector"!==e&&"geojson"!==e||s.sourceCaches[t].reload();}}));})),this.on("data",(t=>{if("source"!==t.dataType||"metadata"!==t.sourceDataType)return;const e=this.sourceCaches[t.sourceId];if(!e)return;const i=e.getSource();if(i&&i.vectorLayerIds)for(const t in this._layers){const e=this._layers[t];e.source===i.id&&this._validateLayer(e);}}));}loadURL(e,i={},s){this.fire(new t.k("dataloading",{dataType:"style"})),i.validate="boolean"!=typeof i.validate||i.validate;const a=this.map._requestManager.transformRequest(e,c.Style);this._request=t.f(a,((e,a)=>{this._request=null,e?this.fire(new t.j(e)):a&&this._load(a,i,s);}));}loadJSON(e,i={},s){this.fire(new t.k("dataloading",{dataType:"style"})),this._request=t.h.frame((()=>{this._request=null,i.validate=!1!==i.validate,this._load(e,i,s);}));}loadEmpty(){this.fire(new t.k("dataloading",{dataType:"style"})),this._load(ie,{validate:!1});}_load(e,i,s){var a;const o=i.transformStyle?i.transformStyle(s,e):e;if(!i.validate||!Jt(this,t.y(o))){this._loaded=!0,this.stylesheet=o;for(const t in o.sources)this.addSource(t,o.sources[t],{validate:!1});o.sprite?this._loadSprite(o.sprite):this.imageManager.setLoaded(!0),this.glyphManager.setURL(o.glyphs),this._createLayers(),this.light=new P(this.stylesheet.light),this.map.setTerrain(null!==(a=this.stylesheet.terrain)&&void 0!==a?a:null),this.fire(new t.k("data",{dataType:"style"})),this.fire(new t.k("style.load"));}}_createLayers(){const e=t.aB(this.stylesheet.layers);this.dispatcher.broadcast("setLayers",e),this._order=e.map((t=>t.id)),this._layers={},this._serializedLayers=null;for(const i of e){const e=t.aC(i);e.setEventedParent(this,{layer:{id:i.id}}),this._layers[i.id]=e;}}_loadSprite(e,i=!1,s=void 0){this.imageManager.setLoaded(!1),this._spriteRequest=function(e,i,s,a){const o=g(e),r=o.length,n=s>1?"@2x":"",l={},u={},d={};for(const{id:e,url:s}of o){const o=i.transformRequest(i.normalizeSpriteURL(s,n,".json"),c.SpriteJSON),_=`${e}_${o.url}`;l[_]=t.f(o,((t,i)=>{delete l[_],u[e]=i,v(a,u,d,t,r);}));const p=i.transformRequest(i.normalizeSpriteURL(s,n,".png"),c.SpriteImage),m=`${e}_${p.url}`;l[m]=h.getImage(p,((t,i)=>{delete l[m],d[e]=i,v(a,u,d,t,r);}));}return {cancel(){for(const t of Object.values(l))t.cancel();}}}(e,this.map._requestManager,this.map.getPixelRatio(),((e,a)=>{if(this._spriteRequest=null,e)this.fire(new t.j(e));else if(a)for(const t in a){this._spritesImagesIds[t]=[];const e=this._spritesImagesIds[t]?this._spritesImagesIds[t].filter((t=>!(t in a))):[];for(const t of e)this.imageManager.removeImage(t),this._changedImages[t]=!0;for(const e in a[t]){const s="default"===t?e:`${t}:${e}`;this._spritesImagesIds[t].push(s),s in this.imageManager.images?this.imageManager.updateImage(s,a[t][e],!1):this.imageManager.addImage(s,a[t][e]),i&&(this._changedImages[s]=!0);}}this.imageManager.setLoaded(!0),this._availableImages=this.imageManager.listImages(),i&&(this._changed=!0),this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.k("data",{dataType:"style"})),s&&s(e);}));}_unloadSprite(){for(const t of Object.values(this._spritesImagesIds).flat())this.imageManager.removeImage(t),this._changedImages[t]=!0;this._spritesImagesIds={},this._availableImages=this.imageManager.listImages(),this._changed=!0,this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.k("data",{dataType:"style"}));}_validateLayer(e){const i=this.sourceCaches[e.source];if(!i)return;const s=e.sourceLayer;if(!s)return;const a=i.getSource();("geojson"===a.type||a.vectorLayerIds&&-1===a.vectorLayerIds.indexOf(s))&&this.fire(new t.j(new Error(`Source layer "${s}" does not exist on source "${a.id}" as specified by style layer "${e.id}".`)));}loaded(){if(!this._loaded)return !1;if(Object.keys(this._updatedSources).length)return !1;for(const t in this.sourceCaches)if(!this.sourceCaches[t].loaded())return !1;return !!this.imageManager.isLoaded()}_serializeByIds(t){const e=this._serializedAllLayers();if(!t||0===t.length)return Object.values(e);const i=[];for(const s of t)e[s]&&i.push(e[s]);return i}_serializedAllLayers(){let t=this._serializedLayers;if(t)return t;t=this._serializedLayers={};const e=Object.keys(this._layers);for(const i of e){const e=this._layers[i];"custom"!==e.type&&(t[i]=e.serialize());}return t}hasTransitions(){if(this.light&&this.light.hasTransition())return !0;for(const t in this.sourceCaches)if(this.sourceCaches[t].hasTransition())return !0;for(const t in this._layers)if(this._layers[t].hasTransition())return !0;return !1}_checkLoaded(){if(!this._loaded)throw new Error("Style is not done loading.")}update(e){if(!this._loaded)return;const i=this._changed;if(this._changed){const t=Object.keys(this._updatedLayers),i=Object.keys(this._removedLayers);(t.length||i.length)&&this._updateWorkerLayers(t,i);for(const t in this._updatedSources){const e=this._updatedSources[t];if("reload"===e)this._reloadSource(t);else {if("clear"!==e)throw new Error(`Invalid action ${e}`);this._clearSource(t);}}this._updateTilesForChangedImages(),this._updateTilesForChangedGlyphs();for(const t in this._updatedPaintProps)this._layers[t].updateTransitions(e);this.light.updateTransitions(e),this._resetUpdates();}const s={};for(const t in this.sourceCaches){const e=this.sourceCaches[t];s[t]=e.used,e.used=!1;}for(const t of this._order){const i=this._layers[t];i.recalculate(e,this._availableImages),!i.isHidden(e.zoom)&&i.source&&(this.sourceCaches[i.source].used=!0);}for(const e in s){const i=this.sourceCaches[e];s[e]!==i.used&&i.fire(new t.k("data",{sourceDataType:"visibility",dataType:"source",sourceId:e}));}this.light.recalculate(e),this.z=e.zoom,i&&this.fire(new t.k("data",{dataType:"style"}));}_updateTilesForChangedImages(){const t=Object.keys(this._changedImages);if(t.length){for(const e in this.sourceCaches)this.sourceCaches[e].reloadTilesForDependencies(["icons","patterns"],t);this._changedImages={};}}_updateTilesForChangedGlyphs(){if(this._glyphsDidChange){for(const t in this.sourceCaches)this.sourceCaches[t].reloadTilesForDependencies(["glyphs"],[""]);this._glyphsDidChange=!1;}}_updateWorkerLayers(t,e){this.dispatcher.broadcast("updateLayers",{layers:this._serializeByIds(t),removedIds:e});}_resetUpdates(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSources={},this._updatedPaintProps={},this._changedImages={},this._glyphsDidChange=!1;}setState(e,i={}){this._checkLoaded();const s=this.serialize();if(e=i.transformStyle?i.transformStyle(s,e):e,Jt(this,t.y(e)))return !1;(e=t.aD(e)).layers=t.aB(e.layers);const a=t.aE(s,e).filter((t=>!(t.command in ee)));if(0===a.length)return !1;const o=a.filter((t=>!(t.command in te)));if(o.length>0)throw new Error(`Unimplemented: ${o.map((t=>t.command)).join(", ")}.`);for(const t of a)"setTransition"!==t.command&&this[t.command].apply(this,t.args);return this.stylesheet=e,this._serializedLayers=null,!0}addImage(e,i){if(this.getImage(e))return this.fire(new t.j(new Error(`An image named "${e}" already exists.`)));this.imageManager.addImage(e,i),this._afterImageUpdated(e);}updateImage(t,e){this.imageManager.updateImage(t,e);}getImage(t){return this.imageManager.getImage(t)}removeImage(e){if(!this.getImage(e))return this.fire(new t.j(new Error(`An image named "${e}" does not exist.`)));this.imageManager.removeImage(e),this._afterImageUpdated(e);}_afterImageUpdated(e){this._availableImages=this.imageManager.listImages(),this._changedImages[e]=!0,this._changed=!0,this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.k("data",{dataType:"style"}));}listImages(){return this._checkLoaded(),this.imageManager.listImages()}addSource(e,i,s={}){if(this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error(`Source "${e}" already exists.`);if(!i.type)throw new Error(`The type property must be defined, but only the following properties were given: ${Object.keys(i).join(", ")}.`);if(["vector","raster","geojson","video","image"].indexOf(i.type)>=0&&this._validate(t.y.source,`sources.${e}`,i,null,s))return;this.map&&this.map._collectResourceTiming&&(i.collectResourceTiming=!0);const a=this.sourceCaches[e]=new K(e,i,this.dispatcher);a.style=this,a.setEventedParent(this,(()=>({isSourceLoaded:a.loaded(),source:a.serialize(),sourceId:e}))),a.onAdd(this.map),this._changed=!0;}removeSource(e){if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID");for(const i in this._layers)if(this._layers[i].source===e)return this.fire(new t.j(new Error(`Source "${e}" cannot be removed while layer "${i}" is using it.`)));const i=this.sourceCaches[e];delete this.sourceCaches[e],delete this._updatedSources[e],i.fire(new t.k("data",{sourceDataType:"metadata",dataType:"source",sourceId:e})),i.setEventedParent(null),i.onRemove(this.map),this._changed=!0;}setGeoJSONSourceData(t,e){if(this._checkLoaded(),void 0===this.sourceCaches[t])throw new Error(`There is no source with this ID=${t}`);const i=this.sourceCaches[t].getSource();if("geojson"!==i.type)throw new Error(`geojsonSource.type is ${i.type}, which is !== 'geojson`);i.setData(e),this._changed=!0;}getSource(t){return this.sourceCaches[t]&&this.sourceCaches[t].getSource()}addLayer(e,i,s={}){this._checkLoaded();const a=e.id;if(this.getLayer(a))return void this.fire(new t.j(new Error(`Layer "${a}" already exists on this map.`)));let o;if("custom"===e.type){if(Jt(this,t.aF(e)))return;o=t.aC(e);}else {if("source"in e&&"object"==typeof e.source&&(this.addSource(a,e.source),e=t.aD(e),e=t.e(e,{source:a})),this._validate(t.y.layer,`layers.${a}`,e,{arrayIndex:-1},s))return;o=t.aC(e),this._validateLayer(o),o.setEventedParent(this,{layer:{id:a}});}const r=i?this._order.indexOf(i):this._order.length;if(i&&-1===r)this.fire(new t.j(new Error(`Cannot add layer "${a}" before non-existing layer "${i}".`)));else {if(this._order.splice(r,0,a),this._layerOrderChanged=!0,this._layers[a]=o,this._removedLayers[a]&&o.source&&"custom"!==o.type){const t=this._removedLayers[a];delete this._removedLayers[a],t.type!==o.type?this._updatedSources[o.source]="clear":(this._updatedSources[o.source]="reload",this.sourceCaches[o.source].pause());}this._updateLayer(o),o.onAdd&&o.onAdd(this.map);}}moveLayer(e,i){if(this._checkLoaded(),this._changed=!0,!this._layers[e])return void this.fire(new t.j(new Error(`The layer '${e}' does not exist in the map's style and cannot be moved.`)));if(e===i)return;const s=this._order.indexOf(e);this._order.splice(s,1);const a=i?this._order.indexOf(i):this._order.length;i&&-1===a?this.fire(new t.j(new Error(`Cannot move layer "${e}" before non-existing layer "${i}".`))):(this._order.splice(a,0,e),this._layerOrderChanged=!0);}removeLayer(e){this._checkLoaded();const i=this._layers[e];if(!i)return void this.fire(new t.j(new Error(`Cannot remove non-existing layer "${e}".`)));i.setEventedParent(null);const s=this._order.indexOf(e);this._order.splice(s,1),this._layerOrderChanged=!0,this._changed=!0,this._removedLayers[e]=i,delete this._layers[e],this._serializedLayers&&delete this._serializedLayers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e],i.onRemove&&i.onRemove(this.map);}getLayer(t){return this._layers[t]}hasLayer(t){return t in this._layers}setLayerZoomRange(e,i,s){this._checkLoaded();const a=this.getLayer(e);a?a.minzoom===i&&a.maxzoom===s||(null!=i&&(a.minzoom=i),null!=s&&(a.maxzoom=s),this._updateLayer(a)):this.fire(new t.j(new Error(`Cannot set the zoom range of non-existing layer "${e}".`)));}setFilter(e,i,s={}){this._checkLoaded();const a=this.getLayer(e);if(a){if(!t.aG(a.filter,i))return null==i?(a.filter=void 0,void this._updateLayer(a)):void(this._validate(t.y.filter,`layers.${a.id}.filter`,i,null,s)||(a.filter=t.aD(i),this._updateLayer(a)))}else this.fire(new t.j(new Error(`Cannot filter non-existing layer "${e}".`)));}getFilter(e){return t.aD(this.getLayer(e).filter)}setLayoutProperty(e,i,s,a={}){this._checkLoaded();const o=this.getLayer(e);o?t.aG(o.getLayoutProperty(i),s)||(o.setLayoutProperty(i,s,a),this._updateLayer(o)):this.fire(new t.j(new Error(`Cannot style non-existing layer "${e}".`)));}getLayoutProperty(e,i){const s=this.getLayer(e);if(s)return s.getLayoutProperty(i);this.fire(new t.j(new Error(`Cannot get style of non-existing layer "${e}".`)));}setPaintProperty(e,i,s,a={}){this._checkLoaded();const o=this.getLayer(e);o?t.aG(o.getPaintProperty(i),s)||(o.setPaintProperty(i,s,a)&&this._updateLayer(o),this._changed=!0,this._updatedPaintProps[e]=!0):this.fire(new t.j(new Error(`Cannot style non-existing layer "${e}".`)));}getPaintProperty(t,e){return this.getLayer(t).getPaintProperty(e)}setFeatureState(e,i){this._checkLoaded();const s=e.source,a=e.sourceLayer,o=this.sourceCaches[s];if(void 0===o)return void this.fire(new t.j(new Error(`The source '${s}' does not exist in the map's style.`)));const r=o.getSource().type;"geojson"===r&&a?this.fire(new t.j(new Error("GeoJSON sources cannot have a sourceLayer parameter."))):"vector"!==r||a?(void 0===e.id&&this.fire(new t.j(new Error("The feature id parameter must be provided."))),o.setFeatureState(a,e.id,i)):this.fire(new t.j(new Error("The sourceLayer parameter must be provided for vector source types.")));}removeFeatureState(e,i){this._checkLoaded();const s=e.source,a=this.sourceCaches[s];if(void 0===a)return void this.fire(new t.j(new Error(`The source '${s}' does not exist in the map's style.`)));const o=a.getSource().type,r="vector"===o?e.sourceLayer:void 0;"vector"!==o||r?i&&"string"!=typeof e.id&&"number"!=typeof e.id?this.fire(new t.j(new Error("A feature id is required to remove its specific state property."))):a.removeFeatureState(r,e.id,i):this.fire(new t.j(new Error("The sourceLayer parameter must be provided for vector source types.")));}getFeatureState(e){this._checkLoaded();const i=e.source,s=e.sourceLayer,a=this.sourceCaches[i];if(void 0!==a)return "vector"!==a.getSource().type||s?(void 0===e.id&&this.fire(new t.j(new Error("The feature id parameter must be provided."))),a.getFeatureState(s,e.id)):void this.fire(new t.j(new Error("The sourceLayer parameter must be provided for vector source types.")));this.fire(new t.j(new Error(`The source '${i}' does not exist in the map's style.`)));}getTransition(){return t.e({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)}serialize(){if(!this._loaded)return;const e=t.aH(this.sourceCaches,(t=>t.serialize())),i=this._serializeByIds(this._order),s=this.map.getTerrain()||void 0,a=this.stylesheet;return t.aI({version:a.version,name:a.name,metadata:a.metadata,light:a.light,center:a.center,zoom:a.zoom,bearing:a.bearing,pitch:a.pitch,sprite:a.sprite,glyphs:a.glyphs,transition:a.transition,sources:e,layers:i,terrain:s},(t=>void 0!==t))}_updateLayer(t){this._updatedLayers[t.id]=!0,t.source&&!this._updatedSources[t.source]&&"raster"!==this.sourceCaches[t.source].getSource().type&&(this._updatedSources[t.source]="reload",this.sourceCaches[t.source].pause()),this._serializedLayers=null,this._changed=!0;}_flattenAndSortRenderedFeatures(t){const e=t=>"fill-extrusion"===this._layers[t].type,i={},s=[];for(let a=this._order.length-1;a>=0;a--){const o=this._order[a];if(e(o)){i[o]=a;for(const e of t){const t=e[o];if(t)for(const e of t)s.push(e);}}}s.sort(((t,e)=>e.intersectionZ-t.intersectionZ));const a=[];for(let o=this._order.length-1;o>=0;o--){const r=this._order[o];if(e(r))for(let t=s.length-1;t>=0;t--){const e=s[t].feature;if(i[e.layer.id]<o)break;a.push(e),s.pop();}else for(const e of t){const t=e[r];if(t)for(const e of t)a.push(e.feature);}}return a}queryRenderedFeatures(e,i,s){i&&i.filter&&this._validate(t.y.filter,"queryRenderedFeatures.filter",i.filter,null,i);const a={};if(i&&i.layers){if(!Array.isArray(i.layers))return this.fire(new t.j(new Error("parameters.layers must be an Array."))),[];for(const e of i.layers){const i=this._layers[e];if(!i)return this.fire(new t.j(new Error(`The layer '${e}' does not exist in the map's style and cannot be queried for features.`))),[];a[i.source]=!0;}}const o=[];i.availableImages=this._availableImages;const r=this._serializedAllLayers();for(const t in this.sourceCaches)i.layers&&!a[t]||o.push(q(this.sourceCaches[t],this._layers,r,e,i,s));return this.placement&&o.push(function(t,e,i,s,a,o,r){const n={},l=o.queryRenderedSymbols(s),h=[];for(const t of Object.keys(l).map(Number))h.push(r[t]);h.sort($);for(const i of h){const s=i.featureIndex.lookupSymbolFeatures(l[i.bucketInstanceId],e,i.bucketIndex,i.sourceLayerIndex,a.filter,a.layers,a.availableImages,t);for(const t in s){const e=n[t]=n[t]||[],a=s[t];a.sort(((t,e)=>{const s=i.featureSortOrder;if(s){const i=s.indexOf(t.featureIndex);return s.indexOf(e.featureIndex)-i}return e.featureIndex-t.featureIndex}));for(const t of a)e.push(t);}}for(const e in n)n[e].forEach((s=>{const a=s.feature,o=i[t[e].source].getFeatureState(a.layer["source-layer"],a.id);a.source=a.layer.source,a.layer["source-layer"]&&(a.sourceLayer=a.layer["source-layer"]),a.state=o;}));return n}(this._layers,r,this.sourceCaches,e,i,this.placement.collisionIndex,this.placement.retainedQueryData)),this._flattenAndSortRenderedFeatures(o)}querySourceFeatures(e,i){i&&i.filter&&this._validate(t.y.filter,"querySourceFeatures.filter",i.filter,null,i);const s=this.sourceCaches[e];return s?function(t,e){const i=t.getRenderableIds().map((e=>t.getTileByID(e))),s=[],a={};for(let t=0;t<i.length;t++){const o=i[t],r=o.tileID.canonical.key;a[r]||(a[r]=!0,o.querySourceFeatures(s,e));}return s}(s,i):[]}addSourceType(t,e,i){return j(t)?i(new Error(`A source type called "${t}" already exists.`)):(((t,e)=>{G[t]=e;})(t,e),e.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:t,url:e.workerSourceURL},i):i(null,null))}getLight(){return this.light.getLight()}setLight(e,i={}){this._checkLoaded();const s=this.light.getLight();let a=!1;for(const i in e)if(!t.aG(e[i],s[i])){a=!0;break}if(!a)return;const o={now:t.h.now(),transition:t.e({duration:300,delay:0},this.stylesheet.transition)};this.light.setLight(e,i),this.light.updateTransitions(o);}_validate(e,i,s,a,o={}){return (!o||!1!==o.validate)&&Jt(this,e.call(t.y,t.e({key:i,style:this.serialize(),value:s,styleSpec:t.v},a)))}_remove(e=!0){this._request&&(this._request.cancel(),this._request=null),this._spriteRequest&&(this._spriteRequest.cancel(),this._spriteRequest=null),t.aJ.off("pluginStateChange",this._rtlTextPluginCallback);for(const t in this._layers)this._layers[t].setEventedParent(null);for(const t in this.sourceCaches){const e=this.sourceCaches[t];e.setEventedParent(null),e.onRemove(this.map);}this.imageManager.setEventedParent(null),this.setEventedParent(null),this.dispatcher.remove(e);}_clearSource(t){this.sourceCaches[t].clearTiles();}_reloadSource(t){this.sourceCaches[t].resume(),this.sourceCaches[t].reload();}_updateSources(t){for(const e in this.sourceCaches)this.sourceCaches[e].update(t,this.map.terrain);}_generateCollisionBoxes(){for(const t in this.sourceCaches)this._reloadSource(t);}_updatePlacement(e,i,s,a,o=!1){let r=!1,n=!1;const l={};for(const t of this._order){const i=this._layers[t];if("symbol"!==i.type)continue;if(!l[i.source]){const t=this.sourceCaches[i.source];l[i.source]=t.getRenderableIds(!0).map((e=>t.getTileByID(e))).sort(((t,e)=>e.tileID.overscaledZ-t.tileID.overscaledZ||(t.tileID.isLessThan(e.tileID)?-1:1)));}const s=this.crossTileSymbolIndex.addLayer(i,l[i.source],e.center.lng);r=r||s;}if(this.crossTileSymbolIndex.pruneUnusedLayers(this._order),((o=o||this._layerOrderChanged||0===s)||!this.pauseablePlacement||this.pauseablePlacement.isDone()&&!this.placement.stillRecent(t.h.now(),e.zoom))&&(this.pauseablePlacement=new Wt(e,this.map.terrain,this._order,o,i,s,a,this.placement),this._layerOrderChanged=!1),this.pauseablePlacement.isDone()?this.placement.setStale():(this.pauseablePlacement.continuePlacement(this._order,this._layers,l),this.pauseablePlacement.isDone()&&(this.placement=this.pauseablePlacement.commit(t.h.now()),n=!0),r&&this.pauseablePlacement.placement.setStale()),n||r)for(const t of this._order){const e=this._layers[t];"symbol"===e.type&&this.placement.updateLayerOpacities(e,l[e.source]);}return !this.pauseablePlacement.isDone()||this.placement.hasTransitions(t.h.now())}_releaseSymbolFadeTiles(){for(const t in this.sourceCaches)this.sourceCaches[t].releaseSymbolFadeTiles();}getImages(t,e,i){this.imageManager.getImages(e.icons,i),this._updateTilesForChangedImages();const s=this.sourceCaches[e.source];s&&s.setDependencies(e.tileID.key,e.type,e.icons);}getGlyphs(t,e,i){this.glyphManager.getGlyphs(e.stacks,i);const s=this.sourceCaches[e.source];s&&s.setDependencies(e.tileID.key,e.type,[""]);}getResource(e,i,s){return t.m(i,s)}getGlyphsUrl(){return this.stylesheet.glyphs||null}setGlyphs(e,i={}){this._checkLoaded(),e&&this._validate(t.y.glyphs,"glyphs",e,null,i)||(this._glyphsDidChange=!0,this.stylesheet.glyphs=e,this.glyphManager.entries={},this.glyphManager.setURL(e));}addSprite(e,i,s={},a){this._checkLoaded();const o=[{id:e,url:i}],r=[...g(this.stylesheet.sprite),...o];this._validate(t.y.sprite,"sprite",r,null,s)||(this.stylesheet.sprite=r,this._loadSprite(o,!0,a));}removeSprite(e){this._checkLoaded();const i=g(this.stylesheet.sprite);if(i.find((t=>t.id===e))){if(this._spritesImagesIds[e])for(const t of this._spritesImagesIds[e])this.imageManager.removeImage(t),this._changedImages[t]=!0;i.splice(i.findIndex((t=>t.id===e)),1),this.stylesheet.sprite=i.length>0?i:void 0,delete this._spritesImagesIds[e],this._availableImages=this.imageManager.listImages(),this._changed=!0,this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.k("data",{dataType:"style"}));}else this.fire(new t.j(new Error(`Sprite "${e}" doesn't exists on this map.`)));}getSprite(){return g(this.stylesheet.sprite)}setSprite(e,i={},s){this._checkLoaded(),e&&this._validate(t.y.sprite,"sprite",e,null,i)||(this.stylesheet.sprite=e,e?this._loadSprite(e,!0,s):(this._unloadSprite(),s&&s(null)));}}se.registerForPluginStateChange=t.aK;var ae=t.Q([{name:"a_pos",type:"Int16",components:2}]),oe="attribute vec3 a_pos3d;uniform mat4 u_matrix;uniform float u_ele_delta;varying vec2 v_texture_pos;varying float v_depth;void main() {float extent=8192.0;float ele_delta=a_pos3d.z==1.0 ? u_ele_delta : 0.0;v_texture_pos=a_pos3d.xy/extent;gl_Position=u_matrix*vec4(a_pos3d.xy,get_elevation(a_pos3d.xy)-ele_delta,1.0);v_depth=gl_Position.z/gl_Position.w;}";const re={prelude:ne("#ifdef GL_ES\nprecision mediump float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif\n","#ifdef GL_ES\nprecision highp float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif\nvec2 unpack_float(const float packedValue) {int packedIntValue=int(packedValue);int v0=packedIntValue/256;return vec2(v0,packedIntValue-v0*256);}vec2 unpack_opacity(const float packedOpacity) {int intOpacity=int(packedOpacity)/2;return vec2(float(intOpacity)/127.0,mod(packedOpacity,2.0));}vec4 decode_color(const vec2 encodedColor) {return vec4(unpack_float(encodedColor[0])/255.0,unpack_float(encodedColor[1])/255.0\n);}float unpack_mix_vec2(const vec2 packedValue,const float t) {return mix(packedValue[0],packedValue[1],t);}vec4 unpack_mix_color(const vec4 packedColors,const float t) {vec4 minColor=decode_color(vec2(packedColors[0],packedColors[1]));vec4 maxColor=decode_color(vec2(packedColors[2],packedColors[3]));return mix(minColor,maxColor,t);}vec2 get_pattern_pos(const vec2 pixel_coord_upper,const vec2 pixel_coord_lower,const vec2 pattern_size,const float tile_units_to_pixels,const vec2 pos) {vec2 offset=mod(mod(mod(pixel_coord_upper,pattern_size)*256.0,pattern_size)*256.0+pixel_coord_lower,pattern_size);return (tile_units_to_pixels*pos+offset)/pattern_size;}\n#ifdef TERRAIN3D\nuniform sampler2D u_terrain;uniform float u_terrain_dim;uniform mat4 u_terrain_matrix;uniform vec4 u_terrain_unpack;uniform float u_terrain_exaggeration;uniform highp sampler2D u_depth;\n#endif\nconst highp vec4 bitSh=vec4(256.*256.*256.,256.*256.,256.,1.);const highp vec4 bitShifts=vec4(1.)/bitSh;highp float unpack(highp vec4 color) {return dot(color,bitShifts);}highp float depthOpacity(vec3 frag) {\n#ifdef TERRAIN3D\nhighp float d=unpack(texture2D(u_depth,frag.xy*0.5+0.5))+0.0001-frag.z;return 1.0-max(0.0,min(1.0,-d*500.0));\n#else\nreturn 1.0;\n#endif\n}float calculate_visibility(vec4 pos) {\n#ifdef TERRAIN3D\nvec3 frag=pos.xyz/pos.w;highp float d=depthOpacity(frag);if (d > 0.95) return 1.0;return (d+depthOpacity(frag+vec3(0.0,0.01,0.0)))/2.0;\n#else\nreturn 1.0;\n#endif\n}float ele(vec2 pos) {\n#ifdef TERRAIN3D\nvec4 rgb=(texture2D(u_terrain,pos)*255.0)*u_terrain_unpack;return rgb.r+rgb.g+rgb.b-u_terrain_unpack.a;\n#else\nreturn 0.0;\n#endif\n}float get_elevation(vec2 pos) {\n#ifdef TERRAIN3D\nvec2 coord=(u_terrain_matrix*vec4(pos,0.0,1.0)).xy*u_terrain_dim+1.0;vec2 f=fract(coord);vec2 c=(floor(coord)+0.5)/(u_terrain_dim+2.0);float d=1.0/(u_terrain_dim+2.0);float tl=ele(c);float tr=ele(c+vec2(d,0.0));float bl=ele(c+vec2(0.0,d));float br=ele(c+vec2(d,d));float elevation=mix(mix(tl,tr,f.x),mix(bl,br,f.x),f.y);return elevation*u_terrain_exaggeration;\n#else\nreturn 0.0;\n#endif\n}"),background:ne("uniform vec4 u_color;uniform float u_opacity;void main() {gl_FragColor=u_color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),backgroundPattern:ne("uniform vec2 u_pattern_tl_a;uniform vec2 u_pattern_br_a;uniform vec2 u_pattern_tl_b;uniform vec2 u_pattern_br_b;uniform vec2 u_texsize;uniform float u_mix;uniform float u_opacity;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(u_pattern_tl_a/u_texsize,u_pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(u_pattern_tl_b/u_texsize,u_pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_mix)*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pattern_size_a;uniform vec2 u_pattern_size_b;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_scale_a;uniform float u_scale_b;uniform float u_tile_units_to_pixels;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_a*u_pattern_size_a,u_tile_units_to_pixels,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_b*u_pattern_size_b,u_tile_units_to_pixels,a_pos);}"),circle:ne("varying vec3 v_data;varying float v_visibility;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=v_data.xy;float extrude_length=length(extrude);lowp float antialiasblur=v_data.z;float antialiased_blur=-max(blur,antialiasblur);float opacity_t=smoothstep(0.0,antialiased_blur,extrude_length-1.0);float color_t=stroke_width < 0.01 ? 0.0 : smoothstep(antialiased_blur,0.0,extrude_length-radius/(radius+stroke_width));gl_FragColor=v_visibility*opacity_t*mix(color*opacity,stroke_color*stroke_opacity,color_t);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform bool u_scale_with_map;uniform bool u_pitch_with_map;uniform vec2 u_extrude_scale;uniform lowp float u_device_pixel_ratio;uniform highp float u_camera_to_center_distance;attribute vec2 a_pos;varying vec3 v_data;varying float v_visibility;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main(void) {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=vec2(mod(a_pos,2.0)*2.0-1.0);vec2 circle_center=floor(a_pos*0.5);float ele=get_elevation(circle_center);v_visibility=calculate_visibility(u_matrix*vec4(circle_center,ele,1.0));if (u_pitch_with_map) {vec2 corner_position=circle_center;if (u_scale_with_map) {corner_position+=extrude*(radius+stroke_width)*u_extrude_scale;} else {vec4 projected_center=u_matrix*vec4(circle_center,0,1);corner_position+=extrude*(radius+stroke_width)*u_extrude_scale*(projected_center.w/u_camera_to_center_distance);}gl_Position=u_matrix*vec4(corner_position,ele,1);} else {gl_Position=u_matrix*vec4(circle_center,ele,1);if (u_scale_with_map) {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*u_camera_to_center_distance;} else {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*gl_Position.w;}}lowp float antialiasblur=1.0/u_device_pixel_ratio/(radius+stroke_width);v_data=vec3(extrude.x,extrude.y,antialiasblur);}"),clippingMask:ne("void main() {gl_FragColor=vec4(1.0);}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),heatmap:ne("uniform highp float u_intensity;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#define GAUSS_COEF 0.3989422804014327\nvoid main() {\n#pragma mapbox: initialize highp float weight\nfloat d=-0.5*3.0*3.0*dot(v_extrude,v_extrude);float val=weight*u_intensity*GAUSS_COEF*exp(d);gl_FragColor=vec4(val,1.0,1.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform float u_extrude_scale;uniform float u_opacity;uniform float u_intensity;attribute vec2 a_pos;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\nconst highp float ZERO=1.0/255.0/16.0;\n#define GAUSS_COEF 0.3989422804014327\nvoid main(void) {\n#pragma mapbox: initialize highp float weight\n#pragma mapbox: initialize mediump float radius\nvec2 unscaled_extrude=vec2(mod(a_pos,2.0)*2.0-1.0);float S=sqrt(-2.0*log(ZERO/weight/u_intensity/GAUSS_COEF))/3.0;v_extrude=S*unscaled_extrude;vec2 extrude=v_extrude*radius*u_extrude_scale;vec4 pos=vec4(floor(a_pos*0.5)+extrude,0,1);gl_Position=u_matrix*pos;}"),heatmapTexture:ne("uniform sampler2D u_image;uniform sampler2D u_color_ramp;uniform float u_opacity;varying vec2 v_pos;void main() {float t=texture2D(u_image,v_pos).r;vec4 color=texture2D(u_color_ramp,vec2(t,0.5));gl_FragColor=color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(0.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;attribute vec2 a_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos*u_world,0,1);v_pos.x=a_pos.x;v_pos.y=1.0-a_pos.y;}"),collisionBox:ne("varying float v_placed;varying float v_notUsed;void main() {float alpha=0.5;gl_FragColor=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {gl_FragColor=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {gl_FragColor*=.1;}}","attribute vec2 a_pos;attribute vec2 a_anchor_pos;attribute vec2 a_extrude;attribute vec2 a_placed;attribute vec2 a_shift;uniform mat4 u_matrix;uniform vec2 u_extrude_scale;uniform float u_camera_to_center_distance;varying float v_placed;varying float v_notUsed;void main() {vec4 projectedPoint=u_matrix*vec4(a_anchor_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);gl_Position=u_matrix*vec4(a_pos,get_elevation(a_pos),1.0);gl_Position.xy+=(a_extrude+a_shift)*u_extrude_scale*gl_Position.w*collision_perspective_ratio;v_placed=a_placed.x;v_notUsed=a_placed.y;}"),collisionCircle:ne("varying float v_radius;varying vec2 v_extrude;varying float v_perspective_ratio;varying float v_collision;void main() {float alpha=0.5*min(v_perspective_ratio,1.0);float stroke_radius=0.9*max(v_perspective_ratio,1.0);float distance_to_center=length(v_extrude);float distance_to_edge=abs(distance_to_center-v_radius);float opacity_t=smoothstep(-stroke_radius,0.0,-distance_to_edge);vec4 color=mix(vec4(0.0,0.0,1.0,0.5),vec4(1.0,0.0,0.0,1.0),v_collision);gl_FragColor=color*alpha*opacity_t;}","attribute vec2 a_pos;attribute float a_radius;attribute vec2 a_flags;uniform mat4 u_matrix;uniform mat4 u_inv_matrix;uniform vec2 u_viewport_size;uniform float u_camera_to_center_distance;varying float v_radius;varying vec2 v_extrude;varying float v_perspective_ratio;varying float v_collision;vec3 toTilePosition(vec2 screenPos) {vec4 rayStart=u_inv_matrix*vec4(screenPos,-1.0,1.0);vec4 rayEnd  =u_inv_matrix*vec4(screenPos, 1.0,1.0);rayStart.xyz/=rayStart.w;rayEnd.xyz  /=rayEnd.w;highp float t=(0.0-rayStart.z)/(rayEnd.z-rayStart.z);return mix(rayStart.xyz,rayEnd.xyz,t);}void main() {vec2 quadCenterPos=a_pos;float radius=a_radius;float collision=a_flags.x;float vertexIdx=a_flags.y;vec2 quadVertexOffset=vec2(mix(-1.0,1.0,float(vertexIdx >=2.0)),mix(-1.0,1.0,float(vertexIdx >=1.0 && vertexIdx <=2.0)));vec2 quadVertexExtent=quadVertexOffset*radius;vec3 tilePos=toTilePosition(quadCenterPos);vec4 clipPos=u_matrix*vec4(tilePos,1.0);highp float camera_to_anchor_distance=clipPos.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);float padding_factor=1.2;v_radius=radius;v_extrude=quadVertexExtent*padding_factor;v_perspective_ratio=collision_perspective_ratio;v_collision=collision;gl_Position=vec4(clipPos.xyz/clipPos.w,1.0)+vec4(quadVertexExtent*padding_factor/u_viewport_size*2.0,0.0,0.0);}"),debug:ne("uniform highp vec4 u_color;uniform sampler2D u_overlay;varying vec2 v_uv;void main() {vec4 overlay_color=texture2D(u_overlay,v_uv);gl_FragColor=mix(u_color,overlay_color,overlay_color.a);}","attribute vec2 a_pos;varying vec2 v_uv;uniform mat4 u_matrix;uniform float u_overlay_scale;void main() {v_uv=a_pos/8192.0;gl_Position=u_matrix*vec4(a_pos*u_overlay_scale,get_elevation(a_pos),1);}"),fill:ne("#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_FragColor=color*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);}"),fillOutline:ne("varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=outline_color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;uniform vec2 u_world;varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),fillOutlinePattern:ne("uniform vec2 u_texsize;uniform sampler2D u_image;uniform float u_fade;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);float dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=mix(color1,color2,u_fade)*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;gl_Position=u_matrix*vec4(a_pos,0,1);vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,a_pos);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),fillPattern:ne("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_fade)*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileZoomRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileZoomRatio,a_pos);}"),fillExtrusion:ne("varying vec4 v_color;void main() {gl_FragColor=v_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;uniform float u_vertical_gradient;uniform lowp float u_opacity;attribute vec2 a_pos;attribute vec4 a_normal_ed;\n#ifdef TERRAIN3D\nattribute vec2 a_centroid;\n#endif\nvarying vec4 v_color;\n#pragma mapbox: define highp float base\n#pragma mapbox: define highp float height\n#pragma mapbox: define highp vec4 color\nvoid main() {\n#pragma mapbox: initialize highp float base\n#pragma mapbox: initialize highp float height\n#pragma mapbox: initialize highp vec4 color\nvec3 normal=a_normal_ed.xyz;\n#ifdef TERRAIN3D\nfloat height_terrain3d_offset=get_elevation(a_centroid);float base_terrain3d_offset=height_terrain3d_offset-(base > 0.0 ? 0.0 : 10.0);\n#else\nfloat height_terrain3d_offset=0.0;float base_terrain3d_offset=0.0;\n#endif\nbase=max(0.0,base)+base_terrain3d_offset;height=max(0.0,height)+height_terrain3d_offset;float t=mod(normal.x,2.0);gl_Position=u_matrix*vec4(a_pos,t > 0.0 ? height : base,1);float colorvalue=color.r*0.2126+color.g*0.7152+color.b*0.0722;v_color=vec4(0.0,0.0,0.0,1.0);vec4 ambientlight=vec4(0.03,0.03,0.03,1.0);color+=ambientlight;float directional=clamp(dot(normal/16384.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((1.0-colorvalue+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_color.r+=clamp(color.r*directional*u_lightcolor.r,mix(0.0,0.3,1.0-u_lightcolor.r),1.0);v_color.g+=clamp(color.g*directional*u_lightcolor.g,mix(0.0,0.3,1.0-u_lightcolor.g),1.0);v_color.b+=clamp(color.b*directional*u_lightcolor.b,mix(0.0,0.3,1.0-u_lightcolor.b),1.0);v_color*=u_opacity;}"),fillExtrusionPattern:ne("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);vec4 mixedColor=mix(color1,color2,u_fade);gl_FragColor=mixedColor*v_lighting;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_height_factor;uniform vec3 u_scale;uniform float u_vertical_gradient;uniform lowp float u_opacity;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;attribute vec2 a_pos;attribute vec4 a_normal_ed;\n#ifdef TERRAIN3D\nattribute vec2 a_centroid;\n#endif\nvarying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec3 normal=a_normal_ed.xyz;float edgedistance=a_normal_ed.w;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;\n#ifdef TERRAIN3D\nfloat height_terrain3d_offset=get_elevation(a_centroid);float base_terrain3d_offset=height_terrain3d_offset-(base > 0.0 ? 0.0 : 10.0);\n#else\nfloat height_terrain3d_offset=0.0;float base_terrain3d_offset=0.0;\n#endif\nbase=max(0.0,base)+base_terrain3d_offset;height=max(0.0,height)+height_terrain3d_offset;float t=mod(normal.x,2.0);float z=t > 0.0 ? height : base;gl_Position=u_matrix*vec4(a_pos,z,1);vec2 pos=normal.x==1.0 && normal.y==0.0 && normal.z==16384.0\n? a_pos\n: vec2(edgedistance,z*u_height_factor);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,pos);v_lighting=vec4(0.0,0.0,0.0,1.0);float directional=clamp(dot(normal/16383.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((0.5+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_lighting.rgb+=clamp(directional*u_lightcolor,mix(vec3(0.0),vec3(0.3),1.0-u_lightcolor),vec3(1.0));v_lighting*=u_opacity;}"),hillshadePrepare:ne("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_dimension;uniform float u_zoom;uniform vec4 u_unpack;float getElevation(vec2 coord,float bias) {vec4 data=texture2D(u_image,coord)*255.0;data.a=-1.0;return dot(data,u_unpack)/4.0;}void main() {vec2 epsilon=1.0/u_dimension;float a=getElevation(v_pos+vec2(-epsilon.x,-epsilon.y),0.0);float b=getElevation(v_pos+vec2(0,-epsilon.y),0.0);float c=getElevation(v_pos+vec2(epsilon.x,-epsilon.y),0.0);float d=getElevation(v_pos+vec2(-epsilon.x,0),0.0);float e=getElevation(v_pos,0.0);float f=getElevation(v_pos+vec2(epsilon.x,0),0.0);float g=getElevation(v_pos+vec2(-epsilon.x,epsilon.y),0.0);float h=getElevation(v_pos+vec2(0,epsilon.y),0.0);float i=getElevation(v_pos+vec2(epsilon.x,epsilon.y),0.0);float exaggerationFactor=u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;float exaggeration=u_zoom < 15.0 ? (u_zoom-15.0)*exaggerationFactor : 0.0;vec2 deriv=vec2((c+f+f+i)-(a+d+d+g),(g+h+h+i)-(a+b+b+c))/pow(2.0,exaggeration+(19.2562-u_zoom));gl_FragColor=clamp(vec4(deriv.x/2.0+0.5,deriv.y/2.0+0.5,1.0,1.0),0.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_dimension;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);highp vec2 epsilon=1.0/u_dimension;float scale=(u_dimension.x-2.0)/u_dimension.x;v_pos=(a_texture_pos/8192.0)*scale+epsilon;}"),hillshade:ne("uniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_latrange;uniform vec2 u_light;uniform vec4 u_shadow;uniform vec4 u_highlight;uniform vec4 u_accent;\n#define PI 3.141592653589793\nvoid main() {vec4 pixel=texture2D(u_image,v_pos);vec2 deriv=((pixel.rg*2.0)-1.0);float scaleFactor=cos(radians((u_latrange[0]-u_latrange[1])*(1.0-v_pos.y)+u_latrange[1]));float slope=atan(1.25*length(deriv)/scaleFactor);float aspect=deriv.x !=0.0 ? atan(deriv.y,-deriv.x) : PI/2.0*(deriv.y > 0.0 ? 1.0 :-1.0);float intensity=u_light.x;float azimuth=u_light.y+PI;float base=1.875-intensity*1.75;float maxValue=0.5*PI;float scaledSlope=intensity !=0.5 ? ((pow(base,slope)-1.0)/(pow(base,maxValue)-1.0))*maxValue : slope;float accent=cos(scaledSlope);vec4 accent_color=(1.0-accent)*u_accent*clamp(intensity*2.0,0.0,1.0);float shade=abs(mod((aspect+azimuth)/PI+0.5,2.0)-1.0);vec4 shade_color=mix(u_shadow,u_highlight,shade)*sin(scaledSlope)*clamp(intensity*2.0,0.0,1.0);gl_FragColor=accent_color*(1.0-shade_color.a)+shade_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos=a_texture_pos/8192.0;}"),line:ne("uniform lowp float u_device_pixel_ratio;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform vec2 u_units_to_pixels;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp float v_linesofar;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_width2=vec2(outset,inset);}"),lineGradient:ne("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;varying highp vec2 v_uv;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);vec4 color=texture2D(u_image,v_uv);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;attribute float a_uv_x;attribute float a_split_index;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;uniform float u_image_height;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp vec2 v_uv;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;highp float texel_height=1.0/u_image_height;highp float half_texel_height=0.5*texel_height;v_uv=vec2(a_uv_x,a_split_index*texel_height-half_texel_height);vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_width2=vec2(outset,inset);}"),linePattern:ne("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform lowp float u_device_pixel_ratio;uniform vec2 u_texsize;uniform float u_fade;uniform mediump vec3 u_scale;uniform sampler2D u_image;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;varying float v_width;\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;vec2 pattern_size_a=vec2(display_size_a.x*fromScale/tileZoomRatio,display_size_a.y);vec2 pattern_size_b=vec2(display_size_b.x*toScale/tileZoomRatio,display_size_b.y);float aspect_a=display_size_a.y/v_width;float aspect_b=display_size_b.y/v_width;float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float x_a=mod(v_linesofar/pattern_size_a.x*aspect_a,1.0);float x_b=mod(v_linesofar/pattern_size_b.x*aspect_b,1.0);float y=0.5*v_normal.y+0.5;vec2 texel_size=1.0/u_texsize;vec2 pos_a=mix(pattern_tl_a*texel_size-texel_size,pattern_br_a*texel_size+texel_size,vec2(x_a,y));vec2 pos_b=mix(pattern_tl_b*texel_size-texel_size,pattern_br_b*texel_size+texel_size,vec2(x_b,y));vec4 color=mix(texture2D(u_image,pos_a),texture2D(u_image,pos_b),u_fade);gl_FragColor=color*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform vec2 u_units_to_pixels;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;varying float v_width;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_linesofar=a_linesofar;v_width2=vec2(outset,inset);v_width=floorwidth;}"),lineSDF:ne("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;uniform float u_sdfgamma;uniform float u_mix;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float sdfdist_a=texture2D(u_image,v_tex_a).a;float sdfdist_b=texture2D(u_image,v_tex_b).a;float sdfdist=mix(sdfdist_a,sdfdist_b,u_mix);alpha*=smoothstep(0.5-u_sdfgamma/floorwidth,0.5+u_sdfgamma/floorwidth,sdfdist);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_patternscale_a;uniform float u_tex_y_a;uniform vec2 u_patternscale_b;uniform float u_tex_y_b;uniform vec2 u_units_to_pixels;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_tex_a=vec2(a_linesofar*u_patternscale_a.x/floorwidth,normal.y*u_patternscale_a.y+u_tex_y_a);v_tex_b=vec2(a_linesofar*u_patternscale_b.x/floorwidth,normal.y*u_patternscale_b.y+u_tex_y_b);v_width2=vec2(outset,inset);}"),raster:ne("uniform float u_fade_t;uniform float u_opacity;uniform sampler2D u_image0;uniform sampler2D u_image1;varying vec2 v_pos0;varying vec2 v_pos1;uniform float u_brightness_low;uniform float u_brightness_high;uniform float u_saturation_factor;uniform float u_contrast_factor;uniform vec3 u_spin_weights;void main() {vec4 color0=texture2D(u_image0,v_pos0);vec4 color1=texture2D(u_image1,v_pos1);if (color0.a > 0.0) {color0.rgb=color0.rgb/color0.a;}if (color1.a > 0.0) {color1.rgb=color1.rgb/color1.a;}vec4 color=mix(color0,color1,u_fade_t);color.a*=u_opacity;vec3 rgb=color.rgb;rgb=vec3(dot(rgb,u_spin_weights.xyz),dot(rgb,u_spin_weights.zxy),dot(rgb,u_spin_weights.yzx));float average=(color.r+color.g+color.b)/3.0;rgb+=(average-rgb)*u_saturation_factor;rgb=(rgb-0.5)*u_contrast_factor+0.5;vec3 u_high_vec=vec3(u_brightness_low,u_brightness_low,u_brightness_low);vec3 u_low_vec=vec3(u_brightness_high,u_brightness_high,u_brightness_high);gl_FragColor=vec4(mix(u_high_vec,u_low_vec,rgb)*color.a,color.a);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_tl_parent;uniform float u_scale_parent;uniform float u_buffer_scale;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos0;varying vec2 v_pos1;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos0=(((a_texture_pos/8192.0)-0.5)/u_buffer_scale )+0.5;v_pos1=(v_pos0*u_scale_parent)+u_tl_parent;}"),symbolIcon:ne("uniform sampler2D u_texture;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nlowp float alpha=opacity*v_fade_opacity;gl_FragColor=texture2D(u_texture,v_tex)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform highp float u_camera_to_center_distance;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform float u_fade_change;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform vec2 u_texsize;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;vec2 a_minFontScale=a_pixeloffset.zw/256.0;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,ele,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),ele,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,ele,1.0);float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*max(a_minFontScale,fontScale)+a_pxoffset/16.0),z,1.0);v_tex=a_tex/u_texsize;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float visibility=calculate_visibility(projectedPoint);v_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));}"),symbolSDF:ne("#define SDF_PX 8.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;uniform bool u_is_text;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat EDGE_GAMMA=0.105/u_device_pixel_ratio;vec2 tex=v_data0.xy;float gamma_scale=v_data1.x;float size=v_data1.y;float fade_opacity=v_data1[2];float fontScale=u_is_text ? size/24.0 : size;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float inner_edge=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);inner_edge=inner_edge+gamma*gamma_scale;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(inner_edge-gamma_scaled,inner_edge+gamma_scaled,dist);if (u_is_halo) {lowp float halo_edge=(6.0-halo_width/fontScale)/SDF_PX;alpha=min(smoothstep(halo_edge-gamma_scaled,halo_edge+gamma_scaled,dist),1.0-alpha);}gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,ele,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),ele,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,ele,1.0);float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale+a_pxoffset),z,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float visibility=calculate_visibility(projectedPoint);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));v_data0=a_tex/u_texsize;v_data1=vec3(gamma_scale,size,interpolated_fade_opacity);}"),symbolTextAndIcon:ne("#define SDF_PX 8.0\n#define SDF 1.0\n#define ICON 0.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform sampler2D u_texture_icon;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat fade_opacity=v_data1[2];if (v_data1.w==ICON) {vec2 tex_icon=v_data0.zw;lowp float alpha=opacity*fade_opacity;gl_FragColor=texture2D(u_texture_icon,tex_icon)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\nreturn;}vec2 tex=v_data0.xy;float EDGE_GAMMA=0.105/u_device_pixel_ratio;float gamma_scale=v_data1.x;float size=v_data1.y;float fontScale=size/24.0;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;uniform vec2 u_texsize_icon;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);float is_sdf=a_size[0]-2.0*a_size_min;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,ele,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=size/24.0;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),ele,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,ele,1.0);float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale),z,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float visibility=calculate_visibility(projectedPoint);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));v_data0.xy=a_tex/u_texsize;v_data0.zw=a_tex/u_texsize_icon;v_data1=vec4(gamma_scale,size,interpolated_fade_opacity,is_sdf);}"),terrain:ne("uniform sampler2D u_texture;varying vec2 v_texture_pos;void main() {gl_FragColor=texture2D(u_texture,v_texture_pos);}",oe),terrainDepth:ne("varying float v_depth;const highp vec4 bitSh=vec4(256.*256.*256.,256.*256.,256.,1.);const highp vec4 bitMsk=vec4(0.,vec3(1./256.0));highp vec4 pack(highp float value) {highp vec4 comp=fract(value*bitSh);comp-=comp.xxyz*bitMsk;return comp;}void main() {gl_FragColor=pack(v_depth);}",oe),terrainCoords:ne("precision mediump float;uniform sampler2D u_texture;uniform float u_terrain_coords_id;varying vec2 v_texture_pos;void main() {vec4 rgba=texture2D(u_texture,v_texture_pos);gl_FragColor=vec4(rgba.r,rgba.g,rgba.b,u_terrain_coords_id);}",oe)};function ne(t,e){const i=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,s=e.match(/attribute ([\w]+) ([\w]+)/g),a=t.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),o=e.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),r=o?o.concat(a):a,n={};return {fragmentSource:t=t.replace(i,((t,e,i,s,a)=>(n[a]=!0,"define"===e?`\n#ifndef HAS_UNIFORM_u_${a}\nvarying ${i} ${s} ${a};\n#else\nuniform ${i} ${s} u_${a};\n#endif\n`:`\n#ifdef HAS_UNIFORM_u_${a}\n    ${i} ${s} ${a} = u_${a};\n#endif\n`))),vertexSource:e=e.replace(i,((t,e,i,s,a)=>{const o="float"===s?"vec2":"vec4",r=a.match(/color/)?"color":o;return n[a]?"define"===e?`\n#ifndef HAS_UNIFORM_u_${a}\nuniform lowp float u_${a}_t;\nattribute ${i} ${o} a_${a};\nvarying ${i} ${s} ${a};\n#else\nuniform ${i} ${s} u_${a};\n#endif\n`:"vec4"===r?`\n#ifndef HAS_UNIFORM_u_${a}\n    ${a} = a_${a};\n#else\n    ${i} ${s} ${a} = u_${a};\n#endif\n`:`\n#ifndef HAS_UNIFORM_u_${a}\n    ${a} = unpack_mix_${r}(a_${a}, u_${a}_t);\n#else\n    ${i} ${s} ${a} = u_${a};\n#endif\n`:"define"===e?`\n#ifndef HAS_UNIFORM_u_${a}\nuniform lowp float u_${a}_t;\nattribute ${i} ${o} a_${a};\n#else\nuniform ${i} ${s} u_${a};\n#endif\n`:"vec4"===r?`\n#ifndef HAS_UNIFORM_u_${a}\n    ${i} ${s} ${a} = a_${a};\n#else\n    ${i} ${s} ${a} = u_${a};\n#endif\n`:`\n#ifndef HAS_UNIFORM_u_${a}\n    ${i} ${s} ${a} = unpack_mix_${r}(a_${a}, u_${a}_t);\n#else\n    ${i} ${s} ${a} = u_${a};\n#endif\n`})),staticAttributes:s,staticUniforms:r}}class le{constructor(){this.boundProgram=null,this.boundLayoutVertexBuffer=null,this.boundPaintVertexBuffers=[],this.boundIndexBuffer=null,this.boundVertexOffset=null,this.boundDynamicVertexBuffer=null,this.vao=null;}bind(t,e,i,s,a,o,r,n,l){this.context=t;let h=this.boundPaintVertexBuffers.length!==s.length;for(let t=0;!h&&t<s.length;t++)this.boundPaintVertexBuffers[t]!==s[t]&&(h=!0);!this.vao||this.boundProgram!==e||this.boundLayoutVertexBuffer!==i||h||this.boundIndexBuffer!==a||this.boundVertexOffset!==o||this.boundDynamicVertexBuffer!==r||this.boundDynamicVertexBuffer2!==n||this.boundDynamicVertexBuffer3!==l?this.freshBind(e,i,s,a,o,r,n,l):(t.bindVertexArray.set(this.vao),r&&r.bind(),a&&a.dynamicDraw&&a.bind(),n&&n.bind(),l&&l.bind());}freshBind(t,e,i,s,a,o,r,n){const l=t.numAttributes,h=this.context,c=h.gl;this.vao&&this.destroy(),this.vao=h.createVertexArray(),h.bindVertexArray.set(this.vao),this.boundProgram=t,this.boundLayoutVertexBuffer=e,this.boundPaintVertexBuffers=i,this.boundIndexBuffer=s,this.boundVertexOffset=a,this.boundDynamicVertexBuffer=o,this.boundDynamicVertexBuffer2=r,this.boundDynamicVertexBuffer3=n,e.enableAttributes(c,t);for(const e of i)e.enableAttributes(c,t);o&&o.enableAttributes(c,t),r&&r.enableAttributes(c,t),n&&n.enableAttributes(c,t),e.bind(),e.setVertexAttribPointers(c,t,a);for(const e of i)e.bind(),e.setVertexAttribPointers(c,t,a);o&&(o.bind(),o.setVertexAttribPointers(c,t,a)),s&&s.bind(),r&&(r.bind(),r.setVertexAttribPointers(c,t,a)),n&&(n.bind(),n.setVertexAttribPointers(c,t,a)),h.currentNumAttributes=l;}destroy(){this.vao&&(this.context.deleteVertexArray(this.vao),this.vao=null);}}function he(t){const e=[];for(let i=0;i<t.length;i++){if(null===t[i])continue;const s=t[i].split(" ");e.push(s.pop());}return e}class ce{constructor(e,i,s,a,o,r){const n=e.gl;this.program=n.createProgram();const l=he(i.staticAttributes),h=s?s.getBinderAttributes():[],c=l.concat(h),u=re.prelude.staticUniforms?he(re.prelude.staticUniforms):[],d=i.staticUniforms?he(i.staticUniforms):[],_=s?s.getBinderUniforms():[],p=u.concat(d).concat(_),m=[];for(const t of p)m.indexOf(t)<0&&m.push(t);const f=s?s.defines():[];o&&f.push("#define OVERDRAW_INSPECTOR;"),r&&f.push("#define TERRAIN3D;");const g=f.concat(re.prelude.fragmentSource,i.fragmentSource).join("\n"),v=f.concat(re.prelude.vertexSource,i.vertexSource).join("\n"),x=n.createShader(n.FRAGMENT_SHADER);if(n.isContextLost())return void(this.failedToCreate=!0);if(n.shaderSource(x,g),n.compileShader(x),!n.getShaderParameter(x,n.COMPILE_STATUS))throw new Error(`Could not compile fragment shader: ${n.getShaderInfoLog(x)}`);n.attachShader(this.program,x);const y=n.createShader(n.VERTEX_SHADER);if(n.isContextLost())return void(this.failedToCreate=!0);if(n.shaderSource(y,v),n.compileShader(y),!n.getShaderParameter(y,n.COMPILE_STATUS))throw new Error(`Could not compile vertex shader: ${n.getShaderInfoLog(y)}`);n.attachShader(this.program,y),this.attributes={};const b={};this.numAttributes=c.length;for(let t=0;t<this.numAttributes;t++)c[t]&&(n.bindAttribLocation(this.program,t,c[t]),this.attributes[c[t]]=t);if(n.linkProgram(this.program),!n.getProgramParameter(this.program,n.LINK_STATUS))throw new Error(`Program failed to link: ${n.getProgramInfoLog(this.program)}`);n.deleteShader(y),n.deleteShader(x);for(let t=0;t<m.length;t++){const e=m[t];if(e&&!b[e]){const t=n.getUniformLocation(this.program,e);t&&(b[e]=t);}}this.fixedUniforms=a(e,b),this.terrainUniforms=((e,i)=>({u_depth:new t.aL(e,i.u_depth),u_terrain:new t.aL(e,i.u_terrain),u_terrain_dim:new t.aM(e,i.u_terrain_dim),u_terrain_matrix:new t.aN(e,i.u_terrain_matrix),u_terrain_unpack:new t.aO(e,i.u_terrain_unpack),u_terrain_exaggeration:new t.aM(e,i.u_terrain_exaggeration)}))(e,b),this.binderUniforms=s?s.getUniforms(e,b):[];}draw(t,e,i,s,a,o,r,n,l,h,c,u,d,_,p,m,f,g){const v=t.gl;if(this.failedToCreate)return;if(t.program.set(this.program),t.setDepthMode(i),t.setStencilMode(s),t.setColorMode(a),t.setCullFace(o),n){t.activeTexture.set(v.TEXTURE2),v.bindTexture(v.TEXTURE_2D,n.depthTexture),t.activeTexture.set(v.TEXTURE3),v.bindTexture(v.TEXTURE_2D,n.texture);for(const t in this.terrainUniforms)this.terrainUniforms[t].set(n[t]);}for(const t in this.fixedUniforms)this.fixedUniforms[t].set(r[t]);p&&p.setUniforms(t,this.binderUniforms,d,{zoom:_});let x=0;switch(e){case v.LINES:x=2;break;case v.TRIANGLES:x=3;break;case v.LINE_STRIP:x=1;}for(const i of u.get()){const s=i.vaos||(i.vaos={});(s[l]||(s[l]=new le)).bind(t,this,h,p?p.getPaintVertexBuffers():[],c,i.vertexOffset,m,f,g),v.drawElements(e,i.primitiveLength*x,v.UNSIGNED_SHORT,i.primitiveOffset*x*2);}}}function ue(t,e,i){const s=1/St(i,1,e.transform.tileZoom),a=Math.pow(2,i.tileID.overscaledZ),o=i.tileSize*Math.pow(2,e.transform.tileZoom)/a,r=o*(i.tileID.canonical.x+i.tileID.wrap*a),n=o*i.tileID.canonical.y;return {u_image:0,u_texsize:i.imageAtlasTexture.size,u_scale:[s,t.fromScale,t.toScale],u_fade:t.t,u_pixel_coord_upper:[r>>16,n>>16],u_pixel_coord_lower:[65535&r,65535&n]}}const de=(e,i,s,a)=>{const o=i.style.light,r=o.properties.get("position"),n=[r.x,r.y,r.z],l=function(){var e=new t.A(9);return t.A!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}();"viewport"===o.properties.get("anchor")&&function(t,e){var i=Math.sin(e),s=Math.cos(e);t[0]=s,t[1]=i,t[2]=0,t[3]=-i,t[4]=s,t[5]=0,t[6]=0,t[7]=0,t[8]=1;}(l,-i.transform.angle),function(t,e,i){var s=e[0],a=e[1],o=e[2];t[0]=s*i[0]+a*i[3]+o*i[6],t[1]=s*i[1]+a*i[4]+o*i[7],t[2]=s*i[2]+a*i[5]+o*i[8];}(n,n,l);const h=o.properties.get("color");return {u_matrix:e,u_lightpos:n,u_lightintensity:o.properties.get("intensity"),u_lightcolor:[h.r,h.g,h.b],u_vertical_gradient:+s,u_opacity:a}},_e=(e,i,s,a,o,r,n)=>t.e(de(e,i,s,a),ue(r,i,n),{u_height_factor:-Math.pow(2,o.overscaledZ)/n.tileSize/8}),pe=t=>({u_matrix:t}),me=(e,i,s,a)=>t.e(pe(e),ue(s,i,a)),fe=(t,e)=>({u_matrix:t,u_world:e}),ge=(e,i,s,a,o)=>t.e(me(e,i,s,a),{u_world:o}),ve=(t,e,i,s)=>{const a=t.transform;let o,r;if("map"===s.paint.get("circle-pitch-alignment")){const t=St(i,1,a.zoom);o=!0,r=[t,t];}else o=!1,r=a.pixelsToGLUnits;return {u_camera_to_center_distance:a.cameraToCenterDistance,u_scale_with_map:+("map"===s.paint.get("circle-pitch-scale")),u_matrix:t.translatePosMatrix(e.posMatrix,i,s.paint.get("circle-translate"),s.paint.get("circle-translate-anchor")),u_pitch_with_map:+o,u_device_pixel_ratio:t.pixelRatio,u_extrude_scale:r}},xe=(t,e,i)=>{const s=St(i,1,e.zoom),a=Math.pow(2,e.zoom-i.tileID.overscaledZ),o=i.tileID.overscaleFactor();return {u_matrix:t,u_camera_to_center_distance:e.cameraToCenterDistance,u_pixels_to_tile_units:s,u_extrude_scale:[e.pixelsToGLUnits[0]/(s*a),e.pixelsToGLUnits[1]/(s*a)],u_overscale_factor:o}},ye=(t,e,i=1)=>({u_matrix:t,u_color:e,u_overlay:0,u_overlay_scale:i}),be=t=>({u_matrix:t}),we=(t,e,i,s)=>({u_matrix:t,u_extrude_scale:St(e,1,i),u_intensity:s});function Te(e,i){const s=Math.pow(2,i.canonical.z),a=i.canonical.y;return [new t.U(0,a/s).toLngLat().lat,new t.U(0,(a+1)/s).toLngLat().lat]}const Ie=(t,e,i,s)=>{const a=t.transform;return {u_matrix:De(t,e,i,s),u_ratio:1/St(e,1,a.zoom),u_device_pixel_ratio:t.pixelRatio,u_units_to_pixels:[1/a.pixelsToGLUnits[0],1/a.pixelsToGLUnits[1]]}},Ee=(e,i,s,a,o)=>t.e(Ie(e,i,s,o),{u_image:0,u_image_height:a}),Se=(t,e,i,s,a)=>{const o=t.transform,r=Pe(e,o);return {u_matrix:De(t,e,i,a),u_texsize:e.imageAtlasTexture.size,u_ratio:1/St(e,1,o.zoom),u_device_pixel_ratio:t.pixelRatio,u_image:0,u_scale:[r,s.fromScale,s.toScale],u_fade:s.t,u_units_to_pixels:[1/o.pixelsToGLUnits[0],1/o.pixelsToGLUnits[1]]}},Ce=(e,i,s,a,o,r)=>{const n=e.lineAtlas,l=Pe(i,e.transform),h="round"===s.layout.get("line-cap"),c=n.getDash(a.from,h),u=n.getDash(a.to,h),d=c.width*o.fromScale,_=u.width*o.toScale;return t.e(Ie(e,i,s,r),{u_patternscale_a:[l/d,-c.height/2],u_patternscale_b:[l/_,-u.height/2],u_sdfgamma:n.width/(256*Math.min(d,_)*e.pixelRatio)/2,u_image:0,u_tex_y_a:c.y,u_tex_y_b:u.y,u_mix:o.t})};function Pe(t,e){return 1/St(t,1,e.tileZoom)}function De(t,e,i,s){return t.translatePosMatrix(s?s.posMatrix:e.tileID.posMatrix,e,i.paint.get("line-translate"),i.paint.get("line-translate-anchor"))}const Me=(t,e,i,s,a)=>{return {u_matrix:t,u_tl_parent:e,u_scale_parent:i,u_buffer_scale:1,u_fade_t:s.mix,u_opacity:s.opacity*a.paint.get("raster-opacity"),u_image0:0,u_image1:1,u_brightness_low:a.paint.get("raster-brightness-min"),u_brightness_high:a.paint.get("raster-brightness-max"),u_saturation_factor:(r=a.paint.get("raster-saturation"),r>0?1-1/(1.001-r):-r),u_contrast_factor:(o=a.paint.get("raster-contrast"),o>0?1/(1-o):1+o),u_spin_weights:ze(a.paint.get("raster-hue-rotate"))};var o,r;};function ze(t){t*=Math.PI/180;const e=Math.sin(t),i=Math.cos(t);return [(2*i+1)/3,(-Math.sqrt(3)*e-i+1)/3,(Math.sqrt(3)*e-i+1)/3]}const Le=(t,e,i,s,a,o,r,n,l,h)=>{const c=a.transform;return {u_is_size_zoom_constant:+("constant"===t||"source"===t),u_is_size_feature_constant:+("constant"===t||"camera"===t),u_size_t:e?e.uSizeT:0,u_size:e?e.uSize:0,u_camera_to_center_distance:c.cameraToCenterDistance,u_pitch:c.pitch/360*2*Math.PI,u_rotate_symbol:+i,u_aspect_ratio:c.width/c.height,u_fade_change:a.options.fadeDuration?a.symbolFadeChange:1,u_matrix:o,u_label_plane_matrix:r,u_coord_matrix:n,u_is_text:+l,u_pitch_with_map:+s,u_texsize:h,u_texture:0}},Ae=(e,i,s,a,o,r,n,l,h,c,u)=>{const d=o.transform;return t.e(Le(e,i,s,a,o,r,n,l,h,c),{u_gamma_scale:a?Math.cos(d._pitch)*d.cameraToCenterDistance:1,u_device_pixel_ratio:o.pixelRatio,u_is_halo:+u})},Re=(e,i,s,a,o,r,n,l,h,c)=>t.e(Ae(e,i,s,a,o,r,n,l,!0,h,!0),{u_texsize_icon:c,u_texture_icon:1}),ke=(t,e,i)=>({u_matrix:t,u_opacity:e,u_color:i}),Fe=(e,i,s,a,o,r)=>t.e(function(t,e,i,s){const a=i.imageManager.getPattern(t.from.toString()),o=i.imageManager.getPattern(t.to.toString()),{width:r,height:n}=i.imageManager.getPixelSize(),l=Math.pow(2,s.tileID.overscaledZ),h=s.tileSize*Math.pow(2,i.transform.tileZoom)/l,c=h*(s.tileID.canonical.x+s.tileID.wrap*l),u=h*s.tileID.canonical.y;return {u_image:0,u_pattern_tl_a:a.tl,u_pattern_br_a:a.br,u_pattern_tl_b:o.tl,u_pattern_br_b:o.br,u_texsize:[r,n],u_mix:e.t,u_pattern_size_a:a.displaySize,u_pattern_size_b:o.displaySize,u_scale_a:e.fromScale,u_scale_b:e.toScale,u_tile_units_to_pixels:1/St(s,1,i.transform.tileZoom),u_pixel_coord_upper:[c>>16,u>>16],u_pixel_coord_lower:[65535&c,65535&u]}}(a,r,s,o),{u_matrix:e,u_opacity:i}),Be={fillExtrusion:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_lightpos:new t.aP(e,i.u_lightpos),u_lightintensity:new t.aM(e,i.u_lightintensity),u_lightcolor:new t.aP(e,i.u_lightcolor),u_vertical_gradient:new t.aM(e,i.u_vertical_gradient),u_opacity:new t.aM(e,i.u_opacity)}),fillExtrusionPattern:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_lightpos:new t.aP(e,i.u_lightpos),u_lightintensity:new t.aM(e,i.u_lightintensity),u_lightcolor:new t.aP(e,i.u_lightcolor),u_vertical_gradient:new t.aM(e,i.u_vertical_gradient),u_height_factor:new t.aM(e,i.u_height_factor),u_image:new t.aL(e,i.u_image),u_texsize:new t.aQ(e,i.u_texsize),u_pixel_coord_upper:new t.aQ(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.aQ(e,i.u_pixel_coord_lower),u_scale:new t.aP(e,i.u_scale),u_fade:new t.aM(e,i.u_fade),u_opacity:new t.aM(e,i.u_opacity)}),fill:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix)}),fillPattern:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_image:new t.aL(e,i.u_image),u_texsize:new t.aQ(e,i.u_texsize),u_pixel_coord_upper:new t.aQ(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.aQ(e,i.u_pixel_coord_lower),u_scale:new t.aP(e,i.u_scale),u_fade:new t.aM(e,i.u_fade)}),fillOutline:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_world:new t.aQ(e,i.u_world)}),fillOutlinePattern:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_world:new t.aQ(e,i.u_world),u_image:new t.aL(e,i.u_image),u_texsize:new t.aQ(e,i.u_texsize),u_pixel_coord_upper:new t.aQ(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.aQ(e,i.u_pixel_coord_lower),u_scale:new t.aP(e,i.u_scale),u_fade:new t.aM(e,i.u_fade)}),circle:(e,i)=>({u_camera_to_center_distance:new t.aM(e,i.u_camera_to_center_distance),u_scale_with_map:new t.aL(e,i.u_scale_with_map),u_pitch_with_map:new t.aL(e,i.u_pitch_with_map),u_extrude_scale:new t.aQ(e,i.u_extrude_scale),u_device_pixel_ratio:new t.aM(e,i.u_device_pixel_ratio),u_matrix:new t.aN(e,i.u_matrix)}),collisionBox:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_camera_to_center_distance:new t.aM(e,i.u_camera_to_center_distance),u_pixels_to_tile_units:new t.aM(e,i.u_pixels_to_tile_units),u_extrude_scale:new t.aQ(e,i.u_extrude_scale),u_overscale_factor:new t.aM(e,i.u_overscale_factor)}),collisionCircle:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_inv_matrix:new t.aN(e,i.u_inv_matrix),u_camera_to_center_distance:new t.aM(e,i.u_camera_to_center_distance),u_viewport_size:new t.aQ(e,i.u_viewport_size)}),debug:(e,i)=>({u_color:new t.aR(e,i.u_color),u_matrix:new t.aN(e,i.u_matrix),u_overlay:new t.aL(e,i.u_overlay),u_overlay_scale:new t.aM(e,i.u_overlay_scale)}),clippingMask:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix)}),heatmap:(e,i)=>({u_extrude_scale:new t.aM(e,i.u_extrude_scale),u_intensity:new t.aM(e,i.u_intensity),u_matrix:new t.aN(e,i.u_matrix)}),heatmapTexture:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_world:new t.aQ(e,i.u_world),u_image:new t.aL(e,i.u_image),u_color_ramp:new t.aL(e,i.u_color_ramp),u_opacity:new t.aM(e,i.u_opacity)}),hillshade:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_image:new t.aL(e,i.u_image),u_latrange:new t.aQ(e,i.u_latrange),u_light:new t.aQ(e,i.u_light),u_shadow:new t.aR(e,i.u_shadow),u_highlight:new t.aR(e,i.u_highlight),u_accent:new t.aR(e,i.u_accent)}),hillshadePrepare:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_image:new t.aL(e,i.u_image),u_dimension:new t.aQ(e,i.u_dimension),u_zoom:new t.aM(e,i.u_zoom),u_unpack:new t.aO(e,i.u_unpack)}),line:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_ratio:new t.aM(e,i.u_ratio),u_device_pixel_ratio:new t.aM(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.aQ(e,i.u_units_to_pixels)}),lineGradient:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_ratio:new t.aM(e,i.u_ratio),u_device_pixel_ratio:new t.aM(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.aQ(e,i.u_units_to_pixels),u_image:new t.aL(e,i.u_image),u_image_height:new t.aM(e,i.u_image_height)}),linePattern:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_texsize:new t.aQ(e,i.u_texsize),u_ratio:new t.aM(e,i.u_ratio),u_device_pixel_ratio:new t.aM(e,i.u_device_pixel_ratio),u_image:new t.aL(e,i.u_image),u_units_to_pixels:new t.aQ(e,i.u_units_to_pixels),u_scale:new t.aP(e,i.u_scale),u_fade:new t.aM(e,i.u_fade)}),lineSDF:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_ratio:new t.aM(e,i.u_ratio),u_device_pixel_ratio:new t.aM(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.aQ(e,i.u_units_to_pixels),u_patternscale_a:new t.aQ(e,i.u_patternscale_a),u_patternscale_b:new t.aQ(e,i.u_patternscale_b),u_sdfgamma:new t.aM(e,i.u_sdfgamma),u_image:new t.aL(e,i.u_image),u_tex_y_a:new t.aM(e,i.u_tex_y_a),u_tex_y_b:new t.aM(e,i.u_tex_y_b),u_mix:new t.aM(e,i.u_mix)}),raster:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_tl_parent:new t.aQ(e,i.u_tl_parent),u_scale_parent:new t.aM(e,i.u_scale_parent),u_buffer_scale:new t.aM(e,i.u_buffer_scale),u_fade_t:new t.aM(e,i.u_fade_t),u_opacity:new t.aM(e,i.u_opacity),u_image0:new t.aL(e,i.u_image0),u_image1:new t.aL(e,i.u_image1),u_brightness_low:new t.aM(e,i.u_brightness_low),u_brightness_high:new t.aM(e,i.u_brightness_high),u_saturation_factor:new t.aM(e,i.u_saturation_factor),u_contrast_factor:new t.aM(e,i.u_contrast_factor),u_spin_weights:new t.aP(e,i.u_spin_weights)}),symbolIcon:(e,i)=>({u_is_size_zoom_constant:new t.aL(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.aL(e,i.u_is_size_feature_constant),u_size_t:new t.aM(e,i.u_size_t),u_size:new t.aM(e,i.u_size),u_camera_to_center_distance:new t.aM(e,i.u_camera_to_center_distance),u_pitch:new t.aM(e,i.u_pitch),u_rotate_symbol:new t.aL(e,i.u_rotate_symbol),u_aspect_ratio:new t.aM(e,i.u_aspect_ratio),u_fade_change:new t.aM(e,i.u_fade_change),u_matrix:new t.aN(e,i.u_matrix),u_label_plane_matrix:new t.aN(e,i.u_label_plane_matrix),u_coord_matrix:new t.aN(e,i.u_coord_matrix),u_is_text:new t.aL(e,i.u_is_text),u_pitch_with_map:new t.aL(e,i.u_pitch_with_map),u_texsize:new t.aQ(e,i.u_texsize),u_texture:new t.aL(e,i.u_texture)}),symbolSDF:(e,i)=>({u_is_size_zoom_constant:new t.aL(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.aL(e,i.u_is_size_feature_constant),u_size_t:new t.aM(e,i.u_size_t),u_size:new t.aM(e,i.u_size),u_camera_to_center_distance:new t.aM(e,i.u_camera_to_center_distance),u_pitch:new t.aM(e,i.u_pitch),u_rotate_symbol:new t.aL(e,i.u_rotate_symbol),u_aspect_ratio:new t.aM(e,i.u_aspect_ratio),u_fade_change:new t.aM(e,i.u_fade_change),u_matrix:new t.aN(e,i.u_matrix),u_label_plane_matrix:new t.aN(e,i.u_label_plane_matrix),u_coord_matrix:new t.aN(e,i.u_coord_matrix),u_is_text:new t.aL(e,i.u_is_text),u_pitch_with_map:new t.aL(e,i.u_pitch_with_map),u_texsize:new t.aQ(e,i.u_texsize),u_texture:new t.aL(e,i.u_texture),u_gamma_scale:new t.aM(e,i.u_gamma_scale),u_device_pixel_ratio:new t.aM(e,i.u_device_pixel_ratio),u_is_halo:new t.aL(e,i.u_is_halo)}),symbolTextAndIcon:(e,i)=>({u_is_size_zoom_constant:new t.aL(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.aL(e,i.u_is_size_feature_constant),u_size_t:new t.aM(e,i.u_size_t),u_size:new t.aM(e,i.u_size),u_camera_to_center_distance:new t.aM(e,i.u_camera_to_center_distance),u_pitch:new t.aM(e,i.u_pitch),u_rotate_symbol:new t.aL(e,i.u_rotate_symbol),u_aspect_ratio:new t.aM(e,i.u_aspect_ratio),u_fade_change:new t.aM(e,i.u_fade_change),u_matrix:new t.aN(e,i.u_matrix),u_label_plane_matrix:new t.aN(e,i.u_label_plane_matrix),u_coord_matrix:new t.aN(e,i.u_coord_matrix),u_is_text:new t.aL(e,i.u_is_text),u_pitch_with_map:new t.aL(e,i.u_pitch_with_map),u_texsize:new t.aQ(e,i.u_texsize),u_texsize_icon:new t.aQ(e,i.u_texsize_icon),u_texture:new t.aL(e,i.u_texture),u_texture_icon:new t.aL(e,i.u_texture_icon),u_gamma_scale:new t.aM(e,i.u_gamma_scale),u_device_pixel_ratio:new t.aM(e,i.u_device_pixel_ratio),u_is_halo:new t.aL(e,i.u_is_halo)}),background:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_opacity:new t.aM(e,i.u_opacity),u_color:new t.aR(e,i.u_color)}),backgroundPattern:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_opacity:new t.aM(e,i.u_opacity),u_image:new t.aL(e,i.u_image),u_pattern_tl_a:new t.aQ(e,i.u_pattern_tl_a),u_pattern_br_a:new t.aQ(e,i.u_pattern_br_a),u_pattern_tl_b:new t.aQ(e,i.u_pattern_tl_b),u_pattern_br_b:new t.aQ(e,i.u_pattern_br_b),u_texsize:new t.aQ(e,i.u_texsize),u_mix:new t.aM(e,i.u_mix),u_pattern_size_a:new t.aQ(e,i.u_pattern_size_a),u_pattern_size_b:new t.aQ(e,i.u_pattern_size_b),u_scale_a:new t.aM(e,i.u_scale_a),u_scale_b:new t.aM(e,i.u_scale_b),u_pixel_coord_upper:new t.aQ(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.aQ(e,i.u_pixel_coord_lower),u_tile_units_to_pixels:new t.aM(e,i.u_tile_units_to_pixels)}),terrain:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_texture:new t.aL(e,i.u_texture),u_ele_delta:new t.aM(e,i.u_ele_delta)}),terrainDepth:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_ele_delta:new t.aM(e,i.u_ele_delta)}),terrainCoords:(e,i)=>({u_matrix:new t.aN(e,i.u_matrix),u_texture:new t.aL(e,i.u_texture),u_terrain_coords_id:new t.aM(e,i.u_terrain_coords_id),u_ele_delta:new t.aM(e,i.u_ele_delta)})};class Oe{constructor(t,e,i){this.context=t;const s=t.gl;this.buffer=s.createBuffer(),this.dynamicDraw=Boolean(i),this.context.unbindVAO(),t.bindElementBuffer.set(this.buffer),s.bufferData(s.ELEMENT_ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?s.DYNAMIC_DRAW:s.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer;}bind(){this.context.bindElementBuffer.set(this.buffer);}updateData(t){const e=this.context.gl;if(!this.dynamicDraw)throw new Error("Attempted to update data while not in dynamic mode.");this.context.unbindVAO(),this.bind(),e.bufferSubData(e.ELEMENT_ARRAY_BUFFER,0,t.arrayBuffer);}destroy(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer);}}const Ne={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"};class Ue{constructor(t,e,i,s){this.length=e.length,this.attributes=i,this.itemSize=e.bytesPerElement,this.dynamicDraw=s,this.context=t;const a=t.gl;this.buffer=a.createBuffer(),t.bindVertexBuffer.set(this.buffer),a.bufferData(a.ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?a.DYNAMIC_DRAW:a.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer;}bind(){this.context.bindVertexBuffer.set(this.buffer);}updateData(t){if(t.length!==this.length)throw new Error(`Length of new data is ${t.length}, which doesn't match current length of ${this.length}`);const e=this.context.gl;this.bind(),e.bufferSubData(e.ARRAY_BUFFER,0,t.arrayBuffer);}enableAttributes(t,e){for(let i=0;i<this.attributes.length;i++){const s=e.attributes[this.attributes[i].name];void 0!==s&&t.enableVertexAttribArray(s);}}setVertexAttribPointers(t,e,i){for(let s=0;s<this.attributes.length;s++){const a=this.attributes[s],o=e.attributes[a.name];void 0!==o&&t.vertexAttribPointer(o,a.components,t[Ne[a.type]],!1,this.itemSize,a.offset+this.itemSize*(i||0));}}destroy(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer);}}const Ze=new WeakMap;function Ge(t){var e;if(Ze.has(t))return Ze.get(t);{const i=null===(e=t.getParameter(t.VERSION))||void 0===e?void 0:e.startsWith("WebGL 2.0");return Ze.set(t,i),i}}class je{constructor(t){this.gl=t.gl,this.default=this.getDefault(),this.current=this.default,this.dirty=!1;}get(){return this.current}set(t){}getDefault(){return this.default}setDefault(){this.set(this.default);}}class Ve extends je{getDefault(){return t.aT.transparent}set(t){const e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.clearColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1);}}class qe extends je{getDefault(){return 1}set(t){(t!==this.current||this.dirty)&&(this.gl.clearDepth(t),this.current=t,this.dirty=!1);}}class $e extends je{getDefault(){return 0}set(t){(t!==this.current||this.dirty)&&(this.gl.clearStencil(t),this.current=t,this.dirty=!1);}}class We extends je{getDefault(){return [!0,!0,!0,!0]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.colorMask(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1);}}class He extends je{getDefault(){return !0}set(t){(t!==this.current||this.dirty)&&(this.gl.depthMask(t),this.current=t,this.dirty=!1);}}class Xe extends je{getDefault(){return 255}set(t){(t!==this.current||this.dirty)&&(this.gl.stencilMask(t),this.current=t,this.dirty=!1);}}class Ke extends je{getDefault(){return {func:this.gl.ALWAYS,ref:0,mask:255}}set(t){const e=this.current;(t.func!==e.func||t.ref!==e.ref||t.mask!==e.mask||this.dirty)&&(this.gl.stencilFunc(t.func,t.ref,t.mask),this.current=t,this.dirty=!1);}}class Qe extends je{getDefault(){const t=this.gl;return [t.KEEP,t.KEEP,t.KEEP]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||this.dirty)&&(this.gl.stencilOp(t[0],t[1],t[2]),this.current=t,this.dirty=!1);}}class Ye extends je{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;t?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this.current=t,this.dirty=!1;}}class Je extends je{getDefault(){return [0,1]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.depthRange(t[0],t[1]),this.current=t,this.dirty=!1);}}class ti extends je{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this.current=t,this.dirty=!1;}}class ei extends je{getDefault(){return this.gl.LESS}set(t){(t!==this.current||this.dirty)&&(this.gl.depthFunc(t),this.current=t,this.dirty=!1);}}class ii extends je{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;t?e.enable(e.BLEND):e.disable(e.BLEND),this.current=t,this.dirty=!1;}}class si extends je{getDefault(){const t=this.gl;return [t.ONE,t.ZERO]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.blendFunc(t[0],t[1]),this.current=t,this.dirty=!1);}}class ai extends je{getDefault(){return t.aT.transparent}set(t){const e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.blendColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1);}}class oi extends je{getDefault(){return this.gl.FUNC_ADD}set(t){(t!==this.current||this.dirty)&&(this.gl.blendEquation(t),this.current=t,this.dirty=!1);}}class ri extends je{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;t?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),this.current=t,this.dirty=!1;}}class ni extends je{getDefault(){return this.gl.BACK}set(t){(t!==this.current||this.dirty)&&(this.gl.cullFace(t),this.current=t,this.dirty=!1);}}class li extends je{getDefault(){return this.gl.CCW}set(t){(t!==this.current||this.dirty)&&(this.gl.frontFace(t),this.current=t,this.dirty=!1);}}class hi extends je{getDefault(){return null}set(t){(t!==this.current||this.dirty)&&(this.gl.useProgram(t),this.current=t,this.dirty=!1);}}class ci extends je{getDefault(){return this.gl.TEXTURE0}set(t){(t!==this.current||this.dirty)&&(this.gl.activeTexture(t),this.current=t,this.dirty=!1);}}class ui extends je{getDefault(){const t=this.gl;return [0,0,t.drawingBufferWidth,t.drawingBufferHeight]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.viewport(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1);}}class di extends je{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,t),this.current=t,this.dirty=!1;}}class _i extends je{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.bindRenderbuffer(e.RENDERBUFFER,t),this.current=t,this.dirty=!1;}}class pi extends je{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.bindTexture(e.TEXTURE_2D,t),this.current=t,this.dirty=!1;}}class mi extends je{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,t),this.current=t,this.dirty=!1;}}class fi extends je{getDefault(){return null}set(t){const e=this.gl;e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.current=t,this.dirty=!1;}}class gi extends je{getDefault(){return null}set(t){var e;if(t===this.current&&!this.dirty)return;const i=this.gl;Ge(i)?i.bindVertexArray(t):null===(e=i.getExtension("OES_vertex_array_object"))||void 0===e||e.bindVertexArrayOES(t),this.current=t,this.dirty=!1;}}class vi extends je{getDefault(){return 4}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.pixelStorei(e.UNPACK_ALIGNMENT,t),this.current=t,this.dirty=!1;}}class xi extends je{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t),this.current=t,this.dirty=!1;}}class yi extends je{getDefault(){return !1}set(t){if(t===this.current&&!this.dirty)return;const e=this.gl;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t),this.current=t,this.dirty=!1;}}class bi extends je{constructor(t,e){super(t),this.context=t,this.parent=e;}getDefault(){return null}}class wi extends bi{setDirty(){this.dirty=!0;}set(t){if(t===this.current&&!this.dirty)return;this.context.bindFramebuffer.set(this.parent);const e=this.gl;e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),this.current=t,this.dirty=!1;}}class Ti extends bi{set(t){if(t===this.current&&!this.dirty)return;this.context.bindFramebuffer.set(this.parent);const e=this.gl;e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t),this.current=t,this.dirty=!1;}}class Ii extends bi{set(t){if(t===this.current&&!this.dirty)return;this.context.bindFramebuffer.set(this.parent);const e=this.gl;e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t),this.current=t,this.dirty=!1;}}class Ei{constructor(t,e,i,s,a){this.context=t,this.width=e,this.height=i;const o=t.gl,r=this.framebuffer=o.createFramebuffer();if(this.colorAttachment=new wi(t,r),s)this.depthAttachment=a?new Ii(t,r):new Ti(t,r);else if(a)throw new Error("Stencil cannot be setted without depth");if(o.checkFramebufferStatus(o.FRAMEBUFFER)!==o.FRAMEBUFFER_COMPLETE)throw new Error("Framebuffer is not complete")}destroy(){const t=this.context.gl,e=this.colorAttachment.get();if(e&&t.deleteTexture(e),this.depthAttachment){const e=this.depthAttachment.get();e&&t.deleteRenderbuffer(e);}t.deleteFramebuffer(this.framebuffer);}}class Si{constructor(t,e,i){this.blendFunction=t,this.blendColor=e,this.mask=i;}}Si.Replace=[1,0],Si.disabled=new Si(Si.Replace,t.aT.transparent,[!1,!1,!1,!1]),Si.unblended=new Si(Si.Replace,t.aT.transparent,[!0,!0,!0,!0]),Si.alphaBlended=new Si([1,771],t.aT.transparent,[!0,!0,!0,!0]);class Ci{constructor(t){var e,i;if(this.gl=t,this.clearColor=new Ve(this),this.clearDepth=new qe(this),this.clearStencil=new $e(this),this.colorMask=new We(this),this.depthMask=new He(this),this.stencilMask=new Xe(this),this.stencilFunc=new Ke(this),this.stencilOp=new Qe(this),this.stencilTest=new Ye(this),this.depthRange=new Je(this),this.depthTest=new ti(this),this.depthFunc=new ei(this),this.blend=new ii(this),this.blendFunc=new si(this),this.blendColor=new ai(this),this.blendEquation=new oi(this),this.cullFace=new ri(this),this.cullFaceSide=new ni(this),this.frontFace=new li(this),this.program=new hi(this),this.activeTexture=new ci(this),this.viewport=new ui(this),this.bindFramebuffer=new di(this),this.bindRenderbuffer=new _i(this),this.bindTexture=new pi(this),this.bindVertexBuffer=new mi(this),this.bindElementBuffer=new fi(this),this.bindVertexArray=new gi(this),this.pixelStoreUnpack=new vi(this),this.pixelStoreUnpackPremultiplyAlpha=new xi(this),this.pixelStoreUnpackFlipY=new yi(this),this.extTextureFilterAnisotropic=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=t.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),this.maxTextureSize=t.getParameter(t.MAX_TEXTURE_SIZE),Ge(t)){this.HALF_FLOAT=t.HALF_FLOAT;const s=t.getExtension("EXT_color_buffer_half_float");this.RGBA16F=null!==(e=t.RGBA16F)&&void 0!==e?e:null==s?void 0:s.RGBA16F_EXT,this.RGB16F=null!==(i=t.RGB16F)&&void 0!==i?i:null==s?void 0:s.RGB16F_EXT,t.getExtension("EXT_color_buffer_float");}else {t.getExtension("EXT_color_buffer_half_float"),t.getExtension("OES_texture_half_float_linear");const e=t.getExtension("OES_texture_half_float");this.HALF_FLOAT=null==e?void 0:e.HALF_FLOAT_OES;}}setDefault(){this.unbindVAO(),this.clearColor.setDefault(),this.clearDepth.setDefault(),this.clearStencil.setDefault(),this.colorMask.setDefault(),this.depthMask.setDefault(),this.stencilMask.setDefault(),this.stencilFunc.setDefault(),this.stencilOp.setDefault(),this.stencilTest.setDefault(),this.depthRange.setDefault(),this.depthTest.setDefault(),this.depthFunc.setDefault(),this.blend.setDefault(),this.blendFunc.setDefault(),this.blendColor.setDefault(),this.blendEquation.setDefault(),this.cullFace.setDefault(),this.cullFaceSide.setDefault(),this.frontFace.setDefault(),this.program.setDefault(),this.activeTexture.setDefault(),this.bindFramebuffer.setDefault(),this.pixelStoreUnpack.setDefault(),this.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.pixelStoreUnpackFlipY.setDefault();}setDirty(){this.clearColor.dirty=!0,this.clearDepth.dirty=!0,this.clearStencil.dirty=!0,this.colorMask.dirty=!0,this.depthMask.dirty=!0,this.stencilMask.dirty=!0,this.stencilFunc.dirty=!0,this.stencilOp.dirty=!0,this.stencilTest.dirty=!0,this.depthRange.dirty=!0,this.depthTest.dirty=!0,this.depthFunc.dirty=!0,this.blend.dirty=!0,this.blendFunc.dirty=!0,this.blendColor.dirty=!0,this.blendEquation.dirty=!0,this.cullFace.dirty=!0,this.cullFaceSide.dirty=!0,this.frontFace.dirty=!0,this.program.dirty=!0,this.activeTexture.dirty=!0,this.viewport.dirty=!0,this.bindFramebuffer.dirty=!0,this.bindRenderbuffer.dirty=!0,this.bindTexture.dirty=!0,this.bindVertexBuffer.dirty=!0,this.bindElementBuffer.dirty=!0,this.bindVertexArray.dirty=!0,this.pixelStoreUnpack.dirty=!0,this.pixelStoreUnpackPremultiplyAlpha.dirty=!0,this.pixelStoreUnpackFlipY.dirty=!0;}createIndexBuffer(t,e){return new Oe(this,t,e)}createVertexBuffer(t,e,i){return new Ue(this,t,e,i)}createRenderbuffer(t,e,i){const s=this.gl,a=s.createRenderbuffer();return this.bindRenderbuffer.set(a),s.renderbufferStorage(s.RENDERBUFFER,t,e,i),this.bindRenderbuffer.set(null),a}createFramebuffer(t,e,i,s){return new Ei(this,t,e,i,s)}clear({color:t,depth:e,stencil:i}){const s=this.gl;let a=0;t&&(a|=s.COLOR_BUFFER_BIT,this.clearColor.set(t),this.colorMask.set([!0,!0,!0,!0])),void 0!==e&&(a|=s.DEPTH_BUFFER_BIT,this.depthRange.set([0,1]),this.clearDepth.set(e),this.depthMask.set(!0)),void 0!==i&&(a|=s.STENCIL_BUFFER_BIT,this.clearStencil.set(i),this.stencilMask.set(255)),s.clear(a);}setCullFace(t){!1===t.enable?this.cullFace.set(!1):(this.cullFace.set(!0),this.cullFaceSide.set(t.mode),this.frontFace.set(t.frontFace));}setDepthMode(t){t.func!==this.gl.ALWAYS||t.mask?(this.depthTest.set(!0),this.depthFunc.set(t.func),this.depthMask.set(t.mask),this.depthRange.set(t.range)):this.depthTest.set(!1);}setStencilMode(t){t.test.func!==this.gl.ALWAYS||t.mask?(this.stencilTest.set(!0),this.stencilMask.set(t.mask),this.stencilOp.set([t.fail,t.depthFail,t.pass]),this.stencilFunc.set({func:t.test.func,ref:t.ref,mask:t.test.mask})):this.stencilTest.set(!1);}setColorMode(e){t.aG(e.blendFunction,Si.Replace)?this.blend.set(!1):(this.blend.set(!0),this.blendFunc.set(e.blendFunction),this.blendColor.set(e.blendColor)),this.colorMask.set(e.mask);}createVertexArray(){var t;return Ge(this.gl)?this.gl.createVertexArray():null===(t=this.gl.getExtension("OES_vertex_array_object"))||void 0===t?void 0:t.createVertexArrayOES()}deleteVertexArray(t){var e;return Ge(this.gl)?this.gl.deleteVertexArray(t):null===(e=this.gl.getExtension("OES_vertex_array_object"))||void 0===e?void 0:e.deleteVertexArrayOES(t)}unbindVAO(){this.bindVertexArray.set(null);}}class Pi{constructor(t,e,i){this.func=t,this.mask=e,this.range=i;}}Pi.ReadOnly=!1,Pi.ReadWrite=!0,Pi.disabled=new Pi(519,Pi.ReadOnly,[0,1]);const Di=7680;class Mi{constructor(t,e,i,s,a,o){this.test=t,this.ref=e,this.mask=i,this.fail=s,this.depthFail=a,this.pass=o;}}Mi.disabled=new Mi({func:519,mask:0},0,0,Di,Di,Di);class zi{constructor(t,e,i){this.enable=t,this.mode=e,this.frontFace=i;}}let Li;function Ai(e,i,s,a,o,r,n){const l=e.context,h=l.gl,c=e.useProgram("collisionBox"),u=[];let d=0,_=0;for(let p=0;p<a.length;p++){const m=a[p],f=i.getTile(m),g=f.getBucket(s);if(!g)continue;let v=m.posMatrix;0===o[0]&&0===o[1]||(v=e.translatePosMatrix(m.posMatrix,f,o,r));const x=n?g.textCollisionBox:g.iconCollisionBox,y=g.collisionCircleArray;if(y.length>0){const i=t.Z(),s=v;t.aU(i,g.placementInvProjMatrix,e.transform.glCoordMatrix),t.aU(i,i,g.placementViewportMatrix),u.push({circleArray:y,circleOffset:_,transform:s,invTransform:i,coord:m}),d+=y.length/4,_=d;}x&&c.draw(l,h.LINES,Pi.disabled,Mi.disabled,e.colorModeForRenderPass(),zi.disabled,xe(v,e.transform,f),e.style.map.terrain&&e.style.map.terrain.getTerrainData(m),s.id,x.layoutVertexBuffer,x.indexBuffer,x.segments,null,e.transform.zoom,null,null,x.collisionVertexBuffer);}if(!n||!u.length)return;const p=e.useProgram("collisionCircle"),m=new t.aV;m.resize(4*d),m._trim();let f=0;for(const t of u)for(let e=0;e<t.circleArray.length/4;e++){const i=4*e,s=t.circleArray[i+0],a=t.circleArray[i+1],o=t.circleArray[i+2],r=t.circleArray[i+3];m.emplace(f++,s,a,o,r,0),m.emplace(f++,s,a,o,r,1),m.emplace(f++,s,a,o,r,2),m.emplace(f++,s,a,o,r,3);}(!Li||Li.length<2*d)&&(Li=function(e){const i=2*e,s=new t.aX;s.resize(i),s._trim();for(let t=0;t<i;t++){const e=6*t;s.uint16[e+0]=4*t+0,s.uint16[e+1]=4*t+1,s.uint16[e+2]=4*t+2,s.uint16[e+3]=4*t+2,s.uint16[e+4]=4*t+3,s.uint16[e+5]=4*t+0;}return s}(d));const g=l.createIndexBuffer(Li,!0),v=l.createVertexBuffer(m,t.aW.members,!0);for(const i of u){const a={u_matrix:i.transform,u_inv_matrix:i.invTransform,u_camera_to_center_distance:(x=e.transform).cameraToCenterDistance,u_viewport_size:[x.width,x.height]};p.draw(l,h.TRIANGLES,Pi.disabled,Mi.disabled,e.colorModeForRenderPass(),zi.disabled,a,e.style.map.terrain&&e.style.map.terrain.getTerrainData(i.coord),s.id,v,g,t.S.simpleSegment(0,2*i.circleOffset,i.circleArray.length,i.circleArray.length/2),null,e.transform.zoom,null,null,null);}var x;v.destroy(),g.destroy();}zi.disabled=new zi(!1,1029,2305),zi.backCCW=new zi(!0,1029,2305);const Ri=t.ao(new Float32Array(16));function ki(e,i,s,a,o,r){const{horizontalAlign:n,verticalAlign:l}=t.au(e);return new t.P((-(n-.5)*i/o+a[0])*r,(-(l-.5)*s/o+a[1])*r)}function Fi(e,i,s,a,o,r,n,l,h,c,u){const d=e.text.placedSymbolArray,_=e.text.dynamicLayoutVertexArray,p=e.icon.dynamicLayoutVertexArray,m={};_.clear();for(let p=0;p<d.length;p++){const f=d.get(p),g=f.hidden||!f.crossTileID||e.allowVerticalPlacement&&!f.placedOrientation?null:a[f.crossTileID];if(g){const a=new t.P(f.anchorX,f.anchorY),d=ht(a,s?n:r,u),p=ct(o.cameraToCenterDistance,d.signedDistanceFromCamera);let v=t.aj(e.textSizeData,h,f)*p/t.ap;s&&(v*=e.tilePixelRatio/l);const{width:x,height:y,anchor:b,textOffset:w,textBoxScale:T}=g,I=ki(b,x,y,w,T,v),E=s?ht(a.add(I),r,u).point:d.point.add(i?I.rotate(-o.angle):I),S=e.allowVerticalPlacement&&f.placedOrientation===t.ai.vertical?Math.PI/2:0;for(let e=0;e<f.numGlyphs;e++)t.ak(_,E,S);c&&f.associatedIconIndex>=0&&(m[f.associatedIconIndex]={shiftedAnchor:E,angle:S});}else wt(f.numGlyphs,_);}if(c){p.clear();const i=e.icon.placedSymbolArray;for(let e=0;e<i.length;e++){const s=i.get(e);if(s.hidden)wt(s.numGlyphs,p);else {const i=m[e];if(i)for(let e=0;e<s.numGlyphs;e++)t.ak(p,i.shiftedAnchor,i.angle);else wt(s.numGlyphs,p);}}e.icon.dynamicLayoutVertexBuffer.updateData(p);}e.text.dynamicLayoutVertexBuffer.updateData(_);}function Bi(t,e,i){return i.iconsInText&&e?"symbolTextAndIcon":t?"symbolSDF":"symbolIcon"}function Oi(e,i,s,a,o,r,n,l,h,c,u,d){const _=e.context,p=_.gl,m=e.transform,f="map"===l,g="map"===h,v="viewport"!==l&&"point"!==s.layout.get("symbol-placement"),x=f&&!g&&!v,y=!s.layout.get("symbol-sort-key").isConstant();let b=!1;const w=e.depthModeForSublayer(0,Pi.ReadOnly),T=s._unevaluatedLayout.hasValue("text-variable-anchor")||s._unevaluatedLayout.hasValue("text-variable-anchor-offset"),I=[];for(const l of a){const a=i.getTile(l),h=a.getBucket(s);if(!h)continue;const u=o?h.text:h.icon;if(!u||!u.segments.get().length||!u.hasVisibleVertices)continue;const d=u.programConfigurations.get(s.id),_=o||h.sdfIcons,w=o?h.textSizeData:h.iconSizeData,E=g||0!==m.pitch,S=e.useProgram(Bi(_,o,h),d),C=t.ah(w,m.zoom),P=e.style.map.terrain&&e.style.map.terrain.getTerrainData(l);let D,M,z,L,A=[0,0],R=null;if(o)M=a.glyphAtlasTexture,z=p.LINEAR,D=a.glyphAtlasTexture.size,h.iconsInText&&(A=a.imageAtlasTexture.size,R=a.imageAtlasTexture,L=E||e.options.rotating||e.options.zooming||"composite"===w.kind||"camera"===w.kind?p.LINEAR:p.NEAREST);else {const t=1!==s.layout.get("icon-size").constantOr(0)||h.iconsNeedLinear;M=a.imageAtlasTexture,z=_||e.options.rotating||e.options.zooming||t||E?p.LINEAR:p.NEAREST,D=a.imageAtlasTexture.size;}const k=St(a,1,e.transform.zoom),F=nt(l.posMatrix,g,f,e.transform,k),B=lt(l.posMatrix,g,f,e.transform,k),O=T&&h.hasTextData(),N="none"!==s.layout.get("icon-text-fit")&&O&&h.hasIconData();if(v){const t=e.style.map.terrain?(t,i)=>e.style.map.terrain.getElevation(l,t,i):null,i="map"===s.layout.get("text-rotation-alignment");dt(h,l.posMatrix,e,o,F,B,g,c,i,t);}const U=e.translatePosMatrix(l.posMatrix,a,r,n),Z=v||o&&T||N?Ri:F,G=e.translatePosMatrix(B,a,r,n,!0),j=_&&0!==s.paint.get(o?"text-halo-width":"icon-halo-width").constantOr(1);let V;V=_?h.iconsInText?Re(w.kind,C,x,g,e,U,Z,G,D,A):Ae(w.kind,C,x,g,e,U,Z,G,o,D,!0):Le(w.kind,C,x,g,e,U,Z,G,o,D);const q={program:S,buffers:u,uniformValues:V,atlasTexture:M,atlasTextureIcon:R,atlasInterpolation:z,atlasInterpolationIcon:L,isSDF:_,hasHalo:j};if(y&&h.canOverlap){b=!0;const e=u.segments.get();for(const i of e)I.push({segments:new t.S([i]),sortKey:i.sortKey,state:q,terrainData:P});}else I.push({segments:u.segments,sortKey:0,state:q,terrainData:P});}b&&I.sort(((t,e)=>t.sortKey-e.sortKey));for(const t of I){const i=t.state;if(_.activeTexture.set(p.TEXTURE0),i.atlasTexture.bind(i.atlasInterpolation,p.CLAMP_TO_EDGE),i.atlasTextureIcon&&(_.activeTexture.set(p.TEXTURE1),i.atlasTextureIcon&&i.atlasTextureIcon.bind(i.atlasInterpolationIcon,p.CLAMP_TO_EDGE)),i.isSDF){const a=i.uniformValues;i.hasHalo&&(a.u_is_halo=1,Ni(i.buffers,t.segments,s,e,i.program,w,u,d,a,t.terrainData)),a.u_is_halo=0;}Ni(i.buffers,t.segments,s,e,i.program,w,u,d,i.uniformValues,t.terrainData);}}function Ni(t,e,i,s,a,o,r,n,l,h){const c=s.context;a.draw(c,c.gl.TRIANGLES,o,r,n,zi.disabled,l,h,i.id,t.layoutVertexBuffer,t.indexBuffer,e,i.paint,s.transform.zoom,t.programConfigurations.get(i.id),t.dynamicLayoutVertexBuffer,t.opacityVertexBuffer);}function Ui(t,e,i,s,a){if(!i||!s||!s.imageAtlas)return;const o=s.imageAtlas.patternPositions;let r=o[i.to.toString()],n=o[i.from.toString()];if(!r||!n){const t=a.getPaintProperty(e);r=o[t],n=o[t];}r&&n&&t.setConstantPatternPositions(r,n);}function Zi(t,e,i,s,a,o,r){const n=t.context.gl,l="fill-pattern",h=i.paint.get(l),c=h&&h.constantOr(1),u=i.getCrossfadeParameters();let d,_,p,m,f;r?(_=c&&!i.getPaintProperty("fill-outline-color")?"fillOutlinePattern":"fillOutline",d=n.LINES):(_=c?"fillPattern":"fill",d=n.TRIANGLES);const g=h.constantOr(null);for(const h of s){const s=e.getTile(h);if(c&&!s.patternsLoaded())continue;const v=s.getBucket(i);if(!v)continue;const x=v.programConfigurations.get(i.id),y=t.useProgram(_,x),b=t.style.map.terrain&&t.style.map.terrain.getTerrainData(h);c&&(t.context.activeTexture.set(n.TEXTURE0),s.imageAtlasTexture.bind(n.LINEAR,n.CLAMP_TO_EDGE),x.updatePaintBuffers(u)),Ui(x,l,g,s,i);const w=b?h:null,T=t.translatePosMatrix(w?w.posMatrix:h.posMatrix,s,i.paint.get("fill-translate"),i.paint.get("fill-translate-anchor"));if(r){m=v.indexBuffer2,f=v.segments2;const e=[n.drawingBufferWidth,n.drawingBufferHeight];p="fillOutlinePattern"===_&&c?ge(T,t,u,s,e):fe(T,e);}else m=v.indexBuffer,f=v.segments,p=c?me(T,t,u,s):pe(T);y.draw(t.context,d,a,t.stencilModeForClipping(h),o,zi.disabled,p,b,i.id,v.layoutVertexBuffer,m,f,i.paint,t.transform.zoom,x);}}function Gi(t,e,i,s,a,o,r){const n=t.context,l=n.gl,h="fill-extrusion-pattern",c=i.paint.get(h),u=c.constantOr(1),d=i.getCrossfadeParameters(),_=i.paint.get("fill-extrusion-opacity"),p=c.constantOr(null);for(const c of s){const s=e.getTile(c),m=s.getBucket(i);if(!m)continue;const f=t.style.map.terrain&&t.style.map.terrain.getTerrainData(c),g=m.programConfigurations.get(i.id),v=t.useProgram(u?"fillExtrusionPattern":"fillExtrusion",g);u&&(t.context.activeTexture.set(l.TEXTURE0),s.imageAtlasTexture.bind(l.LINEAR,l.CLAMP_TO_EDGE),g.updatePaintBuffers(d)),Ui(g,h,p,s,i);const x=t.translatePosMatrix(c.posMatrix,s,i.paint.get("fill-extrusion-translate"),i.paint.get("fill-extrusion-translate-anchor")),y=i.paint.get("fill-extrusion-vertical-gradient"),b=u?_e(x,t,y,_,c,d,s):de(x,t,y,_);v.draw(n,n.gl.TRIANGLES,a,o,r,zi.backCCW,b,f,i.id,m.layoutVertexBuffer,m.indexBuffer,m.segments,i.paint,t.transform.zoom,g,t.style.map.terrain&&m.centroidVertexBuffer);}}function ji(t,e,i,s,a,o,r){const n=t.context,l=n.gl,h=i.fbo;if(!h)return;const c=t.useProgram("hillshade"),u=t.style.map.terrain&&t.style.map.terrain.getTerrainData(e);n.activeTexture.set(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,h.colorAttachment.get()),c.draw(n,l.TRIANGLES,a,o,r,zi.disabled,((t,e,i,s)=>{const a=i.paint.get("hillshade-shadow-color"),o=i.paint.get("hillshade-highlight-color"),r=i.paint.get("hillshade-accent-color");let n=i.paint.get("hillshade-illumination-direction")*(Math.PI/180);"viewport"===i.paint.get("hillshade-illumination-anchor")&&(n-=t.transform.angle);const l=!t.options.moving;return {u_matrix:s?s.posMatrix:t.transform.calculatePosMatrix(e.tileID.toUnwrapped(),l),u_image:0,u_latrange:Te(0,e.tileID),u_light:[i.paint.get("hillshade-exaggeration"),n],u_shadow:a,u_highlight:o,u_accent:r}})(t,i,s,u?e:null),u,s.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments);}function Vi(e,i,s,a,o,r){const n=e.context,l=n.gl,h=i.dem;if(h&&h.data){const c=h.dim,u=h.stride,d=h.getPixels();if(n.activeTexture.set(l.TEXTURE1),n.pixelStoreUnpackPremultiplyAlpha.set(!1),i.demTexture=i.demTexture||e.getTileTexture(u),i.demTexture){const t=i.demTexture;t.update(d,{premultiply:!1}),t.bind(l.NEAREST,l.CLAMP_TO_EDGE);}else i.demTexture=new x(n,d,l.RGBA,{premultiply:!1}),i.demTexture.bind(l.NEAREST,l.CLAMP_TO_EDGE);n.activeTexture.set(l.TEXTURE0);let _=i.fbo;if(!_){const t=new x(n,{width:c,height:c,data:null},l.RGBA);t.bind(l.LINEAR,l.CLAMP_TO_EDGE),_=i.fbo=n.createFramebuffer(c,c,!0,!1),_.colorAttachment.set(t.texture);}n.bindFramebuffer.set(_.framebuffer),n.viewport.set([0,0,c,c]),e.useProgram("hillshadePrepare").draw(n,l.TRIANGLES,a,o,r,zi.disabled,((e,i)=>{const s=i.stride,a=t.Z();return t.aS(a,0,t.N,-t.N,0,0,1),t.$(a,a,[0,-t.N,0]),{u_matrix:a,u_image:1,u_dimension:[s,s],u_zoom:e.overscaledZ,u_unpack:i.getUnpackVector()}})(i.tileID,h),null,s.id,e.rasterBoundsBuffer,e.quadTriangleIndexBuffer,e.rasterBoundsSegments),i.needsHillshadePrepare=!1;}}function qi(e,i,s,a,o,r){const n=a.paint.get("raster-fade-duration");if(!r&&n>0){const a=t.h.now(),r=(a-e.timeAdded)/n,l=i?(a-i.timeAdded)/n:-1,h=s.getSource(),c=o.coveringZoomLevel({tileSize:h.tileSize,roundZoom:h.roundZoom}),u=!i||Math.abs(i.tileID.overscaledZ-c)>Math.abs(e.tileID.overscaledZ-c),d=u&&e.refreshedUponExpiration?1:t.ad(u?r:1-l,0,1);return e.refreshedUponExpiration&&r>=1&&(e.refreshedUponExpiration=!1),i?{opacity:1,mix:1-d}:{opacity:d,mix:0}}return {opacity:1,mix:0}}const $i=new t.aT(1,0,0,1),Wi=new t.aT(0,1,0,1),Hi=new t.aT(0,0,1,1),Xi=new t.aT(1,0,1,1),Ki=new t.aT(0,1,1,1);function Qi(t,e,i,s){Ji(t,0,e+i/2,t.transform.width,i,s);}function Yi(t,e,i,s){Ji(t,e-i/2,0,i,t.transform.height,s);}function Ji(t,e,i,s,a,o){const r=t.context,n=r.gl;n.enable(n.SCISSOR_TEST),n.scissor(e*t.pixelRatio,i*t.pixelRatio,s*t.pixelRatio,a*t.pixelRatio),r.clear({color:o}),n.disable(n.SCISSOR_TEST);}function ts(e,i,s){const a=e.context,o=a.gl,r=s.posMatrix,n=e.useProgram("debug"),l=Pi.disabled,h=Mi.disabled,c=e.colorModeForRenderPass(),u="$debug",d=e.style.map.terrain&&e.style.map.terrain.getTerrainData(s);a.activeTexture.set(o.TEXTURE0);const _=i.getTileByID(s.key).latestRawTileData,p=Math.floor((_&&_.byteLength||0)/1024),m=i.getTile(s).tileSize,f=512/Math.min(m,512)*(s.overscaledZ/e.transform.zoom)*.5;let g=s.canonical.toString();s.overscaledZ!==s.canonical.z&&(g+=` => ${s.overscaledZ}`),function(t,e){t.initDebugOverlayCanvas();const i=t.debugOverlayCanvas,s=t.context.gl,a=t.debugOverlayCanvas.getContext("2d");a.clearRect(0,0,i.width,i.height),a.shadowColor="white",a.shadowBlur=2,a.lineWidth=1.5,a.strokeStyle="white",a.textBaseline="top",a.font="bold 36px Open Sans, sans-serif",a.fillText(e,5,5),a.strokeText(e,5,5),t.debugOverlayTexture.update(i),t.debugOverlayTexture.bind(s.LINEAR,s.CLAMP_TO_EDGE);}(e,`${g} ${p}kB`),n.draw(a,o.TRIANGLES,l,h,Si.alphaBlended,zi.disabled,ye(r,t.aT.transparent,f),null,u,e.debugBuffer,e.quadTriangleIndexBuffer,e.debugSegments),n.draw(a,o.LINE_STRIP,l,h,c,zi.disabled,ye(r,t.aT.red),d,u,e.debugBuffer,e.tileBorderIndexBuffer,e.debugSegments);}function es(t,e,i){const s=t.context,a=s.gl,o=t.colorModeForRenderPass(),r=new Pi(a.LEQUAL,Pi.ReadWrite,t.depthRangeFor3D),n=t.useProgram("terrain"),l=e.getTerrainMesh();s.bindFramebuffer.set(null),s.viewport.set([0,0,t.width,t.height]);for(const h of i){const i=t.renderToTexture.getTexture(h),c=e.getTerrainData(h.tileID);s.activeTexture.set(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,i.texture);const u={u_matrix:t.transform.calculatePosMatrix(h.tileID.toUnwrapped()),u_texture:0,u_ele_delta:e.getMeshFrameDelta(t.transform.zoom)};n.draw(s,a.TRIANGLES,r,Mi.disabled,o,zi.backCCW,u,c,"terrain",l.vertexBuffer,l.indexBuffer,l.segments);}}class is{constructor(e,i){this.context=new Ci(e),this.transform=i,this._tileTextures={},this.terrainFacilitator={dirty:!0,matrix:t.Z(),renderTime:0},this.setup(),this.numSublayers=K.maxUnderzooming+K.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.crossTileSymbolIndex=new Yt;}resize(t,e,i){if(this.width=Math.floor(t*i),this.height=Math.floor(e*i),this.pixelRatio=i,this.context.viewport.set([0,0,this.width,this.height]),this.style)for(const t of this.style._order)this.style._layers[t].resize();}setup(){const e=this.context,i=new t.a_;i.emplaceBack(0,0),i.emplaceBack(t.N,0),i.emplaceBack(0,t.N),i.emplaceBack(t.N,t.N),this.tileExtentBuffer=e.createVertexBuffer(i,ae.members),this.tileExtentSegments=t.S.simpleSegment(0,0,4,2);const s=new t.a_;s.emplaceBack(0,0),s.emplaceBack(t.N,0),s.emplaceBack(0,t.N),s.emplaceBack(t.N,t.N),this.debugBuffer=e.createVertexBuffer(s,ae.members),this.debugSegments=t.S.simpleSegment(0,0,4,5);const a=new t.V;a.emplaceBack(0,0,0,0),a.emplaceBack(t.N,0,t.N,0),a.emplaceBack(0,t.N,0,t.N),a.emplaceBack(t.N,t.N,t.N,t.N),this.rasterBoundsBuffer=e.createVertexBuffer(a,O.members),this.rasterBoundsSegments=t.S.simpleSegment(0,0,4,2);const o=new t.a_;o.emplaceBack(0,0),o.emplaceBack(1,0),o.emplaceBack(0,1),o.emplaceBack(1,1),this.viewportBuffer=e.createVertexBuffer(o,ae.members),this.viewportSegments=t.S.simpleSegment(0,0,4,2);const r=new t.a$;r.emplaceBack(0),r.emplaceBack(1),r.emplaceBack(3),r.emplaceBack(2),r.emplaceBack(0),this.tileBorderIndexBuffer=e.createIndexBuffer(r);const n=new t.b0;n.emplaceBack(0,1,2),n.emplaceBack(2,1,3),this.quadTriangleIndexBuffer=e.createIndexBuffer(n);const l=this.context.gl;this.stencilClearMode=new Mi({func:l.ALWAYS,mask:0},0,255,l.ZERO,l.ZERO,l.ZERO);}clearStencil(){const e=this.context,i=e.gl;this.nextStencilID=1,this.currentStencilSource=void 0;const s=t.Z();t.aS(s,0,this.width,this.height,0,0,1),t.a0(s,s,[i.drawingBufferWidth,i.drawingBufferHeight,0]),this.useProgram("clippingMask").draw(e,i.TRIANGLES,Pi.disabled,this.stencilClearMode,Si.disabled,zi.disabled,be(s),null,"$clipping",this.viewportBuffer,this.quadTriangleIndexBuffer,this.viewportSegments);}_renderTileClippingMasks(t,e){if(this.currentStencilSource===t.source||!t.isTileClipped()||!e||!e.length)return;this.currentStencilSource=t.source;const i=this.context,s=i.gl;this.nextStencilID+e.length>256&&this.clearStencil(),i.setColorMode(Si.disabled),i.setDepthMode(Pi.disabled);const a=this.useProgram("clippingMask");this._tileClippingMaskIDs={};for(const t of e){const e=this._tileClippingMaskIDs[t.key]=this.nextStencilID++,o=this.style.map.terrain&&this.style.map.terrain.getTerrainData(t);a.draw(i,s.TRIANGLES,Pi.disabled,new Mi({func:s.ALWAYS,mask:0},e,255,s.KEEP,s.KEEP,s.REPLACE),Si.disabled,zi.disabled,be(t.posMatrix),o,"$clipping",this.tileExtentBuffer,this.quadTriangleIndexBuffer,this.tileExtentSegments);}}stencilModeFor3D(){this.currentStencilSource=void 0,this.nextStencilID+1>256&&this.clearStencil();const t=this.nextStencilID++,e=this.context.gl;return new Mi({func:e.NOTEQUAL,mask:255},t,255,e.KEEP,e.KEEP,e.REPLACE)}stencilModeForClipping(t){const e=this.context.gl;return new Mi({func:e.EQUAL,mask:255},this._tileClippingMaskIDs[t.key],0,e.KEEP,e.KEEP,e.REPLACE)}stencilConfigForOverlap(t){const e=this.context.gl,i=t.sort(((t,e)=>e.overscaledZ-t.overscaledZ)),s=i[i.length-1].overscaledZ,a=i[0].overscaledZ-s+1;if(a>1){this.currentStencilSource=void 0,this.nextStencilID+a>256&&this.clearStencil();const t={};for(let i=0;i<a;i++)t[i+s]=new Mi({func:e.GEQUAL,mask:255},i+this.nextStencilID,255,e.KEEP,e.KEEP,e.REPLACE);return this.nextStencilID+=a,[t,i]}return [{[s]:Mi.disabled},i]}colorModeForRenderPass(){const e=this.context.gl;if(this._showOverdrawInspector){const i=1/8;return new Si([e.CONSTANT_COLOR,e.ONE],new t.aT(i,i,i,0),[!0,!0,!0,!0])}return "opaque"===this.renderPass?Si.unblended:Si.alphaBlended}depthModeForSublayer(t,e,i){if(!this.opaquePassEnabledForLayer())return Pi.disabled;const s=1-((1+this.currentLayer)*this.numSublayers+t)*this.depthEpsilon;return new Pi(i||this.context.gl.LEQUAL,e,[s,s])}opaquePassEnabledForLayer(){return this.currentLayer<this.opaquePassCutoff}render(e,i){this.style=e,this.options=i,this.lineAtlas=e.lineAtlas,this.imageManager=e.imageManager,this.glyphManager=e.glyphManager,this.symbolFadeChange=e.placement.symbolFadeChange(t.h.now()),this.imageManager.beginFrame();const s=this.style._order,a=this.style.sourceCaches,o={},r={},n={};for(const t in a){const e=a[t];e.used&&e.prepare(this.context),o[t]=e.getVisibleCoordinates(),r[t]=o[t].slice().reverse(),n[t]=e.getVisibleCoordinates(!0).reverse();}this.opaquePassCutoff=1/0;for(let t=0;t<s.length;t++)if(this.style._layers[s[t]].is3D()){this.opaquePassCutoff=t;break}if(this.renderToTexture){this.renderToTexture.prepareForRender(this.style,this.transform.zoom),this.opaquePassCutoff=0;const e=this.style.map.terrain.sourceCache.tilesAfterTime(this.terrainFacilitator.renderTime);(this.terrainFacilitator.dirty||!t.b1(this.terrainFacilitator.matrix,this.transform.projMatrix)||e.length)&&(t.b2(this.terrainFacilitator.matrix,this.transform.projMatrix),this.terrainFacilitator.renderTime=Date.now(),this.terrainFacilitator.dirty=!1,function(e,i){const s=e.context,a=s.gl,o=Si.unblended,r=new Pi(a.LEQUAL,Pi.ReadWrite,[0,1]),n=i.getTerrainMesh(),l=i.sourceCache.getRenderableTiles(),h=e.useProgram("terrainDepth");s.bindFramebuffer.set(i.getFramebuffer("depth").framebuffer),s.viewport.set([0,0,e.width/devicePixelRatio,e.height/devicePixelRatio]),s.clear({color:t.aT.transparent,depth:1});for(const t of l){const l=i.getTerrainData(t.tileID),c={u_matrix:e.transform.calculatePosMatrix(t.tileID.toUnwrapped()),u_ele_delta:i.getMeshFrameDelta(e.transform.zoom)};h.draw(s,a.TRIANGLES,r,Mi.disabled,o,zi.backCCW,c,l,"terrain",n.vertexBuffer,n.indexBuffer,n.segments);}s.bindFramebuffer.set(null),s.viewport.set([0,0,e.width,e.height]);}(this,this.style.map.terrain),function(e,i){const s=e.context,a=s.gl,o=Si.unblended,r=new Pi(a.LEQUAL,Pi.ReadWrite,[0,1]),n=i.getTerrainMesh(),l=i.getCoordsTexture(),h=i.sourceCache.getRenderableTiles(),c=e.useProgram("terrainCoords");s.bindFramebuffer.set(i.getFramebuffer("coords").framebuffer),s.viewport.set([0,0,e.width/devicePixelRatio,e.height/devicePixelRatio]),s.clear({color:t.aT.transparent,depth:1}),i.coordsIndex=[];for(const t of h){const h=i.getTerrainData(t.tileID);s.activeTexture.set(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,l.texture);const u={u_matrix:e.transform.calculatePosMatrix(t.tileID.toUnwrapped()),u_terrain_coords_id:(255-i.coordsIndex.length)/255,u_texture:0,u_ele_delta:i.getMeshFrameDelta(e.transform.zoom)};c.draw(s,a.TRIANGLES,r,Mi.disabled,o,zi.backCCW,u,h,"terrain",n.vertexBuffer,n.indexBuffer,n.segments),i.coordsIndex.push(t.tileID.key);}s.bindFramebuffer.set(null),s.viewport.set([0,0,e.width,e.height]);}(this,this.style.map.terrain));}this.renderPass="offscreen";for(const t of s){const e=this.style._layers[t];if(!e.hasOffscreenPass()||e.isHidden(this.transform.zoom))continue;const i=r[e.source];("custom"===e.type||i.length)&&this.renderLayer(this,a[e.source],e,i);}if(this.context.bindFramebuffer.set(null),this.context.clear({color:i.showOverdrawInspector?t.aT.black:t.aT.transparent,depth:1}),this.clearStencil(),this._showOverdrawInspector=i.showOverdrawInspector,this.depthRangeFor3D=[0,1-(e._order.length+2)*this.numSublayers*this.depthEpsilon],!this.renderToTexture)for(this.renderPass="opaque",this.currentLayer=s.length-1;this.currentLayer>=0;this.currentLayer--){const t=this.style._layers[s[this.currentLayer]],e=a[t.source],i=o[t.source];this._renderTileClippingMasks(t,i),this.renderLayer(this,e,t,i);}for(this.renderPass="translucent",this.currentLayer=0;this.currentLayer<s.length;this.currentLayer++){const t=this.style._layers[s[this.currentLayer]],e=a[t.source];if(this.renderToTexture&&this.renderToTexture.renderLayer(t))continue;const i=("symbol"===t.type?n:r)[t.source];this._renderTileClippingMasks(t,o[t.source]),this.renderLayer(this,e,t,i);}if(this.options.showTileBoundaries){const t=function(t,e){let i=null;const s=Object.values(t._layers).flatMap((i=>i.source&&!i.isHidden(e)?[t.sourceCaches[i.source]]:[])),a=s.filter((t=>"vector"===t.getSource().type)),o=s.filter((t=>"vector"!==t.getSource().type)),r=t=>{(!i||i.getSource().maxzoom<t.getSource().maxzoom)&&(i=t);};return a.forEach((t=>r(t))),i||o.forEach((t=>r(t))),i}(this.style,this.transform.zoom);t&&function(t,e,i){for(let s=0;s<i.length;s++)ts(t,e,i[s]);}(this,t,t.getVisibleCoordinates());}this.options.showPadding&&function(t){const e=t.transform.padding;Qi(t,t.transform.height-(e.top||0),3,$i),Qi(t,e.bottom||0,3,Wi),Yi(t,e.left||0,3,Hi),Yi(t,t.transform.width-(e.right||0),3,Xi);const i=t.transform.centerPoint;!function(t,e,i,s){Ji(t,e-1,i-10,2,20,s),Ji(t,e-10,i-1,20,2,s);}(t,i.x,t.transform.height-i.y,Ki);}(this),this.context.setDefault();}renderLayer(e,i,s,a){if(!s.isHidden(this.transform.zoom)&&("background"===s.type||"custom"===s.type||(a||[]).length))switch(this.id=s.id,s.type){case"symbol":!function(e,i,s,a,o){if("translucent"!==e.renderPass)return;const r=Mi.disabled,n=e.colorModeForRenderPass();(s._unevaluatedLayout.hasValue("text-variable-anchor")||s._unevaluatedLayout.hasValue("text-variable-anchor-offset"))&&function(e,i,s,a,o,r,n){const l=i.transform,h="map"===o,c="map"===r;for(const o of e){const e=a.getTile(o),r=e.getBucket(s);if(!r||!r.text||!r.text.segments.get().length)continue;const u=t.ah(r.textSizeData,l.zoom),d=St(e,1,i.transform.zoom),_=nt(o.posMatrix,c,h,i.transform,d),p="none"!==s.layout.get("icon-text-fit")&&r.hasIconData();if(u){const t=Math.pow(2,l.zoom-e.tileID.overscaledZ);Fi(r,h,c,n,l,_,o.posMatrix,t,u,p,i.style.map.terrain?(t,e)=>i.style.map.terrain.getElevation(o,t,e):null);}}}(a,e,s,i,s.layout.get("text-rotation-alignment"),s.layout.get("text-pitch-alignment"),o),0!==s.paint.get("icon-opacity").constantOr(1)&&Oi(e,i,s,a,!1,s.paint.get("icon-translate"),s.paint.get("icon-translate-anchor"),s.layout.get("icon-rotation-alignment"),s.layout.get("icon-pitch-alignment"),s.layout.get("icon-keep-upright"),r,n),0!==s.paint.get("text-opacity").constantOr(1)&&Oi(e,i,s,a,!0,s.paint.get("text-translate"),s.paint.get("text-translate-anchor"),s.layout.get("text-rotation-alignment"),s.layout.get("text-pitch-alignment"),s.layout.get("text-keep-upright"),r,n),i.map.showCollisionBoxes&&(Ai(e,i,s,a,s.paint.get("text-translate"),s.paint.get("text-translate-anchor"),!0),Ai(e,i,s,a,s.paint.get("icon-translate"),s.paint.get("icon-translate-anchor"),!1));}(e,i,s,a,this.style.placement.variableOffsets);break;case"circle":!function(e,i,s,a){if("translucent"!==e.renderPass)return;const o=s.paint.get("circle-opacity"),r=s.paint.get("circle-stroke-width"),n=s.paint.get("circle-stroke-opacity"),l=!s.layout.get("circle-sort-key").isConstant();if(0===o.constantOr(1)&&(0===r.constantOr(1)||0===n.constantOr(1)))return;const h=e.context,c=h.gl,u=e.depthModeForSublayer(0,Pi.ReadOnly),d=Mi.disabled,_=e.colorModeForRenderPass(),p=[];for(let o=0;o<a.length;o++){const r=a[o],n=i.getTile(r),h=n.getBucket(s);if(!h)continue;const c=h.programConfigurations.get(s.id),u=e.useProgram("circle",c),d=h.layoutVertexBuffer,_=h.indexBuffer,m=e.style.map.terrain&&e.style.map.terrain.getTerrainData(r),f={programConfiguration:c,program:u,layoutVertexBuffer:d,indexBuffer:_,uniformValues:ve(e,r,n,s),terrainData:m};if(l){const e=h.segments.get();for(const i of e)p.push({segments:new t.S([i]),sortKey:i.sortKey,state:f});}else p.push({segments:h.segments,sortKey:0,state:f});}l&&p.sort(((t,e)=>t.sortKey-e.sortKey));for(const t of p){const{programConfiguration:i,program:a,layoutVertexBuffer:o,indexBuffer:r,uniformValues:n,terrainData:l}=t.state;a.draw(h,c.TRIANGLES,u,d,_,zi.disabled,n,l,s.id,o,r,t.segments,s.paint,e.transform.zoom,i);}}(e,i,s,a);break;case"heatmap":!function(e,i,s,a){if(0!==s.paint.get("heatmap-opacity"))if("offscreen"===e.renderPass){const o=e.context,r=o.gl,n=Mi.disabled,l=new Si([r.ONE,r.ONE],t.aT.transparent,[!0,!0,!0,!0]);!function(t,e,i){const s=t.gl;t.activeTexture.set(s.TEXTURE1),t.viewport.set([0,0,e.width/4,e.height/4]);let a=i.heatmapFbo;if(a)s.bindTexture(s.TEXTURE_2D,a.colorAttachment.get()),t.bindFramebuffer.set(a.framebuffer);else {const o=s.createTexture();s.bindTexture(s.TEXTURE_2D,o),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),a=i.heatmapFbo=t.createFramebuffer(e.width/4,e.height/4,!1,!1),function(t,e,i,s){var a,o;const r=t.gl,n=null!==(a=t.HALF_FLOAT)&&void 0!==a?a:r.UNSIGNED_BYTE,l=null!==(o=t.RGBA16F)&&void 0!==o?o:r.RGBA;r.texImage2D(r.TEXTURE_2D,0,l,e.width/4,e.height/4,0,r.RGBA,n,null),s.colorAttachment.set(i);}(t,e,o,a);}}(o,e,s),o.clear({color:t.aT.transparent});for(let t=0;t<a.length;t++){const h=a[t];if(i.hasRenderableParent(h))continue;const c=i.getTile(h),u=c.getBucket(s);if(!u)continue;const d=u.programConfigurations.get(s.id),_=e.useProgram("heatmap",d),{zoom:p}=e.transform;_.draw(o,r.TRIANGLES,Pi.disabled,n,l,zi.disabled,we(h.posMatrix,c,p,s.paint.get("heatmap-intensity")),null,s.id,u.layoutVertexBuffer,u.indexBuffer,u.segments,s.paint,e.transform.zoom,d);}o.viewport.set([0,0,e.width,e.height]);}else "translucent"===e.renderPass&&(e.context.setColorMode(e.colorModeForRenderPass()),function(e,i){const s=e.context,a=s.gl,o=i.heatmapFbo;if(!o)return;s.activeTexture.set(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,o.colorAttachment.get()),s.activeTexture.set(a.TEXTURE1);let r=i.colorRampTexture;r||(r=i.colorRampTexture=new x(s,i.colorRamp,a.RGBA)),r.bind(a.LINEAR,a.CLAMP_TO_EDGE),e.useProgram("heatmapTexture").draw(s,a.TRIANGLES,Pi.disabled,Mi.disabled,e.colorModeForRenderPass(),zi.disabled,((e,i,s,a)=>{const o=t.Z();t.aS(o,0,e.width,e.height,0,0,1);const r=e.context.gl;return {u_matrix:o,u_world:[r.drawingBufferWidth,r.drawingBufferHeight],u_image:0,u_color_ramp:1,u_opacity:i.paint.get("heatmap-opacity")}})(e,i),null,i.id,e.viewportBuffer,e.quadTriangleIndexBuffer,e.viewportSegments,i.paint,e.transform.zoom);}(e,s));}(e,i,s,a);break;case"line":!function(e,i,s,a){if("translucent"!==e.renderPass)return;const o=s.paint.get("line-opacity"),r=s.paint.get("line-width");if(0===o.constantOr(1)||0===r.constantOr(1))return;const n=e.depthModeForSublayer(0,Pi.ReadOnly),l=e.colorModeForRenderPass(),h=s.paint.get("line-dasharray"),c=s.paint.get("line-pattern"),u=c.constantOr(1),d=s.paint.get("line-gradient"),_=s.getCrossfadeParameters(),p=u?"linePattern":h?"lineSDF":d?"lineGradient":"line",m=e.context,f=m.gl;let g=!0;for(const o of a){const a=i.getTile(o);if(u&&!a.patternsLoaded())continue;const r=a.getBucket(s);if(!r)continue;const v=r.programConfigurations.get(s.id),y=e.context.program.get(),b=e.useProgram(p,v),w=g||b.program!==y,T=e.style.map.terrain&&e.style.map.terrain.getTerrainData(o),I=c.constantOr(null);if(I&&a.imageAtlas){const t=a.imageAtlas,e=t.patternPositions[I.to.toString()],i=t.patternPositions[I.from.toString()];e&&i&&v.setConstantPatternPositions(e,i);}const E=T?o:null,S=u?Se(e,a,s,_,E):h?Ce(e,a,s,h,_,E):d?Ee(e,a,s,r.lineClipsArray.length,E):Ie(e,a,s,E);if(u)m.activeTexture.set(f.TEXTURE0),a.imageAtlasTexture.bind(f.LINEAR,f.CLAMP_TO_EDGE),v.updatePaintBuffers(_);else if(h&&(w||e.lineAtlas.dirty))m.activeTexture.set(f.TEXTURE0),e.lineAtlas.bind(m);else if(d){const a=r.gradients[s.id];let n=a.texture;if(s.gradientVersion!==a.version){let l=256;if(s.stepInterpolant){const s=i.getSource().maxzoom,a=o.canonical.z===s?Math.ceil(1<<e.transform.maxZoom-o.canonical.z):1;l=t.ad(t.aY(r.maxLineLength/t.N*1024*a),256,m.maxTextureSize);}a.gradient=t.aZ({expression:s.gradientExpression(),evaluationKey:"lineProgress",resolution:l,image:a.gradient||void 0,clips:r.lineClipsArray}),a.texture?a.texture.update(a.gradient):a.texture=new x(m,a.gradient,f.RGBA),a.version=s.gradientVersion,n=a.texture;}m.activeTexture.set(f.TEXTURE0),n.bind(s.stepInterpolant?f.NEAREST:f.LINEAR,f.CLAMP_TO_EDGE);}b.draw(m,f.TRIANGLES,n,e.stencilModeForClipping(o),l,zi.disabled,S,T,s.id,r.layoutVertexBuffer,r.indexBuffer,r.segments,s.paint,e.transform.zoom,v,r.layoutVertexBuffer2),g=!1;}}(e,i,s,a);break;case"fill":!function(e,i,s,a){const o=s.paint.get("fill-color"),r=s.paint.get("fill-opacity");if(0===r.constantOr(1))return;const n=e.colorModeForRenderPass(),l=s.paint.get("fill-pattern"),h=e.opaquePassEnabledForLayer()&&!l.constantOr(1)&&1===o.constantOr(t.aT.transparent).a&&1===r.constantOr(0)?"opaque":"translucent";if(e.renderPass===h){const t=e.depthModeForSublayer(1,"opaque"===e.renderPass?Pi.ReadWrite:Pi.ReadOnly);Zi(e,i,s,a,t,n,!1);}if("translucent"===e.renderPass&&s.paint.get("fill-antialias")){const t=e.depthModeForSublayer(s.getPaintProperty("fill-outline-color")?2:0,Pi.ReadOnly);Zi(e,i,s,a,t,n,!0);}}(e,i,s,a);break;case"fill-extrusion":!function(t,e,i,s){const a=i.paint.get("fill-extrusion-opacity");if(0!==a&&"translucent"===t.renderPass){const o=new Pi(t.context.gl.LEQUAL,Pi.ReadWrite,t.depthRangeFor3D);if(1!==a||i.paint.get("fill-extrusion-pattern").constantOr(1))Gi(t,e,i,s,o,Mi.disabled,Si.disabled),Gi(t,e,i,s,o,t.stencilModeFor3D(),t.colorModeForRenderPass());else {const a=t.colorModeForRenderPass();Gi(t,e,i,s,o,Mi.disabled,a);}}}(e,i,s,a);break;case"hillshade":!function(t,e,i,s){if("offscreen"!==t.renderPass&&"translucent"!==t.renderPass)return;const a=t.context,o=t.depthModeForSublayer(0,Pi.ReadOnly),r=t.colorModeForRenderPass(),[n,l]="translucent"===t.renderPass?t.stencilConfigForOverlap(s):[{},s];for(const s of l){const a=e.getTile(s);void 0!==a.needsHillshadePrepare&&a.needsHillshadePrepare&&"offscreen"===t.renderPass?Vi(t,a,i,o,Mi.disabled,r):"translucent"===t.renderPass&&ji(t,s,a,i,o,n[s.overscaledZ],r);}a.viewport.set([0,0,t.width,t.height]);}(e,i,s,a);break;case"raster":!function(t,e,i,s){if("translucent"!==t.renderPass)return;if(0===i.paint.get("raster-opacity"))return;if(!s.length)return;const a=t.context,o=a.gl,r=e.getSource(),n=t.useProgram("raster"),l=t.colorModeForRenderPass(),[h,c]=r instanceof N?[{},s]:t.stencilConfigForOverlap(s),u=c[c.length-1].overscaledZ,d=!t.options.moving;for(const s of c){const c=t.depthModeForSublayer(s.overscaledZ-u,1===i.paint.get("raster-opacity")?Pi.ReadWrite:Pi.ReadOnly,o.LESS),_=e.getTile(s);_.registerFadeDuration(i.paint.get("raster-fade-duration"));const p=e.findLoadedParent(s,0),m=qi(_,p,e,i,t.transform,t.style.map.terrain);let f,g;const v="nearest"===i.paint.get("raster-resampling")?o.NEAREST:o.LINEAR;a.activeTexture.set(o.TEXTURE0),_.texture.bind(v,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),a.activeTexture.set(o.TEXTURE1),p?(p.texture.bind(v,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),f=Math.pow(2,p.tileID.overscaledZ-_.tileID.overscaledZ),g=[_.tileID.canonical.x*f%1,_.tileID.canonical.y*f%1]):_.texture.bind(v,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST);const x=t.style.map.terrain&&t.style.map.terrain.getTerrainData(s),y=x?s:null,b=y?y.posMatrix:t.transform.calculatePosMatrix(s.toUnwrapped(),d),w=Me(b,g||[0,0],f||1,m,i);r instanceof N?n.draw(a,o.TRIANGLES,c,Mi.disabled,l,zi.disabled,w,x,i.id,r.boundsBuffer,t.quadTriangleIndexBuffer,r.boundsSegments):n.draw(a,o.TRIANGLES,c,h[s.overscaledZ],l,zi.disabled,w,x,i.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments);}}(e,i,s,a);break;case"background":!function(t,e,i,s){const a=i.paint.get("background-color"),o=i.paint.get("background-opacity");if(0===o)return;const r=t.context,n=r.gl,l=t.transform,h=l.tileSize,c=i.paint.get("background-pattern");if(t.isPatternMissing(c))return;const u=!c&&1===a.a&&1===o&&t.opaquePassEnabledForLayer()?"opaque":"translucent";if(t.renderPass!==u)return;const d=Mi.disabled,_=t.depthModeForSublayer(0,"opaque"===u?Pi.ReadWrite:Pi.ReadOnly),p=t.colorModeForRenderPass(),m=t.useProgram(c?"backgroundPattern":"background"),f=s||l.coveringTiles({tileSize:h,terrain:t.style.map.terrain});c&&(r.activeTexture.set(n.TEXTURE0),t.imageManager.bind(t.context));const g=i.getCrossfadeParameters();for(const e of f){const l=s?e.posMatrix:t.transform.calculatePosMatrix(e.toUnwrapped()),u=c?Fe(l,o,t,c,{tileID:e,tileSize:h},g):ke(l,o,a),f=t.style.map.terrain&&t.style.map.terrain.getTerrainData(e);m.draw(r,n.TRIANGLES,_,d,p,zi.disabled,u,f,i.id,t.tileExtentBuffer,t.quadTriangleIndexBuffer,t.tileExtentSegments);}}(e,0,s,a);break;case"custom":!function(t,e,i){const s=t.context,a=i.implementation;if("offscreen"===t.renderPass){const e=a.prerender;e&&(t.setCustomLayerDefaults(),s.setColorMode(t.colorModeForRenderPass()),e.call(a,s.gl,t.transform.customLayerMatrix()),s.setDirty(),t.setBaseState());}else if("translucent"===t.renderPass){t.setCustomLayerDefaults(),s.setColorMode(t.colorModeForRenderPass()),s.setStencilMode(Mi.disabled);const e="3d"===a.renderingMode?new Pi(t.context.gl.LEQUAL,Pi.ReadWrite,t.depthRangeFor3D):t.depthModeForSublayer(0,Pi.ReadOnly);s.setDepthMode(e),a.render(s.gl,t.transform.customLayerMatrix()),s.setDirty(),t.setBaseState(),s.bindFramebuffer.set(null);}}(e,0,s);}}translatePosMatrix(e,i,s,a,o){if(!s[0]&&!s[1])return e;const r=o?"map"===a?this.transform.angle:0:"viewport"===a?-this.transform.angle:0;if(r){const t=Math.sin(r),e=Math.cos(r);s=[s[0]*e-s[1]*t,s[0]*t+s[1]*e];}const n=[o?s[0]:St(i,s[0],this.transform.zoom),o?s[1]:St(i,s[1],this.transform.zoom),0],l=new Float32Array(16);return t.$(l,e,n),l}saveTileTexture(t){const e=this._tileTextures[t.size[0]];e?e.push(t):this._tileTextures[t.size[0]]=[t];}getTileTexture(t){const e=this._tileTextures[t];return e&&e.length>0?e.pop():null}isPatternMissing(t){if(!t)return !1;if(!t.from||!t.to)return !0;const e=this.imageManager.getPattern(t.from.toString()),i=this.imageManager.getPattern(t.to.toString());return !e||!i}useProgram(t,e){this.cache=this.cache||{};const i=t+(e?e.cacheKey:"")+(this._showOverdrawInspector?"/overdraw":"")+(this.style.map.terrain?"/terrain":"");return this.cache[i]||(this.cache[i]=new ce(this.context,re[t],e,Be[t],this._showOverdrawInspector,this.style.map.terrain)),this.cache[i]}setCustomLayerDefaults(){this.context.unbindVAO(),this.context.cullFace.setDefault(),this.context.activeTexture.setDefault(),this.context.pixelStoreUnpack.setDefault(),this.context.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.context.pixelStoreUnpackFlipY.setDefault();}setBaseState(){const t=this.context.gl;this.context.cullFace.set(!1),this.context.viewport.set([0,0,this.width,this.height]),this.context.blendEquation.set(t.FUNC_ADD);}initDebugOverlayCanvas(){null==this.debugOverlayCanvas&&(this.debugOverlayCanvas=document.createElement("canvas"),this.debugOverlayCanvas.width=512,this.debugOverlayCanvas.height=512,this.debugOverlayTexture=new x(this.context,this.debugOverlayCanvas,this.context.gl.RGBA));}destroy(){this.debugOverlayTexture&&this.debugOverlayTexture.destroy();}overLimit(){const{drawingBufferWidth:t,drawingBufferHeight:e}=this.context.gl;return this.width!==t||this.height!==e}}class ss{constructor(t,e){this.points=t,this.planes=e;}static fromInvProjectionMatrix(e,i,s){const a=Math.pow(2,s),o=[[-1,1,-1,1],[1,1,-1,1],[1,-1,-1,1],[-1,-1,-1,1],[-1,1,1,1],[1,1,1,1],[1,-1,1,1],[-1,-1,1,1]].map((s=>{const o=1/(s=t.ag([],s,e))[3]/i*a;return t.b3(s,s,[o,o,1/s[3],o])})),r=[[0,1,2],[6,5,4],[0,3,7],[2,1,5],[3,2,6],[0,4,5]].map((t=>{const e=function(t,e){var i=e[0],s=e[1],a=e[2],o=i*i+s*s+a*a;return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}([],function(t,e,i){var s=e[0],a=e[1],o=e[2],r=i[0],n=i[1],l=i[2];return t[0]=a*l-o*n,t[1]=o*r-s*l,t[2]=s*n-a*r,t}([],m([],o[t[0]],o[t[1]]),m([],o[t[2]],o[t[1]]))),i=-((s=e)[0]*(a=o[t[1]])[0]+s[1]*a[1]+s[2]*a[2]);var s,a;return e.concat(i)}));return new ss(o,r)}}class as{constructor(t,e){this.min=t,this.max=e,this.center=function(t,e,i){return t[0]=.5*e[0],t[1]=.5*e[1],t[2]=.5*e[2],t}([],function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t}([],this.min,this.max));}quadrant(t){const e=[t%2==0,t<2],i=_(this.min),s=_(this.max);for(let t=0;t<e.length;t++)i[t]=e[t]?this.min[t]:this.center[t],s[t]=e[t]?this.center[t]:this.max[t];return s[2]=this.max[2],new as(i,s)}distanceX(t){return Math.max(Math.min(this.max[0],t[0]),this.min[0])-t[0]}distanceY(t){return Math.max(Math.min(this.max[1],t[1]),this.min[1])-t[1]}intersects(e){const i=[[this.min[0],this.min[1],this.min[2],1],[this.max[0],this.min[1],this.min[2],1],[this.max[0],this.max[1],this.min[2],1],[this.min[0],this.max[1],this.min[2],1],[this.min[0],this.min[1],this.max[2],1],[this.max[0],this.min[1],this.max[2],1],[this.max[0],this.max[1],this.max[2],1],[this.min[0],this.max[1],this.max[2],1]];let s=!0;for(let a=0;a<e.planes.length;a++){const o=e.planes[a];let r=0;for(let e=0;e<i.length;e++)t.b4(o,i[e])>=0&&r++;if(0===r)return 0;r!==i.length&&(s=!1);}if(s)return 2;for(let t=0;t<3;t++){let i=Number.MAX_VALUE,s=-Number.MAX_VALUE;for(let a=0;a<e.points.length;a++){const o=e.points[a][t]-this.min[t];i=Math.min(i,o),s=Math.max(s,o);}if(s<0||i>this.max[t]-this.min[t])return 0}return 1}}class os{constructor(t=0,e=0,i=0,s=0){if(isNaN(t)||t<0||isNaN(e)||e<0||isNaN(i)||i<0||isNaN(s)||s<0)throw new Error("Invalid value for edge-insets, top, bottom, left and right must all be numbers");this.top=t,this.bottom=e,this.left=i,this.right=s;}interpolate(e,i,s){return null!=i.top&&null!=e.top&&(this.top=t.B.number(e.top,i.top,s)),null!=i.bottom&&null!=e.bottom&&(this.bottom=t.B.number(e.bottom,i.bottom,s)),null!=i.left&&null!=e.left&&(this.left=t.B.number(e.left,i.left,s)),null!=i.right&&null!=e.right&&(this.right=t.B.number(e.right,i.right,s)),this}getCenter(e,i){const s=t.ad((this.left+e-this.right)/2,0,e),a=t.ad((this.top+i-this.bottom)/2,0,i);return new t.P(s,a)}equals(t){return this.top===t.top&&this.bottom===t.bottom&&this.left===t.left&&this.right===t.right}clone(){return new os(this.top,this.bottom,this.left,this.right)}toJSON(){return {top:this.top,bottom:this.bottom,left:this.left,right:this.right}}}class rs{constructor(e,i,s,a,o){this.tileSize=512,this.maxValidLatitude=85.051129,this._renderWorldCopies=void 0===o||!!o,this._minZoom=e||0,this._maxZoom=i||22,this._minPitch=null==s?0:s,this._maxPitch=null==a?60:a,this.setMaxBounds(),this.width=0,this.height=0,this._center=new t.L(0,0),this._elevation=0,this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._edgeInsets=new os,this._posMatrixCache={},this._alignedPosMatrixCache={},this._minEleveationForCurrentTile=0;}clone(){const t=new rs(this._minZoom,this._maxZoom,this._minPitch,this.maxPitch,this._renderWorldCopies);return t.apply(this),t}apply(t){this.tileSize=t.tileSize,this.latRange=t.latRange,this.width=t.width,this.height=t.height,this._center=t._center,this._elevation=t._elevation,this._minEleveationForCurrentTile=t._minEleveationForCurrentTile,this.zoom=t.zoom,this.angle=t.angle,this._fov=t._fov,this._pitch=t._pitch,this._unmodified=t._unmodified,this._edgeInsets=t._edgeInsets.clone(),this._calcMatrices();}get minZoom(){return this._minZoom}set minZoom(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t));}get maxZoom(){return this._maxZoom}set maxZoom(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t));}get minPitch(){return this._minPitch}set minPitch(t){this._minPitch!==t&&(this._minPitch=t,this.pitch=Math.max(this.pitch,t));}get maxPitch(){return this._maxPitch}set maxPitch(t){this._maxPitch!==t&&(this._maxPitch=t,this.pitch=Math.min(this.pitch,t));}get renderWorldCopies(){return this._renderWorldCopies}set renderWorldCopies(t){void 0===t?t=!0:null===t&&(t=!1),this._renderWorldCopies=t;}get worldSize(){return this.tileSize*this.scale}get centerOffset(){return this.centerPoint._sub(this.size._div(2))}get size(){return new t.P(this.width,this.height)}get bearing(){return -this.angle/Math.PI*180}set bearing(e){const i=-t.b5(e,-180,180)*Math.PI/180;this.angle!==i&&(this._unmodified=!1,this.angle=i,this._calcMatrices(),this.rotationMatrix=function(){var e=new t.A(4);return t.A!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}(),function(t,e,i){var s=e[0],a=e[1],o=e[2],r=e[3],n=Math.sin(i),l=Math.cos(i);t[0]=s*l+o*n,t[1]=a*l+r*n,t[2]=s*-n+o*l,t[3]=a*-n+r*l;}(this.rotationMatrix,this.rotationMatrix,this.angle));}get pitch(){return this._pitch/Math.PI*180}set pitch(e){const i=t.ad(e,this.minPitch,this.maxPitch)/180*Math.PI;this._pitch!==i&&(this._unmodified=!1,this._pitch=i,this._calcMatrices());}get fov(){return this._fov/Math.PI*180}set fov(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices());}get zoom(){return this._zoom}set zoom(t){const e=Math.min(Math.max(t,this.minZoom),this.maxZoom);this._zoom!==e&&(this._unmodified=!1,this._zoom=e,this.tileZoom=Math.max(0,Math.floor(e)),this.scale=this.zoomScale(e),this._constrain(),this._calcMatrices());}get center(){return this._center}set center(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices());}get elevation(){return this._elevation}set elevation(t){t!==this._elevation&&(this._elevation=t,this._constrain(),this._calcMatrices());}get padding(){return this._edgeInsets.toJSON()}set padding(t){this._edgeInsets.equals(t)||(this._unmodified=!1,this._edgeInsets.interpolate(this._edgeInsets,t,1),this._calcMatrices());}get centerPoint(){return this._edgeInsets.getCenter(this.width,this.height)}isPaddingEqual(t){return this._edgeInsets.equals(t)}interpolatePadding(t,e,i){this._unmodified=!1,this._edgeInsets.interpolate(t,e,i),this._constrain(),this._calcMatrices();}coveringZoomLevel(t){const e=(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize));return Math.max(0,e)}getVisibleUnwrappedCoordinates(e){const i=[new t.b6(0,e)];if(this._renderWorldCopies){const s=this.pointCoordinate(new t.P(0,0)),a=this.pointCoordinate(new t.P(this.width,0)),o=this.pointCoordinate(new t.P(this.width,this.height)),r=this.pointCoordinate(new t.P(0,this.height)),n=Math.floor(Math.min(s.x,a.x,o.x,r.x)),l=Math.floor(Math.max(s.x,a.x,o.x,r.x)),h=1;for(let s=n-h;s<=l+h;s++)0!==s&&i.push(new t.b6(s,e));}return i}coveringTiles(e){var i,s;let a=this.coveringZoomLevel(e);const o=a;if(void 0!==e.minzoom&&a<e.minzoom)return [];void 0!==e.maxzoom&&a>e.maxzoom&&(a=e.maxzoom);const r=this.pointCoordinate(this.getCameraPoint()),n=t.U.fromLngLat(this.center),l=Math.pow(2,a),h=[l*r.x,l*r.y,0],c=[l*n.x,l*n.y,0],u=ss.fromInvProjectionMatrix(this.invProjMatrix,this.worldSize,a);let d=e.minzoom||0;!e.terrain&&this.pitch<=60&&this._edgeInsets.top<.1&&(d=a);const _=e.terrain?2/Math.min(this.tileSize,e.tileSize)*this.tileSize:3,p=t=>({aabb:new as([t*l,0,0],[(t+1)*l,l,0]),zoom:0,x:0,y:0,wrap:t,fullyVisible:!1}),m=[],g=[],v=a,x=e.reparseOverscaled?o:a;if(this._renderWorldCopies)for(let t=1;t<=3;t++)m.push(p(-t)),m.push(p(t));for(m.push(p(0));m.length>0;){const a=m.pop(),o=a.x,r=a.y;let n=a.fullyVisible;if(!n){const t=a.aabb.intersects(u);if(0===t)continue;n=2===t;}const l=e.terrain?h:c,p=a.aabb.distanceX(l),y=a.aabb.distanceY(l),b=Math.max(Math.abs(p),Math.abs(y));if(a.zoom===v||b>_+(1<<v-a.zoom)-2&&a.zoom>=d){const e=v-a.zoom,i=h[0]-.5-(o<<e),s=h[1]-.5-(r<<e);g.push({tileID:new t.O(a.zoom===v?x:a.zoom,a.wrap,a.zoom,o,r),distanceSq:f([c[0]-.5-o,c[1]-.5-r]),tileDistanceToCamera:Math.sqrt(i*i+s*s)});}else for(let l=0;l<4;l++){const h=(o<<1)+l%2,c=(r<<1)+(l>>1),u=a.zoom+1;let d=a.aabb.quadrant(l);if(e.terrain){const o=new t.O(u,a.wrap,u,h,c),r=e.terrain.getMinMaxElevation(o),n=null!==(i=r.minElevation)&&void 0!==i?i:this.elevation,l=null!==(s=r.maxElevation)&&void 0!==s?s:this.elevation;d=new as([d.min[0],d.min[1],n],[d.max[0],d.max[1],l]);}m.push({aabb:d,zoom:u,x:h,y:c,wrap:a.wrap,fullyVisible:n});}}return g.sort(((t,e)=>t.distanceSq-e.distanceSq)).map((t=>t.tileID))}resize(t,e){this.width=t,this.height=e,this.pixelsToGLUnits=[2/t,-2/e],this._constrain(),this._calcMatrices();}get unmodified(){return this._unmodified}zoomScale(t){return Math.pow(2,t)}scaleZoom(t){return Math.log(t)/Math.LN2}project(e){const i=t.ad(e.lat,-this.maxValidLatitude,this.maxValidLatitude);return new t.P(t.G(e.lng)*this.worldSize,t.H(i)*this.worldSize)}unproject(e){return new t.U(e.x/this.worldSize,e.y/this.worldSize).toLngLat()}get point(){return this.project(this.center)}getCameraPosition(){return {lngLat:this.pointLocation(this.getCameraPoint()),altitude:Math.cos(this._pitch)*this.cameraToCenterDistance/this._pixelPerMeter+this.elevation}}recalculateZoom(e){const i=this.pointLocation(this.centerPoint,e),s=e.getElevationForLngLatZoom(i,this.tileZoom);if(!(this.elevation-s))return;const a=this.getCameraPosition(),o=t.U.fromLngLat(a.lngLat,a.altitude),r=t.U.fromLngLat(i,s),n=o.x-r.x,l=o.y-r.y,h=o.z-r.z,c=Math.sqrt(n*n+l*l+h*h),u=this.scaleZoom(this.cameraToCenterDistance/c/this.tileSize);this._elevation=s,this._center=i,this.zoom=u;}setLocationAtPoint(e,i){const s=this.pointCoordinate(i),a=this.pointCoordinate(this.centerPoint),o=this.locationCoordinate(e),r=new t.U(o.x-(s.x-a.x),o.y-(s.y-a.y));this.center=this.coordinateLocation(r),this._renderWorldCopies&&(this.center=this.center.wrap());}locationPoint(t,e){return e?this.coordinatePoint(this.locationCoordinate(t),e.getElevationForLngLatZoom(t,this.tileZoom),this.pixelMatrix3D):this.coordinatePoint(this.locationCoordinate(t))}pointLocation(t,e){return this.coordinateLocation(this.pointCoordinate(t,e))}locationCoordinate(e){return t.U.fromLngLat(e)}coordinateLocation(t){return t&&t.toLngLat()}pointCoordinate(e,i){if(i){const t=i.pointCoordinate(e);if(null!=t)return t}const s=[e.x,e.y,0,1],a=[e.x,e.y,1,1];t.ag(s,s,this.pixelMatrixInverse),t.ag(a,a,this.pixelMatrixInverse);const o=s[3],r=a[3],n=s[1]/o,l=a[1]/r,h=s[2]/o,c=a[2]/r,u=h===c?0:(0-h)/(c-h);return new t.U(t.B.number(s[0]/o,a[0]/r,u)/this.worldSize,t.B.number(n,l,u)/this.worldSize)}coordinatePoint(e,i=0,s=this.pixelMatrix){const a=[e.x*this.worldSize,e.y*this.worldSize,i,1];return t.ag(a,a,s),new t.P(a[0]/a[3],a[1]/a[3])}getBounds(){const e=Math.max(0,this.height/2-this.getHorizon());return (new L).extend(this.pointLocation(new t.P(0,e))).extend(this.pointLocation(new t.P(this.width,e))).extend(this.pointLocation(new t.P(this.width,this.height))).extend(this.pointLocation(new t.P(0,this.height)))}getMaxBounds(){return this.latRange&&2===this.latRange.length&&this.lngRange&&2===this.lngRange.length?new L([this.lngRange[0],this.latRange[0]],[this.lngRange[1],this.latRange[1]]):null}getHorizon(){return Math.tan(Math.PI/2-this._pitch)*this.cameraToCenterDistance*.85}setMaxBounds(t){t?(this.lngRange=[t.getWest(),t.getEast()],this.latRange=[t.getSouth(),t.getNorth()],this._constrain()):(this.lngRange=null,this.latRange=[-this.maxValidLatitude,this.maxValidLatitude]);}calculatePosMatrix(e,i=!1){const s=e.key,a=i?this._alignedPosMatrixCache:this._posMatrixCache;if(a[s])return a[s];const o=e.canonical,r=this.worldSize/this.zoomScale(o.z),n=o.x+Math.pow(2,o.z)*e.wrap,l=t.ao(new Float64Array(16));return t.$(l,l,[n*r,o.y*r,0]),t.a0(l,l,[r/t.N,r/t.N,1]),t.a1(l,i?this.alignedProjMatrix:this.projMatrix,l),a[s]=new Float32Array(l),a[s]}customLayerMatrix(){return this.mercatorMatrix.slice()}_constrain(){if(!this.center||!this.width||!this.height||this._constraining)return;this._constraining=!0;let e,i,s,a,o=-90,r=90,n=-180,l=180;const h=this.size,c=this._unmodified;if(this.latRange){const i=this.latRange;o=t.H(i[1])*this.worldSize,r=t.H(i[0])*this.worldSize,e=r-o<h.y?h.y/(r-o):0;}if(this.lngRange){const e=this.lngRange;n=t.b5(t.G(e[0])*this.worldSize,0,this.worldSize),l=t.b5(t.G(e[1])*this.worldSize,0,this.worldSize),l<n&&(l+=this.worldSize),i=l-n<h.x?h.x/(l-n):0;}const u=this.point,d=Math.max(i||0,e||0);if(d)return this.center=this.unproject(new t.P(i?(l+n)/2:u.x,e?(r+o)/2:u.y)),this.zoom+=this.scaleZoom(d),this._unmodified=c,void(this._constraining=!1);if(this.latRange){const t=u.y,e=h.y/2;t-e<o&&(a=o+e),t+e>r&&(a=r-e);}if(this.lngRange){const e=(n+l)/2,i=t.b5(u.x,e-this.worldSize/2,e+this.worldSize/2),a=h.x/2;i-a<n&&(s=n+a),i+a>l&&(s=l-a);}void 0===s&&void 0===a||(this.center=this.unproject(new t.P(void 0!==s?s:u.x,void 0!==a?a:u.y)).wrap()),this._unmodified=c,this._constraining=!1;}_calcMatrices(){if(!this.height)return;const e=this.centerOffset,i=this.point.x,s=this.point.y;this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height,this._pixelPerMeter=t.b7(1,this.center.lat)*this.worldSize;let a=t.ao(new Float64Array(16));t.a0(a,a,[this.width/2,-this.height/2,1]),t.$(a,a,[1,-1,0]),this.labelPlaneMatrix=a,a=t.ao(new Float64Array(16)),t.a0(a,a,[1,-1,1]),t.$(a,a,[-1,-1,0]),t.a0(a,a,[2/this.width,2/this.height,1]),this.glCoordMatrix=a;const o=this.cameraToCenterDistance+this._elevation*this._pixelPerMeter/Math.cos(this._pitch),r=Math.min(this.elevation,this._minEleveationForCurrentTile),n=o-r*this._pixelPerMeter/Math.cos(this._pitch),l=r<0?n:o,h=Math.PI/2+this._pitch,c=this._fov*(.5+e.y/this.height),u=Math.sin(c)*l/Math.sin(t.ad(Math.PI-h-c,.01,Math.PI-.01)),d=this.getHorizon(),_=2*Math.atan(d/this.cameraToCenterDistance)*(.5+e.y/(2*d)),p=Math.sin(_)*l/Math.sin(t.ad(Math.PI-h-_,.01,Math.PI-.01)),m=Math.min(u,p),f=1.01*(Math.cos(Math.PI/2-this._pitch)*m+l),g=this.height/50;a=new Float64Array(16),t.b8(a,this._fov,this.width/this.height,g,f),a[8]=2*-e.x/this.width,a[9]=2*e.y/this.height,t.a0(a,a,[1,-1,1]),t.$(a,a,[0,0,-this.cameraToCenterDistance]),t.b9(a,a,this._pitch),t.ae(a,a,this.angle),t.$(a,a,[-i,-s,0]),this.mercatorMatrix=t.a0([],a,[this.worldSize,this.worldSize,this.worldSize]),t.a0(a,a,[1,1,this._pixelPerMeter]),this.pixelMatrix=t.a1(new Float64Array(16),this.labelPlaneMatrix,a),t.$(a,a,[0,0,-this.elevation]),this.projMatrix=a,this.invProjMatrix=t.as([],a),this.pixelMatrix3D=t.a1(new Float64Array(16),this.labelPlaneMatrix,a);const v=this.width%2/2,x=this.height%2/2,y=Math.cos(this.angle),b=Math.sin(this.angle),w=i-Math.round(i)+y*v+b*x,T=s-Math.round(s)+y*x+b*v,I=new Float64Array(a);if(t.$(I,I,[w>.5?w-1:w,T>.5?T-1:T,0]),this.alignedProjMatrix=I,a=t.as(new Float64Array(16),this.pixelMatrix),!a)throw new Error("failed to invert matrix");this.pixelMatrixInverse=a,this._posMatrixCache={},this._alignedPosMatrixCache={};}maxPitchScaleFactor(){if(!this.pixelMatrixInverse)return 1;const e=this.pointCoordinate(new t.P(0,0)),i=[e.x*this.worldSize,e.y*this.worldSize,0,1];return t.ag(i,i,this.pixelMatrix)[3]/this.cameraToCenterDistance}getCameraPoint(){const e=Math.tan(this._pitch)*(this.cameraToCenterDistance||1);return this.centerPoint.add(new t.P(0,e))}getCameraQueryGeometry(e){const i=this.getCameraPoint();if(1===e.length)return [e[0],i];{let s=i.x,a=i.y,o=i.x,r=i.y;for(const t of e)s=Math.min(s,t.x),a=Math.min(a,t.y),o=Math.max(o,t.x),r=Math.max(r,t.y);return [new t.P(s,a),new t.P(o,a),new t.P(o,r),new t.P(s,r),new t.P(s,a)]}}}function ns(t,e){let i,s=!1,a=null,o=null;const r=()=>{a=null,s&&(t.apply(o,i),a=setTimeout(r,e),s=!1);};return (...t)=>(s=!0,o=this,i=t,a||r(),a)}class ls{constructor(t){this._getCurrentHash=()=>{const t=window.location.hash.replace("#","");if(this._hashName){let e;return t.split("&").map((t=>t.split("="))).forEach((t=>{t[0]===this._hashName&&(e=t);})),(e&&e[1]||"").split("/")}return t.split("/")},this._onHashChange=()=>{const t=this._getCurrentHash();if(t.length>=3&&!t.some((t=>isNaN(t)))){const e=this._map.dragRotate.isEnabled()&&this._map.touchZoomRotate.isEnabled()?+(t[3]||0):this._map.getBearing();return this._map.jumpTo({center:[+t[2],+t[1]],zoom:+t[0],bearing:e,pitch:+(t[4]||0)}),!0}return !1},this._updateHashUnthrottled=()=>{const t=window.location.href.replace(/(#.+)?$/,this.getHashString());try{window.history.replaceState(window.history.state,null,t);}catch(t){}},this._updateHash=ns(this._updateHashUnthrottled,300),this._hashName=t&&encodeURIComponent(t);}addTo(t){return this._map=t,addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this}remove(){return removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),clearTimeout(this._updateHash()),delete this._map,this}getHashString(t){const e=this._map.getCenter(),i=Math.round(100*this._map.getZoom())/100,s=Math.ceil((i*Math.LN2+Math.log(512/360/.5))/Math.LN10),a=Math.pow(10,s),o=Math.round(e.lng*a)/a,r=Math.round(e.lat*a)/a,n=this._map.getBearing(),l=this._map.getPitch();let h="";if(h+=t?`/${o}/${r}/${i}`:`${i}/${r}/${o}`,(n||l)&&(h+="/"+Math.round(10*n)/10),l&&(h+=`/${Math.round(l)}`),this._hashName){const t=this._hashName;let e=!1;const i=window.location.hash.slice(1).split("&").map((i=>{const s=i.split("=")[0];return s===t?(e=!0,`${s}=${h}`):i})).filter((t=>t));return e||i.push(`${t}=${h}`),`#${i.join("&")}`}return `#${h}`}}const hs={linearity:.3,easing:t.ba(0,0,.3,1)},cs=t.e({deceleration:2500,maxSpeed:1400},hs),us=t.e({deceleration:20,maxSpeed:1400},hs),ds=t.e({deceleration:1e3,maxSpeed:360},hs),_s=t.e({deceleration:1e3,maxSpeed:90},hs);class ps{constructor(t){this._map=t,this.clear();}clear(){this._inertiaBuffer=[];}record(e){this._drainInertiaBuffer(),this._inertiaBuffer.push({time:t.h.now(),settings:e});}_drainInertiaBuffer(){const e=this._inertiaBuffer,i=t.h.now();for(;e.length>0&&i-e[0].time>160;)e.shift();}_onMoveEnd(e){if(this._drainInertiaBuffer(),this._inertiaBuffer.length<2)return;const i={zoom:0,bearing:0,pitch:0,pan:new t.P(0,0),pinchAround:void 0,around:void 0};for(const{settings:t}of this._inertiaBuffer)i.zoom+=t.zoomDelta||0,i.bearing+=t.bearingDelta||0,i.pitch+=t.pitchDelta||0,t.panDelta&&i.pan._add(t.panDelta),t.around&&(i.around=t.around),t.pinchAround&&(i.pinchAround=t.pinchAround);const s=this._inertiaBuffer[this._inertiaBuffer.length-1].time-this._inertiaBuffer[0].time,a={};if(i.pan.mag()){const o=fs(i.pan.mag(),s,t.e({},cs,e||{}));a.offset=i.pan.mult(o.amount/i.pan.mag()),a.center=this._map.transform.center,ms(a,o);}if(i.zoom){const t=fs(i.zoom,s,us);a.zoom=this._map.transform.zoom+t.amount,ms(a,t);}if(i.bearing){const e=fs(i.bearing,s,ds);a.bearing=this._map.transform.bearing+t.ad(e.amount,-179,179),ms(a,e);}if(i.pitch){const t=fs(i.pitch,s,_s);a.pitch=this._map.transform.pitch+t.amount,ms(a,t);}if(a.zoom||a.bearing){const t=void 0===i.pinchAround?i.around:i.pinchAround;a.around=t?this._map.unproject(t):this._map.getCenter();}return this.clear(),t.e(a,{noMoveStart:!0})}}function ms(t,e){(!t.duration||t.duration<e.duration)&&(t.duration=e.duration,t.easing=e.easing);}function fs(e,i,s){const{maxSpeed:a,linearity:o,deceleration:r}=s,n=t.ad(e*o/(i/1e3),-a,a),l=Math.abs(n)/(r*o);return {easing:s.easing,duration:1e3*l,amount:n*(l/2)}}class gs extends t.k{preventDefault(){this._defaultPrevented=!0;}get defaultPrevented(){return this._defaultPrevented}constructor(e,s,a,o={}){const r=i.mousePos(s.getCanvasContainer(),a),n=s.unproject(r);super(e,t.e({point:r,lngLat:n,originalEvent:a},o)),this._defaultPrevented=!1,this.target=s;}}class vs extends t.k{preventDefault(){this._defaultPrevented=!0;}get defaultPrevented(){return this._defaultPrevented}constructor(e,s,a){const o="touchend"===e?a.changedTouches:a.touches,r=i.touchPos(s.getCanvasContainer(),o),n=r.map((t=>s.unproject(t))),l=r.reduce(((t,e,i,s)=>t.add(e.div(s.length))),new t.P(0,0));super(e,{points:r,point:l,lngLats:n,lngLat:s.unproject(l),originalEvent:a}),this._defaultPrevented=!1;}}class xs extends t.k{preventDefault(){this._defaultPrevented=!0;}get defaultPrevented(){return this._defaultPrevented}constructor(t,e,i){super(t,{originalEvent:i}),this._defaultPrevented=!1;}}class ys{constructor(t,e){this._map=t,this._clickTolerance=e.clickTolerance;}reset(){delete this._mousedownPos;}wheel(t){return this._firePreventable(new xs(t.type,this._map,t))}mousedown(t,e){return this._mousedownPos=e,this._firePreventable(new gs(t.type,this._map,t))}mouseup(t){this._map.fire(new gs(t.type,this._map,t));}click(t,e){this._mousedownPos&&this._mousedownPos.dist(e)>=this._clickTolerance||this._map.fire(new gs(t.type,this._map,t));}dblclick(t){return this._firePreventable(new gs(t.type,this._map,t))}mouseover(t){this._map.fire(new gs(t.type,this._map,t));}mouseout(t){this._map.fire(new gs(t.type,this._map,t));}touchstart(t){return this._firePreventable(new vs(t.type,this._map,t))}touchmove(t){this._map.fire(new vs(t.type,this._map,t));}touchend(t){this._map.fire(new vs(t.type,this._map,t));}touchcancel(t){this._map.fire(new vs(t.type,this._map,t));}_firePreventable(t){if(this._map.fire(t),t.defaultPrevented)return {}}isEnabled(){return !0}isActive(){return !1}enable(){}disable(){}}class bs{constructor(t){this._map=t;}reset(){this._delayContextMenu=!1,this._ignoreContextMenu=!0,delete this._contextMenuEvent;}mousemove(t){this._map.fire(new gs(t.type,this._map,t));}mousedown(){this._delayContextMenu=!0,this._ignoreContextMenu=!1;}mouseup(){this._delayContextMenu=!1,this._contextMenuEvent&&(this._map.fire(new gs("contextmenu",this._map,this._contextMenuEvent)),delete this._contextMenuEvent);}contextmenu(t){this._delayContextMenu?this._contextMenuEvent=t:this._ignoreContextMenu||this._map.fire(new gs(t.type,this._map,t)),this._map.listens("contextmenu")&&t.preventDefault();}isEnabled(){return !0}isActive(){return !1}enable(){}disable(){}}class ws{constructor(t){this._map=t;}get transform(){return this._map._requestedCameraState||this._map.transform}get center(){return {lng:this.transform.center.lng,lat:this.transform.center.lat}}get zoom(){return this.transform.zoom}get pitch(){return this.transform.pitch}get bearing(){return this.transform.bearing}unproject(e){return this.transform.pointLocation(t.P.convert(e),this._map.terrain)}}class Ts{constructor(t,e){this._map=t,this._tr=new ws(t),this._el=t.getCanvasContainer(),this._container=t.getContainer(),this._clickTolerance=e.clickTolerance||1;}isEnabled(){return !!this._enabled}isActive(){return !!this._active}enable(){this.isEnabled()||(this._enabled=!0);}disable(){this.isEnabled()&&(this._enabled=!1);}mousedown(t,e){this.isEnabled()&&t.shiftKey&&0===t.button&&(i.disableDrag(),this._startPos=this._lastPos=e,this._active=!0);}mousemoveWindow(t,e){if(!this._active)return;const s=e;if(this._lastPos.equals(s)||!this._box&&s.dist(this._startPos)<this._clickTolerance)return;const a=this._startPos;this._lastPos=s,this._box||(this._box=i.create("div","maplibregl-boxzoom",this._container),this._container.classList.add("maplibregl-crosshair"),this._fireEvent("boxzoomstart",t));const o=Math.min(a.x,s.x),r=Math.max(a.x,s.x),n=Math.min(a.y,s.y),l=Math.max(a.y,s.y);i.setTransform(this._box,`translate(${o}px,${n}px)`),this._box.style.width=r-o+"px",this._box.style.height=l-n+"px";}mouseupWindow(e,s){if(!this._active)return;if(0!==e.button)return;const a=this._startPos,o=s;if(this.reset(),i.suppressClick(),a.x!==o.x||a.y!==o.y)return this._map.fire(new t.k("boxzoomend",{originalEvent:e})),{cameraAnimation:t=>t.fitScreenCoordinates(a,o,this._tr.bearing,{linear:!0})};this._fireEvent("boxzoomcancel",e);}keydown(t){this._active&&27===t.keyCode&&(this.reset(),this._fireEvent("boxzoomcancel",t));}reset(){this._active=!1,this._container.classList.remove("maplibregl-crosshair"),this._box&&(i.remove(this._box),this._box=null),i.enableDrag(),delete this._startPos,delete this._lastPos;}_fireEvent(e,i){return this._map.fire(new t.k(e,{originalEvent:i}))}}function Is(t,e){if(t.length!==e.length)throw new Error(`The number of touches and points are not equal - touches ${t.length}, points ${e.length}`);const i={};for(let s=0;s<t.length;s++)i[t[s].identifier]=e[s];return i}class Es{constructor(t){this.reset(),this.numTouches=t.numTouches;}reset(){delete this.centroid,delete this.startTime,delete this.touches,this.aborted=!1;}touchstart(e,i,s){(this.centroid||s.length>this.numTouches)&&(this.aborted=!0),this.aborted||(void 0===this.startTime&&(this.startTime=e.timeStamp),s.length===this.numTouches&&(this.centroid=function(e){const i=new t.P(0,0);for(const t of e)i._add(t);return i.div(e.length)}(i),this.touches=Is(s,i)));}touchmove(t,e,i){if(this.aborted||!this.centroid)return;const s=Is(i,e);for(const t in this.touches){const e=s[t];(!e||e.dist(this.touches[t])>30)&&(this.aborted=!0);}}touchend(t,e,i){if((!this.centroid||t.timeStamp-this.startTime>500)&&(this.aborted=!0),0===i.length){const t=!this.aborted&&this.centroid;if(this.reset(),t)return t}}}class Ss{constructor(t){this.singleTap=new Es(t),this.numTaps=t.numTaps,this.reset();}reset(){this.lastTime=1/0,delete this.lastTap,this.count=0,this.singleTap.reset();}touchstart(t,e,i){this.singleTap.touchstart(t,e,i);}touchmove(t,e,i){this.singleTap.touchmove(t,e,i);}touchend(t,e,i){const s=this.singleTap.touchend(t,e,i);if(s){const e=t.timeStamp-this.lastTime<500,i=!this.lastTap||this.lastTap.dist(s)<30;if(e&&i||this.reset(),this.count++,this.lastTime=t.timeStamp,this.lastTap=s,this.count===this.numTaps)return this.reset(),s}}}class Cs{constructor(t){this._tr=new ws(t),this._zoomIn=new Ss({numTouches:1,numTaps:2}),this._zoomOut=new Ss({numTouches:2,numTaps:1}),this.reset();}reset(){this._active=!1,this._zoomIn.reset(),this._zoomOut.reset();}touchstart(t,e,i){this._zoomIn.touchstart(t,e,i),this._zoomOut.touchstart(t,e,i);}touchmove(t,e,i){this._zoomIn.touchmove(t,e,i),this._zoomOut.touchmove(t,e,i);}touchend(t,e,i){const s=this._zoomIn.touchend(t,e,i),a=this._zoomOut.touchend(t,e,i),o=this._tr;return s?(this._active=!0,t.preventDefault(),setTimeout((()=>this.reset()),0),{cameraAnimation:e=>e.easeTo({duration:300,zoom:o.zoom+1,around:o.unproject(s)},{originalEvent:t})}):a?(this._active=!0,t.preventDefault(),setTimeout((()=>this.reset()),0),{cameraAnimation:e=>e.easeTo({duration:300,zoom:o.zoom-1,around:o.unproject(a)},{originalEvent:t})}):void 0}touchcancel(){this.reset();}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}class Ps{constructor(t){this._enabled=!!t.enable,this._moveStateManager=t.moveStateManager,this._clickTolerance=t.clickTolerance||1,this._moveFunction=t.move,this._activateOnStart=!!t.activateOnStart,t.assignEvents(this),this.reset();}reset(t){this._active=!1,this._moved=!1,delete this._lastPoint,this._moveStateManager.endMove(t);}_move(...t){const e=this._moveFunction(...t);if(e.bearingDelta||e.pitchDelta||e.around||e.panDelta)return this._active=!0,e}dragStart(t,e){this.isEnabled()&&!this._lastPoint&&this._moveStateManager.isValidStartEvent(t)&&(this._moveStateManager.startMove(t),this._lastPoint=e.length?e[0]:e,this._activateOnStart&&this._lastPoint&&(this._active=!0));}dragMove(t,e){if(!this.isEnabled())return;const i=this._lastPoint;if(!i)return;if(t.preventDefault(),!this._moveStateManager.isValidMoveEvent(t))return void this.reset(t);const s=e.length?e[0]:e;return !this._moved&&s.dist(i)<this._clickTolerance?void 0:(this._moved=!0,this._lastPoint=s,this._move(i,s))}dragEnd(t){this.isEnabled()&&this._lastPoint&&this._moveStateManager.isValidEndEvent(t)&&(this._moved&&i.suppressClick(),this.reset(t));}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}getClickTolerance(){return this._clickTolerance}}const Ds={0:1,2:2};class Ms{constructor(t){this._correctEvent=t.checkCorrectEvent;}startMove(t){const e=i.mouseButton(t);this._eventButton=e;}endMove(t){delete this._eventButton;}isValidStartEvent(t){return this._correctEvent(t)}isValidMoveEvent(t){return !function(t,e){const i=Ds[e];return void 0===t.buttons||(t.buttons&i)!==i}(t,this._eventButton)}isValidEndEvent(t){return i.mouseButton(t)===this._eventButton}}class zs{constructor(){this._firstTouch=void 0;}_isOneFingerTouch(t){return 1===t.targetTouches.length}_isSameTouchEvent(t){return t.targetTouches[0].identifier===this._firstTouch}startMove(t){this._firstTouch=t.targetTouches[0].identifier;}endMove(t){delete this._firstTouch;}isValidStartEvent(t){return this._isOneFingerTouch(t)}isValidMoveEvent(t){return this._isOneFingerTouch(t)&&this._isSameTouchEvent(t)}isValidEndEvent(t){return this._isOneFingerTouch(t)&&this._isSameTouchEvent(t)}}const Ls=t=>{t.mousedown=t.dragStart,t.mousemoveWindow=t.dragMove,t.mouseup=t.dragEnd,t.contextmenu=function(t){t.preventDefault();};},As=({enable:t,clickTolerance:e,bearingDegreesPerPixelMoved:s=.8})=>{const a=new Ms({checkCorrectEvent:t=>0===i.mouseButton(t)&&t.ctrlKey||2===i.mouseButton(t)});return new Ps({clickTolerance:e,move:(t,e)=>({bearingDelta:(e.x-t.x)*s}),moveStateManager:a,enable:t,assignEvents:Ls})},Rs=({enable:t,clickTolerance:e,pitchDegreesPerPixelMoved:s=-.5})=>{const a=new Ms({checkCorrectEvent:t=>0===i.mouseButton(t)&&t.ctrlKey||2===i.mouseButton(t)});return new Ps({clickTolerance:e,move:(t,e)=>({pitchDelta:(e.y-t.y)*s}),moveStateManager:a,enable:t,assignEvents:Ls})};class ks{constructor(t,e){this._minTouches=t.cooperativeGestures?2:1,this._clickTolerance=t.clickTolerance||1,this._map=e,this.reset();}reset(){this._active=!1,this._touches={},this._sum=new t.P(0,0),setTimeout((()=>{this._cancelCooperativeMessage=!1;}),200);}touchstart(t,e,i){return this._calculateTransform(t,e,i)}touchmove(t,e,i){if(this._map._cooperativeGestures&&(2===this._minTouches&&i.length<2&&!this._cancelCooperativeMessage?this._map._onCooperativeGesture(t,!1,i.length):this._cancelCooperativeMessage||(this._cancelCooperativeMessage=!0)),this._active&&!(i.length<this._minTouches))return t.preventDefault(),this._calculateTransform(t,e,i)}touchend(t,e,i){this._calculateTransform(t,e,i),this._active&&i.length<this._minTouches&&this.reset();}touchcancel(){this.reset();}_calculateTransform(e,i,s){s.length>0&&(this._active=!0);const a=Is(s,i),o=new t.P(0,0),r=new t.P(0,0);let n=0;for(const t in a){const e=a[t],i=this._touches[t];i&&(o._add(e),r._add(e.sub(i)),n++,a[t]=e);}if(this._touches=a,n<this._minTouches||!r.mag())return;const l=r.div(n);return this._sum._add(l),this._sum.mag()<this._clickTolerance?void 0:{around:o.div(n),panDelta:l}}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}class Fs{constructor(){this.reset();}reset(){this._active=!1,delete this._firstTwoTouches;}touchstart(t,e,i){this._firstTwoTouches||i.length<2||(this._firstTwoTouches=[i[0].identifier,i[1].identifier],this._start([e[0],e[1]]));}touchmove(t,e,i){if(!this._firstTwoTouches)return;t.preventDefault();const[s,a]=this._firstTwoTouches,o=Bs(i,e,s),r=Bs(i,e,a);if(!o||!r)return;const n=this._aroundCenter?null:o.add(r).div(2);return this._move([o,r],n,t)}touchend(t,e,s){if(!this._firstTwoTouches)return;const[a,o]=this._firstTwoTouches,r=Bs(s,e,a),n=Bs(s,e,o);r&&n||(this._active&&i.suppressClick(),this.reset());}touchcancel(){this.reset();}enable(t){this._enabled=!0,this._aroundCenter=!!t&&"center"===t.around;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}function Bs(t,e,i){for(let s=0;s<t.length;s++)if(t[s].identifier===i)return e[s]}function Os(t,e){return Math.log(t/e)/Math.LN2}class Ns extends Fs{reset(){super.reset(),delete this._distance,delete this._startDistance;}_start(t){this._startDistance=this._distance=t[0].dist(t[1]);}_move(t,e){const i=this._distance;if(this._distance=t[0].dist(t[1]),this._active||!(Math.abs(Os(this._distance,this._startDistance))<.1))return this._active=!0,{zoomDelta:Os(this._distance,i),pinchAround:e}}}function Us(t,e){return 180*t.angleWith(e)/Math.PI}class Zs extends Fs{reset(){super.reset(),delete this._minDiameter,delete this._startVector,delete this._vector;}_start(t){this._startVector=this._vector=t[0].sub(t[1]),this._minDiameter=t[0].dist(t[1]);}_move(t,e){const i=this._vector;if(this._vector=t[0].sub(t[1]),this._active||!this._isBelowThreshold(this._vector))return this._active=!0,{bearingDelta:Us(this._vector,i),pinchAround:e}}_isBelowThreshold(t){this._minDiameter=Math.min(this._minDiameter,t.mag());const e=25/(Math.PI*this._minDiameter)*360,i=Us(t,this._startVector);return Math.abs(i)<e}}function Gs(t){return Math.abs(t.y)>Math.abs(t.x)}class js extends Fs{constructor(t){super(),this._map=t;}reset(){super.reset(),this._valid=void 0,delete this._firstMove,delete this._lastPoints;}touchstart(t,e,i){super.touchstart(t,e,i),this._currentTouchCount=i.length;}_start(t){this._lastPoints=t,Gs(t[0].sub(t[1]))&&(this._valid=!1);}_move(t,e,i){if(this._map._cooperativeGestures&&this._currentTouchCount<3)return;const s=t[0].sub(this._lastPoints[0]),a=t[1].sub(this._lastPoints[1]);return this._valid=this.gestureBeginsVertically(s,a,i.timeStamp),this._valid?(this._lastPoints=t,this._active=!0,{pitchDelta:(s.y+a.y)/2*-.5}):void 0}gestureBeginsVertically(t,e,i){if(void 0!==this._valid)return this._valid;const s=t.mag()>=2,a=e.mag()>=2;if(!s&&!a)return;if(!s||!a)return void 0===this._firstMove&&(this._firstMove=i),i-this._firstMove<100&&void 0;const o=t.y>0==e.y>0;return Gs(t)&&Gs(e)&&o}}const Vs={panStep:100,bearingStep:15,pitchStep:10};class qs{constructor(t){this._tr=new ws(t);const e=Vs;this._panStep=e.panStep,this._bearingStep=e.bearingStep,this._pitchStep=e.pitchStep,this._rotationDisabled=!1;}reset(){this._active=!1;}keydown(t){if(t.altKey||t.ctrlKey||t.metaKey)return;let e=0,i=0,s=0,a=0,o=0;switch(t.keyCode){case 61:case 107:case 171:case 187:e=1;break;case 189:case 109:case 173:e=-1;break;case 37:t.shiftKey?i=-1:(t.preventDefault(),a=-1);break;case 39:t.shiftKey?i=1:(t.preventDefault(),a=1);break;case 38:t.shiftKey?s=1:(t.preventDefault(),o=-1);break;case 40:t.shiftKey?s=-1:(t.preventDefault(),o=1);break;default:return}return this._rotationDisabled&&(i=0,s=0),{cameraAnimation:r=>{const n=this._tr;r.easeTo({duration:300,easeId:"keyboardHandler",easing:$s,zoom:e?Math.round(n.zoom)+e*(t.shiftKey?2:1):n.zoom,bearing:n.bearing+i*this._bearingStep,pitch:n.pitch+s*this._pitchStep,offset:[-a*this._panStep,-o*this._panStep],center:n.center},{originalEvent:t});}}}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}disableRotation(){this._rotationDisabled=!0;}enableRotation(){this._rotationDisabled=!1;}}function $s(t){return t*(2-t)}const Ws=4.000244140625;class Hs{constructor(t,e){this._onTimeout=t=>{this._type="wheel",this._delta-=this._lastValue,this._active||this._start(t);},this._map=t,this._tr=new ws(t),this._el=t.getCanvasContainer(),this._triggerRenderFrame=e,this._delta=0,this._defaultZoomRate=.01,this._wheelZoomRate=.0022222222222222222;}setZoomRate(t){this._defaultZoomRate=t;}setWheelZoomRate(t){this._wheelZoomRate=t;}isEnabled(){return !!this._enabled}isActive(){return !!this._active||void 0!==this._finishTimeout}isZooming(){return !!this._zooming}enable(t){this.isEnabled()||(this._enabled=!0,this._aroundCenter=!!t&&"center"===t.around);}disable(){this.isEnabled()&&(this._enabled=!1);}wheel(e){if(!this.isEnabled())return;if(this._map._cooperativeGestures){if(!e[this._map._metaKey])return;e.preventDefault();}let i=e.deltaMode===WheelEvent.DOM_DELTA_LINE?40*e.deltaY:e.deltaY;const s=t.h.now(),a=s-(this._lastWheelEventTime||0);this._lastWheelEventTime=s,0!==i&&i%Ws==0?this._type="wheel":0!==i&&Math.abs(i)<4?this._type="trackpad":a>400?(this._type=null,this._lastValue=i,this._timeout=setTimeout(this._onTimeout,40,e)):this._type||(this._type=Math.abs(a*i)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,i+=this._lastValue)),e.shiftKey&&i&&(i/=4),this._type&&(this._lastWheelEvent=e,this._delta-=i,this._active||this._start(e)),e.preventDefault();}_start(e){if(!this._delta)return;this._frameId&&(this._frameId=null),this._active=!0,this.isZooming()||(this._zooming=!0),this._finishTimeout&&(clearTimeout(this._finishTimeout),delete this._finishTimeout);const s=i.mousePos(this._el,e),a=this._tr;this._around=t.L.convert(this._aroundCenter?a.center:a.unproject(s)),this._aroundPoint=a.transform.locationPoint(this._around),this._frameId||(this._frameId=!0,this._triggerRenderFrame());}renderFrame(){if(!this._frameId)return;if(this._frameId=null,!this.isActive())return;const e=this._tr.transform;if(0!==this._delta){const t="wheel"===this._type&&Math.abs(this._delta)>Ws?this._wheelZoomRate:this._defaultZoomRate;let i=2/(1+Math.exp(-Math.abs(this._delta*t)));this._delta<0&&0!==i&&(i=1/i);const s="number"==typeof this._targetZoom?e.zoomScale(this._targetZoom):e.scale;this._targetZoom=Math.min(e.maxZoom,Math.max(e.minZoom,e.scaleZoom(s*i))),"wheel"===this._type&&(this._startZoom=e.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0;}const i="number"==typeof this._targetZoom?this._targetZoom:e.zoom,s=this._startZoom,a=this._easing;let o,r=!1;if("wheel"===this._type&&s&&a){const e=Math.min((t.h.now()-this._lastWheelEventTime)/200,1),n=a(e);o=t.B.number(s,i,n),e<1?this._frameId||(this._frameId=!0):r=!0;}else o=i,r=!0;return this._active=!0,r&&(this._active=!1,this._finishTimeout=setTimeout((()=>{this._zooming=!1,this._triggerRenderFrame(),delete this._targetZoom,delete this._finishTimeout;}),200)),{noInertia:!0,needsRenderFrame:!r,zoomDelta:o-e.zoom,around:this._aroundPoint,originalEvent:this._lastWheelEvent}}_smoothOutEasing(e){let i=t.bb;if(this._prevEase){const e=this._prevEase,s=(t.h.now()-e.start)/e.duration,a=e.easing(s+.01)-e.easing(s),o=.27/Math.sqrt(a*a+1e-4)*.01,r=Math.sqrt(.0729-o*o);i=t.ba(o,r,.25,1);}return this._prevEase={start:t.h.now(),duration:e,easing:i},i}reset(){this._active=!1,this._zooming=!1,delete this._targetZoom,this._finishTimeout&&(clearTimeout(this._finishTimeout),delete this._finishTimeout);}}class Xs{constructor(t,e){this._clickZoom=t,this._tapZoom=e;}enable(){this._clickZoom.enable(),this._tapZoom.enable();}disable(){this._clickZoom.disable(),this._tapZoom.disable();}isEnabled(){return this._clickZoom.isEnabled()&&this._tapZoom.isEnabled()}isActive(){return this._clickZoom.isActive()||this._tapZoom.isActive()}}class Ks{constructor(t){this._tr=new ws(t),this.reset();}reset(){this._active=!1;}dblclick(t,e){return t.preventDefault(),{cameraAnimation:i=>{i.easeTo({duration:300,zoom:this._tr.zoom+(t.shiftKey?-1:1),around:this._tr.unproject(e)},{originalEvent:t});}}}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}class Qs{constructor(){this._tap=new Ss({numTouches:1,numTaps:1}),this.reset();}reset(){this._active=!1,delete this._swipePoint,delete this._swipeTouch,delete this._tapTime,delete this._tapPoint,this._tap.reset();}touchstart(t,e,i){if(!this._swipePoint)if(this._tapTime){const s=e[0],a=t.timeStamp-this._tapTime<500,o=this._tapPoint.dist(s)<30;a&&o?i.length>0&&(this._swipePoint=s,this._swipeTouch=i[0].identifier):this.reset();}else this._tap.touchstart(t,e,i);}touchmove(t,e,i){if(this._tapTime){if(this._swipePoint){if(i[0].identifier!==this._swipeTouch)return;const s=e[0],a=s.y-this._swipePoint.y;return this._swipePoint=s,t.preventDefault(),this._active=!0,{zoomDelta:a/128}}}else this._tap.touchmove(t,e,i);}touchend(t,e,i){if(this._tapTime)this._swipePoint&&0===i.length&&this.reset();else {const s=this._tap.touchend(t,e,i);s&&(this._tapTime=t.timeStamp,this._tapPoint=s);}}touchcancel(){this.reset();}enable(){this._enabled=!0;}disable(){this._enabled=!1,this.reset();}isEnabled(){return this._enabled}isActive(){return this._active}}class Ys{constructor(t,e,i){this._el=t,this._mousePan=e,this._touchPan=i;}enable(t){this._inertiaOptions=t||{},this._mousePan.enable(),this._touchPan.enable(),this._el.classList.add("maplibregl-touch-drag-pan");}disable(){this._mousePan.disable(),this._touchPan.disable(),this._el.classList.remove("maplibregl-touch-drag-pan");}isEnabled(){return this._mousePan.isEnabled()&&this._touchPan.isEnabled()}isActive(){return this._mousePan.isActive()||this._touchPan.isActive()}}class Js{constructor(t,e,i){this._pitchWithRotate=t.pitchWithRotate,this._mouseRotate=e,this._mousePitch=i;}enable(){this._mouseRotate.enable(),this._pitchWithRotate&&this._mousePitch.enable();}disable(){this._mouseRotate.disable(),this._mousePitch.disable();}isEnabled(){return this._mouseRotate.isEnabled()&&(!this._pitchWithRotate||this._mousePitch.isEnabled())}isActive(){return this._mouseRotate.isActive()||this._mousePitch.isActive()}}class ta{constructor(t,e,i,s){this._el=t,this._touchZoom=e,this._touchRotate=i,this._tapDragZoom=s,this._rotationDisabled=!1,this._enabled=!0;}enable(t){this._touchZoom.enable(t),this._rotationDisabled||this._touchRotate.enable(t),this._tapDragZoom.enable(),this._el.classList.add("maplibregl-touch-zoom-rotate");}disable(){this._touchZoom.disable(),this._touchRotate.disable(),this._tapDragZoom.disable(),this._el.classList.remove("maplibregl-touch-zoom-rotate");}isEnabled(){return this._touchZoom.isEnabled()&&(this._rotationDisabled||this._touchRotate.isEnabled())&&this._tapDragZoom.isEnabled()}isActive(){return this._touchZoom.isActive()||this._touchRotate.isActive()||this._tapDragZoom.isActive()}disableRotation(){this._rotationDisabled=!0,this._touchRotate.disable();}enableRotation(){this._rotationDisabled=!1,this._touchZoom.isEnabled()&&this._touchRotate.enable();}}const ea=t=>t.zoom||t.drag||t.pitch||t.rotate;class ia extends t.k{}function sa(t){return t.panDelta&&t.panDelta.mag()||t.zoomDelta||t.bearingDelta||t.pitchDelta}class aa{constructor(t,e){this.handleWindowEvent=t=>{this.handleEvent(t,`${t.type}Window`);},this.handleEvent=(t,e)=>{if("blur"===t.type)return void this.stop(!0);this._updatingCamera=!0;const s="renderFrame"===t.type?void 0:t,a={needsRenderFrame:!1},o={},r={},n=t.touches,l=n?this._getMapTouches(n):void 0,h=l?i.touchPos(this._el,l):i.mousePos(this._el,t);for(const{handlerName:i,handler:n,allowed:c}of this._handlers){if(!n.isEnabled())continue;let u;this._blockedByActive(r,c,i)?n.reset():n[e||t.type]&&(u=n[e||t.type](t,h,l),this.mergeHandlerResult(a,o,u,i,s),u&&u.needsRenderFrame&&this._triggerRenderFrame()),(u||n.isActive())&&(r[i]=n);}const c={};for(const t in this._previousActiveHandlers)r[t]||(c[t]=s);this._previousActiveHandlers=r,(Object.keys(c).length||sa(a))&&(this._changes.push([a,o,c]),this._triggerRenderFrame()),(Object.keys(r).length||sa(a))&&this._map._stop(!0),this._updatingCamera=!1;const{cameraAnimation:u}=a;u&&(this._inertia.clear(),this._fireEvents({},{},!0),this._changes=[],u(this._map));},this._map=t,this._el=this._map.getCanvasContainer(),this._handlers=[],this._handlersById={},this._changes=[],this._inertia=new ps(t),this._bearingSnap=e.bearingSnap,this._previousActiveHandlers={},this._eventsInProgress={},this._addDefaultHandlers(e);const s=this._el;this._listeners=[[s,"touchstart",{passive:!0}],[s,"touchmove",{passive:!1}],[s,"touchend",void 0],[s,"touchcancel",void 0],[s,"mousedown",void 0],[s,"mousemove",void 0],[s,"mouseup",void 0],[document,"mousemove",{capture:!0}],[document,"mouseup",void 0],[s,"mouseover",void 0],[s,"mouseout",void 0],[s,"dblclick",void 0],[s,"click",void 0],[s,"keydown",{capture:!1}],[s,"keyup",void 0],[s,"wheel",{passive:!1}],[s,"contextmenu",void 0],[window,"blur",void 0]];for(const[t,e,s]of this._listeners)i.addEventListener(t,e,t===document?this.handleWindowEvent:this.handleEvent,s);}destroy(){for(const[t,e,s]of this._listeners)i.removeEventListener(t,e,t===document?this.handleWindowEvent:this.handleEvent,s);}_addDefaultHandlers(t){const e=this._map,s=e.getCanvasContainer();this._add("mapEvent",new ys(e,t));const a=e.boxZoom=new Ts(e,t);this._add("boxZoom",a),t.interactive&&t.boxZoom&&a.enable();const o=new Cs(e),r=new Ks(e);e.doubleClickZoom=new Xs(r,o),this._add("tapZoom",o),this._add("clickZoom",r),t.interactive&&t.doubleClickZoom&&e.doubleClickZoom.enable();const n=new Qs;this._add("tapDragZoom",n);const l=e.touchPitch=new js(e);this._add("touchPitch",l),t.interactive&&t.touchPitch&&e.touchPitch.enable(t.touchPitch);const h=As(t),c=Rs(t);e.dragRotate=new Js(t,h,c),this._add("mouseRotate",h,["mousePitch"]),this._add("mousePitch",c,["mouseRotate"]),t.interactive&&t.dragRotate&&e.dragRotate.enable();const u=(({enable:t,clickTolerance:e})=>{const s=new Ms({checkCorrectEvent:t=>0===i.mouseButton(t)&&!t.ctrlKey});return new Ps({clickTolerance:e,move:(t,e)=>({around:e,panDelta:e.sub(t)}),activateOnStart:!0,moveStateManager:s,enable:t,assignEvents:Ls})})(t),d=new ks(t,e);e.dragPan=new Ys(s,u,d),this._add("mousePan",u),this._add("touchPan",d,["touchZoom","touchRotate"]),t.interactive&&t.dragPan&&e.dragPan.enable(t.dragPan);const _=new Zs,p=new Ns;e.touchZoomRotate=new ta(s,p,_,n),this._add("touchRotate",_,["touchPan","touchZoom"]),this._add("touchZoom",p,["touchPan","touchRotate"]),t.interactive&&t.touchZoomRotate&&e.touchZoomRotate.enable(t.touchZoomRotate);const m=e.scrollZoom=new Hs(e,(()=>this._triggerRenderFrame()));this._add("scrollZoom",m,["mousePan"]),t.interactive&&t.scrollZoom&&e.scrollZoom.enable(t.scrollZoom);const f=e.keyboard=new qs(e);this._add("keyboard",f),t.interactive&&t.keyboard&&e.keyboard.enable(),this._add("blockableMapEvent",new bs(e));}_add(t,e,i){this._handlers.push({handlerName:t,handler:e,allowed:i}),this._handlersById[t]=e;}stop(t){if(!this._updatingCamera){for(const{handler:t}of this._handlers)t.reset();this._inertia.clear(),this._fireEvents({},{},t),this._changes=[];}}isActive(){for(const{handler:t}of this._handlers)if(t.isActive())return !0;return !1}isZooming(){return !!this._eventsInProgress.zoom||this._map.scrollZoom.isZooming()}isRotating(){return !!this._eventsInProgress.rotate}isMoving(){return Boolean(ea(this._eventsInProgress))||this.isZooming()}_blockedByActive(t,e,i){for(const s in t)if(s!==i&&(!e||e.indexOf(s)<0))return !0;return !1}_getMapTouches(t){const e=[];for(const i of t)this._el.contains(i.target)&&e.push(i);return e}mergeHandlerResult(e,i,s,a,o){if(!s)return;t.e(e,s);const r={handlerName:a,originalEvent:s.originalEvent||o};void 0!==s.zoomDelta&&(i.zoom=r),void 0!==s.panDelta&&(i.drag=r),void 0!==s.pitchDelta&&(i.pitch=r),void 0!==s.bearingDelta&&(i.rotate=r);}_applyChanges(){const e={},i={},s={};for(const[a,o,r]of this._changes)a.panDelta&&(e.panDelta=(e.panDelta||new t.P(0,0))._add(a.panDelta)),a.zoomDelta&&(e.zoomDelta=(e.zoomDelta||0)+a.zoomDelta),a.bearingDelta&&(e.bearingDelta=(e.bearingDelta||0)+a.bearingDelta),a.pitchDelta&&(e.pitchDelta=(e.pitchDelta||0)+a.pitchDelta),void 0!==a.around&&(e.around=a.around),void 0!==a.pinchAround&&(e.pinchAround=a.pinchAround),a.noInertia&&(e.noInertia=a.noInertia),t.e(i,o),t.e(s,r);this._updateMapTransform(e,i,s),this._changes=[];}_updateMapTransform(t,e,i){const s=this._map,a=s._getTransformForUpdate(),o=s.terrain;if(!(sa(t)||o&&this._terrainMovement))return this._fireEvents(e,i,!0);let{panDelta:r,zoomDelta:n,bearingDelta:l,pitchDelta:h,around:c,pinchAround:u}=t;void 0!==u&&(c=u),s._stop(!0),c=c||s.transform.centerPoint;const d=a.pointLocation(r?c.sub(r):c);l&&(a.bearing+=l),h&&(a.pitch+=h),n&&(a.zoom+=n),o?this._terrainMovement||!e.drag&&!e.zoom?e.drag&&this._terrainMovement?a.center=a.pointLocation(a.centerPoint.sub(r)):a.setLocationAtPoint(d,c):(this._terrainMovement=!0,this._map._elevationFreeze=!0,a.setLocationAtPoint(d,c),this._map.once("moveend",(()=>{this._map._elevationFreeze=!1,this._terrainMovement=!1,a.recalculateZoom(s.terrain);}))):a.setLocationAtPoint(d,c),s._applyUpdatedTransform(a),this._map._update(),t.noInertia||this._inertia.record(t),this._fireEvents(e,i,!0);}_fireEvents(e,i,s){const a=ea(this._eventsInProgress),o=ea(e),r={};for(const t in e){const{originalEvent:i}=e[t];this._eventsInProgress[t]||(r[`${t}start`]=i),this._eventsInProgress[t]=e[t];}!a&&o&&this._fireEvent("movestart",o.originalEvent);for(const t in r)this._fireEvent(t,r[t]);o&&this._fireEvent("move",o.originalEvent);for(const t in e){const{originalEvent:i}=e[t];this._fireEvent(t,i);}const n={};let l;for(const t in this._eventsInProgress){const{handlerName:e,originalEvent:s}=this._eventsInProgress[t];this._handlersById[e].isActive()||(delete this._eventsInProgress[t],l=i[e]||s,n[`${t}end`]=l);}for(const t in n)this._fireEvent(t,n[t]);const h=ea(this._eventsInProgress);if(s&&(a||o)&&!h){this._updatingCamera=!0;const e=this._inertia._onMoveEnd(this._map.dragPan._inertiaOptions),i=t=>0!==t&&-this._bearingSnap<t&&t<this._bearingSnap;!e||!e.essential&&t.h.prefersReducedMotion?(this._map.fire(new t.k("moveend",{originalEvent:l})),i(this._map.getBearing())&&this._map.resetNorth()):(i(e.bearing||this._map.getBearing())&&(e.bearing=0),e.freezeElevation=!0,this._map.easeTo(e,{originalEvent:l})),this._updatingCamera=!1;}}_fireEvent(e,i){this._map.fire(new t.k(e,i?{originalEvent:i}:{}));}_requestFrame(){return this._map.triggerRepaint(),this._map._renderTaskQueue.add((t=>{delete this._frameId,this.handleEvent(new ia("renderFrame",{timeStamp:t})),this._applyChanges();}))}_triggerRenderFrame(){void 0===this._frameId&&(this._frameId=this._requestFrame());}}class oa extends t.E{constructor(e,i){super(),this._renderFrameCallback=()=>{const e=Math.min((t.h.now()-this._easeStart)/this._easeOptions.duration,1);this._onEaseFrame(this._easeOptions.easing(e)),e<1?this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback):this.stop();},this._moving=!1,this._zooming=!1,this.transform=e,this._bearingSnap=i.bearingSnap,this.on("moveend",(()=>{delete this._requestedCameraState;}));}getCenter(){return new t.L(this.transform.center.lng,this.transform.center.lat)}setCenter(t,e){return this.jumpTo({center:t},e)}panBy(e,i,s){return e=t.P.convert(e).mult(-1),this.panTo(this.transform.center,t.e({offset:e},i),s)}panTo(e,i,s){return this.easeTo(t.e({center:e},i),s)}getZoom(){return this.transform.zoom}setZoom(t,e){return this.jumpTo({zoom:t},e),this}zoomTo(e,i,s){return this.easeTo(t.e({zoom:e},i),s)}zoomIn(t,e){return this.zoomTo(this.getZoom()+1,t,e),this}zoomOut(t,e){return this.zoomTo(this.getZoom()-1,t,e),this}getBearing(){return this.transform.bearing}setBearing(t,e){return this.jumpTo({bearing:t},e),this}getPadding(){return this.transform.padding}setPadding(t,e){return this.jumpTo({padding:t},e),this}rotateTo(e,i,s){return this.easeTo(t.e({bearing:e},i),s)}resetNorth(e,i){return this.rotateTo(0,t.e({duration:1e3},e),i),this}resetNorthPitch(e,i){return this.easeTo(t.e({bearing:0,pitch:0,duration:1e3},e),i),this}snapToNorth(t,e){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,e):this}getPitch(){return this.transform.pitch}setPitch(t,e){return this.jumpTo({pitch:t},e),this}cameraForBounds(t,e){t=L.convert(t);const i=e&&e.bearing||0;return this._cameraForBoxAndBearing(t.getNorthWest(),t.getSouthEast(),i,e)}_cameraForBoxAndBearing(e,i,s,a){const o={top:0,bottom:0,right:0,left:0};if("number"==typeof(a=t.e({padding:o,offset:[0,0],maxZoom:this.transform.maxZoom},a)).padding){const t=a.padding;a.padding={top:t,bottom:t,right:t,left:t};}a.padding=t.e(o,a.padding);const r=this.transform,n=r.padding,l=r.project(t.L.convert(e)),h=r.project(t.L.convert(i)),c=l.rotate(-s*Math.PI/180),u=h.rotate(-s*Math.PI/180),d=new t.P(Math.max(c.x,u.x),Math.max(c.y,u.y)),_=new t.P(Math.min(c.x,u.x),Math.min(c.y,u.y)),p=d.sub(_),m=(r.width-(n.left+n.right+a.padding.left+a.padding.right))/p.x,f=(r.height-(n.top+n.bottom+a.padding.top+a.padding.bottom))/p.y;if(f<0||m<0)return void t.w("Map cannot fit within canvas with the given bounds, padding, and/or offset.");const g=Math.min(r.scaleZoom(r.scale*Math.min(m,f)),a.maxZoom),v=t.P.convert(a.offset),x=new t.P((a.padding.left-a.padding.right)/2,(a.padding.top-a.padding.bottom)/2).rotate(s*Math.PI/180),y=v.add(x).mult(r.scale/r.zoomScale(g));return {center:r.unproject(l.add(h).div(2).sub(y)),zoom:g,bearing:s}}fitBounds(t,e,i){return this._fitInternal(this.cameraForBounds(t,e),e,i)}fitScreenCoordinates(e,i,s,a,o){return this._fitInternal(this._cameraForBoxAndBearing(this.transform.pointLocation(t.P.convert(e)),this.transform.pointLocation(t.P.convert(i)),s,a),a,o)}_fitInternal(e,i,s){return e?(delete(i=t.e(e,i)).padding,i.linear?this.easeTo(i,s):this.flyTo(i,s)):this}jumpTo(e,i){this.stop();const s=this._getTransformForUpdate();let a=!1,o=!1,r=!1;return "zoom"in e&&s.zoom!==+e.zoom&&(a=!0,s.zoom=+e.zoom),void 0!==e.center&&(s.center=t.L.convert(e.center)),"bearing"in e&&s.bearing!==+e.bearing&&(o=!0,s.bearing=+e.bearing),"pitch"in e&&s.pitch!==+e.pitch&&(r=!0,s.pitch=+e.pitch),null==e.padding||s.isPaddingEqual(e.padding)||(s.padding=e.padding),this._applyUpdatedTransform(s),this.fire(new t.k("movestart",i)).fire(new t.k("move",i)),a&&this.fire(new t.k("zoomstart",i)).fire(new t.k("zoom",i)).fire(new t.k("zoomend",i)),o&&this.fire(new t.k("rotatestart",i)).fire(new t.k("rotate",i)).fire(new t.k("rotateend",i)),r&&this.fire(new t.k("pitchstart",i)).fire(new t.k("pitch",i)).fire(new t.k("pitchend",i)),this.fire(new t.k("moveend",i))}calculateCameraOptionsFromTo(e,i,s,a=0){const o=t.U.fromLngLat(e,i),r=t.U.fromLngLat(s,a),n=r.x-o.x,l=r.y-o.y,h=r.z-o.z,c=Math.hypot(n,l,h);if(0===c)throw new Error("Can't calculate camera options with same From and To");const u=Math.hypot(n,l),d=this.transform.scaleZoom(this.transform.cameraToCenterDistance/c/this.transform.tileSize),_=180*Math.atan2(n,-l)/Math.PI;let p=180*Math.acos(u/c)/Math.PI;return p=h<0?90-p:90+p,{center:r.toLngLat(),zoom:d,pitch:p,bearing:_}}easeTo(e,i){this._stop(!1,e.easeId),(!1===(e=t.e({offset:[0,0],duration:500,easing:t.bb},e)).animate||!e.essential&&t.h.prefersReducedMotion)&&(e.duration=0);const s=this._getTransformForUpdate(),a=this.getZoom(),o=this.getBearing(),r=this.getPitch(),n=this.getPadding(),l="zoom"in e?+e.zoom:a,h="bearing"in e?this._normalizeBearing(e.bearing,o):o,c="pitch"in e?+e.pitch:r,u="padding"in e?e.padding:s.padding,d=t.P.convert(e.offset);let _=s.centerPoint.add(d);const p=s.pointLocation(_),m=t.L.convert(e.center||p);this._normalizeCenter(m);const f=s.project(p),g=s.project(m).sub(f),v=s.zoomScale(l-a);let x,y;e.around&&(x=t.L.convert(e.around),y=s.locationPoint(x));const b={moving:this._moving,zooming:this._zooming,rotating:this._rotating,pitching:this._pitching};return this._zooming=this._zooming||l!==a,this._rotating=this._rotating||o!==h,this._pitching=this._pitching||c!==r,this._padding=!s.isPaddingEqual(u),this._easeId=e.easeId,this._prepareEase(i,e.noMoveStart,b),this.terrain&&this._prepareElevation(m),this._ease((p=>{if(this._zooming&&(s.zoom=t.B.number(a,l,p)),this._rotating&&(s.bearing=t.B.number(o,h,p)),this._pitching&&(s.pitch=t.B.number(r,c,p)),this._padding&&(s.interpolatePadding(n,u,p),_=s.centerPoint.add(d)),this.terrain&&!e.freezeElevation&&this._updateElevation(p),x)s.setLocationAtPoint(x,y);else {const t=s.zoomScale(s.zoom-a),e=l>a?Math.min(2,v):Math.max(.5,v),i=Math.pow(e,1-p),o=s.unproject(f.add(g.mult(p*i)).mult(t));s.setLocationAtPoint(s.renderWorldCopies?o.wrap():o,_);}this._applyUpdatedTransform(s),this._fireMoveEvents(i);}),(t=>{this.terrain&&this._finalizeElevation(),this._afterEase(i,t);}),e),this}_prepareEase(e,i,s={}){this._moving=!0,i||s.moving||this.fire(new t.k("movestart",e)),this._zooming&&!s.zooming&&this.fire(new t.k("zoomstart",e)),this._rotating&&!s.rotating&&this.fire(new t.k("rotatestart",e)),this._pitching&&!s.pitching&&this.fire(new t.k("pitchstart",e));}_prepareElevation(t){this._elevationCenter=t,this._elevationStart=this.transform.elevation,this._elevationTarget=this.terrain.getElevationForLngLatZoom(t,this.transform.tileZoom),this._elevationFreeze=!0;}_updateElevation(e){this.transform._minEleveationForCurrentTile=this.terrain.getMinTileElevationForLngLatZoom(this._elevationCenter,this.transform.tileZoom);const i=this.terrain.getElevationForLngLatZoom(this._elevationCenter,this.transform.tileZoom);if(e<1&&i!==this._elevationTarget){const t=this._elevationTarget-this._elevationStart;this._elevationStart+=e*(t-(i-(t*e+this._elevationStart))/(1-e)),this._elevationTarget=i;}this.transform.elevation=t.B.number(this._elevationStart,this._elevationTarget,e);}_finalizeElevation(){this._elevationFreeze=!1,this.transform.recalculateZoom(this.terrain);}_getTransformForUpdate(){return this.transformCameraUpdate?(this._requestedCameraState||(this._requestedCameraState=this.transform.clone()),this._requestedCameraState):this.transform}_applyUpdatedTransform(t){if(!this.transformCameraUpdate)return;const e=t.clone(),{center:i,zoom:s,pitch:a,bearing:o,elevation:r}=this.transformCameraUpdate(e);i&&(e.center=i),void 0!==s&&(e.zoom=s),void 0!==a&&(e.pitch=a),void 0!==o&&(e.bearing=o),void 0!==r&&(e.elevation=r),this.transform.apply(e);}_fireMoveEvents(e){this.fire(new t.k("move",e)),this._zooming&&this.fire(new t.k("zoom",e)),this._rotating&&this.fire(new t.k("rotate",e)),this._pitching&&this.fire(new t.k("pitch",e));}_afterEase(e,i){if(this._easeId&&i&&this._easeId===i)return;delete this._easeId;const s=this._zooming,a=this._rotating,o=this._pitching;this._moving=!1,this._zooming=!1,this._rotating=!1,this._pitching=!1,this._padding=!1,s&&this.fire(new t.k("zoomend",e)),a&&this.fire(new t.k("rotateend",e)),o&&this.fire(new t.k("pitchend",e)),this.fire(new t.k("moveend",e));}flyTo(e,i){if(!e.essential&&t.h.prefersReducedMotion){const s=t.F(e,["center","zoom","bearing","pitch","around"]);return this.jumpTo(s,i)}this.stop(),e=t.e({offset:[0,0],speed:1.2,curve:1.42,easing:t.bb},e);const s=this._getTransformForUpdate(),a=this.getZoom(),o=this.getBearing(),r=this.getPitch(),n=this.getPadding(),l="zoom"in e?t.ad(+e.zoom,s.minZoom,s.maxZoom):a,h="bearing"in e?this._normalizeBearing(e.bearing,o):o,c="pitch"in e?+e.pitch:r,u="padding"in e?e.padding:s.padding,d=s.zoomScale(l-a),_=t.P.convert(e.offset);let p=s.centerPoint.add(_);const m=s.pointLocation(p),f=t.L.convert(e.center||m);this._normalizeCenter(f);const g=s.project(m),v=s.project(f).sub(g);let x=e.curve;const y=Math.max(s.width,s.height),b=y/d,w=v.mag();if("minZoom"in e){const i=t.ad(Math.min(e.minZoom,a,l),s.minZoom,s.maxZoom),o=y/s.zoomScale(i-a);x=Math.sqrt(o/w*2);}const T=x*x;function I(t){const e=(b*b-y*y+(t?-1:1)*T*T*w*w)/(2*(t?b:y)*T*w);return Math.log(Math.sqrt(e*e+1)-e)}function E(t){return (Math.exp(t)-Math.exp(-t))/2}function S(t){return (Math.exp(t)+Math.exp(-t))/2}const C=I(!1);let P=function(t){return S(C)/S(C+x*t)},D=function(t){return y*((S(C)*(E(e=C+x*t)/S(e))-E(C))/T)/w;var e;},M=(I(!0)-C)/x;if(Math.abs(w)<1e-6||!isFinite(M)){if(Math.abs(y-b)<1e-6)return this.easeTo(e,i);const t=b<y?-1:1;M=Math.abs(Math.log(b/y))/x,D=function(){return 0},P=function(e){return Math.exp(t*x*e)};}return e.duration="duration"in e?+e.duration:1e3*M/("screenSpeed"in e?+e.screenSpeed/x:+e.speed),e.maxDuration&&e.duration>e.maxDuration&&(e.duration=0),this._zooming=!0,this._rotating=o!==h,this._pitching=c!==r,this._padding=!s.isPaddingEqual(u),this._prepareEase(i,!1),this.terrain&&this._prepareElevation(f),this._ease((d=>{const m=d*M,x=1/P(m);s.zoom=1===d?l:a+s.scaleZoom(x),this._rotating&&(s.bearing=t.B.number(o,h,d)),this._pitching&&(s.pitch=t.B.number(r,c,d)),this._padding&&(s.interpolatePadding(n,u,d),p=s.centerPoint.add(_)),this.terrain&&!e.freezeElevation&&this._updateElevation(d);const y=1===d?f:s.unproject(g.add(v.mult(D(m))).mult(x));s.setLocationAtPoint(s.renderWorldCopies?y.wrap():y,p),this._applyUpdatedTransform(s),this._fireMoveEvents(i);}),(()=>{this.terrain&&this._finalizeElevation(),this._afterEase(i);}),e),this}isEasing(){return !!this._easeFrameId}stop(){return this._stop()}_stop(t,e){if(this._easeFrameId&&(this._cancelRenderFrame(this._easeFrameId),delete this._easeFrameId,delete this._onEaseFrame),this._onEaseEnd){const t=this._onEaseEnd;delete this._onEaseEnd,t.call(this,e);}if(!t){const t=this.handlers;t&&t.stop(!1);}return this}_ease(e,i,s){!1===s.animate||0===s.duration?(e(1),i()):(this._easeStart=t.h.now(),this._easeOptions=s,this._onEaseFrame=e,this._onEaseEnd=i,this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback));}_normalizeBearing(e,i){e=t.b5(e,-180,180);const s=Math.abs(e-i);return Math.abs(e-360-i)<s&&(e-=360),Math.abs(e+360-i)<s&&(e+=360),e}_normalizeCenter(t){const e=this.transform;if(!e.renderWorldCopies||e.lngRange)return;const i=t.lng-e.center.lng;t.lng+=i>180?-360:i<-180?360:0;}queryTerrainElevation(e){return this.terrain?this.terrain.getElevationForLngLatZoom(t.L.convert(e),this.transform.tileZoom)-this.transform.elevation:null}}class ra{constructor(t={}){this._toggleAttribution=()=>{this._container.classList.contains("maplibregl-compact")&&(this._container.classList.contains("maplibregl-compact-show")?(this._container.setAttribute("open",""),this._container.classList.remove("maplibregl-compact-show")):(this._container.classList.add("maplibregl-compact-show"),this._container.removeAttribute("open")));},this._updateData=t=>{!t||"metadata"!==t.sourceDataType&&"visibility"!==t.sourceDataType&&"style"!==t.dataType&&"terrain"!==t.type||this._updateAttributions();},this._updateCompact=()=>{this._map.getCanvasContainer().offsetWidth<=640||this._compact?!1===this._compact?this._container.setAttribute("open",""):this._container.classList.contains("maplibregl-compact")||this._container.classList.contains("maplibregl-attrib-empty")||(this._container.setAttribute("open",""),this._container.classList.add("maplibregl-compact","maplibregl-compact-show")):(this._container.setAttribute("open",""),this._container.classList.contains("maplibregl-compact")&&this._container.classList.remove("maplibregl-compact","maplibregl-compact-show"));},this._updateCompactMinimize=()=>{this._container.classList.contains("maplibregl-compact")&&this._container.classList.contains("maplibregl-compact-show")&&this._container.classList.remove("maplibregl-compact-show");},this.options=t;}getDefaultPosition(){return "bottom-right"}onAdd(t){return this._map=t,this._compact=this.options&&this.options.compact,this._container=i.create("details","maplibregl-ctrl maplibregl-ctrl-attrib"),this._compactButton=i.create("summary","maplibregl-ctrl-attrib-button",this._container),this._compactButton.addEventListener("click",this._toggleAttribution),this._setElementTitle(this._compactButton,"ToggleAttribution"),this._innerContainer=i.create("div","maplibregl-ctrl-attrib-inner",this._container),this._updateAttributions(),this._updateCompact(),this._map.on("styledata",this._updateData),this._map.on("sourcedata",this._updateData),this._map.on("terrain",this._updateData),this._map.on("resize",this._updateCompact),this._map.on("drag",this._updateCompactMinimize),this._container}onRemove(){i.remove(this._container),this._map.off("styledata",this._updateData),this._map.off("sourcedata",this._updateData),this._map.off("terrain",this._updateData),this._map.off("resize",this._updateCompact),this._map.off("drag",this._updateCompactMinimize),this._map=void 0,this._compact=void 0,this._attribHTML=void 0;}_setElementTitle(t,e){const i=this._map._getUIString(`AttributionControl.${e}`);t.title=i,t.setAttribute("aria-label",i);}_updateAttributions(){if(!this._map.style)return;let t=[];if(this.options.customAttribution&&(Array.isArray(this.options.customAttribution)?t=t.concat(this.options.customAttribution.map((t=>"string"!=typeof t?"":t))):"string"==typeof this.options.customAttribution&&t.push(this.options.customAttribution)),this._map.style.stylesheet){const t=this._map.style.stylesheet;this.styleOwner=t.owner,this.styleId=t.id;}const e=this._map.style.sourceCaches;for(const i in e){const s=e[i];if(s.used||s.usedForTerrain){const e=s.getSource();e.attribution&&t.indexOf(e.attribution)<0&&t.push(e.attribution);}}t=t.filter((t=>String(t).trim())),t.sort(((t,e)=>t.length-e.length)),t=t.filter(((e,i)=>{for(let s=i+1;s<t.length;s++)if(t[s].indexOf(e)>=0)return !1;return !0}));const i=t.join(" | ");i!==this._attribHTML&&(this._attribHTML=i,t.length?(this._innerContainer.innerHTML=i,this._container.classList.remove("maplibregl-attrib-empty")):this._container.classList.add("maplibregl-attrib-empty"),this._updateCompact(),this._editLink=null);}}class na{constructor(t={}){this._updateCompact=()=>{const t=this._container.children;if(t.length){const e=t[0];this._map.getCanvasContainer().offsetWidth<=640||this._compact?!1!==this._compact&&e.classList.add("maplibregl-compact"):e.classList.remove("maplibregl-compact");}},this.options=t;}getDefaultPosition(){return "bottom-left"}onAdd(t){this._map=t,this._compact=this.options&&this.options.compact,this._container=i.create("div","maplibregl-ctrl");const e=i.create("a","maplibregl-ctrl-logo");return e.target="_blank",e.rel="noopener nofollow",e.href="https://maplibre.org/",e.setAttribute("aria-label",this._map._getUIString("LogoControl.Title")),e.setAttribute("rel","noopener nofollow"),this._container.appendChild(e),this._container.style.display="block",this._map.on("resize",this._updateCompact),this._updateCompact(),this._container}onRemove(){i.remove(this._container),this._map.off("resize",this._updateCompact),this._map=void 0,this._compact=void 0;}}class la{constructor(){this._queue=[],this._id=0,this._cleared=!1,this._currentlyRunning=!1;}add(t){const e=++this._id;return this._queue.push({callback:t,id:e,cancelled:!1}),e}remove(t){const e=this._currentlyRunning,i=e?this._queue.concat(e):this._queue;for(const e of i)if(e.id===t)return void(e.cancelled=!0)}run(t=0){if(this._currentlyRunning)throw new Error("Attempting to run(), but is already running.");const e=this._currentlyRunning=this._queue;this._queue=[];for(const i of e)if(!i.cancelled&&(i.callback(t),this._cleared))break;this._cleared=!1,this._currentlyRunning=!1;}clear(){this._currentlyRunning&&(this._cleared=!0),this._queue=[];}}const ha={"AttributionControl.ToggleAttribution":"Toggle attribution","AttributionControl.MapFeedback":"Map feedback","FullscreenControl.Enter":"Enter fullscreen","FullscreenControl.Exit":"Exit fullscreen","GeolocateControl.FindMyLocation":"Find my location","GeolocateControl.LocationNotAvailable":"Location not available","LogoControl.Title":"Mapbox logo","NavigationControl.ResetBearing":"Reset bearing to north","NavigationControl.ZoomIn":"Zoom in","NavigationControl.ZoomOut":"Zoom out","ScaleControl.Feet":"ft","ScaleControl.Meters":"m","ScaleControl.Kilometers":"km","ScaleControl.Miles":"mi","ScaleControl.NauticalMiles":"nm","TerrainControl.enableTerrain":"Enable terrain","TerrainControl.disableTerrain":"Disable terrain"};var ca=t.Q([{name:"a_pos3d",type:"Int16",components:3}]);class ua extends t.E{constructor(t){super(),this.sourceCache=t,this._tiles={},this._renderableTilesKeys=[],this._sourceTileCache={},this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.deltaZoom=1,t.usedForTerrain=!0,t.tileSize=this.tileSize*2**this.deltaZoom;}destruct(){this.sourceCache.usedForTerrain=!1,this.sourceCache.tileSize=null;}update(e,i){this.sourceCache.update(e,i),this._renderableTilesKeys=[];const s={};for(const a of e.coveringTiles({tileSize:this.tileSize,minzoom:this.minzoom,maxzoom:this.maxzoom,reparseOverscaled:!1,terrain:i}))s[a.key]=!0,this._renderableTilesKeys.push(a.key),this._tiles[a.key]||(a.posMatrix=new Float64Array(16),t.aS(a.posMatrix,0,t.N,0,t.N,0,1),this._tiles[a.key]=new W(a,this.tileSize));for(const t in this._tiles)s[t]||delete this._tiles[t];}freeRtt(t){for(const e in this._tiles){const i=this._tiles[e];(!t||i.tileID.equals(t)||i.tileID.isChildOf(t)||t.isChildOf(i.tileID))&&(i.rtt=[]);}}getRenderableTiles(){return this._renderableTilesKeys.map((t=>this.getTileByID(t)))}getTileByID(t){return this._tiles[t]}getTerrainCoords(e){const i={};for(const s of this._renderableTilesKeys){const a=this._tiles[s].tileID;if(a.canonical.equals(e.canonical)){const a=e.clone();a.posMatrix=new Float64Array(16),t.aS(a.posMatrix,0,t.N,0,t.N,0,1),i[s]=a;}else if(a.canonical.isChildOf(e.canonical)){const o=e.clone();o.posMatrix=new Float64Array(16);const r=a.canonical.z-e.canonical.z,n=a.canonical.x-(a.canonical.x>>r<<r),l=a.canonical.y-(a.canonical.y>>r<<r),h=t.N>>r;t.aS(o.posMatrix,0,h,0,h,0,1),t.$(o.posMatrix,o.posMatrix,[-n*h,-l*h,0]),i[s]=o;}else if(e.canonical.isChildOf(a.canonical)){const o=e.clone();o.posMatrix=new Float64Array(16);const r=e.canonical.z-a.canonical.z,n=e.canonical.x-(e.canonical.x>>r<<r),l=e.canonical.y-(e.canonical.y>>r<<r),h=t.N>>r;t.aS(o.posMatrix,0,t.N,0,t.N,0,1),t.$(o.posMatrix,o.posMatrix,[n*h,l*h,0]),t.a0(o.posMatrix,o.posMatrix,[1/2**r,1/2**r,0]),i[s]=o;}}return i}getSourceTile(t,e){const i=this.sourceCache._source;let s=t.overscaledZ-this.deltaZoom;if(s>i.maxzoom&&(s=i.maxzoom),s<i.minzoom)return null;this._sourceTileCache[t.key]||(this._sourceTileCache[t.key]=t.scaledTo(s).key);let a=this.sourceCache.getTileByID(this._sourceTileCache[t.key]);if((!a||!a.dem)&&e)for(;s>=i.minzoom&&(!a||!a.dem);)a=this.sourceCache.getTileByID(t.scaledTo(s--).key);return a}tilesAfterTime(t=Date.now()){return Object.values(this._tiles).filter((e=>e.timeAdded>=t))}}class da{constructor(t,e,i){this.painter=t,this.sourceCache=new ua(e),this.options=i,this.exaggeration="number"==typeof i.exaggeration?i.exaggeration:1,this.qualityFactor=2,this.meshSize=128,this._demMatrixCache={},this.coordsIndex=[],this._coordsTextureSize=1024;}getDEMElevation(e,i,s,a=t.N){var o;if(!(i>=0&&i<a&&s>=0&&s<a))return 0;const r=this.getTerrainData(e),n=null===(o=r.tile)||void 0===o?void 0:o.dem;if(!n)return 0;const l=function(t,e,i){var s=e[0],a=e[1];return t[0]=i[0]*s+i[4]*a+i[12],t[1]=i[1]*s+i[5]*a+i[13],t}([],[i/a*t.N,s/a*t.N],r.u_terrain_matrix),h=[l[0]*n.dim,l[1]*n.dim],c=Math.floor(h[0]),u=Math.floor(h[1]),d=h[0]-c,_=h[1]-u;return n.get(c,u)*(1-d)*(1-_)+n.get(c+1,u)*d*(1-_)+n.get(c,u+1)*(1-d)*_+n.get(c+1,u+1)*d*_}getElevationForLngLatZoom(e,i){const{tileID:s,mercatorX:a,mercatorY:o}=this._getOverscaledTileIDFromLngLatZoom(e,i);return this.getElevation(s,a%t.N,o%t.N,t.N)}getElevation(e,i,s,a=t.N){return this.getDEMElevation(e,i,s,a)*this.exaggeration}getTerrainData(e){if(!this._emptyDemTexture){const e=this.painter.context,i=new t.R({width:1,height:1},new Uint8Array(4));this._emptyDepthTexture=new x(e,i,e.gl.RGBA,{premultiply:!1}),this._emptyDemUnpack=[0,0,0,0],this._emptyDemTexture=new x(e,new t.R({width:1,height:1}),e.gl.RGBA,{premultiply:!1}),this._emptyDemTexture.bind(e.gl.NEAREST,e.gl.CLAMP_TO_EDGE),this._emptyDemMatrix=t.ao([]);}const i=this.sourceCache.getSourceTile(e,!0);if(i&&i.dem&&(!i.demTexture||i.needsTerrainPrepare)){const t=this.painter.context;i.demTexture=this.painter.getTileTexture(i.dem.stride),i.demTexture?i.demTexture.update(i.dem.getPixels(),{premultiply:!1}):i.demTexture=new x(t,i.dem.getPixels(),t.gl.RGBA,{premultiply:!1}),i.demTexture.bind(t.gl.NEAREST,t.gl.CLAMP_TO_EDGE),i.needsTerrainPrepare=!1;}const s=i&&i+i.tileID.key+e.key;if(s&&!this._demMatrixCache[s]){const s=this.sourceCache.sourceCache._source.maxzoom;let a=e.canonical.z-i.tileID.canonical.z;e.overscaledZ>e.canonical.z&&(e.canonical.z>=s?a=e.canonical.z-s:t.w("cannot calculate elevation if elevation maxzoom > source.maxzoom"));const o=e.canonical.x-(e.canonical.x>>a<<a),r=e.canonical.y-(e.canonical.y>>a<<a),n=t.bc(new Float64Array(16),[1/(t.N<<a),1/(t.N<<a),0]);t.$(n,n,[o*t.N,r*t.N,0]),this._demMatrixCache[e.key]={matrix:n,coord:e};}return {u_depth:2,u_terrain:3,u_terrain_dim:i&&i.dem&&i.dem.dim||1,u_terrain_matrix:s?this._demMatrixCache[e.key].matrix:this._emptyDemMatrix,u_terrain_unpack:i&&i.dem&&i.dem.getUnpackVector()||this._emptyDemUnpack,u_terrain_exaggeration:this.exaggeration,texture:(i&&i.demTexture||this._emptyDemTexture).texture,depthTexture:(this._fboDepthTexture||this._emptyDepthTexture).texture,tile:i}}getFramebuffer(t){const e=this.painter,i=e.width/devicePixelRatio,s=e.height/devicePixelRatio;return !this._fbo||this._fbo.width===i&&this._fbo.height===s||(this._fbo.destroy(),this._fboCoordsTexture.destroy(),this._fboDepthTexture.destroy(),delete this._fbo,delete this._fboDepthTexture,delete this._fboCoordsTexture),this._fboCoordsTexture||(this._fboCoordsTexture=new x(e.context,{width:i,height:s,data:null},e.context.gl.RGBA,{premultiply:!1}),this._fboCoordsTexture.bind(e.context.gl.NEAREST,e.context.gl.CLAMP_TO_EDGE)),this._fboDepthTexture||(this._fboDepthTexture=new x(e.context,{width:i,height:s,data:null},e.context.gl.RGBA,{premultiply:!1}),this._fboDepthTexture.bind(e.context.gl.NEAREST,e.context.gl.CLAMP_TO_EDGE)),this._fbo||(this._fbo=e.context.createFramebuffer(i,s,!0,!1),this._fbo.depthAttachment.set(e.context.createRenderbuffer(e.context.gl.DEPTH_COMPONENT16,i,s))),this._fbo.colorAttachment.set("coords"===t?this._fboCoordsTexture.texture:this._fboDepthTexture.texture),this._fbo}getCoordsTexture(){const e=this.painter.context;if(this._coordsTexture)return this._coordsTexture;const i=new Uint8Array(this._coordsTextureSize*this._coordsTextureSize*4);for(let t=0,e=0;t<this._coordsTextureSize;t++)for(let s=0;s<this._coordsTextureSize;s++,e+=4)i[e+0]=255&s,i[e+1]=255&t,i[e+2]=s>>8<<4|t>>8,i[e+3]=0;const s=new t.R({width:this._coordsTextureSize,height:this._coordsTextureSize},new Uint8Array(i.buffer)),a=new x(e,s,e.gl.RGBA,{premultiply:!1});return a.bind(e.gl.NEAREST,e.gl.CLAMP_TO_EDGE),this._coordsTexture=a,a}pointCoordinate(e){const i=new Uint8Array(4),s=this.painter.context,a=s.gl;s.bindFramebuffer.set(this.getFramebuffer("coords").framebuffer),a.readPixels(e.x,this.painter.height/devicePixelRatio-e.y-1,1,1,a.RGBA,a.UNSIGNED_BYTE,i),s.bindFramebuffer.set(null);const o=i[0]+(i[2]>>4<<8),r=i[1]+((15&i[2])<<8),n=this.coordsIndex[255-i[3]],l=n&&this.sourceCache.getTileByID(n);if(!l)return null;const h=this._coordsTextureSize,c=(1<<l.tileID.canonical.z)*h;return new t.U((l.tileID.canonical.x*h+o)/c,(l.tileID.canonical.y*h+r)/c,this.getElevation(l.tileID,o,r,h))}getTerrainMesh(){if(this._mesh)return this._mesh;const e=this.painter.context,i=new t.bd,s=new t.b0,a=this.meshSize,o=t.N/a,r=a*a;for(let t=0;t<=a;t++)for(let e=0;e<=a;e++)i.emplaceBack(e*o,t*o,0);for(let t=0;t<r;t+=a+1)for(let e=0;e<a;e++)s.emplaceBack(e+t,a+e+t+1,a+e+t+2),s.emplaceBack(e+t,a+e+t+2,e+t+1);const n=i.length,l=n+2*(a+1);for(const e of [0,1])for(let s=0;s<=a;s++)for(const a of [0,1])i.emplaceBack(s*o,e*t.N,a);for(let t=0;t<2*a;t+=2)s.emplaceBack(l+t,l+t+1,l+t+3),s.emplaceBack(l+t,l+t+3,l+t+2),s.emplaceBack(n+t,n+t+3,n+t+1),s.emplaceBack(n+t,n+t+2,n+t+3);const h=i.length,c=h+2*(a+1);for(const e of [0,1])for(let s=0;s<=a;s++)for(const a of [0,1])i.emplaceBack(e*t.N,s*o,a);for(let t=0;t<2*a;t+=2)s.emplaceBack(h+t,h+t+1,h+t+3),s.emplaceBack(h+t,h+t+3,h+t+2),s.emplaceBack(c+t,c+t+3,c+t+1),s.emplaceBack(c+t,c+t+2,c+t+3);return this._mesh={indexBuffer:e.createIndexBuffer(s),vertexBuffer:e.createVertexBuffer(i,ca.members),segments:t.S.simpleSegment(0,0,i.length,s.length)},this._mesh}getMeshFrameDelta(e){return 2*Math.PI*t.be/Math.pow(2,e)/5}getMinTileElevationForLngLatZoom(t,e){var i;const{tileID:s}=this._getOverscaledTileIDFromLngLatZoom(t,e);return null!==(i=this.getMinMaxElevation(s).minElevation)&&void 0!==i?i:0}getMinMaxElevation(t){const e=this.getTerrainData(t).tile,i={minElevation:null,maxElevation:null};return e&&e.dem&&(i.minElevation=e.dem.min*this.exaggeration,i.maxElevation=e.dem.max*this.exaggeration),i}_getOverscaledTileIDFromLngLatZoom(e,i){const s=t.U.fromLngLat(e.wrap()),a=(1<<i)*t.N,o=s.x*a,r=s.y*a,n=Math.floor(o/t.N),l=Math.floor(r/t.N);return {tileID:new t.O(i,0,i,n,l),mercatorX:o,mercatorY:r}}}class _a{constructor(t,e,i){this._context=t,this._size=e,this._tileSize=i,this._objects=[],this._recentlyUsed=[],this._stamp=0;}destruct(){for(const t of this._objects)t.texture.destroy(),t.fbo.destroy();}_createObject(t){const e=this._context.createFramebuffer(this._tileSize,this._tileSize,!0,!0),i=new x(this._context,{width:this._tileSize,height:this._tileSize,data:null},this._context.gl.RGBA);return i.bind(this._context.gl.LINEAR,this._context.gl.CLAMP_TO_EDGE),e.depthAttachment.set(this._context.createRenderbuffer(this._context.gl.DEPTH_STENCIL,this._tileSize,this._tileSize)),e.colorAttachment.set(i.texture),{id:t,fbo:e,texture:i,stamp:-1,inUse:!1}}getObjectForId(t){return this._objects[t]}useObject(t){t.inUse=!0,this._recentlyUsed=this._recentlyUsed.filter((e=>t.id!==e)),this._recentlyUsed.push(t.id);}stampObject(t){t.stamp=++this._stamp;}getOrCreateFreeObject(){for(const t of this._recentlyUsed)if(!this._objects[t].inUse)return this._objects[t];if(this._objects.length>=this._size)throw new Error("No free RenderPool available, call freeAllObjects() required!");const t=this._createObject(this._objects.length);return this._objects.push(t),t}freeObject(t){t.inUse=!1;}freeAllObjects(){for(const t of this._objects)this.freeObject(t);}isFull(){return !(this._objects.length<this._size)&&!1===this._objects.some((t=>!t.inUse))}}const pa={background:!0,fill:!0,line:!0,raster:!0,hillshade:!0};class ma{constructor(t,e){this.painter=t,this.terrain=e,this.pool=new _a(t.context,30,e.sourceCache.tileSize*e.qualityFactor);}destruct(){this.pool.destruct();}getTexture(t){return this.pool.getObjectForId(t.rtt[this._stacks.length-1].id).texture}prepareForRender(t,e){this._stacks=[],this._prevType=null,this._rttTiles=[],this._renderableTiles=this.terrain.sourceCache.getRenderableTiles(),this._renderableLayerIds=t._order.filter((i=>!t._layers[i].isHidden(e))),this._coordsDescendingInv={};for(const e in t.sourceCaches){this._coordsDescendingInv[e]={};const i=t.sourceCaches[e].getVisibleCoordinates();for(const t of i){const i=this.terrain.sourceCache.getTerrainCoords(t);for(const t in i)this._coordsDescendingInv[e][t]||(this._coordsDescendingInv[e][t]=[]),this._coordsDescendingInv[e][t].push(i[t]);}}this._coordsDescendingInvStr={};for(const e of t._order){const i=t._layers[e],s=i.source;if(pa[i.type]&&!this._coordsDescendingInvStr[s]){this._coordsDescendingInvStr[s]={};for(const t in this._coordsDescendingInv[s])this._coordsDescendingInvStr[s][t]=this._coordsDescendingInv[s][t].map((t=>t.key)).sort().join();}}for(const t of this._renderableTiles)for(const e in this._coordsDescendingInvStr){const i=this._coordsDescendingInvStr[e][t.tileID.key];i&&i!==t.rttCoords[e]&&(t.rtt=[]);}}renderLayer(e){if(e.isHidden(this.painter.transform.zoom))return !1;const i=e.type,s=this.painter,a=this._renderableLayerIds[this._renderableLayerIds.length-1]===e.id;if(pa[i]&&(this._prevType&&pa[this._prevType]||this._stacks.push([]),this._prevType=i,this._stacks[this._stacks.length-1].push(e.id),!a))return !0;if(pa[this._prevType]||pa[i]&&a){this._prevType=i;const e=this._stacks.length-1,a=this._stacks[e]||[];for(const i of this._renderableTiles){if(this.pool.isFull()&&(es(this.painter,this.terrain,this._rttTiles),this._rttTiles=[],this.pool.freeAllObjects()),this._rttTiles.push(i),i.rtt[e]){const t=this.pool.getObjectForId(i.rtt[e].id);if(t.stamp===i.rtt[e].stamp){this.pool.useObject(t);continue}}const o=this.pool.getOrCreateFreeObject();this.pool.useObject(o),this.pool.stampObject(o),i.rtt[e]={id:o.id,stamp:o.stamp},s.context.bindFramebuffer.set(o.fbo.framebuffer),s.context.clear({color:t.aT.transparent,stencil:0}),s.currentStencilSource=void 0;for(let t=0;t<a.length;t++){const e=s.style._layers[a[t]],r=e.source?this._coordsDescendingInv[e.source][i.tileID.key]:[i.tileID];s.context.viewport.set([0,0,o.fbo.width,o.fbo.height]),s._renderTileClippingMasks(e,r),s.renderLayer(s,s.style.sourceCaches[e.source],e,r),e.source&&(i.rttCoords[e.source]=this._coordsDescendingInvStr[e.source][i.tileID.key]);}}return es(this.painter,this.terrain,this._rttTiles),this._rttTiles=[],this.pool.freeAllObjects(),pa[i]}return !1}}const fa=e,ga={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:-2,maxZoom:22,minPitch:0,maxPitch:60,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,cooperativeGestures:void 0,bearingSnap:7,clickTolerance:3,pitchWithRotate:!0,hash:!1,attributionControl:!0,maplibreLogo:!1,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null,maxTileCacheZoomLevels:t.c.MAX_TILE_CACHE_ZOOM_LEVELS,localIdeographFontFamily:"sans-serif",transformRequest:null,transformCameraUpdate:null,fadeDuration:300,crossSourceCollisions:!0,validateStyle:!0,maxCanvasSize:[4096,4096]},va=t=>{t.touchstart=t.dragStart,t.touchmoveWindow=t.dragMove,t.touchend=t.dragEnd;},xa={showCompass:!0,showZoom:!0,visualizePitch:!1};class ya{constructor(e,s,a=!1){this.mousedown=e=>{this.startMouse(t.e({},e,{ctrlKey:!0,preventDefault:()=>e.preventDefault()}),i.mousePos(this.element,e)),i.addEventListener(window,"mousemove",this.mousemove),i.addEventListener(window,"mouseup",this.mouseup);},this.mousemove=t=>{this.moveMouse(t,i.mousePos(this.element,t));},this.mouseup=t=>{this.mouseRotate.dragEnd(t),this.mousePitch&&this.mousePitch.dragEnd(t),this.offTemp();},this.touchstart=t=>{1!==t.targetTouches.length?this.reset():(this._startPos=this._lastPos=i.touchPos(this.element,t.targetTouches)[0],this.startTouch(t,this._startPos),i.addEventListener(window,"touchmove",this.touchmove,{passive:!1}),i.addEventListener(window,"touchend",this.touchend));},this.touchmove=t=>{1!==t.targetTouches.length?this.reset():(this._lastPos=i.touchPos(this.element,t.targetTouches)[0],this.moveTouch(t,this._lastPos));},this.touchend=t=>{0===t.targetTouches.length&&this._startPos&&this._lastPos&&this._startPos.dist(this._lastPos)<this._clickTolerance&&this.element.click(),delete this._startPos,delete this._lastPos,this.offTemp();},this.reset=()=>{this.mouseRotate.reset(),this.mousePitch&&this.mousePitch.reset(),this.touchRotate.reset(),this.touchPitch&&this.touchPitch.reset(),delete this._startPos,delete this._lastPos,this.offTemp();},this._clickTolerance=10;const o=e.dragRotate._mouseRotate.getClickTolerance(),r=e.dragRotate._mousePitch.getClickTolerance();this.element=s,this.mouseRotate=As({clickTolerance:o,enable:!0}),this.touchRotate=(({enable:t,clickTolerance:e,bearingDegreesPerPixelMoved:i=.8})=>{const s=new zs;return new Ps({clickTolerance:e,move:(t,e)=>({bearingDelta:(e.x-t.x)*i}),moveStateManager:s,enable:t,assignEvents:va})})({clickTolerance:o,enable:!0}),this.map=e,a&&(this.mousePitch=Rs({clickTolerance:r,enable:!0}),this.touchPitch=(({enable:t,clickTolerance:e,pitchDegreesPerPixelMoved:i=-.5})=>{const s=new zs;return new Ps({clickTolerance:e,move:(t,e)=>({pitchDelta:(e.y-t.y)*i}),moveStateManager:s,enable:t,assignEvents:va})})({clickTolerance:r,enable:!0})),i.addEventListener(s,"mousedown",this.mousedown),i.addEventListener(s,"touchstart",this.touchstart,{passive:!1}),i.addEventListener(s,"touchcancel",this.reset);}startMouse(t,e){this.mouseRotate.dragStart(t,e),this.mousePitch&&this.mousePitch.dragStart(t,e),i.disableDrag();}startTouch(t,e){this.touchRotate.dragStart(t,e),this.touchPitch&&this.touchPitch.dragStart(t,e),i.disableDrag();}moveMouse(t,e){const i=this.map,{bearingDelta:s}=this.mouseRotate.dragMove(t,e)||{};if(s&&i.setBearing(i.getBearing()+s),this.mousePitch){const{pitchDelta:s}=this.mousePitch.dragMove(t,e)||{};s&&i.setPitch(i.getPitch()+s);}}moveTouch(t,e){const i=this.map,{bearingDelta:s}=this.touchRotate.dragMove(t,e)||{};if(s&&i.setBearing(i.getBearing()+s),this.touchPitch){const{pitchDelta:s}=this.touchPitch.dragMove(t,e)||{};s&&i.setPitch(i.getPitch()+s);}}off(){const t=this.element;i.removeEventListener(t,"mousedown",this.mousedown),i.removeEventListener(t,"touchstart",this.touchstart,{passive:!1}),i.removeEventListener(window,"touchmove",this.touchmove,{passive:!1}),i.removeEventListener(window,"touchend",this.touchend),i.removeEventListener(t,"touchcancel",this.reset),this.offTemp();}offTemp(){i.enableDrag(),i.removeEventListener(window,"mousemove",this.mousemove),i.removeEventListener(window,"mouseup",this.mouseup),i.removeEventListener(window,"touchmove",this.touchmove,{passive:!1}),i.removeEventListener(window,"touchend",this.touchend);}}let ba;function wa(e,i,s){if(e=new t.L(e.lng,e.lat),i){const a=new t.L(e.lng-360,e.lat),o=new t.L(e.lng+360,e.lat),r=s.locationPoint(e).distSqr(i);s.locationPoint(a).distSqr(i)<r?e=a:s.locationPoint(o).distSqr(i)<r&&(e=o);}for(;Math.abs(e.lng-s.center.lng)>180;){const t=s.locationPoint(e);if(t.x>=0&&t.y>=0&&t.x<=s.width&&t.y<=s.height)break;e.lng>s.center.lng?e.lng-=360:e.lng+=360;}return e}const Ta={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"};function Ia(t,e,i){const s=t.classList;for(const t in Ta)s.remove(`maplibregl-${i}-anchor-${t}`);s.add(`maplibregl-${i}-anchor-${e}`);}class Ea extends t.E{constructor(e){if(super(),this._onKeyPress=t=>{const e=t.code,i=t.charCode||t.keyCode;"Space"!==e&&"Enter"!==e&&32!==i&&13!==i||this.togglePopup();},this._onMapClick=t=>{const e=t.originalEvent.target,i=this._element;this._popup&&(e===i||i.contains(e))&&this.togglePopup();},this._update=t=>{if(!this._map)return;const e=this._map.loaded()&&!this._map.isMoving();("terrain"===(null==t?void 0:t.type)||"render"===(null==t?void 0:t.type)&&!e)&&this._map.once("render",this._update),this._map.transform.renderWorldCopies&&(this._lngLat=wa(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset);let s="";"viewport"===this._rotationAlignment||"auto"===this._rotationAlignment?s=`rotateZ(${this._rotation}deg)`:"map"===this._rotationAlignment&&(s=`rotateZ(${this._rotation-this._map.getBearing()}deg)`);let a="";"viewport"===this._pitchAlignment||"auto"===this._pitchAlignment?a="rotateX(0deg)":"map"===this._pitchAlignment&&(a=`rotateX(${this._map.getPitch()}deg)`),t&&"moveend"!==t.type||(this._pos=this._pos.round()),i.setTransform(this._element,`${Ta[this._anchor]} translate(${this._pos.x}px, ${this._pos.y}px) ${a} ${s}`),this._map.terrain&&!this._opacityTimeout&&(this._opacityTimeout=setTimeout((()=>{const t=this._map.unproject(this._pos),e=40075016.686*Math.abs(Math.cos(this._lngLat.lat*Math.PI/180))/Math.pow(2,this._map.transform.tileZoom+8);this._element.style.opacity=t.distanceTo(this._lngLat)>20*e?"0.2":"1.0",this._opacityTimeout=null;}),100));},this._onMove=e=>{if(!this._isDragging){const t=this._clickTolerance||this._map._clickTolerance;this._isDragging=e.point.dist(this._pointerdownPos)>=t;}this._isDragging&&(this._pos=e.point.sub(this._positionDelta),this._lngLat=this._map.unproject(this._pos),this.setLngLat(this._lngLat),this._element.style.pointerEvents="none","pending"===this._state&&(this._state="active",this.fire(new t.k("dragstart"))),this.fire(new t.k("drag")));},this._onUp=()=>{this._element.style.pointerEvents="auto",this._positionDelta=null,this._pointerdownPos=null,this._isDragging=!1,this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),"active"===this._state&&this.fire(new t.k("dragend")),this._state="inactive";},this._addDragHandler=t=>{this._element.contains(t.originalEvent.target)&&(t.preventDefault(),this._positionDelta=t.point.sub(this._pos).add(this._offset),this._pointerdownPos=t.point,this._state="pending",this._map.on("mousemove",this._onMove),this._map.on("touchmove",this._onMove),this._map.once("mouseup",this._onUp),this._map.once("touchend",this._onUp));},this._anchor=e&&e.anchor||"center",this._color=e&&e.color||"#3FB1CE",this._scale=e&&e.scale||1,this._draggable=e&&e.draggable||!1,this._clickTolerance=e&&e.clickTolerance||0,this._isDragging=!1,this._state="inactive",this._rotation=e&&e.rotation||0,this._rotationAlignment=e&&e.rotationAlignment||"auto",this._pitchAlignment=e&&e.pitchAlignment&&"auto"!==e.pitchAlignment?e.pitchAlignment:this._rotationAlignment,e&&e.element)this._element=e.element,this._offset=t.P.convert(e&&e.offset||[0,0]);else {this._defaultMarker=!0,this._element=i.create("div"),this._element.setAttribute("aria-label","Map marker");const s=i.createNS("http://www.w3.org/2000/svg","svg"),a=41,o=27;s.setAttributeNS(null,"display","block"),s.setAttributeNS(null,"height",`${a}px`),s.setAttributeNS(null,"width",`${o}px`),s.setAttributeNS(null,"viewBox",`0 0 ${o} ${a}`);const r=i.createNS("http://www.w3.org/2000/svg","g");r.setAttributeNS(null,"stroke","none"),r.setAttributeNS(null,"stroke-width","1"),r.setAttributeNS(null,"fill","none"),r.setAttributeNS(null,"fill-rule","evenodd");const n=i.createNS("http://www.w3.org/2000/svg","g");n.setAttributeNS(null,"fill-rule","nonzero");const l=i.createNS("http://www.w3.org/2000/svg","g");l.setAttributeNS(null,"transform","translate(3.0, 29.0)"),l.setAttributeNS(null,"fill","#000000");const h=[{rx:"10.5",ry:"5.25002273"},{rx:"10.5",ry:"5.25002273"},{rx:"9.5",ry:"4.77275007"},{rx:"8.5",ry:"4.29549936"},{rx:"7.5",ry:"3.81822308"},{rx:"6.5",ry:"3.34094679"},{rx:"5.5",ry:"2.86367051"},{rx:"4.5",ry:"2.38636864"}];for(const t of h){const e=i.createNS("http://www.w3.org/2000/svg","ellipse");e.setAttributeNS(null,"opacity","0.04"),e.setAttributeNS(null,"cx","10.5"),e.setAttributeNS(null,"cy","5.80029008"),e.setAttributeNS(null,"rx",t.rx),e.setAttributeNS(null,"ry",t.ry),l.appendChild(e);}const c=i.createNS("http://www.w3.org/2000/svg","g");c.setAttributeNS(null,"fill",this._color);const u=i.createNS("http://www.w3.org/2000/svg","path");u.setAttributeNS(null,"d","M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"),c.appendChild(u);const d=i.createNS("http://www.w3.org/2000/svg","g");d.setAttributeNS(null,"opacity","0.25"),d.setAttributeNS(null,"fill","#000000");const _=i.createNS("http://www.w3.org/2000/svg","path");_.setAttributeNS(null,"d","M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"),d.appendChild(_);const p=i.createNS("http://www.w3.org/2000/svg","g");p.setAttributeNS(null,"transform","translate(6.0, 7.0)"),p.setAttributeNS(null,"fill","#FFFFFF");const m=i.createNS("http://www.w3.org/2000/svg","g");m.setAttributeNS(null,"transform","translate(8.0, 8.0)");const f=i.createNS("http://www.w3.org/2000/svg","circle");f.setAttributeNS(null,"fill","#000000"),f.setAttributeNS(null,"opacity","0.25"),f.setAttributeNS(null,"cx","5.5"),f.setAttributeNS(null,"cy","5.5"),f.setAttributeNS(null,"r","5.4999962");const g=i.createNS("http://www.w3.org/2000/svg","circle");g.setAttributeNS(null,"fill","#FFFFFF"),g.setAttributeNS(null,"cx","5.5"),g.setAttributeNS(null,"cy","5.5"),g.setAttributeNS(null,"r","5.4999962"),m.appendChild(f),m.appendChild(g),n.appendChild(l),n.appendChild(c),n.appendChild(d),n.appendChild(p),n.appendChild(m),s.appendChild(n),s.setAttributeNS(null,"height",a*this._scale+"px"),s.setAttributeNS(null,"width",o*this._scale+"px"),this._element.appendChild(s),this._offset=t.P.convert(e&&e.offset||[0,-14]);}if(this._element.classList.add("maplibregl-marker"),this._element.addEventListener("dragstart",(t=>{t.preventDefault();})),this._element.addEventListener("mousedown",(t=>{t.preventDefault();})),Ia(this._element,this._anchor,"marker"),e&&e.className)for(const t of e.className.split(" "))this._element.classList.add(t);this._popup=null;}addTo(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),t.on("terrain",this._update),this.setDraggable(this._draggable),this._update(),this._map.on("click",this._onMapClick),this}remove(){return this._opacityTimeout&&(clearTimeout(this._opacityTimeout),delete this._opacityTimeout),this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler),this._map.off("mouseup",this._onUp),this._map.off("touchend",this._onUp),this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),delete this._map),i.remove(this._element),this._popup&&this._popup.remove(),this}getLngLat(){return this._lngLat}setLngLat(e){return this._lngLat=t.L.convert(e),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this}getElement(){return this._element}setPopup(t){if(this._popup&&(this._popup.remove(),this._popup=null,this._element.removeEventListener("keypress",this._onKeyPress),this._originalTabIndex||this._element.removeAttribute("tabindex")),t){if(!("offset"in t.options)){const e=38.1,i=13.5,s=Math.abs(i)/Math.SQRT2;t.options.offset=this._defaultMarker?{top:[0,0],"top-left":[0,0],"top-right":[0,0],bottom:[0,-e],"bottom-left":[s,-1*(e-i+s)],"bottom-right":[-s,-1*(e-i+s)],left:[i,-1*(e-i)],right:[-i,-1*(e-i)]}:this._offset;}this._popup=t,this._lngLat&&this._popup.setLngLat(this._lngLat),this._originalTabIndex=this._element.getAttribute("tabindex"),this._originalTabIndex||this._element.setAttribute("tabindex","0"),this._element.addEventListener("keypress",this._onKeyPress);}return this}getPopup(){return this._popup}togglePopup(){const t=this._popup;return t?(t.isOpen()?t.remove():t.addTo(this._map),this):this}getOffset(){return this._offset}setOffset(e){return this._offset=t.P.convert(e),this._update(),this}addClassName(t){this._element.classList.add(t);}removeClassName(t){this._element.classList.remove(t);}toggleClassName(t){return this._element.classList.toggle(t)}setDraggable(t){return this._draggable=!!t,this._map&&(t?(this._map.on("mousedown",this._addDragHandler),this._map.on("touchstart",this._addDragHandler)):(this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler))),this}isDraggable(){return this._draggable}setRotation(t){return this._rotation=t||0,this._update(),this}getRotation(){return this._rotation}setRotationAlignment(t){return this._rotationAlignment=t||"auto",this._update(),this}getRotationAlignment(){return this._rotationAlignment}setPitchAlignment(t){return this._pitchAlignment=t&&"auto"!==t?t:this._rotationAlignment,this._update(),this}getPitchAlignment(){return this._pitchAlignment}}const Sa={positionOptions:{enableHighAccuracy:!1,maximumAge:0,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showAccuracyCircle:!0,showUserLocation:!0};let Ca=0,Pa=!1;const Da={maxWidth:100,unit:"metric"};function Ma(t,e,i){const s=i&&i.maxWidth||100,a=t._container.clientHeight/2,o=t.unproject([0,a]),r=t.unproject([s,a]),n=o.distanceTo(r);if(i&&"imperial"===i.unit){const i=3.2808*n;i>5280?za(e,s,i/5280,t._getUIString("ScaleControl.Miles")):za(e,s,i,t._getUIString("ScaleControl.Feet"));}else i&&"nautical"===i.unit?za(e,s,n/1852,t._getUIString("ScaleControl.NauticalMiles")):n>=1e3?za(e,s,n/1e3,t._getUIString("ScaleControl.Kilometers")):za(e,s,n,t._getUIString("ScaleControl.Meters"));}function za(t,e,i,s){const a=function(t){const e=Math.pow(10,`${Math.floor(t)}`.length-1);let i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:i>=1?1:function(t){const e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10));return Math.round(t*e)/e}(i),e*i}(i);t.style.width=e*(a/i)+"px",t.innerHTML=`${a}&nbsp;${s}`;}const La={closeButton:!0,closeOnClick:!0,focusAfterOpen:!0,className:"",maxWidth:"240px"},Aa=["a[href]","[tabindex]:not([tabindex='-1'])","[contenteditable]:not([contenteditable='false'])","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].join(", ");function Ra(e){if(e){if("number"==typeof e){const i=Math.round(Math.abs(e)/Math.SQRT2);return {center:new t.P(0,0),top:new t.P(0,e),"top-left":new t.P(i,i),"top-right":new t.P(-i,i),bottom:new t.P(0,-e),"bottom-left":new t.P(i,-i),"bottom-right":new t.P(-i,-i),left:new t.P(e,0),right:new t.P(-e,0)}}if(e instanceof t.P||Array.isArray(e)){const i=t.P.convert(e);return {center:i,top:i,"top-left":i,"top-right":i,bottom:i,"bottom-left":i,"bottom-right":i,left:i,right:i}}return {center:t.P.convert(e.center||[0,0]),top:t.P.convert(e.top||[0,0]),"top-left":t.P.convert(e["top-left"]||[0,0]),"top-right":t.P.convert(e["top-right"]||[0,0]),bottom:t.P.convert(e.bottom||[0,0]),"bottom-left":t.P.convert(e["bottom-left"]||[0,0]),"bottom-right":t.P.convert(e["bottom-right"]||[0,0]),left:t.P.convert(e.left||[0,0]),right:t.P.convert(e.right||[0,0])}}return Ra(new t.P(0,0))}const ka={extend:(e,...i)=>t.e(e,...i),run(t){t();},logToElement(t,e=!1,i="log"){const s=window.document.getElementById(i);s&&(e&&(s.innerHTML=""),s.innerHTML+=`<br>${t}`);}},Fa=e;class Ba{static get version(){return Fa}static get workerCount(){return tt.workerCount}static set workerCount(t){tt.workerCount=t;}static get maxParallelImageRequests(){return t.c.MAX_PARALLEL_IMAGE_REQUESTS}static set maxParallelImageRequests(e){t.c.MAX_PARALLEL_IMAGE_REQUESTS=e;}static get workerUrl(){return t.c.WORKER_URL}static set workerUrl(e){t.c.WORKER_URL=e;}static addProtocol(e,i){t.c.REGISTERED_PROTOCOLS[e]=i;}static removeProtocol(e){delete t.c.REGISTERED_PROTOCOLS[e];}}return Ba.Map=class extends oa{constructor(e){if(t.bf.mark(t.bg.create),null!=(e=t.e({},ga,e)).minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than or equal to minZoom");if(null!=e.minPitch&&null!=e.maxPitch&&e.minPitch>e.maxPitch)throw new Error("maxPitch must be greater than or equal to minPitch");if(null!=e.minPitch&&e.minPitch<0)throw new Error("minPitch must be greater than or equal to 0");if(null!=e.maxPitch&&e.maxPitch>85)throw new Error("maxPitch must be less than or equal to 85");if(super(new rs(e.minZoom,e.maxZoom,e.minPitch,e.maxPitch,e.renderWorldCopies),{bearingSnap:e.bearingSnap}),this._cooperativeGesturesOnWheel=t=>{this._onCooperativeGesture(t,t[this._metaKey],1);},this._contextLost=e=>{e.preventDefault(),this._frame&&(this._frame.cancel(),this._frame=null),this.fire(new t.k("webglcontextlost",{originalEvent:e}));},this._contextRestored=e=>{this._setupPainter(),this.resize(),this._update(),this.fire(new t.k("webglcontextrestored",{originalEvent:e}));},this._onMapScroll=t=>{if(t.target===this._container)return this._container.scrollTop=0,this._container.scrollLeft=0,!1},this._onWindowOnline=()=>{this._update();},this._interactive=e.interactive,this._cooperativeGestures=e.cooperativeGestures,this._metaKey=0===navigator.platform.indexOf("Mac")?"metaKey":"ctrlKey",this._maxTileCacheSize=e.maxTileCacheSize,this._maxTileCacheZoomLevels=e.maxTileCacheZoomLevels,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._antialias=e.antialias,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,this._fadeDuration=e.fadeDuration,this._crossSourceCollisions=e.crossSourceCollisions,this._crossFadingFactor=1,this._collectResourceTiming=e.collectResourceTiming,this._renderTaskQueue=new la,this._controls=[],this._mapId=t.a2(),this._locale=t.e({},ha,e.locale),this._clickTolerance=e.clickTolerance,this._overridePixelRatio=e.pixelRatio,this._maxCanvasSize=e.maxCanvasSize,this.transformCameraUpdate=e.transformCameraUpdate,this._imageQueueHandle=h.addThrottleControl((()=>this.isMoving())),this._requestManager=new u(e.transformRequest),"string"==typeof e.container){if(this._container=document.getElementById(e.container),!this._container)throw new Error(`Container '${e.container}' not found.`)}else {if(!(e.container instanceof HTMLElement))throw new Error("Invalid type: 'container' must be a String or HTMLElement.");this._container=e.container;}if(e.maxBounds&&this.setMaxBounds(e.maxBounds),this._setupContainer(),this._setupPainter(),this.on("move",(()=>this._update(!1))),this.on("moveend",(()=>this._update(!1))),this.on("zoom",(()=>this._update(!0))),this.on("terrain",(()=>{this.painter.terrainFacilitator.dirty=!0,this._update(!0);})),this.once("idle",(()=>{this._idleTriggered=!0;})),"undefined"!=typeof window){addEventListener("online",this._onWindowOnline,!1);let t=!1;const e=ns((t=>{this._trackResize&&!this._removed&&this.resize(t)._update();}),50);this._resizeObserver=new ResizeObserver((i=>{t?e(i):t=!0;})),this._resizeObserver.observe(this._container);}this.handlers=new aa(this,e),this._cooperativeGestures&&this._setupCooperativeGestures(),this._hash=e.hash&&new ls("string"==typeof e.hash&&e.hash||void 0).addTo(this),this._hash&&this._hash._onHashChange()||(this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),e.bounds&&(this.resize(),this.fitBounds(e.bounds,t.e({},e.fitBoundsOptions,{duration:0})))),this.resize(),this._localIdeographFontFamily=e.localIdeographFontFamily,this._validateStyle=e.validateStyle,e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new ra({customAttribution:e.customAttribution})),e.maplibreLogo&&this.addControl(new na,e.logoPosition),this.on("style.load",(()=>{this.transform.unmodified&&this.jumpTo(this.style.stylesheet);})),this.on("data",(e=>{this._update("style"===e.dataType),this.fire(new t.k(`${e.dataType}data`,e));})),this.on("dataloading",(e=>{this.fire(new t.k(`${e.dataType}dataloading`,e));})),this.on("dataabort",(e=>{this.fire(new t.k("sourcedataabort",e));}));}_getMapId(){return this._mapId}addControl(e,i){if(void 0===i&&(i=e.getDefaultPosition?e.getDefaultPosition():"top-right"),!e||!e.onAdd)return this.fire(new t.j(new Error("Invalid argument to map.addControl(). Argument must be a control with onAdd and onRemove methods.")));const s=e.onAdd(this);this._controls.push(e);const a=this._controlPositions[i];return -1!==i.indexOf("bottom")?a.insertBefore(s,a.firstChild):a.appendChild(s),this}removeControl(e){if(!e||!e.onRemove)return this.fire(new t.j(new Error("Invalid argument to map.removeControl(). Argument must be a control with onAdd and onRemove methods.")));const i=this._controls.indexOf(e);return i>-1&&this._controls.splice(i,1),e.onRemove(this),this}hasControl(t){return this._controls.indexOf(t)>-1}calculateCameraOptionsFromTo(t,e,i,s){return null==s&&this.terrain&&(s=this.terrain.getElevationForLngLatZoom(i,this.transform.tileZoom)),super.calculateCameraOptionsFromTo(t,e,i,s)}resize(e){var i;const s=this._containerDimensions(),a=s[0],o=s[1],r=this._getClampedPixelRatio(a,o);if(this._resizeCanvas(a,o,r),this.painter.resize(a,o,r),this.painter.overLimit()){const t=this.painter.context.gl;this._maxCanvasSize=[t.drawingBufferWidth,t.drawingBufferHeight];const e=this._getClampedPixelRatio(a,o);this._resizeCanvas(a,o,e),this.painter.resize(a,o,e);}this.transform.resize(a,o),null===(i=this._requestedCameraState)||void 0===i||i.resize(a,o);const n=!this._moving;return n&&(this.stop(),this.fire(new t.k("movestart",e)).fire(new t.k("move",e))),this.fire(new t.k("resize",e)),n&&this.fire(new t.k("moveend",e)),this}_getClampedPixelRatio(t,e){const{0:i,1:s}=this._maxCanvasSize,a=this.getPixelRatio(),o=t*a,r=e*a;return Math.min(o>i?i/o:1,r>s?s/r:1)*a}getPixelRatio(){var t;return null!==(t=this._overridePixelRatio)&&void 0!==t?t:devicePixelRatio}setPixelRatio(t){this._overridePixelRatio=t,this.resize();}getBounds(){return this.transform.getBounds()}getMaxBounds(){return this.transform.getMaxBounds()}setMaxBounds(t){return this.transform.setMaxBounds(L.convert(t)),this._update()}setMinZoom(t){if((t=null==t?-2:t)>=-2&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this;throw new Error("minZoom must be between -2 and the current maxZoom, inclusive")}getMinZoom(){return this.transform.minZoom}setMaxZoom(t){if((t=null==t?22:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this;throw new Error("maxZoom must be greater than the current minZoom")}getMaxZoom(){return this.transform.maxZoom}setMinPitch(t){if((t=null==t?0:t)<0)throw new Error("minPitch must be greater than or equal to 0");if(t>=0&&t<=this.transform.maxPitch)return this.transform.minPitch=t,this._update(),this.getPitch()<t&&this.setPitch(t),this;throw new Error("minPitch must be between 0 and the current maxPitch, inclusive")}getMinPitch(){return this.transform.minPitch}setMaxPitch(t){if((t=null==t?60:t)>85)throw new Error("maxPitch must be less than or equal to 85");if(t>=this.transform.minPitch)return this.transform.maxPitch=t,this._update(),this.getPitch()>t&&this.setPitch(t),this;throw new Error("maxPitch must be greater than the current minPitch")}getMaxPitch(){return this.transform.maxPitch}getRenderWorldCopies(){return this.transform.renderWorldCopies}setRenderWorldCopies(t){return this.transform.renderWorldCopies=t,this._update()}getCooperativeGestures(){return this._cooperativeGestures}setCooperativeGestures(t){return this._cooperativeGestures=t,this._cooperativeGestures?this._setupCooperativeGestures():this._destroyCooperativeGestures(),this}project(e){return this.transform.locationPoint(t.L.convert(e),this.style&&this.terrain)}unproject(e){return this.transform.pointLocation(t.P.convert(e),this.terrain)}isMoving(){var t;return this._moving||(null===(t=this.handlers)||void 0===t?void 0:t.isMoving())}isZooming(){var t;return this._zooming||(null===(t=this.handlers)||void 0===t?void 0:t.isZooming())}isRotating(){var t;return this._rotating||(null===(t=this.handlers)||void 0===t?void 0:t.isRotating())}_createDelegatedListener(t,e,i){if("mouseenter"===t||"mouseover"===t){let s=!1;const a=a=>{const o=this.getLayer(e)?this.queryRenderedFeatures(a.point,{layers:[e]}):[];o.length?s||(s=!0,i.call(this,new gs(t,this,a.originalEvent,{features:o}))):s=!1;};return {layer:e,listener:i,delegates:{mousemove:a,mouseout:()=>{s=!1;}}}}if("mouseleave"===t||"mouseout"===t){let s=!1;const a=a=>{(this.getLayer(e)?this.queryRenderedFeatures(a.point,{layers:[e]}):[]).length?s=!0:s&&(s=!1,i.call(this,new gs(t,this,a.originalEvent)));},o=e=>{s&&(s=!1,i.call(this,new gs(t,this,e.originalEvent)));};return {layer:e,listener:i,delegates:{mousemove:a,mouseout:o}}}{const s=t=>{const s=this.getLayer(e)?this.queryRenderedFeatures(t.point,{layers:[e]}):[];s.length&&(t.features=s,i.call(this,t),delete t.features);};return {layer:e,listener:i,delegates:{[t]:s}}}}on(t,e,i){if(void 0===i)return super.on(t,e);const s=this._createDelegatedListener(t,e,i);this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[t]=this._delegatedListeners[t]||[],this._delegatedListeners[t].push(s);for(const t in s.delegates)this.on(t,s.delegates[t]);return this}once(t,e,i){if(void 0===i)return super.once(t,e);const s=this._createDelegatedListener(t,e,i);for(const t in s.delegates)this.once(t,s.delegates[t]);return this}off(t,e,i){return void 0===i?super.off(t,e):(this._delegatedListeners&&this._delegatedListeners[t]&&(s=>{const a=this._delegatedListeners[t];for(let t=0;t<a.length;t++){const s=a[t];if(s.layer===e&&s.listener===i){for(const t in s.delegates)this.off(t,s.delegates[t]);return a.splice(t,1),this}}})(),this)}queryRenderedFeatures(e,i){if(!this.style)return [];let s;const a=e instanceof t.P||Array.isArray(e),o=a?e:[[0,0],[this.transform.width,this.transform.height]];if(i=i||(a?{}:e)||{},o instanceof t.P||"number"==typeof o[0])s=[t.P.convert(o)];else {const e=t.P.convert(o[0]),i=t.P.convert(o[1]);s=[e,new t.P(i.x,e.y),i,new t.P(e.x,i.y),e];}return this.style.queryRenderedFeatures(s,i,this.transform)}querySourceFeatures(t,e){return this.style.querySourceFeatures(t,e)}setStyle(e,i){return !1!==(i=t.e({},{localIdeographFontFamily:this._localIdeographFontFamily,validate:this._validateStyle},i)).diff&&i.localIdeographFontFamily===this._localIdeographFontFamily&&this.style&&e?(this._diffStyle(e,i),this):(this._localIdeographFontFamily=i.localIdeographFontFamily,this._updateStyle(e,i))}setTransformRequest(t){return this._requestManager.setTransformRequest(t),this}_getUIString(t){const e=this._locale[t];if(null==e)throw new Error(`Missing UI string '${t}'`);return e}_updateStyle(t,e){if(e.transformStyle&&this.style&&!this.style._loaded)return void this.style.once("style.load",(()=>this._updateStyle(t,e)));const i=this.style&&e.transformStyle?this.style.serialize():void 0;return this.style&&(this.style.setEventedParent(null),this.style._remove(!t)),t?(this.style=new se(this,e||{}),this.style.setEventedParent(this,{style:this.style}),"string"==typeof t?this.style.loadURL(t,e,i):this.style.loadJSON(t,e,i),this):(delete this.style,this)}_lazyInitEmptyStyle(){this.style||(this.style=new se(this,{}),this.style.setEventedParent(this,{style:this.style}),this.style.loadEmpty());}_diffStyle(e,i){if("string"==typeof e){const s=this._requestManager.transformRequest(e,c.Style);t.f(s,((e,s)=>{e?this.fire(new t.j(e)):s&&this._updateDiff(s,i);}));}else "object"==typeof e&&this._updateDiff(e,i);}_updateDiff(e,i){try{this.style.setState(e,i)&&this._update(!0);}catch(s){t.w(`Unable to perform style diff: ${s.message||s.error||s}.  Rebuilding the style from scratch.`),this._updateStyle(e,i);}}getStyle(){if(this.style)return this.style.serialize()}isStyleLoaded(){return this.style?this.style.loaded():t.w("There is no style added to the map.")}addSource(t,e){return this._lazyInitEmptyStyle(),this.style.addSource(t,e),this._update(!0)}isSourceLoaded(e){const i=this.style&&this.style.sourceCaches[e];if(void 0!==i)return i.loaded();this.fire(new t.j(new Error(`There is no source with ID '${e}'`)));}setTerrain(e){if(this.style._checkLoaded(),this._terrainDataCallback&&this.style.off("data",this._terrainDataCallback),e){const i=this.style.sourceCaches[e.source];if(!i)throw new Error(`cannot load terrain, because there exists no source with ID: ${e.source}`);for(const i in this.style._layers){const s=this.style._layers[i];"hillshade"===s.type&&s.source===e.source&&t.w("You are using the same source for a hillshade layer and for 3D terrain. Please consider using two separate sources to improve rendering quality.");}this.terrain=new da(this.painter,i,e),this.painter.renderToTexture=new ma(this.painter,this.terrain),this.transform._minEleveationForCurrentTile=this.terrain.getMinTileElevationForLngLatZoom(this.transform.center,this.transform.tileZoom),this.transform.elevation=this.terrain.getElevationForLngLatZoom(this.transform.center,this.transform.tileZoom),this._terrainDataCallback=t=>{"style"===t.dataType?this.terrain.sourceCache.freeRtt():"source"===t.dataType&&t.tile&&(t.sourceId!==e.source||this._elevationFreeze||(this.transform._minEleveationForCurrentTile=this.terrain.getMinTileElevationForLngLatZoom(this.transform.center,this.transform.tileZoom),this.transform.elevation=this.terrain.getElevationForLngLatZoom(this.transform.center,this.transform.tileZoom)),this.terrain.sourceCache.freeRtt(t.tile.tileID));},this.style.on("data",this._terrainDataCallback);}else this.terrain&&this.terrain.sourceCache.destruct(),this.terrain=null,this.painter.renderToTexture&&this.painter.renderToTexture.destruct(),this.painter.renderToTexture=null,this.transform._minEleveationForCurrentTile=0,this.transform.elevation=0;return this.fire(new t.k("terrain",{terrain:e})),this}getTerrain(){var t,e;return null!==(e=null===(t=this.terrain)||void 0===t?void 0:t.options)&&void 0!==e?e:null}areTilesLoaded(){const t=this.style&&this.style.sourceCaches;for(const e in t){const i=t[e]._tiles;for(const t in i){const e=i[t];if("loaded"!==e.state&&"errored"!==e.state)return !1}}return !0}addSourceType(t,e,i){return this._lazyInitEmptyStyle(),this.style.addSourceType(t,e,i)}removeSource(t){return this.style.removeSource(t),this._update(!0)}getSource(t){return this.style.getSource(t)}addImage(e,i,s={}){const{pixelRatio:a=1,sdf:o=!1,stretchX:r,stretchY:n,content:l}=s;if(this._lazyInitEmptyStyle(),!(i instanceof HTMLImageElement||t.a(i))){if(void 0===i.width||void 0===i.height)return this.fire(new t.j(new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")));{const{width:s,height:h,data:c}=i,u=i;return this.style.addImage(e,{data:new t.R({width:s,height:h},new Uint8Array(c)),pixelRatio:a,stretchX:r,stretchY:n,content:l,sdf:o,version:0,userImage:u}),u.onAdd&&u.onAdd(this,e),this}}{const{width:s,height:h,data:c}=t.h.getImageData(i);this.style.addImage(e,{data:new t.R({width:s,height:h},c),pixelRatio:a,stretchX:r,stretchY:n,content:l,sdf:o,version:0});}}updateImage(e,i){const s=this.style.getImage(e);if(!s)return this.fire(new t.j(new Error("The map has no image with that id. If you are adding a new image use `map.addImage(...)` instead.")));const a=i instanceof HTMLImageElement||t.a(i)?t.h.getImageData(i):i,{width:o,height:r,data:n}=a;if(void 0===o||void 0===r)return this.fire(new t.j(new Error("Invalid arguments to map.updateImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")));if(o!==s.data.width||r!==s.data.height)return this.fire(new t.j(new Error("The width and height of the updated image must be that same as the previous version of the image")));const l=!(i instanceof HTMLImageElement||t.a(i));return s.data.replace(n,l),this.style.updateImage(e,s),this}getImage(t){return this.style.getImage(t)}hasImage(e){return e?!!this.style.getImage(e):(this.fire(new t.j(new Error("Missing required image id"))),!1)}removeImage(t){this.style.removeImage(t);}loadImage(t,e){h.getImage(this._requestManager.transformRequest(t,c.Image),e);}listImages(){return this.style.listImages()}addLayer(t,e){return this._lazyInitEmptyStyle(),this.style.addLayer(t,e),this._update(!0)}moveLayer(t,e){return this.style.moveLayer(t,e),this._update(!0)}removeLayer(t){return this.style.removeLayer(t),this._update(!0)}getLayer(t){return this.style.getLayer(t)}setLayerZoomRange(t,e,i){return this.style.setLayerZoomRange(t,e,i),this._update(!0)}setFilter(t,e,i={}){return this.style.setFilter(t,e,i),this._update(!0)}getFilter(t){return this.style.getFilter(t)}setPaintProperty(t,e,i,s={}){return this.style.setPaintProperty(t,e,i,s),this._update(!0)}getPaintProperty(t,e){return this.style.getPaintProperty(t,e)}setLayoutProperty(t,e,i,s={}){return this.style.setLayoutProperty(t,e,i,s),this._update(!0)}getLayoutProperty(t,e){return this.style.getLayoutProperty(t,e)}setGlyphs(t,e={}){return this._lazyInitEmptyStyle(),this.style.setGlyphs(t,e),this._update(!0)}getGlyphs(){return this.style.getGlyphsUrl()}addSprite(t,e,i={}){return this._lazyInitEmptyStyle(),this.style.addSprite(t,e,i,(t=>{t||this._update(!0);})),this}removeSprite(t){return this._lazyInitEmptyStyle(),this.style.removeSprite(t),this._update(!0)}getSprite(){return this.style.getSprite()}setSprite(t,e={}){return this._lazyInitEmptyStyle(),this.style.setSprite(t,e,(t=>{t||this._update(!0);})),this}setLight(t,e={}){return this._lazyInitEmptyStyle(),this.style.setLight(t,e),this._update(!0)}getLight(){return this.style.getLight()}setFeatureState(t,e){return this.style.setFeatureState(t,e),this._update()}removeFeatureState(t,e){return this.style.removeFeatureState(t,e),this._update()}getFeatureState(t){return this.style.getFeatureState(t)}getContainer(){return this._container}getCanvasContainer(){return this._canvasContainer}getCanvas(){return this._canvas}_containerDimensions(){let t=0,e=0;return this._container&&(t=this._container.clientWidth||400,e=this._container.clientHeight||300),[t,e]}_setupContainer(){const t=this._container;t.classList.add("maplibregl-map");const e=this._canvasContainer=i.create("div","maplibregl-canvas-container",t);this._interactive&&e.classList.add("maplibregl-interactive"),this._canvas=i.create("canvas","maplibregl-canvas",e),this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map"),this._canvas.setAttribute("role","region");const s=this._containerDimensions(),a=this._getClampedPixelRatio(s[0],s[1]);this._resizeCanvas(s[0],s[1],a);const o=this._controlContainer=i.create("div","maplibregl-control-container",t),r=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach((t=>{r[t]=i.create("div",`maplibregl-ctrl-${t} `,o);})),this._container.addEventListener("scroll",this._onMapScroll,!1);}_setupCooperativeGestures(){this._cooperativeGesturesScreen=i.create("div","maplibregl-cooperative-gesture-screen",this._container);let t="boolean"!=typeof this._cooperativeGestures&&this._cooperativeGestures.windowsHelpText?this._cooperativeGestures.windowsHelpText:"Use Ctrl + scroll to zoom the map";0===navigator.platform.indexOf("Mac")&&(t="boolean"!=typeof this._cooperativeGestures&&this._cooperativeGestures.macHelpText?this._cooperativeGestures.macHelpText:"Use ⌘ + scroll to zoom the map"),this._cooperativeGesturesScreen.innerHTML=`\n            <div class="maplibregl-desktop-message">${t}</div>\n            <div class="maplibregl-mobile-message">${"boolean"!=typeof this._cooperativeGestures&&this._cooperativeGestures.mobileHelpText?this._cooperativeGestures.mobileHelpText:"Use two fingers to move the map"}</div>\n        `,this._cooperativeGesturesScreen.setAttribute("aria-hidden","true"),this._canvasContainer.addEventListener("wheel",this._cooperativeGesturesOnWheel,!1),this._canvasContainer.classList.add("maplibregl-cooperative-gestures");}_destroyCooperativeGestures(){i.remove(this._cooperativeGesturesScreen),this._canvasContainer.removeEventListener("wheel",this._cooperativeGesturesOnWheel,!1),this._canvasContainer.classList.remove("maplibregl-cooperative-gestures");}_resizeCanvas(t,e,i){this._canvas.width=Math.floor(i*t),this._canvas.height=Math.floor(i*e),this._canvas.style.width=`${t}px`,this._canvas.style.height=`${e}px`;}_setupPainter(){const t={alpha:!0,stencil:!0,depth:!0,failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer,antialias:this._antialias||!1};let e=null;this._canvas.addEventListener("webglcontextcreationerror",(i=>{e={requestedAttributes:t},i&&(e.statusMessage=i.statusMessage,e.type=i.type);}),{once:!0});const i=this._canvas.getContext("webgl2",t)||this._canvas.getContext("webgl",t);if(!i){const t="Failed to initialize WebGL";throw e?(e.message=t,new Error(JSON.stringify(e))):new Error(t)}this.painter=new is(i,this.transform),s.testSupport(i);}_onCooperativeGesture(t,e,i){return !e&&i<2&&(this._cooperativeGesturesScreen.classList.add("maplibregl-show"),setTimeout((()=>{this._cooperativeGesturesScreen.classList.remove("maplibregl-show");}),100)),!1}loaded(){return !this._styleDirty&&!this._sourcesDirty&&!!this.style&&this.style.loaded()}_update(t){return this.style&&this.style._loaded?(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this.triggerRepaint(),this):this}_requestRenderFrame(t){return this._update(),this._renderTaskQueue.add(t)}_cancelRenderFrame(t){this._renderTaskQueue.remove(t);}_render(e){const i=this._idleTriggered?this._fadeDuration:0;if(this.painter.context.setDirty(),this.painter.setBaseState(),this._renderTaskQueue.run(e),this._removed)return;let s=!1;if(this.style&&this._styleDirty){this._styleDirty=!1;const e=this.transform.zoom,a=t.h.now();this.style.zoomHistory.update(e,a);const o=new t.a8(e,{now:a,fadeDuration:i,zoomHistory:this.style.zoomHistory,transition:this.style.getTransition()}),r=o.crossFadingFactor();1===r&&r===this._crossFadingFactor||(s=!0,this._crossFadingFactor=r),this.style.update(o);}this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this.terrain?(this.terrain.sourceCache.update(this.transform,this.terrain),this.transform._minEleveationForCurrentTile=this.terrain.getMinTileElevationForLngLatZoom(this.transform.center,this.transform.tileZoom),this._elevationFreeze||(this.transform.elevation=this.terrain.getElevationForLngLatZoom(this.transform.center,this.transform.tileZoom))):(this.transform._minEleveationForCurrentTile=0,this.transform.elevation=0),this._placementDirty=this.style&&this.style._updatePlacement(this.painter.transform,this.showCollisionBoxes,i,this._crossSourceCollisions),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.isRotating(),zooming:this.isZooming(),moving:this.isMoving(),fadeDuration:i,showPadding:this.showPadding}),this.fire(new t.k("render")),this.loaded()&&!this._loaded&&(this._loaded=!0,t.bf.mark(t.bg.load),this.fire(new t.k("load"))),this.style&&(this.style.hasTransitions()||s)&&(this._styleDirty=!0),this.style&&!this._placementDirty&&this.style._releaseSymbolFadeTiles();const a=this._sourcesDirty||this._styleDirty||this._placementDirty;return a||this._repaint?this.triggerRepaint():!this.isMoving()&&this.loaded()&&this.fire(new t.k("idle")),!this._loaded||this._fullyLoaded||a||(this._fullyLoaded=!0,t.bf.mark(t.bg.fullLoad)),this}redraw(){return this.style&&(this._frame&&(this._frame.cancel(),this._frame=null),this._render(0)),this}remove(){var e;this._hash&&this._hash.remove();for(const t of this._controls)t.onRemove(this);this._controls=[],this._frame&&(this._frame.cancel(),this._frame=null),this._renderTaskQueue.clear(),this.painter.destroy(),this.handlers.destroy(),delete this.handlers,this.setStyle(null),"undefined"!=typeof window&&removeEventListener("online",this._onWindowOnline,!1),h.removeThrottleControl(this._imageQueueHandle),null===(e=this._resizeObserver)||void 0===e||e.disconnect();const s=this.painter.context.gl.getExtension("WEBGL_lose_context");s&&s.loseContext(),this._canvas.removeEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.removeEventListener("webglcontextlost",this._contextLost,!1),i.remove(this._canvasContainer),i.remove(this._controlContainer),this._cooperativeGestures&&this._destroyCooperativeGestures(),this._container.classList.remove("maplibregl-map"),t.bf.clearMetrics(),this._removed=!0,this.fire(new t.k("remove"));}triggerRepaint(){this.style&&!this._frame&&(this._frame=t.h.frame((e=>{t.bf.frame(e),this._frame=null,this._render(e);})));}get showTileBoundaries(){return !!this._showTileBoundaries}set showTileBoundaries(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update());}get showPadding(){return !!this._showPadding}set showPadding(t){this._showPadding!==t&&(this._showPadding=t,this._update());}get showCollisionBoxes(){return !!this._showCollisionBoxes}set showCollisionBoxes(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,t?this.style._generateCollisionBoxes():this._update());}get showOverdrawInspector(){return !!this._showOverdrawInspector}set showOverdrawInspector(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update());}get repaint(){return !!this._repaint}set repaint(t){this._repaint!==t&&(this._repaint=t,this.triggerRepaint());}get vertices(){return !!this._vertices}set vertices(t){this._vertices=t,this._update();}get version(){return fa}getCameraTargetElevation(){return this.transform.elevation}},Ba.NavigationControl=class{constructor(e){this._updateZoomButtons=()=>{const t=this._map.getZoom(),e=t===this._map.getMaxZoom(),i=t===this._map.getMinZoom();this._zoomInButton.disabled=e,this._zoomOutButton.disabled=i,this._zoomInButton.setAttribute("aria-disabled",e.toString()),this._zoomOutButton.setAttribute("aria-disabled",i.toString());},this._rotateCompassArrow=()=>{const t=this.options.visualizePitch?`scale(${1/Math.pow(Math.cos(this._map.transform.pitch*(Math.PI/180)),.5)}) rotateX(${this._map.transform.pitch}deg) rotateZ(${this._map.transform.angle*(180/Math.PI)}deg)`:`rotate(${this._map.transform.angle*(180/Math.PI)}deg)`;this._compassIcon.style.transform=t;},this._setButtonTitle=(t,e)=>{const i=this._map._getUIString(`NavigationControl.${e}`);t.title=i,t.setAttribute("aria-label",i);},this.options=t.e({},xa,e),this._container=i.create("div","maplibregl-ctrl maplibregl-ctrl-group"),this._container.addEventListener("contextmenu",(t=>t.preventDefault())),this.options.showZoom&&(this._zoomInButton=this._createButton("maplibregl-ctrl-zoom-in",(t=>this._map.zoomIn({},{originalEvent:t}))),i.create("span","maplibregl-ctrl-icon",this._zoomInButton).setAttribute("aria-hidden","true"),this._zoomOutButton=this._createButton("maplibregl-ctrl-zoom-out",(t=>this._map.zoomOut({},{originalEvent:t}))),i.create("span","maplibregl-ctrl-icon",this._zoomOutButton).setAttribute("aria-hidden","true")),this.options.showCompass&&(this._compass=this._createButton("maplibregl-ctrl-compass",(t=>{this.options.visualizePitch?this._map.resetNorthPitch({},{originalEvent:t}):this._map.resetNorth({},{originalEvent:t});})),this._compassIcon=i.create("span","maplibregl-ctrl-icon",this._compass),this._compassIcon.setAttribute("aria-hidden","true"));}onAdd(t){return this._map=t,this.options.showZoom&&(this._setButtonTitle(this._zoomInButton,"ZoomIn"),this._setButtonTitle(this._zoomOutButton,"ZoomOut"),this._map.on("zoom",this._updateZoomButtons),this._updateZoomButtons()),this.options.showCompass&&(this._setButtonTitle(this._compass,"ResetBearing"),this.options.visualizePitch&&this._map.on("pitch",this._rotateCompassArrow),this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._handler=new ya(this._map,this._compass,this.options.visualizePitch)),this._container}onRemove(){i.remove(this._container),this.options.showZoom&&this._map.off("zoom",this._updateZoomButtons),this.options.showCompass&&(this.options.visualizePitch&&this._map.off("pitch",this._rotateCompassArrow),this._map.off("rotate",this._rotateCompassArrow),this._handler.off(),delete this._handler),delete this._map;}_createButton(t,e){const s=i.create("button",t,this._container);return s.type="button",s.addEventListener("click",e),s}},Ba.GeolocateControl=class extends t.E{constructor(e){super(),this._onSuccess=e=>{if(this._map){if(this._isOutOfMapMaxBounds(e))return this._setErrorState(),this.fire(new t.k("outofmaxbounds",e)),this._updateMarker(),void this._finish();if(this.options.trackUserLocation)switch(this._lastKnownPosition=e,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active");break;case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background");break;default:throw new Error(`Unexpected watchState ${this._watchState}`)}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(e),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(e),this.options.showUserLocation&&this._dotElement.classList.remove("maplibregl-user-location-dot-stale"),this.fire(new t.k("geolocate",e)),this._finish();}},this._updateCamera=e=>{const i=new t.L(e.coords.longitude,e.coords.latitude),s=e.coords.accuracy,a=this._map.getBearing(),o=t.e({bearing:a},this.options.fitBoundsOptions),r=L.fromLngLat(i,s);this._map.fitBounds(r,o,{geolocateSource:!0});},this._updateMarker=e=>{if(e){const i=new t.L(e.coords.longitude,e.coords.latitude);this._accuracyCircleMarker.setLngLat(i).addTo(this._map),this._userLocationDotMarker.setLngLat(i).addTo(this._map),this._accuracy=e.coords.accuracy,this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius();}else this._userLocationDotMarker.remove(),this._accuracyCircleMarker.remove();},this._onZoom=()=>{this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius();},this._onError=e=>{if(this._map){if(this.options.trackUserLocation)if(1===e.code){this._watchState="OFF",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error"),this._geolocateButton.disabled=!0;const t=this._map._getUIString("GeolocateControl.LocationNotAvailable");this._geolocateButton.title=t,this._geolocateButton.setAttribute("aria-label",t),void 0!==this._geolocationWatchID&&this._clearWatch();}else {if(3===e.code&&Pa)return;this._setErrorState();}"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("maplibregl-user-location-dot-stale"),this.fire(new t.k("error",e)),this._finish();}},this._finish=()=>{this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0;},this._setupUI=e=>{if(this._map){if(this._container.addEventListener("contextmenu",(t=>t.preventDefault())),this._geolocateButton=i.create("button","maplibregl-ctrl-geolocate",this._container),i.create("span","maplibregl-ctrl-icon",this._geolocateButton).setAttribute("aria-hidden","true"),this._geolocateButton.type="button",!1===e){t.w("Geolocation support is not available so the GeolocateControl will be disabled.");const e=this._map._getUIString("GeolocateControl.LocationNotAvailable");this._geolocateButton.disabled=!0,this._geolocateButton.title=e,this._geolocateButton.setAttribute("aria-label",e);}else {const t=this._map._getUIString("GeolocateControl.FindMyLocation");this._geolocateButton.title=t,this._geolocateButton.setAttribute("aria-label",t);}this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed","false"),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=i.create("div","maplibregl-user-location-dot"),this._userLocationDotMarker=new Ea({element:this._dotElement}),this._circleElement=i.create("div","maplibregl-user-location-accuracy-circle"),this._accuracyCircleMarker=new Ea({element:this._circleElement,pitchAlignment:"map"}),this.options.trackUserLocation&&(this._watchState="OFF"),this._map.on("zoom",this._onZoom)),this._geolocateButton.addEventListener("click",this.trigger.bind(this)),this._setup=!0,this.options.trackUserLocation&&this._map.on("movestart",(e=>{e.geolocateSource||"ACTIVE_LOCK"!==this._watchState||e.originalEvent&&"resize"===e.originalEvent.type||(this._watchState="BACKGROUND",this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this.fire(new t.k("trackuserlocationend")));}));}},this.options=t.e({},Sa,e);}onAdd(t){return this._map=t,this._container=i.create("div","maplibregl-ctrl maplibregl-ctrl-group"),function(t,e=!1){void 0===ba||e?void 0!==window.navigator.permissions?window.navigator.permissions.query({name:"geolocation"}).then((e=>{ba="denied"!==e.state,t(ba);})).catch((()=>{ba=!!window.navigator.geolocation,t(ba);})):(ba=!!window.navigator.geolocation,t(ba)):t(ba);}(this._setupUI),this._container}onRemove(){void 0!==this._geolocationWatchID&&(window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker&&this._userLocationDotMarker.remove(),this.options.showAccuracyCircle&&this._accuracyCircleMarker&&this._accuracyCircleMarker.remove(),i.remove(this._container),this._map.off("zoom",this._onZoom),this._map=void 0,Ca=0,Pa=!1;}_isOutOfMapMaxBounds(t){const e=this._map.getMaxBounds(),i=t.coords;return e&&(i.longitude<e.getWest()||i.longitude>e.getEast()||i.latitude<e.getSouth()||i.latitude>e.getNorth())}_setErrorState(){switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active-error");break;case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting");break;case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting");break;case"ACTIVE_ERROR":break;default:throw new Error(`Unexpected watchState ${this._watchState}`)}}_updateCircleRadius(){const t=this._map.getBounds(),e=t.getSouthEast(),i=t.getNorthEast(),s=e.distanceTo(i),a=Math.ceil(this._accuracy/(s/this._map._container.clientHeight)*2);this._circleElement.style.width=`${a}px`,this._circleElement.style.height=`${a}px`;}trigger(){if(!this._setup)return t.w("Geolocate control triggered before added to a map"),!1;if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire(new t.k("trackuserlocationstart"));break;case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":Ca--,Pa=!1,this._watchState="OFF",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error"),this.fire(new t.k("trackuserlocationend"));break;case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire(new t.k("trackuserlocationstart"));break;default:throw new Error(`Unexpected watchState ${this._watchState}`)}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active");break;case"ACTIVE_LOCK":this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active");break;case"OFF":break;default:throw new Error(`Unexpected watchState ${this._watchState}`)}if("OFF"===this._watchState&&void 0!==this._geolocationWatchID)this._clearWatch();else if(void 0===this._geolocationWatchID){let t;this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","true"),Ca++,Ca>1?(t={maximumAge:6e5,timeout:0},Pa=!0):(t=this.options.positionOptions,Pa=!1),this._geolocationWatchID=window.navigator.geolocation.watchPosition(this._onSuccess,this._onError,t);}}else window.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4);return !0}_clearWatch(){window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","false"),this.options.showUserLocation&&this._updateMarker(null);}},Ba.AttributionControl=ra,Ba.LogoControl=na,Ba.ScaleControl=class{constructor(e){this._onMove=()=>{Ma(this._map,this._container,this.options);},this.setUnit=t=>{this.options.unit=t,Ma(this._map,this._container,this.options);},this.options=t.e({},Da,e);}getDefaultPosition(){return "bottom-left"}onAdd(t){return this._map=t,this._container=i.create("div","maplibregl-ctrl maplibregl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container}onRemove(){i.remove(this._container),this._map.off("move",this._onMove),this._map=void 0;}},Ba.FullscreenControl=class extends t.E{constructor(e={}){super(),this._onFullscreenChange=()=>{(window.document.fullscreenElement||window.document.mozFullScreenElement||window.document.webkitFullscreenElement||window.document.msFullscreenElement)===this._container!==this._fullscreen&&this._handleFullscreenChange();},this._onClickFullscreen=()=>{this._isFullscreen()?this._exitFullscreen():this._requestFullscreen();},this._fullscreen=!1,e&&e.container&&(e.container instanceof HTMLElement?this._container=e.container:t.w("Full screen control 'container' must be a DOM element.")),"onfullscreenchange"in document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in document&&(this._fullscreenchange="MSFullscreenChange");}onAdd(t){return this._map=t,this._container||(this._container=this._map.getContainer()),this._controlContainer=i.create("div","maplibregl-ctrl maplibregl-ctrl-group"),this._setupUI(),this._controlContainer}onRemove(){i.remove(this._controlContainer),this._map=null,window.document.removeEventListener(this._fullscreenchange,this._onFullscreenChange);}_setupUI(){const t=this._fullscreenButton=i.create("button","maplibregl-ctrl-fullscreen",this._controlContainer);i.create("span","maplibregl-ctrl-icon",t).setAttribute("aria-hidden","true"),t.type="button",this._updateTitle(),this._fullscreenButton.addEventListener("click",this._onClickFullscreen),window.document.addEventListener(this._fullscreenchange,this._onFullscreenChange);}_updateTitle(){const t=this._getTitle();this._fullscreenButton.setAttribute("aria-label",t),this._fullscreenButton.title=t;}_getTitle(){return this._map._getUIString(this._isFullscreen()?"FullscreenControl.Exit":"FullscreenControl.Enter")}_isFullscreen(){return this._fullscreen}_handleFullscreenChange(){this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle("maplibregl-ctrl-shrink"),this._fullscreenButton.classList.toggle("maplibregl-ctrl-fullscreen"),this._updateTitle(),this._fullscreen?(this.fire(new t.k("fullscreenstart")),this._map._cooperativeGestures&&(this._prevCooperativeGestures=this._map._cooperativeGestures,this._map.setCooperativeGestures())):(this.fire(new t.k("fullscreenend")),this._prevCooperativeGestures&&(this._map.setCooperativeGestures(this._prevCooperativeGestures),delete this._prevCooperativeGestures));}_exitFullscreen(){window.document.exitFullscreen?window.document.exitFullscreen():window.document.mozCancelFullScreen?window.document.mozCancelFullScreen():window.document.msExitFullscreen?window.document.msExitFullscreen():window.document.webkitCancelFullScreen?window.document.webkitCancelFullScreen():this._togglePseudoFullScreen();}_requestFullscreen(){this._container.requestFullscreen?this._container.requestFullscreen():this._container.mozRequestFullScreen?this._container.mozRequestFullScreen():this._container.msRequestFullscreen?this._container.msRequestFullscreen():this._container.webkitRequestFullscreen?this._container.webkitRequestFullscreen():this._togglePseudoFullScreen();}_togglePseudoFullScreen(){this._container.classList.toggle("maplibregl-pseudo-fullscreen"),this._handleFullscreenChange(),this._map.resize();}},Ba.TerrainControl=class{constructor(t){this._toggleTerrain=()=>{this._map.getTerrain()?this._map.setTerrain(null):this._map.setTerrain(this.options),this._updateTerrainIcon();},this._updateTerrainIcon=()=>{this._terrainButton.classList.remove("maplibregl-ctrl-terrain"),this._terrainButton.classList.remove("maplibregl-ctrl-terrain-enabled"),this._map.terrain?(this._terrainButton.classList.add("maplibregl-ctrl-terrain-enabled"),this._terrainButton.title=this._map._getUIString("TerrainControl.disableTerrain")):(this._terrainButton.classList.add("maplibregl-ctrl-terrain"),this._terrainButton.title=this._map._getUIString("TerrainControl.enableTerrain"));},this.options=t;}onAdd(t){return this._map=t,this._container=i.create("div","maplibregl-ctrl maplibregl-ctrl-group"),this._terrainButton=i.create("button","maplibregl-ctrl-terrain",this._container),i.create("span","maplibregl-ctrl-icon",this._terrainButton).setAttribute("aria-hidden","true"),this._terrainButton.type="button",this._terrainButton.addEventListener("click",this._toggleTerrain),this._updateTerrainIcon(),this._map.on("terrain",this._updateTerrainIcon),this._container}onRemove(){i.remove(this._container),this._map.off("terrain",this._updateTerrainIcon),this._map=void 0;}},Ba.Popup=class extends t.E{constructor(e){super(),this.remove=()=>(this._content&&i.remove(this._content),this._container&&(i.remove(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("move",this._onClose),this._map.off("click",this._onClose),this._map.off("remove",this.remove),this._map.off("mousemove",this._onMouseMove),this._map.off("mouseup",this._onMouseUp),this._map.off("drag",this._onDrag),delete this._map),this.fire(new t.k("close")),this),this._onMouseUp=t=>{this._update(t.point);},this._onMouseMove=t=>{this._update(t.point);},this._onDrag=t=>{this._update(t.point);},this._update=t=>{if(!this._map||!this._lngLat&&!this._trackPointer||!this._content)return;if(!this._container){if(this._container=i.create("div","maplibregl-popup",this._map.getContainer()),this._tip=i.create("div","maplibregl-popup-tip",this._container),this._container.appendChild(this._content),this.options.className)for(const t of this.options.className.split(" "))this._container.classList.add(t);this._trackPointer&&this._container.classList.add("maplibregl-popup-track-pointer");}if(this.options.maxWidth&&this._container.style.maxWidth!==this.options.maxWidth&&(this._container.style.maxWidth=this.options.maxWidth),this._map.transform.renderWorldCopies&&!this._trackPointer&&(this._lngLat=wa(this._lngLat,this._pos,this._map.transform)),this._trackPointer&&!t)return;const e=this._pos=this._trackPointer&&t?t:this._map.project(this._lngLat);let s=this.options.anchor;const a=Ra(this.options.offset);if(!s){const t=this._container.offsetWidth,i=this._container.offsetHeight;let o;o=e.y+a.bottom.y<i?["top"]:e.y>this._map.transform.height-i?["bottom"]:[],e.x<t/2?o.push("left"):e.x>this._map.transform.width-t/2&&o.push("right"),s=0===o.length?"bottom":o.join("-");}const o=e.add(a[s]).round();i.setTransform(this._container,`${Ta[s]} translate(${o.x}px,${o.y}px)`),Ia(this._container,s,"popup");},this._onClose=()=>{this.remove();},this.options=t.e(Object.create(La),e);}addTo(e){return this._map&&this.remove(),this._map=e,this.options.closeOnClick&&this._map.on("click",this._onClose),this.options.closeOnMove&&this._map.on("move",this._onClose),this._map.on("remove",this.remove),this._update(),this._focusFirstElement(),this._trackPointer?(this._map.on("mousemove",this._onMouseMove),this._map.on("mouseup",this._onMouseUp),this._container&&this._container.classList.add("maplibregl-popup-track-pointer"),this._map._canvasContainer.classList.add("maplibregl-track-pointer")):this._map.on("move",this._update),this.fire(new t.k("open")),this}isOpen(){return !!this._map}getLngLat(){return this._lngLat}setLngLat(e){return this._lngLat=t.L.convert(e),this._pos=null,this._trackPointer=!1,this._update(),this._map&&(this._map.on("move",this._update),this._map.off("mousemove",this._onMouseMove),this._container&&this._container.classList.remove("maplibregl-popup-track-pointer"),this._map._canvasContainer.classList.remove("maplibregl-track-pointer")),this}trackPointer(){return this._trackPointer=!0,this._pos=null,this._update(),this._map&&(this._map.off("move",this._update),this._map.on("mousemove",this._onMouseMove),this._map.on("drag",this._onDrag),this._container&&this._container.classList.add("maplibregl-popup-track-pointer"),this._map._canvasContainer.classList.add("maplibregl-track-pointer")),this}getElement(){return this._container}setText(t){return this.setDOMContent(document.createTextNode(t))}setHTML(t){const e=document.createDocumentFragment(),i=document.createElement("body");let s;for(i.innerHTML=t;s=i.firstChild,s;)e.appendChild(s);return this.setDOMContent(e)}getMaxWidth(){var t;return null===(t=this._container)||void 0===t?void 0:t.style.maxWidth}setMaxWidth(t){return this.options.maxWidth=t,this._update(),this}setDOMContent(t){if(this._content)for(;this._content.hasChildNodes();)this._content.firstChild&&this._content.removeChild(this._content.firstChild);else this._content=i.create("div","maplibregl-popup-content",this._container);return this._content.appendChild(t),this._createCloseButton(),this._update(),this._focusFirstElement(),this}addClassName(t){this._container&&this._container.classList.add(t);}removeClassName(t){this._container&&this._container.classList.remove(t);}setOffset(t){return this.options.offset=t,this._update(),this}toggleClassName(t){if(this._container)return this._container.classList.toggle(t)}_createCloseButton(){this.options.closeButton&&(this._closeButton=i.create("button","maplibregl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClose));}_focusFirstElement(){if(!this.options.focusAfterOpen||!this._container)return;const t=this._container.querySelector(Aa);t&&t.focus();}},Ba.Marker=Ea,Ba.Style=se,Ba.LngLat=t.L,Ba.LngLatBounds=L,Ba.Point=t.P,Ba.MercatorCoordinate=t.U,Ba.Evented=t.E,Ba.AJAXError=t.bh,Ba.config=t.c,Ba.CanvasSource=Z,Ba.GeoJSONSource=B,Ba.ImageSource=N,Ba.RasterDEMTileSource=F,Ba.RasterTileSource=k,Ba.VectorTileSource=R,Ba.VideoSource=U,Ba.setRTLTextPlugin=t.bi,Ba.getRTLTextPluginStatus=t.bj,Ba.prewarm=function(){st().acquire(J);},Ba.clearPrewarmedResources=function(){const t=it;t&&(t.isPreloaded()&&1===t.numActive()?(t.release(J),it=null):console.warn("Could not clear WebWorkers since there are active Map instances that still reference it. The pre-warmed WebWorker pool can only be cleared when all map instances have been removed with map.remove()"));},ka.extend(Ba,{isSafari:t.ac,getPerformanceMetrics:t.bf.getPerformanceMetrics}),Ba}));

		//
		// Our custom intro provides a specialized "define()" function, called by the
		// AMD modules below, that sets up the worker blob URL and then executes the
		// main module, storing its exported value as 'maplibregl'


		var maplibregl$1 = maplibregl;

		return maplibregl$1;

		}));
		
	} (maplibreGl));

	var maplibreGlExports = maplibreGl.exports;
	var maplibregl = /*@__PURE__*/getDefaultExportFromCjs(maplibreGlExports);

	/**
	 *  base64.ts
	 *
	 *  Licensed under the BSD 3-Clause License.
	 *    http://opensource.org/licenses/BSD-3-Clause
	 *
	 *  References:
	 *    http://en.wikipedia.org/wiki/Base64
	 *
	 * @author Dan Kogai (https://github.com/dankogai)
	 */
	const version$1 = '3.7.5';
	/**
	 * @deprecated use lowercase `version`.
	 */
	const VERSION = version$1;
	const _hasatob = typeof atob === 'function';
	const _hasbtoa = typeof btoa === 'function';
	const _hasBuffer = typeof Buffer === 'function';
	const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
	const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
	const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	const b64chs = Array.prototype.slice.call(b64ch);
	const b64tab = ((a) => {
	    let tab = {};
	    a.forEach((c, i) => tab[c] = i);
	    return tab;
	})(b64chs);
	const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
	const _fromCC = String.fromCharCode.bind(String);
	const _U8Afrom = typeof Uint8Array.from === 'function'
	    ? Uint8Array.from.bind(Uint8Array)
	    : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
	const _mkUriSafe = (src) => src
	    .replace(/=/g, '').replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_');
	const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
	/**
	 * polyfill version of `btoa`
	 */
	const btoaPolyfill = (bin) => {
	    // console.log('polyfilled');
	    let u32, c0, c1, c2, asc = '';
	    const pad = bin.length % 3;
	    for (let i = 0; i < bin.length;) {
	        if ((c0 = bin.charCodeAt(i++)) > 255 ||
	            (c1 = bin.charCodeAt(i++)) > 255 ||
	            (c2 = bin.charCodeAt(i++)) > 255)
	            throw new TypeError('invalid character found');
	        u32 = (c0 << 16) | (c1 << 8) | c2;
	        asc += b64chs[u32 >> 18 & 63]
	            + b64chs[u32 >> 12 & 63]
	            + b64chs[u32 >> 6 & 63]
	            + b64chs[u32 & 63];
	    }
	    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
	};
	/**
	 * does what `window.btoa` of web browsers do.
	 * @param {String} bin binary string
	 * @returns {string} Base64-encoded string
	 */
	const _btoa = _hasbtoa ? (bin) => btoa(bin)
	    : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
	        : btoaPolyfill;
	const _fromUint8Array = _hasBuffer
	    ? (u8a) => Buffer.from(u8a).toString('base64')
	    : (u8a) => {
	        // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
	        const maxargs = 0x1000;
	        let strs = [];
	        for (let i = 0, l = u8a.length; i < l; i += maxargs) {
	            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
	        }
	        return _btoa(strs.join(''));
	    };
	/**
	 * converts a Uint8Array to a Base64 string.
	 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
	 * @returns {string} Base64 string
	 */
	const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
	// This trick is found broken https://github.com/dankogai/js-base64/issues/130
	// const utob = (src: string) => unescape(encodeURIComponent(src));
	// reverting good old fationed regexp
	const cb_utob = (c) => {
	    if (c.length < 2) {
	        var cc = c.charCodeAt(0);
	        return cc < 0x80 ? c
	            : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
	                + _fromCC(0x80 | (cc & 0x3f)))
	                : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
	                    + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
	                    + _fromCC(0x80 | (cc & 0x3f)));
	    }
	    else {
	        var cc = 0x10000
	            + (c.charCodeAt(0) - 0xD800) * 0x400
	            + (c.charCodeAt(1) - 0xDC00);
	        return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
	            + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
	            + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
	            + _fromCC(0x80 | (cc & 0x3f)));
	    }
	};
	const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
	/**
	 * @deprecated should have been internal use only.
	 * @param {string} src UTF-8 string
	 * @returns {string} UTF-16 string
	 */
	const utob = (u) => u.replace(re_utob, cb_utob);
	//
	const _encode = _hasBuffer
	    ? (s) => Buffer.from(s, 'utf8').toString('base64')
	    : _TE
	        ? (s) => _fromUint8Array(_TE.encode(s))
	        : (s) => _btoa(utob(s));
	/**
	 * converts a UTF-8-encoded string to a Base64 string.
	 * @param {boolean} [urlsafe] if `true` make the result URL-safe
	 * @returns {string} Base64 string
	 */
	const encode = (src, urlsafe = false) => urlsafe
	    ? _mkUriSafe(_encode(src))
	    : _encode(src);
	/**
	 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
	 * @returns {string} Base64 string
	 */
	const encodeURI = (src) => encode(src, true);
	// This trick is found broken https://github.com/dankogai/js-base64/issues/130
	// const btou = (src: string) => decodeURIComponent(escape(src));
	// reverting good old fationed regexp
	const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
	const cb_btou = (cccc) => {
	    switch (cccc.length) {
	        case 4:
	            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
	                | ((0x3f & cccc.charCodeAt(1)) << 12)
	                | ((0x3f & cccc.charCodeAt(2)) << 6)
	                | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
	            return (_fromCC((offset >>> 10) + 0xD800)
	                + _fromCC((offset & 0x3FF) + 0xDC00));
	        case 3:
	            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
	                | ((0x3f & cccc.charCodeAt(1)) << 6)
	                | (0x3f & cccc.charCodeAt(2)));
	        default:
	            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
	                | (0x3f & cccc.charCodeAt(1)));
	    }
	};
	/**
	 * @deprecated should have been internal use only.
	 * @param {string} src UTF-16 string
	 * @returns {string} UTF-8 string
	 */
	const btou = (b) => b.replace(re_btou, cb_btou);
	/**
	 * polyfill version of `atob`
	 */
	const atobPolyfill = (asc) => {
	    // console.log('polyfilled');
	    asc = asc.replace(/\s+/g, '');
	    if (!b64re.test(asc))
	        throw new TypeError('malformed base64.');
	    asc += '=='.slice(2 - (asc.length & 3));
	    let u24, bin = '', r1, r2;
	    for (let i = 0; i < asc.length;) {
	        u24 = b64tab[asc.charAt(i++)] << 18
	            | b64tab[asc.charAt(i++)] << 12
	            | (r1 = b64tab[asc.charAt(i++)]) << 6
	            | (r2 = b64tab[asc.charAt(i++)]);
	        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
	            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
	                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
	    }
	    return bin;
	};
	/**
	 * does what `window.atob` of web browsers do.
	 * @param {String} asc Base64-encoded string
	 * @returns {string} binary string
	 */
	const _atob = _hasatob ? (asc) => atob(_tidyB64(asc))
	    : _hasBuffer ? (asc) => Buffer.from(asc, 'base64').toString('binary')
	        : atobPolyfill;
	//
	const _toUint8Array = _hasBuffer
	    ? (a) => _U8Afrom(Buffer.from(a, 'base64'))
	    : (a) => _U8Afrom(_atob(a).split('').map(c => c.charCodeAt(0)));
	/**
	 * converts a Base64 string to a Uint8Array.
	 */
	const toUint8Array = (a) => _toUint8Array(_unURI(a));
	//
	const _decode = _hasBuffer
	    ? (a) => Buffer.from(a, 'base64').toString('utf8')
	    : _TD
	        ? (a) => _TD.decode(_toUint8Array(a))
	        : (a) => btou(_atob(a));
	const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == '-' ? '+' : '/'));
	/**
	 * converts a Base64 string to a UTF-8 string.
	 * @param {String} src Base64 string.  Both normal and URL-safe are supported
	 * @returns {string} UTF-8 string
	 */
	const decode = (src) => _decode(_unURI(src));
	/**
	 * check if a value is a valid Base64 string
	 * @param {String} src a value to check
	  */
	const isValid = (src) => {
	    if (typeof src !== 'string')
	        return false;
	    const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
	    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
	};
	//
	const _noEnum = (v) => {
	    return {
	        value: v, enumerable: false, writable: true, configurable: true
	    };
	};
	/**
	 * extend String.prototype with relevant methods
	 */
	const extendString = function () {
	    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
	    _add('fromBase64', function () { return decode(this); });
	    _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
	    _add('toBase64URI', function () { return encode(this, true); });
	    _add('toBase64URL', function () { return encode(this, true); });
	    _add('toUint8Array', function () { return toUint8Array(this); });
	};
	/**
	 * extend Uint8Array.prototype with relevant methods
	 */
	const extendUint8Array = function () {
	    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
	    _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
	    _add('toBase64URI', function () { return fromUint8Array(this, true); });
	    _add('toBase64URL', function () { return fromUint8Array(this, true); });
	};
	/**
	 * extend Builtin prototypes with relevant methods
	 */
	const extendBuiltins = () => {
	    extendString();
	    extendUint8Array();
	};
	const gBase64 = {
	    version: version$1,
	    VERSION: VERSION,
	    atob: _atob,
	    atobPolyfill: atobPolyfill,
	    btoa: _btoa,
	    btoaPolyfill: btoaPolyfill,
	    fromBase64: decode,
	    toBase64: encode,
	    encode: encode,
	    encodeURI: encodeURI,
	    encodeURL: encodeURI,
	    utob: utob,
	    btou: btou,
	    decode: decode,
	    isValid: isValid,
	    fromUint8Array: fromUint8Array,
	    toUint8Array: toUint8Array,
	    extendString: extendString,
	    extendUint8Array: extendUint8Array,
	    extendBuiltins: extendBuiltins,
	};

	var events = {exports: {}};

	var R = typeof Reflect === 'object' ? Reflect : null;
	var ReflectApply = R && typeof R.apply === 'function'
	  ? R.apply
	  : function ReflectApply(target, receiver, args) {
	    return Function.prototype.apply.call(target, receiver, args);
	  };

	var ReflectOwnKeys;
	if (R && typeof R.ownKeys === 'function') {
	  ReflectOwnKeys = R.ownKeys;
	} else if (Object.getOwnPropertySymbols) {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target)
	      .concat(Object.getOwnPropertySymbols(target));
	  };
	} else {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target);
	  };
	}

	function ProcessEmitWarning(warning) {
	  if (console && console.warn) console.warn(warning);
	}

	var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
	  return value !== value;
	};

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}
	events.exports = EventEmitter;
	events.exports.once = once;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._eventsCount = 0;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	var defaultMaxListeners = 10;

	function checkListener(listener) {
	  if (typeof listener !== 'function') {
	    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
	  }
	}

	Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
	  enumerable: true,
	  get: function() {
	    return defaultMaxListeners;
	  },
	  set: function(arg) {
	    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
	      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
	    }
	    defaultMaxListeners = arg;
	  }
	});

	EventEmitter.init = function() {

	  if (this._events === undefined ||
	      this._events === Object.getPrototypeOf(this)._events) {
	    this._events = Object.create(null);
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
	    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
	  }
	  this._maxListeners = n;
	  return this;
	};

	function _getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return _getMaxListeners(this);
	};

	EventEmitter.prototype.emit = function emit(type) {
	  var args = [];
	  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
	  var doError = (type === 'error');

	  var events = this._events;
	  if (events !== undefined)
	    doError = (doError && events.error === undefined);
	  else if (!doError)
	    return false;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    var er;
	    if (args.length > 0)
	      er = args[0];
	    if (er instanceof Error) {
	      // Note: The comments on the `throw` lines are intentional, they show
	      // up in Node's output if this results in an unhandled exception.
	      throw er; // Unhandled 'error' event
	    }
	    // At least give some kind of context to the user
	    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
	    err.context = er;
	    throw err; // Unhandled 'error' event
	  }

	  var handler = events[type];

	  if (handler === undefined)
	    return false;

	  if (typeof handler === 'function') {
	    ReflectApply(handler, this, args);
	  } else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      ReflectApply(listeners[i], this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  checkListener(listener);

	  events = target._events;
	  if (events === undefined) {
	    events = target._events = Object.create(null);
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener !== undefined) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (existing === undefined) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] =
	        prepend ? [listener, existing] : [existing, listener];
	      // If we've already got an array, just append.
	    } else if (prepend) {
	      existing.unshift(listener);
	    } else {
	      existing.push(listener);
	    }

	    // Check for listener leak
	    m = _getMaxListeners(target);
	    if (m > 0 && existing.length > m && !existing.warned) {
	      existing.warned = true;
	      // No error code for this since it is a Warning
	      // eslint-disable-next-line no-restricted-syntax
	      var w = new Error('Possible EventEmitter memory leak detected. ' +
	                          existing.length + ' ' + String(type) + ' listeners ' +
	                          'added. Use emitter.setMaxListeners() to ' +
	                          'increase limit');
	      w.name = 'MaxListenersExceededWarning';
	      w.emitter = target;
	      w.type = type;
	      w.count = existing.length;
	      ProcessEmitWarning(w);
	    }
	  }

	  return target;
	}

	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function onceWrapper() {
	  if (!this.fired) {
	    this.target.removeListener(this.type, this.wrapFn);
	    this.fired = true;
	    if (arguments.length === 0)
	      return this.listener.call(this.target);
	    return this.listener.apply(this.target, arguments);
	  }
	}

	function _onceWrap(target, type, listener) {
	  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
	  var wrapped = onceWrapper.bind(state);
	  wrapped.listener = listener;
	  state.wrapFn = wrapped;
	  return wrapped;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  checkListener(listener);
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      checkListener(listener);
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// Emits a 'removeListener' event if and only if the listener was removed.
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      checkListener(listener);

	      events = this._events;
	      if (events === undefined)
	        return this;

	      list = events[type];
	      if (list === undefined)
	        return this;

	      if (list === listener || list.listener === listener) {
	        if (--this._eventsCount === 0)
	          this._events = Object.create(null);
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length - 1; i >= 0; i--) {
	          if (list[i] === listener || list[i].listener === listener) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (position === 0)
	          list.shift();
	        else {
	          spliceOne(list, position);
	        }

	        if (list.length === 1)
	          events[type] = list[0];

	        if (events.removeListener !== undefined)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events, i;

	      events = this._events;
	      if (events === undefined)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (events.removeListener === undefined) {
	        if (arguments.length === 0) {
	          this._events = Object.create(null);
	          this._eventsCount = 0;
	        } else if (events[type] !== undefined) {
	          if (--this._eventsCount === 0)
	            this._events = Object.create(null);
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        var key;
	        for (i = 0; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = Object.create(null);
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners !== undefined) {
	        // LIFO order
	        for (i = listeners.length - 1; i >= 0; i--) {
	          this.removeListener(type, listeners[i]);
	        }
	      }

	      return this;
	    };

	function _listeners(target, type, unwrap) {
	  var events = target._events;

	  if (events === undefined)
	    return [];

	  var evlistener = events[type];
	  if (evlistener === undefined)
	    return [];

	  if (typeof evlistener === 'function')
	    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

	  return unwrap ?
	    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
	}

	EventEmitter.prototype.listeners = function listeners(type) {
	  return _listeners(this, type, true);
	};

	EventEmitter.prototype.rawListeners = function rawListeners(type) {
	  return _listeners(this, type, false);
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;

	  if (events !== undefined) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener !== undefined) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
	};

	function arrayClone(arr, n) {
	  var copy = new Array(n);
	  for (var i = 0; i < n; ++i)
	    copy[i] = arr[i];
	  return copy;
	}

	function spliceOne(list, index) {
	  for (; index + 1 < list.length; index++)
	    list[index] = list[index + 1];
	  list.pop();
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	function once(emitter, name) {
	  return new Promise(function (resolve, reject) {
	    function errorListener(err) {
	      emitter.removeListener(name, resolver);
	      reject(err);
	    }

	    function resolver() {
	      if (typeof emitter.removeListener === 'function') {
	        emitter.removeListener('error', errorListener);
	      }
	      resolve([].slice.call(arguments));
	    }
	    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
	    if (name !== 'error') {
	      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
	    }
	  });
	}

	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
	  if (typeof emitter.on === 'function') {
	    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
	  }
	}

	function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
	  if (typeof emitter.on === 'function') {
	    if (flags.once) {
	      emitter.once(name, listener);
	    } else {
	      emitter.on(name, listener);
	    }
	  } else if (typeof emitter.addEventListener === 'function') {
	    // EventTarget does not have `error` event semantics like Node
	    // EventEmitters, we do not listen for `error` events here.
	    emitter.addEventListener(name, function wrapListener(arg) {
	      // IE does not have builtin `{ once: true }` support so we
	      // have to do it manually.
	      if (flags.once) {
	        emitter.removeEventListener(name, wrapListener);
	      }
	      listener(arg);
	    });
	  } else {
	    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
	  }
	}

	var eventsExports = events.exports;
	var EventEmitter$1 = /*@__PURE__*/getDefaultExportFromCjs(eventsExports);

	function tryGettingFetch() {
	  if (typeof self !== "undefined") {
	    return fetch.bind(self);
	  }
	  if (typeof global !== "undefined" && global.fetch) {
	    return global.fetch;
	  }
	  return null;
	}
	class ClientConfig {
	  constructor() {
	    /**
	     * MapTiler Cloud API key
	     */
	    this._apiKey = "";
	    /**
	     * The fetch function. To be set if in Node < 18, otherwise
	     * will be automatically resolved.
	     */
	    this._fetch = tryGettingFetch();
	  }
	  /**
	   * Set the MapTiler Cloud API key
	   */
	  set apiKey(k) {
	    this._apiKey = k;
	  }
	  /**
	   * Get the MapTiler Cloud API key
	   */
	  get apiKey() {
	    return this._apiKey;
	  }
	  /**
	   * Set a the custom fetch function to replace the default one
	   */
	  set fetch(f) {
	    this._fetch = f;
	  }
	  /**
	   * Get the fetch fucntion
	   */
	  get fetch() {
	    return this._fetch;
	  }
	}
	const config$1 = new ClientConfig();

	const LanguageGeocoding = {
	  AUTO: "auto",
	  ALBANIAN: "sq",
	  ARABIC: "ar",
	  ARMENIAN: "hy",
	  AZERBAIJANI: "az",
	  BELORUSSIAN: "be",
	  BOSNIAN: "bs",
	  BRETON: "br",
	  BULGARIAN: "bg",
	  CATALAN: "ca",
	  CHINESE: "zh",
	  CROATIAN: "hr",
	  CZECH: "cs",
	  DANISH: "da",
	  DUTCH: "nl",
	  ENGLISH: "en",
	  ESPERANTO: "eo",
	  ESTONIAN: "et",
	  FINNISH: "fi",
	  FRENCH: "fr",
	  FRISIAN: "fy",
	  GEORGIAN: "ka",
	  GERMAN: "de",
	  GREEK: "el",
	  HEBREW: "he",
	  HUNGARIAN: "hu",
	  ICELANDIC: "is",
	  IRISH: "ga",
	  ITALIAN: "it",
	  JAPANESE: "ja",
	  KANNADA: "kn",
	  KAZAKH: "kk",
	  KOREAN: "ko",
	  ROMAN_LATIN: "la",
	  LATVIAN: "lv",
	  LITHUANIAN: "lt",
	  LUXEMBOURGISH: "lb",
	  MACEDONIAN: "mk",
	  MALTESE: "mt",
	  NORWEGIAN: "no",
	  POLISH: "pl",
	  PORTUGUESE: "pt",
	  ROMANIAN: "ro",
	  ROMANSH: "rm",
	  RUSSIAN: "ru",
	  SCOTTISH_GAELIC: "gd",
	  SERBIAN_CYRILLIC: "sr",
	  SLOVAK: "sk",
	  SLOVENE: "sl",
	  SPANISH: "es",
	  SWEDISH: "sv",
	  THAI: "th",
	  TURKISH: "tr",
	  UKRAINIAN: "uk",
	  WELSH: "cy"
	};
	const languageCodeSet$1 = new Set(Object.values(LanguageGeocoding));
	function getAutoLanguageGeocoding() {
	  if (typeof navigator === "undefined") {
	    return Intl.DateTimeFormat().resolvedOptions().locale.split("-")[0];
	  }
	  const canditatelangs = Array.from(
	    new Set(navigator.languages.map((l) => l.split("-")[0]))
	  ).filter((l) => languageCodeSet$1.has(l));
	  return canditatelangs.length ? canditatelangs[0] : LanguageGeocoding.ENGLISH;
	}

	async function callFetch(resource, options = {}) {
	  if (config$1.fetch === null) {
	    throw new Error(
	      "The fetch function was not found. If on NodeJS < 18 please specify the fetch function with config.fetch"
	    );
	  }
	  if (new URL(resource).searchParams.get("key").trim() === "") {
	    throw new Error(
	      "The MapTiler Cloud API key is missing. Set it in `config.apiKey` or get one for free at https://maptiler.com"
	    );
	  }
	  return config$1.fetch(resource, options);
	}

	const defaults$1 = {
	  maptilerApiURL: "https://api.maptiler.com/",
	  mapStyle: "streets-v2"
	};
	Object.freeze(defaults$1);

	class ServiceError extends Error {
	  constructor(res, customMessage = "") {
	    super(
	      `Call to enpoint ${res.url} failed with the status code ${res.status}. ${customMessage}`
	    );
	    this.res = res;
	  }
	}

	const customMessages$3 = {
	  400: "Query too long / Invalid parameters",
	  403: "Key is missing, invalid or restricted"
	};
	function addLanguageGeocodingOptions(searchParams, options) {
	  if (options.language == void 0) {
	    return;
	  }
	  const languages = Array.from(
	    new Set(
	      (Array.isArray(options.language) ? options.language : [options.language]).map(
	        (lang) => lang === LanguageGeocoding.AUTO ? getAutoLanguageGeocoding() : lang
	      )
	    )
	  ).join(",");
	  searchParams.set("language", languages);
	}
	function addCommonForwardAndReverseGeocodingOptions(searchParams, options) {
	  searchParams.set("key", options.apiKey ?? config$1.apiKey);
	  if (options.limit != void 0) {
	    searchParams.set("limit", String(options.limit));
	  }
	  if (options.types != void 0) {
	    searchParams.set("types", options.types.join(","));
	  }
	  addLanguageGeocodingOptions(searchParams, options);
	}
	function addForwardGeocodingOptions(searchParams, options) {
	  addCommonForwardAndReverseGeocodingOptions(searchParams, options);
	  if (options.bbox != void 0) {
	    searchParams.set("bbox", options.bbox.join(","));
	  }
	  if (options.proximity != void 0) {
	    searchParams.set("proximity", options.proximity.join(","));
	  }
	  if (options.country != void 0) {
	    searchParams.set("country", options.country.join(","));
	  }
	  if (options.fuzzyMatch != void 0) {
	    searchParams.set("fuzzyMatch", options.fuzzyMatch ? "true" : "false");
	  }
	  if (options.autocomplete != void 0) {
	    searchParams.set("autocomplete", options.autocomplete ? "true" : "false");
	  }
	}
	async function forward(query, options = {}) {
	  if (typeof query !== "string" || query.trim().length === 0) {
	    throw new Error("The query must be a non-empty string");
	  }
	  const endpoint = new URL(
	    `geocoding/${encodeURIComponent(query)}.json`,
	    defaults$1.maptilerApiURL
	  );
	  const { searchParams } = endpoint;
	  addForwardGeocodingOptions(searchParams, options);
	  const urlWithParams = endpoint.toString();
	  const res = await callFetch(urlWithParams);
	  if (!res.ok) {
	    throw new ServiceError(res, customMessages$3[res.status] ?? "");
	  }
	  const obj = await res.json();
	  return obj;
	}
	async function reverse(position, options = {}) {
	  if (!Array.isArray(position) || position.length < 2) {
	    throw new Error("The position must be an array of form [lng, lat].");
	  }
	  const endpoint = new URL(
	    `geocoding/${position[0]},${position[1]}.json`,
	    defaults$1.maptilerApiURL
	  );
	  addCommonForwardAndReverseGeocodingOptions(endpoint.searchParams, options);
	  const urlWithParams = endpoint.toString();
	  const res = await callFetch(urlWithParams);
	  if (!res.ok) {
	    throw new ServiceError(res, customMessages$3[res.status] ?? "");
	  }
	  const obj = await res.json();
	  return obj;
	}
	async function byId(id, options = {}) {
	  const endpoint = new URL(`geocoding/${id}.json`, defaults$1.maptilerApiURL);
	  endpoint.searchParams.set("key", options.apiKey ?? config$1.apiKey);
	  addLanguageGeocodingOptions(endpoint.searchParams, options);
	  const urlWithParams = endpoint.toString();
	  const res = await callFetch(urlWithParams);
	  if (!res.ok) {
	    throw new ServiceError(res, customMessages$3[res.status] ?? "");
	  }
	  const obj = await res.json();
	  return obj;
	}
	async function batch(queries, options = {}) {
	  if (!queries.length) {
	    return [];
	  }
	  const joinedQuery = queries.map((query) => encodeURIComponent(query)).join(";");
	  const endpoint = new URL(
	    `geocoding/${joinedQuery}.json`,
	    defaults$1.maptilerApiURL
	  );
	  const { searchParams } = endpoint;
	  addForwardGeocodingOptions(searchParams, options);
	  const urlWithParams = endpoint.toString();
	  const res = await callFetch(urlWithParams);
	  if (!res.ok) {
	    throw new ServiceError(res, customMessages$3[res.status] ?? "");
	  }
	  const obj = await res.json();
	  return queries.length === 1 ? [obj] : obj;
	}
	const geocoding = {
	  forward,
	  reverse,
	  byId,
	  batch,
	  language: LanguageGeocoding
	};

	const customMessages$2 = {
	  403: "Key is missing, invalid or restricted"
	};
	async function info(options = {}) {
	  const endpoint = new URL(`geolocation/ip.json`, defaults$1.maptilerApiURL);
	  endpoint.searchParams.set("key", options.apiKey ?? config$1.apiKey);
	  const urlWithParams = endpoint.toString();
	  const res = await callFetch(urlWithParams);
	  if (!res.ok) {
	    throw new ServiceError(
	      res,
	      res.status in customMessages$2 ? customMessages$2[res.status] : ""
	    );
	  }
	  const obj = await res.json();
	  return obj;
	}
	const geolocation = {
	  info
	};

	const customMessages$1 = {
	  403: "Key is missing, invalid or restricted"
	};
	async function search(query, options = {}) {
	  if (typeof query !== "string" || query.trim().length === 0) {
	    throw new Error("The query must be a non-empty string");
	  }
	  const endpoint = new URL(
	    `coordinates/search/${query}.json`,
	    defaults$1.maptilerApiURL
	  );
	  endpoint.searchParams.set("key", options.apiKey ?? config$1.apiKey);
	  if ("limit" in options) {
	    endpoint.searchParams.set("limit", options.limit.toString());
	  }
	  if ("transformations" in options) {
	    endpoint.searchParams.set(
	      "transformations",
	      options.transformations.toString()
	    );
	  }
	  if ("exports" in options) {
	    endpoint.searchParams.set("exports", options.exports.toString());
	  }
	  const urlWithParams = endpoint.toString();
	  const res = await callFetch(urlWithParams);
	  if (!res.ok) {
	    throw new ServiceError(
	      res,
	      res.status in customMessages$1 ? customMessages$1[res.status] : ""
	    );
	  }
	  const obj = await res.json();
	  return obj;
	}
	async function transform(positions, options = {}) {
	  const coordinatesStr = (Array.isArray(positions[0]) ? positions : [positions]).map((coord) => `${coord[0]},${coord[1]}`).join(";");
	  const endpoint = new URL(
	    `coordinates/transform/${coordinatesStr}.json`,
	    defaults$1.maptilerApiURL
	  );
	  endpoint.searchParams.set("key", options.apiKey ?? config$1.apiKey);
	  if ("sourceCrs" in options) {
	    endpoint.searchParams.set("s_srs", options.sourceCrs.toString());
	  }
	  if ("targetCrs" in options) {
	    endpoint.searchParams.set("t_srs", options.targetCrs.toString());
	  }
	  if ("operations" in options) {
	    endpoint.searchParams.set(
	      "ops",
	      (Array.isArray(options.operations) ? options.operations : [options.operations]).join("|")
	    );
	  }
	  const urlWithParams = endpoint.toString();
	  const res = await callFetch(urlWithParams);
	  if (!res.ok) {
	    throw new ServiceError(
	      res,
	      res.status in customMessages$1 ? customMessages$1[res.status] : ""
	    );
	  }
	  const obj = await res.json();
	  return obj;
	}
	const coordinates = {
	  search,
	  transform
	};

	const customMessages = {
	  403: "Key is missing, invalid or restricted"
	};
	async function get$1(dataId, options = {}) {
	  if (typeof dataId !== "string" || dataId.trim().length === 0) {
	    throw new Error("The data ID must be a non-empty string");
	  }
	  const endpoint = new URL(
	    `data/${encodeURIComponent(dataId)}/features.json`,
	    defaults$1.maptilerApiURL
	  );
	  endpoint.searchParams.set("key", options.apiKey ?? config$1.apiKey);
	  const urlWithParams = endpoint.toString();
	  const res = await callFetch(urlWithParams);
	  if (!res.ok) {
	    throw new ServiceError(
	      res,
	      res.status in customMessages ? customMessages[res.status] : ""
	    );
	  }
	  const obj = await res.json();
	  return obj;
	}
	const data = {
	  get: get$1
	};

	function expandMapStyle(style) {
	  const maptilerDomainRegex = /^maptiler:\/\/(.*)/;
	  let match;
	  const trimmed = style.trim();
	  let expandedStyle;
	  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
	    expandedStyle = trimmed;
	  } else if ((match = maptilerDomainRegex.exec(trimmed)) !== null) {
	    expandedStyle = `https://api.maptiler.com/maps/${match[1]}/style.json`;
	  } else {
	    expandedStyle = `https://api.maptiler.com/maps/${trimmed}/style.json`;
	  }
	  return expandedStyle;
	}
	class MapStyleVariant {
	  constructor(name, variantType, id, referenceStyle, description, imageURL) {
	    this.name = name;
	    this.variantType = variantType;
	    this.id = id;
	    this.referenceStyle = referenceStyle;
	    this.description = description;
	    this.imageURL = imageURL;
	  }
	  /**
	   * Get the human-friendly name
	   * @returns
	   */
	  getName() {
	    return this.name;
	  }
	  getFullName() {
	    return `${this.referenceStyle.getName()} ${this.name}`;
	  }
	  /**
	   * Get the variant type (eg. "DEFAULT", "DARK", "PASTEL", etc.)
	   * @returns
	   */
	  getType() {
	    return this.variantType;
	  }
	  /**
	   * Get the MapTiler Cloud id
	   * @returns
	   */
	  getId() {
	    return this.id;
	  }
	  /**
	   * Get the human-friendly description
	   */
	  getDescription() {
	    return this.description;
	  }
	  /**
	   * Get the reference style this variant belongs to
	   * @returns
	   */
	  getReferenceStyle() {
	    return this.referenceStyle;
	  }
	  /**
	   * Check if a variant of a given type exists for _this_ variants
	   * (eg. if this is a "DARK", then we can check if there is a "LIGHT" variant of it)
	   * @param variantType
	   * @returns
	   */
	  hasVariant(variantType) {
	    return this.referenceStyle.hasVariant(variantType);
	  }
	  /**
	   * Retrieve the variant of a given type. If not found, will return the "DEFAULT" variant.
	   * (eg. _this_ "DARK" variant does not have any "PASTEL" variant, then the "DEFAULT" is returned)
	   * @param variantType
	   * @returns
	   */
	  getVariant(variantType) {
	    return this.referenceStyle.getVariant(variantType);
	  }
	  /**
	   * Get all the variants for _this_ variants, except _this_ current one
	   * @returns
	   */
	  getVariants() {
	    return this.referenceStyle.getVariants().filter((v) => v !== this);
	  }
	  /**
	   * Get the image URL that represent _this_ variant
	   * @returns
	   */
	  getImageURL() {
	    return this.imageURL;
	  }
	  /**
	   * Get the style as usable by MapLibre, a string (URL) or a plain style description (StyleSpecification)
	   * @returns
	   */
	  getExpandedStyleURL() {
	    return expandMapStyle(this.getId());
	  }
	}
	class ReferenceMapStyle {
	  constructor(name, id) {
	    this.name = name;
	    this.id = id;
	    /**
	     * Variants that belong to this reference style, key being the reference type
	     */
	    this.variants = {};
	    /**
	     * Variants that belong to this reference style, ordered by relevance
	     */
	    this.orderedVariants = [];
	  }
	  /**
	   * Get the human-friendly name of this reference style
	   * @returns
	   */
	  getName() {
	    return this.name;
	  }
	  /**
	   * Get the id of _this_ reference style
	   * @returns
	   */
	  getId() {
	    return this.id;
	  }
	  /**
	   * Add a variant to _this_ reference style
	   * @param v
	   */
	  addVariant(v) {
	    this.variants[v.getType()] = v;
	    this.orderedVariants.push(v);
	  }
	  /**
	   * Check if a given variant type exists for this reference style
	   * @param variantType
	   * @returns
	   */
	  hasVariant(variantType) {
	    return variantType in this.variants;
	  }
	  /**
	   * Get a given variant. If the given type of variant does not exist for this reference style,
	   * then the most relevant default variant is returned instead
	   * @param variantType
	   * @returns
	   */
	  getVariant(variantType) {
	    return variantType in this.variants ? this.variants[variantType] : this.orderedVariants[0];
	  }
	  /**
	   * Get the list of variants for this reference style
	   * @returns
	   */
	  getVariants() {
	    return Object.values(this.variants);
	  }
	  /**
	   * Get the defualt variant for this reference style
	   * @returns
	   */
	  getDefaultVariant() {
	    return this.orderedVariants[0];
	  }
	}
	const mapStylePresetList = [
	  {
	    referenceStyleID: "STREETS",
	    name: "Streets",
	    description: "",
	    variants: [
	      {
	        id: "streets-v2",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "streets-v2-dark",
	        name: "Dark",
	        variantType: "DARK",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "streets-v2-light",
	        name: "Light",
	        variantType: "LIGHT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "streets-v2-night",
	        name: "Night",
	        variantType: "NIGHT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "streets-v2-pastel",
	        name: "Pastel",
	        variantType: "PASTEL",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "OUTDOOR",
	    name: "Outdoor",
	    description: "",
	    variants: [
	      {
	        id: "outdoor-v2",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "outdoor-v2-dark",
	        name: "Dark",
	        variantType: "DARK",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "WINTER",
	    name: "Winter",
	    description: "",
	    variants: [
	      {
	        id: "winter-v2",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "winter-v2-dark",
	        name: "Dark",
	        variantType: "DARK",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "SATELLITE",
	    name: "Satellite",
	    description: "",
	    variants: [
	      {
	        id: "satellite",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "HYBRID",
	    name: "Hybrid",
	    description: "",
	    variants: [
	      {
	        id: "hybrid",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "BASIC",
	    name: "Basic",
	    description: "",
	    variants: [
	      {
	        id: "basic-v2",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "basic-v2-dark",
	        name: "Dark",
	        variantType: "DARK",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "basic-v2-light",
	        name: "Light",
	        variantType: "LIGHT",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "BRIGHT",
	    name: "Bright",
	    description: "",
	    variants: [
	      {
	        id: "bright-v2",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "bright-v2-dark",
	        name: "Dark",
	        variantType: "DARK",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "bright-v2-light",
	        name: "Light",
	        variantType: "LIGHT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "bright-v2-pastel",
	        name: "Pastel",
	        variantType: "PASTEL",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "OPENSTREETMAP",
	    name: "OpenStreetMap",
	    description: "",
	    variants: [
	      {
	        id: "openstreetmap",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "TOPO",
	    name: "Topo",
	    description: "",
	    variants: [
	      {
	        id: "topo-v2",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "topo-v2-dark",
	        name: "Dark",
	        variantType: "DARK",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "topo-v2-shiny",
	        name: "Shiny",
	        variantType: "SHINY",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "topo-v2-pastel",
	        name: "Pastel",
	        variantType: "PASTEL",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "topo-v2-topographique",
	        name: "Topographique",
	        variantType: "TOPOGRAPHIQUE",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "VOYAGER",
	    name: "Voyager",
	    description: "",
	    variants: [
	      {
	        id: "voyager-v2",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "voyager-v2-darkmatter",
	        name: "Darkmatter",
	        variantType: "DARK",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "voyager-v2-positron",
	        name: "Positron",
	        variantType: "LIGHT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "voyager-v2-vintage",
	        name: "Vintage",
	        variantType: "VINTAGE",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "TONER",
	    name: "Toner",
	    description: "",
	    variants: [
	      {
	        id: "toner-v2",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "toner-v2-background",
	        name: "Background",
	        variantType: "BACKGROUND",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "toner-v2-lite",
	        name: "Lite",
	        variantType: "LITE",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "toner-v2-lines",
	        name: "Lines",
	        variantType: "LINES",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "DATAVIZ",
	    name: "Dataviz",
	    description: "",
	    variants: [
	      {
	        id: "dataviz",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "dataviz-dark",
	        name: "Dark",
	        variantType: "DARK",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "dataviz-light",
	        name: "Light",
	        variantType: "LIGHT",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "BACKDROP",
	    name: "Backdrop",
	    description: "",
	    variants: [
	      {
	        id: "backdrop",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "backdrop-dark",
	        name: "Dark",
	        variantType: "DARK",
	        description: "",
	        imageURL: ""
	      },
	      {
	        id: "backdrop-light",
	        name: "Light",
	        variantType: "LIGHT",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  },
	  {
	    referenceStyleID: "OCEAN",
	    name: "Ocean",
	    description: "",
	    variants: [
	      {
	        id: "ocean",
	        name: "Default",
	        variantType: "DEFAULT",
	        description: "",
	        imageURL: ""
	      }
	    ]
	  }
	];
	function makeReferenceStyleProxy(referenceStyle) {
	  return new Proxy(referenceStyle, {
	    get(target, prop, receiver) {
	      if (target.hasVariant(prop)) {
	        return target.getVariant(prop);
	      }
	      if (prop.toString().toUpperCase() === prop) {
	        return referenceStyle.getDefaultVariant();
	      }
	      return Reflect.get(target, prop, receiver);
	    }
	  });
	}
	function buildMapStyles() {
	  const mapStyle = {};
	  for (let i = 0; i < mapStylePresetList.length; i += 1) {
	    const refStyleInfo = mapStylePresetList[i];
	    const refStyle = makeReferenceStyleProxy(
	      new ReferenceMapStyle(refStyleInfo.name, refStyleInfo.referenceStyleID)
	    );
	    for (let j = 0; j < refStyleInfo.variants.length; j += 1) {
	      const variantInfo = refStyleInfo.variants[j];
	      const variant = new MapStyleVariant(
	        variantInfo.name,
	        // name
	        variantInfo.variantType,
	        // variantType
	        variantInfo.id,
	        // id
	        refStyle,
	        // referenceStyle
	        variantInfo.description,
	        variantInfo.imageURL
	        // imageURL
	      );
	      refStyle.addVariant(variant);
	    }
	    mapStyle[refStyleInfo.referenceStyleID] = refStyle;
	  }
	  return mapStyle;
	}
	function styleToStyle$1(style) {
	  if (!style) {
	    return MapStyle[mapStylePresetList[0].referenceStyleID].getDefaultVariant().getId();
	  }
	  if (typeof style === "string" || style instanceof String) {
	    return style.trim().toLowerCase();
	  }
	  if (style instanceof MapStyleVariant) {
	    return style.getId();
	  }
	  if (style instanceof ReferenceMapStyle) {
	    return style.getDefaultVariant().getId();
	  }
	}
	const MapStyle = buildMapStyles();

	function getSqSegDist(p, p1, p2) {
	  let x = p1[0], y = p1[1], dx = p2[0] - x, dy = p2[1] - y;
	  if (dx !== 0 || dy !== 0) {
	    const t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy);
	    if (t > 1) {
	      x = p2[0];
	      y = p2[1];
	    } else if (t > 0) {
	      x += dx * t;
	      y += dy * t;
	    }
	  }
	  dx = p[0] - x;
	  dy = p[1] - y;
	  return dx * dx + dy * dy;
	}
	function simplifyDPStep(points, first, last, sqTolerance, simplified) {
	  let maxSqDist = sqTolerance, index;
	  for (let i = first + 1; i < last; i++) {
	    const sqDist = getSqSegDist(points[i], points[first], points[last]);
	    if (sqDist > maxSqDist) {
	      index = i;
	      maxSqDist = sqDist;
	    }
	  }
	  if (maxSqDist > sqTolerance) {
	    if (index - first > 1) {
	      simplifyDPStep(points, first, index, sqTolerance, simplified);
	    }
	    simplified.push(points[index]);
	    if (last - index > 1) {
	      simplifyDPStep(points, index, last, sqTolerance, simplified);
	    }
	  }
	}
	function simplifyDouglasPeucker(points, sqTolerance) {
	  const last = points.length - 1;
	  const simplified = [points[0]];
	  simplifyDPStep(points, 0, last, sqTolerance, simplified);
	  simplified.push(points[last]);
	  return simplified;
	}
	function simplify(points, tolerance) {
	  if (points.length <= 2) {
	    return points;
	  }
	  const sqTolerance = tolerance !== void 0 ? tolerance * tolerance : 1;
	  const simplePoints = simplifyDouglasPeucker(points, sqTolerance);
	  return simplePoints;
	}

	function staticMapMarkerToString(marker, includeColor = true) {
	  let str = `${marker[0]},${marker[1]}`;
	  if (marker.length === 3 && includeColor) {
	    str += `,${marker[2]}`;
	  }
	  return str;
	}
	function simplifyAndStringify(path, maxNbChar = 3e3) {
	  let str = path.map((point) => point.join(",")).join("|");
	  let tolerance = 5e-6;
	  const toleranceStep = 1e-5;
	  while (str.length > maxNbChar) {
	    const simplerPath = simplify(path, tolerance);
	    str = simplerPath.map((point) => `${point[0]},${point[1]}`).join("|");
	    tolerance += toleranceStep;
	  }
	  return str;
	}
	function centered(center, zoom, options = {}) {
	  const style = styleToStyle$1(options.style);
	  const scale = options.hiDPI ? "@2x" : "";
	  const format = options.format ?? "png";
	  let width = ~~(options.width ?? 1024);
	  let height = ~~(options.height ?? 1024);
	  if (options.hiDPI) {
	    width = ~~(width / 2);
	    height = ~~(height / 2);
	  }
	  const endpoint = new URL(
	    `maps/${encodeURIComponent(style)}/static/${center[0]},${center[1]},${zoom}/${width}x${height}${scale}.${format}`,
	    defaults$1.maptilerApiURL
	  );
	  if ("attribution" in options) {
	    endpoint.searchParams.set("attribution", options.attribution.toString());
	  }
	  if ("markers" in options) {
	    let markerStr = "";
	    const hasIcon = "markerIcon" in options;
	    if (hasIcon) {
	      markerStr += `icon:${options.markerIcon}|`;
	    }
	    if (hasIcon && "markerAnchor" in options) {
	      markerStr += `anchor:${options.markerAnchor}|`;
	    }
	    if (hasIcon && options.hiDPI) {
	      markerStr += `scale:2|`;
	    }
	    const markerList = Array.isArray(options.markers[0]) ? options.markers : [options.markers];
	    markerStr += markerList.map((m) => staticMapMarkerToString(m, !hasIcon)).join("|");
	    endpoint.searchParams.set("markers", markerStr);
	  }
	  if ("path" in options) {
	    let pathStr = "";
	    pathStr += `fill:${options.pathFillColor ?? "none"}|`;
	    if ("pathStrokeColor" in options) {
	      pathStr += `stroke:${options.pathStrokeColor}|`;
	    }
	    if ("pathWidth" in options) {
	      const pathWidth = options.pathWidth / (options.hiDPI ? 2 : 1);
	      pathStr += `width:${pathWidth.toString()}|`;
	    }
	    pathStr += simplifyAndStringify(options.path);
	    endpoint.searchParams.set("path", pathStr);
	  }
	  endpoint.searchParams.set("key", options.apiKey ?? config$1.apiKey);
	  return endpoint.toString();
	}
	function bounded(boundingBox, options = {}) {
	  const style = styleToStyle$1(options.style);
	  const scale = options.hiDPI ? "@2x" : "";
	  const format = options.format ?? "png";
	  let width = ~~(options.width ?? 1024);
	  let height = ~~(options.height ?? 1024);
	  if (options.hiDPI) {
	    width = ~~(width / 2);
	    height = ~~(height / 2);
	  }
	  const endpoint = new URL(
	    `maps/${encodeURIComponent(style)}/static/${boundingBox[0]},${boundingBox[1]},${boundingBox[2]},${boundingBox[3]}/${width}x${height}${scale}.${format}`,
	    defaults$1.maptilerApiURL
	  );
	  if ("attribution" in options) {
	    endpoint.searchParams.set("attribution", options.attribution.toString());
	  }
	  if ("padding" in options) {
	    endpoint.searchParams.set("padding", options.padding.toString());
	  }
	  if ("markers" in options) {
	    let markerStr = "";
	    const hasIcon = "markerIcon" in options;
	    if (hasIcon) {
	      markerStr += `icon:${options.markerIcon}|`;
	    }
	    if (hasIcon && "markerAnchor" in options) {
	      markerStr += `anchor:${options.markerAnchor}|`;
	    }
	    if (hasIcon && options.hiDPI) {
	      markerStr += `scale:2|`;
	    }
	    const markerList = Array.isArray(options.markers[0]) ? options.markers : [options.markers];
	    markerStr += markerList.map((m) => staticMapMarkerToString(m, !hasIcon)).join("|");
	    endpoint.searchParams.set("markers", markerStr);
	  }
	  if ("path" in options) {
	    let pathStr = "";
	    pathStr += `fill:${options.pathFillColor ?? "none"}|`;
	    if ("pathStrokeColor" in options) {
	      pathStr += `stroke:${options.pathStrokeColor}|`;
	    }
	    if ("pathWidth" in options) {
	      const pathWidth = options.pathWidth / (options.hiDPI ? 2 : 1);
	      pathStr += `width:${pathWidth.toString()}|`;
	    }
	    pathStr += simplifyAndStringify(options.path);
	    endpoint.searchParams.set("path", pathStr);
	  }
	  endpoint.searchParams.set("key", options.apiKey ?? config$1.apiKey);
	  return endpoint.toString();
	}
	function automatic(options = {}) {
	  if (!("markers" in options) && !("path" in options)) {
	    throw new Error(
	      "Automatic static maps require markers and/or path to be created."
	    );
	  }
	  const style = styleToStyle$1(options.style);
	  const scale = options.hiDPI ? "@2x" : "";
	  const format = options.format ?? "png";
	  let width = ~~(options.width ?? 1024);
	  let height = ~~(options.height ?? 1024);
	  if (options.hiDPI) {
	    width = ~~(width / 2);
	    height = ~~(height / 2);
	  }
	  const endpoint = new URL(
	    `maps/${encodeURIComponent(
      style
    )}/static/auto/${width}x${height}${scale}.${format}`,
	    defaults$1.maptilerApiURL
	  );
	  if ("attribution" in options) {
	    endpoint.searchParams.set("attribution", options.attribution.toString());
	  }
	  if ("padding" in options) {
	    endpoint.searchParams.set("padding", options.padding.toString());
	  }
	  if ("markers" in options) {
	    let markerStr = "";
	    const hasIcon = "markerIcon" in options;
	    if (hasIcon) {
	      markerStr += `icon:${options.markerIcon}|`;
	    }
	    if (hasIcon && "markerAnchor" in options) {
	      markerStr += `anchor:${options.markerAnchor}|`;
	    }
	    if (hasIcon && options.hiDPI) {
	      markerStr += `scale:2|`;
	    }
	    const markerList = Array.isArray(options.markers[0]) ? options.markers : [options.markers];
	    markerStr += markerList.map((m) => staticMapMarkerToString(m, !hasIcon)).join("|");
	    endpoint.searchParams.set("markers", markerStr);
	  }
	  if ("path" in options) {
	    let pathStr = "";
	    pathStr += `fill:${options.pathFillColor ?? "none"}|`;
	    if ("pathStrokeColor" in options) {
	      pathStr += `stroke:${options.pathStrokeColor}|`;
	    }
	    if ("pathWidth" in options) {
	      const pathWidth = options.pathWidth / (options.hiDPI ? 2 : 1);
	      pathStr += `width:${pathWidth.toString()}|`;
	    }
	    pathStr += simplifyAndStringify(options.path);
	    endpoint.searchParams.set("path", pathStr);
	  }
	  endpoint.searchParams.set("key", options.apiKey ?? config$1.apiKey);
	  return endpoint.toString();
	}
	const staticMaps = {
	  centered,
	  bounded,
	  automatic
	};

	// Unique ID creation requires a high quality random # generator. In the browser we therefore
	// require the crypto API and do not support built-in fallback to lower quality random number
	// generators (like Math.random()).
	let getRandomValues;
	const rnds8 = new Uint8Array(16);
	function rng() {
	  // lazy load so that environments that need to polyfill have a chance to do so
	  if (!getRandomValues) {
	    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
	    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

	    if (!getRandomValues) {
	      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
	    }
	  }

	  return getRandomValues(rnds8);
	}

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */

	const byteToHex = [];

	for (let i = 0; i < 256; ++i) {
	  byteToHex.push((i + 0x100).toString(16).slice(1));
	}

	function unsafeStringify(arr, offset = 0) {
	  // Note: Be careful editing this code!  It's been tuned for performance
	  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
	  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
	}

	const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
	var native = {
	  randomUUID
	};

	function v4(options, buf, offset) {
	  if (native.randomUUID && !buf && !options) {
	    return native.randomUUID();
	  }

	  options = options || {};
	  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

	  rnds[6] = rnds[6] & 0x0f | 0x40;
	  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

	  if (buf) {
	    offset = offset || 0;

	    for (let i = 0; i < 16; ++i) {
	      buf[offset + i] = rnds[i];
	    }

	    return buf;
	  }

	  return unsafeStringify(rnds);
	}

	const Language = {
	  /**
	   * The visitor language mode concatenates the prefered language from the user settings and the "default name".
	   * Note: The "default name" is equivalent to OSM's `{name}`, which can be the most recognized names a global
	   * scale or the local name.
	   * This mode is helpful in the context where a user needs to access both the local names and the names in their
	   * own language, for instance when traveling abroad, where signs likely to be only available in the local language.
	   */
	  VISITOR: "visitor",
	  /**
	   * The visitor language mode concatenates English and the "default name".
	   * Note: The "default name" is equivalent to OSM's `{name}`, which can be the most recognized names a global
	   * scale or the local name.
	   * This mode is helpful in the context where a user needs to access both the local names and the names in their
	   * own language, for instance when traveling abroad, where signs likely to be only available in the local language.
	   */
	  VISITOR_ENGLISH: "visitor_en",
	  /**
	   * Language as the style is designed. Not that this is the default state and one
	   * the language has been changed to another than `STYLE`, then it cannot be set back to `STYLE`.
	   */
	  STYLE: "style",
	  /**
	   * AUTO mode uses the language of the browser
	   */
	  AUTO: "auto",
	  /**
	   * STYLE is a custom flag to keep the language of the map as defined into the style.
	   * If STYLE is set in the constructor, then further modification of the language
	   * with `.setLanguage()` is not possible.
	   */
	  STYLE_LOCK: "style_lock",
	  /**
	   * Default fallback languages that uses latin charaters
	   */
	  LATIN: "name:latin",
	  /**
	   * Default fallback languages that uses non-latin charaters
	   */
	  NON_LATIN: "name:nonlatin",
	  /**
	   * Labels are in their local language, when available
	   */
	  LOCAL: "name",
	  /**
	   * International name
	   */
	  INTERNATIONAL: "name_int",
	  ALBANIAN: "name:sq",
	  AMHARIC: "name:am",
	  ARABIC: "name:ar",
	  ARMENIAN: "name:hy",
	  AZERBAIJANI: "name:az",
	  BASQUE: "name:eu",
	  BELORUSSIAN: "name:be",
	  BENGALI: "name:bn",
	  BOSNIAN: "name:bs",
	  BRETON: "name:br",
	  BULGARIAN: "name:bg",
	  CATALAN: "name:ca",
	  CHINESE: "name:zh",
	  TRADITIONAL_CHINESE: "name:zh-Hant",
	  SIMPLIFIED_CHINESE: "name:zh-Hans",
	  CORSICAN: "name:co",
	  CROATIAN: "name:hr",
	  CZECH: "name:cs",
	  DANISH: "name:da",
	  DUTCH: "name:nl",
	  ENGLISH: "name:en",
	  ESPERANTO: "name:eo",
	  ESTONIAN: "name:et",
	  FINNISH: "name:fi",
	  FRENCH: "name:fr",
	  FRISIAN: "name:fy",
	  GEORGIAN: "name:ka",
	  GERMAN: "name:de",
	  GREEK: "name:el",
	  HEBREW: "name:he",
	  HINDI: "name:hi",
	  HUNGARIAN: "name:hu",
	  ICELANDIC: "name:is",
	  INDONESIAN: "name:id",
	  IRISH: "name:ga",
	  ITALIAN: "name:it",
	  JAPANESE: "name:ja",
	  JAPANESE_HIRAGANA: "name:ja-Hira",
	  JAPANESE_KANA: "name:ja_kana",
	  JAPANESE_LATIN: "name:ja_rm",
	  JAPANESE_2018: "name:ja-Latn",
	  KANNADA: "name:kn",
	  KAZAKH: "name:kk",
	  KOREAN: "name:ko",
	  KOREAN_LATIN: "name:ko-Latn",
	  KURDISH: "name:ku",
	  ROMAN_LATIN: "name:la",
	  LATVIAN: "name:lv",
	  LITHUANIAN: "name:lt",
	  LUXEMBOURGISH: "name:lb",
	  MACEDONIAN: "name:mk",
	  MALAYALAM: "name:ml",
	  MALTESE: "name:mt",
	  NORWEGIAN: "name:no",
	  OCCITAN: "name:oc",
	  PERSIAN: "name:fa",
	  POLISH: "name:pl",
	  PORTUGUESE: "name:pt",
	  PUNJABI: "name:pa",
	  WESTERN_PUNJABI: "name:pnb",
	  ROMANIAN: "name:ro",
	  ROMANSH: "name:rm",
	  RUSSIAN: "name:ru",
	  SCOTTISH_GAELIC: "name:gd",
	  SERBIAN_CYRILLIC: "name:sr",
	  SERBIAN_LATIN: "name:sr-Latn",
	  SLOVAK: "name:sk",
	  SLOVENE: "name:sl",
	  SPANISH: "name:es",
	  SWEDISH: "name:sv",
	  TAMIL: "name:ta",
	  TELUGU: "name:te",
	  THAI: "name:th",
	  TURKISH: "name:tr",
	  UKRAINIAN: "name:uk",
	  URDU: "name:ur",
	  VIETNAMIAN_LATIN: "name:vi",
	  WELSH: "name:cy"
	};
	const languagesIsoSet = new Set(Object.values(Language));
	function isLanguageSupported(lang) {
	  return languagesIsoSet.has(lang);
	}
	const languageCodeSet = new Set(Object.values(Language));
	function getBrowserLanguage() {
	  if (typeof navigator === "undefined") {
	    return `name:${Intl.DateTimeFormat().resolvedOptions().locale.split("-")[0]}`;
	  }
	  const canditatelangs = Array.from(
	    new Set(navigator.languages.map((l) => `name:${l.split("-")[0]}`))
	  ).filter((l) => languageCodeSet.has(l));
	  return canditatelangs.length ? canditatelangs[0] : Language.LOCAL;
	}

	const defaults = {
	  maptilerLogoURL: "https://api.maptiler.com/resources/logo.svg",
	  maptilerURL: "https://www.maptiler.com/",
	  maptilerApiHost: "api.maptiler.com",
	  rtlPluginURL: "https://cdn.maptiler.com/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.min.js",
	  primaryLanguage: Language.STYLE,
	  secondaryLanguage: Language.LOCAL,
	  terrainSourceURL: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json",
	  terrainSourceId: "maptiler-terrain"
	};
	Object.freeze(defaults);

	var __defProp$b = Object.defineProperty;
	var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __publicField$8 = (obj, key, value) => {
	  __defNormalProp$b(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	const MAPTILER_SESSION_ID = v4();
	class SdkConfig extends EventEmitter$1 {
	  constructor() {
	    super();
	    /**
	     * The primary language. By default, the language of the web browser is used.
	     */
	    __publicField$8(this, "primaryLanguage", defaults.primaryLanguage);
	    /**
	     * The secondary language, to overwrite the default language defined in the map style.
	     * This settings is highly dependant on the style compatibility and may not work in most cases.
	     */
	    __publicField$8(this, "secondaryLanguage");
	    /**
	     * Setting on whether of not the SDK runs with a session logic.
	     * A "session" is started at the initialization of the SDK and finished when the browser
	     * page is being refreshed.
	     * When `session` is enabled (default: true), the extra URL param `mtsid` is added to queries
	     * on the MapTiler Cloud API. This allows MapTiler to enable "session based billing".
	     */
	    __publicField$8(this, "session", true);
	    /**
	     * Unit to be used
	     */
	    __publicField$8(this, "_unit", "metric");
	    /**
	     * MapTiler Cloud API key
	     */
	    __publicField$8(this, "_apiKey", "");
	  }
	  /**
	   * Set the unit system
	   */
	  set unit(u) {
	    this._unit = u;
	    this.emit("unit", u);
	  }
	  /**
	   * Get the unit system
	   */
	  get unit() {
	    return this._unit;
	  }
	  /**
	   * Set the MapTiler Cloud API key
	   */
	  set apiKey(k) {
	    this._apiKey = k;
	    config$1.apiKey = k;
	    this.emit("apiKey", k);
	  }
	  /**
	   * Get the MapTiler Cloud API key
	   */
	  get apiKey() {
	    return this._apiKey;
	  }
	  /**
	   * Set a the custom fetch function to replace the default one
	   */
	  set fetch(f) {
	    config$1.fetch = f;
	  }
	  /**
	   * Get the fetch fucntion
	   */
	  get fetch() {
	    return config$1.fetch;
	  }
	}
	const config = new SdkConfig();

	class LogoControl extends maplibregl.LogoControl {
	  onAdd(map) {
	    return super.onAdd(map);
	  }
	}

	var __defProp$a = Object.defineProperty;
	var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __publicField$7 = (obj, key, value) => {
	  __defNormalProp$a(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	class MaptilerLogoControl extends LogoControl {
	  constructor(options = {}) {
	    var _a, _b;
	    super(options);
	    __publicField$7(this, "logoURL", "");
	    __publicField$7(this, "linkURL", "");
	    this.logoURL = (_a = options.logoURL) != null ? _a : defaults.maptilerLogoURL;
	    this.linkURL = (_b = options.linkURL) != null ? _b : defaults.maptilerURL;
	  }
	  onAdd(map) {
	    var _a;
	    this._map = map;
	    this._compact = (_a = this.options.compact) != null ? _a : false;
	    this._container = window.document.createElement("div");
	    this._container.className = "maplibregl-ctrl";
	    const anchor = window.document.createElement("a");
	    anchor.style.backgroundRepeat = "no-repeat";
	    anchor.style.cursor = "pointer";
	    anchor.style.display = "block";
	    anchor.style.height = "23px";
	    anchor.style.margin = "0 0 -4px -4px";
	    anchor.style.overflow = "hidden";
	    anchor.style.width = "88px";
	    anchor.style.backgroundImage = `url(${this.logoURL})`;
	    anchor.style.backgroundSize = "100px 30px";
	    anchor.style.width = "100px";
	    anchor.style.height = "30px";
	    anchor.target = "_blank";
	    anchor.rel = "noopener";
	    anchor.href = this.linkURL;
	    anchor.setAttribute("aria-label", "MapTiler logo");
	    anchor.setAttribute("rel", "noopener");
	    this._container.appendChild(anchor);
	    this._container.style.display = "block";
	    this._map.on("resize", this._updateCompact);
	    this._updateCompact();
	    return this._container;
	  }
	}

	var __defProp$9 = Object.defineProperty;
	var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
	var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
	var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __spreadValues$5 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$5.call(b, prop))
	      __defNormalProp$9(a, prop, b[prop]);
	  if (__getOwnPropSymbols$5)
	    for (var prop of __getOwnPropSymbols$5(b)) {
	      if (__propIsEnum$5.call(b, prop))
	        __defNormalProp$9(a, prop, b[prop]);
	    }
	  return a;
	};
	function enableRTL() {
	  if (maplibregl.getRTLTextPluginStatus() === "unavailable") {
	    maplibregl.setRTLTextPlugin(
	      defaults.rtlPluginURL,
	      (err) => {
	        if (err)
	          console.error(err);
	      },
	      true
	      // Lazy load the plugin
	    );
	  }
	}
	function bindAll(fns, context) {
	  fns.forEach((fn) => {
	    if (typeof context[fn] !== "function")
	      return;
	    context[fn] = context[fn].bind(context);
	  });
	}
	function DOMcreate(tagName, className, container) {
	  const el = window.document.createElement(tagName);
	  if (className !== void 0)
	    el.className = className;
	  if (container)
	    container.appendChild(el);
	  return el;
	}
	function DOMremove(node) {
	  if (node.parentNode) {
	    node.parentNode.removeChild(node);
	  }
	}
	function maptilerCloudTransformRequest(url, _resourceType) {
	  let reqUrl = null;
	  try {
	    reqUrl = new URL(url);
	  } catch (e) {
	    return {
	      url
	    };
	  }
	  if (reqUrl.host === defaults.maptilerApiHost) {
	    if (!reqUrl.searchParams.has("key")) {
	      reqUrl.searchParams.append("key", config.apiKey);
	    }
	    if (config.session) {
	      reqUrl.searchParams.append("mtsid", MAPTILER_SESSION_ID);
	    }
	  }
	  return {
	    url: reqUrl.href
	  };
	}
	function combineTransformRequest(userDefinedRTF) {
	  return function(url, resourceType) {
	    var _a;
	    if (userDefinedRTF !== void 0) {
	      const rp = userDefinedRTF(url, resourceType);
	      const rp2 = maptilerCloudTransformRequest((_a = rp == null ? void 0 : rp.url) != null ? _a : "");
	      return __spreadValues$5(__spreadValues$5({}, rp), rp2);
	    } else {
	      return maptilerCloudTransformRequest(url);
	    }
	  };
	}
	function generateRandomString() {
	  return Math.random().toString(36).substring(2);
	}
	function isUUID(s) {
	  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
	  return regexExp.test(s);
	}
	function jsonParseNoThrow(doc) {
	  try {
	    return JSON.parse(doc);
	  } catch (e) {
	  }
	  return null;
	}

	function styleToStyle(style) {
	  if (!style) {
	    return MapStyle[mapStylePresetList[0].referenceStyleID].getDefaultVariant().getExpandedStyleURL();
	  }
	  if (typeof style === "string" || style instanceof String) {
	    if (!style.startsWith("http") && style.toLowerCase().includes(".json")) {
	      return style;
	    } else {
	      return expandMapStyle(style);
	    }
	  }
	  if (style instanceof MapStyleVariant) {
	    return style.getExpandedStyleURL();
	  }
	  if (style instanceof ReferenceMapStyle) {
	    return style.getDefaultVariant().getExpandedStyleURL();
	  }
	  return style;
	}

	var __defProp$8 = Object.defineProperty;
	var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __publicField$6 = (obj, key, value) => {
	  __defNormalProp$8(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	class MaptilerTerrainControl {
	  constructor() {
	    __publicField$6(this, "_map");
	    __publicField$6(this, "_container");
	    __publicField$6(this, "_terrainButton");
	    bindAll(["_toggleTerrain", "_updateTerrainIcon"], this);
	  }
	  onAdd(map) {
	    this._map = map;
	    this._container = DOMcreate("div", "maplibregl-ctrl maplibregl-ctrl-group");
	    this._terrainButton = DOMcreate(
	      "button",
	      "maplibregl-ctrl-terrain",
	      this._container
	    );
	    DOMcreate("span", "maplibregl-ctrl-icon", this._terrainButton).setAttribute(
	      "aria-hidden",
	      "true"
	    );
	    this._terrainButton.type = "button";
	    this._terrainButton.addEventListener("click", this._toggleTerrain);
	    this._updateTerrainIcon();
	    this._map.on("terrain", this._updateTerrainIcon);
	    return this._container;
	  }
	  onRemove() {
	    DOMremove(this._container);
	    this._map.off("terrain", this._updateTerrainIcon);
	    this._map = void 0;
	  }
	  _toggleTerrain() {
	    if (this._map.hasTerrain()) {
	      this._map.disableTerrain();
	    } else {
	      this._map.enableTerrain();
	    }
	    this._updateTerrainIcon();
	  }
	  _updateTerrainIcon() {
	    this._terrainButton.classList.remove("maplibregl-ctrl-terrain");
	    this._terrainButton.classList.remove("maplibregl-ctrl-terrain-enabled");
	    if (this._map.hasTerrain()) {
	      this._terrainButton.classList.add("maplibregl-ctrl-terrain-enabled");
	      this._terrainButton.title = this._map._getUIString(
	        "TerrainControl.disableTerrain"
	      );
	    } else {
	      this._terrainButton.classList.add("maplibregl-ctrl-terrain");
	      this._terrainButton.title = this._map._getUIString(
	        "TerrainControl.enableTerrain"
	      );
	    }
	  }
	}

	class NavigationControl extends maplibregl.NavigationControl {
	  onAdd(map) {
	    return super.onAdd(map);
	  }
	}

	var __defProp$7 = Object.defineProperty;
	var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __publicField$5 = (obj, key, value) => {
	  __defNormalProp$7(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	class MaptilerNavigationControl extends NavigationControl {
	  constructor() {
	    super({
	      showCompass: true,
	      showZoom: true,
	      visualizePitch: true
	    });
	    /**
	     * Overloading: Limit how flat the compass icon can get
	     */
	    __publicField$5(this, "_rotateCompassArrow", () => {
	      const rotate = this.options.visualizePitch ? `scale(${Math.min(
        1.5,
        1 / Math.pow(
          Math.cos(this._map.transform.pitch * (Math.PI / 180)),
          0.5
        )
      )}) rotateX(${Math.min(70, this._map.transform.pitch)}deg) rotateZ(${this._map.transform.angle * (180 / Math.PI)}deg)` : `rotate(${this._map.transform.angle * (180 / Math.PI)}deg)`;
	      this._compassIcon.style.transform = rotate;
	    });
	    this._compass.removeEventListener(
	      "click",
	      this._compass.clickFunction
	    );
	    this._compass.addEventListener("click", (e) => {
	      {
	        const currentPitch = this._map.getPitch();
	        if (currentPitch === 0) {
	          this._map.easeTo({ pitch: Math.min(this._map.getMaxPitch(), 80) });
	        } else {
	          if (this.options.visualizePitch) {
	            this._map.resetNorthPitch({}, { originalEvent: e });
	          } else {
	            this._map.resetNorth({}, { originalEvent: e });
	          }
	        }
	      }
	    });
	  }
	  /**
	   * Overloading: the button now stores its click callback so that we can later on delete it and replace it
	   */
	  _createButton(className, fn) {
	    const button = super._createButton(className, fn);
	    button.clickFunction = fn;
	    return button;
	  }
	}

	class GeolocateControl extends maplibregl.GeolocateControl {
	  onAdd(map) {
	    return super.onAdd(map);
	  }
	}

	var __defProp$6 = Object.defineProperty;
	var __defProps$3 = Object.defineProperties;
	var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
	var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
	var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __spreadValues$4 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$4.call(b, prop))
	      __defNormalProp$6(a, prop, b[prop]);
	  if (__getOwnPropSymbols$4)
	    for (var prop of __getOwnPropSymbols$4(b)) {
	      if (__propIsEnum$4.call(b, prop))
	        __defNormalProp$6(a, prop, b[prop]);
	    }
	  return a;
	};
	var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
	var __publicField$4 = (obj, key, value) => {
	  __defNormalProp$6(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	const Marker$1 = maplibregl.Marker;
	const LngLat$1 = maplibregl.LngLat;
	const LngLatBounds$1 = maplibregl.LngLatBounds;
	class MaptilerGeolocateControl extends GeolocateControl {
	  constructor() {
	    super(...arguments);
	    __publicField$4(this, "lastUpdatedCenter", new LngLat$1(0, 0));
	    /**
	     * Update the camera location to center on the current position
	     *
	     * @param {Position} position the Geolocation API Position
	     * @private
	     */
	    __publicField$4(this, "_updateCamera", (position) => {
	      var _a, _b, _c;
	      const center = new LngLat$1(
	        position.coords.longitude,
	        position.coords.latitude
	      );
	      const radius = position.coords.accuracy;
	      const bearing = this._map.getBearing();
	      const options = __spreadProps$3(__spreadValues$4({
	        bearing
	      }, this.options.fitBoundsOptions), {
	        linear: true
	      });
	      const currentMapZoom = this._map.getZoom();
	      if (currentMapZoom > ((_c = (_b = (_a = this.options) == null ? void 0 : _a.fitBoundsOptions) == null ? void 0 : _b.maxZoom) != null ? _c : 30)) {
	        options.zoom = currentMapZoom;
	      }
	      this._map.fitBounds(LngLatBounds$1.fromLngLat(center, radius), options, {
	        geolocateSource: true
	        // tag this camera change so it won't cause the control to change to background state
	      });
	      let hasFittingBeenDisrupted = false;
	      const flagFittingDisruption = () => {
	        hasFittingBeenDisrupted = true;
	      };
	      this._map.once("click", flagFittingDisruption);
	      this._map.once("dblclick", flagFittingDisruption);
	      this._map.once("dragstart", flagFittingDisruption);
	      this._map.once("mousedown", flagFittingDisruption);
	      this._map.once("touchstart", flagFittingDisruption);
	      this._map.once("wheel", flagFittingDisruption);
	      this._map.once("moveend", () => {
	        this._map.off("click", flagFittingDisruption);
	        this._map.off("dblclick", flagFittingDisruption);
	        this._map.off("dragstart", flagFittingDisruption);
	        this._map.off("mousedown", flagFittingDisruption);
	        this._map.off("touchstart", flagFittingDisruption);
	        this._map.off("wheel", flagFittingDisruption);
	        if (hasFittingBeenDisrupted) {
	          return;
	        }
	        this.lastUpdatedCenter = this._map.getCenter();
	      });
	    });
	    __publicField$4(this, "_setupUI", (supported) => {
	      this.lastUpdatedCenter = this._map.getCenter();
	      this._container.addEventListener(
	        "contextmenu",
	        (e) => e.preventDefault()
	      );
	      this._geolocateButton = DOMcreate(
	        "button",
	        "maplibregl-ctrl-geolocate",
	        this._container
	      );
	      DOMcreate(
	        "span",
	        "maplibregl-ctrl-icon",
	        this._geolocateButton
	      ).setAttribute("aria-hidden", "true");
	      this._geolocateButton.type = "button";
	      if (supported === false) {
	        const title = this._map._getUIString(
	          "GeolocateControl.LocationNotAvailable"
	        );
	        this._geolocateButton.disabled = true;
	        this._geolocateButton.title = title;
	        this._geolocateButton.setAttribute("aria-label", title);
	      } else {
	        const title = this._map._getUIString("GeolocateControl.FindMyLocation");
	        this._geolocateButton.title = title;
	        this._geolocateButton.setAttribute("aria-label", title);
	      }
	      if (this.options.trackUserLocation) {
	        this._geolocateButton.setAttribute("aria-pressed", "false");
	        this._watchState = "OFF";
	      }
	      if (this.options.showUserLocation) {
	        this._dotElement = DOMcreate("div", "maplibregl-user-location-dot");
	        this._userLocationDotMarker = new Marker$1({ element: this._dotElement });
	        this._circleElement = DOMcreate(
	          "div",
	          "maplibregl-user-location-accuracy-circle"
	        );
	        this._accuracyCircleMarker = new Marker$1({
	          element: this._circleElement,
	          pitchAlignment: "map"
	        });
	        if (this.options.trackUserLocation)
	          this._watchState = "OFF";
	        this._map.on("move", this._onZoom);
	      }
	      this._geolocateButton.addEventListener("click", this.trigger.bind(this));
	      this._setup = true;
	      if (this.options.trackUserLocation) {
	        this._map.on("moveend", (event) => {
	          const fromResize = event.originalEvent && event.originalEvent.type === "resize";
	          const movingDistance = this.lastUpdatedCenter.distanceTo(
	            this._map.getCenter()
	          );
	          if (!event.geolocateSource && this._watchState === "ACTIVE_LOCK" && !fromResize && movingDistance > 1) {
	            this._watchState = "BACKGROUND";
	            this._geolocateButton.classList.add(
	              "maplibregl-ctrl-geolocate-background"
	            );
	            this._geolocateButton.classList.remove(
	              "maplibregl-ctrl-geolocate-active"
	            );
	            this.fire(new Event("trackuserlocationend"));
	          }
	        });
	      }
	    });
	    __publicField$4(this, "_onZoom", () => {
	      if (this.options.showUserLocation && this.options.showAccuracyCircle) {
	        this._updateCircleRadius();
	      }
	    });
	  }
	  _updateCircleRadius() {
	    if (this._watchState !== "BACKGROUND" && this._watchState !== "ACTIVE_LOCK") {
	      return;
	    }
	    const lastKnownLocation = [
	      this._lastKnownPosition.coords.longitude,
	      this._lastKnownPosition.coords.latitude
	    ];
	    const projectedLocation = this._map.project(lastKnownLocation);
	    const a = this._map.unproject([projectedLocation.x, projectedLocation.y]);
	    const b = this._map.unproject([
	      projectedLocation.x + 20,
	      projectedLocation.y
	    ]);
	    const metersPerPixel = a.distanceTo(b) / 20;
	    const circleDiameter = Math.ceil(2 * this._accuracy / metersPerPixel);
	    this._circleElement.style.width = `${circleDiameter}px`;
	    this._circleElement.style.height = `${circleDiameter}px`;
	  }
	}

	class AttributionControl extends maplibregl.AttributionControl {
	  onAdd(map) {
	    return super.onAdd(map);
	  }
	}

	class ScaleControl extends maplibregl.ScaleControl {
	  onAdd(map) {
	    return super.onAdd(map);
	  }
	}

	class FullscreenControl extends maplibregl.FullscreenControl {
	  onAdd(map) {
	    return super.onAdd(map);
	  }
	}

	var __defProp$5 = Object.defineProperty;
	var __defProps$2 = Object.defineProperties;
	var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
	var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
	var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __spreadValues$3 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$3.call(b, prop))
	      __defNormalProp$5(a, prop, b[prop]);
	  if (__getOwnPropSymbols$3)
	    for (var prop of __getOwnPropSymbols$3(b)) {
	      if (__propIsEnum$3.call(b, prop))
	        __defNormalProp$5(a, prop, b[prop]);
	    }
	  return a;
	};
	var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
	var __publicField$3 = (obj, key, value) => {
	  __defNormalProp$5(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	var __accessCheck = (obj, member, msg) => {
	  if (!member.has(obj))
	    throw TypeError("Cannot " + msg);
	};
	var __privateGet = (obj, member, getter) => {
	  __accessCheck(obj, member, "read from private field");
	  return getter ? getter.call(obj) : member.get(obj);
	};
	var __privateAdd = (obj, member, value) => {
	  if (member.has(obj))
	    throw TypeError("Cannot add the same private member more than once");
	  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	};
	var __privateSet = (obj, member, value, setter) => {
	  __accessCheck(obj, member, "write to private field");
	  setter ? setter.call(obj, value) : member.set(obj, value);
	  return value;
	};
	var __privateMethod = (obj, member, method) => {
	  __accessCheck(obj, member, "access private method");
	  return method;
	};
	var _options, _parentMap, _container, _canvasContainer, _parentRect, _differentStyle, _desync, _addParentRect, addParentRect_fn, _setParentBounds, setParentBounds_fn, _syncMaps, syncMaps_fn;
	class Minimap {
	  constructor(options, mapOptions) {
	    __privateAdd(this, _addParentRect);
	    __privateAdd(this, _setParentBounds);
	    __privateAdd(this, _syncMaps);
	    __privateAdd(this, _options, void 0);
	    __publicField$3(this, "map");
	    __privateAdd(this, _parentMap, void 0);
	    __privateAdd(this, _container, void 0);
	    __privateAdd(this, _canvasContainer, void 0);
	    __privateAdd(this, _parentRect, void 0);
	    __privateAdd(this, _differentStyle, false);
	    __privateAdd(this, _desync, void 0);
	    var _a;
	    if (options.style !== void 0)
	      __privateSet(this, _differentStyle, true);
	    __privateSet(this, _options, __spreadProps$2(__spreadValues$3(__spreadProps$2(__spreadValues$3({
	      // set defaults
	      zoomAdjust: -4,
	      position: "top-right"
	    }, mapOptions), {
	      // override any lingering control options
	      forceNoAttributionControl: true,
	      attributionControl: false,
	      navigationControl: false,
	      geolocateControl: false,
	      maptilerLogo: false,
	      minimap: false,
	      hash: false,
	      pitchAdjust: false
	    }), options), {
	      containerStyle: __spreadValues$3({
	        border: "1px solid #000",
	        width: "400px",
	        height: "300px"
	      }, (_a = options.containerStyle) != null ? _a : {})
	    }));
	    if (options.lockZoom !== void 0) {
	      __privateGet(this, _options).minZoom = options.lockZoom;
	      __privateGet(this, _options).maxZoom = options.lockZoom;
	    }
	  }
	  setStyle(style, options) {
	    if (!__privateGet(this, _differentStyle))
	      this.map.setStyle(style, options);
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	  }
	  addLayer(layer, beforeId) {
	    if (!__privateGet(this, _differentStyle))
	      this.map.addLayer(layer, beforeId);
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	    return this.map;
	  }
	  moveLayer(id, beforeId) {
	    if (!__privateGet(this, _differentStyle))
	      this.map.moveLayer(id, beforeId);
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	    return this.map;
	  }
	  removeLayer(id) {
	    if (!__privateGet(this, _differentStyle))
	      this.map.removeLayer(id);
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	    return this;
	  }
	  setLayerZoomRange(layerId, minzoom, maxzoom) {
	    if (!__privateGet(this, _differentStyle))
	      this.map.setLayerZoomRange(layerId, minzoom, maxzoom);
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	    return this;
	  }
	  setFilter(layerId, filter, options) {
	    if (!__privateGet(this, _differentStyle))
	      this.map.setFilter(layerId, filter, options);
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	    return this;
	  }
	  setPaintProperty(layerId, name, value, options) {
	    if (!__privateGet(this, _differentStyle))
	      this.map.setPaintProperty(layerId, name, value, options);
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	    return this;
	  }
	  setLayoutProperty(layerId, name, value, options) {
	    if (!__privateGet(this, _differentStyle))
	      this.map.setLayoutProperty(layerId, name, value, options);
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	    return this;
	  }
	  setGlyphs(glyphsUrl, options) {
	    if (!__privateGet(this, _differentStyle))
	      this.map.setGlyphs(glyphsUrl, options);
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	    return this;
	  }
	  onAdd(parentMap) {
	    __privateSet(this, _parentMap, parentMap);
	    __privateSet(this, _container, DOMcreate("div", "maplibregl-ctrl maplibregl-ctrl-group"));
	    for (const [key, value] of Object.entries(__privateGet(this, _options).containerStyle)) {
	      __privateGet(this, _container).style.setProperty(key, value);
	    }
	    __privateGet(this, _options).container = __privateGet(this, _container);
	    __privateGet(this, _options).zoom = parentMap.getZoom() + __privateGet(this, _options).zoomAdjust;
	    this.map = new Map$1(__privateGet(this, _options));
	    this.map.once("style.load", () => {
	      this.map.resize();
	    });
	    this.map.once("load", () => {
	      __privateMethod(this, _addParentRect, addParentRect_fn).call(this, __privateGet(this, _options).parentRect);
	      __privateSet(this, _desync, __privateMethod(this, _syncMaps, syncMaps_fn).call(this));
	    });
	    return __privateGet(this, _container);
	  }
	  onRemove() {
	    var _a;
	    (_a = __privateGet(this, _desync)) == null ? void 0 : _a.call(this);
	    DOMremove(__privateGet(this, _container));
	  }
	}
	_options = new WeakMap();
	_parentMap = new WeakMap();
	_container = new WeakMap();
	_canvasContainer = new WeakMap();
	_parentRect = new WeakMap();
	_differentStyle = new WeakMap();
	_desync = new WeakMap();
	_addParentRect = new WeakSet();
	addParentRect_fn = function(rect) {
	  if (rect === void 0 || rect.linePaint === void 0 && rect.fillPaint === void 0) {
	    return;
	  }
	  __privateSet(this, _parentRect, {
	    type: "Feature",
	    properties: {
	      name: "parentRect"
	    },
	    geometry: {
	      type: "Polygon",
	      coordinates: [[[], [], [], [], []]]
	    }
	  });
	  this.map.addSource("parentRect", {
	    type: "geojson",
	    data: __privateGet(this, _parentRect)
	  });
	  if (rect.lineLayout !== void 0 || rect.linePaint !== void 0) {
	    this.map.addLayer({
	      id: "parentRectOutline",
	      type: "line",
	      source: "parentRect",
	      layout: __spreadValues$3({}, rect.lineLayout),
	      paint: __spreadValues$3({
	        "line-color": "#FFF",
	        "line-width": 1,
	        "line-opacity": 0.85
	      }, rect.linePaint)
	    });
	  }
	  if (rect.fillPaint !== void 0) {
	    this.map.addLayer({
	      id: "parentRectFill",
	      type: "fill",
	      source: "parentRect",
	      layout: {},
	      paint: __spreadValues$3({
	        "fill-color": "#08F",
	        "fill-opacity": 0.135
	      }, rect.fillPaint)
	    });
	  }
	  __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	};
	_setParentBounds = new WeakSet();
	setParentBounds_fn = function() {
	  if (__privateGet(this, _parentRect) === void 0)
	    return;
	  const { devicePixelRatio } = window;
	  const canvas = __privateGet(this, _parentMap).getCanvas();
	  const width = canvas.width / devicePixelRatio;
	  const height = canvas.height / devicePixelRatio;
	  const unproject = __privateGet(this, _parentMap).unproject.bind(__privateGet(this, _parentMap));
	  const northWest = unproject([0, 0]);
	  const northEast = unproject([width, 0]);
	  const southWest = unproject([0, height]);
	  const southEast = unproject([width, height]);
	  __privateGet(this, _parentRect).geometry.coordinates = [
	    [
	      southWest.toArray(),
	      southEast.toArray(),
	      northEast.toArray(),
	      northWest.toArray(),
	      southWest.toArray()
	    ]
	  ];
	  const source = this.map.getSource("parentRect");
	  source.setData(__privateGet(this, _parentRect));
	};
	_syncMaps = new WeakSet();
	syncMaps_fn = function() {
	  const { pitchAdjust } = __privateGet(this, _options);
	  const parentCallback = () => {
	    sync("parent");
	  };
	  const minimapCallback = () => {
	    sync("minimap");
	  };
	  const on = () => {
	    __privateGet(this, _parentMap).on("move", parentCallback);
	    this.map.on("move", minimapCallback);
	  };
	  const off = () => {
	    __privateGet(this, _parentMap).off("move", parentCallback);
	    this.map.off("move", minimapCallback);
	  };
	  const sync = (which) => {
	    var _a;
	    off();
	    const from = which === "parent" ? __privateGet(this, _parentMap) : this.map;
	    const to = which === "parent" ? this.map : __privateGet(this, _parentMap);
	    const center = from.getCenter();
	    const zoom = from.getZoom() + ((_a = __privateGet(this, _options).zoomAdjust) != null ? _a : -4) * (which === "parent" ? 1 : -1);
	    const bearing = from.getBearing();
	    const pitch = from.getPitch();
	    to.jumpTo({
	      center,
	      zoom,
	      bearing,
	      pitch: pitchAdjust ? pitch : 0
	    });
	    __privateMethod(this, _setParentBounds, setParentBounds_fn).call(this);
	    on();
	  };
	  on();
	  return () => {
	    off();
	  };
	};

	var __defProp$4 = Object.defineProperty;
	var __defProps$1 = Object.defineProperties;
	var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
	var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
	var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __spreadValues$2 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$2.call(b, prop))
	      __defNormalProp$4(a, prop, b[prop]);
	  if (__getOwnPropSymbols$2)
	    for (var prop of __getOwnPropSymbols$2(b)) {
	      if (__propIsEnum$2.call(b, prop))
	        __defNormalProp$4(a, prop, b[prop]);
	    }
	  return a;
	};
	var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
	var __publicField$2 = (obj, key, value) => {
	  __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	var __async$1 = (__this, __arguments, generator) => {
	  return new Promise((resolve, reject) => {
	    var fulfilled = (value) => {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var rejected = (value) => {
	      try {
	        step(generator.throw(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
	    step((generator = generator.apply(__this, __arguments)).next());
	  });
	};
	const GeolocationType = {
	  POINT: "POINT",
	  COUNTRY: "COUNTRY"
	};
	let Map$1 = class Map extends maplibregl.Map {
	  constructor(options) {
	    var _a, _b, _c;
	    if (options.apiKey) {
	      config.apiKey = options.apiKey;
	    }
	    const style = styleToStyle(options.style);
	    const hashPreConstructor = location.hash;
	    if (!config.apiKey) {
	      console.warn(
	        "MapTiler Cloud API key is not set. Visit https://maptiler.com and try Cloud for free!"
	      );
	    }
	    super(__spreadProps$1(__spreadValues$2({}, options), {
	      style,
	      maplibreLogo: false,
	      transformRequest: combineTransformRequest(options.transformRequest)
	    }));
	    __publicField$2(this, "isTerrainEnabled", false);
	    __publicField$2(this, "terrainExaggeration", 1);
	    __publicField$2(this, "primaryLanguage");
	    __publicField$2(this, "terrainGrowing", false);
	    __publicField$2(this, "terrainFlattening", false);
	    __publicField$2(this, "minimap");
	    __publicField$2(this, "forceLanguageUpdate");
	    __publicField$2(this, "languageAlwaysBeenStyle");
	    this.primaryLanguage = (_a = options.language) != null ? _a : config.primaryLanguage;
	    this.forceLanguageUpdate = this.primaryLanguage === Language.STYLE || this.primaryLanguage === Language.STYLE_LOCK ? false : true;
	    this.languageAlwaysBeenStyle = this.primaryLanguage === Language.STYLE;
	    this.terrainExaggeration = (_b = options.terrainExaggeration) != null ? _b : this.terrainExaggeration;
	    this.once("styledata", () => __async$1(this, null, function* () {
	      if (!options.geolocate) {
	        return;
	      }
	      if (options.center) {
	        return;
	      }
	      if (options.hash && !!hashPreConstructor) {
	        return;
	      }
	      try {
	        if (options.geolocate === GeolocationType.COUNTRY) {
	          yield this.fitToIpBounds();
	          return;
	        }
	      } catch (e) {
	        console.warn(e.message);
	      }
	      let ipLocatedCameraHash;
	      try {
	        yield this.centerOnIpPoint(options.zoom);
	        ipLocatedCameraHash = this.getCameraHash();
	      } catch (e) {
	        console.warn(e.message);
	      }
	      const locationResult = yield navigator.permissions.query({
	        name: "geolocation"
	      });
	      if (locationResult.state === "granted") {
	        navigator.geolocation.getCurrentPosition(
	          // success callback
	          (data) => {
	            if (ipLocatedCameraHash !== this.getCameraHash()) {
	              return;
	            }
	            if (this.terrain) {
	              this.easeTo({
	                center: [data.coords.longitude, data.coords.latitude],
	                zoom: options.zoom || 12,
	                duration: 2e3
	              });
	            } else {
	              this.once("terrain", () => {
	                this.easeTo({
	                  center: [data.coords.longitude, data.coords.latitude],
	                  zoom: options.zoom || 12,
	                  duration: 2e3
	                });
	              });
	            }
	          },
	          // error callback
	          null,
	          // options
	          {
	            maximumAge: 24 * 3600 * 1e3,
	            // a day in millisec
	            timeout: 5e3,
	            // milliseconds
	            enableHighAccuracy: false
	          }
	        );
	      }
	    }));
	    this.on("styledata", () => {
	      this.setPrimaryLanguage(this.primaryLanguage);
	    });
	    this.on("styledata", () => {
	      if (this.getTerrain() === null && this.isTerrainEnabled) {
	        this.enableTerrain(this.terrainExaggeration);
	      }
	    });
	    this.once("load", () => __async$1(this, null, function* () {
	      enableRTL();
	    }));
	    this.once("load", () => __async$1(this, null, function* () {
	      let tileJsonContent = { logo: null };
	      try {
	        const possibleSources = Object.keys(this.style.sourceCaches).map((sourceName) => this.getSource(sourceName)).filter(
	          (s) => s && "url" in s && typeof s.url === "string" && (s == null ? void 0 : s.url.includes("tiles.json"))
	        );
	        const styleUrl = new URL(
	          possibleSources[0].url
	        );
	        if (!styleUrl.searchParams.has("key")) {
	          styleUrl.searchParams.append("key", config.apiKey);
	        }
	        const tileJsonRes = yield fetch(styleUrl.href);
	        tileJsonContent = yield tileJsonRes.json();
	      } catch (e) {
	      }
	      if (options.forceNoAttributionControl !== true) {
	        if ("logo" in tileJsonContent && tileJsonContent.logo) {
	          const logoURL = tileJsonContent.logo;
	          this.addControl(
	            new MaptilerLogoControl({ logoURL }),
	            options.logoPosition
	          );
	          if (options.attributionControl === false) {
	            this.addControl(
	              new AttributionControl({
	                customAttribution: options.customAttribution
	              })
	            );
	          }
	        } else if (options.maptilerLogo) {
	          this.addControl(new MaptilerLogoControl(), options.logoPosition);
	        }
	      }
	      if (options.scaleControl) {
	        const position = options.scaleControl === true || options.scaleControl === void 0 ? "bottom-right" : options.scaleControl;
	        const scaleControl = new ScaleControl({ unit: config.unit });
	        this.addControl(scaleControl, position);
	        config.on("unit", (unit) => {
	          scaleControl.setUnit(unit);
	        });
	      }
	      if (options.navigationControl !== false) {
	        const position = options.navigationControl === true || options.navigationControl === void 0 ? "top-right" : options.navigationControl;
	        this.addControl(new MaptilerNavigationControl(), position);
	      }
	      if (options.geolocateControl !== false) {
	        const position = options.geolocateControl === true || options.geolocateControl === void 0 ? "top-right" : options.geolocateControl;
	        this.addControl(
	          // new maplibregl.GeolocateControl({
	          new MaptilerGeolocateControl({
	            positionOptions: {
	              enableHighAccuracy: true,
	              maximumAge: 0,
	              timeout: 6e3
	            },
	            fitBoundsOptions: {
	              maxZoom: 15
	            },
	            trackUserLocation: true,
	            showAccuracyCircle: true,
	            showUserLocation: true
	          }),
	          position
	        );
	      }
	      if (options.terrainControl) {
	        const position = options.terrainControl === true || options.terrainControl === void 0 ? "top-right" : options.terrainControl;
	        this.addControl(new MaptilerTerrainControl(), position);
	      }
	      if (options.fullscreenControl) {
	        const position = options.fullscreenControl === true || options.fullscreenControl === void 0 ? "top-right" : options.fullscreenControl;
	        this.addControl(new FullscreenControl({}), position);
	      }
	    }));
	    let loadEventTriggered = false;
	    let terrainEventTriggered = false;
	    let terrainEventData;
	    this.once("load", () => {
	      loadEventTriggered = true;
	      if (terrainEventTriggered) {
	        this.fire("loadWithTerrain", terrainEventData);
	      }
	    });
	    this.once("style.load", () => {
	      var _a2;
	      const { minimap } = options;
	      if (typeof minimap === "object") {
	        const {
	          zoom,
	          center,
	          style: style2,
	          language,
	          apiKey,
	          maptilerLogo,
	          antialias,
	          refreshExpiredTiles,
	          maxBounds,
	          scrollZoom,
	          minZoom,
	          maxZoom,
	          boxZoom,
	          locale,
	          fadeDuration,
	          crossSourceCollisions,
	          clickTolerance,
	          bounds,
	          fitBoundsOptions,
	          pixelRatio,
	          validateStyle
	        } = options;
	        this.minimap = new Minimap(minimap, {
	          zoom,
	          center,
	          style: style2,
	          language,
	          apiKey,
	          container: "null",
	          maptilerLogo,
	          antialias,
	          refreshExpiredTiles,
	          maxBounds,
	          scrollZoom,
	          minZoom,
	          maxZoom,
	          boxZoom,
	          locale,
	          fadeDuration,
	          crossSourceCollisions,
	          clickTolerance,
	          bounds,
	          fitBoundsOptions,
	          pixelRatio,
	          validateStyle
	        });
	        this.addControl(this.minimap, (_a2 = minimap.position) != null ? _a2 : "bottom-left");
	      } else if (minimap === true) {
	        this.minimap = new Minimap({}, options);
	        this.addControl(this.minimap, "bottom-left");
	      } else if (minimap !== void 0 && minimap !== false) {
	        this.minimap = new Minimap({}, options);
	        this.addControl(this.minimap, minimap);
	      }
	    });
	    const terrainCallback = (evt) => {
	      if (!evt.terrain)
	        return;
	      terrainEventTriggered = true;
	      terrainEventData = {
	        type: "loadWithTerrain",
	        target: this,
	        terrain: evt.terrain
	      };
	      this.off("terrain", terrainCallback);
	      if (loadEventTriggered) {
	        this.fire("loadWithTerrain", terrainEventData);
	      }
	    };
	    this.on("terrain", terrainCallback);
	    if (options.terrain) {
	      this.enableTerrain(
	        (_c = options.terrainExaggeration) != null ? _c : this.terrainExaggeration
	      );
	    }
	  }
	  /**
	   * Awaits for _this_ Map instance to be "loaded" and returns a Promise to the Map.
	   * If _this_ Map instance is already loaded, the Promise is resolved directly,
	   * otherwise, it is resolved as a result of the "load" event.
	   * @returns
	   */
	  onLoadAsync() {
	    return __async$1(this, null, function* () {
	      return new Promise((resolve) => {
	        if (this.loaded()) {
	          return resolve(this);
	        }
	        this.once("load", () => {
	          resolve(this);
	        });
	      });
	    });
	  }
	  /**
	   * Awaits for _this_ Map instance to be "loaded" as well as with terrain being non-null for the first time
	   * and returns a Promise to the Map.
	   * If _this_ Map instance is already loaded with terrain, the Promise is resolved directly,
	   * otherwise, it is resolved as a result of the "loadWithTerrain" event.
	   * @returns
	   */
	  onLoadWithTerrainAsync() {
	    return __async$1(this, null, function* () {
	      return new Promise((resolve) => {
	        if (this.loaded() && this.terrain) {
	          return resolve(this);
	        }
	        this.once("loadWithTerrain", () => {
	          resolve(this);
	        });
	      });
	    });
	  }
	  /**
	   * Update the style of the map.
	   * Can be:
	   * - a full style URL (possibly with API key)
	   * - a shorthand with only the MapTIler style name (eg. `"streets-v2"`)
	   * - a longer form with the prefix `"maptiler://"` (eg. `"maptiler://streets-v2"`)
	   */
	  setStyle(style, options) {
	    var _a;
	    (_a = this.minimap) == null ? void 0 : _a.setStyle(style);
	    this.forceLanguageUpdate = true;
	    this.once("idle", () => {
	      this.forceLanguageUpdate = false;
	    });
	    return super.setStyle(styleToStyle(style), options);
	  }
	  /**
	   * Adds a [MapLibre style layer](https://maplibre.org/maplibre-style-spec/layers)
	   * to the map's style.
	   *
	   * A layer defines how data from a specified source will be styled. Read more about layer types
	   * and available paint and layout properties in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/layers).
	   *
	   * @param layer - The layer to add,
	   * conforming to either the MapLibre Style Specification's [layer definition](https://maplibre.org/maplibre-style-spec/layers) or,
	   * less commonly, the {@link CustomLayerInterface} specification.
	   * The MapLibre Style Specification's layer definition is appropriate for most layers.
	   *
	   * @param beforeId - The ID of an existing layer to insert the new layer before,
	   * resulting in the new layer appearing visually beneath the existing layer.
	   * If this argument is not specified, the layer will be appended to the end of the layers array
	   * and appear visually above all other layers.
	   *
	   * @returns `this`
	   */
	  addLayer(layer, beforeId) {
	    var _a;
	    (_a = this.minimap) == null ? void 0 : _a.addLayer(layer, beforeId);
	    return super.addLayer(layer, beforeId);
	  }
	  /**
	   * Moves a layer to a different z-position.
	   *
	   * @param id - The ID of the layer to move.
	   * @param beforeId - The ID of an existing layer to insert the new layer before. When viewing the map, the `id` layer will appear beneath the `beforeId` layer. If `beforeId` is omitted, the layer will be appended to the end of the layers array and appear above all other layers on the map.
	   * @returns `this`
	   *
	   * @example
	   * Move a layer with ID 'polygon' before the layer with ID 'country-label'. The `polygon` layer will appear beneath the `country-label` layer on the map.
	   * ```ts
	   * map.moveLayer('polygon', 'country-label');
	   * ```
	   */
	  moveLayer(id, beforeId) {
	    var _a;
	    (_a = this.minimap) == null ? void 0 : _a.moveLayer(id, beforeId);
	    return super.moveLayer(id, beforeId);
	  }
	  /**
	   * Removes the layer with the given ID from the map's style.
	   *
	   * An {@link ErrorEvent} will be fired if the image parameter is invald.
	   *
	   * @param id - The ID of the layer to remove
	   * @returns `this`
	   *
	   * @example
	   * If a layer with ID 'state-data' exists, remove it.
	   * ```ts
	   * if (map.getLayer('state-data')) map.removeLayer('state-data');
	   * ```
	   */
	  removeLayer(id) {
	    var _a;
	    (_a = this.minimap) == null ? void 0 : _a.removeLayer(id);
	    return super.removeLayer(id);
	  }
	  /**
	   * Sets the zoom extent for the specified style layer. The zoom extent includes the
	   * [minimum zoom level](https://maplibre.org/maplibre-style-spec/layers/#minzoom)
	   * and [maximum zoom level](https://maplibre.org/maplibre-style-spec/layers/#maxzoom))
	   * at which the layer will be rendered.
	   *
	   * Note: For style layers using vector sources, style layers cannot be rendered at zoom levels lower than the
	   * minimum zoom level of the _source layer_ because the data does not exist at those zoom levels. If the minimum
	   * zoom level of the source layer is higher than the minimum zoom level defined in the style layer, the style
	   * layer will not be rendered at all zoom levels in the zoom range.
	   */
	  setLayerZoomRange(layerId, minzoom, maxzoom) {
	    var _a;
	    (_a = this.minimap) == null ? void 0 : _a.setLayerZoomRange(layerId, minzoom, maxzoom);
	    return super.setLayerZoomRange(layerId, minzoom, maxzoom);
	  }
	  /**
	   * Sets the filter for the specified style layer.
	   *
	   * Filters control which features a style layer renders from its source.
	   * Any feature for which the filter expression evaluates to `true` will be
	   * rendered on the map. Those that are false will be hidden.
	   *
	   * Use `setFilter` to show a subset of your source data.
	   *
	   * To clear the filter, pass `null` or `undefined` as the second parameter.
	   */
	  setFilter(layerId, filter, options) {
	    var _a;
	    (_a = this.minimap) == null ? void 0 : _a.setFilter(layerId, filter, options);
	    return super.setFilter(layerId, filter, options);
	  }
	  /**
	   * Sets the value of a paint property in the specified style layer.
	   *
	   * @param layerId - The ID of the layer to set the paint property in.
	   * @param name - The name of the paint property to set.
	   * @param value - The value of the paint property to set.
	   * Must be of a type appropriate for the property, as defined in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/).
	   * @param options - Options object.
	   * @returns `this`
	   * @example
	   * ```ts
	   * map.setPaintProperty('my-layer', 'fill-color', '#faafee');
	   * ```
	   */
	  setPaintProperty(layerId, name, value, options) {
	    var _a;
	    (_a = this.minimap) == null ? void 0 : _a.setPaintProperty(layerId, name, value, options);
	    return super.setPaintProperty(layerId, name, value, options);
	  }
	  /**
	   * Sets the value of a layout property in the specified style layer.
	   * Layout properties define how the layer is styled.
	   * Layout properties for layers of the same type are documented together.
	   * Layers of different types have different layout properties.
	   * See the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/) for the complete list of layout properties.
	   * @param layerId - The ID of the layer to set the layout property in.
	   * @param name - The name of the layout property to set.
	   * @param value - The value of the layout property to set.
	   * Must be of a type appropriate for the property, as defined in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/).
	   * @param options - Options object.
	   * @returns `this`
	   */
	  setLayoutProperty(layerId, name, value, options) {
	    var _a;
	    (_a = this.minimap) == null ? void 0 : _a.setLayoutProperty(layerId, name, value, options);
	    return super.setLayoutProperty(layerId, name, value, options);
	  }
	  /**
	   * Sets the value of the style's glyphs property.
	   *
	   * @param glyphsUrl - Glyph URL to set. Must conform to the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/glyphs/).
	   * @param options - Options object.
	   * @returns `this`
	   * @example
	   * ```ts
	   * map.setGlyphs('https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf');
	   * ```
	   */
	  setGlyphs(glyphsUrl, options) {
	    var _a;
	    (_a = this.minimap) == null ? void 0 : _a.setGlyphs(glyphsUrl, options);
	    return super.setGlyphs(glyphsUrl, options);
	  }
	  getStyleLanguage() {
	    if (!this.style.stylesheet.metadata)
	      return null;
	    if (typeof this.style.stylesheet.metadata !== "object")
	      return null;
	    if ("maptiler:language" in this.style.stylesheet.metadata && typeof this.style.stylesheet.metadata["maptiler:language"] === "string") {
	      return this.style.stylesheet.metadata["maptiler:language"];
	    } else {
	      return null;
	    }
	  }
	  /**
	   * Define the primary language of the map. Note that not all the languages shorthands provided are available.
	   */
	  setLanguage(language) {
	    var _a, _b;
	    (_b = (_a = this.minimap) == null ? void 0 : _a.map) == null ? void 0 : _b.setLanguage(language);
	    this.onStyleReady(() => {
	      this.setPrimaryLanguage(language);
	    });
	  }
	  /**
	   * Define the primary language of the map. Note that not all the languages shorthands provided are available.
	   */
	  setPrimaryLanguage(language) {
	    const styleLanguage = this.getStyleLanguage();
	    if (!(language === Language.STYLE && (styleLanguage === Language.AUTO || styleLanguage === Language.VISITOR))) {
	      if (language !== Language.STYLE) {
	        this.languageAlwaysBeenStyle = false;
	      }
	      if (this.languageAlwaysBeenStyle) {
	        return;
	      }
	      if (this.primaryLanguage === language && !this.forceLanguageUpdate) {
	        return;
	      }
	    }
	    if (!isLanguageSupported(language)) {
	      console.warn(`The language "${language}" is not supported.`);
	      return;
	    }
	    if (this.primaryLanguage === Language.STYLE_LOCK) {
	      console.warn(
	        "The language cannot be changed because this map has been instantiated with the STYLE_LOCK language flag."
	      );
	      return;
	    }
	    this.primaryLanguage = language;
	    let languageNonStyle = language;
	    if (language === Language.STYLE) {
	      if (!styleLanguage) {
	        console.warn("The style has no default languages.");
	        return;
	      }
	      if (!isLanguageSupported(styleLanguage)) {
	        console.warn("The language defined in the style is not valid.");
	        return;
	      }
	      languageNonStyle = styleLanguage;
	    }
	    let langStr = Language.LOCAL;
	    let replacer = `{${langStr}}`;
	    if (languageNonStyle == Language.VISITOR) {
	      langStr = getBrowserLanguage();
	      replacer = [
	        "case",
	        ["all", ["has", langStr], ["has", Language.LOCAL]],
	        [
	          "case",
	          ["==", ["get", langStr], ["get", Language.LOCAL]],
	          ["get", Language.LOCAL],
	          [
	            "format",
	            ["get", langStr],
	            { "font-scale": 0.8 },
	            "\n",
	            ["get", Language.LOCAL],
	            { "font-scale": 1.1 }
	          ]
	        ],
	        ["get", Language.LOCAL]
	      ];
	    } else if (languageNonStyle == Language.VISITOR_ENGLISH) {
	      langStr = Language.ENGLISH;
	      replacer = [
	        "case",
	        ["all", ["has", langStr], ["has", Language.LOCAL]],
	        [
	          "case",
	          ["==", ["get", langStr], ["get", Language.LOCAL]],
	          ["get", Language.LOCAL],
	          [
	            "format",
	            ["get", langStr],
	            { "font-scale": 0.8 },
	            "\n",
	            ["get", Language.LOCAL],
	            { "font-scale": 1.1 }
	          ]
	        ],
	        ["get", Language.LOCAL]
	      ];
	    } else if (languageNonStyle === Language.AUTO) {
	      langStr = getBrowserLanguage();
	      replacer = [
	        "case",
	        ["has", langStr],
	        ["get", langStr],
	        ["get", Language.LOCAL]
	      ];
	    } else if (languageNonStyle === Language.LOCAL) {
	      langStr = Language.LOCAL;
	      replacer = `{${langStr}}`;
	    } else {
	      langStr = languageNonStyle;
	      replacer = [
	        "case",
	        ["has", langStr],
	        ["get", langStr],
	        ["get", Language.LOCAL]
	      ];
	    }
	    const { layers } = this.getStyle();
	    for (const { id, layout } of layers) {
	      if (!layout) {
	        continue;
	      }
	      if (!("text-field" in layout)) {
	        continue;
	      }
	      const textFieldLayoutProp = this.getLayoutProperty(id, "text-field");
	      if (typeof textFieldLayoutProp === "string" && (textFieldLayoutProp.toLowerCase().includes("ref") || textFieldLayoutProp.toLowerCase().includes("housenumber"))) {
	        continue;
	      }
	      this.setLayoutProperty(id, "text-field", replacer);
	    }
	  }
	  /**
	   * Get the primary language
	   * @returns
	   */
	  getPrimaryLanguage() {
	    return this.primaryLanguage;
	  }
	  /**
	   * Get the exaggeration factor applied to the terrain
	   * @returns
	   */
	  getTerrainExaggeration() {
	    return this.terrainExaggeration;
	  }
	  /**
	   * Know if terrian is enabled or not
	   * @returns
	   */
	  hasTerrain() {
	    return this.isTerrainEnabled;
	  }
	  growTerrain(exaggeration, durationMs = 1e3) {
	    if (!this.terrain) {
	      return;
	    }
	    const startTime = performance.now();
	    const currentExaggeration = this.terrain.exaggeration;
	    const deltaExaggeration = exaggeration - currentExaggeration;
	    const updateExaggeration = () => {
	      if (!this.terrain) {
	        return;
	      }
	      if (this.terrainFlattening) {
	        return;
	      }
	      const positionInLoop = (performance.now() - startTime) / durationMs;
	      if (positionInLoop < 0.99) {
	        const exaggerationFactor = 1 - Math.pow(1 - positionInLoop, 4);
	        const newExaggeration = currentExaggeration + exaggerationFactor * deltaExaggeration;
	        this.terrain.exaggeration = newExaggeration;
	        requestAnimationFrame(updateExaggeration);
	      } else {
	        this.terrainGrowing = false;
	        this.terrainFlattening = false;
	        this.terrain.exaggeration = exaggeration;
	      }
	      this.triggerRepaint();
	    };
	    this.terrainGrowing = true;
	    this.terrainFlattening = false;
	    requestAnimationFrame(updateExaggeration);
	  }
	  /**
	   * Enables the 3D terrain visualization
	   */
	  enableTerrain(exaggeration = this.terrainExaggeration) {
	    if (exaggeration < 0) {
	      console.warn("Terrain exaggeration cannot be negative.");
	      return;
	    }
	    const dataEventTerrainGrow = (evt) => __async$1(this, null, function* () {
	      if (!this.terrain) {
	        return;
	      }
	      if (evt.type !== "data" || evt.dataType !== "source" || !("source" in evt)) {
	        return;
	      }
	      if (evt.sourceId !== "maptiler-terrain") {
	        return;
	      }
	      const source = evt.source;
	      if (source.type !== "raster-dem") {
	        return;
	      }
	      if (!evt.isSourceLoaded) {
	        return;
	      }
	      this.off("data", dataEventTerrainGrow);
	      this.growTerrain(exaggeration);
	    });
	    const addTerrain = () => {
	      this.isTerrainEnabled = true;
	      this.terrainExaggeration = exaggeration;
	      this.on("data", dataEventTerrainGrow);
	      this.addSource(defaults.terrainSourceId, {
	        type: "raster-dem",
	        url: defaults.terrainSourceURL
	      });
	      this.setTerrain({
	        source: defaults.terrainSourceId,
	        exaggeration: 0
	      });
	    };
	    if (this.getTerrain()) {
	      this.isTerrainEnabled = true;
	      this.growTerrain(exaggeration);
	      return;
	    }
	    if (this.loaded() || this.isTerrainEnabled) {
	      addTerrain();
	    } else {
	      this.once("load", () => {
	        if (this.getTerrain() && this.getSource(defaults.terrainSourceId)) {
	          return;
	        }
	        addTerrain();
	      });
	    }
	  }
	  /**
	   * Disable the 3D terrain visualization
	   */
	  disableTerrain() {
	    if (!this.terrain) {
	      return;
	    }
	    this.isTerrainEnabled = false;
	    const animationLoopDuration = 1 * 1e3;
	    const startTime = performance.now();
	    const currentExaggeration = this.terrain.exaggeration;
	    const updateExaggeration = () => {
	      if (!this.terrain) {
	        return;
	      }
	      if (this.terrainGrowing) {
	        return;
	      }
	      const positionInLoop = (performance.now() - startTime) / animationLoopDuration;
	      if (positionInLoop < 0.99) {
	        const exaggerationFactor = Math.pow(1 - positionInLoop, 4);
	        const newExaggeration = currentExaggeration * exaggerationFactor;
	        this.terrain.exaggeration = newExaggeration;
	        requestAnimationFrame(updateExaggeration);
	      } else {
	        this.terrain.exaggeration = 0;
	        this.terrainGrowing = false;
	        this.terrainFlattening = false;
	        this.setTerrain();
	        if (this.getSource(defaults.terrainSourceId)) {
	          this.removeSource(defaults.terrainSourceId);
	        }
	      }
	      this.triggerRepaint();
	    };
	    this.terrainGrowing = false;
	    this.terrainFlattening = true;
	    requestAnimationFrame(updateExaggeration);
	  }
	  /**
	   * Sets the 3D terrain exageration factor.
	   * If the terrain was not enabled prior to the call of this method,
	   * the method `.enableTerrain()` will be called.
	   * If `animate` is `true`, the terrain transformation will be animated in the span of 1 second.
	   * If `animate` is `false`, no animated transition to the newly defined exaggeration.
	   */
	  setTerrainExaggeration(exaggeration, animate = true) {
	    if (!animate && this.terrain) {
	      this.terrainExaggeration = exaggeration;
	      this.terrain.exaggeration = exaggeration;
	      this.triggerRepaint();
	    } else {
	      this.enableTerrain(exaggeration);
	    }
	  }
	  /**
	   * Perform an action when the style is ready. It could be at the moment of calling this method
	   * or later.
	   */
	  onStyleReady(cb) {
	    if (this.isStyleLoaded()) {
	      cb();
	    } else {
	      this.once("styledata", () => {
	        cb();
	      });
	    }
	  }
	  fitToIpBounds() {
	    return __async$1(this, null, function* () {
	      const ipGeolocateResult = yield geolocation.info();
	      this.fitBounds(
	        ipGeolocateResult.country_bounds,
	        {
	          duration: 0,
	          padding: 100
	        }
	      );
	    });
	  }
	  centerOnIpPoint(zoom) {
	    return __async$1(this, null, function* () {
	      var _a, _b;
	      const ipGeolocateResult = yield geolocation.info();
	      this.jumpTo({
	        center: [
	          (_a = ipGeolocateResult == null ? void 0 : ipGeolocateResult.longitude) != null ? _a : 0,
	          (_b = ipGeolocateResult == null ? void 0 : ipGeolocateResult.latitude) != null ? _b : 0
	        ],
	        zoom: zoom || 11
	      });
	    });
	  }
	  getCameraHash() {
	    const hashBin = new Float32Array(5);
	    const center = this.getCenter();
	    hashBin[0] = center.lng;
	    hashBin[1] = center.lat;
	    hashBin[2] = this.getZoom();
	    hashBin[3] = this.getPitch();
	    hashBin[4] = this.getBearing();
	    return gBase64.fromUint8Array(new Uint8Array(hashBin.buffer));
	  }
	  /**
	   * Get the SDK config object.
	   * This is convenient to dispatch the SDK configuration to externally built layers
	   * that do not directly have access to the SDK configuration but do have access to a Map instance.
	   */
	  getSdkConfig() {
	    return config;
	  }
	  /**
	   * Get the MapTiler session ID. Convenient to dispatch to externaly built component
	   * that do not directly have access to the SDK configuration but do have access to a Map instance.
	   * @returns
	   */
	  getMaptilerSessionId() {
	    return MAPTILER_SESSION_ID;
	  }
	  /**
	   *  Updates the requestManager's transform request with a new function.
	   *
	   * @param transformRequest A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests.
	   *    Expected to return an object with a `url` property and optionally `headers` and `credentials` properties
	   *
	   * @returns {Map} `this`
	   *
	   *  @example
	   *  map.setTransformRequest((url: string, resourceType: string) => {});
	   */
	  setTransformRequest(transformRequest) {
	    super.setTransformRequest(combineTransformRequest(transformRequest));
	    return this;
	  }
	  /**
	   * Loads an image. This is an async equivalent of `Map.loadImage`
	   */
	  loadImageAsync(url) {
	    return __async$1(this, null, function* () {
	      return new Promise((resolve, reject) => {
	        this.loadImage(
	          url,
	          (error, image) => {
	            if (error) {
	              reject(error);
	              return;
	            }
	            resolve(image);
	          }
	        );
	      });
	    });
	  }
	};

	class Marker extends maplibregl.Marker {
	  addTo(map) {
	    return super.addTo(map);
	  }
	}

	class Popup extends maplibregl.Popup {
	  addTo(map) {
	    return super.addTo(map);
	  }
	}

	class Style extends maplibregl.Style {
	  constructor(map, options = {}) {
	    super(map, options);
	  }
	}

	class CanvasSource extends maplibregl.CanvasSource {
	  onAdd(map) {
	    super.onAdd(map);
	  }
	}

	class GeoJSONSource extends maplibregl.GeoJSONSource {
	  onAdd(map) {
	    super.onAdd(map);
	  }
	}

	class ImageSource extends maplibregl.ImageSource {
	  onAdd(map) {
	    super.onAdd(map);
	  }
	}

	class RasterTileSource extends maplibregl.RasterTileSource {
	  onAdd(map) {
	    super.onAdd(map);
	  }
	}

	class RasterDEMTileSource extends maplibregl.RasterDEMTileSource {
	  onAdd(map) {
	    super.onAdd(map);
	  }
	}

	class VectorTileSource extends maplibregl.VectorTileSource {
	  onAdd(map) {
	    super.onAdd(map);
	  }
	}

	class VideoSource extends maplibregl.VideoSource {
	  onAdd(map) {
	    super.onAdd(map);
	  }
	}

	class TerrainControl extends maplibregl.TerrainControl {
	  onAdd(map) {
	    return super.onAdd(map);
	  }
	}

	var __defProp$3 = Object.defineProperty;
	var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __publicField$1 = (obj, key, value) => {
	  __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	class Point {
	  constructor(x, y) {
	    __publicField$1(this, "x");
	    __publicField$1(this, "y");
	    this.x = x;
	    this.y = y;
	  }
	  _matMult(m) {
	    const x = m[0] * this.x + m[1] * this.y;
	    const y = m[2] * this.x + m[3] * this.y;
	    this.x = x;
	    this.y = y;
	    return this;
	  }
	  _add(p) {
	    this.x += p.x;
	    this.y += p.y;
	    return this;
	  }
	  _sub(p) {
	    this.x -= p.x;
	    this.y -= p.y;
	    return this;
	  }
	  _mult(k) {
	    this.x *= k;
	    this.y *= k;
	    return this;
	  }
	  _div(k) {
	    this.x /= k;
	    this.y /= k;
	    return this;
	  }
	  _multByPoint(p) {
	    this.x *= p.x;
	    this.y *= p.y;
	    return this;
	  }
	  _divByPoint(p) {
	    this.x /= p.x;
	    this.y /= p.y;
	    return this;
	  }
	  _unit() {
	    this._div(this.mag());
	    return this;
	  }
	  _perp() {
	    const y = this.y;
	    this.y = this.x;
	    this.x = -y;
	    return this;
	  }
	  _rotate(angle) {
	    const cos = Math.cos(angle);
	    const sin = Math.sin(angle);
	    const x = cos * this.x - sin * this.y;
	    const y = sin * this.x + cos * this.y;
	    this.x = x;
	    this.y = y;
	    return this;
	  }
	  _rotateAround(angle, p) {
	    const cos = Math.cos(angle);
	    const sin = Math.sin(angle);
	    const x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y);
	    const y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
	    this.x = x;
	    this.y = y;
	    return this;
	  }
	  _round() {
	    this.x = Math.round(this.x);
	    this.y = Math.round(this.y);
	    return this;
	  }
	  /**
	   * Clone this point, returning a new point that can be modified
	   * without affecting the old one.
	   * @return {Point} the clone
	   */
	  clone() {
	    return new Point(this.x, this.y);
	  }
	  /**
	   * Add this point's x & y coordinates to another point,
	   * yielding a new point.
	   * @param {Point} p the other point
	   * @return {Point} output point
	   */
	  add(p) {
	    return this.clone()._add(p);
	  }
	  /**
	   * Subtract this point's x & y coordinates to from point,
	   * yielding a new point.
	   * @param {Point} p the other point
	   * @return {Point} output point
	   */
	  sub(p) {
	    return this.clone()._sub(p);
	  }
	  /**
	   * Multiply this point's x & y coordinates by point,
	   * yielding a new point.
	   * @param {Point} p the other point
	   * @return {Point} output point
	   */
	  multByPoint(p) {
	    return this.clone()._multByPoint(p);
	  }
	  /**
	   * Divide this point's x & y coordinates by point,
	   * yielding a new point.
	   * @param {Point} p the other point
	   * @return {Point} output point
	   */
	  divByPoint(p) {
	    return this.clone()._divByPoint(p);
	  }
	  /**
	   * Multiply this point's x & y coordinates by a factor,
	   * yielding a new point.
	   * @param {Number} k factor
	   * @return {Point} output point
	   */
	  mult(k) {
	    return this.clone()._mult(k);
	  }
	  /**
	   * Divide this point's x & y coordinates by a factor,
	   * yielding a new point.
	   * @param {Point} k factor
	   * @return {Point} output point
	   */
	  div(k) {
	    return this.clone()._div(k);
	  }
	  /**
	   * Rotate this point around the 0, 0 origin by an angle a,
	   * given in radians
	   * @param {Number} a angle to rotate around, in radians
	   * @return {Point} output point
	   */
	  rotate(a) {
	    return this.clone()._rotate(a);
	  }
	  /**
	   * Rotate this point around p point by an angle a,
	   * given in radians
	   * @param {Number} a angle to rotate around, in radians
	   * @param {Point} p Point to rotate around
	   * @return {Point} output point
	   */
	  rotateAround(a, p) {
	    return this.clone()._rotateAround(a, p);
	  }
	  /**
	   * Multiply this point by a 4x1 transformation matrix
	   * @param {Array<Number>} m transformation matrix
	   * @return {Point} output point
	   */
	  matMult(m) {
	    return this.clone()._matMult(m);
	  }
	  /**
	   * Calculate this point but as a unit vector from 0, 0, meaning
	   * that the distance from the resulting point to the 0, 0
	   * coordinate will be equal to 1 and the angle from the resulting
	   * point to the 0, 0 coordinate will be the same as before.
	   * @return {Point} unit vector point
	   */
	  unit() {
	    return this.clone()._unit();
	  }
	  /**
	   * Compute a perpendicular point, where the new y coordinate
	   * is the old x coordinate and the new x coordinate is the old y
	   * coordinate multiplied by -1
	   * @return {Point} perpendicular point
	   */
	  perp() {
	    return this.clone()._perp();
	  }
	  /**
	   * Return a version of this point with the x & y coordinates
	   * rounded to integers.
	   * @return {Point} rounded point
	   */
	  round() {
	    return this.clone()._round();
	  }
	  /**
	   * Return the magnitude of this point: this is the Euclidean
	   * distance from the 0, 0 coordinate to this point's x and y
	   * coordinates.
	   * @return {Number} magnitude
	   */
	  mag() {
	    return Math.sqrt(this.x * this.x + this.y * this.y);
	  }
	  /**
	   * Judge whether this point is equal to another point, returning
	   * true or false.
	   * @param {Point} other the other point
	   * @return {boolean} whether the points are equal
	   */
	  equals(other) {
	    return this.x === other.x && this.y === other.y;
	  }
	  /**
	   * Calculate the distance from this point to another point
	   * @param {Point} p the other point
	   * @return {Number} distance
	   */
	  dist(p) {
	    return Math.sqrt(this.distSqr(p));
	  }
	  /**
	   * Calculate the distance from this point to another point,
	   * without the square root step. Useful if you're comparing
	   * relative distances.
	   * @param {Point} p the other point
	   * @return {Number} distance
	   */
	  distSqr(p) {
	    const dx = p.x - this.x;
	    const dy = p.y - this.y;
	    return dx * dx + dy * dy;
	  }
	  /**
	   * Get the angle from the 0, 0 coordinate to this point, in radians
	   * coordinates.
	   * @return {Number} angle
	   */
	  angle() {
	    return Math.atan2(this.y, this.x);
	  }
	  /**
	   * Get the angle from this point to another point, in radians
	   * @param {Point} b the other point
	   * @return {Number} angle
	   */
	  angleTo(b) {
	    return Math.atan2(this.y - b.y, this.x - b.x);
	  }
	  /**
	   * Get the angle between this point and another point, in radians
	   * @param {Point} b the other point
	   * @return {Number} angle
	   */
	  angleWith(b) {
	    return this.angleWithSep(b.x, b.y);
	  }
	  /*
	   * Find the angle of the two vectors, solving the formula for
	   * the cross product a x b = |a||b|sin(θ) for θ.
	   * @param {Number} x the x-coordinate
	   * @param {Number} y the y-coordinate
	   * @return {Number} the angle in radians
	   */
	  angleWithSep(x, y) {
	    return Math.atan2(this.x * y - this.y * x, this.x * x + this.y * y);
	  }
	  /**
	   * Construct a point from an array if necessary, otherwise if the input
	   * is already a Point, or an unknown type, return it unchanged
	   * @param {Array<number> | Point} a any kind of input value
	   * @return {Point} constructed point, or passed-through value.
	   * @example
	   * // this
	   * var point = Point.convert([0, 1]);
	   * // is equivalent to
	   * var point = new Point(0, 1);
	   */
	  static convert(a) {
	    if (a instanceof Point) {
	      return a;
	    }
	    if (Array.isArray(a)) {
	      return new Point(a[0], a[1]);
	    }
	    return a;
	  }
	}

	var __defProp$2 = Object.defineProperty;
	var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
	var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
	var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __spreadValues$1 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$1.call(b, prop))
	      __defNormalProp$2(a, prop, b[prop]);
	  if (__getOwnPropSymbols$1)
	    for (var prop of __getOwnPropSymbols$1(b)) {
	      if (__propIsEnum$1.call(b, prop))
	        __defNormalProp$2(a, prop, b[prop]);
	    }
	  return a;
	};
	function str2xml(str) {
	  if (typeof DOMParser !== "undefined") {
	    const doc = new DOMParser().parseFromString(str, "application/xml");
	    if (doc.querySelector("parsererror")) {
	      throw new Error("The provided string is not valid XML");
	    }
	    return doc;
	  } else {
	    throw new Error("No XML parser found");
	  }
	}
	function hasChildNodeWithName(doc, nodeName) {
	  if (!doc.hasChildNodes()) {
	    return false;
	  }
	  for (const childNode of Array.from(doc.childNodes)) {
	    const currentNodeName = childNode.nodeName;
	    if (typeof currentNodeName === "string" && currentNodeName.trim().toLowerCase() === nodeName.toLowerCase()) {
	      return true;
	    }
	  }
	  return false;
	}
	function xml2str(node) {
	  if (typeof XMLSerializer !== "undefined") {
	    return new XMLSerializer().serializeToString(node);
	  }
	  throw new Error("No XML serializer found");
	}
	function gpx(doc) {
	  if (typeof doc === "string")
	    doc = str2xml(doc);
	  if (!hasChildNodeWithName(doc, "gpx")) {
	    throw new Error("The XML document is not valid GPX");
	  }
	  const tracks = get(doc, "trk");
	  const routes = get(doc, "rte");
	  const waypoints = get(doc, "wpt");
	  const gj = {
	    type: "FeatureCollection",
	    features: []
	  };
	  for (const track of Array.from(tracks)) {
	    const feature = getTrack(track);
	    if (feature)
	      gj.features.push(feature);
	  }
	  for (const route of Array.from(routes)) {
	    const feature = getRoute(route);
	    if (feature)
	      gj.features.push(feature);
	  }
	  for (const waypoint of Array.from(waypoints)) {
	    gj.features.push(getPoint(waypoint));
	  }
	  return gj;
	}
	function kml(doc, xml2string) {
	  var _a;
	  if (typeof doc === "string")
	    doc = str2xml(doc);
	  if (!hasChildNodeWithName(doc, "kml")) {
	    throw new Error("The XML document is not valid KML");
	  }
	  const gj = {
	    type: "FeatureCollection",
	    features: []
	  };
	  const styleIndex = {};
	  const styleByHash = {};
	  const styleMapIndex = {};
	  const placemarks = get(doc, "Placemark");
	  const styles = get(doc, "Style");
	  const styleMaps = get(doc, "StyleMap");
	  for (const style of Array.from(styles)) {
	    const hash = okhash(
	      xml2string !== void 0 ? xml2string(style) : xml2str(style)
	    ).toString(16);
	    styleIndex["#" + attr(style, "id")] = hash;
	    styleByHash[hash] = style;
	  }
	  for (const styleMap of Array.from(styleMaps)) {
	    styleIndex["#" + attr(styleMap, "id")] = okhash(
	      xml2string !== void 0 ? xml2string(styleMap) : xml2str(styleMap)
	    ).toString(16);
	    const pairs = get(styleMap, "Pair");
	    const pairsMap = {};
	    for (const pair of Array.from(pairs)) {
	      pairsMap[(_a = nodeVal(get1(pair, "key"))) != null ? _a : ""] = nodeVal(
	        get1(pair, "styleUrl")
	      );
	    }
	    styleMapIndex["#" + attr(styleMap, "id")] = pairsMap;
	  }
	  for (const placemark of Array.from(placemarks)) {
	    gj.features = gj.features.concat(
	      getPlacemark(placemark, styleIndex, styleByHash, styleMapIndex)
	    );
	  }
	  return gj;
	}
	function kmlColor(v) {
	  if (v === null)
	    return ["#000000", 1];
	  let color = "";
	  let opacity = 1;
	  if (v.substring(0, 1) === "#")
	    v = v.substring(1);
	  if (v.length === 6 || v.length === 3)
	    color = v;
	  if (v.length === 8) {
	    opacity = parseInt(v.substring(0, 2), 16) / 255;
	    color = "#" + v.substring(6, 8) + v.substring(4, 6) + v.substring(2, 4);
	  }
	  return [color != null ? color : "#000000", opacity != null ? opacity : 1];
	}
	function gxCoord(v) {
	  return numarray(v.split(" "));
	}
	function gxCoords(root) {
	  var _a;
	  let elems = get(root, "coord");
	  const coords = [];
	  const times = [];
	  if (elems.length === 0)
	    elems = get(root, "gx:coord");
	  for (const elem of Array.from(elems)) {
	    coords.push(gxCoord((_a = nodeVal(elem)) != null ? _a : ""));
	  }
	  const timeElems = get(root, "when");
	  for (const timeElem of Array.from(timeElems))
	    times.push(nodeVal(timeElem));
	  return {
	    coords,
	    times
	  };
	}
	function getGeometry(root) {
	  var _a, _b, _c;
	  const geotypes = ["Polygon", "LineString", "Point", "Track", "gx:Track"];
	  let geomNode, geomNodes, i, j, k;
	  const geoms = [];
	  const coordTimes = [];
	  if (get1(root, "MultiGeometry") !== null) {
	    return getGeometry(get1(root, "MultiGeometry"));
	  }
	  if (get1(root, "MultiTrack") !== null) {
	    return getGeometry(get1(root, "MultiTrack"));
	  }
	  if (get1(root, "gx:MultiTrack") !== null) {
	    return getGeometry(get1(root, "gx:MultiTrack"));
	  }
	  for (i = 0; i < geotypes.length; i++) {
	    geomNodes = get(root, geotypes[i]);
	    if (geomNodes) {
	      for (j = 0; j < geomNodes.length; j++) {
	        geomNode = geomNodes[j];
	        if (geotypes[i] === "Point") {
	          geoms.push({
	            type: "Point",
	            coordinates: coord1((_a = nodeVal(get1(geomNode, "coordinates"))) != null ? _a : "")
	          });
	        } else if (geotypes[i] === "LineString") {
	          geoms.push({
	            type: "LineString",
	            coordinates: coord((_b = nodeVal(get1(geomNode, "coordinates"))) != null ? _b : "")
	          });
	        } else if (geotypes[i] === "Polygon") {
	          const rings = get(geomNode, "LinearRing");
	          const coords = [];
	          for (k = 0; k < rings.length; k++) {
	            coords.push(coord((_c = nodeVal(get1(rings[k], "coordinates"))) != null ? _c : ""));
	          }
	          geoms.push({
	            type: "Polygon",
	            coordinates: coords
	          });
	        } else if (geotypes[i] === "Track" || geotypes[i] === "gx:Track") {
	          const track = gxCoords(geomNode);
	          geoms.push({
	            type: "LineString",
	            coordinates: track.coords
	          });
	          if (track.times.length)
	            coordTimes.push(track.times);
	        }
	      }
	    }
	  }
	  return { geoms, coordTimes };
	}
	function getPlacemark(root, styleIndex, styleByHash, styleMapIndex) {
	  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
	  const geomsAndTimes = getGeometry(root);
	  const properties = {};
	  const name = nodeVal(get1(root, "name"));
	  const address = nodeVal(get1(root, "address"));
	  const description = nodeVal(get1(root, "description"));
	  const timeSpan = get1(root, "TimeSpan");
	  const timeStamp = get1(root, "TimeStamp");
	  const extendedData = get1(root, "ExtendedData");
	  const visibility = get1(root, "visibility");
	  let i;
	  let styleUrl = nodeVal(get1(root, "styleUrl"));
	  let lineStyle = get1(root, "LineStyle");
	  let polyStyle = get1(root, "PolyStyle");
	  if (!geomsAndTimes.geoms.length)
	    return [];
	  if (name)
	    properties.name = name;
	  if (address)
	    properties.address = address;
	  if (styleUrl) {
	    if (styleUrl[0] !== "#")
	      styleUrl = "#" + styleUrl;
	    properties.styleUrl = styleUrl;
	    if (styleIndex[styleUrl]) {
	      properties.styleHash = styleIndex[styleUrl];
	    }
	    if (styleMapIndex[styleUrl]) {
	      properties.styleMapHash = styleMapIndex[styleUrl];
	      properties.styleHash = styleIndex[(_a = styleMapIndex[styleUrl].normal) != null ? _a : ""];
	    }
	    const style = styleByHash[(_b = properties.styleHash) != null ? _b : ""];
	    if (style) {
	      if (!lineStyle)
	        lineStyle = get1(style, "LineStyle");
	      if (!polyStyle)
	        polyStyle = get1(style, "PolyStyle");
	      const iconStyle = get1(style, "IconStyle");
	      if (iconStyle) {
	        const icon = get1(iconStyle, "Icon");
	        if (icon) {
	          const href = nodeVal(get1(icon, "href"));
	          if (href)
	            properties.icon = href;
	        }
	      }
	    }
	  }
	  if (description)
	    properties.description = description;
	  if (timeSpan) {
	    const begin = nodeVal(get1(timeSpan, "begin"));
	    const end = nodeVal(get1(timeSpan, "end"));
	    if (begin && end)
	      properties.timespan = { begin, end };
	  }
	  if (timeStamp !== null) {
	    properties.timestamp = (_c = nodeVal(get1(timeStamp, "when"))) != null ? _c : (/* @__PURE__ */ new Date()).toISOString();
	  }
	  if (lineStyle !== null) {
	    const linestyles = kmlColor(nodeVal(get1(lineStyle, "color")));
	    const color = linestyles[0];
	    const opacity = linestyles[1];
	    const width = parseFloat((_d = nodeVal(get1(lineStyle, "width"))) != null ? _d : "");
	    if (color)
	      properties.stroke = color;
	    if (!isNaN(opacity))
	      properties["stroke-opacity"] = opacity;
	    if (!isNaN(width))
	      properties["stroke-width"] = width;
	  }
	  if (polyStyle) {
	    const polystyles = kmlColor(nodeVal(get1(polyStyle, "color")));
	    const pcolor = polystyles[0];
	    const popacity = polystyles[1];
	    const fill = nodeVal(get1(polyStyle, "fill"));
	    const outline = nodeVal(get1(polyStyle, "outline"));
	    if (pcolor)
	      properties.fill = pcolor;
	    if (!isNaN(popacity))
	      properties["fill-opacity"] = popacity;
	    if (fill)
	      properties["fill-opacity"] = fill === "1" ? properties["fill-opacity"] || 1 : 0;
	    if (outline)
	      properties["stroke-opacity"] = outline === "1" ? properties["stroke-opacity"] || 1 : 0;
	  }
	  if (extendedData) {
	    const datas = get(extendedData, "Data"), simpleDatas = get(extendedData, "SimpleData");
	    for (i = 0; i < datas.length; i++) {
	      properties[(_e = datas[i].getAttribute("name")) != null ? _e : ""] = (_f = nodeVal(get1(datas[i], "value"))) != null ? _f : "";
	    }
	    for (i = 0; i < simpleDatas.length; i++) {
	      properties[(_g = simpleDatas[i].getAttribute("name")) != null ? _g : ""] = (_h = nodeVal(simpleDatas[i])) != null ? _h : "";
	    }
	  }
	  if (visibility !== null) {
	    properties.visibility = (_i = nodeVal(visibility)) != null ? _i : "";
	  }
	  if (geomsAndTimes.coordTimes.length !== 0) {
	    properties.coordTimes = geomsAndTimes.coordTimes.length === 1 ? geomsAndTimes.coordTimes[0] : geomsAndTimes.coordTimes;
	  }
	  const feature = {
	    type: "Feature",
	    geometry: geomsAndTimes.geoms.length === 1 ? geomsAndTimes.geoms[0] : {
	      type: "GeometryCollection",
	      geometries: geomsAndTimes.geoms
	    },
	    properties
	  };
	  if (attr(root, "id"))
	    feature.id = (_j = attr(root, "id")) != null ? _j : void 0;
	  return [feature];
	}
	function getPoints(node, pointname) {
	  const pts = get(node, pointname);
	  const line = [];
	  const times = [];
	  let heartRates = [];
	  const ptsLength = pts.length;
	  if (ptsLength < 2)
	    return;
	  for (let i = 0; i < ptsLength; i++) {
	    const cPair = coordPair(pts[i]);
	    line.push(cPair.coordinates);
	    if (cPair.time)
	      times.push(cPair.time);
	    if (cPair.heartRate || heartRates.length) {
	      if (heartRates.length === 0)
	        heartRates = new Array(i).fill(null);
	      heartRates.push(cPair.heartRate);
	    }
	  }
	  return {
	    line,
	    times,
	    heartRates
	  };
	}
	function getTrack(node) {
	  const segments = get(node, "trkseg");
	  const track = [];
	  const times = [];
	  const heartRates = [];
	  let line;
	  for (let i = 0; i < segments.length; i++) {
	    line = getPoints(segments[i], "trkpt");
	    if (line !== void 0) {
	      if (line.line)
	        track.push(line.line);
	      if (line.times && line.times.length)
	        times.push(line.times);
	      if (heartRates.length || line.heartRates && line.heartRates.length) {
	        if (!heartRates.length) {
	          for (let s = 0; s < i; s++) {
	            heartRates.push(new Array(track[s].length).fill(null));
	          }
	        }
	        if (line.heartRates && line.heartRates.length) {
	          heartRates.push(line.heartRates);
	        } else {
	          heartRates.push(new Array(line.line.length).fill(null));
	        }
	      }
	    }
	  }
	  if (track.length === 0)
	    return;
	  const properties = __spreadValues$1(__spreadValues$1({}, getProperties(node)), getLineStyle(get1(node, "extensions")));
	  if (times.length !== 0)
	    properties.coordTimes = track.length === 1 ? times[0] : times;
	  if (heartRates.length !== 0) {
	    properties.heartRates = track.length === 1 ? heartRates[0] : heartRates;
	  }
	  if (track.length === 1) {
	    return {
	      type: "Feature",
	      properties,
	      geometry: {
	        type: "LineString",
	        coordinates: track[0]
	      }
	    };
	  } else {
	    return {
	      type: "Feature",
	      properties,
	      geometry: {
	        type: "MultiLineString",
	        coordinates: track
	      }
	    };
	  }
	}
	function getRoute(node) {
	  const line = getPoints(node, "rtept");
	  if (line === void 0)
	    return;
	  const prop = __spreadValues$1(__spreadValues$1({}, getProperties(node)), getLineStyle(get1(node, "extensions")));
	  return {
	    type: "Feature",
	    properties: prop,
	    geometry: {
	      type: "LineString",
	      coordinates: line.line
	    }
	  };
	}
	function getPoint(node) {
	  const prop = __spreadValues$1(__spreadValues$1({}, getProperties(node)), getMulti(node, ["sym"]));
	  return {
	    type: "Feature",
	    properties: prop,
	    geometry: {
	      type: "Point",
	      coordinates: coordPair(node).coordinates
	    }
	  };
	}
	function getLineStyle(extensions) {
	  var _a, _b;
	  const style = {};
	  if (extensions) {
	    const lineStyle = get1(extensions, "line");
	    if (lineStyle) {
	      const color = nodeVal(get1(lineStyle, "color"));
	      const opacity = parseFloat((_a = nodeVal(get1(lineStyle, "opacity"))) != null ? _a : "0");
	      const width = parseFloat((_b = nodeVal(get1(lineStyle, "width"))) != null ? _b : "0");
	      if (color)
	        style.stroke = color;
	      if (!isNaN(opacity))
	        style["stroke-opacity"] = opacity;
	      if (!isNaN(width))
	        style["stroke-width"] = width * 96 / 25.4;
	    }
	  }
	  return style;
	}
	function getProperties(node) {
	  const prop = getMulti(node, [
	    "name",
	    "cmt",
	    "desc",
	    "type",
	    "time",
	    "keywords"
	  ]);
	  const links = get(node, "link");
	  if (links.length !== 0) {
	    prop.links = [];
	    for (const l of Array.from(links)) {
	      const link = __spreadValues$1({
	        href: attr(l, "href")
	      }, getMulti(l, ["text", "type"]));
	      prop.links.push(link);
	    }
	  }
	  return prop;
	}
	function okhash(x) {
	  let h = 0;
	  if (!x || !x.length)
	    return h;
	  for (let i = 0; i < x.length; i++) {
	    h = (h << 5) - h + x.charCodeAt(i) | 0;
	  }
	  return h;
	}
	function get(x, y) {
	  return x.getElementsByTagName(y);
	}
	function attr(x, y) {
	  return x.getAttribute(y);
	}
	function attrf(x, y) {
	  var _a;
	  return parseFloat((_a = attr(x, y)) != null ? _a : "0");
	}
	function get1(x, y) {
	  const n = get(x, y);
	  return n.length ? n[0] : null;
	}
	function norm(el) {
	  if (el.normalize)
	    el.normalize();
	  return el;
	}
	function numarray(x) {
	  return x.map(parseFloat).map((n) => isNaN(n) ? null : n);
	}
	function nodeVal(x) {
	  if (x)
	    norm(x);
	  return x && x.textContent;
	}
	function getMulti(x, ys) {
	  var _a;
	  const o = {};
	  let n;
	  let k;
	  for (k = 0; k < ys.length; k++) {
	    n = get1(x, ys[k]);
	    if (n)
	      o[ys[k]] = (_a = nodeVal(n)) != null ? _a : "";
	  }
	  return o;
	}
	function coord1(v) {
	  return numarray(v.replace(/\s*/g, "").split(","));
	}
	function coord(v) {
	  const coords = v.replace(/^\s*|\s*$/g, "").split(/\s+/);
	  const out = [];
	  for (const coord2 of coords)
	    out.push(coord1(coord2));
	  return out;
	}
	function coordPair(x) {
	  var _a, _b;
	  const ll = [attrf(x, "lon"), attrf(x, "lat")];
	  const ele = get1(x, "ele");
	  const heartRate = get1(x, "gpxtpx:hr") || get1(x, "hr");
	  const time = get1(x, "time");
	  let e;
	  if (ele) {
	    e = parseFloat((_a = nodeVal(ele)) != null ? _a : "0");
	    if (!isNaN(e))
	      ll.push(e);
	  }
	  return {
	    coordinates: ll,
	    time: time ? nodeVal(time) : null,
	    heartRate: heartRate !== null ? parseFloat((_b = nodeVal(heartRate)) != null ? _b : "0") : null
	  };
	}
	function gpxOrKml(doc) {
	  try {
	    if (typeof doc === "string")
	      doc = str2xml(doc);
	  } catch (e) {
	    return null;
	  }
	  try {
	    const result = gpx(doc);
	    return result;
	  } catch (e) {
	  }
	  try {
	    const result = kml(doc);
	    return result;
	  } catch (e) {
	  }
	  return null;
	}

	var __defProp$1 = Object.defineProperty;
	var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __publicField = (obj, key, value) => {
	  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
	  return value;
	};
	function componentToHex(c) {
	  const hex = c.toString(16);
	  return hex.length == 1 ? "0" + hex : hex;
	}
	function rgbToHex(rgb) {
	  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]) + (rgb.length === 4 ? componentToHex(rgb[3]) : "");
	}
	class ColorRamp extends Array {
	  constructor(options = {}) {
	    super();
	    __publicField(this, "min", 0);
	    __publicField(this, "max", 1);
	    if ("min" in options) {
	      this.min = options.min;
	    }
	    if ("max" in options) {
	      this.max = options.max;
	    }
	    if ("stops" in options) {
	      this.setStops(options.stops, { clone: false });
	    }
	  }
	  /**
	   * Converts a array-definition color ramp definition into a usable ColorRamp instance.
	   * Note: units are not converted and may need to to be converted beforehand (eg. kelvin to centigrade)
	   * @param cr
	   * @returns
	   */
	  static fromArrayDefinition(cr) {
	    return new ColorRamp({
	      stops: cr.map((cs) => ({
	        value: cs[0],
	        color: cs[1]
	      }))
	    });
	  }
	  setStops(stops, options = { clone: true }) {
	    const colorRamp = options.clone ? this.clone() : this;
	    colorRamp.length = 0;
	    let min = Infinity;
	    let max = -Infinity;
	    for (let i = 0; i < stops.length; i += 1) {
	      min = Math.min(min, stops[i].value);
	      max = Math.max(max, stops[i].value);
	      colorRamp.push({
	        value: stops[i].value,
	        color: stops[i].color.slice()
	        // we want to make sure we do a deep copy and not a reference
	      });
	    }
	    colorRamp.sort(
	      (a, b) => a.value < b.value ? -1 : 1
	    );
	    this.min = min;
	    this.max = max;
	    return colorRamp;
	  }
	  scale(min, max, options = { clone: true }) {
	    const clone = options.clone;
	    const currentMin = this[0].value;
	    const currentMax = this.at(-1).value;
	    const currentSpan = currentMax - currentMin;
	    const newSpan = max - min;
	    const stops = [];
	    for (let i = 0; i < this.length; i += 1) {
	      const currentValue = this[i].value;
	      const normalizedValue = (currentValue - currentMin) / currentSpan;
	      const newValue = normalizedValue * newSpan + min;
	      if (clone) {
	        stops.push({
	          value: newValue,
	          color: this[i].color.slice()
	        });
	      } else {
	        this[i].value = newValue;
	      }
	    }
	    return clone ? new ColorRamp({ stops }) : this;
	  }
	  // for some reason, I had to reimplement this
	  at(pos) {
	    if (pos < 0) {
	      return this[this.length + pos];
	    } else {
	      return this[pos];
	    }
	  }
	  clone() {
	    return new ColorRamp({ stops: this.getRawColorStops() });
	  }
	  getRawColorStops() {
	    const stops = [];
	    for (let i = 0; i < this.length; i += 1) {
	      stops.push({ value: this[i].value, color: this[i].color });
	    }
	    return stops;
	  }
	  reverse(options = { clone: true }) {
	    const colorRamp = options.clone ? this.clone() : this;
	    for (let i = 0; i < ~~(colorRamp.length / 2); i += 1) {
	      const c = colorRamp[i].color;
	      colorRamp[i].color = colorRamp.at(-(i + 1)).color;
	      colorRamp.at(-(i + 1)).color = c;
	    }
	    return colorRamp;
	  }
	  getBounds() {
	    return { min: this.min, max: this.max };
	  }
	  getColor(value, options = { smooth: true }) {
	    if (value <= this[0].value) {
	      return this[0].color;
	    }
	    if (value >= this.at(-1).value) {
	      return this.at(-1).color;
	    }
	    for (let i = 0; i < this.length - 1; i += 1) {
	      if (value > this[i + 1].value) {
	        continue;
	      }
	      const colorBefore = this[i].color;
	      if (!options.smooth) {
	        return colorBefore.slice();
	      }
	      const valueBefore = this[i].value;
	      const valueAfter = this[i + 1].value;
	      const colorAfter = this[i + 1].color;
	      const beforeRatio = (valueAfter - value) / (valueAfter - valueBefore);
	      return colorBefore.map(
	        (chan, i2) => Math.round(chan * beforeRatio + colorAfter[i2] * (1 - beforeRatio))
	      );
	    }
	    return [0, 0, 0];
	  }
	  /**
	   * Get the color as an hexadecimal string
	   */
	  getColorHex(value, options = {
	    smooth: true,
	    withAlpha: false
	  }) {
	    return rgbToHex(this.getColor(value, options));
	  }
	  /**
	   * Get the color of the color ramp at a relative position in [0, 1]
	   */
	  getColorRelative(value, options = { smooth: true }) {
	    const bounds = this.getBounds();
	    return this.getColor(
	      bounds.min + value * (bounds.max - bounds.min),
	      options
	    );
	  }
	  getCanvasStrip(options = {
	    horizontal: true,
	    size: 512,
	    smooth: true
	  }) {
	    const canvas = document.createElement("canvas");
	    canvas.width = options.horizontal ? options.size : 1;
	    canvas.height = options.horizontal ? 1 : options.size;
	    const ctx = canvas.getContext("2d");
	    if (!ctx)
	      throw new Error("Canvs context is missing");
	    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	    const imageDataArray = imageData.data;
	    const size = options.size;
	    const startValue = this[0].value;
	    const endValue = this.at(-1).value;
	    const valueSpan = endValue - startValue;
	    const valueStep = valueSpan / size;
	    for (let i = 0; i < size; i += 1) {
	      const color = this.getColor(startValue + i * valueStep, {
	        smooth: options.smooth
	      });
	      imageDataArray[i * 4] = color[0];
	      imageDataArray[i * 4 + 1] = color[1];
	      imageDataArray[i * 4 + 2] = color[2];
	      imageDataArray[i * 4 + 3] = color.length > 3 ? color[3] : 255;
	    }
	    ctx.putImageData(imageData, 0, 0);
	    return canvas;
	  }
	  /**
	   * Apply a non-linear ressampling. This will create a new instance of ColorRamp with the same bounds.
	   */
	  resample(method, samples = 15) {
	    const inputBounds = this.getBounds();
	    const inputNormalized = this.scale(0, 1);
	    const step = 1 / (samples - 1);
	    let stops;
	    if (method === "ease-in-square") {
	      stops = Array.from({ length: samples }, (_, i) => {
	        const x = i * step;
	        const y = Math.pow(x, 2);
	        const color = inputNormalized.getColor(y);
	        return { value: x, color };
	      });
	    } else if (method === "ease-out-square") {
	      stops = Array.from({ length: samples }, (_, i) => {
	        const x = i * step;
	        const y = 1 - Math.pow(1 - x, 2);
	        const color = inputNormalized.getColor(y);
	        return { value: x, color };
	      });
	    } else if (method === "ease-out-sqrt") {
	      stops = Array.from({ length: samples }, (_, i) => {
	        const x = i * step;
	        const y = Math.pow(x, 0.5);
	        const color = inputNormalized.getColor(y);
	        return { value: x, color };
	      });
	    } else if (method === "ease-in-sqrt") {
	      stops = Array.from({ length: samples }, (_, i) => {
	        const x = i * step;
	        const y = 1 - Math.pow(1 - x, 0.5);
	        const color = inputNormalized.getColor(y);
	        return { value: x, color };
	      });
	    } else if (method === "ease-out-exp") {
	      stops = Array.from({ length: samples }, (_, i) => {
	        const x = i * step;
	        const y = 1 - Math.pow(2, -10 * x);
	        const color = inputNormalized.getColor(y);
	        return { value: x, color };
	      });
	    } else if (method === "ease-in-exp") {
	      stops = Array.from({ length: samples }, (_, i) => {
	        const x = i * step;
	        const y = Math.pow(2, 10 * x - 10);
	        const color = inputNormalized.getColor(y);
	        return { value: x, color };
	      });
	    } else {
	      throw new Error("Invalid ressampling method.");
	    }
	    const outputNormalized = new ColorRamp({ stops });
	    const output = outputNormalized.scale(inputBounds.min, inputBounds.max);
	    return output;
	  }
	  /**
	   * Makes a clone of this color ramp that is fully transparant at the begining of their range
	   */
	  transparentStart() {
	    const stops = this.getRawColorStops();
	    stops.unshift({
	      value: stops[0].value,
	      color: stops[0].color.slice()
	    });
	    stops[1].value += 1e-3;
	    stops.forEach((s) => {
	      if (s.color.length === 3) {
	        s.color.push(255);
	      }
	    });
	    stops[0].color[3] = 0;
	    return new ColorRamp({ stops });
	  }
	  /**
	   * Check if this color ramp has a transparent start
	   */
	  hasTransparentStart() {
	    return this[0].color.length === 4 && this[0].color[3] === 0;
	  }
	}
	const ColorRampCollection = {
	  /**
	   * A fully transparent [0, 0, 0, 0] colorramp to hide data.
	   * Defined in interval [0, 1], without unit.
	   */
	  NULL: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 0, 0] },
	      { value: 1, color: [0, 0, 0, 0] }
	    ]
	  }),
	  GRAY: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 0] },
	      { value: 1, color: [255, 255, 255] }
	    ]
	  }),
	  /**
	   * Classic jet color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  JET: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 131] },
	      { value: 0.125, color: [0, 60, 170] },
	      { value: 0.375, color: [5, 255, 255] },
	      { value: 0.625, color: [255, 255, 0] },
	      { value: 0.875, color: [250, 0, 0] },
	      { value: 1, color: [128, 0, 0] }
	    ]
	  }),
	  /**
	   * Classic HSV color ramp (hue, saturation, value).
	   * Defined in interval [0, 1], without unit.
	   */
	  HSV: new ColorRamp({
	    stops: [
	      { value: 0, color: [255, 0, 0] },
	      { value: 0.169, color: [253, 255, 2] },
	      { value: 0.173, color: [247, 255, 2] },
	      { value: 0.337, color: [0, 252, 4] },
	      { value: 0.341, color: [0, 252, 10] },
	      { value: 0.506, color: [1, 249, 255] },
	      { value: 0.671, color: [2, 0, 253] },
	      { value: 0.675, color: [8, 0, 253] },
	      { value: 0.839, color: [255, 0, 251] },
	      { value: 0.843, color: [255, 0, 245] },
	      { value: 1, color: [255, 0, 6] }
	    ]
	  }),
	  /**
	   * Classic hot color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  HOT: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 0] },
	      { value: 0.3, color: [230, 0, 0] },
	      { value: 0.6, color: [255, 210, 0] },
	      { value: 1, color: [255, 255, 255] }
	    ]
	  }),
	  /**
	   * Classic spring color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  SPRING: new ColorRamp({
	    stops: [
	      { value: 0, color: [255, 0, 255] },
	      { value: 1, color: [255, 255, 0] }
	    ]
	  }),
	  /**
	   * Classic summer color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  SUMMER: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 128, 102] },
	      { value: 1, color: [255, 255, 102] }
	    ]
	  }),
	  /**
	   * Classic autommn color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  AUTOMN: new ColorRamp({
	    stops: [
	      { value: 0, color: [255, 0, 0] },
	      { value: 1, color: [255, 255, 0] }
	    ]
	  }),
	  /**
	   * Classic winter color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  WINTER: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 255] },
	      { value: 1, color: [0, 255, 128] }
	    ]
	  }),
	  /**
	   * Classic bone color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  BONE: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 0] },
	      { value: 0.376, color: [84, 84, 116] },
	      { value: 0.753, color: [169, 200, 200] },
	      { value: 1, color: [255, 255, 255] }
	    ]
	  }),
	  /**
	   * Classic copper color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  COPPER: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 0] },
	      { value: 0.804, color: [255, 160, 102] },
	      { value: 1, color: [255, 199, 127] }
	    ]
	  }),
	  /**
	   * Classic greys color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  GREYS: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 0] },
	      { value: 1, color: [255, 255, 255] }
	    ]
	  }),
	  /**
	   * Classic yignbu color ramp (blue to light yellow).
	   * Defined in interval [0, 1], without unit.
	   */
	  YIGNBU: new ColorRamp({
	    stops: [
	      { value: 0, color: [8, 29, 88] },
	      { value: 0.125, color: [37, 52, 148] },
	      { value: 0.25, color: [34, 94, 168] },
	      { value: 0.375, color: [29, 145, 192] },
	      { value: 0.5, color: [65, 182, 196] },
	      { value: 0.625, color: [127, 205, 187] },
	      { value: 0.75, color: [199, 233, 180] },
	      { value: 0.875, color: [237, 248, 217] },
	      { value: 1, color: [255, 255, 217] }
	    ]
	  }),
	  /**
	   * Classic greens color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  GREENS: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 68, 27] },
	      { value: 0.125, color: [0, 109, 44] },
	      { value: 0.25, color: [35, 139, 69] },
	      { value: 0.375, color: [65, 171, 93] },
	      { value: 0.5, color: [116, 196, 118] },
	      { value: 0.625, color: [161, 217, 155] },
	      { value: 0.75, color: [199, 233, 192] },
	      { value: 0.875, color: [229, 245, 224] },
	      { value: 1, color: [247, 252, 245] }
	    ]
	  }),
	  /**
	   * Classic yiorrd color ramp (red to light yellow).
	   * Defined in interval [0, 1], without unit.
	   */
	  YIORRD: new ColorRamp({
	    stops: [
	      { value: 0, color: [128, 0, 38] },
	      { value: 0.125, color: [189, 0, 38] },
	      { value: 0.25, color: [227, 26, 28] },
	      { value: 0.375, color: [252, 78, 42] },
	      { value: 0.5, color: [253, 141, 60] },
	      { value: 0.625, color: [254, 178, 76] },
	      { value: 0.75, color: [254, 217, 118] },
	      { value: 0.875, color: [255, 237, 160] },
	      { value: 1, color: [255, 255, 204] }
	    ]
	  }),
	  /**
	   * Classic blue-red color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  BLUERED: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 255] },
	      { value: 1, color: [255, 0, 0] }
	    ]
	  }),
	  /**
	   * Classic rdbu color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  RDBU: new ColorRamp({
	    stops: [
	      { value: 0, color: [5, 10, 172] },
	      { value: 0.35, color: [106, 137, 247] },
	      { value: 0.5, color: [190, 190, 190] },
	      { value: 0.6, color: [220, 170, 132] },
	      { value: 0.7, color: [230, 145, 90] },
	      { value: 1, color: [178, 10, 28] }
	    ]
	  }),
	  /**
	   * Classic picnic color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  PICNIC: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 255] },
	      { value: 0.1, color: [51, 153, 255] },
	      { value: 0.2, color: [102, 204, 255] },
	      { value: 0.3, color: [153, 204, 255] },
	      { value: 0.4, color: [204, 204, 255] },
	      { value: 0.5, color: [255, 255, 255] },
	      { value: 0.6, color: [255, 204, 255] },
	      { value: 0.7, color: [255, 153, 255] },
	      { value: 0.8, color: [255, 102, 204] },
	      { value: 0.9, color: [255, 102, 102] },
	      { value: 1, color: [255, 0, 0] }
	    ]
	  }),
	  /**
	   * Classic rainbow color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  RAINBOW: new ColorRamp({
	    stops: [
	      { value: 0, color: [150, 0, 90] },
	      { value: 0.125, color: [0, 0, 200] },
	      { value: 0.25, color: [0, 25, 255] },
	      { value: 0.375, color: [0, 152, 255] },
	      { value: 0.5, color: [44, 255, 150] },
	      { value: 0.625, color: [151, 255, 0] },
	      { value: 0.75, color: [255, 234, 0] },
	      { value: 0.875, color: [255, 111, 0] },
	      { value: 1, color: [255, 0, 0] }
	    ]
	  }),
	  /**
	   * Classic Portland color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  PORTLAND: new ColorRamp({
	    stops: [
	      { value: 0, color: [12, 51, 131] },
	      { value: 0.25, color: [10, 136, 186] },
	      { value: 0.5, color: [242, 211, 56] },
	      { value: 0.75, color: [242, 143, 56] },
	      { value: 1, color: [217, 30, 30] }
	    ]
	  }),
	  /**
	   * Classic blackbody color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  BLACKBODY: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 0] },
	      { value: 0.2, color: [230, 0, 0] },
	      { value: 0.4, color: [230, 210, 0] },
	      { value: 0.7, color: [255, 255, 255] },
	      { value: 1, color: [160, 200, 255] }
	    ]
	  }),
	  /**
	   * Classic earth color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  EARTH: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 130] },
	      { value: 0.1, color: [0, 180, 180] },
	      { value: 0.2, color: [40, 210, 40] },
	      { value: 0.4, color: [230, 230, 50] },
	      { value: 0.6, color: [120, 70, 20] },
	      { value: 1, color: [255, 255, 255] }
	    ]
	  }),
	  /**
	   * Classic electric color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  ELECTRIC: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 0] },
	      { value: 0.15, color: [30, 0, 100] },
	      { value: 0.4, color: [120, 0, 100] },
	      { value: 0.6, color: [160, 90, 0] },
	      { value: 0.8, color: [230, 200, 0] },
	      { value: 1, color: [255, 250, 220] }
	    ]
	  }),
	  /**
	   * Classic viridis color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  VIRIDIS: new ColorRamp({
	    stops: [
	      { value: 0, color: [68, 1, 84] },
	      { value: 0.13, color: [71, 44, 122] },
	      { value: 0.25, color: [59, 81, 139] },
	      { value: 0.38, color: [44, 113, 142] },
	      { value: 0.5, color: [33, 144, 141] },
	      { value: 0.63, color: [39, 173, 129] },
	      { value: 0.75, color: [92, 200, 99] },
	      { value: 0.88, color: [170, 220, 50] },
	      { value: 1, color: [253, 231, 37] }
	    ]
	  }),
	  /**
	   * Classic inferno color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  INFERNO: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 4] },
	      { value: 0.13, color: [31, 12, 72] },
	      { value: 0.25, color: [85, 15, 109] },
	      { value: 0.38, color: [136, 34, 106] },
	      { value: 0.5, color: [186, 54, 85] },
	      { value: 0.63, color: [227, 89, 51] },
	      { value: 0.75, color: [249, 140, 10] },
	      { value: 0.88, color: [249, 201, 50] },
	      { value: 1, color: [252, 255, 164] }
	    ]
	  }),
	  /**
	   * Classic magma color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  MAGMA: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 4] },
	      { value: 0.13, color: [28, 16, 68] },
	      { value: 0.25, color: [79, 18, 123] },
	      { value: 0.38, color: [129, 37, 129] },
	      { value: 0.5, color: [181, 54, 122] },
	      { value: 0.63, color: [229, 80, 100] },
	      { value: 0.75, color: [251, 135, 97] },
	      { value: 0.88, color: [254, 194, 135] },
	      { value: 1, color: [252, 253, 191] }
	    ]
	  }),
	  /**
	   * Classic plasma color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  PLASMA: new ColorRamp({
	    stops: [
	      { value: 0, color: [13, 8, 135] },
	      { value: 0.13, color: [75, 3, 161] },
	      { value: 0.25, color: [125, 3, 168] },
	      { value: 0.38, color: [168, 34, 150] },
	      { value: 0.5, color: [203, 70, 121] },
	      { value: 0.63, color: [229, 107, 93] },
	      { value: 0.75, color: [248, 148, 65] },
	      { value: 0.88, color: [253, 195, 40] },
	      { value: 1, color: [240, 249, 33] }
	    ]
	  }),
	  /**
	   * Classic warm color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  WARM: new ColorRamp({
	    stops: [
	      { value: 0, color: [125, 0, 179] },
	      { value: 0.13, color: [172, 0, 187] },
	      { value: 0.25, color: [219, 0, 170] },
	      { value: 0.38, color: [255, 0, 130] },
	      { value: 0.5, color: [255, 63, 74] },
	      { value: 0.63, color: [255, 123, 0] },
	      { value: 0.75, color: [234, 176, 0] },
	      { value: 0.88, color: [190, 228, 0] },
	      { value: 1, color: [147, 255, 0] }
	    ]
	  }),
	  /**
	   * Classic cool color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  COOL: new ColorRamp({
	    stops: [
	      { value: 0, color: [125, 0, 179] },
	      { value: 0.13, color: [116, 0, 218] },
	      { value: 0.25, color: [98, 74, 237] },
	      { value: 0.38, color: [68, 146, 231] },
	      { value: 0.5, color: [0, 204, 197] },
	      { value: 0.63, color: [0, 247, 146] },
	      { value: 0.75, color: [0, 255, 88] },
	      { value: 0.88, color: [40, 255, 8] },
	      { value: 1, color: [147, 255, 0] }
	    ]
	  }),
	  /**
	   * Classic rainboz soft color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  RAINBOW_SOFT: new ColorRamp({
	    stops: [
	      { value: 0, color: [125, 0, 179] },
	      { value: 0.1, color: [199, 0, 180] },
	      { value: 0.2, color: [255, 0, 121] },
	      { value: 0.3, color: [255, 108, 0] },
	      { value: 0.4, color: [222, 194, 0] },
	      { value: 0.5, color: [150, 255, 0] },
	      { value: 0.6, color: [0, 255, 55] },
	      { value: 0.7, color: [0, 246, 150] },
	      { value: 0.8, color: [50, 167, 222] },
	      { value: 0.9, color: [103, 51, 235] },
	      { value: 1, color: [124, 0, 186] }
	    ]
	  }),
	  /**
	   * Classic bathymetry color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  BATHYMETRY: new ColorRamp({
	    stops: [
	      { value: 0, color: [40, 26, 44] },
	      { value: 0.13, color: [59, 49, 90] },
	      { value: 0.25, color: [64, 76, 139] },
	      { value: 0.38, color: [63, 110, 151] },
	      { value: 0.5, color: [72, 142, 158] },
	      { value: 0.63, color: [85, 174, 163] },
	      { value: 0.75, color: [120, 206, 163] },
	      { value: 0.88, color: [187, 230, 172] },
	      { value: 1, color: [253, 254, 204] }
	    ]
	  }),
	  /**
	   * Classic cdom color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  CDOM: new ColorRamp({
	    stops: [
	      { value: 0, color: [47, 15, 62] },
	      { value: 0.13, color: [87, 23, 86] },
	      { value: 0.25, color: [130, 28, 99] },
	      { value: 0.38, color: [171, 41, 96] },
	      { value: 0.5, color: [206, 67, 86] },
	      { value: 0.63, color: [230, 106, 84] },
	      { value: 0.75, color: [242, 149, 103] },
	      { value: 0.88, color: [249, 193, 135] },
	      { value: 1, color: [254, 237, 176] }
	    ]
	  }),
	  /**
	   * Classic chlorophyll color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  CHLOROPHYLL: new ColorRamp({
	    stops: [
	      { value: 0, color: [18, 36, 20] },
	      { value: 0.13, color: [25, 63, 41] },
	      { value: 0.25, color: [24, 91, 59] },
	      { value: 0.38, color: [13, 119, 72] },
	      { value: 0.5, color: [18, 148, 80] },
	      { value: 0.63, color: [80, 173, 89] },
	      { value: 0.75, color: [132, 196, 122] },
	      { value: 0.88, color: [175, 221, 162] },
	      { value: 1, color: [215, 249, 208] }
	    ]
	  }),
	  /**
	   * Classic density color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  DENSITY: new ColorRamp({
	    stops: [
	      { value: 0, color: [54, 14, 36] },
	      { value: 0.13, color: [89, 23, 80] },
	      { value: 0.25, color: [110, 45, 132] },
	      { value: 0.38, color: [120, 77, 178] },
	      { value: 0.5, color: [120, 113, 213] },
	      { value: 0.63, color: [115, 151, 228] },
	      { value: 0.75, color: [134, 185, 227] },
	      { value: 0.88, color: [177, 214, 227] },
	      { value: 1, color: [230, 241, 241] }
	    ]
	  }),
	  /**
	   * Classic freesurface blue color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  FREESURFACE_BLUE: new ColorRamp({
	    stops: [
	      { value: 0, color: [30, 4, 110] },
	      { value: 0.13, color: [47, 14, 176] },
	      { value: 0.25, color: [41, 45, 236] },
	      { value: 0.38, color: [25, 99, 212] },
	      { value: 0.5, color: [68, 131, 200] },
	      { value: 0.63, color: [114, 156, 197] },
	      { value: 0.75, color: [157, 181, 203] },
	      { value: 0.88, color: [200, 208, 216] },
	      { value: 1, color: [241, 237, 236] }
	    ]
	  }),
	  /**
	   * Classic freesurface red color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  FREESURFACE_RED: new ColorRamp({
	    stops: [
	      { value: 0, color: [60, 9, 18] },
	      { value: 0.13, color: [100, 17, 27] },
	      { value: 0.25, color: [142, 20, 29] },
	      { value: 0.38, color: [177, 43, 27] },
	      { value: 0.5, color: [192, 87, 63] },
	      { value: 0.63, color: [205, 125, 105] },
	      { value: 0.75, color: [216, 162, 148] },
	      { value: 0.88, color: [227, 199, 193] },
	      { value: 1, color: [241, 237, 236] }
	    ]
	  }),
	  /**
	   * Classic oxygen color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  OXYGEN: new ColorRamp({
	    stops: [
	      { value: 0, color: [64, 5, 5] },
	      { value: 0.13, color: [106, 6, 15] },
	      { value: 0.25, color: [144, 26, 7] },
	      { value: 0.38, color: [168, 64, 3] },
	      { value: 0.5, color: [188, 100, 4] },
	      { value: 0.63, color: [206, 136, 11] },
	      { value: 0.75, color: [220, 174, 25] },
	      { value: 0.88, color: [231, 215, 44] },
	      { value: 1, color: [248, 254, 105] }
	    ]
	  }),
	  /**
	   * Classic par color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  PAR: new ColorRamp({
	    stops: [
	      { value: 0, color: [51, 20, 24] },
	      { value: 0.13, color: [90, 32, 35] },
	      { value: 0.25, color: [129, 44, 34] },
	      { value: 0.38, color: [159, 68, 25] },
	      { value: 0.5, color: [182, 99, 19] },
	      { value: 0.63, color: [199, 134, 22] },
	      { value: 0.75, color: [212, 171, 35] },
	      { value: 0.88, color: [221, 210, 54] },
	      { value: 1, color: [225, 253, 75] }
	    ]
	  }),
	  /**
	   * Classic phase color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  PHASE: new ColorRamp({
	    stops: [
	      { value: 0, color: [145, 105, 18] },
	      { value: 0.13, color: [184, 71, 38] },
	      { value: 0.25, color: [186, 58, 115] },
	      { value: 0.38, color: [160, 71, 185] },
	      { value: 0.5, color: [110, 97, 218] },
	      { value: 0.63, color: [50, 123, 164] },
	      { value: 0.75, color: [31, 131, 110] },
	      { value: 0.88, color: [77, 129, 34] },
	      { value: 1, color: [145, 105, 18] }
	    ]
	  }),
	  /**
	   * Classic salinity color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  SALINITY: new ColorRamp({
	    stops: [
	      { value: 0, color: [42, 24, 108] },
	      { value: 0.13, color: [33, 50, 162] },
	      { value: 0.25, color: [15, 90, 145] },
	      { value: 0.38, color: [40, 118, 137] },
	      { value: 0.5, color: [59, 146, 135] },
	      { value: 0.63, color: [79, 175, 126] },
	      { value: 0.75, color: [120, 203, 104] },
	      { value: 0.88, color: [193, 221, 100] },
	      { value: 1, color: [253, 239, 154] }
	    ]
	  }),
	  /**
	   * Classic temperature color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  TEMPERATURE: new ColorRamp({
	    stops: [
	      { value: 0, color: [4, 35, 51] },
	      { value: 0.13, color: [23, 51, 122] },
	      { value: 0.25, color: [85, 59, 157] },
	      { value: 0.38, color: [129, 79, 143] },
	      { value: 0.5, color: [175, 95, 130] },
	      { value: 0.63, color: [222, 112, 101] },
	      { value: 0.75, color: [249, 146, 66] },
	      { value: 0.88, color: [249, 196, 65] },
	      { value: 1, color: [232, 250, 91] }
	    ]
	  }),
	  /**
	   * Classic turbidity color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  TURBIDITY: new ColorRamp({
	    stops: [
	      { value: 0, color: [34, 31, 27] },
	      { value: 0.13, color: [65, 50, 41] },
	      { value: 0.25, color: [98, 69, 52] },
	      { value: 0.38, color: [131, 89, 57] },
	      { value: 0.5, color: [161, 112, 59] },
	      { value: 0.63, color: [185, 140, 66] },
	      { value: 0.75, color: [202, 174, 88] },
	      { value: 0.88, color: [216, 209, 126] },
	      { value: 1, color: [233, 246, 171] }
	    ]
	  }),
	  /**
	   * Classic velocity blue color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  VELOCITY_BLUE: new ColorRamp({
	    stops: [
	      { value: 0, color: [17, 32, 64] },
	      { value: 0.13, color: [35, 52, 116] },
	      { value: 0.25, color: [29, 81, 156] },
	      { value: 0.38, color: [31, 113, 162] },
	      { value: 0.5, color: [50, 144, 169] },
	      { value: 0.63, color: [87, 173, 176] },
	      { value: 0.75, color: [149, 196, 189] },
	      { value: 0.88, color: [203, 221, 211] },
	      { value: 1, color: [254, 251, 230] }
	    ]
	  }),
	  /**
	   * Classic velocity green color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  VELOCITY_GREEN: new ColorRamp({
	    stops: [
	      { value: 0, color: [23, 35, 19] },
	      { value: 0.13, color: [24, 64, 38] },
	      { value: 0.25, color: [11, 95, 45] },
	      { value: 0.38, color: [39, 123, 35] },
	      { value: 0.5, color: [95, 146, 12] },
	      { value: 0.63, color: [152, 165, 18] },
	      { value: 0.75, color: [201, 186, 69] },
	      { value: 0.88, color: [233, 216, 137] },
	      { value: 1, color: [255, 253, 205] }
	    ]
	  }),
	  /**
	   * Classic cube helix color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  CUBEHELIX: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 0, 0] },
	      { value: 0.07, color: [22, 5, 59] },
	      { value: 0.13, color: [60, 4, 105] },
	      { value: 0.2, color: [109, 1, 135] },
	      { value: 0.27, color: [161, 0, 147] },
	      { value: 0.33, color: [210, 2, 142] },
	      { value: 0.4, color: [251, 11, 123] },
	      { value: 0.47, color: [255, 29, 97] },
	      { value: 0.53, color: [255, 54, 69] },
	      { value: 0.6, color: [255, 85, 46] },
	      { value: 0.67, color: [255, 120, 34] },
	      { value: 0.73, color: [255, 157, 37] },
	      { value: 0.8, color: [241, 191, 57] },
	      { value: 0.87, color: [224, 220, 93] },
	      { value: 0.93, color: [218, 241, 142] },
	      { value: 1, color: [227, 253, 198] }
	    ]
	  }),
	  /**
	   * The cividis color ramp is color blind friendly.
	   * Read more here https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0199239
	   * Defined in interval [0, 1], without unit.
	   */
	  CIVIDIS: new ColorRamp({
	    stops: [
	      { value: 0, color: [0, 32, 77, 255] },
	      { value: 0.125, color: [5, 54, 110, 255] },
	      { value: 0.25, color: [65, 77, 108, 255] },
	      { value: 0.375, color: [97, 100, 111, 255] },
	      { value: 0.5, color: [125, 124, 121, 255] },
	      { value: 0.625, color: [156, 149, 120, 255] },
	      { value: 0.75, color: [190, 175, 111, 255] },
	      { value: 0.875, color: [225, 204, 94, 255] },
	      { value: 1, color: [255, 235, 70, 255] }
	    ]
	  }),
	  /**
	   * Classic turbo color ramp.
	   * This is a luminance-constant alternative to the jet, making it more
	   * clor-blind friendly.
	   * Defined in interval [0, 1], without unit.
	   */
	  TURBO: new ColorRamp({
	    stops: [
	      { value: 0, color: [48, 18, 59, 255] },
	      { value: 0.125, color: [70, 107, 227, 255] },
	      { value: 0.25, color: [40, 187, 236, 255] },
	      { value: 0.375, color: [49, 242, 153, 255] },
	      { value: 0.5, color: [162, 252, 60, 255] },
	      { value: 0.625, color: [237, 208, 58, 255] },
	      { value: 0.75, color: [251, 128, 34, 255] },
	      { value: 0.875, color: [210, 49, 5, 255] },
	      { value: 1, color: [122, 4, 3, 255] }
	    ]
	  }),
	  /**
	   * The rocket color ramp is perceptually uniform, which makes it more
	   * color bliend friendly than the classic magma color ramp.
	   * Defined in interval [0, 1], without unit.
	   */
	  ROCKET: new ColorRamp({
	    stops: [
	      { value: 0, color: [250, 235, 221, 0] },
	      { value: 0.133, color: [250, 235, 221, 255] },
	      { value: 0.266, color: [246, 170, 130, 255] },
	      { value: 0.4, color: [240, 96, 67, 255] },
	      { value: 0.533, color: [203, 27, 79, 255] },
	      { value: 0.666, color: [132, 30, 90, 255] },
	      { value: 0.8, color: [63, 27, 68, 255] },
	      { value: 1, color: [3, 5, 26, 255] }
	    ]
	  }),
	  /**
	   * The mako color ramp is perceptually uniform and can be seen as
	   * a color blind friendly alternative to bathymetry or yignbu.
	   * Defined in interval [0, 1], without unit.
	   */
	  MAKO: new ColorRamp({
	    stops: [
	      { value: 0, color: [11, 4, 5, 255] },
	      { value: 0.125, color: [43, 28, 53, 255] },
	      { value: 0.25, color: [62, 53, 107, 255] },
	      { value: 0.375, color: [59, 86, 152, 255] },
	      { value: 0.5, color: [53, 123, 162, 255] },
	      { value: 0.625, color: [53, 158, 170, 255] },
	      { value: 0.75, color: [73, 193, 173, 255] },
	      { value: 0.875, color: [150, 221, 181, 255] },
	      { value: 1, color: [222, 245, 229, 255] }
	    ]
	  })
	};

	const colorPalettes = [
	  // https://colorhunt.co/palette/1d5b79468b97ef6262f3aa60
	  ["#1D5B79", "#468B97", "#EF6262", "#F3AA60"],
	  // https://colorhunt.co/palette/614bc333bbc585e6c5c8ffe0
	  ["#614BC3", "#33BBC5", "#85E6C5", "#C8FFE0"],
	  // https://colorhunt.co/palette/4619597a316fcd6688aed8cc
	  ["#461959", "#7A316F", "#CD6688", "#AED8CC"],
	  // https://colorhunt.co/palette/0079ff00dfa2f6fa70ff0060
	  ["#0079FF", "#00DFA2", "#F6FA70", "#FF0060"],
	  //https://colorhunt.co/palette/39b5e0a31acbff78f0f5ea5a
	  ["#39B5E0", "#A31ACB", "#FF78F0", "#F5EA5A"],
	  // https://colorhunt.co/palette/37e2d5590696c70a80fbcb0a
	  ["#37E2D5", "#590696", "#C70A80", "#FBCB0A"],
	  // https://colorhunt.co/palette/ffd36efff56d99ffcd9fb4ff
	  ["#FFD36E", "#FFF56D", "#99FFCD", "#9FB4FF"],
	  // https://colorhunt.co/palette/00ead3fff5b7ff449f005f99
	  ["#00EAD3", "#FFF5B7", "#FF449F", "#005F99"],
	  // https://colorhunt.co/palette/10a19d540375ff7000ffbf00
	  ["#10A19D", "#540375", "#FF7000", "#FFBF00"]
	];
	function getRandomColor() {
	  return colorPalettes[~~(Math.random() * colorPalettes.length)][~~(Math.random() * 4)];
	}
	function generateRandomSourceName() {
	  return `maptiler_source_${generateRandomString()}`;
	}
	function generateRandomLayerName() {
	  return `maptiler_layer_${generateRandomString()}`;
	}
	function lerpZoomNumberValues(znv, z) {
	  if (z <= znv[0].zoom) {
	    return znv[0].value;
	  }
	  if (z >= znv[znv.length - 1].zoom) {
	    return znv[znv.length - 1].value;
	  }
	  for (let i = 0; i < znv.length - 1; i += 1) {
	    if (z >= znv[i].zoom && z < znv[i + 1].zoom) {
	      const zoomRange = znv[i + 1].zoom - znv[i].zoom;
	      const normalizedDistanceFromLowerBound = (z - znv[i].zoom) / zoomRange;
	      return normalizedDistanceFromLowerBound * znv[i + 1].value + (1 - normalizedDistanceFromLowerBound) * znv[i].value;
	    }
	  }
	  return 0;
	}
	function paintColorOptionsToPaintSpec(color) {
	  return [
	    "interpolate",
	    ["linear"],
	    ["zoom"],
	    ...color.map((el) => [el.zoom, el.value]).flat()
	  ];
	}
	function rampedOptionsToLayerPaintSpec(ramp) {
	  return [
	    "interpolate",
	    ["linear"],
	    ["zoom"],
	    ...ramp.map((el) => [el.zoom, el.value]).flat()
	  ];
	}
	function computeRampedOutlineWidth(lineWidth, outlineWidth) {
	  if (typeof outlineWidth === "number" && typeof lineWidth === "number") {
	    return 2 * outlineWidth + lineWidth;
	  } else if (typeof outlineWidth === "number" && Array.isArray(lineWidth)) {
	    return [
	      "interpolate",
	      ["linear"],
	      ["zoom"],
	      ...lineWidth.map((el) => [el.zoom, 2 * outlineWidth + el.value]).flat()
	    ];
	  } else if (typeof lineWidth === "number" && Array.isArray(outlineWidth)) {
	    return [
	      "interpolate",
	      ["linear"],
	      ["zoom"],
	      ...outlineWidth.map((el) => [el.zoom, 2 * el.value + lineWidth]).flat()
	    ];
	  }
	  if (Array.isArray(lineWidth) && Array.isArray(outlineWidth)) {
	    const allStops = Array.from(
	      /* @__PURE__ */ new Set([
	        ...lineWidth.map((el) => el.zoom),
	        ...outlineWidth.map((el) => el.zoom)
	      ])
	    ).sort((a, b) => a < b ? -1 : 1);
	    return [
	      "interpolate",
	      ["linear"],
	      ["zoom"],
	      ...allStops.map((z) => [
	        z,
	        2 * lerpZoomNumberValues(outlineWidth, z) + lerpZoomNumberValues(lineWidth, z)
	      ]).flat()
	    ];
	  }
	  return 0;
	}
	function rampedPropertyValueWeight(ramp, property) {
	  return [
	    "interpolate",
	    ["linear"],
	    ["get", property],
	    ...ramp.map((el) => [el.propertyValue, el.value]).flat()
	  ];
	}
	function dashArrayMaker(pattern) {
	  const startTrimmedPattern = pattern.trimStart();
	  const fixedPattern = `${startTrimmedPattern}${" ".repeat(
    pattern.length - startTrimmedPattern.length
  )}`;
	  const patternArr = Array.from(fixedPattern);
	  const isOnlyDashesAndSpaces = patternArr.every((c) => c === " " || c === "_");
	  if (!isOnlyDashesAndSpaces) {
	    throw new Error(
	      "A dash pattern must be composed only of whitespace and underscore characters."
	    );
	  }
	  const hasBothDashesAndWhitespaces = patternArr.some((c) => c === "_") && patternArr.some((c) => c === " ");
	  if (!hasBothDashesAndWhitespaces) {
	    throw new Error(
	      "A dash pattern must contain at least one underscore and one whitespace character"
	    );
	  }
	  const dashArray = [1];
	  for (let i = 1; i < patternArr.length; i += 1) {
	    const previous = patternArr[i - 1];
	    const current = patternArr[i];
	    if (previous === current) {
	      dashArray[dashArray.length - 1] += 1;
	    } else {
	      dashArray.push(1);
	    }
	  }
	  return dashArray;
	}
	function colorDrivenByProperty(style, property) {
	  return [
	    "interpolate",
	    ["linear"],
	    ["get", property],
	    ...style.map((el) => [el.value, el.color]).flat()
	  ];
	}
	function radiusDrivenByProperty(style, property, zoomCompensation = true) {
	  if (!zoomCompensation) {
	    return [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.value, el.pointRadius]).flat()
	    ];
	  }
	  return [
	    "interpolate",
	    ["linear"],
	    ["zoom"],
	    0,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.value, el.pointRadius * 0.025]).flat()
	    ],
	    2,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.value, el.pointRadius * 0.05]).flat()
	    ],
	    4,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.value, el.pointRadius * 0.1]).flat()
	    ],
	    8,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.value, el.pointRadius * 0.25]).flat()
	    ],
	    16,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.value, el.pointRadius]).flat()
	    ]
	  ];
	}
	function radiusDrivenByPropertyHeatmap(style, property, zoomCompensation = true) {
	  if (!zoomCompensation) {
	    return [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.propertyValue, el.value]).flat()
	    ];
	  }
	  return [
	    "interpolate",
	    ["linear"],
	    ["zoom"],
	    0,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.propertyValue, el.value * 0.025]).flat()
	    ],
	    2,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.propertyValue, el.value * 0.05]).flat()
	    ],
	    4,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.propertyValue, el.value * 0.1]).flat()
	    ],
	    8,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.propertyValue, el.value * 0.25]).flat()
	    ],
	    16,
	    [
	      "interpolate",
	      ["linear"],
	      ["get", property],
	      ...style.map((el) => [el.propertyValue, el.value]).flat()
	    ]
	  ];
	}
	function opacityDrivenByProperty(colorramp, property) {
	  if (colorramp.every((el) => el.color[3] === colorramp[0].color[3])) {
	    return colorramp[0].color[3] ? colorramp[0].color[3] / 255 : 1;
	  }
	  return [
	    "interpolate",
	    ["linear"],
	    ["get", property],
	    ...colorramp.getRawColorStops().map((el) => {
	      const value = el.value;
	      const color = el.color;
	      return [value, color.length === 4 ? color[3] / 255 : 1];
	    }).flat()
	  ];
	}
	function heatmapIntensityFromColorRamp(colorRamp, steps = 10) {
	  return [
	    "interpolate",
	    ["linear"],
	    ["heatmap-density"],
	    ...Array.from({ length: steps + 1 }, (_, i) => {
	      const unitStep = i / steps;
	      return [unitStep, colorRamp.getColorHex(unitStep)];
	    }).flat()
	  ];
	}

	var __defProp = Object.defineProperty;
	var __defProps = Object.defineProperties;
	var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
	var __spreadValues = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp.call(b, prop))
	      __defNormalProp(a, prop, b[prop]);
	  if (__getOwnPropSymbols)
	    for (var prop of __getOwnPropSymbols(b)) {
	      if (__propIsEnum.call(b, prop))
	        __defNormalProp(a, prop, b[prop]);
	    }
	  return a;
	};
	var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
	var __async = (__this, __arguments, generator) => {
	  return new Promise((resolve, reject) => {
	    var fulfilled = (value) => {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var rejected = (value) => {
	      try {
	        step(generator.throw(value));
	      } catch (e) {
	        reject(e);
	      }
	    };
	    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
	    step((generator = generator.apply(__this, __arguments)).next());
	  });
	};
	function addPolyline(_0, _1) {
	  return __async(this, arguments, function* (map, options, fetchOptions = {}) {
	    var _a, _b, _c;
	    if (!options.sourceId && !options.data) {
	      throw new Error(
	        "Creating a polyline layer requires an existing .sourceId or a valid .data property"
	      );
	    }
	    let data = options.data;
	    if (typeof data === "string") {
	      if (isUUID(data)) {
	        data = `https://api.maptiler.com/data/${options.data}/features.json?key=${config.apiKey}`;
	      } else if (((_a = data.split(".").pop()) == null ? void 0 : _a.toLowerCase().trim()) === "gpx") {
	        const res = yield fetch(data, fetchOptions);
	        const gpxStr = yield res.text();
	        data = gpx(gpxStr);
	      } else if (((_b = data.split(".").pop()) == null ? void 0 : _b.toLowerCase().trim()) === "kml") {
	        const res = yield fetch(data, fetchOptions);
	        const kmlStr = yield res.text();
	        data = kml(kmlStr);
	      } else {
	        const tmpData = (_c = jsonParseNoThrow(
	          data
	        )) != null ? _c : gpxOrKml(data);
	        if (tmpData)
	          data = tmpData;
	      }
	      if (!data) {
	        throw new Error(
	          "Polyline data was provided as string but is incompatible with valid formats."
	        );
	      }
	    }
	    return addGeoJSONPolyline(map, __spreadProps(__spreadValues({}, options), {
	      data
	    }));
	  });
	}
	function addGeoJSONPolyline(map, options) {
	  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
	  if (options.layerId && map.getLayer(options.layerId)) {
	    throw new Error(
	      `A layer already exists with the layer id: ${options.layerId}`
	    );
	  }
	  const sourceId = (_a = options.sourceId) != null ? _a : generateRandomSourceName();
	  const layerId = (_b = options.layerId) != null ? _b : generateRandomLayerName();
	  const returnedInfo = {
	    polylineLayerId: layerId,
	    polylineOutlineLayerId: "",
	    polylineSourceId: sourceId
	  };
	  if (options.data && !map.getSource(sourceId)) {
	    map.addSource(sourceId, {
	      type: "geojson",
	      data: options.data
	    });
	  }
	  const lineWidth = (_c = options.lineWidth) != null ? _c : 3;
	  const lineColor = (_d = options.lineColor) != null ? _d : getRandomColor();
	  const lineOpacity = (_e = options.lineOpacity) != null ? _e : 1;
	  const lineBlur = (_f = options.lineBlur) != null ? _f : 0;
	  const lineGapWidth = (_g = options.lineGapWidth) != null ? _g : 0;
	  let lineDashArray = (_h = options.lineDashArray) != null ? _h : null;
	  const outlineWidth = (_i = options.outlineWidth) != null ? _i : 1;
	  const outlineColor = (_j = options.outlineColor) != null ? _j : "#FFFFFF";
	  const outlineOpacity = (_k = options.outlineOpacity) != null ? _k : 1;
	  const outlineBlur = (_l = options.outlineBlur) != null ? _l : 0;
	  if (typeof lineDashArray === "string") {
	    lineDashArray = dashArrayMaker(lineDashArray);
	  }
	  if (options.outline === true) {
	    const outlineLayerId = `${layerId}_outline`;
	    returnedInfo.polylineOutlineLayerId = outlineLayerId;
	    map.addLayer(
	      {
	        id: outlineLayerId,
	        type: "line",
	        source: sourceId,
	        layout: {
	          "line-join": (_m = options.lineJoin) != null ? _m : "round",
	          "line-cap": (_n = options.lineCap) != null ? _n : "round"
	        },
	        minzoom: (_o = options.minzoom) != null ? _o : 0,
	        maxzoom: (_p = options.maxzoom) != null ? _p : 23,
	        paint: {
	          "line-opacity": typeof outlineOpacity === "number" ? outlineOpacity : rampedOptionsToLayerPaintSpec(outlineOpacity),
	          "line-color": typeof outlineColor === "string" ? outlineColor : paintColorOptionsToPaintSpec(outlineColor),
	          "line-width": computeRampedOutlineWidth(lineWidth, outlineWidth),
	          "line-blur": typeof outlineBlur === "number" ? outlineBlur : rampedOptionsToLayerPaintSpec(outlineBlur)
	        }
	      },
	      options.beforeId
	    );
	  }
	  map.addLayer(
	    {
	      id: layerId,
	      type: "line",
	      source: sourceId,
	      layout: {
	        "line-join": (_q = options.lineJoin) != null ? _q : "round",
	        "line-cap": (_r = options.lineCap) != null ? _r : "round"
	      },
	      minzoom: (_s = options.minzoom) != null ? _s : 0,
	      maxzoom: (_t = options.maxzoom) != null ? _t : 23,
	      paint: __spreadValues({
	        "line-opacity": typeof lineOpacity === "number" ? lineOpacity : rampedOptionsToLayerPaintSpec(lineOpacity),
	        "line-color": typeof lineColor === "string" ? lineColor : paintColorOptionsToPaintSpec(lineColor),
	        "line-width": typeof lineWidth === "number" ? lineWidth : rampedOptionsToLayerPaintSpec(lineWidth),
	        "line-blur": typeof lineBlur === "number" ? lineBlur : rampedOptionsToLayerPaintSpec(lineBlur),
	        "line-gap-width": typeof lineGapWidth === "number" ? lineGapWidth : rampedOptionsToLayerPaintSpec(lineGapWidth)
	      }, lineDashArray && { "line-dasharray": lineDashArray })
	    },
	    options.beforeId
	  );
	  return returnedInfo;
	}
	function addPolygon(map, options) {
	  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
	  if (options.layerId && map.getLayer(options.layerId)) {
	    throw new Error(
	      `A layer already exists with the layer id: ${options.layerId}`
	    );
	  }
	  const sourceId = (_a = options.sourceId) != null ? _a : generateRandomSourceName();
	  const layerId = (_b = options.layerId) != null ? _b : generateRandomLayerName();
	  const returnedInfo = {
	    polygonLayerId: layerId,
	    polygonOutlineLayerId: options.outline ? `${layerId}_outline` : "",
	    polygonSourceId: sourceId
	  };
	  if (options.data && !map.getSource(sourceId)) {
	    let data = options.data;
	    if (typeof data === "string" && isUUID(data)) {
	      data = `https://api.maptiler.com/data/${data}/features.json?key=${config.apiKey}`;
	    }
	    map.addSource(sourceId, {
	      type: "geojson",
	      data
	    });
	  }
	  let outlineDashArray = (_c = options.outlineDashArray) != null ? _c : null;
	  const outlineWidth = (_d = options.outlineWidth) != null ? _d : 1;
	  const outlineColor = (_e = options.outlineColor) != null ? _e : "#FFFFFF";
	  const outlineOpacity = (_f = options.outlineOpacity) != null ? _f : 1;
	  const outlineBlur = (_g = options.outlineBlur) != null ? _g : 0;
	  const fillColor = (_h = options.fillColor) != null ? _h : getRandomColor();
	  const fillOpacity = (_i = options.fillOpacity) != null ? _i : 1;
	  const outlinePosition = (_j = options.outlinePosition) != null ? _j : "center";
	  const pattern = (_k = options.pattern) != null ? _k : null;
	  if (typeof outlineDashArray === "string") {
	    outlineDashArray = dashArrayMaker(outlineDashArray);
	  }
	  const addLayers = (patternImageId = null) => {
	    var _a2, _b2, _c2, _d2, _e2, _f2;
	    map.addLayer(
	      {
	        id: layerId,
	        type: "fill",
	        source: sourceId,
	        minzoom: (_a2 = options.minzoom) != null ? _a2 : 0,
	        maxzoom: (_b2 = options.maxzoom) != null ? _b2 : 23,
	        paint: __spreadValues({
	          "fill-color": typeof fillColor === "string" ? fillColor : paintColorOptionsToPaintSpec(fillColor),
	          "fill-opacity": typeof fillOpacity === "number" ? fillOpacity : rampedOptionsToLayerPaintSpec(fillOpacity)
	        }, patternImageId && { "fill-pattern": patternImageId })
	      },
	      options.beforeId
	    );
	    if (options.outline === true) {
	      let computedOutlineOffset;
	      if (outlinePosition === "inside") {
	        if (typeof outlineWidth === "number") {
	          computedOutlineOffset = 0.5 * outlineWidth;
	        } else {
	          computedOutlineOffset = rampedOptionsToLayerPaintSpec(
	            outlineWidth.map(({ zoom, value }) => ({
	              zoom,
	              value: 0.5 * value
	            }))
	          );
	        }
	      } else if (outlinePosition === "outside") {
	        if (typeof outlineWidth === "number") {
	          computedOutlineOffset = -0.5 * outlineWidth;
	        } else {
	          computedOutlineOffset = rampedOptionsToLayerPaintSpec(
	            outlineWidth.map((el) => ({
	              zoom: el.zoom,
	              value: -0.5 * el.value
	            }))
	          );
	        }
	      } else {
	        computedOutlineOffset = 0;
	      }
	      map.addLayer(
	        {
	          id: returnedInfo.polygonOutlineLayerId,
	          type: "line",
	          source: sourceId,
	          layout: {
	            "line-join": (_c2 = options.outlineJoin) != null ? _c2 : "round",
	            "line-cap": (_d2 = options.outlineCap) != null ? _d2 : "butt"
	          },
	          minzoom: (_e2 = options.minzoom) != null ? _e2 : 0,
	          maxzoom: (_f2 = options.maxzoom) != null ? _f2 : 23,
	          paint: __spreadValues({
	            "line-opacity": typeof outlineOpacity === "number" ? outlineOpacity : rampedOptionsToLayerPaintSpec(outlineOpacity),
	            "line-color": typeof outlineColor === "string" ? outlineColor : paintColorOptionsToPaintSpec(outlineColor),
	            "line-width": typeof outlineWidth === "number" ? outlineWidth : rampedOptionsToLayerPaintSpec(outlineWidth),
	            "line-blur": typeof outlineBlur === "number" ? outlineBlur : rampedOptionsToLayerPaintSpec(outlineBlur),
	            "line-offset": computedOutlineOffset
	          }, outlineDashArray && {
	            "line-dasharray": outlineDashArray
	          })
	        },
	        options.beforeId
	      );
	    }
	  };
	  if (pattern) {
	    if (map.hasImage(pattern)) {
	      addLayers(pattern);
	    } else {
	      map.loadImage(
	        pattern,
	        // (error?: Error | null, image?: HTMLImageElement | ImageBitmap | null, expiry?: ExpiryData | null)
	        (error, image) => {
	          if (error) {
	            console.error("Could not load the pattern image.", error.message);
	            return addLayers();
	          }
	          if (!image) {
	            console.error(
	              `An image cannot be created from the pattern URL ${pattern}.`
	            );
	            return addLayers();
	          }
	          map.addImage(pattern, image);
	          addLayers(pattern);
	        }
	      );
	    }
	  } else {
	    addLayers();
	  }
	  return returnedInfo;
	}
	function addPoint(map, options) {
	  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
	  if (options.layerId && map.getLayer(options.layerId)) {
	    throw new Error(
	      `A layer already exists with the layer id: ${options.layerId}`
	    );
	  }
	  const minPointRadius = (_a = options.minPointRadius) != null ? _a : 10;
	  const maxPointRadius = (_b = options.maxPointRadius) != null ? _b : 50;
	  const cluster = (_c = options.cluster) != null ? _c : false;
	  const nbDefaultDataDrivenStyleSteps = 20;
	  const colorramp = Array.isArray(options.pointColor) ? options.pointColor : ColorRampCollection.TURBO.scale(
	    10,
	    options.cluster ? 1e4 : 1e3
	  ).resample("ease-out-square");
	  const colorRampBounds = colorramp.getBounds();
	  const sourceId = (_d = options.sourceId) != null ? _d : generateRandomSourceName();
	  const layerId = (_e = options.layerId) != null ? _e : generateRandomLayerName();
	  const showLabel = (_f = options.showLabel) != null ? _f : cluster;
	  const alignOnViewport = (_g = options.alignOnViewport) != null ? _g : true;
	  const outline = (_h = options.outline) != null ? _h : false;
	  const outlineOpacity = (_i = options.outlineOpacity) != null ? _i : 1;
	  const outlineWidth = (_j = options.outlineWidth) != null ? _j : 1;
	  const outlineColor = (_k = options.outlineColor) != null ? _k : "#FFFFFF";
	  let pointOpacity;
	  const zoomCompensation = (_l = options.zoomCompensation) != null ? _l : true;
	  const minzoom = (_m = options.minzoom) != null ? _m : 0;
	  const maxzoom = (_n = options.maxzoom) != null ? _n : 23;
	  if (typeof options.pointOpacity === "number") {
	    pointOpacity = options.pointOpacity;
	  } else if (Array.isArray(options.pointOpacity)) {
	    pointOpacity = rampedOptionsToLayerPaintSpec(options.pointOpacity);
	  } else if (options.cluster) {
	    pointOpacity = opacityDrivenByProperty(colorramp, "point_count");
	  } else if (options.property) {
	    pointOpacity = opacityDrivenByProperty(colorramp, options.property);
	  } else {
	    pointOpacity = rampedOptionsToLayerPaintSpec([
	      { zoom: minzoom, value: 0 },
	      { zoom: minzoom + 0.25, value: 1 },
	      { zoom: maxzoom - 0.25, value: 1 },
	      { zoom: maxzoom, value: 0 }
	    ]);
	  }
	  const returnedInfo = {
	    pointLayerId: layerId,
	    clusterLayerId: "",
	    labelLayerId: "",
	    pointSourceId: sourceId
	  };
	  if (options.data && !map.getSource(sourceId)) {
	    let data = options.data;
	    if (typeof data === "string" && isUUID(data)) {
	      data = `https://api.maptiler.com/data/${data}/features.json?key=${config.apiKey}`;
	    }
	    map.addSource(sourceId, {
	      type: "geojson",
	      data,
	      cluster
	    });
	  }
	  if (cluster) {
	    returnedInfo.clusterLayerId = `${layerId}_cluster`;
	    const clusterStyle = Array.from(
	      { length: nbDefaultDataDrivenStyleSteps },
	      (_, i) => {
	        const value = colorRampBounds.min + i * (colorRampBounds.max - colorRampBounds.min) / (nbDefaultDataDrivenStyleSteps - 1);
	        return {
	          value,
	          pointRadius: minPointRadius + (maxPointRadius - minPointRadius) * Math.pow(i / (nbDefaultDataDrivenStyleSteps - 1), 0.5),
	          color: colorramp.getColorHex(value)
	        };
	      }
	    );
	    map.addLayer(
	      {
	        id: returnedInfo.clusterLayerId,
	        type: "circle",
	        source: sourceId,
	        filter: ["has", "point_count"],
	        paint: __spreadValues({
	          // 'circle-color': options.pointColor ?? colorDrivenByProperty(clusterStyle, "point_count"),
	          "circle-color": typeof options.pointColor === "string" ? options.pointColor : colorDrivenByProperty(clusterStyle, "point_count"),
	          "circle-radius": typeof options.pointRadius === "number" ? options.pointRadius : Array.isArray(options.pointRadius) ? rampedOptionsToLayerPaintSpec(options.pointRadius) : radiusDrivenByProperty(clusterStyle, "point_count", false),
	          "circle-pitch-alignment": alignOnViewport ? "viewport" : "map",
	          "circle-pitch-scale": "map",
	          // scale with camera distance regardless of viewport/biewport alignement
	          "circle-opacity": pointOpacity
	        }, outline && {
	          "circle-stroke-opacity": typeof outlineOpacity === "number" ? outlineOpacity : rampedOptionsToLayerPaintSpec(outlineOpacity),
	          "circle-stroke-width": typeof outlineWidth === "number" ? outlineWidth : rampedOptionsToLayerPaintSpec(outlineWidth),
	          "circle-stroke-color": typeof outlineColor === "string" ? outlineColor : paintColorOptionsToPaintSpec(outlineColor)
	        }),
	        minzoom,
	        maxzoom
	      },
	      options.beforeId
	    );
	    map.addLayer(
	      {
	        id: returnedInfo.pointLayerId,
	        type: "circle",
	        source: sourceId,
	        filter: ["!", ["has", "point_count"]],
	        paint: __spreadValues({
	          "circle-pitch-alignment": alignOnViewport ? "viewport" : "map",
	          "circle-pitch-scale": "map",
	          // scale with camera distance regardless of viewport/biewport alignement
	          // 'circle-color':  options.pointColor ?? clusterStyle[0].color,
	          "circle-color": typeof options.pointColor === "string" ? options.pointColor : colorramp.getColorHex(colorramp.getBounds().min),
	          "circle-radius": typeof options.pointRadius === "number" ? options.pointRadius : Array.isArray(options.pointRadius) ? rampedOptionsToLayerPaintSpec(options.pointRadius) : clusterStyle[0].pointRadius * 0.75,
	          "circle-opacity": pointOpacity
	        }, outline && {
	          "circle-stroke-opacity": typeof outlineOpacity === "number" ? outlineOpacity : rampedOptionsToLayerPaintSpec(outlineOpacity),
	          "circle-stroke-width": typeof outlineWidth === "number" ? outlineWidth : rampedOptionsToLayerPaintSpec(outlineWidth),
	          "circle-stroke-color": typeof outlineColor === "string" ? outlineColor : paintColorOptionsToPaintSpec(outlineColor)
	        }),
	        minzoom,
	        maxzoom
	      },
	      options.beforeId
	    );
	  } else {
	    let pointColor = typeof options.pointColor === "string" ? options.pointColor : Array.isArray(options.pointColor) ? options.pointColor.getColorHex(options.pointColor.getBounds().min) : getRandomColor();
	    let pointRadius = typeof options.pointRadius === "number" ? zoomCompensation ? rampedOptionsToLayerPaintSpec([
	      { zoom: 0, value: options.pointRadius * 0.025 },
	      { zoom: 2, value: options.pointRadius * 0.05 },
	      { zoom: 4, value: options.pointRadius * 0.1 },
	      { zoom: 8, value: options.pointRadius * 0.25 },
	      { zoom: 16, value: options.pointRadius * 1 }
	    ]) : options.pointRadius : Array.isArray(options.pointRadius) ? rampedOptionsToLayerPaintSpec(options.pointRadius) : zoomCompensation ? rampedOptionsToLayerPaintSpec([
	      { zoom: 0, value: minPointRadius * 0.05 },
	      { zoom: 2, value: minPointRadius * 0.1 },
	      { zoom: 4, value: minPointRadius * 0.2 },
	      { zoom: 8, value: minPointRadius * 0.5 },
	      { zoom: 16, value: minPointRadius * 1 }
	    ]) : minPointRadius;
	    if (options.property && Array.isArray(options.pointColor)) {
	      const dataDrivenStyle = Array.from(
	        { length: nbDefaultDataDrivenStyleSteps },
	        (_, i) => {
	          const value = colorRampBounds.min + i * (colorRampBounds.max - colorRampBounds.min) / (nbDefaultDataDrivenStyleSteps - 1);
	          return {
	            value,
	            pointRadius: typeof options.pointRadius === "number" ? options.pointRadius : minPointRadius + (maxPointRadius - minPointRadius) * Math.pow(i / (nbDefaultDataDrivenStyleSteps - 1), 0.5),
	            color: typeof options.pointColor === "string" ? options.pointColor : colorramp.getColorHex(value)
	          };
	        }
	      );
	      pointColor = colorDrivenByProperty(dataDrivenStyle, options.property);
	      pointRadius = radiusDrivenByProperty(
	        dataDrivenStyle,
	        options.property,
	        zoomCompensation
	      );
	    }
	    map.addLayer(
	      {
	        id: returnedInfo.pointLayerId,
	        type: "circle",
	        source: sourceId,
	        layout: {
	          // Contrary to labels, we want to see the small one in front. Weirdly "circle-sort-key" works in the opposite direction as "symbol-sort-key".
	          "circle-sort-key": options.property ? ["/", 1, ["get", options.property]] : 0
	        },
	        paint: __spreadValues({
	          "circle-pitch-alignment": alignOnViewport ? "viewport" : "map",
	          "circle-pitch-scale": "map",
	          // scale with camera distance regardless of viewport/biewport alignement
	          "circle-color": pointColor,
	          "circle-opacity": pointOpacity,
	          "circle-radius": pointRadius
	        }, outline && {
	          "circle-stroke-opacity": typeof outlineOpacity === "number" ? outlineOpacity : rampedOptionsToLayerPaintSpec(outlineOpacity),
	          "circle-stroke-width": typeof outlineWidth === "number" ? outlineWidth : rampedOptionsToLayerPaintSpec(outlineWidth),
	          "circle-stroke-color": typeof outlineColor === "string" ? outlineColor : paintColorOptionsToPaintSpec(outlineColor)
	        }),
	        minzoom,
	        maxzoom
	      },
	      options.beforeId
	    );
	  }
	  if (showLabel !== false && (options.cluster || options.property)) {
	    returnedInfo.labelLayerId = `${layerId}_label`;
	    const labelColor = (_o = options.labelColor) != null ? _o : "#fff";
	    const labelSize = (_p = options.labelSize) != null ? _p : 12;
	    map.addLayer(
	      {
	        id: returnedInfo.labelLayerId,
	        type: "symbol",
	        source: sourceId,
	        filter: [
	          "has",
	          options.cluster ? "point_count" : options.property
	        ],
	        layout: {
	          "text-field": options.cluster ? "{point_count_abbreviated}" : `{${options.property}}`,
	          "text-font": ["Noto Sans Regular"],
	          "text-size": labelSize,
	          "text-pitch-alignment": alignOnViewport ? "viewport" : "map",
	          "symbol-sort-key": [
	            "/",
	            1,
	            [
	              "get",
	              options.cluster ? "point_count" : options.property
	            ]
	          ]
	          // so that the largest value goes on top
	        },
	        paint: {
	          "text-color": labelColor,
	          "text-opacity": pointOpacity
	        },
	        minzoom,
	        maxzoom
	      },
	      options.beforeId
	    );
	  }
	  return returnedInfo;
	}
	function addHeatmap(map, options) {
	  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
	  if (options.layerId && map.getLayer(options.layerId)) {
	    throw new Error(
	      `A layer already exists with the layer id: ${options.layerId}`
	    );
	  }
	  const sourceId = (_a = options.sourceId) != null ? _a : generateRandomSourceName();
	  const layerId = (_b = options.layerId) != null ? _b : generateRandomLayerName();
	  const minzoom = (_c = options.minzoom) != null ? _c : 0;
	  const maxzoom = (_d = options.maxzoom) != null ? _d : 23;
	  const zoomCompensation = (_e = options.zoomCompensation) != null ? _e : true;
	  const opacity = (_f = options.opacity) != null ? _f : [
	    { zoom: minzoom, value: 0 },
	    { zoom: minzoom + 0.25, value: 1 },
	    { zoom: maxzoom - 0.25, value: 1 },
	    { zoom: maxzoom, value: 0 }
	  ];
	  let colorRamp = Array.isArray(options.colorRamp) ? options.colorRamp : ColorRampCollection.TURBO.transparentStart();
	  const crBounds = colorRamp.getBounds();
	  if (crBounds.min !== 0 || crBounds.max !== 1) {
	    colorRamp = colorRamp.scale(0, 1);
	  }
	  if (!colorRamp.hasTransparentStart()) {
	    colorRamp = colorRamp.transparentStart();
	  }
	  const intensity = (_g = options.intensity) != null ? _g : [
	    { zoom: 0, value: 0.01 },
	    { zoom: 4, value: 0.2 },
	    { zoom: 16, value: 1 }
	  ];
	  const property = (_h = options.property) != null ? _h : null;
	  const propertyValueWeight = (_i = options.weight) != null ? _i : 1;
	  let heatmapWeight = 1;
	  if (property) {
	    if (typeof propertyValueWeight === "number") {
	      heatmapWeight = propertyValueWeight;
	      if (typeof options.weight === "number") {
	        console.warn(
	          "The option `.property` is ignored when `.propertyValueWeights` is not of type `PropertyValueWeights`"
	        );
	      }
	    } else if (Array.isArray(propertyValueWeight)) {
	      heatmapWeight = rampedPropertyValueWeight(propertyValueWeight, property);
	    } else {
	      console.warn(
	        "The option `.property` is ignored when `.propertyValueWeights` is not of type `PropertyValueWeights`"
	      );
	    }
	  } else {
	    if (typeof propertyValueWeight === "number") {
	      heatmapWeight = propertyValueWeight;
	    } else if (Array.isArray(propertyValueWeight)) {
	      console.warn(
	        "The options `.propertyValueWeights` can only be used when `.property` is provided."
	      );
	    }
	  }
	  const defaultRadiusZoomRamping = [
	    { zoom: 0, value: 50 * 0.025 },
	    { zoom: 2, value: 50 * 0.05 },
	    { zoom: 4, value: 50 * 0.1 },
	    { zoom: 8, value: 50 * 0.25 },
	    { zoom: 16, value: 50 }
	  ];
	  const radius = (_j = options.radius) != null ? _j : zoomCompensation ? defaultRadiusZoomRamping : 10;
	  let radiusHeatmap = 1;
	  if (typeof radius === "number") {
	    radiusHeatmap = radius;
	  } else if (Array.isArray(radius) && "zoom" in radius[0]) {
	    radiusHeatmap = rampedOptionsToLayerPaintSpec(radius);
	  } else if (property && Array.isArray(radius) && "propertyValue" in radius[0]) {
	    radiusHeatmap = radiusDrivenByPropertyHeatmap(
	      radius,
	      property,
	      zoomCompensation
	    );
	  } else if (!property && Array.isArray(radius) && "propertyValue" in radius[0]) {
	    radiusHeatmap = rampedOptionsToLayerPaintSpec(
	      defaultRadiusZoomRamping
	    );
	    console.warn(
	      "The option `.radius` can only be property-driven if the option `.property` is provided."
	    );
	  } else {
	    radiusHeatmap = rampedOptionsToLayerPaintSpec(
	      defaultRadiusZoomRamping
	    );
	  }
	  const returnedInfo = {
	    heatmapLayerId: layerId,
	    heatmapSourceId: sourceId
	  };
	  if (options.data && !map.getSource(sourceId)) {
	    let data = options.data;
	    if (typeof data === "string" && isUUID(data)) {
	      data = `https://api.maptiler.com/data/${data}/features.json?key=${config.apiKey}`;
	    }
	    map.addSource(sourceId, {
	      type: "geojson",
	      data
	    });
	  }
	  map.addLayer({
	    id: layerId,
	    type: "heatmap",
	    source: sourceId,
	    minzoom,
	    maxzoom,
	    paint: {
	      "heatmap-weight": heatmapWeight,
	      "heatmap-intensity": typeof intensity === "number" ? intensity : rampedOptionsToLayerPaintSpec(
	        intensity
	      ),
	      "heatmap-color": heatmapIntensityFromColorRamp(colorRamp),
	      "heatmap-radius": radiusHeatmap,
	      "heatmap-opacity": typeof opacity === "number" ? opacity : rampedOptionsToLayerPaintSpec(
	        opacity
	      )
	    }
	  });
	  return returnedInfo;
	}

	const helpers = {
	  addPolyline,
	  addPolygon,
	  addPoint,
	  addHeatmap
	};

	const {
	  // supported,
	  setRTLTextPlugin,
	  getRTLTextPluginStatus,
	  LngLat,
	  LngLatBounds,
	  MercatorCoordinate,
	  Evented,
	  AJAXError,
	  prewarm,
	  clearPrewarmedResources,
	  version,
	  workerCount,
	  maxParallelImageRequests,
	  workerUrl,
	  addProtocol,
	  removeProtocol
	} = maplibregl;
	const MapMLGL = maplibregl.Map;
	const MarkerMLGL = maplibregl.Marker;
	const PopupMLGL = maplibregl.Popup;
	const StyleMLGL = maplibregl.Style;
	const CanvasSourceMLGL = maplibregl.CanvasSource;
	const GeoJSONSourceMLGL = maplibregl.GeoJSONSource;
	const ImageSourceMLGL = maplibregl.ImageSource;
	const RasterTileSourceMLGL = maplibregl.RasterTileSource;
	const RasterDEMTileSourceMLGL = maplibregl.RasterDEMTileSource;
	const VectorTileSourceMLGL = maplibregl.VectorTileSource;
	const VideoSourceMLGL = maplibregl.VideoSource;
	maplibregl.NavigationControl;
	maplibregl.GeolocateControl;
	maplibregl.AttributionControl;
	maplibregl.LogoControl;
	maplibregl.ScaleControl;
	maplibregl.FullscreenControl;
	maplibregl.TerrainControl;

	exports.AJAXError = AJAXError;
	exports.AttributionControl = AttributionControl;
	exports.CanvasSource = CanvasSource;
	exports.CanvasSourceMLGL = CanvasSourceMLGL;
	exports.ColorRamp = ColorRamp;
	exports.ColorRampCollection = ColorRampCollection;
	exports.Evented = Evented;
	exports.FullscreenControl = FullscreenControl;
	exports.GeoJSONSource = GeoJSONSource;
	exports.GeoJSONSourceMLGL = GeoJSONSourceMLGL;
	exports.GeolocateControl = GeolocateControl;
	exports.GeolocationType = GeolocationType;
	exports.ImageSource = ImageSource;
	exports.ImageSourceMLGL = ImageSourceMLGL;
	exports.Language = Language;
	exports.LanguageGeocoding = LanguageGeocoding;
	exports.LngLat = LngLat;
	exports.LngLatBounds = LngLatBounds;
	exports.LogoControl = LogoControl;
	exports.Map = Map$1;
	exports.MapMLGL = MapMLGL;
	exports.MapStyle = MapStyle;
	exports.MapStyleVariant = MapStyleVariant;
	exports.MaptilerGeolocateControl = MaptilerGeolocateControl;
	exports.MaptilerLogoControl = MaptilerLogoControl;
	exports.MaptilerNavigationControl = MaptilerNavigationControl;
	exports.MaptilerTerrainControl = MaptilerTerrainControl;
	exports.Marker = Marker;
	exports.MarkerMLGL = MarkerMLGL;
	exports.MercatorCoordinate = MercatorCoordinate;
	exports.NavigationControl = NavigationControl;
	exports.Point = Point;
	exports.Popup = Popup;
	exports.PopupMLGL = PopupMLGL;
	exports.RasterDEMTileSource = RasterDEMTileSource;
	exports.RasterDEMTileSourceMLGL = RasterDEMTileSourceMLGL;
	exports.RasterTileSource = RasterTileSource;
	exports.RasterTileSourceMLGL = RasterTileSourceMLGL;
	exports.ReferenceMapStyle = ReferenceMapStyle;
	exports.ScaleControl = ScaleControl;
	exports.SdkConfig = SdkConfig;
	exports.ServiceError = ServiceError;
	exports.Style = Style;
	exports.StyleMLGL = StyleMLGL;
	exports.TerrainControl = TerrainControl;
	exports.VectorTileSource = VectorTileSource;
	exports.VectorTileSourceMLGL = VectorTileSourceMLGL;
	exports.VideoSource = VideoSource;
	exports.VideoSourceMLGL = VideoSourceMLGL;
	exports.addProtocol = addProtocol;
	exports.clearPrewarmedResources = clearPrewarmedResources;
	exports.config = config;
	exports.coordinates = coordinates;
	exports.data = data;
	exports.geocoding = geocoding;
	exports.geolocation = geolocation;
	exports.getRTLTextPluginStatus = getRTLTextPluginStatus;
	exports.gpx = gpx;
	exports.gpxOrKml = gpxOrKml;
	exports.hasChildNodeWithName = hasChildNodeWithName;
	exports.helpers = helpers;
	exports.kml = kml;
	exports.maxParallelImageRequests = maxParallelImageRequests;
	exports.prewarm = prewarm;
	exports.removeProtocol = removeProtocol;
	exports.setRTLTextPlugin = setRTLTextPlugin;
	exports.staticMaps = staticMaps;
	exports.str2xml = str2xml;
	exports.version = version;
	exports.workerCount = workerCount;
	exports.workerUrl = workerUrl;
	exports.xml2str = xml2str;

}));
//# sourceMappingURL=maptiler-sdk.umd.js.map
