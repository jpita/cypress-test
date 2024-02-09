describe("Add a new computer", () => {
  beforeEach(() => {
    cy.visit("");
  });
  it("successfully submits valid data", () => {
    cy.contains("Add a new computer").click();
    cy.addNewComputer("Test Computer", "2010-01-01", "2020-01-01", "IBM");
    cy.url().should("eq", "https://computer-database.gatling.io/computers");
    cy.contains("Done ! Computer Test Computer has been created");
  });

  it("error shows when data is invalid", () => {
    cy.contains("Add a new computer").click();
    cy.addNewComputer("Test Computer", "2020-01-01", "2010-01-01", "IBM");
    cy.contains("Discontinued date is before introduction date");
  });

  it("search shows added computer", () => {
    cy.get('input[name="f"]').type("Test Computer");
    cy.get('input[type="submit"]').click();
    cy.contains("Test Computer");
  });

  it("empty search shows when result doesn't exist", () => {
    cy.get('input[name="f"]').type("doesn't exist");
    cy.get('input[type="submit"]').click();
    cy.contains("Nothing to display");
  });
});
