import React, { useState, useEffect } from "react";
import "./Home.scss";
import backgroundImg1 from "/images/日本櫻花.jpg";
import backgroundImg2 from "/images/大阪街頭.jpg";
import backgroundImg3 from "/images/京都古城.jpg";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  // 創建一個陣列，包含三張背景圖片的路徑，每三秒切換一次背景圖片
  const backgroundImgs = [backgroundImg1, backgroundImg2, backgroundImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
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
      <section className="play-theme">
        <div className="theme-title">
          <p>遊玩主題</p>
        </div>
        <div className="circle-img">
          <div className="circle">
            <img src="/images/北海道雪景.jpg" alt="" />
            <p>北海道美景，美不勝收</p>
          </div>
          <div className="circle">
            <img src="/images/日本壽司.jpg" alt="" />
            <p>日本道地壽司與美食</p>
          </div>
          <div className="circle">
            <img src="/images/富士山.jpg" alt="" />
            <p>富士山風景與溫泉</p>
          </div>
          <div className="circle">
            <img src="/images/清水寺.jpg" alt="" />
            <p>京都清水寺，千年古都</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
