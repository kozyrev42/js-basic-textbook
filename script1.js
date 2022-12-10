"use strict";

/* обьявление переменных */
let a = 1;
let b = 2;
let c;
c = a + b;

/* математический приоретет */
let d = 2 * (2 + 4 * (3 + 1)); // 36

/* конкотиначия строк */
let str = 'bob ' + 'marly';
// alert(str); 

/* функция для подсчёта символов */
// alert(str.length);  // .length - считает количество символов в строке

/* косые кавычки */
let myname = 'Иван';
let fio = `Иванов ${myname} Иванович`;
// alert (fio);
// console.log(fio);

// Значение NaN (Not-A-Number) обозначает не число. 
// Такое значение получается тогда, когда вы пытаетесь делать математические операции не с числами, а с чем-то другим.
// alert('abc' * 3); // выведет NaN

// бесконечность Infinity
// alert( 1 / 0); // выведет Infinity

// константы - В них можно записывать данные только один раз, а затем их значения нельзя изменять. 
const PI = 3.14;
let S;
let r;
r = 1;
S = PI * r**2
// alert(S);

// Преобразование к числу, Number()
let q = Number('2'); // в переменную запишется число 2
let w = Number('5'); // в переменную запишется число 3
//alert(q + w);

// Преобразование к строке, функция String()
let num2 = 2;
let num3 = 3;
// alert(String(num2) + String(num3));  // выведет '23'

// Выделение чисел
let num1 = parseFloat('12.5px');
// alert(num1); // выведет 12.5

// Получение символов строки
let stroka = 'abcde';
let num = 2; // номер символа в переменной
// alert(stroka[num]); // выведет 'd'

// получение последнего символа
let stroka2 = 'abcdez';
let last = stroka2.length - 1; // номер последнего символа
//alert(stroka2[last]); // выведет 'z'


// Дана строка '12345'. Найдите сумму цифр этой строки.
let stroka3 = '12345';
let summa = 0;
for (let i = 0; i < stroka3.length; i++) { 
    summa = summa + Number(stroka3[i]);
    //console.log(summa);
}
//console.log(summa);


// Дано число 12345. Переставьте цифры этого числа в обратном порядке.
let num12345 = 12345;
let stroka_12345 = String(num12345);  // '12345'
let new_stroka = '';
// описание цикла:
// i равно последнему индексу строки
// цикл работает, пока i больше или равно 0
// уменьшаем на 1 после каждой итерации
for (let i = stroka_12345.length - 1; i >= 0; i--) { 
    new_stroka = new_stroka + stroka_12345[i];
}
// преобразуем в число
let new_num54321 = Number(new_stroka);
console.log(new_num54321);
