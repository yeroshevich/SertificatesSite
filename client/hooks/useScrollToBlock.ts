import SmoothScroll from "smooth-scroll";

export default function useScrollToBlock(){
    const scrollToBlock = (block:string)=>{
        const htmlElement = document.querySelector(block)
        if(htmlElement)
        {
            const elementRect = htmlElement.getBoundingClientRect()
            const windowRect = document.body.getBoundingClientRect()
            window.scrollTo({
                top:elementRect.top - windowRect.top-140
            })
        }
    }
    return scrollToBlock
}