//***1***
//Робота зі змінними
//Оголосіть дві змінні: name та city.
//Присвойте значення"Іван" змінній name.
//Скопіюйте значення зі змінної name в city.
//Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати "Іван").
//let name = "Іван";
//let city = "Kyiv";
//city = name;
//console.log(city);// Іван

//***2****
//Який буде результат виконання скрипта?
//let name = "Olga";
//console.log(`привіт ${1}`);// привіт 1
//console.log(`привіт ${"name"}`);// привіт name
//console.log(`привіт ${name}`);// привіт Olga

//***3***
//Видобути число зі змінних
//let a = "5";
//let b = "13cvb";
//let c = "12.9sxdcfgv";
//вивести в консоль тип
//console.log(typeof Number(a));//Number, 5
//console.log(typeof parseInt(b));Number, 13
//console.log(parseFloat(c));Number, 12.9

//***4***
//console.log((0.1 * 10 + 0.2 * 10) / 10) = 0.3

//***5***
//Поверніть найбільше число з набору 20, 10, 50, 40
//console.log(Math.max(20, 10, 50, 40)); 50

//***6***
//Поверніть випадкове число в діапазоні від 2 до 4//2.228600207087442; 3.9742890096620673
//console.log(Math.round(Math.random() * (4 - 2) + 2));//3, 4, 3, 2

//***7***
//дізнатись довжину message
//const message = "Welcom to Bahams!";
//console.log(message.length);//17

//***8***
//вивести в консоль message великими літерами
//const message = "Welcom to Bahams!";
//console.log(message.toLocaleUpperCase());//WELCOM TO BAHAMS!

//***9***
//створити пустий об'єкт
//додати туди ім'я, вік і місто
//вивести результат в консоль
//видалити місто
//додати буль з ключемЖ like flowers
//вивести результат в консоль

//let user = {};
//user.name = "Olga";
//user.age = 23;
//user.city = "Kyiv";
//console.log(user); //name: 'Olga', age: 23, city: 'Kyiv'
//delete user.city; 
//console.log(user);//name: 'Olga', age: 23
//user["like flowers"] = true;
//console.log(user);//name: 'Olga', age: 23, like flowers: true

//***10***
//За допомогою циклу "for...in" вивести в консоль ключі і значення об'єкта
//for (key in user) {
//    console.log(key);
//   console.log(user[key]);
//}//name Olga age 23 city Kyiv like flowers true
