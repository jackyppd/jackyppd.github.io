let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cartCount").innerText = cart.length;
}

document.getElementById("cartBtn").onclick = () => {
  openCart();
};

function openCart() {
  let cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `<li>${item.name} - $${item.price.toFixed(2)} 
      <button onclick="removeFromCart(${index})">x</button></li>`;
  });

  document.getElementById("totalPrice").innerText = total.toFixed(2);
  document.getElementById("cartModal").style.display = "flex";
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function removeFromCart(index) {
  cart.splice(index, 1);
  document.getElementById("cartCount").innerText = cart.length;
  openCart();
}

function placeOrder() {
  document.getElementById("cartModal").style.display = "none";
  document.getElementById("thankYou").style.display = "flex";
  cart = [];
  document.getElementById("cartCount").innerText = 0;
}

function closeThankYou() {
  document.getElementById("thankYou").style.display = "none";
}
