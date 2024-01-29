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
        return obj1 === obj2
    }
};

deepEqual(obj1,obj2)
