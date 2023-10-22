import React, { useState, useEffect } from "react";
import './colorSwitch.scss'

const ColorSwitch2 = () => {

    const [mode1, setMode1] = useState(() => localStorage.getItem("mode1"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme1);
        return () => {
            window.removeEventListener("storage", setPreferedTheme1);
        };
    }, []);

    const setPreferedTheme1 = () => {
        const _mode1 = localStorage.getItem("mode1");
        if (_mode1) {
            setMode1(_mode1);
        } 
        else {
            setMode1("light1");
        }
    };

    useEffect(() => {
        if (mode1 === "theme-pink") {
            document.body.classList.add("theme-pink");
            document.body.classList.remove('theme-red', 'theme-green', 'theme-blue');
            localStorage.setItem("mode1", "theme-pink");
        } 
        else if (mode1 === "theme-green") {
            document.body.classList.add("theme-green");
            document.body.classList.remove('theme-red', 'theme-pink', 'theme-blue');
            localStorage.setItem("mode1", "theme-green");
        } 
        else if (mode1 === "theme-red") {
            document.body.classList.add("theme-red");
            document.body.classList.remove('theme-green', 'theme-pink', 'theme-blue');
            localStorage.setItem("mode1", "theme-red");
        } 
        else if (mode1 === "theme-blue") {
            document.body.classList.add("theme-blue");
            document.body.classList.remove('theme-green', 'theme-pink', 'theme-red');
            localStorage.setItem("mode1", "theme-blue");
        } 
       
    }, [mode1]);


    return(
        <div className='color-switch-container'>

            <div className={`${mode1 === 'theme-pink' ? "color color1 active" : "color color1"}`}
                onClick={() => setMode1('theme-pink')}>
                <div className="circle2"></div>
                <div className="circle1"></div>
            </div>

            <div className={`${mode1 === 'theme-green' ? "color color2 active" : "color color2"}`}
                onClick={() => setMode1('theme-green')}>
                <div className="circle2"></div>
                <div className="circle1"></div>
            </div>

            <div className={`${mode1 === 'theme-red' ? "color color3 active" : "color color3"}`}
                onClick={() => setMode1('theme-red')}>
                <div className="circle2"></div>
                <div className="circle1"></div>
            </div>

            <div className={`${mode1 === 'theme-blue' ? "color color4 active" : "color color4"}`}
                onClick={() => setMode1('theme-blue')}>
                <div className="circle2"></div>
                <div className="circle1"></div>
            </div>

        </div>
    ) 
};

export default ColorSwitch2;
