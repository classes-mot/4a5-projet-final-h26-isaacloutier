
import "./ChiensList.css";
import GameCard from "../ChiensCard/ChiensCard"
import { chiens } from "../../data/chiens.js"
import { categories } from "../../data/categories.js"
import { useTranslation } from "react-i18next";

function ChiensList({title}) {
    let categorie;
    let titleTraduit;
    const [t] = useTranslation()
    if (title == "En vedette") {
        categorie = "enVedette"
        titleTraduit = t("acceuil.enVedette");
    } else if (title == "Âge d'or") {
        categorie = "ageDOr"
        titleTraduit = t("acceuil.ageDOr");
    } else if (title == "Nouveautés") {
        categorie = "nouveautes"
        titleTraduit = t("acceuil.nouveautes");
    }
    return (
        <div className="frameCL">
            <h1>{titleTraduit}</h1>
            <ul>
                {chiens.filter(chien => categories[categorie].includes(chien.id)).map((chien) => (
                    <li key={chien.id}>
                        <GameCard
                            id={chien.id}
                            nom={chien.nom}
                            race={chien.race}
                            age={chien.age}
                            sexe={chien.sexe}
                            image={chien.image}
                        />
                    </li>
                ))}
            </ul>
        </div>
        

    );
}

export default ChiensList;