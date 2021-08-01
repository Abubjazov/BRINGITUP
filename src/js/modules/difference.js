export default class Difference {
    constructor(oldOfficer, newOfficer, officerItems){
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);

        try {
            this.oldItems = this.oldOfficer.querySelectorAll(officerItems);
            this.newItems = this.newOfficer.querySelectorAll(officerItems);
        } catch(e) {}

        this.officerItems = officerItems;
        this.oldCounter = 0;
        this.newCounter = 0;
    }



    bindTrigger(officer, counter, items) {
        try {
            officer.querySelector('.plus').addEventListener('click', () => {
                if ( counter !== items.length - 2) {
                    items[counter].classList.add('animated', 'fadeIn');
                    items[counter].style.display = 'flex';
                    counter++;
                } else {
                    items[counter].classList.add('animated', 'fadeIn');
                    items[counter].style.display = 'flex';              
                    items[counter + 1].remove();
                }
            });
        } catch(e) {}
    }

    hideItems(items) {
        try {
            items.forEach((item, i, arr) => {
                if (i !== arr.length - 1) {
                    item.style.display = 'none';
                }
            });
        } catch(e) {}
    }

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTrigger(this.oldOfficer, this.oldCounter, this.oldItems);
        this.bindTrigger(this.newOfficer, this.newCounter, this.newItems);
    }
}
