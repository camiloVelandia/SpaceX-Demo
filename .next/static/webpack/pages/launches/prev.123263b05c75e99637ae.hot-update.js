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


function getAllLaunches(_x) {
  return _getAllLaunches.apply(this, arguments);
}

function _getAllLaunches() {
  _getAllLaunches = Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {
    var API, params, response, data;
    return _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            API = "https://api.spacexdata.com/v4/launches/query", params = {
              method: 'POST',
              body: JSON.stringify({
                "query": {
                  "$text": {
                    "$search": "crs"
                  }
                },
                "options": {
                  "limit": 10,
                  "sort": {
                    "date_utc": "desc"
                  },
                  'page': page
                }
              }),
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            };
            _context.next = 3;
            return fetch(API, params);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzLmpzIl0sIm5hbWVzIjpbImdldEFsbExhdW5jaGVzIiwicGFnZSIsIkFQSSIsInBhcmFtcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBZUEsY0FBOUI7QUFBQTtBQUFBOzs7eVRBQWUsaUJBQThCQyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsZUFEUyxtREFFZkMsTUFGZSxHQUVOO0FBQ0RDLG9CQUFNLEVBQUUsTUFEUDtBQUVEQyxrQkFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZ0I7QUFDcEIseUJBQVM7QUFDRSwyQkFBUztBQUNQLCtCQUFXO0FBREo7QUFEWCxpQkFEVztBQU1uQiwyQkFBVTtBQUNOLDJCQUFRLEVBREY7QUFFTiwwQkFBTztBQUNMLGdDQUFXO0FBRE4sbUJBRkQ7QUFLTiwwQkFBT047QUFMRDtBQU5TLGVBQWhCLENBRko7QUFnQkRPLHFCQUFPLEVBQUUsSUFBSUMsT0FBSixDQUFhO0FBQ2xCLGdDQUFnQjtBQURFLGVBQWI7QUFoQlIsYUFGTTtBQUFBO0FBQUEsbUJBdUJRQyxLQUFLLENBQUNSLEdBQUQsRUFBTUMsTUFBTixDQXZCYjs7QUFBQTtBQXVCVFEsb0JBdkJTO0FBQUE7QUFBQSxtQkF3QklBLFFBQVEsQ0FBQ0MsSUFBVCxFQXhCSjs7QUFBQTtBQXdCVEMsZ0JBeEJTO0FBQUEsNkNBeUJOQSxJQXpCTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzL3ByZXYuMTIzMjYzYjA1Yzc1ZTk5NjM3YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbExhdW5jaGVzKHBhZ2UpIHtcbmNvbnN0IEFQSSA9IGBodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92NC9sYXVuY2hlcy9xdWVyeWAsXG5wYXJhbXMgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSgge1xuICAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiJHRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiJHNlYXJjaFwiOiBcImNyc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcHRpb25zXCI6e1xuICAgICAgICAgICAgICBcImxpbWl0XCI6MTAsXG4gICAgICAgICAgICAgIFwic29ydFwiOntcbiAgICAgICAgICAgICAgICBcImRhdGVfdXRjXCI6XCJkZXNjXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ3BhZ2UnOnBhZ2VcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9ICksICAgIFxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycygge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9IClcbiAgICB9OyAgIFxuXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSSwgcGFyYW1zKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==