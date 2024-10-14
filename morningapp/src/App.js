// importation des composants et du fichier css
import Description from './components/Description';
import Name from './components/Name';
import Price from './components/Price';
// importation de l'objet card issue de la bibliotheque react bootstrap
import { Card } from 'react-bootstrap';
// import './App.css';
// import './index.css'

// definition du composant racine app
const App = () =>{
    const prenom ="Myri";
return (
    // utilisation du style css pour styliser les elements
    <div style={{marginTop:"20px"}}> 
    {/* utilisation de react bootstrap pour l'utilisation des card et card.body */}
        <Card >
            <Card.Body style={{display:"flex", justifyContent:"space-evenly", alignItems: "center"}}>
                    <div>
                        <Card.Img style={{width:"30rem", borderRadius:"16px"}} src="https://mejorconsalud.as.com/wp-content/uploads/2022/08/tabla-tomate-cherry.jpg" alt="Product Image" />  
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Card.Title><Name/></Card.Title>
                        <Card.Text><Description/></Card.Text>
                        <Card.Text style={{fontWeight:"bold"}} ><Price/></Card.Text>
                    </div>
            </Card.Body>
        </Card>

        {/* Affichez un message en dessous de la carte qui dit "Bonjour, puis votre prénom", 
        ou si vous n'avez pas encore fourni votre prénom, affichez "Bonjour !" (Vous pouvez
        fournir votre nom en tant que variable au-dessus du composant racine)
        Affichez une image si le prénom est fourni. */}
        
        <div style={{marginTop:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div>
                <p style={{fontWeight:"bold", fontSize:"40px", fontStyle:"italic", marginRight:"40px"}}>Bonjour {prenom ? prenom : "!"}</p>
            </div>
            <div>
                {prenom && <img style={{width:"10rem"}} src="https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_1280.png" alt="Profile" />}
            </div>
        </div>
        
    </div>
);

}

// exportation du composant
export default App;
