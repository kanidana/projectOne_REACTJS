// importaion de react et du fichier produit
import React from "react";
import {product} from "../Product";

// definition du composant description
const Description = ()=>{
    return <p>{product.description}</p>
}
console.log({Description});

// exportation du composant

export default Description;