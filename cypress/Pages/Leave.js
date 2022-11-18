 class Leave{
    assignLeave = "//a[contains(text(),'Assign Leave')]";
    EmployeeName = '//input[@placeholder="Type for hints..."]';
    AssignLeave(){
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
        cy.xpath(this.assignLeave).click();
        cy.xpath(this.EmployeeName).type("Alice Duval");
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('2022-11-11');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('2022-11-16');
        cy.get('.oxd-button').click({force: true});
    }
}
export default Leave