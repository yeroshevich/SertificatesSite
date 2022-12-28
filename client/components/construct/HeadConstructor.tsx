import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from "../../styles/constructorComponents/HeadConstructor.module.scss";
import {HeadLink} from "../../interfaces/HeadLink";
import PlusIcon from "../PlusIcon";
import useInput from "../../hooks/useInput";
import MinusIcon from "../MinusIcon";
import {generateId} from "../../app/CONSTS";

interface HeadConstructorProps{
    head:Array<HeadLink>,
    saveHead:(change:Array<HeadLink>)=>void
}

const HeadConstructor = ({head,saveHead}:HeadConstructorProps) => {

    const [changedHead,setChangedHead] = useState(head.map(x=>{return{...x,id:generateId()}}))

    const handleRemoveLink = (index:number,link:HeadLink)=>{

        setChangedHead(changedHead.filter(x=>x.id!=index))
    }

    const handleAddHeadLink = ()=>{
        if(changedHead.length<10)
            setChangedHead([...changedHead,{rel:' ',href:' ',id:generateId()}])
    }
    const handleSaveLink = (index:number,link:HeadLink)=>{
        setChangedHead(changedHead.map((item,i)=>{
            if(i==index)
                return {...link,id:generateId()}
            return item
        }))
    }
    const handleAcceptChanges = ()=>{
        saveHead(changedHead)
    }
    return (
        <fieldset className={styles.head}>
            <legend>
                <div>Head (макс 10)</div>
                <PlusIcon onClick={handleAddHeadLink}/>
            </legend>
            {
                changedHead.map((link,index)=>
                    <Head key={link.id}  index={index} link={link} saveLink={handleSaveLink} removeLink={handleRemoveLink}/>
                )
            }
            <button onClick={handleAcceptChanges}>accept</button>
        </fieldset>
    );
};
interface HeadProps{
    link:HeadLink,
    saveLink:(index:number,link:HeadLink)=>void,
    index:number,
    removeLink:(index:number,link:HeadLink)=>void
}
const Head = ({link,saveLink,index,removeLink}:HeadProps)=>{

    const href = useInput(link.href)
    const rel = useInput(link.rel)

    const handleRemoveClick = ()=>{
        removeLink(link.id ?link.id:index,link)
    }

    useEffect(()=>{
        saveLink(index,{href:href.value,rel:rel.value})
    },[href.value,rel.value])

    return (
        <div className={styles.inputs} >
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