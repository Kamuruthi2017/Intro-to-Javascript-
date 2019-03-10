//  Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#filter-btn");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to initial data
var filteredData = data;

//  Using the renderTable function to effect the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get the current data object and its fields
    var data = filteredData[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the data object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick(event) {
// prevent page from refreshing
  event.preventDefault();

// Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    filteredData = data.filter(function (d) {
      var dataDate = d.datetime;
      return dataDate === filterDate;
    });
};

  var filterCity = $cityInput.value.trim().toLowerCase();
  if (filterCity !="") {
    filteredData = filteredData.filter(function(data) {
      var dataCity = data.city.toLowerCase();
      return dataCity === filterCity;
    });
  };
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState !="") {
    filteredData = filteredData.filter(function(data) {
      var dataState = data.state.toLowerCase();
      return dataState === filterState;
    });
  };

  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry!="") {
    filteredData = filteredData.filter(function(data) {
      var dataCountry = data.country.toLowerCase();
      return dataCountry === filterCountry;
    });
  };

  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape) {
    filteredData = filteredData.filter(function(data) {
      var dataShape = data.shape.toLowerCase();
      return dataShape === filterShape;
    });
  };
  var filtercountryshape = ($countryInput.value.trim().toLowerCase()) && ($shapeInput.value.trim().toLowerCase());
  return (dataCountry === filterCountry) && (dataShape === filterShape);
    renderTable();
  }
// Reset the data and search form after a search
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";

// Render the table for the first time on page load
renderTable();




























