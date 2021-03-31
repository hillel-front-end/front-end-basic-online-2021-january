/*
    +
    bool
    typeof
    isNaN()
    logical operators [>,<, >=, <=, ==, ====, !] 
    if else
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){}
*/


// string, number

// (+)  +'abc' -> NaN
// +'123' -> number


// ------- null undefined -----


var foo; // var foo = undefined;



foo2 = null;


a1 = 12;
a1 = null;

firtName = ""; // 0



/*
  *****************************************************
  ============== Важно помнить преобразования к Number =============
   +null  ->  0

   +""    ->  0      (пустая строка - 0)

   +"123" -> 123 (число в строке - число)

   +true\false -> 1\0

   +"abc" -> NaN (при ошибке результат NaN)
   
   +undefined -> NaN

  *****************************************************
*/










// ------------- smart operation  ----------

index = 0;

index = index + 1; // 0 + 1
index = index + 1; // 1 + 1
index = index + 1; // 2 + 1
index = index + 1; // 3 + 1

/// ------

index = 0;

index += 2;// index + 2
index += 2; 
index += 2;
index += 2;

console.log(index, 'smart 2');
// ------ inc/dec --- 
index = 0;

index++;
index++;
index++;
index++;

console.log(index, 'smart 3');

index--; // index = index - 1;
index--; // index = index - 1;
index--; // index = index - 1;
index--; // index = index - 1;

console.log(index, 'smart 4 (dec)');


// ++index; // index++

index = 0;

res1 = index++;
console.log(res1, 'res');
console.log(index, 'index');

res1 = ++index;
console.log(res1, 'res');
console.log(index, 'index');

// ============ Boolean [true, false] ===============

a1 = true;
a2 = false;

str = 'it is ' + true;// 'it is true'

num = '12' - true; // 12 - 1 = 11
num2 = 12 + false; // 12 + 0 = 12
 
console.log(str, 'str');
console.log(num, 'num');


// ------------- Logical operators [>,<, >=, <=, ==, ====, !] -----------------------
 

a1 = 10, a2 = 5;

console.log('a1 =', a1, ' a2  = ', a2 );
console.log(a1 > a2, 'a1 > a2'); // 10 > 5 => true
console.log(a1 < a2, 'a1 < a2');
console.log(a1 == a2, 'a1 < a2'); 10 == 5

b1 = 5; // b1 > b2 => 5 > 5 => false
b2 = 5;

console.log('b1 =', b1, ' b2  = ', b2 );
console.log(b1 >= b2, 'b1 >= b2');
console.log(b1 <= b2, 'b1 <= b2');

// -----

console.log('12' == 12, 'str == number');
console.log('12' === 12, 'str === number')





/* 
*****************************************************
============= Важно помнить преобразования к Boolean ===============

    1) 0, null, undefined, NaN, "" -> false
    2) все остальное -> true

*****************************************************
*/

console.log(Boolean(12), 'Boolean(12)');

console.log(Boolean('12'), 'Boolean("12")');

console.log(Boolean(0), 'Boolean(0)');

console.log(Boolean(undefined), 'undefined');

console.log(Boolean(100), '100');


//  ----------- &&, || ---------------- 

input = '';


isTrue = Boolean(input);


// ----- ||  ----

// a1 = null;
// a2 = 'abc';
// a3 = undefined;
// a4 = 111;

// a1 = null;
// a2 = "";
// a3 = " ";
// a4 = NaN;

// result = a1 || a2 || a3 || a4;

// console.log(result, 'result');
// //      false || true || false || true;

// console.log(result, 'result');
//      false || false || true || false;


// ----- && ----


a1 = true;
a2 = 'abc';
a3 = 222;
a4 = 111;

result = a1 && a2 && a3 && a4;
//     true && true && false && true;

console.log(result, 'result');

result = (undefined && null) || 12;
// (false) || true

console.log(result, 'result');



// ------------- Conditional -------------

/*
    if (условие) {
        тело условия if
    } 

    if (условие) {
        тело условия if
    } else {

    }
*/

// isTrue = confirm('');

// console.log(isTrue, 'isTrue');

// if (isTrue) { // if (false)
//     result = 2 + 2;
//     console.log('to do something', result);
// }


// if (isTrue) { 
//     result = 2 + 2;
//     console.log('to do something', result);
// } else {
//     result = 2 - 2;
//     console.log('to do another something', result);
// }



/*
    if (условие) {
       тело условия if
    } else if(условие) {
       тело условия else-if
    } else {
        тело условия else
    }

*/


time = 12;
greeting = '';

if (time < 10) {
    greeting = 'Good morning';
} else if (time < 20) {
    greeting = 'Good day';
} else if (time < 24) {
    greeting = 'Good evening';
} else {
    greeting = 'Good night';
}

console.log(greeting, 'greeting');

time = 9;

if (time > 10 && time < 15) { // false &&  true => false
    console.log('good day');
}


test = 12;

if (test) { // 12 => true
    console.log('work');
}

// ---------- loop ------------

// each, for



sum = 0; // 1-3 => 1 + 2 + 3;


// sum = sum + 1;
// sum = sum + 2;
// sum = sum + 3;
// sum = sum + 4;
// sum = sum + 5;

counter = 0;
// 1 - 10
// sum = sum + ++counter;
// sum = sum + ++counter;
// sum = sum + ++counter;
// sum = sum + ++counter;
// sum = sum + ++counter;
// sum = sum + ++counter;
// sum = sum + ++counter;
// sum = sum + ++counter;
// sum = sum + ++counter;
// sum = sum + ++counter;

counter = 0;
sum = 0;

// while(counter < 10) {
//     sum = sum + ++counter;
// }


counter = 0;//init

// while (counter < 3) { // conditional
//     console.log('todo', counter);

//     counter++; // inc
// }

console.log(sum, 'sum');


// for(init; conditional; inc)  {

// }


// 0 + 1 + 2

for(index = 0, max = 3; index < max; index++) {
    console.log('todo', index);

    sum += index;
}

console.log(sum, 'sum');

// 1 -> 2 -> 4
// 3 -> 2 -> 4
// 3 -> 2 -> 4

// console.log(sum, 'sum');


// sum = sum + 2;
// sum = sum + 3;

// console.log(sum, 'sum');