import '../scss/MainPage.scss'
import React from 'react'
import { Link } from 'react-router-dom' //npm i react-router-dom
import { motion } from "framer-motion"; //npm i framer-motion
import TextReveal from './TextReveal';
import Marquee1 from './Marquee1';
import Navbar from './Navbar';
import Marquee2 from './Marquee2';

function MainPage() {

  return (
    <div id="MainPage">
      <Navbar />

      {/* 內容區 */}
      <main>
        {/* 第一層 */}
        <div id='layer1'>
          <img className='stamp' src="./images/stamp-4.png" alt="" />
          <div className='layer1-text'>
            <TextReveal /> {/* <p className='text-TW'>郵你真好</p> */}
            <p className='text-EN'>Send a postcard to convey warmth.</p>
          </div>
          <img className='stamp' src="./images/stamp-3.png" alt="" />
          {/* 裝飾郵戳 */}
          <img className="stampLeft" src="./images/postmark-1.png" alt="左郵戳" />
          <img className="stampRight" src="./images/postmark-1.png" alt="右郵戳" />
        </div>

        {/* 第二層 */}
        <div id='layer2'>
          <img className='layer2-1' src="./images/stamp-5.png" alt="" />
          <div className='layer2-2'>
            <img src="./images/btn-1.jpg" alt="" />
            <div className='layer2-text'>
              <p id='text1'>希望能在忙碌的生活中</p>
              <p id='text2'>找到與你共頻的人</p>
              <p id='text3'>一起分享生活中的美好</p>
            </div>
          </div>
          <img className='layer2-3' src="./images/stamp-6.jpg" alt="" />

        </div>

        {/* 第三層 */}
        <div id='layer3'>
          <div className='layer3-2' style={{ width: "33%" }}>
            <img style={{ width: "100%", height: "100%" }} src="./images/layer3-2.png" alt="" />
            <Link to="/MemberIndex"><p className='text6'>想要獲得更完整的體驗<br />可以先到會員中心<br />進行登入/註冊喔!</p></Link>
          </div>

          <div className='layer3-3'>
            <div id='bar1'>
              <img id='bar1-1' src="./images/Rectangle_205.png" alt="" />
              <p id='text3-3-1'>即</p>
              <img id='bar1-2' src="./images/Rectangle_206.png" alt="" />
              <p id='text3-3-2'>時</p>
              <img id='bar1-3' src="./images/Rectangle_207.png" alt="" />
              <p id='text3-3-3'>動</p>
              <img id='bar1-4' src="./images/Rectangle_208.png" alt="" />
              <p id='text3-3-4'>態</p>
              <img id='layer3-3-img1' src="./images/Rectangle-191.png" alt="" />
              <img id='layer3-3-img2' src="./images/postmark-3.png" alt="" />
              <div id='dontai1'><Marquee1 />
                {/* <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p>*********收到了來自</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p>的明信片</p>
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p>*********收到了來自</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p>的明信片</p>
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p>*********收到了來自</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p>的明信片</p>
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p>*********收到了來自</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p>的明信片</p>
                </div> */}
              </div>
            </div>
          </div>

          <div className='layer3-4'>
            <div id="bar2">
              <img id='bar2-1' src="./images/Rectangle_209.png" alt="" />
              <p id='text3-4-1'>歡</p>
              <img id='bar2-2' src="./images/Rectangle_210.png" alt="" />
              <p id='text3-4-2'>迎</p>
              <img id='bar2-3' src="./images/Rectangle_211.png" alt="" />
              <p id='text3-4-3'>新</p>
              <img id='bar2-4' src="./images/Rectangle_212.png" alt="" />
              <p id='text3-4-4'>用</p>
              <img id='bar2-5' src="./images/Rectangle_213.png" alt="" />
              <p id='text3-4-5'>戶</p>
              <img id='layer3-4-img1' src="./images/Rectangle-191.png" alt="" />
            <img id='layer3-4-img2' src="./images/postmark-3.png" alt="" />
            </div>
            
            <div id='dontai2'><Marquee2 />
              {/* <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div> */}
            </div>

          </div>
        </div>

        {/* 第四層 */}
        <div id='layer4'>
          <div className='layer4-1'>
            <img id='layer4-1-img1' src="./images/p1-picture-1.jpg" alt="" />
            <img id='layer4-1-img2' src="./images/postmark-2.png" alt="" />
            <p id='layer4-1-text1'>這裡可以看到其他用戶分享的故事與心得哦！</p>
            <Link to="/MemStory"><p id='layer4-1-text2'>點這裡閱讀用戶故事</p></Link>
            <motion.div
              style={{ width: "10px", height: "100%", position: "absolute", top: "5px", left: "100%", zIndex: "999" }}
              animate={{
                x: ["0%", "50%", "100%", "-50%", "0%",], // 從左到右，再返回初始位置
              }}
              transition={{
                duration: 1, // 完整動畫的持續時間（秒）
                repeat: Infinity, // 無限循環
                ease: "linear", // 線性過渡
              }}>
              <img id='layer4-1-img3' src="./images/Vector.png" alt="" />
              <img id='layer4-1-img4' src="./images/Vector.png" alt="" />
            </motion.div>

          </div>
          <div className='layer4-2'>
            <img id='layer4-2-img1' src="./images/p1-papers-3.jpg" alt="" />
            <img id='layer4-2-img2' src="./images/postcard-snowman.jpg" alt="" />
            <img id='layer4-2-img3' src="./images/postmask-6.png" alt="" />
            <img id='layer4-2-img4' src="./images/postmask-4.png" alt="" />
            <h3 id='layer4-2-text1'>主題活動</h3>
            <p id='layer4-2-text2'>節日快樂！</p>
            <p id='layer4-2-text3'>很高興與你交換這張明信片，願<br />它帶來一份溫暖的祝福，讓這個<br />節日充滿快樂與驚喜！祝你平安<br />喜樂！</p>
          </div>
        </div>
      </main>

      <footer>
        <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
      </footer>
    </div>
  )
}

export default MainPage
