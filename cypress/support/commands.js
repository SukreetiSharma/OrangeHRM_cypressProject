import LoginPage from "../Pages/Loginpage"
const loginpage = new LoginPage()

Cypress.Commands.add('login', (originalFn, url, options) => {
    const user= "Admin"
    const pass =  "admin123"
    loginpage.navigate(user,pass)
    
     })
