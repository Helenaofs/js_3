// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cubeNumber(num) {
    return num ** 3
}
console.log(cubeNumber(2) + cubeNumber(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


function getSalaryWithoutTaxes(num) {
    const userSalary = prompt('Введите размер Вашей зарабатной платы');
    if (isNaN(userSalary)) {
        alert ('Вы ввели не число! Попробуйте еще раз');
        return 0;
    } else {
        const userSalaryWithoutTaxes = userSalary - (userSalary * 0.13);
        return userSalaryWithoutTaxes;
    }
}
const yourSalary = getSalaryWithoutTaxes();
console.log(`Размер заработной платы за вычетом налогов равен ${yourSalary}`);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function maxNum() {
    const num1 = +prompt('Введите первое число');
    const num2 = +prompt('Введите второе число');
    const num3 = +prompt('Введите третье число');
    if (num1 >+ num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
const result = maxNum();
console.log(`Максимальное значение среди этих чисел ${result}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let sum = (num1, num2) => num1 + num2;
console.log(sum(2, 6));

function diff(num1, num2) {
    if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}

console.log(diff(13, 13));
console.log(diff(8, 7));
console.log(diff(3, 1));

let mult = (num1, num2) => num1 * num2;
console.log(mult(2, 6));

let div = (num1, num2) => num1 / num2;
console.log(div(2, 6));

