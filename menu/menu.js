/*Скрипт компонента "Меню"*/

class Menu {
    constructor(selector) {
        this.list_box = document.createElement(selector);
        this.items = [];
        this.target_list = [];
        this.wrapper = null;
    }

    createWrapperList(attr_name, attr_value, parent_name) {
        this.list_box.setAttribute(attr_name, attr_value);
        this.wrapper = document.querySelector(parent_name);
        this.wrapper.prepend(this.list_box);

        return this;
    }

    getWrapperList() {
        return this.wrapper;
    }

    addSpecifiedClass(specified_class) {
        this.list_box.classList.add(specified_class);
        return this;
    }

    renderList(specified_name) {
        const width = window.innerWidth;

        if (width < 1150) {
            this.items = ['О нас', 'Услуги', 'Вакансии', 'Новости', 'Соглашения', 'Войти', 'Зарегистрироваться'];
            if (this.list_box.className.indexOf(specified_name) > - 1) {
                this.list_box.classList.remove(specified_name);
            }
        }
        
        if (width >= 1150) {
            this.items = ['О нас', 'Услуги', 'Вакансии', 'Новости', 'Соглашения'];
            this.list_box.classList.add(specified_name);
        }

        for (let value of this.items) {
            var link = document.createElement('a');
            link.setAttribute('class', 'nav-link cm-nav-link');
            link.innerHTML = value;

            var item = document.createElement('li');
            item.setAttribute('class', 'cm-nav__item');
            item.prepend(link);
            this.target_list.push(item);
        }

        return this;
    }

    moveItemsToWrapper() {
        for (let item of this.target_list) {
            this.list_box.prepend(item);
        }

        return this;
    }

    readyHiddenMenu(hidden_class) {
        this.list_box.classList.add(hidden_class);
        const call = document.querySelector('.menu-call');

        return call;
    }

    getInnerList() {
        return this.list_box;
    }
}

const menu = new Menu('ul');
menu
    .createWrapperList('class', 'nav cm-nav', '.header__wrapper')
    .addSpecifiedClass('header__visible')
    .renderList('header__visible')
    .moveItemsToWrapper();

menu
    .readyHiddenMenu('cm-nav--visible')
    .addEventListener('click', function() {
        const list = menu.getInnerList();
        list.classList.toggle('cm-nav--visible');
    });