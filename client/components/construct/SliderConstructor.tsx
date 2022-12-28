import {Image} from "../../interfaces/Image";
import ImageConstructor from "./ImageConstructor";
import {useEffect, useState} from "react";

interface SliderConstructorProps{
    carousel:Array<Image>,
    saveCarousel:(change:Array<Image>)=>void,
    legend:string,
    addImage:()=>void
}

const SliderConstructor = ({carousel,saveCarousel,legend,addImage}:SliderConstructorProps) => {
    const [changeSlider,setChangeSlider] = useState<Array<Image>>(carousel)

    const handleChangeImage = (change:Image)=>{

    }

    useEffect(()=>{
        saveCarousel(changeSlider)
    },[changeSlider])

    return (
        <fieldset>
            <legend>{legend}</legend>
            <div style={{paddingInline:'15px'}}>
                {
                    carousel.map((image,index)=>
                        <ImageConstructor key={index} image={image} imageChange={handleChangeImage} legend={`image ${index}`}/>
                    )
                }
            </div>
        </fieldset>
    );
};

export default SliderConstructor;