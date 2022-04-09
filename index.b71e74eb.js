// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8wcER":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _ff14 = require("./ff14");
const fileSelector = document.getElementById('file-selector');
const progress_bar = document.getElementById("parseBar");
const bar = document.getElementById("parseProgress");
const download_button = document.getElementById("downloadFile");
function create_download(filename, text) {
    if (download_button == null) return;
    download_button.style.display = 'block';
    download_button.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    download_button.setAttribute('download', filename);
}
function clear_screen() {
    set_progress_bar(0);
    if (download_button == null) return;
    download_button.style.display = 'none';
}
function set_progress_bar(percentage) {
    if (percentage > 1 || percentage < 0) return;
    if (progress_bar == null || bar == null) return;
    if (percentage == 0) bar.style.display = "none";
    else bar.style.display = "block";
    progress_bar.style.width = percentage * 100 + "%";
    progress_bar.innerHTML = percentage * 100 + "%";
}
function read_file(file, handler) {
    const reader = new FileReader();
    reader.onload = ()=>{
        let text = reader.result;
        if (text == null) {
            console.log(`file load failed`);
            return;
        }
        const out_content = handler(text.toString());
        create_download(file.name, out_content);
        console.log(out_content.substring(0, 100));
    };
    reader.readAsText(file);
}
function parse_ff_log(payload) {
    let lines = payload.split('\n');
    let counter = 0;
    let line_counter = 0;
    let output = "";
    lines.forEach((line_)=>{
        let line = line_.trim();
        if (line == '') return;
        let loc1 = line.indexOf('|');
        let loc2 = line.lastIndexOf('|');
        let message_type = Number(line.substring(0, loc1));
        let text = line.substring(0, loc2);
        if (message_type == _ff14.LogMessageType.Version || message_type == _ff14.LogMessageType.Territory) counter = 0;
        ++counter;
        ++line_counter;
        const encrypted_text = _ff14.encrypt(`${text}|${counter}`);
        text = `${text}|${encrypted_text}`;
        output += text + '\n';
        set_progress_bar(line_counter / lines.length);
    });
    return output;
}
function open_file(event) {
    read_file(event.target.files[0], parse_ff_log);
}
function main() {
    if (fileSelector == null) {
        console.log("fileSelector is null");
        return;
    }
    fileSelector.addEventListener('change', (event)=>{
        open_file(event);
    });
    if (download_button == null) {
        console.log("download_button is null");
        return;
    }
    download_button.addEventListener("click", clear_screen);
}
main();

},{"./ff14":"4kgc4"}],"4kgc4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogMessageType", ()=>LogMessageType
);
parcelHelpers.export(exports, "encrypt", ()=>encrypt
);
var _fastSha256 = require("fast-sha256");
var _fastSha256Default = parcelHelpers.interopDefault(_fastSha256);
let LogMessageType;
(function(LogMessageType1) {
    LogMessageType1[LogMessageType1["ChatLog"] = 0] = "ChatLog";
    LogMessageType1[LogMessageType1["Territory"] = 1] = "Territory";
    LogMessageType1[LogMessageType1["ChangePrimaryPlayer"] = 2] = "ChangePrimaryPlayer";
    LogMessageType1[LogMessageType1["AddCombatant"] = 3] = "AddCombatant";
    LogMessageType1[LogMessageType1["RemoveCombatant"] = 4] = "RemoveCombatant";
    LogMessageType1[LogMessageType1["PartyList"] = 11] = "PartyList";
    LogMessageType1[LogMessageType1["PlayerStats"] = 12] = "PlayerStats";
    LogMessageType1[LogMessageType1["StartsCasting"] = 20] = "StartsCasting";
    LogMessageType1[LogMessageType1["ActionEffect"] = 21] = "ActionEffect";
    LogMessageType1[LogMessageType1["AOEActionEffect"] = 22] = "AOEActionEffect";
    LogMessageType1[LogMessageType1["CancelAction"] = 23] = "CancelAction";
    LogMessageType1[LogMessageType1["DoTHoT"] = 24] = "DoTHoT";
    LogMessageType1[LogMessageType1["Death"] = 25] = "Death";
    LogMessageType1[LogMessageType1["StatusAdd"] = 26] = "StatusAdd";
    LogMessageType1[LogMessageType1["TargetIcon"] = 27] = "TargetIcon";
    LogMessageType1[LogMessageType1["WaymarkMarker"] = 28] = "WaymarkMarker";
    LogMessageType1[LogMessageType1["SignMarker"] = 29] = "SignMarker";
    LogMessageType1[LogMessageType1["StatusRemove"] = 30] = "StatusRemove";
    LogMessageType1[LogMessageType1["Gauge"] = 31] = "Gauge";
    LogMessageType1[LogMessageType1["World"] = 32] = "World";
    LogMessageType1[LogMessageType1["Director"] = 33] = "Director";
    LogMessageType1[LogMessageType1["NameToggle"] = 34] = "NameToggle";
    LogMessageType1[LogMessageType1["Tether"] = 35] = "Tether";
    LogMessageType1[LogMessageType1["LimitBreak"] = 36] = "LimitBreak";
    LogMessageType1[LogMessageType1["EffectResult"] = 37] = "EffectResult";
    LogMessageType1[LogMessageType1["StatusList"] = 38] = "StatusList";
    LogMessageType1[LogMessageType1["UpdateHp"] = 39] = "UpdateHp";
    LogMessageType1[LogMessageType1["ChangeMap"] = 40] = "ChangeMap";
    LogMessageType1[LogMessageType1["SystemLogMessage"] = 41] = "SystemLogMessage";
    LogMessageType1[LogMessageType1["StatusList3"] = 42] = "StatusList3";
    LogMessageType1[LogMessageType1["Settings"] = 249] = "Settings";
    LogMessageType1[LogMessageType1["Process"] = 250] = "Process";
    LogMessageType1[LogMessageType1["Debug"] = 251] = "Debug";
    LogMessageType1[LogMessageType1["PacketDump"] = 252] = "PacketDump";
    LogMessageType1[LogMessageType1["Version"] = 253] = "Version";
    LogMessageType1[LogMessageType1["Error"] = 254] = "Error";
})(LogMessageType || (LogMessageType = {}));
let _lookup32 = [
    3145776,
    3211312,
    3276848,
    3342384,
    3407920,
    3473456,
    3538992,
    3604528,
    3670064,
    3735600,
    6357040,
    6422576,
    6488112,
    6553648,
    6619184,
    6684720,
    3145777,
    3211313,
    3276849,
    3342385,
    3407921,
    3473457,
    3538993,
    3604529,
    3670065,
    3735601,
    6357041,
    6422577,
    6488113,
    6553649,
    6619185,
    6684721,
    3145778,
    3211314,
    3276850,
    3342386,
    3407922,
    3473458,
    3538994,
    3604530,
    3670066,
    3735602,
    6357042,
    6422578,
    6488114,
    6553650,
    6619186,
    6684722,
    3145779,
    3211315,
    3276851,
    3342387,
    3407923,
    3473459,
    3538995,
    3604531,
    3670067,
    3735603,
    6357043,
    6422579,
    6488115,
    6553651,
    6619187,
    6684723,
    3145780,
    3211316,
    3276852,
    3342388,
    3407924,
    3473460,
    3538996,
    3604532,
    3670068,
    3735604,
    6357044,
    6422580,
    6488116,
    6553652,
    6619188,
    6684724,
    3145781,
    3211317,
    3276853,
    3342389,
    3407925,
    3473461,
    3538997,
    3604533,
    3670069,
    3735605,
    6357045,
    6422581,
    6488117,
    6553653,
    6619189,
    6684725,
    3145782,
    3211318,
    3276854,
    3342390,
    3407926,
    3473462,
    3538998,
    3604534,
    3670070,
    3735606,
    6357046,
    6422582,
    6488118,
    6553654,
    6619190,
    6684726,
    3145783,
    3211319,
    3276855,
    3342391,
    3407927,
    3473463,
    3538999,
    3604535,
    3670071,
    3735607,
    6357047,
    6422583,
    6488119,
    6553655,
    6619191,
    6684727,
    3145784,
    3211320,
    3276856,
    3342392,
    3407928,
    3473464,
    3539000,
    3604536,
    3670072,
    3735608,
    6357048,
    6422584,
    6488120,
    6553656,
    6619192,
    6684728,
    3145785,
    3211321,
    3276857,
    3342393,
    3407929,
    3473465,
    3539001,
    3604537,
    3670073,
    3735609,
    6357049,
    6422585,
    6488121,
    6553657,
    6619193,
    6684729,
    3145825,
    3211361,
    3276897,
    3342433,
    3407969,
    3473505,
    3539041,
    3604577,
    3670113,
    3735649,
    6357089,
    6422625,
    6488161,
    6553697,
    6619233,
    6684769,
    3145826,
    3211362,
    3276898,
    3342434,
    3407970,
    3473506,
    3539042,
    3604578,
    3670114,
    3735650,
    6357090,
    6422626,
    6488162,
    6553698,
    6619234,
    6684770,
    3145827,
    3211363,
    3276899,
    3342435,
    3407971,
    3473507,
    3539043,
    3604579,
    3670115,
    3735651,
    6357091,
    6422627,
    6488163,
    6553699,
    6619235,
    6684771,
    3145828,
    3211364,
    3276900,
    3342436,
    3407972,
    3473508,
    3539044,
    3604580,
    3670116,
    3735652,
    6357092,
    6422628,
    6488164,
    6553700,
    6619236,
    6684772,
    3145829,
    3211365,
    3276901,
    3342437,
    3407973,
    3473509,
    3539045,
    3604581,
    3670117,
    3735653,
    6357093,
    6422629,
    6488165,
    6553701,
    6619237,
    6684773,
    3145830,
    3211366,
    3276902,
    3342438,
    3407974,
    3473510,
    3539046,
    3604582,
    3670118,
    3735654,
    6357094,
    6422630,
    6488166,
    6553702,
    6619238,
    6684774
];
function encrypt(text) {
    let encoder = new TextEncoder();
    return _encrypt(_fastSha256Default.default(encoder.encode(text)));
}
function _get_enc_table() {
    let arr = new Array(256);
    for(let i = 0; i < 256; i++){
        var text = ('0' + (i & 255).toString(16)).slice(-2);
        arr[i] = text.charCodeAt(0) + (text.charCodeAt(1) << 16);
    }
    return arr;
}
function _encrypt(bytes) {
    let array = new Uint8Array(16);
    for(let i = 0; i < array.length / 2; i++){
        let num = _lookup32[bytes[i]];
        array[2 * i] = num;
        array[2 * i + 1] = num >> 16;
    }
    let decoder = new TextDecoder("utf-8");
    return decoder.decode(array);
}

},{"fast-sha256":"kz7JX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kz7JX":[function(require,module,exports) {
(function(root, factory) {
    // Hack to make all exports of this module sha256 function object properties.
    var exports = {};
    factory(exports);
    var sha256 = exports["default"];
    for(var k in exports)sha256[k] = exports[k];
    if (typeof module.exports === 'object') module.exports = sha256;
    else if (typeof define === 'function' && define.amd) define(function() {
        return sha256;
    });
    else root.sha256 = sha256;
})(this, function(exports) {
    "use strict";
    exports.__esModule = true;
    // SHA-256 (+ HMAC and PBKDF2) for JavaScript.
    //
    // Written in 2014-2016 by Dmitry Chestnykh.
    // Public domain, no warranty.
    //
    // Functions (accept and return Uint8Arrays):
    //
    //   sha256(message) -> hash
    //   sha256.hmac(key, message) -> mac
    //   sha256.pbkdf2(password, salt, rounds, dkLen) -> dk
    //
    //  Classes:
    //
    //   new sha256.Hash()
    //   new sha256.HMAC(key)
    //
    exports.digestLength = 32;
    exports.blockSize = 64;
    // SHA-256 constants
    var K = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ]);
    function hashBlocks(w, v, p, pos, len) {
        var a, b, c, d, e, f, g, h, u, i, j, t1, t2;
        while(len >= 64){
            a = v[0];
            b = v[1];
            c = v[2];
            d = v[3];
            e = v[4];
            f = v[5];
            g = v[6];
            h = v[7];
            for(i = 0; i < 16; i++){
                j = pos + i * 4;
                w[i] = (p[j] & 255) << 24 | (p[j + 1] & 255) << 16 | (p[j + 2] & 255) << 8 | p[j + 3] & 255;
            }
            for(i = 16; i < 64; i++){
                u = w[i - 2];
                t1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
                u = w[i - 15];
                t2 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
                w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
            }
            for(i = 0; i < 64; i++){
                t1 = (((e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)) + (e & f ^ ~e & g) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
                t2 = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & b ^ a & c ^ b & c) | 0;
                h = g;
                g = f;
                f = e;
                e = d + t1 | 0;
                d = c;
                c = b;
                b = a;
                a = t1 + t2 | 0;
            }
            v[0] += a;
            v[1] += b;
            v[2] += c;
            v[3] += d;
            v[4] += e;
            v[5] += f;
            v[6] += g;
            v[7] += h;
            pos += 64;
            len -= 64;
        }
        return pos;
    }
    // Hash implements SHA256 hash algorithm.
    var Hash1 = /** @class */ function() {
        function Hash() {
            this.digestLength = exports.digestLength;
            this.blockSize = exports.blockSize;
            // Note: Int32Array is used instead of Uint32Array for performance reasons.
            this.state = new Int32Array(8); // hash state
            this.temp = new Int32Array(64); // temporary state
            this.buffer = new Uint8Array(128); // buffer for data to hash
            this.bufferLength = 0; // number of bytes in buffer
            this.bytesHashed = 0; // number of total bytes hashed
            this.finished = false; // indicates whether the hash was finalized
            this.reset();
        }
        // Resets hash state making it possible
        // to re-use this instance to hash other data.
        Hash.prototype.reset = function() {
            this.state[0] = 1779033703;
            this.state[1] = 3144134277;
            this.state[2] = 1013904242;
            this.state[3] = 2773480762;
            this.state[4] = 1359893119;
            this.state[5] = 2600822924;
            this.state[6] = 528734635;
            this.state[7] = 1541459225;
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
            return this;
        };
        // Cleans internal buffers and re-initializes hash state.
        Hash.prototype.clean = function() {
            for(var i = 0; i < this.buffer.length; i++)this.buffer[i] = 0;
            for(var i = 0; i < this.temp.length; i++)this.temp[i] = 0;
            this.reset();
        };
        // Updates hash state with the given data.
        //
        // Optionally, length of the data can be specified to hash
        // fewer bytes than data.length.
        //
        // Throws error when trying to update already finalized hash:
        // instance must be reset to use it again.
        Hash.prototype.update = function(data, dataLength) {
            if (dataLength === void 0) dataLength = data.length;
            if (this.finished) throw new Error("SHA256: can't update because hash was finished.");
            var dataPos = 0;
            this.bytesHashed += dataLength;
            if (this.bufferLength > 0) {
                while(this.bufferLength < 64 && dataLength > 0){
                    this.buffer[this.bufferLength++] = data[dataPos++];
                    dataLength--;
                }
                if (this.bufferLength === 64) {
                    hashBlocks(this.temp, this.state, this.buffer, 0, 64);
                    this.bufferLength = 0;
                }
            }
            if (dataLength >= 64) {
                dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
                dataLength %= 64;
            }
            while(dataLength > 0){
                this.buffer[this.bufferLength++] = data[dataPos++];
                dataLength--;
            }
            return this;
        };
        // Finalizes hash state and puts hash into out.
        //
        // If hash was already finalized, puts the same value.
        Hash.prototype.finish = function(out) {
            if (!this.finished) {
                var bytesHashed = this.bytesHashed;
                var left = this.bufferLength;
                var bitLenHi = bytesHashed / 536870912 | 0;
                var bitLenLo = bytesHashed << 3;
                var padLength = bytesHashed % 64 < 56 ? 64 : 128;
                this.buffer[left] = 128;
                for(var i = left + 1; i < padLength - 8; i++)this.buffer[i] = 0;
                this.buffer[padLength - 8] = bitLenHi >>> 24 & 255;
                this.buffer[padLength - 7] = bitLenHi >>> 16 & 255;
                this.buffer[padLength - 6] = bitLenHi >>> 8 & 255;
                this.buffer[padLength - 5] = bitLenHi >>> 0 & 255;
                this.buffer[padLength - 4] = bitLenLo >>> 24 & 255;
                this.buffer[padLength - 3] = bitLenLo >>> 16 & 255;
                this.buffer[padLength - 2] = bitLenLo >>> 8 & 255;
                this.buffer[padLength - 1] = bitLenLo >>> 0 & 255;
                hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
                this.finished = true;
            }
            for(var i = 0; i < 8; i++){
                out[i * 4 + 0] = this.state[i] >>> 24 & 255;
                out[i * 4 + 1] = this.state[i] >>> 16 & 255;
                out[i * 4 + 2] = this.state[i] >>> 8 & 255;
                out[i * 4 + 3] = this.state[i] >>> 0 & 255;
            }
            return this;
        };
        // Returns the final hash digest.
        Hash.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
        };
        // Internal function for use in HMAC for optimization.
        Hash.prototype._saveState = function(out) {
            for(var i = 0; i < this.state.length; i++)out[i] = this.state[i];
        };
        // Internal function for use in HMAC for optimization.
        Hash.prototype._restoreState = function(from, bytesHashed) {
            for(var i = 0; i < this.state.length; i++)this.state[i] = from[i];
            this.bytesHashed = bytesHashed;
            this.finished = false;
            this.bufferLength = 0;
        };
        return Hash;
    }();
    exports.Hash = Hash1;
    // HMAC implements HMAC-SHA256 message authentication algorithm.
    var HMAC1 = /** @class */ function() {
        function HMAC(key) {
            this.inner = new Hash1();
            this.outer = new Hash1();
            this.blockSize = this.inner.blockSize;
            this.digestLength = this.inner.digestLength;
            var pad = new Uint8Array(this.blockSize);
            if (key.length > this.blockSize) new Hash1().update(key).finish(pad).clean();
            else for(var i = 0; i < key.length; i++)pad[i] = key[i];
            for(var i = 0; i < pad.length; i++)pad[i] ^= 54;
            this.inner.update(pad);
            for(var i = 0; i < pad.length; i++)pad[i] ^= 106;
            this.outer.update(pad);
            this.istate = new Uint32Array(8);
            this.ostate = new Uint32Array(8);
            this.inner._saveState(this.istate);
            this.outer._saveState(this.ostate);
            for(var i = 0; i < pad.length; i++)pad[i] = 0;
        }
        // Returns HMAC state to the state initialized with key
        // to make it possible to run HMAC over the other data with the same
        // key without creating a new instance.
        HMAC.prototype.reset = function() {
            this.inner._restoreState(this.istate, this.inner.blockSize);
            this.outer._restoreState(this.ostate, this.outer.blockSize);
            return this;
        };
        // Cleans HMAC state.
        HMAC.prototype.clean = function() {
            for(var i = 0; i < this.istate.length; i++)this.ostate[i] = this.istate[i] = 0;
            this.inner.clean();
            this.outer.clean();
        };
        // Updates state with provided data.
        HMAC.prototype.update = function(data) {
            this.inner.update(data);
            return this;
        };
        // Finalizes HMAC and puts the result in out.
        HMAC.prototype.finish = function(out) {
            if (this.outer.finished) this.outer.finish(out);
            else {
                this.inner.finish(out);
                this.outer.update(out, this.digestLength).finish(out);
            }
            return this;
        };
        // Returns message authentication code.
        HMAC.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
        };
        return HMAC;
    }();
    exports.HMAC = HMAC1;
    // Returns SHA256 hash of data.
    function hash(data) {
        var h = new Hash1().update(data);
        var digest = h.digest();
        h.clean();
        return digest;
    }
    exports.hash = hash;
    // Function hash is both available as module.hash and as default export.
    exports["default"] = hash;
    // Returns HMAC-SHA256 of data under the key.
    function hmac1(key, data) {
        var h = new HMAC1(key).update(data);
        var digest = h.digest();
        h.clean();
        return digest;
    }
    exports.hmac = hmac1;
    // Fills hkdf buffer like this:
    // T(1) = HMAC-Hash(PRK, T(0) | info | 0x01)
    function fillBuffer(buffer, hmac, info, counter) {
        // Counter is a byte value: check if it overflowed.
        var num = counter[0];
        if (num === 0) throw new Error("hkdf: cannot expand more");
        // Prepare HMAC instance for new data with old key.
        hmac.reset();
        // Hash in previous output if it was generated
        // (i.e. counter is greater than 1).
        if (num > 1) hmac.update(buffer);
        // Hash in info if it exists.
        if (info) hmac.update(info);
        // Hash in the counter.
        hmac.update(counter);
        // Output result to buffer and clean HMAC instance.
        hmac.finish(buffer);
        // Increment counter inside typed array, this works properly.
        counter[0]++;
    }
    var hkdfSalt = new Uint8Array(exports.digestLength); // Filled with zeroes.
    function hkdf(key, salt, info, length) {
        if (salt === void 0) salt = hkdfSalt;
        if (length === void 0) length = 32;
        var counter = new Uint8Array([
            1
        ]);
        // HKDF-Extract uses salt as HMAC key, and key as data.
        var okm = hmac1(salt, key);
        // Initialize HMAC for expanding with extracted key.
        // Ensure no collisions with `hmac` function.
        var hmac_ = new HMAC1(okm);
        // Allocate buffer.
        var buffer = new Uint8Array(hmac_.digestLength);
        var bufpos = buffer.length;
        var out = new Uint8Array(length);
        for(var i = 0; i < length; i++){
            if (bufpos === buffer.length) {
                fillBuffer(buffer, hmac_, info, counter);
                bufpos = 0;
            }
            out[i] = buffer[bufpos++];
        }
        hmac_.clean();
        buffer.fill(0);
        counter.fill(0);
        return out;
    }
    exports.hkdf = hkdf;
    // Derives a key from password and salt using PBKDF2-HMAC-SHA256
    // with the given number of iterations.
    //
    // The number of bytes returned is equal to dkLen.
    //
    // (For better security, avoid dkLen greater than hash length - 32 bytes).
    function pbkdf2(password, salt, iterations, dkLen) {
        var prf = new HMAC1(password);
        var len = prf.digestLength;
        var ctr = new Uint8Array(4);
        var t = new Uint8Array(len);
        var u = new Uint8Array(len);
        var dk = new Uint8Array(dkLen);
        for(var i = 0; i * len < dkLen; i++){
            var c = i + 1;
            ctr[0] = c >>> 24 & 255;
            ctr[1] = c >>> 16 & 255;
            ctr[2] = c >>> 8 & 255;
            ctr[3] = c >>> 0 & 255;
            prf.reset();
            prf.update(salt);
            prf.update(ctr);
            prf.finish(u);
            for(var j = 0; j < len; j++)t[j] = u[j];
            for(var j = 2; j <= iterations; j++){
                prf.reset();
                prf.update(u).finish(u);
                for(var k = 0; k < len; k++)t[k] ^= u[k];
            }
            for(var j = 0; j < len && i * len + j < dkLen; j++)dk[i * len + j] = t[j];
        }
        for(var i = 0; i < len; i++)t[i] = u[i] = 0;
        for(var i = 0; i < 4; i++)ctr[i] = 0;
        prf.clean();
        return dk;
    }
    exports.pbkdf2 = pbkdf2;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8wcER","h7u1C"], "h7u1C", "parcelRequire94c2")

//# sourceMappingURL=index.b71e74eb.js.map
