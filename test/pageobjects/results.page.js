const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearchBox () { return $('[class=form-control]') }
    get iconList () { return $('//i[contains(@class,"icon-th-list")]') }
    get btnSpecialityPhisical () { return $('//a[contains(text(), "Física")]') }
    get btnSpecialityLanguaje () { return $('//a[contains(text(), "Lenguaje")]') }
    get btnSpecialityOcupational () { return $('//a[contains(text(), "Ocupacional")]') }
    get txtMaria () { return $('//h3[contains(text(), "Maria José Miranda")]') }
    get map () { return $('//div[contains(@id,"map")]') }
    get btnSearch() { return $('[value=Buscar]') }
    get linkSeeCompleteProfile() { return $('[class=btn_listing]') }
    get MariaContainer() {return $('#secondary_nav')}

    validateFirstResult(){
        this.txtMaria.getValue();
        
    }//validateFirstResult

    validatePhisicalFilter(){
        this.btnSpecialityPhisical.waitForClickable({timeout:3000});
        this.btnSpecialityPhisical.click();
        
    }//validatePhisicalFilter

    validateLanguajeFilter(){
        this.btnSpecialityLanguaje.waitForClickable({timeout:3000});
        this.btnSpecialityLanguaje.click();  
        
    }//validateLanguajeFilter

    validateOcupationalFilter(){
        this.btnSpecialityOcupational.waitForClickable({timeout:3000});
        this.btnSpecialityOcupational.click();
        
    }//validateOcupationalFilter

    search(data){
        this.inputSearchBox.setValue(data);
        this.btnSearch.waitForClickable({timeout:3000});
        this.btnSearch.click();

    }//search

    validateIfMapIsVisible(){
        this.iconList.click();
        let isDisplayed = this.map.isDisplayed();
        if(isDisplayed==false){
            console.log('The map is not displayed on the page');
        }else{
            throw new Error('The map is displayed');
        }
    }//validateIfMapIsVissible

    seeProfile(){
        //this.linkSeeCompleteProfile.waitForExist({timeout:3000});
        //this.linkSeeCompleteProfile.waitForClickable({timeout:3000});
        this.linkSeeCompleteProfile.click();
        browser.pause(2000);
    }//seeProfile

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        browser.maximizeWindow();
        return super.open('#/search');
    }
}

module.exports = new ResultsPage();
