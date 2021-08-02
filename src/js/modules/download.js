export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path, downloadItem) {
        const link = document.createElement('a');

        link.setAttribute('href', path);
        link.setAttribute('download', 'file');

        link.style.display = 'none';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.downloadItem(this.path);
            });
        });
    }
}
