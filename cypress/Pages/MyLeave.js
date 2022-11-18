class MyLeave{
    Search = '//button[@type="submit"]';
    searchLeave(){
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click();
        cy.xpath(this.Search).click({force: true});
    }
}
export default MyLeave