import { CypressSearch } from "../../support/pages/cypress/cypressSearchPO";

let cypressSearchPage = new CypressSearch();

describe("Cypress Automation Framework", function () {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture(Cypress.env("fixtureFile")).then((data) => {
      this.data = data;
    });
  });

  it("Verify Home Page", function () {
    cypressSearchPage.verifyHomePage();
  });

  it("Verify Search Functionality", function () {
    cypressSearchPage.verifySearch();
  });
});
