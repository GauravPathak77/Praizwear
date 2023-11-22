// Add to cart single product button 
const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
  button.addEventListener('click', cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add('clicked');
}

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const scrollFraction = 0.5; // Adjust this value to control the scrolling distance

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth * scrollFraction;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth * scrollFraction;
  });
});

function myFunction(x) {
  if (x.matches) { // If media query matches

    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];
    const scrollFraction = .75; // Adjust this value to control the scrolling distance

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth * scrollFraction;
      });

      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth * scrollFraction;
      });
    });

  }
}

var x = window.matchMedia("(max-width: 575.98px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


