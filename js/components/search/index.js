import React, {Component} from 'react';
import apiMock from '../../mocks';
import {TextField} from 'material-ui';
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
      data: []
    };

    this.onSelectRow = this.onSelectRow.bind(this);
  }

  componentDidMount () {
    apiMock.get('search?foo').then(repos => {
      this.setState({data: repos.repositories.items.slice(0, 10)});
    });
  }

  get tableHeader () {
    return <TableRow>
      {fields.map(item => <TableHeaderColumn>{item}</TableHeaderColumn>)}
    </TableRow>;
  }

  get tableBody () {
    return this.state.data.map(item => <TableRow>
      {fields.map(field => <TableRowColumn>{item[field]}</TableRowColumn>)}
    </TableRow>);
  }

  onSelectRow (event) {
    console.error('onSelectRow', event);
    // TODO: implement chart drawing
  }

  render () {
    return (
      <div>
        <TextField id="repo-name" fullWidth />
        <Table multiSelectable={true} onRowSelection={this.onSelectRow}>
          <TableHeader displaySelectAll={false} enableSelectAll={false}>
            {this.tableHeader}
          </TableHeader>
          <TableBody>
            {this.tableBody}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Search;
