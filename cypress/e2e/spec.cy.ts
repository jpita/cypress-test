describe("Add a new computer", () => {
  beforeEach(() => {
    cy.visit("");
  });
  it("successfully submits valid data", () => {
    cy.contains("Add a new computer").click();

    cy.get('input[name="name"]').type("Test Computer");
    cy.get('input[name="introduced"]').type("2010-01-01");
    cy.get('input[name="discontinued"]').type("2020-01-01");
    cy.get('select[name="company"]').select("IBM");

    cy.get('input[type="submit"]').click();

    cy.url().should("eq", "https://computer-database.gatling.io/computers");
    cy.contains("Done ! Computer Test Computer has been created");
  });

  it("error shows when data is invalid", () => {
    cy.contains("Add a new computer").click();

    cy.get('input[name="name"]').type("Test Computer");
    cy.get('input[name="introduced"]').type("2020-01-01");
    cy.get('input[name="discontinued"]').type("2010-01-01");
    cy.get('select[name="company"]').select("IBM");

    cy.get('input[type="submit"]').click();

    cy.contains("Discontinued date is before introduction date");
  });

  it("search shows added computer", () => {
    cy.get('input[name="f"]').type("Test Computer");
    cy.get('input[type="submit"]').click();

    cy.contains("Test Computer");
  });
});
