//****Lesson4****

//***1***
//Перепишіть функцію, використовуючи '?' або '||'

//function checkAge(age) {
//    if (age > 18) {
//       return true;
//   }   return confirm('Батьки дозволили?');
//    }
    
//checkAge(40);


//function checkAge(age) {
//    if (age > 18) {
//        console.log(age > 18 || age == 18);
//        return true;
//     } return confirm('Батьки дозволили?');
//    }
man = newMan(12);
securityAnswer = man.getAge() <= 18 ? 'Батьки дозволили?' :
    alert(securityAnswer);

    




//***2***
//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

//function min(a, b) {
//    if (a < b) {
//      return console.log(a);
//    } console.log(b);
//}
//min(20, 10)


// ***3***
//Перепишіть з використанням стрілкових функцій
//Замініть Функціональні Вирази на стрілкові функції у коді нижче:

//function ask(question, yes, no) {
//    if (confirm(question)) yes();
//   else no();
//}

//ask("Ви згодні?",
//    function () { alert("Ви погодились."); },
//function () { alert("Ви скасували виконання."); }
