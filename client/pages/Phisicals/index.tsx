import PhisicalHeader from "../../components/PhisicalHeader";

const PhisicalsPage = () => {
    return (
        <>
            <PhisicalHeader
                logo={{url:'./logo_green.png',alt:'evrooptLogo',title:'logo'}}
                links={[
                    {link:'#',title:'Чем полезен'},
                    {link:'#',title:'Клиенты'},
                    {link:'#',title:'Вопрос-ответ'}
                ]}
            />

        </>
    );
};

export default PhisicalsPage;