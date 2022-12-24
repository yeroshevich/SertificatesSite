import styles from '../styles/PhisicalsFooter.module.scss'
import {Link} from "../interfaces/Link";

export interface PhisicalFooterProps{
    links:Array<Link>
}

const PhisicalFooter = ({links}:PhisicalFooterProps) => {
    return (
       <div className={styles.footerBlock}>
           <footer className={styles.footer}>
               <div className={styles.logoBlock}>
                   <img src="./logo-black 1.png" alt="" className={styles.logo}/>
                   <div className={styles.socialLinks}>
                       {
                           links.map((link,index)=>
                               <div  key={index}>
                               <a href={link.link}>{link.title}</a>
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