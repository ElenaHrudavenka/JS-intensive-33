# JS-intensive-33

Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли):

```js
    let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
    });
    
    promiseTwo
    .then((res) => {
    return res + "b";
    })
    .then((res) => {
    return res + "с";
    })
    .finally((res) => {
    return res + "!!!!!!!";
    })
    .catch((res) => {
    return res + "d";
    })
    .then((res) => {
    console.log(res);
    });
    
    // 'abc'
```
```js
    function doSmth() {
    return Promise.resolve("123");
    }
    
    doSmth()
    .then(function (a) {
    console.log("1", a); //
    return a;
    })
    .then(function (b) {
    console.log("2", b);
    return Promise.reject("321");
    })
    .catch(function (err) {
    console.log("3", err);
    })
    .then(function (c) {
    console.log("4", c);
    return c;
});
// 1 123 -> 2 123 -> 3 321 -> 4 undefined
```
3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
   Входные данные: [10, 12, 15, 21]

4) Прочитать про Top Level Await (можно ли использовать await вне функции async)

БОНУС ЗАДАНИЕ
/* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */
fetchUrl('https://google/com&#39;)
.then(...)
.catch(...) // сatch должен сработать только после 5 неудачных попыток
получить содержимое страницы внутри fetchUrl
