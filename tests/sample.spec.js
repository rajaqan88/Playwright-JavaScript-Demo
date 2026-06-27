const{test,expect} = require('@playwright/test')

//test.use({viewport:{width:1234,height:8787}})

test('Test Google Application', async({page})=>{

    await page.goto("https://www.google.com/")

    const ur = await page.url()

    console.log("Current URL ->"+ ur)

    expect(ur).toContain(ur)

    const title = await page.title

    await expect(page).toHaveTitle("Google123")
})

test('Test ActTime Login_Nagaraju',async ({page})=>{

    await page.goto("http://127.0.0.1/login.do")

    await page.locator("[name='username']").fill("admin")

    await page.locator("[name='pwd']").nth(0).fill("manager")

    await page.locator("[value*='Login now']").click()

    await page.waitForTimeout(2000)

    console.log("Page Title ->"+ await page.title())

    //await expect(page.title=="actiTIME - Open Tasks").toBeFalsy()

    await page.waitForTimeout(2000)

})

test('Test ActTime Login_KA',async ({page})=>{

    await page.goto("http://127.0.0.1/login.do")

    await page.locator("[name='username']").fill("admin")

    await page.locator("[name='pwd']").nth(0).fill("manager")

    await page.locator("[value*='Login now']").click()

    await page.waitForTimeout(2000)

    console.log("Page Title ->"+ await page.title())

    //await expect(page.title=="actiTIME - Open Tasks").toBeFalsy()

    await page.waitForTimeout(2000)

})

test('Test ActTime Login_AP',async ({page})=>{

    await page.goto("http://127.0.0.1/login.do")

    await page.locator("[name='username']").fill("admin")

    await page.locator("[name='pwd']").nth(0).fill("manager")

    await page.locator("[value*='Login now']").click()

    console.log("Page Title ->"+ await page.title())

    //await expect(page.title=="actiTIME - Open Tasks").toBeFalsy()

    await page.waitForTimeout(2000)

    await expect(page).toHaveTitle("Google123")

})



test.skip('Test ActTime Login_KL',async ({page})=>{

    await page.goto("http://127.0.0.1/login.do")

    await page.locator("[name='username']").fill("admin")

    await page.locator("[name='pwd']").nth(0).fill("manager")

    await page.locator("[value*='Login now']").click()

    await page.waitForTimeout(2000)

    console.log("Page Title Login_KL ->"+ await page.title())

    //await expect(page.title=="actiTIME - Open Tasks").toBeFalsy()

    await page.waitForTimeout(2000)

})