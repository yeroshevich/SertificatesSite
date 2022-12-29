import React, {useEffect, useState} from 'react';
import TitleConstruct from "./TitleConstruct";

interface StringsConstructProps{
    strings:Array<string>,
    saveStrings:(changed:Array<string>)=>void,
    legend?:string
}

const StringsConstruct = ({strings,saveStrings,legend}:StringsConstructProps) => {
    const [changedRows,setChangedRows] = useState(strings)

    const handleSaveRow = (index:number,row:string)=>setChangedRows(changedRows.map((desc,i)=>i==index?row:desc))

    useEffect(()=>{
        saveStrings(changedRows)
    },[changedRows])

    return (
        <fieldset style={{marginInline:'15px',width:'100%'}} >
            <legend>{legend?legend:'Строки'}</legend>
            {
                changedRows.map((desc,index)=>
                    <TitleConstruct key={index} saveTitle={(change)=>handleSaveRow(index,change)} title={desc} legend={`${index+1}`}/>
                )
            }
        </fieldset>
    );
};

export default StringsConstruct;