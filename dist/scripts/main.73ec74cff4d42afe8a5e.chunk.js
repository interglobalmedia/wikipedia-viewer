"use strict";(self.webpackChunkwikipedia_viewer=self.webpackChunkwikipedia_viewer||[]).push([[179],{"pv/p":(e,t,n)=>{n("kFtg");var r=a(n("znld")),n=a(n("LTmX"));function a(e){return e&&e.__esModule?e:{default:e}}window.onload=(0,r.default)(),document.querySelector(".js-search-input").addEventListener("keydown",function(e){8===(e.keyCode||e.which)&&(e.currentTarget.value="",document.location.reload())}),document.querySelector(".scroll").addEventListener("click",n.default)},LTmX:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){window.scroll(0,window.pageYOffset+100),console.log(window.pageYOffset+100)}},znld:(e,t)=>{function u(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function n(c){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=c.apply(e,i);function a(e){u(r,t,n,a,o,"next",e)}function o(e){u(r,t,n,a,o,"throw",e)}a(void 0)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){function t(){return(t=n(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.querySelector(".js-search-input").value,n=n.trim(),e.prev=3,e.next=6,function(){return r.apply(this,arguments)}(n);case 6:(function(e){var n=document.querySelector(".js-search-results");e.query.search.forEach(function(e){var t="https://en.wikipedia.org/?curid=".concat(e.pageid);document.querySelector("p").style.display="none",n.insertAdjacentHTML("beforeend",'<div class="result-item">\n        <h3 class="result-title">\n          <a href="'.concat(t,'" target="_blank" rel="noopener">').concat(e.title,'</a>\n        </h3>\n        <span class="result-snippet">').concat(e.snippet,"</span><br>\n      </div>"))})})(e.sent),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0),alert("Failed to search wikipedia");case 14:case"end":return e.stop()}},e,null,[[3,10]])}))).apply(this,arguments)}function r(){return(r=n(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500&srsearch=".concat(t),e.next=3,fetch(r);case 3:if((n=e.sent).ok){e.next=6;break}throw Error(n.statusText);case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}document.querySelector(".js-search-form").addEventListener("submit",function(e){return t.apply(this,arguments)})}},kFtg:(e,t,n)=>{n.r(t)}},t=>{var e=e=>t(t.s=e);t.O(0,[981],()=>(e("55Il"),e("pv/p")));t.O()}]);