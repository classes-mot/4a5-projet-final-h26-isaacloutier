import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
    const [t] = useTranslation()
    return (
        <div className="frameF">
            <div className="bloc">
                <h1>{t("footer.coordonnes")}</h1>
                <p>475 Boulevard de l'avenir</p>
                <p>Laval, Québec H7N 5H9</p>
            </div>  
            <div className="bloc">
                <h1>{t("footer.nousJoindre")}</h1>
                <a href="tel:+14509756100">(450) 975 6100</a>
                <a href="mailto:sve@cmontmorency.qc.ca">sve@cmontmorency.qc.ca</a>
            </div>  
            <div className="bloc">
                <h1>{t("footer.aPropos")}</h1>
                <a href="#">{t("footer.nosBenevoles")}</a>
                <a href="#">{t("footer.politiques")}</a>
                <a href="#">{t("footer.dons")}v</a>
            </div> 
        </div>
    );
}


// ajouter au moin un code pour tester ???
export default Footer;

