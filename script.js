const items = document.querySelectorAll('.item');
const totalSubtotal = document.getElementById('totalSubtotal');

items.forEach(item => {
  const decrementBtn = item.querySelector('.decrement');
  const incrementBtn = item.querySelector('.increment');
  const quantityInput = item.querySelector('.quantity');

  decrementBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 0) {
      value--;
      quantityInput.value = value;
      updateSubtotal();
    }
  });

  incrementBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    value++;
    quantityInput.value = value;
    updateSubtotal();
  });
});

function updateSubtotal() {
  let subtotal = 0;
  items.forEach(item => {
    const quantity = parseInt(item.querySelector('.quantity').value);
    if (item.querySelector('h3').textContent.includes('Pav')) {
      subtotal += quantity * 4;
    } else if (item.querySelector('h3').textContent.includes('Drinking Water (Small)')) {
      subtotal += quantity * 10;
    } else if (item.querySelector('h3').textContent.includes('Drinking Water (Big)')) {
      subtotal += quantity * 20;
    } else if (item.querySelector('h3').textContent.includes('Vada')) {
      subtotal += quantity * 10;
    } else if (item.querySelector('h3').textContent.includes('Samosa')) {
      subtotal += quantity * 12;
    }
  });
  totalSubtotal.textContent = subtotal;
}

document.getElementById('printButton').addEventListener('click', function() {
  window.print();
});
