
import "./ChiensList.css";
import GameCard from "../ChiensCard/ChiensCard"
import { chiens } from "../../data/chiens.js"
import { categories } from "../../data/categories.js"

function ChiensList({title}) {
    let categorie;
    if (title == "En vedette") {
        categorie = "enVedette"
    }
    console.log("title:", title);
    console.log("categories:", categories);
    console.log("categories[title]:", categories[title]);
    return (
        <div className="frameCL">
            <h1>{title}</h1>
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