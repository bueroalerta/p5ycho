/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** ./~/p5/lib/p5.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif(!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/YzNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/MzY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./sketches/gaussian/ui.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {const p5 = __webpack_require__(/*! p5 */ 0);\n\nmodule.exports.run = run;\nmodule.exports.init = init;\n\nfunction init(p, n, r, points) {\n  points = [];\n  for (let i = 0; i < n; i++) {\n    let rads = (i / n) * p.TWO_PI;\n    points.push(p.createVector(p.cos(rads) * r, p.sin(rads) * r, p.random()));\n  }\n  for(let b = 0; b < 7; b++) {\n    interpolate(p, points);\n  }\n  return points;\n}\n\nfunction run (p, current, points) {\n  for (var i = 0; i < 60; i++) {\n    current = update(p, current, points);\n    display(p, current);\n  }\n}\n\nfunction update (p, current, points) {\n  current = deep_copy(points);\n  for(let b = 0; b < 5; b++) {\n    for (let i = 0; i < current.length; i++) {\n      move_nearby(p, current[i], 130);\n    }\n  }\n  return current;\n}\n\nfunction interpolate (p, points) {\n  for (var i = points.length-1; i > 0; i--) {\n    points.splice(i,0,generate_midpoint(p,points[i-1],points[i]));\n  }\n  points.splice(0,0,generate_midpoint(p,points[points.length-1],points[0]));\n}\n\nlet generate_midpoint = function(p, p1, p2) {\n  let p3 = p.createVector((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, ((p1.z + p2.z) / 2) * .27);\n  move_nearby(p, p3, 250);\n  return p3;\n}\n\nlet move_nearby = function(p, pnt, sd) {\n  pnt.x = p.randomGaussian(pnt.x, pnt.z * sd);\n  pnt.y = p.randomGaussian(pnt.y, pnt.z * sd);\n}\n\nfunction display (p, current) {\n  //p.clear();\n  p.beginShape();\n  for (let i = 0; i < current.length; i++) {\n    p.vertex(current[i].x, current[i].y);\n  }\n  p.endShape(p.CLOSE);\n}\n\nlet deep_copy = function(arr) {\n  let narr = [];\n  for (var i = 0; i < arr.length; i++) {\n    narr.push(arr[i].copy());\n  }\n  return narr;\n}\n;\nvar hot = module.hot;\nif (hot) {\n  hot.accept(err => console.log('error', err));\n\n  var keep = (bindings, evalstr) =>\n    hot.dispose(function (data) {\n      data.bindings = bindings;\n      data.evalstr = evalstr;\n    });\n\n  if (!hot.data) {\n    var bindings = {}, exports = module.exports;\n    [\"init\",\"run\",\"update\",\"interpolate\",\"display\"].forEach(function (name) {\n      var f = eval(name);\n      var proxied = new Proxy(f, {\n        apply: function (f, self, args) {\n          return (bindings[name] || f).apply(self, args);\n        }\n      });\n      eval(name + \" = proxied;\");\n      if (exports[name]) exports[name] = proxied;\n    });\n    keep(bindings, str => eval(str));\n  }\n  else {\n    var data = hot.data, bindings = data.bindings;\n    [\"init\",\"run\",\"update\",\"interpolate\",\"display\"].forEach(function (name) {\n      bindings[name] = data.evalstr(\n        '(' +\n        eval(name).toString()\n                  .replace(/^function \\w+\\(/,\n                           'function (') +\n        ')');\n    });\n    keep(bindings, data.evalstr);\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NrZXRjaGVzL2dhdXNzaWFuL3VpLmpzP2I3YmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcDUgPSByZXF1aXJlKCdwNScpO1xuXG5tb2R1bGUuZXhwb3J0cy5ydW4gPSBydW47XG5tb2R1bGUuZXhwb3J0cy5pbml0ID0gaW5pdDtcblxuZnVuY3Rpb24gaW5pdChwLCBuLCByLCBwb2ludHMpIHtcbiAgcG9pbnRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IHJhZHMgPSAoaSAvIG4pICogcC5UV09fUEk7XG4gICAgcG9pbnRzLnB1c2gocC5jcmVhdGVWZWN0b3IocC5jb3MocmFkcykgKiByLCBwLnNpbihyYWRzKSAqIHIsIHAucmFuZG9tKCkpKTtcbiAgfVxuICBmb3IobGV0IGIgPSAwOyBiIDwgNzsgYisrKSB7XG4gICAgaW50ZXJwb2xhdGUocCwgcG9pbnRzKTtcbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5mdW5jdGlvbiBydW4gKHAsIGN1cnJlbnQsIHBvaW50cykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICBjdXJyZW50ID0gdXBkYXRlKHAsIGN1cnJlbnQsIHBvaW50cyk7XG4gICAgZGlzcGxheShwLCBjdXJyZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUgKHAsIGN1cnJlbnQsIHBvaW50cykge1xuICBjdXJyZW50ID0gZGVlcF9jb3B5KHBvaW50cyk7XG4gIGZvcihsZXQgYiA9IDA7IGIgPCA1OyBiKyspIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1vdmVfbmVhcmJ5KHAsIGN1cnJlbnRbaV0sIDEzMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjdXJyZW50O1xufVxuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZSAocCwgcG9pbnRzKSB7XG4gIGZvciAodmFyIGkgPSBwb2ludHMubGVuZ3RoLTE7IGkgPiAwOyBpLS0pIHtcbiAgICBwb2ludHMuc3BsaWNlKGksMCxnZW5lcmF0ZV9taWRwb2ludChwLHBvaW50c1tpLTFdLHBvaW50c1tpXSkpO1xuICB9XG4gIHBvaW50cy5zcGxpY2UoMCwwLGdlbmVyYXRlX21pZHBvaW50KHAscG9pbnRzW3BvaW50cy5sZW5ndGgtMV0scG9pbnRzWzBdKSk7XG59XG5cbmxldCBnZW5lcmF0ZV9taWRwb2ludCA9IGZ1bmN0aW9uKHAsIHAxLCBwMikge1xuICBsZXQgcDMgPSBwLmNyZWF0ZVZlY3RvcigocDEueCArIHAyLngpIC8gMiwgKHAxLnkgKyBwMi55KSAvIDIsICgocDEueiArIHAyLnopIC8gMikgKiAuMjcpO1xuICBtb3ZlX25lYXJieShwLCBwMywgMjUwKTtcbiAgcmV0dXJuIHAzO1xufVxuXG5sZXQgbW92ZV9uZWFyYnkgPSBmdW5jdGlvbihwLCBwbnQsIHNkKSB7XG4gIHBudC54ID0gcC5yYW5kb21HYXVzc2lhbihwbnQueCwgcG50LnogKiBzZCk7XG4gIHBudC55ID0gcC5yYW5kb21HYXVzc2lhbihwbnQueSwgcG50LnogKiBzZCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXkgKHAsIGN1cnJlbnQpIHtcbiAgLy9wLmNsZWFyKCk7XG4gIHAuYmVnaW5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICBwLnZlcnRleChjdXJyZW50W2ldLngsIGN1cnJlbnRbaV0ueSk7XG4gIH1cbiAgcC5lbmRTaGFwZShwLkNMT1NFKTtcbn1cblxubGV0IGRlZXBfY29weSA9IGZ1bmN0aW9uKGFycikge1xuICBsZXQgbmFyciA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIG5hcnIucHVzaChhcnJbaV0uY29weSgpKTtcbiAgfVxuICByZXR1cm4gbmFycjtcbn1cbjtcbnZhciBob3QgPSBtb2R1bGUuaG90O1xuaWYgKGhvdCkge1xuICBob3QuYWNjZXB0KGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpKTtcblxuICB2YXIga2VlcCA9IChiaW5kaW5ncywgZXZhbHN0cikgPT5cbiAgICBob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgZGF0YS5iaW5kaW5ncyA9IGJpbmRpbmdzO1xuICAgICAgZGF0YS5ldmFsc3RyID0gZXZhbHN0cjtcbiAgICB9KTtcblxuICBpZiAoIWhvdC5kYXRhKSB7XG4gICAgdmFyIGJpbmRpbmdzID0ge30sIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcbiAgICBbXCJpbml0XCIsXCJydW5cIixcInVwZGF0ZVwiLFwiaW50ZXJwb2xhdGVcIixcImRpc3BsYXlcIl0uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGYgPSBldmFsKG5hbWUpO1xuICAgICAgdmFyIHByb3hpZWQgPSBuZXcgUHJveHkoZiwge1xuICAgICAgICBhcHBseTogZnVuY3Rpb24gKGYsIHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gKGJpbmRpbmdzW25hbWVdIHx8IGYpLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGV2YWwobmFtZSArIFwiID0gcHJveGllZDtcIik7XG4gICAgICBpZiAoZXhwb3J0c1tuYW1lXSkgZXhwb3J0c1tuYW1lXSA9IHByb3hpZWQ7XG4gICAgfSk7XG4gICAga2VlcChiaW5kaW5ncywgc3RyID0+IGV2YWwoc3RyKSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIGRhdGEgPSBob3QuZGF0YSwgYmluZGluZ3MgPSBkYXRhLmJpbmRpbmdzO1xuICAgIFtcImluaXRcIixcInJ1blwiLFwidXBkYXRlXCIsXCJpbnRlcnBvbGF0ZVwiLFwiZGlzcGxheVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBiaW5kaW5nc1tuYW1lXSA9IGRhdGEuZXZhbHN0cihcbiAgICAgICAgJygnICtcbiAgICAgICAgZXZhbChuYW1lKS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmZ1bmN0aW9uIFxcdytcXCgvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bmN0aW9uICgnKSArXG4gICAgICAgICcpJyk7XG4gICAgfSk7XG4gICAga2VlcChiaW5kaW5ncywgZGF0YS5ldmFsc3RyKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2tldGNoZXMvZ2F1c3NpYW4vdWkuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */,
/* 5 */
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./sketches/gaussian/gaussian.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {const p5 = __webpack_require__(/*! p5 */ 0);\n\nconst ui = __webpack_require__(/*! ./ui */ 3);\n\nlet sketch = function(p) {\n  let n = 10;\n  let r = 250;\n\n  let points;\n  let current;\n\n  p.setup = function() {\n    var canvas = p.createCanvas(800, 800);\n    p.fill(0,22,65,6);\n    p.noStroke();\n    p.frameRate(.5);\n    p.blendMode(p.MULTIPLY);\n\n    current = [];\n    points = ui.init(p,n,r,points);\n  }\n\n  p.draw = function() {\n    p.clear();\n    p.translate(p.width/2, p.height/2);\n    ui.run(p, current, points);\n    points = ui.init(p,n,r,points,current);\n  }\n}\n\nnew p5(sketch);\n;\nvar hot = module.hot;\nif (hot) {\n  hot.accept(err => console.log('error', err));\n\n  var keep = (bindings, evalstr) =>\n    hot.dispose(function (data) {\n      data.bindings = bindings;\n      data.evalstr = evalstr;\n    });\n\n  if (!hot.data) {\n    var bindings = {}, exports = module.exports;\n    [].forEach(function (name) {\n      var f = eval(name);\n      var proxied = new Proxy(f, {\n        apply: function (f, self, args) {\n          return (bindings[name] || f).apply(self, args);\n        }\n      });\n      eval(name + \" = proxied;\");\n      if (exports[name]) exports[name] = proxied;\n    });\n    keep(bindings, str => eval(str));\n  }\n  else {\n    var data = hot.data, bindings = data.bindings;\n    [].forEach(function (name) {\n      bindings[name] = data.evalstr(\n        '(' +\n        eval(name).toString()\n                  .replace(/^function \\w+\\(/,\n                           'function (') +\n        ')');\n    });\n    keep(bindings, data.evalstr);\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NrZXRjaGVzL2dhdXNzaWFuL2dhdXNzaWFuLmpzPzQ3N2EiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcDUgPSByZXF1aXJlKCdwNScpO1xuXG5jb25zdCB1aSA9IHJlcXVpcmUoJy4vdWknKTtcblxubGV0IHNrZXRjaCA9IGZ1bmN0aW9uKHApIHtcbiAgbGV0IG4gPSAxMDtcbiAgbGV0IHIgPSAyNTA7XG5cbiAgbGV0IHBvaW50cztcbiAgbGV0IGN1cnJlbnQ7XG5cbiAgcC5zZXR1cCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyg4MDAsIDgwMCk7XG4gICAgcC5maWxsKDAsMjIsNjUsNik7XG4gICAgcC5ub1N0cm9rZSgpO1xuICAgIHAuZnJhbWVSYXRlKC41KTtcbiAgICBwLmJsZW5kTW9kZShwLk1VTFRJUExZKTtcblxuICAgIGN1cnJlbnQgPSBbXTtcbiAgICBwb2ludHMgPSB1aS5pbml0KHAsbixyLHBvaW50cyk7XG4gIH1cblxuICBwLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICBwLmNsZWFyKCk7XG4gICAgcC50cmFuc2xhdGUocC53aWR0aC8yLCBwLmhlaWdodC8yKTtcbiAgICB1aS5ydW4ocCwgY3VycmVudCwgcG9pbnRzKTtcbiAgICBwb2ludHMgPSB1aS5pbml0KHAsbixyLHBvaW50cyxjdXJyZW50KTtcbiAgfVxufVxuXG5uZXcgcDUoc2tldGNoKTtcbjtcbnZhciBob3QgPSBtb2R1bGUuaG90O1xuaWYgKGhvdCkge1xuICBob3QuYWNjZXB0KGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpKTtcblxuICB2YXIga2VlcCA9IChiaW5kaW5ncywgZXZhbHN0cikgPT5cbiAgICBob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgZGF0YS5iaW5kaW5ncyA9IGJpbmRpbmdzO1xuICAgICAgZGF0YS5ldmFsc3RyID0gZXZhbHN0cjtcbiAgICB9KTtcblxuICBpZiAoIWhvdC5kYXRhKSB7XG4gICAgdmFyIGJpbmRpbmdzID0ge30sIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcbiAgICBbXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZiA9IGV2YWwobmFtZSk7XG4gICAgICB2YXIgcHJveGllZCA9IG5ldyBQcm94eShmLCB7XG4gICAgICAgIGFwcGx5OiBmdW5jdGlvbiAoZiwgc2VsZiwgYXJncykge1xuICAgICAgICAgIHJldHVybiAoYmluZGluZ3NbbmFtZV0gfHwgZikuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZXZhbChuYW1lICsgXCIgPSBwcm94aWVkO1wiKTtcbiAgICAgIGlmIChleHBvcnRzW25hbWVdKSBleHBvcnRzW25hbWVdID0gcHJveGllZDtcbiAgICB9KTtcbiAgICBrZWVwKGJpbmRpbmdzLCBzdHIgPT4gZXZhbChzdHIpKTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgZGF0YSA9IGhvdC5kYXRhLCBiaW5kaW5ncyA9IGRhdGEuYmluZGluZ3M7XG4gICAgW10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgYmluZGluZ3NbbmFtZV0gPSBkYXRhLmV2YWxzdHIoXG4gICAgICAgICcoJyArXG4gICAgICAgIGV2YWwobmFtZSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15mdW5jdGlvbiBcXHcrXFwoLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICdmdW5jdGlvbiAoJykgK1xuICAgICAgICAnKScpO1xuICAgIH0pO1xuICAgIGtlZXAoYmluZGluZ3MsIGRhdGEuZXZhbHN0cik7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NrZXRjaGVzL2dhdXNzaWFuL2dhdXNzaWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);