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
   * @returns {Array<string>}
   */
  static addClass(classList, class_) {
    classList = classListHandler._resolve_classList(classList);
    return Array.from(new Set(classList).add(class_));
  }
  /**
   * @param {Array<string> | string} classList
   * @param {string} class_
   * @returns {Array<string>}
   */
  static dropClass(classList, class_) {
    classList = classListHandler._resolve_classList(classList);
    let classListSet = new Set(classList);
    classListSet.delete(class_);
    return Array.from(classListSet);
  }
  /**
   * @param {Array<string> | string} classList
   * @param {string} class_
   */
  static hasClass(classList, class_) {
    classList = classListHandler._resolve_classList(classList);
    return classList.includes(class_);
  }
  /**
   * @param {Array<string> | string} classList
   * @param {string} class_
   */
  static toggleClass(classList, class_) {
    //classList = classListHandler._resolve_classList(classList);
    return classListHandler.hasClass(classList, class_)
      ? classListHandler.dropClass(classList, class_)
      : classListHandler.addClass(classList, class_);
  }
}
export { classListHandler };
