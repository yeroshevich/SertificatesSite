import React, {useState} from 'react';
import styles from "./HeadConstructor.module.scss";
import {HeadLink} from "../../../interfaces/HeadLink";
import PlusIcon from "../../icons/plus/PlusIcon";
import useInput from "../../../hooks/useInput";
import MinusIcon from "../../icons/minus/MinusIcon";
import {generateId} from "../../../app/CONSTS";

interface HeadConstructorProps{
    head:Array<HeadLink>,
    saveHead:(change:Array<HeadLink>)=>void
}

const HeadConstructor = ({head,saveHead}:HeadConstructorProps) => {


    const [changedHead,setChangedHead] = useState(head)

    const handleRemoveLink = (index:number,link:HeadLink)=>{

        setChangedHead(changedHead.filter(x=>x.id!=index))
    }

    const handleAddHeadLink = ()=>{
        if(changedHead.length<10)
            setChangedHead([...changedHead,{rel:' ',href:' ',id:generateId()}])
    }
    const handleSaveLink = (index:number,link:HeadLink)=>{
        setChangedHead(changedHead.map(item=>{
            if(item.id == index)
                return {...link,id:generateId()}
            return item
        }))
    }
    const handleAcceptChanges = ()=>{
        saveHead(changedHead)
    }
    return (
        <fieldset className={styles.head} onBlur={handleAcceptChanges}>
            <legend>
                <div>Head (макс 10)</div>
                <PlusIcon onClick={handleAddHeadLink}/>
            </legend>
            {
                changedHead.map((link,index)=>
                   <Head key={link.id}  link={link} saveLink={handleSaveLink} removeLink={handleRemoveLink}/>
                )
            }
        </fieldset>
    );
};
interface HeadProps{
    link:HeadLink,
    saveLink:(index:number,link:HeadLink)=>void,
    removeLink:(index:number,link:HeadLink)=>void
}
const Head = ({link,saveLink,removeLink}:HeadProps)=>{

    const href = useInput(link.href)
    const rel = useInput(link.rel)

    const handleRemoveClick = ()=>{
        removeLink(link.id,link)
    }
    const handleSaveClick = ()=>{
        if(href.value && rel.value)
            saveLink(link.id,{href:href.value,rel:rel.value,id:generateId()})
    }
    return (
        <div className={styles.inputs} onBlur={handleSaveClick}>
            <div>
                <span>href:</span><input  type="text" onChange={href.onChange} value={href.value}/>
            </div>
            <div>
                <span>rel:</span><input type="text" onChange={rel.onChange} value={rel.value}/>
            </div>
            <div>
                <MinusIcon onClick={handleRemoveClick}/>
            </div>
        </div>
    )
}

export default HeadConstructor;