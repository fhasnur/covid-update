!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],u=e.base?i[0]+e.base:i[0],l=t[u]||0,s="".concat(u," ").concat(l);t[u]=l+1;var f=c(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:m(d,e),references:1}),r.push(s)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,f=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(n,e){var t,r,o;if(e.singleton){var i=h++;t=v||(v=l(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(n,e),l=0;l<t.length;l++){var s=c(t[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=i}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Baru */\r\n.container-nav-foot {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container-new {\r\n    margin: 30px auto;\r\n    width: 90%;\r\n}\r\n\r\n.slides li {\r\n    background-color: white;\r\n}\r\n\r\n.container-new img {\r\n    border-radius: 5px;\r\n}\r\n\r\n.img-chart {\r\n    width: 70px;\r\n}\r\n\r\n.food-image {\r\n    width: 100%;\r\n    max-height: 190px;\r\n    object-fit: cover;\r\n    object-position: center;\r\n}\r\n\r\nblockquote {\r\n    margin-top: 50px;\r\n}\r\n\r\napp-bar {\r\n    width: 100%;\r\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function i(n){var e="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return a(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,n)})(n)}function a(n,e,t){return(a=c()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(n,r));return t&&u(o,t.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function u(n,e){return(u=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var s=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&u(n,e)}(d,n);var e,t,i,a,s,f=(e=d,t=c(),function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function d(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),f.call(this)}return i=d,(a=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <div class="navbar-fixed">\n            <nav class="red darken-2">\n                <div class="container-nav-foot">\n                    <div class="nav-wrapper">\n                        <a href="#!" class="brand-logo">Covid-19 Update</a>\n                        <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i\n                                class="material-icons">menu</i></a>\n                        <ul class="right hide-on-med-and-down">\n                            <li><a href="#foods">Data</a></li>\n                            <li><a href=" #chart">Data Global</a></li>\n                            <li><a href=" #chart">Data Indonesia</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n\n        \x3c!-- Side Nav --\x3e\n        <ul class="sidenav" id="mobile-nav">\n            <li><a href="#" class="modal-trigger" data-target="modal2">Search</a></li>\n            <li><a href="#">Foods</a></li>\n            <li><a href="#">Chart</a></li>\n            <li><a href="#">History</a></li>\n            <li><a href="#" class="modal-trigger" data-target="modal1">Notifications</a></li>\n            <li><a href="#">Account</a></li>\n        </ul>\n\n        \x3c!-- Modal Structure --\x3e\n        <div id="modal1" class="modal">\n            <div class="modal-content">\n                <h4>Notification</h4>\n                <p>Nothing a notification</p>\n            </div>\n            <div class="modal-footer">\n                <a href="#!" class="modal-close waves-effect waves-green btn-flat">OK</a>\n            </div>\n        </div>\n        <div id="modal2" class="modal">\n            <div class="modal-content">\n                <h4>Search Foods</h4>\n                <input type="text">\n            </div>\n            <div class="modal-footer">\n                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Search</a>\n            </div>\n        </div>\n        '}}])&&r(i.prototype,a),s&&r(i,s),d}(i(HTMLElement));customElements.define("app-bar",s)},function(n,e){var t=document.querySelectorAll(".sidenav");M.Sidenav.init(t);var r=document.querySelectorAll(".modal");M.Modal.init(r);var o=document.querySelectorAll(".slider");M.Slider.init(o,{indicators:!1,interval:3e3,height:350});var i=document.querySelectorAll(".materialboxed");M.Materialbox.init(i);var a=document.querySelectorAll(".tooltipped");M.Tooltip.init(a)},function(n,e,t){"use strict";t.r(e);t(0),t(4),t(5);var r=function(){};document.addEventListener("DOMContentLoaded",r)}]);