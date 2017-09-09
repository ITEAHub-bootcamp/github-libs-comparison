import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';

class Grid extends Component {
  constructor (...props) {
    super(...props);

    this.fields = ['id', 'name', 'description', 'stargazers_count', 'watchers', 'forks', 'open_issues'];
    this.onSelectRow = this.onSelectRow.bind(this);
  }

  get tableHeader () {
    return <TableRow>
      {this.fields.map(item => <TableHeaderColumn key={item}>{item}</TableHeaderColumn>)}
    </TableRow>;
  }

  isSelected (index) {
    return this.props.selected.includes(index);
  }

  get tableBody () {
    return this.props.data.map((item, index) =>
      <TableRow key={item.id} selected={this.isSelected(index)}>
      {
        this.fields.map(field =>
          <TableRowColumn key={field}>{item[field]}</TableRowColumn>)
      }
    </TableRow>);
  }

  onSelectRow (id) {
    this.props.onSelectRow(id);
  }

  render () {
    return (
      <Table multiSelectable={true} onRowSelection={this.onSelectRow}>
        <TableHeader displaySelectAll={false} enableSelectAll={false}>
          {this.tableHeader}
        </TableHeader>
        <TableBody deselectOnClickaway={false}>
          {this.tableBody}
        </TableBody>
      </Table>
    );
  }
}

export default Grid;
