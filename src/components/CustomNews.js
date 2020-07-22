import React, { useState } from "react";

function CustomNews({ getCustomNews, customMenu }) {
  const [country, setCountry] = useState("in");
  const [category, setcategory] = useState("general");

  const handleCountry = event => setCountry(event.target.value);
  const handleCategory = event => setcategory(event.target.value);
  const Customsearch = e => {
    e.preventDefault();
    getCustomNews(country, category);
  };
  const customForm = {
    padding: "10px",
    fontFamily: "Arial",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  const select = {
    margin: "10px",
    alignItems: "center"
  };
  return (
    <div className={`CustomNews ${customMenu ? "show" : "hidden"}`}>
      <form style={customForm} onSubmit={Customsearch}>
        <div style={select}>
          <label>
            Select Country :-
            <select
              className="ml-2"
              value={country}
              onChange={handleCountry.bind(this)}
            >
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="gb">United Kingdom</option>
              <option value="de">Germany</option>
              <option value="ca">Canada</option>
              <option value="it">Italy</option>
              <option value="ar">Argentina</option>
              <option value="ae">United Arab Emirates</option>
              <option value="pt">Portugal</option>
              <option value="ch">Switzerland</option>
            </select>
          </label>
        </div>
        <div style={select}>
          <label>
            Select Category :-
            <select
              className="ml-2"
              value={category}
              onChange={handleCategory.bind(this)}
            >
              <option value="general">Latest</option>
              <option value="business">Business</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </label>
        </div>
        <button>Custom Search</button>
      </form>
    </div>
  );
}

export default CustomNews;
