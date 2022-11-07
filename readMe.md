Create a roulette with threes buttons in JavaScript, one for next person, one for previuos person and one for random.

First return a reference to certain objects into the HTML document so we can handle it. E.g. img, name, job, info. This using getElementById.

Then using querySelector we return the first element that is a descendant of node that matches the specificied selectors. The selectors are the buttons next, prev and random.

The tricky part is to create functions to rulette the reviews.

a) Load initial item. Hint: window.addEventListener - DOMContentLoaded.
b) Show person based on item. Hint: function showPerson(person).
c) Show next and previous person. Hint: start with the button and add an event listener, click, then function where you add/sustract value to currentItem; remember to set the roulette to go back to the next item when the lenght is passed.
d) Create a random button. Hint: use the same currentItem as the variable to handle within the function. 