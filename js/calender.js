const numbers_container = document.querySelector('.numbers');

let dateValue = document.querySelector('.dateTable');

const nextDate = document.querySelector('.next_date');
const prevDate = document.querySelector('.prev_date');

let date = new Date();

let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']


dateValue.textContent = `${months[currentMonth]},${currentYear}`;


function getDate() {
   
    // how many days in a month ! 
    const currentMonthDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    // tells us where the month should start in the week ! ex: start from sunday or monday etc ,,, 
    let currentMonthWeekDays = new Date(currentYear, currentMonth, 1).getDay();

    for (let i = 0; i < currentMonthWeekDays; i++) {
        const div = document.createElement('div');

        const innerDiv = document.createElement('div');
        innerDiv.textContent = "";
        div.appendChild(innerDiv)

        numbers_container.appendChild(div)
    }

    for (let i = 1; i <= currentMonthDays; i++) {

        const div = document.createElement('div');

        const innerDiv = document.createElement('div');
        const realNum = document.createElement('div');
        innerDiv.classList.add('num');
        realNum.textContent = i;

        if (i === 10 || i === 6) {
            innerDiv.classList.add('previous')
        }
        if (i === 16) {
            innerDiv.classList.add('current')
        }
        if (i === 20 || i === 30) {
            innerDiv.classList.add('future')
        }
        div.appendChild(innerDiv)
        innerDiv.appendChild(realNum)
        numbers_container.appendChild(div)
    }

}

getDate();
nextDate.addEventListener('click', () => {
    numbers_container.textContent = "";
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear = currentYear + 1;
        dateValue.textContent = `${months[currentMonth]},${currentYear}`;
    } else {
        currentMonth = currentMonth + 1;
        dateValue.textContent = `${months[currentMonth]},${currentYear}`;
    }
    getDate();
})

prevDate.addEventListener('click', () => {
    numbers_container.textContent = "";
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear = currentYear - 1;
        dateValue.textContent = `${months[currentMonth]},${currentYear}`;
    } else {
        currentMonth = currentMonth - 1;
        dateValue.textContent = `${months[currentMonth]},${currentYear}`;
    }
    getDate();
})