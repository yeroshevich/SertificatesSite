import React, { useEffect, useState} from 'react';
import {Logo} from "../../interfaces/Logo";
import styles from '../../styles/constructorComponents/LogoCosntructor.module.scss'
import ChooseImage from "./ChooseImage";
import useInput from "../../hooks/useInput";

interface LogoConstructorProps{
    logo:Logo,
    logoChange:(logo:Logo)=>void,
    legend?:string
}

const LogoConstructor = ({logo,logoChange,legend}:LogoConstructorProps) => {

    const [imageUrl,setImageUrl] = useState<string>(logo.url)

    const alt = useInput(logo.alt)
    const title = useInput(logo.title)

    const handleImageChoose = (url:string)=>{
        setImageUrl(url)
    }

    useEffect(()=>{
        logoChange({url:imageUrl,alt:alt.value,title:title.value,href:logo.href})
    },[imageUrl,alt.value,title.value])

    return (
        <fieldset>
            <legend>{legend ? legend : 'Logo'}</legend>
            <div className={styles.image}>
                <img src={logo.url} alt="logo" width={220} height={50}/>
                <ChooseImage onChoose={handleImageChoose}/>
            </div>
            <div className={styles.inputs}>
                <div>
                    alt:<input type="text" value={alt.value} onChange={alt.onChange}/>
                </div>
                <div>
                    title:<input type="text" value={title.value} onChange={title.onChange}/>
                </div>
            </div>
        </fieldset>
    );
};

export default LogoConstructor;