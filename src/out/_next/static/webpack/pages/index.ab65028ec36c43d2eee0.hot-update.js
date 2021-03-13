webpackHotUpdate_N_E("pages/index",{

/***/ "./components/modules/Slide.tsx":
/*!**************************************!*\
  !*** ./components/modules/Slide.tsx ***!
  \**************************************/
/*! exports provided: Slideshow, SlideContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slideshow\", function() { return Slideshow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlideContent\", function() { return SlideContent; });\n/* harmony import */ var _home_lucasvazq_Workspaces_H_litoral_trans_1_litoral_trans_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slideshow-image */ \"./node_modules/react-slideshow-image/dist/react-slideshow-image.min.js\");\n/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ \"./components/index.ts\");\n/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slideshow-image/dist/styles.css */ \"./node_modules/react-slideshow-image/dist/styles.css\");\n/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/lucasvazq/Workspaces/H/litoral-trans/1/litoral-trans/src/components/modules/Slide.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_lucasvazq_Workspaces_H_litoral_trans_1_litoral_trans_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Slideshow = function Slideshow(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      nextIndex = _useState[0],\n      setNextIndex = _useState[1];\n\n  var properties = {\n    arrows: false,\n    transitionDuration: 500,\n    indicators: function indicators(i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"cursor-pointer rounded-full shadow-strong p-1 mx-1 pb-2 mb-20 -mt-20 z-1 hover:opacity-90 \".concat(!nextIndex && i === 0 || nextIndex === i ? 'bg-primary opacity-100' : 'bg-light opacity-40')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }, _this);\n    },\n    onChange: function onChange(_, next) {\n      setNextIndex(next);\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"slide-container -mb-7 flex flex-col-reverse\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__[\"Slide\"], _objectSpread(_objectSpread({}, properties), {}, {\n      children: props.slides.map(function (value, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"each-fade\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-center bg-cover h-50vh flex items-center justify-center overflow-hidden\",\n            style: {\n              'backgroundImage': \"url(\".concat(value.image, \")\")\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"bg-dots\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"m-8\",\n                children: value.slideContent\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 33\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 29\n          }, _this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 25\n        }, _this);\n      })\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute z-1 w-full mb-7\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        viewBox: \"0 0 1440 320\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n          fill: \"#d71920\",\n          \"fill-opacity\": \"1\",\n          d: \"M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Slideshow, \"UCQx0J/bTckZ8tBuYJCK7vLDs4A=\");\n\n_c = Slideshow;\nvar SlideContent = function SlideContent(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(___WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    className: \"bg-primary text-light p-4 select-none\",\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 9\n  }, _this);\n};\n_c2 = SlideContent;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Slideshow\");\n$RefreshReg$(_c2, \"SlideContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGVzL1NsaWRlLnRzeD82OTMyIl0sIm5hbWVzIjpbIlNsaWRlc2hvdyIsInByb3BzIiwidXNlU3RhdGUiLCJuZXh0SW5kZXgiLCJzZXROZXh0SW5kZXgiLCJwcm9wZXJ0aWVzIiwiYXJyb3dzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaW5kaWNhdG9ycyIsImkiLCJvbkNoYW5nZSIsIl8iLCJuZXh0Iiwic2xpZGVzIiwibWFwIiwidmFsdWUiLCJpbmRleCIsImltYWdlIiwic2xpZGVDb250ZW50IiwicHJvY2VzcyIsIlNsaWRlQ29udGVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBbUU7QUFBQTs7QUFBQSxrQkFFdERDLHNEQUFRLENBQUMsSUFBRCxDQUY4QztBQUFBLE1BRWpGQyxTQUZpRjtBQUFBLE1BRXRFQyxZQUZzRTs7QUFHeEYsTUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLFVBQU0sRUFBRSxLQURPO0FBRWZDLHNCQUFrQixFQUFFLEdBRkw7QUFHZkMsY0FBVSxFQUFFLG9CQUFDQyxDQUFEO0FBQUEsMEJBQ1I7QUFBSyxpQkFBUyxzR0FBaUcsQ0FBQ04sU0FBRCxJQUFjTSxDQUFDLEtBQUssQ0FBckIsSUFBNEJOLFNBQVMsS0FBS00sQ0FBM0MsR0FBZ0Qsd0JBQWhELEdBQTBFLHFCQUF6SztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBLEtBSEc7QUFNZkMsWUFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQVlDLElBQVosRUFBNkI7QUFDbkNSLGtCQUFZLENBQUNRLElBQUQsQ0FBWjtBQUNIO0FBUmMsR0FBbkI7QUFXQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBLDRCQUNJLHFFQUFDLDJEQUFELGtDQUFXUCxVQUFYO0FBQUEsZ0JBQ0tKLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNoQyw0QkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyw0RUFBZjtBQUE0RixpQkFBSyxFQUFFO0FBQUMsK0NBQTBCRCxLQUFLLENBQUNFLEtBQWhDO0FBQUQsYUFBbkc7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQUEsMEJBQ0tGLEtBQUssQ0FBQ0c7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFnQ0YsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQVdILE9BWkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFnQkk7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQSw2QkFDSTtBQUFLLGFBQUssRUFBQyw0QkFBWDtBQUF3QyxlQUFPLEVBQUMsY0FBaEQ7QUFBQSwrQkFDSTtBQUFNLGNBQUksRUFBRUcsU0FBWjtBQUFzQywwQkFBYSxHQUFuRDtBQUF1RCxXQUFDLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0JILENBdENNOztHQUFNbkIsUzs7S0FBQUEsUztBQXdDTixJQUFNb0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ25CLEtBQUQsRUFBb0Q7QUFDNUUsc0JBQ0kscUVBQUMsdUNBQUQ7QUFBTyxhQUFTLEVBQUMsdUNBQWpCO0FBQUEsY0FDS0EsS0FBSyxDQUFDb0I7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQU5NO01BQU1ELFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZHVsZXMvU2xpZGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSAncmVhY3Qtc2xpZGVzaG93LWltYWdlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4nXG5pbXBvcnQgJ3JlYWN0LXNsaWRlc2hvdy1pbWFnZS9kaXN0L3N0eWxlcy5jc3MnXG5cbmV4cG9ydCBjb25zdCBTbGlkZXNob3cgPSAocHJvcHM6IHtzbGlkZXM6IHtzbGlkZUNvbnRlbnQ6IEpTWC5FbGVtZW50OyBpbWFnZTogc3RyaW5nfVtdfSkgPT4ge1xuXG4gICAgY29uc3QgW25leHRJbmRleCwgc2V0TmV4dEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNTAwLFxuICAgICAgICBpbmRpY2F0b3JzOiAoaTogTnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBzaGFkb3ctc3Ryb25nIHAtMSBteC0xIHBiLTIgbWItMjAgLW10LTIwIHotMSBob3ZlcjpvcGFjaXR5LTkwICR7KCghbmV4dEluZGV4ICYmIGkgPT09IDAgKSB8fCBuZXh0SW5kZXggPT09IGkpID8gJ2JnLXByaW1hcnkgb3BhY2l0eS0xMDAnOiAnYmctbGlnaHQgb3BhY2l0eS00MCd9YH0gLz5cbiAgICAgICAgKSxcbiAgICAgICAgb25DaGFuZ2U6IChfOiBOdW1iZXIsIG5leHQ6IE51bWJlcikgPT4ge1xuICAgICAgICAgICAgc2V0TmV4dEluZGV4KG5leHQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGFpbmVyIC1tYi03IGZsZXggZmxleC1jb2wtcmV2ZXJzZVwiPlxuICAgICAgICAgICAgPFNsaWRlIHsuLi5wcm9wZXJ0aWVzfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuc2xpZGVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVhY2gtZmFkZVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY2VudGVyIGJnLWNvdmVyIGgtNTB2aCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIiBzdHlsZT17eydiYWNrZ3JvdW5kSW1hZ2UnOiBgdXJsKCR7dmFsdWUuaW1hZ2V9KWB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kb3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5zbGlkZUNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TbGlkZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0xIHctZnVsbCBtYi03XCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNDQwIDMyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPXtwcm9jZXNzLmVudi5jb2xvclByaW1hcnl9IGZpbGwtb3BhY2l0eT1cIjFcIiBkPVwiTTAsNjRMODAsOTAuN0MxNjAsMTE3LDMyMCwxNzEsNDgwLDE3NkM2NDAsMTgxLDgwMCwxMzksOTYwLDE0NEMxMTIwLDE0OSwxMjgwLDIwMywxMzYwLDIyOS4zTDE0NDAsMjU2TDE0NDAsMzIwTDEzNjAsMzIwQzEyODAsMzIwLDExMjAsMzIwLDk2MCwzMjBDODAwLDMyMCw2NDAsMzIwLDQ4MCwzMjBDMzIwLDMyMCwxNjAsMzIwLDgwLDMyMEwwLDMyMFpcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgU2xpZGVDb250ZW50ID0gKHByb3BzOiB7Y2hpbGRyZW46IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LWxpZ2h0IHAtNCBzZWxlY3Qtbm9uZVwiPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0xhYmVsPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/modules/Slide.tsx\n");

/***/ })

})