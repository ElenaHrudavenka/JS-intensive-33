# JS-intensive-33 (homeWork2)

### Задание 1 – Создать объект counter всеми возможными способами;
    const counter = {};
    
    const counter = Object.create({});

    const counter = new Object();


### Задание 2 – Скопировать объект counter всеми возможными способами;
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
        counterCopy3.key = counter.key
    }
    
    // глубокое (если нет функций, зачений undefined, NaN или Date)
    const counterCopy4 =  JSON.parse(JSON.stringify(counter))

    // Готовые решения: библиотеки Lodash (_.isEqual( value1, value2)), deepEqual и.т.п

### Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
    // Function declaration
    function makeCounter() {
        
    };
## Бонус
### Задание 1 – Написать функцию глубокого сравнения двух объектов:

    const obj1 = {
        here: {
        is: "on",
        other: "3",
        },
        object: "Y",
    };

    const obj2 = {
        here: {
        is: "on",
        other: "2",
        },
        object: "Y",
    };

    const deepEqual = (obj1, obj2) => {
        if (obj1 instanceof Array && obj2 instanceof Array) {
            if (obj1.length !== obj2.length) return false;
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
    deepEqual(obj1,obj2)

## Бонус
### Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:

    function reverseStr(str) {
    return str.split('').reverse().join('')
    }
