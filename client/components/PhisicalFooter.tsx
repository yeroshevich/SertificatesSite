import styles from '../styles/PhisicalsFooter.module.scss'
import {Link} from "../interfaces/Link";
import {Logo} from "../interfaces/Logo";

export interface PhisicalFooterProps{
    links:Array<Link>,
    logo:Logo
}

const PhisicalFooter = ({links,logo}:PhisicalFooterProps) => {
    return (
       <div className={styles.footerBlock}>
           <footer className={styles.footer}>
               <div className={styles.logoBlock}>
                   <img src={logo.url} alt={logo.alt} title={logo.title} className={styles.logo}/>
                   <div className={styles.socialLinks}>
                       {
                           links.map((link,index)=>
                               <div  key={index}>
                               <a href={link.link}><img src={link.title} alt=""/></a>
                           </div>)
                       }
                   </div>
               </div>
               <div className={styles.underFooter}>
                   ООО «Евроторг» УНП: 101168731 (зарегистрировано решением МГИК от 07.09.2000 г. №1030). Головной офис: 220019 г. Минск, ул. Монтажников, 2
               </div>
           </footer>
       </div>
    );
};

export default PhisicalFooter;