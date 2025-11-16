document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    const calculateBtn = document.getElementById('calculate-btn');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('quantity-error');
    
    calculateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Очищаем предыдущие результаты
        resultDiv.textContent = '';
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';
        
        // Получаем значения из формы
        const quantityStr = quantityInput.value.trim();
        const productPrice = parseInt(productSelect.value);
        
        // Проверяем корректность ввода с помощью регулярного выражения
        const regex = /^\d+$/;
        
        if (!regex.test(quantityStr)) {
            errorDiv.textContent = 'Ошибка: введите корректное количество (только цифры)';
            errorDiv.style.display = 'block';
            return;
        }
        
        const quantity = parseInt(quantityStr);
        
        if (quantity <= 0) {
            errorDiv.textContent = 'Ошибка: количество должно быть больше 0';
            errorDiv.style.display = 'block';
            return;
        }
        
        // Вычисляем стоимость
        const totalCost = quantity * productPrice;
        
        // Выводим результат
        resultDiv.textContent = `Стоимость заказа: ${totalCost} руб.`;
    });
});