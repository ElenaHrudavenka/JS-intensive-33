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

```js
const logIndexWithDelay = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => console.log(`Index: ${i}`), 3000*(i+1) );
    }
}
logIndexWithDelay([10, 12, 15, 21]);
```

```js
const logIndexWithDelay = (arr) => {
       arr.forEach((el, i) => setTimeout(() => console.log(`Index: ${i}`), 3000*(i+1) ));
}
logIndexWithDelay([10, 12, 15, 21]);
```


5) Прочитать про Top Level Await (можно ли использовать await вне функции async)

<u>Top level await</u>, <u>await верхнего уровня</u> или <u>глобальный await</u> работает только с ES модулями и явно указанными зависимостями.
Суть его использования в том, что в модуле, который импортирует данные из модуля в котором мы используем глобальный 
await для того, чтобы дождаться результатов каких-то асинхронных действий, не выполнится ни одной инструкции до тех пор, 
пока промис не разрешиться. Т.е. пока данные не готовы, модуль их использующий будет ждать. Т.о. при правильной реализации
мы не получим undefined вместо значения импортируемой переменной. Надеюсь, суть получилось изложить.

Используем для:
- ***Динамический путь зависимости*** - позволяет нам на  основании каких-то характеристик среды выполнения вычислять пути
зависимости. Например для разделения на продакшн/разработку версии; зависимости от среды выполнения, будь то браузер или
Node.js; локацию; языки и т.п. Опция динамического импорта также хорошо подходит для ленивой загрузки в сочетании с такими
фреймворками, как React и Vue.
```js
const strings = await import(`/i18n/${navigator.language}`);
 ```
- ***Инициализация ресурсов*** - помогает модулям получать готовые к использованию ресурсы и выбрасывать исключения в случае,
когда модуль не может быть использован. 
```js
const connection = await dbConnector()
```
- ***Запасной вариант*** - может использоваться для загрузки зависимости с реализацией запасного варианта.
```js
let jQuery;
try {
   jQuery = await import('https://cdn-a.example.com/jQuery');
} catch {
   jQuery = await import('https://cdn-b.example.com/jQuery');
}
```

БОНУС ЗАДАНИЕ
/* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */
fetchUrl('https://google/com&#39;)
.then(...)
.catch(...) // сatch должен сработать только после 5 неудачных попыток
получить содержимое страницы внутри fetchUrl

```js
function fetchUrl(url, count = 5) {
   return fetch(url)
           .then((response) => response.json())
           .then((data) => data)
           .catch(function (error) {
              console.log('Error:', error);
              if (count--) {
                 fetchUrl(url,count);
              } else {
                 return Promise.reject('Failed to fetch')
              }
           })
}
fetchUrl('https://pokeapi.co/api/v2/pokemon/ditto');
```
