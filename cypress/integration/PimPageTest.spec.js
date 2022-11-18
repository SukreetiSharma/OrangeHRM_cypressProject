import PIMpage from "../Pages/PIMPage";
const pimpage = new PIMpage();

describe('Test user is able to Add Employee', () => {
before(function () {
    cy.fixture('Data').then(function (data) {
      this.data = data;
    })
  })

it('PIM Page Test',function(){
    cy.login();
     pimpage.AddEmployee(this.data.firstname,this.data.lastname);
})
})
