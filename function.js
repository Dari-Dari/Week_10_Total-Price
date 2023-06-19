function calculateTotalPrice() {
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput.value ?
        parseInt(quantityInput.value) : 1;
    const price = 42800;
    const totalPrice = quantity * price;
    const formattedPrice = totalPrice.toLocaleString('ru-RU');
    const countElement = document.getElementById('count');
    countElement.textContent = `Стоимость покупки: ${formattedPrice} рублей`;
}


/*
function calculateTotalPrice() {
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput.value ?
        parseInt(quantityInput.value) : 1;
    const price = 42800;
    const totalPrice = quantity * price;
    const formattedPrice = totalPrice.toLocaleString('ru-RU');
    alert(`Стоимость покупки: ${formattedPrice} рублей`);
}  
*/