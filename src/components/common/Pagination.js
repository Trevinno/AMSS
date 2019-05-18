import React, { Component } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
  render() {
    const { pageSize, itemsCount, currentPage, onPageChange } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    let links = [];

    for (let i = 0; i < pagesCount; i++) {
      links.push(
        <li
          className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
          key={i}
        >
          <a className="page-link" onClick={() => onPageChange(i + 1)}>
            {i + 1}
          </a>
        </li>
      );
    }
    return (
      <div>
        <ul className="pagination">{links}</ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
