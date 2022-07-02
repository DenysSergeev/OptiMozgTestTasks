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

window.addEventListener("load", () => {
  const DEFAULT_GOOGLE_ID = "UA-49112570-1";
  const DEFAULT_AU_NUMBER = "+61 2 6188 8118";
  const NUMBER_TO_REPLACE = "+06-1111-1111";
  const CURRENT_GOOGLE_ID_NODE = document.getElementById("google-analytics-id");
  const PHONE_NUMBER_NODE = document.getElementById("phone-number");

  PHONE_NUMBER_NODE.addEventListener("click", handlerNumberClick);

  function handlerNumberClick(e) {
    const targetPhoneNumber = e.target.textContent;
    const googleId = CURRENT_GOOGLE_ID_NODE.dataset.id;
    const isNeedToReplaceNumber =
      targetPhoneNumber === DEFAULT_AU_NUMBER && googleId === DEFAULT_GOOGLE_ID;

    if (isNeedToReplaceNumber) {
      PHONE_NUMBER_NODE.textContent = NUMBER_TO_REPLACE;

      updateScrollTrackingCookie();
    }
  }

  function updateScrollTrackingCookie() {
    const onePercentWindowHeight = window.innerHeight * 0.1;
    const scrollY = window.scrollY;
    const scrollDepth = (scrollY / onePercentWindowHeight).toFixed(0);

    document.cookie = `scrollTracking=${scrollDepth}`;
  }

  window.addEventListener("unload", unsubscribe);

  function unsubscribe() {
    PHONE_NUMBER_NODE.removeEventListener("click", handlerNumberClick);
  }
});


/*
3) Доработка кода (advanced level):
Данный скрипт исполняется в GTM и внедряется в google analytics методом custom Task.
Скрипт высылает данные о поведении пользователя на сервер Optimozg и затем в Bigquery(файл bq.php обрабатывает и пересылает данные). Данные на сервер Optimozg приходят исправно, но данные в Google Analytics не доходят. 
В чем причина? 
Как это исправить?
Подсказка:
(протестируйте код на своем экземпляре сайта с GTM)


function(){return function(tracker){if("undefined"===typeof tracker.get("BigQueryStreaming")){var f=tracker.get("sendHitTask"),h=function(){function d(c){var a=!1;try{document.createElement("img").src=e(!0)+"?"+c,a=!0}catch(k){}
return a}
function e(c){var a="https://test.optimozg.com/bq/bq-test.php";c||(a+="?tid="+encodeURIComponent(tracker.get("trackingId")));
return a}
return{send:function(c){var a;if(!(a=2036>=c.length&&d(c))){a=!1;try{a=navigator.sendBeacon&&navigator.sendBeacon(e(),c)}catch(g){}}
if(!a){a=!1;var b;try{window.XMLHttpRequest&&"withCredentials" in(b=new XMLHttpRequest)&&(b.open("POST",e(),!0),b.setRequestHeader("Content-Type","text/plain"),b.send(c),a=!0)}catch(g){}}
return a||d(c)}}}();tracker.set("sendHitTask",function(d){h.send(d.get("hitPayload"));tracker.set("BigQueryStreaming",!0)})}}}

*/