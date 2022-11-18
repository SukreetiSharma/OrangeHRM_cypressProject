class PIMPage {
    FirstName = '//input[@name="firstName"]';
    LastName = '//input[@name="lastName"]';
    AddEmployee(fname, lname) {
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
        cy.get('.oxd-button > .oxd-icon').click();
        cy.xpath(this.FirstName).type(fname);
        cy.xpath(this.LastName).type(lname);
        cy.get('.oxd-button--secondary').click();
    }
}
export default PIMPage