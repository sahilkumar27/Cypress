// Note: Cypruss support both arrow function and normal function  
// Here by default Cyprus will follow mocha framework to write our test and all assertions and so on

describe('My First Test', () => {

    // 1st Block
    it('test1-verify title-positive', () => {

        cy.visit("http://opensource-demo.orangehrmlive.com/")

        // I want to check out as soom as you launch my page I just want to verify the title of this particular page so I need to insert one Assertion so we have to insert it
        // Assertion 
        cy.title().should('eq','OrangeHRM')
     })

    // 2nd Block
    it('test2-verify title-negative', () => {
        cy.visit("http://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
    })


})


describe('My First Test', function() {
it('Does not do much!', function() {
  expect(true).to.equal(true)
})
})


// Difference between Arrow function and normal function   