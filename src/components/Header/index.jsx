import s from './Header.module.css'
import {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';

function Header() {
    const serverBotLink = `https://discord.gg/d8kCF4c3t5`;
    const addBotLink = `https://discord.com/oauth2/authorize?client_id=1187466797885182141`;

    const { t, i18n } = useTranslation();

    const langList = [
        {
            img: `https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg`,
            lang: `English`,
            code: `en`
        },
        {
            img: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2560px-Flag_of_Poland.svg.png`,
            lang: `Polski`,
            code: `pl`
        },
        {
            img: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png`,
            lang: `Українська`,
            code: `uk`
        },
        {
            img: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png`,
            lang: `Русский`,
            code: `ru`
        }
    ]

    const [display, setDisplay] = useState(false);
    const [lang, setLang] = useState(`en`);
    const [imgLang, setImgLang] = useState(`https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg`);
    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang, i18n]);

    function showLocalList() {
        if (display) setDisplay(false);
        else setDisplay(true);

        i18n.changeLanguage(lang);
    }

    function setTranslate(lang) {
        const data = langList.find(item => item.lang===lang);
        setLang(data.code);
        setImgLang(data.img);
        setDisplay(false);
    }

    return (
            <header className={s.menu}>
                <nav>
                    <ul>
                        <li><img className={s.logo} src="./logo.png" alt="logo"/></li>
                        <li><a href="">{t('docs')}</a></li>
                        <li><a href={serverBotLink} target="_blank">{t('support')}</a></li>
                    </ul>
                    <ul>
                        <li><img className={s.local} onClick={showLocalList} src={imgLang} alt="language"/>
                            <ul className={display ? s.localList : s.localListHidden}>
                                {langList.map((item, index) => (
                                    <li key={index} onClick={()=>setTranslate(item.lang)}><img src={item.img} alt="language"/><p>{item.lang}</p></li>
                                ))}
                            </ul>
                        </li>
                        <li className={s.layoutAdd}><a className={s.addButton} href={addBotLink} target="_blank">{t("addbot")}</a></li>
                        <li><a href={addBotLink} target="_blank"><img className={s.animaPicture} src="./anima.gif" alt="profile picture"/></a></li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header;