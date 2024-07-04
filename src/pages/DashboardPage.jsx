import { useTranslation } from "react-i18next";
import startOfMonth from "date-fns/startOfMonth";
import { BrowserView, MobileView } from 'react-device-detect';


function DashboardPage() {

    const { t } = useTranslation();

    const users = ['Mario', 'fsdf'];

    const date = new Date();

    return (
        <>
            <BrowserView>
                <ul>
                    <li>{ t('dashboard.title') }</li>
                    <li>{ t('dashboard.users', {count: users.length} )}</li>

                    <li>{ t('currency', { val: 2000 }) }</li>

                    <li>{t("dates.fullDate", { date })}</li>
                    <li>{t("dates.localisedDate", { date })}</li>
                    <li>{t("dates.weekDay", { date })}</li>
                    <li>{t("dates.postedOn", { date: startOfMonth(date) })}</li>
                </ul>
            </BrowserView>

            <MobileView>
                <table className="table">
                    <tbody>
                    <tr><td>{ t('dashboard.title') }</td></tr>
                    <tr><td>{ t('dashboard.users', {count: users.length} )}</td></tr>

                    <tr><td>{ t('currency', { val: 2000 }) }</td></tr>

                    <tr><td>{t("dates.fullDate", { date })}</td></tr>
                    <tr><td>{t("dates.localisedDate", { date })}</td></tr>
                    <tr><td>{t("dates.weekDay", { date })}</td></tr>
                    <tr><td>{t("dates.postedOn", { date: startOfMonth(date) })}</td></tr>
                    </tbody>
                </table>
            </MobileView>
        </>
    )
}

export default DashboardPage;