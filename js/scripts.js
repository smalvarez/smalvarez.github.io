function toggleMenu() {
  const navMenu = $('#navMenu');
  const burgerButton = $('#burgerButton');

  // Calculate position based on the burger button
  const buttonOffset = burgerButton.offset();
  navMenu.css({
    top: buttonOffset.top + burgerButton.outerHeight(),
    left: buttonOffset.left,
  });

  // Toggle visibility
  navMenu.toggleClass('d-none');
}

function openModal(modalId) {
  $('#' + modalId).modal('show');
}

function closeModal(modalId) {
  $('#' + modalId).modal('hide');
}

function addToCart(modalId, unitPrice) {
  const quantity = parseInt($('#' + modalId + ' input[type="number"]').val());
  if (isNaN(quantity) || quantity <= 0) {
    alert('Please enter a valid quantity.');
  } else {
    const totalPrice = unitPrice * quantity;
    $('#summary' + modalId.replace('modal', '')).text(
      `Great! Order of ${quantity} items is received, total price is $${totalPrice}.`
    );
  }
}
