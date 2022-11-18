import AdminPage from "../Pages/AdminPage";
const admin = new AdminPage();
describe('Test user is able Search Employee', () => {
    before(function () {
        cy.fixture('Data').then(function (data) {
          this.data = data;
        })
      })
    it('Admin Page Test',function(){
        cy.login();
        
    })
    })