import React, {ChangeEvent, useEffect, useState} from 'react';
import {ContentPair} from "../../../interfaces/ContentPair";
import styles from './ContentConstructor.module.scss'
import useInput from "../../../hooks/useInput";
import {generateId} from "../../../app/CONSTS";

interface ContentConstructorProps{
    content:Array<ContentPair>,
    saveContent:(changeContent:Array<ContentPair>)=>void
}

const ContentConstructor = ({content,saveContent}:ContentConstructorProps) => {
    const [changedContent,setChangedContent] = useState(content)



    const handleSave = (index:number,content:ContentPair)=>{
        setChangedContent(changedContent.map((item,i)=>{
            if(i==index)
                return content
            return item
        }))
    }
    useEffect(()=>{
        saveContent(changedContent)
    },[changedContent])

    return (
        <div>
            <div className={styles.contents}>
                {
                    content.map((item,index)=><Content savePair={handleSave} index={index} content={item} key={index}/>)
                }
            </div>
        </div>
    );
};
interface ContentProps{
    content:ContentPair,
    savePair:(index:number,content:ContentPair)=>void,
    index:number
}
const Content = ({content,savePair,index}:ContentProps)=>{

    const title = useInput(content.title)
    const description = useInput(content.description)
    const underDescription = useInput(content.underDescription)

    useEffect(()=>{
        savePair(index,{underDescription:underDescription.value,description:description.value,title:title.value,id:generateId()})
    },[title.value,description.value,underDescription.value])
    return (
        <>
            <div className={styles.content}>
                <div>
                    <div>title:</div> <textarea value={title.value} onChange={title.onChange}/>
                </div>
                <div>
                    <div>description:</div> <textarea value={description.value} onChange={description.onChange}/>
                </div>
                <div>
                    <div>underdescription:</div> <textarea value={underDescription.value} onChange={underDescription.onChange}/>
                </div>
            </div>
        </>
    )
}

export default ContentConstructor;