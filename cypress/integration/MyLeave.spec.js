import MyLeave from "../Pages/MyLeave";
const Search = new MyLeave();
describe('Test user is able to Search leave', () => {
    before(function () {
        cy.fixture('Data').then(function (data) {
          this.data = data;
        })
      })
    it('My leave Test',function(){
        cy.login();     
        Search.searchLeave();
    })
    })