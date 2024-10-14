/// importaion de react et du fichier produit
import React from "react";
import {product} from "../Product";

// definition du composant images
const Img =() =>{
    return <img src={product.image} alt="mes tomates"/>
}
// exportation du composant
export default Img;