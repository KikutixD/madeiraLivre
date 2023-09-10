function openCart() {
  document.getElementById("cart").classList.add("right-[0px]");
  document.getElementById("cart").classList.remove("right-[-360px]");
}

function closeCart() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

export function callCart() {
  const buttonCloseCart = document.getElementById("closeCart");
  const buttonOpenCart = document.getElementById("openCart");

  buttonCloseCart.addEventListener("click", closeCart);
  buttonOpenCart.addEventListener("click", openCart);
}
