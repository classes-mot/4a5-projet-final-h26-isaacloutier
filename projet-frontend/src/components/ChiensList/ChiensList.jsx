
import "./GameList.css";
import GameCard from "../GameCard/GameCard"
import { chiens } from "../../data/chiens.js"
import { categories } from "../../data/categories.js"

function ChiensList({title}) {
    let categorie;
    if (title = "En vedette") {
        categorie = "enVedette"
    }

    return (
        <div className="frameCL">
            <h1>{title}</h1>
            <ul>
                {chiens.filter(chiens => categories[title].includes).map((chien) => (
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