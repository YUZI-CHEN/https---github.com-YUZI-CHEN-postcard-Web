
import Navbar from "../Navbar";
import "./scss/apply.scss";
import { Link } from "react-router-dom";
import AddressSelector from "./Component/AddressSelector";
export default function Apply() {
  
  
  
    return (
      <div id="applyPage">
        <Navbar />
        <main id="apply-Main">
          <article className="apply-article">加入郵你真好大家庭!!!</article>
          <form action="" method="post" name="member-form" id="member-form" title="會員申請資料">
            <div className="apply-box">
              <label htmlFor="username">真實姓名:</label>
              <input type="text" name="username" id="username" title="真實姓名" placeholder="請輸入真實姓名" required autoFocus />
            </div>
            <div className="apply-box">
              <label htmlFor="email">*E-mail:</label>
              <input type="email" name="email" id="email" title="Email" placeholder="請輸入email" required autoFocus />

            </div>
            <div className="apply-box">
              <label htmlFor="password">密碼:</label>
              <input type="password" name="password" id="password" title="重設密碼" placeholder="請輸入6~8混合英文數字" required
                autoFocus />
              <small>請使用8~20位的英文大小寫、數字、特殊符號等2種以上組合</small>

            </div>
            <div className="apply-box">
              <label htmlFor="re-password">再次確認密碼:</label>
              <input type="password" name="password" id="re-password" title="再次確認密碼" placeholder="請輸入6~8混合英文數字" required
                autoFocus />
              <small>請使用8~20位的英文大小寫、數字、特殊符號等2種以上組合</small>
            </div>

            {/* 地址下拉選單 */}
           <AddressSelector/>

            <div className="box_check">
              <input type="checkbox" name="agree" id="agree" title="我同意" value="我同意" />
              <label htmlFor="agree">我同意郵你真好使用協議</label>

            </div>

            <div className="a-btn">
              <Link to="/Finish"> <button type="submit" value="Submit" name="submit-btn" id="submit-btn" >送出</button>
              </Link>
             
            </div>

          </form>

        </main>
        {/* 背景插圖  */}
        <figure className="a-img01">
          <img src="./images/small_paper-3.png" alt="" />
        </figure>
        <figure className="a-img02">
          <img src="./images/flowers-1.png" alt="flower" />
        </figure>
        <figure className="a-img03">
          <img src="./images/flowers-3.png" alt="flower" />
        </figure>
        <figure className="a-img04">
          <img src="./images/BIRD.png" alt="flower" />
        </figure>


        <footer className="applyPage-footer">
          <div>
            <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
          </div>
        </footer>


      </div>
    )
  }