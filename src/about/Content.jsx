import Navbar from "../Navbar";
import "../about/CSS/styles3.css";
import { Link } from "react-router-dom";
export default function Content() {
  return (
    <div id="contentPage">
      <Navbar />

      {/* 內容區 */}
      <main id="contentPage-main">
        <div className="contentPage-wrap">
          {/* 左側按鈕  */}
          <div className="contentPage-btn ">
            <Link to="/About"><button className="button-grow-shadow">關於</button></Link>
            <Link to="/Qa"><button className="button-grow-shadow">FAQ</button></Link>
            <Link to="/Content"><button className="button-grow-shadow">聯絡我們</button></Link>

          </div>

          {/* 內容區  */}
          <div className="contentPage-info2-box">
            <div className="contentPage-box1c">
              <h2>請在此處留下您的問題與聯繫方式，我們將盡速與您聯繫。</h2>
            </div>

            <div className="contentPage-info2">
              <div className="contentPage-box2c">
                <h3>名字</h3>
                <input type="text"/>
              </div>
              <div className="contentPage-box3c">
                <h3>E-mail</h3>
                <input type="text"/>
              </div>
              <div className="contentPage-box4c">
                <h3>主旨</h3>
                <input type="text"/>
              </div>
              <div className="contentPage-box5c">
                <h3>內容</h3>
                <input type="text"/>
              </div>
            </div>

            <div className="contentPage-box6c">
              <button>
                <p>送出</p>
              </button>
            </div>
          </div>
        </div>


        {/* 裝飾區   */}
        <figure className="contentPage-pic1"><img src="./images/tape-1.png" alt=""/></figure>
        <figure className="contentPage-pic2"><img src="./images/tape-1.png" alt=""/></figure>
        <figure className="contentPage-pic3"><img src="./images/postmask-5.png" alt=""/></figure>
        <figure className="contentPage-pic4"><img src="./images/flowers-2.png" alt=""/></figure>
        <figure className="contentPage-pic5"><img src="./images/postmark-1.png" alt=""/></figure>
        <figure className="contentPage-pic6"><img src="./images/small_paper-3.png" alt=""/></figure>
        <figure className="contentPage-pic7"><img src="./images/flowers-3.png" alt=""/></figure>

      </main> 

      {/* 頁尾區  */}
      <footer className="contentPage-footer">
        <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
      </footer>
    </div>
  )
}