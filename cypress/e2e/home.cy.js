describe("component <Carousel/>", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000");
  });

  it("should render the carousel", () => {
    cy.get(".slider-container").should("exist");
    cy.get(".carouselItem__title").should("have.length", 4);
  });

  it("should advance to the next slide when clicked", () => {
    cy.get(".slick-dots > li").first().click();
    cy.wait(1000);
    cy.get(".carouselItem__title").contains(/the giggle/i);
    cy.get(".slick-dots > li").eq(1).click();
    cy.wait(1000);
    cy.get(".carouselItem__title").contains(/allons/i);
    cy.get(".slick-dots > li").eq(2).click();
    cy.wait(1000);
    cy.get(".carouselItem__title").contains(/wild/i);
    cy.get(".slick-dots > li").eq(3).click();
    cy.wait(1000);
    cy.get(".carouselItem__title").contains(/meet/i);
  });

  it("should send me to an external url when I click on the button", () => {
    cy.get(".slick-dots > li").first().click();
    cy.get(".carouselItem__btn > a")
      .first()
      .should("have.attr", "href", "https://www.doctorwho.tv/");
  });

  describe("component <Header/>", () => {
    it("should redirect to pages when you click on a link", () => {
      cy.get(".header__links > li >a ")
        .first()
        .contains(/conoce a/i)
        .click();
      cy.url().should("include", "/characters");

      cy.get(".header__links > li >a")
        .eq(1)
        .contains(/doctores/i)
        .click();
      cy.url().should("include", "/doctors");

      cy.get(".header__links > li >a")
        .eq(2)
        .contains(/contacto/i)
        .click();
      cy.url().should("include", "/contact");

      cy.get(".header__logoIcon--desktop > a")
        .click()
        .should("have.attr", "href", "/");
    });
  });

  describe("component <Search/>", () => {
    it("should perform a successful search and navigate to the doctors page", () => {
      cy.get('[data-testid="search-form"]').within(() => {
        cy.get("#searchBar").type("william");
        cy.root().submit();
      });
      cy.url().should("include", "/doctors?search=william");
    });

    it("should redirect to the not found page if you enter a word that does not exist.", () => {
      cy.get('[data-testid="search-form"]').within(() => {
        cy.get("#searchBar").type("vvc");
        cy.root().submit();
      });
      cy.url().should("includes", "/doctors?search=vvc");
    });
  });
});
