// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayCar() {
  let favoriteCar = "Tesla Model S";
  function whyLove() {
    console.log(favoriteCar + " is my favorite because it's the FUTURE");
  }
  whyLove();
}
sayCar();

// ==== Challenge 2: Create a counter function ====
let counterVariable = 0;
const counter = () => {
  counterVariable++;
  console.log(counterVariable);
};

counter();
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2





/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
