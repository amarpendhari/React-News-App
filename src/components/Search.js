import React, { Component } from "react";

export class Search extends Component {
  state = {
    search: ""
  };
  handleChange = e => {
    this.setState({ search: e.target.value });
  };
  submitSearch = e => {
    if (this.state.search !== "") {
      e.preventDefault();
      this.props.getNews(this.state.search);
    } else {
      alert("Enter Topic to search");
      e.preventDefault();
    }
  };
  render() {
    return (
      <div className="SearchNews">
        <form className="search-form form" onSubmit={this.submitSearch}>
          <input
            className="search-field"
            type="text"
            placeholder="Search here..."
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
          ></input>
          <button className="search-submit button">
            <i className="fa fa-search" style={{ fontSize: "20px" }}></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
