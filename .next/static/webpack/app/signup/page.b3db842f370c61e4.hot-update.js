"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./app/components/SignupForm.tsx":
/*!***************************************!*\
  !*** ./app/components/SignupForm.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignupForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction SignupForm() {\n    _s();\n    const { register, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        mode: \"onBlur\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col bg-[#EADBB4] rounded-[35px] p-8 mt-8 gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                placeholder: \"EMAIL\",\n                className: \"w-[330px] h-[33px] rounded-[10px] px-3 text-xs outline-none\",\n                ...register(\"email\", {\n                    required: \"이메일칸이 비었습니다~\"\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moo\\\\Desktop\\\\moo\\\\picdiary\\\\app\\\\components\\\\SignupForm.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            (errors === null || errors === void 0 ? void 0 : errors.email) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                role: \"alert\",\n                children: errors.email.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moo\\\\Desktop\\\\moo\\\\picdiary\\\\app\\\\components\\\\SignupForm.tsx\",\n                lineNumber: 20,\n                columnNumber: 25\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                placeholder: \"PASSWORD\",\n                className: \"rounded-[10px] px-3 w-[330px] h-[33px] text-xs outline-none\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moo\\\\Desktop\\\\moo\\\\picdiary\\\\app\\\\components\\\\SignupForm.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                placeholder: \"PASSWORD\",\n                className: \"rounded-[10px] px-3 w-[330px] h-[33px] text-xs outline-none\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moo\\\\Desktop\\\\moo\\\\picdiary\\\\app\\\\components\\\\SignupForm.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \" text-white rounded-lg bg-[#d6b666] w-[330px] h-[33px] text-sm p-1 mt-2 \",\n                children: \"SignUp\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moo\\\\Desktop\\\\moo\\\\picdiary\\\\app\\\\components\\\\SignupForm.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\moo\\\\Desktop\\\\moo\\\\picdiary\\\\app\\\\components\\\\SignupForm.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(SignupForm, \"8Loum8L5ZWjAn3tQabXTr6jiHEU=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = SignupForm;\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBDO0FBRTNCLFNBQVNDOztJQUN0QixNQUFNLEVBQ0pDLFFBQVEsRUFDUkMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsRUFDdEIsR0FBR0osd0RBQU9BLENBQUM7UUFBRUssTUFBTTtJQUFTO0lBRTdCLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pILFdBQVU7Z0JBQ1QsR0FBR0wsU0FBUyxTQUFTO29CQUNwQlMsVUFBVTtnQkFDWixFQUFFOzs7Ozs7WUFFSFAsQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRUSxLQUFLLG1CQUFJLDhEQUFDQztnQkFBRUMsTUFBSzswQkFBU1YsT0FBT1EsS0FBSyxDQUFDRyxPQUFPOzs7Ozs7MEJBQ3ZELDhEQUFDUDtnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkgsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkgsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDUztnQkFBT1QsV0FBVTswQkFBMkU7Ozs7Ozs7Ozs7OztBQUtuRztHQWhDd0JOOztRQUlsQkQsb0RBQU9BOzs7S0FKV0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2lnbnVwRm9ybS50c3g/NGM3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbnVwRm9ybSgpIHtcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybSh7IG1vZGU6IFwib25CbHVyXCIgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLVsjRUFEQkI0XSByb3VuZGVkLVszNXB4XSBwLTggbXQtOCBnYXAtMlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRU1BSUxcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctWzMzMHB4XSBoLVszM3B4XSByb3VuZGVkLVsxMHB4XSBweC0zIHRleHQteHMgb3V0bGluZS1ub25lXCJcclxuICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7XHJcbiAgICAgICAgICByZXF1aXJlZDogXCLsnbTrqZTsnbzsubjsnbQg67mE7JeI7Iq164uI64ukflwiLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAvPlxyXG4gICAgICB7ZXJyb3JzPy5lbWFpbCAmJiA8cCByb2xlPVwiYWxlcnRcIj57ZXJyb3JzLmVtYWlsLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBBU1NXT1JEXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLVsxMHB4XSBweC0zIHctWzMzMHB4XSBoLVszM3B4XSB0ZXh0LXhzIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQQVNTV09SRFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1bMTBweF0gcHgtMyB3LVszMzBweF0gaC1bMzNweF0gdGV4dC14cyBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgYmctWyNkNmI2NjZdIHctWzMzMHB4XSBoLVszM3B4XSB0ZXh0LXNtIHAtMSBtdC0yIFwiPlxyXG4gICAgICAgIFNpZ25VcFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiU2lnbnVwRm9ybSIsInJlZ2lzdGVyIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwibW9kZSIsImZvcm0iLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiZW1haWwiLCJwIiwicm9sZSIsIm1lc3NhZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SignupForm.tsx\n"));

/***/ })

});