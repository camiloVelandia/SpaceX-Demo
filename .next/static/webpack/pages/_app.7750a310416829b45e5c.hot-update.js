webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: darkTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _globlalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globlalStyles */ "./globlalStyles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_darkModeBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/darkModeBtn */ "./components/darkModeBtn/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");




var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/pages/_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var lightTheme = {
  body: "#E2E2E2",
  text: "#363537",
  Alpha: "rgba(255,255,255,.7)"
};
var darkTheme = {
  body: "#000",
  Alpha: "rgba(0,0,0,.8)",
  text: "#FAFAFA"
};
function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("light"),
      theme = _useState[0],
      setTheme = _useState[1]; // The function that toggles between themes


  var toggleTheme = function toggleTheme() {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark"); // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  if (router.pathname == '/') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
          children: "State X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
          property: "og:title",
          content: "State x"
        }, "title", false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
        theme: theme === "light" ? lightTheme : darkTheme,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_globlalStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_globlalStyles__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          onClick: toggleTheme,
          children: "Toggle theme"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
      theme: theme === "light" ? lightTheme : darkTheme,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_globlalStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
          children: "State X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
          property: "og:title",
          content: "State x"
        }, "title", false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_globlalStyles__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: toggleTheme,
        children: [!theme, " theme"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(App, "EuK9/yb9TK5RWAP8j9GSMP60ILg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = App;

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJsaWdodFRoZW1lIiwiYm9keSIsInRleHQiLCJBbHBoYSIsImRhcmtUaGVtZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwidGhlbWUiLCJzZXRUaGVtZSIsInRvZ2dsZVRoZW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsTUFBSSxFQUFFLFNBRFc7QUFFakJDLE1BQUksRUFBRSxTQUZXO0FBR2pCQyxPQUFLLEVBQUU7QUFIVSxDQUFuQjtBQU1PLElBQU1DLFNBQVMsR0FBRztBQUN2QkgsTUFBSSxFQUFFLE1BRGlCO0FBRXZCRSxPQUFLLEVBQUUsZ0JBRmdCO0FBR3ZCRCxNQUFJLEVBQUU7QUFIaUIsQ0FBbEI7QUFPUSxTQUFTRyxHQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFFNUJDLHNEQUFRLENBQUMsT0FBRCxDQUZvQjtBQUFBLE1BRS9DQyxLQUYrQztBQUFBLE1BRXhDQyxRQUZ3QyxpQkFJdEQ7OztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEI7QUFDQSxRQUFJRixLQUFLLEtBQUssT0FBZCxFQUF1QjtBQUNyQkMsY0FBUSxDQUFDLE1BQUQsQ0FBUixDQURxQixDQUVyQjtBQUNELEtBSEQsTUFHTztBQUNMQSxjQUFRLENBQUMsT0FBRCxDQUFSO0FBQ0Q7QUFDRixHQVJEOztBQVdFLE1BQU1FLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBR0QsTUFBTSxDQUFDRSxRQUFQLElBQWtCLEdBQXJCLEVBQXlCO0FBQ3ZCLHdCQUNFO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sa0JBQVEsRUFBQyxVQUFmO0FBQTBCLGlCQUFPLEVBQUM7QUFBbEMsV0FBZ0QsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFLHFFQUFDLCtEQUFEO0FBQWUsYUFBSyxFQUFFTCxLQUFLLEtBQUssT0FBVixHQUFvQlQsVUFBcEIsR0FBaUNJLFNBQXZEO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQyxxREFBRDtBQUFRLGlCQUFPLEVBQUVPLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUUscUVBQUMsU0FBRCxvQkFBZUosU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUEsb0JBREY7QUFjRDs7QUFFRCxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLCtEQUFEO0FBQWUsV0FBSyxFQUFFRSxLQUFLLEtBQUssT0FBVixHQUFvQlQsVUFBcEIsR0FBaUNJLFNBQXZEO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sa0JBQVEsRUFBQyxVQUFmO0FBQTBCLGlCQUFPLEVBQUM7QUFBbEMsV0FBZ0QsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU1FLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FLHFFQUFDLHFEQUFEO0FBQVEsZUFBTyxFQUFFTyxXQUFqQjtBQUFBLG1CQUErQixDQUFDRixLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVNFLHFFQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBVUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBZ0JEOztHQW5EdUJGLEc7VUFnQlBRLHFEOzs7S0FoQk9SLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NzUwYTMxMDQxNjgyOWI0NWU1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEdsb2JsYWxTdHlsZXMsIHtCdXR0b259IGZyb20gJy4uL2dsb2JsYWxTdHlsZXMnXG5cblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBkYXJrTW9kZUJ0biBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtNb2RlQnRuJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuXG5cblxuY29uc3QgbGlnaHRUaGVtZSA9IHtcbiAgYm9keTogXCIjRTJFMkUyXCIsXG4gIHRleHQ6IFwiIzM2MzUzN1wiLFxuICBBbHBoYTogXCJyZ2JhKDI1NSwyNTUsMjU1LC43KVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IHtcbiAgYm9keTogXCIjMDAwXCIsXG4gIEFscGhhOiBcInJnYmEoMCwwLDAsLjgpXCIsXG4gIHRleHQ6IFwiI0ZBRkFGQVwiLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbmNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJsaWdodFwiKTtcblxuLy8gVGhlIGZ1bmN0aW9uIHRoYXQgdG9nZ2xlcyBiZXR3ZWVuIHRoZW1lc1xuY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gIC8vIGlmIHRoZSB0aGVtZSBpcyBub3QgbGlnaHQsIHRoZW4gc2V0IGl0IHRvIGRhcmtcbiAgaWYgKHRoZW1lID09PSBcImxpZ2h0XCIpIHtcbiAgICBzZXRUaGVtZShcImRhcmtcIik7XG4gICAgLy8gb3RoZXJ3aXNlLCBpdCBzaG91bGQgYmUgbGlnaHRcbiAgfSBlbHNlIHtcbiAgICBzZXRUaGVtZShcImxpZ2h0XCIpO1xuICB9XG59O1xuXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgXG4gIGlmKHJvdXRlci5wYXRobmFtZT09ICcvJyl7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5TdGF0ZSBYPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlN0YXRlIHhcIiBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBsaWdodFRoZW1lIDogZGFya1RoZW1lfT5cbiAgICAgICAgICA8R2xvYmxhbFN0eWxlcyAvPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfT5Ub2dnbGUgdGhlbWU8L0J1dHRvbj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWUgPT09IFwibGlnaHRcIiA/IGxpZ2h0VGhlbWUgOiBkYXJrVGhlbWV9PlxuICAgICAgICA8R2xvYmxhbFN0eWxlcyAvPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+U3RhdGUgWDwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJTdGF0ZSB4XCIga2V5PVwidGl0bGVcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+eyF0aGVtZX0gdGhlbWU8L0J1dHRvbj5cblxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=