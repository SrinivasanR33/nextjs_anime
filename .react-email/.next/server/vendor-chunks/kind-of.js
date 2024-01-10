/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/kind-of";
exports.ids = ["vendor-chunks/kind-of"];
exports.modules = {

/***/ "(rsc)/./node_modules/kind-of/index.js":
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isBuffer = __webpack_require__(/*! is-buffer */ \"(rsc)/./node_modules/is-buffer/index.js\");\nvar toString = Object.prototype.toString;\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */ module.exports = function kindOf(val) {\n    // primitivies\n    if (typeof val === \"undefined\") {\n        return \"undefined\";\n    }\n    if (val === null) {\n        return \"null\";\n    }\n    if (val === true || val === false || val instanceof Boolean) {\n        return \"boolean\";\n    }\n    if (typeof val === \"string\" || val instanceof String) {\n        return \"string\";\n    }\n    if (typeof val === \"number\" || val instanceof Number) {\n        return \"number\";\n    }\n    // functions\n    if (typeof val === \"function\" || val instanceof Function) {\n        return \"function\";\n    }\n    // array\n    if (typeof Array.isArray !== \"undefined\" && Array.isArray(val)) {\n        return \"array\";\n    }\n    // check for instances of RegExp and Date before calling `toString`\n    if (val instanceof RegExp) {\n        return \"regexp\";\n    }\n    if (val instanceof Date) {\n        return \"date\";\n    }\n    // other objects\n    var type = toString.call(val);\n    if (type === \"[object RegExp]\") {\n        return \"regexp\";\n    }\n    if (type === \"[object Date]\") {\n        return \"date\";\n    }\n    if (type === \"[object Arguments]\") {\n        return \"arguments\";\n    }\n    if (type === \"[object Error]\") {\n        return \"error\";\n    }\n    // buffer\n    if (isBuffer(val)) {\n        return \"buffer\";\n    }\n    // es6: Map, WeakMap, Set, WeakSet\n    if (type === \"[object Set]\") {\n        return \"set\";\n    }\n    if (type === \"[object WeakSet]\") {\n        return \"weakset\";\n    }\n    if (type === \"[object Map]\") {\n        return \"map\";\n    }\n    if (type === \"[object WeakMap]\") {\n        return \"weakmap\";\n    }\n    if (type === \"[object Symbol]\") {\n        return \"symbol\";\n    }\n    // typed arrays\n    if (type === \"[object Int8Array]\") {\n        return \"int8array\";\n    }\n    if (type === \"[object Uint8Array]\") {\n        return \"uint8array\";\n    }\n    if (type === \"[object Uint8ClampedArray]\") {\n        return \"uint8clampedarray\";\n    }\n    if (type === \"[object Int16Array]\") {\n        return \"int16array\";\n    }\n    if (type === \"[object Uint16Array]\") {\n        return \"uint16array\";\n    }\n    if (type === \"[object Int32Array]\") {\n        return \"int32array\";\n    }\n    if (type === \"[object Uint32Array]\") {\n        return \"uint32array\";\n    }\n    if (type === \"[object Float32Array]\") {\n        return \"float32array\";\n    }\n    if (type === \"[object Float64Array]\") {\n        return \"float64array\";\n    }\n    // must be a plain object\n    return \"object\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMva2luZC1vZi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUN2QixJQUFJQyxXQUFXQyxPQUFPQyxTQUFTLENBQUNGLFFBQVE7QUFFeEM7Ozs7O0NBS0MsR0FFREcsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLE9BQU9DLEdBQUc7SUFDbEMsY0FBYztJQUNkLElBQUksT0FBT0EsUUFBUSxhQUFhO1FBQzlCLE9BQU87SUFDVDtJQUNBLElBQUlBLFFBQVEsTUFBTTtRQUNoQixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxRQUFRLFFBQVFBLFFBQVEsU0FBU0EsZUFBZUMsU0FBUztRQUMzRCxPQUFPO0lBQ1Q7SUFDQSxJQUFJLE9BQU9ELFFBQVEsWUFBWUEsZUFBZUUsUUFBUTtRQUNwRCxPQUFPO0lBQ1Q7SUFDQSxJQUFJLE9BQU9GLFFBQVEsWUFBWUEsZUFBZUcsUUFBUTtRQUNwRCxPQUFPO0lBQ1Q7SUFFQSxZQUFZO0lBQ1osSUFBSSxPQUFPSCxRQUFRLGNBQWNBLGVBQWVJLFVBQVU7UUFDeEQsT0FBTztJQUNUO0lBRUEsUUFBUTtJQUNSLElBQUksT0FBT0MsTUFBTUMsT0FBTyxLQUFLLGVBQWVELE1BQU1DLE9BQU8sQ0FBQ04sTUFBTTtRQUM5RCxPQUFPO0lBQ1Q7SUFFQSxtRUFBbUU7SUFDbkUsSUFBSUEsZUFBZU8sUUFBUTtRQUN6QixPQUFPO0lBQ1Q7SUFDQSxJQUFJUCxlQUFlUSxNQUFNO1FBQ3ZCLE9BQU87SUFDVDtJQUVBLGdCQUFnQjtJQUNoQixJQUFJQyxPQUFPZixTQUFTZ0IsSUFBSSxDQUFDVjtJQUV6QixJQUFJUyxTQUFTLG1CQUFtQjtRQUM5QixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLGlCQUFpQjtRQUM1QixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLHNCQUFzQjtRQUNqQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLGtCQUFrQjtRQUM3QixPQUFPO0lBQ1Q7SUFFQSxTQUFTO0lBQ1QsSUFBSWpCLFNBQVNRLE1BQU07UUFDakIsT0FBTztJQUNUO0lBRUEsa0NBQWtDO0lBQ2xDLElBQUlTLFNBQVMsZ0JBQWdCO1FBQzNCLE9BQU87SUFDVDtJQUNBLElBQUlBLFNBQVMsb0JBQW9CO1FBQy9CLE9BQU87SUFDVDtJQUNBLElBQUlBLFNBQVMsZ0JBQWdCO1FBQzNCLE9BQU87SUFDVDtJQUNBLElBQUlBLFNBQVMsb0JBQW9CO1FBQy9CLE9BQU87SUFDVDtJQUNBLElBQUlBLFNBQVMsbUJBQW1CO1FBQzlCLE9BQU87SUFDVDtJQUVBLGVBQWU7SUFDZixJQUFJQSxTQUFTLHNCQUFzQjtRQUNqQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLHVCQUF1QjtRQUNsQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLDhCQUE4QjtRQUN6QyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLHVCQUF1QjtRQUNsQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLHdCQUF3QjtRQUNuQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLHVCQUF1QjtRQUNsQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLHdCQUF3QjtRQUNuQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLHlCQUF5QjtRQUNwQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLHlCQUF5QjtRQUNwQyxPQUFPO0lBQ1Q7SUFFQSx5QkFBeUI7SUFDekIsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZW1haWwtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2tpbmQtb2YvaW5kZXguanM/YjM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBuYXRpdmUgYHR5cGVvZmAgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gIHsqfSBgdmFsYFxuICogQHJldHVybiB7Kn0gTmF0aXZlIGphdmFzY3JpcHQgdHlwZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICAvLyBwcmltaXRpdmllc1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSB8fCB2YWwgPT09IGZhbHNlIHx8IHZhbCBpbnN0YW5jZW9mIEJvb2xlYW4pIHtcbiAgICByZXR1cm4gJ2Jvb2xlYW4nO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHZhbCBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgIHJldHVybiAnbnVtYmVyJztcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uc1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyB8fCB2YWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLy8gYXJyYXlcbiAgaWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBpbnN0YW5jZXMgb2YgUmVnRXhwIGFuZCBEYXRlIGJlZm9yZSBjYWxsaW5nIGB0b1N0cmluZ2BcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiAncmVnZXhwJztcbiAgfVxuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cblxuICAvLyBvdGhlciBvYmplY3RzXG4gIHZhciB0eXBlID0gdG9TdHJpbmcuY2FsbCh2YWwpO1xuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiAncmVnZXhwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuICdkYXRlJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScpIHtcbiAgICByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEVycm9yXScpIHtcbiAgICByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIC8vIGJ1ZmZlclxuICBpZiAoaXNCdWZmZXIodmFsKSkge1xuICAgIHJldHVybiAnYnVmZmVyJztcbiAgfVxuXG4gIC8vIGVzNjogTWFwLCBXZWFrTWFwLCBTZXQsIFdlYWtTZXRcbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFNldF0nKSB7XG4gICAgcmV0dXJuICdzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBXZWFrU2V0XScpIHtcbiAgICByZXR1cm4gJ3dlYWtzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBNYXBdJykge1xuICAgIHJldHVybiAnbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgV2Vha01hcF0nKSB7XG4gICAgcmV0dXJuICd3ZWFrbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICByZXR1cm4gJ3N5bWJvbCc7XG4gIH1cblxuICAvLyB0eXBlZCBhcnJheXNcbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDhBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQ4YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50OEFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQ4YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50OGNsYW1wZWRhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDE2QXJyYXldJykge1xuICAgIHJldHVybiAnaW50MTZhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQxNkFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQxNmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgSW50MzJBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDMyQXJyYXldJykge1xuICAgIHJldHVybiAndWludDMyYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBGbG9hdDMyQXJyYXldJykge1xuICAgIHJldHVybiAnZmxvYXQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScpIHtcbiAgICByZXR1cm4gJ2Zsb2F0NjRhcnJheSc7XG4gIH1cblxuICAvLyBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0XG4gIHJldHVybiAnb2JqZWN0Jztcbn07XG4iXSwibmFtZXMiOlsiaXNCdWZmZXIiLCJyZXF1aXJlIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwia2luZE9mIiwidmFsIiwiQm9vbGVhbiIsIlN0cmluZyIsIk51bWJlciIsIkZ1bmN0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiUmVnRXhwIiwiRGF0ZSIsInR5cGUiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/kind-of/index.js\n");

/***/ })

};
;