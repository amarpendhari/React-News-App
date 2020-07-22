import React, { Component } from "react";
import Article from "./Article";
import Search from "./Search";
import CustomNews from "./CustomNews";

export class Newz extends Component {
  state = {
    news: [],
    query: "general",
    total: "",
    pages: "",
    searched: "",
    customMenu: true
  };
  componentDidMount() {
    this.getLatestNews();
  }
  getLatestNews = () => {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=in&pageSize=30&apiKey=${process.env.REACT_APP_SECRET}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ news: data.articles });
      })
      .catch(err => console.log(err));
  };
  getCustomNews = (country, category) => {
    this.setState({ searched: "" });
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=30&apiKey=${process.env.REACT_APP_SECRET}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ news: data.articles });
        this.setState({ total: data.totalResults });
        this.setState({ pages: Math.ceil(data.totalResults / 20) });
      })
      .catch(err => console.log(err));
  };
  searchNews = data => {
    this.setState({ searched: data });
    fetch(
      `https://newsapi.org/v2/everything?q=${data}&pageSize=30&apiKey=${process.env.REACT_APP_SECRET}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ news: data.articles });
        this.setState({ total: data.totalResults });
        this.setState({ pages: Math.ceil(data.totalResults / 20) });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="NewzApp">
        <Search getNews={this.searchNews}></Search>

        <CustomNews
          customMenu={this.state.customMenu}
          getCustomNews={this.getCustomNews}
        ></CustomNews>

        {this.state.searched ? (
          <h3 className="mb-3">
            You searched for "{this.state.searched.toLocaleUpperCase()}"
          </h3>
        ) : (
          <p></p>
        )}
        <div className="newz-panel">
          {this.state.news.map((article, i) => (
            <Article key={i} article={article}></Article>
          ))}
        </div>
        <div></div>
      </div>
    );
  }
}

export default Newz;
