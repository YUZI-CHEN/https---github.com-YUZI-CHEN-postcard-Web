import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
    const items = [
        {
            text: "*********寄送明信片到",
            src1: "./images/layer3/logo-taipei.png",
            src2: "./images/layer3/logo-new_taipei.png",
        },
        {
            text: "*********寄送明信片到",
            src1: "./images/layer3/logo-taipei.png",
            src2: "./images/layer3/logo-new_taipei.png",
        },
        {
            text: "*********收到了來自",
            src1: "./images/layer3/logo-Taoyuan.png",
            src2: "./images/layer3/logo-Taichung.png",
            text1: "的明信片",
        },
        {
            text: "*********收到了來自",
            src1: "./images/layer3/logo-Taoyuan.png",
            src2: "./images/layer3/logo-Taichung.png",
            text1: "的明信片",
        },
        {
            text: "*********寄送明信片到",
            src1: "./images/layer3/logo-taipei.png",
            src2: "./images/layer3/logo-new_taipei.png",
        },
        {
            text: "*********寄送明信片到",
            src1: "./images/layer3/logo-taipei.png",
            src2: "./images/layer3/logo-new_taipei.png",
        },
        {
            text: "*********收到了來自",
            src1: "./images/layer3/logo-Taoyuan.png",
            src2: "./images/layer3/logo-Taichung.png",
            text1: "的明信片",
        },
        {
            text: "*********寄送明信片到",
            src1: "./images/layer3/logo-taipei.png",
            src2: "./images/layer3/logo-new_taipei.png",
        },
        {
            text: "*********收到了來自",
            src1: "./images/layer3/logo-Taoyuan.png",
            src2: "./images/layer3/logo-Taichung.png",
            text1: "的明信片",
        },
        {
            text: "*********寄送明信片到",
            src1: "./images/layer3/logo-taipei.png",
            src2: "./images/layer3/logo-new_taipei.png",
        },
        {
            text: "*********寄送明信片到",
            src1: "./images/layer3/logo-taipei.png",
            src2: "./images/layer3/logo-new_taipei.png",
        },
        {
            text: "*********收到了來自",
            src1: "./images/layer3/logo-Taoyuan.png",
            src2: "./images/layer3/logo-Taichung.png",
            text1: "的明信片",
        },
        {
            text: "*********寄送明信片到",
            src1: "./images/layer3/logo-taipei.png",
            src2: "./images/layer3/logo-new_taipei.png",
        },
    ];

    return (
        <div style={{ overflow: "hidden", height: "700px", position: "relative", width: "100%", letterSpacing:"6px" }}>
            <motion.div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                }}
                animate={{ y: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10, // 調整動畫持續時間
                    ease: "linear",
                }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "70px", // 單個元素高度
                        }}
                    >
                        <img className="logo" src={item.src1} alt="" />
                        <p>{item.text}</p>
                        <img className="logo" src={item.src2} alt="" />
                        <p>{item.text1}</p>
                    </div>
                ))}
                {/* 為了平滑過渡，重複添加一次內容 */}
                {items.map((item, index) => (
                    <div
                        key={`repeat-${index}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "70px", // 單個元素高度
                        }}
                    >
                        <img className="logo" src={item.src1} alt="" />
                        <p>{item.text}</p>
                        <img className="logo" src={item.src2} alt="" />
                        <p>{item.text1}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;