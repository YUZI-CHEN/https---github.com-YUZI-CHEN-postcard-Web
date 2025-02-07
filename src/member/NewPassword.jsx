import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./scss/newpassword.scss";
export default function NewPassword(){


  return(
    <div id="newpasswordPage">
      <Navbar/>
      <main id="newpassword-main">
    <article>哈囉!歡迎回來(使用者帳號)</article>
    <form action="" method="post" name="c_password-form" id="newpassword-password-form" title="更改新密碼">

      <div className="newpassword-new-box">
        <label htmlFor="new-password">新密碼:</label>
        <input type="new-password" name="new-password" id="new-password" title="新密碼" placeholder="請輸入6~8混合英文數字" required
          autoFocus/>
        <small>請使用8~20位的英文大小寫、數字、特殊符號等2種以上組合</small>

      </div>
      <div className="newpassword-new-box">
        <label htmlFor="ren-password">再次輸入新密碼:</label>
        <input type="ren-password" name="ren-password" id="newpassword-ren-password" title="再次確認密碼" placeholder="請輸入6~8混合英文數字"
          required autoFocus/>
        <small>請使用8~20位的英文大小寫、數字、特殊符號等2種以上組合</small>
      </div>



      <div className="newpassword-c-btn">
    <Link to="/MemberIndex"> <input type="submit" name="submit-cbtn" id="newpassword-submit-cbtn" value="密碼變更"/></Link>
        

      </div>

    </form>
  </main>
  {/* 背景插圖  */}
  <figure className="newpassword-img01">
    <img src="./images/small_paper-4.svg" alt=""/>
  </figure>
  <figure className="newpassword-img02">
    <img src="./images/small_paper-3.png" alt=""/>
  </figure>
  <figure className="newpassword-img03">
    <img src="./images/flowers-1.png" alt=""/>
  </figure>




  <footer>
    <div className="newpasswordPage-footer">
      <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
    </div>
  </footer>

    </div>

  )
}