
// importaion de react et du fichier produit
import React from "react";
import {product} from "../Product";

// definition
const Price =()=>{
    return <p>Prix: {product.prix} $</p>
}
// exportation
export default Price;