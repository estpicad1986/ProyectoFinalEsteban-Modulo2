const ResultsPage = require('../../pageobjects/results.page');

//RESULTS PAGE
describe('Select different specialities', () => {
    it('validate if the URL change according to selected speciality', () => {
        ResultsPage.open();

        ResultsPage. validatePhisicalFilter();
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/search?sp=phisical');

        ResultsPage.validateLanguajeFilter();
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/search?sp=language');

        ResultsPage.validateOcupationalFilter();
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/search?sp=ocupational');
    
    });
});

describe('Search Maria in results page', () => {
    it('validate after clicking on Search button the page is refreshed and the first result is Maria', () => {
        ResultsPage.search('Maria')
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/search?sp=ocupational&q=Maria');

        ResultsPage.validateFirstResult();
        expect(ResultsPage.txtMaria).toHaveText('Maria José Miranda');
    
    });
});

describe('Click on list icon', () => {
it('validate after clicking on list icon if map hides', () => {
    ResultsPage.validateIfMapIsVisible();

    });
});

describe('capture events', () => {
    it('capture the events from browser', () => {
    browser.setupInterceptor(); // This will start the intercept service and will capture the events for the actions performed in website
    ResultsPage.seeProfile();
    browser.expectRequest('GET', 'https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41', 200)
    var response = browser.assertExpectedRequestsOnly();

    });
}); 