class MyInfoPage{
    selectorsList () {
        const selectors = {
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
       return selectors
    }

    fillPersonalDetails(firstNameField, middleNameField, lastNameField) {
       cy.get(this.selectorsList().firstNameField).clear().type(firstNameField)
       cy.get(this.selectorsList().middleNameField).clear().type(middleNameField)
       cy.get(this.selectorsList().lastNameField).clear().type(lastNameField)
    }

    fillEmployeeDetails(employeeId, otherId, driverId, dateField1, dateField2) {
       cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
       cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
       cy.get(this.selectorsList().genericField).eq(5).clear().type(driverId)
       cy.get(this.selectorsList().dateField).eq(0).clear().type(dateField1)
       cy.get(this.selectorsList().submitButton).eq(0).click()
    }   

    fillStatus(dateField2){
       cy.get(this.selectorsList().dateCloseButton).click()
       cy.get(this.selectorsList().statusGeneric).eq(0).click()
       cy.get(this.selectorsList().firstSecond).click()
       cy.get(this.selectorsList().statusGeneric).eq(1).click()
       cy.get(this.selectorsList().secondSecond).click()
       cy.get(this.selectorsList().dateField).eq(1).clear().type(dateField2)
       cy.get(this.selectorsList().dateCloseButton).click()
       cy.get(this.selectorsList().submitButton).eq(1).click()
    }

}

export default MyInfoPage