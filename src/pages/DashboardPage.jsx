import { useTranslation } from "react-i18next";
import startOfMonth from "date-fns/startOfMonth";

function DashboardPage() {

    const { t } = useTranslation();

    const users = ['Mario', 'fsdf'];

    const date = new Date();

    return (
        <>
            <h1>{ t('dashboard.title') }</h1>
            <h3>{ t('dashboard.users', {count: users.length} )}</h3>

            <h5>{ t('currency', { val: 2000 }) }</h5>

            <p>{t("dates.fullDate", { date })}</p>
			<p>{t("dates.localisedDate", { date })}</p>
			<p>{t("dates.weekDay", { date })}</p>
			<p>{t("dates.postedOn", { date: startOfMonth(date) })}</p>
        </>
    )
}

export default DashboardPage;