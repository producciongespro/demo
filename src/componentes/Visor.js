import React from 'react';

function Visor (props) {
    

    return ( 
             <div className="col-4">
             <ul>
              {
                    props.datosFiltrados !== null && 
                       (
                        props.nombreCient ?
                        (
                            props.datosFiltrados.map((item,i)=>(
                                <li className="lista_terminos" onClick={props.handleMostrarDetalle}  id={item.id}  key={item.id}> {item.t_gnabere } </li>
                            ))
                        ):
                        (
                            props.datosFiltrados.map((item,i)=>(
                                <li className="lista_terminos" onClick={props.handleMostrarDetalle}  id={item.id}  key={item.id}> {item.t_espanol } </li>
                            ))
                        )
                       )
                    
              }
          </ul>
             </div>
    )
}

export default Visor;