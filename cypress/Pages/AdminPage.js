class AdminPage{
    Search = '//button[@type="submit"]';
    SearchEmployee(){
        cy.get(':nth-child(2) > .oxd-input').type("18/11/2022 + Cultivated_Hurt");
        cy.xpath(this.Search).click();
    }
}
export default AdminPage
