describe("component <Form/>", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000/contact");
  });

  it("should the button be disabled if the fields are empty ", () => {
    cy.get('[data-testid="btn-Form"]').should("be.disabled");
    cy.get('[data-testid="name-input"]').click({ force: true });
    cy.get('[data-testid="email-input"]').click({ force: true });
    cy.get('[data-testid="name-input"]').should("have.class", "red");
    cy.get(' [data-testid="message-input"]').click({ force: true });
    cy.get('[data-testid="email-input"]').should("have.class", "red");
    cy.get("body").click();
    cy.get('[data-testid="btn-Form"]').should("be.disabled");
  });

  it("should be displayed if the user fills in the form correctly", () => {
    cy.get('[data-testid="name-input"] + span').click();
    cy.get('[data-testid="name-input"]').type("Jimena Lara");

    cy.get('[data-testid="email-input"] + span').click();
    cy.get('[data-testid="email-input"]').type("jimena@gmail.com");

    cy.get('[data-testid="message-input"] + span').click();
    cy.get('[data-testid="message-input"]').type(
      "esto es un mensaje, de prueba"
    );
    cy.get('[data-testid="btn-Form"]').click();
    cy.get(".style_toasterContact__6IbK8 > div").first().should("be.visible");
  });
});
