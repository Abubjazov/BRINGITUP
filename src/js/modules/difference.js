export default class Difference {
    constructor(oldOfficer, newOfficer, officerItems){
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(officerItems);
        this.newItems = this.newOfficer.querySelectorAll(officerItems);
        this.officerItems = officerItems;
        this.oldCounter = 0;
        this.newCounter = 0;
    }
    

    bindTriggers() {
        this.oldOfficer.querySelector('.plus').addEventListener('click', () => {
            if ( this.oldCounter !== this.oldItems.length - 2) {
                this.oldItems[this.oldCounter].classList.add('animated', 'fadeIn');
                this.oldItems[this.oldCounter].style.display = 'flex';
                this.oldCounter++;
            } else {
                this.oldItems[this.oldCounter].classList.add('animated', 'fadeIn');
                this.oldItems[this.oldCounter].style.display = 'flex';              
                this.oldItems[this.oldCounter + 1].remove();
            }
        });

        this.newOfficer.querySelector('.plus').addEventListener('click', () => {
            if ( this.newCounter !== this.newItems.length - 2) {
                this.newItems[this.newCounter].classList.add('animated', 'fadeIn');
                this.newItems[this.newCounter].style.display = 'flex';
                this.newCounter++;
            } else {
                this.newItems[this.oldCounter].classList.add('animated', 'fadeIn');
                this.newItems[this.oldCounter].style.display = 'flex';
                this.newItems[this.newCounter + 1].remove();
            }
        });
    }

    hideItems() {
        this.oldItems.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });

        this.newItems.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        this.hideItems();
        this.bindTriggers();
    }
}
