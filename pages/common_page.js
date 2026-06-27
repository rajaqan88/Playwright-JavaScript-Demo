const { test, expect } = require('@playwright/test')
const element_Interactions = require('../utilities/element_Interactions')

class CommonPage {

    constructor(page) {

        this.page = page
        this.ei = new element_Interactions(page)
        this.username = "input[name='username']"
        this.password = "input[name='pwd']"
        this.login_btn = "input[value*='Login now']"

    }

    async loginToApplication(username, password) {

        /*
        **************************************************************************
        Author : Nagaraju B
        Creation Date : 27 June 2026
        Purpose : This function helps to login to application
        **************************************************************************
        */
       try{

            await this.ei.enter_text("locator",this.username, username)
            await this.ei.enter_text("locator",this.password, password)
            await this.ei.click("locator",this.login_btn)
        }
        catch (error) {
            console.log("Exception Occurred:");
            console.log(error.message);
            throw error;
        }

    }

}

module.exports = CommonPage

