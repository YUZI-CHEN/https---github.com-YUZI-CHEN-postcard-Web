
import Navbar from "../Navbar";
import "./scss/finish.scss";
import AnimatedComponent from "./Component/AnimatedComponent";
export default function Finish() {
 

  return (
    <div id="finishPage">
      <Navbar />
      <main id="finishMain">
        <div id="finish-box">
          <img src="./images/p4-papers-1.png" alt="" className="finish-bg" />
          <div className="finish-content">
          

            <AnimatedComponent />

            <div className="f-content-p">
              <p>歡迎加入郵你真好!</p>
              <p>開始你的明信片旅遊吧!</p>
            </div>

          </div>
        </div>
        <div className="f-bottom-p">
          <p>點選任一空白處即可跳回首頁</p>
        </div>



      </main>
      {/* 裝飾背景 */}

      <figure className="fin-img01">
        <img src="./images/postmask-8.png" alt="" />
      </figure>

      <figure className="fin-img02">
        <img src="./images/small_paper-2.png" alt="" />
      </figure>

      <figure className="fin-img03">
        <img src="./images/paper_clip-red.png" alt="" />
      </figure>


      <footer className="finishPage-footer">
        <div>
          <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
        </div>

      </footer>
    </div >
  )
}