// Find the HTML element that has an ID of 'name--works'
const nameWorksIntro = document.getElementById('name--works');

// Define an array of objects that represent the different states for the animation
const nameWorksStates = [
  {
    text: 'adeolu miracle',
    class: 'background-color--blue'
  },
  {
    text: 'front-end dev',
    class: 'background-color--green'
  },
  {
    text: 'computer engineer',
    class: 'background-color--purple'
  }
];

// Initialize the current state to 0
let currentState = 0;

// Define a function that will update the animation state
export default function animation() {
  // Get the current state from the array based on the current state index
  const { text, class: stateClass } = nameWorksStates[currentState];

  // Update the text of the HTML element with the current state's text
  nameWorksIntro.textContent = text;

  // Update the class name of the HTML element with the current state's class
  nameWorksIntro.className = `animation--name ${stateClass}`;

  // Increment the current state index and wrap around to 0 if we've reached the end of the array
  currentState = (currentState + 1) % nameWorksStates.length;
} 
