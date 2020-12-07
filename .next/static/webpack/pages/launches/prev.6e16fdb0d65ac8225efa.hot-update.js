webpackHotUpdate_N_E("pages/launches/prev",{

/***/ "./services/getPastLaunches.js":
/*!*************************************!*\
  !*** ./services/getPastLaunches.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAllLaunches; });
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


var API = "https://api.spacexdata.com/v4/launches/query",
    params = {
  method: 'POST',
  body: JSON.stringify({
    "query": {},
    "options": {
      "limit": 10,
      "sort": {
        "date_utc": "desc"
      }
    }
  }),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};
function getAllLaunches() {
  return _getAllLaunches.apply(this, arguments);
}

function _getAllLaunches() {
  _getAllLaunches = Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, data;
    return _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(API, params);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllLaunches.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzLmpzIl0sIm5hbWVzIjpbIkFQSSIsInBhcmFtcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJnZXRBbGxMYXVuY2hlcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxHQUFHLGlEQUFUO0FBQUEsSUFDQ0MsTUFBTSxHQUFHO0FBQ0ZDLFFBQU0sRUFBRSxNQUROO0FBRUZDLE1BQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWdCO0FBQ3JCLGFBQVEsRUFEYTtBQUVuQixlQUFVO0FBQ04sZUFBUSxFQURGO0FBRU4sY0FBTztBQUNMLG9CQUFXO0FBRE47QUFGRDtBQUZTLEdBQWhCLENBRkg7QUFXRkMsU0FBTyxFQUFFLElBQUlDLE9BQUosQ0FBYTtBQUNsQixvQkFBZ0I7QUFERSxHQUFiO0FBWFAsQ0FEVjtBQWlCZSxTQUFlQyxjQUE5QjtBQUFBO0FBQUE7Ozt5VEFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNRQyxLQUFLLENBQUNULEdBQUQsRUFBTUMsTUFBTixDQURiOztBQUFBO0FBQ1RTLG9CQURTO0FBQUE7QUFBQSxtQkFFSUEsUUFBUSxDQUFDQyxJQUFULEVBRko7O0FBQUE7QUFFVEMsZ0JBRlM7QUFBQSw2Q0FHTkEsSUFITTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzL3ByZXYuNmUxNmZkYjBkNjVhYzgyMjVlZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSSA9IGBodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92NC9sYXVuY2hlcy9xdWVyeWAsXG4gcGFyYW1zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoIHtcbiAgICAgICAgXCJxdWVyeVwiOnt9LFxuICAgICAgICAgIFwib3B0aW9uc1wiOntcbiAgICAgICAgICAgICAgXCJsaW1pdFwiOjEwLFxuICAgICAgICAgICAgICBcInNvcnRcIjp7XG4gICAgICAgICAgICAgICAgXCJkYXRlX3V0Y1wiOlwiZGVzY1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9ICksICAgIFxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycygge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9IClcbiAgICB9OyAgIFxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRBbGxMYXVuY2hlcygpIHtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJLCBwYXJhbXMpO1xuICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9