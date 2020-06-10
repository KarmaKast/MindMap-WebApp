//import { classListHandler } from "./helpers";
import Vue from "vue";
//const isPassiveSupported = undefined;
/*const isPassiveSupported = (function () {
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    });
    window.addEventListener("test", null, opts);
  } catch (e) {}
  return supportsPassive;
})();*/
const defaultHoverClassName = "hovered";
/**
 * @typedef { undefined | string} HoverClassName
 * @typedef { function | undefined } Callback
 * @typedef { [Callback, Callback] } Callbacks
 * @param { HoverClassName | [ string, Callback | Callbacks ] | Callbacks | { value: HoverClassName, callback: Callback | Callbacks }} value
 * @returns {{ value: string, callbacks: Callbacks }}
 */
function parseBindingValue(value) {
  let result_value;
  let callbacks;
  /**
   *
   * @param {HoverClassName} hoverClassName
   */
  function checkHoverClassName(hoverClassName) {
    return typeof hoverClassName === "string" && hoverClassName !== "";
  }
  if (typeof value === "string")
    [result_value, callbacks] = [
      value !== "" ? value : defaultHoverClassName,
      [undefined, undefined],
    ];
  else if (typeof value === "function")
    [result_value, callbacks] = [defaultHoverClassName, [value, value]];
  else if (Array.isArray(value))
    [result_value, callbacks] = [
      checkHoverClassName(value[0]) ? value[0] : defaultHoverClassName,
      checkHoverClassName(value[0])
        ? Array.isArray(value[1])
          ? value[1]
          : [value[1], value[1]]
        : value,
    ];
  else
    [result_value, callbacks] = [
      checkHoverClassName(value.value) ? value.value : defaultHoverClassName,
      Array.isArray(value.callback)
        ? value.callback
        : [value.callback, value.callback],
    ];
  if (
    !callbacks.every(
      (callback) => callback === undefined || typeof callback === "function"
    )
  )
    console.warn("callback provided is not a function");
  //console.info({ value, result_value, callbacks });
  return {
    value: result_value,
    callbacks,
  };
}
/**
 * @type {Map<Element, ReturnType<parseBindingValue>>}
 */
const bindMap = new Map();
const startAction = (event) => {
  event.preventDefault();
  //console.info({ bindMap, currentTarget: event.currentTarget });
  /*console.info({
    event,
    currentTarget: `${event.currentTarget.nodeName}`,
    target: `${event.target.nodeName}`,
  });*/
  if (
    bindMap.has(event.currentTarget) &&
    !event.currentTarget.classList.contains(
      bindMap.get(event.currentTarget).value
    )
  ) {
    //console.info({ bindMap, currentTarget: event.currentTarget });
    event.currentTarget.classList.add(bindMap.get(event.currentTarget).value);
    const callback = bindMap.get(event.currentTarget).callbacks[0];
    if (callback) callback(event);
  }
};
const endAction = (event) => {
  event.preventDefault();
  if (
    //event.currentTarget === event.target &&
    bindMap.has(event.currentTarget) &&
    event.currentTarget.classList.contains(
      bindMap.get(event.currentTarget).value
    )
  ) {
    event.currentTarget.classList.remove(
      bindMap.get(event.currentTarget).value
    );
    const callback = bindMap.get(event.currentTarget).callbacks[1];
    if (callback) callback(event);
  }
};
const options = {
  bubbles: true,
  cancelable: true,
  capture: false,
  view: window,
};
Vue.directive("touchCompatibleHover", {
  /**
   * @param {Element} el
   * @param {VNode} vNode
   */
  bind: function (el, binding, vNode) {
    bindMap.set(el, parseBindingValue(binding.value));
    el.addEventListener("touchstart", startAction, options);
    el.addEventListener("mouseenter", startAction, options);

    el.addEventListener("touchend", endAction, options);
    el.addEventListener("mouseleave", endAction, options);
  },
  /**
   * @param {Element} el
   * @param {VNode} vNode
   */
  unbind: function (el, binding, vNode) {
    bindMap.delete(el);
    el.removeEventListener("touchstart", startAction, options);
    el.removeEventListener("mouseenter", startAction, options);

    el.removeEventListener("touchend", endAction, options);
    el.removeEventListener("mouseleave", endAction, options);
  },
});
