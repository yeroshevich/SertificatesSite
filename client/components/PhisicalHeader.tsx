import HeaderTemplate, {HeaderTemplateProps} from "./HeaderTemplate";

const PhisicalHeader = ({uridicalLink,logo,links}:HeaderTemplateProps) => {
    return (
        <>
            <HeaderTemplate
                uridicalLink={uridicalLink}
                logo={logo}
                links={links}
            />
        </>
    );
};

export default PhisicalHeader;