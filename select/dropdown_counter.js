    /*
        Скрипт, описывающий
        бесконечный счетчик
    */
    document.addEventListener('DOMContentLoaded', splitInnerText);
    /*
        Функция для предустановки
        начального значения счетчика
    */
    const init = (counter_name, count_default) => {
        const counter = document.querySelector(`.${counter_name}`);

        document.addEventListener('DOMContentLoaded', () => {
        const counter_value = counter.querySelector('.counter__value');
        counter_value.innerHTML = count_default;
        });
    }

    /*
        Функция, описывающая работу счетчика
    */
    const counter = (counter_block) => {
        const minus_name = counter_block.querySelector('.counter__minus');
        const show_value = counter_block.querySelector('.counter__value');
        const plus_name = counter_block.querySelector('.counter__plus');
        /*Начальное значение count*/
        let count = 2;

        minus_name.addEventListener('click', () => {
        count--;
        if (count < 0) {
            show_value.style.color = 'rgba(220, 53, 69, 0.5)';
        }
        show_value.innerHTML = count;
        });

        plus_name.addEventListener('click', () => {
        count++;
        if (count > 0) {
            show_value.style.color = '#66d2ea';
        }
        show_value.innerHTML = count;
        });

        show_value.addEventListener('click', () => {
        count = 0;

        show_value.style.color = '#1f2041';
        show_value.innerHTML = count;
        });
    }

    const current_text = Array.from(document.querySelectorAll('.counter__text--room-of-rest'));
    console.log(current_text);
    console.log(current_text[0]);
    const default_values = [
        {start: 2},
        {start: 2},
        {start: 0}
    ];

    /*
        Формирует на выходе массив из
        DOM HTML Collection и массива объектов
        с начальным количеством товара 
    */
    function splitInnerText() {
        const transform_text = [];

        for (let j = 0; j < 3; j++) {
        const this_text = current_text[j].innerHTML;
        const start_value = default_values[j].start;
        const fill_item = selectFill(this_text, start_value);

        transform_text.push(fill_item);
        }
        
        const select_current_text = document.querySelector('.select__current--rewritable');
        select_current_text.innerHTML = transform_text.join(', ');
    }

    /*
        Принимает параметры для
        склеивания в строку
    */
    function selectFill(current, def_value) {
        return def_value + ' ' + current;
    }

    /*
        При определенных условиях,
        открываем и закрываем компонент
    */
    const select_complicated = document.querySelector('.select--complicated');
    select_complicated.addEventListener('click', function(e) {
        console.log(e.target);
        const select_body = select_complicated.querySelector('.select__body--all-inclusive');
        console.log(select_body);
        const target = e.target;
        console.log(target);
        this.classList.add('is-active');
        console.log(this);
        if (this.classList.contains('is-active')) {
            console.log('Добавился активный класс');
            select_body.classList.add('is-open');
        }

        if (target.classList.contains('counter__text--room-of-rest')) {
            console.log('Выполнилось очередное условие');
            e.preventDefault();
            select_body.classList.remove('is-open');
            if (select_complicated.classList.contains('is-active')) {
                select_complicated.classList.remove('is-active');
            }
        }
    });

    const counters = [
        {
        counter_box_name: 'counter--deftop',
        start: 2
        },
        {
        counter_box_name: 'counter--defmiddle',
        start: 2
        },
        {
        counter_box_name: 'counter--last',
        start: 0
        }
    ];

    for (const prop of counters) {
        let counter_box = document.querySelector(`.${prop.counter_box_name}`);
        init(prop.counter_box_name, prop.start);

        counter(counter_box);
    }