import PhisicalHeader from "../../components/PhisicalHeader";
import {PhisicalPageProps} from "../Phisicals";
import PhisicalFooter from "../../components/PhisicalFooter";
import BuyingSertificateForm from "../../components/buingSertificate/BuyingSertificateForm";
import {serverRequest} from "../../app/http/serverRequest";
import Head from "next/head";
import defaultConfiguration from "../../app/defaultConfiguration";


export async function getStaticProps(){

  try{
      const config = (await serverRequest.get('/configs/buyingpage')).data
      config.config = JSON.parse(config.config)

      return {
          props:{
              config
          }
      }
  }catch (e){
      return {
          redirect:{
              destination:'/404'
          }
      }
  }

}

const BuyingSertificatesPage = ({config}:PhisicalPageProps) => {
    return (
        <>
            <Head>
                {config.config.head.map((link,index)=> <link key={index} rel={link.rel} href={link.href}/>)}
                <title>{config.config.title}</title>
            </Head>
            <div>
                <PhisicalHeader
                    uridicalLink={config.config.uridicalLink}
                    logo={config.config.logo}
                    links={config.config.links}
                />
                <BuyingSertificateForm/>
                <PhisicalFooter
                    links={config.config.footerLinks}
                    logo={config.config.footerLogo}
                />
            </div>
        </>
    );
};

export default BuyingSertificatesPage;