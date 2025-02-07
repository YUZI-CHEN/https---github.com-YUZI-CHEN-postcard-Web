import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./scss/memberIndex.scss";
export default function MemberIndex() {
  return (
    <div id="memberIndex">
      <Navbar />
      <main id="member-box">
        <div id="member-content">
          <div id="m-center-box">
            <section className="m-input">
              <div className="decorate">
                <img src="./images/postmark-1.png" alt="" />
                <p>見字如晤，展信舒顏</p>
              </div>
              <div className="m-input-box">
                <label htmlFor="name">使用者帳號/E-mail:</label>
                <input type="text" id="name" name="name" required minLength="6" maxLength="30" size="10" />
                <label htmlFor="password">密碼:</label>
                <input type="text" id="password" name="password" required minLength="6" maxLength="20" size="10" />
                <Link to="/PasswordR" className="link-passwordR">忘記密碼</Link>
              </div>

              <div className="m-btn-in">
                <Link to="/MemberData"><button>登入</button></Link>


              </div>

            </section>
            <section className="m-link-box">
              <div className="bg">
                <img src="./images/p4-papers-1.png" alt="bg" />
                <div className="p-link">
                  <p>還沒有註冊嗎?</p>
                  <p className="custom-link-p">點選
                    <Link className="link-apply" to="/Apply">這裡</Link>
                    進行註冊</p>

                </div>
                <p className="member-small-p">註冊/登入及代表您同意遵守郵你真好使用協議</p>

              </div>

            </section>


          </div>
        </div>


      </main>
      {/* 背景插圖  */}
      {/* 花 */}
      <figure className="m-img01">
        <img src="./images/flowers.png" alt="" />
      </figure>
      {/* 左上膠帶  */}
      <figure className="m-img02">
        <img src="./images/tape-1.png" alt="" />
      </figure>
      {/* 右下膠帶  */}
      <figure className="m-img02-1">
        <img src="./images/tape-1.png" alt="" />
      </figure>
      {/* 左下蠟印 */}
      <figure className="m-img03">
        <img src="./images/postmask-7.png" alt="" />
      </figure>
      {/* 右上飛機  */}
      <figure className="m-img04">
        <img src="./images/small_paper-2.png" alt="" />
      </figure>
      {/* 右上印章  */}
      <figure className="m-img05">
        <img src="./images/postmark-3.png" alt="" />
      </figure>
      {/* 左下印章 */}
      <figure className="m-img06">
        <img src="./images/postmark-1.png" alt="" />
      </figure>

      <footer className="memberIndex-footer">
      <div>
        <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
      </div>

      </footer>
    </div>

  )
}