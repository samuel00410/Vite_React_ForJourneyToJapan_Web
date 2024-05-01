import React, { useState, useEffect } from "react";
import "./Home.scss";
import backgroundImg1 from "/images/日本櫻花.jpg";
import backgroundImg2 from "/images/大阪街頭.jpg";
import backgroundImg3 from "/images/富士山2.jpg";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  // 創建一個陣列，包含三張背景圖片的路徑，每三秒切換一次背景圖片
  const backgroundImgs = [backgroundImg1, backgroundImg2, backgroundImg3];
  useEffect(() => {
    setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval();
    };
  });

  return (
    <>
      <section
        className="slide-img"
        style={{ backgroundImage: `url(${backgroundImgs[imageIndex]})` }}
      >
        <div className="filter"></div>
        <div className="travel-description">
          <p>
            休閒空間，特殊假期。
            <br />
            安排一趟日本旅遊行程，放鬆身心。
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
