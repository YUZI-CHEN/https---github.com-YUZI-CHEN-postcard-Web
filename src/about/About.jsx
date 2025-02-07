import Navbar from "../Navbar";
import "../about/CSS/styles.css";
import { Link } from "react-router-dom";


export default function About(){
  return(
   
    <div id="AboutPage">
    <Navbar/>
    {/* 內容區 */}
    <main id="About-main">
    <div className="About-wrap">
      {/* 左側按鈕  */}
      <div className="About-btn ">
      <Link to="/About"><button className="button-grow-shadow">關於</button></Link>
      <Link to="/Qa"><button className="button-grow-shadow">FAQ</button></Link>
        <Link to="/Content"><button className="button-grow-shadow">聯絡我們</button></Link>
        
      </div>

      {/* 中間內容 */}
      <div className="About-main-box">
        <div className="About-title">
          <h2>
            <span className="block block1">關</span>
            <span className="block block2">於</span>
            <span className="block block3">郵</span>
            <span className="block block4">你</span>
            <span className="block block5">真</span>
            <span className="block block6">好</span>
          </h2>
        </div>

        <div className="About-info">
          <div className="About-box1">
            <div className="About-box1-content">
            <h3>郵你真好是一個什麼樣的平台?</h3>
            <p>為了喜歡使用實體卡片與別人交流的人所設計的平台，在這裡可以獲得良好情緒價值、找到同頻的好夥伴進行友好交流，我們希望在這科技發達的時代，依然能夠使用實體明信片並配上手寫字，創造有溫度的交流。
            </p>
            </div>
           
          </div>

          <div className="About-box1b">
            <div className="About-box2-content">
            <h3>郵你真好是如何誕生的呢?</h3>
            <p>為了喜歡使用實體卡片與別人交流的人所設計的平台，在這裡可以獲得良好情緒價值、找到同頻的好夥伴進行友好交流，我們希望在這科技發達的時代，依然能夠使用實體明信片並配上手寫字，創造有溫度的交流。
            </p>
            </div>
           
          </div>
        </div>
      </div>

      {/* 裝飾區  */}
      {/* 下面膠帶 */}
      <figure className="About-pic1"><img src="./images/tape-1.png" alt=""/></figure>
      {/* 上面膠帶 */}
      <figure className="About-pic2"><img src="./images/tape-1.png" alt=""/></figure>
      {/* 愛心章 */}
      <figure className="About-pic3"><img src="./images/postmask-5.png" alt=""/></figure>
      {/* 左邊白花 */}
      <figure className="About-pic4"><img src="./images/flowers-2.png" alt=""/></figure>
      {/* 右下圓章 */}
      <figure className="About-pic5"><img src="./images/postmark-1.png" alt=""/></figure>
      {/* 右正方底圖 */}
      <figure className="About-pic6"><img src="./images/small_paper-3.png" alt=""/></figure>
      {/* 右花 */}
      <figure className="About-pic7"><img src="./images/flowers-3.png" alt=""/></figure>
      <figure className="About-pic8"><img src="./images/tape-2.png" alt=""/></figure>
      <figure className="About-pic9"><img src="./images/tape-2.png" alt=""/></figure>
    </div>
  </main>


  {/* 頁尾區  */}
  <footer className="AboutPage-footer">
    <div>
      <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
    </div>
  </footer>
    </div>
  
  )
}