// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"juvus/fetchdata.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = fetchData;

var _data = require("./data.js");

//we are not actually fetching data just pretending like there is a backend
function fetchData() //pretending to fetch data from data base
{
  _data.users.push(new _data.User('Nitish Anand', 1234, 'manager'));

  _data.users.push(new _data.User('Debraj Som', 1235, 'unitHead'));

  _data.users.push(new _data.User('Ayush Raj', 1236));

  _data.users.push(new _data.User('Indronil Roy', 1237));

  _data.tools.push(new _data.Tool('Screw Driver', 'A15'));

  _data.tools.push(new _data.Tool('Pipe', 'B16'));

  _data.tools.push(new _data.Tool('Plus', 'C17'));

  _data.tools.push(new _data.Tool('Plus', 'C17'));
}
},{"./data.js":"juvus/data.js"}],"juvus/utility.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayComponent = displayComponent;
exports.updateLocalStorage = updateLocalStorage;

var _data = require("./data.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function displayComponent(component, user) {
  _toConsumableArray(document.body.children).forEach(function (e) {
    if (!e.classList.contains(component)) e.style.display = 'none';else e.style.display = 'block';
  });
}

function updateLocalStorage() {
  localStorage.setItem('users', JSON.stringify(_data.users));
  localStorage.setItem('tools', JSON.stringify(_data.tools));
  localStorage.setItem('transactions', JSON.stringify(_data.transactions));
}
},{"./data.js":"juvus/data.js"}],"juvus/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = updateUser;
exports.addUser = addUser;
exports.removeTool = removeTool;
exports.addTool = addTool;
exports.addTransaction = addTransaction;
exports.Tool = exports.User = exports.currentUser = exports.transactions = exports.tools = exports.users = void 0;

var _fetchdata = require("./fetchdata.js");

var _utility = require("./utility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(name, password) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "worker";

  _classCallCheck(this, User);

  this.name = name;
  this.password = password;
  this.type = type;
};

exports.User = User;

var Tool = function Tool(type, id) {
  _classCallCheck(this, Tool);

  this.type = type;
  this.id = id;
};

exports.Tool = Tool;

var Transaction = function Transaction(person, tool, type) {
  _classCallCheck(this, Transaction);

  var d = new Date();
  this.date = "".concat(d.getUTCDate(), "/").concat(d.getUTCMonth() + 1, "/").concat(d.getFullYear());
  this.person = person;
  this.tool = tool;
  this.type = type;
};

var users = JSON.parse(window.localStorage.getItem('users')) || [];
exports.users = users;
var tools = JSON.parse(window.localStorage.getItem('tools')) || [];
exports.tools = tools;
var transactions = JSON.parse(window.localStorage.getItem('transactions')) || [];
exports.transactions = transactions;

if (users.length === 0) //means its first time used
  {
    (0, _fetchdata.fetchData)();
    (0, _utility.updateLocalStorage)();
  }

var currentUser = undefined;
exports.currentUser = currentUser;

function updateUser(newUser) {
  exports.currentUser = currentUser = newUser;
}

function addUser(userName, userPassword) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "worker";
  users.push(new User(userName, userPassword, type));
  (0, _utility.updateLocalStorage)();
}

function removeTool(tool) {
  var index = tools.findIndex(function (e) {
    return e.type.toUpperCase() == tool.type.toUpperCase() && e.id == tool.id;
  });
  tools.splice(index, 1);
  (0, _utility.updateLocalStorage)();
}

function addTool(toolType, toolId) {
  tools.push(new Tool(toolType, toolId));
  (0, _utility.updateLocalStorage)();
}

function addTransaction(user, tool, type) {
  transactions.push(new Transaction(user, tool, type));
  (0, _utility.updateLocalStorage)();
}
},{"./fetchdata.js":"juvus/fetchdata.js","./utility.js":"juvus/utility.js"}],"juvus/manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayManagerPage = displayManagerPage;

var _data = require("./data.js");

var welcomeDisplay = document.querySelector('.managerName');
var inventoryTools = document.querySelector('.inventoryTools');

function displayManagerPage() {
  welcomeDisplay.innerHTML = "Welcome , ".concat(_data.currentUser.name, " <br> <div class=\"post\">Manager</div>");
  var markup = '';

  _data.tools.forEach(function (e, i) {
    return markup += "<div class=\"tools\"> <span>".concat(i + 1, "</span> <span>").concat(e.id, "</span> <span>").concat(e.type, "</span></div>");
  });

  inventoryTools.innerHTML = markup;
}
},{"./data.js":"juvus/data.js"}],"juvus/worker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayWorkerPage = displayWorkerPage;

var _data = require("./data.js");

var welcomeDisplay = document.querySelector('.workerName');
var issueBtn = document.querySelector('.issueBtn');
var returnBtn = document.querySelector('.returnBtn');
var issueTool = document.querySelector('.issueTool');
var returnType = document.querySelector('.returnType');
var returnId = document.querySelector('.returnID');
var toolMessage = document.querySelector('.toolMessage');
issueBtn.addEventListener('click', function () {
  var result = _data.tools.find(function (e) {
    return e.type.toUpperCase() == issueTool.value.toUpperCase();
  });

  if (result) {
    toolMessage.innerHTML = "Tool successfully issued. Tool Type:".concat(result.type, " Tool ID:").concat(result.id, ".");
    (0, _data.removeTool)(result);
    (0, _data.addTransaction)(_data.currentUser, result, "Issue");
  } else {
    toolMessage.innerHTML = "No ".concat(issueTool.value, " available.");
  }

  toolMessage.style.opacity = 1;
  setTimeout(function () {
    return toolMessage.style.opacity = 0;
  }, 3000);
  issueTool.value = '';
});
returnBtn.addEventListener('click', function () {
  if (returnId.value === '' || returnType.value === '') return;
  (0, _data.addTool)(returnType.value, returnId.value);
  (0, _data.addTransaction)(_data.currentUser, new _data.Tool(returnType.value, returnId.value), "Return");
  returnType.value = '';
  returnId.value = '';
  toolMessage.innerHTML = 'Tool successfully returned';
  toolMessage.style.opacity = 1;
  setTimeout(function () {
    return toolMessage.style.opacity = 0;
  }, 3000);
});

