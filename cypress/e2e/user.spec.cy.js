import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
  }

  it('User info update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password) 
    dashboardPage.accessDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('michele', 'cristina', 'hernandez')
    myInfoPage.fillEmployeeDetails('Employee', 'Othertest', 'Driver1234', '2030-10-25', '1996-10-25')
    myInfoPage.fillStatus('1996-10-25')
    
    })


})