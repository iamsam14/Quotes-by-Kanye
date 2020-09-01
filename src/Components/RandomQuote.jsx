import React, { useState } from "react";
import axios from "axios";

const RandomQuote = () => {
  const [apiData, setapiData] = useState(0);

  function handleClick() {
    axios.get("https://api.kanye.rest/").then((data) => setapiData(data.data));
  }
  return (
    <>
      <h3 className="author">Quotes by Kanye</h3>
      <button
        type="button"
        className="quotebutton"
        onClick={() => handleClick()}
      >
        Kanye said...
      </button>
      <blockquote>
        <h5 className="quote">{apiData ? '"' + apiData.quote + '"' : ""}</h5>
      </blockquote>
    </>
  );
};

export default RandomQuote;
