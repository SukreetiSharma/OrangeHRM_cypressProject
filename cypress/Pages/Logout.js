class LoginPage {
    logout ='//p[@class="oxd-userdropdown-name"]';
    PageLogout() {
        cy.xpath(this.logout).click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    }
}
export default LoginPage