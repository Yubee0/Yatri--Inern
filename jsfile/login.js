
function formHandler(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formObject = {};

  formData.forEach((value, key) => {
      formObject[key] = value;
  });

  console.log('Form Submitted', JSON.stringify(formObject));
  alert('Form submitted successfully!');
  form.reset();
}

function showProduct(imageSrc, price) {
  const productDisplay = document.getElementById('productDisplay');
  productDisplay.innerHTML = `
      <img src="../asset/${imageSrc}" alt="Selected Product">
      <p>Price: ${price}</p>
  `;
}

document.querySelector('.logout').addEventListener('click', function() {
  window.location.href = 'yatriknits.html';
});
