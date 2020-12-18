const HomePage = require('../../pageobjects/home.page');
const ResultsPage = require('../../pageobjects/results.page');

//HOME PAGE
describe('Click on search field', () => {
    it('validate the user keeps on Home page after clicking on search field', () => {
        HomePage.open();

        HomePage.clickSearchField();
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/');
        //expect(SecurePage.flashAlert).toBeExisting();
        //expect(HomePage.clickSearchField).toHaveTextContaining('https://develop.terapeutica.digital/#/');
    });
});

describe('Click on one speciality', () => {
    it('validate if placeholder change to "Buscas a alguien en especifico', () => {
        HomePage.open();

        HomePage.clickOnSpeciality();
        expect(HomePage.inputSearchBox).toBeFocused();
        expect(HomePage.inputSearchBox).toHaveAttribute('placeholder', '¿Buscas a alguien o algo en específico?')
    
    });
});

describe('Search Maria', () => {
    it('validate if the entered text is Maria and the user is redirected to results page', () => {
        HomePage.open();

        HomePage.search('Maria');
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/search?sp=all&q=Maria');

        ResultsPage.validateFirstResult();
        expect(ResultsPage.txtMaria).toHaveText('Maria José Miranda');
    
    });
});



