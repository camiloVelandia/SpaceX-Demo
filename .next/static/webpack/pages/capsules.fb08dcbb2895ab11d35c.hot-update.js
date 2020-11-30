webpackHotUpdate_N_E("pages/capsules",{

/***/ "./components/CapsuleLayout/index.js":
/*!*******************************************!*\
  !*** ./components/CapsuleLayout/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CapsulCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CapsulCard */ "./components/CapsulCard/index.js");
/* harmony import */ var _services_getDragonsInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getDragonsInfo */ "./services/getDragonsInfo.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/CapsuleLayout/styles.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/CapsuleLayout/index.js",
    _this = undefined,
    _s = $RefreshSig$();






var CapsulesLayout = function CapsulesLayout() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dragon = _useState[0],
      setDragon = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getDragonsInfo__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      return setDragon(data);
    });
  }, []);
  console.log(dragon);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    children: dragon.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CapsulCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: item.name,
        info: item.description,
        image: item.flickr_images[0],
        status: item.active ? 'active' : 'disabled',
        capacity: item.crew_capacity,
        first_flight: item.first_flight,
        type: item.type,
        height: item.diameter.meters,
        feet: item.diameter.feet,
        tpropulsor: item.thrusters[0].type,
        fuel1: item.thrusters[0].fuel_1,
        fuel2: item.thrusters[0].fuel_2,
        isp: item.thrusters[0].isp,
        pods: item.thrusters[0].pods,
        amount: item.thrusters[0].amount
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(CapsulesLayout, "64lEdjlI2FsFURmoSWq5FG8fPNc=");

_c = CapsulesLayout;
/* harmony default export */ __webpack_exports__["default"] = (CapsulesLayout);

var _c;

