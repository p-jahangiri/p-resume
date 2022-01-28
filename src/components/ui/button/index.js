import React, { useState, useEffect } from 'react';
import './button.scss';
const Button = () => {

    const [themeState, setThemeState] = useState(false);
    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') {
            setThemeState(true);
        }
    }, []);

    useEffect(() => {
        if (themeState) {
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }, [themeState]);

    return (
        <>
            <div className="toggleWrapper">
                <input
                    type="checkbox"
                    className="dn"
                    id="dn"
                    onChange={() => setThemeState(!themeState)}
                />
                <label for="dn" className="toggle">
                    <span className="toggle__handler">
                        <span className="crater crater--1"></span>
                        <span className="crater crater--2"></span>
                        <span className="crater crater--3"></span>
                    </span>
                    <span className="star star--1"></span>
                    <span className="star star--2"></span>
                    <span className="star star--3"></span>
                    <span className="star star--4"></span>
                    <span className="star star--5"></span>
                    <span className="star star--6"></span>
                </label>
            </div>
            {/* </div> */}
        </>
    );
};

export default Button;
