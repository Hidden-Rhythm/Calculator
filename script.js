// Defining display elements
const currentDisplay = document.getElementById("display");
const oldDisplays = [
  document.getElementById("old-display-1"),
  document.getElementById("old-display-2"),
  document.getElementById("old-display-3")
];

// Defining audio elements
const clickSound = document.getElementById("click");
const deleteSound = document.getElementById("delete");
const equalsSound = document.getElementById("equals");
const errorSound = document.getElementById("error");
const laughSound = document.getElementById("laugh");
laughSound.volume = 0.2;
const sidebarSound = document.getElementById("sidebar-toggle-click");

// Defining button elements
const btns = document.querySelectorAll(".btn:not(.sci-grid > button):not(.heart-btn)");
const sciBtns = document.querySelectorAll(".sci-grid > button");
const heartBtn = document.querySelector(".heart-btn");

// Defining sidebar and toggle button elements
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");

// Defining Math puns for heart button in sidebar
const puns = [
  "parallel lines have so much in common... it's a shame they'll never meet (˵ ¬ᴗ¬˵)",
  "i had an argument with a 90 degree angle... it turns out it was right (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧",
  "i wonder who invented algebra, must've been an x-pert ദ്ദി ( ᵔ ᗜ ᵔ )",
  "i saw my math teacher with a pile of grid paper yesterday... he must be plotting something ( ꩜ ᯅ ꩜;)⁭",
  "what do mathematicians do after a snowstorm? make snow angles ⸜(｡˃ ᵕ ˂ )⸝",
  "math class was so long... the teacher kept going on a tangent            (,,╥﹏╥,)"
];

// Defining variables
let expression = "";      // What the user sees on the screen (e.g. sin()
let evalExpression = "";  // The math expression the code evaluates (e.g. Math.sin())
let oldResults = ["", "", ""]; // Stores old results for history screens

// Defining background audio element and music on/off toggle
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
bgMusic.volume = 0.05;
let musicPlaying = false; // Music defaults to toggled off

musicToggle.addEventListener("click", () => {

  // Turn the music on/off according to the user's clicks on the toggle button and change the button appearance
  if (!musicPlaying) {
    bgMusic.play();
    musicToggle.src = "assets/buttons/music-on.png";
    musicPlaying = true;
  } else {
    bgMusic.pause();
    musicToggle.src = "assets/buttons/music-off.png";
    musicPlaying = false;
  }
});

// Helper function to update the current display to 0 when nothing else is entered 
function updateDisplay() {
  currentDisplay.textContent = expression || "0";
}

// Functionality for basic buttons
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.dataset.value; 

    if (!val) return;

    // Adding the clicked special operation to the expression (=, square root and delete)
    if (val === "=") {
      equalsSound.currentTime = 0;
      equalsSound.play();
      evaluate();
      return;
    }
    if (val === "del") { // Removes the last-added operation or value from the expression
      expression = expression.slice(0, -1);
      evalExpression = evalExpression.slice(0, -1);
      deleteSound.currentTime = 0;
      deleteSound.play();
      updateDisplay();
      return;
    }
    if (val === "sqrt") {
      expression += "√(";
      evalExpression += "Math.sqrt(";
      clickSound.currentTime = 0;
      clickSound.play();
      updateDisplay();
      return;
    }

    // Adding number values and simple operations to the expression
    expression += val;
    evalExpression += val;

    clickSound.currentTime = 0;
    clickSound.play();
    updateDisplay();
  });
});

// Mapping scientific button data-values to the expression that the user sees
const displayMap = {sin: "sin(", cos: "cos(", tan: "tan(", arcsin: "arcsin(", arccos: "arccos(", arctan: "arctan(", log: "log(", e: "e", pi: "π", "10x": "10^(", yx: "^("};

// Mapping scientific button data-values to the expression that the program evaluates
const evalMap = {sin: "Math.sin(", cos: "Math.cos(", tan: "Math.tan(", arcsin: "Math.asin(", arccos: "Math.acos(", arctan: "Math.atan(", log: "Math.log10(", e: "Math.E", pi: "Math.PI", "10x": "Math.pow(10,", yx: "Math.pow("};

// Setting variable for base of operations of the form y^x
let yxBase = null;

// Functionality for scientific buttons
sciBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.value;

    if (!type) return;

    // Accounting for special case of y^x button (2 numbers involved instead of 1)
    if (type === "yx") {
      yxBase = evalExpression; // Storing the entered value as the base
      expression += "^("; // Displaying the "^" exponent notation to the user
      evalExpression = `Math.pow(${yxBase},`;
    } else {
      // Adding operation and value to the equation based on the map
      expression += displayMap[type];
      evalExpression += evalMap[type];
    }

    clickSound.currentTime = 0;
    clickSound.play();
    updateDisplay();
  });
});

// Evaluate the expression when "=" is clicked
function evaluate() {
  try {
    // Close all open parentheses
    let openParens = (evalExpression.match(/\(/g) || []).length;
    let closeParens = (evalExpression.match(/\)/g) || []).length;
    evalExpression += ")".repeat(openParens - closeParens);

    // Evaluate expression
    let result = eval(evalExpression);

    if (isNaN(result)) throw new Error("NaN result"); // Don't allow NaN results

    // Round small numbers to 0 to avoid slightly incorrect results for trigonometric operations
    if (typeof result === "number") {
      result = parseFloat(result.toFixed(10));
      if (Math.abs(result) < 1e-10) result = 0;
    }

    // Update history
    if (result !== undefined && result !== null) {
      oldResults.unshift(result.toString());
      if (oldResults.length > 3) oldResults.pop();
    }
    oldDisplays.forEach((el, idx) => {
      el.textContent = oldResults[idx] || "";
    });

    expression = result.toString();
    evalExpression = result.toString();
    updateDisplay();

  } catch { // Resetting the expression and showing a math error message when errors are caught
    errorSound.currentTime = 0;
    errorSound.play();
    expression = "";
    evalExpression = "";
    currentDisplay.textContent = "math error";
  }
}

heartBtn.addEventListener("click", () => {
  laughSound.currentTime = 0;
  laughSound.play();
  const pun = puns[Math.floor(Math.random() * puns.length)]; // Randomly selecting and displaying a pun from the puns list
  alert(pun);
});

// Show sidebar opening animation and change scientific button visibility when sidebar toggle is clicked
sidebarToggle.addEventListener("click", () => {
  sidebarSound.currentTime = 0;
  sidebarSound.play();
  sidebar.classList.toggle("open");
});





