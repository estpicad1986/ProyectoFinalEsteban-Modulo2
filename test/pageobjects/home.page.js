const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearchBox () { return $('#search-input') }
    get btnPhisical () { return $('[for=phisical]') }
    get btnSearch () { return $('[value=Buscar]') }

    clickSearchField(){
        this.btnSearch.click();
        //this.inputSearchBox.waitForExist({timeout:3000});
        var url = browser.getUrl();

    }//clickSearchField

    clickOnSpeciality(){
        this.btnPhisical.click();
        //this.inputSearchBox.waitForExist({timeout:3000});
        var value = this.inputSearchBox.getAttribute('placeholder');
        console.log(value);
       
        
    }//clickSearchField

    getTextSearchField(){
        this.inputSearchBox.click();
        var name=this.inputSearchBox.getText();
        console.log(name);

    }//getTextSearhField

    search(data){
        this.inputSearchBox.setValue(data);
        this.btnSearch.click();

    }//search

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        browser.maximizeWindow();
        return super.open('/');
    }
}

module.exports = new HomePage();
