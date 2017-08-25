export const getConfig = (name, options = {}) => {
  return configs[name](options);
};

const configs = {
  stakedBar (options) {
    const {series = [], categories = []} = options;
    return {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Stacked bar chart'
      },
      xAxis: {
        categories
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Title'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series
    }
  }
};
