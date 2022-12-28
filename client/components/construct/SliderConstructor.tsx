import {Image} from "../../interfaces/Image";
import ImageConstructor from "./ImageConstructor";
import {useEffect, useState} from "react";
import PlusIcon from "../PlusIcon";

interface SliderConstructorProps{
    carousel:Array<Image>,
    saveCarousel:(change:Array<Image>)=>void,
    legend:string,

}

const SliderConstructor = ({carousel,saveCarousel,legend}:SliderConstructorProps) => {
    const [changeSlider,setChangeSlider] = useState<Array<Image>>(carousel)

    const handleChangeImage = (index:number,change:Image)=>{
        setChangeSlider(changeSlider.map((img,i)=>{
            if(i == index)
                return change
            return img
        }))
    }
    const handleAddImage = ()=>{
        setChangeSlider([...changeSlider,{url:' ',title:' ',alt:' '}])
    }

    useEffect(()=>{
        saveCarousel(changeSlider)
    },[changeSlider])

    return (
        <fieldset>
            <legend  style={{display:'flex',justifyContent:'space-between',width:'100%'}}>{legend} <PlusIcon onClick={handleAddImage}/></legend>
            <div style={{paddingInline:'15px'}}>
                {
                    changeSlider.map((image,index)=>
                        <ImageConstructor key={index} image={image} imageChange={()=>{}} index={index} imageChangeByIndex={handleChangeImage} legend={`image ${index}`}/>
                    )
                }
            </div>
        </fieldset>
    );
};

export default SliderConstructor;