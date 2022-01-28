import React from 'react';
import s from './footer.module.scss';
import Icon from '../../../assets/svg/user-graduate-solid.svg';
import IconLan from '../../../assets/svg/lan.g.svg';
const Footer = () => {
    return (
        <>
            <div className={s.container}>
                <div>
                    <div className={s.head}>
                        <img src={Icon} alt="icon" />
                        <h3>EDUCATION</h3>
                    </div>
                    <hr />
                    <p>
                        Payam Noor UNIVERSITY
                        <br /> ' Bachelor'
                        <br /> Agricultural Engineering <br />
                        2014 to 2018
                    </p>
                </div>
                <div>
                    <div className={s.head}>
                        <img src={IconLan} alt="icon" />
                        <h3>SPECIAL SKILLS</h3>
                    </div>

                    <hr />
                    <p>
                        Languages : <br /> Persian ,<br /> English,
                        <br /> Turkish -
                    </p>
                </div>
            </div>
           
        </>
    );
};

export default Footer;
