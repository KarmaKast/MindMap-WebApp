import { classListHandler } from "./helpers";
import Vue from "vue";
//const isPassiveSupported = undefined;
const isPassiveSupported = (function () {
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
})();
const bindMap = {};
const startAction = (event) => {
  event.preventDefault();
  event.currentTarget.classList.add(bindMap[event.currentTarget]);
};
const endAction = (event) => {
  event.preventDefault();
  event.currentTarget.classList.remove(bindMap[event.currentTarget]);
};
Vue.directive("touchCompatibleHover", {
  /**
   * @param {Element} el
   * @param {VNode} vNode
   */
  bind: function (el, binding, vNode) {
    bindMap[el] = binding.value ? binding.value : "hovered";
    el.addEventListener("touchstart", startAction, true);
    el.addEventListener("mouseenter", startAction, true);

    el.addEventListener("touchend", endAction, true);
    el.addEventListener("mouseleave", endAction, true);
  },
  /**
   * @param {Element} el
   * @param {VNode} vNode
   */
  unbind: function (el, binding, vNode) {
    el.removeEventListener("touchstart", startAction, true);
    el.removeEventListener("mouseenter", startAction, true);

    el.removeEventListener("touchend", endAction, true);
    el.removeEventListener("mouseleave", endAction, true);
  },
});