function displayWorkerPage() {
  welcomeDisplay.innerHTML = "Welcome , ".concat(_data.currentUser.name, " <br> <div class=\"post\">Worker</div>");
}
},{"./data.js":"juvus/data.js"}],"juvus/unitHead.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayUnitHeadPage = displayUnitHeadPage;

var _data = require("./data.js");

var welcomeMessage = document.querySelector('.unitHeadName');
var itemUsage = document.querySelector('.itemUsage');
var allUsers = document.querySelector('.allUsers');

function displayUnitHeadPage() {
  welcomeMessage.innerHTML = "Welcome , ".concat(_data.currentUser.name, " <br> <div class=\"post\">Unit Head</div>");
  itemUsage.innerHTML = _data.transactions.reduce(function (acc, c) {
    return acc + "<div class=\"parameters\"> <div>".concat(c.person.name, "</div> <div>").concat(c.type, "</div> <div>").concat(c.tool.type, "</div> <div>").concat(c.date, "</div> </div>");
  }, '');
  allUsers.innerHTML = _data.users.reduce(function (acc, c) {
    return acc + "<div class=\"parameters\"> <div>".concat(c.name, "</div> <div>").concat(c.type, "</div> </div>");
  }, '');
}
},{"./data.js":"juvus/data.js"}],"juvus/login.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");

var _utility = require("./utility.js");

var _manager = require("./manager.js");

var _worker = require("./worker.js");

var _unitHead = require("./unitHead.js");

var loginBtn = document.querySelector('.loginBtn');
var nameInput = document.querySelector('.name');
var passwordInput = document.querySelector('.password');
var message = document.querySelector('.messageLogin');
loginBtn.addEventListener('click', function () {
  var result = _data.users.find(function (e) {
    return e.name === nameInput.value && e.password == passwordInput.value;
  });

  if (result) {
    (0, _data.updateUser)(result);

    if (result.type === 'manager') {
      (0, _utility.displayComponent)('manager', result);
      (0, _manager.displayManagerPage)();
    } else if (result.type === 'unitHead') {
      (0, _utility.displayComponent)('unitHead', result);
      (0, _unitHead.displayUnitHeadPage)();
    } else if (result.type === 'worker') {
      (0, _utility.displayComponent)('worker', result);
      (0, _worker.displayWorkerPage)();
    }
  } else {
    message.innerHTML = 'Sorry no such user. Please enter correctly or register.';
    message.style.opacity = 1;
    setTimeout(function () {
      return message.style.opacity = 0;
    }, 1000);
  }

  nameInput.value = '';
  passwordInput.value = '';
});
},{"./data.js":"juvus/data.js","./utility.js":"juvus/utility.js","./manager.js":"juvus/manager.js","./worker.js":"juvus/worker.js","./unitHead.js":"juvus/unitHead.js"}],"juvus/register.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");

var registerBtn = document.querySelector('.registerBtn');
var nameInput = document.querySelector('.name');
var passwordInput = document.querySelector('.password');
var message = document.querySelector('.messageLogin');
registerBtn.addEventListener('click', function () {
  if (nameInput.value === '' || passwordInput.value === '') return;

  if (_data.users.find(function (e) {
    return e.name == nameInput.value && e.password == passwordInput.value;
  })) {
    message.innerHTML = 'Choose a different password or name';
  } else {
    (0, _data.addUser)(nameInput.value, passwordInput.value);
    message.innerHTML = 'You are successfully registered.Remember your details';
  }

  nameInput.value = '';
  passwordInput.value = '';
  message.style.opacity = 1;
  setTimeout(function () {
    return message.style.opacity = 0;
  }, 1000);
});
},{"./data.js":"juvus/data.js"}],"juvus/main.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");

require("./login.js");

require("./register.js");

var _utility = require("./utility.js");

require("./fetchdata.js");

require("./manager.js");

require("./unitHead.js");

require("./worker.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var components = document.querySelector('.component');
var registerBtn = document.querySelector('.register');
var logoutBtn = document.querySelectorAll('.logoutBtn');

function init() {
  _toConsumableArray(logoutBtn).forEach(function (e) {
    return e.addEventListener('click', function () {
      (0, _data.updateUser)(undefined);
      (0, _utility.displayComponent)('login');
    });
  });
}

init();
},{"./data.js":"juvus/data.js","./login.js":"juvus/login.js","./register.js":"juvus/register.js","./utility.js":"juvus/utility.js","./fetchdata.js":"juvus/fetchdata.js","./manager.js":"juvus/manager.js","./unitHead.js":"juvus/unitHead.js","./worker.js":"juvus/worker.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36095" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","juvus/main.js"], null)
//# sourceMappingURL=/main.97b7fbae.js.map