// Menu responsive
let menu = document.querySelector("#icon-menu");
let nav = document.querySelector(".nav");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("open");
};


// Auto Typed Section 1
var typed = new Typed(".auto-type", {
  strings: ["Chef"],
  typeSpeed: 200,
  loop: true,
  backSpeed: 150,
});

// Categories Section 2
var categories = [
  { name: "Breakfast", img: "./assests/imgs/breakfast.png" },
  { name: "Vegan", img: "./assests/imgs/vegan.png" },
  { name: "Meat", img: "./assests/imgs/meat.png" },
  { name: "Desert", img: "./assests/imgs/desert.png" },
  { name: "Chicken", img: "./assests/imgs/chicken.png" },
  { name: "Chocolate", img: "./assests/imgs/chococlate.png" },
];

categories.forEach((val) => {
  const categories = document.getElementById("categories");
  const category = document.createElement("div");
  category.setAttribute("class", "cat-card");

  // img of category
  const img = document.createElement("img");
  img.src = val.img;
  img.alt = val.name + "-icon";
  category.appendChild(img);

  // title of category
  const title = document.createElement("p");
  title.setAttribute("class", "cat-title");
  title.textContent = val.name;
  category.appendChild(title);

  categories.appendChild(category);
});


// Trending dishes Section 3
var dishes = [
  {
    name: "Garlic Bread",
    time: "30",
    category: "Breakfast",
    img: "./assests/imgs/garlic-bread.jpg",
    class: "garlic-bread",
  },
  {
    name: "Cheesecake With Slice Kiwi Glazed Cherry",
    time: "30",
    category: "Desert",
    img: "./assests/imgs/cheesecake-with-slice-kiwi-glazed-cherry-caramelized-sugar.jpg",
    class: "cheese-cake",
  },
  {
    name: "Chicken Alfredo",
    time: "40",
    category: "Chicken",
    img: "./assests/imgs/chicken-alfredo-1.jpg",
    class: "chicken-alfredo",
  },
  {
    name: "Chicken Taco Casserole",
    time: "30",
    category: "Chicken",
    img: "./assests/imgs/chicken-taco-casserole-1.jpg",
    class: "chicken-taco",
  },
  {
    name: "Grilled Beef Steak",
    time: "45",
    category: "Meat",
    img: "./assests/imgs/grilled-beef-steak-served-with-green-salad-with-eggs.jpg",
    class: "beef-steak",
  },
  {
    name: "Roast Chicken With Potatoes",
    time: "40",
    category: "Chicken",
    img: "./assests/imgs/chicken-dish.jpg",
    class: "roast-chicken",
  },
  {
    name: "Italian Meatballs",
    time: "40",
    category: "Meat",
    img: "./assests/imgs/Italian-meatballs-3.jpg",
    class: "meatballs",
  },
  {
    name: "Cast Iron Skillet Pizza",
    time: "30",
    category: "Lunch",
    img: "./assests/imgs/pizza.jpg",
    class: "iron-pizza",
  },
  {
    name: "Smoked Wings",
    time: "30",
    category: "Lunch",
    img: "./assests/imgs/smoked-wings-1.jpg",
    class: "smoked-wings",
  },
];

dishes.forEach((val) => {

  // Recipe Background
  const style = document.createElement("style");
  style.textContent = `.${val.class}{ background-image:
  linear-gradient(to bottom, rgb(245 246 252 / 0%), rgb(0 0 0 / 37%)),
  url('${val.img}');
  }`;
  document.head.appendChild(style);

  // Recipe Details
  const dishes = document.querySelector(".swiper-wrapper");
  const dish = document.createElement("div");
  dish.setAttribute("class", `swiper-slide tranding-slide ${val.class}`);


  const html = `<h3>${val.name}</h3>
            <div class="dish-details">
            <div class="dish-time">
            <i class='bx bx-alarm'></i>
            <p>${val.time} minutes</p>
            </div>
            <div class="dish-category">
            <i class='bx bx-dish'></i>
            <p>${val.category}</p>
            </div></div>
            <button>View Recipe <i class='bx bx-play-circle' style='color:#fbfbfb' ></i></button>
            `;

  dish.innerHTML = html;
  dishes.appendChild(dish);
});


// Swiper Js Section 3
var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});