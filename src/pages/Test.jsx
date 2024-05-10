import React from "react";
import propTypes from "prop-types";

const Test = ({ word }) => {
  return <div>{word}</div>;
};

Test.prototype = {
  word: propTypes.string,
};

export default Test;
