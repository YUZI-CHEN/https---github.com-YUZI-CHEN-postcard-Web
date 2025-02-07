
import Navbar from "../Navbar";
import "./scss/verify.scss";
import VerifyImg from "./Component/VerifyImg";

export default function Verify() {

  return (
    <div id="verifyPage">
      <Navbar />
      <main id="verify-main">
        <h2>找回密碼<br />為了您帳號的安全，請進行驗證</h2>
        <div id="verify-code">
          <img src="./images/p4-papers-1.png" alt="" />
          <p className="verify-remind">請注意英文大小寫</p>
          {/* 驗證碼圖片 */}
          <VerifyImg />

        </div>

      </main>
      {/* 背景插圖 */}
      {/* 左下角角落 */}
      <figure className="verify-img01">
        <img src="./images/small_paper-4.svg" alt="" />
      </figure>
      {/* 左下角花 */}
      <figure className="verify-img02">
        <img src="./images/flowers-1.png" alt="" />
      </figure>
      {/* 驗證碼區的印章 */}
      <figure className="verify-img03">
        <img src="./images/postmark-1.png" alt="" />
      </figure>
      {/* 左中的紙  */}
      <figure className="verify-img04">
        <img src="./images/small_paper-3.png" alt="" />
      </figure>
      {/* 左邊的花  */}
      <figure className="verify-img05">
        <img src="./images/flowers-3.png" alt="" />
      </figure>

      <footer className="verifyPage-footer">
        <div>
          <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
        </div>
      </footer>

    </div>
  )
}