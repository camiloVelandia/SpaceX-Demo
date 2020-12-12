webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/GridStats/index.js":
/*!***************************************!*\
  !*** ./components/GridStats/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/getPastLaunchesNP */ "./services/getPastLaunchesNP.js");
/* harmony import */ var _services_getPayload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getPayload */ "./services/getPayload.js");
/* harmony import */ var _StatCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StatCard */ "./components/StatCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/GridStats/styles.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/GridStats/index.js",
    _this = undefined,
    _s = $RefreshSig$();







var GridStats = function GridStats() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dragonInfo = _useState[0],
      setdragonInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      succes = _useState2[0],
      setsucces = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      fail = _useState3[0],
      setfail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      customer = _useState4[0],
      setcustomer = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      customerName = _useState5[0],
      setcustomerName = _useState5[1]; // bring the data for launch stats


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__["default"])().then(function (data) {
      setdragonInfo(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var succeslaunch = dragonInfo.filter(function (item) {
      return !item.success;
    });
    var faillaunch = dragonInfo.filter(function (item) {
      return item.success;
    });
    setsucces(succeslaunch.length);
    setfail(faillaunch.length);
  }, [dragonInfo]);
  var dataSucces = {
    labels: ["fail", "succes"],
    datasets: [{
      label: "# of Votes",
      data: [fail, succes],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1
    }]
  }; // bring the data for customer stats

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getPayload__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      setcustomer(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var name = customer.map(function (item) {
      return item.customers[0];
    });
    var unicos = Array.from(new Set(name));
    var first = unicos.slice(0, 5);
    setcustomerName(first);
  }, [customer]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var darpa = customer.filter(function (item) {
      var total = item.customers.includes(customerName[5]);
      return total;
      console.log(total.length); // console.log(customerName[0]); 
    }); // const darpa= customer.filter((item)=>{
    //    console.log(item.customers.includes('DARPA')); 
    // })

    console.log(darpa.length);
  }, [customerName]);
  var dataCustomer = {
    labels: customerName,
    datasets: [{
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "launch stats",
      items: dataSucces
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "commercial Customers",
      items: dataCustomer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "m4SFPtgMMTAKYUglS3WEfkBRHOA=");

_c = GridStats;
/* harmony default export */ __webpack_exports__["default"] = (GridStats);

var _c;

$RefreshReg$(_c, "GridStats");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsInN1Y2NlcyIsInNldHN1Y2NlcyIsImZhaWwiLCJzZXRmYWlsIiwiY3VzdG9tZXIiLCJzZXRjdXN0b21lciIsImN1c3RvbWVyTmFtZSIsInNldGN1c3RvbWVyTmFtZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwic3VjY2VzbGF1bmNoIiwiZmlsdGVyIiwiaXRlbSIsInN1Y2Nlc3MiLCJmYWlsbGF1bmNoIiwibGVuZ3RoIiwiZGF0YVN1Y2NlcyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZ2V0UGF5bG9hZCIsIm5hbWUiLCJtYXAiLCJjdXN0b21lcnMiLCJ1bmljb3MiLCJBcnJheSIsImZyb20iLCJTZXQiLCJmaXJzdCIsInNsaWNlIiwiZGFycGEiLCJ0b3RhbCIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsImRhdGFDdXN0b21lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUdjQyxzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFBQSxNQUdmQyxVQUhlO0FBQUEsTUFHSEMsYUFIRzs7QUFBQSxtQkFJTUYsc0RBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQSxNQUlmRyxNQUplO0FBQUEsTUFJUEMsU0FKTzs7QUFBQSxtQkFLRUosc0RBQVEsQ0FBQyxFQUFELENBTFY7QUFBQSxNQUtmSyxJQUxlO0FBQUEsTUFLVEMsT0FMUzs7QUFBQSxtQkFPVU4sc0RBQVEsQ0FBQyxFQUFELENBUGxCO0FBQUEsTUFPZk8sUUFQZTtBQUFBLE1BT0xDLFdBUEs7O0FBQUEsbUJBUWtCUixzREFBUSxDQUFDLEVBQUQsQ0FSMUI7QUFBQSxNQVFmUyxZQVJlO0FBQUEsTUFRREMsZUFSQyxrQkFXdEI7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsK0VBQWUsR0FBR0MsSUFBbEIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQy9CWixtQkFBYSxDQUFDWSxJQUFELENBQWI7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtBSCx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNSSxZQUFZLEdBQUdkLFVBQVUsQ0FBQ2UsTUFBWCxDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDL0MsYUFBTyxDQUFDQSxJQUFJLENBQUNDLE9BQWI7QUFDRCxLQUZvQixDQUFyQjtBQUdBLFFBQU1DLFVBQVUsR0FBR2xCLFVBQVUsQ0FBQ2UsTUFBWCxDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDN0MsYUFBT0EsSUFBSSxDQUFDQyxPQUFaO0FBQ0QsS0FGa0IsQ0FBbkI7QUFHQWQsYUFBUyxDQUFDVyxZQUFZLENBQUNLLE1BQWQsQ0FBVDtBQUNBZCxXQUFPLENBQUNhLFVBQVUsQ0FBQ0MsTUFBWixDQUFQO0FBQ0QsR0FUUSxFQVNOLENBQUNuQixVQUFELENBVE0sQ0FBVDtBQVdFLE1BQU1vQixVQUFVLEdBQUc7QUFDakJDLFVBQU0sRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFULENBRFM7QUFFakJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRSxZQURUO0FBRUVWLFVBQUksRUFBRSxDQUFDVCxJQUFELEVBQU9GLE1BQVAsQ0FGUjtBQUdFc0IscUJBQWUsRUFBRSxDQUFDLHlCQUFELEVBQTRCLHlCQUE1QixDQUhuQjtBQUlFQyxpQkFBVyxFQUFFLENBQUMsdUJBQUQsRUFBMEIsdUJBQTFCLENBSmY7QUFLRUMsaUJBQVcsRUFBRTtBQUxmLEtBRFE7QUFGTyxHQUFuQixDQTVCb0IsQ0F5Q3RCOztBQUNBaEIseURBQVMsQ0FBQyxZQUFNO0FBQ2RpQix3RUFBVSxHQUFHZixJQUFiLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUMxQk4saUJBQVcsQ0FBQ00sSUFBRCxDQUFYO0FBQ0QsS0FGRDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQUgseURBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBTWtCLElBQUksR0FBRXRCLFFBQVEsQ0FBQ3VCLEdBQVQsQ0FBYSxVQUFDYixJQUFELEVBQVE7QUFDL0IsYUFBT0EsSUFBSSxDQUFDYyxTQUFMLENBQWUsQ0FBZixDQUFQO0FBQ0QsS0FGVyxDQUFaO0FBR0EsUUFBSUMsTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxJQUFJQyxHQUFKLENBQVFOLElBQVIsQ0FBWCxDQUFiO0FBQ0EsUUFBSU8sS0FBSyxHQUFFSixNQUFNLENBQUNLLEtBQVAsQ0FBYSxDQUFiLEVBQWUsQ0FBZixDQUFYO0FBQ0EzQixtQkFBZSxDQUFDMEIsS0FBRCxDQUFmO0FBQ0QsR0FQUSxFQU9QLENBQUM3QixRQUFELENBUE8sQ0FBVDtBQVNBSSx5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFNMkIsS0FBSyxHQUFFL0IsUUFBUSxDQUFDUyxNQUFULENBQWdCLFVBQUNDLElBQUQsRUFBUTtBQUNuQyxVQUFNc0IsS0FBSyxHQUFHdEIsSUFBSSxDQUFDYyxTQUFMLENBQWVTLFFBQWYsQ0FBd0IvQixZQUFZLENBQUMsQ0FBRCxDQUFwQyxDQUFkO0FBQ0EsYUFBTzhCLEtBQVA7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssQ0FBQ25CLE1BQWxCLEVBSG1DLENBSW5DO0FBQ0QsS0FMWSxDQUFiLENBRFksQ0FPWjtBQUNBO0FBQ0E7O0FBQ0FxQixXQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBSyxDQUFDbEIsTUFBbEI7QUFFRCxHQVpRLEVBWVAsQ0FBQ1gsWUFBRCxDQVpPLENBQVQ7QUFjQSxNQUFNa0MsWUFBWSxHQUFHO0FBQ25CckIsVUFBTSxFQUFFYixZQURXO0FBRW5CYyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsWUFEVDtBQUVFVixVQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQsRUFBWSxDQUFaLENBRlI7QUFHRVcscUJBQWUsRUFBRSxDQUNmLHlCQURlLEVBRWYseUJBRmUsRUFHZix5QkFIZSxFQUlmLHlCQUplLENBSG5CO0FBU0VDLGlCQUFXLEVBQUUsQ0FDWCx1QkFEVyxFQUVYLHVCQUZXLEVBR1gsdUJBSFcsRUFJWCx1QkFKVyxDQVRmO0FBZUVDLGlCQUFXLEVBQUU7QUFmZixLQURRO0FBRlMsR0FBckI7QUF1QkEsc0JBQ0UscUVBQUMsNENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxpREFBRDtBQUFVLFdBQUssRUFBQyxjQUFoQjtBQUErQixXQUFLLEVBQUVOO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLHNCQUFoQjtBQUF1QyxXQUFLLEVBQUVzQjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQXBHRDs7R0FBTTVDLFM7O0tBQUFBLFM7QUFzR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRzLmI5NzQxOTIwMGRjMzllNWU2OGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldFBhc3RMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzTlBcIjtcbmltcG9ydCBnZXRQYXlsb2FkIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXlsb2FkXCI7XG5cbmltcG9ydCBTdGF0Q2FyZCBmcm9tIFwiLi4vU3RhdENhcmRcIjtcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBHcmlkU3RhdHMgPSAoKSA9PiB7XG4gIFxuXG4gIGNvbnN0IFtkcmFnb25JbmZvLCBzZXRkcmFnb25JbmZvXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3N1Y2Nlcywgc2V0c3VjY2VzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmFpbCwgc2V0ZmFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Y3VzdG9tZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VzdG9tZXJOYW1lLCBzZXRjdXN0b21lck5hbWVdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgLy8gYnJpbmcgdGhlIGRhdGEgZm9yIGxhdW5jaCBzdGF0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBhc3RMYXVuY2hlcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldGRyYWdvbkluZm8oZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdWNjZXNsYXVuY2ggPSBkcmFnb25JbmZvLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuICFpdGVtLnN1Y2Nlc3M7XG4gICAgfSk7XG4gICAgY29uc3QgZmFpbGxhdW5jaCA9IGRyYWdvbkluZm8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5zdWNjZXNzO1xuICAgIH0pO1xuICAgIHNldHN1Y2NlcyhzdWNjZXNsYXVuY2gubGVuZ3RoKTtcbiAgICBzZXRmYWlsKGZhaWxsYXVuY2gubGVuZ3RoKTtcbiAgfSwgW2RyYWdvbkluZm9dKTtcblxuICAgIGNvbnN0IGRhdGFTdWNjZXMgPSB7XG4gICAgICBsYWJlbHM6IFtcImZhaWxcIiwgXCJzdWNjZXNcIl0sXG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICAgIGRhdGE6IFtmYWlsLCBzdWNjZXNdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIiwgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiXSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogW1wicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCJdLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gIC8vIGJyaW5nIHRoZSBkYXRhIGZvciBjdXN0b21lciBzdGF0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBheWxvYWQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRjdXN0b21lcihkYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICBcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgbmFtZT0gY3VzdG9tZXIubWFwKChpdGVtKT0+e1xuICAgICAgcmV0dXJuIGl0ZW0uY3VzdG9tZXJzWzBdO1xuICAgIH0pXG4gICAgbGV0IHVuaWNvcyA9IEFycmF5LmZyb20obmV3IFNldChuYW1lKSk7XG4gICAgbGV0IGZpcnN0PSB1bmljb3Muc2xpY2UoMCw1KVxuICAgIHNldGN1c3RvbWVyTmFtZShmaXJzdCk7XG4gIH0sW2N1c3RvbWVyXSlcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGRhcnBhPSBjdXN0b21lci5maWx0ZXIoKGl0ZW0pPT57XG4gICAgICBjb25zdCB0b3RhbCA9IGl0ZW0uY3VzdG9tZXJzLmluY2x1ZGVzKGN1c3RvbWVyTmFtZVs1XSk7XG4gICAgICByZXR1cm4gdG90YWxcbiAgICAgIGNvbnNvbGUubG9nKHRvdGFsLmxlbmd0aCkgXG4gICAgICAvLyBjb25zb2xlLmxvZyhjdXN0b21lck5hbWVbMF0pOyBcbiAgICB9KVxuICAgIC8vIGNvbnN0IGRhcnBhPSBjdXN0b21lci5maWx0ZXIoKGl0ZW0pPT57XG4gICAgLy8gICAgY29uc29sZS5sb2coaXRlbS5jdXN0b21lcnMuaW5jbHVkZXMoJ0RBUlBBJykpOyBcbiAgICAvLyB9KVxuICAgIGNvbnNvbGUubG9nKGRhcnBhLmxlbmd0aClcbiAgICBcbiAgfSxbY3VzdG9tZXJOYW1lXSlcblxuICBjb25zdCBkYXRhQ3VzdG9tZXIgPSB7XG4gICAgbGFiZWxzOiBjdXN0b21lck5hbWUsXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICBkYXRhOiBbMTIsIDE5LCAzLCA1XSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDEpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQ+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJsYXVuY2ggc3RhdHNcIiBpdGVtcz17ZGF0YVN1Y2Nlc30gLz5cbiAgICAgIDxTdGF0Q2FyZCB0aXRsZT1cImNvbW1lcmNpYWwgQ3VzdG9tZXJzXCIgaXRlbXM9e2RhdGFDdXN0b21lcn0gLz5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkU3RhdHM7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=