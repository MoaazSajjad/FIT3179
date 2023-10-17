var vg_1 = "choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1).then(function (result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "bubble_chart_GDP.vg.json"; 
vegaEmbed("#bubble_chart", vg_2).then(function (result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_line = "worldGDP_line_chart.vg.json"; // replace with the path to your line chart JSON
vegaEmbed("#line_chart", vg_line).then(function (result) {
    // Access the Vega view instance as result.view if needed
}).catch(console.error);

var vg_bar = "bar_chart_GDP.vg.json"; 
vegaEmbed("#bar_chart", vg_bar).then(function (result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_packed = "packed_bubble_chart.vg.json"; // replace with the path to your packed bubble chart JSON
vegaEmbed("#packed_bubble_chart", vg_packed).then(function (result) {
    // Access the Vega view instance as result.view if needed
}).catch(console.error);