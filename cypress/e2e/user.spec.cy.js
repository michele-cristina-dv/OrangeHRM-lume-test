import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: '[role="alert"]',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    statusGeneric: "[tabindex='0']",
    firstSecond: ".oxd-select-dropdown > :nth-child(5)",
    secondSecond: ".oxd-select-dropdown > :nth-child(3)",
    submitButton: "[type='submit']",
    selectType: ".oxd-select-dropdown > :nth-child(4)",
    testField: ".oxd-input--active"

  }


  it.only('User info update - Success', () => {
    //userlogin
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    
    //dashboard
    cy.get(selectorsList.dashboardGrid)

    //my info
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('michele')
    cy.get(selectorsList.middleNameField).clear().type('cristina')
    cy.get(selectorsList.lastNameField).clear().type('hernandez')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('Othertest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Driver1234')
    cy.get(selectorsList.dateField).eq(0).clear().type('2030-10-25')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.statusGeneric).eq(0).click()
    cy.get(selectorsList.firstSecond).click()
    cy.get(selectorsList.statusGeneric).eq(1).click()
    cy.get(selectorsList.secondSecond).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('1996-10-25')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()

    //segunda parte do formulário 
    cy.get(selectorsList.statusGeneric).eq(2).click()
    cy.get(selectorsList.selectType).click()
    cy.get(selectorsList.testField).eq(9).clear().type('thanks')
    cy.get(selectorsList.submitButton).eq(1).click()

    })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})