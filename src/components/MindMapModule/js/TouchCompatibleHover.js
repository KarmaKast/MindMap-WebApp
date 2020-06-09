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
    !event.currentTarget.classList.contains(bindMap.get(event.currentTarget))
  ) {
    //console.info({ bindMap, currentTarget: event.currentTarget });
    event.currentTarget.classList.add(bindMap.get(event.currentTarget));
  }
};
const endAction = (event) => {
  event.preventDefault();
  if (
    //event.currentTarget === event.target &&
    bindMap.has(event.currentTarget) &&
    event.currentTarget.classList.contains(bindMap.get(event.currentTarget))
  ) {
    event.currentTarget.classList.remove(bindMap.get(event.currentTarget));
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
    bindMap.set(el, binding.value ? binding.value : "hovered");
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
