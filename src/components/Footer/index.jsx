import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <section>
                <section>
                    <ul>
                        <li>Anima 2024©</li>
                        <li>Bot Owner | Developer - NeckitWin</li>
                        <li><a href="https://github.com/NeckitWin/Anima" target="_blank">Github</a></li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li><a href="https://discord.gg/d8kCF4c3t5" target="_blank">Support Server</a></li>
                        <li><a href="https://discord.com/oauth2/authorize?client_id=1187466797885182141" target="_blank">Add Bot</a></li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li><a href="./privacy.txt" target="_blank">Privacy Policy</a></li>
                        <li><a href="./tos.txt" target="_blank">Terms of Service</a></li>
                    </ul>
                </section>
            </section>
        </footer>
    )
}

export default Footer;