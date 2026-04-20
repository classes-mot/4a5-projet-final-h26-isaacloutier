import "./Footer.css";

function Footer() {

    return (
        <div className="frameF">
            <div className="bloc">
                <h1>Coordonnées</h1>
                <p>475 Boulevard de l'avenir</p>
                <p>Laval, Québec H7N 5H9</p>
            </div>  
            <div className="bloc">
                <h1>Nous rejoindre</h1>
                <a href="tel:+14509756100">(450) 975 6100</a>
                <a href="mailto:sve@cmontmorency.qc.ca">sve@cmontmorency.qc.ca</a>
            </div>  
            <div className="bloc">
                <h1>À propos</h1>
                <a href="#">Nos bénévoles</a>
                <a href="#">Politiques</a>
                <a href="#">Dons</a>
            </div> 
        </div>
    );
}


// ajouter au moin un code pour tester ???
export default Footer;

