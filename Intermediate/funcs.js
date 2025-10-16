//============= DataDevQuest 2025_09 Intermediate Challenge =============
//============= Challenged by: Kyle Massey              =============
//============= Solved by: Le Luu                       =============

var selectedMarksColumns = [];
var selectedMarksData = [];
var formattedData = [];
var selectedWorksheet = null;

// Hide the loading spinner in the navbar once the viz is loaded
function hideSpinner() {
  document.getElementById("loadingSpinner").style.visibility = "hidden";
}

// Format the selected marks data into an array of objects
function formatData() {
  this.formattedData = [];

  selectedMarksData.forEach((row) => {
    let formattedRow = {};
    selectedMarksColumns.forEach((col, index) => {
      formattedRow[col.fieldName] = row[index].value;
    });
    this.formattedData.push(formattedRow);
  });
}

// Explicitly hide the details pane
function hideDetailsPane() {
  let detailsPane = document.getElementById("offcanvas");
  detailsPane.classList.remove("show");
}

// Show or hide the details pane based on if there is data to show
function showHideDetailsPane() {
  let detailsPane = document.getElementById("offcanvas");

  if (this.formattedData.length === 0) {
    detailsPane.classList.remove("show");
  } else {
    detailsPane.classList.add("show");
  }
}

// Clear the selected marks from the worksheet
function clearSelectedMarks(worksheet) {
  worksheet.clearSelectedMarksAsync();
  selectedMarksColumns = [];
  selectedMarksData = [];
  formattedData = [];
  showHideDetailsPane();
}

// Format the profit ratio as a percentage with 2 decimal places
function formatProfitRatio(ratio) {
  if (ratio === null || ratio === undefined) {
    return "N/A";
  }
  return (ratio * 100).toFixed(2) + "%";
}

// Build the state list for the details pane
function buildStateDOMList(worksheet) {
  let stateList = document.getElementById("stateList");
  stateList.innerHTML = "";

  let containerDiv = document.createElement("div");
  containerDiv.classList.add("d-flex", "justify-space-between", "flex-column");

  this.formattedData.forEach((row) => {
    let stateContainer = document.createElement("div");
    stateContainer.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "mb-2",
      "state-name",
      "me-3",
      "mb-2",
      "p-2",
      "border",
      "w-100",
      "rounded"
    );
    let stateName = document.createElement("div");
    stateName.textContent = `${row["State"]}`;

    let profitRatio = document.createElement("div");
    profitRatio.textContent = `${formatProfitRatio(row["AGG(Profit Ratio)"])}`;
    profitRatio.classList.add(
      row["AGG(Profit Ratio)"] >= 0 ? "green-text" : "orange-text"
    );

    let ratioIcon = document.createElement("i");
    ratioIcon.classList.add(
      "bi",
      `${row["AGG(Profit Ratio)"] >= 0 ? "bi-arrow-up" : "bi-arrow-down"}`,
      "ms-2"
    );

    let removeIcon = document.createElement("i");
    removeIcon.id = `remove-${row["State"]}`;
    removeIcon.classList.add("bi", "bi-x", "ms-3", "clickable-x", "text-white");
    removeIcon.title = "Remove from selection";

    // Add click event to the remove icon to deselect the state
    removeIcon.onclick = () => {
      selectStateMarks(worksheet, filteredStateList(row["State"]));
    };

    profitRatio.appendChild(ratioIcon);
    profitRatio.appendChild(removeIcon);

    stateContainer.appendChild(stateName);
    stateContainer.appendChild(profitRatio);
    containerDiv.appendChild(stateContainer);
  });

  // If no states are selected, show a message
  if (this.formattedData.length === 0) {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = "No states selected";
    stateList.appendChild(li);
  }

  stateList.appendChild(containerDiv);
}

// Return a list of states excluding the one to remove
function filteredStateList(stateToRemove) {
  let filteredObjs = this.formattedData.filter(
    (row) => row["State"] !== stateToRemove
  );

  return filteredObjs.map((row) => row["State"]);
}

//Add updateSelectionMessage function to update the selection message in the details pane
// to see how many marks are currently selected
function updateSelectionMessage() {
  const totalMarks = formattedData.length;
  const selectionMessage = document.getElementById("selectionMessage");

  if (selectionMessage) {
    selectionMessage.textContent = totalMarks
      ? `You Selected ${totalMarks} mark${totalMarks > 1 ? "s" : ""}`
      : "";
  }
}

// Select marks in the worksheet based on a list of states
function selectStateMarks(worksheet, states) {
  // Update formattedData to only keep the selected states
  formattedData = formattedData.filter((row) => states.includes(row["State"]));

  // From the worksheet, form the state list in the details pane
  buildStateDOMList(worksheet);
  //Call the updateSelectionMessage function to update the selected totalMarks in details pane
  updateSelectionMessage();

  // Hide the details pane if nothing in the list
  showHideDetailsPane();

  // if no states in the list, clear all selected marks
  if (states.length === 0) {
    worksheet.clearSelectedMarksAsync();
    selectedMarksColumns = [];
    selectedMarksData = [];
  } else {
    // Otherwise, update the states in the worksheet
    worksheet.selectMarksAsync("State", states, SelectionUpdateType.Replace);
  }
}
