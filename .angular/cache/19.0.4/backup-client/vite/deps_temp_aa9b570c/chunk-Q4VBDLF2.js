import {
  __async,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@tauri-apps/api/tauri.js
function uid() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0];
}
function transformCallback(callback, once = false) {
  const identifier = uid();
  const prop = `_${identifier}`;
  Object.defineProperty(window, prop, {
    value: (result) => {
      if (once) {
        Reflect.deleteProperty(window, prop);
      }
      return callback === null || callback === void 0 ? void 0 : callback(result);
    },
    writable: false,
    configurable: true
  });
  return identifier;
}
function invoke(_0) {
  return __async(this, arguments, function* (cmd, args = {}) {
    return new Promise((resolve, reject) => {
      const callback = transformCallback((e) => {
        resolve(e);
        Reflect.deleteProperty(window, `_${error}`);
      }, true);
      const error = transformCallback((e) => {
        reject(e);
        Reflect.deleteProperty(window, `_${callback}`);
      }, true);
      window.__TAURI_IPC__(__spreadValues({
        cmd,
        callback,
        error
      }, args));
    });
  });
}
function convertFileSrc(filePath, protocol = "asset") {
  return window.__TAURI__.convertFileSrc(filePath, protocol);
}

export {
  transformCallback,
  invoke,
  convertFileSrc
};
//# sourceMappingURL=chunk-Q4VBDLF2.js.map
