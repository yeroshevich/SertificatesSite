import React, {ChangeEvent, useEffect, useState} from 'react';
import {Link} from "../../../interfaces/Link";
import ChooseImage from "../chooseImage/ChooseImage";

interface FooterLinksProps{
    links:Array<Link>,
    saveFooterLinks:(changed:Array<Link>)=>void
}

const FooterLinksConstruct = ({links,saveFooterLinks}:FooterLinksProps) => {
    const [changedLinks,setChangedLinks] = useState(links)

    const handleOnChoose = (url:string,link:Link)=>{
        setChangedLinks(changedLinks.map(x=>{
            if(x.id==link.id)
                return {...x,title:url}
            return x
        }))
    }
    const handleOnChangeLink = (e:ChangeEvent<HTMLInputElement>,link:Link)=>{
        setChangedLinks(changedLinks.map(x=>{
            if(x.id==link.id)
                return {...x,link:e.target.value}
            return x
        }))
    }
    useEffect(()=>{
        saveFooterLinks(changedLinks)
    },[changedLinks])

    return (
        <fieldset>
            <legend>Навигационная панель подвала</legend>
            <div                         style={{display:'flex'}}>
                {
                    changedLinks.map(link=>
                        <div key={link.id} style={{marginInline:'15px',margin:'auto'}}>
                            <img src={link.title} alt=""/>
                            <ChooseImage onChoose={(url)=>handleOnChoose(url,link)}/>
                            <input type="text" value={link.link} onChange={(e)=>handleOnChangeLink(e,link)}/>
                        </div>)
                }
            </div>
        </fieldset>
    )
};

export default FooterLinksConstruct;