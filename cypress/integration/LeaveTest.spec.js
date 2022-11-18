import Leave from "../Pages/Leave";
const leave = new Leave();
describe('Test user is able to Apply for Leave', () => {
  before(function () {
    cy.fixture('Data').then(function (data) {
      this.data = data;
    })
  })
  it('Leave page Test', function () {
    cy.login();
    leave.AssignLeave();
  })
})