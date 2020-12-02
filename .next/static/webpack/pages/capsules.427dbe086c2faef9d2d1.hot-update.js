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
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Spinner */ "./components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/CapsuleLayout/styles.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/CapsuleLayout/index.js",
    _this = undefined,
    _s = $RefreshSig$();







var CapsulesLayout = function CapsulesLayout() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dragon = _useState[0],
      setDragon = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    Object(_services_getDragonsInfo__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      setDragon(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], {
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
        lineNumber: 33,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(CapsulesLayout, "xFIAlVskAEMXId5F+hBuPHige9Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXBzdWxlTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcHN1bGVzTGF5b3V0IiwidXNlU3RhdGUiLCJkcmFnb24iLCJzZXREcmFnb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImdldERyYWdvbnNJbmZvIiwidGhlbiIsImRhdGEiLCJtYXAiLCJpdGVtIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZmxpY2tyX2ltYWdlcyIsImFjdGl2ZSIsImNyZXdfY2FwYWNpdHkiLCJmaXJzdF9mbGlnaHQiLCJ0eXBlIiwiZGlhbWV0ZXIiLCJtZXRlcnMiLCJmZWV0IiwidGhydXN0ZXJzIiwiZnVlbF8xIiwiZnVlbF8yIiwiaXNwIiwicG9kcyIsImFtb3VudCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFFQ0Msc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUVwQkMsTUFGb0I7QUFBQSxNQUVaQyxTQUZZOztBQUFBLG1CQUdHRixzREFBUSxDQUFDLEtBQUQsQ0FIWDtBQUFBLE1BR3BCRyxPQUhvQjtBQUFBLE1BR1hDLFVBSFc7O0FBSzFCQyx5REFBUyxDQUFDLFlBQU07QUFDVkQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUVKRSw0RUFBYyxHQUNiQyxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFVO0FBQ2ROLGVBQVMsQ0FBQ00sSUFBRCxDQUFUO0FBQ0lKLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBRUosS0FMRjtBQU1ELEdBVFEsRUFTTixFQVRNLENBQVQ7O0FBV0gsTUFBSUQsT0FBSixFQUFhO0FBQ1gsd0JBQU8scUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUMsc0JBQ0UscUVBQUMsaURBQUQ7QUFBQSxjQUVJRixNQUFNLENBQUNRLEdBQVAsQ0FBVyxVQUFBQyxJQUFJO0FBQUEsMEJBQ2IscUVBQUMsbURBQUQ7QUFFQSxZQUFJLEVBQUdBLElBQUksQ0FBQ0MsSUFGWjtBQUdBLFlBQUksRUFBRUQsSUFBSSxDQUFDRSxXQUhYO0FBSUEsYUFBSyxFQUFFRixJQUFJLENBQUNHLGFBQUwsQ0FBbUIsQ0FBbkIsQ0FKUDtBQUtBLGNBQU0sRUFBRUgsSUFBSSxDQUFDSSxNQUFMLEdBQWEsUUFBYixHQUF1QixVQUwvQjtBQU1BLGdCQUFRLEVBQUVKLElBQUksQ0FBQ0ssYUFOZjtBQU9BLG9CQUFZLEVBQUVMLElBQUksQ0FBQ00sWUFQbkI7QUFRQSxZQUFJLEVBQUVOLElBQUksQ0FBQ08sSUFSWDtBQVNBLGNBQU0sRUFBRVAsSUFBSSxDQUFDUSxRQUFMLENBQWNDLE1BVHRCO0FBVUEsWUFBSSxFQUFFVCxJQUFJLENBQUNRLFFBQUwsQ0FBY0UsSUFWcEI7QUFXQSxrQkFBVSxFQUFFVixJQUFJLENBQUNXLFNBQUwsQ0FBZSxDQUFmLEVBQWtCSixJQVg5QjtBQVlBLGFBQUssRUFBRVAsSUFBSSxDQUFDVyxTQUFMLENBQWUsQ0FBZixFQUFrQkMsTUFaekI7QUFhQSxhQUFLLEVBQUVaLElBQUksQ0FBQ1csU0FBTCxDQUFlLENBQWYsRUFBa0JFLE1BYnpCO0FBY0EsV0FBRyxFQUFFYixJQUFJLENBQUNXLFNBQUwsQ0FBZSxDQUFmLEVBQWtCRyxHQWR2QjtBQWVBLFlBQUksRUFBRWQsSUFBSSxDQUFDVyxTQUFMLENBQWUsQ0FBZixFQUFrQkksSUFmeEI7QUFnQkEsY0FBTSxFQUFFZixJQUFJLENBQUNXLFNBQUwsQ0FBZSxDQUFmLEVBQWtCSztBQWhCMUIsU0FDS2hCLElBQUksQ0FBQ2lCLEVBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTlDRDs7R0FBTTVCLGM7O0tBQUFBLGM7QUFnRFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcHN1bGVzLjQyN2RiZTA4NmMyZmFlZjlkMmQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fwc3VsQ2FyZCBmcm9tICcuLi9DYXBzdWxDYXJkJ1xuaW1wb3J0IGdldERyYWdvbnNJbmZvIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXREcmFnb25zSW5mb1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXJcIjtcblxuXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IENhcHN1bGVzTGF5b3V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtkcmFnb24sIHNldERyYWdvbl0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICBnZXREcmFnb25zSW5mbygpXG4gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgc2V0RHJhZ29uKGRhdGEpXG4gICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG5cbiAgICAgIH0pO1xuICAgfSwgW10pO1xuXG5pZiAobG9hZGluZykge1xuICByZXR1cm4gPFNwaW5uZXIgLz47XG59XG4gIFxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7XG4gICAgICAgIGRyYWdvbi5tYXAoaXRlbT0+KFxuICAgICAgICAgIDxDYXBzdWxDYXJkIFxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICBuYW1lPXsgaXRlbS5uYW1lfSBcbiAgICAgICAgICBpbmZvPXtpdGVtLmRlc2NyaXB0aW9ufSBcbiAgICAgICAgICBpbWFnZT17aXRlbS5mbGlja3JfaW1hZ2VzWzBdfSBcbiAgICAgICAgICBzdGF0dXM9e2l0ZW0uYWN0aXZlPyAnYWN0aXZlJzogJ2Rpc2FibGVkJ31cbiAgICAgICAgICBjYXBhY2l0eT17aXRlbS5jcmV3X2NhcGFjaXR5fVxuICAgICAgICAgIGZpcnN0X2ZsaWdodD17aXRlbS5maXJzdF9mbGlnaHR9XG4gICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxuICAgICAgICAgIGhlaWdodD17aXRlbS5kaWFtZXRlci5tZXRlcnN9XG4gICAgICAgICAgZmVldD17aXRlbS5kaWFtZXRlci5mZWV0fVxuICAgICAgICAgIHRwcm9wdWxzb3I9e2l0ZW0udGhydXN0ZXJzWzBdLnR5cGV9XG4gICAgICAgICAgZnVlbDE9e2l0ZW0udGhydXN0ZXJzWzBdLmZ1ZWxfMX1cbiAgICAgICAgICBmdWVsMj17aXRlbS50aHJ1c3RlcnNbMF0uZnVlbF8yfVxuICAgICAgICAgIGlzcD17aXRlbS50aHJ1c3RlcnNbMF0uaXNwfVxuICAgICAgICAgIHBvZHM9e2l0ZW0udGhydXN0ZXJzWzBdLnBvZHN9XG4gICAgICAgICAgYW1vdW50PXtpdGVtLnRocnVzdGVyc1swXS5hbW91bnR9XG4gICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXBzdWxlc0xheW91dDsiXSwic291cmNlUm9vdCI6IiJ9