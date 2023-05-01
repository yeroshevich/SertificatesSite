import useInput from "../../../hooks/useInput";

interface TitleConstructProps{
    saveTitle:(change:string)=>void,
    title:string,
    legend?:string
}

const TitleConstruct = ({saveTitle,title,legend}:TitleConstructProps) => {
    const titleInput = useInput(title)

    const handleSaveTitle = ()=>{
        saveTitle(titleInput.value)
    }

    return (
        <fieldset>
            <legend>{legend?legend:'Title'}</legend>
            <textarea style={{width:'40%',height:'100px',resize:'none'}} onChange={titleInput.onChange} value={titleInput.value} onBlur={handleSaveTitle}/>
        </fieldset>
    );
};

export default TitleConstruct;