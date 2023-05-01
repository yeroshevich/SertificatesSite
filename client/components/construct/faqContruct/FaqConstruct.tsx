import {FAQ} from "../../../interfaces/FAQ";
import {ChangeEvent, useEffect, useState} from "react";
import ImageConstructor from "../imageConstruct/ImageConstructor";
import {Image} from "../../../interfaces/Image";
import useInput from "../../../hooks/useInput";
import MinusIcon from "../../icons/minus/MinusIcon";
import PlusIcon from "../../icons/plus/PlusIcon";
import {generateId} from "../../../app/CONSTS";

interface FaqConstructProps{
    faqs:Array<FAQ>,
    saveFaqs:(changed:Array<FAQ>)=>void
}

const FaqConstruct = ({faqs,saveFaqs}:FaqConstructProps) => {

    const [changedFaqs,setChangedFaqs] = useState(faqs)


    const handleAddFaq = ()=>{
        setChangedFaqs([...changedFaqs,{id:generateId(),title:'',content:'',img:{id:generateId(),url:'',title:'',alt:''}}])
    }
    const handleRemoveFaq = (faq:FAQ)=>{
        setChangedFaqs(changedFaqs.filter(x=>x.id!=faq.id))
    }
    const handleSaveFaqs = (faq:FAQ)=>{
        setChangedFaqs(changedFaqs.map(x=>x.id==faq.id?faq:x))
    }

    useEffect(()=>{
        saveFaqs(changedFaqs)
    },[changedFaqs])

    return (
        <fieldset style={{width:'100%'}}>
            <legend style={{display:'flex',justifyContent:'space-between',width:'100%'}}><div>FAQs</div> <PlusIcon onClick={handleAddFaq}/></legend>
            <div style={{paddingTop:'15px'}}>
                {
                    changedFaqs.map(faq=>
                   <SingleFaq key={faq.id} faq={faq} removeFaq={handleRemoveFaq} saveFaq={handleSaveFaqs}/>)
                }
            </div>
        </fieldset>
    );
};
interface SingleFaqProps{
    faq:FAQ,
    saveFaq:(faq:FAQ)=>void,
    removeFaq:(faq:FAQ)=>void,
}
const SingleFaq = ({faq,saveFaq,removeFaq}:SingleFaqProps)=>{

    const title = useInput(faq.title)
    const content = useInput(faq.content)
    const [img,setImg] = useState<Image>(faq.img)

    const handleSaveFaq = ()=>{
        saveFaq({img:{...img,id:generateId()},id:faq.id,title:title.value,content:content.value})
    }
    const handleChangeImage = (img:Image)=>{
        setImg(img)
    }
    const handleRemoveFaq = ()=>{
        removeFaq(faq)
    }

    return (
        <div key={faq.id} style={{width:'100%',display:'flex',justifyContent:'space-between'}} onBlur={handleSaveFaq}>
            <ImageConstructor image={img} imageChange={handleChangeImage}  legend={''}/>
            <textarea style={{width:'200px',resize:'none'}} value={title.value} onChange={title.onChange}/>
            <textarea style={{width:'40%',resize:'none'}}  value={content.value} onChange={content.onChange}></textarea>
            <div><MinusIcon onClick={handleRemoveFaq}/></div>
        </div>
    )
}

export default FaqConstruct;