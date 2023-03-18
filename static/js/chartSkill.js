console.log("chartSkill.js ;)");

// Avoid Loading Error
window.onload = function() {

    // Chart
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        // radar chart
        type: 'radar',
        data: {
          // Labels for each item of data (clockwise from top)
          labels: ["Python", "Django", "Linux", "JavaScript", "MySQL", "HTML/CSS"],
          //　setting for data
          datasets: [
            {
                // Datas for each items (clockwise from top)
                data: [4, 3, 3, 2, 3, 4],
                // Labels for a graph
                label: "Skill",
                // background
                backgroundColor: "rgba(51,255,51,0.5)",
                // Sets whether the end of the line should be square or rounded. Default is a square (butt).
                borderCapStyle: "butt",
                // lines color
                borderColor: "rgba(51,255,51,1)",
                // dash a line
                borderDash: [],
                // Dashed line offset (distance from reference point)
                borderDashOffset: 0.0,
                // The style of where lines meet. Default is 'miter'
                borderJoinStyle: 'miter',
                // line width. Specified in pixels. Initial value is 3.
                borderWidth: 3,
                // Whether to fill the chart. Initial value is true. If set to false, the graph will have only borders.
                fill: true,
                // Set the overlap when drawing multiple graphs on top of each other. Something like z-index. Initial value is 0.
                order: 0,
                // If the value is greater than 0, it will be a curve graph with the formula "Bezier curve". Initial value is 0.
                lineTension: 0
            }
          ]},
        options: {
            scales: {
              r: {
                // min and max val for a graph
                min: 0,
                max: 5,
                // background color
                backgroundColor: "rgba(17,17,17)",
                // grid line
                grid: {
                  color: "gray",
                },
                // angle line
                angleLines: {
                  color: "gray",
                },
                // labels for each
                pointLabels: {
                  font: {
                    size: 20
                  }
                },
          　　　　ticks: {
                  stepSize: 1,
                  fontColor: 'black', // number of scale
                }
              },
   　　     },
        },　　
        });
}

