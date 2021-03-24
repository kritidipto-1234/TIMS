parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QebB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchData=s;var e=require("./data.js");function s(){e.users.push(new e.User("Nitish Anand",1111,"manager")),e.users.push(new e.User("Debraj Som",2222,"unitHead")),e.users.push(new e.User("Ayush Raj",3333)),e.users.push(new e.User("Indronil Roy",4444)),e.tools.push(new e.Tool("Screw Driver","A15")),e.tools.push(new e.Tool("Pipe","B16")),e.tools.push(new e.Tool("Plus","C17")),e.tools.push(new e.Tool("Plus","C17"))}
},{"./data.js":"WLCb"}],"AMfV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayComponent=s,exports.updateLocalStorage=c;var t=require("./data.js");function r(t){return a(t)||o(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return i(t)}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function s(t,e){r(document.body.children).forEach(function(r){r.classList.contains(t)?r.style.display="block":r.style.display="none"})}function c(){localStorage.setItem("users",JSON.stringify(t.users)),localStorage.setItem("tools",JSON.stringify(t.tools)),localStorage.setItem("transactions",JSON.stringify(t.transactions))}
},{"./data.js":"WLCb"}],"WLCb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateUser=u,exports.addUser=l,exports.removeTool=d,exports.addTool=h,exports.addTransaction=x,exports.Tool=exports.User=exports.currentUser=exports.transactions=exports.tools=exports.users=void 0;var t=require("./fetchdata.js"),e=require("./utility.js");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function t(e,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"worker";o(this,t),this.name=e,this.password=r,this.type=s};exports.User=r;var s=function t(e,r){o(this,t),this.type=e,this.id=r};exports.Tool=s;var a=function t(e,r,s){o(this,t);var a=new Date;this.date="".concat(a.getUTCDate(),"/").concat(a.getUTCMonth()+1,"/").concat(a.getFullYear()),this.person=e,this.tool=r,this.type=s},n=JSON.parse(window.localStorage.getItem("users"))||[];exports.users=n;var i=JSON.parse(window.localStorage.getItem("tools"))||[];exports.tools=i;var p=JSON.parse(window.localStorage.getItem("transactions"))||[];exports.transactions=p,0===n.length&&((0,t.fetchData)(),(0,e.updateLocalStorage)());var c=void 0;function u(t){exports.currentUser=c=t}function l(t,o){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"worker";n.push(new r(t,o,s)),(0,e.updateLocalStorage)()}function d(t){var o=i.findIndex(function(e){return e.type.toUpperCase()==t.type.toUpperCase()&&e.id==t.id});i.splice(o,1),(0,e.updateLocalStorage)()}function h(t,o){i.push(new s(t,o)),(0,e.updateLocalStorage)()}function x(t,o,r){p.push(new a(t,o,r)),(0,e.updateLocalStorage)()}exports.currentUser=c;
},{"./fetchdata.js":"QebB","./utility.js":"AMfV"}],"hVxG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayManagerPage=r;var e=require("./data.js"),n=document.querySelector(".managerName"),a=document.querySelector(".inventoryTools");function r(){n.innerHTML="Welcome , ".concat(e.currentUser.name,' <br> <div class="post">Manager</div>');var r="";e.tools.forEach(function(e,n){return r+='<div class="tools"> <span>'.concat(n+1,"</span> <span>").concat(e.id,"</span> <span>").concat(e.type,"</span></div>")}),a.innerHTML=r}
},{"./data.js":"WLCb"}],"EWqB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayWorkerPage=a;var e=require("./data.js"),t=document.querySelector(".workerName"),o=document.querySelector(".issueBtn"),r=document.querySelector(".returnBtn"),n=document.querySelector(".issueTool"),u=document.querySelector(".returnType"),c=document.querySelector(".returnID"),l=document.querySelector(".toolMessage");function a(){t.innerHTML="Welcome , ".concat(e.currentUser.name,' <br> <div class="post">Worker</div>')}o.addEventListener("click",function(){var t=e.tools.find(function(e){return e.type.toUpperCase()==n.value.toUpperCase()});t?(l.innerHTML="Tool successfully issued. Tool Type:".concat(t.type," Tool ID:").concat(t.id,"."),(0,e.removeTool)(t),(0,e.addTransaction)(e.currentUser,t,"Issue")):l.innerHTML="No ".concat(n.value," available."),l.style.opacity=1,setTimeout(function(){return l.style.opacity=0},3e3),n.value=""}),r.addEventListener("click",function(){""!==c.value&&""!==u.value&&((0,e.addTool)(u.value,c.value),(0,e.addTransaction)(e.currentUser,new e.Tool(u.value,c.value),"Return"),u.value="",c.value="",l.innerHTML="Tool successfully returned",l.style.opacity=1,setTimeout(function(){return l.style.opacity=0},3e3))});
},{"./data.js":"WLCb"}],"GDyr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayUnitHeadPage=c;var e=require("./data.js"),t=document.querySelector(".unitHeadName"),n=document.querySelector(".itemUsage"),r=document.querySelector(".allUsers");function c(){t.innerHTML="Welcome , ".concat(e.currentUser.name,' <br> <div class="post">Unit Head</div>'),n.innerHTML=e.transactions.reduce(function(e,t){return e+'<div class="parameters"> <div>'.concat(t.person.name,"</div> <div>").concat(t.type,"</div> <div>").concat(t.tool.type,"</div> <div>").concat(t.date,"</div> </div>")},""),r.innerHTML=e.users.reduce(function(e,t){return e+'<div class="parameters"> <div>'.concat(t.name,"</div> <div>").concat(t.type,"</div> </div>")},"")}
},{"./data.js":"WLCb"}],"lh5F":[function(require,module,exports) {
"use strict";var e=require("./data.js"),r=require("./utility.js"),t=require("./manager.js"),a=require("./worker.js"),n=require("./unitHead.js"),o=document.querySelector(".loginBtn"),u=document.querySelector(".name"),i=document.querySelector(".password"),s=document.querySelector(".messageLogin");o.addEventListener("click",function(){var o=e.users.find(function(e){return e.name===u.value&&e.password==i.value});o?((0,e.updateUser)(o),"manager"===o.type?((0,r.displayComponent)("manager",o),(0,t.displayManagerPage)()):"unitHead"===o.type?((0,r.displayComponent)("unitHead",o),(0,n.displayUnitHeadPage)()):"worker"===o.type&&((0,r.displayComponent)("worker",o),(0,a.displayWorkerPage)())):(s.innerHTML="Sorry no such user. Please enter correctly or register.",s.style.opacity=1,setTimeout(function(){return s.style.opacity=0},1e3)),u.value="",i.value=""});
},{"./data.js":"WLCb","./utility.js":"AMfV","./manager.js":"hVxG","./worker.js":"EWqB","./unitHead.js":"GDyr"}],"hqMT":[function(require,module,exports) {
"use strict";var e=require("./data.js"),r=document.querySelector(".registerBtn"),t=document.querySelector(".name"),u=document.querySelector(".password"),a=document.querySelector(".messageLogin");r.addEventListener("click",function(){""!==t.value&&""!==u.value&&(e.users.find(function(e){return e.name==t.value&&e.password==u.value})?a.innerHTML="Choose a different password or name":((0,e.addUser)(t.value,u.value),a.innerHTML="You are successfully registered.Remember your details"),t.value="",u.value="",a.style.opacity=1,setTimeout(function(){return a.style.opacity=0},1e3))});
},{"./data.js":"WLCb"}],"VrYR":[function(require,module,exports) {
"use strict";var r=require("./data.js");require("./login.js"),require("./register.js");var e=require("./utility.js");function t(r){return u(r)||i(r)||o(r)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(r,e){if(r){if("string"==typeof r)return a(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(r,e):void 0}}function i(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function u(r){if(Array.isArray(r))return a(r)}function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}require("./fetchdata.js"),require("./manager.js"),require("./unitHead.js"),require("./worker.js");var c=document.querySelector(".component"),s=document.querySelector(".register"),l=document.querySelectorAll(".logoutBtn");function f(){t(l).forEach(function(t){return t.addEventListener("click",function(){(0,r.updateUser)(void 0),(0,e.displayComponent)("login")})})}f();
},{"./data.js":"WLCb","./login.js":"lh5F","./register.js":"hqMT","./utility.js":"AMfV","./fetchdata.js":"QebB","./manager.js":"hVxG","./unitHead.js":"GDyr","./worker.js":"EWqB"}]},{},["VrYR"], null)
//# sourceMappingURL=main.ce396b74.js.map