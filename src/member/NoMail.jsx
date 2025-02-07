import Navbar from "../Navbar";
import "./scss/nomail.scss";


export default function NoMail() {

  return (

    <div di="nomailPage">
      <Navbar />
      <main id="nomail-main">
        <h2>找回密碼<br/>請前往您的E-mail確認</h2>
        <div id="nomail-content-box">
          <img src="./images/p4-papers-1.png" alt=""/>
            <div className="nomail-e-content">
              <p>有一封驗證信已寄到（使用者Email）<br/>如未收到請檢查您Email中的垃圾信件
                <br/>如未收到，請您聯絡客服 service@mail.com，謝謝。</p>

              </div>
            </div>

          </main>
          {/* 背景插圖 */}
          <figure class="nomail-img01">
            <img src="./images/small_paper-4.svg" alt=""/>
          </figure>
          <figure class="nomail-img02">
            <img src="./images/flowers-1.png" alt=""/>
          </figure>
          <figure class="nomail-img03">
            <img src="./images/postmark-1.png" alt=""/>
          </figure>

          <figure class="nomail-img04">
            <img src="./images/small_paper-3.png" alt=""/>
          </figure>
          <figure class="nomail-img05">
            <img src="./images/flowers-3.png" alt=""/>
          </figure>

          <footer className="nomailPage-footer"> 
            <div>
              <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
            </div>
          </footer>




        </div>

        );
}