// 21
function sayHello(name) {
    return "Привет, " + name + "!";
}
console.log(sayHello("Самир"));


// 22
function cube(x) {
    return x * x * x;
}
console.log(cube(3));


// 23
function average(a, b, c) {
    return (a + b + c) / 3;
}
console.log(average(5, 4, 6));


// 24
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Али", "Рахимов"));


// 25
function showProduct(title, price) {
    console.log(title);
    console.log(price);
}
showProduct("Книга", 50);


// 26
function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isPositive(5));


// 27
function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isPositive(-3));


// 28
function isDivisible(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(10, 5));


// 29
function isDivisible(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(10, 3));


// 30
function discountPrice(price, discount) {
    return price - price * discount / 100;
}
console.log(discountPrice(200, 10));


// 31
function celsiusToFahrenheit(c) {
    return c * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(25));


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
console.log(getGrade(95));


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
console.log(getGrade(85));


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
console.log(getGrade(45));


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
console.log(countDigits(12345));


// 36
function repeat(text, count) {
    let result = "";

    for (let i = 0; i < count; i++) {
        result = result + text;
    }

    return result;
}
console.log(repeat("Hi ", 3));


// 37
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}
console.log(sumTo(5));


// 38
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}
console.log(factorial(5));


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
console.log(maxOfThree(10, 25, 15));


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
console.log(minOfThree(10, 25, 15));


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
console.log(isPrime(17));


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
console.log(isPrime(20));


// 43
function reverseString(text) {
    let result = "";

    for (let i = text.length - 1; i >= 0; i--) {
        result = result + text[i];
    }

    return result;
}
console.log(reverseString("hello"));


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
console.log(countVowels("hello"));


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
console.log(capitalize("hello"));


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
console.log(isPalindrome("level"));


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
console.log(isPalindrome("hello"));


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
console.log(findMax([5, 12, 8, 20]));


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
console.log(findMin([5, 12, 8, 20]));


// 50
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));


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
console.log(countEven([1, 2, 3, 4, 5, 6]));


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
console.log(countOdd([1, 2, 3, 4, 5, 6]));


// 53
function averageArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / arr.length;
}
console.log(averageArray([10, 20, 30, 40, 50]));


// 54
function multiplyAll(arr) {
    let result = 1;

    for (let i = 0; i < arr.length; i++) {
        result = result * arr[i];
    }

    return result;
}
console.log(multiplyAll([2, 3, 4]));


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
console.log(filterEven([1, 2, 3, 4, 5, 6]));


// 56
function getNames(users) {
    let names = [];

    for (let i = 0; i < users.length; i++) {
        names.push(users[i].name);
    }

    return names;
}

console.log(getNames([
    { name: "Али" },
    { name: "Самир" }
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
    { name: "Али" },
    { name: "Самир" }
], "Самир"));


// 58
function totalPrice(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total = total + products[i].price;
    }

    return total;
}

console.log(totalPrice([
    { name: "Книга", price: 50 },
    { name: "Ручка", price: 10 }
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
    { name: "Книга", price: 50 },
    { name: "Ноутбук", price: 800 }
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

console.log(getStatistics([10, 20, 30, 40]));
