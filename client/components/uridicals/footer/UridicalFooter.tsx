import styles from './UridicalsFooter.module.scss'
import {Logo} from "../../../interfaces/Logo";
import {Link} from "../../../interfaces/Link";

interface UridicalFooterProps{
    footerLogo:Logo,
    footerLinks:Array<Link>,
    footerLink:Link,
    phones:Array<string>
}

const UridicalFooter = ({footerLogo,footerLink,footerLinks,phones}:UridicalFooterProps) => {
    return (
        <footer className={styles.footer}>
           <div className={styles.footerFlex}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <a href={footerLogo.href}><img src={footerLogo.url} alt={footerLogo.alt} title={footerLogo.title}/></a>
                    </div>
                    <div className={styles.contacts}>
                        <div>
                            <div className={styles.footerLink}><a href={footerLink.link}>{footerLink.title}</a></div>
                            {
                                phones.map((phone,index)=><div key={index}>{phone}</div>)
                            }
                        </div>
                        <div>
                            {footerLinks.map((link,index)=><div key={index}><a href={link.link}><img src={link.title} alt=""/></a></div>)}
                        </div>
                    </div>
                </div>
                <form className={styles.createContract}>
                    <div>
                        <header>Заключить договор</header>
                        <div className={styles.inputBlock}>
                            <input placeholder={'Почта'} type="text"/>
                            <span className={styles.icon}><img src="./Arrow 1.png" alt=""/></span>
                        </div>
                    </div>

                </form>
           </div>
            <footer>            000 «Евроторг» УНП: 101168731 (зарегистрировано решением МГИК от 07.09.2000 г. №1030). Головной офис: 220019 г. Минск, ул. Монтажников, 2
            </footer>
        </footer>
    );
};

export default UridicalFooter;