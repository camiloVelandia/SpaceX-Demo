webpackHotUpdate_N_E("pages/stats",{

/***/ "./services/getPastLaunches.js":
/*!*************************************!*\
  !*** ./services/getPastLaunches.js ***!
  \*************************************/
/*! exports provided: getPastLaunches, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPastLaunches", function() { return getPastLaunches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAllPastLaunches; });
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


function getPastLaunches(_x) {
  return _getPastLaunches.apply(this, arguments);
}

function _getPastLaunches() {
  _getPastLaunches = Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {
    var API, params, response, data;
    return _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            API = "https://api.spacexdata.com/v4/launches/query", params = {
              method: 'POST',
              body: JSON.stringify({
                "query": {},
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
  return _getPastLaunches.apply(this, arguments);
}

;
function getAllPastLaunches(_x2) {
  return _getAllPastLaunches.apply(this, arguments);
}

function _getAllPastLaunches() {
  _getAllPastLaunches = Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(page) {
    var API, params, response, data;
    return _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            API = "https://api.spacexdata.com/v4/launches/query", params = {
              method: 'POST',
              body: JSON.stringify({
                "query": {},
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
            _context2.next = 3;
            return fetch(API, params);

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();

          case 6:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getAllPastLaunches.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzLmpzIl0sIm5hbWVzIjpbImdldFBhc3RMYXVuY2hlcyIsInBhZ2UiLCJBUEkiLCJwYXJhbXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZ2V0QWxsUGFzdExhdW5jaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFnQkEsZUFBdkI7QUFBQTtBQUFBOzs7MFRBQVEsaUJBQStCQyxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRkMsZUFERSxtREFFUkMsTUFGUSxHQUVDO0FBQ0RDLG9CQUFNLEVBQUUsTUFEUDtBQUVEQyxrQkFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZ0I7QUFDckIseUJBQVEsRUFEYTtBQUVuQiwyQkFBVTtBQUNOLDJCQUFRLEVBREY7QUFFTiwwQkFBTztBQUNMLGdDQUFXO0FBRE4sbUJBRkQ7QUFLTiwwQkFBT047QUFMRDtBQUZTLGVBQWhCLENBRko7QUFZRE8scUJBQU8sRUFBRSxJQUFJQyxPQUFKLENBQWE7QUFDbEIsZ0NBQWdCO0FBREUsZUFBYjtBQVpSLGFBRkQ7QUFBQTtBQUFBLG1CQW1CZUMsS0FBSyxDQUFDUixHQUFELEVBQU1DLE1BQU4sQ0FuQnBCOztBQUFBO0FBbUJGUSxvQkFuQkU7QUFBQTtBQUFBLG1CQW9CV0EsUUFBUSxDQUFDQyxJQUFULEVBcEJYOztBQUFBO0FBb0JGQyxnQkFwQkU7QUFBQSw2Q0FxQkNBLElBckJEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFzQlA7QUFHYyxTQUFlQyxrQkFBOUI7QUFBQTtBQUFBOzs7NlRBQWUsa0JBQWtDYixJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsZUFEUyxtREFFZkMsTUFGZSxHQUVOO0FBQ0RDLG9CQUFNLEVBQUUsTUFEUDtBQUVEQyxrQkFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZ0I7QUFDckIseUJBQVEsRUFEYTtBQUVuQiwyQkFBVTtBQUNOLDJCQUFRLEVBREY7QUFFTiwwQkFBTztBQUNMLGdDQUFXO0FBRE4sbUJBRkQ7QUFLTiwwQkFBT047QUFMRDtBQUZTLGVBQWhCLENBRko7QUFZRE8scUJBQU8sRUFBRSxJQUFJQyxPQUFKLENBQWE7QUFDbEIsZ0NBQWdCO0FBREUsZUFBYjtBQVpSLGFBRk07QUFBQTtBQUFBLG1CQW1CUUMsS0FBSyxDQUFDUixHQUFELEVBQU1DLE1BQU4sQ0FuQmI7O0FBQUE7QUFtQlRRLG9CQW5CUztBQUFBO0FBQUEsbUJBb0JJQSxRQUFRLENBQUNDLElBQVQsRUFwQko7O0FBQUE7QUFvQlRDLGdCQXBCUztBQUFBLDhDQXFCTkEsSUFyQk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGF0cy5iODFmOWNmMWZhNWNkOGMxZGE4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICBhc3luYyBmdW5jdGlvbiBnZXRQYXN0TGF1bmNoZXMocGFnZSkge1xuY29uc3QgQVBJID0gYGh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L2xhdW5jaGVzL3F1ZXJ5YCxcbnBhcmFtcyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KCB7XG4gICAgICAgIFwicXVlcnlcIjp7fSxcbiAgICAgICAgICBcIm9wdGlvbnNcIjp7XG4gICAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgICAgXCJzb3J0XCI6e1xuICAgICAgICAgICAgICAgIFwiZGF0ZV91dGNcIjpcImRlc2NcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAncGFnZSc6cGFnZVxuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH0gKSwgICAgXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0gKVxuICAgIH07ICAgXG5cbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJLCBwYXJhbXMpO1xuICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBhc3RMYXVuY2hlcyhwYWdlKSB7XG5jb25zdCBBUEkgPSBgaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvbGF1bmNoZXMvcXVlcnlgLFxucGFyYW1zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoIHtcbiAgICAgICAgXCJxdWVyeVwiOnt9LFxuICAgICAgICAgIFwib3B0aW9uc1wiOntcbiAgICAgICAgICAgICAgXCJsaW1pdFwiOjEwLFxuICAgICAgICAgICAgICBcInNvcnRcIjp7XG4gICAgICAgICAgICAgICAgXCJkYXRlX3V0Y1wiOlwiZGVzY1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdwYWdlJzpwYWdlXG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfSApLCAgICBcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoIHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSApXG4gICAgfTsgICBcblxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUEksIHBhcmFtcyk7XG4gIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=