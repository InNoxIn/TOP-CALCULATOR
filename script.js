const myButtons = document.getElementsByClassName("button");
const resultDisplay = document.querySelector(".result");
let expression = "";  // To store the calculator expression

function changeColor(event) {
   const buttonValue = event.target.textContent;

   if (buttonValue === "=") {
       // Evaluate the expression when "=" is clicked
       try {
           expression = eval(expression);  // Calculate the result
       } catch (error) {
           expression = "Error";           // Handle any invalid expressions
       }
   } else if (buttonValue === "C") {
       // Clear the expression when "C" is clicked
       expression = "";
   } else {
       // Append the clicked button value to the expression
       expression += buttonValue;
   }

   // Display the current expression or result
   resultDisplay.innerHTML = expression;
}

// Loop through each button and add the event listener
for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("click", changeColor);
}
