  const just_pagination = document.querySelector('.cm-just-pagination');
  const children_items = Array.from(just_pagination.children);
  const next = document.querySelector('.cm-paginator__button--next');

  /*Скрываем часть пагинации, после загрузки ДОМ*/
  document.addEventListener('DOMContentLoaded', function() {
    const count_items = children_items.length;

    for (const child_item of children_items) {
      let count = +(child_item).getAttribute('data-count');

      if ((count > 3) && (count < count_items)) {
        const target_item = document.querySelector(`[data-count='${count}']`);
        target_item.classList.add('invisibility');
      }

      count++;
    }
  });

  /*Функция выбора текущего элемента*/
  const showCurrentItem = (e) => {
    const current_item = e.target;
    const current = e.target.nodeName;

    for (const child_item of children_items) {
      child_item.classList.remove('cm-just-pagination__button--active');
    }

    if (current === 'A') {
      current_item.classList.add('cm-just-pagination__button--active');
    } else return;
  }

  /*Функция для кнопки вперед*/
  for (const child_item of children_items) {
    child_item.addEventListener('click', function() {
      let count = +(this).getAttribute('data-count') + 1;

      next.addEventListener('click', () => {
        const count_items = children_items.length;

        for (const child_item of children_items) {
          child_item.classList.remove('cm-just-pagination__button--active');
        }

        if (count > count_items) {
          count = 1;

          document
          .querySelector(`[data-count='${count + 1}']`)
          .classList
          .remove('invisibility');

          document
          .querySelector(`[data-count='${count + 2}']`)
          .classList
          .remove('invisibility');

          for (const child_item of children_items) {
            child_item.classList.remove('visibility');
          }
        }

        if (count > 3) {
          document
          .querySelector(`[data-count='${count - 1}']`)
          .classList
          .add('invisibility');

          document
          .querySelector(`[data-count='${count - 2}']`)
          .classList
          .add('invisibility');

          const target_item = document.querySelector(`[data-count='${count}']`);
          target_item.classList.add('visibility');
        }

        const target_item = document.querySelector(`[data-count='${count}']`);
        target_item.classList.add('cm-just-pagination__button--active');

        count++;
      });
    });
  }

  just_pagination.addEventListener('click', showCurrentItem);