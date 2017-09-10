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
      selected: []
    };

    this.onSelectRow = this.onSelectRow.bind(this);
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
          data={this.props.repositories}
          selected={this.state.selected}
          onSelectRow={this.onSelectRow} />
        <Chart
          data={this.props.repositories}
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
