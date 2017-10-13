import $ from 'jquery';
import PageManager from './page-manager';

export default class Home extends PageManager {
    loaded() {
        setTimeout(() => this.showPopup(), 3000); 
        
        this.bindEvents();
    }

    createCookie(name, value, days) {
        let expires; 
        if (days) {
            const date = new Date();
            date.setDate(date.getDate() + days);
            const dateFormat = date.toGMTString;
            expires = '; expires= ${dateFormat}';
        } else {
            expires = '';
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i < ca.length; i++){
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    showPopup(){
        if(this.readCookie("popupEnabled") == null){
            this.createCookie("popupEnabled", 1, 30);
            $("#nlpopup").show();
            $("#ey-overlay2").show();
        }
    }
    hidePopup() {
        $("#nlpopup").hide();
        $("#ey-overlay2").hide();
    }
    bindHidePopup(){
        $('.nl-close').on('click', (event) => {
            this.hidePopup();
        });

    }

    bindEvents() {
        this.bindHidePopup();
    }

}
