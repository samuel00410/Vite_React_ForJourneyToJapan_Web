import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; //讀取Redux的全局狀態和改變狀態的方法
import { toggleTheme } from "../../store/themeSlice";
import "./Home.scss";
import backgroundImg1 from "/images/日本櫻花.jpg";
import backgroundImg2 from "/images/大阪街頭.jpg";
import backgroundImg3 from "/images/京都古城.jpg";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  // 創建一個陣列，包含三張背景圖片的路徑，每三秒切換一次背景圖片
  const backgroundImgs = [backgroundImg1, backgroundImg2, backgroundImg3];

  // 取得 Redux 中的 themeSlice 的狀態
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <main>
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
      <section
        className={`play-theme ${
          isDarkTheme ? "play-theme-dark" : "play-theme-light"
        }`}
      >
        <div className="theme-title">
          <p>遊玩主題</p>
        </div>
        <div className="circle-img">
          <div className="circle">
            <img
              title="北海道雪景"
              src="/images/北海道雪景.jpg"
              alt="北海道雪景"
            />
            <p>北海道美景，美不勝收</p>
          </div>
          <div className="circle">
            <img title="日本壽司" src="/images/日本壽司.jpg" alt="日本壽司" />
            <p>日本道地壽司與美食</p>
          </div>
          <div className="circle">
            <img title="富士山" src="/images/富士山.jpg" alt="富士山" />
            <p>富士山風景與溫泉</p>
          </div>
          <div className="circle">
            <img title="清水寺" src="/images/清水寺.jpg" alt="清水寺" />
            <p>京都清水寺，千年古都</p>
          </div>
        </div>
      </section>
      <section className="empty-container">
        <h3>今天就開始規劃行程，找到最適合的方案</h3>
      </section>
      <section
        className={`google-map ${
          isDarkTheme ? "google-map-dark" : "google-map-light"
        }`}
      >
        <div className="location-title">
          <h3>日本地理位置</h3>
          <p>
            日本在地理上屬於東北亞，東鄰太平洋，西以日本海、朝鮮海峽、東海與歐亞大陸的西伯利亞、朝鮮半島、中國大陸鄰接，南以菲律賓海與台灣、馬里亞納群島鄰接，北以宗谷海峽、鄂霍次克海與庫頁島、千島群島鄰接。日本一年四季都是舒爽怡人的氣候，四季變化分明。
            南部暖和，越往北部越寒冷。
            特別是冬天吹西北季風，在日本海側會下很多雪。
            另一方面、在太平洋側會持續是被稱為「冬晴」的乾燥晴天。
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13695376.060860885!2d126.56245156312525!3d33.067057467476346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2z5pel5pys!5e0!3m2!1szh-TW!2stw!4v1714643600113!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Home;
