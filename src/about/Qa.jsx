import Navbar from "../Navbar";
import "../about/CSS/styles2.css"
import { Link } from "react-router-dom";

export default function Qa() {
  return (
    <div id="QaPage">
      <Navbar />
      {/* 內容區 */}
      <main>
        <div className="QaPage-wrap">
          {/* 左側按鈕 */}
          <div className="QaPage-btn ">
            <Link to="/About"><button className="button-grow-shadow">關於</button></Link>
            <Link to="/Qa"><button className="button-grow-shadow">FAQ</button></Link>
            <Link to="/Content"><button className="button-grow-shadow">聯絡我們</button></Link>
    
          </div>

          {/* 內容區  */}
          <div className="QaPage-info-box">

            <div className="QaPage-box2">
              <h2>FAQ</h2>

            </div>
            {/* 手風琴區accordion */}
            <div id="QaPage-box3">
              <ul className="accordion">
                <li className="accordion-item">
                  <input id="s1" className="hide" type="checkbox" />
                  <label htmlFor="s1" className="accordion-label">如何找回密碼?</label>
                  <p className="accordion-child">可以到會員專區中點選「忘記密碼」進型設定。</p>
                </li>
                <li className="accordion-item">
                  <input id="s2" className="hide" type="checkbox" />
                  <label htmlFor="s2" className="accordion-label">怎麼開始寄明信片?</label>
                  <p className="accordion-child">
                      在「配對明信片」&gt; 「紀錄」&gt; 「寄信紀錄」中可以查看，若對方已收到並輸入明信片ID，將會在此呈現。</p>
                </li>
                <li className="accordion-item">
                  <input id="s3" className="hide" type="checkbox" />
                  <label htmlFor="s3" className="accordion-label">怎麼知道信送到了沒?</label>
                  <p className="accordion-child">在「配對明信片」中有詳細的教學，記得仔細閱讀哦!</p>
                </li>
                <li className="accordion-item">
                  <input id="s4"  className="hide" type="checkbox" />
                  <label htmlFor="s4"  className="accordion-label">從哪裡看寄信紀錄?</label>
                  <p className="accordion-child">進入「配對明信片」&gt; 「紀錄」&gt; 「寄信紀錄」中即可查看。</p>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 裝飾區  */}
        <figure className="QaPage-pic1"><img src="./images/tape-1.png" alt="" /></figure>
        <figure className="QaPage-pic2"><img src="./images/tape-1.png" alt="" /></figure>
        <figure className="QaPage-pic3"><img src="./images/postmask-5.png" alt="" /></figure>
        <figure className="QaPage-pic4"><img src="./images/flowers-2.png" alt="" /></figure>
        <figure className="QaPage-pic5"><img src="./images/postmark-1.png" alt="" /></figure>
        <figure className="QaPage-pic6"><img src="./images/small_paper-3.png" alt="" /></figure>
        <figure className="QaPage-pic7"><img src="./images/flowers-3.png" alt="" /></figure>

      </main>

      {/* 頁尾區  */}
      <footer className="QaPage-footer">
        <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
      </footer>
    </div>
  )
}