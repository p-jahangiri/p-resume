import React from 'react';
import './programer.scss';
import Button from '../button';
import s from './header.module.scss';
import Img from '../../../assets/images/photos.jpg';
import Icon from '../../../assets/svg/use.svg';

export const Header = () => {
    return (
        <>
            <div className={s.head}>
                <div className={s.left}>
                    <img src={Img} alt="photo" />
                    <h2>Parviz Jahangiri</h2>
                </div>
                <div className={s.right}>
                    <div>
                        <img src={Icon} alt="2" 
                        />
                        <h3>Profile</h3>
                        <hr />
                    </div>
                    <p>
                        Front End Developer focused on React & <br />
                        React Native with 5 years of experience <br />
                        in building and maintaining web applications. <br />
                        Proficient in JavaScript, TypeScript, <br />
                        React; plus few other related libraries. <br />
                    </p>
                    <h1>
                        <span>I</span>
                        <span>M</span>
                        <span>A</span>
                        <span>PROGRAMMER</span>
                    </h1>
                </div>
                    <Button />
            </div>
        </>
    );
};
