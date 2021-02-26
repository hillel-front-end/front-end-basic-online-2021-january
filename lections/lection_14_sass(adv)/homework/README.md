# Домашняя работа
* https://webdesign-master.ru/blog/tools/2016-06-04-sass.html


# Практика

 1) Задача - 1<br />
 1.1 подключить файл с шрифтовыми картинками из сервиса iconmoon `<link rel="stylesheet" href="https://i.icomoon.io/public/temp/a4c4c6bfb9/UntitledProject/style.css">`<br /><br />
 1.2 есть следующий набор кодов картинок: `e911, e915, e917, e918, e91b, e94c, e916(packman)`<br />
 (как добавить на страницу http://joxi.ru/p27xpPdHWOWa4A конкретную картинку)<br /><br />
 1.3 Реализовать Map сущьность которая будет в себе хранить список картинок вида
 `имя(ключ): \код-картинки(значение)`<br /><br />
 1.4 реализовать цикл @each для генерации сss класов отображения картинок.<br /> Например
 `$icons:(packman: "\e916" )` при использовании с @each($key, $value in $icons){..}должен получится вот такой css класс 
 `.icon--packman { 
    &:after {
        content: '\e916';
        font-family: 'IcoMoon';
        font-size: 20px;
    }
 }`
<br /><br />
 1.5) Cоздать html элемент `<span class="icon--packman"></span>`  увидеть картинку<br />
 (Ваша задача сделать одну мапу с набором иконок)<br /><br />

 1.6 (**) Реализовать условие что создадутся все классы кроме packman

 2. При помощи цикла @for создать 4 css класса `block-size-x2, block-size-x3, block-size-x4, block-size-x5`

    * Каждный из них должен увеличивать высота и ширину, шрифт в: 2раза(block-size-x2), 3раза(block-size-x3), 4раза(block-size-x4), 5раз(block-size-x5)
