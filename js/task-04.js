// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const btn = {
    decreasingCounterValue: document.querySelector('[data-action="decrement"]'),
    increasingCounterValue: document.querySelector('[data-action="increment"]'),
    currentCounterValues: document.querySelector('#value'),
};



var counterValue = 0;
 const increment = () => {
    counterValue += 1;
    btn.currentCounterValues.textContent = counterValue;
   
 };
 const decrement = () => {
    counterValue -= 1;
    btn.currentCounterValues.textContent = counterValue;
    
 };

 btn.decreasingCounterValue.addEventListener('click', decrement);
 btn.increasingCounterValue.addEventListener('click', increment);
 