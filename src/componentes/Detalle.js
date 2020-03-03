import React from 'react';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;

function Detalle(props) {

    return (
        <div className="col-8"> 
       
            <div className="row">
               
               
            {
                props.info !== null &&
                (
                    <React.Fragment> 
                        <div className="col-6">
                         <span className="espanol">  {props.info.t_espanol}</span>                  
                        <div className="gnabere">
                        <span className="">
                             {props.info.t_gnabere}
                            </span> </div>
                        <p>
                            {
                                props.info.texto_gnabere
                            }
                        </p>
                        <p>
                            {
                                props.info.texto_espanol
                                
                            }
                        </p>
                        <span className="iconos"><i class="fa fa-thumbs-o-up">
                            {
                                props.info.me_gusta
                            }
                        </i></span>
                        <span className="iconos"><i class="fa fa-thumbs-o-down">
                            {
                                props.info.no_me_gusta
                            }
                        </i></span>
                        <span className="iconos"><i class="fa fa-eye">
                            {
                                props.info.vistas
                            }
                        </i></span> 
                        </div>
                        <div className="col-6">
                            <img id="" src={imgGenerales + props.info.url_imagen}  alt="Gallo" />
                        </div>
                    </React.Fragment>
                )
            }

            </div>
 
        </div>
    )
}

export default Detalle;