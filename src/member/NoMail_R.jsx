
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./scss/nomail2.scss";
export default function NoMail_R(){

  return(
    <div id="nomail_R-page">
      <Navbar/>
      <main id="nomail_R-mail">
      <h2>找回密碼<br/>請前往您的E-mail確認</h2>
      <div id="nomail_R-content-box02">
        <img src="./images/p4-papers-1.png" alt=""/>
        <div className="nomail_R-e-content02">
          <p>哈囉!(使用者帳號)<br/>
            請點選以下按鈕</p>
            
           <Link to="/NewPassword"> <button>設定新密碼</button></Link>
         
          <p>或點選以下連結</p>
          <a href="htttps://ejejeieioooxxpxpgje.ocjeoeoe">htttps://ejejeieioooxxpxpgje.ocjeoeoe</a>
          <div className="nomail_R-endp">
            <p>連結24小時內有效! </p>
           <p> 郵你真好感謝您~</p>
           </div>

        </div>
      </div>

    </main>
  {/* 背景插圖 */}
    <figure className="nomail_R-img01">
      <img src="./images/small_paper-4.svg" alt=""/>
    </figure>
    <figure className="nomail_R-img02">
      <img src="./images/flowers-1.png" alt=""/>
    </figure>
    <figure className="nomail_R-img03">
      <img src="./images/postmark-1.png" alt=""/>
    </figure>

    <figure className="nomail_R-img04">
      <img src="./images/small_paper-3.png" alt=""/>
    </figure>
    <figure className="nomail_R-img05">
      <img src="./images/flowers-3.png" alt=""/>
    </figure>

    <footer  className="nomail_R-page-footer">
      <div>
        <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
      </div>
    </footer>

    </div>
  );
}