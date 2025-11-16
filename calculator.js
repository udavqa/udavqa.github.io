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
    
    // ВЫЧИСЛЯЕМ СТОИМОСТЬ - произведение цены и количества
    const totalCost = quantity * productPrice;
    
    // Выводим результат на страницу
    resultDiv.textContent = `Стоимость заказа: ${totalCost} руб.`;
});