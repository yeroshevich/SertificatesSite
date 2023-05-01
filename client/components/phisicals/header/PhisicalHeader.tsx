import HeaderTemplate, {HeaderTemplateProps} from "../../header/HeaderTemplate";

const PhisicalHeader = ({uridicalLink,logo,links}:HeaderTemplateProps) => {
    return (
        <>
            <HeaderTemplate
                uridicalLink={uridicalLink}
                logo={logo}
                links={links}
                style={{backgroundColor:'white'}}
            />
        </>
    );
};

export default PhisicalHeader;