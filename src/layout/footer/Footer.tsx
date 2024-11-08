import "./Footer.scss"
import enmad from "../../assets/icons/enamd.png"
import email from "../../assets/icons/mail.svg"
import telegram from "../../assets/icons/telegram.svg"
import discord from "../../assets/icons/discord.svg"
import instagram from "../../assets/icons/instagram.svg"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <span className="enamd">
                    نماد اعتماد الکترونیکی
                    <img src={enmad} alt="E NAMAD" />
                </span>

                <span className="licence">© تمام حقوق برای محفوظ است.
                </span>

                <div className="social-media">
                    <a href="">
                        <img src={email} alt="Email" />
                    </a>
                    <a href="">
                        <img src={telegram} alt="telegram" />
                    </a>
                    <a href="">
                        <img src={discord} alt="discord" />
                    </a>
                    <a href="">
                        <img src={instagram} alt="instagram" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;