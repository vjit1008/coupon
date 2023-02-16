const form = document.getElementById("form1");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const dice = document.getElementById("dice");
const image4 = document.getElementById("image4");
const username = document.getElementById("username");
const sum = document.getElementById("sum");
const coupon = document.getElementById("coupon");
const generateCoupon = document.getElementById("generate-coupon");

let attempts = 0;
let values = [];

image1.addEventListener("click", function() {
  form.classList.remove("hidden");
  image1.style.pointerEvents = "none";
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  let name = form.elements[0].value;
  let user = form.elements[1].value;
  username.textContent = `Name: ${name} | Username: ${user}`;
//   username.style.color=white
  form.classList.add("hidden");
  username.classList.remove("hidden");
  image2.style.pointerEvents = "none";
  username.style.color="white"
});

dice.addEventListener("click", function() {
  if (attempts === 2) {
    sum.textContent = "Bad Luck";
    sum.classList.remove("hidden");
    dice.style.pointerEvents = "none";
    sum.style.color="red"
    return;
  }
  const value = Math.floor(Math.random() * 6) + 1;
  values.push(value);
  let total = values.reduce((a, b) => a + b, 0);
  if (values.length === 3) {
    if (total > 10) {
      sum.textContent = `Sum: ${total}`;
      sum.classList.remove("hidden");
      image4.style.pointerEvents = "auto";
      sum.style.color="green"
    } else {
      sum.textContent = `Try Again after scoring more than 10. Sum: ${total}`;
      sum.classList.remove("hidden");
      attempts += 1;
      values = [];
      sum.style.color="lightBlue"
    }
  }
});

image4.addEventListener("click", function() {
  coupon.textContent = "Your coupon: " + Math.random().toString(36).substr(2, 12);
  coupon.classList.remove("hidden");
  generateCoupon.classList.remove("hidden");
  image4.style.pointerEvents = "none";
  coupon.style.color="white"
});

generateCoupon.addEventListener("click", function() {
  coupon.textContent = "Your coupon: " + Math.random().toString(36).substr(2, 12);
});
