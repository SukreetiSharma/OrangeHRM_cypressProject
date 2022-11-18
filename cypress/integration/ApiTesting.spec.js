describe('Fetch response', () => {
    it('GET', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://opensource-demo.orangehrmlive.com/',
        }).then((response) => {
            expect(response.status).to.eq(200)
})
})
})