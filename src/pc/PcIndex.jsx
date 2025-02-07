
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import "../pc/css/PC-index.css"

import TaiwanPage from "./component/TaiwanPage";

export default function PcIndex() {

  return (
    <div id="pcIndexPage">
      <Navbar />
      {/* 主要內容區 */}
      <main id="pcIndexPage-main">
        <aside>
          <div id="pcIndexPage-sidebar">
            {/* 寄件區  */}
            <div className="pcIndexPage-sidebar-item01 button-grow-shadow">
              <img src="./images/btn-3.svg" alt="" />
              <Link to="/Post"><h2>寄件區</h2></Link>
            </div>
            {/* 紀錄區  */}
            <div className="pcIndexPage-sidebar-item02 button-grow-shadow">
              <img src="./images/btn-3.svg" alt="" />
              <Link to="/ReceiveRecord"><h2>紀錄區</h2></Link>


            </div>
          </div>


        </aside>


        {/* 內容區 */}
        <div id="pcIndexPage-rule-box">
          <img src="./images/p2-papers-1.jpg" alt="" />
          <div className="pcIndexPage-rule-title">
            <img src="./images/規.svg" alt="" />
            <img src="./images/則.svg" alt="" />
            <img src="./images/說.svg" alt="" />
            <img src="./images/明.svg" alt="" />
          </div>
          <div className="pcIndexPage-rule">

            <p>1. 點擊開始配對：郵你真好為您<span>隨機選擇</span>一位用戶來寄送明信片，他們將與您共享其地址與一些詳細資料。每一張明信片提供一組不重複的序號（如#12345），用於標識您將要發送的明信片ID。</p>
            <p>2. 請記得在明信片上寫上明信片ID、郵遞區號、地址和收件人名稱。</p>
            <p>3.若您有收到來自其他用戶的明信片，請記得前往<span>記錄</span>中的<span>「明信片ID」</span>填寫明信片ID喔！
            </p>
          </div>
        </div>

        <TaiwanPage/>

        <div id="pcIndexPage-button-pair">
          <Link to="/Post"> <button >開始配對</button></Link>

        </div>

      </main>

      {/* 裝飾區 */}
      {/* 白花 */}
      <figure className="pcIndexPage-img01">
        <img src="./images/flowers-2.png" alt="" />
      </figure>
      {/* APPROVED印章  */}
      <figure className="pcIndexPage-img02"><img src="./images/postmark-2.svg" alt="" />
      </figure>
      {/* 郵票  */}
      <figure className="pcIndexPage-img03"><img src="./images/stamp-7.png" alt="" />
      </figure>
      {/* UPDATE印章  */}
      <figure className="pcIndexPage-img04"><img src="./images/postmark-3.png" alt="" />
      </figure>
      {/* rule-box左下的紙  */}
      <figure className="pcIndexPage-img05"><img src="./images/small_paper-3.png" alt="" />
      </figure>

      {/* 頁尾區 */}
      <footer className="pcIndexPage-footer">
        <div>
          <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
        </div>
      </footer>
    </div>

  )
}