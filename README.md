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
[![DDQ_2025_07](https://img.youtube.com/vi/DnZodzxS1HE/0.jpg)](https://www.youtube.com/watch?v=DnZodzxS1HE)

### Beginner Challenge
Link to the Beginner Challenge: https://datadevquest.com/ddq2025-09-embed-tableau-content-w-the-embedding-api-beginner/

**Challenge:**
- Embed a Tableau Viz in the webpage
- Define a FirstInteractive function for the FirstInteractive event listener
- Hide the loading spinner and show the success message

**Output**

![image](https://github.com/le-luu/DataDevQuest_2025_07/blob/main/img/beginner_graphql_query.png)

The GraphQL query to retrive the workbook details (id, name, project Name, owner) without using filter and with filter.

![image](https://github.com/le-luu/DataDevQuest_2025_07/blob/main/img/output_beginner_ddq_2025_07.png)

In the Python script, I listed all the workbooks on the site. Then, let the user choose 1 workbook to get more details.

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

![image](https://github.com/le-luu/DataDevQuest_2025_07/blob/main/img/Intermediate_schema.png)

One benefit of using MetaData API is I can combine multiple queries into one GraphQL query to extract the data I want. With REST API, I couldn't do that. To extract different data, I need to use different endpoint.

I built a Python program with this schema. First, I will write a query to list all workbooks and published data source in one GraphQL query. Then, I will let the user choose 2 options:
- Option 1: Select a workbook on the list to explore more details (including workbook id, name, project Name, owner id, owner name, published data source connected by that specified workbook)
- Option 2: Select a published data source on the list to explore more details (including luid, name, and the connected workbook to that published data source with its id, name, project Name, owner id, owner name)

![image](https://github.com/le-luu/DataDevQuest_2025_07/blob/main/img/intermediate_graphql_query.png)

- These are 3 GraphQL queries that I used to extract the metadata. The first query listwb_pbl_datasource will query all workbooks and published data source.
- The second query (getworkbookDetails) will apply the workbook_name variable in the filter for option 1 above
- The third query (getpbdsDetails) will apply the published data source name variable in the filter for option 2 above

![image](https://github.com/le-luu/DataDevQuest_2025_07/blob/main/img/output_intermediate_ddq_2025_07.png)

The output of the program.

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
