"use strict";

var choose_something = function choose_something(main_select, main_select_item, main_select_body, main_select_current) {
  var select = document.querySelector(".".concat(main_select));
  var select_items = select.querySelectorAll(".".concat(main_select_item));
  var items = Array.from(select_items);
  select.addEventListener('click', function () {
    var select_body = this.querySelector(".".concat(main_select_body));
    this.classList.toggle('active');

    if (this.classList.contains('active')) {
      select_body.classList.add('open');
    } else if (!this.classList.contains('active')) {
      select_body.classList.remove('open');
    }
  });

  for (var _i = 0, _items = items; _i < _items.length; _i++) {
    var item = _items[_i];
    item.addEventListener('click', function () {
      var select = this.closest(".".concat(main_select));
      var text = this.innerText;
      var currentText = select.querySelector(".".concat(main_select_current));
      currentText.innerText = text;
    });
  }
};

var main_selector = 'select--time';
var main_selector_item = 'select__item--time';
var main_selector_body = 'select__body--time';
var main_selector_current = 'select__current--time';
choose_something(main_selector, main_selector_item, main_selector_body, main_selector_current);
var _main_selector = 'select--quantitive';
var _main_selector_item = 'select__item--quantitive';
var _main_selector_body = 'select__body--quantitive';
var _main_selector_current = 'select__current--quantitive';
choose_something(_main_selector, _main_selector_item, _main_selector_body, _main_selector_current);
/*
    choose_something -
    небольшой модуль,
    принимающий названия классов.
    Названия классов записываются в переменные-константы.
*/
//# sourceMappingURL=select.dev.js.map
