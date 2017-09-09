import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import {getConfig} from './chart-config';

class Chart extends Component {
  constructor (...props) {
    super(...props);
  }

  getConfigOptions () {
    const categories = ['stargazers_count', 'watchers', 'forks', 'open_issues'];
    const selectedItems = this.props.data.filter((item, index) => this.props.selected.includes(index));
    const series = selectedItems.map(item => {
      const {name, stargazers_count, watchers, forks, open_issues} = item;
      return {
        name: name,
        data: [stargazers_count, watchers, forks, open_issues]
      }
    });

    return {series, categories}
  }

  get config () {
    return getConfig('stakedBar', this.getConfigOptions());
  }

  render () {
    return this.props.selected.length
      ? <ReactHighcharts
        config={this.config}
        domProps={{className: 'highcharts-dom-wrapper'}} />
      : null;
  }
}

export default Chart;
