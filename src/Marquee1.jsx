import React from "react";
import { motion } from "framer-motion";

const Marquee1 = () => {
    const items = [
        { text: "*********寄送明信片到", src1: "./images/logo-taipei.png", src2: "./images/logo-new_taipei.png" },
        { text: "*********收到了來自", src1: "./images/logo-Taoyuan.png", src2: "./images/logo-Taichung.png", text1: "的明信片" },
        { text: "*********寄送明信片到", src1: "./images/logo-taipei.png", src2: "./images/logo-new_taipei.png" },
        { text: "*********寄送明信片到", src1: "./images/logo-taipei.png", src2: "./images/logo-new_taipei.png" },
        { text: "*********收到了來自", src1: "./images/logo-Taoyuan.png", src2: "./images/logo-Taichung.png", text1: "的明信片" },
        { text: "*********寄送明信片到", src1: "./images/logo-taipei.png", src2: "./images/logo-new_taipei.png" },
        { text: "*********寄送明信片到", src1: "./images/logo-taipei.png", src2: "./images/logo-new_taipei.png" },
        { text: "*********收到了來自", src1: "./images/logo-Taoyuan.png", src2: "./images/logo-Taichung.png", text1: "的明信片" },
        { text: "*********寄送明信片到", src1: "./images/logo-taipei.png", src2: "./images/logo-new_taipei.png" },
        // 添加更多項目...
    ];

    const itemHeight = 70; // 單個項目的高度
    const itemCount = items.length;
    const containerHeight = 700; // 容器高度
    const totalHeight = itemHeight * itemCount * 2; // 包括重複內容的總高度

    return (
        <div style={{ overflow: "hidden", height: `${containerHeight}px`, position: "relative", width: "100%", letterSpacing: "6px" }}>
            <motion.div
                /* 由下往上 */
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                }}
                animate={{ y: [0, -totalHeight / 2] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15, // 動畫持續時間
                    ease: "linear",
                }}

                /* 由上往下 */
                // style={{
                //     display: "flex",
                //     flexDirection: "column",
                //     position: "absolute",
                // }}
                // animate={{ y: [`-${totalHeight / 2}px`, "0px"] }}
                // transition={{
                //     repeat: Infinity,
                //     repeatType: "loop",
                //     duration: 10, // 動畫持續時間
                //     ease: "linear",
                // }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: `${itemHeight}px`,
                        }}
                    >
                        <img className="citylogo" src={item.src1} alt="" />
                        <p className="citytext">{item.text}</p>
                        <img className="citylogo" src={item.src2} alt="" />
                        <p className="citytext">{item.text1}</p>
                    </div>
                ))}
                {/* 重複添加一次內容 */}
                {items.map((item, index) => (
                    <div
                        key={`repeat-${index}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: `${itemHeight}px`,
                        }}
                    >
                        <img className="citylogo" src={item.src1} alt="" />
                        <p className="citytext">{item.text}</p>
                        <img className="citylogo" src={item.src2} alt="" />
                        <p className="citytext">{item.text1}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee1;