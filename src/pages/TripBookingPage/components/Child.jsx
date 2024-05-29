import React, { useEffect } from "react";

const Child = () => {
  // 每次畫面重新渲染完會執行
  useEffect(() => {
    console.log("子組件被重新渲染了");
  });

  return (
    <>
      <h1>Child</h1>
    </>
  );
};

export default Child;
