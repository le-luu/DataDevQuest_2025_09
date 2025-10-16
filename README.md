# DataDev Quest Challenge 2025_09

![image](https://github.com/le-luu/DataDevQuest_2025_03/blob/main/img/logo.svg)

### Challenged By: 
Kyle Massey

### Objective
- Familiarize with the Tableau Embedding API v3 
- Embed a Tableau Dashboard on a basic webpage
- Enable the user to interact with the Tableau Dashboard on the webpage
- Add the Event Listerner with Javascript to perform the action on the webpage

### Solution Video
[![DDQ_2025_09](https://img.youtube.com/vi/DnZodzxS1HE/0.jpg)](https://www.youtube.com/watch?v=DnZodzxS1HE)

### Beginner Challenge
Link to the Beginner Challenge: https://datadevquest.com/ddq2025-09-embed-tableau-content-w-the-embedding-api-beginner/

**Challenge:**
- Embed a Tableau Viz in the webpage
- Define a FirstInteractive function for the FirstInteractive event listener
- Hide the loading spinner and show the success message

**Output**

![image](https://github.com/le-luu/DataDevQuest_2025_09/blob/main/img/ddq2025_09_Beginner_Output.png)

From the output result on the webpage above, the loading spinner is hidden and the success message is showing. It will be hidden in 2 seconds.

![image](https://github.com/le-luu/DataDevQuest_2025_09/blob/main/img/ddq2025_09_Beginner_html.png)

In the index.html file, Add the Tableau dashboard link in the TableauViz tag and import the custom script tag (apps.js). 

![image](https://github.com/le-luu/DataDevQuest_2025_09/blob/main/img/ddq2025_09_Beginner_js.png)

In the apps.js file, I defined a function called onFirstInteractive. It helped me to check in the console if the dashboard is loaded. The loadingSpinner class will add the loading-hidden from css to hide. At the beginning, I already set the successMessage in html file is loading-hidden. Now, when the onFirstInteractive function run, it will remove the loading-hidden property to show the successMessage. Finally call EventListener to perform the action with function onFirstInteractive.

### Intermediate Challenge
Link to the Intermediate Challenge: https://datadevquest.com/ddq2025-09-embed-interactive-tableau-content-w-the-embedding-api-intermediate/

**Challenge:**
- Embed a Tableau Viz in the webpage
- Define a FirstInteractive function for the FirstInteractive event listener
- Select some marks on the map to show/hide the list of state in the details pane
- Remove each state in the details pane
- Add action to the Clear Mark Selection
- Update the total marks after selecting/ removing

**Output**

[![DDQ_2025_09](https://img.youtube.com/vi/buJTJIEI9ko/0.jpg)](https://www.youtube.com/watch?v=buJTJIEI9ko)

From the output video above, the loading spinner is hidden. When the Tableau dashboard is ready to load, it will show the success message. The user can interact with the map on the dashboard. After selecting some marks on the dashboard, the details pane will show on the right. It will list all selected marks. It also updates how many total marks have been selected. When the user remove any states in the list, it will also update the total marks. If the user clicks on the button "Clear All Selections", it will remove all states in the list and come back to the dashboard.

![image](https://github.com/le-luu/DataDevQuest_2025_09/blob/main/img/ddq2025_09_Intermediate_index.png)

In the index.html file, I defined the onFirstInteractive function same as the Beginner challenge above. But adding another function called onSelectionChanged there to let the user select the marks. After hiding the success message, get the dashboard and worksheet, also call the event listener for onSelectionChange which will be declared below.

The onSelectionChanged function will handle the mark selection. If no mark is selected, the details pane will be hidden. If user selects marks, it will store the data in selectedMarksData and count how many selected marks. From the selectionMessage above, it will show the total mark number and also checking plural.

After that, the buildStateDOMList is called by passing the selectedWorksheet (currently is SaleMap only). This function in the funcs.js is used to show all selected states on the list in the details pane. It also checks if profit ratio is >0 then showing green text with arrow up, otherwise, it will be orange text and arrow down.

At the end, function showHideDetailsPane will be called to show or hide the details pane. If no marks (or States) in the details Pane, it will hide the details pane.

![image](https://github.com/le-luu/DataDevQuest_2025_09/blob/main/img/ddq2025_09_Intermediate_js.png)

In the funcs.js file, I added an updateSelectionMessage function to keep updating the total marks on the list in the details pane if the user removes any states below. 

I edited the selectStateMarks function. This function is used to filter by keeping the selected states in the formattedData array. Then, call buildStateDOMList function to format the states in details pane, update the total marks in updateSelectionMessage function. Check if there are still marks in the list to show/hide the pane. At the end, it will check and update the list.

### Instructions

- Can view the code (.js, .html, .css) in any Text Editor or with Visual Studio Code
- I run the page using Visual Studio Code and install 2 Extensions in VS Code:
  - Prettier - Code formatter
  - Live Server

**Beginner Challenge**

- After cloning this github page, open VS Code and open folder Beginner
- Right click on the index.html file in Explore pane
- Choose "Open with Live Server"
- The page will be loaded on the browser
  
**Intermediate Challenge**

- After cloning this github page, open VS Code and open folder Intermediate
- Right click on the index.html file in Explore pane
- Choose "Open with Live Server"
- The page will be loaded on the browser
