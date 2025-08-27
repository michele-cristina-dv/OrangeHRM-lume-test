class DashboardPage{
    selectorsList () {
        const selectors = {
          dashboardGrid: ".orangehrm-dashboard-grid",
        }
       return selectors
    }

    accessDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    }

    DashboardWithUser() {
        cy.get(this.selectorsList().dashboardGrid)
    }
}

export default DashboardPage