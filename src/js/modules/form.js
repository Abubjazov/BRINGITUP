export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this.message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся.',
            failure: 'Извините, похоже что-то пошло не так... Обновите страницу и попробуйте ещё раз',
            spinner: 'assets/img/spinner.gif',
            ok:      'assets/img/ok.png',
            fail:    'assets/img/fail.png'
        };
        this.path = 'assets/question.php';
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
    }

    clearInputs() {
        this.inputs.forEach(item => {
            item.value = '';

        });
    }

    init() {
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 20px;
                    font-size: 18px;
                    color: grey;
                `;
                statusMessage.textContent = this.message.loading;

                let statusImg = document.createElement('img');
                statusImg.setAttribute('src', this.message.spinner);
                statusImg.classList.add('animated', 'fadeInUp');

                item.parentNode.appendChild(statusMessage);
                item.parentNode.appendChild(statusImg);

                const formData = new FormData(item);

                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = this.message.success;
                        statusImg.setAttribute('src', this.message.ok);
                    })
                    .catch(() => {
                        statusMessage.textContent = this.message.failure;
                        statusImg.setAttribute('src', this.message.fail);
                    })
                    .finally(() => {                        
                        setTimeout(() => {
                            this.clearInputs();
                            statusMessage.remove();
                            statusImg.remove();
                        }, 3000);
                    });
            });
        });
    }
}
