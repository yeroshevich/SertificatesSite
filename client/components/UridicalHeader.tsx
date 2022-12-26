import HeaderTemplate, {HeaderTemplateProps} from "./HeaderTemplate";


interface UridicalHeaderProps{
    templateProps:HeaderTemplateProps,
}

const UridicalHeader = ({templateProps}:UridicalHeaderProps) => {
    return (
        <>
            <HeaderTemplate
                logo={templateProps.logo}
                links={templateProps.links}
                uridicalLink={templateProps.uridicalLink}>
            </HeaderTemplate>
        </>
    );
};

export default UridicalHeader;