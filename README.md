# JS-intensive-33 (homeWork2)

### Задание 1 – Создать объект counter всеми возможными способами;
```js
    const counter = {};
    
    const counter = Object.create({});

    const counter = new Object();
```

### Задание 2 – Скопировать объект counter всеми возможными способами;
```js
    const counter = {
        count: 33,
        step: 4,
    };

    // поверхностное
    const counterCopy = { ...counter };

    // поверхностное, т.к. методы свойства, значения которых объекты, скопируются по ссылке.
    const counterCopy1 = Object.assign({}, counter); 

    const counterCopy2 = structuredClone(counter);

    // поверхностное
    const counterCopy3 = {}
    for (let key in counter) {
        counterCopy3[key] = counter[key]
    }
    
    // глубокое (если нет функций, зачений undefined, NaN или Date)
    const counterCopy4 =  JSON.parse(JSON.stringify(counter))

    // Готовые решения: библиотеки Lodash (_.isEqual( value1, value2)), deepEqual и.т.п
```
### Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
```js
    // Function declaration
    function makeCounter() {
        let count = 0;
        function counter(value) {
            if (!value) {
                return ++count;
            } else {
                count = value;
            }
        }
        return counter;
    };
    const myCounter = makeCounter();

    myCounter(2); //2
    myCounter(); //3
```
```js
    // Function expression
    const makeCounter = function() {
        let count = 0;
        function counter(value) {
            if (!value) {
                return ++count;
            } else {
                count = value;
            }
        }
        return counter;
    };
```
```js
    // Arrow function
    const makeCounter = () => {
        let count = 0;
        function counter(value) {
            if (!value) {
                return ++count;
            } else {
                count = value;
            }
        }
        return counter;
    };
```
```js
    //Constructor function
    function makeCounter() {
       this.count = 0;
       this.counter = function () {
           return ++this.count;
       }
    }
    const myCounter = new makeCounter();
    console.log(myCounter.counter()); //1
    console.log(myCounter.counter()); //2
```
```js    
    //IIFE (в данном примере первый вызов вернет функцию, а второй - результат
    //ее выполнения. Такая реализация не имеет смысла, просто для примера.
    const myCounter = (function() {
        let count = 0;
        function counter(value) {
            if (!value) {
                return ++count;
            } else {
                count = value;
            }
        }
        return counter;
    })()()
    console.log(myCounter) //1
```
```js
    // Anonymous function (передана как callback), в FE (значение для переменной)
    [1,3,5,8].map(member => ++member)
```
```js
    /* Named function expressions - синтаксис посмотрела, но т.к. основная идея,
    на сколько я поняла, это возможность такой функции обращаться к самой себе 
    по внутреннему имени, где бы она ни находилась и имя NFE нельзя перезаписать.  
    Для makeCounter не пришла идея, для чего можно ее использовать. 
    Пример с рекурссией.*/

    let f = function factorial(n) {
        return n ? n*factorial(n-1) : 1;
    };

    let newF = f;  // скопировали ссылку на функцию-факториал в g
    f = null;

    console.log( newF(5) ); // 120
``` 

## Бонус
### Задание 1 – Написать функцию глубокого сравнения двух объектов:
```js
    const obj1 = {
    here: {
        is: "on",
        other: "3",
    },
    object: [1,2,[2]],
};

const obj2 = {
    here: {
        is: "on",
        other: "3",
    },
    object: [1,2,[]],
};

const deepEqual = (obj1, obj2) => {
    if (obj1 instanceof Array && obj2 instanceof Array) {
        if (obj1.length !== obj2.length) return false;
        for (let i = 0; i < obj1.lenth; i++) {
            if (typeof obj1[i] === 'object' && typeof obj2[i] === 'object') {
                const compareResult = deepEqual(obj1[key], obj2[key]);
                if (!compareResult) return false;
            } else {
                return obj1[i] === obj2[i];
            }
        }
    }
    if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !==null && obj2 !== null) {
        for(let key in obj1) {
            if (!obj2.hasOwnProperty(key)) return false;
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                const compareResult = deepEqual(obj1[key], obj2[key]);
                if (!compareResult) return false;
            } else {
                if (obj1[key] !== obj2[key]) return false;
            }
        }
        return true
    } else {
        return obj1 === obj2;
    }
};
deepEqual(obj1,obj2); //false
```
## Бонус
### Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:
```js
    function reverseStr(str) {
    return str.split('').reverse().join('')
    }
```
