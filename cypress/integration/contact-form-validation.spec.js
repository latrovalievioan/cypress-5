/// <reference types="cypress"/>

it("Should scroll to about area which should contain About title", () => {
  cy.visit("https://template2.booost.bg/01-main-demo.html");
  cy.get(".about-area").scrollIntoView().contains("About");
});

it("Thumbnail image should be 495x780", () => {
  cy.visit("https://template2.booost.bg/01-main-demo.html");
  cy.get(".thumbnail > .w-100").should("have.css", "width", "495px");
  cy.get(".thumbnail > .w-100").should("have.css", "height", "780px");
});

it("Should focus name input in contact form", () => {
  cy.visit("https://template2.booost.bg/01-main-demo.html");
  cy.get(".rn-button-style--2").click();
  cy.get(".rn-contact-area").scrollIntoView();
  cy.get('[name="name"]').click().should("have.focus");
});

it("Should remove focus from field when another field is clicked", () => {
  cy.visit("https://template2.booost.bg/01-main-demo.html");
  cy.get(".rn-button-style--2").click();
  cy.get(".rn-contact-area").scrollIntoView();
  cy.get('[name="name"]').click();
  cy.get('[name="email"]').click();
  cy.get('[name="name"]').should("not.have.focus");
});

it("Should throw error after submition of valid form", () => {
  cy.visit("https://template2.booost.bg/01-main-demo.html");
  cy.get(".rn-button-style--2").click();
  cy.get(".rn-contact-area").scrollIntoView();
  cy.get('[name="name"]').type("Ioni Bomboni");
  cy.get('[name="email"]').type("ionachin@mail.bg");
  cy.get('[name="subject"]').type("Zdrastee");
  cy.get("textarea").type("OOO");
  cy.get("#contact-form-active > .rn-button-style--2").click();
  cy.get(".form-messege-active").contains(
    "Oops! An error occured and your message could not be sent."
  );
});
