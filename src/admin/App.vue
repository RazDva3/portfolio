<template lang="pug">
  .wrapper
    header.header
      .container.header-container
        .header__start
          .header__user
            img(src="/src/images/content/user.jpg").header__photo
          .header__name Владимир Астаханов
          .header__panel 
            a.panel(href="#") Панель администрирования
        .header__exit 
          a.exit-btn(href="#") Выйти
    section.switch-section
      .container.switch-container
        ul.switch__menu
          - var switchBlocks = ['Обо мне', 'Работы', 'Отзывы']
          each item in switchBlocks
            li.switch__item.active
              .switch__link #{item}
    section.block-section
      .container.block-container
        .block-title
          .block-title-name Блок «Обо мне»
          .block-add-group
            button.button-add.button-first +
            .block-title-group Добавить группу
        ul.block-menu
          - var blocks = ['', '', '']
          each item in blocks
            li.block__item
              form.form__elem
                .form-block__container
                  input(type="text" placeholder="Название новой группы").form-block__input.form-block__input--group
                  .form-block__underline
                  .form-block__skills
                    input(type="text" placeholder="Новый навык").form-block__input.form-block__input--skill
                    .form-block__input--percent
                      input(type="text").form-block__input.input--percent 
                    .form-button-add
                      button.button-add 
                        h1 +
                    .form-block__icons
                      img(src="/src/images/icons/tick.svg").form-block__icon
                      img(src="/src/images/icons/cross.svg").form-block__icon
</template>