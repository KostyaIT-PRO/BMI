// const personDB = {
//     gender: null,
//     age: null,
//     weight: null,
//     height: null,
//     activityCoeficient: null,
//     start(){
//         this.gender = prompt('Укажите ваш пол: 1 - мужчина, 2 = женщина');

//         if(this.gender !=='1' && this.gender !=='2'){
//             alert('Вы ввели не коректные данные');
//             this.gender = prompt('Укажите ваш пол: м - мужчина, ж = женщина');
//         }

//         this.age = +prompt('Введите ваш возраст');
//         if(check(this.age)){
//             this.age = +prompt('Введите ваш возраст');
//         }

//         this.weight = +prompt('Введите ваш вес');
//         if(check(this.weight)){
//             this.weight = +prompt('Введите ваш вес');
//         }

//         this.height = +prompt('Введите ваш рост');
//         if(check(this.height)){
//             this.height = +prompt('Введите ваш рост');
//         }

//         this.activityCoeficient = +prompt('Выберите свой уровень активности:  1.2 - минимальный, 1.375 - низкий, 1.55 - умеренный, 1.725 - высокий, 1.9 - экстремальный');
//         if(this.activityCoeficient !== 1.2 &&  this.activityCoeficient !== 1.375 && this.activityCoeficient !== 1.55 && this.activityCoeficient !== 1.725 && this.activityCoeficient !== 1.9){
//             alert('Вы ввели не коректные данные');
//             this.activityCoeficient = +prompt('Выберите свой уровень активности:  1.2 - минимальный, 1.375 - низкий, 1.55 - умеренный, 1.725 - высокий, 1.9 - экстремальный');
//         }
//     },

//     getBMI(){
//         if(!this.weight && !this.height){
//             alert('Запустите метод personDB.start');
//         }

//         const index = +(Math.pow((this.weight / this.height), 2) * 100).toFixed(2);

//         if(index < 18.5){
//             alert('Ниже нормального веса');
//         } else if (index >= 18.5 && index > 25){
//             alert('Нормальный вес');
//         }else if (index >= 25 && index > 30){
//             alert('Избыточный вес');
//         } else if (index >= 30 && index > 35){
//             alert('Ожирение 1 степени');
//         } else if (index >= 35 && index > 40){
//             alert('Ожирение 2 степени');
//         } else if (index >= 40){
//             alert('Ожирение 3 степени');
//         }
        
//     },

//     getDailyCalorie(){
//         if(!this.weight && !this.height && !this.gender && !this.activityCoeficient){
//             alert('Запустите метод personDB.start');
//         }

//         if(this.gender === '1'){
//             this.dailyCalorie = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5 * this.activityCoeficient
//         } else if (this.gender === '2'){
//             this.dailyCalorie = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161 * this.activityCoeficient
//         }
//     }
// }
// function check(value){
//     if(value == '' || value <= 0 || isNaN(value)){
//         alert('Вы ввели не коректные данные');
//         return true
//     }
// }


// personDB.start();
// personDB.getBMI();
// personDB.getDailyCalorie();
// console.log(personDB);



let gender;
let activityCoeficient;
let age;
let weight;
let growth;



const form = document.forms.main;

document.querySelector('.calculator-gender__items').addEventListener('click', (e) => {
    document.querySelectorAll('.calculator-gender__item').forEach(i => {
        i.classList.remove('active')
    })
    if(e.target.parentElement.closest('.calculator-gender__item')){
        e.target.parentElement.classList.add('active')
    }
});

document.querySelector('#step-1-btn').addEventListener('click', (e) => {
    e.preventDefault()
    gender = form.gender.value;
    document.querySelector('#step-1').style.dispay = 'none';
    document.querySelector('#step-2').style.display = 'block';
    console.log(gender);
})

document.querySelector('.calculator-activity__items').addEventListener('click', (e) => {
    document.querySelectorAll('.calculator-activity__item').forEach(i => {
        i.classList.remove('active')
    })
    if(e.target.parentElement.closest('.calculator-activity__item')){
        e.target.parentElement.classList.add('active')
    }
})

document.querySelector('#step-2-btn').addEventListener('click', (e) => {
    e.preventDefault()
    activityCoeficient = form.activity.value;
    document.querySelector('#step-2').style.display = 'none';
    document.querySelector('#step-3').style.display = 'block';
    console.log(activityCoeficient);
})

function check(param){
    if(param.validity.rangeOverflow || param.validity.rangeUnderflow){
        alert('Вы ввели не допустимое значение...');
    }
    return false
};

form.age.addEventListener('blur', (e) => {
    if(!check(e.target)){
        age = e.target.value;
        console.log(age)
    }
});

form.growth.addEventListener('blur', (e) => {
    if(!check(e.target)){
        growth = e.target.value;
        console.log(growth)
    }
});

form.weight.addEventListener('blur', (e) => {
    if(!check(e.target)){
        weight = e.target.value;
        console.log(weight)
    }
});

function getDailyCalorie(){
    if(gender === 'man'){
        return dailyCalorie = Math.floor(10 * weight) + (6.25 * growth) - (5 * age) + (5 * activityCoeficient);
        } else {
            return Math.floor((10 * weight) + (6.25 * growth) - (5 * age) - 161 * activityCoeficient);
    }
}


document.querySelector('#step-result').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#step-3').style.display = 'none';
    document.querySelector('#calculator-result').style.display = 'block';
    const index = Math.floor((Math.pow((weight / growth), 2)) * 100);
    document.querySelector('#imt-value').innerHTML = index;
    const x = getDailyCalorie();
    document.querySelector('#nc').innerHTML = x;
})