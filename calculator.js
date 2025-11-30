// "use strict";

// document.addEventListener('DOMContentLoaded', function() {
//     console.log("DOM fully loaded and parsed");
    
//     const quantityInput = document.getElementById('quantity');
//     const productSelect = document.getElementById('product');
//     const calculateButton = document.getElementById('calculate-btn');
//     const resultDiv = document.getElementById('result');
//     const errorDiv = document.getElementById('error');
    
//     // Регулярное выражение для проверки ввода (только цифры)
//     const numbersRegex = /^\d+$/;
    
//     function calculateTotal() {
//         // Очищаем предыдущие сообщения
//         errorDiv.textContent = '';
//         resultDiv.textContent = '';
        
//         const quantity = quantityInput.value.trim();
//         const selectedProduct = productSelect.options[productSelect.selectedIndex];
//         const price = parseInt(selectedProduct.value, 10);
        
//         // Проверка корректности ввода с помощью регулярного выражения
//         if (!numbersRegex.test(quantity)) {
//             errorDiv.textContent = 'Ошибка: введите корректное количество (только цифры)';
//             return;
//         }
        
//         const quantityNum = parseInt(quantity, 10);
        
//         // Дополнительная проверка на положительное число
//         if (quantityNum <= 0) {
//             errorDiv.textContent = 'Ошибка: количество должно быть положительным числом';
//             return;
//         }
        
//         // Расчет стоимости
//         const total = quantityNum * price;
        
//         // Вывод результата
//         resultDiv.textContent = `Стоимость заказа: ${total} руб. (${quantityNum} × ${price} руб.)`;
//     }
    
//     // Назначаем обработчик события на кнопку
//     calculateButton.addEventListener('click', calculateTotal);
    
//     // Дополнительно: расчет при нажатии Enter в поле ввода количества
//     quantityInput.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             calculateTotal();
//         }
//     });
// });
