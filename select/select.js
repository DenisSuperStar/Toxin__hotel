
const choose_something = (
    main_select,
    main_select_item,
    main_select_body,
    main_select_current
) => {
    const select = document.querySelector(`.${main_select}`);
    const select_items = select.querySelectorAll(`.${main_select_item}`);
    const items = Array.from(select_items);

    select.addEventListener('click', function() {
    const select_body = this.querySelector(`.${main_select_body}`);

    this.classList.toggle('active');
        if (this.classList.contains('active')) {
            select_body.classList.add('open');
        } else if (!this.classList.contains('active')) {
            select_body.classList.remove('open');
        }
    });

    for (const item of items) {
        item.addEventListener('click', function() {
            const select = this.closest(`.${main_select}`);
            const text = this.innerText;
            const currentText = select.querySelector(`.${main_select_current}`);

            currentText.innerText = text;
        });
    }
}

const main_selector = 'select--time';
const main_selector_item = 'select__item--time';
const main_selector_body = 'select__body--time';
const main_selector_current = 'select__current--time';

choose_something(
    main_selector,
    main_selector_item,
    main_selector_body,
    main_selector_current
);

const _main_selector = 'select--quantitive';
const _main_selector_item = 'select__item--quantitive';
const _main_selector_body = 'select__body--quantitive';
const _main_selector_current = 'select__current--quantitive';

choose_something(
    _main_selector,
    _main_selector_item,
    _main_selector_body,
    _main_selector_current
);

/*
    choose_something -
    небольшой модуль,
    принимающий названия классов.
    Названия классов записываются в переменные-константы.
*/