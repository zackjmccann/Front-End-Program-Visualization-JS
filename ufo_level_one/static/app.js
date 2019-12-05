var tableData = data;
var tbody = d3.select("tbody");
console.log(data);

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault;
    var inputValue = d3.select('#datetime').property('value');
    function filteredData(sighting_date) {
        return sighting_date.datetime === inputValue;
    };

    var filteredSightings = data.filter(filteredData);

    filteredSightings.forEach((filteredSightings) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});
