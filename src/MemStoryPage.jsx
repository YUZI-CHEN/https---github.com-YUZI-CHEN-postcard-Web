import '../scss/MemStoryPage.scss'
import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

function MemStoryPage() {
    return (
        <div id="MemStoryPage">
            <Navbar />

            {/* 內容區 */}
            <main id="MemStoryPage-main">
                <div id='MSP-Section1'>
                    <Link to="/MemStory"><img id='backToMemStory' src="./images/arrow.png" alt="" /></Link>
                    <img id='MSP-Section1-img1' src="./images/p1-papers-5.jpg" alt="" />
                    <img id='MSP-Section1-img2' src="./images/p1-papers-4.jpg" alt="" />
                    <img id='MSP-Section1-img3' src="./images/postcard-islands.jpg" alt="" />
                    <img id='MSP-Section1-img4' src="./images/flowers-2.png" alt="" />
                    <img id='MSP-Section1-img5' src="./images/postmark-3.png" alt="" />
                    <img id='MSP-Section1-img6' src="./images/postmark-2.png" alt="" />
                    <img id='MSP-Section1-img7' src="./images/paper_clip-red.png" alt="" />
                    <img id='MSP-Section1-img8' src="./images/paper_clip-yellow.png" alt="" />
                    <img id='MSP-Section1-img9' src="./images/stamp-9.png" alt="" />
                    <img id='MSP-Section1-img10' src="./images/stamp-8.png" alt="" />
                    <img id='MSP-Section1-img11' src="./images/stamp-7.png" alt="" />
                </div>

                <div id='MSP-Section2'>
                    <img id='MSP-Section2-img1' src="./images/p1-papers-6.png" alt="" />
                    <img id='MSP-Section2-img2' src="./images/postmark-1.png" alt="" />
                    <p id='MSP-Section2-p'>首先，在這個科技發達的時代，好久沒拿起筆寫<br />下當下的感受，透過郵你真好這個平台讓我作為<br />一個喜歡閱讀、寫日記，並且熱愛收集明信片的<br />人，這個平台給了我一個實現夢想的場所。每一<br />張來自不同地方的明信片都讓我感受到不一樣的<br />文化和情感，這不僅豐富了我的收藏，也讓我對<br />這個世界充滿了更多的好奇和期待。<br /><br />在這裡，我遇到了許多真誠友好的朋友，我們彼<br />此分享故事，分享著旅行的足跡，甚至一起討論<br />一些生活中的小事。這些溫暖的交流讓我覺得，<br />無論距離多遠，心與心的連接總是那麼真實和美<br />好。</p>
                </div>
            </main>

            <footer>
                <p>copyright &copy; 2025  郵你真好(此為學生練習作品，無商業用途)</p>
            </footer>
        </div>
    )
}

export default MemStoryPage