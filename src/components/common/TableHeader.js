import React, { Component } from "react";

export default class TableHeader extends Component {
  raiseSort(path) {
    const { sortColumn, onSort } = this.props;
    if (sortColumn.path === path) {
      onSort({ path, order: sortColumn.order === "asc" ? "desc" : "asc" });
    } else {
      onSort({ path: path, order: "asc" });
    }
  }

  displaySortIcon(column) {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className={"fa fa-sort-asc"} />;
    return <i className={"fa fa-sort-desc"} />;
  }

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.displaySortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
