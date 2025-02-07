
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function VerifyImg() {
  const canvasRef = useRef(null);
  const [captchaText, setCaptchaText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  // 隨機生成驗證碼
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newCaptcha = "";
    for (let i = 0; i < 6; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(newCaptcha);
    drawCaptcha(newCaptcha);
  };

  // 繪製驗證碼
  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 清空畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = randomColor(200, 255);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 繪製文字
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const fontSize = randomNum(30, 50);
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = randomColor(50, 150);
      const x = (i + 1) * (canvas.width / (text.length + 1));
      const y = randomNum(fontSize, canvas.height - 10);
      const angle = randomNum(-30, 30);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    // 繪製干擾線
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = randomColor(100, 200);
      ctx.beginPath();
      ctx.moveTo(randomNum(0, canvas.width), randomNum(0, canvas.height));
      ctx.lineTo(randomNum(0, canvas.width), randomNum(0, canvas.height));
      ctx.stroke();
    }

    // 繪製干擾點
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(randomNum(0, canvas.width), randomNum(0, canvas.height), 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  // 隨機生成顏色
  const randomColor = (min, max) => {
    const r = randomNum(min, max);
    const g = randomNum(min, max);
    const b = randomNum(min, max);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // 隨機生成數字
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // 處理驗證按鈕點擊
  const handleVerify = () => {
    if (inputValue === captchaText) {
      setResultMessage("驗證成功！");
    } else {
      setResultMessage("驗證失敗，請再試一次。");
    }
  };
  useEffect(() => {
    generateCaptcha()
  }, []);
  return (
    <div> <div id="verify-input_block">
    {/* 產生驗證碼區 */}
    <canvas id='auth-code' ref={canvasRef}></canvas>
    <div className="verify-input-code">
      {/* 換圖按鈕  */}
      <button id='reBtn' onClick={generateCaptcha}><img src="./images/change_icon.svg" alt="換圖按鈕" /></button>
      {/* 輸入驗證碼區塊  */}
      <input id="validText" type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="請輸入驗證碼" />
     
    </div>
    <span id="validResult" style={{ color: resultMessage === "驗證成功！" ? "green" : "red", marginTop: "10px" }}>{resultMessage}</span>

  </div>
 <Link to="/NoMail_R"><button  type="submit" name="sure-btn" id="verify-sure-btn" value="確定"
  onClick={handleVerify}>確定</button></Link> 
  
  
  </div>
   


  );
}