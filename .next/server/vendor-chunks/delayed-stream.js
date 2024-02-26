"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/delayed-stream";
exports.ids = ["vendor-chunks/delayed-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js":
/*!***********************************************************!*\
  !*** ./node_modules/delayed-stream/lib/delayed_stream.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar util = __webpack_require__(/*! util */ \"util\");\nmodule.exports = DelayedStream;\nfunction DelayedStream() {\n    this.source = null;\n    this.dataSize = 0;\n    this.maxDataSize = 1024 * 1024;\n    this.pauseStream = true;\n    this._maxDataSizeExceeded = false;\n    this._released = false;\n    this._bufferedEvents = [];\n}\nutil.inherits(DelayedStream, Stream);\nDelayedStream.create = function(source, options) {\n    var delayedStream = new this();\n    options = options || {};\n    for(var option in options){\n        delayedStream[option] = options[option];\n    }\n    delayedStream.source = source;\n    var realEmit = source.emit;\n    source.emit = function() {\n        delayedStream._handleEmit(arguments);\n        return realEmit.apply(source, arguments);\n    };\n    source.on(\"error\", function() {});\n    if (delayedStream.pauseStream) {\n        source.pause();\n    }\n    return delayedStream;\n};\nObject.defineProperty(DelayedStream.prototype, \"readable\", {\n    configurable: true,\n    enumerable: true,\n    get: function() {\n        return this.source.readable;\n    }\n});\nDelayedStream.prototype.setEncoding = function() {\n    return this.source.setEncoding.apply(this.source, arguments);\n};\nDelayedStream.prototype.resume = function() {\n    if (!this._released) {\n        this.release();\n    }\n    this.source.resume();\n};\nDelayedStream.prototype.pause = function() {\n    this.source.pause();\n};\nDelayedStream.prototype.release = function() {\n    this._released = true;\n    this._bufferedEvents.forEach((function(args) {\n        this.emit.apply(this, args);\n    }).bind(this));\n    this._bufferedEvents = [];\n};\nDelayedStream.prototype.pipe = function() {\n    var r = Stream.prototype.pipe.apply(this, arguments);\n    this.resume();\n    return r;\n};\nDelayedStream.prototype._handleEmit = function(args) {\n    if (this._released) {\n        this.emit.apply(this, args);\n        return;\n    }\n    if (args[0] === \"data\") {\n        this.dataSize += args[1].length;\n        this._checkIfMaxDataSizeExceeded();\n    }\n    this._bufferedEvents.push(args);\n};\nDelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {\n    if (this._maxDataSizeExceeded) {\n        return;\n    }\n    if (this.dataSize <= this.maxDataSize) {\n        return;\n    }\n    this._maxDataSizeExceeded = true;\n    var message = \"DelayedStream#maxDataSize of \" + this.maxDataSize + \" bytes exceeded.\";\n    this.emit(\"error\", new Error(message));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVsYXllZC1zdHJlYW0vbGliL2RlbGF5ZWRfc3RyZWFtLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxTQUFTQyxvREFBd0I7QUFDckMsSUFBSUMsT0FBT0QsbUJBQU9BLENBQUM7QUFFbkJFLE9BQU9DLE9BQU8sR0FBR0M7QUFDakIsU0FBU0E7SUFDUCxJQUFJLENBQUNDLE1BQU0sR0FBRztJQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLE9BQU87SUFDMUIsSUFBSSxDQUFDQyxXQUFXLEdBQUc7SUFFbkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBRztJQUM1QixJQUFJLENBQUNDLFNBQVMsR0FBRztJQUNqQixJQUFJLENBQUNDLGVBQWUsR0FBRyxFQUFFO0FBQzNCO0FBQ0FWLEtBQUtXLFFBQVEsQ0FBQ1IsZUFBZUw7QUFFN0JLLGNBQWNTLE1BQU0sR0FBRyxTQUFTUixNQUFNLEVBQUVTLE9BQU87SUFDN0MsSUFBSUMsZ0JBQWdCLElBQUksSUFBSTtJQUU1QkQsVUFBVUEsV0FBVyxDQUFDO0lBQ3RCLElBQUssSUFBSUUsVUFBVUYsUUFBUztRQUMxQkMsYUFBYSxDQUFDQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0UsT0FBTztJQUN6QztJQUVBRCxjQUFjVixNQUFNLEdBQUdBO0lBRXZCLElBQUlZLFdBQVdaLE9BQU9hLElBQUk7SUFDMUJiLE9BQU9hLElBQUksR0FBRztRQUNaSCxjQUFjSSxXQUFXLENBQUNDO1FBQzFCLE9BQU9ILFNBQVNJLEtBQUssQ0FBQ2hCLFFBQVFlO0lBQ2hDO0lBRUFmLE9BQU9pQixFQUFFLENBQUMsU0FBUyxZQUFZO0lBQy9CLElBQUlQLGNBQWNQLFdBQVcsRUFBRTtRQUM3QkgsT0FBT2tCLEtBQUs7SUFDZDtJQUVBLE9BQU9SO0FBQ1Q7QUFFQVMsT0FBT0MsY0FBYyxDQUFDckIsY0FBY3NCLFNBQVMsRUFBRSxZQUFZO0lBQ3pEQyxjQUFjO0lBQ2RDLFlBQVk7SUFDWkMsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDeEIsTUFBTSxDQUFDeUIsUUFBUTtJQUM3QjtBQUNGO0FBRUExQixjQUFjc0IsU0FBUyxDQUFDSyxXQUFXLEdBQUc7SUFDcEMsT0FBTyxJQUFJLENBQUMxQixNQUFNLENBQUMwQixXQUFXLENBQUNWLEtBQUssQ0FBQyxJQUFJLENBQUNoQixNQUFNLEVBQUVlO0FBQ3BEO0FBRUFoQixjQUFjc0IsU0FBUyxDQUFDTSxNQUFNLEdBQUc7SUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQ3RCLFNBQVMsRUFBRTtRQUNuQixJQUFJLENBQUN1QixPQUFPO0lBQ2Q7SUFFQSxJQUFJLENBQUM1QixNQUFNLENBQUMyQixNQUFNO0FBQ3BCO0FBRUE1QixjQUFjc0IsU0FBUyxDQUFDSCxLQUFLLEdBQUc7SUFDOUIsSUFBSSxDQUFDbEIsTUFBTSxDQUFDa0IsS0FBSztBQUNuQjtBQUVBbkIsY0FBY3NCLFNBQVMsQ0FBQ08sT0FBTyxHQUFHO0lBQ2hDLElBQUksQ0FBQ3ZCLFNBQVMsR0FBRztJQUVqQixJQUFJLENBQUNDLGVBQWUsQ0FBQ3VCLE9BQU8sQ0FBQyxVQUFTQyxJQUFJO1FBQ3hDLElBQUksQ0FBQ2pCLElBQUksQ0FBQ0csS0FBSyxDQUFDLElBQUksRUFBRWM7SUFDeEIsR0FBRUMsSUFBSSxDQUFDLElBQUk7SUFDWCxJQUFJLENBQUN6QixlQUFlLEdBQUcsRUFBRTtBQUMzQjtBQUVBUCxjQUFjc0IsU0FBUyxDQUFDVyxJQUFJLEdBQUc7SUFDN0IsSUFBSUMsSUFBSXZDLE9BQU8yQixTQUFTLENBQUNXLElBQUksQ0FBQ2hCLEtBQUssQ0FBQyxJQUFJLEVBQUVEO0lBQzFDLElBQUksQ0FBQ1ksTUFBTTtJQUNYLE9BQU9NO0FBQ1Q7QUFFQWxDLGNBQWNzQixTQUFTLENBQUNQLFdBQVcsR0FBRyxTQUFTZ0IsSUFBSTtJQUNqRCxJQUFJLElBQUksQ0FBQ3pCLFNBQVMsRUFBRTtRQUNsQixJQUFJLENBQUNRLElBQUksQ0FBQ0csS0FBSyxDQUFDLElBQUksRUFBRWM7UUFDdEI7SUFDRjtJQUVBLElBQUlBLElBQUksQ0FBQyxFQUFFLEtBQUssUUFBUTtRQUN0QixJQUFJLENBQUM3QixRQUFRLElBQUk2QixJQUFJLENBQUMsRUFBRSxDQUFDSSxNQUFNO1FBQy9CLElBQUksQ0FBQ0MsMkJBQTJCO0lBQ2xDO0lBRUEsSUFBSSxDQUFDN0IsZUFBZSxDQUFDOEIsSUFBSSxDQUFDTjtBQUM1QjtBQUVBL0IsY0FBY3NCLFNBQVMsQ0FBQ2MsMkJBQTJCLEdBQUc7SUFDcEQsSUFBSSxJQUFJLENBQUMvQixvQkFBb0IsRUFBRTtRQUM3QjtJQUNGO0lBRUEsSUFBSSxJQUFJLENBQUNILFFBQVEsSUFBSSxJQUFJLENBQUNDLFdBQVcsRUFBRTtRQUNyQztJQUNGO0lBRUEsSUFBSSxDQUFDRSxvQkFBb0IsR0FBRztJQUM1QixJQUFJaUMsVUFDRixrQ0FBa0MsSUFBSSxDQUFDbkMsV0FBVyxHQUFHO0lBQ3ZELElBQUksQ0FBQ1csSUFBSSxDQUFDLFNBQVMsSUFBSXlCLE1BQU1EO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGljZGlhcnkvLi9ub2RlX21vZHVsZXMvZGVsYXllZC1zdHJlYW0vbGliL2RlbGF5ZWRfc3RyZWFtLmpzP2ZlNWIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpLlN0cmVhbTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlbGF5ZWRTdHJlYW07XG5mdW5jdGlvbiBEZWxheWVkU3RyZWFtKCkge1xuICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gIHRoaXMuZGF0YVNpemUgPSAwO1xuICB0aGlzLm1heERhdGFTaXplID0gMTAyNCAqIDEwMjQ7XG4gIHRoaXMucGF1c2VTdHJlYW0gPSB0cnVlO1xuXG4gIHRoaXMuX21heERhdGFTaXplRXhjZWVkZWQgPSBmYWxzZTtcbiAgdGhpcy5fcmVsZWFzZWQgPSBmYWxzZTtcbiAgdGhpcy5fYnVmZmVyZWRFdmVudHMgPSBbXTtcbn1cbnV0aWwuaW5oZXJpdHMoRGVsYXllZFN0cmVhbSwgU3RyZWFtKTtcblxuRGVsYXllZFN0cmVhbS5jcmVhdGUgPSBmdW5jdGlvbihzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGRlbGF5ZWRTdHJlYW0gPSBuZXcgdGhpcygpO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgIGRlbGF5ZWRTdHJlYW1bb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgfVxuXG4gIGRlbGF5ZWRTdHJlYW0uc291cmNlID0gc291cmNlO1xuXG4gIHZhciByZWFsRW1pdCA9IHNvdXJjZS5lbWl0O1xuICBzb3VyY2UuZW1pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGRlbGF5ZWRTdHJlYW0uX2hhbmRsZUVtaXQoYXJndW1lbnRzKTtcbiAgICByZXR1cm4gcmVhbEVtaXQuYXBwbHkoc291cmNlLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHNvdXJjZS5vbignZXJyb3InLCBmdW5jdGlvbigpIHt9KTtcbiAgaWYgKGRlbGF5ZWRTdHJlYW0ucGF1c2VTdHJlYW0pIHtcbiAgICBzb3VyY2UucGF1c2UoKTtcbiAgfVxuXG4gIHJldHVybiBkZWxheWVkU3RyZWFtO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KERlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLCAncmVhZGFibGUnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2UucmVhZGFibGU7XG4gIH1cbn0pO1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5zZXRFbmNvZGluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zb3VyY2Uuc2V0RW5jb2RpbmcuYXBwbHkodGhpcy5zb3VyY2UsIGFyZ3VtZW50cyk7XG59O1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLl9yZWxlYXNlZCkge1xuICAgIHRoaXMucmVsZWFzZSgpO1xuICB9XG5cbiAgdGhpcy5zb3VyY2UucmVzdW1lKCk7XG59O1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNvdXJjZS5wYXVzZSgpO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9yZWxlYXNlZCA9IHRydWU7XG5cbiAgdGhpcy5fYnVmZmVyZWRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9LmJpbmQodGhpcykpO1xuICB0aGlzLl9idWZmZXJlZEV2ZW50cyA9IFtdO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgciA9IFN0cmVhbS5wcm90b3R5cGUucGlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB0aGlzLnJlc3VtZSgpO1xuICByZXR1cm4gcjtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLl9oYW5kbGVFbWl0ID0gZnVuY3Rpb24oYXJncykge1xuICBpZiAodGhpcy5fcmVsZWFzZWQpIHtcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGFyZ3NbMF0gPT09ICdkYXRhJykge1xuICAgIHRoaXMuZGF0YVNpemUgKz0gYXJnc1sxXS5sZW5ndGg7XG4gICAgdGhpcy5fY2hlY2tJZk1heERhdGFTaXplRXhjZWVkZWQoKTtcbiAgfVxuXG4gIHRoaXMuX2J1ZmZlcmVkRXZlbnRzLnB1c2goYXJncyk7XG59O1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5fY2hlY2tJZk1heERhdGFTaXplRXhjZWVkZWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX21heERhdGFTaXplRXhjZWVkZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5kYXRhU2l6ZSA8PSB0aGlzLm1heERhdGFTaXplKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fbWF4RGF0YVNpemVFeGNlZWRlZCA9IHRydWU7XG4gIHZhciBtZXNzYWdlID1cbiAgICAnRGVsYXllZFN0cmVhbSNtYXhEYXRhU2l6ZSBvZiAnICsgdGhpcy5tYXhEYXRhU2l6ZSArICcgYnl0ZXMgZXhjZWVkZWQuJ1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKG1lc3NhZ2UpKTtcbn07XG4iXSwibmFtZXMiOlsiU3RyZWFtIiwicmVxdWlyZSIsInV0aWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiRGVsYXllZFN0cmVhbSIsInNvdXJjZSIsImRhdGFTaXplIiwibWF4RGF0YVNpemUiLCJwYXVzZVN0cmVhbSIsIl9tYXhEYXRhU2l6ZUV4Y2VlZGVkIiwiX3JlbGVhc2VkIiwiX2J1ZmZlcmVkRXZlbnRzIiwiaW5oZXJpdHMiLCJjcmVhdGUiLCJvcHRpb25zIiwiZGVsYXllZFN0cmVhbSIsIm9wdGlvbiIsInJlYWxFbWl0IiwiZW1pdCIsIl9oYW5kbGVFbWl0IiwiYXJndW1lbnRzIiwiYXBwbHkiLCJvbiIsInBhdXNlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJwcm90b3R5cGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicmVhZGFibGUiLCJzZXRFbmNvZGluZyIsInJlc3VtZSIsInJlbGVhc2UiLCJmb3JFYWNoIiwiYXJncyIsImJpbmQiLCJwaXBlIiwiciIsImxlbmd0aCIsIl9jaGVja0lmTWF4RGF0YVNpemVFeGNlZWRlZCIsInB1c2giLCJtZXNzYWdlIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js\n");

/***/ })

};
;