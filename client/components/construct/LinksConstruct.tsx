import {Link} from "../../interfaces/Link";
import {ChangeEvent, ReactNode, useEffect, useState} from "react";

interface LinksConstructProps{
    links:Array<Link>,
    saveLinks:(changedLinks:Array<Link>)=>void,
}

const LinksConstruct = ({links,saveLinks}:LinksConstructProps) => {
    const [changedLinks,setChangedLinks] = useState(links)

    const handleLinkChange = (e:ChangeEvent<HTMLInputElement>,link:Link)=>{
        setChangedLinks(changedLinks.map(x=>{
            if(x.htmlElementId==link.htmlElementId)
                return {...x,title:e.target.value}
            return x
        }))
    }

    useEffect(()=>{
        saveLinks(changedLinks)
    },[changedLinks])

    return (
            <fieldset>
                <legend>Навигационная панель шапки</legend>
                <div                         style={{display:'flex'}}>
                    {
                        changedLinks.map((link,index)=>
                            <div key={index} style={{marginInline:'15px',margin:'auto'}}>
                                <input type="text" onChange={(e)=>handleLinkChange(e,link)} value={link.title}/>
                                {
                                    link.htmlElementId && <div>Ссылается на блок с id {link.htmlElementId}</div>
                                }
                            </div>)
                     }
                </div>
            </fieldset>

);
};

export default LinksConstruct;