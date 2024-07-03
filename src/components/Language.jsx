import { useTranslation } from "react-i18next";

function Language() {

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (

        <div style={ { display: 'flex', justifyContent: 'center'} }>
            <button className={`btn me-3 ${ (i18n.language === 'it') ? 'btn-primary' : '' }`} onClick={ () => changeLanguage('it') }>IT</button>
            <button className={`btn me-3 ${ (i18n.language === 'en') ? 'btn-primary' : '' }`} onClick={ () => changeLanguage('en') }>EN</button>
        </div>
    )
}

export default Language