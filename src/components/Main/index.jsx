import s from './Main.module.css'
import {useTranslation} from "react-i18next";

const Main = () => {
    const {t} = useTranslation();
    return (
        <main>
            <div className={s.mainLayout}>
                <section className={`${s.header_section} ${s.section}`}>
                    <section>
                    <h1 className={s.title}>{t("h1first")} <span
                        className={s.gradient_text}>{t("h1second")}</span><br/>{t("h1third")} <span
                        className={s.gradient_text}>{t("h1fourth")}</span> {t("h1fifth")}</h1>
                        <a className={s.button} href="https://discord.com/oauth2/authorize?client_id=1187466797885182141">Add to Discord</a>
                    </section>
                    <img src="./anima.png" alt="Anima"/>
                </section>
                <section className={`${s.section} ${s.section_description}`}>
                    <img className={s.gear} src="./gear.png" alt=""/>
                    <section>
                        <p className={`${s.description}`}><b>Anima</b> - {t("botdesc")}</p>
                        <br/>
                        <p><span className={s.gradient_text}>Language localization:</span> English, Polish, Ukrainian, Russian</p>
                    </section>
                </section>
            </div>
        </main>
    )
}

export default Main;