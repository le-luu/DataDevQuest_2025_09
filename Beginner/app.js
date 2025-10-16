//============= DataDevQuest 2025_09 Beginner Challenge =============
//============= Challenged by: Kyle Massey              =============
//============= Solved by: Le Luu                       =============

const viz = document.getElementById("tableauViz");
const loadingSpinner = document.getElementById("loadingSpinner");
const successMessage = document.getElementById("successMessage");

// Define a function to handle the 'firstinteractive' event
function onFirstInteractive() {
  // Log a message to the console when the dashboard is ready
  console.log("Tableau Dashboard is ready!");

  //Add a property to the class to hide the loading spinner
  loadingSpinner.classList.add("loading-hidden");
  //Then, show the success message
  successMessage.classList.remove("loading-hidden");
  //Make it visible by setting the opacity to 1
  viz.style.opacity = "1";

  //After showing the message, hide it after 2 seconds
  setTimeout(() => {
    successMessage.classList.add("loading-hidden");
  }, 2000);
}
//Set opacity to 0 to hide it
viz.style.opacity = "0";

//Add an event listener to the viz object to listen for the 'firstinteractive' event
viz.addEventListener("firstinteractive", onFirstInteractive);
