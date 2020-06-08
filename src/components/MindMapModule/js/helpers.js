class classListHandler {
  /**
   * @param {Array<string> | string} classList
   */
  static _resolve_classList(classList) {
    if (typeof classList === "string") classList = classList.split(" ");
    return classList;
  }
  /**
   * @param {Array<string> | string} classList
   * @param {string} class_
   */
  static addClass(classList, class_) {
    classList = classListHandler._resolve_classList(classList);
    return Array.from(new Set(classList).add(class_));
  }
  /**
   * @param {Array<string> | string} classList
   * @param {string} class_
   */
  static dropClass(classList, class_) {
    classList = classListHandler._resolve_classList(classList);
    return Array.from(new Set(classList).delete(class_));
  }
}
export { classListHandler };
