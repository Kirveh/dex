 function getDomNodesBySelector(selector) {
  return Array.from(document.querySelectorAll(selector));
}

document.querySelector('.total__button').addEventListener('click', applyDiscount);


function applyDiscount() { 
  let closeButton = document.querySelector('.total__button')
  let sum = document.querySelector('.total-price-value')
  sum.textContent = sum.textContent - sum.textContent * 0.15;
  closeButton.style.display = 'none'

  }
