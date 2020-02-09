// https://docs.cypress.io/api/introduction/api.html

describe("Main Tests", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
  });
  it("tests if module loaded", () => {
    cy.get(".MindMapModule");
  });
  it("status bar reflects api status", () => {
    // color should be red( rgba(255, 255, 255, 0.5) ) by default
    cy.get(".MindMapModule > #UI > #statusBar")
  });
});
