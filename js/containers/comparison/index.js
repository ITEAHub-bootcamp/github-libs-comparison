import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import apiMock from '../../mocks';
import Chart from '../../components/chart';
import Grid from '../../components/grid';
import {load} from '../../actions/repositories';
import {RaisedButton} from 'material-ui';

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
        <RaisedButton onClick={this.props.actions.load}>
          Load data
        </RaisedButton>
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

const mapStateToProps = ({repositories}) => {
  return {
    repositories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({load}, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comparison);
