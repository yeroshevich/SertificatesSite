import React, {ChangeEvent} from 'react';
import styles from "../../styles/constructorComponents/HeadConstructor.module.scss";
import {PlusOutlined} from "@ant-design/icons";
import {HeadLink} from "../../interfaces/HeadLink";

interface HeadConstructorProps{
    head:Array<HeadLink>,
    addLink:()=>void
}

const HeadConstructor = ({head,addLink}:HeadConstructorProps) => {

    const handleHeadInputChangHref = (e:ChangeEvent<HTMLInputElement>,item:HeadLink)=>{
        item.href = e.target.value
    }
    const handleHeadInputChangRel = (e:ChangeEvent<HTMLInputElement>,item:HeadLink)=>{
        item.href = e.target.value
    }
    const handleAddHeadLink = ()=>{
        addLink()
    }


    return (
        <fieldset className={styles.head}>
            <legend>
                <div>Head (макс 10)</div>
                <div className={styles.icon} onClick={handleAddHeadLink}><PlusOutlined /></div>
            </legend>
            {
                head.map((link,index)=>
                    <div key={index} className={styles.inputs} >
                        <div>
                            <span>href:</span><input  type="text" onChange={(e)=>handleHeadInputChangHref(e,link)}/><br/>
                        </div>
                        <div>
                            <span>rel:</span><input type="text" onChange={(e)=>handleHeadInputChangRel(e,link)}/>
                        </div>
                    </div>
                )
            }
        </fieldset>
    );
};

export default HeadConstructor;