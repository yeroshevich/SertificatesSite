import HeaderTemplate from "./HeaderTemplate";

const UridicalHeader = () => {
    return (
        <>
            <HeaderTemplate
                logo={{url:'./logo-white 1.png',href:'#',alt:'logo_white',title:'evroopt logo'}}
                links={[
                    {title:'Как получить сертификат',link:'#'},
                    {title:'Памятка',link:'#'},
                ]}
                uridicalLink={{link:'#',title:'Для физических лиц'}}/>
        </>
    );
};

export default UridicalHeader;