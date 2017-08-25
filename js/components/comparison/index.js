import React, {Component} from 'react';
import apiMock from '../../mocks';
import {getConfig} from './chart-config';
import ReactHighcharts from 'react-highcharts';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';

const fields = ['id', 'name', 'description', 'stargazers_count', 'watchers', 'forks', 'open_issues'];

class Search extends Component {
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

  get tableHeader () {
    return <TableRow>
      {fields.map(item => <TableHeaderColumn key={item}>{item}</TableHeaderColumn>)}
    </TableRow>;
  }

  get tableBody () {
    return this.state.data.map((item, index) => <TableRow key={item.id} selected={this.isSelected(index)}>
      {fields.map(field => <TableRowColumn key={field}>{item[field]}</TableRowColumn>)}
    </TableRow>);
  }

  getConfigOptions () {
    const categories = ['stargazers_count', 'watchers', 'forks', 'open_issues'];
    const selectedItems = this.state.data.filter((item, index) => this.state.selected.includes(index));
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

  isSelected (index) {
    return this.state.selected.includes(index);
  }

  onSelectRow (rows) {
    this.setState({selected: rows});
  }

  render () {
    return (
      <div>
        <div>
          <Table multiSelectable={true} onRowSelection={this.onSelectRow}>
            <TableHeader displaySelectAll={false} enableSelectAll={false}>
              {this.tableHeader}
            </TableHeader>
            <TableBody deselectOnClickaway={false}>
              {this.tableBody}
            </TableBody>
          </Table>
        </div>
        <ReactHighcharts
          config={this.config}
          domProps={{className: 'highcharts-dom-wrapper'}} />
      </div>
    );
  }
}

export default Search;
