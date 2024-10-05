import s from './Footer.module.css'
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className={s.footer}>
            <section>
                <section>
                    <ul>
                        <li>Anima 2024©</li>
                        <li>{t("owner")} - NeckitWin</li>
                        <li><a href="https://github.com/NeckitWin/Anima" target="_blank">{t("github")}</a></li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li><a href="https://discord.gg/d8kCF4c3t5" target="_blank">{t("support")}</a></li>
                        <li><a href="https://discord.com/oauth2/authorize?client_id=1187466797885182141" target="_blank">{t("addbot")}</a></li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li><a href="./privacy.txt" target="_blank">{t("privacy")}</a></li>
                        <li><a href="./tos.txt" target="_blank">{t("tos")}</a></li>
                    </ul>
                </section>
            </section>
        </footer>
    )
}

export default Footer;