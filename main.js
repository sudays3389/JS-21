// 21
function sayHello(name) {
    return "Привет, " + name + "!";
}
console.log(sayHello("Рустам"));


// 22
function cube(x) {
    return x * x * x;
}
console.log(cube(7));


// 23
function average(a, b, c) {
    return (a + b + c) / 3;
}
console.log(average(13, 8, 21));


// 24
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Давид", "Каримов"));


// 25
function showProduct(title, price) {
    console.log(title);
    console.log(price);
}
showProduct("Телефон", 730);


// 26
function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isPositive(42));


// 27
function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isPositive(-18));


// 28
function isDivisible(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(56, 7));


// 29
function isDivisible(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(37, 6));


// 30
function discountPrice(price, discount) {
    return price - price * discount / 100;
}
console.log(discountPrice(850, 17));


// 31
function celsiusToFahrenheit(c) {
    return c * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(31));


// 32
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else {
        return "F";
    }
}
console.log(getGrade(96));


// 33
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else {
        return "F";
    }
}
console.log(getGrade(78));


// 34
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else {
        return "F";
    }
}
console.log(getGrade(52));


// 35
function countDigits(number) {
    let count = 0;

    if (number === 0) {
        return 1;
    }

    if (number < 0) {
        number = -number;
    }

    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }

    return count;
}
console.log(countDigits(847291));


// 36
function repeat(text, count) {
    let result = "";

    for (let i = 0; i < count; i++) {
        result = result + text;
    }

    return result;
}
console.log(repeat("Yo ", 6));


// 37
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}
console.log(sumTo(12));


// 38
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}
console.log(factorial(7));


// 39
function maxOfThree(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;
}
console.log(maxOfThree(34, 19, 47));


// 40
function minOfThree(a, b, c) {
    let min = a;

    if (b < min) {
        min = b;
    }

    if (c < min) {
        min = c;
    }

    return min;
}
console.log(minOfThree(29, 64, 11));


// 41
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(31));


// 42
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(42));


// 43
function reverseString(text) {
    let result = "";

    for (let i = text.length - 1; i >= 0; i--) {
        result = result + text[i];
    }

    return result;
}
console.log(reverseString("world"));


// 44
function countVowels(text) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (
            text[i] === "a" ||
            text[i] === "e" ||
            text[i] === "i" ||
            text[i] === "o" ||
            text[i] === "u"
        ) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("javascript"));


// 45
function capitalize(text) {
    if (text[0] === "a") return "A" + text.slice(1);
    if (text[0] === "b") return "B" + text.slice(1);
    if (text[0] === "c") return "C" + text.slice(1);
    if (text[0] === "d") return "D" + text.slice(1);
    if (text[0] === "e") return "E" + text.slice(1);
    if (text[0] === "f") return "F" + text.slice(1);
    if (text[0] === "g") return "G" + text.slice(1);
    if (text[0] === "h") return "H" + text.slice(1);
    if (text[0] === "i") return "I" + text.slice(1);
    if (text[0] === "j") return "J" + text.slice(1);
    if (text[0] === "k") return "K" + text.slice(1);
    if (text[0] === "l") return "L" + text.slice(1);
    if (text[0] === "m") return "M" + text.slice(1);
    if (text[0] === "n") return "N" + text.slice(1);
    if (text[0] === "o") return "O" + text.slice(1);
    if (text[0] === "p") return "P" + text.slice(1);
    if (text[0] === "q") return "Q" + text.slice(1);
    if (text[0] === "r") return "R" + text.slice(1);
    if (text[0] === "s") return "S" + text.slice(1);
    if (text[0] === "t") return "T" + text.slice(1);
    if (text[0] === "u") return "U" + text.slice(1);
    if (text[0] === "v") return "V" + text.slice(1);
    if (text[0] === "w") return "W" + text.slice(1);
    if (text[0] === "x") return "X" + text.slice(1);
    if (text[0] === "y") return "Y" + text.slice(1);
    if (text[0] === "z") return "Z" + text.slice(1);

    return text;
}
console.log(capitalize("javascript"));


// 46
function isPalindrome(text) {
    let reverse = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reverse = reverse + text[i];
    }

    if (text === reverse) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("radar"));


// 47
function isPalindrome(text) {
    let reverse = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reverse = reverse + text[i];
    }

    if (text === reverse) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("computer"));


// 48
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
console.log(findMax([17, 42, 9, 31]));


// 49
function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}
console.log(findMin([28, 13, 51, 7]));


// 50
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}
console.log(sumArray([8, 15, 23, 4, 19]));


// 51
function countEven(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}
console.log(countEven([7, 14, 25, 32, 41, 56]));


// 52
function countOdd(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
}
console.log(countOdd([12, 19, 24, 37, 46, 53]));


// 53
function averageArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / arr.length;
}
console.log(averageArray([14, 27, 35, 48, 62]));


// 54
function multiplyAll(arr) {
    let result = 1;

    for (let i = 0; i < arr.length; i++) {
        result = result * arr[i];
    }

    return result;
}
console.log(multiplyAll([4, 7, 3]));


// 55
function filterEven(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}
console.log(filterEven([9, 16, 23, 38, 45, 72]));


// 56
function getNames(users) {
    let names = [];

    for (let i = 0; i < users.length; i++) {
        names.push(users[i].name);
    }

    return names;
}

console.log(getNames([
    { name: "Рустам" },
    { name: "Фарид" },
    { name: "Марат" }
]));


// 57
function findByName(users, name) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            return users[i];
        }
    }
}

console.log(findByName([
    { name: "Данил" },
    { name: "Фарид" },
    { name: "Илья" }
], "Фарид"));


// 58
function totalPrice(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total = total + products[i].price;
    }

    return total;
}

console.log(totalPrice([
    { name: "Тетрадь", price: 35 },
    { name: "Наушники", price: 420 },
    { name: "Рюкзак", price: 680 }
]));


// 59
function getDiscountedProducts(products) {
    let result = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].price >= 100) {
            result.push(products[i]);
        }
    }

    return result;
}

console.log(getDiscountedProducts([
    { name: "Ручка", price: 25 },
    { name: "Монитор", price: 950 },
    { name: "Клавиатура", price: 180 }
]));


// 60
function getStatistics(numbers) {
    let sum = 0;
    let max = numbers[0];
    let min = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];

        if (numbers[i] > max) {
            max = numbers[i];
        }

        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    let average = sum / numbers.length;

    return {
        sum: sum,
        average: average,
        max: max,
        min: min
    };
}

console.log(getStatistics([184721, 9360, 475, 83]));