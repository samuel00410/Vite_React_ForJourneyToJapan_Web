import React, { useState, useEffect } from "react";
import "./TripBook.scss";
import Test from "../Test";
import OpenAI from "openai";
import img1 from "/images/富士山.png";

const TripBook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ name: "Alice" });

  useEffect(() => {
    console.log("執行useEffect...");
  }, [data]); // data 是对象，引用在每次渲染时都会变化

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加Count按鈕</button>
      <button onClick={() => setData({ name: "Alice" })}>更新data按鈕</button>
    </div>
  );
};

export default TripBook;
