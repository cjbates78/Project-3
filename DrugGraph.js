const config = {
    type: 'bubble',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: '5 Most Common Overdose Drugs'
        }
      }
    },
  };

  const DATA_COUNT = 11;
  const NUMBER_CFG = {count: DATA_COUNT, rmin: 5, rmax: 15, min: 0, max: 100};
  
  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.bubbles(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },
      {
        label: 'Dataset 2',
        data: Utils.bubbles(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.orange,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
      },
       {
        label: 'Dataset 3',
        data: Utils.bubbles(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.yellow,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),
      },
       {
        label: 'Dataset 4',
        data: Utils.bubbles(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.green,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
      },
       {
        label: 'Dataset 5',
        data: Utils.bubbles(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      },
    ]
  };  