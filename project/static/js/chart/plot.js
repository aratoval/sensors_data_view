var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

  type: 'line',

  data: {

    datasets: [{

      data: []

    }, {

      data: []

    }]

  },

  options: {

    scales: {

      xAxes: [{
            type: 'realtime',
                realtime: {

                  onRefresh: function(chart) {

                    chart.data.datasets.forEach(function(dataset) {

                      dataset.data.push({

                        x: Date.now(),

                        y: Math.random()

                      });

                    })

                  }

                }

              }]

    }

  }

});