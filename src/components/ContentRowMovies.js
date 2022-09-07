import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total de Productos en la Base de Datos",
    valor: 0,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total de usuarios en la Base de Datos",
    valor: 0,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Total de Categorías en la Base de Datos",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;