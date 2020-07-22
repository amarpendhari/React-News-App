import React from "react";

function Article({ article }) {
  return (
    <div>
      <div
        className="card"
        style={{ width: "18rem" }}
        key={article.publishedAt}
      >
        <img
          className={`card-img-top ${article.urlToImage ? "astro" : "noImage"}`}
          src={`${
            article.urlToImage
              ? article.urlToImage
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1Pb6UlYR71k3SK1B45Pw0m2eRfG1YFKwucw&usqp=CAU"
          }`}
          alt={article.title}
        ></img>
        <div className="card-body">
          <h5 className="card-title">
            {" "}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {article.title}
            </a>
          </h5>
          <p className="card-text">{article.description}</p>
          <div className="d-flex pt-2">
            {article.author ? (<p className="publishedBy">
              Published By
              <b>{article.author}</b>
            </p>) : (<p></p>)}
            <p className="publishedAt">
              <b style={{ fontSize: "12px" }}>
                {article.publishedAt.slice(0, 10)}
              </b>
              {article.publishedAt.slice(11, 16)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
