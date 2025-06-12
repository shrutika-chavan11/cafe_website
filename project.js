const orderButton = document.getElementsByClassName('b')[0]; 
orderButton.addEventListener('click', function() {
  window.location.href = 'order.html';  
});

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
      item.classList.toggle('active');  
  });
});

document.querySelectorAll('.item').forEach(item => {
   item.addEventListener('click', () => {
      item.classList.toggle('active');
  });
});