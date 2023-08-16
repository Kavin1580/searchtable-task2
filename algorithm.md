Algorithm to Create a Table with Search Functionality in React:

Initialize Data:

Create a static data array with objects containing information for each table row.
Initialize State:

Create a state variable to hold the search term, initialized to an empty string.
Filter Data:

Create a new array called filteredData by filtering the data array using the search term.
For each object in the data array, check if any of the search terms (lowercased) match any of the data fields (lowercased).
Render Component:

Render a <div> containing:
An <input> element of type "text" with a placeholder "Search...", and its value bound to the search term state.
A <table> element containing:
A <thead> element with a single row and <th> elements for each column ("S No.", "First Name", "Last Name", "Email", "Phone Number").
A <tbody> element containing:
A loop through each object in the filteredData array:
For each object, render a <tr> element with <td> elements for each data field.
Styling:

Apply appropriate styling using CSS to format the search input and the table rows, columns, and header.
Search Functionality:

Attach an onChange event handler to the search input, updating the search term state with the input value.
As the search term changes, the filteredData array will update automatically due to the filtering logic.
Rendering the Component:

Include the DataTable component in the main application component (App.js or similar) to render the table with search functionality.