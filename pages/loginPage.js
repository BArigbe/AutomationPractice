class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button',{name: 'Login'})
    }
    async fillUsername(Username){
        await this.usernameInput.fill(Username);
    }

    
    async fillPassword(Password){
        await this.passwordInput.fill(Password);
    }
    async clickLoginButton(){
        await this.loginButton.click();
    }

    async login(Username, Password){
        this.fillUsername(Username)
        this.fillPassword(Password)
        this.clickLoginButton()
    }
}

module.exports = { LoginPage }