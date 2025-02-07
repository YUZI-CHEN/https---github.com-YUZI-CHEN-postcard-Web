import Navbar from "../Navbar";
import "./scss/memberData.scss";

export default function MemberData() {
  return (
    <div id="memberData">
      <Navbar />
      <main id="memberData-main">
       {/* 左上區塊 */}
      <div id="md-about-box">
        <img src="./images/stamp-8.png" alt=""/>

        <div className="md-frame">
          <img src="./images/stamp-2.png" alt=""/>
        </div>
        <div className="md-person-pt">
          <img src="./images/boy.png" alt=""/>
        </div>
        <div className="md-person-id">
          <p>@hsuannnn111</p>
        </div>
       {/* 個人照片右邊內容區塊   */}
        <div id="md-p-content">
          <div className="md-p01">
            <img src="./images/p01.svg" alt=""/>
            <img src="./images/P01-2.svg" alt=""/>
            <div className="md-p-box">
              <p>台北市</p>
            </div>
          </div>
          <div className="md-p02">
            <img src="./images/P02.svg" alt=""/>
            <img src="./images/P02-2.svg" alt=""/>
            <div className="md-p-box">
              <p>27封</p>
            </div>
          </div>

          <div className="md-p03">
            <img src="./images/P03.svg" alt=""/>
            <img src="./images/P03-2.svg" alt=""/>
            <div className="md-p-box">
              <p>13封</p>
            </div>
          </div>

        </div>

      </div>
      {/* 最右邊關於我的內容區塊  */}
      <div id="md-about-content">
        <div className="item">
          <img src="./images/ap01.svg" alt=""/>
          <img src="./images/ap02.svg" alt=""/>
          <img src="./images/ap03.svg" alt=""/>
        </div>
        <div className="md-item-content">
          <p>哈囉~我今年20歲，是個學生，喜歡的明信片風格是建築物和風景!
            期待收到你的明信片!</p>

        </div>
      </div>

      <div id="md-postcard">
        <div className="md-postcard-p">
        <p>您最近寄出的明信片</p>
        </div>
      
        <div className="md-pc-img01">
          <div className="md-pc-frame">
            <img src="./images/stamp-2.png" alt=""/>
          </div>
          <div className="md-pcs">
            <img src="./images/postcard-sunset.jpg" alt=""/>

          </div>

        </div>

        <div className="md-pc-img02">
          <div className="md-pc-frame">
            <img src="./images/stamp-2.png" alt=""/>
          </div>
          <div className="md-pcs">
            <img src="./images/postcard-taipei101-sunrise-2.jpg" alt=""/>
          </div>
        </div>

        <div className="md-pc-img03">
          <div className="md-pc-frame">
            <img src="./images/stamp-2.png" alt=""/>
          </div>
          <div className="md-pcs">
            <img src="./images/postcard-1.jpg" alt=""/>
          </div>
        </div>

      </div>

    </main>
     {/* 背景插圖 */}
    <figure className="md-img01">
      <img src="./images/flowers-2.png" alt=""/>
    </figure>
    <figure className="md-img02">
      <img src="./images/postmask-5.png" alt=""/>
    </figure>
    <figure className="md-img03">
      <img src="./images/BIRD.png" alt=""/>
    </figure>
    <figure className="md-img04">
      <img src="./images/postmark-1.png" alt=""/>
    </figure>
    <figure className="md-img05">
      <img src="./images/flowers-3.png" alt=""/>
    </figure>

    <footer className="memberData-footer">
      <div>
        <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
      </div>

    </footer>


    </div>
  )

}