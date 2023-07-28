// Function to generate a random RGB color string
function getRandomColor() {
    const r = getRandomNumber(0, 255);
    const g = getRandomNumber(0, 255);
    const b = getRandomNumber(0, 255);
    return `rgb(${r},${g},${b})`;
  }
  
  // Function to generate a random number between min and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function addNote() {
    var notes = [];
    var newnote = document.getElementById("newnote").value;
    var newnotehtmlvalue = document.getElementById("newnote");
    var output = document.getElementById("output");
    notes.push(newnote);
    
    var element = document.createElement('li');
    element.textContent = newnote; // Set the text content to the new note
    const randomColor = getRandomColor(); // Get a random color
    element.style.backgroundColor = randomColor; // Apply the random color to the background
    
    output.appendChild(element);
    newnotehtmlvalue.value = "";
  }
  function clearNotes() {
  output.textContent = "";
  }