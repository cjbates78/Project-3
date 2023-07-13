const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: '5 Deadliest Drugs'
        }
      }
    },
  };

  const DATA_COUNT = 11;
  const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 1350};
  
  const labels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

  const line_chart = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset1',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },
      {
        label: 'Dataset2',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.orange,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
      },
       {
        label: 'Dataset3',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.yellow,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),
      },
       {
        label: 'Dataset4',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.green,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
      },
       {
        label: 'Dataset5',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      },
    ]
  };  
