// Заходит на сайт
describe("template spec", () => {
  it("Visit site", () => {
    cy.visit("https://funpay.com/");
  });

 // Заходит в раздел геристрации
  it("reg test", () => {
    cy.visit("https://funpay.com/");
    cy.get(".menu-item-register").click();

  });

 // Тест поиска
  it("search test", () => {
    cy.visit("https://funpay.com/");
    cy.get('.navbar-form > .form-group > .form-control').type("steam");
    cy.get(':nth-child(1) > .container > .content-with-cd > .promo-game-list > .row > .col-md-3 > .promo-game-item > .list-inline > :nth-child(6) > a').click();


  });

 // Тест сортировки
it("sort test", () => {
    cy.visit("https://funpay.com/");
    cy.get('.navbar-form > .form-group > .form-control').type("steam");
    cy.get(':nth-child(1) > .container > .content-with-cd > .promo-game-list > .row > .col-md-3 > .promo-game-item > .list-inline > :nth-child(6) > a').click();
    cy.get('.tc-header > .tc-price').click();



  });

 // Изменяет язык
it("langauage test", () => {
    cy.visit("https://funpay.com/");
    cy.get(':nth-child(4) > .dropdown-toggle > .caret').click();
    cy.get('.menu-item-lang').click();


  });

// Изменяет валюту
it("valute test", () => {
    cy.visit("https://funpay.com/");
    cy.get(':nth-child(5) > .dropdown-toggle > .caret').click();
    cy.get('[data-cy="usd"]').click();


  });

// Переходить на вкладку поддержки
it("help test", () => {
    cy.visit("https://funpay.com/");
    cy.get('.menu-item-info > .caret').click();
    cy.get('.menu-item-trade_info').click();


  });











});
