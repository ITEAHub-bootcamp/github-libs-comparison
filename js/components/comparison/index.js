import React, {Component} from 'react';
import apiMock from '../../mocks';
import Chart from './chart';
import Grid from './grid';

class Comparison extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      data: [],
      selected: []
    };

    this.onSelectRow = this.onSelectRow.bind(this);
  }

  componentDidMount () {
    apiMock.get('search?foo').then(repos => {
      this.setState({data: repos.repositories.items.slice(0, 5)});
    });
  }

  onSelectRow (selected) {
    this.setState({selected});
  }

  render () {
    return (
      <div>
        <Grid
          data={this.state.data}
          selected={this.state.selected}
          onSelectRow={this.onSelectRow} />
        <Chart
          data={this.state.data}
          selected={this.state.selected} />
      </div>
    );
  }
}

export default Comparison;
