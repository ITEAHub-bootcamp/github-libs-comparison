import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import apiMock from '../../mocks';
import Chart from '../../components/chart';
import Grid from '../../components/grid';
import {load} from '../../actions/repositories';
import {showLoader, hideLoader} from '../../actions/loading';
import {RaisedButton} from 'material-ui';
import Loader from '../../components/loader';

class Comparison extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      selected: []
    };

    this.onSelectRow = this.onSelectRow.bind(this);
    this.showLoaderTemporary = this.showLoaderTemporary.bind(this);
  }

  onSelectRow (selected) {
    this.setState({selected});
  }

  showLoaderTemporary () {
    const delay = 3000;
    this.props.showLoader();
    setTimeout(() => {
      this.props.hideLoader();
    }, delay);
  }

  render () {
    return (
      <div>
        <div>
          <RaisedButton onClick={this.props.actions.load}>
            Load data
          </RaisedButton>
        </div>
        <div>
          <RaisedButton onClick={this.showLoaderTemporary}>
            Show loader temporary
          </RaisedButton>
        </div>
        <Grid
          data={this.props.repositories}
          selected={this.state.selected}
          onSelectRow={this.onSelectRow} />
        <Chart
          data={this.props.repositories}
          selected={this.state.selected} />
        <Loader active={this.props.loading}/>
      </div>
    );
  }
}

const mapStateToProps = ({repositories, loading}) => {
  return {
    repositories,
    loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({load, showLoader}, dispatch),
    showLoader: () => dispatch(showLoader),
    hideLoader: () => dispatch(hideLoader)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comparison);
