Create a roulette with threes buttons in JavaScript, one for next person, one for previuos person and one for random.

First return a reference to certain objects into the HTML document so we can handle it. E.g. img, name, job, info. This using getElementById.

Then using querySelector we return the first element that is a descendant of node that matches the specificied selectors. The selectors are the buttons next, prev and random.

The tricky part is to create functions to rulette the reviews.

a) Load initial item. Hint: window.addEventListener - DOMContentLoaded.
b) Show person based on item. Hint: function showPerson(person).
c) Show next and previous person. Hint: start with the button and add an event listener, click, then function where you add/sustract value to currentItem; remember to set the roulette to go back to the next item when the lenght is passed.
d) Create a random button. Hint: use the same currentItem as the variable to handle within the function. 


//////////////////////////// this is app.js text originally 

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
})


// show person based on item
function showPerson(person) {
  const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length -1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem =  reviews.length -1;
  }
  showPerson(currentItem);
});

// show random person

randomBtn.addEventListener('click', function() {
  console.log('Hola mundo!');
  currentItem = Math.floor(Math.random() * reviews.length -1);
  showPerson(currentItem);
})