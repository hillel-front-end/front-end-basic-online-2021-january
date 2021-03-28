// Lection 1 - JavaScript Intro
// * JS Введение
// * Подключение скриптов
// * Скрипты в отдельных файлах
// * Именование переменных
// * Переменные + типы(String, Number),  NaN,
// * Операторы
// * Приведение типов(явное, неявное)
// * Консоль разработчика
// * debugger
// * ? Операторы (+= \ ++)


console.log(1111);
document.write(1111);

// Hello JS


/*
    Front end
    Basic

 */


// $color-color: red;


age = 25;

// motherAge = 25; good
mother_age = 25; /// bad


// -------------- Type number -----------


/*
    C, Java, C#

    Integer a = 25
    Float b = 1.5

 */

a = 25;
b = 1.5;

console.log(a, b);
// console.log(b);



// -------------------- String -----------------

//    C, Java, C#
//
//    String a =  aaa
//


name = 'abc';
firstName = "hello 'world'";

document.write(firstName);

console.log(name, 'name');
console.log(firstName, 'firstName');

//----------- Exceptions  ----------
// foo; // ncaught ReferenceError: foo is not defined
// @ SyntaxError



a = 12;

b = a;

console.log(a, 'a');
console.log(b, 'b');



// ---------- Math operation ( + - * / % ) ---------------


a1 = 10, a2 = 3, result = 0;

result = 10 + 5; // result = 5
console.log('10 + 5 = ', result);


result = a1 - a2;
console.log('a1 - a2 = ', result);

result = a1 * a2;
console.log('a1 * a2 = ', result);


result = a1 / a2;

console.log('a1 / a2 = ', result);
console.log('a1 / a2 = ', result.toFixed(2));


console.log(10 % 5, '10 % 5');


console.log(11 % 2, 'isEven? odd');
console.log(6 % 2, 'isEven? even');



// ----------- Приведение типов(явное, неявное) ------------



// ------------------->   неявно <----------------

// String, Number

// number (+ / * -) number => number

// string + number => ?


str = 'Front-end ' + 'Basic';// string + string => string (конкатенация) => "Front-end Basic"

console.log(str, 'str');

result = '12' + 10; // string +  number => string + string => string ("1210")

console.log(result, 'result');

// ==== typeof ===

console.log(typeof result, '< ------ typeof result');


console.log('12' + 10); //  concat
console.log('12' * 10); // string * number => number * number


console.log('12' * '12');// string * string => number * number => number


// =================== NaN ==================


console.log(12 + 'abc');
console.log(12 * 'abc'); // number *  string  => number * NaN(Not A Number) => NaN

result = 12 * 'a';
console.log(result);

// ===== явно ========

b2 = '123';

console.log(typeof b2, 'typeof b2');


console.log(typeof +'123')

a1 = '10';// 10
a2 = '10';

result = +a1 + (+a2); //string + string => number + number => number

console.log(result, 'result');


console.log(+a1)


name = 'valera';
lastName = 'Ternavsky';
age = 26;


person = name + " " + lastName + " "  + age;// 'valera' + 'Ternavsky' + 10

console.log(person, 'person');