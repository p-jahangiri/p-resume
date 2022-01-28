import React, { useState } from 'react';
import { dataSkills, dataHobbies, dataAgent } from '../../globalData/DataUser';

import s from './content.module.scss';

import A from '../../../assets/svg/toolbox-solid.svg';
import B from '../../../assets/svg/up.svg';
import C from '../../../assets/svg/address.svg';

const Content = () => {
    const [itemSkill, setItemSkill] = useState(dataSkills);
    const [itemHob, setItemHob] = useState(dataHobbies);
    const [itemAgent, setItemAgent] = useState(dataAgent);
    return (
        <div className={s.container}>
            <div >
                <div className={s.head}>
                    <img src={A} alt="icon" />
                    <h3>SKILL</h3>
                    <hr />
                </div>
                <div className={s.Skill}>
                    {itemSkill.map((q,index) => (
                        <p key={index}>{q.title}</p>
                    ))}
                </div>
            </div>
            <div>
                <div className={s.head}>
                    <img src={B} alt="icon" />
                    <h3>HOBBIES</h3>
                    <hr />
                </div>
                <div className={s.hobbies}>
                    {itemHob.map((item) => (
                        <div key={item.id}>
                            <img src={item.icon.q} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={s.cont}>
                <div className={s.head}>
                    <img src={C} alt="icon" />
                    <h3>CONTACT</h3>
                    <hr />
                </div>
                <div className={s.contact}>
                    {itemAgent.map((item) => (
                        <div key={item.id}>
                            <img src={item.icon.q} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={s.hr}>
                <hr/>
                <hr/>
                <hr />
            </div>
        </div>
    );
};

export default Content;
