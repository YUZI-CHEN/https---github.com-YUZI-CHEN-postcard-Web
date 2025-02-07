import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "../pc/css/id.css";
export default function InputId() {
  return (
    <div id="inputIdpage">
      <Navbar />
      <main id="inputIdpage-main">
        {/* 左側區域  */}
        <aside>
          <div id="inputIdpage-sidebar">
            {/* 寄件區  */}
            <div className="inputIdpage-sidebar-item01 button-grow-shadow">
              <img src="./images/btn-3.svg" alt="" />
              <Link to="/Post"><h2>寄件區</h2></Link>

            </div>
            {/* 紀錄區  */}
            <div className="inputIdpage-sidebar-item02 button-grow-shadow">
              <img src="./images/btn-3.svg" alt="" />
              <Link to="/ReceiveRecord"> <h2>紀錄區</h2>
              </Link>

            </div>
          </div>
        </aside>

        {/* 輸入內容區  */}

        <div id="inputIdpage-id-box">
          <div className="inputIdpage-bg01">
            <img src="./images/p2-papers-3.jpg" alt="" />

          </div>
          <div className="inputIdpage-bg02">
            <img src="./images/p2-papers-2.jpg" alt="" />
          </div>
          <div className="inputIdpage-bg03">
            <img src="./images/p2-papers-4.jpg" alt="" />
          </div>
          <div className="inputIdpage-content">
            <h2>明信片ID</h2>
            <h2>收件日期</h2>
          </div>
          <hr />
          <div className="inputIdpage-input-box">

            <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10" value="請輸入明信片上的ID" />
            <input type="date" id="input_date" name="input_date" min="2024-12-05T00:00" max="3024-12-31T00:00" />
          </div>
          <div id="inputIdpage-btn-sure">
            <button>確認</button>
          </div>


          {/* 連結區  */}
        </div>
      </main>
      <div className="inputIdpage-link-id button-grow-shadow">
        <Link to="/InputId"> 輸入明信片ID</Link>
      </div>
      <div className="inputIdpage-receipt-record button-grow-shadow">
        <Link to="/ReceiveRecord">收件紀錄</Link>
      </div>

      <div className="inputIdpage-send-record button-grow-shadow">
        <Link to="/PostRevcord">寄件紀錄</Link>
      </div>
      {/* 迴紋針 */}
      <div className="inputIdpage-paper-clip01">
        <img src="./images/paper_clip-red.png" alt="" />
      </div>
      <div className="inputIdpage-paper-clip02">
        <img src="./images/paper_clip-red.png" alt="" />
      </div>
      <div className="inputIdpage-paper-clip03">
        <img src="./images/paper_clip-red.png" alt="" />
      </div>

      {/* 裝飾區  */}
      <figure className="inputIdpage-img01"><img src="./images/postmask-5.png" alt="" /></figure>
      <figure className="inputIdpage-img02"><img src="./images/postmark-3.png" alt="" /></figure>
      <figure className="inputIdpage-img03"><img src="./images/stamp-1.png" alt="" /></figure>
      <figure className="inputIdpage-img04"><img src="./images/small_paper-3.png" alt="" /></figure>
      <figure className="inputIdpage-img05"><img src="./images/stamp-8.png" alt="" /></figure>
      <figure className="inputIdpage-img06"><img src="./images/stamp-7.png" alt="" /></figure>
      {/* 頁尾區 */}
      <footer className="inputIdpage-footer">
        <div>
          <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
        </div>
      </footer>

    </div>
  )
}