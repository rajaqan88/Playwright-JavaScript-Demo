// Shift + Alt + F -> Format all the code
class ElementInteractions {

    constructor(page) {

        this.page = page

    }

    getElement(locatorType, object_value, filterBy = null, options = {}) {

        /*
        **************************************************************************
        Author : Nagaraju B
        Creation Date : 27 June 2026
        Purpose : This function helps to enter value to textbox
        **************************************************************************
        */

        let element;

        try {

            switch (locatorType.toLowerCase()) {

                case "locator":
                    element = this.page.locator(object_value);
                    break;

                case "role":
                    element = this.page.getByRole(object_value, options);
                    break;

                case "text":
                    element = this.page.getByText(object_value, options);
                    break;

                case "label":
                    element = this.page.getByLabel(object_value, options);
                    break;

                case "placeholder":
                    element = this.page.getByPlaceholder(object_value, options);
                    break;

                case "alt":
                    element = this.page.getByAltText(object_value);
                    break;

                case "title":
                    element = this.page.getByTitle(object_value);
                    break;

                case "testid":
                    element = this.page.getByTestId(object_value);
                    break;

                default:
                    throw new Error(`Unsupported locator type: ${locatorType}`);
            }

            if (filterBy) {
                element = element.filter(filterBy);
            }

            return element;
        }
        catch (error) {

            console.log(error.message);

            throw error;
        }
    }

    async navigate(url) {
        /*
        **************************************************************************
        Author : Nagaraju B
        Creation Date : 27 June 2026
        Purpose : This function helps to enter value to textbox
        **************************************************************************
        */

        try {
            await this.page.goto(url)
        }
        catch (error) {

            console.log(error.message);

            throw error;
        }

    }

    async enter_text(locatorType, object_value, text_to_enter, filterBy = null, options = {}) {
        /*
        **************************************************************************
        Author : Nagaraju B
        Creation Date : 27 June 2026
        Purpose : This function helps to enter value to textbox
        **************************************************************************
        */

        try {

            const ele = this.getElement(locatorType, object_value, filterBy, options)
            await ele.fill(text_to_enter)
        }
        catch (error) {

            console.log(error.message);

            throw error;
        }

    }

    async clear_text(locatorType, object_value, filterBy = null, options = {}) {
        /*
        **************************************************************************
        Author : Nagaraju B
        Creation Date : 27 June 2026
        Purpose : This function helps to enter value to textbox
        **************************************************************************
        */

        try {

            const ele = this.getElement(locatorType, object_value, filterBy, options)
            await ele.fill('')
        }
        catch (error) {

            console.log(error.message);

            throw error;
        }

    }


    async click(locatorType, object_value, filterBy = null, options = {}) {
        /*
        **************************************************************************
        Author : Nagaraju B
        Creation Date : 27 June 2026
        Purpose : This function helps to click on an element
        **************************************************************************
        */

        try {

            const ele = this.getElement(locatorType, object_value, filterBy, options)
            await ele.click()
        }
        catch (error) {

            console.log(error.message);

            throw error;
        }

    }

}


module.exports = ElementInteractions