//update intro state
const nameWorksIntro = document.getElementById('name--works')
let nameWorksStates = [ 
    { 
        text: 'adeolu miracle', class: 'background-color--blue' 
    }, 
    { 
        text: 'front-end dev', class: 'background-color--green'
    },  
    { 
        text: 'computer engineer', class: 'background-color--purple' 
    }
];

let currentState = 0;

export default function animation() {
  let state = nameWorksStates[currentState];
  nameWorksIntro.textContent = state.text;
  nameWorksIntro.className = 'animation--name ' + state.class;
  currentState = (currentState + 1) % nameWorksStates.length;
}

