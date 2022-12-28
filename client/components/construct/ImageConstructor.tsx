import {Image} from "../../interfaces/Image";
import React, {useEffect, useState} from "react";
import useInput from "../../hooks/useInput";
import styles from "../../styles/constructorComponents/LogoCosntructor.module.scss";
import ChooseImage from "./ChooseImage";

interface ImageConstructorProps{
    image:Image,
    imageChange:(img:Image)=>void,
    legend:string
}
const ImageConstructor = ({imageChange,image,legend}:ImageConstructorProps) => {
    const [imageUrl,setImageUrl] = useState<string>(image.url)

    const alt = useInput(image.alt)
    const title = useInput(image.title)

    const handleImageChoose = (url:string)=>{
        setImageUrl(url)
    }

    useEffect(()=>{
        imageChange({url:imageUrl,alt:alt.value,title:title.value})
    },[imageUrl,alt.value,title.value])

    return (
        <fieldset>
            <legend>{legend}</legend>
            <div className={styles.image}>
                <img src={image.url} alt="img"/>
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

export default ImageConstructor;