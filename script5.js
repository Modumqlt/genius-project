//****Lesson5****

//***1***
//1)написати об'єкт студента, який буде виводити ім'я, спеціальність, середній бал і кількість пропущених занять
//2)написати метод, який буде виводити цю інформацію// this
//3)написати три варіанти студентів
//4)прикріпити значення за допомогою call apply bind

//const infoStudent = {
//    name: "Roma",
//    specialty: "audit",
//    bal: "8",
//    missing: "10",
//    showInfo: function () {
//        console.log("student: " + this.name + " specialty: " + this.specialty + " bal: " + this.bal + " missing: " + this.missing);
//    },
//};

//student2 = {
//    name: "Ira",
//    specialty: "painter",
//    bal: "10",
//    missing: "5",
//};

//student3 = {
//    name: "Tom",
//    specialty: "engineer",
//    bal: "7",
//    missing: "2",
//};

//infoStudent.showInfo();
//infoStudent.showInfo.bind(student2)();
//infoStudent.showInfo.call(student2);
//infoStudent.showInfo.apply(student2);
//infoStudent.showInfo.bind(student3)();
//infoStudent.showInfo.call(student3);
//infoStudent.showInfo.apply(student3);

//***2***
//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення, що це таке
//при натисканні на кнопку css - має видати коротке визначення, що це таке
// const lang = {
//    showItems() {
//        console.log("Мова програмування: ", this.items);
//    },
//};

//const html = {
//    items: ("англ. HyperText Markup Language — мова розмітки гіпертексту — стандартизована мова розмітки документів для перегляду вебсторінок у браузері."),
//};


//const css = {
//    items: ("англ. Cascading Style Sheets — мова для запису стильового оформлення веб-сторінок."),
//};

//document.querySelector("#html").addEventListener("click", lang.showItems.bind(html));
//document.querySelector("#css").addEventListener("click", lang.showItems.bind(css));


//***3***
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:
//1)banana 30, 4,5
//2)cherry 58, 1,3
//3)orange 89, 3,4

//const infoFruits = {
//    name: "banana",
//    price: 30,
//    number: 4.5,
//    showInfo: function  () {
//        console.log("fruits: " + this.name + " cost: " + Math.round((this.price * this.number)*100)/100);
//},
//};    

//Fruits2 = {
//    name: "cherry",
//    price: 58,
//    number: 1.3,
//}

//Fruits3 = {
//    name: "orange",
//    price: 89,
//    number: 3.4,
//}

//infoFruits.showInfo();//135
//infoFruits.showInfo.call(Fruits2);//75
//infoFruits.showInfo.call(Fruits3);//303