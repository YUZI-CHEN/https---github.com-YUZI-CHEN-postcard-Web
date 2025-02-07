import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "../pc/css/post.css"

import TaiwanPageTwo from "./component/TaiwanPageTwo";
export default function Post(){



return(
  <div id="postPage">
  <Navbar/>
  {/* 主要內容區 */}
     <main id="postPage-main">
      <aside>
        <div id="postPage-sidebar">
          {/* 寄件區  */}
          <div className="postPage-sidebar-item01 button-grow-shadow ">
            <img src="./images/btn-3.svg" alt=""/>
            <Link to="/Post"><h2>寄件區</h2></Link>
          </div>
         {/* 紀錄區 */}
          <div className="postPage-sidebar-item02 button-grow-shadow ">
            <img src="./images/btn-3.svg" alt=""/>
            <Link to="/ReceiveRecord"> <h2>紀錄區</h2>
            </Link>
           
          </div>
        </div>


      </aside>


      {/* 內容區  */}
      <div id="postPage-post-box">
        <img src="./images/p2-papers-1.jpg" alt=""/>
        {/* 地區、收件、寄件 */}
        <div id="postPage-p-content">
          <div className="p01">
            <img src="./images/p01.svg" alt=""/>
            <img src="./images/P01-2.svg" alt=""/>
            <div className="p-box">
              <p>台北市</p>
            </div>
          </div>
          <div className="p02">
            <img src="./images/P02.svg" alt=""/>
            <img src="./images/P02-2.svg" alt=""/>
            <div className="p-box">
              <p>27封</p>
            </div>
          </div>

          <div className="p03">
            <img src="./images/P03.svg" alt=""/>
            <img src="./images/P03-2.svg" alt=""/>
            <div className="p-box">
              <p>13封</p>
            </div>
          </div>

        </div>
        {/* 頭像、id  */}

        <div className="postPage-photo-frame">
          <img src="./images/stamp-2.png" alt=""/>
        </div>
        <div className="postPage-photo">
          <img src="./images/girl.png" alt=""/>
        </div>

        <div className="postPage-person-id">
          <p>@hsuannnn111</p>
        </div>

        <div className="postPage-send-postcard">
          <p>對方最近寄出的明信片</p>
          <div className="pc01">
            <div className="pc01-frame">
              <img src="./images/stamp-2.png" alt=""/>
            </div>
            <div className="pc01-photo">
              <img src="./images/postcard-taipei101-sunrise-1.jpg" alt=""/>
            </div>
          </div>

          <div className="pc02">
            <div className="pc02-frame">
              <img src="./images/stamp-2.png" alt=""/>
            </div>
            <div className="pc02-photo"> <img src="./images/postcard-beach.jpg" alt=""/></div>
          </div>

        </div>

        <div className="postPage-about-other">
          <img src="./images/關於對方區塊.svg" alt=""/>
          <div className="postPage-other-title">
            <img src="./images/主題區塊.svg" alt=""/>
          </div>
          <p>你好~我很喜歡拍照，所以喜歡蒐集有動物以及古蹟、建築物的明信片!
            我會懷著期待的心情等待的，期待收到漂亮的明信片!</p>
         
        </div>
        <div className="postPage-other-content">
          <div className="postPage-other-id">
            <h2>明信片 ID : #123abcd4</h2>
            <small>不要忘記把明信片ID寫在明信片上喔!!!</small>
          </div>
          <div className="postPage-other-name">
            <p>配對者 : 辛郝蕾</p>
            <p>地址:</p>
            <p>100025 台北市中正區濟南路一段 321號 </p>
          
          </div>

        </div>
      </div>


<TaiwanPageTwo/>


     
        </main>

{/* 裝飾區  */}
   {/* 白花  */}
    <figure className="postPage-img01">
      <img src="./images/flowers-2.png" alt=""/>
    </figure>
 {/* APPROVED印章  */}
    <figure className="postPage-img02"><img src="./images/postmark-2.svg" alt=""/>
    </figure>
    {/* 多張郵票  */}
    <figure className="postPage-img03"><img src="./images/stamps.svg" alt=""/>
    </figure>
     {/* UPDATE印章 */}
    <figure className="postPage-img04"><img src="./images/postmark-3.png" alt=""/>
    </figure>
    {/* rule-box左下的紙  */}
    <figure className="postPage-img05"><img src="./images/small_paper-3.png" alt=""/>
    </figure>

  {/* 頁尾區 */}
    <footer className="postPage-footer">
      <div>
        <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
      </div>
    </footer>
  </div>
      


   


)

}