/*
JavaScript test tasks:

1) Чтение кода (beginner level):
Incorrect:
<!-- Google Tag Manager -->
<script>(function(w,d,s,l){w[l]=w[l]||[];w[l].push('gtm.start':
new Date().getTime(),event:'gtm.js');var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l?'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,d);
})(window,document,'script','dataLayer','GTM-T333LJ');</script>
<!-- End Google Tag Manager -->

Сколько ошибок в коде? Дайте исправленный код и комментарии к каждой ошибке. 


Correct:
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T333LJ');</script>
<!-- End Google Tag Manager →

i - добавлена в аргументы функции, так как далее по коду будет вызываться в (window,document,'script','dataLayer','GTM-T333LJ');

Это закрытие и вызов IIFE , поэтому передаваемые здесь вещи соответствуют именам параметров в начале.

IIFE означает немедленно вызываемое функциональное выражение , т. е. функциональное выражение , которое вызывается в то же время, когда оно определено, обычно без сохранения ссылки на себя в остальной части кода .

{ } - добавил фигурные скобки, так как Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива. 

: - ‘ ? ‘ был изменен на ‘ : ‘ , так как это Условный (тернарный) оператор - единственный оператор в JavaScript, принимающий три операнда: условие, за которым следует знак вопроса (?), затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:), и, наконец, выражение, которое выполняется, если условие ложно. Он часто используется в качестве укороченного варианта условного оператора if.

F - заменяет d, так как мы присвоили элемент d переменной F и хотим при помощи метода NodeParent.insertBefore() - добавить элемент в список дочерних элементов родителя перед указанным элементом.
*/

/* - - - - - - - - - - */

/* 
2) Конструирование кода (mature level):
Задание. Написать код для сайта https://www.firebirdtours.com/


Если ID Google Analytics соответствует номеру “UA-49112570-1” и номер телефона Австралии на сайте соответствует “+61 2 6188 8118” то при клике на этот номер телефона изменить номер телефона австралии на “+06-1111-1111” а также в куку с именем “ScrollTracking” записать текущую глубину промотки скролла страницы в процентах.
*/





