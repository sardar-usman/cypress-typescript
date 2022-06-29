export class CypressSearch {
  getSearchSelector() {
    return ".DocSearch-Button-Placeholder";
  }

  getSearchInputSelector() {
    return ".DocSearch-Input";
  }

  getH1Tag() {
    return "h1";
  }

  getH2Tag() {
    return "h1";
  }

  verifyHomePage() {
    cy.get(this.getH1Tag()).contains("Why Cypress?").should("be.visible");
    cy.get('[title="video"]').should('be.visible')
  }

  verifySearch() {
    cy.get(this.getSearchSelector()).click();
    cy.get(this.getSearchInputSelector())
      .type("Assertions")
      .wait(2000)
      .type("{enter}");
    cy.get(this.getH1Tag()).contains("Assertions").should("be.visible");
  }
}
