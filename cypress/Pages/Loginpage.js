class LoginPage {
    UserName = '//input[@name="username"]';
    Pass = '//input[@name="password"]';
    navigate(user,pass) {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath(this.UserName).type(user);
        cy.xpath(this.Pass).type(pass);
        cy.get('.oxd-button').click();
    }
}
export default LoginPage

