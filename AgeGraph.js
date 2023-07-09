const config = {
    type: 'polarArea',
    data: data,
    options: {
      responsive: true,
      scales: {
        r: {
          pointLabels: {
            display: true,
            centerPointLabels: true,
            font: {
              size: 18
            }
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Drug Related Deaths 2012-2022 by Age'
        }
      }
    },
  };
  const DATA_COUNT = 5;
  const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 1000};
  
  const labels = ['0-19', '20-34', '35-49', '50-64', '65+'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: [
          Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
          Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),
          Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
          Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        ]
      }
    ]
  };