$RefreshReg$(_c, "CapsulesLayout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXBzdWxlTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcHN1bGVzTGF5b3V0IiwidXNlU3RhdGUiLCJkcmFnb24iLCJzZXREcmFnb24iLCJ1c2VFZmZlY3QiLCJnZXREcmFnb25zSW5mbyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmbGlja3JfaW1hZ2VzIiwiYWN0aXZlIiwiY3Jld19jYXBhY2l0eSIsImZpcnN0X2ZsaWdodCIsInR5cGUiLCJkaWFtZXRlciIsIm1ldGVycyIsImZlZXQiLCJ0aHJ1c3RlcnMiLCJmdWVsXzEiLCJmdWVsXzIiLCJpc3AiLCJwb2RzIiwiYW1vdW50IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUVDQyxzREFBUSxDQUFDLEVBQUQsQ0FGVDtBQUFBLE1BRXBCQyxNQUZvQjtBQUFBLE1BRVpDLFNBRlk7O0FBSTFCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsNEVBQWMsR0FBR0MsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRDtBQUFBLGFBQVVKLFNBQVMsQ0FBQ0ksSUFBRCxDQUFuQjtBQUFBLEtBQXRCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsTUFBWjtBQUdELHNCQUNFLHFFQUFDLGlEQUFEO0FBQUEsY0FFSUEsTUFBTSxDQUFDUSxHQUFQLENBQVcsVUFBQUMsSUFBSTtBQUFBLDBCQUNiLHFFQUFDLG1EQUFEO0FBRUEsWUFBSSxFQUFHQSxJQUFJLENBQUNDLElBRlo7QUFHQSxZQUFJLEVBQUVELElBQUksQ0FBQ0UsV0FIWDtBQUlBLGFBQUssRUFBRUYsSUFBSSxDQUFDRyxhQUFMLENBQW1CLENBQW5CLENBSlA7QUFLQSxjQUFNLEVBQUVILElBQUksQ0FBQ0ksTUFBTCxHQUFhLFFBQWIsR0FBdUIsVUFML0I7QUFNQSxnQkFBUSxFQUFFSixJQUFJLENBQUNLLGFBTmY7QUFPQSxvQkFBWSxFQUFFTCxJQUFJLENBQUNNLFlBUG5CO0FBUUEsWUFBSSxFQUFFTixJQUFJLENBQUNPLElBUlg7QUFTQSxjQUFNLEVBQUVQLElBQUksQ0FBQ1EsUUFBTCxDQUFjQyxNQVR0QjtBQVVBLFlBQUksRUFBRVQsSUFBSSxDQUFDUSxRQUFMLENBQWNFLElBVnBCO0FBV0Esa0JBQVUsRUFBRVYsSUFBSSxDQUFDVyxTQUFMLENBQWUsQ0FBZixFQUFrQkosSUFYOUI7QUFZQSxhQUFLLEVBQUVQLElBQUksQ0FBQ1csU0FBTCxDQUFlLENBQWYsRUFBa0JDLE1BWnpCO0FBYUEsYUFBSyxFQUFFWixJQUFJLENBQUNXLFNBQUwsQ0FBZSxDQUFmLEVBQWtCRSxNQWJ6QjtBQWNBLFdBQUcsRUFBRWIsSUFBSSxDQUFDVyxTQUFMLENBQWUsQ0FBZixFQUFrQkcsR0FkdkI7QUFlQSxZQUFJLEVBQUVkLElBQUksQ0FBQ1csU0FBTCxDQUFlLENBQWYsRUFBa0JJLElBZnhCO0FBZ0JBLGNBQU0sRUFBRWYsSUFBSSxDQUFDVyxTQUFMLENBQWUsQ0FBZixFQUFrQks7QUFoQjFCLFNBQ0toQixJQUFJLENBQUNpQixFQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0FyQ0Q7O0dBQU01QixjOztLQUFBQSxjO0FBdUNTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXBzdWxlcy5mYjA4ZGNiYjI4OTVhYjExZDM1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcHN1bENhcmQgZnJvbSAnLi4vQ2Fwc3VsQ2FyZCdcbmltcG9ydCBnZXREcmFnb25zSW5mbyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0RHJhZ29uc0luZm9cIjtcblxuXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IENhcHN1bGVzTGF5b3V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtkcmFnb24sIHNldERyYWdvbl0gPSB1c2VTdGF0ZShbXSlcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgZ2V0RHJhZ29uc0luZm8oKS50aGVuKChkYXRhKSA9PiBzZXREcmFnb24oZGF0YSkpO1xuICAgfSwgW10pO1xuXG4gICBjb25zb2xlLmxvZyhkcmFnb24pXG5cbiAgXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHtcbiAgICAgICAgZHJhZ29uLm1hcChpdGVtPT4oXG4gICAgICAgICAgPENhcHN1bENhcmQgXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIG5hbWU9eyBpdGVtLm5hbWV9IFxuICAgICAgICAgIGluZm89e2l0ZW0uZGVzY3JpcHRpb259IFxuICAgICAgICAgIGltYWdlPXtpdGVtLmZsaWNrcl9pbWFnZXNbMF19IFxuICAgICAgICAgIHN0YXR1cz17aXRlbS5hY3RpdmU/ICdhY3RpdmUnOiAnZGlzYWJsZWQnfVxuICAgICAgICAgIGNhcGFjaXR5PXtpdGVtLmNyZXdfY2FwYWNpdHl9XG4gICAgICAgICAgZmlyc3RfZmxpZ2h0PXtpdGVtLmZpcnN0X2ZsaWdodH1cbiAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XG4gICAgICAgICAgaGVpZ2h0PXtpdGVtLmRpYW1ldGVyLm1ldGVyc31cbiAgICAgICAgICBmZWV0PXtpdGVtLmRpYW1ldGVyLmZlZXR9XG4gICAgICAgICAgdHByb3B1bHNvcj17aXRlbS50aHJ1c3RlcnNbMF0udHlwZX1cbiAgICAgICAgICBmdWVsMT17aXRlbS50aHJ1c3RlcnNbMF0uZnVlbF8xfVxuICAgICAgICAgIGZ1ZWwyPXtpdGVtLnRocnVzdGVyc1swXS5mdWVsXzJ9XG4gICAgICAgICAgaXNwPXtpdGVtLnRocnVzdGVyc1swXS5pc3B9XG4gICAgICAgICAgcG9kcz17aXRlbS50aHJ1c3RlcnNbMF0ucG9kc31cbiAgICAgICAgICBhbW91bnQ9e2l0ZW0udGhydXN0ZXJzWzBdLmFtb3VudH1cbiAgICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcHN1bGVzTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=