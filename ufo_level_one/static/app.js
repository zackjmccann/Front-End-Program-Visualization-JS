var tableData = data;
var tbody = d3.select("tbody");
var table = d3.select('#ufo-table');
var button = d3.select("#filter-btn");
var tableArea = d3.select('#table-area');

button.on("click", function() {
    d3.event.preventDefault;

    var tableInfo = d3.select("tbody");
    tableInfo.remove();
    var tableBody = table.append('tbody')
    tableArea.select('p').remove();

    var inputValue = d3.select('#datetime').property('value');

    function filteredData(sighting_date) {
        return sighting_date.datetime === inputValue;
    };

    var filteredSightings = data.filter(filteredData);
    if (filteredSightings.length !== 0) {
        filteredSightings.forEach((filteredSightings) => {
            var row = tableBody.append("tr");
            Object.entries(filteredSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });  
    } else {
        var message = tableArea.append('p');
        message.text(`Sorry! No sightings reported for that date. Please enter another date.`)
    };
});