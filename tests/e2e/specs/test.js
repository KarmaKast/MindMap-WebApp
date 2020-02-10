/// <reference types="Cypress" />
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
    cy.get("#api-status-indicator").should(
      "have.css",
      "background-color",
      "rgba(255, 51, 51, 0.95)"
    );
    // start api

    let url_ = "http://127:0.0.1:8010";
    // fill in the api url
    cy.get("button#burgerTimeButton").click();
    cy.get("div#menuItems > #container")
      .contains("p", "Connect to API")
      .siblings("button#primary-button")
      .click();
    //type(`${url_}`);
    cy.get("div#menuItems > #container")
      .contains("p", "Connect to API")
      .siblings("input#input-field")
      .type(`${url_}{enter}`);

    // doing: asserting color change
    cy.get("#api-status-indicator").should(
      "have.css",
      "background-color",
      "rgba(0, 204, 34, 0.95)"
    );
  });
});
