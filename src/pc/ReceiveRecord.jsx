import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "../pc/css/receiveR.css";

export default function ReceiveRecord() {
  return (
    <div id="RRpage">
      <Navbar />
      <main id="RRpage-main">
        {/* 左側區域 */}
        <aside>
          <div id="RRpage-sidebar">
            {/* 寄件區  */}
            <div className="RRpage-sidebar-item01 button-grow-shadow">
              <img src="./images/btn-3.svg" alt="" />
              <Link to="/Post"><h2>寄件區</h2></Link>
            </div>
            {/* 紀錄區  */}
            <div className="RRpage-sidebar-item02 button-grow-shadow">
              <img src="./images/btn-3.svg" alt="" />
              <Link to="/ReceiveRecord"> <h2>紀錄區</h2>
            </Link>

            </div>
          </div>
        </aside>

        {/* 輸入內容區  */}

        <div id="RRpage-r-postcard-box">
          <div className="RRpage-bg01">
            <img src="./images/p2-papers-4.jpg" alt="" />
          </div>
          <div className="RRpage-bg02">
            <img src="./images/p2-papers-3.jpg" alt="" />
          </div>
          <div className="RRpage-bg03">
            <img src="./images/p2-papers-2.jpg" alt="" />
          </div>
          <div className="RRpage-content">
            <h2>明信片ID</h2>
            <h2>寄件會員</h2>
            <h2>寄件區域</h2>
            <h2>收件日期</h2>
          </div>
          <hr />
          <div className="RRpage-record-box">

            <table>
              <tbody>
                <tr>
                  <td>#782grfk</td>
                  <td>@aakadfgh</td>
                  <td>中部</td>
                  <td>2024/01/01</td>
                </tr>
                <tr>
                  <td>#uhf2857</td>
                  <td>@2525ghtf</td>
                  <td>北部</td>
                  <td>2024/01/13</td>
                </tr>
                <tr>
                  <td>#285fr22</td>
                  <td>@yyan6978</td>
                  <td>南部</td>
                  <td>2024/02/17</td>
                </tr>
                <tr>
                  <td>#965dki2</td>
                  <td>@uj585858</td>
                  <td>東部</td>
                  <td>2024/04/23</td>
                </tr>
                <tr>
                  <td>#cdlkf58</td>
                  <td>@rjxg1231</td>
                  <td>北部</td>
                  <td>2024/05/29</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
      {/* 連結區  */}
      <div className="RRpage-send-record button-grow-shadow">
      <Link to="/ReceiveRecord">收件紀錄</Link>
      </div>
      <div className="RRpage-receipt-record button-grow-shadow">
        <Link to="/PostRevcord">寄件紀錄</Link>
       
      </div>

      <div className="RRpage-link-id button-grow-shadow">
      <Link to="/InputId"> 輸入明信片ID</Link>
      </div>
      {/* 迴紋針 */}
      <div className="RRpage-paper-clip01">
        <img src="./images/paper_clip-red.png" alt="" />
      </div>
      <div className="RRpage-paper-clip02">
        <img src="./images/paper_clip-red.png" alt="" />
      </div>
      <div className="RRpage-paper-clip03">
        <img src="./images/paper_clip-red.png" alt="" />
      </div>

      {/* 裝飾區  */}
      {/* 愛心印章 */}
      <figure className="RRpage-img01"><img src="./images/postmask-5.png" alt="" /></figure>
      {/* update印章   */}
      <figure className="RRpage-img02"><img src="./images/postmark-3.png" alt="" /></figure>
      {/* 右上郵搓  */}
      <figure className="RRpage-img03"><img src="./images/stamp-1.png" alt="" /></figure>
      {/* 右下approved印章  */}
      <figure className="RRpage-img04"><img src="./images/postmark-2.svg" alt="" /></figure>

      {/* 頁尾區 */}
      <footer className="RRpage-footer">
        <div>
          <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
        </div>
      </footer>
    </div>
  )
}